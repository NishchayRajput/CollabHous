import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

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

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterBlogs = (category) => {
    const updateBlogs = allBlogs.filter((e) => {
      let l = e.tag.split(",").length;
      let check = false;
      for (let i = 0; i < l - 1; i++) {
        check = check || e.tag.split(",")[i] === category;
      }
      return check;
    });
    setBlogs(updateBlogs);
  };
  console.log(value);

  return (
    <>
      <Box mx={"auto"} sx={{ maxWidth: "40%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="none"
          aria-label="scrollable auto tabs example"
          style={{ backgroundColor: "rgba(35, 36, 38, 1)", color: "white" }}
        >
          <Tab
            label="All Categories"
            onClick={() => {
              setBlogs(allBlogs);
            }}
            sx={{
              color: value === 0 ? "pink" : "white", // Change text color based on the selected tab
            }}
          />
          <Tab
            label="Trending"
            onClick={() => {
              filterBlogs("Trending");
            }}
            sx={{
              color: value === 1 ? "pink" : "white",
            }}
          />
          <Tab
            label="Ethnic"
            onClick={() => {
              filterBlogs("Ethnic");
            }}
            sx={{
              color: value === 2 ? "pink" : "white",
            }}
          />
          <Tab
            label="Classic"
            onClick={() => {
              filterBlogs("Classic");
            }}
            sx={{
              color: value === 3 ? "pink" : "white",
            }}
          />
          <Tab
            label="Community"
            onClick={() => {
              filterBlogs("Community");
            }}
            sx={{
              color: value === 4 ? "pink" : "white",
            }}
          />
        </Tabs>
      </Box>

      <Box display={"flex"} padding="20px">
        {blogs &&
          blogs.map((blog) => (
            <Box
              maxWidth={"400px"}
              widht="30%"
              mx={"4rem"}
              my={"4rem"}
              height={"420px"}
              flexWrap={"wrap"}
            >
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
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Blogs;
