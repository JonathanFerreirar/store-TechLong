import React from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Model, Server } from "miragejs";

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./context/mouse-context";
import { ProviderAlert } from "./context/confirm-alert-context";

import G502 from "./assets/mouses/G502.webp";
import G703 from "./assets/mouses/G703.webp";
import G203 from "./assets/mouses/G203.webp";

import UPG502 from "./assets/mouses/UPG502.webp";
import UPG703 from "./assets/mouses/UPG703.webp";
import UPG203 from "./assets/mouses/UPG203.webp";

new Server({
  models: {
    mouse: Model,
  },

  routes() {
    this.namespace = "api";
    this.urlPrefix = "http://api.TechLong.com.br";
    this.get("/mouse", (schema) => {
      return {
        mouses: [
          {
            model: "G502",
            description:
              "G502 HERO! Built for advanced gaming performance. G502 HERO features a HERO 25K gaming sensor with sub-micrometer precision tracking, customizable LIGHTSYNC RGB, built-in profiles, repositionable weights and more.",
            img: G502,
            imgUp: UPG502,
            price: 399.99,
          },
          {
            model: "G703",
            description:
              "G703 LIGHTSPEED! Introducing the advanced HERO 25K gaming sensor with sub-micrometer tracking and 10x more power efficiency than previous generations. Professional-grade wireless LIGHTSPEED delivers ultra-low latency for peak performance.",
            img: G703,
            imgUp: UPG703,
            price: 299.99,
          },
          {
            model: "G203",
            description:
              "G203 LIGHTSYNC! Make the most of your gaming time with the G203 — a gaming mouse available in a variety of vibrant colors. With LIGHTSYNC technology, a gaming-grade sensor, and a classic 6-button design, you'll light up your game and your desk.",
            img: G203,
            imgUp: UPG203,
            price: 129.99,
          },
        ],
        cart: [schema.all("mouse")],
      };
    });

    this.post("/mouse", (schema, request): any => {
      const data = JSON.parse(request.requestBody);

      const cartItem = schema.create("mouse", data);

      return {
        status: "Success",
        massager: "POST resquest successful",
        cartItem,
      };
    });
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider>
    <ProviderAlert>
      <RouterProvider router={router} />
    </ProviderAlert>
  </Provider>
);

reportWebVitals();
