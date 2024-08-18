import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
export const Chip = ({ label, className, color }) => {
  return (
    <div
      className={`p-1 px-3 rounded-md text-white relative ${className}`}
      style={{ backgroundColor: color }}
    >
      <HiddenTextAnimation delay={0} />
      <span>{label}</span>
    </div>
  );
};
