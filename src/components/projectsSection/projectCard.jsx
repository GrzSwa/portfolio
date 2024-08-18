import React from "react";
import { IconButton } from "../buttons/iconButton.jsx";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { HiddenTextAnimation } from "../animation/hiddenTextAnimation.jsx";
import { AnimateComponent } from "../animation/animateComponent.jsx";
export const ProjectCard = ({
  name,
  text,
  chipList,
  img,
  git,
  live,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative overflow-hidden h-40 xl:h-64 w-full rounded-lg dark:bg-white/10 bg-black/10">
        <button
          type="button"
          onClick={() => onClick({ name, text, chipList, img, git })}
        >
          <div className="absolute bottom-0 xl:bottom-5 left-0 px-2 lg:px-10 h-2/3 w-full hover:bottom-10 hover:rotate-3 transform delay-75 duration-200 hover:scale-105">
            <img src={img} alt={name} className="w-full rounded-md" />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full justify-center items-center gap-2 relative">
          <HiddenTextAnimation delay={0} />
          <p className="text-[16px] lg:text-xl font-bold tracking-wider dark:text-white text-black">
            {name}
          </p>
          <span className="flex flex-1">
            <hr className="w-full text-black/20 dark:text-white/20 " />
          </span>
          <IconButton
            icon={<FaGithub />}
            className="text-xl dark:text-white/80 text-black/80"
            onClick={() => window.open(git, "_blank")}
          />
          <IconButton
            icon={
              <IoOpenOutline className="text-xl dark:text-white/80 text-black/80" />
            }
            onClick={() => window.open(live, "_blank")}
          />
        </div>
        <p className="text-primary text-[14px] lg:text-base">
          <AnimateComponent>
            <HiddenTextAnimation delay={0.1} />
            {chipList ? chipList.join(" - ") : null}
          </AnimateComponent>
        </p>
        <div className="flex flex-col gap-2">
          <p className="line-clamp-3 dark:text-white/50 text-black/50 text-[13px] lg:text-base text-justify relative">
            <HiddenTextAnimation delay={0.1} />
            {text}
          </p>
          <AnimateComponent>
            <HiddenTextAnimation delay={0.1} />
            <IconButton
              label="Read more"
              icon={<FaLongArrowAltRight />}
              className="text-primary"
              onClick={() => onClick({ name, text, chipList, img, git, live })}
            />
          </AnimateComponent>
        </div>
      </div>
    </div>
  );
};
