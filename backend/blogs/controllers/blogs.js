const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");
const Blog = require("../models/blogs");
const userInfo = require("../../ecommerce/models/userInfo");
const Interaction = require("../models/interaction");
const jwt = require("jsonwebtoken");
// const moment = require('moment-timezone');
async function blog_card(req, res){
    try {

      function extractTokenValue(tokenString) {
        if (tokenString && typeof tokenString === 'string') {
            const tokenIndex = tokenString.indexOf('token=');

            if (tokenIndex !== -1) {
                const tokenStartIndex = tokenIndex + 6;
                const tokenEndIndex = tokenString.indexOf(';', tokenStartIndex);
                const tokenValue = tokenEndIndex !== -1
                    ? tokenString.substring(tokenStartIndex, tokenEndIndex)
                    : tokenString.substring(tokenStartIndex);

                return tokenValue;
            } else {
                return null; // 'token=' not found in the string
            }
        } else {
            return null; // Handle the case where tokenString is undefined or not a string
        }
    }

    // Extract the token from the request's cookies
    const token = extractTokenValue(req.headers.cookie);
    let id ;
    if (token) {
        jwt.verify(token, process.env.secret, async(err, user) => {
            if (err) {
                // If the token is invalid or expired, return a 401 (Unauthorized) response
                return res.status(401).json({ message: 'Unauthorized: Invalid token' });
            }
            // console.log(user);
            const existuser = userInfo.findById(user.userId);

            if (existuser) {
                console.log('Token verified');
            }
            else {
                console.log('Token not verified');
            }
            id = user.userId;
            // next();
        });
        // console.log(id);
    }
    console.log(id);
      // const sampleBlogs = [
      //   {
    //         user_id: new mongoose.Types.ObjectId('654ce535d56da75d299f01e7'), // Replace with a valid user ID from your 'userInfo' collection
    //         title: 'Sample Blog Title 5',
    //         content: 'Sample Blog Content 5',
    //         tags: 'More',
    //         like: 0,
    //         time: moment().format(),
    //     },
    //     {
    //         user_id: new mongoose.Types.ObjectId('654ce535d56da75d299f01e7'), // Replace with a valid user ID from your 'userInfo' collection
    //         title: 'Sample Blog Title 6',
    //         content: 'Sample Blog Content 6',
    //         tags: 'Community',
    //         like: 0,
    //         time: moment().format(),
    //     },
    //     // Add more sample data objects as needed
    // ];

    // // Save the sample data models to the database
    // await Blog.insertMany(sampleBlogs);

    // const blogs = await Blog.find({})
    //   .sort({ time: -1 })
    //   .limit(10)
    //   .populate({
    //     path: "user_id",
    //     model: userInfo,
    //     select: "_id name email",
    //   })
    //   .exec();
      const blogs = await Blog.find({})
    .sort({ time: -1 })
    .limit(10)
    .populate({
        path: 'user_id',
        model: 'userInfo',
        select: 'name email', // Specify the fields you want to populate
    })
    .exec();

    // console.log(blogs[0]._id);


          // console.log(blogs);
    
          // const formattedBlogs = await Promise.all(
          //   blogs.map(async (blog) => {
          //     console.log(blog._id);
          
          //     // Convert blog._id to ObjectId
          //     // const blogId =new  mongoose.Types.ObjectId(blog._id);
          
          //     // Find the interaction with the specified blog_id and user_id
          //     const likeInteraction = await Interaction.find({
          //       blog_id: blogId,
          //       interaction_type: "like",
          //       user_id: id,
          //     }).exec();
          
          //     // console.log(likeInteraction);
          //     const likeStatus = !!likeInteraction.length;
          //     // console.log(likeStatus);
          //     console.log(blog._id);
          
          //     // Create a new object with the required properties
          //     const formattedBlog = {
          //       _id: blog._id,
          //       title: blog.title,
          //       content: blog.content,
          //       user: {
          //         id: blog.user_id._id,
          //         name: blog.user_id.name,
          //         email: blog.user_id.email,
          //       },
          //       tag: blog.tags,
          //       like: blog.like,
          //       time: blog.time,
          //       read_time: blog.read_time,
          //       like_status: likeStatus,
          //     };
          
          //     return formattedBlog;
          //   })
          // );
        
        // console.log(formattedBlogs);
        const formattedBlogs = await Promise.all(
          blogs.map(async (blog) => {
              // Find the like interaction for the specified blog and user
              console.log(blog._id.toString());
              const likeInteraction = await Interaction.findOne({
                  blog_id: blog._id.toString(),
                  user_id: id,
                  interaction_type: "like",
              }).exec();
              // console.log(likeInteraction);

              // Determine the like status based on whether the like interaction exists
              const likeStatus = likeInteraction ? true : false;

              // Create a new object with the required properties
              const formattedBlog = {
                  _id: blog._id.toString(), // Convert ObjectId to string
                  title: blog.title,
                  content: blog.content,
                  user: {
                      id: blog.user_id._id.toString(), // Convert ObjectId to string
                      name: blog.user_id.name,
                      email: blog.user_id.email,
                  },
                  tag: blog.tags,
                  like: blog.like,
                  time: blog.time,
                  read_time: blog.read_time,
                  like_status: likeStatus,
              };

              return formattedBlog;
          })
      );

    
        res.status(200).json(formattedBlogs); // Respond with the formatted data
      } catch (error) {
        console.error('Error fetching and formatting blogs:', error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
      }
}

module.exports = blog_card;
