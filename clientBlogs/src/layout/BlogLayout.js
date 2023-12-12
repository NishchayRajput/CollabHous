import React from "react";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./BlogLayout.css";

const BlogLayout = () => {
  return (
    <>
      <Box id="layoutContainer">
        <Typography className="ourBlogContainer">
          <div className="fontContainer1">
            <Typography className="font1">Our Blogs</Typography>
          </div>

          <div className="fontContainer2">
            <Typography className="font2">Our Blogs</Typography>
          </div>
        </Typography>
        <Typography className="blogIntroContainer">
          <Box className="blogIntro">
            Welcome to the digital library of personal luxury.
          </Box>
          <Box className="blogIntro">
            Written & directed by: The new age of India’s fashion commune
          </Box>
        </Typography>
      </Box>
      <Outlet />
    </>
  );
};

export default BlogLayout;
