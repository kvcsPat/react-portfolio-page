import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <motion.div
      className="framer-motion"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
