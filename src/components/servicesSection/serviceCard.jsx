import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";

export const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center relative max-w-max">
        <HiddenTextAnimation delay={0} />
        <span className="bg-primary rounded-md p-2">
          <img src={icon} alt={"icon"} className={`w-5 md:w-8 `} />
        </span>
        <p className="w-full dark:text-white/80 text-black/80 font-bold text-lg lg:text-2xl tracking-wider">
          {title}
        </p>
      </div>
      <p className="text-justify dark:text-white/50 text-black/50 max-h-max flex flex-col justify-between relative">
        <HiddenTextAnimation delay={0.2} />
        <span className="pb-4 text-[13px] md:text-base">{text}</span>
        <hr className="text-primary w-1/3 border-t-1 xl:border-t-2 rounded-sm" />
      </p>
    </div>
  );
};
