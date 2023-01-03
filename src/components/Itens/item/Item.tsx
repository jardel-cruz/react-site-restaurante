import style from "./Item.module.scss";
import itens from "../../../data/cardapio.json";
import classNames from "classnames";

type ProopsItem = typeof itens[0];

export function Item({
  category,
  description,
  photo,
  price,
  serving,
  size,
  title,
}: ProopsItem) {
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.item__tags}>
          <div
            className={classNames(
              style.item__tipo,
              style[`item__tipo__${category.label.toLowerCase()}`]
            )}
          >
            {category.label}
          </div>
          <div className={style.item__porcao}>{size}</div>
          <div className={style.item__qtdpessoas}>
            Serve {serving} {serving > 1 ? "pessoas" : "pessoa"}
          </div>
          <div className={style.item__valor}>R$ {price},00</div>
        </div>
      </div>
    </div>
  );
}
