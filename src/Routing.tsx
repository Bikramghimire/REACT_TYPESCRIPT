import React from "react";
import { Routes, Route } from "react-router-dom";
import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivateRoutes from "./pages/ProtectedRoutes/PrivateRoutes";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/privateroutes" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default Routing;
