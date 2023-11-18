import React, { useState } from "react";
import "./css/CommentCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ReplyCard from "./ReplyCard";

const CommentCard = () => {
  const [showReplies, setShowReplies] = useState(false);

  const handleViewReply = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
  };

  return (
    <div className="commentContainer">
      <div className="commentCard">
        <div className="userDetail">
          <div className="logoUsernameContainer">
            <div className="logo">Ch</div>
            <div className="username">CollabHous</div>
          </div>
        </div>
        <div className="textArea">
          This blog is simply good with good and good also simply good and
          excellent marvelous mind-blowing tremendous. This blog is simply good
          with good and good also simply good and excellent marvelous mind-
          blowing tremendous.
        </div>
        <div className="buttonArea">
          <div className="replyBtnContainer">
            <div className="reply" onClick={handleViewReply}>
              <div className="icon">
                <ChatRoundedIcon />
              </div>
              <div className="replyCount" >
                {showReplies ? "Hide replies" : "View replies"}
              </div>
            </div>
            <div className="replyBtn">Reply</div>
          </div>
        </div>
      </div>
      
      {showReplies && <ReplyCard />}
    </div>
  );
};

export default CommentCard;
