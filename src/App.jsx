import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import { CarrinhoProdvider } from "./context/CarrinhoContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoProdvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProdvider>
    </BrowserRouter>
  );
}

export default App;
