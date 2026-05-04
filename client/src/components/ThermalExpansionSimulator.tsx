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
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

type ExpansionMode = "linear" | "surface" | "volume" | "comparison" | "hole";

const materials: Record<
  string,
  {
    label: string;
    alpha: number;
    color: string;
  }
> = {
  aco: {
    label: "Aço",
    alpha: 11e-6,
    color: "#64748b",
  },
  aluminio: {
    label: "Alumínio",
    alpha: 23e-6,
    color: "#94a3b8",
  },
  cobre: {
    label: "Cobre",
    alpha: 17e-6,
    color: "#b45309",
  },
  latao: {
    label: "Latão",
    alpha: 19e-6,
    color: "#ca8a04",
  },
  vidro: {
    label: "Vidro",
    alpha: 9e-6,
    color: "#38bdf8",
  },
  concreto: {
    label: "Concreto",
    alpha: 12e-6,
    color: "#78716c",
  },
};

function getThermalColor(deltaT: number) {
  if (deltaT > 0) return "#dc2626";
  if (deltaT < 0) return "#2563eb";
  return "#475569";
}

function getProcessName(deltaT: number) {
  if (deltaT > 0) return "Dilatação";
  if (deltaT < 0) return "Contração";
  return "Sem variação térmica";
}

export const ThermalExpansionSimulator: React.FC = () => {
  const [mode, setMode] = useState<ExpansionMode>("linear");

  const [material, setMaterial] = useState("aco");
  const [material2, setMaterial2] = useState("aluminio");

  const [initialTemp, setInitialTemp] = useState(20);
  const [finalTemp, setFinalTemp] = useState(80);

  const [l0, setL0] = useState(10);
  const [area0, setArea0] = useState(4);
  const [volume0, setVolume0] = useState(2);

  const [holeDiameter0, setHoleDiameter0] = useState(0.5);
  const [plateSide, setPlateSide] = useState(3);

  const selectedMaterial = materials[material];
  const selectedMaterial2 = materials[material2];

  const alpha = selectedMaterial.alpha;
  const beta = 2 * alpha;
  const gamma = 3 * alpha;

  const alpha2 = selectedMaterial2.alpha;

  const deltaT = useMemo(
    () => finalTemp - initialTemp,
    [finalTemp, initialTemp]
  );

  const processName = useMemo(() => getProcessName(deltaT), [deltaT]);

  const deltaL = useMemo(() => l0 * alpha * deltaT, [l0, alpha, deltaT]);
  const finalLength = useMemo(() => l0 + deltaL, [l0, deltaL]);

  const deltaArea = useMemo(
    () => area0 * beta * deltaT,
    [area0, beta, deltaT]
  );
  const finalArea = useMemo(() => area0 + deltaArea, [area0, deltaArea]);

  const deltaVolume = useMemo(
    () => volume0 * gamma * deltaT,
    [volume0, gamma, deltaT]
  );
  const finalVolume = useMemo(
    () => volume0 + deltaVolume,
    [volume0, deltaVolume]
  );

  const deltaLMaterial1 = useMemo(
    () => l0 * alpha * deltaT,
    [l0, alpha, deltaT]
  );
  const deltaLMaterial2 = useMemo(
    () => l0 * alpha2 * deltaT,
    [l0, alpha2, deltaT]
  );

  const finalLengthMaterial1 = useMemo(
    () => l0 + deltaLMaterial1,
    [l0, deltaLMaterial1]
  );
  const finalLengthMaterial2 = useMemo(
    () => l0 + deltaLMaterial2,
    [l0, deltaLMaterial2]
  );

  const differenceBetweenMaterials = useMemo(
    () => finalLengthMaterial2 - finalLengthMaterial1,
    [finalLengthMaterial1, finalLengthMaterial2]
  );

  const holeArea0 = useMemo(
    () => Math.PI * (holeDiameter0 / 2) ** 2,
    [holeDiameter0]
  );

  const holeDeltaDiameter = useMemo(
    () => holeDiameter0 * alpha * deltaT,
    [holeDiameter0, alpha, deltaT]
  );

  const holeFinalDiameter = useMemo(
    () => holeDiameter0 + holeDeltaDiameter,
    [holeDiameter0, holeDeltaDiameter]
  );

  const holeFinalArea = useMemo(
    () => Math.PI * (holeFinalDiameter / 2) ** 2,
    [holeFinalDiameter]
  );

  const holeDeltaArea = useMemo(
    () => holeFinalArea - holeArea0,
    [holeFinalArea, holeArea0]
  );

  const thermalColor = getThermalColor(deltaT);

  const interpretation = useMemo(() => {
    if (deltaT > 0) {
      if (mode === "hole") {
        return "A placa dilata e o furo também aumenta. Sim, o buraco aumenta. A intuição humana sofre, mas a física vence.";
      }
      return "A temperatura aumentou, então as dimensões aumentam.";
    }

    if (deltaT < 0) {
      if (mode === "hole") {
        return "A placa contrai e o furo também diminui.";
      }
      return "A temperatura diminuiu, então as dimensões diminuem.";
    }

    return "Sem variação de temperatura, não há dilatação nem contração.";
  }, [deltaT, mode]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Dilatação Térmica
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise dilatação linear, superficial, volumétrica e a clássica
                pegadinha da placa com furo.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo
                </p>
                <Select
                  value={mode}
                  onValueChange={(value) => setMode(value as ExpansionMode)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linear">Dilatação linear</SelectItem>
                    <SelectItem value="surface">Dilatação superficial</SelectItem>
                    <SelectItem value="volume">Dilatação volumétrica</SelectItem>
                    <SelectItem value="comparison">Comparação entre materiais</SelectItem>
                    <SelectItem value="hole">Placa com furo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Material
                </p>
                <Select value={material} onValueChange={setMaterial}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(materials).map(([key, item]) => (
                      <SelectItem key={key} value={key}>
                        {item.label} — α = {formatNumber(item.alpha * 1e6)}×10⁻⁶ °C⁻¹
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {mode === "comparison" && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Material comparado
                  </p>
                  <Select value={material2} onValueChange={setMaterial2}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(materials).map(([key, item]) => (
                        <SelectItem key={key} value={key}>
                          {item.label} — α = {formatNumber(item.alpha * 1e6)}×10⁻⁶ °C⁻¹
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <ControlRow
                label="Temperatura inicial"
                symbol="T_i"
                value={formatUnit(initialTemp, "°C")}
              >
                <Slider
                  value={[initialTemp]}
                  onValueChange={(value) => setInitialTemp(value[0])}
                  min={-50}
                  max={300}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Temperatura final"
                symbol="T_f"
                value={formatUnit(finalTemp, "°C")}
              >
                <Slider
                  value={[finalTemp]}
                  onValueChange={(value) => setFinalTemp(value[0])}
                  min={-50}
                  max={300}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              {(mode === "linear" || mode === "comparison") && (
                <ControlRow
                  label="Comprimento inicial"
                  symbol="L_0"
                  value={formatUnit(l0, "m")}
                >
                  <Slider
                    value={[l0]}
                    onValueChange={(value) => setL0(value[0])}
                    min={1}
                    max={30}
                    step={0.5}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "surface" && (
                <ControlRow
                  label="Área inicial"
                  symbol="A_0"
                  value={formatUnit(area0, "m²")}
                >
                  <Slider
                    value={[area0]}
                    onValueChange={(value) => setArea0(value[0])}
                    min={0.5}
                    max={30}
                    step={0.5}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "volume" && (
                <ControlRow
                  label="Volume inicial"
                  symbol="V_0"
                  value={formatUnit(volume0, "m³")}
                >
                  <Slider
                    value={[volume0]}
                    onValueChange={(value) => setVolume0(value[0])}
                    min={0.1}
                    max={20}
                    step={0.1}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "hole" && (
                <>
                  <ControlRow
                    label="Lado da placa"
                    symbol="a"
                    value={formatUnit(plateSide, "m")}
                  >
                    <Slider
                      value={[plateSide]}
                      onValueChange={(value) => setPlateSide(value[0])}
                      min={1}
                      max={8}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Diâmetro inicial do furo"
                    symbol="d_0"
                    value={formatUnit(holeDiameter0, "m")}
                  >
                    <Slider
                      value={[holeDiameter0]}
                      onValueChange={(value) => setHoleDiameter0(value[0])}
                      min={0.1}
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
              <MetricCard
                label={
                  <>
                    Variação de temperatura{" "}
                    <MathFormula inline formula={String.raw`\Delta T`} />
                  </>
                }
                value={formatUnit(deltaT, "°C")}
                valueClassName={thermalColor === "#dc2626" ? "text-red-700" : thermalColor === "#2563eb" ? "text-blue-700" : "text-slate-900"}
              />

              <MetricCard
                label={
                  <>
                    Coeficiente linear{" "}
                    <MathFormula inline formula={String.raw`\alpha`} />
                  </>
                }
                value={`${formatNumber(alpha * 1e6)}×10⁻⁶ °C⁻¹`}
              />

              {mode === "linear" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Dilatação linear{" "}
                        <MathFormula inline formula={String.raw`\Delta L`} />
                      </>
                    }
                    value={formatUnit(deltaL * 1000, "mm")}
                    valueClassName={deltaL >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label={
                      <>
                        Comprimento final{" "}
                        <MathFormula inline formula={String.raw`L`} />
                      </>
                    }
                    value={formatUnit(finalLength, "m")}
                  />
                </>
              )}

              {mode === "surface" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Coeficiente superficial{" "}
                        <MathFormula inline formula={String.raw`\beta`} />
                      </>
                    }
                    value={`${formatNumber(beta * 1e6)}×10⁻⁶ °C⁻¹`}
                  />

                  <MetricCard
                    label={
                      <>
                        Dilatação superficial{" "}
                        <MathFormula inline formula={String.raw`\Delta A`} />
                      </>
                    }
                    value={formatUnit(deltaArea, "m²")}
                    valueClassName={deltaArea >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label={
                      <>
                        Área final <MathFormula inline formula={String.raw`A`} />
                      </>
                    }
                    value={formatUnit(finalArea, "m²")}
                  />
                </>
              )}

              {mode === "volume" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Coeficiente volumétrico{" "}
                        <MathFormula inline formula={String.raw`\gamma`} />
                      </>
                    }
                    value={`${formatNumber(gamma * 1e6)}×10⁻⁶ °C⁻¹`}
                  />

                  <MetricCard
                    label={
                      <>
                        Dilatação volumétrica{" "}
                        <MathFormula inline formula={String.raw`\Delta V`} />
                      </>
                    }
                    value={formatUnit(deltaVolume, "m³")}
                    valueClassName={deltaVolume >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label={
                      <>
                        Volume final{" "}
                        <MathFormula inline formula={String.raw`V`} />
                      </>
                    }
                    value={formatUnit(finalVolume, "m³")}
                  />
                </>
              )}

              {mode === "comparison" && (
                <>
                  <MetricCard
                    label={`${selectedMaterial.label}: ΔL`}
                    value={formatUnit(deltaLMaterial1 * 1000, "mm")}
                  />

                  <MetricCard
                    label={`${selectedMaterial2.label}: ΔL`}
                    value={formatUnit(deltaLMaterial2 * 1000, "mm")}
                  />

                  <MetricCard
                    label="Diferença final"
                    value={formatUnit(differenceBetweenMaterials * 1000, "mm")}
                    valueClassName="text-purple-700"
                  />
                </>
              )}

              {mode === "hole" && (
                <>
                  <MetricCard
                    label="Diâmetro final do furo"
                    value={formatUnit(holeFinalDiameter, "m")}
                    valueClassName={holeDeltaDiameter >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label="Variação do diâmetro"
                    value={formatUnit(holeDeltaDiameter * 1000, "mm")}
                  />

                  <MetricCard
                    label="Variação da área do furo"
                    value={formatUnit(holeDeltaArea, "m²")}
                  />
                </>
              )}

              <MetricCard label="Processo" value={processName} />
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Simulação Visual
              </h4>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                {mode === "linear" && (
                  <LinearExpansionVisual
                    material={selectedMaterial.label}
                    color={selectedMaterial.color}
                    l0={l0}
                    finalLength={finalLength}
                    deltaL={deltaL}
                    thermalColor={thermalColor}
                  />
                )}

                {mode === "surface" && (
                  <SurfaceExpansionVisual
                    material={selectedMaterial.label}
                    color={selectedMaterial.color}
                    area0={area0}
                    finalArea={finalArea}
                    deltaArea={deltaArea}
                    thermalColor={thermalColor}
                  />
                )}

                {mode === "volume" && (
                  <VolumeExpansionVisual
                    material={selectedMaterial.label}
                    color={selectedMaterial.color}
                    volume0={volume0}
                    finalVolume={finalVolume}
                    deltaVolume={deltaVolume}
                    thermalColor={thermalColor}
                  />
                )}

                {mode === "comparison" && (
                  <ComparisonVisual
                    material1={selectedMaterial.label}
                    material2={selectedMaterial2.label}
                    color1={selectedMaterial.color}
                    color2={selectedMaterial2.color}
                    l0={l0}
                    finalLength1={finalLengthMaterial1}
                    finalLength2={finalLengthMaterial2}
                  />
                )}

                {mode === "hole" && (
                  <HoleExpansionVisual
                    material={selectedMaterial.label}
                    color={selectedMaterial.color}
                    plateSide={plateSide}
                    holeDiameter0={holeDiameter0}
                    holeFinalDiameter={holeFinalDiameter}
                    thermalColor={thermalColor}
                  />
                )}

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-800">
                    Interpretação física
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{interpretation}</p>
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
              <CalcMiniCard
                title="Temperaturas"
                values={[
                  ["Ti", formatUnit(initialTemp, "°C")],
                  ["Tf", formatUnit(finalTemp, "°C")],
                  ["ΔT", formatUnit(deltaT, "°C")],
                ]}
              />

              <CalcMiniCard
                title="Material"
                values={[
                  ["Material", selectedMaterial.label],
                  ["α", `${formatNumber(alpha * 1e6)}×10⁻⁶ °C⁻¹`],
                ]}
              />

              {mode === "linear" && (
                <>
                  <CalcMiniCard
                    title="Dimensão"
                    values={[
                      ["L0", formatUnit(l0, "m")],
                      ["L", formatUnit(finalLength, "m")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Resultado"
                    values={[
                      ["ΔL", formatUnit(deltaL, "m")],
                      ["ΔL em mm", formatUnit(deltaL * 1000, "mm")],
                    ]}
                  />
                </>
              )}

              {mode === "surface" && (
                <>
                  <CalcMiniCard
                    title="Área"
                    values={[
                      ["A0", formatUnit(area0, "m²")],
                      ["A", formatUnit(finalArea, "m²")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Resultado"
                    values={[
                      ["β", `${formatNumber(beta * 1e6)}×10⁻⁶ °C⁻¹`],
                      ["ΔA", formatUnit(deltaArea, "m²")],
                    ]}
                  />
                </>
              )}

              {mode === "volume" && (
                <>
                  <CalcMiniCard
                    title="Volume"
                    values={[
                      ["V0", formatUnit(volume0, "m³")],
                      ["V", formatUnit(finalVolume, "m³")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Resultado"
                    values={[
                      ["γ", `${formatNumber(gamma * 1e6)}×10⁻⁶ °C⁻¹`],
                      ["ΔV", formatUnit(deltaVolume, "m³")],
                    ]}
                  />
                </>
              )}

              {mode === "comparison" && (
                <>
                  <CalcMiniCard
                    title={selectedMaterial.label}
                    values={[
                      ["α1", `${formatNumber(alpha * 1e6)}×10⁻⁶`],
                      ["ΔL1", formatUnit(deltaLMaterial1 * 1000, "mm")],
                    ]}
                  />

                  <CalcMiniCard
                    title={selectedMaterial2.label}
                    values={[
                      ["α2", `${formatNumber(alpha2 * 1e6)}×10⁻⁶`],
                      ["ΔL2", formatUnit(deltaLMaterial2 * 1000, "mm")],
                    ]}
                  />
                </>
              )}

              {mode === "hole" && (
                <>
                  <CalcMiniCard
                    title="Furo"
                    values={[
                      ["d0", formatUnit(holeDiameter0, "m")],
                      ["d", formatUnit(holeFinalDiameter, "m")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Área do furo"
                    values={[
                      ["A0", formatUnit(holeArea0, "m²")],
                      ["A", formatUnit(holeFinalArea, "m²")],
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
              <CalcSection
                title="Variação de temperatura"
                formulas={[
                  String.raw`\Delta T = T_f - T_i`,
                  String.raw`\Delta T = ${formatNumber(finalTemp)} - ${formatNumber(initialTemp)} = ${formatNumber(deltaT)}\,^\circ C`,
                ]}
              />

              {mode === "linear" && (
                <>
                  <CalcSection
                    title="Dilatação linear"
                    formulas={[
                      String.raw`\Delta L = L_0\alpha\Delta T`,
                      String.raw`\Delta L = ${formatNumber(l0)}\cdot ${formatNumber(alpha * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(deltaL, 6)}\,\text{m}`,
                      String.raw`L = L_0 + \Delta L = ${formatNumber(l0)} + ${formatNumber(deltaL, 6)} = ${formatNumber(finalLength, 6)}\,\text{m}`,
                    ]}
                  />
                </>
              )}

              {mode === "surface" && (
                <>
                  <CalcSection
                    title="Dilatação superficial"
                    formulas={[
                      String.raw`\beta = 2\alpha`,
                      String.raw`\beta = 2\cdot ${formatNumber(alpha * 1e6)}\times 10^{-6} = ${formatNumber(beta * 1e6)}\times 10^{-6}\,^\circ C^{-1}`,
                      String.raw`\Delta A = A_0\beta\Delta T`,
                      String.raw`\Delta A = ${formatNumber(area0)}\cdot ${formatNumber(beta * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(deltaArea, 6)}\,\text{m}^2`,
                      String.raw`A = A_0 + \Delta A = ${formatNumber(area0)} + ${formatNumber(deltaArea, 6)} = ${formatNumber(finalArea, 6)}\,\text{m}^2`,
                    ]}
                  />
                </>
              )}

              {mode === "volume" && (
                <>
                  <CalcSection
                    title="Dilatação volumétrica"
                    formulas={[
                      String.raw`\gamma = 3\alpha`,
                      String.raw`\gamma = 3\cdot ${formatNumber(alpha * 1e6)}\times 10^{-6} = ${formatNumber(gamma * 1e6)}\times 10^{-6}\,^\circ C^{-1}`,
                      String.raw`\Delta V = V_0\gamma\Delta T`,
                      String.raw`\Delta V = ${formatNumber(volume0)}\cdot ${formatNumber(gamma * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(deltaVolume, 6)}\,\text{m}^3`,
                      String.raw`V = V_0 + \Delta V = ${formatNumber(volume0)} + ${formatNumber(deltaVolume, 6)} = ${formatNumber(finalVolume, 6)}\,\text{m}^3`,
                    ]}
                  />
                </>
              )}

              {mode === "comparison" && (
                <>
                  <CalcSection
                    title="Comparação entre materiais"
                    formulas={[
                      String.raw`\Delta L_1 = L_0\alpha_1\Delta T`,
                      String.raw`\Delta L_1 = ${formatNumber(l0)}\cdot ${formatNumber(alpha * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(deltaLMaterial1, 6)}\,\text{m}`,
                      String.raw`\Delta L_2 = L_0\alpha_2\Delta T`,
                      String.raw`\Delta L_2 = ${formatNumber(l0)}\cdot ${formatNumber(alpha2 * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(deltaLMaterial2, 6)}\,\text{m}`,
                      String.raw`L_2 - L_1 = ${formatNumber(finalLengthMaterial2, 6)} - ${formatNumber(finalLengthMaterial1, 6)} = ${formatNumber(differenceBetweenMaterials, 6)}\,\text{m}`,
                    ]}
                  />
                </>
              )}

              {mode === "hole" && (
                <>
                  <CalcSection
                    title="Placa com furo"
                    formulas={[
                      String.raw`\text{O furo dilata como se fosse feito do mesmo material da placa.}`,
                      String.raw`\Delta d = d_0\alpha\Delta T`,
                      String.raw`\Delta d = ${formatNumber(holeDiameter0)}\cdot ${formatNumber(alpha * 1e6)}\times 10^{-6}\cdot ${formatNumber(deltaT)} = ${formatNumber(holeDeltaDiameter, 6)}\,\text{m}`,
                      String.raw`d = d_0 + \Delta d = ${formatNumber(holeDiameter0)} + ${formatNumber(holeDeltaDiameter, 6)} = ${formatNumber(holeFinalDiameter, 6)}\,\text{m}`,
                    ]}
                  />

                  <CalcSection
                    title="Área do furo"
                    formulas={[
                      String.raw`A_0 = \pi\left(\frac{d_0}{2}\right)^2 = ${formatNumber(holeArea0, 6)}\,\text{m}^2`,
                      String.raw`A = \pi\left(\frac{d}{2}\right)^2 = ${formatNumber(holeFinalArea, 6)}\,\text{m}^2`,
                      String.raw`\Delta A = A - A_0 = ${formatNumber(holeFinalArea, 6)} - ${formatNumber(holeArea0, 6)} = ${formatNumber(holeDeltaArea, 6)}\,\text{m}^2`,
                    ]}
                  />
                </>
              )}

              <CalcSection
                title="Interpretação"
                formulas={[
                  deltaT > 0
                    ? String.raw`\Delta T > 0 \Rightarrow \text{ocorre dilatação.}`
                    : deltaT < 0
                    ? String.raw`\Delta T < 0 \Rightarrow \text{ocorre contração.}`
                    : String.raw`\Delta T = 0 \Rightarrow \text{não há alteração dimensional.}`,
                ]}
              />
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAThermologyTheory.title}
        introduction={ITAThermologyTheory.introduction}
        sections={ITAThermologyTheory.sections}
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

function LinearExpansionVisual({
  material,
  color,
  l0,
  finalLength,
  deltaL,
  thermalColor,
}: {
  material: string;
  color: string;
  l0: number;
  finalLength: number;
  deltaL: number;
  thermalColor: string;
}) {
  const baseWidth = 520;
  const ratio = finalLength / l0;
  const finalWidth = Math.max(120, Math.min(760, baseWidth * ratio));

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="mb-4 text-sm font-bold text-slate-800">
          Barra de {material}
        </p>

        <div className="relative flex h-40 items-center justify-center overflow-x-auto">
          <div
            className="absolute h-10 rounded-lg border border-slate-400 bg-slate-300 opacity-40"
            style={{ width: `${baseWidth}px` }}
          />

          <div
            className="relative flex h-12 items-center justify-center rounded-lg border-2 text-xs font-bold text-white shadow-md transition-all"
            style={{
              width: `${finalWidth}px`,
              backgroundColor: color,
              borderColor: thermalColor,
            }}
          >
            L = {formatNumber(finalLength, 6)} m
          </div>
        </div>

        <p className="text-center text-sm font-bold" style={{ color: thermalColor }}>
          ΔL = {formatNumber(deltaL * 1000, 4)} mm
        </p>
      </div>
    </div>
  );
}

function SurfaceExpansionVisual({
  material,
  color,
  area0,
  finalArea,
  deltaArea,
  thermalColor,
}: {
  material: string;
  color: string;
  area0: number;
  finalArea: number;
  deltaArea: number;
  thermalColor: string;
}) {
  const baseSide = 170;
  const ratio = Math.sqrt(finalArea / area0);
  const finalSide = Math.max(80, Math.min(280, baseSide * ratio));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="mb-4 text-sm font-bold text-slate-800">
        Chapa de {material}
      </p>

      <div className="relative flex h-72 items-center justify-center">
        <div
          className="absolute rounded-xl border border-slate-400 bg-slate-300 opacity-40"
          style={{
            width: `${baseSide}px`,
            height: `${baseSide}px`,
          }}
        />

        <div
          className="relative flex items-center justify-center rounded-xl border-4 font-bold text-white shadow-md transition-all"
          style={{
            width: `${finalSide}px`,
            height: `${finalSide}px`,
            backgroundColor: color,
            borderColor: thermalColor,
          }}
        >
          A = {formatNumber(finalArea, 5)} m²
        </div>
      </div>

      <p className="text-sm font-bold" style={{ color: thermalColor }}>
        ΔA = {formatNumber(deltaArea, 6)} m²
      </p>
    </div>
  );
}

function VolumeExpansionVisual({
  material,
  color,
  volume0,
  finalVolume,
  deltaVolume,
  thermalColor,
}: {
  material: string;
  color: string;
  volume0: number;
  finalVolume: number;
  deltaVolume: number;
  thermalColor: string;
}) {
  const baseSize = 150;
  const ratio = Math.cbrt(finalVolume / volume0);
  const finalSize = Math.max(90, Math.min(240, baseSize * ratio));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="mb-4 text-sm font-bold text-slate-800">
        Corpo volumétrico de {material}
      </p>

      <div className="flex h-72 items-center justify-center">
        <div
          className="relative flex items-center justify-center rounded-2xl border-4 font-bold text-white shadow-xl transition-all"
          style={{
            width: `${finalSize}px`,
            height: `${finalSize}px`,
            backgroundColor: color,
            borderColor: thermalColor,
            transform: "rotateX(10deg) rotateY(-10deg)",
          }}
        >
          V = {formatNumber(finalVolume, 5)} m³
        </div>
      </div>

      <p className="text-sm font-bold" style={{ color: thermalColor }}>
        ΔV = {formatNumber(deltaVolume, 6)} m³
      </p>
    </div>
  );
}

function ComparisonVisual({
  material1,
  material2,
  color1,
  color2,
  l0,
  finalLength1,
  finalLength2,
}: {
  material1: string;
  material2: string;
  color1: string;
  color2: string;
  l0: number;
  finalLength1: number;
  finalLength2: number;
}) {
  const baseWidth = 480;
  const width1 = Math.max(120, Math.min(760, baseWidth * (finalLength1 / l0)));
  const width2 = Math.max(120, Math.min(760, baseWidth * (finalLength2 / l0)));

  return (
    <div className="space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-bold text-slate-800">
        Comparação entre materiais
      </p>

      <div>
        <p className="mb-2 text-sm font-bold text-slate-700">{material1}</p>
        <div
          className="flex h-10 items-center justify-center rounded-lg text-xs font-bold text-white"
          style={{
            width: `${width1}px`,
            backgroundColor: color1,
          }}
        >
          {formatNumber(finalLength1, 6)} m
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold text-slate-700">{material2}</p>
        <div
          className="flex h-10 items-center justify-center rounded-lg text-xs font-bold text-white"
          style={{
            width: `${width2}px`,
            backgroundColor: color2,
          }}
        >
          {formatNumber(finalLength2, 6)} m
        </div>
      </div>
    </div>
  );
}

function HoleExpansionVisual({
  material,
  color,
  plateSide,
  holeDiameter0,
  holeFinalDiameter,
  thermalColor,
}: {
  material: string;
  color: string;
  plateSide: number;
  holeDiameter0: number;
  holeFinalDiameter: number;
  thermalColor: string;
}) {
  const plateSize = 260;
  const holeRatio = holeFinalDiameter / plateSide;
  const holeSize = Math.max(20, Math.min(180, plateSize * holeRatio));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="mb-4 text-sm font-bold text-slate-800">
        Placa de {material} com furo
      </p>

      <div className="flex h-80 items-center justify-center">
        <div
          className="relative flex items-center justify-center rounded-2xl border-4 shadow-md"
          style={{
            width: `${plateSize}px`,
            height: `${plateSize}px`,
            backgroundColor: color,
            borderColor: thermalColor,
          }}
        >
          <div
            className="rounded-full border-4 border-slate-300 bg-white shadow-inner transition-all"
            style={{
              width: `${holeSize}px`,
              height: `${holeSize}px`,
            }}
          />

          <div className="absolute bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700">
            d = {formatNumber(holeFinalDiameter, 5)} m
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600">
        d₀ = {formatNumber(holeDiameter0, 5)} m
      </p>
    </div>
  );
}
