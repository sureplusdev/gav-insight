import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const GATES_BEFORE = [
   { gate: "G1", label: "Núcleo executável", status: "CONDICIONAL", color: "#31C0DA", bg: "rgba(49, 192, 218, 0.1)" },
   { gate: "G2", label: "Hipótese técnica", status: "PASSA", color: "#31C0DA", bg: "rgba(49, 192, 218, 0.1)" },
   { gate: "G3", label: "Runway/latência", status: "CONDICIONAL", color: "#31C0DA", bg: "rgba(49, 192, 218, 0.1)" },
 ];

const SPRINTS = [
  { sprint: "Sprint 1", days: "14d", action: "Pacote documental mínimo (D5) + dono do processo (D3)" },
  { sprint: "Sprint 2", days: "30d", action: "Teste em ambiente real + evidência E2/E3 (G1)" },
  { sprint: "Sprint 3", days: "30d", action: "Estrutura de garantias/PMT + banco de relacionamento (D4)" },
  { sprint: "Sprint 4", days: "15d", action: "Narrativa + orçamento + aderência edital (Grant N2)" },
];

export default function CaseSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Mini-Case
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            De "andando de lado"<br />
            <span style={{ 
              backgroundImage: "linear-gradient(to right, #31C0DA, #2C8FAE)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
              para pipeline com plano.
            </span>
          </h2>
          <p className="mt-3 text-white/35 text-sm max-w-xl">
            Startup B2B industrial — tecnologia promissora, dois trimestres sem avanço. 
            Fundo gastando 6–8h/mês em calls e follow-ups sem resultado.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 rounded-2xl border" style={{
              background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.05), transparent)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}
          >
            <div className="flex items-center gap-2 mb-5">
               <AlertCircle className="w-4 h-4" style={{ color: "#31C0DA" }} />
              <h3 className="text-white/60 text-sm font-semibold tracking-wider uppercase">Diagnóstico GAV</h3>
            </div>
            <div className="space-y-3 mb-6">
              {GATES_BEFORE.map((g) => (
                <div key={g.gate} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50">
                  <div className="flex items-center gap-2">
                    <span className="text-white/20 text-xs font-mono">{g.gate}</span>
                    <span className="text-white/50 text-sm">{g.label}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: g.bg, color: g.color }}>
                    {g.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="border-t border-white/10 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/50 text-xs font-medium">ENDV (Antes)</span>
                  <span className="text-white/40 text-sm">R$ 800 mil</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs">Readiness Score</span>
                <span className="text-white/60 text-sm font-bold">54 → <span style={{ color: "#31C0DA" }}>82</span></span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl border" style={{
              backgroundColor: "rgba(49, 192, 218, 0.05)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}>
              <p className="text-white/30 text-xs">
                 <span className="font-medium" style={{ color: "#31C0DA" }}>Decisão:</span> N3 (top grant) adiado estrategicamente. Fundo não queima reputação em aplicação prematura.
               </p>
            </div>
          </motion.div>

          {/* After — Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-6 rounded-2xl border" style={{
              background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.05), transparent)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}
          >
            <div className="flex items-center gap-2 mb-5">
               <CheckCircle2 className="w-4 h-4" style={{ color: "#31C0DA" }} />
              <h3 className="text-white/60 text-sm font-semibold tracking-wider uppercase">Plano 90 Dias</h3>
            </div>

            <div className="space-y-3">
              {SPRINTS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-3 rounded-xl border" style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderColor: "rgba(49, 192, 218, 0.05)"
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold" style={{ color: "#31C0DA" }}>{s.sprint}</span>
                    <span className="text-white/15 text-xs">({s.days})</span>
                  </div>
                  <p className="text-white/40 text-sm">{s.action}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl border" style={{
              backgroundColor: "rgba(49, 192, 218, 0.05)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4" style={{ color: "#31C0DA" }} />
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Resultado esperado</span>
              </div>
              <ul className="space-y-2">
                <li className="text-white/40 text-sm flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#31C0DA" }} />
                    ENDV: R$ 800k → R$ 4,2 milhões (+425%)
                  </li>
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#31C0DA" }} />
                    Top 2 rotas definidas e em execução
                  </li>
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#31C0DA" }} />
                    Fundo economiza 60-70% do tempo em empresas zumbis
                  </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}