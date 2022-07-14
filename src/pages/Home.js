import React from "react";
import SimpleSlider from "../components/carousel";
import Header from "../components/header";
import Hero from "../components/hero";
import Accordion from "../components/accordion";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SimpleSlider />
      <Hero />
      <Accordion />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
