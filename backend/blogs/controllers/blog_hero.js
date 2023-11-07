const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Hero = require('../models/hero');
const Blog = require('../models/blogs');
const userInfo = require('../../ecommerce/models/userInfo');

async function blog_hero(req, res) {
    try {
        
        // Find the 3 latest blogs, sorted by the 'time' field in descending order
        const latestBlogs = await Blog.find({})
            .sort({ time: -1 })
            .limit(3)
            .populate({
                path: 'user_id',
                model: userInfo,
                select: 'name email',
            })
            .exec();

        // Find the blog with the highest 'like' value
        const mostLikedBlog = await Blog.findOne({})
            .sort({ like: -1 })
            .populate({
                path: 'user_id',
                model: userInfo,
                select: 'name email',
            })
            .exec();

        // Format the data for the latest blogs
        const formattedLatestBlogs = latestBlogs.map((blog) => ({
            title: blog.title,
            content: blog.content,
            user: {
                name: blog.user_id.name,
                email: blog.user_id.email,
            },
            tag: blog.tags,
            like : blog.like,
            time : blog.time,
            read_time : blog.read_time,
        }));

        //Fetching hero section data for blogs
        const heroData = await Hero.find({}).exec();

        // Format the data for the most liked blog
        let formattedMostLikedBlog = null;
        if (mostLikedBlog) {
            formattedMostLikedBlog = {
                title: mostLikedBlog.title,
                content: mostLikedBlog.content,
                user: {
                    name: mostLikedBlog.user_id.name,
                    email: mostLikedBlog.user_id.email,
                },
                tag: mostLikedBlog.tags,
                like : mostLikedBlog.like,
                time : mostLikedBlog.time,
                read_time : mostLikedBlog.read_time
            };
        }

        res.status(200).json({
            latestBlogs: formattedLatestBlogs,
            mostLikedBlog: formattedMostLikedBlog,
            heroData  : heroData,
        });
    } catch (error) {
        console.error('Error fetching and formatting blogs:', error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}

module.exports = blog_hero;
