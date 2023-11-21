import React from "react";
import "./css/Hamburger.css";

import { slide as Menu } from "react-burger-menu";

const Hamburger = () => {
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
          <a id="settings" className="menu-item" href="/settings">
            Settings
          </a>
          <div className="break-line" />
          <a id="connect" className="menu-item" href="/connect">
            LogOut
          </a>
        </main>
      </Menu>
    </div>
  );
};

export default Hamburger;
