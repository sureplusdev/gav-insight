import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const LOGOS = {
  sirros: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1135549/LogoCol.png",
  trashin: "https://trashin.com.br/wp-content/uploads/2023/06/imagem_www.trashin.com_.br_.png",
  esgnow: "https://autoavaliacao.azurewebsites.net/media/logos/logo-esgnow.png",
  vertown: "https://www.vertown.com/wp-content/themes/temavertown/img/vertown-branco.svg"
};

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl ${className}`}>
    {children}
  </div>
);

export default function SurePlusGrantsSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Editais e <span style={{ color: "#31C0DA" }}>Subvenção</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">Recursos não-reembolsáveis para projetos de alto risco tecnológico (Grants).</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 font-bold">
            {[
              {
                client: "TRASHIN",
                logo: LOGOS.trashin,
                items: [
                  { n: "Edital ANA Saneamento", v: "R$ 110k" },
                  { n: "Prêmio Vale Pinhão", v: "R$ 25k" },
                  { n: "Edital Resíduo Extinto", v: "R$ 100k" }
                ]
              },
              {
                client: "SIRROS",
                logo: LOGOS.sirros,
                items: [
                  { n: "Eita! CPSI Recife", v: "R$ 50k" },
                  { n: "TECNOVA RS III", v: "R$ 590k" },
                  { n: "Edital ABDI Metal Indústria", v: "R$ 50k" }
                ]
              },
              {
                client: "ESG NOW",
                logo: LOGOS.esgnow,
                items: [{ n: "FAPEMIG - Come to Minas", v: "R$ 220k" }],
                highlight: true
              },
              {
                client: "VERTOWN",
                logo: LOGOS.vertown,
                darkBox: true,
                items: [{ n: "FAPEMIG - Come to Minas", v: "R$ 550k" }]
              }
            ].map((card, i) => (
              <GlassCard key={i} className={`p-6 ${card.highlight ? "border-[#31C0DA]/50" : ""}`}>
                <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                  <div className={`${card.darkBox ? "bg-[#193A62]" : "bg-white"} h-12 w-20 rounded-lg p-1.5 flex items-center justify-center shrink-0 shadow-sm`}>
                    <img src={card.logo} alt={card.client} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-xl font-bold tracking-tighter text-white uppercase">{card.client}</span>
                  <div className="ml-auto text-[#31C0DA]">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div className="space-y-3 font-medium">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-end font-bold">
                      <span className="text-sm text-[#B4BECC] font-light">{item.n}</span>
                      <span className="text-base text-white">{item.v}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}