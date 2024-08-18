import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
import { AnimateComponent } from "../animation/animateComponent.jsx";
export const SecondPlanText = ({ firstText, secondaryText, side }) => {
  return (
    <div
      className={`relative flex ${
        side == "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className="text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-widest text-black/5 dark:text-white/5">
        <AnimateComponent>
          <HiddenTextAnimation delay={0} />
          {secondaryText}
        </AnimateComponent>
      </span>
      <p
        className={`absolute top-0 ${
          side == "right" ? "right-0" : "left-0"
        } text-3xl lg:text-4xl xl:text-5xl 2xl-text-6xl font-bold text-primary`}
      >
        <HiddenTextAnimation delay={0.3} />
        {firstText}
        <hr
          className={`w-1/3 border-t-2 xl:border-t-4 rounded-sm ${
            side == "right" ? "float-right" : "float-left"
          }`}
        />
      </p>
    </div>
  );
};
