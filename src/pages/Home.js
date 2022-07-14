import React from "react";
import SimpleSlider from "../components/carousel";
import Header from "../components/header";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SimpleSlider />
      <Hero />
    </div>
  );
};

export default Home;
