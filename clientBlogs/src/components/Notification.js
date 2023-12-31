import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./css/AvatarDropDown.css";
import "./css/Notification.css";
import axios from "axios";
export default function Notification({ dotStatus, notificationArray }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [read, setRead] = React.useState();
  const handleClick = async (event) => {
    setRead(false);
    setAnchorEl(event.currentTarget);
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/notification/status`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log("Notifications Page: ", notificationArray);
  React.useEffect(() => {
    setRead(dotStatus);
  }, [dotStatus]);

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
          {read && (
            <Box
              width="5px"
              height="5px"
              bgcolor={"#F74D79"}
              position={"absolute"}
              top={"6px"}
              right={"10px"}
            ></Box>
          )}
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
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#26242442;",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(134, 127, 127, 0.43)",
              borderRadius: "10px",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
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
                zIndex: 1,
              },
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
