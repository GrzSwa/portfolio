import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataProvider } from "../../provider/dataProvider.jsx";
import { HamburgerButton } from "../buttons/hamburgerButton";
import { MobileNavBar } from "./mobileNavBar";
import { Logo } from "../logo/logo";
import { PrimaryButton } from "../buttons/primaryButton";
import { IconButton } from "../buttons/iconButton";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
export const NavBar = ({ sectionId, onDarkMode }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [open, setOpen] = useState(false);
  const resume = useDataProvider().getHomeData().resume;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const marginTop = 0;
      const scrollTo =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  const activeSection = () => {
    for (let i = sectionId.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionId[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionId[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeSection);

    return () => {
      window.removeEventListener("scroll", activeSection);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0.0 }}
      animate={{
        y: 0,
        opacity: 1.0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
      className="fixed top-0 left-0 w-full max-h-20 bg-background-primary text-black dark:text-white dark:bg-background-primary-dark z-[9999]"
    >
      <div className="py-6 px-10 lg:px-10 lg:m-auto lg:max-w-[100vw] xl:max-w-[85vw] 4k:max-w-[1600px]">
        <div className="flex flex-row items-center justify-between">
          <div className="md:hidden ">
            <HamburgerButton
              open={open}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          </div>
          <div className="flex flex-row md:gap-6 lg:gap-12 items-center justify-center">
            <Logo />
            <div className="hidden md:block">
              <ul className="list-none flex flex-row items-center md:gap-4 lg:gap-7 font-medium ">
                {sectionId.map((section, index) => (
                  <li key={index} onClick={() => scrollToSection(section)}>
                    <Link
                      to="/"
                      className={`capitalize text-md hover:text-primary ${
                        activeLink === section
                          ? "underline underline-offset-8 decoration-2 decoration-primary dark:text-primary"
                          : ""
                      }`}
                    >
                      {section}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-row lg:gap-3 items-center">
            <span className="flex flex-row gap-3">
              <IconButton
                icon={
                  onDarkMode.darkMode ? (
                    <FaSun className="text-[#FFDF0D]" />
                  ) : (
                    <FaMoon />
                  )
                }
                size="text-xl"
                onClick={() => {
                  onDarkMode.toggleDarkMode();
                }}
              />
            </span>
            <div className="hidden lg:block">
              <PrimaryButton
                text={"My Resume"}
                className="text-sm md:text-[16px] md:p-3 2xl:text-lg 2xl:p-2 2xl:px-4"
                onClick={() => window.open(resume, "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <MobileNavBar
          items={sectionId}
          onClick={scrollToSection}
          isOpen={open}
        />
      ) : null}
    </motion.nav>
  );
};
