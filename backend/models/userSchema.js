const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    psid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    pendingPostId:{
        type: String,
        required: false,
        default: 'none'
    },
    favouritesCount: {
        type: Number,
        required: true,
        default: 0
    },
    postCount: {
        type: Number,
        required: true,
        default: 0
    },
});

module.exports = mongoose.model("user", UserSchema);