import React from "react";
import Home from "../pages/Home";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import NotFound from "../pages/404";

export const RouteSite = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};
