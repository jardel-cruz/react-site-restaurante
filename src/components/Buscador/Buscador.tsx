import style from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface PropsBuscador {
  find: string;
  setFind: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ find, setFind }: PropsBuscador) {
  return (
    <div className={style.buscador}>
      <input
        type="text"
        placeholder="Buscar..."
        value={find}
        onChange={({ target }) => setFind(target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}

