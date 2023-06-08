import React from "react";

import "./products.css";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
}

interface IProducts {
  product: IMouseObj[];
}

export const Products = ({ product }: IProducts) => {
  const rendereredProduct = product.map((mouse) => {
    return (
      <li
        key={mouse.model}
        className="w-[300px] h-[140px] bg-[#424242] rounded-[15px] flex flex-col items-center justify-center mt-[100px]"
      >
        <img
          className="G502  w-[220px] mt-[-105px] "
          src={mouse.img}
          alt={mouse.model}
        />
        <div className="flex justify-between w-full ">
          <span className="mx-5">{mouse.model}</span>
          <span className="mx-5">R$ {mouse.price}</span>
        </div>
      </li>
    );
  });
  return (
    <div className="flex gap-[100px] flex-col items-center justify-center producst">
      <h2>which type of mouse are you looking for ?</h2>
      <div>
        <ul className="flex gap-5 items-center justify-center flex-wrap">
          {rendereredProduct}
        </ul>
      </div>
    </div>
  );
};
