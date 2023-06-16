import React, { useState, useContext } from "react";

import confirmAlertContext from "../../context/confirm-alert-context";

import ConfirmCustom from "../confirm-custom/confirmCustom";

import { BsCartFill } from "react-icons/bs";

import "./products.css";
import MouseContext from "../../context/mouse-context";

interface IMouseObj {
  model: string;
  img: any;
  price: number;
  imgUp: any;
  description: string;
}

interface IProducts {
  product: IMouseObj[];
}

export const Products = ({ product }: IProducts) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const { handleAlertModal, modalState } = useContext(confirmAlertContext);
  const { getValueToCartContext } = useContext(MouseContext);
  const handleMouseEnter = (model: IMouseObj) => {
    setHoveredItem(model?.model);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const rendereredProduct = product.map((mouse) => {
    const isHovered = hoveredItem === mouse.model;
    const renderedModal = (
      <ConfirmCustom
        key={mouse.model}
        onClose={() => handleAlertModal(mouse.model)}
        buyConfirm={() => {
          getValueToCartContext(mouse);
          handleAlertModal(mouse.model);
        }}
        contentAlert={mouse.description}
        imgAlert={mouse.imgUp}
      />
    );

    return (
      <li
        key={mouse.model}
        className="w-[300px] h-[140px] bg-[#424242] rounded-[15px] flex flex-col items-center justify-center mt-[100px] cursor-pointer relative"
        onMouseEnter={() => handleMouseEnter(mouse)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="G502  w-[220px] mt-[-105px] "
          src={mouse.img}
          alt={mouse.model}
        />
        <div
          className="flex justify-between w-full "
          onClick={() => handleAlertModal(mouse.model)}
        >
          <span className="mx-5">{mouse.model}</span>
          <span className="mx-5">R$ {mouse.price}</span>
          {modalState[mouse.model] && renderedModal}
          {isHovered && (
            <span className="absolute card-product rounded-[15px]">
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
