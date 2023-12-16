import React from "react";
import "./css/ReplyCard.css";
import { Avatar } from "@mui/material";


const CommentCard = ({ content, replyUsername }) => {
  const [avatarSrc, setAvatarSrc] = React.useState(
    "images/defaultAvatar.jpg"
  );

  const handleAvatarError = () => {
    setAvatarSrc("images/defaultAvatar.jpg");
  };
  return (
    <div className="replyCard">
      <div className="userDetail">
        <div className="logoUsernameContainer">
        <Avatar
            src={avatarSrc}
            onError={handleAvatarError}
            alt="Avatar"
            sx={{ width: 29, height: 29 }}
          />
        </div>
        {/* <div className="likeCard">
          <div className="like">
            <FavoriteBorderIcon />
          </div>
          <p className="likeCount">400</p>
        </div> */}
      </div>
      <div className="textArea">{content}</div>
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
