const mongoose = require('mongoose');
const userInfo = require('../../ecommerce/models/userInfo');

const SettingsSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true, maxLength: 10 },
    primary_role: { type: String, default: '' }, // Provide default values as needed
    job_notification_status: { type: String, default: '' },
    job_notification_type: { type: [String], default: [] }, // Define an array of strings with a default value of an empty array
    items: [{
        s3Key: { type: String },
        bucket: { type: String },
        mime: { type: String },        
        region: { type: String },
    }],

});

const QuestionSchema = new mongoose.Schema({
    fname: { type: String, default: '' },
    lname: { type: String, default: '' },
    number: { type: String, maxLength: 10, default: '' },
    pitch: { type: String, maxLength: 140, default: '' },
    pdf: { type: Buffer },
});

const CommuneSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userInfo' },
    settings: SettingsSchema,
    questions: [QuestionSchema],
    interest: { type: [String] },
    
});

// Use the singular form 'Commune' for the model name
module.exports = mongoose.model('Commune', CommuneSchema);
