import style from "./Item.module.scss";
import itens from "../../../data/cardapio.json";
import TagsPratos from "@/components/Tags/TagsPratos";

type ProopsItem = typeof itens[0];

export function Item(props: ProopsItem) {
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <TagsPratos {...props}></TagsPratos>
      </div>
    </div>
  );
}
