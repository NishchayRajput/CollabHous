//CommentArea

import React, { useState } from "react";
import "./css/CommentArea.css";
import CommentCard from "./CommentCard";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const CommentArea = ({ bId, bloguId, interactionArray }) => {
  const [comment, setComment] = useState({ comment: "" });
  const navigate = useNavigate();
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
        console.log(response);
      }
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
            <CommentCard
              content={i.interaction_content}
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
