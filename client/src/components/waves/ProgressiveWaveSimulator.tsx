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

type WaveType = "transversal" | "longitudinal";
type Direction = "right" | "left";
type WaveMedium = "custom" | "air" | "water" | "steel" | "string";

const TWO_PI = 2 * Math.PI;

const waveMedia: Record<
  WaveMedium,
  {
    label: string;
    speed: number | null;
    description: string;
  }
> = {
  custom: {
    label: "Meio personalizado",
    speed: null,
    description: "Você controla o comprimento de onda, e a velocidade sai de v = λf.",
  },
  air: {
    label: "Ar",
    speed: 340,
    description: "Aproximação para som no ar em temperatura ambiente.",
  },
  water: {
    label: "Água",
    speed: 1480,
    description: "Aproximação para ondas sonoras na água.",
  },
  steel: {
    label: "Aço",
    speed: 5000,
    description: "Aproximação para ondas mecânicas longitudinais no aço.",
  },
  string: {
    label: "Corda genérica",
    speed: 20,
    description: "Modelo didático para onda em corda.",
  },
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const ProgressiveWaveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [waveType, setWaveType] = useState<WaveType>("transversal");
  const [direction, setDirection] = useState<Direction>("right");
  const [medium, setMedium] = useState<WaveMedium>("custom");

  const [isPlaying, setIsPlaying] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showMeasures, setShowMeasures] = useState(true);

  const [amplitudeCm, setAmplitudeCm] = useState(20);
  const [frequency, setFrequency] = useState(1);
  const [wavelengthM, setWavelengthM] = useState(2);
  const [phaseDeg, setPhaseDeg] = useState(0);

  const selectedMedium = waveMedia[medium];

  const amplitudeM = useMemo(() => amplitudeCm / 100, [amplitudeCm]);

  const phaseRad = useMemo(() => {
    return (phaseDeg * Math.PI) / 180;
  }, [phaseDeg]);

  const period = useMemo(() => {
    if (frequency <= 0) return 0;
    return 1 / frequency;
  }, [frequency]);

  const physicalWavelength = useMemo(() => {
    if (selectedMedium.speed !== null) {
      return selectedMedium.speed / frequency;
    }

    return wavelengthM;
  }, [selectedMedium.speed, frequency, wavelengthM]);

  const velocity = useMemo(() => {
    return physicalWavelength * frequency;
  }, [physicalWavelength, frequency]);

  const k = useMemo(() => {
    if (physicalWavelength <= 0) return 0;
    return TWO_PI / physicalWavelength;
  }, [physicalWavelength]);

  const omega = useMemo(() => {
    return TWO_PI * frequency;
  }, [frequency]);

  const visualAmplitude = useMemo(() => {
    return clamp(amplitudeCm * 2.2, 10, 100);
  }, [amplitudeCm]);

  const visualWavelength = useMemo(() => {
    return clamp(physicalWavelength * 120, 90, 520);
  }, [physicalWavelength]);

  const visualK = useMemo(() => {
    return TWO_PI / visualWavelength;
  }, [visualWavelength]);

  const equationSign = direction === "right" ? "-" : "+";

  const interpretation = useMemo(() => {
    if (medium === "custom") {
      return "No modo personalizado, você escolhe λ e f. A velocidade é calculada por v = λf.";
    }

    return `No meio escolhido, a velocidade foi fixada em aproximadamente ${formatNumber(
      velocity
    )} m/s. Quando você altera a frequência, o comprimento de onda muda automaticamente.`;
  }, [medium, velocity]);

  const reset = () => {
    setWaveType("transversal");
    setDirection("right");
    setMedium("custom");
    setAmplitudeCm(20);
    setFrequency(1);
    setWavelengthM(2);
    setPhaseDeg(0);
    setIsPlaying(true);
    setShowParticles(true);
    setShowMeasures(true);
    timeRef.current = 0;
  };

  useEffect(() => {
    timeRef.current = 0;
  }, [waveType, direction, medium, phaseDeg]);

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

      if (waveType === "transversal") {
        drawTransversalWave({
          ctx,
          width,
          height,
          amplitude: visualAmplitude,
          wavelength: visualWavelength,
          k: visualK,
          omega,
          phase: phaseRad,
          t,
          direction,
          showParticles,
          showMeasures,
          amplitudeLabel: `${formatNumber(amplitudeM, 2)} m`,
          wavelengthLabel: `${formatNumber(physicalWavelength, 2)} m`,
        });
      } else {
        drawLongitudinalWave({
          ctx,
          width,
          height,
          amplitude: visualAmplitude,
          wavelength: visualWavelength,
          k: visualK,
          omega,
          phase: phaseRad,
          t,
          direction,
          showParticles,
          showMeasures,
          wavelengthLabel: `${formatNumber(physicalWavelength, 2)} m`,
        });
      }

      drawInfoBox({
        ctx,
        waveType,
        direction,
        amplitudeCm,
        frequency,
        wavelength: physicalWavelength,
        velocity,
        period,
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
    waveType,
    direction,
    medium,
    isPlaying,
    showParticles,
    showMeasures,
    amplitudeCm,
    amplitudeM,
    frequency,
    wavelengthM,
    physicalWavelength,
    velocity,
    period,
    k,
    omega,
    phaseRad,
    phaseDeg,
    visualAmplitude,
    visualWavelength,
    visualK,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Ondas Progressivas
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise ondas transversais e longitudinais se propagando pelo meio.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tipo de onda
                </p>
                <Select
                  value={waveType}
                  onValueChange={(value) => setWaveType(value as WaveType)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transversal">Transversal</SelectItem>
                    <SelectItem value="longitudinal">Longitudinal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Meio de propagação
                </p>
                <Select
                  value={medium}
                  onValueChange={(value) => setMedium(value as WaveMedium)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom">Meio personalizado</SelectItem>
                    <SelectItem value="air">Ar</SelectItem>
                    <SelectItem value="water">Água</SelectItem>
                    <SelectItem value="steel">Aço</SelectItem>
                    <SelectItem value="string">Corda genérica</SelectItem>
                  </SelectContent>
                </Select>

                <p className="mt-2 text-xs text-slate-500">
                  {selectedMedium.description}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Sentido de propagação
                </p>
                <Select
                  value={direction}
                  onValueChange={(value) => setDirection(value as Direction)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="right">Para a direita</SelectItem>
                    <SelectItem value="left">Para a esquerda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow
                label="Amplitude"
                symbol="A"
                value={formatUnit(amplitudeCm, "cm")}
              >
                <Slider
                  value={[amplitudeCm]}
                  onValueChange={(value) => setAmplitudeCm(value[0])}
                  min={2}
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

              {medium === "custom" ? (
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
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium text-slate-600">
                    Comprimento de onda calculado
                  </p>
                  <p className="mt-2 text-lg font-bold text-indigo-700">
                    {formatNumber(physicalWavelength, 2)} m
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Como a velocidade foi fixada pelo meio, λ = v/f.
                  </p>
                </div>
              )}

              <ControlRow
                label="Fase inicial"
                symbol="φ₀"
                value={formatUnit(phaseDeg, "°")}
              >
                <Slider
                  value={[phaseDeg]}
                  onValueChange={(value) => setPhaseDeg(value[0])}
                  min={0}
                  max={360}
                  step={5}
                  className="w-full"
                />
              </ControlRow>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showParticles
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Partículas
                </button>

                <button
                  onClick={() => setShowMeasures(!showMeasures)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showMeasures
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
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
                label="Meio de propagação"
                value={selectedMedium.label}
                valueClassName="text-indigo-700"
              />

              <MetricCard
                label={
                  <>
                    Amplitude <MathFormula inline formula={String.raw`A`} />
                  </>
                }
                value={formatUnit(amplitudeM, "m")}
              />

              <MetricCard
                label={
                  <>
                    Velocidade <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(velocity, "m/s")}
                valueClassName="text-indigo-700"
              />

              <MetricCard
                label={
                  <>
                    Comprimento de onda{" "}
                    <MathFormula inline formula={String.raw`\lambda`} />
                  </>
                }
                value={formatUnit(physicalWavelength, "m")}
              />

              <MetricCard
                label={
                  <>
                    Período <MathFormula inline formula={String.raw`T`} />
                  </>
                }
                value={formatUnit(period, "s")}
              />

              <MetricCard
                label={
                  <>
                    Frequência angular{" "}
                    <MathFormula inline formula={String.raw`\omega`} />
                  </>
                }
                value={formatUnit(omega, "rad/s")}
              />

              <MetricCard
                label={
                  <>
                    Número de onda <MathFormula inline formula={String.raw`k`} />
                  </>
                }
                value={`${formatNumber(k, 4)} rad/m`}
              />

              <MetricCard label="Interpretação" value={interpretation} />
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
                title="Parâmetros básicos"
                values={[
                  ["A", formatUnit(amplitudeM, "m")],
                  ["f", formatUnit(frequency, "Hz")],
                  ["λ", formatUnit(physicalWavelength, "m")],
                ]}
              />

              <CalcMiniCard
                title="Grandezas derivadas"
                values={[
                  ["v", formatUnit(velocity, "m/s")],
                  ["T", formatUnit(period, "s")],
                ]}
              />

              <CalcMiniCard
                title="Forma matemática"
                values={[
                  ["k", `${formatNumber(k, 4)} rad/m`],
                  ["ω", formatUnit(omega, "rad/s")],
                ]}
              />

              <CalcMiniCard
                title="Configuração"
                values={[
                  ["Tipo", waveType === "transversal" ? "Transversal" : "Longitudinal"],
                  ["Sentido", direction === "right" ? "Para a direita" : "Para a esquerda"],
                  ["φ₀", formatUnit(phaseDeg, "°")],
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
                title="Relação fundamental da ondulatória"
                formulas={[
                  String.raw`v = \lambda f`,
                  String.raw`v = ${formatNumber(physicalWavelength, 4)}\cdot ${formatNumber(frequency)} = ${formatNumber(velocity, 4)}\,\text{m/s}`,
                ]}
              />

              <CalcSection
                title="Período, número de onda e frequência angular"
                formulas={[
                  String.raw`T = \frac{1}{f} = \frac{1}{${formatNumber(frequency)}} = ${formatNumber(period, 4)}\,\text{s}`,
                  String.raw`k = \frac{2\pi}{\lambda} = \frac{2\pi}{${formatNumber(physicalWavelength, 4)}} = ${formatNumber(k, 4)}\,\text{rad/m}`,
                  String.raw`\omega = 2\pi f = 2\pi\cdot ${formatNumber(frequency)} = ${formatNumber(omega, 4)}\,\text{rad/s}`,
                ]}
              />

              <CalcSection
                title="Equação da onda progressiva"
                formulas={[
                  direction === "right"
                    ? String.raw`y(x,t) = A\sin(kx-\omega t+\varphi_0)`
                    : String.raw`y(x,t) = A\sin(kx+\omega t+\varphi_0)`,
                  String.raw`y(x,t) = ${formatNumber(amplitudeM, 3)}\sin(${formatNumber(k, 4)}x ${equationSign} ${formatNumber(omega, 4)}t + ${formatNumber(phaseRad, 4)})`,
                  waveType === "transversal"
                    ? String.raw`\text{Na onda transversal, a perturbação é perpendicular à propagação.}`
                    : String.raw`\text{Na onda longitudinal, a perturbação é paralela à propagação.}`,
                ]}
              />

              <CalcSection
                title="Meio de propagação"
                formulas={[
                  selectedMedium.speed
                    ? String.raw`v_{\text{meio}} \approx ${formatNumber(selectedMedium.speed)}\,\text{m/s}`
                    : String.raw`\text{No meio personalizado, a velocidade é definida por }v=\lambda f.`,
                  String.raw`\lambda = \frac{v}{f} = \frac{${formatNumber(velocity, 4)}}{${formatNumber(frequency)}} = ${formatNumber(physicalWavelength, 4)}\,\text{m}`,
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

function drawTransversalWave({
  ctx,
  width,
  height,
  amplitude,
  wavelength,
  k,
  omega,
  phase,
  t,
  direction,
  showParticles,
  showMeasures,
  amplitudeLabel,
  wavelengthLabel,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitude: number;
  wavelength: number;
  k: number;
  omega: number;
  phase: number;
  t: number;
  direction: Direction;
  showParticles: boolean;
  showMeasures: boolean;
  amplitudeLabel: string;
  wavelengthLabel: string;
}) {
  const centerY = height / 2;
  const sign = direction === "right" ? -1 : 1;

  ctx.beginPath();
  ctx.strokeStyle = "#4f46e5";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = 0; x <= width; x++) {
    const y = centerY + amplitude * Math.sin(k * x + sign * omega * t + phase);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let x = 60; x < width; x += 70) {
      const y = centerY + amplitude * Math.sin(k * x + sign * omega * t + phase);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, TWO_PI);
      ctx.fill();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  if (showMeasures) {
    drawAmplitudeMeasure(ctx, 100, centerY, amplitude, amplitudeLabel);
    drawWavelengthMeasure(ctx, 180, centerY + amplitude + 55, wavelength, wavelengthLabel);
    drawCrestValleyLabels(ctx, centerY, amplitude);
  }
}

function drawLongitudinalWave({
  ctx,
  width,
  height,
  amplitude,
  wavelength,
  k,
  omega,
  phase,
  t,
  direction,
  showParticles,
  showMeasures,
  wavelengthLabel,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitude: number;
  wavelength: number;
  k: number;
  omega: number;
  phase: number;
  t: number;
  direction: Direction;
  showParticles: boolean;
  showMeasures: boolean;
  wavelengthLabel: string;
}) {
  const centerY = height / 2;
  const sign = direction === "right" ? -1 : 1;
  const numParticles = 54;
  const spacing = width / numParticles;

  if (showParticles) {
    for (let i = 0; i <= numParticles; i++) {
      const xEq = i * spacing;
      const displacement =
        amplitude * 0.7 * Math.sin(k * xEq + sign * omega * t + phase);
      const x = xEq + displacement;

      ctx.fillStyle = i % 5 === 0 ? "#ef4444" : "#4f46e5";
      ctx.beginPath();
      ctx.arc(x, centerY, i % 5 === 0 ? 6 : 4, 0, TWO_PI);
      ctx.fill();

      ctx.strokeStyle = "rgba(79,70,229,0.18)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, centerY - 70);
      ctx.lineTo(x, centerY + 70);
      ctx.stroke();
    }
  }

  ctx.beginPath();
  ctx.strokeStyle = "rgba(15,23,42,0.35)";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);

  for (let x = 0; x <= width; x++) {
    const y =
      centerY +
      105 +
      amplitude * 0.45 * Math.sin(k * x + sign * omega * t + phase);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.setLineDash([]);

  if (showMeasures) {
    drawWavelengthMeasure(ctx, 180, centerY + 155, wavelength, wavelengthLabel);
    ctx.fillStyle = "#475569";
    ctx.font = "bold 12px Arial";
    ctx.fillText("compressões e rarefações se propagam pelo meio", 26, 40);
  }

  if (!showParticles) {
    ctx.fillStyle = "#64748b";
    ctx.font = "bold 13px Arial";
    ctx.fillText("Partículas ocultas. Ative o botão para ver o movimento do meio.", 26, 70);
  }
}

function drawAmplitudeMeasure(
  ctx: CanvasRenderingContext2D,
  x: number,
  centerY: number,
  amplitude: number,
  label: string
) {
  drawArrow(ctx, x, centerY, x, centerY - amplitude, "#dc2626", `A = ${label}`);
  drawArrow(ctx, x + 20, centerY, x + 20, centerY + amplitude, "#dc2626", "A");
}

function drawWavelengthMeasure(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  wavelength: number,
  label: string
) {
  drawArrow(ctx, x, y, x + wavelength, y, "#059669", `λ = ${label}`);
}

function drawCrestValleyLabels(
  ctx: CanvasRenderingContext2D,
  centerY: number,
  amplitude: number
) {
  ctx.fillStyle = "#334155";
  ctx.font = "bold 12px Arial";
  ctx.fillText("crista", 255, centerY - amplitude - 12);
  ctx.fillText("vale", 350, centerY + amplitude + 22);
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
  waveType,
  direction,
  amplitudeCm,
  frequency,
  wavelength,
  velocity,
  period,
}: {
  ctx: CanvasRenderingContext2D;
  waveType: WaveType;
  direction: Direction;
  amplitudeCm: number;
  frequency: number;
  wavelength: number;
  velocity: number;
  period: number;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 315, 142, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("ONDA PROGRESSIVA", 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(
    `tipo: ${waveType === "transversal" ? "Transversal" : "Longitudinal"}`,
    38,
    68
  );
  ctx.fillText(
    `sentido: ${direction === "right" ? "direita" : "esquerda"}`,
    38,
    88
  );
  ctx.fillText(`A = ${formatNumber(amplitudeCm)} cm`, 38, 108);
  ctx.fillText(`λ = ${formatNumber(wavelength, 2)} m`, 38, 128);

  ctx.fillText(`f = ${formatNumber(frequency)} Hz`, 190, 108);
  ctx.fillText(`v = ${formatNumber(velocity, 2)} m/s`, 190, 128);
  ctx.fillText(`T = ${formatNumber(period, 2)} s`, 190, 148);
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
