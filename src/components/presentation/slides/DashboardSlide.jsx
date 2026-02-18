import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import GavDashboardMock from "@/components/GavDashboardMock";

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Visão do Fundo em Tempo Real
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Dashboard GAV — Ranking por ENDV
          </h2>
          <p className="mt-4 text-white/60 text-base max-w-2xl mx-auto">
            Base vs Ajustado • Top2 rotas • Gates • Próxima ação com dono e prazo
          </p>
        </motion.div>

        {/* Dashboard interativo com animações de entrada */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <GavDashboardMock />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-white/50 text-sm mt-8"
        >
          Filtro ao vivo, clique para abrir detalhes completos — demonstração ao vivo da plataforma
        </motion.p>
      </div>
    </div>
  );
}