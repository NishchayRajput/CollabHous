//CommentCard

import React, { useState } from "react";
import "./css/CommentCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ReplyCard from "./ReplyCard";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const CommentCard = ({
  content,
  cId,
  bId,
  uId,
  commentUserName,
  repliesArray,
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState(false);
  const navigate = useNavigate();
  //for reply text
  const [replyText, setReplyText] = useState({ replyText: "" });

  //toggling functions for reply and view reply options
  const handleViewReply = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
  };
  // ...
  const handleReply = () => {
    setReply((prevReply) => !prevReply);
  };
  //handle input change
  const handleChange = (e) => {
    setReplyText((prevState) => ({
      ...prevState,
      replyText: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/blogs/reply",
        {
          bId: bId,
          iId: cId,
          content: replyText.replyText,
          pId: uId,
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
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //showing comments
    <div className="commentContainer">
      <div className="commentCard">
        <div className="userDetail">
          <div className="logoUsernameContainer">
            <div className="logo">Ch</div>
            <div className="username">{commentUserName}</div>
          </div>
        </div>
        <div className="textArea">{content}</div>
        <div className="buttonArea">
          <div className="replyBtnContainer">
            <div className="reply" onClick={handleViewReply}>
              <div className="icon">
                <ChatRoundedIcon />
              </div>
              <div className="replyCount">
                {showReplies ? "Hide replies" : "View replies"}
              </div>
            </div>
            <div className="replyBtn" onClick={handleReply}>
              Reply
            </div>
          </div>
        </div>
      </div>
      {/* reply text area starts here */}
      {reply && (
        <form onSubmit={handleSubmit} className="replyBox">
          <div className="userDetail">
            <div className="logoUsernameContainer">
              <div className="logo">Ch</div>
              <div className="username">CollabHous</div>
            </div>
          </div>
          <div className="textArea">
            <input
              type="text"
              id="textBox"
              name="replyText" // Update this to "replyText"
              value={replyText.replyText}
              onChange={handleChange}
              placeholder="Reply here..."
            ></input>
          </div>
          <div className="buttonArea">
            <button id="respondBtn" type="submit">
              Respond
            </button>
          </div>
        </form>
      )}
      {/* showing replies */}
      {showReplies &&
        repliesArray.map((i) => (
          <ReplyCard content={i.reply_content} replyUsername={i.user_id.name} />
        ))}
    </div>
  );
};

export default CommentCard;
