const mongoose =require('mongoose');
const Blog = require('../models/blogs');
async function blog_card(req, res){
    try {

        // const sampleBlogs = [
        //     {
        //       user_id: 'user1', // Replace with a valid user ID
        //       title: 'Sample Blog 1',
        //       content: 'This is the content of the first sample blog post.',
        //       tags: 'sample, test',
        //     },
        //     {
        //       user_id: 'user2', // Replace with a valid user ID
        //       title: 'Sample Blog 2',
        //       content: 'Here is the content of the second sample blog post.',
        //       tags: 'example, demonstration',
        //     },
        //     {
        //       user_id: 'user3', // Replace with a valid user ID
        //       title: 'Sample Blog 3',
        //       content: 'This is the third and final sample blog post.',
        //       tags: 'testing, trial',
        //     },
        //   ];
          
        //   // Save the sample data to the database
        //   Blog.insertMany(sampleBlogs)
        //     .then((blogs) => {
        //       console.log('Sample blogs saved to the database:', blogs);
        //     })
        //     .catch((error) => {
        //       console.error('Error saving sample blogs:', error);
        //     });
        
        const latestBlogs = await Blog.find().sort({ time: -1 }).limit(10); 
    
        res.status(200).json(latestBlogs); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the latest blogs' });
      }
}

module.exports = blog_card;