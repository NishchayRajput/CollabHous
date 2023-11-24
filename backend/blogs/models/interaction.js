const mongoose = require('mongoose');
const moment = require('moment-timezone');
const blogs = require('./blogs');
const userInfo = require('../../ecommerce/models/userInfo');

const replySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userInfo', required: true },
    reply_content: { type: String, required: true },
    time: {
        type: Date,
        default: function () {
            const moment = require('moment-timezone');
            moment.tz.setDefault('Asia/Kolkata');
            return moment();
        },
    }
});

const interaction = new mongoose.Schema({
    blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userInfo', required: true },
    interaction_id: { type: String ,required : true }, 
    interaction_type: { type: String, required: true },
    interaction_content: { type: String },
    time: {
        type: Date,
        default: function () {
            const moment = require('moment-timezone');
            moment.tz.setDefault('Asia/Kolkata');
            return moment();
        },
    },
    replies: [replySchema], // Array to store replies
});

module.exports = mongoose.model('interaction', interaction);