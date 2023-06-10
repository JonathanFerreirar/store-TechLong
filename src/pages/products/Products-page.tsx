import React, { useEffect, useContext } from "react";

import MouseContext from "../../context/mousse-context";

import "./products-page.css";

import { Products } from "../../components/products/Products";

export const ProductsPage = () => {
  const {
    getProdctsContext,
    productsObj,
    productsCart,
    getValueToCartContext,
    postProdctsContext,
    getProdctsCartContext,
  } = useContext(MouseContext);

  useEffect(() => {
    getProdctsContext();

    postProdctsContext();

    getProdctsCartContext();
  }, [productsCart]);

  return <Products cartProduct={getValueToCartContext} product={productsObj} />;
};
