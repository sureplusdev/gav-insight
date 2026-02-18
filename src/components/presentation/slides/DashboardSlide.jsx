import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const PORTFOLIO = [
  { name: "SolarTech X", endv: 4200000, evidence: "E3", readiness: 85 },
  { name: "NanoBio S.A.", endv: 1800000, evidence: "E2", readiness: 62 },
  { name: "DataGov AI", endv: 900000, evidence: "E1", readiness: 31 },
  { name: "FlexManuf", endv: 300000, evidence: "E0", readiness: 15 },
  { name: "AgroFlow", endv: 0, evidence: "Gate", readiness: 0 }
];

const HEATMAP_DIMS = [
  { dim: "D1 (TRL)", score: 72 },
  { dim: "D2 (PMF)", score: 68 },
  { dim: "D3 (Cap)", score: 55 },
  { dim: "D4 (Garan)", score: 48 },
  { dim: "D5 (Compli)", score: 42 },
  { dim: "D6 (Exec)", score: 65 }
];

const KPI_CARDS = [
  { label: "ENDV TOTAL", value: "R$ 6,9M" },
  { label: "READINESS MÉD", value: "59%" },
  { label: "PIPELINE", value: "5/6" },
  { label: "EM ALERTA", value: "2" }
];

export default function DashboardSlide() {
  return (
    <div className="min-h-screen flex items-center py-12 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Visão do Fundo
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Dashboard GAV em tempo real
          </h2>
          <p className="mt-3 text-white/60 text-base max-w-2xl mx-auto">
            Ranking por ENDV • Base vs Ajustado • Gates • Próxima ação com dono e prazo
          </p>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {KPI_CARDS.map((kpi, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border" style={{
                background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.1), transparent)",
                borderColor: "rgba(49, 192, 218, 0.15)"
              }}
            >
              <p className="text-xs font-mono mb-1" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
                {kpi.label}
              </p>
              <p className="text-white font-bold text-lg">{kpi.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content: Ranking + Heatmap */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Ranking por ENDV (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 p-6 rounded-2xl border" style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5" style={{ color: "#31C0DA" }} />
              <h3 className="text-white font-semibold text-lg">Ranking por ENDV</h3>
            </div>

            <div className="space-y-3">
              {PORTFOLIO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-xl border transition-all" style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(49, 192, 218, 0.15)"
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{item.name}</h4>
                      <span className="inline-flex items-center mt-1 px-2 py-0.5 text-[10px] rounded border" style={{
                        backgroundColor: "rgba(49, 192, 218, 0.1)",
                        borderColor: "rgba(49, 192, 218, 0.2)",
                        color: "rgba(49, 192, 218, 0.7)"
                      }}>
                        {item.evidence}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg" style={{ color: "#31C0DA" }}>
                        R${(item.endv/1000000).toFixed(1)}M
                      </p>
                      <p className="text-white/40 text-xs mt-1">{item.readiness}% ready</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-white/5 rounded-full flex-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.readiness}%` }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 0.8 }}
                        className="h-full" style={{ background: "linear-gradient(to right, #31C0DA, #2C8FAE)" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heatmap D1-D6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 rounded-2xl border" style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(49, 192, 218, 0.1)"
            }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Heatmap médio</h3>

            <div className="space-y-3">
              {HEATMAP_DIMS.map((dim, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white/60 text-xs font-medium">{dim.dim}</span>
                    <span className="text-white/40 text-xs font-mono">{dim.score}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.score}%` }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.6 }}
                      className="h-full" style={{ background: "linear-gradient(to right, #31C0DA, rgba(49, 192, 218, 0.3))" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Big callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 p-8 rounded-2xl border text-center" style={{
            background: "linear-gradient(to bottom right, rgba(49, 192, 218, 0.15), rgba(49, 192, 218, 0.05))",
            borderColor: "rgba(49, 192, 218, 0.2)"
          }}
        >
          <p className="text-white/50 text-sm mb-2">Resultado cumulativo do lote</p>
          <h3 className="text-5xl md:text-6xl font-black text-white">R$ 6,9M</h3>
          <p className="text-white/40 text-base mt-3">ENDV total esperado em 12 meses</p>
        </motion.div>
      </div>
    </div>
  );
}