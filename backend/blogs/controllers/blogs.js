const mongoose =require('mongoose');
const Blog = require('../models/blogs');
const userInfo = require('../../ecommerce/models/userInfo');
async function blog_card(req, res){
    try {
    //   const sampleBlogs = [
    //     {
    //         user_id: new mongoose.Types.ObjectId('6542215aac5836b8288725a4'), // Replace with a valid user ID from your 'userInfo' collection
    //         title: 'Sample Blog Title 1',
    //         content: 'Sample Blog Content 1',
    //         tags: 'Sample Tag 1',
    //         like: 0,
    //         time: moment().format(),
    //     },
    //     {
    //         user_id: new mongoose.Types.ObjectId('6542215aac5836b8288725a4'), // Replace with a valid user ID from your 'userInfo' collection
    //         title: 'Sample Blog Title 2',
    //         content: 'Sample Blog Content 2',
    //         tags: 'Sample Tag 2',
    //         like: 0,
    //         time: moment().format(),
    //     },
    //     // Add more sample data objects as needed
    // ];

    // // Save the sample data models to the database
    // await Blog.insertMany(sampleBlogs);

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
          _id : blog._id,
          title: blog.title,
          content: blog.content,
          user: {
            name: blog.user_id.name,
            email: blog.user_id.email,
          },
          tag:blog.tags,
          like : blog.like,
          time : blog.time,
          read_time : blog.read_time,
        }));
    
        res.status(200).json(formattedBlogs); // Respond with the formatted data
      } catch (error) {
        console.error('Error fetching and formatting blogs:', error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
      }
}

module.exports = blog_card;