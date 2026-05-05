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

type WaveMode = "progressive" | "standing" | "interference";
type WaveType = "transversal" | "longitudinal";
type Direction = "right" | "left";
type WaveMedium = "custom" | "air" | "water" | "steel" | "string";

interface WaveSimulatorProps {
  initialMode?: WaveMode;
  lockedMode?: WaveMode;
  title?: string;
  description?: string;
}

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
    description: "A velocidade será calculada por v = λf.",
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

export const WaveSimulator: React.FC<WaveSimulatorProps> = ({
  initialMode = "progressive",
  lockedMode,
  title = "Simulador de Ondas",
  description = "Analise ondas progressivas, estacionárias e interferência.",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [mode, setMode] = useState<WaveMode>(lockedMode ?? initialMode);
  const [waveType, setWaveType] = useState<WaveType>("transversal");
  const [direction, setDirection] = useState<Direction>("right");

  const [isPlaying, setIsPlaying] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showMeasures, setShowMeasures] = useState(true);

  const [waveMedium, setWaveMedium] = useState<WaveMedium>("custom");
  const [progressiveAmplitudeCm, setProgressiveAmplitudeCm] = useState(20);
  const [progressiveWavelengthM, setProgressiveWavelengthM] = useState(2);
  const [phaseInitialDeg, setPhaseInitialDeg] = useState(0);

  const [amplitude, setAmplitude] = useState(50);
  const [frequency, setFrequency] = useState(1);
  const [wavelength, setWavelength] = useState(200);

  const [amplitude2, setAmplitude2] = useState(35);
  const [phaseDiffDeg, setPhaseDiffDeg] = useState(0);

  const [harmonic, setHarmonic] = useState(2);
  const [stringLength, setStringLength] = useState(600);

  useEffect(() => {
    setMode(lockedMode ?? initialMode);
    timeRef.current = 0;
  }, [initialMode, lockedMode]);

  const selectedMedium = waveMedia[waveMedium];

  const period = useMemo(() => {
    if (frequency <= 0) return 0;
    return 1 / frequency;
  }, [frequency]);

  const phaseInitialRad = useMemo(
    () => (phaseInitialDeg * Math.PI) / 180,
    [phaseInitialDeg]
  );

  const progressiveAmplitudeM = useMemo(
    () => progressiveAmplitudeCm / 100,
    [progressiveAmplitudeCm]
  );

  const progressiveWavelengthPhysical = useMemo(() => {
    if (selectedMedium.speed) {
      return selectedMedium.speed / frequency;
    }

    return progressiveWavelengthM;
  }, [selectedMedium.speed, frequency, progressiveWavelengthM]);

  const progressiveSpeed = useMemo(
    () => progressiveWavelengthPhysical * frequency,
    [progressiveWavelengthPhysical, frequency]
  );

  const progressiveK = useMemo(() => {
    if (progressiveWavelengthPhysical <= 0) return 0;
    return TWO_PI / progressiveWavelengthPhysical;
  }, [progressiveWavelengthPhysical]);

  const progressiveAmplitudePx = useMemo(() => {
    return clamp(progressiveAmplitudeCm * 2.2, 10, 100);
  }, [progressiveAmplitudeCm]);

  const progressiveVisualWavelengthPx = useMemo(() => {
    return clamp(progressiveWavelengthPhysical * 120, 90, 520);
  }, [progressiveWavelengthPhysical]);

  const velocity = useMemo(() => wavelength * frequency, [wavelength, frequency]);

  const k = useMemo(() => TWO_PI / wavelength, [wavelength]);
  const omega = useMemo(() => TWO_PI * frequency, [frequency]);

  const phaseDiffRad = useMemo(
    () => (phaseDiffDeg * Math.PI) / 180,
    [phaseDiffDeg]
  );

  const standingWavelength = useMemo(() => {
    if (harmonic <= 0) return 0;
    return (2 * stringLength) / harmonic;
  }, [stringLength, harmonic]);

  const standingVelocity = useMemo(
    () => standingWavelength * frequency,
    [standingWavelength, frequency]
  );

  const activeWavelength = useMemo(() => {
    if (mode === "progressive") return progressiveWavelengthPhysical;
    if (mode === "standing") return standingWavelength;
    return wavelength;
  }, [mode, progressiveWavelengthPhysical, standingWavelength, wavelength]);

  const activeVelocity = useMemo(() => {
    if (mode === "progressive") return progressiveSpeed;
    if (mode === "standing") return standingVelocity;
    return velocity;
  }, [mode, progressiveSpeed, standingVelocity, velocity]);

  const activeK = useMemo(() => {
    if (mode === "progressive") return progressiveK;
    if (activeWavelength <= 0) return 0;
    return TWO_PI / activeWavelength;
  }, [mode, progressiveK, activeWavelength]);

  const activeWavelengthUnit = mode === "progressive" ? "m" : "px";
  const activeVelocityUnit = mode === "progressive" ? "m/s" : "px/s";
  const activeKUnit = mode === "progressive" ? "rad/m" : "rad/px";

  const resultantAmplitude = useMemo(() => {
    return Math.sqrt(
      amplitude ** 2 +
        amplitude2 ** 2 +
        2 * amplitude * amplitude2 * Math.cos(phaseDiffRad)
    );
  }, [amplitude, amplitude2, phaseDiffRad]);

  const interferenceType = useMemo(() => {
    const normalized = ((phaseDiffDeg % 360) + 360) % 360;

    if (Math.abs(normalized) < 5 || Math.abs(normalized - 360) < 5) {
      return "Construtiva";
    }

    if (Math.abs(normalized - 180) < 5) {
      return "Destrutiva";
    }

    return "Parcial";
  }, [phaseDiffDeg]);

  const progressiveInterpretation = useMemo(() => {
    if (waveMedium !== "custom") {
      return `No meio escolhido, a velocidade foi fixada em aproximadamente ${formatNumber(
        progressiveSpeed
      )} m/s; por isso o comprimento de onda muda quando a frequência muda.`;
    }

    return "No modo personalizado, você controla o comprimento de onda e a velocidade sai de v = λf.";
  }, [waveMedium, progressiveSpeed]);

  const reset = () => {
    setWaveMedium("custom");
    setProgressiveAmplitudeCm(20);
    setProgressiveWavelengthM(2);
    setPhaseInitialDeg(0);
    setAmplitude(50);
    setAmplitude2(35);
    setFrequency(1);
    setWavelength(200);
    setPhaseDiffDeg(0);
    setHarmonic(2);
    setStringLength(600);
    timeRef.current = 0;
  };

  useEffect(() => {
    timeRef.current = 0;
  }, [mode, waveType, direction, phaseInitialDeg, waveMedium]);

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

      const t = timeRef.current;
      const width = canvas.width;
      const height = canvas.height;

      drawBackground(ctx, width, height);

      if (mode === "progressive") {
        if (waveType === "transversal") {
          drawProgressiveTransverseWave({
            ctx,
            width,
            height,
            amplitudePx: progressiveAmplitudePx,
            wavelengthPx: progressiveVisualWavelengthPx,
            kVisual: TWO_PI / progressiveVisualWavelengthPx,
            omega,
            phaseInitialRad,
            t,
            direction,
            showParticles,
            showMeasures,
            amplitudeLabel: `${formatNumber(progressiveAmplitudeM, 2)} m`,
            wavelengthLabel: `${formatNumber(progressiveWavelengthPhysical, 2)} m`,
          });
        } else {
          drawProgressiveLongitudinalWave({
            ctx,
            width,
            height,
            amplitudePx: progressiveAmplitudePx,
            wavelengthPx: progressiveVisualWavelengthPx,
            kVisual: TWO_PI / progressiveVisualWavelengthPx,
            omega,
            phaseInitialRad,
            t,
            direction,
            showParticles,
            showMeasures,
            wavelengthLabel: `${formatNumber(progressiveWavelengthPhysical, 2)} m`,
          });
        }
      }

      if (mode === "standing") {
        drawStandingWave({
          ctx,
          width,
          height,
          amplitude,
          frequency,
          harmonic,
          stringLength,
          t,
          showParticles,
          showMeasures,
        });
      }

      if (mode === "interference") {
        drawInterference({
          ctx,
          width,
          height,
          amplitude,
          amplitude2,
          wavelength,
          k,
          omega,
          phaseDiffRad,
          t,
          showMeasures,
        });
      }

      drawCanvasInfo({
        ctx,
        mode,
        waveType,
        velocity: activeVelocity,
        wavelength: activeWavelength,
        frequency,
        period,
        amplitudeLabel:
          mode === "progressive"
            ? `${formatNumber(progressiveAmplitudeCm)} cm`
            : `${formatNumber(amplitude)} px`,
        wavelengthUnit: activeWavelengthUnit,
        velocityUnit: activeVelocityUnit,
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [
    mode,
    waveType,
    direction,
    isPlaying,
    showParticles,
    showMeasures,
    waveMedium,
    progressiveAmplitudeCm,
    progressiveAmplitudeM,
    progressiveWavelengthM,
    progressiveWavelengthPhysical,
    progressiveSpeed,
    progressiveK,
    progressiveAmplitudePx,
    progressiveVisualWavelengthPx,
    phaseInitialDeg,
    phaseInitialRad,
    amplitude,
    amplitude2,
    frequency,
    wavelength,
    k,
    omega,
    period,
    phaseDiffRad,
    harmonic,
    stringLength,
    standingWavelength,
    standingVelocity,
    velocity,
    activeVelocity,
    activeWavelength,
    activeWavelengthUnit,
    activeVelocityUnit,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>

            <div className="space-y-5 p-5">
              {!lockedMode ? (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Modo
                  </p>
                  <Select
                    value={mode}
                    onValueChange={(value) => setMode(value as WaveMode)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="progressive">Onda progressiva</SelectItem>
                      <SelectItem value="standing">Onda estacionária</SelectItem>
                      <SelectItem value="interference">Interferência</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    Modo fixo desta aba
                  </p>
                  <p className="mt-1 text-sm font-bold text-indigo-900">
                    {getModeLabel(mode)}
                  </p>
                </div>
              )}

              {mode === "progressive" && (
                <>
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
                      value={waveMedium}
                      onValueChange={(value) => setWaveMedium(value as WaveMedium)}
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
                    value={formatUnit(progressiveAmplitudeCm, "cm")}
                  >
                    <Slider
                      value={[progressiveAmplitudeCm]}
                      onValueChange={(value) => setProgressiveAmplitudeCm(value[0])}
                      min={2}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {mode !== "progressive" && (
                <ControlRow
                  label="Amplitude visual"
                  symbol="A"
                  value={formatUnit(amplitude, "px")}
                >
                  <Slider
                    value={[amplitude]}
                    onValueChange={(value) => setAmplitude(value[0])}
                    min={10}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </ControlRow>
              )}

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

              {mode === "progressive" && waveMedium === "custom" && (
                <ControlRow
                  label="Comprimento de onda"
                  symbol="λ"
                  value={formatUnit(progressiveWavelengthM, "m")}
                >
                  <Slider
                    value={[progressiveWavelengthM]}
                    onValueChange={(value) => setProgressiveWavelengthM(value[0])}
                    min={0.2}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "progressive" && waveMedium !== "custom" && (
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium text-slate-600">
                    Comprimento de onda calculado
                  </p>
                  <p className="mt-2 text-lg font-bold text-indigo-700">
                    {formatNumber(progressiveWavelengthPhysical, 2)} m
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Como v foi fixada pelo meio, λ = v/f.
                  </p>
                </div>
              )}

              {mode === "progressive" && (
                <ControlRow
                  label="Fase inicial"
                  symbol="φ₀"
                  value={formatUnit(phaseInitialDeg, "°")}
                >
                  <Slider
                    value={[phaseInitialDeg]}
                    onValueChange={(value) => setPhaseInitialDeg(value[0])}
                    min={0}
                    max={360}
                    step={5}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "interference" && (
                <ControlRow
                  label="Comprimento de onda visual"
                  symbol="λ"
                  value={formatUnit(wavelength, "px")}
                >
                  <Slider
                    value={[wavelength]}
                    onValueChange={(value) => setWavelength(value[0])}
                    min={80}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                </ControlRow>
              )}

              {mode === "standing" && (
                <>
                  <ControlRow
                    label="Comprimento da corda"
                    symbol="L"
                    value={formatUnit(stringLength, "px")}
                  >
                    <Slider
                      value={[stringLength]}
                      onValueChange={(value) => setStringLength(value[0])}
                      min={300}
                      max={760}
                      step={20}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Harmônico"
                    symbol="n"
                    value={String(harmonic)}
                  >
                    <Slider
                      value={[harmonic]}
                      onValueChange={(value) => setHarmonic(value[0])}
                      min={1}
                      max={6}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {mode === "interference" && (
                <>
                  <ControlRow
                    label="Amplitude da segunda onda"
                    symbol="A_2"
                    value={formatUnit(amplitude2, "px")}
                  >
                    <Slider
                      value={[amplitude2]}
                      onValueChange={(value) => setAmplitude2(value[0])}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </ControlRow>

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
                </>
              )}

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
              {mode === "progressive" && (
                <>
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
                    value={formatUnit(progressiveAmplitudeM, "m")}
                  />
                </>
              )}

              <MetricCard
                label={
                  <>
                    Velocidade <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(activeVelocity, activeVelocityUnit)}
                valueClassName="text-indigo-700"
              />

              <MetricCard
                label={
                  <>
                    Comprimento de onda{" "}
                    <MathFormula inline formula={String.raw`\lambda`} />
                  </>
                }
                value={formatUnit(activeWavelength, activeWavelengthUnit)}
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
                value={`${formatNumber(activeK, 4)} ${activeKUnit}`}
              />

              {mode === "progressive" && (
                <MetricCard
                  label="Interpretação"
                  value={progressiveInterpretation}
                />
              )}

              {mode === "interference" && (
                <>
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
                    label="Amplitude resultante"
                    value={formatUnit(resultantAmplitude, "px")}
                    valueClassName="text-purple-700"
                  />
                </>
              )}

              {mode === "standing" && (
                <MetricCard
                  label={
                    <>
                      Comprimento de onda permitido{" "}
                      <MathFormula inline formula={String.raw`\lambda_n`} />
                    </>
                  }
                  value={formatUnit(standingWavelength, "px")}
                  valueClassName="text-purple-700"
                />
              )}
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
                  [
                    "A",
                    mode === "progressive"
                      ? formatUnit(progressiveAmplitudeM, "m")
                      : formatUnit(amplitude, "px"),
                  ],
                  ["f", formatUnit(frequency, "Hz")],
                  ["λ", formatUnit(activeWavelength, activeWavelengthUnit)],
                ]}
              />

              <CalcMiniCard
                title="Grandezas derivadas"
                values={[
                  ["v", formatUnit(activeVelocity, activeVelocityUnit)],
                  ["T", formatUnit(period, "s")],
                ]}
              />

              <CalcMiniCard
                title="Forma matemática"
                values={[
                  ["k", `${formatNumber(activeK, 4)} ${activeKUnit}`],
                  ["ω", formatUnit(omega, "rad/s")],
                ]}
              />

              <CalcMiniCard
                title="Modo atual"
                values={[
                  ["Modo", getModeLabel(mode)],
                  ["Tipo", mode === "progressive" ? getWaveTypeLabel(waveType) : "—"],
                ]}
              />

              {mode === "progressive" && (
                <CalcMiniCard
                  title="Onda progressiva"
                  values={[
                    ["Meio", selectedMedium.label],
                    ["φ₀", formatUnit(phaseInitialDeg, "°")],
                  ]}
                />
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
                title="Relação fundamental da ondulatória"
                formulas={[
                  String.raw`v = \lambda f`,
                  String.raw`v = ${formatNumber(activeWavelength, 4)}\cdot ${formatNumber(frequency)} = ${formatNumber(activeVelocity, 4)}\,\text{${activeVelocityUnit}}`,
                ]}
              />

              <CalcSection
                title="Período, número de onda e frequência angular"
                formulas={[
                  String.raw`T = \frac{1}{f} = \frac{1}{${formatNumber(frequency)}} = ${formatNumber(period, 4)}\,\text{s}`,
                  String.raw`k = \frac{2\pi}{\lambda} = \frac{2\pi}{${formatNumber(activeWavelength, 4)}} = ${formatNumber(activeK, 4)}\,\text{${activeKUnit}}`,
                  String.raw`\omega = 2\pi f = 2\pi\cdot ${formatNumber(frequency)} = ${formatNumber(omega, 4)}\,\text{rad/s}`,
                ]}
              />

              {mode === "progressive" && (
                <>
                  <CalcSection
                    title="Equação da onda progressiva"
                    formulas={[
                      direction === "right"
                        ? String.raw`y(x,t) = A\sin(kx-\omega t+\varphi_0)`
                        : String.raw`y(x,t) = A\sin(kx+\omega t+\varphi_0)`,
                      direction === "right"
                        ? String.raw`y(x,t) = ${formatNumber(progressiveAmplitudeM, 3)}\sin(${formatNumber(progressiveK, 4)}x - ${formatNumber(omega, 4)}t + ${formatNumber(phaseInitialRad, 4)})`
                        : String.raw`y(x,t) = ${formatNumber(progressiveAmplitudeM, 3)}\sin(${formatNumber(progressiveK, 4)}x + ${formatNumber(omega, 4)}t + ${formatNumber(phaseInitialRad, 4)})`,
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
                      String.raw`\lambda = \frac{v}{f} = \frac{${formatNumber(progressiveSpeed, 4)}}{${formatNumber(frequency)}} = ${formatNumber(progressiveWavelengthPhysical, 4)}\,\text{m}`,
                    ]}
                  />
                </>
              )}

              {mode === "standing" && (
                <CalcSection
                  title="Onda estacionária em corda fixa nas extremidades"
                  formulas={[
                    String.raw`\lambda_n = \frac{2L}{n}`,
                    String.raw`\lambda_${harmonic} = \frac{2\cdot ${formatNumber(stringLength)}}{${harmonic}} = ${formatNumber(standingWavelength)}\,\text{px}`,
                    String.raw`f_n = \frac{nv}{2L}`,
                    String.raw`\text{O modo }n=${harmonic}\text{ possui }${harmonic}\text{ ventre(s) e }${harmonic + 1}\text{ nó(s).}`,
                  ]}
                />
              )}

              {mode === "interference" && (
                <CalcSection
                  title="Interferência de duas ondas"
                  formulas={[
                    String.raw`y_1 = A_1\sin(kx-\omega t)`,
                    String.raw`y_2 = A_2\sin(kx-\omega t+\Delta\varphi)`,
                    String.raw`y_R = y_1 + y_2`,
                    String.raw`A_R = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi}`,
                    String.raw`A_R = \sqrt{${formatNumber(amplitude)}^2 + ${formatNumber(amplitude2)}^2 + 2\cdot ${formatNumber(amplitude)}\cdot ${formatNumber(amplitude2)}\cos(${formatNumber(phaseDiffDeg)}^\circ)} = ${formatNumber(resultantAmplitude)}\,\text{px}`,
                  ]}
                />
              )}
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

function drawBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {
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

function drawProgressiveTransverseWave({
  ctx,
  width,
  height,
  amplitudePx,
  wavelengthPx,
  kVisual,
  omega,
  phaseInitialRad,
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
  amplitudePx: number;
  wavelengthPx: number;
  kVisual: number;
  omega: number;
  phaseInitialRad: number;
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
    const y =
      centerY +
      amplitudePx * Math.sin(kVisual * x + sign * omega * t + phaseInitialRad);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let x = 60; x < width; x += 70) {
      const y =
        centerY +
        amplitudePx * Math.sin(kVisual * x + sign * omega * t + phaseInitialRad);

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
    drawAmplitudeMeasure(ctx, 100, centerY, amplitudePx, amplitudeLabel);
    drawWavelengthMeasure(ctx, 180, centerY + amplitudePx + 55, wavelengthPx, wavelengthLabel);
    drawCrestValleyLabels(ctx, centerY, amplitudePx);
  }
}

function drawProgressiveLongitudinalWave({
  ctx,
  width,
  height,
  amplitudePx,
  wavelengthPx,
  kVisual,
  omega,
  phaseInitialRad,
  t,
  direction,
  showParticles,
  showMeasures,
  wavelengthLabel,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitudePx: number;
  wavelengthPx: number;
  kVisual: number;
  omega: number;
  phaseInitialRad: number;
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
        amplitudePx * 0.7 * Math.sin(kVisual * xEq + sign * omega * t + phaseInitialRad);
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
      amplitudePx * 0.45 * Math.sin(kVisual * x + sign * omega * t + phaseInitialRad);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.setLineDash([]);

  if (showMeasures) {
    drawWavelengthMeasure(ctx, 180, centerY + 155, wavelengthPx, wavelengthLabel);
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

function drawStandingWave({
  ctx,
  width,
  height,
  amplitude,
  frequency,
  harmonic,
  stringLength,
  t,
  showParticles,
  showMeasures,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitude: number;
  frequency: number;
  harmonic: number;
  stringLength: number;
  t: number;
  showParticles: boolean;
  showMeasures: boolean;
}) {
  const centerY = height / 2;
  const startX = (width - stringLength) / 2;
  const endX = startX + stringLength;
  const omega = TWO_PI * frequency;

  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(startX, centerY - 95);
  ctx.lineTo(startX, centerY + 95);
  ctx.moveTo(endX, centerY - 95);
  ctx.lineTo(endX, centerY + 95);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = startX; x <= endX; x++) {
    const localX = x - startX;
    const y =
      centerY +
      amplitude *
        Math.sin((harmonic * Math.PI * localX) / stringLength) *
        Math.cos(omega * t);

    if (x === startX) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let i = 0; i <= 24; i++) {
      const x = startX + (i / 24) * stringLength;
      const localX = x - startX;
      const y =
        centerY +
        amplitude *
          Math.sin((harmonic * Math.PI * localX) / stringLength) *
          Math.cos(omega * t);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, TWO_PI);
      ctx.fill();
    }
  }

  if (showMeasures) {
    for (let n = 0; n <= harmonic; n++) {
      const x = startX + (n / harmonic) * stringLength;
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(x, centerY, 6, 0, TWO_PI);
      ctx.fill();

      ctx.font = "bold 11px Arial";
      ctx.fillText("nó", x - 8, centerY + 22);
    }

    ctx.fillStyle = "#475569";
    ctx.font = "bold 13px Arial";
    ctx.fillText(`${harmonic}º harmônico`, 28, 40);
    ctx.fillText(`${harmonic} ventre(s), ${harmonic + 1} nó(s)`, 28, 62);
  }
}

function drawInterference({
  ctx,
  width,
  height,
  amplitude,
  amplitude2,
  wavelength,
  k,
  omega,
  phaseDiffRad,
  t,
  showMeasures,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitude: number;
  amplitude2: number;
  wavelength: number;
  k: number;
  omega: number;
  phaseDiffRad: number;
  t: number;
  showMeasures: boolean;
}) {
  const centerY = height / 2;

  drawWaveLine(ctx, width, centerY - 70, amplitude * 0.6, k, omega, t, 0, "#3b82f6", 2);
  drawWaveLine(ctx, width, centerY + 70, amplitude2 * 0.6, k, omega, t, phaseDiffRad, "#ef4444", 2);

  ctx.beginPath();
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = 0; x <= width; x++) {
    const y1 = amplitude * Math.sin(k * x - omega * t);
    const y2 = amplitude2 * Math.sin(k * x - omega * t + phaseDiffRad);
    const y = centerY + 0.65 * (y1 + y2);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showMeasures) {
    drawWavelengthMeasure(ctx, 180, centerY + 150, wavelength, "λ");

    ctx.fillStyle = "#2563eb";
    ctx.font = "bold 12px Arial";
    ctx.fillText("onda 1", 24, centerY - 118);

    ctx.fillStyle = "#dc2626";
    ctx.fillText("onda 2", 24, centerY + 26);

    ctx.fillStyle = "#7c3aed";
    ctx.fillText("onda resultante", 24, centerY - 8);
  }
}

function drawWaveLine(
  ctx: CanvasRenderingContext2D,
  width: number,
  centerY: number,
  amplitude: number,
  k: number,
  omega: number,
  t: number,
  phase: number,
  color: string,
  lineWidth: number
) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash([6, 6]);

  for (let x = 0; x <= width; x++) {
    const y = centerY + amplitude * Math.sin(k * x - omega * t + phase);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.setLineDash([]);
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
  ctx.lineTo(toX - head * Math.cos(angle - Math.PI / 6), toY - head * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - head * Math.cos(angle + Math.PI / 6), toY - head * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();

  ctx.font = "bold 12px Arial";
  ctx.fillText(label, toX + 8, toY - 6);
}

function drawCanvasInfo({
  ctx,
  mode,
  waveType,
  velocity,
  wavelength,
  frequency,
  period,
  amplitudeLabel,
  wavelengthUnit,
  velocityUnit,
}: {
  ctx: CanvasRenderingContext2D;
  mode: WaveMode;
  waveType: WaveType;
  velocity: number;
  wavelength: number;
  frequency: number;
  period: number;
  amplitudeLabel: string;
  wavelengthUnit: string;
  velocityUnit: string;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 285, 122, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText(getModeLabel(mode).toUpperCase(), 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`tipo: ${mode === "progressive" ? getWaveTypeLabel(waveType) : "—"}`, 38, 68);
  ctx.fillText(`A = ${amplitudeLabel}`, 38, 88);
  ctx.fillText(`λ = ${formatNumber(wavelength, 2)} ${wavelengthUnit}`, 38, 108);
  ctx.fillText(`f = ${formatNumber(frequency)} Hz`, 172, 88);
  ctx.fillText(`v = ${formatNumber(velocity, 2)} ${velocityUnit}`, 172, 108);
  ctx.fillText(`T = ${formatNumber(period, 2)} s`, 172, 128);
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

function getModeLabel(mode: WaveMode) {
  if (mode === "progressive") return "Onda progressiva";
  if (mode === "standing") return "Onda estacionária";
  return "Interferência";
}

function getWaveTypeLabel(type: WaveType) {
  if (type === "transversal") return "Transversal";
  return "Longitudinal";
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
