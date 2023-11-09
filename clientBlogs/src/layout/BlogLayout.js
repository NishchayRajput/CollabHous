import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
</style>
const BlogLayout = () => {
  return (
    <>
      <Box mt={"20px"}>
        <Typography
          padding={"10px"}
          marginTop={'50px'}
          style={{ textAlign: "center", color: "white" }}
        >
          {" "}
       <img src="images/OurBlogs.png" width='28%' />
        </Typography>
        <Typography 
        className="blogIntro"
          fontSize={"15px"}
          width={"60%"}
          mx={"auto"}
          padding={"10px"}
          style={{
            textAlign: "center",
            paddingBottom: "100px",
            color: "#ABABAB",
          }}
        >
          <Box>Welcome to the digital library of personal luxury.</Box>
          <Box> Written & directed by: The new age of India’s fashion commune</Box>
         
        </Typography>
      </Box>
      <Outlet />
    </>
  );
};

export default BlogLayout;
