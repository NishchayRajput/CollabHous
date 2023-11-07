import React, { useState } from "react";
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

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "rgba(72, 72, 72, 0.3)",
          border: "2px solid rgba(134, 127, 127, 0.43)",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          top: "10px",
          borderRadius: "10px",
        }}
      >
        <Toolbar>
          <Typography variant="h4">cH</Typography>
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
                  marginLeft:'16px',
                  marginRight:'16px'
                }}
              />
              <Tab
                label="Who we are"
                LinkComponent={Link}
                to="/"
                style={{
                  color: value === 1 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft:'16px',
                  marginRight:'16px'
                }}
              >
                <ScrollLink
                  to="whoWeAre"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Who we are
                </ScrollLink>
              </Tab>

              <Tab
                label="Blogs"
                LinkComponent={Link}
                to="/blogs"
                style={{
                  color: value === 2 ? "#F74D79" : "white", // Text color for selected tab
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft:'16px',
                  marginRight:'16px'
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
                  marginLeft:'16px',
                  marginRight:'16px'
                }}
              />
            </Tabs>
          </Box>
          <Notification />
          <AvatarDropdown />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
