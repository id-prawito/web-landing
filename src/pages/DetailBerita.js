import React from "react";
import { useParams } from "react-router-dom";
import DetailBeritaComponents from "../components/detailberita";
import Header from "../components/header";
import { BERITA } from "../config/Data";

const DetailBerita = () => {
  const { id } = useParams();

  const activeServiceList = BERITA.filter((item) => {
    let text = item.judul;
    let result = text.toLowerCase();
    const judulBerita = result.split(" ").join("-");

    return id.includes(judulBerita);
  });

  return (
    <div>
      <Header />
      <DetailBeritaComponents item={id} newItem={activeServiceList} />
    </div>
  );
};

export default DetailBerita;
