import React from "react";
import SimpleSlider, { SimpleSliderFicture } from "../components/carousel";
import Header from "../components/header";
import Hero from "../components/hero";
import Accordion from "../components/accordion";
import Footer from "../components/footer";
import {
  Card,
  Detail,
  DetailOrganisasi,
  FocusComponent,
  Informasi,
  OjkInformasi,
} from "../components/atom";
import FormKpr from "../components/form";

const Home = () => {
  return (
    <div>
      <Header />
      <SimpleSlider />
      <Detail />
      <OjkInformasi />
      <SimpleSliderFicture />
      <FocusComponent />
      <Hero />
      <Accordion />
      <Informasi />
      <Card />
      <DetailOrganisasi />
      <FormKpr />
      <Footer />
    </div>
  );
};

export default Home;
