import React from "react";
import "./css/CommentBox.css";
const CommentBox = () => {
  return (
    <div className="mainContainer">
      <div className="typeBox">
        <div className="userDetail">
          <div className="logo">Ch</div>
          <div className="username">CollabHous_Admin</div>
        </div>
        <div className="textArea">Comment here.......</div>
        <div className="buttonArea">
          <div className="respondBtn">Respond</div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
