import React from "react";
import { motion } from "framer-motion";

export default function SurePlusSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#31C0DA]">
            Credibilidade
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Sure Plus em números
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="text-6xl font-bold text-[#31C0DA]">R$ 25,3M</div>
            <div className="text-white/70 mt-3">Captados no portfólio</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="text-6xl font-bold text-[#31C0DA]">17</div>
            <div className="text-white/70 mt-3">Projetos estruturados</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-6xl font-bold text-[#31C0DA]">R$ 17,5M</div>
            <div className="text-white/70 mt-3">Volume em crédito consolidado</div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-white/60 max-w-lg mx-auto"
        >
          Experiência real em estruturação técnica, compliance e submissão de editais para startups early-stage.
        </motion.p>
      </div>
    </div>
  );
}