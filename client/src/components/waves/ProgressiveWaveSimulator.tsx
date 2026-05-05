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
    description: "Você controla λ e f. A velocidade sai de v = λf.",
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
  const lastTimeRef = useRef<number>(0);

  const [waveType, setWaveType] = useState<WaveType>("transversal");
  const [direction, setDirection] = useState<Direction>("right");
  const [medium, setMedium] = useState<WaveMedium>("custom");

  const [isPlaying, setIsPlaying] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showMeasures, setShowMeasures] = useState(true);
  const [showProbe, setShowProbe] = useState(true);
  const [showEnergy, setShowEnergy] = useState(true);

  const [amplitudeCm, setAmplitudeCm] = useState(20);
  const [frequency, setFrequency] = useState(1);
  const [wavelengthM, setWavelengthM] = useState(2);
  const [phaseDeg, setPhaseDeg] = useState(0);
  const [probePercent, setProbePercent] = useState(35);

  const [time, setTime] = useState(0);

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

  const omega = useMemo(() => TWO_PI * frequency, [frequency]);

  const directionSign = direction === "right" ? -1 : 1;

  const visibleMeters = useMemo(() => {
    return Math.max(physicalWavelength * 4, 1);
  }, [physicalWavelength]);

  const probeX = useMemo(() => {
    return (probePercent / 100) * visibleMeters;
  }, [probePercent, visibleMeters]);

  const probePhase = useMemo(() => {
    return k * probeX + directionSign * omega * time + phaseRad;
  }, [k, probeX, directionSign, omega, time, phaseRad]);

  const probeDisplacement = useMemo(() => {
    return amplitudeM * Math.sin(probePhase);
  }, [amplitudeM, probePhase]);

  const probeParticleVelocity = useMemo(() => {
    return amplitudeM * directionSign * omega * Math.cos(probePhase);
  }, [amplitudeM, directionSign, omega, probePhase]);

  const probeParticleAcceleration = useMemo(() => {
    return -amplitudeM * omega ** 2 * Math.sin(probePhase);
  }, [amplitudeM, omega, probePhase]);

  const maxParticleVelocity = useMemo(() => {
    return amplitudeM * omega;
  }, [amplitudeM, omega]);

  const maxParticleAcceleration = useMemo(() => {
    return amplitudeM * omega ** 2;
  }, [amplitudeM, omega]);

  const relativeEnergy = useMemo(() => {
    return amplitudeM ** 2 * omega ** 2;
  }, [amplitudeM, omega]);

  const energyBarPercent = useMemo(() => {
    return clamp(relativeEnergy * 18, 0, 100);
  }, [relativeEnergy]);

  const interpretation = useMemo(() => {
    if (medium !== "custom") {
      return `No meio escolhido, a velocidade foi fixada em aproximadamente ${formatNumber(
        velocity
      )} m/s. Quando a frequência muda, o comprimento de onda muda junto, porque λ = v/f.`;
    }

    return "No modo personalizado, você escolhe λ e f. A velocidade da onda é calculada por v = λf.";
  }, [medium, velocity]);

  const reset = () => {
    setWaveType("transversal");
    setDirection("right");
    setMedium("custom");
    setIsPlaying(true);
    setShowParticles(true);
    setShowMeasures(true);
    setShowProbe(true);
    setShowEnergy(true);
    setAmplitudeCm(20);
    setFrequency(1);
    setWavelengthM(2);
    setPhaseDeg(0);
    setProbePercent(35);
    setTime(0);
    lastTimeRef.current = 0;
  };

  useEffect(() => {
    setTime(0);
    lastTimeRef.current = 0;
  }, [waveType, direction, medium, phaseDeg]);

  useEffect(() => {
    if (!isPlaying) {
      lastTimeRef.current = 0;
      return;
    }

    const animate = (now: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = now;
      }

      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.04);
      lastTimeRef.current = now;

      setTime((prev) => prev + dt);

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    drawBackground(ctx, width, height);

    const commonProps = {
      ctx,
      width,
      height,
      amplitudeM,
      physicalWavelength,
      visibleMeters,
      k,
      omega,
      phaseRad,
      directionSign,
      time,
      showParticles,
      showMeasures,
      showProbe,
      probeX,
      probePercent,
      probeDisplacement,
      probeParticleVelocity,
      probeParticleAcceleration,
    };

    if (waveType === "transversal") {
      drawTransversalWave(commonProps);
    } else {
      drawLongitudinalWave(commonProps);
    }

    drawDirectionArrow({
      ctx,
      width,
      height,
      direction,
      velocity,
    });

    if (showEnergy) {
      drawEnergyPanel({
        ctx,
        width,
        relativeEnergy,
        energyBarPercent,
        maxParticleVelocity,
        maxParticleAcceleration,
      });
    }

    drawInfoBox({
      ctx,
      waveType,
      direction,
      mediumLabel: selectedMedium.label,
      amplitudeCm,
      frequency,
      wavelength: physicalWavelength,
      velocity,
      period,
      probeX,
      probeDisplacement,
    });
  }, [
    waveType,
    direction,
    medium,
    selectedMedium.label,
    amplitudeM,
    amplitudeCm,
    frequency,
    physicalWavelength,
    visibleMeters,
    velocity,
    period,
    k,
    omega,
    phaseRad,
    directionSign,
    time,
    showParticles,
    showMeasures,
    showProbe,
    showEnergy,
    probeX,
    probePercent,
    probeDisplacement,
    probeParticleVelocity,
    probeParticleAcceleration,
    relativeEnergy,
    energyBarPercent,
    maxParticleVelocity,
    maxParticleAcceleration,
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
                Analise a propagação, a oscilação das partículas e a equação da onda.
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

              <ControlRow
                label="Ponto analisado"
                symbol="x₀"
                value={`${formatNumber(probeX, 2)} m`}
              >
                <Slider
                  value={[probePercent]}
                  onValueChange={(value) => setProbePercent(value[0])}
                  min={5}
                  max={95}
                  step={1}
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

                <button
                  onClick={() => setShowProbe(!showProbe)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showProbe
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Ponto x₀
                </button>

                <button
                  onClick={() => setShowEnergy(!showEnergy)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showEnergy
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Energia
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
                    Velocidade da onda <MathFormula inline formula={String.raw`v`} />
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
                    Número de onda <MathFormula inline formula={String.raw`k`} />
                  </>
                }
                value={`${formatNumber(k, 4)} rad/m`}
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
                    Deslocamento em{" "}
                    <MathFormula inline formula={String.raw`x_0`} />
                  </>
                }
                value={formatUnit(probeDisplacement, "m")}
                valueClassName={
                  probeDisplacement >= 0 ? "text-red-700" : "text-blue-700"
                }
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
                    height={460}
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
                title="Grandezas da onda"
                values={[
                  ["v", formatUnit(velocity, "m/s")],
                  ["T", formatUnit(period, "s")],
                  ["k", `${formatNumber(k, 4)} rad/m`],
                  ["ω", formatUnit(omega, "rad/s")],
                ]}
              />

              <CalcMiniCard
                title="Ponto analisado"
                values={[
                  ["x₀", formatUnit(probeX, "m")],
                  ["y(x₀,t)", formatUnit(probeDisplacement, "m")],
                  [
                    waveType === "transversal" ? "v_y" : "v_x",
                    formatUnit(probeParticleVelocity, "m/s"),
                  ],
                  [
                    waveType === "transversal" ? "a_y" : "a_x",
                    formatUnit(probeParticleAcceleration, "m/s²"),
                  ],
                ]}
              />

              <CalcMiniCard
                title="Energia relativa"
                values={[
                  ["A²ω²", formatNumber(relativeEnergy, 4)],
                  ["v part. máx.", formatUnit(maxParticleVelocity, "m/s")],
                  ["a part. máx.", formatUnit(maxParticleAcceleration, "m/s²")],
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
                  String.raw`v = ${formatNumber(physicalWavelength, 4)}\cdot ${formatNumber(
                    frequency
                  )} = ${formatNumber(velocity, 4)}\,\text{m/s}`,
                ]}
              />

              <CalcSection
                title="Período, número de onda e frequência angular"
                formulas={[
                  String.raw`T = \frac{1}{f} = \frac{1}{${formatNumber(
                    frequency
                  )}} = ${formatNumber(period, 4)}\,\text{s}`,
                  String.raw`k = \frac{2\pi}{\lambda} = \frac{2\pi}{${formatNumber(
                    physicalWavelength,
                    4
                  )}} = ${formatNumber(k, 4)}\,\text{rad/m}`,
                  String.raw`\omega = 2\pi f = 2\pi\cdot ${formatNumber(
                    frequency
                  )} = ${formatNumber(omega, 4)}\,\text{rad/s}`,
                ]}
              />

              <CalcSection
                title="Equação da onda progressiva"
                formulas={[
                  direction === "right"
                    ? String.raw`y(x,t) = A\sin(kx-\omega t+\varphi_0)`
                    : String.raw`y(x,t) = A\sin(kx+\omega t+\varphi_0)`,
                  direction === "right"
                    ? String.raw`y(x,t) = ${formatNumber(amplitudeM, 3)}\sin(${formatNumber(
                        k,
                        4
                      )}x - ${formatNumber(omega, 4)}t + ${formatNumber(
                        phaseRad,
                        4
                      )})`
                    : String.raw`y(x,t) = ${formatNumber(amplitudeM, 3)}\sin(${formatNumber(
                        k,
                        4
                      )}x + ${formatNumber(omega, 4)}t + ${formatNumber(
                        phaseRad,
                        4
                      )})`,
                ]}
              />

              <CalcSection
                title="Ponto analisado"
                formulas={[
                  String.raw`x_0 = ${formatNumber(probeX, 4)}\,\text{m}`,
                  String.raw`y(x_0,t) = ${formatNumber(
                    probeDisplacement,
                    4
                  )}\,\text{m}`,
                  String.raw`v_{\text{partícula}} = \frac{\partial y}{\partial t} = ${formatNumber(
                    probeParticleVelocity,
                    4
                  )}\,\text{m/s}`,
                  String.raw`a_{\text{partícula}} = \frac{\partial^2 y}{\partial t^2} = ${formatNumber(
                    probeParticleAcceleration,
                    4
                  )}\,\text{m/s}^2`,
                ]}
              />

              <CalcSection
                title="Energia relativa da onda"
                formulas={[
                  String.raw`E_{\text{relativa}} \propto A^2\omega^2`,
                  String.raw`E_{\text{relativa}} \propto ${formatNumber(
                    amplitudeM,
                    4
                  )}^2\cdot ${formatNumber(omega, 4)}^2`,
                  String.raw`E_{\text{relativa}} \propto ${formatNumber(
                    relativeEnergy,
                    4
                  )}`,
                  String.raw`\text{Quanto maior a amplitude e a frequência, maior tende a ser a energia transportada.}`,
                ]}
              />

              <CalcSection
                title="Diferença física entre os tipos"
                formulas={[
                  waveType === "transversal"
                    ? String.raw`\text{Na onda transversal, a partícula oscila perpendicularmente à direção de propagação.}`
                    : String.raw`\text{Na onda longitudinal, a partícula oscila paralelamente à direção de propagação.}`,
                  direction === "right"
                    ? String.raw`\text{O sinal }-\omega t\text{ indica propagação para a direita.}`
                    : String.raw`\text{O sinal }+\omega t\text{ indica propagação para a esquerda.}`,
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

function metersToCanvasX(xMeters: number, visibleMeters: number, width: number) {
  return (xMeters / visibleMeters) * width;
}

function canvasXToMeters(x: number, visibleMeters: number, width: number) {
  return (x / width) * visibleMeters;
}

function drawTransversalWave({
  ctx,
  width,
  height,
  amplitudeM,
  physicalWavelength,
  visibleMeters,
  k,
  omega,
  phaseRad,
  directionSign,
  time,
  showParticles,
  showMeasures,
  showProbe,
  probeX,
  probeDisplacement,
  probeParticleVelocity,
  probeParticleAcceleration,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitudeM: number;
  physicalWavelength: number;
  visibleMeters: number;
  k: number;
  omega: number;
  phaseRad: number;
  directionSign: number;
  time: number;
  showParticles: boolean;
  showMeasures: boolean;
  showProbe: boolean;
  probeX: number;
  probePercent: number;
  probeDisplacement: number;
  probeParticleVelocity: number;
  probeParticleAcceleration: number;
}) {
  const centerY = height / 2;
  const amplitudePx = clamp(amplitudeM * 420, 14, 110);

  ctx.beginPath();
  ctx.strokeStyle = "#4f46e5";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = 0; x <= width; x++) {
    const xMeters = canvasXToMeters(x, visibleMeters, width);
    const phase = k * xMeters + directionSign * omega * time + phaseRad;
    const y = centerY + amplitudePx * Math.sin(phase);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let i = 0; i <= 26; i++) {
      const xMeters = (i / 26) * visibleMeters;
      const x = metersToCanvasX(xMeters, visibleMeters, width);
      const phase = k * xMeters + directionSign * omega * time + phaseRad;
      const y = centerY + amplitudePx * Math.sin(phase);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, TWO_PI);
      ctx.fill();

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  if (showMeasures) {
    const lambdaPx = metersToCanvasX(physicalWavelength, visibleMeters, width);

    drawArrow(
      ctx,
      90,
      centerY,
      90,
      centerY - amplitudePx,
      "#dc2626",
      "A"
    );

    drawArrow(
      ctx,
      170,
      centerY + amplitudePx + 48,
      170 + lambdaPx,
      centerY + amplitudePx + 48,
      "#059669",
      "λ"
    );

    ctx.fillStyle = "#334155";
    ctx.font = "bold 12px Arial";
    ctx.fillText("crista", 245, centerY - amplitudePx - 14);
    ctx.fillText("vale", 355, centerY + amplitudePx + 24);
  }

  if (showProbe) {
    const probeCanvasX = metersToCanvasX(probeX, visibleMeters, width);
    const probeY = centerY + amplitudePx * (probeDisplacement / amplitudeM);

    ctx.strokeStyle = "#f97316";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(probeCanvasX, 40);
    ctx.lineTo(probeCanvasX, height - 42);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.arc(probeCanvasX, probeY, 9, 0, TWO_PI);
    ctx.fill();

    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();

    const velocityScale = amplitudeM * omega || 1;
    const vectorLength = clamp((probeParticleVelocity / velocityScale) * 58, -58, 58);

    drawArrow(
      ctx,
      probeCanvasX + 28,
      probeY,
      probeCanvasX + 28,
      probeY + vectorLength,
      "#0ea5e9",
      "v part."
    );

    const accelScale = amplitudeM * omega ** 2 || 1;
    const accelLength = clamp(
      (probeParticleAcceleration / accelScale) * 48,
      -48,
      48
    );

    drawArrow(
      ctx,
      probeCanvasX + 62,
      probeY,
      probeCanvasX + 62,
      probeY + accelLength,
      "#a855f7",
      "a part."
    );

    drawProbeLabel({
      ctx,
      x: probeCanvasX,
      y: probeY,
      probeX,
      probeDisplacement,
    });
  }
}

function drawLongitudinalWave({
  ctx,
  width,
  height,
  amplitudeM,
  physicalWavelength,
  visibleMeters,
  k,
  omega,
  phaseRad,
  directionSign,
  time,
  showParticles,
  showMeasures,
  showProbe,
  probeX,
  probeDisplacement,
  probeParticleVelocity,
  probeParticleAcceleration,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitudeM: number;
  physicalWavelength: number;
  visibleMeters: number;
  k: number;
  omega: number;
  phaseRad: number;
  directionSign: number;
  time: number;
  showParticles: boolean;
  showMeasures: boolean;
  showProbe: boolean;
  probeX: number;
  probePercent: number;
  probeDisplacement: number;
  probeParticleVelocity: number;
  probeParticleAcceleration: number;
}) {
  const centerY = height / 2;
  const displacementPx = clamp(amplitudeM * 320, 10, 75);

  if (showParticles) {
    for (let i = 0; i <= 58; i++) {
      const xMeters = (i / 58) * visibleMeters;
      const baseX = metersToCanvasX(xMeters, visibleMeters, width);
      const phase = k * xMeters + directionSign * omega * time + phaseRad;
      const dx = displacementPx * Math.sin(phase);
      const x = baseX + dx;

      const stronger = i % 5 === 0;

      ctx.fillStyle = stronger ? "#ef4444" : "#4f46e5";
      ctx.beginPath();
      ctx.arc(x, centerY, stronger ? 6 : 4, 0, TWO_PI);
      ctx.fill();

      ctx.strokeStyle = "rgba(79,70,229,0.16)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, centerY - 76);
      ctx.lineTo(x, centerY + 76);
      ctx.stroke();
    }
  }

  ctx.beginPath();
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);

  for (let x = 0; x <= width; x++) {
    const xMeters = canvasXToMeters(x, visibleMeters, width);
    const phase = k * xMeters + directionSign * omega * time + phaseRad;
    const y = centerY + 120 + displacementPx * 0.55 * Math.sin(phase);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#475569";
  ctx.font = "bold 12px Arial";
  ctx.fillText("compressões e rarefações do meio", 28, 48);

  if (showMeasures) {
    const lambdaPx = metersToCanvasX(physicalWavelength, visibleMeters, width);

    drawArrow(
      ctx,
      170,
      centerY + 165,
      170 + lambdaPx,
      centerY + 165,
      "#059669",
      "λ"
    );
  }

  if (showProbe) {
    const baseProbeX = metersToCanvasX(probeX, visibleMeters, width);
    const probeCanvasX = baseProbeX + displacementPx * (probeDisplacement / amplitudeM);

    ctx.strokeStyle = "#f97316";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(baseProbeX, 40);
    ctx.lineTo(baseProbeX, height - 42);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.arc(probeCanvasX, centerY, 10, 0, TWO_PI);
    ctx.fill();

    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();

    const velocityScale = amplitudeM * omega || 1;
    const velocityLength = clamp(
      (probeParticleVelocity / velocityScale) * 62,
      -62,
      62
    );

    drawArrow(
      ctx,
      probeCanvasX,
      centerY - 36,
      probeCanvasX + velocityLength,
      centerY - 36,
      "#0ea5e9",
      "v part."
    );

    const accelScale = amplitudeM * omega ** 2 || 1;
    const accelLength = clamp(
      (probeParticleAcceleration / accelScale) * 52,
      -52,
      52
    );

    drawArrow(
      ctx,
      probeCanvasX,
      centerY - 68,
      probeCanvasX + accelLength,
      centerY - 68,
      "#a855f7",
      "a part."
    );

    drawProbeLabel({
      ctx,
      x: probeCanvasX,
      y: centerY,
      probeX,
      probeDisplacement,
    });
  }
}

function drawDirectionArrow({
  ctx,
  width,
  height,
  direction,
  velocity,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  direction: Direction;
  velocity: number;
}) {
  const y = height - 28;
  const startX = direction === "right" ? width - 230 : 230;
  const endX = direction === "right" ? width - 90 : 90;

  drawArrow(
    ctx,
    startX,
    y,
    endX,
    y,
    "#4f46e5",
    `propagação v = ${formatNumber(velocity, 2)} m/s`
  );
}

function drawEnergyPanel({
  ctx,
  width,
  relativeEnergy,
  energyBarPercent,
  maxParticleVelocity,
  maxParticleAcceleration,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  relativeEnergy: number;
  energyBarPercent: number;
  maxParticleVelocity: number;
  maxParticleAcceleration: number;
}) {
  const x = width - 315;
  const y = 22;

  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, 285, 120, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("Energia relativa", x + 18, y + 28);

  ctx.fillStyle = "#e2e8f0";
  roundRect(ctx, x + 18, y + 44, 240, 14, 7);
  ctx.fill();

  ctx.fillStyle = "#4f46e5";
  roundRect(ctx, x + 18, y + 44, (240 * energyBarPercent) / 100, 14, 7);
  ctx.fill();

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(`A²ω² = ${formatNumber(relativeEnergy, 4)}`, x + 18, y + 78);
  ctx.fillText(`v máx. part. = ${formatNumber(maxParticleVelocity, 3)} m/s`, x + 18, y + 96);
  ctx.fillText(`a máx. part. = ${formatNumber(maxParticleAcceleration, 3)} m/s²`, x + 18, y + 114);
}

function drawInfoBox({
  ctx,
  waveType,
  direction,
  mediumLabel,
  amplitudeCm,
  frequency,
  wavelength,
  velocity,
  period,
  probeX,
  probeDisplacement,
}: {
  ctx: CanvasRenderingContext2D;
  waveType: WaveType;
  direction: Direction;
  mediumLabel: string;
  amplitudeCm: number;
  frequency: number;
  wavelength: number;
  velocity: number;
  period: number;
  probeX: number;
  probeDisplacement: number;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 330, 178, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("ONDA PROGRESSIVA", 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`tipo: ${waveType === "transversal" ? "Transversal" : "Longitudinal"}`, 38, 68);
  ctx.fillText(`meio: ${mediumLabel}`, 38, 88);
  ctx.fillText(`sentido: ${direction === "right" ? "direita" : "esquerda"}`, 38, 108);
  ctx.fillText(`A = ${formatNumber(amplitudeCm)} cm`, 38, 128);
  ctx.fillText(`λ = ${formatNumber(wavelength, 2)} m`, 38, 148);

  ctx.fillText(`f = ${formatNumber(frequency)} Hz`, 185, 128);
  ctx.fillText(`v = ${formatNumber(velocity, 2)} m/s`, 185, 148);
  ctx.fillText(`T = ${formatNumber(period, 2)} s`, 185, 168);

  ctx.fillText(`x₀ = ${formatNumber(probeX, 2)} m`, 38, 168);
  ctx.fillText(`y₀ = ${formatNumber(probeDisplacement, 3)} m`, 185, 188);
}

function drawProbeLabel({
  ctx,
  x,
  y,
  probeX,
  probeDisplacement,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  probeX: number;
  probeDisplacement: number;
}) {
  const boxX = clamp(x + 18, 20, 760);
  const boxY = clamp(y - 70, 20, 365);

  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 1;
  roundRect(ctx, boxX, boxY, 180, 58, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#9a3412";
  ctx.font = "bold 12px Arial";
  ctx.fillText("ponto analisado", boxX + 12, boxY + 22);

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(`x₀ = ${formatNumber(probeX, 2)} m`, boxX + 12, boxY + 40);
  ctx.fillText(`y = ${formatNumber(probeDisplacement, 3)} m`, boxX + 95, boxY + 40);
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
