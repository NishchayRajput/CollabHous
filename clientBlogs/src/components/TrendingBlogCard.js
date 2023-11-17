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
  like,
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
    setUpvoteCount(like);
  }, []);

  return (
    <Card
      sx={{
        borderRadius: "10px",
        backgroundColor: "#2F2F2F",
        minWidth: "100%",
        height: "531px",
        margin: "auto",
        mt: 1,
        border: "1px solid #414141",
      }}
    >
      <CardMedia component="img" height="50%" image={image} alt="Paella dish" />
      <Box
        height="50%"
        display={"flex"}
        flexDirection={"column"}
        // justifyContent={"space-around"}
        padding="2"
        marginX={"10px"}
        marginTop={"16px"}
        gap={'10px'}
      >
        <Box display={"flex"} justifyContent="space-between" sx={{}}>
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
            sx={{
              padding: "10px",
              paddingLeft: "16px",
              fontSize: "13px",
              color: "white",
              fontWeight: "500",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <p style={{ color: "white", padding: "4px",  

                  fontFamily: 'Questrial',
                  fontWeight: "400",
                  fontSize: "14.8978px",
                  lineHeight: "15px",
                  letterSpacing:"0.05em",

            }}>
              {read_time} min read 
            </p>
            <Dot />
            <p style={{ color: "white", padding: "4px", 
                  fontFamily: 'Questrial',
                  fontWeight: "400",
                  fontSize: "14.8978px",
                  lineHeight: "15px",
                  letterSpacing:"0.05em",
             }}>
              {time}
            </p>
            <Dot />
            <p
              style={{
                color: "#F74D79",
                backgroundColor: "rgba(255, 106, 145, 0.12)",
                borderRadius: "5px",
                padding: "4px",
                paddingLeft: "8px",
                paddingRight: "8px",
                marginRight: "16px",



                fontFamily: 'Questrial',
                fontWeight: "400",
                fontSize: "14.8978px",
                lineHeight: "15px",
                letterSpacing:"0.05em",
              }}
            >
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
            <p style={{
                fontFamily: 'Roboto',
                fontWeight: "900",
                fontSize: "22.3468px",
                lineHeight: "26px",
                letterSpacing: "0.05em",
                color: "#F74D79",

            }}>{title}</p>
          </Typography>
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
          style={{zIndex:'8'}}
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
            <SendIcon style={{color:'#626262'}} />
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
    </Card>
  );
}
