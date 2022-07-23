import React from "react";
import SimpleSlider, { SimpleSliderFicture } from "../components/carousel";
import { Accordion, FormKpr } from "../components";
import { BERITA } from "../config/data";
import {
  Card,
  Detail,
  FocusComponent,
  Informasi,
  OjkInformasi,
  ReactHelmet,
} from "../components/atom";
import { OrganisasiSection } from "../components/section";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <ReactHelmet />
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
      <FocusComponent backgroundColor="#06aed5" />
      <Accordion />
      <Informasi />
      <Card itemBerita={BERITA} text="Lihat Lebih" />
      <OrganisasiSection />
      <FormKpr />
    </>
  );
};

export default Home;
