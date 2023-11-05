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
        height: "190px",
        backgroundColor:'rgba(75, 75, 75, 1)',
        minWidth: "100%",
        margin: "auto",
        mt: 1,
        boxShadow: "1px 1px 1px #4B4B4B",
        padding: 2,
        ":hover:": {
          boxShadow: "5px 5px 5px #4B4B4B",
        },
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
      <Box display={"flex"}>
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          minWidth={"50%"}
          sx={{ width: "50%" }}
        />
        <Box width={"50%"}>
          <Box display={"flex"} justifyContent="space-between">
            <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {username}
                </Avatar>
              }
              
              title="Username"
              sx={{padding:'10px', paddingLeft:'16px', fontSize:'18px',
              color:"white", fontWeight:'500'}}
            />
          </Box>

          <Typography paddingX="18px" sx={{ fontSize:'18px',
              color:"#F74D79"}} variant="h6" color="text.secondary">
            Title : {title}
          </Typography>

          <Box
            paddingLeft={"16px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ color:'white', padding: "4px" }}>5 min read</p>

              <p style={{ color:'white', padding: "4px" }}>{time}</p>
              <p
                style={{
                  color: "red",
                  backgroundColor: "#dc7c7cad",
                  borderRadius: "5px",
                  padding: "4px",
                }}
              >
                Type
              </p>
            </div>
          </Box>
          <CardActions
            disableSpacing
            onMouseLeave={() => setShowSharingBox(false)}
            sx={{padding:'0px', paddingLeft:'10px'}}
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
      </Box>
    </Card>
  );
}
