import React from "react";
import { SkillCard } from "./skillCard";

export const SkillsBox = ({ skillsList }) => {
  return (
    <div className="grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 ">
      {skillsList
        ? skillsList.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} label={skill.label} />
          ))
        : null}
    </div>
  );
};
