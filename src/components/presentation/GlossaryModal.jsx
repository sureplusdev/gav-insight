import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GLOSSARY_TERMS = [
  {
    term: "GAV",
    definition: "Grant Alignment Valuation — Metodologia proprietária da Sure Plus para análise e destrave de portfólio de startups para captação de recursos.",
  },
  {
    term: "ENDV",
    definition: "Expected Net Discounted Value — O valor esperado de caixa para a startup nos próximos 12 meses, considerando probabilidades e fatores de execução.",
  },
  {
    term: "GF (Grant Fit)",
    definition: "Score de aderência ao fomento, baseado nas dimensões D1-D6. Indica o quão 'fácil' é para a startup captar recursos via grants.",
  },
  {
    term: "ER (Execution Readiness)",
    definition: "Score de prontidão de execução, baseado nas dimensões D1-D6. Indica a capacidade da startup de executar os planos de captação.",
  },
  {
    term: "D1-D6 (Dimensões)",
    definition: "Categorias de análise para scoring: Mérito Técnico (D1), Mercado & Impacto (D2), Execução & Governança (D3), Saúde Financeira (D4), Compliance & IP (D5), Fit Estratégico (D6).",
  },
  {
    term: "E0-E3 (Evidências)",
    definition: "Níveis de evidência documental: E0 (Sem evidência), E1 (Evidência fraca), E2 (Documental), E3 (Externa/Terceiro).",
  },
  {
    term: "Ceiling_r",
    definition: "Teto viável captável (R$) na rota 'r'. O valor máximo realista que a startup pode captar em uma rota específica.",
  },
  {
    term: "TTC (Time-to-Cash)",
    definition: "Fator temporal explícito que penaliza a latência do instrumento de captação. Varia de 1.0 (rápido) a 0.4 (lento).",
  },
  {
    term: "Top2 (Foco)",
    definition: "Regra que limita o foco em no máximo 2 rotas de captação com fator 1.0, penalizando as demais para evitar dispersão.",
  },
  {
    term: "F_prazo",
    definition: "Fator que considera o tempo de latência do instrumento de captação na priorização das rotas.",
  },
  {
    term: "F_execução",
    definition: "Fator que considera a capacidade real da startup de executar as ações necessárias para a captação.",
  },
  {
    term: "CPSI",
    definition: "Captação Pública e Sustentável de Inovação — Uma das rotas de captação de recursos públicos.",
  },
  {
    term: "TRL",
    definition: "Technology Readiness Level — Nível de maturidade tecnológica de uma inovação (escala 1-9).",
  },
  {
    term: "VDF",
    definition: "Valor de Destrave de Fomento — Ganhos potenciais em captação alcançados pela aplicação da metodologia GAV.",
  },
  {
    term: "G1, G2, G3 (Gates)",
    definition: "Gates eliminatórios que filtram casos mortos antes da pontuação GAV completa, focando em requisitos básicos.",
  },
  {
    term: "N2, N3 (Grants)",
    definition: "Nomes de grants específicos com diferentes níveis de prestígio, competitividade e requisitos de aprovação.",
  },
];

export default function GlossaryModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6"
            style={{ backgroundColor: "#193A62", borderColor: "rgba(49, 192, 218, 0.2)", border: "1px solid" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold text-white mb-6">Glossário</h2>
            <div className="space-y-6">
              {GLOSSARY_TERMS.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "#31C0DA" }}>
                    {item.term}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}