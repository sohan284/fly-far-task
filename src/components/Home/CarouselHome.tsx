import React, { useRef } from "react";
import Slider from "react-slick";
import slider1 from "../../assets/sliderimg1.webp";
import slider2 from "../../assets/sliderimg2.webp";
import slider3 from "../../assets/sliderimg3.webp";
import slider4 from "../../assets/sliderimg4.webp";
import slider5 from "../../assets/sliderimg5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
export {};

export default function CarouselHome() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "right",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: "16px",
          height: "16px",
          backgroundColor: "#d3ebfd",
          borderRadius: "50%",
          cursor: "pointer",
          display: { lg: "block", xs: "none" }, // Replacing "hidden lg:block"
        }}
      ></Box>
    ),
  };

  // Define the image array with proper typing
  const sliderImages: string[] = [slider1, slider2, slider3, slider4, slider5];

  return (
    <Box
      sx={{
        position: "relative",
        marginY: 10, // Replacing "my-10"
        marginX: "auto", // Replacing "mx-auto"
        width: { xs: "85vw", lg: "100%" },
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "220px", // Replacing "h-[220px]"
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Slider Image ${index + 1}`}
              sx={{
                objectFit: "cover", // Replacing "object-cover"
                borderRadius: "8px", // Replacing "rounded-lg"
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
