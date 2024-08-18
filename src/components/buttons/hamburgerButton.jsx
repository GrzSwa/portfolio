import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
export const HamburgerButton = ({ open, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="items-center justify-center p-2 text-xl text-black dark:text-white"
    >
      {open === true ? <FaTimes /> : <FaBars />}
    </button>
  );
};
