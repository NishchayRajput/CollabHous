import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Box, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./css/TrendingBlogCard.css";
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

  const [likeStatus, setLikeStatus] = useState(0);
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

  const limitedDescription = description?.split(/\s+/).slice(0, 20).join(" ");

  const limitedTitle = title?.substring(0, 40) + "...";

  React.useEffect(() => {
    setUpVoteCount(upVoteC);
    setLikeStatus(likeStat);
  }, [upVoteC, likeStat]);

  return (
    <Card id="card">
      <div className="imageCard">
        <Link to={`/blogs/${bId}`}>
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={image}
            alt="Paella dish"
          />
        </Link>
      </div>
      <Box className="cardContent">
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
            title={
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: "14.8978px",
                  lineHeight: "17px",
                  letterSpacing: "0.05em",
                  color: "white",
                }}
              >
                {username}
              </p>
            }
            className="cardHeader"
          />
          <div className="blogDetails">
            <p className="readT">{read_time} min read</p>
            <Dot />
            <p className="date">{time}</p>
            <Dot />
            <p className="tag">{tag}</p>
          </div>
        </Box>

        <CardContent className="titleCard">
          <Link to={`/blogs/${bId}`} style={{ textDecoration: "none" }}>
            <Typography variant="h6" className="title">
              <Tooltip title={title} arrow>
                {title?.length > 40 ? limitedTitle : title}
              </Tooltip>
            </Typography>
          </Link>
        </CardContent>
        <CardContent className="titleCard">
          <Typography variant="body2" className="description">
            {limitedDescription}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ zIndex: "8" }}>
          <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
            {!likeStatus && <ThumbUpOffAltIcon style={{ color: "#626262" }} />}
            {likeStatus && <ThumbUpAltIcon style={{ color: "#F74D79" }} />}
            <span className="upvote">{upVoteCount}</span>
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
