import React from "react";
import { Card } from "../components/atom";
import { BERITA } from "../config/Data";

const Berita = () => {
  const itemBerita = BERITA;
  return <Card itemBerita={itemBerita} />;
};

export default Berita;
