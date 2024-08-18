import React from "react";
import { Link } from "react-router-dom";

export const MobileNavBar = ({ items, onClick, isOpen }) => {
  return (
    <div className="md:hidden fixed top-20 left-0 w-full max-h-[70%] bg-background-primary dark:bg-background-primary-dark -mt-1">
      <ul className="bg-blue-600 flex flex-col gap-6 p-5">
        {items.map((section, index) => (
          <li key={index} onClick={() => onClick(section)}>
            <Link
              to="/"
              className={
                "capitalize text-xl p-3 flex bg-gradient-to-t dark:text-white text-black hover:from-third hover:to-secondary hover:text-white active:from-four active:to-third dark:hover:text-white"
              }
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
