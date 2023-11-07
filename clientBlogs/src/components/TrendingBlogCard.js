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
import SendIcon from "@mui/icons-material/Send";
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

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
  tag,
}) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

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

  const [showSharingBox, setShowSharingBox] = useState(false); // State to control the sharing box visibility

  return (
    <Card
      sx={{
        borderRadius: "10px",
        backgroundColor: "#2F2F2F",
        minWidth: "100%",
        height: "100%",
        margin: "auto",
        mt: 1,
        padding: 2,
        border: "1px solid #414141",
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}

      <CardMedia component="img" height="50%" image={image} alt="Paella dish" />
      <Box
        height="50%"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"} justifyContent="space-between" sx={{}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                "Username"
              </Avatar>
            }
            title={username}
            sx={{
              padding: "10px",
              paddingLeft: "16px",
              fontSize: "18px",
              color: "white",
              fontWeight: "500",
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "white", padding: "4px" }}>5 min read</p>

            <p style={{ color: "white", padding: "4px" }}>{time}</p>
            <p
              style={{
                color: "#F74D79",
                backgroundColor: "rgba(255, 106, 145, 0.12)",
                borderRadius: "5px",
                padding: "4px",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              {tag}
            </p>
          </div>
        </Box>
        <CardContent>
          <Typography
            paddingY="10px"
            sx={{ fontSize: "18px", color: "#F74D79" }}
            variant="h6"
            color="text.secondary"
          >
            Title : {title}
          </Typography>
          <Typography variant="body2" color="white" fontSize={"15px"}>
            Description : {description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          onMouseLeave={() => setShowSharingBox(false)}
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
            <Box display="flex" alignItems="center">
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
    </Card>
  );
}
