import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: 350,
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
