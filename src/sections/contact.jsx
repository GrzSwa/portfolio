import React from "react";
import { useDataProvider } from "../provider/dataProvider";
import { SecondPlanText } from "../components/other/secondPlanText";
import { IoMailSharp } from "react-icons/io5";
import { HiddenTextAnimation } from "../components/animation/hiddenTextAnimation.jsx";
import "../styles/styles.css";
const Contact = () => {
  const data = useDataProvider().getContactData();
  const socialMedia = data.contact;
  return (
    <section
      className="sections pt-20 md:pt-0 lg:pt-24 md:min-h-[90vh] lg:min-h-lvh xl:min-h-lvh 4k:min-h-[60vh]"
      id="contact"
    >
      <div className="flex flex-col w-full ">
        <SecondPlanText firstText="Contact me" secondaryText="Contact" />
        <div className="flex flex-1 justify-center items-center p-10">
          <div className="bg-black/10 dark:bg-white/10 p-10 md:py-28 xl:px-40 rounded-lg flex flex-col items-center justify-center md:px-10 gap-3">
            <p className="text-center text-2xl lg:text-3xl font-light dark:text-white/50 relative">
              <HiddenTextAnimation delay={0} />
              Shoot me an email if you want to connect! You can also contact me
              via social media
            </p>
            <ul className="flex flex-row gap-2 relative">
              <HiddenTextAnimation delay={0} />
              {socialMedia
                ? socialMedia.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
            <a
              href={`mailto:${data.email}`}
              className=" dark:text-white hover:text-primary dark:hover:text-primary mt-10"
            >
              <p className="flex flex-row gap-1 justify-center items-center text-3xl font-semibold tracking-wide dark:text-primary hover:text-primary dark:hover:text-secondary relative">
                <HiddenTextAnimation delay={0} />
                <IoMailSharp />
                {data.email}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
