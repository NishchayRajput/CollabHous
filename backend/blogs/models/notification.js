const mongoose = require('mongoose');
const blogs = require('./blogs');
const notifications = new mongoose.Schema({
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userInfo', // Reference to the 'userInfo' model
        required: true
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userInfo',
        required : true
    },
    blog_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'blogs',
        required : true
    },
    type : {
        type : String,
        required : true,
    },
    content : {
        type : String,
    },
    status : {
        type : String,
        default : 'unread',
    },
});

module.exports = mongoose.model('notifications', notifications, 'notifications');