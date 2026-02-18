import React from "react";
import { motion } from "framer-motion";

const LOGOS = {
  sirros: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1135549/LogoCol.png",
  facilite: "https://media.licdn.com/dms/image/v2/C4D0BAQGXzs6ks3kMpA/company-logo_200_200/company-logo_200_200/0/1670428370485/facilitetecnologiacontabil_logo?e=2147483647&v=beta&t=wQIbngAWHLpjlM2sOY3tmxXk2FARGRneqoTHlpwcCOE",
  saipos: "https://contador.saipos.com/static/media/logo-saipos-vertical.e1a3b0a8.png",
  plannera: "https://plannera.com/wp-content/uploads/2022/10/Plannera_LOGO-sem-assinatura.png",
  fueltech: "https://images.seeklogo.com/logo-png/33/2/fueltech-logo-png_seeklogo-330732.png",
  trashin: "https://trashin.com.br/wp-content/uploads/2023/06/imagem_www.trashin.com_.br_.png",
};

const LogoBox = ({ src, alt, size = "default" }) => (
  <div className={`${size === "large" ? "bg-white" : "bg-white"} rounded-lg p-3 flex items-center justify-center shadow-sm`}>
    <img src={src} alt={alt} className={`${size === "large" ? "max-h-16" : "max-h-12"} max-w-full object-contain`} />
  </div>
);

export default function SurePlusCreditSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden py-20 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Dossiês de <span style={{ color: "#31C0DA" }}>Crédito</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">Estruturação técnica para acesso a linhas subsidiadas (Finep / BNDES).</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
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
        </motion.div>
      </div>
    </div>
  );
}