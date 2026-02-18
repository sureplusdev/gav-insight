import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const SPRINTS = [
  {
    sprint: "Sprint 1",
    days: "14d",
    title: "Snapshot & Auditoria",
    desc: "Mapeamento D1–D6, coleta de evidências e identificação de kill-gaps.",
    tasks: ["Coleta de documentos", "Entrevistas técnicas", "Auditoria inicial"]
  },
  {
    sprint: "Sprint 2",
    days: "30d",
    title: "Remediação D5/D4",
    desc: "Ajuste de compliance, certidões e estrutura de garantias reais.",
    tasks: ["Compliance check", "Garantias reais", "FTO preliminar"]
  },
  {
    sprint: "Sprint 3",
    days: "30d",
    title: "Execução Top 2",
    desc: "Submissão para os dois maiores editais (foco total no ENDV).",
    tasks: ["Narrativa", "Orçamento", "Submissão"]
  },
  {
    sprint: "Sprint 4",
    days: "15d",
    title: "Governança & Monitoramento",
    desc: "Prestação de contas e gestão contínua para manter E3.",
    tasks: ["Relatórios", "Compliance", "Acompanhamento"]
  }
];

export default function RoadmapSlide() {
  return (
    <div className="min-h-screen flex items-center bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-400/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Operacional
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Roadmap de Destrave<br />
            <span className="text-white/30">90 dias estruturados.</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {SPRINTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="group relative"
            >
              {/* Timeline connector */}
              {i < SPRINTS.length - 1 && (
                <div className="absolute left-12 top-20 w-0.5 h-12 bg-gradient-to-b from-emerald-500/40 to-transparent" />
              )}

              <div className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/15 transition-all">
                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {i + 1}
                  </div>
                  {i < SPRINTS.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-emerald-500/40 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="text-emerald-400 font-bold text-sm">{item.sprint}</span>
                    <span className="flex items-center gap-1 text-white/30 text-xs">
                      <Clock className="w-3 h-3" /> {item.days}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/40 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  
                  {/* Subtasks */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tasks.map((task, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300/70 text-xs border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-white/40 text-xs font-mono mb-1">Total</p>
            <p className="text-white font-bold text-2xl">89 dias</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-white/40 text-xs font-mono mb-1">Expectativa ENDV ↑</p>
            <p className="text-emerald-400 font-bold text-2xl">+250–400%</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-white/40 text-xs font-mono mb-1">Readiness Target</p>
            <p className="text-blue-400 font-bold text-2xl">Tier A/B</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}