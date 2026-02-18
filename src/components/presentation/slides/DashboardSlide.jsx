import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, AlertCircle, CheckCircle2 } from "lucide-react";

const PORTFOLIO = [
  { name: "SolarTech X", endv: 4200000, evidence: "E3", readiness: 85, status: "ready" },
  { name: "NanoBio S.A.", endv: 1800000, evidence: "E2", readiness: 62, status: "qualify" },
  { name: "DataGov AI", endv: 900000, evidence: "E1", readiness: 31, status: "watch" },
  { name: "AgroFlow", endv: 0, evidence: "Gate", readiness: 0, status: "blocked" }
];

const SYSTEMIC = [
   { issue: "D5 (Compliance)", count: 8, impact: "alto", color: "#31C0DA" },
   { issue: "D4 (Garantias)", count: 5, impact: "médio", color: "#31C0DA" },
   { issue: "G3 (Runway)", count: 3, impact: "médio", color: "#31C0DA" },
   { issue: "D1 (TRL)", count: 2, impact: "baixo", color: "#31C0DA" }
 ];

export default function DashboardSlide() {
  return (
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Gestão do Portfólio
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Visão do Fundo em Tempo Real<br />
            <span className="text-white/30">Priorização por ENDV e gargalos sistêmicos.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2 mb-6">
               <TrendingUp className="w-5 h-5" style={{ color: "#31C0DA" }} />
              <h3 className="text-white font-semibold">Ranking por ENDV</h3>
            </div>
            <div className="space-y-3">
              {PORTFOLIO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl border transition-all" style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(49, 192, 218, 0.15)"
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.name}</h4>
                      <span className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 text-[10px] rounded border" style={{
                        backgroundColor: "rgba(49, 192, 218, 0.1)",
                        borderColor: "rgba(49, 192, 218, 0.2)",
                        color: "rgba(49, 192, 218, 0.7)"
                      }}>
                        {item.evidence}
                      </span>
                    </div>
                    <span className="font-bold text-sm" style={{ color: "#31C0DA" }}>
                      R${(item.endv/1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-white/5 rounded-full flex-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.readiness}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="h-full" style={{ background: "linear-gradient(to right, #31C0DA, #2C8FAE)" }}
                      />
                    </div>
                    <span className="text-white/40 text-xs font-mono w-8 text-right">
                      {item.readiness}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gargalos Sistêmicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2 mb-6">
               <AlertCircle className="w-5 h-5" style={{ color: "#31C0DA" }} />
              <h3 className="text-white font-semibold">Gargalos Sistêmicos</h3>
            </div>
            <div className="space-y-3">
              {SYSTEMIC.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm font-medium">{item.issue}</span>
                    <span className="text-white/30 text-xs font-mono">{item.count} startups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-white/5 rounded-full flex-1 overflow-hidden">
                      <div
                        className="h-full" style={{ background: "linear-gradient(to right, #31C0DA, rgba(49, 192, 218, 0.2))" }}
                        style={{ width: `${item.count * 20}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{
                      backgroundColor: "rgba(49, 192, 218, 0.1)",
                      color: "#31C0DA"
                    }}>
                      {item.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-xl border" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), transparent)",
            borderColor: "rgba(49, 192, 218, 0.15)"
          }}>
            <p className="text-xs font-mono mb-1" style={{ color: "rgba(49, 192, 218, 0.6)" }}>ENDV TOTAL</p>
            <p className="text-white font-bold text-xl">R$ 6.9M</p>
          </div>
          <div className="p-4 rounded-xl border" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), transparent)",
            borderColor: "rgba(49, 192, 218, 0.15)"
          }}>
            <p className="text-xs font-mono mb-1" style={{ color: "rgba(49, 192, 218, 0.6)" }}>READINESS MÉD</p>
            <p className="text-white font-bold text-xl">59%</p>
          </div>
          <div className="p-4 rounded-xl border" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), transparent)",
            borderColor: "rgba(49, 192, 218, 0.15)"
          }}>
            <p className="text-xs font-mono mb-1" style={{ color: "rgba(49, 192, 218, 0.6)" }}>PIPELINE</p>
            <p className="text-white font-bold text-xl">4/6</p>
          </div>
          <div className="p-4 rounded-xl border" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), transparent)",
            borderColor: "rgba(49, 192, 218, 0.15)"
          }}>
            <p className="text-xs font-mono mb-1" style={{ color: "rgba(49, 192, 218, 0.6)" }}>EM ALERTA</p>
            <p className="text-white font-bold text-xl">2</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}