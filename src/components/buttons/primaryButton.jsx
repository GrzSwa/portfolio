import React from "react";

export const PrimaryButton = ({ text, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-primary p-2 text-white rounded-md bg-gradient-to-t from-secondary to-primary hover:from-third hover:to-secondary active::from-four active:to-third ${className}`}
    >
      {text}
    </button>
  );
};
