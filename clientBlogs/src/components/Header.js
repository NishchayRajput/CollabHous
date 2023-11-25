import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import AvatarDropdown from "./AvatarDropdown";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";
import "./css/Header.css";
import Hamburger from "./Hamburger";
import axios from "axios";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [notification, setNotification] = useState([]);
  const [value, setValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [isLogin, setIsLogin] = useState();

  const storeSelectedTab = (index) => {
    localStorage.setItem("selectedTabIndex", index);
  };

  const getStoredSelectedTab = () => {
    const storedIndex = localStorage.getItem("selectedTabIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  };

  const scrollToPercentage = (percentage) => {
    const scrollToY =
      (percentage / 100) * (document.body.scrollHeight - window.innerHeight);
    window.scrollTo({ top: scrollToY, behavior: "instant" });
  };

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    setScrollValue(scrollPercentage);
  });

  useEffect(() => {
    setValue(getStoredSelectedTab());
  }, []);

  useEffect(() => {
    storeSelectedTab(value);
  }, [value]);

  useEffect(() => {
    async function verify() {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/blogs/headers",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(data.notifications);
        setNotification(data.notifications);
        if (data.message == "Please login first") setIsLogin(true);
        else setIsLogin(false);
        // if ((data.message = "Please login first")) {
        //   navigate("/login");
        // }
      } catch (error) {
        console.log(error);
      }
    }
    verify();
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setValue(0);
    // else if (path === "/whoarewe") setValue(1);
    else if (path === "/blogs") setValue(2);
    else if (path === "/connect") setValue(3);
  }, [location.pathname]);
  if (value === 0 && scrollValue > 30) setValue(1);
  if (value === 1 && scrollValue < 30) setValue(0);

  return (
    <>
      <AppBar
        position="sticky"
        className="appbar"
        sx={{
          bgcolor:
            value === 0 && scrollValue < 10
              ? "rgba(72, 72, 72, 0)"
              : "rgba(72, 72, 72, 0.3)",
          border:
            value === 0 && scrollValue < 10
              ? "0px"
              : "2px solid rgba(134, 127, 127, 0.43)",
          boxShadow: value === 0 && scrollValue < 10 ? "none" : "",
        }}
      >
        <Toolbar className="toolbar">
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
                onClick={() => scrollToPercentage(0)}
                className="tab"
                style={{
                  color: value === 0 ? "#F74D79" : "white", // Text color for selected tab
                }}
              />
              <Tab
                label="Who are we"
                LinkComponent={Link}
                to="/"
                className="tab"
                style={{
                  color: value === 1 ? "#F74D79" : "white", // Text color for selected tab
                }}
                onClick={() => (value != 1 ? scrollToPercentage(42) : "")}
              >
                Who are we
              </Tab>

              <Tab
                label="Blogs"
                LinkComponent={Link}
                to="/blogs"
                onClick={() => scrollToPercentage(0)}
                className="tab"
                style={{
                  color: value === 2 ? "#F74D79" : "white", // Text color for selected tab
                }}
              />
              <Tab
                label="Connect"
                LinkComponent={Link}
                to="/connect"
                onClick={() => scrollToPercentage(0)}
                className="tab"
                style={{
                  color: value === 3 ? "#F74D79" : "white", // Text color for selected tab
                }}
              />
            </Tabs>
          </Box>
          <Notification notificationArray={notification} />
          {!isLogin && (
            <div id="avatarContainer">
              {" "}
              <AvatarDropdown />
            </div>
          )}
          {isLogin && (
            <div id="loginBtnContainer">
              {" "}
              <Button variant="outlined" className="loginBtn" href="/login">
                Login
              </Button>
            </div>
          )}
          <Hamburger />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
