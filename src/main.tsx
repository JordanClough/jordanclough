import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const el = document.getElementById("root");
if (!el) throw new Error("Missing #root element");

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>
);
