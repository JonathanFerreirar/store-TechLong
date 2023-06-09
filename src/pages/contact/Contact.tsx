import React from "react";

import "./contact.css";

import { Input } from "../../components/input/Input";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] contact">
      <h2 className="mb-[80px]">Contact us</h2>
      <div className="flex lg:gap-[100px] gap-[10px]">
        <Input
          placeholder="Name"
          className="sm:w-[245px] lg:w-[350px] w-[120px]"
        />
        <Input
          placeholder="Surname"
          className="sm:w-[245px] lg:w-[350px]  w-[120px]"
        />
      </div>
      <div className="mt-[17px] flex flex-col gap-[17px]  ">
        <Input
          placeholder="email"
          className="lg:w-[800px] sm:w-[500px] w-[250px] "
        />
        <textarea
          className="rounded-[15px] sm:h-[400px] h-[250px] w-[250px]  sm:w-[auto] bg-[#424242] p-5"
          placeholder="Messager"
        />
      </div>
      <button
        className="mt-[60px] bg-[#3a8bb1] py-3 px-9 rounded-[15px] button-input hover:text-black"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
