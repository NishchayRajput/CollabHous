import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { Element } from "react-scroll";
import ControlledCarousel from "../components/ControlledCarousel";
import HorzBlogCard from "../components/horzBlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setBlogs(data);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  const cImages = [
    { link: "images/carouselSample.png" },
    { link: "images/carouselSample.png" },
  ];
  const [selectedButton, setSelectedButton] = useState(1);
  const [displayText, setDisplayText] = useState(
    "Fair and square to everyone and everything - unbiased; We’re a collective where diversity is celebrated, each person feels cherished and has equal opportunities to thrive and contribute their unique gifts."
  );
  console.log(selectedButton);
  const handleButtonClick = (buttonId, buttonText) => {
    setSelectedButton(buttonId);
    setDisplayText(buttonText);
  };
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
              onClick={() =>
                handleButtonClick(
                  1,
                  "Fair and square to everyone and everything - unbiased; We’re a collective where diversity is celebrated, each person feels cherished and has equal opportunities to thrive and contribute their unique gifts."
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  2,
                  "Fair and square to everyone and everything - unbiased; We’re ir unique gifts."
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  3,
                  "Faire and everything - unbiased; We’re a collective where diversity is celebrated, each person feels cherished and has equal opportunities to thrive ique gifts."
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  4,
                  "Fair and square to everyone and everything - unbiased; We’re a collective where diversity is celebrated, each person feels cherished and has equal opportunities to thrive and contribute their unique gifts."
                )
              }
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
                  A commune that transcends individual identities. We engage in
                  open dialogue to explore the essence of luxury, fashion, and
                  art, to uncover their intricate connections.
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
            To those who share our mindset - the dreamers, innovators, creators,
            and influencers. We playfully challenge conventional wisdom by
            embracing myth-busters, expert advisors, and critics, all within an
            encouraging environment that values what truly counts.
          </Typography>
          <Typography
            fontSize={"20px"}
            fontWeight={"400"}
            textAlign={"center"}
            color={"#FFFFFF"}
          >
            We're not just a voice; we're a united community representing the
            new age India, and we’ve got much more up our sleeve.
          </Typography>
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
        <Box display={"flex"} flexDirection={"column"} width={'80vw'}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography color={"rgba(247, 77, 121, 1)"} fontSize={"41px"}>
              Trending Blogs
            </Typography>
            <Typography color={"white"} fontSize={"26px"} display={'flex'} alignItems={'center'}>
              More
            </Typography>
          </Box>
          <Box display={"flex"} height={'77vh'}>
            <Box width={"50%"}>
              <BlogCard
                // isUser={localStorage.getItem("userId") === blog?.user?.user_id}
                title={"Title"}
                description={"content"}
                image={"image"}
                username={"username"}
                time={"time"}
              />
            </Box>
            <Box width={"50%"}  >
              <Box width={'90%'} marginX={'auto'} >
              {blogs &&
                blogs.map((blog) => (
                  <HorzBlogCard
                    id={blog?.user_id}
                    key={blog?.user_id}
                    isUser={
                      localStorage.getItem("userId") === blog?.user?.user_id
                    }
                    title={blog?.title}
                    description={blog?.content}
                    image={blog?.image}
                    username={blog?.user?.username}
                    time={blog.time}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
