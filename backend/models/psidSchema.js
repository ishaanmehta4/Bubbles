const mongoose = require("mongoose");

const psidSchema = mongoose.Schema({
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
        required: true
    }
});

module.exports = mongoose.model("psid", psidSchema);