import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import "normalize.css";
import "@/index.module.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
