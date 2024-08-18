import React from "react";
import { motion } from "framer-motion";

export const HiddenTextAnimation = ({ delay }) => {
  return (
    <motion.div
      whileInView={{ width: "0%" }}
      initial={{ width: "100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: delay }}
      viewport={{ once: true }}
      className="absolute right-0 top-0 rounded-lg bg-primary origin-right h-full z-50"
    />
  );
};
