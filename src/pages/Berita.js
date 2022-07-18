import React from "react";
import { Card } from "../components/atom";
import Header from "../components/header";
import { BERITA } from "../config/Data";

const Berita = () => {
  const itemBerita = BERITA;
  return (
    <div>
      <Header />
      <Card itemBerita={itemBerita} />
    </div>
  );
};

export default Berita;
