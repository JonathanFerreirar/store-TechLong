import { createContext, useCallback, useState } from "react";
import { Http } from "../api";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

const MouseContext = createContext({
  productsObj: [],
  productsInCart: [],

  getProdctsContext: () => {},
  postProdctsContext: (mouse: IMouseObj) => {},
  getValueToCartContext: (mouse: IMouseObj) => {},
  getProdctsCartContext: () => {},
});

function Provider({ children }: any) {
  const [productsObj, setProductsObj] = useState([]);
  const [productsInCart, setproductsInCart] = useState<any>([]);

  const getProdctsContext = useCallback(async () => {
    try {
      const response = await Http.get("/api/mouse");

      setProductsObj(response.data.mouses);
    } catch (error) {
      alert(
        "We were unable to search the products. Please try again late." + error
      );
    }
  }, []);

  const getProdctsCartContext = async () => {
    try {
      const response = await Http.get("/api/mouse");
      setproductsInCart(response.data.cart[0].models);
    } catch (error) {
      alert("Unable to search for products. Please, come back later" + error);
    }
  };

  const postProdctsContext = useCallback(async (mouse: IMouseObj) => {
    try {
      const response = await Http.post("/api/mouse", {
        mouse,
      });

      console.log("No post", response);
    } catch (error) {
      alert("Unable to add product to . Please come back later" + error);
    }
  }, []);

  const getValueToCartContext = async (mouse: IMouseObj) => {
    try {
      await Http.post("/api/mouse", {
        mouse,
      });
      getProdctsCartContext();
    } catch (error) {
      alert("Unable to add product to . Please come back later" + error);
    }
  };

  const mouseShare = {
    productsObj,
    productsInCart,

    getProdctsContext,
    postProdctsContext,
    getValueToCartContext,
    getProdctsCartContext,
  };

  return (
    <MouseContext.Provider value={mouseShare}>{children}</MouseContext.Provider>
  );
}

export { Provider };
export default MouseContext;
