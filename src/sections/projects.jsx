import React from "react";
import { useDataProvider } from "../provider/dataProvider";
import { HeaderSection } from "../components/other/headerSection";
import { ProjectBox } from "../components/projectsSection/projectBox";

import "../styles/styles.css";
const Projects = () => {
  const data = useDataProvider().getProjectsData();

  return (
    <section
      className="sections pt-8 md:pt-14 md:min-h-lvh lg:min-h-[50vh] xl:min-h-lvh 4k:min-h-[60vh]"
      id="projects"
    >
      <div className="flex flex-col w-full pt-5 md:pt-20 ">
        <HeaderSection title="Projects" />
        <ProjectBox projectsList={data.projects} />
      </div>
    </section>
  );
};

export default Projects;
