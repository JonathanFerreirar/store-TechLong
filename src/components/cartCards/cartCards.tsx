import React from "react";
import "./cartCards.css";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

const CartCards = ({ img, price, model }: IMouseObj) => {
  return (
    <div className="cartCards flex justify-left items-center  gap-7">
      <div className="flex flex-col items-center">
        <span>{model}</span>
        <img src={img} alt="Mouse Type" className="w-[140px]" />
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex items-center">
          <span className="text-[30px] mx-[30px]">1</span>
        </div>
        <span>R$ {price}</span>
      </div>
    </div>
  );
};

export default CartCards;
