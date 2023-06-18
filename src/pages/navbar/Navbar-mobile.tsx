import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { BsList, BsXLg } from "react-icons/bs";
import Logo from "../../assets/Logo.svg";

import "./Navbar-mobile.css";

export const NavbarMobile = () => {
  const [handleMenu, setHandleMenu] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState("hidden");

  const openMenu = () => {
    setHandleMenu(!handleMenu);
    handleMenu ? setMenuIsOpen("") : setMenuIsOpen("hidden");
  };
  return (
    <nav className="navbar-mobile relative justify-between items-center mx-[1.8rem] my-5">
      <div className="mobile">
        <Link to={"/"} className="flex gap-2 items-center">
          <img className="w-10" src={Logo} alt="Logo TechLong" />
          <h3>TechLong</h3>
        </Link>
      </div>
      <div className="flex flex-col gap-5 items-center absolute right-0 top-0 justify-center my-1">
        {handleMenu ? (
          <BsList className="text-[#3a8bb1] text-[30px]" onClick={openMenu} />
        ) : (
          <BsXLg className="text-[#3a8bb1] text-[30px]" onClick={openMenu} />
        )}

        <ul className={`flex flex-col gap-5 items-center ${menuIsOpen} `}>
          <Link
            to={"/contact"}
            className="text-white text-[15px] hover:text-[#3a8bb1] z-1"
          >
            Contact
          </Link>
          <Link
            to={"/"}
            className="text-white text-[15px] hover:text-[#3a8bb1]"
          >
            Home
          </Link>

          <Link
            to={"/cart"}
            className="text-white text-[15px]  hover:text-[#3a8bb1]"
          >
            <BsCartFill />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

//BsList
//BsXLg
