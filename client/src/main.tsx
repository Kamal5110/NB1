import { HashRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}
<Router>
  <App />
</Router>
createRoot(document.getElementById("root")!).render(<App />);
