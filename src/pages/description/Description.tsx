import React, { useContext, useEffect, useState } from "react";

import MouseContext from "../../context/mousse-context";

import { ProductsPage } from "../products/Products-page";

import "./description.css";

import G703 from "../../assets/mouses/up-G703.png";

const Description = () => {
  const [handleDescrition, setHandleDescrition] = useState<any>([]);

  const { mouseOnDescription } = useContext(MouseContext);

  useEffect(() => {
    setHandleDescrition(mouseOnDescription);
    console.log(handleDescrition[0]?.modelFull);
  }, [mouseOnDescription]);

  return (
    <>
      <main className="flex items-center justify-center mx-[5rem] mt-[5rem] relative ">
        <div>
          <div>
            <h1>TECHLONG SOTRE</h1>
          </div>

          <div className="py-7 max-w-[60%] z-1">
            <h4>Logitech High Performance </h4>
            <h4 className="py-3">Gaming Mouse</h4>
          </div>
          <div className="max-h-[400px] max-w-[90%] text-justify">
            <p>
              The TechLong is an exceptional gaming store peripheral with an
              ergonomic design that ensures comfort during long gaming sessions.
              Its high-resolution sensor enables precise and fluid movements on
              any surface, while the programmable buttons offer customization
              and agility for a personalized gaming experience. With its
              durability and quality construction, the G502 is a worthwhile
              investment for gaming enthusiasts seeking exceptional performance.
            </p>
          </div>
        </div>
        <div className="div-img">
          <img className="img-div" src={G703} alt="Mouse G703 model" />
        </div>
      </main>
      <ProductsPage />
      {/* //G703 */}
    </>
  );
};
export default Description;
