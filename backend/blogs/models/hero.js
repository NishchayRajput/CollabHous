const mongoose = require('mongoose');

const hero = new mongoose.Schema({
    key : {type : String , required: true},
    value : {type : String, required : true},
});

module.exports = mongoose.model('hero', hero, 'blogshero');