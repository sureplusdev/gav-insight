import React, { useState } from "react";
import { motion } from "framer-motion";

const DIMENSIONS = [
  { id: "D1", label: "Mérito Técnico", weight_gf: 25, weight_er: 10, desc: "TRL-gap, validação, densidade de P&D" },
  { id: "D2", label: "Mercado & Impacto", weight_gf: 25, weight_er: 5, desc: "Tese, urgência, aderência a missões" },
  { id: "D3", label: "Execução & Governança", weight_gf: 15, weight_er: 30, desc: "Absorção, dono, velocidade de decisão" },
  { id: "D4", label: "Saúde Financeira", weight_gf: 10, weight_er: 25, desc: "Burn, caixa, contrapartida, aval" },
  { id: "D5", label: "Compliance & IP", weight_gf: 20, weight_er: 25, desc: "Prova documental, FTO, forma mata mérito" },
  { id: "D6", label: "Fit Estratégico", weight_gf: 5, weight_er: 5, desc: "Follow-on, risco reputacional, sinergias" },
];

const EVIDENCE = [
  { level: "E0", label: "Sem evidência", cap: 2, color: "bg-red-500", desc: "Nota máxima travada em 2" },
  { level: "E1", label: "Evidência fraca", cap: 3, color: "bg-orange-500", desc: "Declaração ou intenção" },
  { level: "E2", label: "Documental", cap: 4, color: "bg-amber-500", desc: "Contratos, balanço, registros" },
  { level: "E3", label: "Externa/terceiro", cap: 5, color: "bg-emerald-500", desc: "Auditoria, certificação, laudo" },
];

const TIERS = [
  { tier: "A", range: "80–100", color: "bg-emerald-500", text: "text-emerald-400" },
  { tier: "B", range: "65–79", color: "bg-blue-500", text: "text-blue-400" },
  { tier: "C", range: "50–64", color: "bg-amber-500", text: "text-amber-400" },
  { tier: "D", range: "0–49", color: "bg-red-500", text: "text-red-400" },
];

export default function ScoringSlide() {
  const [activeTab, setActiveTab] = useState("gf");

  return (
    <div className="min-h-screen flex items-center bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Scoring
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Dois scores,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              uma verdade.
            </span>
          </h2>
          <p className="mt-3 text-white/35 text-sm">"Fazer sentido para fomento" e "conseguir capturar em 12 meses" são variáveis distintas.</p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 inline-flex bg-white/5 rounded-full p-1"
        >
          <button
            onClick={() => setActiveTab("gf")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "gf" ? "bg-emerald-500 text-slate-950" : "text-white/50 hover:text-white/80"
            }`}
          >
            Grant Fit
          </button>
          <button
            onClick={() => setActiveTab("er")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "er" ? "bg-blue-500 text-slate-950" : "text-white/50 hover:text-white/80"
            }`}
          >
            Execution Readiness
          </button>
        </motion.div>

        {/* Dimensions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 space-y-2"
        >
          {DIMENSIONS.map((d, i) => {
            const w = activeTab === "gf" ? d.weight_gf : d.weight_er;
            return (
              <div key={d.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-white/20 text-xs font-mono w-6">{d.id}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm font-medium">{d.label}</span>
                    <span className={`text-sm font-bold ${activeTab === "gf" ? "text-emerald-400" : "text-blue-400"}`}>
                      {w}%
                    </span>
                  </div>
                  <div className="mt-1.5 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${activeTab === "gf" ? "bg-emerald-500" : "bg-blue-500"}`}
                    />
                  </div>
                  <p className="mt-1 text-white/20 text-xs">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Evidence + Tiers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">
              Evidência Anti-Caixa-Preta
            </h4>
            <div className="space-y-3">
              {EVIDENCE.map((e) => (
                <div key={e.level} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${e.color}`} />
                  <span className="text-white/60 text-sm font-mono w-6">{e.level}</span>
                  <span className="text-white/40 text-sm flex-1">{e.label}</span>
                  <span className="text-white/20 text-xs">cap {e.cap}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">
              Classificação por Tier
            </h4>
            <div className="space-y-3">
              {TIERS.map((t) => (
                <div key={t.tier} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${t.color}/10 flex items-center justify-center`}>
                    <span className={`text-sm font-bold ${t.text}`}>{t.tier}</span>
                  </div>
                  <span className="text-white/40 text-sm font-mono">{t.range}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}