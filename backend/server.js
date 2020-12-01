require('dotenv').config();
var express = require('express');
var body_parser = require("body-parser");
const fs = require('fs');
const request = require("request");
var app = express().use(body_parser.json());
var http = require('http').createServer(app);
const mongoose = require("mongoose");
const fetch = require('isomorphic-unfetch');
const user = require("./models/userSchema");
const post = require("./models/postSchema");
const { findOne, update } = require('./models/userSchema');
const keyFilename = process.env.KEY_FILENAME; //replace this with api key file
const bucketName = `bubblespodcast.appspot.com`;
const projectId = 'bubblespodcast'
const { Storage } = require('@google-cloud/storage');
const { send } = require('process');
const { TIMEOUT } = require('dns');
const path = require('path');
const publicDomain = process.env.PUBLIC_DOMAIN;

//---------- Initializing Firebase Storage bucket ----------
const gcs = new Storage({
    projectId,
    keyFilename
});
const bucket = gcs.bucket(bucketName);

//---------- Mongo Atlas DB connection ----------
var mongourl = process.env.MONGO_URL;
async function connectToDB() {
    try {
        await mongoose.connect(mongourl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(">> Connected to Bubbles DB.");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
connectToDB();


//---------- Middleware ----------
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'build')));

//---------- Root Route for backend ----------
app.get('/api/', (req, res) => {
    res.send('Backend server is active')
})

//----------  Data Retrieval Requests ----------

app.get('/api/allposts/:username', async (req, res) => {
    const postArrayRes = await post.find({ username: req.params.username });
    res.send(postArrayRes.reverse() || 'No post found')
})

app.get('/api/profile/:username', async (req, res) => {
    try {
        const tempUser = await user.findOne({ username: req.params.username });
        if (!tempUser) res.send('Not found')
        let userData = await getFbProfileInfo(tempUser.psid);
        let { name, favouritesCount, postCount, username } = tempUser;
        let resp = { name, favouritesCount, postCount, username };
        resp.profilePicture = await userData.profile_pic;
        resp.name = await userData.first_name + ' ' + userData.last_name;
        res.send(resp || 'Not found')
    } catch (err) { console.log(err); }

})

app.get('/api/post/:username/:slug', async (req, res) => {
    let { username, slug } = req.params;
    const postRes = await post.findOne({ username, slug });
    res.send(postRes || 'Not found')
})

app.get('/api/setfavourite/:username/:count', async (req, res) => {
    try {
        await user.findOneAndUpdate({ username: req.params.username }, { favouritesCount: req.params.count })
        res.status(200)
    } catch (err) { console.log(err); }
})

app.get('/api/fav/:favArr', async (req, res) => {
    favArr = req.params.favArr.split(',');
    let queryFilter = favArr.map(user => { return { "username": user } });
    let postsArr = await post.find({ $or: queryFilter });
    res.send(postsArr.reverse() || 'No posts found')
});


//----------  MISC. ----------
http.listen(process.env.PORT || 5000, () => {
    console.log('>> Backend listening.');
});

//---------- ----------- MESSENGER API INTEGRATION ---------- ----------
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
app.post("/webhook", (req, res) => {
    // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === "page") {
        body.entry.forEach(function (entry) {
            let webhook_event = entry.messaging[0];
            let sender_psid = webhook_event.sender.id;
            // console.log("Sender ID: " + sender_psid);

            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });
        res.status(200).send("EVENT_RECEIVED");
    } else {
        res.sendStatus(404);
    }
});

// Accepts GET requests at the /webhook endpoint
app.get("/webhook", (req, res) => {
    /** UPDATE YOUR VERIFY TOKEN **/
    const VERIFY_TOKEN = process.env.PAGE_ACCESS_TOKEN;
    // Parse params from the webhook verification request
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode were sent
    if (mode && token) {
        // Check the mode and token sent are correct
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
            // Respond with 200 OK and challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});

async function handleMessage(sender_psid, received_message) {
    let response;

    // Checks if the message contains text
    if (received_message.text) {
        console.log(`Recieved text: "${received_message.text}" from ${sender_psid}`);
        // Create the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        let replyText = '';
        if (received_message.text.toLowerCase() == 'join') replyText = await signUp(sender_psid);
        else if (received_message.text.toLowerCase().split(' ')[0] == 'delete') replyText = await deletePost(sender_psid, received_message.text.toLowerCase().split(' ')[1]);
        else replyText = await frameMessengerReply(sender_psid, received_message.text);
        response = {
            text: replyText
        };
    } else if (received_message.attachments) {
        // Get the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;

        // console.log(attachment_url + ' received from ' + sender_psid);
        replyText = await replyToAttachment(sender_psid, attachment_url);
        response = {
            text: replyText
        };
    }

    // Send the response message
    callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
    console.log("ok");
    let response;
    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === "yes") {
        response = { text: "Thanks!" };
    } else if (payload === "no") {
        response = { text: "Oops, try sending another image." };
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
        recipient: {
            id: sender_psid
        },
        message: response
    };

    // Send the HTTP request to the Messenger Platform
    request(
        {
            uri: "https://graph.facebook.com/v2.6/me/messages",
            qs: { access_token: PAGE_ACCESS_TOKEN },
            method: "POST",
            json: request_body
        },
        (err, res, body) => {
            if (!err) {
                // console.log("message sent!");
            } else {
                console.error("Unable to send message:" + err);
            }
        }
    );
}

// ---------- UTILITY FUNCTIONS ----------
async function frameMessengerReply(user_psid, text) {
    try {
        let tempUser = await user.findOne({ psid: user_psid });
        if (tempUser) {
            if (tempUser.pendingPostId !== 'none') {
                try {
                    let oldPendingPost = await post.findOne({ _id: tempUser.pendingPostId });
                    await post.findOneAndUpdate({ _id: tempUser.pendingPostId }, { title: text });
                    return `Your last pending post (${oldPendingPost.title}) was removed. Just send a media attachment to upload with the post titled: ${text}.`;
                } catch (err) { console.log(err); }
            }
            else {
                let newPost = new post({ username: tempUser.username, url: '', title: text, type: '' })
                try {
                    let savedPost = await newPost.save();
                    await user.findOneAndUpdate({ username: tempUser.username }, { pendingPostId: savedPost._id });
                    return `Alright, just send a media attachment to upload with the post titled: ${text}.`;
                } catch (err) { console.log(err); }
            }
            return `Alright, just send a media attachment to upload with the post titled: ${text}.`;
        }
        else {
            return 'You have not signed up on Bubbles yet, send "Join" to create an account.';
        }
    } catch (err) { console.log(err); }
}

async function replyToAttachment(user_psid, url) {
    try {
        let tempUser = await user.findOne({ psid: user_psid });
        if (tempUser) {
            if (tempUser.pendingPostId !== 'none') {
                let filename = `${tempUser.username}_${tempUser.pendingPostId}.mp4`;
                await downloadFile(url, filename);
                await uploadFile(filename);
                setTimeout(() => {
                    fs.unlinkSync('./' + filename)
                }, 15000);
                newUrl = `http://storage.googleapis.com/${bucketName}/${filename}`
                let newPost = await post.findOneAndUpdate({ _id: tempUser.pendingPostId }, { url: newUrl, type: 'audio' });
                let newSlug = await generateSlug(tempUser.username, newPost.title);
                await post.findOneAndUpdate({ _id: newPost._id }, { slug: newSlug });
                await user.findOneAndUpdate({ psid: user_psid }, { pendingPostId: 'none', postCount: tempUser.postCount + 1 });
                return `The post "${newPost.title}" is ready to be viewed at ${publicDomain}/posts/${tempUser.username}/${newSlug} ! To delete this post in future, just send "delete ${newSlug}".`
            }
            else {
                return `Please send a post title before sending a media attachment.`;
            }
        }
        else return 'You have not signed up on Bubbles yet, send "Join" to create an account.';

    } catch (err) { console.log(err); }
}

async function signUp(user_psid) {
    let reply = '';
    const tempuser = await user.findOne({ psid: user_psid });
    if (tempuser) {
        reply = `You already have an account. You can start adding new posts by sending attachments here. Link to your blog page: ${publicDomain}/profile/${tempuser.username}`;
        return reply;
    }

    //Creating a new account
    // -Getting name for generating username
    let userData = await getFbProfileInfo(user_psid);
    let newUsername = await generateUsername((userData.first_name + userData.last_name));
    let new_user = new user({
        psid: user_psid,
        username: newUsername,
        pendingPostId: 'none',
        favouritesCount: '0',
        postCount: '0'
    });

    try {
        await new_user.save();
        return `Welcome ${userData.first_name}, your Bubbles account is ready.\nYour username is @${newUsername}, and the link to you blog is ${publicDomain}/profile/${newUsername}`;
    } catch (error) {
        console.log(error);
        return 'An error occured.';
    }

    return reply;

}

async function getFbProfileInfo(user_psid) {
    let response = await fetch(`https://graph.facebook.com/${user_psid}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`);
    let data = await response.json();
    return data;
}

async function deletePost(user_psid, slug) {
    try {
        let tempUser = await user.findOne({ psid: user_psid });
        let deletedPost = await post.findOneAndDelete({ username: tempUser.username, slug: slug });
        await user.findOneAndUpdate({ username: tempUser.username }, { postCount: tempUser.postCount - 1 })
        if (deletedPost) return `The post '${deletedPost.title}' has been deleted.`;
        else return `No matching post found.`;
    } catch (err) { console.log(err); }

}

async function generateUsername(name) {
    let newUsername = '';
    let postfix = '';
    for (let i = 0; i < name.length; i++) {
        if (name[i] != ' ') newUsername += name[i];
    }
    while (1) {
        let userRes = await user.findOne({ username: (newUsername + postfix).toLowerCase() });
        if (userRes) {
            console.log(userRes, "already exists")
            if (postfix === '') postfix = '0';
            else postfix = (parseInt(postfix, 10) + 1) + '';
        }
        else { return (newUsername + postfix).toLowerCase(); break; }
    }
}

async function generateSlug(username, title) {
    title = title.toLowerCase()
    let postfixInt = 1;
    let postfixStr = '';
    let titleSlug = '';
    for (let i = 0; i < title.length; i++) {
        if (title[i] !== ' ') titleSlug += title[i];
        else titleSlug += '-';
    }
    while (1) {
        let oldPost = await post.findOne({ username, slug: titleSlug + postfixStr });
        if (oldPost) {
            postfixStr = `-${postfixInt}`;
            postfixInt++;
        }
        else return titleSlug + postfixStr;
    }

}

async function uploadFile(filename) {
    setTimeout(() => {
        bucket.upload(`./${filename}`, {
            destination: filename,
            public: true,
        }, function (err, file) {
            if (err) {
                console.log(err);
                return false;
            }
            return true
        });
    }, 5000);

}

async function downloadFile(uri, filename) {
    request(uri).pipe(fs.createWriteStream(filename));
}


//---------- Root Route for frontend ----------
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})