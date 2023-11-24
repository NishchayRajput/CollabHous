import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import axios from "axios";
import "./css/AvatarDropDown.css";

export default function AvatarDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSettings = () => {
    navigate("/settings");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    async function logout() {
      try {
        const { data } = await axios.get("http://localhost:5000/blogs/logout", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        console.log(data);
        if (data.message === "logout successfull") navigate("/home");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    logout();
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 29, height: 29 }}></Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            
            backgroundColor:"rgba(72, 72, 72, 0)",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
            border:"2px solid rgba(134, 127, 127, 0.43)",
            borderRadius:"10px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 24,
              height: 24,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "rgba(134, 127, 127)",
              border:"2px solid rgba(134, 127, 127, 0.43)",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} className="dropAvatar">
          <Avatar style={{height:"30px", width:"30px",}}/>&nbsp;Profile
        </MenuItem>

        <MenuItem onClick={handleSettings} className="dropAvatar" >
          <ListItemIcon>
            <Logout fontSize="small" className="dropAvatar"/>
          </ListItemIcon>
          Settings
        </MenuItem>

        <Divider style={{backgroundColor:" rgba(134, 127, 127, 0.43)", height:"2px"}}/>

        {/* <MenuItem onClick={handleLogin}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem> */}

        <MenuItem onClick={handleLogOut} className="dropAvatar">
          <ListItemIcon>
            <Logout fontSize="small" className="dropAvatar" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
