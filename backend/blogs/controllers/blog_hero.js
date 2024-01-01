const mongoose = require("mongoose");
const moment = require("moment-timezone");
const Hero = require("../models/hero");
const Blog = require("../models/blogs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Interaction = require("../models/interaction");
const userInfo = require("../../ecommerce/models/userInfo");
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

async function blog_hero(req, res) {
  try {
    // Function to extract the token value from a cookie string
    function extractTokenValue(tokenString) {
      if (tokenString && typeof tokenString === "string") {
        const tokenIndex = tokenString.indexOf("token=");

        if (tokenIndex !== -1) {
          const tokenStartIndex = tokenIndex + 6;
          const tokenEndIndex = tokenString.indexOf(";", tokenStartIndex);
          const tokenValue =
            tokenEndIndex !== -1
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
    let id;
    if (token) {
      jwt.verify(token, process.env.secret, async (err, user) => {
        if (err) {
          // If the token is invalid or expired, return a 401 (Unauthorized) response
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        }

        const existuser = userInfo.findById(user.userId);

        if (existuser) {
          console.log("Token verified");
        } else {
          console.log("Token not verified");
        }
        id = user.userId;
        // next();
      });
    }
    // Find the 3 latest blogs, sorted by the 'time' field in descending order
    const latestBlogs = await Blog.find({})
      .sort({ time: -1 })
      .limit(3)
      .populate({
        path: "user_id",
        model: userInfo,
        select: "_id name email",
      })
      .exec();

    // Find the blog with the highest 'like' value
    const mostLikedBlog = await Blog.findOne({})
      .sort({ like: -1 })
      .populate({
        path: "user_id",
        model: userInfo,
        select: "_id name email",
      })
      .exec();

    // Format the data for the latest blogs

    const formattedLatestBlogs = await Promise.all(
      latestBlogs.map(async (blog) => {
        // Find the interaction with the specified blog_id and interaction_id
        const likeInteraction = await Interaction.find({
          blog_id: blog._id,
          interaction_type: "like",
          user_id: id,
        }).exec();

        const likeStatus = !!likeInteraction.length;

        // Create a new object with the required properties
        const formattedBlog = {
          id: blog._id,
          title: blog.title,
          content: blog.content,
          user: {
            id: blog.user_id._id,
            name: blog.user_id.name,
            email: blog.user_id.email,
          },
          tag: blog.tags,
          like: blog.like,
          time: blog.time,
          read_time: blog.read_time,
          like_status: likeStatus,
          richTextContent: blog.richTextContent,
          items: blog.items,
        };

        return formattedBlog;
      })
    );

    // Now, formattedLatestBlogs will have an additional property like_status for each blog
    //Fetching hero section data for blogs
    const heroData = await Hero.find({ page: req.body.page }).exec();

    // Format the data for the most liked blog
    // Format the data for the most liked blog
    let formattedMostLikedBlog = null;
    if (mostLikedBlog) {
      const mostLikedBlogInteraction = await Interaction.find({
        blog_id: mostLikedBlog._id,
        interaction_type: "like",
        user_id: id,
      }).exec();

      const likeStatusMostLikedBlog = !!mostLikedBlogInteraction.length;

      formattedMostLikedBlog = {
        id: mostLikedBlog._id,
        title: mostLikedBlog.title,
        content: mostLikedBlog.content,
        user: {
          id: mostLikedBlog.user_id._id,
          name: mostLikedBlog.user_id.name,
          email: mostLikedBlog.user_id.email,
        },
        tag: mostLikedBlog.tags,
        like: mostLikedBlog.like,
        time: mostLikedBlog.time,
        read_time: mostLikedBlog.read_time,
        like_status: likeStatusMostLikedBlog,
        richTextContent: mostLikedBlog.richTextContent,
        items: mostLikedBlog.items,
      };
    }
    const ud = await userInfo.find({ _id: id }, "name email").exec();

    res.status(200).json({
      latestBlogs: formattedLatestBlogs,
      mostLikedBlog: formattedMostLikedBlog,
      heroData: heroData,
      ud: ud,
    });
  } catch (error) {
    console.error("Error fetching and formatting blogs:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
}

module.exports = blog_hero;
