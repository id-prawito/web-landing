import React from "react";
import { FocusComponentColor } from "../components/atom";
import imgContact from "../assets/img/contact-us.png";
import FormKpr from "../components/form";

const Simulasi = () => {
  return (
    <>
      <FocusComponentColor backgroundColor="#26ac42" img={imgContact} />
      <FormKpr />
    </>
  );
};

export default Simulasi;
