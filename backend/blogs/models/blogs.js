const mongoose = require('mongoose');
const userInfo = require('../../ecommerce/models/userInfo');

// Define the schema for the 'blogs' collection
const blogs = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userInfo', // Reference to the 'userInfo' model
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String
    },
    like: {
        type: Number,
        default: 0 // Default value for 'like' field is 0
    },
    time: {
        type: Date,
        default: function () {
            // Set the default value to the current time in IST
            const moment = require('moment-timezone');
            moment.tz.setDefault('Asia/Kolkata'); // IST timezone
            return moment();
        },
    },
    read_time: {
        type: Number,
    },
<<<<<<< HEAD
    richTextContent: { type: String },
    items: [
        {
            s3Key: {
                type: String,
                required: true
            },
            bucket: {
                type: String,
                required: true
            },
            mime: {
                type: String,
                required: true
            },
            dateCreated: {
                type: Date,
                required: true
            },
            region: {
                type: String,
                required: true
            }
        }
    ]
=======
    richTextContent :{
        type: String
    }
>>>>>>> 3ef56cd (feat:richtexteditor)
});

// Create and export the 'blogs' model based on the schema
module.exports = mongoose.model('blogs', blogs);
