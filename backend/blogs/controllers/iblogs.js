// Import required modules
const mongoose = require("mongoose");
const Blog = require("../models/blogs");
const Interaction = require("../models/interaction");
const extractTokenValue = require("../../token");

// Define the controller function for getting a blog by ID
async function getBlogById(req, res) {
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
        // console.log(user);
        const existuser = userInfo.findById(user.userId);

        if (existuser) {
          console.log("Token verified");
        } else {
          console.log("Token not verified");
        }
        id = user.userId;
        // next();
      });
      // console.log(id);
    }

    // Extract the blog ID from the request parameters
    const blogId = req.params.id;

    // Use Mongoose to find the blog by its ID
    const blog = await Blog.findById(blogId)
      .populate({
        path: "user_id",
        model: "userInfo",
        select: "_id name email", // Specify the fields you want to populate
      })
      .exec();

    const interaction = await Interaction.find({ blog_id: blogId }).exec();
    const iu = await Interaction.find({
      blog_id: blogId,
      user_id: id,
      it: "like",
    }).exec();
    const likeStatus = !!iu.length;

    const blogF = {
      ...blog.toObject(), // Convert the Mongoose document to a plain JavaScript object
      like_status: likeStatus,
    };

    // If the blog is not found, return a 404 error response
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Send the blog data to the frontend as a JSON response
    res.status(200).json(blog);
  } catch (error) {
    // If an error occurs, return a 500 error response with the error message
    return res
      .status(500)
      .json({ message: "An error occurred nifghhg", error: error.message });
  }
}

// Export the controller function
module.exports = getBlogById;
