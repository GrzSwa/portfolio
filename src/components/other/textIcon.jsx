import React from "react";

export const TextIcon = ({ icon, text, iconSide }) => {
  return (
    <div
      className={`flex justify-start items-center gap-2 font-bold dark:text-white ${
        iconSide === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {icon}
      <span className="text-lg">{text}</span>
    </div>
  );
};
