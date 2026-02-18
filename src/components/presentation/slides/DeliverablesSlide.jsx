import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, LayoutDashboard, CheckCircle2, BarChart3, Thermometer, Clock, AlertCircle, Layers } from "lucide-react";

const ONE_PAGER_ITEMS = [
  "Gates G1–G3: status + condição objetiva",
  "Grant Fit (Base vs Ajustado) + Execution Readiness + Tier",
  "Heatmap D1–D6 com evidência E0–E3",
  "Matriz de Instrumento (0–5)",
  "Rotas + Ceilings + P(12m) + ENDV (Top2 destacadas)",
  "Top 3 gargalos como 'se… então…'",
  "Plano 90 dias: sprints com dono e entregável"
];

const DASHBOARD_VIEWS = [
  { icon: BarChart3, label: "Ranking por ENDV", desc: "Top 10 por valor esperado ajustado" },
  { icon: Thermometer, label: "Heatmap D1–D6", desc: "Médias do portfólio e por vertical" },
  { icon: Layers, label: "Distribuição por Tier", desc: "Histograma + Gates (Passa/Cond/Reprov)" },
  { icon: Clock, label: "Pipeline Operacional", desc: "Backlog → Preparo → Submetido → Aprovado" },
  { icon: AlertCircle, label: "Gargalos Sistêmicos", desc: "Top 5 que mais derrubam EV no portfólio" },
  { icon: CheckCircle2, label: "Esforço vs Retorno", desc: "ENDV / SPLI — proxy de ROI do time" },
];

export default function DeliverablesSlide() {
  const [view, setView] = useState("onepager");

  return (
    <div className="min-h-screen flex items-center bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Entregáveis
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            O que o fundo recebe.
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex gap-3"
        >
          <button
            onClick={() => setView("onepager")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              view === "onepager"
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                : "bg-white/[0.02] border border-white/5 text-white/40 hover:text-white/60"
            }`}
          >
            <FileText className="w-4 h-4" />
            One-Pager por Startup
          </button>
          <button
            onClick={() => setView("dashboard")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              view === "dashboard"
                ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                : "bg-white/[0.02] border border-white/5 text-white/40 hover:text-white/60"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard do Fundo
          </button>
        </motion.div>

        {/* Content */}
        {view === "onepager" ? (
          <motion.div
            key="onepager"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">One-Pager por Empresa</h3>
                  <p className="text-white/30 text-xs">1 página • decisão rápida de comitê</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {ONE_PAGER_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-3 pl-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-2 flex-shrink-0" />
                    <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-white/5">
                <p className="text-white/25 text-xs italic">
                  "Mensagem executiva em 3 linhas: Tese 12 meses (Top2 rotas), Risco dominante, Próxima ação com dono e prazo."
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DASHBOARD_VIEWS.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <v.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="mt-3 text-white/70 font-medium text-sm">{v.label}</h4>
                  <p className="mt-1 text-white/25 text-xs">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-white/30 text-xs font-semibold tracking-wider uppercase mb-2">Regra de ouro</p>
              <p className="text-white/40 text-sm">
                Sempre mostrar Base vs Ajustado lado a lado. Proibir somatório fantasioso — Top2 e TTC sempre aplicados no EV exibido ao comitê.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}