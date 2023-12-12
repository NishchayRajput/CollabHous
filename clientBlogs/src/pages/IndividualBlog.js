//Individual

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Tab, Tabs, Typography, IconButton } from "@mui/material";

import Markdown from "react-markdown";
import CardActions from "@mui/material/CardActions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SendIcon from "@mui/icons-material/Send";
import BlogCard from "../components/BlogCard";
import "./css/IndividualBlogs.css";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import CommentArea from "../components/CommentArea";

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
  const [isLogin, setIsLogin] = useState();
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  let { blogId } = useParams();
  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box
  const [showCommentBox, setShowCommentBox] = useState(true); // State to control the sharing box
  const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [interaction, setInteraction] = useState([]);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [loginUsername, setLoginUsername] = useState("");
  const frontendURL = process.env.REACT_APP_FRONTEND_URL;
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const [likeStatus, setLikeStatus] = useState();
  const [upVoteCount, setUpVoteCount] = useState(0);
  const scrollToPercentage = (percentage) => {
    const scrollToY =
      (percentage / 100) * (document.body.scrollHeight - window.innerHeight);
    window.scrollTo({ top: scrollToY, behavior: "instant" });
  };
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/`
      ); //sending without credentials as it was causing bugs
      setAllBlogs(data);
      console.log();
      const filterBlogs = (category) => {
        const updateBlogs = data.filter((e) => {
          // let l = e.tag.split(",").length;
          let check = false;
          // for (let i = 0; i < l - 1; i++) {
          // check = check || e.tag.split(",")[i] === category;
          // }
          check = e.tag === category;
          return check;
        });
        // console.log(updateBlogs);
        setRelatedBlog(updateBlogs);
      };
      filterBlogs("Community");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(allBlogs);
  // const filterBlogs = (category) => {
  //   const updateBlogs = allBlogs.filter((e) => {
  //     let l = e.tag.split(",").length;
  //     let check = false;
  //     for (let i = 0; i < l - 1; i++) {
  //       check = check || e.tag.split(",")[i] === category;
  //     }
  //     return check;
  //   });
  //   setRelatedBlog(updateBlogs);
  // };

  // Get the blogId from the URL using useParams

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/${blogId}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setLoginUsername(data.ud.name);
        setBlog(data.blogF);
        setInteraction(data.interaction);
        setUserId(data.blogF.user_id._id);
        setLikeStatus(data.blogF.like_status);
        console.log(data.blogF.like_status);
        data.ud.length != 0 ? setIsLogin(true) : setIsLogin(false);
        // console.log(data.interaction);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
    getAllBlogs();
    setUpVoteCount(blog.like);
  }, [blog.like]);

  const handleUpVote = async (e) => {
    try {
      console.log("request ", !likeStatus);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/like`,
        {
          bId: blogId,
          iId: blogId,
          it: !likeStatus ? "like" : "unlike",
          pId: userId,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (data.message === "Please login first") {
        navigate("/login");
        console.log("navigating");
      } else {
        setLikeStatus(!likeStatus);
        if (!likeStatus === true) setUpVoteCount(upVoteCount + 1);
        else setUpVoteCount(upVoteCount - 1);
      }
    } catch (error) {
      console.log(error);
      // }
    }
  };
  const handleComment = () => {
    setShowCommentBox(!showCommentBox);
  };
  // You can use this ID to fetch the specific blog content

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
              <div className="usernameContainer">
                <Typography className="X">X</Typography>
                <Typography className="username">
                  {blog.user_id?.name}
                </Typography>
                <img src="" />{" "}
              </div>
            </Box>
          </Box>
        </section>
        <section style={{ minHeight: "100vh" }}>
          <Box className="blogBanner">
            <Box className="container">
              <Typography className="title">{blog.title}</Typography>
              <div className="usernameContainer">
                <Typography className="X">X</Typography>
                <Typography className="username">
                  {blog.user_id?.name}
                </Typography>
                <img src="" />{" "}
              </div>
            </Box>
          </Box>
          <Box
            className="blogDetail"
            // paddingX={"3%"}
          >
            <Box display={"flex"} marginX={"auto"} width={"90%"}>
              <Box className="container">
                <div>
                  <p className="readT">{blog.read_time} min read</p>
                  <Box className="dot"></Box>
                  <p className="date">{formatDate(blog.time)}</p>
                  <Box className="dot"></Box>
                  <p className="tag">{blog.tags}</p>
                </div>
              </Box>
            </Box>
          </Box>
          <Box className="blogContainer">
            <Typography className="subtitle">Fashion</Typography>
            <Box className="blogContent">
              <Markdown className="content">{blog.content}</Markdown>
            </Box>
            {/* <Box className="blogContent">
              {blog.image == null ? (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width={"38%"}
                  paddingRight={"2%"}
                  className="image"
                >
                  <img src="https://picsum.photos/300/300" alt="" />
                </Box>
              ) : (
                ""
              )}

              <Typography className="content" width={"60"}>
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
            <Typography className="content" mt={"1rem"}>
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
            <Box className="blogContent">
              <Typography className="content" width={"60"}>
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
                    className="image"
                  >
                    <img src="https://picsum.photos/300/300" alt="" />
                  </Box>
                ) : (
                  ""
                )
              }
            </Box>
            <Typography className="content" mt={"1rem"}>
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
            </Typography> */}
          </Box>
        </section>
        <section>
          <Box className="reactSection">
            <CardActions
              disableSpacing
              onMouseLeave={() => setShowSharingBox(false)}
              sx={{ padding: "0px", paddingLeft: "10px" }}
            >
              <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
                {!likeStatus && (
                  <ThumbUpOffAltIcon style={{ color: "#626262" }} />
                )}
                {likeStatus && <ThumbUpAltIcon style={{ color: "#F74D79" }} />}
                <span className="upvote">{upVoteCount}</span>
              </IconButton>
              <IconButton aria-label="add to favorites" onClick={handleComment}>
                {/* <MapsUgcRoundedIcon style={{ color: "#FFFFFF" }} /> */}
                <img src="/images/commentIcon.svg" />
              </IconButton>
              <IconButton
                aria-label="share"
                onMouseEnter={() => setShowSharingBox(true)}
              >
                {/* <SendIcon style={{ color: "#626262" }} /> */}
                <img src="/images/shareIcon.svg" />
              </IconButton>
              {showSharingBox && (
                <Box className="sharingBox">
                  <TwitterShareButton
                    url={`${frontendURL}/blogs/${blogId}`}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <EmailShareButton
                    url={`${frontendURL}/blogs/${blogId}`}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <WhatsappShareButton
                    url={`${frontendURL}/blogs/${blogId}`}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Box>
              )}
            </CardActions>
          </Box>

          {showCommentBox && (
            <div className="commentBox">
              <CommentArea
                bId={blogId}
                bloguId={userId}
                interactionArray={interaction}
                isLogin={isLogin}
                username={loginUsername}
              />
            </div>
          )}
        </section>
        <section style={{ width: "90%", margin: "auto" }}>
          <Box className="relatedBlogsSection">
            <Typography className="title">Related Blogs</Typography>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <Typography className="more">More</Typography>
            </Link>
          </Box>
          <Box marginBottom={"66px"}>
            <Box display={"flex"} flexWrap={"wrap"}>
              {relatedBlog &&
                relatedBlog.map((blog) => (
                  <Box key={blog._id} className="relatedBlogCard">
                    <BlogCard
                      bId={blog?._id}
                      uId={blog.user != null ? blog.user.id : ""}
                      tag={blog.tag}
                      title={blog.title}
                      description={blog.content}
                      image="https://picsum.photos/id/11/300/200"
                      username={blog.user != null ? blog.user.name : "Username"}
                      time={formatDate(blog.time)}
                      upVoteC={blog.like}
                      read_time={blog.read_time}
                      likeStat={blog.like_status}
                    />
                    <Link
                      to={`/blogs/${blog._id}`}
                      onClick={() => {
                        scrollToPercentage(0);
                        // window.location.reload();
                      }}
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
        </section>
      </Box>
      <Footer />
    </div>
  );
}
