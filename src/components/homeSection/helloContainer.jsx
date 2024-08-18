import React from "react";
import { PrimaryButton } from "../buttons/primaryButton.jsx";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
import { AnimateComponent } from "../animation/animateComponent.jsx";

export const HelloContainer = ({
  name,
  subHeader,
  text,
  socialMedia,
  resume,
}) => {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      const marginTop = 0;
      const scrollTo =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-3 md:gap-3 2md:gap-6 justify-center">
      <h1 className="pt-3 text-4xl text-center md:pt-5 md:text-start md:text-6xl 2xl:text-8xl  font-bold tracking-wider dark:text-white">
        <AnimateComponent>
          <HiddenTextAnimation delay={0} />
          Hi I'm <br />
          {name}
        </AnimateComponent>
      </h1>
      <h3 className="text-2xl text-center md:text-start md:text-4xl font-medium 2xl:text-6xl text-primary ">
        <AnimateComponent>
          <HiddenTextAnimation delay={0.2} />
          {subHeader}
        </AnimateComponent>
      </h3>
      <p className="w-full md:pr-10 xl:w-2/3 text-justify text-[13px] lg:text-left md:text-lg  text-black/50 dark:text-white/50 relative">
        <HiddenTextAnimation delay={0.3} />
        {text}
      </p>
      <ul className="flex flex-row gap-2">
        {socialMedia
          ? socialMedia.map((social, index) => (
              <li key={index} className="relative">
                <HiddenTextAnimation delay={0.3} />
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    className="w-7 md:w-9 "
                  />
                </a>
              </li>
            ))
          : null}
      </ul>
      <div className="flex flex-row gap-3 pb-10">
        <AnimateComponent>
          <HiddenTextAnimation delay={0.4} />
          <PrimaryButton
            text="Contact Me"
            onClick={() => scrollToSection()}
            className="text-sm md:text-[16px] md:p-3 2xl:text-lg 2xl:p-2 2xl:px-4"
          />{" "}
          <span className="lg:hidden">
            <PrimaryButton
              text="My Resume"
              onClick={() => window.open(resume, "_blank")}
              className="text-sm md:text-[16px] md:p-3 2xl:text-lg 2xl:p-2 2xl:px-4"
            />
          </span>
        </AnimateComponent>
      </div>
    </div>
  );
};
