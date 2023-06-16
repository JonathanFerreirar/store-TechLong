import React, { useEffect, useContext } from "react";

import MouseContext from "../../context/mouse-context";

import "./products-page.css";

import { Products } from "../../components/products/Products";

export const ProductsPage = () => {
  const { getProdctsContext, productsObj } = useContext(MouseContext);

  useEffect(() => {
    getProdctsContext();
  }, [getProdctsContext]);

  return <Products product={productsObj} />;
};
