import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import OTempoERei from "../pages/musicPages/OTempoERei";
import Marola from "../pages/musicPages/Marola";
import Ocasioes from "../pages/musicPages/Ocasioes";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/otempoerei" element={<OTempoERei />} />
      <Route path="/marola" element={<Marola />} />
      <Route path="/ocasioes" element={<Ocasioes />} />
    </RouterRoutes>
  );
};

export default AppRoutes;