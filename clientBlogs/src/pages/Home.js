import React, { useEffect, useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Element } from "react-scroll";
import ControlledCarousel from "../components/ControlledCarousel";
import HorzBlogCard from "../components/HorzBlogCard";
import TrendingBlogCard from "../components/TrendingBlogCard";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Footer from "../components/Footer";
import "./css/Home.css";

const Home = () => {
  const [mostLikedBlog, setMostLikedBlog] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);
  const [displayText, setDisplayText] = useState("");
  const [heroData, setHeroData] = useState([]);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get("http://localhost:5000/blogs/hero");
        setMostLikedBlog(data.mostLikedBlog);
        setHeroData(data.heroData);
        setRecentBlog(data.latestBlogs);
        setDisplayText(data.heroData[0].value);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
  }, []);

  const cImages = [
    { link: "images/carouselSample.png" },
    { link: "images/carouselSample.png" },
  ];

  const handleButtonClick = (buttonId, buttonText) => {
    setSelectedButton(buttonId);
    setDisplayText(buttonText);
  };

  // console.log(recentBlog);
  return (
    <div>
      <Fullpage>
        <FullPageSections>
          <FullpageSection id="Home">
            <Box className="section" position="relative">
              <img
                src="images/heroLanding.png"
                alt="heroLanding"
                className="heroLandingImage"
              />
            </Box>
          </FullpageSection>
          <FullpageSection>
            <Box
              className="section"
              flexDirection={"column"}
              paddingTop={"3rem"}
            >
              <Box className="carouselSection">
                <Box >
                  <ControlledCarousel image={cImages} />
                </Box>
                <Box className="carouselContentContainer">
                  <Button
                    className="carouselContentBtn"
                    sx={{
                      bgcolor:
                        selectedButton === 1
                          ? "rgba(247, 77, 121, 1)"
                          : "rgba(72, 72, 72, 0.3)",
                    }}
                    variant="contained"
                    onClick={() =>
                      handleButtonClick(1, heroData[0] && heroData[0].value)
                    }
                  >
                    {selectedButton === 1 ? <p>Equitable</p> : <p>E</p>}
                  </Button>
                  <Button
                    className="carouselContentBtn"
                    sx={{
                      bgcolor:
                        selectedButton === 2
                          ? "rgba(247, 77, 121, 1)"
                          : "rgba(72, 72, 72, 0.3)",
                    }}
                    variant="contained"
                    onClick={() =>
                      handleButtonClick(2, heroData[1] && heroData[1].value)
                    }
                  >
                    {selectedButton === 2 ? <p>Trust</p> : <p>T</p>}
                  </Button>
                  <Button
                    className="carouselContentBtn"
                    sx={{
                      bgcolor:
                        selectedButton === 3
                          ? "rgba(247, 77, 121, 1)"
                          : "rgba(72, 72, 72, 0.3)",
                    }}
                    variant="contained"
                    onClick={() =>
                      handleButtonClick(3, heroData[2] && heroData[2].value)
                    }
                  >
                    {selectedButton === 3 ? <p>Relatability</p> : <p>R</p>}
                  </Button>
                  <Button
                    className="carouselContentBtn"
                    sx={{
                      bgcolor:
                        selectedButton === 4
                          ? "rgba(247, 77, 121, 1)"
                          : "rgba(72, 72, 72, 0.3)",
                    }}
                    variant="contained"
                    onClick={() => handleButtonClick(4, heroData[3].value)}
                  >
                    {selectedButton === 4 ? <p>Identity</p> : <p>I</p>}
                  </Button>
                </Box>
                <Box className="carouselDisplayText">{displayText}</Box>
              </Box>
            </Box>
          </FullpageSection>
          <FullpageSection id="whoAreWeSection">
            <Box className="section">
              <Element name="whoAreWe">
                <Box className="whoAreWeContainer">
                  <Box className="contentPanel">
                    <h2 className="contentHeading"> Who are we?</h2>
                    <detail>
                      {heroData && heroData[6] && heroData[6].value}
                    </detail>
                  </Box>
                  <Box className="imagePanel">
                    <img src="images/whoAreWe.png"></img>
                  </Box>
                </Box>
              </Element>
            </Box>
          </FullpageSection>
          <FullpageSection>
            <Box className="section">
              <Box className="welcomeSection">
                <h2>Welcome</h2>

                <detail>{heroData[6] != null ? heroData[6].value : ""}</detail>
              </Box>
            </Box>
          </FullpageSection>
          <FullpageSection>
            <Box className="section" padding={"5%"}>
              <Box display={"flex"} flexDirection={"column"} width={"80vw"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography color={"rgba(247, 77, 121, 1)"} fontSize={"41px"} 
                    fontFamily='Questrial'
                    fontWeight={"400"}
                    lineHeight= {"42px"}
                    letterSpacing= {"0.05em"}
                  >
                    Trending Blogs
                  </Typography>

                  <Link to="/blogs" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography
                      color={"white"}
                      fontSize={"26px"}
                      display={"flex"}
                      alignItems={"center"}
                      paddingRight={"24px"}

                      fontFamily= 'Roboto'
                      fontWeight={"400"}
                      lineHeight={"30px"}
                      letterSpacing={"0.05em"}
                    >
                      More
                    </Typography>
                  </Link>
                </Box>
                <Box display={"flex"} height={"70vh"}>
                  <Box width={"50%"}>
                    <TrendingBlogCard
                      // id={blog?.user_id}
                      // key={blog?.user_id}
                      // isUser={
                      //   localStorage.getItem("userId") === blog?.user?.user_id
                      // }
                      title={mostLikedBlog.title}
                      description={mostLikedBlog.content}
                      image="images/carouselSample.png"
                      username={
                        mostLikedBlog.user != null
                          ? mostLikedBlog.user.name
                          : ""
                      }
                      time={formatDate(mostLikedBlog.time)}
                      tag={mostLikedBlog.tag}
                      like={mostLikedBlog.like}
                      read_time={mostLikedBlog.read_time}
                    />
                  </Box>
                  <Box width={"50%"}>
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      width={"90%"}
                      marginX={"auto"}
                      gap={"10px"}
                    >
                      <HorzBlogCard
                        // id={blog?.user_id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        tag={recentBlog[0] != null ? recentBlog[0].tag : ""}
                        title={recentBlog[0] != null ? recentBlog[0].title : ""}
                        image="images/carouselSample.png"
                        username={
                          recentBlog[0] != null ? recentBlog[0].user.name : ""
                        }
                        time={
                          recentBlog[0] != null
                            ? formatDate(recentBlog[0].time)
                            : ""
                        }
                        like={recentBlog[0] != null ? recentBlog[0].like : ""}
                        read_time={
                          recentBlog[0] != null ? recentBlog[0].read_time : "5"
                        }
                      />
                      <HorzBlogCard
                        // id={blog?.user_id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        title={recentBlog[1] != null ? recentBlog[1].title : ""}
                        image="images/carouselSample.png"
                        username={
                          recentBlog[1] != null ? recentBlog[1].user.name : ""
                        }
                        time={
                          recentBlog[1] != null
                            ? formatDate(recentBlog[1].time)
                            : ""
                        }
                        tag={recentBlog[1] != null ? recentBlog[1].tag : ""}
                        like={recentBlog[1] != null ? recentBlog[1].like : ""}
                        read_time={
                          recentBlog[1] != null ? recentBlog[1].read_time : "5"
                        }
                      />
                      <HorzBlogCard
                        // id={blog?.user_id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        title={recentBlog[2] != null ? recentBlog[2].title : ""}
                        image="images/carouselSample.png"
                        username={
                          recentBlog[2] != null ? recentBlog[2].user.name : ""
                        }
                        time={
                          recentBlog[2] != null
                            ? formatDate(recentBlog[2].time)
                            : ""
                        }
                        tag={recentBlog[2] != null ? recentBlog[2].tag : ""}
                        like={recentBlog[2] != null ? recentBlog[2].like : ""}
                        read_time={
                          recentBlog[2] != null ? recentBlog[1].read_time : "5"
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </FullpageSection>
          <FullpageSection>
            <div style={{ position: "absolute", bottom: "0px" }}>
              <Footer />
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default Home;
