import React, { useContext } from "react";

import MouseContext from "../../context/mouse-context";

import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css";

import Logo from "../../assets/Logo.svg";

export const Navbar: React.FC = () => {
  const { productsInCart } = useContext(MouseContext);

  return (
    <nav className="navbar flex relative justify-between items-center mx-[5rem] my-5">
      <div>
        <Link to={"/"} className="flex gap-2 items-center">
          <img className="w-10" src={Logo} alt="Logo TechLong" />
          <h3>TechLong</h3>
        </Link>
      </div>
      <ul className="flex gap-9 items-center  ">
        <Link to={"/"} className="text-white hover:text-[#3a8bb1]">
          Home
        </Link>
        <Link to={"/contact"} className="text-white hover:text-[#3a8bb1]">
          Contact
        </Link>
        <li className="flex gap-2 items-center justify-center text-white text-[20px] ml-[100px] hover:text-[#3a8bb1]">
          <Link to={"/cart"}>
            <BsCartFill />
          </Link>

          <p className="text-[15px] text-[#3a8bb1]">{productsInCart.length}</p>
        </li>
      </ul>
    </nav>
  );
};
