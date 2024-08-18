import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
import { AnimateComponent } from "../animation/animateComponent.jsx";
export const TimeBox = ({ time, title, subTitle }) => {
  return (
    <div className="flex flex-row border-b-[1px] dark:border-white/20 border-black/20 py-4">
      <div className="flex w-1/3 text-sm md:text-base dark:text-white/50 text-black/50 ">
        <AnimateComponent>
          <HiddenTextAnimation delay={0} />
          {time}
        </AnimateComponent>
      </div>
      <div className="flex flex-col w-2/3 gap-3 text-end">
        <p className="text-lg md:text-2xl dark:text-white/80 text-black/80 font-semibold">
          <span className="max-w-max  relative">
            <HiddenTextAnimation delay={0} />
            {title}
          </span>
        </p>

        <p className="text-sm dark:text-primary text-black/50 relative">
          <HiddenTextAnimation delay={0.2} />
          {subTitle}
        </p>
      </div>
    </div>
  );
};
