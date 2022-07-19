import React from "react";
import Home from "../pages/Home";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import NotFound from "../pages/404";
import Berita from "../pages/Berita";
import DetailBerita from "../pages/DetailBerita";
import ContactUs from "../pages/ContactUs";
import Layanan from "../pages/Layanan";

export const RouteSite = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/we-contact-us" element={<ContactUs />} />
      <Route exact path="/layanan-kami" element={<Layanan />} />
      <Route exact path="/layanan-kami/:id" element={<Layanan />} />
      <Route exact path="/berita-kami" element={<Berita />} />
      <Route exact path="/berita-kami/:id" element={<DetailBerita />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
