import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import HomePageLayout from "./layout/HomePageLayout";
import BlogPageLayout from "./layout/BlogPageLayout";
import BlogLayout from "./layout/BlogLayout";
import Home from "./pages/Home";
import IndividualBlog from "./pages/IndividualBlog";
import Connect from "./pages/Connect";
import Profile from "./pages/Profile";

import CommuneWelcome from "./pages/CommuneWelcome";
import ExploreCommune from "./pages/ExploreCommune";
import Questions from "./pages/Questions";
import Setting from "./pages/Setting";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<BlogLayout />}>
          <Route path="/blogs" element={<BlogPageLayout />}>
            <Route index element={<Blogs />} />
          </Route>
          <Route path="/blogs/:blogId" element={<IndividualBlog />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/commune" element={<CommuneWelcome />} />
          <Route path="/exploreConnect" element={<ExploreCommune />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
