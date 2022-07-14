import React from "react";
import { CorouselSection } from "./CarouselElements";
import imgTry from "../../assets/img/jago.jpeg";
import imgTry2 from "../../assets/img/jago-2.jpeg";
import Slider from "react-slick";

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
  };

  return (
    <CorouselSection>
      <Slider {...settings}>
        <div className="slide">
          <img src={imgTry} alt="img_try" />
        </div>
        <div className="slide">
          <img src={imgTry2} alt="img_try" />
        </div>
        <div className="slide">
          <img src={imgTry} alt="img_try" />
        </div>
      </Slider>
      <section className="section_carousel">
        <div className="carousel_container">
          <div className="caraousel_img"></div>
        </div>
      </section>
    </CorouselSection>
  );
};

export default SimpleSlider;
