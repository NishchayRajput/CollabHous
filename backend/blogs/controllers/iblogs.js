const mongoose = require('mongoose');
const blog = require('../models/blogs');
const interaction = require('../models/interaction');
const extractTokenValue = require('../../token');
async function blogs(req, res) {
    try {
        const token = extractTokenValue(req.headers.cookie);
        const bdata = await blog.findById(req.params.Id);
        const interactions = await interaction.find({ blog_id: blogId }).populate({path: 'user_id',select: 'name email'});

    }
    catch (error) {

    }
}

module.exports = blogs;