const mongoose = require('mongoose');
const blog = require('../models/blogs');
const interaction = require('../models/interaction');
const extractTokenValue = require('../../token');
async function blogs(req, res) {
    const token = extractTokenValue(req.headers.cookie);
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const bdata = await blog.findById(req.params.Id);
        if (!bdata) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const interactions = await interaction.find({ blog_id: blogId }).populate({path: 'user_id',select: 'name email'});
        if (!interactions) {
            return res.status(404).json({ message: 'No interactions found for this blog' });
        }

        // Continue with your logic here...
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
}



module.exports = blogs;