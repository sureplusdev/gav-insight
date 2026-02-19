import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function SolutionSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#31C0DA" }}>
            A Solução
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
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
          className="mt-10 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            O GAV é o sistema que permite ao fundo saber, com números defendíveis:{" "}
            <strong className="text-white">quanto caixa não-dilutivo cada empresa do portfólio tem chance real de captar nos próximos 12 meses</strong>{" "}
            — e exatamente o que precisa ser feito para aumentar essa chance.
          </p>
        </motion.div>

        {/* 6 Dimensões */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <h3 className="text-white/90 text-lg font-medium mb-6">
            Como o GAV avalia cada startup?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
            {[
              { d: "D1", label: "Mérito Técnico", desc: "A tecnologia é real e inovadora de verdade, ou é só ideia bonita?" },
              { d: "D2", label: "Problema e Impacto", desc: "Resolve uma dor grande e importante para o mercado ou para o país?" },
              { d: "D3", label: "Execução", desc: "O time consegue entregar o projeto sem se perder no meio do caminho?" },
              { d: "D4", label: "Financeiro e Runway", desc: "Tem caixa e estrutura para aguentar o tempo que o dinheiro público demora para cair?" },
              { d: "D5", label: "Compliance e Documentos", desc: "Está tudo em ordem legal, com provas que um auditor aceita?" },
              { d: "D6", label: "Fit com o Fundo", desc: "Isso ajuda ou atrapalha a estratégia e a tese de vocês?" },
            ].map(({ d, label, desc }) => (
              <div key={d} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(49,192,218,0.1)", color: "#31C0DA" }}>{d}</div>
                <div>
                  <strong className="text-white">{label}</strong>
                  <p className="text-white/70 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/60">
            Cada dimensão recebe nota de 0 a 5. <strong>Sem evidência real, nota alta não passa.</strong>
          </p>
        </motion.div>

        {/* Gates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-6 p-5 rounded-2xl border border-white/8 bg-white/[0.02]"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(49,192,218,0.5)" }}>3 perguntas antes do dinheiro (Gates)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { g: "G1", q: "A startup tem um produto que funciona de verdade?" },
              { g: "G2", q: "A hipótese técnica é real ou só ideia bonita?" },
              { g: "G3", q: "Ela tem fôlego (runway) para esperar o dinheiro cair?" },
            ].map(({ g, q }) => (
              <div key={g} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgba(49,192,218,0.04)" }}>
                <span className="text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0" style={{ backgroundColor: "rgba(49,192,218,0.15)", color: "#31C0DA" }}>{g}</span>
                <p className="text-white/50 text-sm leading-snug">{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/25">Passa nos 3 → entra no modo captura. Não passa → vira "Preparo" ou é cortada do pipeline.</p>
        </motion.div>

        {/* O que o GAV é e não é */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
        >
          <h3 className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-5">
            O que o GAV é — e o que não é
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { is: true, text: "Número auditável + plano de 90 dias" },
              { is: true, text: "Ferramenta prática que o time usa todo dia" },
              { is: false, text: "Promessa de aprovação" },
              { is: false, text: "Planilha de opinião" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.is ? "rgba(49,192,218,0.1)" : "rgba(255,255,255,0.05)" }}>
                  {item.is
                    ? <Check className="w-3.5 h-3.5" style={{ color: "#31C0DA" }} />
                    : <X className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.3)" }} />
                  }
                </div>
                <span className={`text-sm ${item.is ? "text-white/70" : "text-white/30 line-through"}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}