import React from "react";
import imgContact from "../assets/img/contact-us.png";
import { FocusComponentColor } from "../components/atom";
import { PublikasiSection } from "../components/section";
import { DATA_PUBLIKASI } from "../config/data";

const Publikasi = () => {
  const DataPublikasi = DATA_PUBLIKASI;

  return (
    <>
      <FocusComponentColor backgroundColor="#e9bf45" img={imgContact} />
      <PublikasiSection
        judul="Publikasi"
        link="publikasi"
        DATA_TABS={DataPublikasi}
      />
    </>
  );
};

export default Publikasi;
