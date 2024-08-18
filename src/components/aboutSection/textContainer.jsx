import React from "react";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";

export const TextContainer = ({ text }) => {
  return (
    <p className="relative text-justify text-[13px] md:text-base leading-relaxed dark:text-white/80 first-letter:text-3xl first-letter:bg-primary  first-letter:px-2 first-letter:py-2 first-letter:leading-none first-letter:float-left first-letter:mr-2 first-letter:rounded-md">
      <HiddenTextAnimation delay={0} />
      {text}
    </p>
  );
};
