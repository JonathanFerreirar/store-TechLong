import React from "react";

import { BsCartFill } from "react-icons/bs";

import "./navbar.css";

import Logo from "../../assets/Logo.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex relative justify-between items-center mx-[5rem] my-5">
      <div className="flex gap-2 items-center">
        <img className="w-10" src={Logo} alt="Logo TechLong" />
        <h3>TechLong</h3>
      </div>
      <ul className="flex gap-9 items-center  ">
        <li className="text-white ">Products</li>
        <li className="text-white ">Contact</li>
        <li className="text-white text-[20px] ml-[100px] ">
          <BsCartFill />
        </li>
      </ul>
    </nav>
  );
};
