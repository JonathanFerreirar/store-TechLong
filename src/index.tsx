import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Server } from "miragejs";

import G502 from "./assets/mouses/G502.png";
import G703 from "./assets/mouses/G703.png";
import G203 from "./assets/mouses/G203.png";

new Server({
  routes() {
    this.namespace = "api";
    this.urlPrefix = "http://api.TechLong.com.br";
    this.get("/mouses", () => {
      return [
        {
          model: "G502",
          img: G502,
          price: 399.99,
        },
        {
          model: "G703",
          img: G703,
          price: 299.99,
        },
        {
          model: "G203",
          img: G203,
          price: 129.99,
        },
      ];
    });
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

reportWebVitals();
