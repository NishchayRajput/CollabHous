import React, { useEffect, useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box paddingTop={"3rem"} paddingLeft={"7rem"} borderTop={"3px solid white"}>
      <Box>
        <Typography fontSize={"32px"} color={"white"}>
          CH commune
        </Typography>
      </Box>
      <Box
        display={"flex"}
        gap={"150px"}
        paddingBottom={"3rem"}
        paddingTop={"26px"}
      >
        <Box width={"30%"}>
          <Typography fontSize={"18px"} color={"white"}>
            Read, react and share the original thoughts of creators and thinkers
            on personal luxury. Explore our content to delve into the minds
            shaping these industries.
          </Typography>
        </Box>
        <Box width={"10%"}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"white"}
              marginBottom={"32px"}
            >
              Home
            </Typography>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"white"}
              marginBottom={"32px"}
            >
              Blogs
            </Typography>
          </Link>
          <Link to="/connect" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"white"}
              marginBottom={"32px"}
            >
              Connect
            </Typography>
          </Link>
          <Link to="/faqs" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"white"}
              marginBottom={"32px"}
            >
              FAQs
            </Typography>
          </Link>
        </Box>
        <Box width={"30%"}>
          <Typography
            fontSize={"22px"}
            fontWeight={500}
            color={"white"}
            marginBottom={"32px"}
          >
            Social media
          </Typography>
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"32px"}
            >
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
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"32px"}
            >
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
            <Typography
              fontSize={"22px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"32px"}
            >
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
          <Typography
            fontSize={"22px"}
            fontWeight={500}
            color={"white"}
            marginBottom={"70px"}
          >
            Contact us
          </Typography>

          <a
            href="https://www.chcommune.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontSize={"18px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"10px"}
            >
              {" "}
              chcommune.com
            </Typography>
          </a>

          <a
            href="https://www.collabhous.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontSize={"18px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"10px"}
            >
              {" "}
              collabhous.com
            </Typography>{" "}
          </a>
          <a
            href="https://www.hey@collabhous.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontSize={"18px"}
              fontWeight={500}
              color={"#7F7F7F"}
              marginBottom={"10px"}
            >
              {" "}
              hey@collabhous.com
            </Typography>{" "}
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
