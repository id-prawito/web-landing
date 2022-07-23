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
} from "../components/atom";
import { OrganisasiSection } from "../components/section";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Bank Artha Mas Abadi | Home</title>
        <meta
          name="description"
          content="Ini adalah halaman Baru Here you can find all the basic elements that should never report any issue, in every page of the website."
        />
        <link rel="canonical" href="/web-landing" />
        <meta property="og:type" content="Text" />
        <meta property="og:title" content="Bank Artha Mas Abadi | Home" />
        <meta property="og:url" content="/web-landing" />
        <meta
          property="og:image"
          content="https://id-prawito.github.io/web-landing/static/media/jago-3.6318b27de2998085a42f.jpg"
        />
        <meta
          property="og:description"
          content="hIni adalah halaman Baru Here you can find all the basic elements that should never report any issue, in every page of the website."
        />
      </Helmet>
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
