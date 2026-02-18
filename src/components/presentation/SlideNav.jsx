import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SLIDE_LABELS = [
  "Início",
  "O Problema",
  "A Solução",
  "Arquitetura",
  "Scoring",
  "Motor EV",
  "Entregáveis",
  "Case",
  "Próximos Passos"
];

export default function SlideNav({ current, total, onPrev, onNext }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-slate-900/80 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <motion.div
                key={i}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-emerald-400 w-8 h-2"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
                layoutId={i === current ? "active-dot" : undefined}
              />
            ))}
          </div>

          <div className="hidden md:block">
            <span className="text-xs text-white/40 font-medium tracking-wider uppercase">
              {SLIDE_LABELS[current] || `Slide ${current + 1}`}
            </span>
          </div>

          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}