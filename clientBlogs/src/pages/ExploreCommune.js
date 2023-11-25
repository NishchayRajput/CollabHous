import React from "react";
import "./css/ExploreCommune.css";
import { useNavigate } from "react-router-dom";

const ExploreCommune = () => {
  const navigate = useNavigate();
  return (
    <div id="exploreconnect">
      <div className="container">
        <div className="title">Hi CollabHous </div>
        <div className="options">
          <div className="follow box">
            <div className="nTitle">Follow us</div>
            <div className="iconBox"></div>
          </div>
          <div
            className="question box"
            onClick={() => {
              navigate("/questions");
            }}
          >
            <div className="nTitle">Our questions to you</div>
            <div></div>
          </div>
          <div
            className="settings box"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <div className="nTitle">Settings</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCommune;
