import style from "./Item.module.scss";
import itens from "../../../data/cardapio.json";
import TagsPratos from "@/components/Tags/TagsPratos";
import { useNavigate } from "react-router-dom";

type ProopsItem = typeof itens[0];

export function Item(props: ProopsItem) {
  const navigate = useNavigate();

  return (
    <div
      className={style.item}
      onClick={() => {
        navigate(`/prato/${props.id}`);
      }}
    >
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
