// Import required modules
const mongoose = require('mongoose');
const Blog = require('../models/blogs');
const Interaction = require('../models/interaction');
const extractTokenValue = require('../../token');

// Define the controller function for getting a blog by ID
async function getBlogById(req, res) {
  try {
    // Extract the blog ID from the request parameters
    const blogId = req.params.id;

    // Use Mongoose to find the blog by its ID
    const blog = await Blog.findById(blogId).populate('name email').exec();


    // If the blog is not found, return a 404 error response
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Send the blog data to the frontend as a JSON response
    res.json(blog);
  } catch (error) {
    // If an error occurs, return a 500 error response with the error message
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

// Export the controller function
module.exports = getBlogById;
