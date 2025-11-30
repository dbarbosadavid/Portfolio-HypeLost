import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import OTempoERei from "../pages/OTempoERei";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/otempoerei" element={<OTempoERei />} />
    </RouterRoutes>
  );
};

export default AppRoutes;