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
            className="cardHeader"
            title=<p style={{
              fontFamily: 'Roboto',
                  fontWeight: "700",
                  fontSize:"12px",
                  lineHeight: "14px",
                  letterSpacing: "0.05em",
                  color: "white",}}>{username}</p>
            
          />
        </Box>
        <CardContent className="cardContent">
          <Typography
            paddingBottom="10px"
            sx={{ fontSize: "18px", color: "#F74D79" }}
            variant="h6"
            color="text.secondary"
          >
            <p style={{
                fontFamily: 'Roboto',
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "0.05em",
                color: "#F74D79",
                paddingTop: "10px",
            }}>{title}</p>
          </Typography>
          <Typography variant="body2" color="white" fontSize={"13px"}>
            <p style={{

                fontFamily: 'Roboto',
                fontWeight: "300",
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.05em",
                color: "white",
            }}>{description}</p>
          </Typography>
        </CardContent>
        <Box paddingLeft={"22px"}>
          <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "white", padding: "4px", 
                  fontFamily: 'Questrial',
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "12px",
                  letterSpacing:"0.05em",

               }}>
                {read_time} min read
              </p>
                <Dot />
            <p style={{ color: "white", padding: "4px", 
                  fontFamily: 'Questrial',
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "12px",
                  letterSpacing:"0.05em",

               }}>
              {time}
            </p>
            <Dot/>
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
