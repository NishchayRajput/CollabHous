//CommentArea

import React, { useEffect, useState } from "react";
import "./css/CommentArea.css";
import CommentCard from "./CommentCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
const CommentArea = ({ bId, bloguId, interactionArray, isLogin, username }) => {
  const [comment, setComment] = useState({ comment: "" });
  const navigate = useNavigate();
  const [loginStatus, setloginStatus] = useState();
  //handle input change
  const handleChange = (e) => {
    setComment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/comment`,
        {
          bId: bId,
          iId: bId,
          it: "comment",
          content: comment.comment,
          pId: bloguId,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.message === "Please login first") {
        navigate("/login");
      } else {
        window.location.reload();
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setloginStatus(isLogin);
  }, [isLogin]);
  
  const [avatarSrc, setAvatarSrc] = React.useState(
    `${process.env.PUBLIC_URL}/defaultAvatar.jpg`
  );

  const handleAvatarError = () => {
    setAvatarSrc(`${process.env.PUBLIC_URL}/defaultAvatar.jpg`);
  };
 
  return (
    <div className="containerCommentArea">
      {loginStatus && (
        <form onSubmit={handleSubmit} className="typeBox">
          <div className="userDetail">
            <div className="logoUsernameContainer">
              <Avatar
                src={avatarSrc}
                onError={handleAvatarError}
                alt="Avatar"
                sx={{ width: 29, height: 29 }}
              />
            </div>
          </div>
          <div className="textArea">
            <input
              type="text"
              id="textBox"
              name="comment"
              value={comment.comment}
              onChange={handleChange}
              placeholder="Comment here..."
            />
          </div>
          <div className="buttonArea">
            <button id="respondBtn" type="submit">
              Respond
            </button>
          </div>
        </form>
      )}
      {interactionArray.map(
        (i) =>
          i.interaction_type === "comment" && (
            <CommentCard
              content={i.interaction_content}
              commentUserName={i.user_id.name}
              cId={i._id}
              bId={bId}
              uId={i.user_id}
              repliesArray={i.replies}
            />
          )
      )}
    </div>
  );
};

export default CommentArea;
