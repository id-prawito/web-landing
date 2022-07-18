import React from "react";
import Home from "../pages/Home";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import NotFound from "../pages/404";
import Berita from "../pages/Berita";
import DetailBerita from "../pages/DetailBerita";

export const RouteSite = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/berita-kami" element={<Berita />} />
      <Route path="/berita-kami/:id" element={<DetailBerita />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};
