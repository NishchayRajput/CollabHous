import React, { useEffect, useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box paddingTop={"3rem"} paddingLeft={"7rem"} borderTop={"3px solid white"}>
      <Box>
        <Typography fontSize={"32px"} color={"white"}>
          <span>cH</span><span> Commune</span> 
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
            <span style={{
                fontFamily: 'Roboto',
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "142.4%",
                color: "#FFFFFF",
            }}>Read, react and share the original thoughts of creators and thinkers
            on personal luxury.</span><span style={{

                    fontFamily: 'Roboto',
                    fontStyle: "italic",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "142.4%",
                    color: "#FFFFFF",

            }}> Explore our content to delve into the minds
            shaping these industries.</span>
          </Typography>
        </Box>
        <Box width={"10%"}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={700}
              color={"white"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}

            >
              Home
            </Typography>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={700}
              color={"white"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
            >
              Blogs
            </Typography>
          </Link>
          <Link to="/connect" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={700}
              color={"white"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
            >
              Connect
            </Typography>
          </Link>
          <Link to="/faqs" style={{ textDecoration: "none" }}>
            <Typography
              fontSize={"22px"}
              fontWeight={700}
              color={"white"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
            >
              FAQs
            </Typography>
          </Link>
        </Box>
        <Box width={"30%"}>
          <Typography
            fontSize={"22px"}
            fontWeight={700}
            color={"white"}
            marginBottom={"32px"}
            fontFamily= {'Roboto'}
            lineHeight= {"26px"}
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
              fontWeight={700}
              color={"#7F7F7F"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
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
              fontWeight={700}
              color={"#7F7F7F"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
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
              fontWeight={700}
              color={"#7F7F7F"}
              marginBottom={"32px"}
              fontFamily= {'Roboto'}
              lineHeight= {"26px"}
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
            fontWeight={700}
            color={"white"}
            marginBottom={"70px"}
            fontFamily= {'Roboto'}
            lineHeight= {"26px"}
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
