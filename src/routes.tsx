import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cardapio from "./pages/Cardapio/Cardapio";
import Menu from "./components/Munu/Menu";
import Footer from "./components/Footer/Footer";
import PaginaPadram from "./components/PaginaPadrao/PaginaPadrao";
import Sobre from "@/pages/Sobre/Sobre";
import NotFound from "@/pages/NotFound/NotFound";
import style from "./index.module.scss";
import Prato from "./pages/Prato/Prato";

export default function AppRouter() {
  return (
    <main className={style.container}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadram />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="prato/:id" element={<Prato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
