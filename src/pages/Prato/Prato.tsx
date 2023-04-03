import style from "./Prato.module.scss";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import cardapio from "../../data/cardapio.json";
import TagsPratos from "@/components/Tags/TagsPratos";

export default function Prato() {
  const { id } = useParams();
  const prato = cardapio.find((item) => item.id.toString() === id);
  const navigate = useNavigate();

  if (!prato) return <Navigate to={"/notFound"} replace></Navigate>;

  return (
    <>
      <button className={style.voltar} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={style.container}>
        <h1 className={style.titulo}>{prato.title}</h1>
        <div className={style.imagem}>
          <img src={`../${prato.photo}`} alt={prato.title} />
        </div>
        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>{prato.description}</p>
          <TagsPratos {...prato}></TagsPratos>
        </div>
      </section>
    </>
  );
}
