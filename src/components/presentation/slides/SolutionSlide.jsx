import React from "react";
import { motion } from "framer-motion";
import { Filter, BarChart3, Target, Zap, X, Check } from "lucide-react";

const PILLARS = [
  { icon: Filter, label: "Triagem dura", desc: "Corta casos mortos antes de gastar energia do fundo" },
  { icon: BarChart3, label: "Scoring com prova", desc: "Sem evidência real não tem nota alta — fim de wishful thinking" },
  { icon: Target, label: "Roteamento inteligente", desc: "Grant | Crédito | CPSI → rota ideal por diagnóstico" },
  { icon: Zap, label: "Motor de valor", desc: "Quanto caixa não-dilutivo provável entra em 12 meses" },
];

const NOT_IS = [
  { is: true, text: "Número auditável + plano de 90 dias" },
  { is: true, text: "Ferramenta prática que o time usa todo dia" },
  { is: false, text: "Promessa de aprovação" },
  { is: false, text: "Planilha de opinião" },
];

export default function SolutionSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            A Solução
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            GAV transforma incerteza<br />
            <span style={{
              backgroundImage: "linear-gradient(to right, #31C0DA, #2C8FAE)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
              em decisão defensável.
            </span>
          </h2>
        </motion.div>

        {/* Elevator Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 p-6 rounded-2xl border"
          style={{
            background: "linear-gradient(to right, rgba(49,192,218,0.08), rgba(49,192,218,0.03))",
            borderColor: "rgba(49, 192, 218, 0.25)"
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(49,192,218,0.5)" }}>Em uma frase</p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
            O GAV é o sistema que permite ao fundo saber, com números defendíveis,{" "}
            <span className="text-white font-semibold">quanto caixa não-dilutivo cada empresa do portfólio tem chance real de captar nos próximos 12 meses</span>{" "}
            — e exatamente o que precisa ser feito para aumentar essa chance.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
              className="relative p-5 rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(49, 192, 218, 0.2)"
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(49, 192, 218, 0.1)" }}>
                <p.icon className="w-5 h-5" style={{ color: "#31C0DA" }} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{p.label}</h3>
              <p className="mt-2 text-white/35 text-sm leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 text-white/5 text-4xl font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Is / Is Not */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
        >
          <h3 className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-5">O que o GAV é — e o que não é</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NOT_IS.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.is ? (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(49, 192, 218, 0.1)" }}>
                    <Check className="w-3.5 h-3.5" style={{ color: "#31C0DA" }} />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                    <X className="w-3.5 h-3.5" style={{ color: "rgba(255, 255, 255, 0.3)" }} />
                  </div>
                )}
                <span className={`text-sm ${item.is ? "text-white/60" : "text-white/30 line-through"}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}