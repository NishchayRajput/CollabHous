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
import "./css/BlogCard.css";
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
}) {
  const navigate = useNavigate();

  const [likeStatus, setLikeStatus] = useState(false);
  const [upVoteCount, setUpVoteCount] = useState(0);

  // const handleUpVote = () => {
  //   if (!isLogin) {
  //     navigate("/login");
  //   } else {
  //     // You can implement the upvote logic here, for example, send a request to your backend to record the upvote.
  //     // For this example, I'll simply increase the count by 1.
  //     // setUpvoteCount(upvoteCount + 1);
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
          it: likeStatus,
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
        // navigate("/login");
        // console.log("navigating");
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
  }, []);

  return (
    <div className="card">
      <CardMedia
        className="cardMedia"
        component="img"
        image={image}
        alt="Paella dish"
      />
      <Box className="details">
        <Box display={"flex"} justifyContent="space-between">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                N
              </Avatar>
            }
            className="cardHeader"
            title=<p
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.05em",
                color: "white",
              }}
            >
              {username}
            </p>
          />
        </Box>
        <CardContent className="cardContent">
          <Typography
            className="titleContainer"
            variant="h6"
            color="text.secondary"
          >
            <p className="title">{title}</p>
          </Typography>
          <Typography variant="body2">
            <p className="description">{description}</p>
          </Typography>
        </CardContent>
        <Box paddingLeft={"22px"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="read_time">{read_time} min read</p>
            <Dot />
            <p className="date">{time}</p>
            <Dot />
            <p className="tag">{tag}</p>
          </div>
        </Box>
        <CardActions disableSpacing style={{ paddingTop: "0px", zIndex: "8" }}>
          <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
            {!likeStatus && <ThumbUpOffAltIcon style={{ color: "#626262" }} />}
            {likeStatus && <ThumbUpAltIcon style={{ color: "#F74D79" }} />}
            <span className="upvote">{upVoteCount}</span>
          </IconButton>
        </CardActions>
      </Box>
    </div>
  );
}
