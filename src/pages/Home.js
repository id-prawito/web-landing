import React from "react";
import SimpleSlider from "../components/carousel";
import Header from "../components/header";
import Hero from "../components/hero";
import Accordion from "../components/accordion";
import Footer from "../components/footer";
import { Card, Informasi } from "../components/atom";
import FormKpr from "../components/form";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SimpleSlider />
      <Hero />
      <Accordion />
      <Hero />
      {/* TEST COMPONENTS */}
      <section>
        <div style={{ padding: "0 100px" }} className="container_info">
          <Informasi />
        </div>
      </section>
      <section>
        <div style={{ padding: "0 100px" }} className="container_info">
          <Card />
        </div>
      </section>
      <FormKpr />
      <Footer />
    </div>
  );
};

export default Home;
