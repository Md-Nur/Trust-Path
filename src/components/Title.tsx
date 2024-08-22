"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 33 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="text-center text-5xl my-10 font-bold uppercase"
    >
      {children}
    </motion.h1>
  );
};

export default Title;
