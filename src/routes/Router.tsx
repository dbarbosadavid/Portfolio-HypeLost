import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import OTempoERei from "../pages/smartLinkPages/OTempoERei";
import Marola from "../pages/smartLinkPages/Marola";
import Ocasioes from "../pages/smartLinkPages/Ocasioes";
import SpotifyProfile from "../components/layout/SpotifyProfile";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/otempoerei" element={<OTempoERei />} />
      <Route path="/marola" element={<Marola />} />
      <Route path="/ocasioes" element={<Ocasioes />} />
      <Route path="/spotify-profile" element={<SpotifyProfile />} />
    </RouterRoutes>
  );
};

export default AppRoutes;