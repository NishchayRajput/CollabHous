import React from "react";
import "./css/CommentArea.css";
import CommentCard from "./CommentCard";

const CommentArea = () => {
  return (
    <div className="containerCommentArea">
      <form className="typeBox">
        <div className="userDetail">
          <div className="logoUsernameContainer">
            <div className="logo">Ch</div>
            <div className="username">CollabHous_Admin</div>
          </div>
        </div>
        <div className="textArea">
          <input type="text" id="textBox" name="textBox" placeholder="Comment here..."></input>
        </div>
        <div className="buttonArea">
          <button id="respondBtn" type="submit">Respond</button>
        </div>
      </form>
      <CommentCard />
    </div>
  );
};

export default CommentArea;
