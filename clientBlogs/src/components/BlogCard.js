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
    <Card
      sx={{
        borderRadius: "10px",
        backgroundColor: "#2F2F2F",
        minWidth: "100%",
        height: "100%",

        mt: 1,
        
        border: "1px solid #414141",
      }}
    >
      
      <CardMedia component="img" height="48%" image={image} alt="Paella dish" />
      <Box
        height="50%"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        marginTop={"10px"}
        padding='2'
      >
        <Box display={"flex"} justifyContent="space-between" sx={{}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                N
              </Avatar>
            }
            title={username}
            sx={{
              padding: "0px",
              paddingLeft: "16px",
              fontSize: "18px",
              color: "white",
              fontWeight: "500",
            }}
          />
        </Box>
        <CardContent style={{paddingTop:'2px', paddingBottom:'11px', marginTop:'0px'}}>
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
            <p
              style={{
                color: "#F74D79",
                backgroundColor: "rgba(255, 106, 145, 0.12)",
                borderRadius: "5px",
                padding: "4px",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginLeft: "5px",
                fontSize: "12px",
              }}
            >
              {tag}
            </p>
          </div>
        </Box>
        <CardActions disableSpacing style={{paddingTop:'0px', zIndex:'8'}}>
          <IconButton aria-label="add to favorites" onClick={handleUpvote}>
            <ThumbUpAltIcon style={{ color: "#626262" }} />
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
        </CardActions>
      </Box>
    </Card>
  );
}
