import React, { useContext, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";

import { BsGithub } from "react-icons/bs";

import "./cart.css";

import CartCards from "../../components/cartCards/cartCards";

import MouseContext from "../../context/mouse-context";

interface IMouseCart {
  id: string;
  mouse: {
    description: string;
    img: any;
    imgUp: any;
    model: string;
    price: number;
  };
}

const Cart = () => {
  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="confirm-custom-UI flex flex-col justify-center items-center gap-10">
            <h1 className="text-center text-[30px] my-2">
              I have bad news for you, sorry.
            </h1>
            <p className="text-justify text-[25] mx-5">
              This is the end of my application, but don't be sad, I have more
              apps on my Github and you can be allowed to check all of public
              apps I own. Now feel free to check each my applications and give
              me many suggestions.
            </p>
              <a
              href="https://github.com/JonathanFerreirar"
              target="_blank"
              rel="noreferrer"
            >

            <button
              className="my-5 "
              onClick={() => {
                onClose();
              }}
            >
              Got it!
            </button>
          </div>
        );
      },
    });
  };

  let total = 0;
  const { productsInCart } = useContext(MouseContext);
  const renderedCart = productsInCart.map((mouse: IMouseCart) => {
    total += mouse.mouse.price;

    return (
      <CartCards
        key={mouse.mouse.model}
        img={mouse.mouse.img}
        price={mouse.mouse.price}
        model={mouse.mouse.model}
      />
    );
  });

  return (
    <div className="cart-page flex flex-col items-center justify-between mx-[20%] mt-[10rem] gap-[100px] mb-[100px]">
      {renderedCart}

      <div className="mx-[10rem] flex flex-col gap-10">
        <div className="flex  items-center gap-10 ">
          <h4>Total:</h4>
          <span>{total.toFixed(2)}</span>

          <button
            className="p-3 w-[100px] rounded-[15px] bg-[#3a8bb1] text-black hover:bg-[#383a3b] hover:text-[#b4b9ba]"
            onClick={submit}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
