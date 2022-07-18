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
      <Detail
        judul="Visi"
        deskripsi="Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
                seluruh wilayah kerja Kabupaten Pati dan sekitarnya."
      />
      <OjkInformasi />
      <SimpleSliderFicture
        judul="Produk dan Layanan Kami"
        deskripsi="Kami percaya bahwa pengalaman transaksi perbankan yang pada produk unggulan kami."
      />
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
