import React from "react";
import { ExperianceCard } from "./experianceCard.jsx";
export const ExperianceBox = ({ experianceList }) => {
  return (
    <div className="flex flex-col gap-10">
      {experianceList
        ? experianceList.map((exp) => <ExperianceCard {...exp} />)
        : null}
    </div>
  );
};
