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
import "./css/HorzBlogCard.css";
import { Link } from "react-router-dom";

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
      // setUpvoteCount(upvoteCount + 1);
    }
  };

  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box visibility
  React.useEffect(() => {
    setUpvoteCount(likeCount);
  }, []);
  return (
    <Card id="cardContainer">
      <Box display={"flex"}>
        <div style={{ display: "block", width: "50%" }}>
          <Link to={`/blogs/${id}`}>
            <CardMedia
              component="img"
              image={image}
              alt="Paella dish"
              minWidth={"50%"}
              height={"100%"}
              sx={{ width: "100%" }}
            />
          </Link>
        </div>
        <Box width={"50%"} paddingTop={"5px"}>
          <Box display={"flex"} justifyContent="space-between" width={"100%"}>
            <CardHeader
              avatar={
                <Avatar className="avatar" aria-label="recipe">
                  N
                </Avatar>
              }
              title={username}
              className="cardHeader"
            />
          </Box>

          <Typography className="title" variant="h6" color="text.secondary">
            Title : {title}
          </Typography>

          <Box className="blogDetails">
            <div>
              <p className="readT">{read_time} min read</p>

              <p className="date">{time}</p>
              <p className="tag">{tag}</p>
            </div>
          </Box>
          <CardActions
            disableSpacing
            onMouseLeave={() => setShowSharingBox(false)}
            className="cardActions"
          >
            <IconButton aria-label="add to favorites" onClick={handleUpvote}>
              <ThumbUpAltIcon style={{ color: "#626262" }} />
              <span className="upvote">{upvoteCount ? upvoteCount : "0"}</span>
            </IconButton>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
