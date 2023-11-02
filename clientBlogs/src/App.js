import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import UserBlogs from "./pages/UserBlogs";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import BlogHomeLayout from "./layout/BlogHomeLayout";
import Home from "./pages/Home";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogHomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/joinUs" element={<div>Join us</div>} />
        </Route>

        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/blog-card" element={<BlogCard />} />
      </Routes>
    </>
  );
}

export default App;
