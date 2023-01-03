import style from "./Cardapio.module.scss";
import Buscador from "@/components/Buscador/Buscador";
import { useState } from "react";
import { Filtros } from "@/components/Filtros/Filtros";
import { Ordenador } from "@/components/Ordenador/Ordenador";
import { Itens } from "@/components/Itens/Itens";

export default function Cardapio() {
  const [find, setFind] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardápio</h3>
        <Buscador find={find} setFind={setFind} />
        <div className={style.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens find={find} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
