import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

type HydroMode = "stevin" | "empuxo" | "vasos";
type PressureView = "manometrica" | "absoluta";

const fluidDensities: Record<string, number> = {
  agua: 1000,
  oleo: 900,
  mercurio: 13600,
  gasolina: 720,
  agua_salgada: 1030,
};

const fluidLabels: Record<string, string> = {
  agua: "Água",
  oleo: "Óleo",
  mercurio: "Mercúrio",
  gasolina: "Gasolina",
  agua_salgada: "Água salgada",
};

const getFluidColor = (tipoFluido: string) => {
  switch (tipoFluido) {
    case "agua":
      return "#3b82f6";
    case "oleo":
      return "#eab308";
    case "mercurio":
      return "#94a3b8";
    case "gasolina":
      return "#f59e0b";
    case "agua_salgada":
      return "#1d4ed8";
    default:
      return "#3b82f6";
  }
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const HydrostaticsSimulator: React.FC = () => {
  const [mode, setMode] = useState<HydroMode>("stevin");
  const [pressureView, setPressureView] = useState<PressureView>("manometrica");

  const [tipoFluido, setTipoFluido] = useState("agua");
  const [gravidade, setGravidade] = useState(9.8);
  const [pressaoAtm, setPressaoAtm] = useState(101325);

  // Stevin
  const [profundidadeA, setProfundidadeA] = useState(3);
  const [profundidadeB, setProfundidadeB] = useState(8);
  const [profundidadeC, setProfundidadeC] = useState(12);

  // Empuxo
  const [volumeCorpo, setVolumeCorpo] = useState(0.02);
  const [densidadeCorpo, setDensidadeCorpo] = useState(800);
  const [fracaoSubmersa, setFracaoSubmersa] = useState(1);

  // Vasos comunicantes
  const [tipoFluido2, setTipoFluido2] = useState("oleo");
  const [alturaEsquerda, setAlturaEsquerda] = useState(1.2);

  const rho = fluidDensities[tipoFluido];
  const rho2 = fluidDensities[tipoFluido2];

  const gaugePressureAtDepth = (h: number) => rho * gravidade * h;
  const absolutePressureAtDepth = (h: number) => pressaoAtm + gaugePressureAtDepth(h);

  const pressaoA = useMemo(() => gaugePressureAtDepth(profundidadeA), [rho, gravidade, profundidadeA]);
  const pressaoB = useMemo(() => gaugePressureAtDepth(profundidadeB), [rho, gravidade, profundidadeB]);
  const pressaoC = useMemo(() => gaugePressureAtDepth(profundidadeC), [rho, gravidade, profundidadeC]);

  const pressaoAbsA = useMemo(() => absolutePressureAtDepth(profundidadeA), [rho, gravidade, pressaoAtm, profundidadeA]);
  const pressaoAbsB = useMemo(() => absolutePressureAtDepth(profundidadeB), [rho, gravidade, pressaoAtm, profundidadeB]);
  const pressaoAbsC = useMemo(() => absolutePressureAtDepth(profundidadeC), [rho, gravidade, pressaoAtm, profundidadeC]);

  const deltaPAB = useMemo(
    () => rho * gravidade * Math.abs(profundidadeB - profundidadeA),
    [rho, gravidade, profundidadeA, profundidadeB]
  );

  const sameDepthAB = Math.abs(profundidadeA - profundidadeB) < 0.05;
  const sameDepthAC = Math.abs(profundidadeA - profundidadeC) < 0.05;
  const sameDepthBC = Math.abs(profundidadeB - profundidadeC) < 0.05;

  const displayedPA = pressureView === "manometrica" ? pressaoA : pressaoAbsA;
  const displayedPB = pressureView === "manometrica" ? pressaoB : pressaoAbsB;
  const displayedPC = pressureView === "manometrica" ? pressaoC : pressaoAbsC;

  // Empuxo
  const volumeSubmerso = useMemo(() => volumeCorpo * fracaoSubmersa, [volumeCorpo, fracaoSubmersa]);

  const empuxo = useMemo(
    () => rho * gravidade * volumeSubmerso,
    [rho, gravidade, volumeSubmerso]
  );

  const massaCorpo = useMemo(
    () => densidadeCorpo * volumeCorpo,
    [densidadeCorpo, volumeCorpo]
  );

  const pesoCorpo = useMemo(
    () => massaCorpo * gravidade,
    [massaCorpo, gravidade]
  );

  const resultanteVertical = useMemo(
    () => empuxo - pesoCorpo,
    [empuxo, pesoCorpo]
  );

  const estadoCorpo = useMemo(() => {
    if (Math.abs(resultanteVertical) < 1e-6) return "Equilíbrio";
    if (resultanteVertical > 0) return "Tende a subir";
    return "Tende a afundar";
  }, [resultanteVertical]);

  const fracaoEquilibrio = useMemo(() => {
    if (rho <= 0) return 0;
    return Math.min(densidadeCorpo / rho, 1);
  }, [densidadeCorpo, rho]);

  // Vasos comunicantes
  const alturaDireita = useMemo(() => {
    if (rho2 <= 0) return 0;
    return (rho / rho2) * alturaEsquerda;
  }, [rho, rho2, alturaEsquerda]);

  const pressaoBaseEsquerda = useMemo(
    () => pressaoAtm + rho * gravidade * alturaEsquerda,
    [pressaoAtm, rho, gravidade, alturaEsquerda]
  );

  const pressaoBaseDireita = useMemo(
    () => pressaoAtm + rho2 * gravidade * alturaDireita,
    [pressaoAtm, rho2, gravidade, alturaDireita]
  );

  const vasosBalanced = Math.abs(pressaoBaseEsquerda - pressaoBaseDireita) < 1;
  const sameFluid = tipoFluido === tipoFluido2;

  const displayedMaxHeight = useMemo(() => {
    return Math.max(alturaEsquerda, alturaDireita, 0.6);
  }, [alturaEsquerda, alturaDireita]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">Hidrostática</h3>
              <p className="mt-1 text-sm text-slate-600">
                Pressão hidrostática, empuxo e vasos comunicantes.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo
                </p>
                <Select value={mode} onValueChange={(value) => setMode(value as HydroMode)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stevin">Pressão hidrostática</SelectItem>
                    <SelectItem value="empuxo">Empuxo</SelectItem>
                    <SelectItem value="vasos">Vasos comunicantes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Fluido principal
                </p>
                <Select value={tipoFluido} onValueChange={setTipoFluido}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agua">Água</SelectItem>
                    <SelectItem value="oleo">Óleo</SelectItem>
                    <SelectItem value="mercurio">Mercúrio</SelectItem>
                    <SelectItem value="gasolina">Gasolina</SelectItem>
                    <SelectItem value="agua_salgada">Água salgada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {mode === "stevin" && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Exibir pressão
                  </p>
                  <Select
                    value={pressureView}
                    onValueChange={(value) => setPressureView(value as PressureView)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manometrica">Manométrica</SelectItem>
                      <SelectItem value="absoluta">Absoluta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <ControlRow
                label="Gravidade"
                symbol="g"
                value={formatUnit(gravidade, "m/s²")}
              >
                <Slider
                  value={[gravidade]}
                  onValueChange={(value) => setGravidade(value[0])}
                  min={1.6}
                  max={24.8}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Pressão atmosférica"
                symbol="P₀"
                value={formatUnit(pressaoAtm, "Pa")}
              >
                <Slider
                  value={[pressaoAtm]}
                  onValueChange={(value) => setPressaoAtm(value[0])}
                  min={0}
                  max={200000}
                  step={1000}
                  className="w-full"
                />
              </ControlRow>

              {mode === "stevin" && (
                <>
                  <ControlRow
                    label="Profundidade A"
                    symbol="h_A"
                    value={formatUnit(profundidadeA, "m")}
                  >
                    <Slider
                      value={[profundidadeA]}
                      onValueChange={(value) => setProfundidadeA(value[0])}
                      min={0}
                      max={20}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Profundidade B"
                    symbol="h_B"
                    value={formatUnit(profundidadeB, "m")}
                  >
                    <Slider
                      value={[profundidadeB]}
                      onValueChange={(value) => setProfundidadeB(value[0])}
                      min={0}
                      max={20}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Profundidade C"
                    symbol="h_C"
                    value={formatUnit(profundidadeC, "m")}
                  >
                    <Slider
                      value={[profundidadeC]}
                      onValueChange={(value) => setProfundidadeC(value[0])}
                      min={0}
                      max={20}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {mode === "empuxo" && (
                <>
                  <ControlRow
                    label="Volume do corpo"
                    symbol="V"
                    value={formatUnit(volumeCorpo, "m³")}
                  >
                    <Slider
                      value={[volumeCorpo]}
                      onValueChange={(value) => setVolumeCorpo(value[0])}
                      min={0.005}
                      max={0.08}
                      step={0.001}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Densidade do corpo"
                    symbol="ρ_c"
                    value={formatUnit(densidadeCorpo, "kg/m³")}
                  >
                    <Slider
                      value={[densidadeCorpo]}
                      onValueChange={(value) => setDensidadeCorpo(value[0])}
                      min={100}
                      max={15000}
                      step={50}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Fração submersa"
                    symbol="f"
                    value={`${formatNumber(fracaoSubmersa * 100)} %`}
                  >
                    <Slider
                      value={[fracaoSubmersa]}
                      onValueChange={(value) => setFracaoSubmersa(value[0])}
                      min={0}
                      max={1}
                      step={0.01}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {mode === "vasos" && (
                <>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                      Fluido da coluna direita
                    </p>
                    <Select value={tipoFluido2} onValueChange={setTipoFluido2}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agua">Água</SelectItem>
                        <SelectItem value="oleo">Óleo</SelectItem>
                        <SelectItem value="mercurio">Mercúrio</SelectItem>
                        <SelectItem value="gasolina">Gasolina</SelectItem>
                        <SelectItem value="agua_salgada">Água salgada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <ControlRow
                    label="Altura da coluna esquerda"
                    symbol="h₁"
                    value={formatUnit(alturaEsquerda, "m")}
                  >
                    <Slider
                      value={[alturaEsquerda]}
                      onValueChange={(value) => setAlturaEsquerda(value[0])}
                      min={0.2}
                      max={3}
                      step={0.05}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Resultados Principais
              </h4>
            </div>

            <div className="space-y-3 p-5">
              {mode === "stevin" && (
                <>
                  <MetricCard label={<>Pressão em A</>} value={formatUnit(displayedPA, "Pa")} />
                  <MetricCard label={<>Pressão em B</>} value={formatUnit(displayedPB, "Pa")} />
                  <MetricCard label={<>Pressão em C</>} value={formatUnit(displayedPC, "Pa")} />
                  <MetricCard
                    label={<>ΔP entre A e B</>}
                    value={formatUnit(deltaPAB, "Pa")}
                    valueClassName="text-blue-700"
                  />
                  <MetricCard
                    label={<>Observação</>}
                    value={
                      sameDepthAB || sameDepthAC || sameDepthBC
                        ? "Pontos na mesma profundidade têm a mesma pressão."
                        : "Pontos mais profundos têm maior pressão."
                    }
                    valueClassName="text-slate-900"
                  />
                </>
              )}

              {mode === "empuxo" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Empuxo <MathFormula inline formula={String.raw`E`} />
                      </>
                    }
                    value={formatUnit(empuxo, "N")}
                    valueClassName="text-blue-700"
                  />
                  <MetricCard
                    label={
                      <>
                        Peso <MathFormula inline formula={String.raw`P`} />
                      </>
                    }
                    value={formatUnit(pesoCorpo, "N")}
                    valueClassName="text-red-700"
                  />
                  <MetricCard
                    label={<>Resultante vertical</>}
                    value={formatUnit(resultanteVertical, "N")}
                  />
                  <MetricCard
                    label={<>Estado</>}
                    value={estadoCorpo}
                    valueClassName={
                      estadoCorpo === "Equilíbrio"
                        ? "text-green-700"
                        : resultanteVertical > 0
                        ? "text-blue-700"
                        : "text-red-700"
                    }
                  />
                  <MetricCard
                    label={<>Fração em equilíbrio</>}
                    value={`${formatNumber(fracaoEquilibrio * 100, 1)} %`}
                  />
                </>
              )}

              {mode === "vasos" && (
                <>
                  <MetricCard
                    label={<>Altura da coluna direita</>}
                    value={formatUnit(alturaDireita, "m")}
                    valueClassName="text-blue-700"
                  />
                  <MetricCard
                    label={<>Pressão na base esquerda</>}
                    value={formatUnit(pressaoBaseEsquerda, "Pa")}
                  />
                  <MetricCard
                    label={<>Pressão na base direita</>}
                    value={formatUnit(pressaoBaseDireita, "Pa")}
                  />
                  <MetricCard
                    label={<>Estado</>}
                    value={vasosBalanced ? "Equilíbrio hidrostático" : "Desequilíbrio"}
                    valueClassName={vasosBalanced ? "text-green-700" : "text-red-700"}
                  />
                  <MetricCard
                    label={<>Leitura física</>}
                    value={
                      sameFluid
                        ? "Mesmo fluido: as alturas tendem a ser iguais."
                        : "Fluido mais denso exige coluna menor para equilibrar."
                    }
                  />
                </>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">Simulação</h4>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="overflow-x-auto">
                  {mode === "stevin" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <linearGradient id="fluidGradientStevinNew" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={getFluidColor(tipoFluido)} stopOpacity="0.30" />
                          <stop offset="100%" stopColor={getFluidColor(tipoFluido)} stopOpacity="0.95" />
                        </linearGradient>
                      </defs>

                      <rect x="180" y="40" width="260" height="320" fill="none" stroke="#1e293b" strokeWidth="4" />
                      <rect x="182" y="70" width="256" height="288" fill="url(#fluidGradientStevinNew)" />

                      <path
                        d="M 182 70 Q 250 60, 310 70 T 438 70"
                        fill="none"
                        stroke={getFluidColor(tipoFluido)}
                        strokeWidth="3"
                      />

                      <PressureScale
                        x={470}
                        y={70}
                        height={288}
                        color={getFluidColor(tipoFluido)}
                      />

                      <Ruler />

                      <PressurePoint
                        x={310}
                        y={70 + (profundidadeA / 20) * 288}
                        color="#ef4444"
                        label="A"
                      />
                      <PressurePoint
                        x={310}
                        y={70 + (profundidadeB / 20) * 288}
                        color="#3b82f6"
                        label="B"
                      />
                      <PressurePoint
                        x={310}
                        y={70 + (profundidadeC / 20) * 288}
                        color="#10b981"
                        label="C"
                      />

                      <InfoBox
                        x={560}
                        y={60}
                        width={320}
                        lines={[
                          `Fluido: ${fluidLabels[tipoFluido]} (ρ = ${formatNumber(rho)} kg/m³)`,
                          `${pressureView === "manometrica" ? "P manométrica" : "P absoluta"}`,
                          `P_A = ${formatNumber(displayedPA)} Pa`,
                          `P_B = ${formatNumber(displayedPB)} Pa`,
                          `P_C = ${formatNumber(displayedPC)} Pa`,
                          `ΔP_AB = ${formatNumber(deltaPAB)} Pa`,
                        ]}
                      />
                    </svg>
                  )}

                  {mode === "empuxo" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <rect x="180" y="40" width="280" height="320" fill="none" stroke="#1e293b" strokeWidth="4" />
                      <rect x="182" y="90" width="276" height="268" fill={getFluidColor(tipoFluido)} opacity="0.5" />
                      <path
                        d="M 182 90 Q 250 80, 320 90 T 458 90"
                        fill="none"
                        stroke={getFluidColor(tipoFluido)}
                        strokeWidth="3"
                      />

                      {(() => {
                        const objHeight = 120;
                        const objWidth = 90;
                        const submergedHeight = objHeight * fracaoSubmersa;
                        const topY = 160;
                        const x = 280;
                        const upward = Math.min(empuxo * 1.1, 110);
                        const downward = Math.min(pesoCorpo * 0.9, 110);

                        return (
                          <>
                            <rect
                              x={x}
                              y={topY}
                              width={objWidth}
                              height={objHeight}
                              fill="#94a3b8"
                              stroke="#334155"
                              strokeWidth="3"
                              rx="10"
                            />
                            <rect
                              x={x}
                              y={topY + objHeight - submergedHeight}
                              width={objWidth}
                              height={submergedHeight}
                              fill="#3b82f6"
                              opacity="0.25"
                              rx="10"
                            />

                            <line
                              x1={x + objWidth / 2}
                              y1={topY + objHeight / 2}
                              x2={x + objWidth / 2}
                              y2={topY + objHeight / 2 - upward}
                              stroke="#2563eb"
                              strokeWidth="4"
                            />
                            <polygon
                              points={`${x + objWidth / 2},${topY + objHeight / 2 - upward - 10} ${x + objWidth / 2 - 8},${topY + objHeight / 2 - upward + 6} ${x + objWidth / 2 + 8},${topY + objHeight / 2 - upward + 6}`}
                              fill="#2563eb"
                            />

                            <line
                              x1={x + objWidth / 2 + 25}
                              y1={topY + objHeight / 2}
                              x2={x + objWidth / 2 + 25}
                              y2={topY + objHeight / 2 + downward}
                              stroke="#ef4444"
                              strokeWidth="4"
                            />
                            <polygon
                              points={`${x + objWidth / 2 + 25},${topY + objHeight / 2 + downward + 10} ${x + objWidth / 2 + 17},${topY + objHeight / 2 + downward - 6} ${x + objWidth / 2 + 33},${topY + objHeight / 2 + downward - 6}`}
                              fill="#ef4444"
                            />

                            <text
                              x={x + objWidth + 26}
                              y={topY + 25}
                              fontSize="13"
                              fontWeight="700"
                              fill="#0f172a"
                            >
                              Corpo
                            </text>
                            <text
                              x={x + objWidth + 26}
                              y={topY + 48}
                              fontSize="12"
                              fill="#2563eb"
                            >
                              E = {formatNumber(empuxo)} N
                            </text>
                            <text
                              x={x + objWidth + 26}
                              y={topY + 68}
                              fontSize="12"
                              fill="#dc2626"
                            >
                              P = {formatNumber(pesoCorpo)} N
                            </text>
                          </>
                        );
                      })()}

                      <InfoBox
                        x={560}
                        y={80}
                        width={300}
                        lines={[
                          `ρ fluido = ${formatNumber(rho)} kg/m³`,
                          `ρ corpo = ${formatNumber(densidadeCorpo)} kg/m³`,
                          `V = ${formatNumber(volumeCorpo, 4)} m³`,
                          `Vsub = ${formatNumber(volumeSubmerso, 4)} m³`,
                          `E = ${formatNumber(empuxo)} N`,
                          `P = ${formatNumber(pesoCorpo)} N`,
                          `Estado: ${estadoCorpo}`,
                        ]}
                      />
                    </svg>
                  )}

                  {mode === "vasos" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <path
                        d="M 220 60 L 220 320 Q 220 360 260 360 L 500 360 Q 540 360 540 320 L 540 60"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="5"
                      />

                      {(() => {
                        const maxDisplay = clamp(displayedMaxHeight, 0.6, 3);
                        const leftHeightPx = (alturaEsquerda / maxDisplay) * 250;
                        const rightHeightPx = (alturaDireita / maxDisplay) * 250;
                        const leftSurfaceY = 360 - leftHeightPx;
                        const rightSurfaceY = 360 - rightHeightPx;

                        return (
                          <>
                            <rect
                              x="223"
                              y={leftSurfaceY}
                              width="110"
                              height={360 - leftSurfaceY}
                              fill={getFluidColor(tipoFluido)}
                              opacity="0.55"
                            />
                            <rect
                              x="427"
                              y={rightSurfaceY}
                              width="110"
                              height={360 - rightSurfaceY}
                              fill={getFluidColor(tipoFluido2)}
                              opacity="0.55"
                            />

                            <path
                              d={`M 223 ${leftSurfaceY} Q 278 ${leftSurfaceY - 8}, 333 ${leftSurfaceY}`}
                              fill="none"
                              stroke={getFluidColor(tipoFluido)}
                              strokeWidth="3"
                            />
                            <path
                              d={`M 427 ${rightSurfaceY} Q 482 ${rightSurfaceY - 8}, 537 ${rightSurfaceY}`}
                              fill="none"
                              stroke={getFluidColor(tipoFluido2)}
                              strokeWidth="3"
                            />

                            <text x="245" y={leftSurfaceY - 12} fontSize="12" fill="#0f172a" fontWeight="700">
                              h₁ = {formatNumber(alturaEsquerda)} m
                            </text>
                            <text x="445" y={rightSurfaceY - 12} fontSize="12" fill="#0f172a" fontWeight="700">
                              h₂ = {formatNumber(alturaDireita)} m
                            </text>
                          </>
                        );
                      })()}

                      <InfoBox
                        x={610}
                        y={80}
                        width={300}
                        lines={[
                          `Fluido esquerdo: ${fluidLabels[tipoFluido]}`,
                          `Fluido direito: ${fluidLabels[tipoFluido2]}`,
                          `ρ₁ = ${formatNumber(rho)} kg/m³`,
                          `ρ₂ = ${formatNumber(rho2)} kg/m³`,
                          `h₁ = ${formatNumber(alturaEsquerda)} m`,
                          `h₂ = ${formatNumber(alturaDireita)} m`,
                          `Base balanceada: ${vasosBalanced ? "sim" : "não"}`,
                        ]}
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Rápidos
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              {mode === "stevin" && (
                <>
                  <CalcMiniCard
                    title="Ponto A"
                    values={[
                      ["h", formatUnit(profundidadeA, "m")],
                      ["P", formatUnit(displayedPA, "Pa")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Ponto B"
                    values={[
                      ["h", formatUnit(profundidadeB, "m")],
                      ["P", formatUnit(displayedPB, "Pa")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Ponto C"
                    values={[
                      ["h", formatUnit(profundidadeC, "m")],
                      ["P", formatUnit(displayedPC, "Pa")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Comparação"
                    values={[
                      ["ΔP AB", formatUnit(deltaPAB, "Pa")],
                      ["ρ", formatUnit(rho, "kg/m³")],
                    ]}
                  />
                </>
              )}

              {mode === "empuxo" && (
                <>
                  <CalcMiniCard
                    title="Corpo"
                    values={[
                      ["m", formatUnit(massaCorpo, "kg")],
                      ["ρc", formatUnit(densidadeCorpo, "kg/m³")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Submersão"
                    values={[
                      ["V", formatUnit(volumeCorpo, "m³")],
                      ["Vsub", formatUnit(volumeSubmerso, "m³")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Forças"
                    values={[
                      ["E", formatUnit(empuxo, "N")],
                      ["P", formatUnit(pesoCorpo, "N")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Estado"
                    values={[
                      ["Resultante", formatUnit(resultanteVertical, "N")],
                      ["Situação", estadoCorpo],
                    ]}
                  />
                </>
              )}

              {mode === "vasos" && (
                <>
                  <CalcMiniCard
                    title="Fluido esquerdo"
                    values={[
                      ["ρ₁", formatUnit(rho, "kg/m³")],
                      ["h₁", formatUnit(alturaEsquerda, "m")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Fluido direito"
                    values={[
                      ["ρ₂", formatUnit(rho2, "kg/m³")],
                      ["h₂", formatUnit(alturaDireita, "m")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Base"
                    values={[
                      ["P esq", formatUnit(pressaoBaseEsquerda, "Pa")],
                      ["P dir", formatUnit(pressaoBaseDireita, "Pa")],
                    ]}
                  />
                  <CalcMiniCard
                    title="Equilíbrio"
                    values={[
                      ["Estado", vasosBalanced ? "Balanceado" : "Não balanceado"],
                      ["Mesmo fluido", sameFluid ? "Sim" : "Não"],
                    ]}
                  />
                </>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Detalhados
              </h4>
            </div>

            <div className="space-y-5 p-5">
              {mode === "stevin" && (
                <>
                  <CalcSection
                    title="Lei de Stevin"
                    formulas={[
                      String.raw`P = \rho g h`,
                      String.raw`P_A = ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(profundidadeA)} = ${formatNumber(pressaoA)} \,\text{Pa}`,
                      String.raw`P_B = ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(profundidadeB)} = ${formatNumber(pressaoB)} \,\text{Pa}`,
                      String.raw`P_C = ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(profundidadeC)} = ${formatNumber(pressaoC)} \,\text{Pa}`,
                    ]}
                  />

                  <CalcSection
                    title="Pressão absoluta"
                    formulas={[
                      String.raw`P_{abs} = P_0 + \rho g h`,
                      String.raw`P_{abs,A} = ${formatNumber(pressaoAtm)} + ${formatNumber(pressaoA)} = ${formatNumber(pressaoAbsA)} \,\text{Pa}`,
                      String.raw`P_{abs,B} = ${formatNumber(pressaoAtm)} + ${formatNumber(pressaoB)} = ${formatNumber(pressaoAbsB)} \,\text{Pa}`,
                      String.raw`P_{abs,C} = ${formatNumber(pressaoAtm)} + ${formatNumber(pressaoC)} = ${formatNumber(pressaoAbsC)} \,\text{Pa}`,
                    ]}
                  />

                  <CalcSection
                    title="Diferença de pressão"
                    formulas={[
                      String.raw`\Delta P = \rho g \Delta h`,
                      String.raw`\Delta P_{AB} = ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(Math.abs(profundidadeB - profundidadeA))} = ${formatNumber(deltaPAB)} \,\text{Pa}`,
                      sameDepthAB || sameDepthAC || sameDepthBC
                        ? String.raw`\text{Pontos na mesma profundidade possuem a mesma pressão no mesmo fluido.}`
                        : String.raw`\text{Quanto maior a profundidade, maior a pressão hidrostática.}`,
                    ]}
                  />
                </>
              )}

              {mode === "empuxo" && (
                <>
                  <CalcSection
                    title="Empuxo"
                    formulas={[
                      String.raw`E = \rho g V_{sub}`,
                      String.raw`E = ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(volumeSubmerso, 4)} = ${formatNumber(empuxo)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Peso do corpo"
                    formulas={[
                      String.raw`m = \rho_c V = ${formatNumber(densidadeCorpo)} \cdot ${formatNumber(volumeCorpo, 4)} = ${formatNumber(massaCorpo)} \,\text{kg}`,
                      String.raw`P = mg = ${formatNumber(massaCorpo)} \cdot ${formatNumber(gravidade)} = ${formatNumber(pesoCorpo)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Condição de flutuação"
                    formulas={[
                      String.raw`R_y = E - P = ${formatNumber(empuxo)} - ${formatNumber(pesoCorpo)} = ${formatNumber(resultanteVertical)} \,\text{N}`,
                      String.raw`\frac{V_{sub}}{V} = \frac{\rho_c}{\rho_f} = \frac{${formatNumber(densidadeCorpo)}}{${formatNumber(rho)}} = ${formatNumber(fracaoEquilibrio, 3)}`,
                    ]}
                  />
                </>
              )}

              {mode === "vasos" && (
                <>
                  <CalcSection
                    title="Equilíbrio hidrostático"
                    formulas={[
                      String.raw`P_{\text{base,esq}} = P_0 + \rho_1 g h_1`,
                      String.raw`P_{\text{base,dir}} = P_0 + \rho_2 g h_2`,
                      String.raw`${formatNumber(pressaoAtm)} + ${formatNumber(rho)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(alturaEsquerda)} = ${formatNumber(pressaoBaseEsquerda)} \,\text{Pa}`,
                      String.raw`${formatNumber(pressaoAtm)} + ${formatNumber(rho2)} \cdot ${formatNumber(gravidade)} \cdot ${formatNumber(alturaDireita)} = ${formatNumber(pressaoBaseDireita)} \,\text{Pa}`,
                    ]}
                  />

                  <CalcSection
                    title="Relação entre alturas"
                    formulas={[
                      String.raw`\rho_1 g h_1 = \rho_2 g h_2`,
                      String.raw`h_2 = \frac{\rho_1}{\rho_2} h_1 = \frac{${formatNumber(rho)}}{${formatNumber(rho2)}} \cdot ${formatNumber(alturaEsquerda)} = ${formatNumber(alturaDireita)} \,\text{m}`,
                      sameFluid
                        ? String.raw`\text{Como } \rho_1 = \rho_2,\ \text{as alturas tendem a ser iguais.}`
                        : String.raw`\text{O fluido mais denso fica com coluna menor para equilibrar a base.}`,
                    ]}
                  />
                </>
              )}
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAStaticsTheory.title}
        introduction={ITAStaticsTheory.introduction}
        sections={ITAStaticsTheory.sections}
      />
    </div>
  );
};

function ControlRow({
  label,
  symbol,
  value,
  children,
}: {
  label: string;
  symbol: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">
          {label} <span className="text-slate-500">({symbol})</span>
        </label>
        <span className="text-sm font-bold text-slate-900">{value}</span>
      </div>
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  valueClassName = "text-slate-900",
}: {
  label: React.ReactNode;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-lg font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}

function CalcMiniCard({
  title,
  values,
}: {
  title: string;
  values: [string, string][];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-bold text-slate-800">{title}</p>
      <div className="space-y-2">
        {values.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-slate-600">{label}</span>
            <span className="text-sm font-bold text-slate-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalcSection({
  title,
  formulas,
}: {
  title: string;
  formulas: string[];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-semibold text-slate-700">{title}</p>
      <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
        {formulas.map((formula, index) => (
          <MathFormula key={index} formula={formula} />
        ))}
      </div>
    </div>
  );
}

function PressurePoint({
  x,
  y,
  color,
  label,
}: {
  x: number;
  y: number;
  color: string;
  label: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r="7" fill={color} stroke="white" strokeWidth="2" />
      <line x1={x + 10} y1={y} x2={x + 80} y2={y} stroke={color} strokeDasharray="4,4" />
      <text x={x + 88} y={y + 4} fontSize="12" fontWeight="700" fill={color}>
        Ponto {label}
      </text>
    </g>
  );
}

function InfoBox({
  x,
  y,
  width,
  lines,
}: {
  x: number;
  y: number;
  width: number;
  lines: string[];
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={lines.length * 22 + 24} rx="12" fill="white" stroke="#e2e8f0" />
      {lines.map((line, index) => (
        <text
          key={index}
          x={x + 18}
          y={y + 24 + index * 22}
          fontSize="13"
          fill="#0f172a"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Ruler() {
  return (
    <g transform="translate(150, 70)">
      <line x1="0" y1="0" x2="0" y2="288" stroke="#64748b" strokeWidth="2" />
      {[0, 5, 10, 15, 20].map((h) => {
        const y = (h / 20) * 288;
        return (
          <g key={h} transform={`translate(0, ${y})`}>
            <line x1="-8" y1="0" x2="0" y2="0" stroke="#64748b" strokeWidth="2" />
            <text x="-12" y="4" textAnchor="end" fontSize="11" fill="#64748b">
              {h} m
            </text>
          </g>
        );
      })}
    </g>
  );
}

function PressureScale({
  x,
  y,
  height,
  color,
}: {
  x: number;
  y: number;
  height: number;
  color: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={28} height={height} rx="6" fill={color} opacity="0.15" stroke="#cbd5e1" />
      <rect x={x} y={y} width={28} height={height} rx="6" fill={`url(#none)`} />
      <text x={x - 4} y={y - 10} fontSize="11" fill="#475569" textAnchor="end">
        menor
      </text>
      <text x={x - 4} y={y + height + 16} fontSize="11" fill="#475569" textAnchor="end">
        maior
      </text>
    </g>
  );
}
