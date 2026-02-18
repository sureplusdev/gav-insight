import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlideContainer({ children, slideIndex }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}