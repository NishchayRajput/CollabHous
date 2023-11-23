import React, { useState } from "react";
import "./css/CommentCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ReplyCard from "./ReplyCard";

const CommentCard = ({ content }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState(false);

  const handleViewReply = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
  };
  // ...
  const handleReply = () => {
    setReply((prevReply) => !prevReply);
  };
  // ...

  return (
    <div className="commentContainer">
      <div className="commentCard">
        <div className="userDetail">
          <div className="logoUsernameContainer">
            <div className="logo">Ch</div>
            <div className="username">CollabHous</div>
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
      {reply && (
        <form className="replyBox">
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
              name="textBox"
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
      {showReplies && <ReplyCard />}
    </div>
  );
};

export default CommentCard;
