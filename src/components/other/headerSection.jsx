import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation";
export const HeaderSection = ({ title, side }) => {
  return (
    <div
      className={`flex ${
        side === "right" ? "flex-row-reverse" : "flex-row"
      } items-center gap-5 pb-10`}
    >
      <div className="text-6xl font-bold dark:text-white relative">
        <HiddenTextAnimation delay={0} />
        {title}
        <span className="dark:text-primary">.</span>
      </div>
      <hr className=" w-full text-black/20 dark:text-white/20 " />
    </div>
  );
};
