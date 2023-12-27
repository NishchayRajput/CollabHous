import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import "./css/AvatarDropDown.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AvatarDropdown() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSettings = () => {
    navigate("/setting");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogOut = () => {
    async function logout() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/logout`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(data);
        if (data.message === "logout successfull") navigate("/home");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    logout();
  };

  const [avatarSrc, setAvatarSrc] = React.useState("images/defaultAvatar.jpg");

  const handleAvatarError = () => {
    setAvatarSrc("images/defaultAvatar.jpg");
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
          <Avatar
            src={avatarSrc}
            onError={handleAvatarError}
            alt="Avatar"
            sx={{ width: 29, height: 29 }}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#00000024",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "2px solid rgba(134, 127, 127, 0.43)",
            borderRadius: "10px",
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
              border: "2px solid rgba(134, 127, 127, 0.43)",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleProfile} className="dropAvatar">
          <Avatar
            src={avatarSrc}
            onError={handleAvatarError}
            alt="Avatar"
            sx={{ width: 29, height: 29 }}
          />
          &nbsp;Profile
        </MenuItem>

        <MenuItem onClick={handleSettings} className="dropAvatar">
          <ListItemIcon>
            <Logout fontSize="small" className="dropAvatar" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <Divider className="divider" />

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
