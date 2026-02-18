import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function OnePageSlide() {
  const onePagerFields = [
    { label: "Mensagem executiva", value: "Tese 12m (Top2 rotas) + risco dominante + próxima ação" },
    { label: "Gates G1–G3", value: "Status + condição objetiva" },
    { label: "Grant Fit & Readiness", value: "Base vs Ajustado + Tier (A/B/C/D)" },
    { label: "Heatmap D1–D6", value: "6 dimensões com nível de evidência" },
    { label: "Instrumentos", value: "Top 2 rotas + Ceiling + P(12m) + ENDV" },
    { label: "Destraves", value: "Top 3 gargalos como 'se… então…'" },
    { label: "Plano 90 dias", value: "Sprints com dono e entregável" },
  ];

  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            O que chega no comitê
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            One-Pager por startup.<br />
            <span className="text-white/30">1 página • decisão rápida.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Field list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            {onePagerFields.map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="p-4 rounded-xl border" style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(49, 192, 218, 0.15)"
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    backgroundColor: "rgba(49, 192, 218, 0.15)"
                  }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#31C0DA" }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm font-medium">{field.label}</p>
                    <p className="text-white/35 text-sm mt-1">{field.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 rounded-2xl border" style={{
              background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.05), transparent)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="pb-4 border-b border-white/10">
                <p className="text-white/40 text-xs font-mono mb-2">EMPRESA</p>
                <h3 className="text-white font-bold text-lg">SolarTech X</h3>
                <p className="text-white/30 text-xs mt-1">Energia solar com AI • Série A em 12m</p>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-white/50 text-xs mb-1">Fit</p>
                  <p className="text-white font-bold text-sm">72/100</p>
                  <p className="text-white/30 text-xs mt-1">Tier A</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-white/50 text-xs mb-1">Readiness</p>
                  <p className="text-white font-bold text-sm">85/100</p>
                  <p className="text-white/30 text-xs mt-1">Pronta</p>
                </div>
              </div>

              {/* ENDV */}
              <div className="p-3 rounded-lg border" style={{
                backgroundColor: "rgba(49, 192, 218, 0.08)",
                borderColor: "rgba(49, 192, 218, 0.15)"
              }}>
                <p className="text-white/50 text-xs mb-1">ENDV esperado (12m)</p>
                <p className="text-white font-bold text-xl">R$ 4,2M</p>
                <p className="text-white/30 text-xs mt-1">Top 2: Grant N2 + Crédito</p>
              </div>

              {/* Action */}
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#31C0DA" }} />
                  <div>
                    <p className="text-white/70 text-xs font-medium">Próximo passo (Sprint 1)</p>
                    <p className="text-white/40 text-xs mt-1">Auditoria IP + cap table → release para Grant N2</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 p-4 rounded-xl border" style={{
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(255, 255, 255, 0.05)"
          }}
        >
          <p className="text-white/40 text-sm leading-relaxed">
            Mensagem executiva em 3 linhas: 
            <span className="text-white/60"> Tese de 12 meses (Top2 rotas definidas) + Risco dominante (D4 em remediação) + Próxima ação com dono e prazo (Sprint 1: auditoria IP, dono CTO).</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}