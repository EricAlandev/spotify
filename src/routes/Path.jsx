import { BrowserRouter, Route, Routes } from "react-router-dom";
import EsqueletoMusic from "../componentes/pageMusic/EsqueletoMusic";
import ArtisaEsqueleto from '../componentes/pageMusic/ArtistaEsqueleto'
import HomePage from "../pages/HomePage";
import LayPadrao from "../styles/LayPadrão";
import ScrollTop from "../componentes/scroll/ScrollTop";

const Path = () =>{

    return(
        <BrowserRouter>
        <ScrollTop />

            <Routes>
                <Route path="/" element={<LayPadrao/>} >
                    <Route index element={<HomePage/>} /> 
                </Route>

                <Route path="/musica/:id" element={<LayPadrao/>} >
                    <Route index element={<EsqueletoMusic/>} /> 
                </Route>

                <Route path="/artista/:id" element={<LayPadrao/>} >
                    <Route index element={<ArtisaEsqueleto/>} /> 
                </Route>

                

            </Routes>
        </BrowserRouter>
    )
}

export default Path;