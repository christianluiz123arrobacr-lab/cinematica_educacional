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

type DopplerMode =
  | "fonte_aproxima"
  | "fonte_afasta"
  | "observador_aproxima"
  | "observador_afasta"
  | "ambos_aproximam"
  | "ambos_afastam";

export const DopplerSimulator: React.FC = () => {
  const [mode, setMode] = useState<DopplerMode>("ambos_aproximam");

  const [sourceFrequency, setSourceFrequency] = useState(440);
  const [soundSpeed, setSoundSpeed] = useState(340);
  const [sourceSpeed, setSourceSpeed] = useState(30);
  const [observerSpeed, setObserverSpeed] = useState(20);

  const effectiveObserverSpeed = useMemo(() => {
    if (mode === "observador_aproxima" || mode === "ambos_aproximam") {
      return observerSpeed;
    }

    if (mode === "observador_afasta" || mode === "ambos_afastam") {
      return -observerSpeed;
    }

    return 0;
  }, [mode, observerSpeed]);

  const effectiveSourceSpeed = useMemo(() => {
    if (mode === "fonte_aproxima" || mode === "ambos_aproximam") {
      return sourceSpeed;
    }

    if (mode === "fonte_afasta" || mode === "ambos_afastam") {
      return -sourceSpeed;
    }

    return 0;
  }, [mode, sourceSpeed]);

  const apparentFrequency = useMemo(() => {
    const numerator = soundSpeed + effectiveObserverSpeed;
    const denominator = soundSpeed - effectiveSourceSpeed;

    if (Math.abs(denominator) < 1e-9) {
      return Infinity;
    }

    return sourceFrequency * (numerator / denominator);
  }, [sourceFrequency, soundSpeed, effectiveObserverSpeed, effectiveSourceSpeed]);

  const frequencyDifference = useMemo(() => {
    if (!Number.isFinite(apparentFrequency)) return Infinity;
    return apparentFrequency - sourceFrequency;
  }, [apparentFrequency, sourceFrequency]);

  const machNumber = useMemo(() => {
    if (soundSpeed <= 0) return 0;
    return sourceSpeed / soundSpeed;
  }, [sourceSpeed, soundSpeed]);

  const wavelengthAhead = useMemo(() => {
    if (sourceFrequency <= 0) return 0;
    return (soundSpeed - sourceSpeed) / sourceFrequency;
  }, [soundSpeed, sourceSpeed, sourceFrequency]);

  const wavelengthBehind = useMemo(() => {
    if (sourceFrequency <= 0) return 0;
    return (soundSpeed + sourceSpeed) / sourceFrequency;
  }, [soundSpeed, sourceSpeed, sourceFrequency]);

  const modeLabel = useMemo(() => {
    if (mode === "fonte_aproxima") return "Fonte se aproxima do observador parado";
    if (mode === "fonte_afasta") return "Fonte se afasta do observador parado";
    if (mode === "observador_aproxima") return "Observador se aproxima da fonte parada";
    if (mode === "observador_afasta") return "Observador se afasta da fonte parada";
    if (mode === "ambos_aproximam") return "Fonte e observador se aproximam";
    return "Fonte e observador se afastam";
  }, [mode]);

  const perception = useMemo(() => {
    if (!Number.isFinite(apparentFrequency)) {
      return "Caso limite: a fonte se aproxima da velocidade do som.";
    }

    if (frequencyDifference > 0) return "O som percebido fica mais agudo.";
    if (frequencyDifference < 0) return "O som percebido fica mais grave.";
    return "A frequência percebida não muda.";
  }, [apparentFrequency, frequencyDifference]);

  const dangerMessage = useMemo(() => {
    if (machNumber >= 1) {
      return "Fonte em regime supersônico. O modelo Doppler simples deixa de ser suficiente.";
    }

    if (machNumber >= 0.8) {
      return "A fonte está perto da velocidade do som. O efeito fica muito intenso.";
    }

    return "Regime subsônico dentro do modelo simples.";
  }, [machNumber]);

  const reset = () => {
    setMode("ambos_aproximam");
    setSourceFrequency(440);
    setSoundSpeed(340);
    setSourceSpeed(30);
    setObserverSpeed(20);
  };

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
                Analise a mudança aparente de frequência causada pelo movimento relativo entre fonte e observador.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Situação
                </p>

                <Select value={mode} onValueChange={(value) => setMode(value as DopplerMode)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fonte_aproxima">Fonte se aproxima</SelectItem>
                    <SelectItem value="fonte_afasta">Fonte se afasta</SelectItem>
                    <SelectItem value="observador_aproxima">Observador se aproxima</SelectItem>
                    <SelectItem value="observador_afasta">Observador se afasta</SelectItem>
                    <SelectItem value="ambos_aproximam">Ambos se aproximam</SelectItem>
                    <SelectItem value="ambos_afastam">Ambos se afastam</SelectItem>
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
                  max={420}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

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

              <button
                onClick={reset}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Resetar valores
              </button>
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
                label="Situação"
                value={modeLabel}
                valueClassName="text-indigo-700"
              />

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
                value={
                  Number.isFinite(apparentFrequency)
                    ? formatUnit(apparentFrequency, "Hz")
                    : "indefinida"
                }
                valueClassName={frequencyDifference >= 0 ? "text-red-700" : "text-blue-700"}
              />

              <MetricCard
                label="Diferença de frequência"
                value={
                  Number.isFinite(frequencyDifference)
                    ? formatUnit(frequencyDifference, "Hz")
                    : "indefinida"
                }
                valueClassName={frequencyDifference >= 0 ? "text-red-700" : "text-blue-700"}
              />

              <MetricCard
                label={
                  <>
                    Número de Mach <MathFormula inline formula={String.raw`M`} />
                  </>
                }
                value={formatNumber(machNumber, 3)}
                valueClassName={
                  machNumber >= 1
                    ? "text-red-700"
                    : machNumber >= 0.8
                    ? "text-amber-700"
                    : "text-green-700"
                }
              />

              <MetricCard
                label="Interpretação"
                value={perception}
              />

              <MetricCard
                label="Aviso físico"
                value={dangerMessage}
                valueClassName={
                  machNumber >= 1
                    ? "text-red-700"
                    : machNumber >= 0.8
                    ? "text-amber-700"
                    : "text-slate-900"
                }
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
                  mode={mode}
                  sourceFrequency={sourceFrequency}
                  apparentFrequency={apparentFrequency}
                  machNumber={machNumber}
                  sourceSpeed={sourceSpeed}
                  soundSpeed={soundSpeed}
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
                  ["M", formatNumber(machNumber, 3)],
                ]}
              />

              <CalcMiniCard
                title="Observador e meio"
                values={[
                  ["v", formatUnit(soundSpeed, "m/s")],
                  ["vo", formatUnit(observerSpeed, "m/s")],
                  ["caso", modeLabel],
                ]}
              />

              <CalcMiniCard
                title="Resultado percebido"
                values={[
                  [
                    "f'",
                    Number.isFinite(apparentFrequency)
                      ? formatUnit(apparentFrequency, "Hz")
                      : "indefinida",
                  ],
                  [
                    "Δf",
                    Number.isFinite(frequencyDifference)
                      ? formatUnit(frequencyDifference, "Hz")
                      : "indefinida",
                  ],
                ]}
              />

              <CalcMiniCard
                title="Comprimentos de onda"
                values={[
                  ["à frente", formatUnit(wavelengthAhead, "m")],
                  ["atrás", formatUnit(wavelengthBehind, "m")],
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
                title="Fórmula geral com sinais"
                formulas={[
                  String.raw`f' = f\frac{v \pm v_o}{v \mp v_f}`,
                  String.raw`\text{Observador aproximando: }v+v_o`,
                  String.raw`\text{Observador afastando: }v-v_o`,
                  String.raw`\text{Fonte aproximando: }v-v_f`,
                  String.raw`\text{Fonte afastando: }v+v_f`,
                ]}
              />

              <CalcSection
                title="Substituição no caso escolhido"
                formulas={[
                  String.raw`f' = ${formatNumber(sourceFrequency)}\cdot\frac{${formatNumber(soundSpeed)} ${effectiveObserverSpeed >= 0 ? "+" : "-"} ${formatNumber(Math.abs(effectiveObserverSpeed))}}{${formatNumber(soundSpeed)} ${effectiveSourceSpeed >= 0 ? "-" : "+"} ${formatNumber(Math.abs(effectiveSourceSpeed))}}`,
                  Number.isFinite(apparentFrequency)
                    ? String.raw`f' = ${formatNumber(apparentFrequency, 4)}\,\text{Hz}`
                    : String.raw`f' \text{ fica indefinida no limite }v_f \to v.`,
                ]}
              />

              <CalcSection
                title="Número de Mach"
                formulas={[
                  String.raw`M = \frac{v_f}{v}`,
                  String.raw`M = \frac{${formatNumber(sourceSpeed)}}{${formatNumber(soundSpeed)}} = ${formatNumber(machNumber, 4)}`,
                  machNumber >= 1
                    ? String.raw`M \geq 1 \Rightarrow \text{regime supersônico.}`
                    : String.raw`M < 1 \Rightarrow \text{regime subsônico.}`,
                ]}
              />

              <CalcSection
                title="Comprimentos de onda à frente e atrás da fonte"
                formulas={[
                  String.raw`\lambda_{\text{frente}} = \frac{v - v_f}{f}`,
                  String.raw`\lambda_{\text{frente}} = \frac{${formatNumber(soundSpeed)} - ${formatNumber(sourceSpeed)}}{${formatNumber(sourceFrequency)}} = ${formatNumber(wavelengthAhead, 4)}\,\text{m}`,
                  String.raw`\lambda_{\text{atrás}} = \frac{v + v_f}{f}`,
                  String.raw`\lambda_{\text{atrás}} = \frac{${formatNumber(soundSpeed)} + ${formatNumber(sourceSpeed)}}{${formatNumber(sourceFrequency)}} = ${formatNumber(wavelengthBehind, 4)}\,\text{m}`,
                ]}
              />

              <CalcSection
                title="Interpretação"
                formulas={[
                  Number.isFinite(apparentFrequency) && apparentFrequency > sourceFrequency
                    ? String.raw`f' > f \Rightarrow \text{o som percebido fica mais agudo.}`
                    : Number.isFinite(apparentFrequency) && apparentFrequency < sourceFrequency
                    ? String.raw`f' < f \Rightarrow \text{o som percebido fica mais grave.}`
                    : String.raw`f' \approx f \Rightarrow \text{não há alteração relevante de frequência.}`,
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
  mode,
  sourceFrequency,
  apparentFrequency,
  machNumber,
  sourceSpeed,
  soundSpeed,
}: {
  mode: DopplerMode;
  sourceFrequency: number;
  apparentFrequency: number;
  machNumber: number;
  sourceSpeed: number;
  soundSpeed: number;
}) {
  const approaching =
    mode === "fonte_aproxima" ||
    mode === "observador_aproxima" ||
    mode === "ambos_aproximam";

  const sourceX = approaching ? 380 : 540;
  const observerX = approaching ? 620 : 300;

  const compressed = Number.isFinite(apparentFrequency)
    ? apparentFrequency >= sourceFrequency
    : true;

  const frontSpacing = compressed ? 24 : 44;
  const backSpacing = compressed ? 52 : 32;

  return (
    <div className="overflow-x-auto">
      <svg
        width="920"
        height="420"
        viewBox="0 0 920 420"
        className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
      >
        <rect width="920" height="420" fill="#f8fafc" />

        <line x1="70" y1="310" x2="850" y2="310" stroke="#cbd5e1" strokeWidth="3" />

        {machNumber < 1 ? (
          <>
            {Array.from({ length: 7 }).map((_, index) => {
              const r = 28 + index * frontSpacing;
              return (
                <circle
                  key={`front-${index}`}
                  cx={sourceX}
                  cy="210"
                  r={r}
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  opacity={Math.max(0.12, 0.8 - index * 0.08)}
                />
              );
            })}

            {Array.from({ length: 5 }).map((_, index) => {
              const r = 40 + index * backSpacing;
              return (
                <circle
                  key={`back-${index}`}
                  cx={sourceX}
                  cy="210"
                  r={r}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  opacity={Math.max(0.08, 0.45 - index * 0.06)}
                />
              );
            })}
          </>
        ) : (
          <g opacity="0.9">
            <path
              d={`M ${sourceX} 210 L ${sourceX - 260} 90 L ${sourceX - 260} 330 Z`}
              fill="#ef4444"
              opacity="0.16"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <text x={sourceX - 250} y="80" fontSize="13" fontWeight="700" fill="#dc2626">
              cone de Mach
            </text>
          </g>
        )}

        <g transform={`translate(${sourceX}, 210)`}>
          <rect x="-42" y="-28" width="84" height="56" rx="14" fill="#ef4444" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">
            Fonte
          </text>
        </g>

        <g transform={`translate(${observerX}, 210)`}>
          <circle cx="0" cy="0" r="31" fill="#3b82f6" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
            Obs.
          </text>
        </g>

        <line
          x1={sourceX}
          y1="278"
          x2={approaching ? sourceX + 72 : sourceX - 72}
          y2="278"
          stroke="#ef4444"
          strokeWidth="4"
        />
        <polygon
          points={
            approaching
              ? `${sourceX + 84},278 ${sourceX + 64},266 ${sourceX + 64},290`
              : `${sourceX - 84},278 ${sourceX - 64},266 ${sourceX - 64},290`
          }
          fill="#ef4444"
        />

        <text x="60" y="55" fontSize="18" fontWeight="800" fill="#0f172a">
          Efeito Doppler
        </text>

        <text x="60" y="84" fontSize="13" fill="#475569">
          Ondas comprimidas significam maior frequência percebida.
        </text>

        <text x="60" y="112" fontSize="13" fill="#475569">
          Ondas espaçadas significam menor frequência percebida.
        </text>

        <text
          x="60"
          y="365"
          fontSize="14"
          fontWeight="700"
          fill={compressed ? "#dc2626" : "#2563eb"}
        >
          {Number.isFinite(apparentFrequency)
            ? `f' = ${formatNumber(apparentFrequency, 2)} Hz`
            : "f' indefinida no limite supersônico"}
        </text>

        <text x="60" y="390" fontSize="13" fill="#475569">
          vf = {formatNumber(sourceSpeed)} m/s, v = {formatNumber(soundSpeed)} m/s, M = {formatNumber(machNumber, 3)}
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
