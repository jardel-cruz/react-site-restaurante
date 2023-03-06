import style from "./Footer.module.scss";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Logo />
    </footer>
  );
}
