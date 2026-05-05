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
import { Play, Pause, RefreshCw, Box, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type WaveType = "transversal" | "longitudinal";
type Direction = "right" | "left";
type WaveMedium = "custom" | "air" | "water" | "steel" | "string";

type CameraConfig = {
  rotX: number;
  rotY: number;
  rotZ: number;
  zoom: number;
};

const TWO_PI = 2 * Math.PI;
const DEFAULT_3D_SPEED = 0.08;

const DEFAULT_CAMERA_ROT_X = 0;
const DEFAULT_CAMERA_ROT_Y = 0;
const DEFAULT_CAMERA_ROT_Z = 0;
const DEFAULT_CAMERA_ZOOM = 1.05;

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
  const [show3DModal, setShow3DModal] = useState(false);

  const [amplitudeCm, setAmplitudeCm] = useState(20);
  const [frequency, setFrequency] = useState(1);
  const [wavelengthM, setWavelengthM] = useState(2);
  const [phaseDeg, setPhaseDeg] = useState(0);
  const [probePercent, setProbePercent] = useState(35);

  const [waveOriginPercent3D, setWaveOriginPercent3D] = useState(0);
  const [wave3DSpeed, setWave3DSpeed] = useState(DEFAULT_3D_SPEED);
  const [wave3DStartTime, setWave3DStartTime] = useState(0);

  const [cameraRotX, setCameraRotX] = useState(DEFAULT_CAMERA_ROT_X);
  const [cameraRotY, setCameraRotY] = useState(DEFAULT_CAMERA_ROT_Y);
  const [cameraRotZ, setCameraRotZ] = useState(DEFAULT_CAMERA_ROT_Z);
  const [cameraZoom, setCameraZoom] = useState(DEFAULT_CAMERA_ZOOM);

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
    return -(amplitudeM * (omega ** 2) * Math.sin(probePhase));
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
    setWaveOriginPercent3D(0);
    setWave3DSpeed(DEFAULT_3D_SPEED);
    setWave3DStartTime(0);
    setCameraRotX(DEFAULT_CAMERA_ROT_X);
    setCameraRotY(DEFAULT_CAMERA_ROT_Y);
    setCameraRotZ(DEFAULT_CAMERA_ROT_Z);
    setCameraZoom(DEFAULT_CAMERA_ZOOM);
    setTime(0);
    lastTimeRef.current = 0;
  };

  const open3DModal = () => {
    setWaveOriginPercent3D(direction === "right" ? 0 : 100);
    setWave3DStartTime(time);
    setCameraRotX(DEFAULT_CAMERA_ROT_X);
    setCameraRotY(DEFAULT_CAMERA_ROT_Y);
    setCameraRotZ(DEFAULT_CAMERA_ROT_Z);
    setCameraZoom(DEFAULT_CAMERA_ZOOM);
    setShow3DModal(true);
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

              <Button
                type="button"
                onClick={open3DModal}
                className="w-full gap-2 bg-slate-950 text-white hover:bg-slate-800"
              >
                <Box className="h-4 w-4" />
                Ver em 3D
              </Button>
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
                    Velocidade da onda{" "}
                    <MathFormula inline formula={String.raw`v`} />
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
                  String.raw`v = ${formatNumber(
                    physicalWavelength,
                    4
                  )}\cdot ${formatNumber(frequency)} = ${formatNumber(
                    velocity,
                    4
                  )}\,\text{m/s}`,
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
                    ? String.raw`y(x,t) = ${formatNumber(
                        amplitudeM,
                        3
                      )}\sin(${formatNumber(k, 4)}x - ${formatNumber(
                        omega,
                        4
                      )}t + ${formatNumber(phaseRad, 4)})`
                    : String.raw`y(x,t) = ${formatNumber(
                        amplitudeM,
                        3
                      )}\sin(${formatNumber(k, 4)}x + ${formatNumber(
                        omega,
                        4
                      )}t + ${formatNumber(phaseRad, 4)})`,
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

      {show3DModal && (
        <Wave3DModal
          onClose={() => setShow3DModal(false)}
          waveType={waveType}
          direction={direction}
          amplitudeM={amplitudeM}
          physicalWavelength={physicalWavelength}
          frequency={frequency}
          velocity={velocity}
          visibleMeters={visibleMeters}
          k={k}
          phaseRad={phaseRad}
          time={time}
          wave3DStartTime={wave3DStartTime}
          probeX={probeX}
          probeDisplacement={probeDisplacement}
          originPercent={waveOriginPercent3D}
          setOriginPercent={setWaveOriginPercent3D}
          wave3DSpeed={wave3DSpeed}
          setWave3DSpeed={setWave3DSpeed}
          cameraRotX={cameraRotX}
          setCameraRotX={setCameraRotX}
          cameraRotY={cameraRotY}
          setCameraRotY={setCameraRotY}
          cameraRotZ={cameraRotZ}
          setCameraRotZ={setCameraRotZ}
          cameraZoom={cameraZoom}
          setCameraZoom={setCameraZoom}
        />
      )}
    </div>
  );
};

function Wave3DModal({
  onClose,
  waveType,
  direction,
  amplitudeM,
  physicalWavelength,
  frequency,
  velocity,
  visibleMeters,
  k,
  phaseRad,
  time,
  wave3DStartTime,
  probeX,
  probeDisplacement,
  originPercent,
  setOriginPercent,
  wave3DSpeed,
  setWave3DSpeed,
  cameraRotX,
  setCameraRotX,
  cameraRotY,
  setCameraRotY,
  cameraRotZ,
  setCameraRotZ,
  cameraZoom,
  setCameraZoom,
}: {
  onClose: () => void;
  waveType: WaveType;
  direction: Direction;
  amplitudeM: number;
  physicalWavelength: number;
  frequency: number;
  velocity: number;
  visibleMeters: number;
  k: number;
  phaseRad: number;
  time: number;
  wave3DStartTime: number;
  probeX: number;
  probeDisplacement: number;
  originPercent: number;
  setOriginPercent: React.Dispatch<React.SetStateAction<number>>;
  wave3DSpeed: number;
  setWave3DSpeed: React.Dispatch<React.SetStateAction<number>>;
  cameraRotX: number;
  setCameraRotX: React.Dispatch<React.SetStateAction<number>>;
  cameraRotY: number;
  setCameraRotY: React.Dispatch<React.SetStateAction<number>>;
  cameraRotZ: number;
  setCameraRotZ: React.Dispatch<React.SetStateAction<number>>;
  cameraZoom: number;
  setCameraZoom: React.Dispatch<React.SetStateAction<number>>;
}) {
  const cameraConfig: CameraConfig = useMemo(
    () => ({
      rotX: cameraRotX,
      rotY: cameraRotY,
      rotZ: cameraRotZ,
      zoom: cameraZoom,
    }),
    [cameraRotX, cameraRotY, cameraRotZ, cameraZoom]
  );

  const flatCamera = useMemo(() => {
    return isFlatCamera(cameraConfig);
  }, [cameraConfig]);

  const originX = useMemo(() => {
    return (originPercent / 100) * visibleMeters;
  }, [originPercent, visibleMeters]);

  const waveProgress = useMemo(() => {
    const elapsed = Math.max(0, time - wave3DStartTime);

    const maxDistance =
      direction === "right" ? visibleMeters - originX : originX;

    const speedInMetersPerSecond =
      wave3DSpeed * Math.max(physicalWavelength, 0.4);

    return clamp(elapsed * speedInMetersPerSecond, 0, maxDistance);
  }, [
    time,
    wave3DStartTime,
    wave3DSpeed,
    physicalWavelength,
    visibleMeters,
    originX,
    direction,
  ]);

  const frontX = useMemo(() => {
    if (direction === "right") {
      return clamp(originX + waveProgress, 0, visibleMeters);
    }

    return clamp(originX - waveProgress, 0, visibleMeters);
  }, [direction, originX, waveProgress, visibleMeters]);

  const frontRelativeDistance = useMemo(() => {
    return Math.abs(frontX - originX);
  }, [frontX, originX]);

  const trigPhase = useMemo(() => {
    return k * frontRelativeDistance + phaseRad;
  }, [k, frontRelativeDistance, phaseRad]);

  const wavePoints = useMemo(() => {
    return buildProjectedWavePoints({
      originX,
      frontX,
      visibleMeters,
      amplitudeM,
      k,
      phaseRad,
      direction,
      cameraConfig,
    });
  }, [
    originX,
    frontX,
    visibleMeters,
    amplitudeM,
    k,
    phaseRad,
    direction,
    cameraConfig,
  ]);

  const fullGhostWave = useMemo(() => {
    const ghostFront = direction === "right" ? visibleMeters : 0;

    return buildProjectedWavePoints({
      originX,
      frontX: ghostFront,
      visibleMeters,
      amplitudeM,
      k,
      phaseRad,
      direction,
      cameraConfig,
    });
  }, [
    direction,
    originX,
    visibleMeters,
    amplitudeM,
    k,
    phaseRad,
    cameraConfig,
  ]);

  const phaseCirclePoints = useMemo(() => {
    return buildProjectedPhaseCircle({
      xMeters: frontX,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });
  }, [frontX, visibleMeters, amplitudeM, cameraConfig]);

  const projectedProbe = useMemo(() => {
    const relativeX =
      direction === "right" ? probeX - originX : originX - probeX;

    const phase = k * relativeX + phaseRad;
    const y = amplitudeM * Math.sin(phase);
    const z = amplitudeM * Math.cos(phase);

    return project3DPoint({
      xMeters: probeX,
      yMeters: y,
      zMeters: z,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });
  }, [
    probeX,
    originX,
    direction,
    k,
    phaseRad,
    amplitudeM,
    visibleMeters,
    cameraConfig,
  ]);

  const projectedOrigin = useMemo(() => {
    return project3DPoint({
      xMeters: originX,
      yMeters: 0,
      zMeters: 0,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });
  }, [originX, visibleMeters, amplitudeM, cameraConfig]);

  const projectedFront = useMemo(() => {
    const relativeX =
      direction === "right" ? frontX - originX : originX - frontX;

    const phase = k * relativeX + phaseRad;
    const y = amplitudeM * Math.sin(phase);
    const z = amplitudeM * Math.cos(phase);

    return project3DPoint({
      xMeters: frontX,
      yMeters: y,
      zMeters: z,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });
  }, [
    frontX,
    originX,
    direction,
    k,
    phaseRad,
    amplitudeM,
    visibleMeters,
    cameraConfig,
  ]);

  const gridLines = useMemo(() => {
    if (flatCamera) return [];
    return build3DGridLines(cameraConfig);
  }, [flatCamera, cameraConfig]);

  const xAxis = useMemo(() => {
    return buildWorldLine(
      { x: -4.4, y: 0, z: 0 },
      { x: 4.7, y: 0, z: 0 },
      cameraConfig
    );
  }, [cameraConfig]);

  const yAxis = useMemo(() => {
    return buildWorldLine(
      { x: -4.4, y: -1.9, z: 0 },
      { x: -4.4, y: 2.1, z: 0 },
      cameraConfig
    );
  }, [cameraConfig]);

  const zAxis = useMemo(() => {
    return buildWorldLine(
      { x: -4.4, y: 0, z: -2.4 },
      { x: -4.4, y: 0, z: 2.7 },
      cameraConfig
    );
  }, [cameraConfig]);

  const xLabel = useMemo(
    () => projectWorldPoint({ x: 4.95, y: 0, z: 0 }, cameraConfig),
    [cameraConfig]
  );

  const yLabel = useMemo(
    () => projectWorldPoint({ x: -4.4, y: 2.35, z: 0 }, cameraConfig),
    [cameraConfig]
  );

  const zLabel = useMemo(
    () => projectWorldPoint({ x: -4.4, y: 0, z: 2.95 }, cameraConfig),
    [cameraConfig]
  );

  const circle = {
    cx: 185,
    cy: 250,
    r: 72,
  };

  const circlePoint = {
    x: circle.cx + circle.r * Math.cos(trigPhase),
    y: circle.cy - circle.r * Math.sin(trigPhase),
  };

  const projectionY = circle.cy - circle.r * Math.sin(trigPhase);

  const resetCamera = () => {
    setCameraRotX(DEFAULT_CAMERA_ROT_X);
    setCameraRotY(DEFAULT_CAMERA_ROT_Y);
    setCameraRotZ(DEFAULT_CAMERA_ROT_Z);
    setCameraZoom(DEFAULT_CAMERA_ZOOM);
  };

  const setPerfectCycleView = () => {
    setCameraRotX(0);
    setCameraRotY(90);
    setCameraRotZ(0);
    setCameraZoom(1.25);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 px-5 py-4 backdrop-blur">
          <div>
            <h3 className="text-xl font-black text-white">
              Visualização 3D da Onda Progressiva
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              A linha nasce da origem. Com X e Y zerados, Z apenas gira o gráfico comum.
            </p>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={onClose}
            className="bg-slate-800 text-white hover:bg-slate-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 xl:grid-cols-12">
          <div className="space-y-4 xl:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-bold text-slate-200">
                Controles da onda
              </p>

              <div className="mt-5 space-y-5">
                <DarkControlRow
                  label="Origem da onda"
                  value={`${formatNumber(originX, 2)} m`}
                >
                  <Slider
                    value={[originPercent]}
                    onValueChange={(value) => setOriginPercent(value[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </DarkControlRow>

                <DarkControlRow
                  label="Velocidade visual 3D"
                  value={`${formatNumber(wave3DSpeed, 2)}x`}
                >
                  <Slider
                    value={[wave3DSpeed]}
                    onValueChange={(value) => setWave3DSpeed(value[0])}
                    min={0.01}
                    max={0.4}
                    step={0.01}
                    className="w-full"
                  />
                </DarkControlRow>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-slate-200">
                  Câmera 3D
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={setPerfectCycleView}
                    className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2 py-1 text-xs font-bold text-cyan-200 hover:bg-cyan-500/20"
                  >
                    Ciclo
                  </button>

                  <button
                    type="button"
                    onClick={resetCamera}
                    className="rounded-lg border border-slate-700 px-2 py-1 text-xs font-bold text-slate-300 hover:bg-slate-800"
                  >
                    Resetar
                  </button>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                <DarkControlRow
                  label="Rotação X"
                  value={`${formatNumber(cameraRotX, 0)}°`}
                >
                  <Slider
                    value={[cameraRotX]}
                    onValueChange={(value) => setCameraRotX(value[0])}
                    min={-80}
                    max={80}
                    step={1}
                    className="w-full"
                  />
                </DarkControlRow>

                <DarkControlRow
                  label="Rotação Y"
                  value={`${formatNumber(cameraRotY, 0)}°`}
                >
                  <Slider
                    value={[cameraRotY]}
                    onValueChange={(value) => setCameraRotY(value[0])}
                    min={-120}
                    max={120}
                    step={1}
                    className="w-full"
                  />
                </DarkControlRow>

                <DarkControlRow
                  label="Rotação Z"
                  value={`${formatNumber(cameraRotZ, 0)}°`}
                >
                  <Slider
                    value={[cameraRotZ]}
                    onValueChange={(value) => setCameraRotZ(value[0])}
                    min={-180}
                    max={180}
                    step={1}
                    className="w-full"
                  />
                </DarkControlRow>

                <DarkControlRow
                  label="Zoom"
                  value={`${formatNumber(cameraZoom, 2)}x`}
                >
                  <Slider
                    value={[cameraZoom]}
                    onValueChange={(value) => setCameraZoom(value[0])}
                    min={0.55}
                    max={1.8}
                    step={0.05}
                    className="w-full"
                  />
                </DarkControlRow>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
              <p className="text-sm font-bold text-cyan-200">
                Leitura física
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Quando X e Y estão zerados, a visualização fica como uma função
                seno comum. A rotação Z apenas gira o gráfico na tela. Ao girar
                em X ou Y, o eixo z mostra a fase como cosseno para formar o
                ciclo visual.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-bold text-slate-200">
                Dados atuais
              </p>

              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <DarkMetric
                  label="Tipo"
                  value={
                    waveType === "transversal" ? "Transversal" : "Longitudinal"
                  }
                />
                <DarkMetric
                  label="Sentido"
                  value={direction === "right" ? "Direita" : "Esquerda"}
                />
                <DarkMetric label="A" value={formatUnit(amplitudeM, "m")} />
                <DarkMetric
                  label="λ"
                  value={formatUnit(physicalWavelength, "m")}
                />
                <DarkMetric label="f" value={formatUnit(frequency, "Hz")} />
                <DarkMetric label="v" value={formatUnit(velocity, "m/s")} />
                <DarkMetric label="x₀" value={formatUnit(probeX, "m")} />
                <DarkMetric
                  label="y(x₀,t)"
                  value={formatUnit(probeDisplacement, "m")}
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-9">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950 p-4">
              <div className="overflow-x-auto">
                <svg
                  width="1040"
                  height="620"
                  viewBox="0 0 1040 620"
                  className="mx-auto min-w-[900px] rounded-2xl border border-slate-800 bg-slate-950"
                >
                  <defs>
                    <filter id="cyanGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>

                  <rect width="1040" height="620" fill="#020617" />

                  <text x="42" y="48" fill="#f8fafc" fontSize="21" fontWeight="900">
                    Ciclo trigonométrico → fase → onda
                  </text>

                  <text x="408" y="48" fill="#f8fafc" fontSize="21" fontWeight="900">
                    Linha saindo da origem
                  </text>

                  <text x="408" y="74" fill="#94a3b8" fontSize="13">
                    A onda fica parada. A frente da linha é que vai desenhando a curva.
                  </text>

                  {gridLines.map((line) => (
                    <line
                      key={line.id}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="#1e293b"
                      strokeWidth="1"
                      opacity={line.opacity}
                    />
                  ))}

                  <line
                    x1={xAxis.x1}
                    y1={xAxis.y1}
                    x2={xAxis.x2}
                    y2={xAxis.y2}
                    stroke="#64748b"
                    strokeWidth="3"
                  />
                  <line
                    x1={yAxis.x1}
                    y1={yAxis.y1}
                    x2={yAxis.x2}
                    y2={yAxis.y2}
                    stroke="#64748b"
                    strokeWidth="3"
                  />

                  {!flatCamera && (
                    <>
                      <line
                        x1={zAxis.x1}
                        y1={zAxis.y1}
                        x2={zAxis.x2}
                        y2={zAxis.y2}
                        stroke="#64748b"
                        strokeWidth="3"
                      />

                      <text
                        x={zLabel.x}
                        y={zLabel.y}
                        fill="#94a3b8"
                        fontSize="13"
                        fontWeight="800"
                      >
                        z
                      </text>
                    </>
                  )}

                  <text x={xLabel.x} y={xLabel.y} fill="#94a3b8" fontSize="13" fontWeight="800">
                    x
                  </text>
                  <text x={yLabel.x} y={yLabel.y} fill="#94a3b8" fontSize="13" fontWeight="800">
                    y
                  </text>

                  {!flatCamera && fullGhostWave.length > 0 && (
                    <polyline
                      points={fullGhostWave}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="3"
                      opacity="0.45"
                      strokeDasharray="8 8"
                    />
                  )}

                  {!flatCamera && phaseCirclePoints.length > 0 && (
                    <polyline
                      points={phaseCirclePoints}
                      fill="none"
                      stroke="#67e8f9"
                      strokeWidth="2.5"
                      opacity="0.42"
                      strokeDasharray="6 6"
                    />
                  )}

                  <circle
                    cx={projectedOrigin.x}
                    cy={projectedOrigin.y}
                    r="8"
                    fill="#f97316"
                    stroke="#fed7aa"
                    strokeWidth="3"
                  />
                  <text
                    x={projectedOrigin.x + 12}
                    y={projectedOrigin.y - 10}
                    fill="#fed7aa"
                    fontSize="12"
                    fontWeight="800"
                  >
                    origem
                  </text>

                  <circle
                    cx={projectedFront.x}
                    cy={projectedFront.y}
                    r="7"
                    fill="#22d3ee"
                    stroke="#cffafe"
                    strokeWidth="2"
                  />
                  <text
                    x={projectedFront.x + 12}
                    y={projectedFront.y + 4}
                    fill="#cffafe"
                    fontSize="12"
                    fontWeight="800"
                  >
                    frente
                  </text>

                  {wavePoints.length > 0 && (
                    <>
                      <polyline
                        points={wavePoints}
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="11"
                        opacity="0.16"
                        filter="url(#cyanGlow)"
                      />
                      <polyline
                        points={wavePoints}
                        fill="none"
                        stroke="url(#waveGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#cyanGlow)"
                      />
                    </>
                  )}

                  <circle
                    cx={projectedProbe.x}
                    cy={projectedProbe.y}
                    r="9"
                    fill="#fb923c"
                    stroke="#ffedd5"
                    strokeWidth="3"
                  />
                  <text
                    x={projectedProbe.x + 14}
                    y={projectedProbe.y - 10}
                    fill="#fed7aa"
                    fontSize="12"
                    fontWeight="800"
                  >
                    ponto x₀
                  </text>

                  <circle
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill="rgba(15,23,42,0.65)"
                    stroke="#67e8f9"
                    strokeWidth="3"
                  />

                  <line
                    x1={circle.cx - circle.r - 22}
                    y1={circle.cy}
                    x2={circle.cx + circle.r + 22}
                    y2={circle.cy}
                    stroke="#334155"
                    strokeWidth="2"
                  />

                  <line
                    x1={circle.cx}
                    y1={circle.cy - circle.r - 22}
                    x2={circle.cx}
                    y2={circle.cy + circle.r + 22}
                    stroke="#334155"
                    strokeWidth="2"
                  />

                  <line
                    x1={circle.cx}
                    y1={circle.cy}
                    x2={circlePoint.x}
                    y2={circlePoint.y}
                    stroke="#f97316"
                    strokeWidth="4"
                  />

                  <circle
                    cx={circlePoint.x}
                    cy={circlePoint.y}
                    r="8"
                    fill="#f97316"
                    stroke="#ffedd5"
                    strokeWidth="3"
                  />

                  <line
                    x1={circlePoint.x}
                    y1={circlePoint.y}
                    x2={circle.cx + circle.r + 70}
                    y2={projectionY}
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />

                  <circle
                    cx={circle.cx + circle.r + 70}
                    cy={projectionY}
                    r="6"
                    fill="#22d3ee"
                  />

                  <text
                    x="48"
                    y="375"
                    fill="#e2e8f0"
                    fontSize="14"
                    fontWeight="800"
                  >
                    A projeção vertical do círculo gera o seno.
                  </text>

                  <text x="48" y="400" fill="#94a3b8" fontSize="13">
                    Para um ponto fixo da corda, o movimento é MHS.
                  </text>

                  <text x="48" y="420" fill="#94a3b8" fontSize="13">
                    Z só gira a tela. X ou Y revelam a profundidade de fase.
                  </text>

                  <rect
                    x="395"
                    y="98"
                    width="310"
                    height="82"
                    rx="16"
                    fill="rgba(15,23,42,0.86)"
                    stroke="#334155"
                  />

                  <text x="416" y="128" fill="#e2e8f0" fontSize="13" fontWeight="800">
                    Frente visual da linha
                  </text>

                  <text x="416" y="153" fill="#94a3b8" fontSize="12">
                    origem = {formatNumber(originX, 2)} m
                  </text>

                  <text x="416" y="171" fill="#94a3b8" fontSize="12">
                    frente = {formatNumber(frontX, 2)} m
                  </text>

                  <rect
                    x="725"
                    y="98"
                    width="250"
                    height="82"
                    rx="16"
                    fill="rgba(15,23,42,0.86)"
                    stroke="#334155"
                  />

                  <text x="746" y="128" fill="#e2e8f0" fontSize="13" fontWeight="800">
                    Câmera
                  </text>

                  <text x="746" y="153" fill="#94a3b8" fontSize="12">
                    X = {formatNumber(cameraRotX, 0)}°, Y = {formatNumber(cameraRotY, 0)}°
                  </text>

                  <text x="746" y="171" fill="#94a3b8" fontSize="12">
                    Z = {formatNumber(cameraRotZ, 0)}°, zoom = {formatNumber(cameraZoom, 2)}x
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildProjectedWavePoints({
  originX,
  frontX,
  visibleMeters,
  amplitudeM,
  k,
  phaseRad,
  direction,
  cameraConfig,
}: {
  originX: number;
  frontX: number;
  visibleMeters: number;
  amplitudeM: number;
  k: number;
  phaseRad: number;
  direction: Direction;
  cameraConfig: CameraConfig;
}) {
  const start = Math.min(originX, frontX);
  const end = Math.max(originX, frontX);

  if (Math.abs(end - start) < visibleMeters * 0.01) {
    return "";
  }

  const samples = 260;
  const points: string[] = [];

  for (let i = 0; i <= samples; i++) {
    const alpha = i / samples;

    const xMeters =
      direction === "right"
        ? start + alpha * (end - start)
        : end - alpha * (end - start);

    const relativeX =
      direction === "right" ? xMeters - originX : originX - xMeters;

    const phase = k * relativeX + phaseRad;
    const yMeters = amplitudeM * Math.sin(phase);
    const zMeters = amplitudeM * Math.cos(phase);

    const point = project3DPoint({
      xMeters,
      yMeters,
      zMeters,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });

    points.push(`${point.x.toFixed(2)},${point.y.toFixed(2)}`);
  }

  return points.join(" ");
}

function project3DPoint({
  xMeters,
  yMeters,
  zMeters = 0,
  visibleMeters,
  amplitudeM,
  cameraConfig,
}: {
  xMeters: number;
  yMeters: number;
  zMeters?: number;
  visibleMeters: number;
  amplitudeM: number;
  cameraConfig: CameraConfig;
}) {
  const safeAmplitude = Math.max(amplitudeM, 0.02);
  const xNorm = visibleMeters > 0 ? xMeters / visibleMeters : 0;

  return projectWorldPoint(
    {
      x: (xNorm - 0.5) * 8.6,
      y: (yMeters / safeAmplitude) * 1.65,
      z: (zMeters / safeAmplitude) * 1.65,
    },
    cameraConfig
  );
}

function buildProjectedPhaseCircle({
  xMeters,
  visibleMeters,
  amplitudeM,
  cameraConfig,
}: {
  xMeters: number;
  visibleMeters: number;
  amplitudeM: number;
  cameraConfig: CameraConfig;
}) {
  const points: string[] = [];
  const samples = 160;

  for (let i = 0; i <= samples; i++) {
    const angle = (TWO_PI * i) / samples;

    const yMeters = amplitudeM * Math.sin(angle);
    const zMeters = amplitudeM * Math.cos(angle);

    const point = project3DPoint({
      xMeters,
      yMeters,
      zMeters,
      visibleMeters,
      amplitudeM,
      cameraConfig,
    });

    points.push(`${point.x.toFixed(2)},${point.y.toFixed(2)}`);
  }

  return points.join(" ");
}

function build3DGridLines(cameraConfig: CameraConfig) {
  const lines: {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
  }[] = [];

  for (let i = -4; i <= 4; i++) {
    const a = projectWorldPoint({ x: i, y: 0, z: -2.4 }, cameraConfig);
    const b = projectWorldPoint({ x: i, y: 0, z: 2.4 }, cameraConfig);

    lines.push({
      id: `grid-x-${i}`,
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      opacity: i === 0 ? 0.65 : 0.35,
    });
  }

  for (let j = -3; j <= 3; j++) {
    const z = j * 0.8;
    const a = projectWorldPoint({ x: -4.4, y: 0, z }, cameraConfig);
    const b = projectWorldPoint({ x: 4.4, y: 0, z }, cameraConfig);

    lines.push({
      id: `grid-z-${j}`,
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      opacity: j === 0 ? 0.65 : 0.35,
    });
  }

  return lines;
}

function buildWorldLine(
  a: { x: number; y: number; z: number },
  b: { x: number; y: number; z: number },
  cameraConfig: CameraConfig
) {
  const p1 = projectWorldPoint(a, cameraConfig);
  const p2 = projectWorldPoint(b, cameraConfig);

  return {
    x1: p1.x,
    y1: p1.y,
    x2: p2.x,
    y2: p2.y,
  };
}

function projectWorldPoint(
  point: { x: number; y: number; z: number },
  cameraConfig: CameraConfig
) {
  const flat = isFlatCamera(cameraConfig);

  if (flat) {
    const centerX = 665;
    const centerY = 350;
    const scale = 62 * cameraConfig.zoom;

    const rz = degreesToRadians(cameraConfig.rotZ);
    const cosZ = Math.cos(rz);
    const sinZ = Math.sin(rz);

    const xRotated = point.x * cosZ - point.y * sinZ;
    const yRotated = point.x * sinZ + point.y * cosZ;

    return {
      x: centerX + xRotated * scale,
      y: centerY - yRotated * scale,
      depth: 0,
    };
  }

  const rotated = rotatePoint(point, cameraConfig);

  const cameraDistance = 9;
  const depth = cameraDistance + rotated.z;
  const perspective = cameraDistance / Math.max(2.2, depth);

  const centerX = 665;
  const centerY = 350;
  const scale = 62 * cameraConfig.zoom * perspective;

  return {
    x: centerX + rotated.x * scale,
    y: centerY - rotated.y * scale,
    depth: rotated.z,
  };
}

function rotatePoint(
  point: { x: number; y: number; z: number },
  cameraConfig: CameraConfig
) {
  let { x, y, z } = point;

  const rx = degreesToRadians(cameraConfig.rotX);
  const ry = degreesToRadians(cameraConfig.rotY);
  const rz = degreesToRadians(cameraConfig.rotZ);

  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);

  const y1 = y * cosX - z * sinX;
  const z1 = y * sinX + z * cosX;

  y = y1;
  z = z1;

  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);

  const x2 = x * cosY + z * sinY;
  const z2 = -x * sinY + z * cosY;

  x = x2;
  z = z2;

  const cosZ = Math.cos(rz);
  const sinZ = Math.sin(rz);

  const x3 = x * cosZ - y * sinZ;
  const y3 = x * sinZ + y * cosZ;

  return {
    x: x3,
    y: y3,
    z,
  };
}

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function isFlatCamera(cameraConfig: CameraConfig) {
  return (
    Math.abs(cameraConfig.rotX) < 0.001 &&
    Math.abs(cameraConfig.rotY) < 0.001
  );
}

function DarkControlRow({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-black text-cyan-200">{value}</span>
      </div>
      {children}
    </div>
  );
}

function DarkMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-bold text-slate-200">{value}</span>
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
    const vectorLength = clamp(
      (probeParticleVelocity / velocityScale) * 58,
      -58,
      58
    );

    drawArrow(
      ctx,
      probeCanvasX + 28,
      probeY,
      probeCanvasX + 28,
      probeY + vectorLength,
      "#0ea5e9",
      "v part."
    );

    const accelScale = amplitudeM * (omega ** 2) || 1;
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
    const probeCanvasX =
      baseProbeX + displacementPx * (probeDisplacement / amplitudeM);

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

    const accelScale = amplitudeM * (omega ** 2) || 1;
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
  ctx.fillText(
    `v máx. part. = ${formatNumber(maxParticleVelocity, 3)} m/s`,
    x + 18,
    y + 96
  );
  ctx.fillText(
    `a máx. part. = ${formatNumber(maxParticleAcceleration, 3)} m/s²`,
    x + 18,
    y + 114
  );
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
  ctx.fillText(
    `tipo: ${waveType === "transversal" ? "Transversal" : "Longitudinal"}`,
    38,
    68
  );
  ctx.fillText(`meio: ${mediumLabel}`, 38, 88);
  ctx.fillText(
    `sentido: ${direction === "right" ? "direita" : "esquerda"}`,
    38,
    108
  );
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
  ctx.fillText(
    `y = ${formatNumber(probeDisplacement, 3)} m`,
    boxX + 95,
    boxY + 40
  );
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
