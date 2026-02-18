import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function FinepFndctSlide() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#31C0DA]/30 bg-[#31C0DA]/10 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#31C0DA" }}>
              Oportunidades
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
            <span style={{ color: "#31C0DA" }}>FINEP</span> & FNDCT 2026
          </h2>
          <p className="text-lg text-white/60">Motor da subvenção econômica não-reembolsável</p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Condições FINEP */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#31C0DA]/20 to-[#31C0DA]/5 p-6 rounded-2xl border-2 border-[#31C0DA]/50 text-center">
              <p className="text-xs text-[#31C0DA] uppercase tracking-wider mb-2 font-bold">Taxa FINEP Crédito Direto</p>
              <p className="text-5xl font-black text-white mb-2">TR + 2%</p>
              <p className="text-sm text-[#B4BECC]">a.a.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-[#31C0DA] font-bold">Volume Disponível</p>
                <p className="text-2xl font-bold text-white">R$ 41 Bilhões</p>
                <p className="text-[10px] text-[#B4BECC] mt-1">para Inovação 2026</p>
              </div>
            </div>
          </div>

          {/* Estratégias e Programas */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4">Estratégias 2026</h4>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#31C0DA]/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-[#31C0DA]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">FNDCT Descontingenciado</p>
                  <p className="text-xs text-[#B4BECC] leading-relaxed">
                    Garantia de fluxo para projetos plurianuais sem bloqueios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Agricultura Familiar</p>
                  <p className="text-xs text-[#B4BECC] leading-relaxed">
                    Edital Desafios Tecnológicos com foco em Agritech.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-400/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">FINEP Mais Inovação</p>
                  <p className="text-xs text-[#B4BECC] leading-relaxed">
                    Subvenções até R$ 600k para protótipos e validação.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-400/10 p-4 rounded-xl border border-blue-400/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={16} className="text-blue-400" />
                <p className="text-white font-bold text-xs uppercase tracking-wider">Janela Crítica</p>
              </div>
              <p className="text-xs text-[#B4BECC]">
                Editais Agritech: <span className="text-white font-bold">até 03/03/2026</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}