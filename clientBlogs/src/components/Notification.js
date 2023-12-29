//Notification

import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./css/AvatarDropDown.css";
import "./css/Notification.css";
export default function Notification({ notificationArray }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log("Notifications Page: ", notificationArray);

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
          <Box
            width="5px"
            height="5px"
            bgcolor={"#F74D79"}
            position={"absolute"}
            top={"6px"}
            right={"10px"}
          ></Box>
          <NotificationsNoneIcon
            style={{ height: "24px", width: "24px", color: "white" }}
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
            backgroundColor: "#26242442;",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(134, 127, 127, 0.43)",
            borderRadius: "10px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
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
        {notificationArray && notificationArray.length > 0 ? (
          <div className="notification-list">
            {notificationArray.map((notification) => {
              return (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      const handleNavigate = () => {
                        window.location.href = `/blogs/${notification.blog_id._id}`;
                      };
                      handleNavigate();
                    }}
                    className="dropAvatar"
                  >
                    {notification.type === "like"
                      ? `${notification.blog_id?.title} is ${notification.type}d`
                      : notification.type === "comment"
                      ? `${notification.blog_id?.title} has ${notification.type}s`
                      : notification.type === "unlike"
                      ? `${notification.blog_id?.title} is ${notification.type}d`
                      : null}
                  </MenuItem>
                  <Divider className="divider" />
                </div>
              );
            })}
          </div>
        ) : (
          <MenuItem className="dropAvatar">
            No Notifications to display
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
