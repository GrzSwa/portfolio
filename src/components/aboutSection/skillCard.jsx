import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";

export const SkillCard = ({ key, icon, label }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mx-2 my-3 font-light relative">
      <HiddenTextAnimation delay={key} />
      <img
        src={icon}
        alt={label}
        className={`w-14 md:w-20 ${
          label == "Artificial Intelligence" ? "dark:invert" : null
        }`}
      />
      <p className="dark:text-white/80 text-[11px] md:text-sm text-center">
        {label}
      </p>
    </div>
  );
};
