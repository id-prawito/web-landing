import React from "react";
import { useParams } from "react-router-dom";
import { LayananSection } from "../components/section";

const Layanan = () => {
  const { id } = useParams();

  return (
    <>
      {id === "1" ? (
        <LayananSection judul="Data"></LayananSection>
      ) : id === "2" ? (
        <LayananSection judul="Saluran"></LayananSection>
      ) : (
        "Layanan"
      )}
    </>
  );
};

export default Layanan;
