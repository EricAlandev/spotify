import { BrowserRouter, Route, Routes } from "react-router-dom";
import EsqueletoMusic from "../componentes/pageMusic/EsqueletoMusic";
import ArtisaEsqueleto from '../componentes/pageMusic/ArtistaEsqueleto'
import HomePage from "../pages/HomePage";
import ScrollTop from "../componentes/scroll/ScrollTop";
import BuscarPage from "../pages/BuscarPage";
import CategoriaPage from "../pages/CategoriaPage";
import LoginPage from "../pages/LoginPage";

import LayPadrao from "../styles/LayPadrao";
import LayBuscar from '../styles/LayBuscar';
import LayAssinante from '../styles/LayAssinate'



const Path = () => {
  return (
    <BrowserRouter basename="/spotify">
      <ScrollTop />
      <Routes>
        <Route path="/" element={<LayPadrao />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/musica/:id" element={<LayPadrao />}>
          <Route index element={<EsqueletoMusic />} />
        </Route>

        <Route path="/artista/:id" element={<LayPadrao />}>
          <Route index element={<ArtisaEsqueleto />} />
        </Route>

        <Route path="/buscar" element={<LayBuscar />}>
          <Route index element={<BuscarPage />} />
        </Route>

        <Route path="/Categoria/:categoria" element={<LayPadrao />}>
          <Route index element={<CategoriaPage />} />
        </Route>

        <Route path="/Assinante" element={<LayAssinante />}>
          <Route index element={<LoginPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Path;
