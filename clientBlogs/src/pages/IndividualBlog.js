import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Tab, Tabs, Typography, IconButton } from "@mui/material";

import CardActions from "@mui/material/CardActions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SendIcon from "@mui/icons-material/Send";
import BlogCard from "../components/BlogCard";

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

const IndividualBlog = () => {
  // Get the blogId from the URL using useParams
  let { blogId } = useParams();

  // Fetch the individual blog data using the blogId
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/blogs/:${blogId}`
        );
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
  }, []);

  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box visibility
  // You can use this ID to fetch the specific blog content
  console.log(blogs);

  return (
    <div style={{ marginTop: "-68px" }}>
      <Box>
        <section>
          <Box
            className="section"
            minHeight="100vh"
            color={"black"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position="relative"
            sx={{
              background: 'url("https://picsum.photos/300/200") no-repeat',
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "#00000090",
            }}
          ></Box>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"16px"}
              position={"relative"}
              top="-100px"
            >
              <Typography
                fontSize={"36px"}
                color={"#F74D79"}
                fontWeight={"500"}
              >
                The Hills of the City
              </Typography>
              <Typography fontSize={"36px"} fontWeight={"900"} color={"grey"}>
                X
              </Typography>
              <Typography fontSize={"23px"} color={"white"} fontWeight={"500"}>
                CollabHous
              </Typography>
              <Box>
                <img
                  src=""
                  sx={{ width: "36px", height: "36px", borderRaius: "50%" }}
                />
              </Box>
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
                The Hills of the City
              </Typography>
              <Typography fontSize={"36px"} fontWeight={"900"} color={"grey"}>
                X
              </Typography>
              <Typography fontSize={"23px"} color={"white"} fontWeight={"500"}>
                CollabHous
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
                    5 min read
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
                    October 10
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
                    Type
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
            >
              Subtitle
            </Typography>
            <Typography color={"white"} paddingY={"20px"} fontSize={"20px"}>
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
            <Box display={"flex"} justifyContent={"center"}>
              <img src="https://picsum.photos/300/300" />
            </Box>
            <Typography color={"white"} paddingY={"20px"} fontSize={"20px"}>
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
            <Box display={"flex"} justifyContent={"center"}>
              <img src="https://picsum.photos/300/300" />
            </Box>
            <Typography color={"white"} paddingY={"20px"} fontSize={"20px"}>
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
              <IconButton aria-label="add to favorites">
                <ThumbUpAltIcon />
              </IconButton>
              <IconButton
                aria-label="share"
                onMouseEnter={() => setShowSharingBox(true)}
              >
                <SendIcon />
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
        <section>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"90%"}
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
              {blogs &&
                blogs.map((blog) => (
                  <Box
                    key={blog.user_id}
                    maxWidth={"350px"}
                    width={"350px"}
                    mx={"2rem"}
                    my={"3rem"}
                    height={"420px"}
                    flexWrap={"wrap"}
                  >
                    <BlogCard
                      id={blog.user_id}
                      isUser={
                        localStorage.getItem("userId") === blog.user?.user_id
                      }
                      title={blog.title}
                      description={blog.content}
                      image={blog.image}
                      username={blog.user?.username}
                      time={blog.time}
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
};

export default IndividualBlog;
