import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = ({image}) => {
  // console.log(image);
  return (
    <div style={{ width: "95%", margin: "0 auto", borderRadius: "20px" }}>
      <Carousel
        showStatus={false} // Hide status indicators
        showThumbs={false} // Hide thumbnail images
        infiniteLoop // Enable infinite looping
        useKeyboardArrows // Enable keyboard navigation
        autoPlay={true}
      >
        
        {image.map((image) => (
          <div>
            <img src={image.link} alt="Slide image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
