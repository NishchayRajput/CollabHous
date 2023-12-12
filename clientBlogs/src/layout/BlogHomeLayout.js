import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const BlogHomeLayout = () => {
  return (
    <div style={{ backgroundColor: "rgba(35, 36, 38, 1)", margin: 0 }}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default BlogHomeLayout;
