import React from "react";
import { motion } from "framer-motion";
import { PieChart, ShieldCheck, Leaf, Cpu, Activity, Network } from "lucide-react";

export default function FomentoContextoSlide() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#FCD34D" }}>
              Contexto
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Cenário de Fomento <span style={{ color: "#31C0DA" }}>2026</span>
          </h2>
          <p className="text-lg text-white/60">Marco orçamentário e a Nova Indústria Brasil sob LC 224/2025</p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Orçamento LOA 2026 */}
          <div className="space-y-4">
            <h4 className="text-[#31C0DA] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <PieChart size={18} /> Marco Orçamentário
            </h4>
            <div className="bg-gradient-to-br from-[#31C0DA]/15 to-[#31C0DA]/5 p-6 rounded-2xl border-2 border-[#31C0DA]/40">
              <p className="text-xs text-[#B4BECC] mb-2 uppercase tracking-wider">Orçamento Total 2026</p>
              <p className="text-4xl font-bold text-white mb-1">R$ 6,54 Tri</p>
              <p className="text-xs text-[#B4BECC]">Meta Superavit: R$ 34,2 Bi</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-white mb-3 uppercase tracking-wider">CT&I 2026</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[#B4BECC]">MCTI (Dotação)</span>
                  <span className="text-green-400 font-bold">+14,7%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[#B4BECC]">Investimentos Diretos</span>
                  <span className="text-red-400 font-bold">-17,0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#B4BECC]">Emendas Parlamentares</span>
                  <span className="text-white font-bold">R$ 61 Bi</span>
                </div>
              </div>
            </div>
          </div>

          {/* LC 224/2025 & NIB */}
          <div className="space-y-4">
            <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={18} /> LC 224/2025 & NIB
            </h4>

            <div className="bg-amber-400/10 p-5 rounded-xl border border-amber-400/30">
              <p className="text-white font-bold text-sm mb-2">Gatilho do PIB</p>
              <p className="text-xs text-[#B4BECC] leading-relaxed">
                Incentivos fiscais limitados a <span className="text-amber-400 font-bold">2% do PIB</span>. 
                Corte linear de 10% para benefícios não protegidos.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-[#31C0DA] mb-3 uppercase tracking-wider">6 Missões NIB</p>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {[
                  { icon: Leaf, label: "Bioeconomia" },
                  { icon: Cpu, label: "Digitalização" },
                  { icon: ShieldCheck, label: "Defesa" },
                  { icon: Activity, label: "Saúde" },
                  { icon: Leaf, label: "Agroindústria" },
                  { icon: Network, label: "Infraestrutura" }
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                    <m.icon size={12} className="text-[#31C0DA]" />
                    <span className="text-white font-medium">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}