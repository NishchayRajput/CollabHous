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
          <Typography
            fontSize={"22px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"32px"}
          >
            Instagram
            <img src="images/Vector.png" style={{ marginLeft: "24px" }} />
          </Typography>
          <Typography
            fontSize={"22px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"32px"}
          >
            Linkedin
            <img src="images/Vector.png" style={{ marginLeft: "24px" }} />
          </Typography>
          <Typography
            fontSize={"22px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"32px"}
          >
            Twitter
            <img src="images/Vector.png" style={{ marginLeft: "24px" }} />
          </Typography>
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
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"10px"}
          >
            chcommune.com
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"10px"}
          >
            collabhous.com
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            color={"#7F7F7F"}
            marginBottom={"10px"}
          >
            hey@collabhous.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
