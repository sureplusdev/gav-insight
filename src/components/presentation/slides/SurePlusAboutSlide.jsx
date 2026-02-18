import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl ${className}`}>
    {children}
  </div>
);

export default function SurePlusAboutSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6" style={{ borderColor: "rgba(49, 192, 218, 0.2)", backgroundColor: "rgba(49, 192, 218, 0.05)" }}>
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "#31C0DA" }}>
              Autoridade
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Sobre a <span style={{ color: "#31C0DA" }}>Sure Plus</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 font-medium">
            <div className="bg-[#31C0DA]/10 p-10 rounded-[2.5rem] border border-[#31C0DA]/20 text-center font-black">
              <div className="text-6xl font-bold text-[#31C0DA]">R$ 25,3M</div>
              <div className="text-white text-sm uppercase tracking-widest mt-3 font-bold">Captados no Portfólio</div>
            </div>
            <GlassCard className="text-center flex flex-col justify-center items-center font-black">
              <div className="text-6xl font-bold text-white">17</div>
              <div className="text-[#B4BECC] text-sm uppercase tracking-widest mt-3 font-bold">Projetos Estruturados</div>
            </GlassCard>
            <GlassCard className="text-center flex flex-col justify-center items-center font-black">
              <div className="text-6xl font-bold text-white">R$ 9M</div>
              <div className="text-[#B4BECC] text-sm uppercase tracking-widest mt-3 font-bold">Em Análise Técnica</div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}