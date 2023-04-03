import styleTema from "@/assets/style/Tema.module.scss";
import style from "./Inicio.module.scss";
import cardapio from "../../data/cardapio.json";
import nossaCasa from "@/assets/images/nossa_casa.png";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const navigate = useNavigate();
  const redirecionarParaDetalhes = (id: number) => {
    navigate(`/prato/${id}`);
  };

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações</h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map(({ id, photo, title }) => (
          <div key={id}>
            <div className={style.recomendado__imagem}>
              <img src={photo} alt={title} />
            </div>
            <button
              onClick={() => redirecionarParaDetalhes(id)}
              className={style.recomendado__botao}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={styleTema.titulo}>Nossa casa </h3>
      <div>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className="styles.nossaCasa_endereco">
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana SP
        </div>
      </div>
    </section>
  );
}
