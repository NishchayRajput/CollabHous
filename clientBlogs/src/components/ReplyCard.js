import React from "react";
import "./css/ReplyCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

const CommentCard = () => {
  return (
    <div className="replyCard">
      <div className="userDetail">
        <div className="logoUsernameContainer">
          <div className="logo">Ch</div>
          <div className="username">CollabHous</div>
        </div>
        {/* <div className="likeCard">
          <div className="like">
            <FavoriteBorderIcon />
          </div>
          <p className="likeCount">400</p>
        </div> */}
      </div>
      <div className="textArea">
        This blog is simply good wih good and good also simply good and
        excellent marvellous mind blowing tremendous.This blog is simply good
        wih good and good also simply good and excellent marvellous mind blowing
        tremendous.
      </div>
      {/* <div className="buttonArea">
        <div className="replyBtnContainer">
          <div className="reply">
            <div className="icon">
              <ChatRoundedIcon />
            </div>
            <div className="replyCount">View replies</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CommentCard;
