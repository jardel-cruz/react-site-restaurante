import style from "./Ordenador.module.scss";
import opcoes from "@/data/opcoes.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface ProopsOrdenador {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export function Ordenador({ ordenador, setOrdenador }: ProopsOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find(({ value }) => value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [style.ordenador]: true,
        [style["ordenador--ativo"]]: ordenador.length > 0,
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [style.ordenador__options]: true,
          [style["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map(({ nome, value }) => (
          <div
            className={style.ordenador__option}
            key={value}
            onClick={() => setOrdenador(value)}
          >
            {nome}
          </div>
        ))}
      </div>
    </button>
  );
}
