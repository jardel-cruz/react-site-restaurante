import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";
import rotas from "@/data/rotas.json";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <Logo />
      <ul className={style.menu__list}>
        {rotas.map(({ label, to }, index) => (
          <li key={index} className={style.menu__link}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
