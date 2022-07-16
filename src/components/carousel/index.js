import React from "react";
import { CorouselSection } from "./CarouselElements";
import imgTry from "../../assets/img/jago.jpeg";
import imgTry2 from "../../assets/img/jago-2.jpeg";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  return (
    <CorouselSection>
      <SliderWrapper>
        <Slider {...settings}>
          <div className="class_img">
            <img src={imgTry} alt="img_try" />
          </div>

          <div className="class_img">
            <img src={imgTry2} alt="img_try" />
          </div>
          <div className="class_img">
            <img src={imgTry} alt="img_try" />
          </div>
        </Slider>
      </SliderWrapper>
    </CorouselSection>
  );
};

export default SimpleSlider;
