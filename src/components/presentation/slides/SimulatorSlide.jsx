import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, AlertCircle } from "lucide-react";

export default function SimulatorSlide() {
  const [ceiling, setCeiling] = useState(8500000);
  const [evidence, setEvidence] = useState(2);
  const [execution, setExecution] = useState(0.6);

  const probabilities = [0.1, 0.25, 0.55, 1.0];
  const executionFactors = [0.2, 0.4, 0.6, 1.0];
  
  const endv = useMemo(() => {
    const prob = probabilities[evidence] || 0.25;
    const factor = executionFactors[Math.floor(execution * 3)];
    return ceiling * prob * factor;
  }, [ceiling, evidence, execution]);

  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Motor Econômico
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Quanto essa startup <span style={{ color: "#31C0DA" }}>realmente</span> consegue captar?<br />
            <span className="text-white/30 text-2xl md:text-3xl font-light">Mexa nos controles e veja o número mudar ao vivo.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Ceiling */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-1">
                Quanto tem em aberto para ela? (Editais + Crédito)
              </label>
              <p className="text-white/25 text-xs mb-3">O teto máximo — se tudo desse certo</p>
              <input
                 type="range"
                 min="1000000"
                 max="20000000"
                 step="500000"
                 value={ceiling}
                 onChange={(e) => setCeiling(parseInt(e.target.value))}
                 className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer" style={{ accentColor: "#31C0DA" }}
               />
              <motion.div
                key={ceiling}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-white text-3xl font-bold mt-4 font-mono"
              >
                R$ {(ceiling / 1000000).toFixed(1)}M
              </motion.div>
              <p className="text-white/25 text-xs mt-2">Teto realista baseado em perfil da startup</p>
            </div>

            {/* Evidence */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-1">
                Que prova ela tem? (Evidência)
              </label>
              <p className="text-white/25 text-xs mb-3">Quanto mais documento real, maior a chance de aprovação</p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { level: 0, label: "E0", desc: "Nulo", color: "#6B7280" },
                  { level: 1, label: "E1", desc: "Fraco", color: "#31C0DA" },
                  { level: 2, label: "E2", desc: "Sólido", color: "#31C0DA" },
                  { level: 3, label: "E3", desc: "Auditado", color: "#31C0DA" }
                ].map((e) => (
                  <button
                    key={e.level}
                    onClick={() => setEvidence(e.level)}
                    className="p-3 rounded-lg transition-all text-center transform"
                    style={{ 
                      backgroundColor: evidence === e.level ? "rgba(49, 192, 218, 0.15)" : "rgba(255, 255, 255, 0.05)",
                      borderColor: evidence === e.level ? "rgba(49, 192, 218, 0.3)" : "rgba(255, 255, 255, 0.1)",
                      border: "1px solid",
                      transform: evidence === e.level ? "scale(1.1)" : "scale(1)"
                    }}
                  >
                    <div className="font-bold text-white text-sm">{e.label}</div>
                    <div className="text-white/40 text-xs">{e.desc}</div>
                  </button>
                ))}
              </div>
              <p className="text-white/25 text-xs mt-3">
                {["Declaratório — cap 1.5", "Intencional — cap 2.5", "Documental — cap 4.0", "Auditado — cap 5.0"][evidence]}
              </p>
            </div>

            {/* Execution Factor */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-4">
                Fator de Execução (F_ex)
              </label>
              <input
                 type="range"
                 min="0"
                 max="1"
                 step="0.1"
                 value={execution}
                 onChange={(e) => setExecution(parseFloat(e.target.value))}
                 className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer" style={{ accentColor: "#31C0DA" }}
               />
              <motion.div
                key={execution}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-white text-2xl font-bold mt-4 font-mono"
              >
                {(execution * 100).toFixed(0)}%
              </motion.div>
              <p className="text-white/25 text-xs mt-2">
                Atrito operacional: capacidade real de executar
              </p>
            </div>
          </motion.div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Main Output */}
            <div className="relative overflow-hidden rounded-3xl border p-8 flex-1 flex flex-col justify-center" style={{ 
              backgroundColor: "rgba(25, 58, 98, 0.8)",
              borderColor: "rgba(49, 192, 218, 0.2)"
            }}>
               <div className="absolute top-0 right-0 opacity-5" style={{ color: "#31C0DA" }}>
                <Calculator className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">
                  Valor Esperado de Caixa (12m)
                </p>
                <motion.div
                  key={endv}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tighter"
                >
                  <span style={{ color: "#31C0DA" }}>R$</span>{" "}
                  {(endv / 1000000).toFixed(2)}
                  <span className="text-white/30 text-4xl">M</span>
                </motion.div>
                <p className="text-sm" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
                  ENDV = Ceiling × Probabilidade × F_execução
                </p>
              </div>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-white/40 text-xs font-mono mb-1">PROBABILIDADE REAL</p>
                <motion.p
                  key={evidence}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white font-bold text-xl"
                >
                  {(probabilities[evidence] * 100).toFixed(0)}%
                </motion.p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-white/40 text-xs font-mono mb-1">GAP vs CEILING</p>
                <motion.p
                    key={ceiling - endv}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-bold text-xl" style={{ color: "#FFB3B3" }}
                  >
                  {((1 - endv / ceiling) * 100).toFixed(0)}%
                </motion.p>
              </div>
            </div>

            {/* Warning */}
            {evidence < 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl border flex items-start gap-3" style={{
                  backgroundColor: "rgba(49, 192, 218, 0.1)",
                  borderColor: "rgba(49, 192, 218, 0.2)"
                }}
              >
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#31C0DA" }} />
                <p className="text-xs" style={{ color: "rgba(49, 192, 218, 0.7)" }}>
                  Baixa evidência limita o teto de captação. Priorize D5 e documentação.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Formula Explainer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">
            Fórmula
          </p>
          <p className="text-white/50 font-mono text-sm">
            ENDV = Σ (C<sub>i</sub> · P<sub>i</sub> · F<sub>ex</sub>)
          </p>
          <p className="text-white/25 text-xs mt-2">
            Onde: C = Ceiling do instrumento | P = Probabilidade (função de Evidência) | F_ex = Fator de Execução
          </p>
        </motion.div>
      </div>
    </div>
  );
}