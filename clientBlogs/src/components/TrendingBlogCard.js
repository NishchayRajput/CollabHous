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
  uId,
  title,
  description,
  image,
  username,
  time,
  bId,
  tag,
  upVoteC,
  read_time,
  likeStat,
}) {
  const navigate = useNavigate();

  const [likeStatus, setLikeStatus] = useState(0);
  const [upVoteCount, setUpVoteCount] = useState(0);
  // const handleUpVote = () => {
  //   if (!isLogin) {
  //     navigate("/login");
  //   } else {
  //     // You can implement the upvote logic here, for example, send a request to your backend to record the upvote.
  //     // For this example, I'll simply increase the count by 1.
  //     // setUpvoteCount(upvoteCount + 1);
  //     console.log("clicked the liked button");
  //   }
  // };

  const handleUpVote = async (e) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/blogs/like",
        {
          bId: bId,
          iId: bId,
          it: likeStatus ? "like" : "unlike",
          pId: uId,
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
        console.log("increasing");
        setLikeStatus(!likeStatus);
        if (likeStatus === true) setUpVoteCount(upVoteCount - 1);
        else setUpVoteCount(upVoteCount + 1);
      }
    } catch (error) {
      console.log(error);
      // }
    }
  };

  React.useEffect(() => {
    setUpVoteCount(upVoteC);
    setLikeStatus(false);
  }, [upVoteC]);

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
            title=<p
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: "14.8978px",
                lineHeight: "17px",
                letterSpacing: "0.05em",
                color: "white",
              }}
            >
              {username}
            </p>
            className="cardHeader"
          />
          <div className="blogDetails">
            <p className="readT">{read_time} min read</p>
            <Dot />
            <p className="date">{time}</p>
            <Dot />
            <p className="tag">{tag}</p>
          </div>
        </Box>
        <CardContent className="titleCard">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
        </CardContent>
        <CardContent className="titleCard">
          <Typography variant="body2" className="description">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ zIndex: "8" }}>
          <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
            {!likeStatus && <ThumbUpOffAltIcon style={{ color: "#626262" }} />}
            {likeStatus && <ThumbUpAltIcon style={{ color: "#F74D79" }} />}
            <span className="upvote">{upVoteCount}</span>
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
