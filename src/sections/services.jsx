import React from "react";
import { HeaderSection } from "../components/other/headerSection";
import { ServiceBox } from "../components/servicesSection/serviceBox";
import { useDataProvider } from "../provider/dataProvider";
import "../styles/styles.css";
const Services = () => {
  const data = useDataProvider().getServicesData();
  return (
    <section
      className="sections pt-8 md:pt-14 md:min-h-lvh lg:min-h-[50vh] lg:pt-16 xl:min-h-lvh xl:pt-24 4k:min-h-[60vh]"
      id="services"
    >
      <div className="flex flex-col w-full pt-5 md:pt-20 ">
        <HeaderSection title="Services" />
        <div className="">
          <ServiceBox serviceList={data.services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
