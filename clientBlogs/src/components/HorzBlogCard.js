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
        <Box width={"50%"} paddingTop={"5px"}>
          <Box display={"flex"} justifyContent="space-between" width={"100%"}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: red[500],
                    height: "24px",
                    width: "24px",
                    fontSize: "15px",
                  }}
                  aria-label="recipe"
                >
                  N
                </Avatar>
              }
              title=<p  style={{

                  fontFamily: 'Roboto',
                  fontWeight: "700",
                  fontSize:"12px",
                  lineHeight: "14px",
                  letterSpacing: "0.05em",
                  color: "white",}}>{username}</p>
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
            <p style={{
                fontFamily: 'Roboto',
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "0.05em",
                color: "#F74D79",
            }}>{title}</p>
          </Typography>

          <Box
            paddingLeft={"16px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "10px",
                paddingLeft: "0px",
              }}
            >
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
              <p style={{ color: "white", padding: "4px 4px",  fontFamily: 'Questrial',
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "12px",
                  letterSpacing:"0.05em", }}>
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
                  fontSize: "12px",
                  marginLeft: "5px",


                fontFamily: 'Questrial',
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "12px",
                letterSpacing:"0.05em",


                }}
              >
                {tag}
              </p>
            </div>
          </Box>
          <CardActions
            disableSpacing
            onMouseLeave={() => setShowSharingBox(false)}
            sx={{
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingBottom: "0px",
            }}
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
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
