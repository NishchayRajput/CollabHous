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

export default function BlogCard({
  title,
  tag,
  description,
  image,
  username,
  time,
  id,
  isUser,
  like,
  read_time,
}) {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };
  const [upvoteCount, setUpvoteCount] = useState(0);
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
  React.useEffect(() => {
    setUpvoteCount(like);
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
            title={username}
            className="cardHeader"
          />
        </Box>
        <CardContent className="cardContent">
          <Typography
            paddingBottom="10px"
            sx={{ fontSize: "18px", color: "#F74D79" }}
            variant="h6"
            color="text.secondary"
          >
            Title : {title}
          </Typography>
          <Typography variant="body2" color="white" fontSize={"13px"}>
            Description : {description}
          </Typography>
        </CardContent>
        <Box paddingLeft={"14px"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "white", padding: "4px", fontSize: "12px" }}>
              {read_time} min read
            </p>

            <p style={{ color: "white", padding: "4px", fontSize: "12px" }}>
              {time}
            </p>
            <p className="tag">{tag}</p>
          </div>
        </Box>
        <CardActions disableSpacing style={{ paddingTop: "0px", zIndex: "8" }}>
          <IconButton arqia-label="add to favorites" onClick={handleUpvote}>
            <ThumbUpOffAltIcon style={{ color: "#626262" }} />
            <span
              className="upvote"
            >
              {upvoteCount ? upvoteCount : "0"}
            </span>
          </IconButton>
        </CardActions>
      </Box>
    </div>
  );
}
