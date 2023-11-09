const mongoose = require('mongoose');
const Blog = require('../models/blogs'); // Import your blog model
const interaction = require('../models/interaction');
const extractTokenValue = require('../../token');

async function blogs(req, res) {
  try {
    const blogId = req.params.id;

    // Use Mongoose to find the blog by its ID
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Send the blog data to the frontend as a JSON response
    res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

module.exports = blogs;
