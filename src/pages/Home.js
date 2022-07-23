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
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Bank Artha Mas Abadi | Home"
        url={location.pathname}
      />
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
