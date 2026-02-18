import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, PieChart, CheckCircle2, AlertCircle } from "lucide-react";

export default function IntroSlide({ onNext }) {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#193A62" }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: "rgba(49, 192, 218, 0.1)" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: "rgba(44, 143, 174, 0.08)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Logo & Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-16 text-center"
          >
            <img 
              src="https://iili.io/KlAINkX.md.png" 
              alt="Sure Plus Logo" 
              className="h-32 md:h-40 mx-auto drop-shadow-lg mb-8"
            />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: "rgba(49, 192, 218, 0.2)", backgroundColor: "rgba(49, 192, 218, 0.05)" }}>
              <Shield className="w-3.5 h-3.5" style={{ color: "#31C0DA" }} />
              <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "#31C0DA" }}>
                Metodologia Proprietária
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                GAV
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-3" style={{ color: "#31C0DA" }}>
              Grant Alignment Valuation
            </p>
            <p className="text-base text-white/50 max-w-2xl mx-auto">
              Destravamento de portfólio VC early stage via captação não-dilutiva e crédito subsidiado, com{" "}
              <span className="text-amber-400/90 font-medium">EV realista em 12 meses</span>.
            </p>
          </motion.div>

          {/* Context Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {/* Fomento Context */}
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <PieChart size={16} style={{ color: "#31C0DA" }} />
                <h3 className="text-white font-bold text-xs uppercase tracking-wider">Cenário 2026</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#B4BECC]">Orçamento Total</span>
                  <span className="text-white font-bold">R$ 6,54 Tri</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-[#B4BECC]">MCTI (Dotação)</span>
                  <span className="text-green-400 font-bold">+14,7%</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-[#B4BECC]">Emendas Parlamentares</span>
                  <span className="text-white font-bold">R$ 61 Bi</span>
                </div>
              </div>
            </div>

            {/* FINEP & FNDCT */}
            <div className="bg-gradient-to-br from-[#31C0DA]/15 to-[#31C0DA]/5 p-5 rounded-xl border-2 border-[#31C0DA]/40">
              <p className="text-xs text-[#31C0DA] uppercase tracking-wider mb-2 font-bold">Taxa FINEP</p>
              <p className="text-4xl font-black text-white mb-3">TR + 2%</p>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-[#31C0DA] font-bold">Volume Disponível</p>
                  <p className="text-white font-bold">R$ 41 Bilhões</p>
                </div>
              </div>
            </div>

            {/* Estratégias Principais */}
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Estratégias 2026</h3>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#31C0DA] mt-0.5 flex-shrink-0" />
                  <span className="text-[#B4BECC]">FNDCT Descontingenciado</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#B4BECC]">Agritech & Inovação</span>
                </div>
                <div className="flex items-start gap-2 border-t border-white/5 pt-2">
                  <AlertCircle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#B4BECC]">até 03/03/2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onNext}
              className="group flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-full transition-all duration-300"
              style={{ backgroundColor: "#31C0DA" }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#2C8FAE"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#31C0DA"}
            >
              Explorar a Metodologia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}