import React from "react";
import SimpleSlider, { SimpleSliderFicture } from "../components/carousel";
import Accordion from "../components/accordion";
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
    </div>
  );
};

export default Home;
