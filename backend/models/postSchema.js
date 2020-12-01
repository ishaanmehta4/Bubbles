const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    slug:
    {
        type: String,
        default: 'noslugset'
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("post", postSchema);