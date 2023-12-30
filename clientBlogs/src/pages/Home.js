import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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
  const [cImageLink, setCImageLink] = useState("images/heroLanding.png");
  const [heroData, setHeroData] = useState([]);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const scrollToPercentage = (percentage) => {
    const scrollToY =
      (percentage / 100) * (document.body.scrollHeight - window.innerHeight);
    window.scrollTo({ top: scrollToY, behavior: "instant" });
  };
  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/hero`,
          {
            page: "home",
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(data);
        setMostLikedBlog(data.mostLikedBlog);
        setHeroData(data.heroData);
        setRecentBlog(data.latestBlogs);
        setDisplayText(data.heroData[0]?.value);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
  }, []);

  const handleButtonClick = (buttonId, buttonText) => {
    setSelectedButton(buttonId);
    setDisplayText(buttonText);
    if (buttonId === 1) setCImageLink("images/heroLanding.png");
    if (buttonId === 2) setCImageLink("images/carouselSample.png");
    if (buttonId === 3) setCImageLink("images/heroLanding.png");
    if (buttonId === 4) setCImageLink("images/carouselSample.png");
  };
  const cImages = [{ link: cImageLink }];

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
              //keeping the inline css, other boxes which are of class section but dont have paddingtop and flexdirection
              className="section"
              flexDirection={"column"}
              paddingTop={"3rem"}
            >
              <Box className="carouselSection">
                <Box>
                  <div className="carouselBtn"></div>
                  <ControlledCarousel image={cImages} />
                  <div className="carouselBtn"></div>
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
                    onClick={() =>
                      handleButtonClick(4, heroData[3] && heroData[3].value)
                    }
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
                    <img src="images/whoAreWe.png" alt="f"></img>
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
            <Box className="blogSection">
              <Box className="blogSectionInner">
                <Box className="blogHeadings">
                  <Typography className="trendingBlogsText">
                    Trending Blogs
                  </Typography>

                  <Link to="/blogs" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography onClick={() => scrollToPercentage(0)} className="moreText">More</Typography>
                  </Link>
                </Box>
                <Box className="blogsBox">
                  <Box className="trendingBlog">
                    <TrendingBlogCard
                      bId={mostLikedBlog?.id}
                      // key={blog?.user_id}
                      // isUser={
                      //   localStorage.getItem("userId") === blog?.user?.user_id
                      // }
                      uId={
                        mostLikedBlog.user != null ? mostLikedBlog.user.id : ""
                      }
                      title={mostLikedBlog.title
                        ?.split(/\s+/)
                        .slice(0, 6)
                        .join(" ")}
                      description={mostLikedBlog.content}
                      image={
                        mostLikedBlog?.items?.[0]
                          ? `https://${mostLikedBlog.items[0].bucket}.s3.${mostLikedBlog.items[0].region}.amazonaws.com/${mostLikedBlog.items[0].s3Key}`
                          : `images/carouselSample.png`
                      }
                      username={
                        mostLikedBlog.user != null
                          ? mostLikedBlog.user.name
                          : ""
                      }
                      time={formatDate(mostLikedBlog.time)}
                      tag={mostLikedBlog.tag}
                      upVoteC={mostLikedBlog ? mostLikedBlog.like : "0"}
                      read_time={mostLikedBlog.read_time}
                      likeStat={mostLikedBlog?.like_status}
                    />
                  </Box>
                  <Box className="horzBlogsOuter">
                    <Box className="horzBlogsInner">
                      <HorzBlogCard
                        bId={recentBlog[0]?.id}
                        uId={recentBlog[0]?.user.id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        tag={recentBlog[0] != null ? recentBlog[0].tag : ""}
                        title={
                          recentBlog[0] != null
                            ? recentBlog[0].title
                                ?.split(/\s+/)
                                .slice(0, 4)
                                .join(" ")
                            : ""
                        }
                        image={
                          recentBlog[0]
                            ? `https://${recentBlog[0].items[0].bucket}.s3.${recentBlog[0].items[0].region}.amazonaws.com/${recentBlog[0].items[0].s3Key}`
                            : `images/carouselSample.png`
                        }
                        username={
                          recentBlog[0] != null ? recentBlog[0].user.name : ""
                        }
                        time={
                          recentBlog[0] != null
                            ? formatDate(recentBlog[0].time)
                            : ""
                        }
                        upVoteC={
                          recentBlog[0] != null ? recentBlog[0].like : "0"
                        }
                        read_time={
                          recentBlog[0] != null ? recentBlog[0].read_time : ""
                        }
                        likeStat={recentBlog[0]?.like_status}
                      />

                      <HorzBlogCard
                        bId={recentBlog[1]?.id}
                        uId={recentBlog[1]?.user.id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        title={
                          recentBlog[1] != null
                            ? recentBlog[1].title
                                ?.split(/\s+/)
                                .slice(0, 4)
                                .join(" ")
                            : ""
                        }
                        image={
                          recentBlog[1]
                            ? `https://${recentBlog[1].items[0].bucket}.s3.${recentBlog[1].items[0].region}.amazonaws.com/${recentBlog[1].items[0].s3Key}`
                            : `images/carouselSample.png`
                        }
                        username={
                          recentBlog[1] != null ? recentBlog[1].user.name : ""
                        }
                        time={
                          recentBlog[1] != null
                            ? formatDate(recentBlog[1].time)
                            : ""
                        }
                        tag={recentBlog[1] != null ? recentBlog[1].tag : ""}
                        upVoteC={
                          recentBlog[1] != null ? recentBlog[1].like : "0"
                        }
                        read_time={
                          recentBlog[1] != null ? recentBlog[1].read_time : ""
                        }
                        likeStat={recentBlog[1]?.like_status}
                      />
                      <HorzBlogCard
                        bId={recentBlog[2]?.id}
                        uId={recentBlog[2]?.user.id}
                        // key={blog?.user_id}
                        // isUser={
                        //   localStorage.getItem("userId") === blog?.user?.user_id
                        // }
                        title={
                          recentBlog[2] != null
                            ? recentBlog[2].title
                                ?.split(/\s+/)
                                .slice(0, 4)
                                .join(" ")
                            : ""
                        }
                        image={
                          recentBlog[2]
                            ? `https://${recentBlog[2].items[0].bucket}.s3.${recentBlog[2].items[0].region}.amazonaws.com/${recentBlog[2].items[0].s3Key}`
                            : `images/carouselSample.png`
                        }
                        username={
                          recentBlog[2] != null ? recentBlog[2].user.name : ""
                        }
                        time={
                          recentBlog[2] != null
                            ? formatDate(recentBlog[2].time)
                            : ""
                        }
                        tag={recentBlog[2] != null ? recentBlog[2].tag : ""}
                        upVoteC={
                          recentBlog[2] != null ? recentBlog[2].like : "0"
                        }
                        read_time={
                          recentBlog[2] != null ? recentBlog[2].read_time : ""
                        }
                        likeStat={
                          recentBlog[2] !== null && recentBlog[2] !== undefined
                            ? recentBlog[2].like_status
                            : ""
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </FullpageSection>
          <FullpageSection>
            <div className="home_footer">
              {/* </div><div style={{ position: "absolute", bottom: "0px" }}> */}
              <Footer />
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default Home;
