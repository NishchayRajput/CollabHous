import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const BlogLayout = () => {
 
  return (
    <>
      <Box mt={"20px"}>
        <Typography
          padding={"10px"}
          fontSize={"71px"}
          style={{ textAlign: "center", color:'white' }}
        >
          {" "}
          Our Blogs
        </Typography>
        <Typography fontSize={'15px'} color={'white'} width={'60%'} mx={'auto'} padding={"30px"} style={{ textAlign: "center", paddingBottom:'70px' }}>
          Lorem ipsum dolor sit amet consectetur. Mauris vitae orci mauris lacus
          ac neque ut integer rutrum. Vitae viverra habitant semper at enim nunc
          sed convallis. Duis sed phasellus quis ultrices sagittis in in urna
          augue. Eu vestibulum nibh scelerisque odio. Fames tristique elementum
          mauris egestas. Quisque habitant lobortis mi vitae. Netus dignissim ac
          bibendum et faucibus lectus ultrices. Tincidunt consectetur
          pellentesque nisl dignissim amet at ullamcorper lacus.
        </Typography>
      </Box>
      <Outlet />
    </>
  );
};

export default BlogLayout;
