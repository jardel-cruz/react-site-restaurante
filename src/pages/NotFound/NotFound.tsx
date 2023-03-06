import classNames from "classnames";
import style from "./NotFound.module.scss";
import styleTema from "../../index.module.scss";
import { ReactComponent as NotFount } from "@/assets/images/not_found.svg";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styleTema.container]: true,
        [style.container]: true,
      })}
    >
      <div className={style.voltar}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {"< Voltar"}
        </button>
      </div>
      <NotFount />
    </div>
  );
}
