import React from "react";

import "./description.css";

import G703 from "../../assets/mouses/up-G703.png";

export const Description = () => {
  return (
    <main className="flex items-center justify-center mx-[5rem] my-[10rem] relative ">
      <div>
        <div>
          <h1>G703 LIGHTSPEED</h1>
        </div>

        <div className="py-7 max-w-[60%] z-1">
          <h4>Logitech High Performance </h4>
          <h4 className="py-3">Gaming Mouse</h4>
        </div>
        <div className="max-h-[400px] max-w-[90%] text-justify">
          <p>
            The TechLong G502 is an exceptional gaming peripheral with an
            ergonomic design that ensures comfort during long gaming sessions.
            Its high-resolution sensor enables precise and fluid movements on
            any surface, while the programmable buttons offer customization and
            agility for a personalized gaming experience. With its durability
            and quality construction, the G502 is a worthwhile investment for
            gaming enthusiasts seeking exceptional performance.
          </p>
        </div>
      </div>
      <div className="div-img">
        <img className="img-div" src={G703} alt="Mouse G703 model" />
      </div>
    </main>
  );
};
