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
  description,
  image,
  username,
  time,
  id,
  isUser,
  tag,
  like,
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
    setUpvoteCount(like);
  }, []);
  return (
    <Card
      sx={{
        height: "165px",
        backgroundColor: "#2F2F2F",
        minWidth: "100%",
        margin: "auto",
        mt: 1,
        border: "1px solid #414141",
      }}
    >
     
      <Box display={"flex"}>
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          minWidth={"50%"}
          height={"100%"}
          sx={{ width: "50%" }}
        />
        <Box width={"50%"} paddingTop={'5px'}>
          <Box display={"flex"} justifyContent="space-between" width={'60%'}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500], height:'24px', width:'24px', fontSize:'15px' }} aria-label="recipe">
                  N
                </Avatar>
              }
              title={username}
              sx={{
                padding: "10px",
                paddingLeft: "16px",
                fontSize: "12px",
                color: "white",
                fontWeight: "500",
              }}
            />
          </Box>

          <Typography
            paddingX="18px"
            sx={{ fontSize: "18px", color: "#F74D79" }}
            variant="h6"
            color="text.secondary"
          >
            Title : {title}
          </Typography>

          <Box
            paddingLeft={"16px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <div style={{ display: "flex", alignItems: "center", paddingTop:'10px', paddingLeft:'0px' }}>
              <p style={{ color: "white", padding: "4px",fontSize:'12px' }}>5 min read</p>

              <p style={{ color: "white", padding: "4px",fontSize:'12px' }}>{time}</p>
              <p
                style={{
                  color: "#F74D79",
                  backgroundColor: "rgba(255, 106, 145, 0.12)",
                  borderRadius: "5px",
                  padding: "4px",
                  paddingLeft: "8px",
                  paddingRight: "8px",fontSize:'12px'
                }}
              >
                {tag}
              </p>
            </div>
          </Box>
          <CardActions
            disableSpacing
            onMouseLeave={() => setShowSharingBox(false)}
            sx={{ paddingTop: "10px", paddingLeft: "10px", paddingBottom:'0px' }}
          >
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
            {/* <IconButton
              aria-label="share"
              onMouseEnter={() => setShowSharingBox(true)}
            >
              <SendIcon />
            </IconButton>
            {showSharingBox && (
              <Box
                display="flex"
                alignItems="center"
                marginLeft={"8px"}
                gap={"10px"}
              >
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
            )} */}
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
