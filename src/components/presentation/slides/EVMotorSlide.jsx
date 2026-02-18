import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Focus, ArrowRightLeft } from "lucide-react";

const CONCEPTS = [
  {
    icon: TrendingUp,
    label: "Ceiling_r",
    desc: "Teto viável captável (R$) na rota r — não é sonho, é teto realista baseado em evidência.",
    accent: "text-brand-500",
    bg: "bg-brand-500/10"
  },
  {
    icon: Clock,
    label: "TTC (Time-to-Cash)",
    desc: "Fator temporal explícito: 1.0 / 0.8 / 0.6 / 0.4 conforme latência do instrumento.",
    accent: "text-brand-400",
    bg: "bg-brand-400/10"
  },
  {
    icon: Focus,
    label: "Top2 (Foco)",
    desc: "Regra: no máximo 2 rotas com fator 1.0. Demais recebem penalidade de 0.4.",
    accent: "text-brand-300",
    bg: "bg-brand-300/10"
  },
  {
    icon: ArrowRightLeft,
    label: "Base vs Ajustado",
    desc: "Sempre lado a lado — evidencia o custo real do autoengano e do gap de execução.",
    accent: "text-brand-400",
    bg: "bg-brand-400/10"
  }
];

const ROUTES = [
  { name: "Grant", desc: "Não-dilutivo. Forte em D1/D2/D5.", color: "bg-emerald-500" },
  { name: "Crédito", desc: "Ponte/contrapartida. Exige D4 forte.", color: "bg-blue-500" },
  { name: "CPSI", desc: "Fit público + evidência operacional.", color: "bg-amber-500" },
];

export default function EVMotorSlide() {
  return (
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Motor Econômico
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            De score para<br />
            <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
              R$ provável em 12 meses.
            </span>
          </h2>
        </motion.div>

        {/* Formula visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-brand-500/5 to-brand-400/5 border border-brand-500/10"
        >
          <p className="text-white/30 text-xs font-semibold tracking-wider uppercase mb-4">Fórmula Central</p>
          <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
            <span className="px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-500 font-mono font-bold">EV_r</span>
            <span className="text-white/20">=</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 font-mono">Ceiling_r</span>
            <span className="text-white/20">×</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 font-mono">P(12m)</span>
            <span className="text-white/20">×</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 font-mono">F_prazo</span>
            <span className="text-white/20">×</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 font-mono">F_execução</span>
          </div>
          <p className="mt-4 text-white/25 text-xs">
            ENDV = Σ EV_r (soma ajustada de todas as rotas) — o número sério para priorização.
          </p>
        </motion.div>

        {/* Concepts grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONCEPTS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${c.bg}`}>
                  <c.icon className={`w-4 h-4 ${c.accent}`} />
                </div>
                <h3 className={`font-semibold text-sm ${c.accent}`}>{c.label}</h3>
              </div>
              <p className="mt-3 text-white/35 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Routes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <p className="text-white/30 text-xs font-semibold tracking-wider uppercase mb-4">Rotas de Captação</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {ROUTES.map((r, i) => (
              <div key={i} className="flex-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${r.color}`} />
                <div>
                  <span className="text-white/70 text-sm font-semibold">{r.name}</span>
                  <p className="text-white/25 text-xs mt-0.5">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}