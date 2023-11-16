import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import AvatarDropdown from "./AvatarDropdown";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [value, setValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const scrollToPercentage = (percentage) => {
    const scrollToY =
      (percentage / 100) * (document.body.scrollHeight - window.innerHeight);
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  };
  window.addEventListener("scroll", () => {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    setScrollValue(scrollPercentage);
  });
  // useEffect(() => {
  //   async function scrollP() {
  //   }
  //   scrollP();
  // }, []);

  if (value === 0 && scrollValue > 30) setValue(1);
  if (value === 1 && scrollValue < 30) setValue(0);
  console.log(scrollValue);
  console.log("Tab: "+value);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: (value === 0 && scrollValue < 10) ? "rgba(72, 72, 72, 0)" : "rgba(72, 72, 72, 0.3)",
          border: (value === 0 && scrollValue < 10) ? "0px" : "2px solid rgba(134, 127, 127, 0.43)",
          boxShadow: (value === 0 && scrollValue < 10) ? "none" : "",
          width: "68%",
          marginLeft: "auto",
          marginRight: "auto",
          top: "10px",
          borderRadius: "16px",
        }}
      >
        <Toolbar style={{ minHeight: "49px", height: "49px" }}>
          <Typography fontSize="32px">cH</Typography>
          <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
              TabIndicatorProps={{
                style: {
                  backgroundColor: true ? "#F74D79" : "rgba(35, 36, 38, 1)", // Colored underline for selected tab
                },
              }}
            >
              <Tab
                label="Home"
                LinkComponent={Link}
                to="/"
                style={{
                  color: value === 0 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
              />
              <Tab
                label="Who are we"
                LinkComponent={Link}
                to="/"
                style={{
                  color: value === 1 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
                onClick={() => (value!=1)?scrollToPercentage(42):''}
              >
                {/* <ScrollLink
                  to="whoAreWe"
                  smooth={true}
                  offset={-70}
                  duration={500}
                > */}
                Who are we
                {/* </ScrollLink> */}
              </Tab>

              <Tab
                label="Blogs"
                LinkComponent={Link}
                to="/blogs"
                style={{
                  color: value === 2 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
              />
              <Tab
                label="Connect"
                LinkComponent={Link}
                to="/connect"
                style={{
                  color: value === 3 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
              />
            </Tabs>
          </Box>
          <Notification />
          <AvatarDropdown style={{ height: "24px", width: "24px" }} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
