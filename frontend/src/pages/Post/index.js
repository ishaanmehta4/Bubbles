import React, { useState, useEffect } from 'react'
import ProfilePanel from '../../components/ProfilePanel'
import { useParams } from 'react-router-dom'
import './style.css'
import PostCard from '../../components/PostCard'

function Post(props) {
    let { username, slug } = useParams();
    let [userData, setUserdata] = useState({});
    let [postData, setPostData] = useState({});

    // let profilePanel = <h2 style={{ padding: "2em" }}>Post does not exist</h2>
    let profilePanel = <h2 style={{ padding: "2em" }}></h2>
    if (userData.username) profilePanel = <ProfilePanel user={userData} />

    let post = <h2 style={{padding: "2em"}} id="profilePlaceholder">Post does not exist</h2>
    if (postData.username) post = <PostCard postData={postData} referrer="post" />

    document.title = `${postData.title || 'Podcasts '} | Post on Bubbles`;

    useEffect(async () => {
        const response = await fetch(`/api/post/${username}/${slug}/`);
        let post = await response.json();
        setPostData(post);
    }, [])

    useEffect(async () => {
        const response = await fetch('/api/profile/' + postData.username);
        let userinfo = await response.json();
        setUserdata(userinfo);
    }, [postData])

    return (
        <div id="profilePageGrid">
            <div id="profilePanelCon">
                {profilePanel}
            </div>
            <div id="postListCon">
                {post}
            </div>
        </div>
    )
}

export default Post
