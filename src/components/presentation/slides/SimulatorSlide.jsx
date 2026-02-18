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
    <div className="min-h-screen flex items-center bg-brand-900 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-500/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Motor Econômico
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Simulador ENDV<br />
            <span className="text-white/30">Veja como a evidência muda tudo.</span>
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
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-4">
                Volume de Editais em Janela (R$)
              </label>
              <input
                type="range"
                min="1000000"
                max="20000000"
                step="500000"
                value={ceiling}
                onChange={(e) => setCeiling(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-500"
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
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-4">
                Nível de Evidência (E0–E3)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { level: 0, label: "E0", desc: "Nulo", color: "from-red-500" },
                  { level: 1, label: "E1", desc: "Fraco", color: "from-brand-400" },
                  { level: 2, label: "E2", desc: "Sólido", color: "from-brand-300" },
                  { level: 3, label: "E3", desc: "Auditado", color: "from-brand-500" }
                ].map((e) => (
                  <button
                    key={e.level}
                    onClick={() => setEvidence(e.level)}
                    className={`p-3 rounded-lg transition-all text-center transform ${
                      evidence === e.level
                        ? `bg-gradient-to-br ${e.color} to-white/10 border border-brand-500/30 scale-110 shadow-lg`
                        : "bg-white/5 border border-white/10 hover:border-white/20"
                    }`}
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
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-500"
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900 to-blue-500/10 border border-emerald-500/20 p-8 flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 opacity-5 text-brand-500">
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
                  <span className="text-brand-500">R$</span>{" "}
                  {(endv / 1000000).toFixed(2)}
                  <span className="text-white/30 text-4xl">M</span>
                </motion.div>
                <p className="text-brand-500/60 text-sm">
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
                  className="text-red-400 font-bold text-xl"
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
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-red-200/70 text-xs">
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