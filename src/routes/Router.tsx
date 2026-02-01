import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import OTempoERei from "../pages/smartLinkPages/OTempoERei";
import Marola from "../pages/smartLinkPages/Marola";
import Ocasioes from "../pages/smartLinkPages/Ocasioes";
import SpotifyProfile from "../pages/SpotifyProfile";
import ServicosPage from "../pages/ServicosPage";
import BuyBeatPage from "../pages/BuyBeatPage";
import ContratarMixMasterPage from "../pages/ContratarMixMasterPage";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/otempoerei" element={<OTempoERei />} />
      <Route path="/marola" element={<Marola />} />
      <Route path="/ocasioes" element={<Ocasioes />} />
      <Route path="/spotify-profile" element={<SpotifyProfile />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/comprar-beat" element={<BuyBeatPage />} />
      <Route path="/contratar-mix-master" element={<ContratarMixMasterPage />} />
    </RouterRoutes>
  );
};

export default AppRoutes;