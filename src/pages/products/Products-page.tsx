import React, { useEffect, useState } from "react";

import { Http } from "../../api";

import "./products-page.css";

import { Products } from "../../components/products/Products";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

export const ProductsPage = () => {
  const [productsObj, setProductsObd] = useState([]);
  const [productsCart, setproductsCart] = useState<IMouseObj>();

  const getValueToCart = (item: IMouseObj) => {
    setproductsCart(item);
  };
  //console.log("Iem chegou com sucesso aqui", productsCart);

  useEffect(() => {
    const getProdcts = async () => {
      const response = await Http.get("/api/mouse");

      setProductsObd(response.data.mouses);
      console.log("Itens on the cart", response.data.cart[0].models);
    };

    getProdcts();

    const postProdcts = async () => {
      const response = await Http.post("/api/mouse", {
        model: productsCart?.model,
        img: productsCart?.img,
        price: productsCart?.price,
      });
    };
    postProdcts();

    // const getMous = async () => {
    //   const response = await Http.get("/api/cart");
    //   console.log("Aqui está", response);
    // };
    // getMous();
  }, [productsCart]);

  return <Products cartProduct={getValueToCart} product={productsObj} />;
};
