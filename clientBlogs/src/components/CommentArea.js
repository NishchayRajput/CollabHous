import React, { useState } from "react";
import "./css/CommentArea.css";
import CommentCard from "./CommentCard";
import axios from "axios";

const CommentArea = ({ bId, uId, interactionArray }) => {
  const [comment, setComment] = useState({ comment: "" });

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
        "http://localhost:5000/blogs/comment",
        {
          bId: bId,
          iId: bId,
          it: "comment",
          content: comment.comment,
          pId: uId,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      window.location.reload();
      console.log(response);
      // console.log("Submitted:", comment.comment);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(bId);
  return (
    <div className="containerCommentArea">
      <form onSubmit={handleSubmit} className="typeBox">
        <div className="userDetail">
          <div className="logoUsernameContainer">
            <div className="logo">Ch</div>
            <div className="username">CollabHous_Admin</div>
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
      {interactionArray.map(
        (i) =>
          i.interaction_type === "comment" && (
            <CommentCard content={i.interaction_content} />
          )
      )}
    </div>
  );
};

export default CommentArea;
