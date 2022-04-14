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
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
