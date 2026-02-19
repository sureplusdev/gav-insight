import React from "react";
import { motion } from "framer-motion";

const GATES = [
  { g: "G1", q: "A startup tem um produto que funciona de verdade?" },
  { g: "G2", q: "A hipótese técnica é real ou só ideia bonita?" },
  { g: "G3", q: "Ela tem fôlego (runway) para esperar o dinheiro cair?" },
];

const DIMENSIONS = [
  { d: "D1", label: "Mérito Técnico", desc: "A tecnologia é real e inovadora, ou só ideia bonita?" },
  { d: "D2", label: "Problema e Impacto", desc: "Resolve uma dor grande e relevante para o mercado?" },
  { d: "D3", label: "Execução", desc: "O time consegue entregar sem se perder no caminho?" },
  { d: "D4", label: "Financeiro e Runway", desc: "Tem caixa para aguentar o tempo que o dinheiro demora?" },
  { d: "D5", label: "Compliance e Docs", desc: "Tem provas reais que um auditor aceita? Tudo em ordem legal?" },
  { d: "D6", label: "Fit com o Fundo", desc: "Ajuda ou atrapalha a tese e estratégia de vocês?" },
];

export default function GavMethodSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            Como o GAV funciona
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white leading-tight">
            Triagem rápida,{" "}
            <span style={{
              backgroundImage: "linear-gradient(to right, #31C0DA, #2C8FAE)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
              avaliação rigorosa.
            </span>
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-xl">
            Antes de pontuar, o GAV faz 3 perguntas eliminatórias. Quem passa entra para avaliação completa em 6 dimensões.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Gates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(49,192,218,0.5)" }}>
              3 perguntas antes do dinheiro (Gates)
            </p>
            <div className="space-y-3">
              {GATES.map(({ g, q }) => (
                <div
                  key={g}
                  className="flex items-start gap-4 p-4 rounded-2xl border"
                  style={{ backgroundColor: "rgba(49,192,218,0.04)", borderColor: "rgba(49,192,218,0.15)" }}
                >
                  <span
                    className="text-sm font-bold px-2.5 py-1 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(49,192,218,0.15)", color: "#31C0DA" }}
                  >
                    {g}
                  </span>
                  <p className="text-white/60 text-sm leading-snug pt-0.5">{q}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/25">
              Passa nos 3 → entra no modo captura. Não passa → vira "Preparo" ou é cortada do pipeline.
            </p>
          </motion.div>

          {/* 6 Dimensões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(49,192,218,0.5)" }}>
              6 dimensões de avaliação
            </p>
            <div className="space-y-2">
              {DIMENSIONS.map(({ d, label, desc }) => (
                <div
                  key={d}
                  className="flex items-start gap-3 p-3 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(49,192,218,0.15)", color: "#31C0DA" }}
                  >
                    {d}
                  </span>
                  <div>
                    <p className="text-white/70 text-xs font-semibold">{label}</p>
                    <p className="text-white/35 text-xs leading-snug mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/25">
              Cada dimensão recebe nota de 0 a 5. Sem evidência real, nota alta não passa.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}