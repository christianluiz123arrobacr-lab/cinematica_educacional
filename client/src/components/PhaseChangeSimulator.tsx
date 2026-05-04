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

type PhaseMode = "latent" | "curve";
type PhaseProcess = "fusao" | "solidificacao" | "vaporizacao" | "condensacao";

const WATER_CONSTANTS = {
  cIce: 2100,
  cWater: 4186,
  cSteam: 2010,
  latentFusion: 334000,
  latentVaporization: 2260000,
};

const phaseProcesses: Record<
  PhaseProcess,
  {
    label: string;
    from: string;
    to: string;
    latentHeat: number;
    sign: 1 | -1;
    plateauTemp: number;
    description: string;
  }
> = {
  fusao: {
    label: "Fusão",
    from: "Sólido",
    to: "Líquido",
    latentHeat: WATER_CONSTANTS.latentFusion,
    sign: 1,
    plateauTemp: 0,
    description: "O corpo absorve calor para passar de sólido para líquido.",
  },
  solidificacao: {
    label: "Solidificação",
    from: "Líquido",
    to: "Sólido",
    latentHeat: WATER_CONSTANTS.latentFusion,
    sign: -1,
    plateauTemp: 0,
    description: "O corpo libera calor para passar de líquido para sólido.",
  },
  vaporizacao: {
    label: "Vaporização",
    from: "Líquido",
    to: "Vapor",
    latentHeat: WATER_CONSTANTS.latentVaporization,
    sign: 1,
    plateauTemp: 100,
    description: "O corpo absorve calor para passar de líquido para vapor.",
  },
  condensacao: {
    label: "Condensação",
    from: "Vapor",
    to: "Líquido",
    latentHeat: WATER_CONSTANTS.latentVaporization,
    sign: -1,
    plateauTemp: 100,
    description: "O corpo libera calor para passar de vapor para líquido.",
  },
};

function getTemperatureColor(temp: number) {
  const clamped = Math.max(-40, Math.min(140, temp));
  const hue = 230 - ((clamped + 40) / 180) * 230;
  return `hsl(${hue}, 90%, 52%)`;
}

function getPhaseByTemperature(temp: number) {
  if (temp < 0) return "Sólido";
  if (temp > 100) return "Vapor";
  return "Líquido";
}

function getSpecificEnthalpy(temp: number) {
  const { cIce, cWater, cSteam, latentFusion, latentVaporization } =
    WATER_CONSTANTS;

  if (temp < 0) {
    return cIce * temp;
  }

  if (temp <= 100) {
    return latentFusion + cWater * temp;
  }

  return latentFusion + cWater * 100 + latentVaporization + cSteam * (temp - 100);
}

function getCurvePoint(temp: number) {
  const minH = getSpecificEnthalpy(-40);
  const maxH = getSpecificEnthalpy(140);
  const h = getSpecificEnthalpy(temp);

  const x = 90 + ((h - minH) / (maxH - minH)) * 760;
  const y = 325 - ((temp + 40) / 180) * 250;

  return {
    x,
    y,
  };
}

function buildThermalSteps(mass: number, initialTemp: number, finalTemp: number) {
  const { cIce, cWater, cSteam, latentFusion, latentVaporization } =
    WATER_CONSTANTS;

  const steps: {
    label: string;
    q: number;
    formula: string;
  }[] = [];

  const addStep = (label: string, q: number, formula: string) => {
    if (Math.abs(q) > 1e-9) {
      steps.push({ label, q, formula });
    }
  };

  if (finalTemp > initialTemp) {
    if (initialTemp < 0) {
      const end = Math.min(finalTemp, 0);
      const q = mass * cIce * (end - initialTemp);
      addStep(
        "Aquecimento do gelo",
        q,
        String.raw`Q = mc_{gelo}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cIce)}\cdot (${formatNumber(end)} - ${formatNumber(initialTemp)}) = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (initialTemp < 0 && finalTemp > 0) {
      const q = mass * latentFusion;
      addStep(
        "Fusão do gelo",
        q,
        String.raw`Q = mL_f = ${formatNumber(mass)}\cdot ${formatNumber(latentFusion)} = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (finalTemp > 0) {
      const start = Math.max(initialTemp, 0);
      const end = Math.min(finalTemp, 100);
      if (end > start) {
        const q = mass * cWater * (end - start);
        addStep(
          "Aquecimento da água líquida",
          q,
          String.raw`Q = mc_{água}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cWater)}\cdot (${formatNumber(end)} - ${formatNumber(start)}) = ${formatNumber(q)}\,\text{J}`
        );
      }
    }

    if (initialTemp < 100 && finalTemp > 100) {
      const q = mass * latentVaporization;
      addStep(
        "Vaporização da água",
        q,
        String.raw`Q = mL_v = ${formatNumber(mass)}\cdot ${formatNumber(latentVaporization)} = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (finalTemp > 100) {
      const start = Math.max(initialTemp, 100);
      const q = mass * cSteam * (finalTemp - start);
      addStep(
        "Aquecimento do vapor",
        q,
        String.raw`Q = mc_{vapor}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cSteam)}\cdot (${formatNumber(finalTemp)} - ${formatNumber(start)}) = ${formatNumber(q)}\,\text{J}`
      );
    }
  }

  if (finalTemp < initialTemp) {
    if (initialTemp > 100) {
      const end = Math.max(finalTemp, 100);
      const q = mass * cSteam * (end - initialTemp);
      addStep(
        "Resfriamento do vapor",
        q,
        String.raw`Q = mc_{vapor}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cSteam)}\cdot (${formatNumber(end)} - ${formatNumber(initialTemp)}) = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (initialTemp > 100 && finalTemp < 100) {
      const q = -mass * latentVaporization;
      addStep(
        "Condensação do vapor",
        q,
        String.raw`Q = -mL_v = -${formatNumber(mass)}\cdot ${formatNumber(latentVaporization)} = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (finalTemp < 100) {
      const start = Math.min(initialTemp, 100);
      const end = Math.max(finalTemp, 0);
      if (end < start) {
        const q = mass * cWater * (end - start);
        addStep(
          "Resfriamento da água líquida",
          q,
          String.raw`Q = mc_{água}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cWater)}\cdot (${formatNumber(end)} - ${formatNumber(start)}) = ${formatNumber(q)}\,\text{J}`
        );
      }
    }

    if (initialTemp > 0 && finalTemp < 0) {
      const q = -mass * latentFusion;
      addStep(
        "Solidificação da água",
        q,
        String.raw`Q = -mL_f = -${formatNumber(mass)}\cdot ${formatNumber(latentFusion)} = ${formatNumber(q)}\,\text{J}`
      );
    }

    if (finalTemp < 0) {
      const start = Math.min(initialTemp, 0);
      const q = mass * cIce * (finalTemp - start);
      addStep(
        "Resfriamento do gelo",
        q,
        String.raw`Q = mc_{gelo}\Delta T = ${formatNumber(mass)}\cdot ${formatNumber(cIce)}\cdot (${formatNumber(finalTemp)} - ${formatNumber(start)}) = ${formatNumber(q)}\,\text{J}`
      );
    }
  }

  return steps;
}

export const PhaseChangeSimulator: React.FC = () => {
  const [mode, setMode] = useState<PhaseMode>("curve");

  const [mass, setMass] = useState(1);
  const [phase, setPhase] = useState<PhaseProcess>("fusao");

  const [initialTemp, setInitialTemp] = useState(-20);
  const [finalTemp, setFinalTemp] = useState(120);

  const selectedProcess = phaseProcesses[phase];

  const latentHeatSigned = useMemo(() => {
    return selectedProcess.sign * mass * selectedProcess.latentHeat;
  }, [mass, selectedProcess]);

  const latentHeatAbs = useMemo(() => Math.abs(latentHeatSigned), [latentHeatSigned]);

  const thermalSteps = useMemo(() => {
    return buildThermalSteps(mass, initialTemp, finalTemp);
  }, [mass, initialTemp, finalTemp]);

  const totalHeat = useMemo(() => {
    return thermalSteps.reduce((acc, step) => acc + step.q, 0);
  }, [thermalSteps]);

  const initialPhase = useMemo(() => getPhaseByTemperature(initialTemp), [initialTemp]);
  const finalPhase = useMemo(() => getPhaseByTemperature(finalTemp), [finalTemp]);

  const initialPoint = useMemo(() => getCurvePoint(initialTemp), [initialTemp]);
  const finalPoint = useMemo(() => getCurvePoint(finalTemp), [finalTemp]);

  const processInterpretation = useMemo(() => {
    if (mode === "latent") {
      return selectedProcess.sign > 0
        ? "Processo endotérmico: o sistema absorve calor."
        : "Processo exotérmico: o sistema libera calor.";
    }

    if (totalHeat > 0) return "O processo total exige fornecimento de calor.";
    if (totalHeat < 0) return "O processo total libera calor para o ambiente.";
    return "Não há troca líquida de calor.";
  }, [mode, selectedProcess, totalHeat]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Mudança de Estado
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise calor latente e curvas de aquecimento da água.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo
                </p>
                <Select value={mode} onValueChange={(value) => setMode(value as PhaseMode)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latent">Calor latente simples</SelectItem>
                    <SelectItem value="curve">Curva de aquecimento/resfriamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow label="Massa" symbol="m" value={formatUnit(mass, "kg")}>
                <Slider
                  value={[mass]}
                  onValueChange={(value) => setMass(value[0])}
                  min={0.1}
                  max={10}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              {mode === "latent" ? (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Processo
                  </p>
                  <Select value={phase} onValueChange={(value) => setPhase(value as PhaseProcess)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fusao">Fusão: sólido para líquido</SelectItem>
                      <SelectItem value="solidificacao">Solidificação: líquido para sólido</SelectItem>
                      <SelectItem value="vaporizacao">Vaporização: líquido para vapor</SelectItem>
                      <SelectItem value="condensacao">Condensação: vapor para líquido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <>
                  <ControlRow
                    label="Temperatura inicial"
                    symbol="T_i"
                    value={formatUnit(initialTemp, "°C")}
                  >
                    <Slider
                      value={[initialTemp]}
                      onValueChange={(value) => setInitialTemp(value[0])}
                      min={-40}
                      max={140}
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
                      min={-40}
                      max={140}
                      step={1}
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
              {mode === "latent" ? (
                <>
                  <MetricCard label="Processo" value={selectedProcess.label} />

                  <MetricCard
                    label="Transformação"
                    value={`${selectedProcess.from} → ${selectedProcess.to}`}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor latente <MathFormula inline formula={String.raw`L`} />
                      </>
                    }
                    value={`${formatNumber(selectedProcess.latentHeat)} J/kg`}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor trocado <MathFormula inline formula={String.raw`Q`} />
                      </>
                    }
                    value={formatUnit(latentHeatSigned, "J")}
                    valueClassName={latentHeatSigned >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label="Módulo do calor"
                    value={formatUnit(latentHeatAbs, "J")}
                  />
                </>
              ) : (
                <>
                  <MetricCard
                    label="Fase inicial"
                    value={initialPhase}
                    valueClassName="text-blue-700"
                  />

                  <MetricCard
                    label="Fase final"
                    value={finalPhase}
                    valueClassName="text-red-700"
                  />

                  <MetricCard
                    label="Número de etapas"
                    value={String(thermalSteps.length)}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor total <MathFormula inline formula={String.raw`Q_{total}`} />
                      </>
                    }
                    value={formatUnit(totalHeat, "J")}
                    valueClassName={totalHeat >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label="Interpretação"
                    value={processInterpretation}
                  />
                </>
              )}
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
                {mode === "latent" ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <PhaseBox
                      title="Estado inicial"
                      phase={selectedProcess.from}
                      color={selectedProcess.sign > 0 ? "#3b82f6" : "#ef4444"}
                    />

                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                      <p className="text-sm font-bold text-slate-700">
                        {selectedProcess.sign > 0 ? "Absorve calor" : "Libera calor"}
                      </p>
                      <p
                        className="mt-3 text-3xl font-bold"
                        style={{
                          color: selectedProcess.sign > 0 ? "#dc2626" : "#2563eb",
                        }}
                      >
                        {selectedProcess.sign > 0 ? "+Q" : "-Q"}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        Temperatura constante em {selectedProcess.plateauTemp} °C
                      </p>
                    </div>

                    <PhaseBox
                      title="Estado final"
                      phase={selectedProcess.to}
                      color={selectedProcess.sign > 0 ? "#ef4444" : "#3b82f6"}
                    />
                  </div>
                ) : (
                  <HeatingCurveSvg
                    initialTemp={initialTemp}
                    finalTemp={finalTemp}
                    initialPoint={initialPoint}
                    finalPoint={finalPoint}
                  />
                )}
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
              {mode === "latent" ? (
                <>
                  <CalcMiniCard
                    title="Dados"
                    values={[
                      ["m", formatUnit(mass, "kg")],
                      ["L", `${formatNumber(selectedProcess.latentHeat)} J/kg`],
                    ]}
                  />

                  <CalcMiniCard
                    title="Processo"
                    values={[
                      ["Tipo", selectedProcess.label],
                      ["Temperatura", `${selectedProcess.plateauTemp} °C`],
                    ]}
                  />

                  <CalcMiniCard
                    title="Energia"
                    values={[
                      ["Q", formatUnit(latentHeatSigned, "J")],
                      ["|Q|", formatUnit(latentHeatAbs, "J")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Sentido"
                    values={[
                      ["Energia", selectedProcess.sign > 0 ? "absorvida" : "liberada"],
                      ["Classificação", selectedProcess.sign > 0 ? "endotérmico" : "exotérmico"],
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcMiniCard
                    title="Temperaturas"
                    values={[
                      ["Ti", formatUnit(initialTemp, "°C")],
                      ["Tf", formatUnit(finalTemp, "°C")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Fases"
                    values={[
                      ["Inicial", initialPhase],
                      ["Final", finalPhase],
                    ]}
                  />

                  <CalcMiniCard
                    title="Etapas"
                    values={[
                      ["Quantidade", String(thermalSteps.length)],
                      ["Massa", formatUnit(mass, "kg")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Calor total"
                    values={[
                      ["Qtotal", formatUnit(totalHeat, "J")],
                      ["kJ", formatUnit(totalHeat / 1000, "kJ")],
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
              {mode === "latent" ? (
                <>
                  <CalcSection
                    title="Calor latente"
                    formulas={[
                      String.raw`Q = mL`,
                      String.raw`Q = ${formatNumber(mass)}\cdot ${formatNumber(selectedProcess.latentHeat)} = ${formatNumber(latentHeatAbs)}\,\text{J}`,
                      selectedProcess.sign > 0
                        ? String.raw`Q > 0 \Rightarrow \text{o sistema absorve calor.}`
                        : String.raw`Q < 0 \Rightarrow \text{o sistema libera calor.}`,
                      String.raw`Q_{\text{com sinal}} = ${formatNumber(latentHeatSigned)}\,\text{J}`,
                    ]}
                  />

                  <CalcSection
                    title="Observação física"
                    formulas={[
                      String.raw`\text{Durante uma mudança de fase pura, a temperatura permanece constante.}`,
                      String.raw`\text{O calor fornecido ou retirado altera o estado físico, não a temperatura.}`,
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcSection
                    title="Modelo usado"
                    formulas={[
                      String.raw`Q_{\text{sensível}} = mc\Delta T`,
                      String.raw`Q_{\text{latente}} = mL`,
                      String.raw`Q_{\text{total}} = \sum Q_i`,
                    ]}
                  />

                  {thermalSteps.length > 0 ? (
                    thermalSteps.map((step, index) => (
                      <CalcSection
                        key={index}
                        title={`${index + 1}. ${step.label}`}
                        formulas={[step.formula]}
                      />
                    ))
                  ) : (
                    <CalcSection
                      title="Sem mudança térmica"
                      formulas={[
                        String.raw`T_i = T_f \Rightarrow Q_{\text{total}} = 0`,
                      ]}
                    />
                  )}

                  <CalcSection
                    title="Calor total"
                    formulas={[
                      String.raw`Q_{\text{total}} = ${thermalSteps
                        .map((step) => formatNumber(step.q))
                        .join(" + ") || "0"} = ${formatNumber(totalHeat)}\,\text{J}`,
                      String.raw`Q_{\text{total}} = ${formatNumber(totalHeat / 1000)}\,\text{kJ}`,
                    ]}
                  />

                  <CalcSection
                    title="Interpretação"
                    formulas={[
                      totalHeat > 0
                        ? String.raw`Q_{\text{total}} > 0 \Rightarrow \text{o processo exige fornecimento de calor.}`
                        : totalHeat < 0
                        ? String.raw`Q_{\text{total}} < 0 \Rightarrow \text{o processo libera calor.}`
                        : String.raw`Q_{\text{total}} = 0 \Rightarrow \text{não há troca líquida de calor.}`,
                    ]}
                  />
                </>
              )}
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

function PhaseBox({
  title,
  phase,
  color,
}: {
  title: string;
  phase: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-700">
        {title}
      </p>

      <div
        className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-2xl border-4 bg-white shadow-sm"
        style={{ borderColor: color }}
      >
        <p className="text-xl font-bold" style={{ color }}>
          {phase}
        </p>
      </div>
    </div>
  );
}

function HeatingCurveSvg({
  initialTemp,
  finalTemp,
  initialPoint,
  finalPoint,
}: {
  initialTemp: number;
  finalTemp: number;
  initialPoint: { x: number; y: number };
  finalPoint: { x: number; y: number };
}) {
  const points = [
    getCurvePoint(-40),
    getCurvePoint(0),
    { x: getCurvePoint(0).x + 130, y: getCurvePoint(0).y },
    getCurvePoint(100),
    { x: getCurvePoint(100).x + 160, y: getCurvePoint(100).y },
    getCurvePoint(140),
  ];

  const path = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y} L ${points[4].x} ${points[4].y} L ${points[5].x} ${points[5].y}`;

  return (
    <div className="overflow-x-auto">
      <svg
        width="920"
        height="420"
        viewBox="0 0 920 420"
        className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
      >
        <defs>
          <marker
            id="arrow-curve"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" />
          </marker>
        </defs>

        <line
          x1="70"
          y1="340"
          x2="850"
          y2="340"
          stroke="#0f172a"
          strokeWidth="2"
          markerEnd="url(#arrow-curve)"
        />
        <line
          x1="70"
          y1="340"
          x2="70"
          y2="60"
          stroke="#0f172a"
          strokeWidth="2"
          markerEnd="url(#arrow-curve)"
        />

        <text x="810" y="370" fontSize="13" fontWeight="700" fill="#0f172a">
          Calor Q
        </text>
        <text x="24" y="70" fontSize="13" fontWeight="700" fill="#0f172a">
          T
        </text>

        {[0, 100].map((temp) => {
          const p = getCurvePoint(temp);
          return (
            <g key={temp}>
              <line
                x1="70"
                y1={p.y}
                x2="850"
                y2={p.y}
                stroke="#cbd5e1"
                strokeDasharray="6,6"
              />
              <text x="34" y={p.y + 4} fontSize="12" fill="#64748b">
                {temp}°C
              </text>
            </g>
          );
        })}

        <path d={path} fill="none" stroke="#f97316" strokeWidth="5" />

        <text x={points[0].x - 20} y={points[0].y + 28} fontSize="12" fill="#2563eb" fontWeight="700">
          gelo
        </text>
        <text x={(points[1].x + points[2].x) / 2 - 24} y={points[1].y - 16} fontSize="12" fill="#7c3aed" fontWeight="700">
          fusão
        </text>
        <text x={(points[2].x + points[3].x) / 2 - 28} y={(points[2].y + points[3].y) / 2 - 14} fontSize="12" fill="#2563eb" fontWeight="700">
          líquido
        </text>
        <text x={(points[3].x + points[4].x) / 2 - 42} y={points[3].y - 16} fontSize="12" fill="#7c3aed" fontWeight="700">
          vaporização
        </text>
        <text x={points[5].x - 40} y={points[5].y - 12} fontSize="12" fill="#dc2626" fontWeight="700">
          vapor
        </text>

        <circle cx={initialPoint.x} cy={initialPoint.y} r="8" fill="#2563eb" stroke="white" strokeWidth="2" />
        <text x={initialPoint.x + 12} y={initialPoint.y - 10} fontSize="12" fill="#2563eb" fontWeight="700">
          Ti = {formatNumber(initialTemp)}°C
        </text>

        <circle cx={finalPoint.x} cy={finalPoint.y} r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
        <text x={finalPoint.x + 12} y={finalPoint.y + 20} fontSize="12" fill="#dc2626" fontWeight="700">
          Tf = {formatNumber(finalTemp)}°C
        </text>
      </svg>
    </div>
  );
}
