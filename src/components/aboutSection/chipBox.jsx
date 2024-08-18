import React from "react";
import { Chip } from "../other/chip";
export const ChipBox = ({ title, chipList }) => {
  return (
    <div className="flex flex-col gap-4">
      {title}
      <div className=" flex flex-wrap gap-2 py-1">
        {chipList
          ? chipList.map((item) => (
              <Chip label={item} className="bg-black/40 dark:bg-white/30" />
            ))
          : null}
      </div>
    </div>
  );
};
