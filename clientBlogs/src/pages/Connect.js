import React from "react";
import Header from "../components/Header";
import "./css/Connect.css";
import { contactus_hero } from "../assets";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";

const Connect = () => {
  return (
    <div>
      <div style={{ backgroundColor: "rgba(35, 36, 38, 1)" }}>


        <Box className="section" position="relative">
          <img
            src="images/contactus_hero_image.png"
            alt="heroLanding"
            className="background"
          />

        </Box>

        {/* <div className="button">
            <button id="btn1">Connect</button>
            <button id="btn2"> Job Openings</button>

          </div> */}
      </div>

      {/* 
      <div className="middle-left">
        <h1>cH</h1>
        <p>What interests you? </p>
        <div classname="box1">
          <div > Digital Communities</div>
          <div>Fashion Blogging</div>
          <div>Digital marketing</div>
          <div>Collaborations</div>
          <div>Buying</div>
          <div>Buying</div>
        </div>
        <div classname="continue">Continue</div>
      </div> */}

    </div>
  );
};

export default Connect;
