const mongoose = require('mongoose');

const interaction = new mongoose.Schema({
    blog_id : {type : String, required : true},
    user_id : {type : String , required : true},
    interaction_id : {type : String},
    interaction_type : {type : String , required : true},
    interaction_content : {type : String, required : true},
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

module.exports = mongoose.model('blogs', interaction);