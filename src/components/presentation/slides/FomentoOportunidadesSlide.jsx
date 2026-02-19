import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Building2, DollarSign, AlertCircle, ArrowUpRight } from "lucide-react";

const MISSIONS = [
  "Cadeias Agroindustriais",
  "Complexo da Saúde",
  "Infraestrutura e Mobilidade",
  "Transformação Digital",
  "Bioeconomia & Energia",
  "Soberania e Defesa",
];

const INSTRUMENTS = [
  { label: "Crédito Direto", rate: "TR + 2,5%", detail: "até 240 meses", color: "#31C0DA" },
  { label: "Subvenção (FNDCT)", rate: "R$ 3,3 Bi", detail: "Fluxo Contínuo + Editais", color: "#FCD34D" },
  { label: "Inovacred", rate: "TR + 6,07%", detail: "até R$ 30M · até 96 meses", color: "#86efac" },
  { label: "FIPs / Capital Semente", rate: "FNDCT", detail: "TRL 7+ · foco NIB", color: "#c4b5fd" },
];

export default function FomentoOportunidadesSlide() {
  return (
    <div className="min-h-screen flex items-center py-16 px-6" style={{ backgroundColor: "#193A62" }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#FCD34D" }}>
              Finep pelo Brasil · Fev–Abr 2026
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ecossistema de <span style={{ color: "#31C0DA" }}>Fomento FINEP</span>
              </h2>
              <p className="text-white/50 text-sm mt-1">Empresa pública vinculada ao MCTI · criada em 1967 · Secretaria-Executiva do FNDCT</p>
            </div>
            {/* FNDCT growth highlight */}
            <div className="flex gap-4 flex-shrink-0">
              {[
                { label: "Crédito", old: "R$ 9,2Bi", now: "R$ 31,5Bi", mult: "3,4×" },
                { label: "Subvenção", old: "R$ 0,6Bi", now: "R$ 4Bi", mult: "6,6×" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">{s.label} 2019→2025</p>
                  <p className="text-lg font-bold" style={{ color: "#31C0DA" }}>{s.mult}</p>
                  <p className="text-[10px] text-white/50">{s.old} → {s.now}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Col 1: Instruments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3"
          >
            <h4 className="text-[#31C0DA] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign size={14} /> Instrumentos Principais
            </h4>
            {INSTRUMENTS.map((inst, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: inst.color }} />
                <div>
                  <p className="text-white font-semibold text-sm">{inst.label}</p>
                  <p className="font-bold text-xs" style={{ color: inst.color }}>{inst.rate}</p>
                  <p className="text-white/40 text-[10px]">{inst.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Col 2: 6 Missões NIB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            <h4 className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Building2 size={14} /> 6 Missões Nova Indústria Brasil
            </h4>
            <div className="space-y-2">
              {MISSIONS.map((m, i) => (
                <div key={i} className="flex items-center gap-2 bg-amber-400/5 border border-amber-400/15 rounded-lg px-3 py-2">
                  <span className="text-amber-400 font-bold text-xs flex-shrink-0">M{i + 1}</span>
                  <span className="text-white/80 text-xs">{m}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-2 text-[10px] text-white/40 border border-white/5 leading-relaxed">
              Finep atua alinhada às diretrizes da <span className="text-white/60">Nova Indústria Brasil</span> e ao <span className="text-white/60">FNDCT descontingenciado</span> (Lei 14.577/23).
            </div>
          </motion.div>

          {/* Col 3: Chamadas abertas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp size={14} /> Chamadas Abertas Agora
            </h4>
            {[
              { name: "Subvenção Regional (N/NE/CO)", value: "R$ 300MM", deadline: "07/04/2026", hot: false },
              { name: "Desafio Trator Agric. Familiar", value: "R$ 60MM", deadline: "03/03/2026", hot: true },
              { name: "Finep Mais Inovação – Rodada 2", value: "R$ 3,3Bi", deadline: "Fluxo Contínuo", hot: false },
              { name: "PROINFRA 2025 Expansão (ICTs)", value: "R$ 500MM", deadline: "27/03/2026", hot: false },
              { name: "FIP Startup Conexões (TRL7+)", value: "R$ 80MM", deadline: "2026", hot: false },
            ].map((c, i) => (
              <div key={i} className={`rounded-xl px-3 py-2 border ${c.hot ? "bg-red-400/10 border-red-400/30" : "bg-white/[0.03] border-white/8"}`}>
                <div className="flex justify-between items-start gap-2">
                  <p className="text-white/80 text-xs leading-snug">{c.name}</p>
                  <span className="text-[#31C0DA] font-bold text-xs flex-shrink-0">{c.value}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <AlertCircle size={10} className={c.hot ? "text-red-400" : "text-white/30"} />
                  <span className={`text-[10px] ${c.hot ? "text-red-400 font-bold" : "text-white/30"}`}>{c.deadline}</span>
                </div>
              </div>
            ))}

            <a
              href="https://finep.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-[#31C0DA]/60 hover:text-[#31C0DA] transition-colors"
            >
              finep.gov.br <ArrowUpRight size={10} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}