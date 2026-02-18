import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export default function HeroSlide({ onNext }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#193A62" }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: "rgba(49, 192, 218, 0.1)" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: "rgba(44, 143, 174, 0.08)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(49, 192, 218, 0.05)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="https://iili.io/KlAINkX.md.png" 
            alt="Sure Plus Logo" 
            className="h-16 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ borderColor: "rgba(49, 192, 218, 0.2)", backgroundColor: "rgba(49, 192, 218, 0.05)" }}>
            <Shield className="w-3.5 h-3.5" style={{ color: "#31C0DA" }} />
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "#31C0DA" }}>
              Metodologia Proprietária
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            GAV
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl font-medium tracking-wide"
          style={{ color: "#31C0DA" }}
        >
          Grant Alignment Valuation
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Metodologia de destravamento de portfólio VC early stage via captação não-dilutiva e crédito subsidiado, com{" "}
          <span className="text-amber-400/90 font-medium">EV realista em 12 meses</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-12 text-white/20"
        >
          {["VC Early Stage", "Versão 2.0", "Fevereiro 2026"].map((label, i) => (
            <span key={i} className="text-xs font-medium tracking-widest uppercase">
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}