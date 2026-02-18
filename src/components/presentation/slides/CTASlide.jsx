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
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
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
            <div key={i} className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/15 transition-all">
              <div className="text-white/5 text-5xl font-black absolute top-3 right-4">
                {i + 1}
              </div>
              <span className="text-brand-500 text-xs font-bold">{p.phase}</span>
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
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                <v.icon className="w-4 h-4 text-emerald-400" />
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
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/15">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Pronto para destravar seu portfólio?
            </h3>
            <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
              O GAV reduz autoengano e cria uma previsão probabilística defensável. 
              Comece com um lote piloto e veja o resultado em 30 dias.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="group flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-500/25">
                Agendar Kickoff
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="px-8 py-4 text-white/40 hover:text-white/70 font-medium text-sm transition-all">
                Baixar documento completo
              </button>
            </div>
          </div>

          <p className="mt-8 text-white/15 text-xs tracking-wider uppercase">
            GAV 2.0 • Sure Plus • Fevereiro 2026 • Confidencial
          </p>
        </motion.div>
      </div>
    </div>
  );
}