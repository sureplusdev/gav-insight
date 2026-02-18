import React from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* Gradient base animado */}
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 0.95, 0.8] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #193A62 0%, #0d1f38 50%, #193A62 100%)",
        }}
      />

      {/* Orb 1 - Turquesa no canto superior esquerdo */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "#31C0DA" }}
      />

      {/* Orb 2 - Turquesa no canto inferior direito */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: "#31C0DA" }}
      />

      {/* Orb 3 - Sutil no centro */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "#31C0DA", transform: "translateX(-50%)" }}
      />

      {/* Grid pattern muito sutil */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(49, 192, 218, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(49, 192, 218, 0.05) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Top accent line animada */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #31C0DA, transparent)",
        }}
      />

      {/* Vertical accent lines */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute top-1/4 left-1/4 w-px h-1/2"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(49, 192, 218, 0.3), transparent)",
        }}
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute top-1/4 right-1/4 w-px h-1/2"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(49, 192, 218, 0.3), transparent)",
        }}
      />
    </div>
  );
}