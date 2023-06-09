import React from "react";
import "./input.css";

interface Iinput {
  placeholder?: string;
  className?: string;
}

export const Input = ({ placeholder, className }: Iinput) => {
  return (
    <input
      className={`bg-[#424242] py-3 lg:py-4 px-2 lg:px-5 rounded-[15px] ${className} input-component`}
      placeholder={placeholder}
    />
  );
};
