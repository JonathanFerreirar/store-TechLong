import React, { useEffect, useState } from "react";

import { Http } from "../../api";

import "./products-page.css";

import { Products } from "../../components/products/Products";

export const ProductsPage = () => {
  const [productsObj, setProductsObd] = useState([]);

  useEffect(() => {
    const getProdcts = async () => {
      const response = await Http.get("/api/mouses");
      setProductsObd(response.data);
    };
    getProdcts();
  }, []);

  return <Products product={productsObj} />;
};
