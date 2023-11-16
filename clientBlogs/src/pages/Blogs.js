import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import TrendingBlogCard from "../components/TrendingBlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setAllBlogs(data);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
   
  }, []);

  const [valueT, setValueT] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValueT(newValue);
  };
  const filterBlogs = (category) => {
    const updateBlogs = allBlogs.filter((e) => {
      // let l = e.tag.split(",").length;
      let check = false;
      // for (let i = 0; i < l - 1; i++) {
      // check = check || e.tag.split(",")[i] === category;
      // }
      check = e.tag === category;
      return check;
    });
    console.log(updateBlogs);
    setBlogs(updateBlogs);
  };

  return (
    <>
      <Box mx={"auto"} sx={{ maxWidth: "80%", bgcolor: "background.paper" }}>
        <Tabs
          value={valueT}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="none"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: true ? "#F74D79" : "rgba(35, 36, 38, 1)", // Colored underline for selected tab
            },
          }}
          sx={{
            backgroundColor: "rgba(35, 36, 38, 1)",
            borderBottom: "1px solid white",
            // height:'30px'
          }}
        >
          <Tab
            label="All Categories"
            onClick={() => {
              setBlogs(allBlogs);
            }}
            style={{
              color: valueT === 0 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="Trending"
            onClick={() => {
              filterBlogs("Trending");
            }}
            style={{
              color: valueT === 1 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="Ethnic"
            onClick={() => {
              filterBlogs("Ethnic");
            }}
            style={{
              color: valueT === 2 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="Classic"
            onClick={() => {
              filterBlogs("Classic");
            }}
            style={{
              color: valueT === 3 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="Community"
            onClick={() => {
              filterBlogs("Community");
            }}
            style={{
              color: valueT === 4 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="More"
            onClick={() => {
              filterBlogs("More");
            }}
            style={{
              color: valueT === 5 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="Community2"
            onClick={() => {
              filterBlogs("Community2");
            }}
            style={{
              color: valueT === 6 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Tab
            label="More"
            onClick={() => {
              filterBlogs("More");
            }}
            style={{
              color: valueT === 7 ? "#F74D79" : "white", // Text color for selected tab
              fontSize: "24px",
              textTransform: "none",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
        </Tabs>
      </Box>

      <Box paddingX={"12%"}>
        <Box></Box>
        <Box display={"flex"} flexWrap={"wrap"}>
          {blogs &&
            blogs.map((blog, index) => (
              <Box
                key={blog._id}
                maxWidth="700px"
                width="350px"
                mx="2rem"
                my="3rem"
                minHeight="435px"
                height="auto"
                flexWrap="wrap"
                sx={{
                  // Apply 2-column layout for the first four blogs
                  width: index < 4 ? "42%" : "26.2%",
                  flex: index < 4 ? "0 0 42%" : "0 0 26.2%",
                }}
              >
                <Link
                  to={`/blogs/${blog._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  {/* Link to individual blog page */}
                  {index < 4 ? (
                    <TrendingBlogCard
                      id={blog._id}
                      // isUser={
                      //   localStorage.getItem("userId") === blog.user?._id
                      // }
                      tag={blog.tag}
                      title={blog.title}
                      description={blog.content}
                      image="https://picsum.photos/id/11/300/200"
                      // image={blog.image}
                      username={blog.user != null ? blog.user.name : "Username"}
                      time={formatDate(blog.time)}
                      like={blog.like}
                    />
                  ) : (
                    <BlogCard
                      id={blog._id}
                      // isUser={
                      //   localStorage.getItem("userId") === blog.user?._id
                      // }
                      tag={blog.tag}
                      title={blog.title}
                      description={blog.content}
                      image="https://picsum.photos/id/11/300/200"
                      // image={blog.image}
                      username={blog.user != null ? blog.user.name : "Username"}
                      time={formatDate(blog.time)}
                      like={blog.like}
                      read_time={blog.read_time}
                    />
                  )}
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
