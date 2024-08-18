import React from "react";
import { useDataProvider } from "../provider/dataProvider";
import { HeaderSection } from "../components/other/headerSection";
import { SecondPlanText } from "../components/other/secondPlanText";
import { TextIcon } from "../components/other/textIcon";
import { FaUserGraduate, FaCertificate } from "react-icons/fa";
import { TextContainer } from "../components/aboutSection/textContainer";
import { ShortInfo } from "../components/aboutSection/shortInfo";
import { SkillsBox } from "../components/aboutSection/skillsBox";
import { HiddenTextAnimation } from "../components/animation/hiddenTextAnimation.jsx";
import "../styles/styles.css";

const About = () => {
  const data = useDataProvider().getAboutData();

  return (
    <section
      className="sections flex flex-col pt-8 md:pt-14 md:min-h-lvh lg:min-h-[50vh] lg:pt-16 xl:min-h-lvh xl:pt-24 4k:min-h-[60vh]"
      id="about"
    >
      <div className="flex flex-col w-full ">
        <HeaderSection title="About" />
        <div className="grid lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <TextContainer text={data.aboutMeText} />
          </div>
          <div className="lg:pr-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4 ">
              <ShortInfo
                title={
                  <TextIcon
                    text="My Education"
                    icon={<FaUserGraduate className="text-primary text-lg" />}
                  />
                }
                infoList={data.education}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 py-14 4k:py-24">
        <div className="order-last lg:order-first">
          <SkillsBox skillsList={data.skills} />
        </div>
        <div className="flex flex-col gap-5 order-first lg:order-last pt-8">
          <SecondPlanText
            secondaryText="SKILLS"
            firstText="What are my skills?"
            side="right"
          />
          <p className="dark:text-white/80 text-justify text-[13px] md:text-base relative">
            <HiddenTextAnimation delay={0} />
            {data.skillsText}
          </p>
        </div>
      </div>
      <div className="pt-12">
        <ShortInfo
          title={
            <TextIcon
              text="My certificates"
              icon={<FaCertificate className="text-primary text-lg" />}
            />
          }
          infoList={data.certificates}
        />
      </div>
    </section>
  );
};

export default About;
