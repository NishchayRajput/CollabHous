import React, { useEffect, useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box display={"flex"} gap={'150px'} paddingLeft={'7rem'}
      paddingBottom={'3rem'} paddingTop={'3rem'}> 
        <Box width={"30%"}>
          <Typography fontSize={"32px"} color={'white'}>CH commune</Typography>
          <Typography fontSize={"18px"} color={'white'}>
            Read, react and share the original thoughts of creators and thinkers
            on personal luxury. Explore our content to delve into the minds
            shaping these industries.
          </Typography>
        </Box>
        <Box width={"10%"}>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Home
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Blogs
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Connect
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            FAQs
          </Typography>
        </Box>
        <Box width={"20%"}>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Social media
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Instagram
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Linkedin
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Twitter
          </Typography>
        </Box>
        <Box width={"40%"}>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            Contact us
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            chcommune.com
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            collabhous.com
          </Typography>
          <Typography fontSize={"22px"} fontWeight={500} color={'white'}>
            hey@collabhous.com
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
