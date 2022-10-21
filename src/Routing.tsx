import React from "react";
import { Routes, Route } from "react-router-dom";
import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
