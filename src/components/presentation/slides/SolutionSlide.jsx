import React from "react";
import { motion } from "framer-motion";
import { Filter, BarChart3, Target, Zap, X, Check } from "lucide-react";

const PILLARS = [
{ icon: Filter, label: "Triagem", desc: "Gates eliminatórios (G1–G3) cortam casos mortos antes de pontuar", color: "brand" },
{ icon: BarChart3, label: "Scoring com Evidência", desc: "Dimensões D1–D6 com evidência E0–E3 — nota alta sem prova não passa", color: "brand" },
{ icon: Target, label: "Roteamento", desc: "Grant, Crédito ou CPSI — a rota certa para cada perfil", color: "brand" },
{ icon: Zap, label: "Motor Econômico", desc: "Ceiling + EV realista em 12 meses = número auditável para decisão", color: "brand" },
];

const NOT_IS = [
  { is: false, text: "Promessa de aprovação" },
  { is: false, text: "Pitch bonito ou planilha de opinião" },
  { is: true, text: "Sistema que obriga evidência e expõe condicionais" },
  { is: true, text: "Números auditáveis para decisão de comitê" },
];

export default function SolutionSlide() {
  return (
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
            A Solução
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            GAV transforma incerteza<br />
            <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
              em decisão defensável.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.color === "amber" ? "bg-amber-500/10" : "bg-emerald-500/10"}`}>
                <p.icon className={`w-5 h-5 ${p.color === "amber" ? "text-amber-400" : "text-emerald-400"}`} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{p.label}</h3>
              <p className="mt-2 text-white/35 text-sm leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 text-white/5 text-4xl font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
        >
          <h3 className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-5">O que o GAV é — e o que não é</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NOT_IS.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.is ? (
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                )}
                <span className={`text-sm ${item.is ? "text-white/60" : "text-white/30 line-through"}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}