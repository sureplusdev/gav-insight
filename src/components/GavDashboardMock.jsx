import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  RotateCw,
  Search,
  TrendingUp,
} from "lucide-react";

const mockStartups = [
  {
    id: "1",
    name: "SolarTech X",
    tier: "A",
    verticalMacro: "Energia",
    status: "CAPTURA",
    endvBase: 3200000,
    endvAjustado: 4200000,
    readiness: 85,
    gates: { g1: "PASS", g2: "PASS", g3: "CONDITIONAL" },
    dims: { d1: 92, d2: 88, d3: 75, d4: 65, d5: 58, d6: 82 },
    top2: ["Grant N2", "Série A"],
  },
  {
    id: "2",
    name: "NanoBio S.A.",
    tier: "B",
    verticalMacro: "Saúde",
    status: "CONDICIONAL",
    endvBase: 1200000,
    endvAjustado: 1800000,
    readiness: 62,
    gates: { g1: "PASS", g2: "CONDITIONAL", g3: "CONDITIONAL" },
    dims: { d1: 72, d2: 65, d3: 58, d4: 48, d5: 42, d6: 60 },
    top2: ["Crédito", "Grant N1"],
  },
  {
    id: "3",
    name: "DataGov AI",
    tier: "B",
    verticalMacro: "GovTech",
    status: "PREPARO",
    endvBase: 600000,
    endvAjustado: 900000,
    readiness: 31,
    gates: { g1: "CONDITIONAL", g2: "CONDITIONAL", g3: "BLOCKED" },
    dims: { d1: 48, d2: 52, d3: 45, d4: 35, d5: 28, d6: 42 },
    top2: ["Grant N1", "Equity"],
  },
  {
    id: "4",
    name: "FlexManuf",
    tier: "C",
    verticalMacro: "Manufatura",
    status: "PREPARO",
    endvBase: 200000,
    endvAjustado: 300000,
    readiness: 15,
    gates: { g1: "BLOCKED", g2: "BLOCKED", g3: "BLOCKED" },
    dims: { d1: 32, d2: 35, d3: 28, d4: 22, d5: 18, d6: 30 },
    top2: ["Crédito", "CPSI"],
  },
  {
    id: "5",
    name: "AgroFlow",
    tier: "D",
    verticalMacro: "Agri",
    status: "PREPARO",
    endvBase: 0,
    endvAjustado: 0,
    readiness: 0,
    gates: { g1: "BLOCKED", g2: "BLOCKED", g3: "BLOCKED" },
    dims: { d1: 15, d2: 20, d3: 10, d4: 8, d5: 5, d6: 12 },
    top2: [],
  },
];

export default function GavDashboardMock() {
  const [q, setQ] = useState("");
  const [tier, setTier] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [vertical, setVertical] = useState("ALL");
  const [onlyTop2, setOnlyTop2] = useState(false);
  const [selected, setSelected] = useState(null);

  const resetDemo = () => {
    setQ("");
    setTier("ALL");
    setStatus("ALL");
    setVertical("ALL");
    setOnlyTop2(false);
    setSelected(null);
  };

  const verticals = useMemo(() => {
    const set = new Set(mockStartups.map((s) => s.verticalMacro));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let result = mockStartups;

    if (q) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(q.toLowerCase())
      );
    }

    if (tier !== "ALL") {
      result = result.filter((s) => s.tier === tier);
    }

    if (status !== "ALL") {
      result = result.filter((s) => s.status === status);
    }

    if (vertical !== "ALL") {
      result = result.filter((s) => s.verticalMacro === vertical);
    }

    if (onlyTop2) {
      result = result.filter((s) => s.top2.length > 0);
    }

    return result.sort((a, b) => b.endvAjustado - a.endvAjustado);
  }, [q, tier, status, vertical, onlyTop2]);

  const kpis = useMemo(() => ({
    totalEndv: filtered.reduce((sum, s) => sum + s.endvAjustado, 0),
    avgReadiness: filtered.length > 0 ? Math.round(
      filtered.reduce((sum, s) => sum + s.readiness, 0) / filtered.length
    ) : 0,
    captura: filtered.filter((s) => s.status === "CAPTURA").length,
    condicional: filtered.filter((s) => s.status === "CONDICIONAL").length,
  }), [filtered]);

  return (
    <div className="min-h-[720px] w-full rounded-3xl overflow-hidden" 
         style={{ backgroundColor: "#193A62", color: "white" }}>

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-8 pt-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard GAV</h2>
          <p className="text-sm mt-1" style={{ color: "#31C0DA" }}>
            ENDV em 12 meses • Base vs Ajustado • Top2 • Gates G1–G3
          </p>
        </div>

        <Button 
          onClick={resetDemo}
          className="w-full sm:w-auto text-white font-semibold"
          style={{ backgroundColor: "#31C0DA" }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#2C8FAE"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#31C0DA"}
        >
          <RotateCw className="mr-2 h-4 w-4" />
          Reset Demo
        </Button>
      </div>

      {/* FILTERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-white/40" />
          <Input
            placeholder="Buscar startup..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
          />
        </div>

        <Select value={tier} onValueChange={setTier}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos</SelectItem>
            <SelectItem value="A">Tier A</SelectItem>
            <SelectItem value="B">Tier B</SelectItem>
            <SelectItem value="C">Tier C</SelectItem>
            <SelectItem value="D">Tier D</SelectItem>
          </SelectContent>
        </Select>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos</SelectItem>
            <SelectItem value="CAPTURA">Captura</SelectItem>
            <SelectItem value="CONDICIONAL">Condicional</SelectItem>
            <SelectItem value="PREPARO">Preparo</SelectItem>
          </SelectContent>
        </Select>

        <Select value={vertical} onValueChange={setVertical}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Vertical" />
          </SelectTrigger>
          <SelectContent>
            {verticals.map((v) => (
              <SelectItem key={v} value={v}>
                {v === "ALL" ? "Todos" : v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10">
          <span className="text-xs text-white/60">Top2</span>
          <Switch checked={onlyTop2} onCheckedChange={setOnlyTop2} />
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 py-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-white/70">ENDV Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#31C0DA" }}>
              R$ {(kpis.totalEndv / 1000000).toFixed(1)}M
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-white/70">Readiness Méd</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#31C0DA" }}>
              {kpis.avgReadiness}%
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-white/70">Captura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#31C0DA" }}>
              {kpis.captura}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-white/70">Condicional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#31C0DA" }}>
              {kpis.condicional}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RANKING TABLE */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5" style={{ color: "#31C0DA" }} />
          <h3 className="text-lg font-semibold">Ranking por ENDV</h3>
        </div>

        <div className="space-y-2">
          {filtered.length === 0 ? (
            <p className="text-white/50 text-sm">Nenhuma startup encontrada</p>
          ) : (
            filtered.map((startup, idx) => (
              <Dialog key={startup.id}>
                <DialogTrigger asChild>
                  <div
                    onClick={() => setSelected(startup)}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/30 cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 text-xs font-mono min-w-6">#{idx + 1}</span>
                        <span className="font-medium">{startup.name}</span>
                        <Badge variant="outline" className="text-xs border-white/20 text-white/70">
                          {startup.tier}
                        </Badge>
                      </div>
                      <span className="font-bold" style={{ color: "#31C0DA" }}>
                        R$ {(startup.endvAjustado / 1000000).toFixed(1)}M
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <Progress
                          value={startup.readiness}
                          className="h-1.5"
                        />
                      </div>
                      <span className="text-white/40 text-xs min-w-10 text-right">
                        {startup.readiness}%
                      </span>
                    </div>
                  </div>
                </DialogTrigger>

                {selected && selected.id === startup.id && (
                  <DialogContent className="max-w-2xl border-white/10" style={{ backgroundColor: "#F8FAFB" }}>
                    <DialogHeader>
                      <DialogTitle className="text-xl text-gray-900">{startup.name} — Detalhes</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      {/* ENDV Comparison */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded bg-gray-100">
                          <p className="text-gray-600 text-xs mb-1">Base</p>
                          <p className="font-bold text-lg" style={{ color: "#31C0DA" }}>
                            R$ {(startup.endvBase / 1000000).toFixed(1)}M
                          </p>
                        </div>
                        <div className="p-3 rounded bg-gray-100">
                          <p className="text-gray-600 text-xs mb-1">Ajustado</p>
                          <p className="font-bold text-lg" style={{ color: "#31C0DA" }}>
                            R$ {(startup.endvAjustado / 1000000).toFixed(1)}M
                          </p>
                        </div>
                      </div>

                      {/* Gates */}
                      <div>
                        <p className="text-gray-700 text-xs font-semibold mb-2">Gates</p>
                        <div className="flex gap-2 flex-wrap">
                          {Object.entries(startup.gates).map(([k, v]) => (
                            <Badge
                              key={k}
                              variant="outline"
                              className={`text-xs ${
                                v === "PASS"
                                  ? "bg-green-900/20 text-green-300 border-green-800"
                                  : v === "CONDITIONAL"
                                  ? "bg-yellow-900/20 text-yellow-300 border-yellow-800"
                                  : "bg-red-900/20 text-red-300 border-red-800"
                              }`}
                            >
                              {k.toUpperCase()}: {v}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Heatmap D1-D6 */}
                      <div>
                        <p className="text-gray-700 text-xs font-semibold mb-3">
                          Heatmap (D1–D6)
                        </p>
                        <div className="space-y-2">
                          {Object.entries(startup.dims).map(([dim, score]) => (
                            <div key={dim}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-700">{dim.toUpperCase()}</span>
                                <span className="text-gray-500">{score}%</span>
                              </div>
                              <Progress value={score} className="h-1" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top2 */}
                      {startup.top2.length > 0 && (
                        <div>
                          <p className="text-gray-700 text-xs font-semibold mb-2">Top2 Rotas</p>
                          <div className="flex flex-wrap gap-2">
                            {startup.top2.map((route) => (
                              <Badge key={route} style={{ backgroundColor: "rgba(49, 192, 218, 0.2)", color: "#31C0DA" }}>
                                {route}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            ))
          )}
        </div>
      </div>
    </div>
  );
}