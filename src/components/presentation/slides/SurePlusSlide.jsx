import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const LOGOS = {
  sirros: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1135549/LogoCol.png",
  facilite: "https://media.licdn.com/dms/image/v2/C4D0BAQGXzs6ks3kMpA/company-logo_200_200/company-logo_200_200/0/1670428370485/facilitetecnologiacontabil_logo?e=2147483647&v=beta&t=wQIbngAWHLpjlM2sOY3tmxXk2FARGRneqoTHlpwcCOE",
  saipos: "https://contador.saipos.com/static/media/logo-saipos-vertical.e1a3b0a8.png",
  plannera: "https://plannera.com/wp-content/uploads/2022/10/Plannera_LOGO-sem-assinatura.png",
  fueltech: "https://images.seeklogo.com/logo-png/33/2/fueltech-logo-png_seeklogo-330732.png",
  trashin: "https://trashin.com.br/wp-content/uploads/2023/06/imagem_www.trashin.com_.br_.png",
  esgnow: "https://autoavaliacao.azurewebsites.net/media/logos/logo-esgnow.png",
  vertown: "https://www.vertown.com/wp-content/themes/temavertown/img/vertown-branco.svg"
};

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl ${className}`}>
    {children}
  </div>
);

const SlideWrapper = ({ badge, title, highlight, subtitle, children }) => (
  <div className="min-h-screen flex items-center justify-center overflow-hidden py-20 px-6" style={{ backgroundColor: "#193A62" }}>
    <div className="max-w-6xl w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6" style={{ borderColor: "rgba(49, 192, 218, 0.2)", backgroundColor: "rgba(49, 192, 218, 0.05)" }}>
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "#31C0DA" }}>
              {badge.text}
            </span>
          </div>
        )}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
          {title}
          {highlight && (
            <span className="ml-2" style={{ color: "#31C0DA" }}>
              {highlight}
            </span>
          )}
        </h2>
        {subtitle && <p className="text-white/60 text-lg mb-8">{subtitle}</p>}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        {children}
      </motion.div>
    </div>
  </div>
);

const LogoBox = ({ src, alt, size = "default" }) => (
  <div className={`${size === "large" ? "bg-white" : "bg-white"} rounded-lg p-3 flex items-center justify-center shadow-sm`}>
    <img src={src} alt={alt} className={`${size === "large" ? "max-h-16" : "max-h-12"} max-w-full object-contain`} />
  </div>
);

export default function SurePlusSlide() {
  return (
    <>
      {/* Sobre Sure Plus */}
      <SlideWrapper badge={{ text: "Autoridade", color: "brand" }} title="Sobre a" highlight="Sure Plus">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 font-medium">
          <div className="bg-[#31C0DA]/10 p-10 rounded-[2.5rem] border border-[#31C0DA]/20 text-center font-black">
            <div className="text-6xl font-bold text-[#31C0DA]">R$ 25,3M</div>
            <div className="text-white text-sm uppercase tracking-widest mt-3 font-bold">Captados no Portfólio</div>
          </div>
          <GlassCard className="text-center flex flex-col justify-center items-center font-black">
            <div className="text-6xl font-bold text-white">17</div>
            <div className="text-[#B4BECC] text-sm uppercase tracking-widest mt-3 font-bold">Projetos Estruturados</div>
          </GlassCard>
          <GlassCard className="text-center flex flex-col justify-center items-center font-black">
            <div className="text-6xl font-bold text-white">R$ 9M</div>
            <div className="text-[#B4BECC] text-sm uppercase tracking-widest mt-3 font-bold">Em Análise Técnica</div>
          </GlassCard>
        </div>
      </SlideWrapper>

      {/* Cases Crédito */}
      <SlideWrapper title="Dossiês de" highlight="Crédito" subtitle="Estruturação técnica para acesso a linhas subsidiadas (Finep / BNDES).">
        <div className="flex flex-col md:flex-row gap-10 mt-6 items-center">
          <div className="w-full md:w-1/3 text-center md:text-left font-bold">
            <div className="text-7xl font-bold text-[#31C0DA] tracking-tighter mb-2">R$ 17,5M</div>
            <div className="text-lg text-white uppercase tracking-widest font-bold mb-6">Volume Consolidado</div>
            <p className="text-[#B4BECC] text-base leading-relaxed font-light italic border-t border-white/10 pt-6">
              Operações geridas sob estrito compliance técnico e sigilo contratual.
            </p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-5">
            <LogoBox src={LOGOS.sirros} alt="Sirros" />
            <LogoBox src={LOGOS.facilite} alt="Facilite" />
            <LogoBox src={LOGOS.saipos} alt="Saipos" />
            <LogoBox src={LOGOS.plannera} alt="Plannera" />
            <LogoBox src={LOGOS.fueltech} alt="Fueltech" size="large" />
            <LogoBox src={LOGOS.trashin} alt="Trashin" />
          </div>
        </div>
      </SlideWrapper>

      {/* Editais e Subvenção */}
      <SlideWrapper title="Editais e" highlight="Subvenção" subtitle="Recursos não-reembolsáveis para projetos de alto risco tecnológico (Grants).">
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
      </SlideWrapper>
    </>
  );
}