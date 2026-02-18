import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Rocket } from "lucide-react";

export default function InovacredSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#60A5FA" }}>
              Regional
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Finep <span style={{ color: "#31C0DA" }}>Inovacred</span> & Oportunidades SC
          </h2>
          <p className="text-lg text-white/60">Fomento descentralizado para MPMEs e hub Florianópolis</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Tabela Inovacred */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-[#31C0DA]/20">
                <tr className="text-[#31C0DA] uppercase font-bold text-[10px] tracking-wider">
                  <th className="p-3 text-left border-b border-white/10">Porte</th>
                  <th className="p-3 text-left border-b border-white/10">Limite</th>
                  <th className="p-3 text-left border-b border-white/10">Taxa</th>
                  <th className="p-3 text-left border-b border-white/10">Prazo</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="border-b border-white/5">
                  <td className="p-3 font-semibold">Micro / EPP / Pequena</td>
                  <td className="p-3 rowSpan="2">Até R$ 15M</td>
                  <td className="p-3 font-bold text-[#31C0DA]">TR + 6,068% a.a.</td>
                  <td className="p-3 rowSpan="2">
                    <span className="text-xs text-[#B4BECC]">Carência: 24m</span><br/>
                    <span className="text-xs text-white font-bold">Total: 96m</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Média I e II</td>
                  <td className="p-3 font-bold text-amber-400">TR + 6,605% a.a.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Grid Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-400/15 to-blue-400/5 p-5 rounded-xl border border-blue-400/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users size={20} className="text-blue-400" />
                <h5 className="text-white font-bold text-sm">Agentes</h5>
              </div>
              <p className="text-xs text-[#B4BECC] leading-relaxed">
                BRDE, BDMG, Desenvolve SP, AgeRio e bancos cooperativos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-400/15 to-green-400/5 p-5 rounded-xl border border-green-400/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={20} className="text-green-400" />
                <h5 className="text-white font-bold text-sm">Hub SC</h5>
              </div>
              <p className="text-xs text-[#B4BECC] leading-relaxed">
                FAPESC: Impulsiona SC, Tecnova III e editais regionais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-amber-400/15 to-amber-400/5 p-5 rounded-xl border border-amber-400/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <Rocket size={20} className="text-amber-400" />
                <h5 className="text-white font-bold text-sm">Deep Tech</h5>
              </div>
              <p className="text-xs text-[#B4BECC] leading-relaxed">
                EMBRAPII: até 70% em prototipagem complexa.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}