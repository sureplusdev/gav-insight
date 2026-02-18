import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SLIDE_LABELS = [
  "Início",
  "O Problema",
  "A Solução",
  "Arquitetura",
  "Scoring",
  "Motor EV",
  "Simulador",
  "Roadmap",
  "Dashboard",
  "Case",
  "Próximos Passos"
];

export default function SlideNav({ current, total, onPrev, onNext }) {
  const [inputValue, setInputValue] = useState("");

  const handleGoToSlide = (slideNum) => {
    const num = parseInt(slideNum);
    if (num >= 1 && num <= total) {
      // Chamar onPrev ou onNext múltiplas vezes para chegar ao slide desejado
      const targetIndex = num - 1;
      const diff = targetIndex - current;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) onNext();
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) onPrev();
      }
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") return;
    if (e.key === "Enter") {
      handleGoToSlide(value);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-brand-900/80 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {Array.from({ length: total }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  const diff = i - current;
                  if (diff > 0) {
                    for (let j = 0; j < diff; j++) onNext();
                  } else if (diff < 0) {
                    for (let j = 0; j < Math.abs(diff); j++) onPrev();
                  }
                }}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-brand-500 w-8 h-2"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
                layoutId={i === current ? "active-dot" : undefined}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60 font-medium">
              {current + 1}/{total}
            </span>
            <input
              type="number"
              min="1"
              max={total}
              placeholder="Ir para..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputChange}
              className="w-16 px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>

          <div className="hidden sm:block text-right">
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