const mongoose =require('mongoose');
const Blog = require('../models/blogs');
const userInfo = require('../../ecommerce/models/userInfo');
async function blog_card(req, res){
    try {
        const blogs = await Blog.find({})
          .sort({ time: -1 })
          .limit(10)
          .populate({
            path: 'user_id',
            model: userInfo,
            select: 'name email',
          })
          .exec();
    
        // Extract relevant data from the blogs
        const formattedBlogs = blogs.map((blog) => ({
          title: blog.title,
          content: blog.content,
          user: {
            name: blog.user_id.name,
            email: blog.user_id.email,
          },
          tag:blog.tags
        }));
    
        res.status(200).json(formattedBlogs); // Respond with the formatted data
      } catch (error) {
        console.error('Error fetching and formatting blogs:', error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
      }
}

module.exports = blog_card;