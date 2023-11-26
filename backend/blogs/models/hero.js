const mongoose = require('mongoose');

const hero = new mongoose.Schema({
    page : {type : String, required : true},
    key : {type : String , required: true},
    value : {type : String, required : true},
});

module.exports = mongoose.model('hero', hero, 'blog_hero');