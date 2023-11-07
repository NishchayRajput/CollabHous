import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { Element } from "react-scroll";
import ControlledCarousel from "../components/ControlledCarousel";
import HorzBlogCard from "../components/HorzBlogCard";
import TrendingBlogCard from "../components/TrendingBlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [heroData, setHeroData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);
  const [displayText, setDisplayText] = useState("");

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getHeroData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/hero/");
      setHeroData(data.heroData);
      setDisplayText(data.heroData[0].value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
    getHeroData();
    
  }, []);

  const cImages = [
    { link: "images/carouselSample.png" },
    { link: "images/carouselSample.png" },
  ];


  const handleButtonClick = (buttonId, buttonText) => {
    setSelectedButton(buttonId);
    setDisplayText(buttonText);
  };

  console.log(blogs);
  return (
    <div style={{ marginTop: "-68px" }}>
      <Box
        className="section"
        minHeight="100vh"
        color={"black"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
      >
        <img
          src="images/heroLanding.png"
          alt="heroLanding"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>

      <Box
        className="section"
        minHeight="120vh"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          minHeight="100vh"
          width="42%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <ControlledCarousel image={cImages} />
          </Box>
          <Box display={"flex"} width={"95%"} marginY={"15px"} gap={"15px"}>
            <Button
              sx={{
                borderRadius: "30px",
                bgcolor:
                  selectedButton === 1
                    ? "rgba(247, 77, 121, 1)"
                    : "rgba(72, 72, 72, 0.3)",
                border: "0.83px solid rgba(71, 71, 71, 1)",
                "&:hover": {
                  bgcolor: "#5f5f5f",
                },
                textTransform: "none",
                fontSize: "23px",
                minWidth: "80px",
              }}
              variant="contained"
              onClick={() => handleButtonClick(1, heroData[0].value)}
            >
              {selectedButton === 1 ? <p>Equitable</p> : <p>E</p>}
            </Button>
            <Button
              sx={{
                borderRadius: "30px",
                bgcolor:
                  selectedButton === 2
                    ? "rgba(247, 77, 121, 1)"
                    : "rgba(72, 72, 72, 0.3)",
                border: "0.83px solid rgba(71, 71, 71, 1)",
                "&:hover": {
                  bgcolor: "#5f5f5f",
                },
                textTransform: "none",
                fontSize: "23px",
                minWidth: "80px",
                minWidth: "80px",
              }}
              variant="contained"
              onClick={() => handleButtonClick(2, heroData[1].value)}
            >
              {selectedButton === 2 ? <p>Trust</p> : <p>T</p>}
            </Button>
            <Button
              sx={{
                borderRadius: "30px",
                bgcolor:
                  selectedButton === 3
                    ? "rgba(247, 77, 121, 1)"
                    : "rgba(72, 72, 72, 0.3)",
                border: "0.83px solid rgba(71, 71, 71, 1)",
                "&:hover": {
                  bgcolor: "#5f5f5f",
                },
                textTransform: "none",
                fontSize: "23px",
                minWidth: "80px",
              }}
              variant="contained"
              onClick={() => handleButtonClick(3, heroData[2].value)}
            >
              {selectedButton === 3 ? <p>Relatability</p> : <p>R</p>}
            </Button>
            <Button
              sx={{
                borderRadius: "30px",
                bgcolor:
                  selectedButton === 4
                    ? "rgba(247, 77, 121, 1)"
                    : "rgba(72, 72, 72, 0.3)",
                border: "0.83px solid rgba(71, 71, 71, 1)",
                "&:hover": {
                  bgcolor: "#5f5f5f",
                },
                textTransform: "none",
                fontSize: "23px",
                minWidth: "80px",
              }}
              variant="contained"
              onClick={() => handleButtonClick(4, heroData[3].value)}
            >
              {selectedButton === 4 ? <p>Identity</p> : <p>I</p>}
            </Button>
          </Box>
          <Box
            paddingY={"20px"}
            color={"rgba(177, 177, 177, 1)"}
            sx={{ width: "100%", mx: "auto", fontSize: "24px" }}
          >
            {displayText}
          </Box>
        </Box>
      </Box>
      <Box
        className="section"
        id="whoAreWeSection"
        minHeight="120vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Element name="whoAreWe">
          <Box display={"flex"} minHeight="100vh">
            <Box
              width={"50%"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              marginY={"auto"}
              marginX={"auto"}
            >
              <Box width={"80%"} marginX={"auto"}>
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "100",
                    color: "#F74D79",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                >
                  {" "}
                  Who are we?
                </p>
                <Box width={"100%"} fontSize={"25px"} color={"#FFFFFF"}>
                {/* {heroData[4].value} */}
                
                </Box>
              </Box>
            </Box>
            <Box width={"50%"}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100vh",
                }}
                src="images/whoAreWe.png"
              ></img>
            </Box>
          </Box>
        </Element>
      </Box>
      <Box
        className="section"
        minHeight="120vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"60%"}
          gap={"20px"}
        >
          <Box
            fontSize={"48px"}
            fontWeight={"100"}
            textAlign={"center"}
            color={"rgba(247, 77, 121, 1)"}
          >
            Welcome
          </Box>

          <Typography
            fontSize={"20px"}
            fontWeight={"400"}
            textAlign={"center"}
            color={"#FFFFFF"}
          >
            {/* {heroData[6].value} */}
          </Typography>
          {/* <Typography
            fontSize={"20px"}
            fontWeight={"400"}
            textAlign={"center"}
            color={"#FFFFFF"}
          >
            We're not just a voice; we're a united community representing the
            new age India, and we’ve got much more up our sleeve.
          </Typography> */}
        </Box>
      </Box>
      <Box
        className="section"
        minHeight="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={"5%"}
        paddingY={"5%"}
      >
        <Box display={"flex"} flexDirection={"column"} width={"80vw"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography color={"rgba(247, 77, 121, 1)"} fontSize={"41px"}>
              Trending Blogs
            </Typography>

            <Link to="/blogs" style={{ textDecoration: "none" }}>
              {" "}
              <Typography
                color={"white"}
                fontSize={"26px"}
                display={"flex"}
                alignItems={"center"}
              >
                More
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} height={"82vh"}>
            <Box width={"50%"}>
              <TrendingBlogCard
                // isUser={localStorage.getItem("userId") === blog?.user?.user_id}
                title={"Title"}
                description={"content"}
                image="images/carouselSample.png"
                username={"username"}
                time={"time"}
              />
            </Box>
            <Box width={"50%"}>
              <Box width={"90%"} marginX={"auto"}>
                <HorzBlogCard
                  // id={blog?.user_id}
                  // key={blog?.user_id}
                  // isUser={
                  //   localStorage.getItem("userId") === blog?.user?.user_id
                  // }
                  title="TITLE"
                  description="Description"
                  image="images/carouselSample.png"
                  username="username"
                  time="10 October"
                />
                <HorzBlogCard
                  // id={blog?.user_id}
                  // key={blog?.user_id}
                  // isUser={
                  //   localStorage.getItem("userId") === blog?.user?.user_id
                  // }
                  title="TITLE"
                  description="Description"
                  image="images/carouselSample.png"
                  username="username"
                  time="10 October"
                />
                <HorzBlogCard
                  // id={blog?.user_id}
                  // key={blog?.user_id}
                  // isUser={
                  //   localStorage.getItem("userId") === blog?.user?.user_id
                  // }
                  title="TITLE"
                  description="Description"
                  image="images/carouselSample.png"
                  username="username"
                  time="10 October"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
