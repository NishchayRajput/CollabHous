import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/ControlledCarousel.css";

const MyCarousel = ({ image }) => {
  return (
    <div>
      <Carousel
        axis="horizontal"
        showStatus={false} // Hide status indicators
        showThumbs={false} // Hide thumbnail images
        infiniteLoop // Enable infinite looping
        useKeyboardArrows // Enable keyboard navigation
        autoPlay={true}
        renderIndicator={false}
      >
        {image.map((image) => (
          <div style={{}}>
            <img
              style={{
                width: "95%",
                height: "100%",
                margin: "0 auto",
                borderRadius: "20px",
              }}
              src={image.link}
              alt="Slide"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
