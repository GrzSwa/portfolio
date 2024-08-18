import React from "react";
import { ServiceCard } from "./serviceCard";

export const ServiceBox = ({ serviceList }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-10">
      {serviceList
        ? serviceList.map((service) => (
            <ServiceCard
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))
        : null}
    </div>
  );
};
