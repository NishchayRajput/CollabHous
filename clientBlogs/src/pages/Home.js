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
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
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
        height="100vh"
        color={"black"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        The spirit of collective genius
      </Box>
      <Box
        bgcolor={"grey"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Carousel box
      </Box>
      <Box
        bgcolor={"green"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Who we are?
      </Box>
      <Box
        bgcolor={"white"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Welcome to community
      </Box>
      <Box
        bgcolor={"grey"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          {blogs &&
            blogs.map((blog) => (
              <BlogCard
                id={blog?._id}
                isUser={localStorage.getItem("userId") === blog?.user?._id}
                title={blog?.title}
                description={blog?.description}
                image={blog?.image}
                username={blog?.user?.username}
                time={blog.createdAt}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
