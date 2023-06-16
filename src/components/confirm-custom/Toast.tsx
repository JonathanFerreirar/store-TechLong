import React, { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import confirmAlertContext from "../../context/confirm-alert-context";

export const Toast = () => {
  const { handleToastState } = useContext(confirmAlertContext);
  return (
    <div
      id="toast-default"
      className="toast fixed flex items-center w-full max-w-xs p-4 text-gray-500 bg-[#383a3b] rounded-lg shadow dark:text-gray-400 dark:bg-bg-[#383a3b]"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-[#03fc2c] bg-none rounded-lg dark:bg-none dark:text-[#03fc2c]">
        <AiOutlineCheck className="text-[15px] text-green" />
        <span className="sr-only">water icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">Add with success</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-[#383a3b] dark:hover:bg-[#b4b9ba]"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={handleToastState}
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
