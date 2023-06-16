import "./confirmCustom.css";
import React, { useEffect } from "react";

interface IconfirmAlert {
  onClose: () => void;

  contentAlert: string;
  imgAlert?: any;
  buyConfirm: () => void;
}

function ConfirmCustom({
  onClose,
  contentAlert,
  imgAlert,
  buyConfirm,
}: IconfirmAlert) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="confirm">
      <div className="flex justify-center items-center py-4 p-1 text-center">
        <h1>Would you like to add it to your affection?</h1>
      </div>

      <p className="text-center py-5 p-5 text-justify ">{contentAlert}</p>
      <div className="flex justify-center items-center">
        <img
          className="img-content"
          src={imgAlert}
          alt="Imagem do modelo do mouse"
        />
      </div>

      <div className="flex justify-center gap-10 py-10">
        <button onClick={onClose}>No</button>
        <button onClick={buyConfirm}>Yes</button>
      </div>
    </div>
  );
}

export default ConfirmCustom;
