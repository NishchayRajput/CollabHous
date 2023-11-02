const mongoose = require('mongoose');
const blogs = require('./blogs');
const userInfo = require('../../ecommerce/models/userInfo');

const interaction = new mongoose.Schema({
    blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userInfo', required: true },
    interaction_id: { type: String ,required : true }, 
    interaction_type: { type: String, required: true },
    interaction_content: { type: String, required: true },
    time: {
        type: Date,
        default: function () {
            // Set the default value to the current time in IST
            const moment = require('moment-timezone');
            moment.tz.setDefault('Asia/Kolkata'); // IST timezone
            return moment();
        },
    }
});

module.exports = mongoose.model('interaction', interaction);