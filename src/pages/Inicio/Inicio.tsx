import styleTema from "@/assets/style/Tema.module.scss";
import style from "./Inicio.module.scss";
import cardapio from "../../data/cardapio.json";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações</h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map(({ id, photo, title }) => (
          <div key={id}>
            <div className={style.recomendado__imagem}>
              <img src={photo} alt={title} />
            </div>
            <button className={style.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
