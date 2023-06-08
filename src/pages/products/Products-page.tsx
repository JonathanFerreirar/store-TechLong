import React from "react";

import "./products-page.css";

import G502 from "../../assets/mouses/G502.png";
import G703 from "../../assets/mouses/G703.png";
import G203 from "../../assets/mouses/G203.png";

import { Products } from "../../components/products/Products";

export const ProductsPage = () => {
  const objProducts = [
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
  return <Products product={objProducts} />;
};
