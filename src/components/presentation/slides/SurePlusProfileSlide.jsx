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
  vertown: "https://www.vertown.com/wp-content/themes/temavertown/img/vertown-branco.svg",
};

export default function SurePlusProfileSlide() {
  return (
    <div className="min-h-screen flex items-center py-16 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4" style={{ borderColor: "rgba(49, 192, 218, 0.2)", backgroundColor: "rgba(49, 192, 218, 0.05)" }}>
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "#31C0DA" }}>Autoridade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sobre a <span style={{ color: "#31C0DA" }}>Sure Plus</span>
          </h2>
        </motion.div>

        {/* KPIs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#31C0DA]/10 p-5 rounded-2xl border border-[#31C0DA]/20 text-center">
            <div className="text-3xl font-bold text-[#31C0DA]">R$ 25,3M</div>
            <div className="text-white text-xs uppercase tracking-widest mt-1 font-bold">Captados</div>
          </div>
          <div className="bg-white/[0.05] p-5 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl font-bold text-white">17</div>
            <div className="text-[#B4BECC] text-xs uppercase tracking-widest mt-1 font-bold">Projetos</div>
          </div>
          <div className="bg-white/[0.05] p-5 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl font-bold text-white">R$ 9M</div>
            <div className="text-[#B4BECC] text-xs uppercase tracking-widest mt-1 font-bold">Em Análise</div>
          </div>
        </motion.div>

        {/* Two columns: Credit + Grants */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Credit Dossiers */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h3 className="text-[#31C0DA] text-xs font-bold uppercase tracking-wider mb-3">Dossiês de Crédito — R$ 17,5M</h3>
            <p className="text-white/40 text-xs mb-4">Finep / BNDES — compliance técnico e sigilo contratual.</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: LOGOS.sirros, alt: "Sirros" },
                { src: LOGOS.facilite, alt: "Facilite" },
                { src: LOGOS.saipos, alt: "Saipos" },
                { src: LOGOS.plannera, alt: "Plannera" },
                { src: LOGOS.fueltech, alt: "Fueltech" },
                { src: LOGOS.trashin, alt: "Trashin" },
              ].map((l, i) => (
                <div key={i} className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src={l.src} alt={l.alt} className="max-h-8 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Grants */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h3 className="text-[#31C0DA] text-xs font-bold uppercase tracking-wider mb-3">Editais & Subvenção</h3>
            <p className="text-white/40 text-xs mb-4">Recursos não-reembolsáveis para projetos de alto risco tecnológico.</p>
            <div className="space-y-2">
              {[
                { client: "TRASHIN", logo: LOGOS.trashin, dark: false, grants: ["ANA Saneamento R$ 110k", "Prêmio Vale Pinhão R$ 25k"] },
                { client: "SIRROS", logo: LOGOS.sirros, dark: false, grants: ["TECNOVA RS III R$ 590k", "CPSI Recife R$ 50k"] },
                { client: "ESG NOW", logo: LOGOS.esgnow, dark: false, grants: ["FAPEMIG Come to Minas R$ 220k"] },
                { client: "VERTOWN", logo: LOGOS.vertown, dark: true, grants: ["FAPEMIG Come to Minas R$ 550k"] },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.03] rounded-xl px-3 py-2 border border-white/5">
                  <div className={`${c.dark ? "bg-[#193A62]" : "bg-white"} rounded p-1 flex items-center justify-center w-12 h-7 shrink-0`}>
                    <img src={c.logo} alt={c.client} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-[10px] font-bold">{c.client}</div>
                    <div className="text-[#B4BECC] text-[10px] truncate">{c.grants.join(" · ")}</div>
                  </div>
                  <CheckCircle2 size={14} className="text-[#31C0DA] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}