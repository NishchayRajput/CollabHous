import React, { useEffect, useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./css/Footer.css";
const Footer = () => {
  return (
    <Box className="footerContainer">
      <Box>
        <Typography fontSize={"32px"} color={"white"}>
          CH commune
        </Typography>
      </Box>
      <Box className="row2">
        <Box width={"30%"}>
          <Typography fontSize={"18px"} color={"white"}>
            Read, react and share the original thoughts of creators and thinkers
            on personal luxury. Explore our content to delve into the minds
            shaping these industries.
          </Typography>
        </Box>
        <Box width={"10%"}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography className="pageLinks">Home</Typography>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <Typography className="pageLinks">Blogs</Typography>
          </Link>
          <Link to="/connect" style={{ textDecoration: "none" }}>
            <Typography className="pageLinks">Connect</Typography>
          </Link>
          <Link to="/faqs" style={{ textDecoration: "none" }}>
            <Typography className="pageLinks">FAQs</Typography>
          </Link>
        </Box>
        <Box width={"30%"}>
          <Typography className="pageLinks">Social media</Typography>
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="socialMedia">
              Instagram
              <img
                src="images/Vector.png"
                alt=""
                style={{ marginLeft: "24px" }}
              />
            </Typography>
          </a>
          <a
            href="https://www.linkedin.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="socialMedia">
              Linked in
              <img
                src="images/Vector.png"
                alt=""
                style={{ marginLeft: "24px" }}
              />
            </Typography>
          </a>
          <a
            href="https://www.twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="socialMedia">
              Twitter
              <img
                src="images/Vector.png"
                alt=""
                style={{ marginLeft: "24px" }}
              />
            </Typography>
          </a>
        </Box>
        <Box width={"40%"}>
          <Typography className="contactus">Contact us</Typography>

          <a
            href="https://www.chcommune.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="email"> chcommune.com</Typography>
          </a>

          <a
            href="https://www.collabhous.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="email"> collabhous.com</Typography>{" "}
          </a>
          <a
            href="https://www.hey@collabhous.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="email"> hey@collabhous.com</Typography>{" "}
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
