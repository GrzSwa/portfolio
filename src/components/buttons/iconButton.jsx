import React from "react";

export const IconButton = ({ icon, label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-row items-center gap-1 w-max ${className}`}
    >
      {label}
      {icon}
    </button>
  );
};
