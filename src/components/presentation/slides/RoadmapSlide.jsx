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
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
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
                <div className="absolute left-12 top-20 w-0.5 h-12" style={{ background: "linear-gradient(to bottom, rgba(49, 192, 218, 0.4), transparent)" }} />
              )}

              <div className="flex gap-6 items-start p-6 rounded-2xl border transition-all" style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(49, 192, 218, 0.15)"
              }}>
                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ 
                    background: "linear-gradient(to bottom right, #31C0DA, #2C8FAE)"
                  }}>
                    {i + 1}
                  </div>
                  {i < SPRINTS.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-4" style={{ background: "linear-gradient(to bottom, rgba(49, 192, 218, 0.4), transparent)" }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="font-bold text-sm" style={{ color: "#31C0DA" }}>{item.sprint}</span>
                    <span className="flex items-center gap-1 text-white/30 text-xs">
                      <Clock className="w-3 h-3" /> {item.days}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/40 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  
                  {/* Subtasks */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tasks.map((task, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border" style={{ 
                        backgroundColor: "rgba(49, 192, 218, 0.1)",
                        color: "rgba(49, 192, 218, 0.7)",
                        borderColor: "rgba(49, 192, 218, 0.2)"
                      }}>
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
            <p className="font-bold text-2xl" style={{ color: "#31C0DA" }}>+250–400%</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-white/40 text-xs font-mono mb-1">Readiness Target</p>
            <p className="font-bold text-2xl" style={{ color: "#31C0DA" }}>Tier A/B</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}