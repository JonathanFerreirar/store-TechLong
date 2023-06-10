import React, { useState } from "react";

import { BsCartFill } from "react-icons/bs";

import "./products.css";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

interface IProducts {
  product: IMouseObj[];
  cartProduct: (cartMouse: IMouseObj) => void;
}

export const Products = ({ product, cartProduct }: IProducts) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (model: string) => {
    setHoveredItem(model);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const addToCart = (mouse: any) => {
    const cartMouse = {
      model: mouse.model,
      img: mouse.img,
      price: mouse.price,
    };
    cartProduct(cartMouse);
  };

  const rendereredProduct = product.map((mouse) => {
    const isHovered = hoveredItem === mouse.model;

    return (
      <li
        key={mouse.model}
        className="w-[300px] h-[140px] bg-[#424242] rounded-[15px] flex flex-col items-center justify-center mt-[100px] cursor-pointer relative"
        onMouseOver={() => handleMouseEnter(mouse.model)}
        onMouseOut={handleMouseLeave}
      >
        <img
          className="G502  w-[220px] mt-[-105px] "
          src={mouse.img}
          alt={mouse.model}
        />
        <div className="flex justify-between w-full ">
          <span className="mx-5">{mouse.model}</span>
          <span className="mx-5">R$ {mouse.price}</span>
          {isHovered && (
            <span
              onClick={() => {
                addToCart(mouse);
              }}
              className="absolute card-product rounded-[15px]"
            >
              <BsCartFill className="card absolute" />
            </span>
          )}
        </div>
      </li>
    );
  });
  return (
    <div className="flex gap-[100px] flex-col items-center justify-center producst mt-[100px]">
      <h2>which type of mouse are you looking for ?</h2>
      <div>
        <ul className="flex gap-5 items-center justify-center flex-wrap">
          {rendereredProduct}
        </ul>
      </div>
    </div>
  );
};
