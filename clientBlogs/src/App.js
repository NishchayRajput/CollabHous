import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import UserBlogs from "./pages/UserBlogs";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import BlogHomeLayout from "./layout/BlogHomeLayout";
import BlogLayout from "./layout/BlogLayout";
import Home from "./pages/Home";
import BlogCard from "./components/BlogCard";
import IndividualBlog from "./pages/IndividualBlog";
import Connect from "./pages/Connect";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<BlogHomeLayout />} /> */}
        <Route path="/" element={<BlogHomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogLayout />}>
            <Route index element={<Blogs />} />
          </Route>
          <Route path="/blogs/:blogId" element={<IndividualBlog />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/blog-card" element={<BlogCard />} /> */}
      </Routes>
    </>
  );
}

export default App;
