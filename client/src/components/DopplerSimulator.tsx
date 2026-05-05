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
import { ITAWavesTheory } from "@/content/waves/ita_waves_theory";

type DopplerCase = "aproximando" | "afastando" | "fonte_aproxima" | "fonte_afasta";

export const DopplerSimulator: React.FC = () => {
  const [caseType, setCaseType] = useState<DopplerCase>("aproximando");
  const [sourceFrequency, setSourceFrequency] = useState(440);
  const [soundSpeed, setSoundSpeed] = useState(340);
  const [sourceSpeed, setSourceSpeed] = useState(30);
  const [observerSpeed, setObserverSpeed] = useState(20);

  const usesObserverSpeed = caseType === "aproximando" || caseType === "afastando";

  const apparentFrequency = useMemo(() => {
    if (caseType === "aproximando") {
      return sourceFrequency * ((soundSpeed + observerSpeed) / (soundSpeed - sourceSpeed));
    }

    if (caseType === "afastando") {
      return sourceFrequency * ((soundSpeed - observerSpeed) / (soundSpeed + sourceSpeed));
    }

    if (caseType === "fonte_aproxima") {
      return sourceFrequency * (soundSpeed / (soundSpeed - sourceSpeed));
    }

    return sourceFrequency * (soundSpeed / (soundSpeed + sourceSpeed));
  }, [caseType, sourceFrequency, soundSpeed, sourceSpeed, observerSpeed]);

  const frequencyDifference = useMemo(
    () => apparentFrequency - sourceFrequency,
    [apparentFrequency, sourceFrequency]
  );

  const interpretation = useMemo(() => {
    if (frequencyDifference > 0) return "O som percebido fica mais agudo.";
    if (frequencyDifference < 0) return "O som percebido fica mais grave.";
    return "Não há alteração perceptível de frequência.";
  }, [frequencyDifference]);

  const caseLabel = useMemo(() => {
    if (caseType === "aproximando") return "Fonte e observador se aproximando";
    if (caseType === "afastando") return "Fonte e observador se afastando";
    if (caseType === "fonte_aproxima") return "Fonte se aproxima do observador parado";
    return "Fonte se afasta do observador parado";
  }, [caseType]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Efeito Doppler
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise como o movimento relativo entre fonte e observador altera a frequência percebida.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Situação
                </p>
                <Select
                  value={caseType}
                  onValueChange={(value) => setCaseType(value as DopplerCase)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aproximando">Fonte e observador se aproximando</SelectItem>
                    <SelectItem value="afastando">Fonte e observador se afastando</SelectItem>
                    <SelectItem value="fonte_aproxima">Fonte se aproxima</SelectItem>
                    <SelectItem value="fonte_afasta">Fonte se afasta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow
                label="Frequência emitida"
                symbol="f"
                value={formatUnit(sourceFrequency, "Hz")}
              >
                <Slider
                  value={[sourceFrequency]}
                  onValueChange={(value) => setSourceFrequency(value[0])}
                  min={100}
                  max={2000}
                  step={10}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Velocidade do som"
                symbol="v"
                value={formatUnit(soundSpeed, "m/s")}
              >
                <Slider
                  value={[soundSpeed]}
                  onValueChange={(value) => setSoundSpeed(value[0])}
                  min={250}
                  max={400}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Velocidade da fonte"
                symbol="v_f"
                value={formatUnit(sourceSpeed, "m/s")}
              >
                <Slider
                  value={[sourceSpeed]}
                  onValueChange={(value) => setSourceSpeed(value[0])}
                  min={0}
                  max={120}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              {usesObserverSpeed && (
                <ControlRow
                  label="Velocidade do observador"
                  symbol="v_o"
                  value={formatUnit(observerSpeed, "m/s")}
                >
                  <Slider
                    value={[observerSpeed]}
                    onValueChange={(value) => setObserverSpeed(value[0])}
                    min={0}
                    max={120}
                    step={1}
                    className="w-full"
                  />
                </ControlRow>
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
                    Frequência emitida <MathFormula inline formula={String.raw`f`} />
                  </>
                }
                value={formatUnit(sourceFrequency, "Hz")}
              />

              <MetricCard
                label={
                  <>
                    Frequência percebida <MathFormula inline formula={String.raw`f'`} />
                  </>
                }
                value={formatUnit(apparentFrequency, "Hz")}
                valueClassName={frequencyDifference >= 0 ? "text-red-700" : "text-blue-700"}
              />

              <MetricCard
                label="Diferença"
                value={formatUnit(frequencyDifference, "Hz")}
                valueClassName={frequencyDifference >= 0 ? "text-red-700" : "text-blue-700"}
              />

              <MetricCard
                label="Interpretação"
                value={interpretation}
                valueClassName={frequencyDifference >= 0 ? "text-red-700" : "text-blue-700"}
              />
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
                <DopplerVisual
                  caseType={caseType}
                  sourceFrequency={sourceFrequency}
                  apparentFrequency={apparentFrequency}
                />
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
                title="Fonte"
                values={[
                  ["f", formatUnit(sourceFrequency, "Hz")],
                  ["vf", formatUnit(sourceSpeed, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Observador e meio"
                values={[
                  ["v", formatUnit(soundSpeed, "m/s")],
                  ["vo", usesObserverSpeed ? formatUnit(observerSpeed, "m/s") : "0,00 m/s"],
                ]}
              />

              <CalcMiniCard
                title="Resultado"
                values={[
                  ["f'", formatUnit(apparentFrequency, "Hz")],
                  ["Δf", formatUnit(frequencyDifference, "Hz")],
                ]}
              />

              <CalcMiniCard
                title="Caso"
                values={[
                  ["Situação", caseLabel],
                  ["Percepção", frequencyDifference >= 0 ? "Mais agudo" : "Mais grave"],
                ]}
              />
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
                title="Fórmula usada"
                formulas={[
                  caseType === "aproximando"
                    ? String.raw`f' = f\frac{v+v_o}{v-v_f}`
                    : caseType === "afastando"
                    ? String.raw`f' = f\frac{v-v_o}{v+v_f}`
                    : caseType === "fonte_aproxima"
                    ? String.raw`f' = f\frac{v}{v-v_f}`
                    : String.raw`f' = f\frac{v}{v+v_f}`,
                ]}
              />

              <CalcSection
                title="Substituição"
                formulas={[
                  caseType === "aproximando"
                    ? String.raw`f' = ${formatNumber(sourceFrequency)}\cdot\frac{${formatNumber(soundSpeed)}+${formatNumber(observerSpeed)}}{${formatNumber(soundSpeed)}-${formatNumber(sourceSpeed)}} = ${formatNumber(apparentFrequency)}\,\text{Hz}`
                    : caseType === "afastando"
                    ? String.raw`f' = ${formatNumber(sourceFrequency)}\cdot\frac{${formatNumber(soundSpeed)}-${formatNumber(observerSpeed)}}{${formatNumber(soundSpeed)}+${formatNumber(sourceSpeed)}} = ${formatNumber(apparentFrequency)}\,\text{Hz}`
                    : caseType === "fonte_aproxima"
                    ? String.raw`f' = ${formatNumber(sourceFrequency)}\cdot\frac{${formatNumber(soundSpeed)}}{${formatNumber(soundSpeed)}-${formatNumber(sourceSpeed)}} = ${formatNumber(apparentFrequency)}\,\text{Hz}`
                    : String.raw`f' = ${formatNumber(sourceFrequency)}\cdot\frac{${formatNumber(soundSpeed)}}{${formatNumber(soundSpeed)}+${formatNumber(sourceSpeed)}} = ${formatNumber(apparentFrequency)}\,\text{Hz}`,
                ]}
              />

              <CalcSection
                title="Interpretação"
                formulas={[
                  frequencyDifference > 0
                    ? String.raw`f' > f \Rightarrow \text{o som percebido fica mais agudo.}`
                    : frequencyDifference < 0
                    ? String.raw`f' < f \Rightarrow \text{o som percebido fica mais grave.}`
                    : String.raw`f' = f \Rightarrow \text{não há deslocamento Doppler.}`,
                ]}
              />
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAWavesTheory.title}
        introduction={ITAWavesTheory.introduction}
        sections={ITAWavesTheory.sections}
      />
    </div>
  );
};

function DopplerVisual({
  caseType,
  sourceFrequency,
  apparentFrequency,
}: {
  caseType: DopplerCase;
  sourceFrequency: number;
  apparentFrequency: number;
}) {
  const approaching = caseType === "aproximando" || caseType === "fonte_aproxima";
  const sourceX = approaching ? 390 : 520;
  const observerX = approaching ? 610 : 320;

  const waveSpacing = apparentFrequency > sourceFrequency ? 28 : 48;

  return (
    <div className="overflow-x-auto">
      <svg
        width="920"
        height="420"
        viewBox="0 0 920 420"
        className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
      >
        <rect width="920" height="420" fill="#f8fafc" />

        <line x1="80" y1="300" x2="840" y2="300" stroke="#cbd5e1" strokeWidth="3" />

        {Array.from({ length: 8 }).map((_, i) => {
          const r = 30 + i * waveSpacing;
          return (
            <circle
              key={i}
              cx={sourceX}
              cy="210"
              r={r}
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2"
              opacity={Math.max(0.1, 0.8 - i * 0.08)}
            />
          );
        })}

        <g transform={`translate(${sourceX}, 210)`}>
          <rect x="-35" y="-25" width="70" height="50" rx="12" fill="#ef4444" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">
            Fonte
          </text>
        </g>

        <g transform={`translate(${observerX}, 210)`}>
          <circle cx="0" cy="0" r="28" fill="#3b82f6" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
            Obs.
          </text>
        </g>

        <text x="60" y="55" fontSize="18" fontWeight="800" fill="#0f172a">
          Efeito Doppler
        </text>

        <text x="60" y="84" fontSize="13" fill="#475569">
          Ondas comprimidas indicam frequência percebida maior.
        </text>

        <text x="60" y="112" fontSize="13" fill="#475569">
          Ondas mais espaçadas indicam frequência percebida menor.
        </text>

        <text
          x="60"
          y="360"
          fontSize="14"
          fontWeight="700"
          fill={apparentFrequency >= sourceFrequency ? "#dc2626" : "#2563eb"}
        >
          f' = {formatNumber(apparentFrequency)} Hz
        </text>
      </svg>
    </div>
  );
}

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
