import React from "react";
import { motion } from "framer-motion";
import { PieChart, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function FomentoOportunidadesSlide() {
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
              Contexto & Oportunidades
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Cenário de Fomento <span style={{ color: "#31C0DA" }}>2026</span>
          </h2>
          <p className="text-base text-white/60">Marco orçamentário, FINEP e Inovacred — Oportunidades não-dilutivas</p>
        </motion.div>

        {/* Content Grid - 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* 1. Marco Orçamentário */}
          <div className="space-y-3">
            <h4 className="text-[#31C0DA] font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <PieChart size={16} /> LOA 2026
            </h4>
            <div className="bg-gradient-to-br from-[#31C0DA]/20 to-[#31C0DA]/5 p-4 rounded-xl border border-[#31C0DA]/40">
              <p className="text-xs text-[#B4BECC] mb-1">Orçamento Total</p>
              <p className="text-3xl font-bold text-white mb-3">R$ 6,54 Tri</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#B4BECC]">MCTI (Dotação)</span>
                  <span className="text-green-400 font-bold">+14,7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B4BECC]">Emendas</span>
                  <span className="text-white font-bold">R$ 61 Bi</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. FINEP & FNDCT */}
          <div className="space-y-3">
            <h4 className="text-[#31C0DA] font-bold text-xs uppercase tracking-wider">FINEP & FNDCT</h4>
            <div className="bg-gradient-to-br from-[#31C0DA]/20 to-[#31C0DA]/5 p-4 rounded-xl border border-[#31C0DA]/40">
              <p className="text-xs text-[#B4BECC] mb-1">Taxa Crédito Direto</p>
              <p className="text-3xl font-bold text-white mb-3">TR + 2%</p>
              <p className="text-[10px] text-[#B4BECC] mb-3">Volume: R$ 41 Bilhões</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span className="text-[#B4BECC]">FNDCT Descontingenciado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span className="text-[#B4BECC]">Subvenções até R$ 600k</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Inovacred SC */}
          <div className="space-y-3">
            <h4 className="text-[#31C0DA] font-bold text-xs uppercase tracking-wider">Inovacred SC</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="space-y-2 text-xs mb-3">
                <div className="flex justify-between">
                  <span className="text-[#B4BECC]">Limite</span>
                  <span className="text-white font-bold">até R$ 1,5 M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B4BECC]">Taxa</span>
                  <span className="text-white font-bold">3,5% a.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B4BECC]">Prazo</span>
                  <span className="text-white font-bold">até 7 anos</span>
                </div>
              </div>
              <div className="bg-blue-400/10 p-2 rounded border border-blue-400/30">
                <div className="flex items-center gap-1 text-[10px]">
                  <AlertCircle size={12} className="text-blue-400" />
                  <span className="text-blue-400">Até 03/03/2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LC 224 & NIB - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 bg-amber-400/10 p-5 rounded-xl border border-amber-400/30"
        >
          <div className="flex items-start gap-3 mb-3">
            <ShieldCheck size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-2">LC 224/2025 & Nova Indústria Brasil</h4>
              <p className="text-xs text-[#B4BECC] mb-2">
                Gatilho do PIB: Incentivos fiscais limitados a <span className="text-amber-400 font-bold">2% do PIB</span>. 
                6 Missões (Bioeconomia, Digitalização, Defesa, Saúde, Agroindústria, Infraestrutura).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}