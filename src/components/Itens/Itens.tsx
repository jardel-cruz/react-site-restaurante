import style from "./Itens.module.scss";
import itens from "../../data/cardapio.json";
import { Item } from "./item/Item";
import { useEffect, useState } from "react";

interface ItensProops {
  ordenador: string;
  find: string;
  filtro: number | null;
}

interface Prato {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}

export function Itens({ filtro, find, ordenador }: ItensProops) {
  const [list, setList] = useState<Prato[]>(itens);

  function testaBusca(title: string): boolean {
    const rgx = new RegExp(find, "i");

    return rgx.test(title);
  }

  function testaFiltro(id: number): boolean {
    if (filtro) return filtro === id;
    return true;
  }

  function ordenarNovaLista(lista: Prato[]): Prato[] {
    switch (ordenador) {
      case "porcao":
        return lista.sort((a, b) => (a.size > b.size ? 1 : -1));

      case "qtd_pessoas":
        return lista.sort((a, b) => (a.serving > b.serving ? 1 : -1));

      case "preco":
        return lista.sort((a, b) => (a.price > b.price ? 1 : -1));

      default:
        return lista;
    }
  }

  useEffect(() => {
    const novaLista = itens.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setList(ordenarNovaLista(novaLista));
  }, [find, filtro, ordenador]);

  return (
    <div className={style.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
