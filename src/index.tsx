import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Model, Server } from "miragejs";

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./context/mousse-context";

import G502 from "./assets/mouses/G502.svg";
import G703 from "./assets/mouses/G703.svg";
import G203 from "./assets/mouses/G203.svg";

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
        ],
        cart: [schema.all("mouse")],
      };
    });

    this.post("/mouse", (schema, request): any => {
      const data = JSON.parse(request.requestBody);

      // const newItem: any = {
      //  data
      // };

      const cartItem = schema.create("mouse", data);

      return {
        status: "Success",
        massager: "POST resquest successful",
        cartItem,
      };
    });
    // this.get("/cart", async (schema) => {
    //   return {
    //     cart: (await schema.cart.all()).models,
    //   };
    // });
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
