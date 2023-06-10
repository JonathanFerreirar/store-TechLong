import { createContext, useCallback, useState } from "react";
import { Http } from "../api";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

const MouseContext = createContext({
  productsObj: [],
  productsInCart: [{}],
  productsCart: {},
  getProdctsContext: () => {},
  postProdctsContext: () => {},
  getValueToCartContext: (item: IMouseObj) => {},
  getProdctsCartContext: () => {},
});

function Provider({ children }: any) {
  const [productsObj, setProductsObj] = useState([]);
  const [productsCart, setproductsCart] = useState<any>();
  const [productsInCart, setproductsInCart] = useState<any>([{}]);

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

  const getProdctsCartContext = useCallback(async () => {
    try {
      const response = await Http.get("/api/mouse");

      setproductsInCart(response.data.cart[0].models);

      console.log("Products on the cart", productsInCart);
    } catch (error) {
      alert("Unable to search for products. Please, come back later" + error);
    }
  }, [productsInCart]);

  const getValueToCartContext = (item: IMouseObj) => {
    setproductsCart(item);
  };
  const postProdctsContext = useCallback(async () => {
    try {
      const response = await Http.post("/api/mouse", {
        model: productsCart?.model,
        img: productsCart?.img,
        price: productsCart?.price,
      });
    } catch (error) {
      alert("Unable to add product to . Please come back later" + error);
    }
  }, [productsCart]);

  const mouseShare = {
    productsObj,
    productsCart,
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