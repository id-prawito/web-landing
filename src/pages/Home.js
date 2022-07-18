import React from "react";
import SimpleSlider, { SimpleSliderFicture } from "../components/carousel";
import Header from "../components/header";
import Accordion from "../components/accordion";
import Footer from "../components/footer";
import { BERITA } from "../config/Data";
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
      <Accordion />
      <Informasi />
      <Card itemBerita={BERITA} />
      <DetailOrganisasi />
      <FormKpr />
      <Footer />
    </div>
  );
};

export default Home;
