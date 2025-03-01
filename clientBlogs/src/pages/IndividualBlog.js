//Individual

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, IconButton } from "@mui/material";
import Markdown from "react-markdown";
import CardActions from "@mui/material/CardActions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BlogCard from "../components/BlogCard";
import "./css/IndividualBlogs.css";
import CommentArea from "../components/CommentArea";

import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { EmailIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function IndividualBlog() {
  //global stae

  const [richdata, setrichData] = useState("");
  const [isLogin, setIsLogin] = useState();
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  let { blogId } = useParams();
  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box
  const [showCommentBox, setShowCommentBox] = useState(true); // State to control the sharing box
  // const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [interaction, setInteraction] = useState([]);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [imgurl, setimgurl] = useState(`images/blogBg.jpg`);
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
        `${process.env.REACT_APP_BACKEND_URL}/blogs/`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

    
      const filterBlogs = (category) => {
        const updateBlogs = data.filter((e) => {
          let check = false;
          // for (let i = 0; i < l - 1; i++) {
          // check = check || e.tag.split(",")[i] === category;
          // }
          check = e.tag === category;
          return check;
        });
        setRelatedBlog(updateBlogs);
        
      };
      filterBlogs("Trending");
    } catch (error) {
      console.log(error);
    }
  };
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
        
        const response = await fetch(data.blogF.richTextContent);
        const textData = await response.text();
        setLoginUsername(data.ud?.name);
        setBlog(data.blogF);
        setInteraction(data.interaction);
        setUserId(data.blogF.user_id._id);
        setLikeStatus(data.blogF.like_status);
        setrichData(textData);
        data.ud?.length !== 0 ? setIsLogin(true) : setIsLogin(false);
      } catch (error) {
        console.log(error);
      }
    }
    localStorage.setItem("selectedTabIndex", "2");
    getBlog();
    getAllBlogs();
    setUpVoteCount(blog.like);
    // fetchData();
  }, [blog.like, blogId]);

  useEffect(() => {
    if (blog?.items?.[0]) {
      // const link = encodeURIComponent(
      //   `https://${blog.items[0].bucket}.s3.${blog.items[0].region}.amazonaws.com/${blog.items[0].s3Key}`
      // );

      
      setimgurl(
        `https://${blog.items[0].bucket}.s3.${blog.items[0].region}.amazonaws.com/${blog.items[0].s3Key}`
      );
    }
  }, [blog?.items?.[0]]);
  const handleUpVote = async (e) => {
    try {
      
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
  const imageRenderer = ({ node, ...props }) => {
    const { src, alt } = props; // Extract needed props from the component props
    return <img src={src} alt={alt} />; // Render the image
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(blog.richTextContent);
  //       const textData = await response.text();
  //       console.log("text data",textData);
  //       setData(textData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [blogId]);

  return (
    <div style={{ marginTop: "-68px" }}>
      <Box>
        <section>
          <Box
            className="section"
            position="relative"
            sx={{
              background: `url(${imgurl}) no-repeat`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "#00000090",
            }}
          ></Box>
          <Box className="heroBanner">
            <Box className="container">
              <Typography className="title">{blog?.title}</Typography>
              <div className="usernameContainer">
                <Typography className="X">X</Typography>
                <Typography className="username">
                  {blog.user_id?.name}
                </Typography>
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
            {/* <Typography className="subtitle">Fashion</Typography> */}
            <Box className="blogContent">
              {/* <Markdown
                className="content"
                components={{ image: imageRenderer }}
              >
                {blog.content}
              </Markdown> */}
              {/* {console.log(blog.richTextContent)} */}
              <div
                className="blogData"
                dangerouslySetInnerHTML={{ __html: richdata }}
              />
              {/* <div>{)}</div> */}
              {/* <img src={blog.richTextContent} alt="Blog Content" /> */}
            </Box>
          </Box>
        </section>
        <section>
          <Box className="reactSection">
            <CardActions
              disableSpacing
              onMouseLeave={() => setShowSharingBox(false)}
              sx={{ padding: "2px", paddingLeft: "10px" }}
            >
              <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
                {!likeStatus && (
                  <ThumbUpOffAltIcon
                    style={{ color: "#626262", width: "30px", height: "30px" }}
                  />
                )}
                {likeStatus && (
                  <ThumbUpAltIcon
                    style={{ color: "#F74D79", width: "30px", height: "30px" }}
                  />
                )}
                <span className="upvote">{upVoteCount}</span>
              </IconButton>
              <IconButton aria-label="add to favorites" onClick={handleComment}>
                {/* <MapsUgcRoundedIcon style={{ color: "#FFFFFF" }} /> */}
                <img src="/images/commentIcon.svg " alt="f" />
              </IconButton>
              <IconButton
                aria-label="share"
                onMouseEnter={() => setShowSharingBox(true)}
              >
                {/* <SendIcon style={{ color: "#626262" }} /> */}
                <img src="/images/shareIcon.svg" alt="f" />
              </IconButton>
              {showSharingBox && (
                <Box className="sharingBox">
                  <TwitterShareButton url={`${frontendURL}/blogs/${blogId}`}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <EmailShareButton url={`${frontendURL}/blogs/${blogId}`}>
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <WhatsappShareButton url={`${frontendURL}/blogs/${blogId}`}>
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
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {relatedBlog &&
                relatedBlog.map((blog) => (
                  <Box key={blog._id} className="relatedBlogCard">
                    <BlogCard
                      bId={blog?._id}
                      uId={blog.user != null ? blog.user.id : ""}
                      tag={blog.tag}
                      title={blog.title?.split(/\s+/).slice(0, 6).join(" ")}
                      description={blog.content}
                      image={
                        blog?.image?.[0]
                          ? `https://${blog.image[0].bucket}.s3.${blog.image[0].region}.amazonaws.com/${blog.image[0].s3Key}`
                          : `images/carouselSample.png`
                      }
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
                      }}
                      style={{
                        textDecoration: "none",
                        height: "84%",
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    ></Link>
                  </Box>
                ))}
            </Box>
          </Box>
        </section>
      </Box>
    </div>
  );
}
