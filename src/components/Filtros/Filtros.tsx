import filtros from "@/data/filtros.json";
import style from "./Filtros.module.scss";
import classNames from "classnames";

interface FiltrosProops {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

interface IOpcao {
  id: number;
  label: string;
}

export function Filtros({ filtro, setFiltro }: FiltrosProops) {
  function selecionarFiltros({ id }: IOpcao) {
    if (filtro === id) return setFiltro(null);
    return setFiltro(id);
  }

  return (
    <div className={style.filtros}>
      {filtros.map(({ id, label }) => (
        <button
          className={classNames({
            [style.filtros__filtro]: true,
            [style["filtros__filtro--ativo"]]: filtro === id,
          })}
          key={id}
          onClick={() => selecionarFiltros({ id, label })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
