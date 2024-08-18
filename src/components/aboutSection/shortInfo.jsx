import React from "react";
import { TimeBox } from "../other/timeBox";
import { motion } from "framer-motion";
export const ShortInfo = ({ title, infoList }) => {
  return (
    <div className="flex flex-col gap-4">
      {title}
      <div className=" flex flex-col gap-2 py-1">
        {infoList
          ? infoList.map((item, index) => (
              <motion.span
                whileInView={{ opacity: 1.0, y: 0 }}
                initial={{ opacity: 0.0, y: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimeBox
                  time={item.date}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </motion.span>
            ))
          : null}
      </div>
    </div>
  );
};
