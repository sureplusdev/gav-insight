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
    bgColor: "rgba(49, 192, 218, 0.08)",
    borderColor: "rgba(49, 192, 218, 0.15)",
    accentColor: "#31C0DA"
  },
  {
    layer: "Camada 1",
    title: "Dimensões D1–D6",
    subtitle: "Score 0–5 com Evidência",
    desc: "Mérito técnico, mercado/impacto, execução, saúde financeira, compliance/IP e fit estratégico.",
    icon: BarChart3,
    bgColor: "rgba(49, 192, 218, 0.08)",
    borderColor: "rgba(49, 192, 218, 0.15)",
    accentColor: "#31C0DA"
  },
  {
    layer: "Camada 2",
    title: "Proxies Operacionais",
    subtitle: "Visão do mundo real",
    desc: "Como editais e bancos realmente aprovam ou reprovam. Tradução do score para a linguagem do instrumento.",
    icon: Eye,
    bgColor: "rgba(49, 192, 218, 0.08)",
    borderColor: "rgba(49, 192, 218, 0.15)",
    accentColor: "#31C0DA"
  },
  {
    layer: "Camada 3",
    title: "Motor FPV/EV",
    subtitle: "Ceiling + EV por Rota",
    desc: "Teto captável, probabilidade pragmática, TTC e Top2 — transforma score em previsão de caixa.",
    icon: Calculator,
    bgColor: "rgba(49, 192, 218, 0.08)",
    borderColor: "rgba(49, 192, 218, 0.15)",
    accentColor: "#31C0DA"
  },
  {
    layer: "Camada 4",
    title: "Portfólio Agregado",
    subtitle: "Dashboard & Clusters",
    desc: "Leitura macro: qualificar vs executar vs cortar. Priorização por ENDV e alocação de esforço.",
    icon: PieChart,
    bgColor: "rgba(49, 192, 218, 0.08)",
    borderColor: "rgba(49, 192, 218, 0.15)",
    accentColor: "#31C0DA"
  }
];

export default function ArchitectureSlide() {
  return (
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
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
              className="flex items-start gap-5 p-5 rounded-2xl border hover:scale-[1.01] transition-all duration-300"
              style={{ 
                backgroundColor: l.bgColor,
                borderColor: l.borderColor
              }}
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="text-white/8 text-3xl font-black">{i}</span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <l.icon className="w-5 h-5" style={{ color: l.accentColor }} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                   <h3 className="text-white font-semibold">{l.title}</h3>
                   <span className="text-xs font-medium opacity-60" style={{ color: l.accentColor }}>{l.subtitle}</span>
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