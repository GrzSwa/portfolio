import React from "react";
import { Chip } from "../other/chip.jsx";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
import { AnimateComponent } from "../animation/animateComponent.jsx";
export const ExperianceCard = ({
  time,
  job,
  text,
  city,
  workplace,
  chipList,
}) => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-row">
        <div className="flex flex-col justify-between w-2/3 gap-1">
          <span className="text-[16px] md:text-2xl font-bold dark:text-white ">
            <AnimateComponent>
              <HiddenTextAnimation delay={0} />
              {job}
            </AnimateComponent>
          </span>
          <span className="text-[13px] md:text-base font-semibold text-primary ">
            <AnimateComponent>
              <HiddenTextAnimation delay={0.1} />
              {workplace}
            </AnimateComponent>
          </span>
        </div>
        <div className="flex flex-col items-end w-1/3 ">
          <span className="text-[11px] md:text-base text-black/80 dark:text-white/80">
            <AnimateComponent>
              <HiddenTextAnimation delay={0} />
              {time}
            </AnimateComponent>
          </span>
          <span className="text-[11px] md:text-base text-black/80 dark:text-white/80">
            <AnimateComponent>
              <HiddenTextAnimation delay={0.1} />
              {city}
            </AnimateComponent>
          </span>
        </div>
      </div>
      <p className="text-[13px] md:text-base text-black/50 dark:text-white/50 relative">
        <HiddenTextAnimation delay={0.1} />
        {text}
      </p>
      <div className="flex flex-wrap gap-2 ">
        {chipList
          ? chipList.map((chip) => (
              <Chip
                label={chip.name}
                className={`text-[11px] md:text-sm`}
                color={chip.color}
              />
            ))
          : null}
      </div>
      <hr className="w-full text-black/30 dark:text-white/30" />
    </div>
  );
};
