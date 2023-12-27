import React from "react";
import "./css/Hamburger.css";

import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Hamburger = ({ isLogin }) => {
  const navigate = useNavigate();
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
  return (
    <div id="outer-container">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        disableCloseOnEsc
      >
        <main id="page-wrap">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <div className="break-line" />
          <a id="whoAreWe" className="menu-item" href="/">
            Who are we
          </a>
          <div className="break-line" />
          <a id="blogs" className="menu-item" href="/blogs">
            Blogs
          </a>
          <div className="break-line" />
          <a id="connect" className="menu-item" href="/connect">
            Connect
          </a>
          <div className="break-line" />
          <a id="profile" className="menu-item" href="/profile">
            Profile
          </a>
          <div className="break-line" />
          <a id="settings" className="menu-item" href="/setting">
            Settings
          </a>
          <div className="break-line" />
          {isLogin && (
            <div
              href=""
              id="connect"
              className="menu-item"
              onClick={handleLogOut}
            >
              LogOut
            </div>
          )}
        </main>
      </Menu>
    </div>
  );
};

export default Hamburger;
