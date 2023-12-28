const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({
    name: { type: String, required: true },
    g_id: { type: String, unique: true, sparse: true }, // Google ID for Google signups
    email: { type: String, required: true, unique: true },
    password: { type: String }, // For normal signups
    address: { type: String, default: 'null' },
    isGoogleSignup: { type: Boolean, default: false }, // Flag to indicate Google signup
    items: [{
        s3Key: { type: String },
        bucket: { type: String },
        mime: { type: String },        
        region: { type: String },
    }],
});

module.exports = mongoose.model('userInfo', userInfo);
