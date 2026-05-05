import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Play, Pause, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type InterferenceControlMode = "phase" | "path";

const TWO_PI = 2 * Math.PI;

export const InterferenceSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [controlMode, setControlMode] = useState<InterferenceControlMode>("phase");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showMeasures, setShowMeasures] = useState(true);

  const [amplitude1Cm, setAmplitude1Cm] = useState(20);
  const [amplitude2Cm, setAmplitude2Cm] = useState(20);
  const [frequency, setFrequency] = useState(1);
  const [wavelengthM, setWavelengthM] = useState(2);
  const [phaseDiffDeg, setPhaseDiffDeg] = useState(0);
  const [pathDiffM, setPathDiffM] = useState(0);

  const phaseDiffRad = useMemo(() => {
    if (controlMode === "path") {
      return TWO_PI * (pathDiffM / wavelengthM);
    }

    return (phaseDiffDeg * Math.PI) / 180;
  }, [controlMode, pathDiffM, wavelengthM, phaseDiffDeg]);

  const displayedPhaseDeg = useMemo(() => {
    return (phaseDiffRad * 180) / Math.PI;
  }, [phaseDiffRad]);

  const amplitude1M = useMemo(() => amplitude1Cm / 100, [amplitude1Cm]);
  const amplitude2M = useMemo(() => amplitude2Cm / 100, [amplitude2Cm]);

  const period = useMemo(() => {
    if (frequency <= 0) return 0;
    return 1 / frequency;
  }, [frequency]);

  const velocity = useMemo(() => wavelengthM * frequency, [wavelengthM, frequency]);

  const k = useMemo(() => {
    if (wavelengthM <= 0) return 0;
    return TWO_PI / wavelengthM;
  }, [wavelengthM]);

  const omega = useMemo(() => TWO_PI * frequency, [frequency]);

  const resultantAmplitudeM = useMemo(() => {
    return Math.sqrt(
      amplitude1M ** 2 +
        amplitude2M ** 2 +
        2 * amplitude1M * amplitude2M * Math.cos(phaseDiffRad)
    );
  }, [amplitude1M, amplitude2M, phaseDiffRad]);

  const resultantAmplitudeCm = useMemo(
    () => resultantAmplitudeM * 100,
    [resultantAmplitudeM]
  );

  const normalizedPhaseDeg = useMemo(() => {
    const normalized = ((displayedPhaseDeg % 360) + 360) % 360;
    return normalized;
  }, [displayedPhaseDeg]);

  const interferenceType = useMemo(() => {
    if (Math.abs(normalizedPhaseDeg) < 5 || Math.abs(normalizedPhaseDeg - 360) < 5) {
      return "Construtiva";
    }

    if (Math.abs(normalizedPhaseDeg - 180) < 5) {
      return "Destrutiva";
    }

    return "Parcial";
  }, [normalizedPhaseDeg]);

  const interpretation = useMemo(() => {
    if (interferenceType === "Construtiva") {
      return "As ondas chegam praticamente em fase. A amplitude resultante aumenta.";
    }

    if (interferenceType === "Destrutiva") {
      return "As ondas chegam praticamente em oposição de fase. A amplitude resultante diminui.";
    }

    return "As ondas chegam com defasagem intermediária. A interferência é parcial.";
  }, [interferenceType]);

  const visualAmplitude1 = useMemo(() => {
    return Math.max(8, Math.min(80, amplitude1Cm * 2.2));
  }, [amplitude1Cm]);

  const visualAmplitude2 = useMemo(() => {
    return Math.max(8, Math.min(80, amplitude2Cm * 2.2));
  }, [amplitude2Cm]);

  const visualResultantAmplitude = useMemo(() => {
    return Math.max(0, Math.min(120, resultantAmplitudeCm * 2.2));
  }, [resultantAmplitudeCm]);

  const visualWavelength = useMemo(() => {
    return Math.max(90, Math.min(520, wavelengthM * 120));
  }, [wavelengthM]);

  const visualK = useMemo(() => TWO_PI / visualWavelength, [visualWavelength]);

  const reset = () => {
    setControlMode("phase");
    setIsPlaying(true);
    setShowComponents(true);
    setShowMeasures(true);
    setAmplitude1Cm(20);
    setAmplitude2Cm(20);
    setFrequency(1);
    setWavelengthM(2);
    setPhaseDiffDeg(0);
    setPathDiffM(0);
    timeRef.current = 0;
  };

  useEffect(() => {
    timeRef.current = 0;
  }, [controlMode, phaseDiffDeg, pathDiffM]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.04);
      lastTimeRef.current = now;

      if (isPlaying) {
        timeRef.current += dt;
      }

      const width = canvas.width;
      const height = canvas.height;
      const t = timeRef.current;

      drawBackground(ctx, width, height);

      drawInterferenceWaves({
        ctx,
        width,
        height,
        amplitude1: visualAmplitude1,
        amplitude2: visualAmplitude2,
        resultantAmplitude: visualResultantAmplitude,
        wavelength: visualWavelength,
        k: visualK,
        omega,
        phaseDiff: phaseDiffRad,
        t,
        showComponents,
        showMeasures,
        wavelengthLabel: `${formatNumber(wavelengthM, 2)} m`,
      });

      drawInfoBox({
        ctx,
        amplitude1Cm,
        amplitude2Cm,
        resultantAmplitudeCm,
        wavelengthM,
        frequency,
        phaseDeg: normalizedPhaseDeg,
        interferenceType,
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [
    isPlaying,
    showComponents,
    showMeasures,
    amplitude1Cm,
    amplitude2Cm,
    frequency,
    wavelengthM,
    phaseDiffDeg,
    pathDiffM,
    phaseDiffRad,
    normalizedPhaseDeg,
    interferenceType,
    visualAmplitude1,
    visualAmplitude2,
    visualResultantAmplitude,
    visualWavelength,
    visualK,
    omega,
    resultantAmplitudeCm,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Interferência de Ondas
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise superposição, diferença de fase, diferença de caminho e amplitude resultante.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Controle da defasagem
                </p>
                <Select
                  value={controlMode}
                  onValueChange={(value) => setControlMode(value as InterferenceControlMode)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phase">Diferença de fase</SelectItem>
                    <SelectItem value="path">Diferença de caminho</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow
                label="Amplitude da onda 1"
                symbol="A₁"
                value={formatUnit(amplitude1Cm, "cm")}
              >
                <Slider
                  value={[amplitude1Cm]}
                  onValueChange={(value) => setAmplitude1Cm(value[0])}
                  min={0}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Amplitude da onda 2"
                symbol="A₂"
                value={formatUnit(amplitude2Cm, "cm")}
              >
                <Slider
                  value={[amplitude2Cm]}
                  onValueChange={(value) => setAmplitude2Cm(value[0])}
                  min={0}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Frequência"
                symbol="f"
                value={formatUnit(frequency, "Hz")}
              >
                <Slider
                  value={[frequency]}
                  onValueChange={(value) => setFrequency(value[0])}
                  min={0.1}
                  max={5}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Comprimento de onda"
                symbol="λ"
                value={formatUnit(wavelengthM, "m")}
              >
                <Slider
                  value={[wavelengthM]}
                  onValueChange={(value) => setWavelengthM(value[0])}
                  min={0.2}
                  max={10}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              {controlMode === "phase" ? (
                <ControlRow
                  label="Diferença de fase"
                  symbol="Δφ"
                  value={formatUnit(phaseDiffDeg, "°")}
                >
                  <Slider
                    value={[phaseDiffDeg]}
                    onValueChange={(value) => setPhaseDiffDeg(value[0])}
                    min={0}
                    max={360}
                    step={5}
                    className="w-full"
                  />
                </ControlRow>
              ) : (
                <ControlRow
                  label="Diferença de caminho"
                  symbol="Δx"
                  value={formatUnit(pathDiffM, "m")}
                >
                  <Slider
                    value={[pathDiffM]}
                    onValueChange={(value) => setPathDiffM(value[0])}
                    min={0}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </ControlRow>
              )}

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowComponents(!showComponents)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showComponents
                      ? "border-purple-300 bg-purple-50 text-purple-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Componentes
                </button>

                <button
                  onClick={() => setShowMeasures(!showMeasures)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showMeasures
                      ? "border-purple-300 bg-purple-50 text-purple-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Medidas
                </button>
              </div>
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
                label="Tipo de interferência"
                value={interferenceType}
                valueClassName={
                  interferenceType === "Construtiva"
                    ? "text-green-700"
                    : interferenceType === "Destrutiva"
                    ? "text-red-700"
                    : "text-amber-700"
                }
              />

              <MetricCard
                label={
                  <>
                    Amplitude resultante{" "}
                    <MathFormula inline formula={String.raw`A_R`} />
                  </>
                }
                value={formatUnit(resultantAmplitudeM, "m")}
                valueClassName="text-purple-700"
              />

              <MetricCard
                label={
                  <>
                    Diferença de fase{" "}
                    <MathFormula inline formula={String.raw`\Delta\varphi`} />
                  </>
                }
                value={`${formatNumber(normalizedPhaseDeg, 2)}°`}
              />

              <MetricCard
                label={
                  <>
                    Diferença de caminho{" "}
                    <MathFormula inline formula={String.raw`\Delta x`} />
                  </>
                }
                value={
                  controlMode === "path"
                    ? formatUnit(pathDiffM, "m")
                    : formatUnit((normalizedPhaseDeg / 360) * wavelengthM, "m")
                }
              />

              <MetricCard
                label={
                  <>
                    Velocidade <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(velocity, "m/s")}
              />

              <MetricCard
                label="Interpretação"
                value={interpretation}
              />
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-base font-bold text-slate-900">
                  Simulação Visual
                </h4>

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>

                  <Button variant="secondary" size="icon" onClick={reset}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="overflow-x-auto">
                  <canvas
                    ref={canvasRef}
                    width={980}
                    height={420}
                    className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                  />
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
                title="Ondas componentes"
                values={[
                  ["A₁", formatUnit(amplitude1M, "m")],
                  ["A₂", formatUnit(amplitude2M, "m")],
                ]}
              />

              <CalcMiniCard
                title="Propagação"
                values={[
                  ["λ", formatUnit(wavelengthM, "m")],
                  ["f", formatUnit(frequency, "Hz")],
                  ["v", formatUnit(velocity, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Defasagem"
                values={[
                  ["Δφ", `${formatNumber(normalizedPhaseDeg, 2)}°`],
                  ["Δφ rad", `${formatNumber(phaseDiffRad, 4)} rad`],
                ]}
              />

              <CalcMiniCard
                title="Resultado"
                values={[
                  ["AR", formatUnit(resultantAmplitudeM, "m")],
                  ["Tipo", interferenceType],
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
                title="Relação entre diferença de caminho e fase"
                formulas={[
                  String.raw`\Delta\varphi = \frac{2\pi\Delta x}{\lambda}`,
                  controlMode === "path"
                    ? String.raw`\Delta\varphi = \frac{2\pi\cdot ${formatNumber(pathDiffM, 4)}}{${formatNumber(wavelengthM, 4)}} = ${formatNumber(phaseDiffRad, 4)}\,\text{rad}`
                    : String.raw`\Delta\varphi = ${formatNumber(normalizedPhaseDeg, 2)}^\circ = ${formatNumber(phaseDiffRad, 4)}\,\text{rad}`,
                ]}
              />

              <CalcSection
                title="Amplitude resultante"
                formulas={[
                  String.raw`A_R = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi}`,
                  String.raw`A_R = \sqrt{${formatNumber(amplitude1M, 4)}^2 + ${formatNumber(amplitude2M, 4)}^2 + 2\cdot ${formatNumber(amplitude1M, 4)}\cdot ${formatNumber(amplitude2M, 4)}\cos(${formatNumber(phaseDiffRad, 4)})}`,
                  String.raw`A_R = ${formatNumber(resultantAmplitudeM, 4)}\,\text{m}`,
                ]}
              />

              <CalcSection
                title="Condição de interferência"
                formulas={[
                  String.raw`\text{Construtiva: }\Delta x = n\lambda`,
                  String.raw`\text{Destrutiva: }\Delta x = \left(n + \frac{1}{2}\right)\lambda`,
                  interferenceType === "Construtiva"
                    ? String.raw`\Delta\varphi \approx 0^\circ \Rightarrow \text{interferência construtiva.}`
                    : interferenceType === "Destrutiva"
                    ? String.raw`\Delta\varphi \approx 180^\circ \Rightarrow \text{interferência destrutiva.}`
                    : String.raw`\Delta\varphi \text{ não é }0^\circ\text{ nem }180^\circ \Rightarrow \text{interferência parcial.}`,
                ]}
              />

              <CalcSection
                title="Equações das ondas"
                formulas={[
                  String.raw`y_1(x,t) = A_1\sin(kx-\omega t)`,
                  String.raw`y_2(x,t) = A_2\sin(kx-\omega t+\Delta\varphi)`,
                  String.raw`y_R(x,t) = y_1(x,t) + y_2(x,t)`,
                  String.raw`k = \frac{2\pi}{\lambda} = ${formatNumber(k, 4)}\,\text{rad/m}`,
                  String.raw`\omega = 2\pi f = ${formatNumber(omega, 4)}\,\text{rad/s}`,
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

function drawBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  for (let x = 0; x <= width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();
}

function drawInterferenceWaves({
  ctx,
  width,
  height,
  amplitude1,
  amplitude2,
  resultantAmplitude,
  wavelength,
  k,
  omega,
  phaseDiff,
  t,
  showComponents,
  showMeasures,
  wavelengthLabel,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitude1: number;
  amplitude2: number;
  resultantAmplitude: number;
  wavelength: number;
  k: number;
  omega: number;
  phaseDiff: number;
  t: number;
  showComponents: boolean;
  showMeasures: boolean;
  wavelengthLabel: string;
}) {
  const centerY = height / 2;

  if (showComponents) {
    drawWaveLine({
      ctx,
      width,
      centerY: centerY - 85,
      amplitude: amplitude1 * 0.65,
      k,
      omega,
      phase: 0,
      t,
      color: "#2563eb",
      label: "onda 1",
    });

    drawWaveLine({
      ctx,
      width,
      centerY: centerY + 85,
      amplitude: amplitude2 * 0.65,
      k,
      omega,
      phase: phaseDiff,
      t,
      color: "#dc2626",
      label: "onda 2",
    });
  }

  ctx.beginPath();
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = 0; x <= width; x++) {
    const y1 = amplitude1 * Math.sin(k * x - omega * t);
    const y2 = amplitude2 * Math.sin(k * x - omega * t + phaseDiff);
    const y = centerY + 0.65 * (y1 + y2);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  ctx.fillStyle = "#7c3aed";
  ctx.font = "bold 12px Arial";
  ctx.fillText("onda resultante", 28, centerY - 16);

  if (showMeasures) {
    drawArrow(ctx, 180, centerY + 150, 180 + wavelength, centerY + 150, "#059669", `λ = ${wavelengthLabel}`);
    drawArrow(ctx, 90, centerY, 90, centerY - resultantAmplitude * 0.65, "#7c3aed", "AR");
  }
}

function drawWaveLine({
  ctx,
  width,
  centerY,
  amplitude,
  k,
  omega,
  phase,
  t,
  color,
  label,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  centerY: number;
  amplitude: number;
  k: number;
  omega: number;
  phase: number;
  t: number;
  color: string;
  label: string;
}) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.setLineDash([6, 6]);

  for (let x = 0; x <= width; x++) {
    const y = centerY + amplitude * Math.sin(k * x - omega * t + phase);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color;
  ctx.font = "bold 12px Arial";
  ctx.fillText(label, 28, centerY - amplitude - 14);
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string
) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const head = 9;

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - head * Math.cos(angle - Math.PI / 6),
    toY - head * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - head * Math.cos(angle + Math.PI / 6),
    toY - head * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  ctx.font = "bold 12px Arial";
  ctx.fillText(label, toX + 8, toY - 6);
}

function drawInfoBox({
  ctx,
  amplitude1Cm,
  amplitude2Cm,
  resultantAmplitudeCm,
  wavelengthM,
  frequency,
  phaseDeg,
  interferenceType,
}: {
  ctx: CanvasRenderingContext2D;
  amplitude1Cm: number;
  amplitude2Cm: number;
  resultantAmplitudeCm: number;
  wavelengthM: number;
  frequency: number;
  phaseDeg: number;
  interferenceType: string;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 315, 160, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("INTERFERÊNCIA", 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`A₁ = ${formatNumber(amplitude1Cm, 1)} cm`, 38, 68);
  ctx.fillText(`A₂ = ${formatNumber(amplitude2Cm, 1)} cm`, 38, 88);
  ctx.fillText(`AR = ${formatNumber(resultantAmplitudeCm, 1)} cm`, 38, 108);
  ctx.fillText(`λ = ${formatNumber(wavelengthM, 2)} m`, 180, 68);
  ctx.fillText(`f = ${formatNumber(frequency, 2)} Hz`, 180, 88);
  ctx.fillText(`Δφ = ${formatNumber(phaseDeg, 1)}°`, 180, 108);
  ctx.fillText(`tipo: ${interferenceType}`, 38, 138);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
