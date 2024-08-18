import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export const Modal = ({ onClose, content }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-background-primary-dark bg-opacity-50 backdrop-blur-sm flex justify-center items-start z-[999999] overflow-auto">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          className="mt-10 lg:mx-10 flex flex-col max-w-[90vw] xl:max-w-[70vw] 2xl:max-w-[60vw] 4k:max-w-[50vw] dark:bg-background-secondary-dark bg-background-secondary rounded-t-lg"
        >
          <button
            className="w-full dark:text-white text-xl py-1 flex flex-1 justify-end pr-2"
            onClick={onClose}
          >
            <IoCloseSharp />
          </button>
          <div className="">
            <img src={content.img} alt={content.name} className="w-full" />
          </div>
          <div className="flex flex-col px-5 py-5 gap-1">
            <p className="text-lg md:text-2xl font-bold tracking-wider dark:text-white text-black">
              {content.name}
            </p>
            <p className="text-primary text-sm md:text-[16px]">
              {content.chipList.join(" - ")}
            </p>
          </div>
          <div className="px-5">
            <p className=" dark:text-white/50 text-black/50 text-[13px] lg:text-base text-justify">
              {content.text}
            </p>
          </div>
          <div className="py-5 px-5">
            <p className="text-lg lg:text-xl font-bold tracking-wider dark:text-white text-black">
              Project Links<span className="text-primary">.</span>
            </p>
          </div>
          <div className=" px-5 flex flex-row gap-3 pb-5">
            <a
              href={content.git}
              target="_blank"
              className="flex flex-row gap-1 justify-center items-center text-sm font-light dark:text-primary hover:text-primary dark:hover:text-secondary"
            >
              <FaGithub />
              Source Code
            </a>
            <a
              href={content.live}
              target="_blank"
              className="flex flex-row gap-1 justify-center items-center text-sm font-light dark:text-primary hover:text-primary dark:hover:text-secondary"
            >
              <IoOpenOutline />
              Live Project
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
