//BlogCard

import * as React from "react";
import { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
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
  likeStat,
}) {
  const navigate = useNavigate();

  const [likeStatus, setLikeStatus] = useState(likeStat);
  const [upVoteCount, setUpVoteCount] = useState(0);

  const handleUpVote = async (e) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/like`,
        {
          bId: bId,
          iId: bId,
          it: !likeStatus ? "like" : "unlike",
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
        navigate("/login");
      } else {
        setLikeStatus(!likeStatus);
        if (!likeStatus === true) setUpVoteCount(upVoteCount + 1);
        else setUpVoteCount(upVoteCount - 1);
      }
    } catch (error) {
      console.log(error);
      // }
    }
  };
  const [avatarSrc, setAvatarSrc] = React.useState("images/defaultAvatar.jpg");

  const handleAvatarError = () => {
    setAvatarSrc("images/defaultAvatar.jpg");
  };
  const limitedDescription = description?.split(/\s+/).slice(0, 18).join(" ");
  const limitedTitle = title?.substring(0, 26) + "...";

  React.useEffect(() => {
    setUpVoteCount(upVoteC);
  }, [upVoteC]);

  React.useEffect(() => {
    setLikeStatus(likeStat);
  }, [likeStat]);

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
              <Avatar
                src={avatarSrc}
                onError={handleAvatarError}
                alt="Avatar"
                sx={{ width: 29, height: 29 }}
              />
            }
            className="cardHeader"
            title={
              <p
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
            }
          />
        </Box>
        <CardContent className="cardContent">
          <Typography
            className="titleContainer"
            variant="h6"
            color="text.secondary"
          >
            <Tooltip className="title" title={title}>
              {title?.length > 25 ? limitedTitle : title}
            </Tooltip>
          </Typography>

          <Typography variant="body2" className="description">
            {limitedDescription}...
          </Typography>
        </CardContent>
        <Box className="content2">
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
