import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Pagina1 from "./pages/Pagina1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesCartaz from "./pages/filmes/FilmesCartaz";
import FilmesLancamento from "./pages/filmes/FilmesLancamento";
import AtoresDetalhes from "./pages/atores/AtoresDetalhes";
import SeriesDetalhes from "./pages/series/SeriesDetalhes";
import SeriesPopulares from "./pages/series/SeriesPopulares";
import SeriesNoAr from "./pages/series/SeriesNoAr";
import SeriesEstrelando from "./pages/series/SeriesEstrelando";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Carros />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="/array" element={<Array />} />
            <Route path="/objeto" element={<Objeto />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/filmes/populares" element={<FilmesPopulares />} />
            <Route path="/filmes/cartaz" element={<FilmesCartaz />} />
            <Route path="/filmes/lancamento" element={<FilmesLancamento />} />
            <Route path="/filmes/:id" element={<FilmesDetalhes />} />
            <Route path="/atores/:id" element={<AtoresDetalhes />} />
            <Route path="/series/:id" element={<SeriesDetalhes />} />
            <Route path="/series/populares" element={<SeriesPopulares />} />
            <Route path="/series/noar" element={<SeriesNoAr />} />
            <Route path="/series/estrelando" element={<SeriesEstrelando />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;