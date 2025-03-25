import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
