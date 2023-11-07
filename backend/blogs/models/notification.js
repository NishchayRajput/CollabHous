const mongoose = require('mongoose');

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
    type : {
        type : String,
        required : true,
    },
    content : {
        type : String,
    },
});

module.exports = mongoose.model('notifications', notifications, 'notifications');