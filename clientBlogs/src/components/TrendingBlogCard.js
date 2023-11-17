import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useSelector } from "react-redux";
import "./css/TrendingBlogCard.css";
import Dot from "./Dot";

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
  tag,
  likeCount,
  read_time,
}) {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const navigate = useNavigate();

  const [upvoteCount, setUpvoteCount] = useState(0);
  const handleUpvote = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      // You can implement the upvote logic here, for example, send a request to your backend to record the upvote.
      // For this example, I'll simply increase the count by 1.
      setUpvoteCount(upvoteCount + 1);
    }
  };

  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box visibility
  React.useEffect(() => {
    setUpvoteCount(likeCount);
  }, []);

  return (
    <Card id="card">
      <CardMedia component="img" height="50%" image={image} alt="Paella dish" />
      <Box className="cardContent">
        <Box display={"flex"} justifyContent="space-between">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                N
              </Avatar>
            }
            title=<p style={{
                  fontFamily: 'Roboto',
                  fontWeight: "700",
                  fontSize:"14.8978px",
                  lineHeight: "17px",
                  letterSpacing: "0.05em",
                  color: "white",
            }}>{username}</p>
            
            className="cardHeader"
    
          />
          <div className="blogDetails" >
            <p className="readT">
              {read_time} min read 
            </p>
            <Dot />
            <p className="date">
              {time}
            </p>
            <Dot />
            <p className="tag">
              {tag}
            </p>
          </div>
        </Box>
        <CardContent style={{paddingTop:'0px', paddingBottom:'0px'}}>
          <Typography
            paddingY="10px"
            sx={{ fontSize: "18px", color: "#F74D79" }}
            variant="h6"
            color="text.secondary"
          >
            <p className="title">{title}</p>
          </Typography>
        </CardContent>
        <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
         
          <Typography variant="body2" color="white" fontSize={"15px"}>
            <p style={{
                fontFamily: 'Roboto',
                fontWeight: "300",
                fontSize: "14.8978px",
                lineHeight: "20px",
                letterSpacing: "0.05em",
                color: "#FFFFFF",

            }}>{description}</p>
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          onMouseLeave={() => setShowSharingBox(false)}
          style={{ zIndex: "8" }}
        >
          <IconButton aria-label="add to favorites" onClick={handleUpvote}>
            <ThumbUpOffAltIcon style={{ color: "#626262" }} />
            <span className="upvote">{upvoteCount ? upvoteCount : "0"}</span>
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
