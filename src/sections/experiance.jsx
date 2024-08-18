import React from "react";
import { useDataProvider } from "../provider/dataProvider";
import { HeaderSection } from "../components/other/headerSection";
import { ExperianceBox } from "../components/experianceSection/experianceBox";
import "../styles/styles.css";
const Experiance = () => {
  const data = useDataProvider().getExperianceData();
  return (
    <section
      className="sections pt-8 md:pt-24 md:min-h-[30vh]  lg:min-h-[30vh] lg:pt-24 xl:min-h-[30vh] xl:pt-24 "
      id="experiance"
    >
      <div className="flex flex-col w-full">
        <HeaderSection title="Experaince" side="right" />
        <ExperianceBox experianceList={data.experiance} />
      </div>
    </section>
  );
};

export default Experiance;
