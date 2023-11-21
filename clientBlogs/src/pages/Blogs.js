import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import TrendingBlogCard from "../components/TrendingBlogCard";
import Footer from "../components/Footer";
import "./css/Blogs.css";

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
      // console.log(data);
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
      <Box className="mainContainer">
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
          className="tabsContainer"
        >
          <Tab
            label="All Categories"
            onClick={() => {
              setBlogs(allBlogs);
            }}
            className="tabs"
            style={{
              color: valueT === 0 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="Trending"
            onClick={() => {
              filterBlogs("Trending");
            }}
            className="tabs"
            style={{
              color: valueT === 1 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="Ethnic"
            onClick={() => {
              filterBlogs("Ethnic");
            }}
            className="tabs"
            style={{
              color: valueT === 2 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="Classic"
            onClick={() => {
              filterBlogs("Classic");
            }}
            className="tabs"
            style={{
              color: valueT === 3 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="Community"
            onClick={() => {
              filterBlogs("Community");
            }}
            className="tabs"
            style={{
              color: valueT === 4 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="More"
            onClick={() => {
              filterBlogs("More");
            }}
            className="tabs"
            style={{
              color: valueT === 5 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="Community2"
            onClick={() => {
              filterBlogs("Community2");
            }}
            className="tabs"
            style={{
              color: valueT === 6 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
          <Tab
            label="More"
            onClick={() => {
              filterBlogs("More");
            }}
            className="tabs"
            style={{
              color: valueT === 7 ? "#F74D79" : "white", // Text color for selected tab
            }}
          />
        </Tabs>
      </Box>

      <Box className="blogCardContainer">
        <Box display={"flex"} flexWrap={"wrap"}>
          {blogs &&
            blogs.map((blog, index) => (
              <Box
                key={blog._id}
                className="blogCard"
                sx={{
                  // Apply 2-column layout for the first four blogs
                  width: index < 4 ? "42%" : "26.2%",
                  flex: index < 4 ? "0 0 42%" : "0 0 26.2%",
                  position: "relative",
                }}
              >
                {window.innerWidth < 800 ? (
                  <BlogCard
                    id={blog._id}
                    tag={blog.tag}
                    title={blog.title}
                    description={blog.content}
                    image="https://picsum.photos/id/11/300/200"
                    username={blog.user != null ? blog.user.name : "Username"}
                    time={formatDate(blog.time)}
                    like={blog.like}
                    read_time={blog.read_time}
                  />
                ) : (
                  <div>
                    {index < 4 ? (
                      <TrendingBlogCard
                        id={blog._id}
                        tag={blog.tag}
                        title={blog.title}
                        description={blog.content}
                        image="https://picsum.photos/id/11/300/200"
                        username={
                          blog.user != null ? blog.user.name : "Username"
                        }
                        time={formatDate(blog.time)}
                        like={blog.like}
                      />
                    ) : (
                      <BlogCard
                        id={blog._id}
                        tag={blog.tag}
                        title={blog.title}
                        description={blog.content}
                        image="https://picsum.photos/id/11/300/200"
                        username={
                          blog.user != null ? blog.user.name : "Username"
                        }
                        time={formatDate(blog.time)}
                        like={blog.like}
                        read_time={blog.read_time}
                      />
                    )}
                  </div>
                )}
                <Link
                  to={`/blogs/${blog._id}`}
                  style={{
                    textDecoration: "none",
                    height: "84%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  {/* Content inside the Link component (if any) */}
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
