import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import TrendingBlogCard from "../components/TrendingBlogCard";
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
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs/`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
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


  const [isMobile, setIsMobile] = useState(document.documentElement.clientWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(document.documentElement.clientWidth < 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="BlogContainerBox">
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
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"}>
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
                {isMobile ? (
                  <BlogCard
                    bId={blog?._id}
                    // key={blog?.user_id}
                    // isUser={
                    //   localStorage.getItem("userId") === blog?.user?.user_id
                    // }
                    uId={blog.user != null ? blog.user.id : ""}
                    tag={blog.tag}
                    title={blog.title}
                    description={blog.content}
                    image={
                      blog
                        ? `https://${blog.image[0].bucket}.s3.${blog.image[0].region}.amazonaws.com/${blog.image[0].s3Key}`
                        : 'images/blogBg.jpg'
                    }
                    username={blog.user != null ? blog.user.name : "Username"}
                    time={formatDate(blog.time)}
                    upVoteC={blog.like}
                    read_time={blog.read_time}
                    likeStat={blog.like_status}
                  />
                ) : (
                  <div>
                    {index < 4 ? (
                      <TrendingBlogCard
                        bId={blog?._id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        uId={blog.user != null ? blog.user.id : ""}
                        tag={blog.tag}
                        title={blog.title}
                        description={blog.content}
                        image={
                          blog
                            ? `https://${blog.image[0].bucket}.s3.${blog.image[0].region}.amazonaws.com/${blog.image[0].s3Key}`
                            : 'images/blogBg.jpg'
                        }
                        username={
                          blog.user != null ? blog.user.name : "Username"
                        }
                        time={formatDate(blog.time)}
                        upVoteC={blog.like}
                        read_time={blog.read_time}
                        likeStat={blog.like_status}
                      />
                    ) : (
                      <BlogCard
                        bId={blog?._id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        uId={blog.user != null ? blog.user.id : ""}
                        tag={blog.tag}
                        title={blog.title}
                        description={blog.content}
                        image={
                          blog
                            ? `https://${blog.image[0].bucket}.s3.${blog.image[0].region}.amazonaws.com/${blog.image[0].s3Key}`
                            : 'images/blogBg.jpg'
                        }
                        username={
                          blog.user != null ? blog.user.name : "Username"
                        }
                        time={formatDate(blog.time)}
                        upVoteC={blog.like}
                        read_time={blog.read_time}
                        likeStat={blog.like_status}
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
    </div>
  );
};

export default Blogs;
