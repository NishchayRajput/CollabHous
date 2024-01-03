import React, { useEffect } from "react";
import "./css/ExploreCommune.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ExploreCommune = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function getInfo() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/ecommerce/verify`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (data.message === "User not logged in") {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, []);
  useEffect(() => {
    localStorage.setItem("selectedTabIndex", "3");
  }, []);
  return (
    <div id="exploreconnect">
      <div className="container">
        <div className="title">Hi CollabHous </div>
        <div className="options">
          <div className="follow box">
            <div className="nTitle">Follow us</div>
            <div className="iconBox">
              <div>
                <img src="images/bi_instagram.png" alt="" />
              </div>
              <div>
                <img src="images/pajamas_twitter.png" alt="" />
              </div>
              <div>
                <img src="images/uil_facebook.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="question box"
            onClick={() => {
              navigate("/questions");
            }}
          >
            <div className="nTitle">Our questions to you</div>
            <div className="bottomQue">
              <div className="completedQue">
                <p style={{ color: "#868686" }}>1</p>
                <p style={{ color: "#E7E7E7" }}>/4</p>
              </div>
              <div className="outerPinkC">
                <div className="innerPinkC"></div>
              </div>
            </div>
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
