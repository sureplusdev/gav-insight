import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, BarChart3, Users } from "lucide-react";

const VALUE_PROPS = [
  { icon: Shield, label: "Disciplina", desc: "Decisões consistentes em comitê — menos variação por analista" },
  { icon: Zap, label: "Velocidade", desc: "Elimina casos zumbis e foca em destraves com ROI" },
  { icon: BarChart3, label: "Previsibilidade", desc: "ENDV dá número sério para follow-on e priorização" },
  { icon: Users, label: "Linguagem comum", desc: "'B em Fit, C em Readiness, ENDV X, Top2 = Grant N2 + Crédito'" },
];

const PHASES = [
  { phase: "Fase 0", title: "Kickoff", desc: "Definir lote, SLA, política de evidências", time: "T0" },
  { phase: "Fase 1", title: "Snapshot", desc: "Triagem, clusterização, shortlist Top X", time: "7–15d" },
  { phase: "Fase 2", title: "Deep Dive", desc: "Coleta pesada: cap table, IP/FTO, compliance", time: "15–45d" },
  { phase: "Fase 3", title: "Qualificação", desc: "Executar destraves e preparar submissões", time: "Recorrente" },
];

export default function CTASlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Próximos Passos
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Como vira rotina<br />
            <span className="text-white/30">do fundo.</span>
          </h2>
        </motion.div>

        {/* Phases timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {PHASES.map((p, i) => (
            <div key={i} className="relative p-5 rounded-2xl border transition-all" style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(49, 192, 218, 0.15)"
            }}>
              <div className="text-white/5 text-5xl font-black absolute top-3 right-4">
                {i + 1}
              </div>
              <span className="text-xs font-bold" style={{ color: "#31C0DA" }}>{p.phase}</span>
              <h4 className="mt-2 text-white font-semibold">{p.title}</h4>
              <p className="mt-1.5 text-white/30 text-sm">{p.desc}</p>
              <div className="mt-3 inline-flex px-2 py-0.5 rounded bg-white/5 text-white/20 text-xs font-mono">
                {p.time}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {VALUE_PROPS.map((v, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border" style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(255, 255, 255, 0.05)"
            }}>
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(49, 192, 218, 0.1)" }}>
                <v.icon className="w-4 h-4" style={{ color: "#31C0DA" }} />
              </div>
              <div>
                <h4 className="text-white/70 font-medium text-sm">{v.label}</h4>
                <p className="mt-1 text-white/30 text-xs leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Pronto para destravar<br />seu portfólio?
          </h3>
          
          <div className="mt-8 p-8 rounded-3xl border" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), rgba(49, 192, 218, 0.05), transparent)",
            borderColor: "rgba(49, 192, 218, 0.15)"
          }}>
            <p className="text-white/40 text-base mb-6">
              Vamos rodar o diagnóstico GAV gratuito em até 8 empresas do seu portfólio nas próximas 2 semanas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-3 rounded-lg bg-white/[0.02]">
                <p className="text-white/50 text-xs font-medium mb-1">Você recebe</p>
                <p className="text-white/70 text-sm font-semibold">One-Pager por startup</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02]">
                <p className="text-white/50 text-xs font-medium mb-1">Você recebe</p>
                <p className="text-white/70 text-sm font-semibold">Dashboard completo</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02]">
                <p className="text-white/50 text-xs font-medium mb-1">Você recebe</p>
                <p className="text-white/70 text-sm font-semibold">Recomendação clara</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 text-white font-bold rounded-full transition-all text-lg" style={{ backgroundColor: "#31C0DA" }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#2C8FAE"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#31C0DA"}
              >
                Agendar agora
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <p className="text-white/30 text-sm">
              Sem custo. Sem compromisso. Só resultado concreto.
            </p>
          </div>

          <p className="mt-8 text-white/15 text-xs tracking-wider uppercase">
            GAV 2.0 • Sure Plus • Fevereiro 2026 • Confidencial
          </p>
        </motion.div>
      </div>
    </div>
  );
}