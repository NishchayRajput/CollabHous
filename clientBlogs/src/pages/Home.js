import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setBlogs(data);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <Box
        minHeight="100vh"
        color={"black"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        The spirit of collective genius
      </Box>
      <Box
        bgcolor={"grey"}
        minHeight="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Carousel box
      </Box>
      <Box
        bgcolor={"green"}
        minHeight="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Who we are?
      </Box>
      <Box
        bgcolor={"white"}
        minHeight="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Welcome to community
      </Box>
      <Box
        bgcolor={"grey"}
        minHeight="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box display={'flex'} flexWrap={'wrap'} padding='20px'>
          {blogs &&
            blogs.map((blog) => (
              <BlogCard
                id={blog?.user_id}
                key={blog?.user_id}
                isUser={localStorage.getItem("userId") === blog?.user?.user_id}
                title={blog?.title}
                description={blog?.content}
                image={blog?.image}
                username={blog?.user?.username}
                time={blog.time}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
