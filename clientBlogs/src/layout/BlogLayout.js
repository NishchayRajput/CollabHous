import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const BlogLayout = () => {
  return (
    <div style={{ backgroundColor: "rgba(35, 36, 38, 1)", margin: 0, minWidth:'100%' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BlogLayout;
