import React, { useEffect, useState } from "react";
import "./css/CommuneWelcome.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const CommuneWelcome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function connect() {
      try {
        const response = await axios.post(
          "http://localhost:5000/blogs/hero",
          {
            page: "FAQ",
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response.data.ud[0]);
        setUserData(response.data?.ud[0]);
      } catch (error) {
        console.log(error); 
      }
    }
    connect();
  }, []);
  return (
    <div className="settingCotainer">
      <div className="greyBox">
        <div className="imageContainer">
          <div className="image">
            <img src="" alt="image" />
          </div>
          <div className="name">{userData?.name}</div>
          <div className="email">{userData?.email}</div>
        </div>
        <div className="detailsContainer">
          <div className="top">
            <div className="title">Welcome to the Commune</div>
            <div className="subtitle">
              We appreciate you connecting with us. This gives us a chance to
              get to know each other better.
            </div>
          </div>
          <div className="mid">
            <Button
              className="btn1"
              onClick={() => navigate("/exploreConnect")}
            >
              Explore connect
            </Button>
            <Button className="btn2" onClick={() => navigate("/questions")}>
              Answer questions
            </Button>
          </div>
          <p className="bottom">
            Feel free to continue to explore Connect or start by telling us a
            bit more about yourself so that we can recommend you the best stuff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommuneWelcome;
