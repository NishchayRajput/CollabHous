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
import "./css/HorzBlogCard.css";
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
      console.log("request ", !likeStatus);
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
        console.log("navigating");
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

  React.useEffect(() => {
    setUpVoteCount(upVoteC);
    setLikeStatus(likeStat);
  }, [upVoteC]);


  return (
    <Card id="cardContainer">
      <Box display={"flex"}>
        <div style={{ display: "block", width: "50%" }}>
          <Link to={`/blogs/${bId}`}>
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
              title=<p
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
              className="cardHeader"
            />
          </Box>

          <Typography className="title" variant="h6" color="text.secondary">
            {title}
          </Typography>

          <Box className="blogDetails">
            <div>
              <p className="readT">{read_time} min read</p>
              <Dot />
              <p className="date">{time}</p>
              <Dot />
              <p className="tag">{tag}</p>
            </div>
          </Box>
          <CardActions disableSpacing className="cardActions">
            <IconButton arqia-label="add to favorites" onClick={handleUpVote}>
              {!likeStatus && (
                <ThumbUpOffAltIcon style={{ color: "#626262" }} />
              )}
              {likeStatus && <ThumbUpAltIcon style={{ color: "#F74D79" }} />}
              <span className="upvote">{upVoteCount}</span>
            </IconButton>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
