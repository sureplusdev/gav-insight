import React from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown, Flame } from "lucide-react";

const PAIN_POINTS = [
{
  icon: Clock,
  title: "Tempo do time",
  desc: "Análise, calls, follow-up eterno em empresas que estão andando de lado.",
  color: "#31C0DA",
  bgColor: "rgba(49, 192, 218, 0.1)",
  borderColor: "rgba(49, 192, 218, 0.2)"
},
{
  icon: AlertTriangle,
  title: "Reputação do fundo",
  desc: "Submissões fracas, histórico ruim e ruído com parceiros estratégicos.",
  color: "#31C0DA",
  bgColor: "rgba(49, 192, 218, 0.1)",
  borderColor: "rgba(49, 192, 218, 0.2)"
},
{
  icon: TrendingDown,
  title: "Capital defensivo",
  desc: "Follow-on para apagar incêndio, sem critério reprodutível de decisão.",
  color: "#31C0DA",
  bgColor: "rgba(49, 192, 218, 0.1)",
  borderColor: "rgba(49, 192, 218, 0.2)"
},
{
  icon: Flame,
  title: "Energia do founder",
  desc: "Tentativas paralelas sem foco — muitas frentes, zero captura efetiva.",
  color: "#31C0DA",
  bgColor: "rgba(49, 192, 218, 0.1)",
  borderColor: "rgba(49, 192, 218, 0.2)"
}
];

export default function ProblemSlide() {
  return (
    <div className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(49, 192, 218, 0.6)" }}>
            O Diagnóstico
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            O custo invisível do portfólio<br />
            <span className="text-white/30">andando de lado.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-white/40 text-base md:text-lg leading-relaxed font-light">
            Em early stage, o gargalo raramente é dealflow. O gargalo é 
            <span className="text-white/70 font-medium"> confundir "potencial" com "capturabilidade"</span> — 
            e sem método, o fundo tenta salvar todo mundo e paga caro.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PAIN_POINTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="group p-6 rounded-2xl border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
              style={{ borderColor: item.borderColor, backgroundColor: item.bgColor }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl" style={{ backgroundColor: item.bgColor }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl border"
          style={{ 
            background: "linear-gradient(to right, rgba(49, 192, 218, 0.05), transparent)",
            borderColor: "rgba(49, 192, 218, 0.1)"
          }}
        >
          <p className="text-white/60 text-sm md:text-base leading-relaxed italic">
            "Uma startup pode ser boa e ainda assim não capturar recursos em 12 meses — 
            por falta de evidência, governança fraca, contrapartidas inviáveis ou runway insuficiente."
          </p>
          <p className="mt-3 text-white/25 text-xs font-medium tracking-wider uppercase">
            Resultado previsível: energia máxima, impacto mínimo.
          </p>
        </motion.div>
      </div>
    </div>
  );
}