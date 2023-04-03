import { Prato } from "@/types/types";
import classNames from "classnames";
import style from "./TagsPratos.module.scss";

export default function TagsPratos({ price, size, serving, category }: Prato) {
  return (
    <div className={style.tags}>
      <div
        className={classNames(
          style.tags__tipo,
          style[`tags__tipo__${category.label.toLowerCase() as "carnes"}`]
        )}
      >
        {category.label}
      </div>
      <div className={style.tags__porcao}>{size}</div>
      <div className={style.tags__qtdpessoas}>
        Serve {serving} {serving > 1 ? "pessoas" : "pessoa"}
      </div>
      <div className={style.tags__valor}>R$ {price},00</div>
    </div>
  );
}
