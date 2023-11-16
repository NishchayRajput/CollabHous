import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Tab, Tabs, Typography, IconButton } from "@mui/material";

import CardActions from "@mui/material/CardActions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SendIcon from "@mui/icons-material/Send";
import BlogCard from "../components/BlogCard";
import "./css/IndividualBlogs.css";

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function IndividualBlog({}) {
  //global stae
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const navigate = useNavigate();

  let { blogId } = useParams();
  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box
  const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const [upvoteCount, setUpvoteCount] = useState(0);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setAllBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(allBlogs);
  const filterBlogs = (category) => {
    const updateBlogs = allBlogs.filter((e) => {
      let l = e.tag.split(",").length;
      let check = false;
      for (let i = 0; i < l - 1; i++) {
        check = check || e.tag.split(",")[i] === category;
      }
      return check;
    });
    setRelatedBlog(updateBlogs);
  };
  // Get the blogId from the URL using useParams

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/blogs/${blogId}`
        );
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
    getAllBlogs();
    filterBlogs("testing");
  }, []);

  const handleUpvote = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      // You can implement the upvote logic here, for example, send a request to your backend to record the upvote.
      // For this example, I'll simply increase the count by 1.
      setUpvoteCount(upvoteCount + 1);
      // setUpvoteCount(upvoteCount + 1);
    }
  };
  // You can use this ID to fetch the specific blog content
  console.log(relatedBlog);
  return (
    <div style={{ marginTop: "-68px" }}>
      <Box>
        <section>
          <Box
            className="section"
            position="relative"
            sx={{
              background: 'url("https://picsum.photos/300/200") no-repeat',
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "#00000090",
            }}
          ></Box>
          <Box className="heroBanner">
            <Box className="container">
              <Typography className="title">{blog.title}</Typography>
              <Typography className="X">X</Typography>
              <Typography className="username">Username</Typography>

              <img src="" />
            </Box>
          </Box>
        </section>
        <section style={{ minHeight: "100vh" }}>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"16px"}
              marginTop={"6rem"}
              marginBottom={"2rem"}
            >
              <Typography
                fontSize={"36px"}
                color={"#F74D79"}
                fontWeight={"500"}
              >
                {blog.title}
              </Typography>
              <Typography fontSize={"36px"} fontWeight={"900"} color={"grey"}>
                X
              </Typography>
              <Typography fontSize={"23px"} color={"white"} fontWeight={"500"}>
                Username
              </Typography>
              <Box>
                <img //Avatar Image
                  src=""
                  sx={{ width: "36px", height: "36px", borderRaius: "50%" }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            borderTop={"3px solid white"}
            borderBottom={"3px solid white"}
            paddingY={"25px"}
            // paddingX={"3%"}
          >
            <Box display={"flex"} marginX={"auto"} width={"90%"}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p
                    style={{ fontSize: "23px", color: "white", padding: "4px" }}
                  >
                    {blog.read_time} min read
                  </p>
                  <Box
                    height={"10px"}
                    width={"10px"}
                    backgroundColor={"#4B4B4B"}
                    borderRadius={"50%"}
                  ></Box>
                  <p
                    style={{ fontSize: "23px", color: "white", padding: "4px" }}
                  >
                    {formatDate(blog.time)}
                  </p>
                  <Box
                    height={"10px"}
                    width={"10px"}
                    backgroundColor={"#4B4B4B"}
                    borderRadius={"50%"}
                  ></Box>
                  <p
                    style={{
                      fontSize: "23px",
                      color: "#F74D79",
                      backgroundColor: "rgba(255, 106, 145, 0.12)",
                      borderRadius: "5px",
                      padding: "4px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                  >
                    {blog.tags}
                  </p>
                </div>
              </Box>
            </Box>
          </Box>

          <Box width={"90%"} mx={"auto"}>
            <Typography
              color={"white"}
              paddingTop={"40px"}
              fontWeight={"500"}
              fontSize={"30px"}
              paddingBottom={"1rem"}
            >
              Fashion
            </Typography>
            <Typography
              color={"white"}
              paddingBottom={"20px"}
              fontSize={"20px"}
            >
              Lorem ipsum dolor sit amet consectetur. Habitant diam mi semper in
              ultricies ipsum sed ac. Consectetur nascetur sit pharetra donec
              augue netus eget phasellus scelerisque. Laoreet elementum bibendum
              penatibus vitae arcu arcu lectus tincidunt. Volutpat nibh netus
              vitae arcu mattis orci. Lorem faucibus nunc sit at faucibus.
              Pellentesque turpis habitasse urna id. Dignissim vitae enim congue
              est ut odio mauris rutrum dictum. Turpis sagittis arcu amet nec
              adipiscing mattis. Neque viverra sed quis convallis. Non aliquam
              elit vivamus varius eleifend purus. Massa mattis quam amet tortor
              arcu nisl. Eros elementum cras orci at proin ut sem dignissim
              pharetra. Fermentum aliquet in mattis lacus. Cras facilisis nec
              sem scelerisque vulputate. Enim tellus ut condimentum tortor sit
              lectus purus. Aliquet eget dui faucibus dui bibendum consequat.
            </Typography>
            <Box display={"flex"} mt={"1rem"}>
              {
                //change this on fetching the image data form database
                blog.image == null ? (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    width={"38%"}
                    paddingRight={"2%"}
                  >
                    <img src="https://picsum.photos/300/300" alt="" />
                  </Box>
                ) : (
                  ""
                )
              }

              <Typography
                color={"white"}
                paddingBottom={"20px"}
                fontSize={"20px"}
                width={"60"}
              >
                Lorem ipsum dolor sit amet consectetur. Habitant diam mi semper
                in ultricies ipsum sed ac. Consectetur nascetur sit pharetra
                donec augue netus eget phasellus scelerisque. Laoreet elementum
                bibendum penatibus vitae arcu arcu lectus tincidunt. Volutpat
                nibh netus vitae arcu mattis orci. Lorem faucibus nunc sit at
                faucibus. Pellentesque turpis habitasse urna id. Dignissim vitae
                enim congue est ut odio mauris rutrum dictum. Turpis sagittis
                arcu amet nec adipiscing mattis. Neque viverra sed quis
                convallis. Non aliquam elit vivamus varius eleifend purus. Massa
                mattis quam amet tortor arcu nisl. Eros elementum cras orci at
                proin ut sem dignissim pharetra. Fermentum aliquet in mattis
                lacus. Cras facilisis nec sem scelerisque vulputate. Enim tellus
                ut condimentum tortor sit lectus purus. Aliquet eget dui
                faucibus dui bibendum consequat.
              </Typography>
            </Box>
            <Typography
              color={"white"}
              paddingY={"20px"}
              fontSize={"20px"}
              mt={"1rem"}
            >
              Lorem ipsum dolor sit amet consectetur. Habitant diam mi semper in
              ultricies ipsum sed ac. Consectetur nascetur sit pharetra donec
              augue netus eget phasellus scelerisque. Laoreet elementum bibendum
              penatibus vitae arcu arcu lectus tincidunt. Volutpat nibh netus
              vitae arcu mattis orci. Lorem faucibus nunc sit at faucibus.
              Pellentesque turpis habitasse urna id. Dignissim vitae enim congue
              est ut odio mauris rutrum dictum. Turpis sagittis arcu amet nec
              adipiscing mattis. Neque viverra sed quis convallis. Non aliquam
              elit vivamus varius eleifend purus. Massa mattis quam amet tortor
              arcu nisl. Eros elementum cras orci at proin ut sem dignissim
              pharetra. Fermentum aliquet in mattis lacus. Cras facilisis nec
              sem scelerisque vulputate. Enim tellus ut condimentum tortor sit
              lectus purus. Aliquet eget dui faucibus dui bibendum consequat.
            </Typography>
            <Box display={"flex"} mt={"1rem"}>
              <Typography
                color={"white"}
                paddingBottom={"20px"}
                fontSize={"20px"}
                width={"60"}
              >
                Lorem ipsum dolor sit amet consectetur. Habitant diam mi semper
                in ultricies ipsum sed ac. Consectetur nascetur sit pharetra
                donec augue netus eget phasellus scelerisque. Laoreet elementum
                bibendum penatibus vitae arcu arcu lectus tincidunt. Volutpat
                nibh netus vitae arcu mattis orci. Lorem faucibus nunc sit at
                faucibus. Pellentesque turpis habitasse urna id. Dignissim vitae
                enim congue est ut odio mauris rutrum dictum. Turpis sagittis
                arcu amet nec adipiscing mattis. Neque viverra sed quis
                convallis. Non aliquam elit vivamus varius eleifend purus. Massa
                mattis quam amet tortor arcu nisl. Eros elementum cras orci at
                proin ut sem dignissim pharetra. Fermentum aliquet in mattis
                lacus. Cras facilisis nec sem scelerisque vulputate. Enim tellus
                ut condimentum tortor sit lectus purus. Aliquet eget dui
                faucibus dui bibendum consequat.
              </Typography>

              {
                //change this on fetching the image data form database
                blog.image == null ? (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    width={"38%"}
                    paddingLeft={"2%"}
                  >
                    <img src="https://picsum.photos/300/300" alt="" />
                  </Box>
                ) : (
                  ""
                )
              }
            </Box>
            <Typography
              color={"white"}
              paddingY={"20px"}
              fontSize={"20px"}
              mt={"1rem"}
            >
              Lorem ipsum dolor sit amet consectetur. Habitant diam mi semper in
              ultricies ipsum sed ac. Consectetur nascetur sit pharetra donec
              augue netus eget phasellus scelerisque. Laoreet elementum bibendum
              penatibus vitae arcu arcu lectus tincidunt. Volutpat nibh netus
              vitae arcu mattis orci. Lorem faucibus nunc sit at faucibus.
              Pellentesque turpis habitasse urna id. Dignissim vitae enim congue
              est ut odio mauris rutrum dictum. Turpis sagittis arcu amet nec
              adipiscing mattis. Neque viverra sed quis convallis. Non aliquam
              elit vivamus varius eleifend purus. Massa mattis quam amet tortor
              arcu nisl. Eros elementum cras orci at proin ut sem dignissim
              pharetra. Fermentum aliquet in mattis lacus. Cras facilisis nec
              sem scelerisque vulputate. Enim tellus ut condimentum tortor sit
              lectus purus. Aliquet eget dui faucibus dui bibendum consequat.
            </Typography>
          </Box>
        </section>
        <section>
          <Box
            borderBottom={"3px solid white"}
            paddingY={"25px"}
            width={"90%"}
            mx={"auto"}
          >
            <CardActions
              disableSpacing
              onMouseLeave={() => setShowSharingBox(false)}
              sx={{ padding: "0px", paddingLeft: "10px" }}
            >
              <IconButton aria-label="add to favorites" onClick={handleUpvote}>
                <ThumbUpAltIcon style={{ color: "#F74D79" }} />
                <span
                  style={{
                    marginLeft: 5,
                    fontSize: "16px",
                    position: "relative",
                    bottom: "-2px",
                    color: "#626262",
                  }}
                >
                  {upvoteCount}
                </span>
              </IconButton>
              <IconButton
                aria-label="share"
                onMouseEnter={() => setShowSharingBox(true)}
              >
                <SendIcon style={{ color: "#626262" }} />
              </IconButton>
              {showSharingBox && (
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft={"8px"}
                  gap={"10px"}
                >
                  <TwitterShareButton
                    url={"https://www.example.com"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <EmailShareButton
                    url={"https://www.example.com"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <WhatsappShareButton
                    url={"https://www.example.com"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Box>
              )}
            </CardActions>
          </Box>
        </section>
        <section style={{ width: "90%", margin: "auto" }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            marginX={"auto"}
            marginY={"33px"}
          >
            <Typography fontSize={"39px"} color={"white"}>
              Related Blogs
            </Typography>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <Typography fontSize={"26px"} color={"white"}>
                More
              </Typography>
            </Link>
          </Box>
          <Box marginBottom={"66px"}>
            <Box display={"flex"} flexWrap={"wrap"}>
              {relatedBlog &&
                relatedBlog.map((blog) => (
                  <Box
                    key={blog._id}
                    maxWidth={"350px"}
                    width={"350px"}
                    mx={"2rem"}
                    my={"3rem"}
                    height={"420px"}
                    flexWrap={"wrap"}
                  >
                    <BlogCard
                      id={blog._id}
                      // isUser={
                      //   localStorage.getItem("userId") === blog.user?.user_id
                      // }
                      title={blog.title}
                      description={blog.content}
                      image="https://picsum.photos/300/300"
                      // image={blog.image}
                      username={blog.user != null ? blog.user.name : "Username"}
                      time={formatDate(blog.time)}
                    />
                  </Box>
                ))}
            </Box>
          </Box>
        </section>
      </Box>
      <Footer />
    </div>
  );
}
