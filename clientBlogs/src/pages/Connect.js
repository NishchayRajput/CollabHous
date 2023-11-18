import React from "react";
import Header from "../components/Header";
import "./css/Connect.css";
import { contactus_hero } from "../assets";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";

const Connect = () => {
  return (
    <div>
      <div style={{ backgroundColor: "rgba(35, 36, 38, 1)" }}>


        <div className="section">
          <img
            src="images/contactus_hero_image.png"
            alt="heroLanding"
            className="background"
          />
          <div className="button">
            <button id="btn1">Connect</button>
            <button id="btn2"> Job Openings</button>

          </div>

        </div>
        <div className="middlepart">
          <div className="box1">
            <div className="ch">
            <p ><span className="c">C</span><span className="h"> H</span></p>
            </div>
            <p className="pink">What interests you? </p>
            <div className="container">
              <div  className="item1"> Digital Communities</div>
              <div className="item2"> Fashion Blogging</div>
              <div className="item3">Digital marketing</div>
              <div className="item4">Collaborations</div>
              <div className="item5">Buying</div>
              <div className="item5">Buying</div>
            </div>
            {/* <p classname="cont">Continue</p> */}
            <div className="cont">Continue</div>

            <div className="ch2">
            <p ><span className="c">C</span><span className="h"> H</span></p>
            </div>
          </div>
          <div className="box2">
          </div>
        </div>


      </div>
    </div>
  );
};

export default Connect;
