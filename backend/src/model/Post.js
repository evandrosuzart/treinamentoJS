const mongoose = require('mongoose');

const PostScheema = new mongoose.Schema({
    autor: String,
    place: String,
    desctription: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0, 
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post',PostScheema);