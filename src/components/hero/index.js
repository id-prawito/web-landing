import React from "react";
import { FaAccusoft } from "react-icons/fa";
import { HeroSite } from "./HeroElements";

const Hero = () => {
  return (
    <HeroSite id="home">
      <div className="hero_container">
        <div className="hero_content">
          <h1>Hy, my name is Prawito</h1>
          <div className="big_heading">Prawito</div>
          <div className="big_heading_one">I build things for the web.</div>
          <p>
            I'm a software engineer specializing in building (andoccasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on exploring and learning about JavaScript programming language and
            others tech stack for frontend engineer.
          </p>
          <div className="button_hero">
            <div className="button_my-course">
              <FaAccusoft />
              <a href="#try" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroSite>
  );
};

export default Hero;
