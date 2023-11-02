const mongoose = require('mongoose');
const userInfo = require('../../ecommerce/models/userInfo');


const blogs = new mongoose.Schema({
    // user_id: { type: mongoose.Schema.Types.ObjectId,ref : 'userInfo',  required: true },
    user_id : {type : String, required : true},
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags : {type : String},
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

module.exports = mongoose.model('blogs', blogs);