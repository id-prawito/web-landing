import React from "react";
import { useParams } from "react-router-dom";
import DetailBeritaComponents from "../components/detailberita";
import { BERITA } from "../config/Data";

const DetailBerita = () => {
  const { id } = useParams();

  const activeServiceList = BERITA.filter((item) => {
    let text = item.judul;
    let result = text.toLowerCase();
    const judulBerita = result.split(" ").join("-");

    return id.includes(judulBerita);
  });

  return <DetailBeritaComponents item={id} newItem={activeServiceList} />;
};

export default DetailBerita;
