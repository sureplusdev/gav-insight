import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, BarChart3, Eye, Calculator, PieChart } from "lucide-react";

const LAYERS = [
  {
    layer: "Camada 0",
    title: "Gates Eliminatórios",
    subtitle: "G1 · G2 · G3",
    desc: "Núcleo executável, hipótese técnica real, runway suficiente. Corta casos mortos antes de gastar energia.",
    icon: ShieldCheck,
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/15",
    accent: "text-red-400"
  },
  {
    layer: "Camada 1",
    title: "Dimensões D1–D6",
    subtitle: "Score 0–5 com Evidência",
    desc: "Mérito técnico, mercado/impacto, execução, saúde financeira, compliance/IP e fit estratégico.",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/15",
    accent: "text-emerald-400"
  },
  {
    layer: "Camada 2",
    title: "Proxies Operacionais",
    subtitle: "Visão do mundo real",
    desc: "Como editais e bancos realmente aprovam ou reprovam. Tradução do score para a linguagem do instrumento.",
    icon: Eye,
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/15",
    accent: "text-blue-400"
  },
  {
    layer: "Camada 3",
    title: "Motor FPV/EV",
    subtitle: "Ceiling + EV por Rota",
    desc: "Teto captável, probabilidade pragmática, TTC e Top2 — transforma score em previsão de caixa.",
    icon: Calculator,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/15",
    accent: "text-amber-400"
  },
  {
    layer: "Camada 4",
    title: "Portfólio Agregado",
    subtitle: "Dashboard & Clusters",
    desc: "Leitura macro: qualificar vs executar vs cortar. Priorização por ENDV e alocação de esforço.",
    icon: PieChart,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/15",
    accent: "text-purple-400"
  }
];

export default function ArchitectureSlide() {
  return (
    <div className="min-h-screen flex items-center bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Arquitetura
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            5 camadas,<br />
            <span className="text-white/30">zero caixa-preta.</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {LAYERS.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className={`flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-r ${l.color} border ${l.border} hover:scale-[1.01] transition-all duration-300`}
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="text-white/8 text-3xl font-black">{i}</span>
                <div className={`w-10 h-10 rounded-xl bg-slate-950/50 flex items-center justify-center`}>
                  <l.icon className={`w-5 h-5 ${l.accent}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-white font-semibold">{l.title}</h3>
                  <span className={`text-xs font-medium ${l.accent} opacity-60`}>{l.subtitle}</span>
                </div>
                <p className="mt-1.5 text-white/35 text-sm leading-relaxed">{l.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}