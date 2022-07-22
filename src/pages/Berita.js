import React from "react";
import { Card, FocusComponentColor } from "../components/atom";
import { BERITA } from "../config";
import imgContact from "../assets/img/contact-us.png";

const Berita = () => {
  const itemBerita = BERITA;
  return (
    <>
      <FocusComponentColor backgroundColor="#f9b418" img={imgContact} />
      <Card itemBerita={itemBerita} text="Load More" />
    </>
  );
};

export default Berita;
