import React from "react";
import { motion } from "framer-motion";

export default function ContextoFomento2026Slide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#31C0DA]">
            Cenário 2026
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            O maior volume de fomento<br />
            dos últimos 10 anos
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-5xl font-bold text-[#31C0DA]">R$ 61 Bi</div>
            <div className="text-white/70 mt-2">CT&I 2026 (MCTI + Emendas)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-5xl font-bold text-[#31C0DA]">R$ 41 Bi</div>
            <div className="text-white/70 mt-2">FINEP + FNDCT Descontingenciado</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-5xl font-bold text-[#31C0DA]">TR + 2%</div>
            <div className="text-white/70 mt-2">Taxa mais baixa da história</div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-white/60 text-center max-w-2xl mx-auto"
        >
          Marco Legal da Nova Indústria Brasil (LC 224/2025) + orçamento recorde = janela única para portfólios early-stage.
        </motion.p>
      </div>
    </div>
  );
}