import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carros from "./pages/Carros";
import Array from "./pages/Array";
import Objeto from "./pages/Objeto";
import Pagina1 from "./pages/Pagina1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>

        <Menu />

        <Routes>
          <Route path="/" element={<Carros />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/array" element={<Array />} />
          <Route path="/objeto" element={<Objeto />} />
          <Route path="/pagina1" element={<Pagina1 />} />
        </Routes>

      </BrowserRouter>

      <h1>Fim da página fixa</h1>
    </div>
  );
}

export default App;
