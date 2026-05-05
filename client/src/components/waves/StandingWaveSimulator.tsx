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

type StandingSystem = "string_fixed" | "tube_open_open" | "tube_open_closed";
type TubeQuantity = "displacement" | "pressure";

const TWO_PI = 2 * Math.PI;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const StandingWaveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const [system, setSystem] = useState<StandingSystem>("string_fixed");
  const [tubeQuantity, setTubeQuantity] = useState<TubeQuantity>("displacement");

  const [isPlaying, setIsPlaying] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showMarkers, setShowMarkers] = useState(true);
  const [showProbe, setShowProbe] = useState(true);
  const [showEnergy, setShowEnergy] = useState(true);

  const [length, setLength] = useState(2);
  const [modeIndex, setModeIndex] = useState(2);
  const [amplitudeCm, setAmplitudeCm] = useState(20);

  const [tension, setTension] = useState(80);
  const [linearDensity, setLinearDensity] = useState(0.02);
  const [soundSpeed, setSoundSpeed] = useState(340);

  const [probePercent, setProbePercent] = useState(35);
  const [time, setTime] = useState(0);

  const visualQuantity: TubeQuantity = system === "string_fixed" ? "displacement" : tubeQuantity;

  const harmonicNumber = useMemo(() => {
    if (system === "tube_open_closed") {
      return 2 * modeIndex - 1;
    }

    return modeIndex;
  }, [system, modeIndex]);

  const systemLabel = useMemo(() => {
    if (system === "string_fixed") return "Corda fixa nas duas extremidades";
    if (system === "tube_open_open") return "Tubo aberto-aberto";
    return "Tubo aberto-fechado";
  }, [system]);

  const quantityLabel = useMemo(() => {
    if (system === "string_fixed") return "deslocamento da corda";
    if (visualQuantity === "displacement") return "deslocamento do ar";
    return "pressão do ar";
  }, [system, visualQuantity]);

  const waveSpeed = useMemo(() => {
    if (system === "string_fixed") {
      if (linearDensity <= 0) return 0;
      return Math.sqrt(tension / linearDensity);
    }

    return soundSpeed;
  }, [system, tension, linearDensity, soundSpeed]);

  const wavelength = useMemo(() => {
    if (harmonicNumber <= 0) return 0;

    if (system === "tube_open_closed") {
      return (4 * length) / harmonicNumber;
    }

    return (2 * length) / harmonicNumber;
  }, [system, length, harmonicNumber]);

  const frequency = useMemo(() => {
    if (wavelength <= 0) return 0;
    return waveSpeed / wavelength;
  }, [waveSpeed, wavelength]);

  const period = useMemo(() => {
    if (frequency <= 0) return 0;
    return 1 / frequency;
  }, [frequency]);

  const omega = useMemo(() => TWO_PI * frequency, [frequency]);

  const k = useMemo(() => {
    if (wavelength <= 0) return 0;
    return TWO_PI / wavelength;
  }, [wavelength]);

  const amplitudeM = useMemo(() => amplitudeCm / 100, [amplitudeCm]);

  const probeX = useMemo(() => {
    return (probePercent / 100) * length;
  }, [probePercent, length]);

  const probeShape = useMemo(() => {
    return getStandingShape({
      system,
      quantity: visualQuantity,
      harmonicNumber,
      x: probeX,
      length,
    });
  }, [system, visualQuantity, harmonicNumber, probeX, length]);

  const probeValue = useMemo(() => {
    return amplitudeM * probeShape * Math.cos(omega * time);
  }, [amplitudeM, probeShape, omega, time]);

  const probeVelocity = useMemo(() => {
    return -amplitudeM * probeShape * omega * Math.sin(omega * time);
  }, [amplitudeM, probeShape, omega, time]);

  const probeAcceleration = useMemo(() => {
    return -omega ** 2 * probeValue;
  }, [omega, probeValue]);

  const localMaxAmplitude = useMemo(() => {
    return Math.abs(amplitudeM * probeShape);
  }, [amplitudeM, probeShape]);

  const relativeEnergyLocal = useMemo(() => {
    return localMaxAmplitude ** 2 * omega ** 2;
  }, [localMaxAmplitude, omega]);

  const energyPercent = useMemo(() => {
    return clamp(relativeEnergyLocal * 20, 0, 100);
  }, [relativeEnergyLocal]);

  const markerPositions = useMemo(() => {
    return getNodeAntinodePositions({
      system,
      quantity: visualQuantity,
      harmonicNumber,
      length,
    });
  }, [system, visualQuantity, harmonicNumber, length]);

  const interpretation = useMemo(() => {
    if (system === "string_fixed") {
      return "Na corda fixa-fixa, as duas extremidades são nós. A frequência natural aumenta quando a tensão aumenta e diminui quando a densidade linear aumenta.";
    }

    if (system === "tube_open_open") {
      if (visualQuantity === "displacement") {
        return "No tubo aberto-aberto, as extremidades abertas são ventres de deslocamento. Para pressão, elas seriam nós.";
      }

      return "No tubo aberto-aberto, as extremidades abertas são nós de pressão. Deslocamento e pressão ficam invertidos.";
    }

    if (visualQuantity === "displacement") {
      return "No tubo aberto-fechado, a extremidade fechada é nó de deslocamento e a aberta é ventre. Só aparecem harmônicos ímpares.";
    }

    return "No tubo aberto-fechado, a extremidade fechada é ventre de pressão e a aberta é nó de pressão. É o espelho do deslocamento.";
  }, [system, visualQuantity]);

  const reset = () => {
    setSystem("string_fixed");
    setTubeQuantity("displacement");
    setIsPlaying(true);
    setShowParticles(true);
    setShowEnvelope(true);
    setShowMarkers(true);
    setShowProbe(true);
    setShowEnergy(true);
    setLength(2);
    setModeIndex(2);
    setAmplitudeCm(20);
    setTension(80);
    setLinearDensity(0.02);
    setSoundSpeed(340);
    setProbePercent(35);
    setTime(0);
    lastTimeRef.current = 0;
  };

  useEffect(() => {
    setTime(0);
    lastTimeRef.current = 0;
  }, [system, tubeQuantity, modeIndex, length]);

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

    drawStandingSystem({
      ctx,
      width,
      height,
      system,
      quantity: visualQuantity,
      harmonicNumber,
      length,
      amplitudeM,
      omega,
      time,
      showParticles,
      showEnvelope,
      showMarkers,
      showProbe,
      probeX,
      probeValue,
      probeVelocity,
      probeAcceleration,
      markerPositions,
    });

    if (showEnergy) {
      drawEnergyPanel({
        ctx,
        width,
        relativeEnergyLocal,
        energyPercent,
        localMaxAmplitude,
        probeVelocity,
        probeAcceleration,
      });
    }

    drawInfoBox({
      ctx,
      systemLabel,
      quantityLabel,
      harmonicNumber,
      length,
      wavelength,
      frequency,
      waveSpeed,
      period,
      probeX,
      probeValue,
    });
  }, [
    system,
    visualQuantity,
    systemLabel,
    quantityLabel,
    harmonicNumber,
    length,
    amplitudeM,
    omega,
    time,
    showParticles,
    showEnvelope,
    showMarkers,
    showProbe,
    showEnergy,
    markerPositions,
    relativeEnergyLocal,
    energyPercent,
    localMaxAmplitude,
    probeX,
    probeValue,
    probeVelocity,
    probeAcceleration,
    wavelength,
    frequency,
    waveSpeed,
    period,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Ondas Estacionárias
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise nós, ventres, harmônicos e frequências naturais sem precisar invocar magia negra trigonométrica.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Sistema
                </p>

                <Select
                  value={system}
                  onValueChange={(value) => setSystem(value as StandingSystem)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="string_fixed">Corda fixa-fixa</SelectItem>
                    <SelectItem value="tube_open_open">Tubo aberto-aberto</SelectItem>
                    <SelectItem value="tube_open_closed">Tubo aberto-fechado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {system !== "string_fixed" && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Grandeza visualizada
                  </p>

                  <Select
                    value={tubeQuantity}
                    onValueChange={(value) => setTubeQuantity(value as TubeQuantity)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="displacement">Deslocamento do ar</SelectItem>
                      <SelectItem value="pressure">Pressão do ar</SelectItem>
                    </SelectContent>
                  </Select>

                  <p className="mt-2 text-xs text-slate-500">
                    Em tubos, deslocamento e pressão têm nós e ventres trocados.
                  </p>
                </div>
              )}

              <ControlRow
                label="Comprimento"
                symbol="L"
                value={formatUnit(length, "m")}
              >
                <Slider
                  value={[length]}
                  onValueChange={(value) => setLength(value[0])}
                  min={0.2}
                  max={5}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label={system === "tube_open_closed" ? "Modo permitido" : "Harmônico"}
                symbol={system === "tube_open_closed" ? "m" : "n"}
                value={
                  system === "tube_open_closed"
                    ? `${modeIndex}º modo → n = ${harmonicNumber}`
                    : String(harmonicNumber)
                }
              >
                <Slider
                  value={[modeIndex]}
                  onValueChange={(value) => setModeIndex(value[0])}
                  min={1}
                  max={6}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Amplitude"
                symbol="A"
                value={formatUnit(amplitudeCm, "cm")}
              >
                <Slider
                  value={[amplitudeCm]}
                  onValueChange={(value) => setAmplitudeCm(value[0])}
                  min={2}
                  max={40}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              {system === "string_fixed" ? (
                <>
                  <ControlRow
                    label="Tensão"
                    symbol="F"
                    value={formatUnit(tension, "N")}
                  >
                    <Slider
                      value={[tension]}
                      onValueChange={(value) => setTension(value[0])}
                      min={5}
                      max={300}
                      step={5}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Densidade linear"
                    symbol="μ"
                    value={formatUnit(linearDensity, "kg/m")}
                  >
                    <Slider
                      value={[linearDensity]}
                      onValueChange={(value) => setLinearDensity(value[0])}
                      min={0.005}
                      max={0.1}
                      step={0.005}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              ) : (
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
              )}

              <ControlRow
                label="Ponto analisado"
                symbol="x₀"
                value={formatUnit(probeX, "m")}
              >
                <Slider
                  value={[probePercent]}
                  onValueChange={(value) => setProbePercent(value[0])}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <div className="grid grid-cols-2 gap-3">
                <ToggleButton active={showParticles} onClick={() => setShowParticles(!showParticles)}>
                  Partículas
                </ToggleButton>

                <ToggleButton active={showEnvelope} onClick={() => setShowEnvelope(!showEnvelope)}>
                  Envoltória
                </ToggleButton>

                <ToggleButton active={showMarkers} onClick={() => setShowMarkers(!showMarkers)}>
                  Nós/Ventres
                </ToggleButton>

                <ToggleButton active={showProbe} onClick={() => setShowProbe(!showProbe)}>
                  Ponto x₀
                </ToggleButton>

                <ToggleButton active={showEnergy} onClick={() => setShowEnergy(!showEnergy)}>
                  Energia
                </ToggleButton>

                <button
                  onClick={reset}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Resetar
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
                label="Sistema"
                value={systemLabel}
                valueClassName="text-purple-700"
              />

              <MetricCard
                label="Grandeza visualizada"
                value={quantityLabel}
              />

              <MetricCard
                label={
                  <>
                    Velocidade <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(waveSpeed, "m/s")}
                valueClassName="text-indigo-700"
              />

              <MetricCard
                label={
                  <>
                    Comprimento de onda{" "}
                    <MathFormula inline formula={String.raw`\lambda`} />
                  </>
                }
                value={formatUnit(wavelength, "m")}
              />

              <MetricCard
                label={
                  <>
                    Frequência natural{" "}
                    <MathFormula inline formula={String.raw`f_n`} />
                  </>
                }
                value={formatUnit(frequency, "Hz")}
                valueClassName="text-green-700"
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
                label="Nós visualizados"
                value={String(markerPositions.nodes.length)}
              />

              <MetricCard
                label="Ventres visualizados"
                value={String(markerPositions.antinodes.length)}
              />

              <MetricCard
                label={
                  <>
                    Valor em <MathFormula inline formula={String.raw`x_0`} />
                  </>
                }
                value={formatUnit(probeValue, system === "string_fixed" || visualQuantity === "displacement" ? "m" : "u.p.")}
                valueClassName={probeValue >= 0 ? "text-red-700" : "text-blue-700"}
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
                title="Sistema"
                values={[
                  ["Tipo", systemLabel],
                  ["L", formatUnit(length, "m")],
                  ["n", String(harmonicNumber)],
                ]}
              />

              <CalcMiniCard
                title="Onda estacionária"
                values={[
                  ["λ", formatUnit(wavelength, "m")],
                  ["f", formatUnit(frequency, "Hz")],
                  ["T", formatUnit(period, "s")],
                  ["ω", formatUnit(omega, "rad/s")],
                ]}
              />

              <CalcMiniCard
                title="Ponto analisado"
                values={[
                  ["x₀", formatUnit(probeX, "m")],
                  ["amplitude local", formatUnit(localMaxAmplitude, "m")],
                  ["valor atual", formatNumber(probeValue, 4)],
                  ["velocidade local", formatUnit(probeVelocity, "m/s")],
                  ["aceleração local", formatUnit(probeAcceleration, "m/s²")],
                ]}
              />

              <CalcMiniCard
                title="Marcadores"
                values={[
                  ["Nós", String(markerPositions.nodes.length)],
                  ["Ventres", String(markerPositions.antinodes.length)],
                  ["Visual", quantityLabel],
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
              {system === "string_fixed" && (
                <CalcSection
                  title="Velocidade na corda"
                  formulas={[
                    String.raw`v = \sqrt{\frac{F}{\mu}}`,
                    String.raw`v = \sqrt{\frac{${formatNumber(tension)}}{${formatNumber(linearDensity, 4)}}} = ${formatNumber(waveSpeed, 4)}\,\text{m/s}`,
                  ]}
                />
              )}

              {system !== "string_fixed" && (
                <CalcSection
                  title="Velocidade no tubo"
                  formulas={[
                    String.raw`v \approx v_{\text{som}}`,
                    String.raw`v = ${formatNumber(soundSpeed)}\,\text{m/s}`,
                    visualQuantity === "displacement"
                      ? String.raw`\text{Estamos visualizando deslocamento das partículas de ar.}`
                      : String.raw`\text{Estamos visualizando variação de pressão.}`,
                  ]}
                />
              )}

              {system !== "tube_open_closed" ? (
                <CalcSection
                  title={
                    system === "string_fixed"
                      ? "Corda fixa nas duas extremidades"
                      : "Tubo aberto-aberto"
                  }
                  formulas={[
                    String.raw`\lambda_n = \frac{2L}{n}`,
                    String.raw`\lambda_${harmonicNumber} = \frac{2\cdot ${formatNumber(length)}}{${harmonicNumber}} = ${formatNumber(wavelength, 4)}\,\text{m}`,
                    String.raw`f_n = \frac{v}{\lambda_n} = \frac{nv}{2L}`,
                    String.raw`f_${harmonicNumber} = \frac{${harmonicNumber}\cdot ${formatNumber(waveSpeed, 4)}}{2\cdot ${formatNumber(length)}} = ${formatNumber(frequency, 4)}\,\text{Hz}`,
                  ]}
                />
              ) : (
                <CalcSection
                  title="Tubo aberto-fechado"
                  formulas={[
                    String.raw`n = 1,3,5,7,\ldots`,
                    String.raw`\lambda_n = \frac{4L}{n}`,
                    String.raw`\lambda_${harmonicNumber} = \frac{4\cdot ${formatNumber(length)}}{${harmonicNumber}} = ${formatNumber(wavelength, 4)}\,\text{m}`,
                    String.raw`f_n = \frac{v}{\lambda_n} = \frac{nv}{4L}`,
                    String.raw`f_${harmonicNumber} = \frac{${harmonicNumber}\cdot ${formatNumber(waveSpeed, 4)}}{4\cdot ${formatNumber(length)}} = ${formatNumber(frequency, 4)}\,\text{Hz}`,
                  ]}
                />
              )}

              <CalcSection
                title="Forma temporal da onda estacionária"
                formulas={[
                  getStandingEquation(system, visualQuantity),
                  String.raw`\omega = 2\pi f = 2\pi\cdot ${formatNumber(frequency, 4)} = ${formatNumber(omega, 4)}\,\text{rad/s}`,
                  String.raw`T = \frac{1}{f} = \frac{1}{${formatNumber(frequency, 4)}} = ${formatNumber(period, 4)}\,\text{s}`,
                ]}
              />

              <CalcSection
                title="Ponto analisado"
                formulas={[
                  String.raw`x_0 = ${formatNumber(probeX, 4)}\,\text{m}`,
                  String.raw`\text{amplitude local} = A|\text{forma}(x_0)| = ${formatNumber(localMaxAmplitude, 4)}\,\text{m}`,
                  String.raw`\text{valor atual em }x_0 = ${formatNumber(probeValue, 4)}`,
                  String.raw`v_{\text{local}} = ${formatNumber(probeVelocity, 4)}\,\text{m/s}`,
                  String.raw`a_{\text{local}} = ${formatNumber(probeAcceleration, 4)}\,\text{m/s}^2`,
                ]}
              />

              <CalcSection
                title="Leitura física dos nós e ventres"
                formulas={[
                  system === "string_fixed"
                    ? String.raw`\text{Em cordas fixas, as extremidades são nós de deslocamento.}`
                    : system === "tube_open_open" && visualQuantity === "displacement"
                    ? String.raw`\text{Em tubo aberto-aberto, as extremidades são ventres de deslocamento.}`
                    : system === "tube_open_open" && visualQuantity === "pressure"
                    ? String.raw`\text{Em tubo aberto-aberto, as extremidades são nós de pressão.}`
                    : system === "tube_open_closed" && visualQuantity === "displacement"
                    ? String.raw`\text{No aberto-fechado, a extremidade fechada é nó de deslocamento e a aberta é ventre.}`
                    : String.raw`\text{No aberto-fechado, a extremidade fechada é ventre de pressão e a aberta é nó.}`,
                  String.raw`\text{Nós são pontos de amplitude nula; ventres são pontos de amplitude máxima.}`,
                ]}
              />

              <CalcSection
                title="Energia relativa local"
                formulas={[
                  String.raw`E_{\text{local}} \propto A_{\text{local}}^2\omega^2`,
                  String.raw`E_{\text{local}} \propto ${formatNumber(localMaxAmplitude, 4)}^2\cdot ${formatNumber(omega, 4)}^2`,
                  String.raw`E_{\text{local}} \propto ${formatNumber(relativeEnergyLocal, 4)}`,
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

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        active
          ? "border-purple-300 bg-purple-50 text-purple-700"
          : "border-slate-300 bg-white text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function getStandingShape({
  system,
  quantity,
  harmonicNumber,
  x,
  length,
}: {
  system: StandingSystem;
  quantity: TubeQuantity;
  harmonicNumber: number;
  x: number;
  length: number;
}) {
  if (system === "string_fixed") {
    return Math.sin((harmonicNumber * Math.PI * x) / length);
  }

  if (system === "tube_open_open") {
    if (quantity === "displacement") {
      return Math.cos((harmonicNumber * Math.PI * x) / length);
    }

    return Math.sin((harmonicNumber * Math.PI * x) / length);
  }

  if (quantity === "displacement") {
    return Math.sin((harmonicNumber * Math.PI * x) / (2 * length));
  }

  return Math.cos((harmonicNumber * Math.PI * x) / (2 * length));
}

function getNodeAntinodePositions({
  system,
  quantity,
  harmonicNumber,
  length,
}: {
  system: StandingSystem;
  quantity: TubeQuantity;
  harmonicNumber: number;
  length: number;
}) {
  const nodes: number[] = [];
  const antinodes: number[] = [];

  const samples = 2000;
  let lastAbs = Math.abs(
    getStandingShape({
      system,
      quantity,
      harmonicNumber,
      x: 0,
      length,
    })
  );

  for (let i = 0; i <= samples; i++) {
    const x = (i / samples) * length;
    const shape = getStandingShape({
      system,
      quantity,
      harmonicNumber,
      x,
      length,
    });

    const absShape = Math.abs(shape);

    if (absShape < 0.003) {
      pushUnique(nodes, x, length * 0.03);
    }

    if (i > 0 && i < samples) {
      const beforeX = ((i - 1) / samples) * length;
      const afterX = ((i + 1) / samples) * length;

      const before = Math.abs(
        getStandingShape({
          system,
          quantity,
          harmonicNumber,
          x: beforeX,
          length,
        })
      );

      const after = Math.abs(
        getStandingShape({
          system,
          quantity,
          harmonicNumber,
          x: afterX,
          length,
        })
      );

      if (absShape >= before && absShape >= after && absShape > 0.997) {
        pushUnique(antinodes, x, length * 0.03);
      }
    }

    lastAbs = absShape;
  }

  if (lastAbs < 0.003) {
    pushUnique(nodes, length, length * 0.03);
  }

  return {
    nodes,
    antinodes,
  };
}

function pushUnique(values: number[], next: number, tolerance: number) {
  const exists = values.some((value) => Math.abs(value - next) < tolerance);

  if (!exists) {
    values.push(next);
  }
}

function getStandingEquation(system: StandingSystem, quantity: TubeQuantity) {
  if (system === "string_fixed") {
    return String.raw`y(x,t) = A\sin\left(\frac{n\pi x}{L}\right)\cos(\omega t)`;
  }

  if (system === "tube_open_open") {
    if (quantity === "displacement") {
      return String.raw`s(x,t) = A\cos\left(\frac{n\pi x}{L}\right)\cos(\omega t)`;
    }

    return String.raw`p(x,t) = p_0\sin\left(\frac{n\pi x}{L}\right)\cos(\omega t)`;
  }

  if (quantity === "displacement") {
    return String.raw`s(x,t) = A\sin\left(\frac{n\pi x}{2L}\right)\cos(\omega t)`;
  }

  return String.raw`p(x,t) = p_0\cos\left(\frac{n\pi x}{2L}\right)\cos(\omega t)`;
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

function metersToCanvasX(x: number, length: number, startX: number, endX: number) {
  return startX + (x / length) * (endX - startX);
}

function drawStandingSystem({
  ctx,
  width,
  height,
  system,
  quantity,
  harmonicNumber,
  length,
  amplitudeM,
  omega,
  time,
  showParticles,
  showEnvelope,
  showMarkers,
  showProbe,
  probeX,
  probeValue,
  probeVelocity,
  probeAcceleration,
  markerPositions,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  system: StandingSystem;
  quantity: TubeQuantity;
  harmonicNumber: number;
  length: number;
  amplitudeM: number;
  omega: number;
  time: number;
  showParticles: boolean;
  showEnvelope: boolean;
  showMarkers: boolean;
  showProbe: boolean;
  probeX: number;
  probeValue: number;
  probeVelocity: number;
  probeAcceleration: number;
  markerPositions: {
    nodes: number[];
    antinodes: number[];
  };
}) {
  const centerY = height / 2;
  const startX = 125;
  const endX = width - 125;
  const amplitudePx = clamp(amplitudeM * 420, 18, 115);

  drawSystemBoundaries({
    ctx,
    system,
    quantity,
    startX,
    endX,
    centerY,
  });

  if (showEnvelope) {
    drawEnvelope({
      ctx,
      system,
      quantity,
      harmonicNumber,
      length,
      startX,
      endX,
      centerY,
      amplitudePx,
    });
  }

  ctx.beginPath();
  ctx.strokeStyle = quantity === "pressure" ? "#dc2626" : "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let px = startX; px <= endX; px++) {
    const x = ((px - startX) / (endX - startX)) * length;
    const shape = getStandingShape({
      system,
      quantity,
      harmonicNumber,
      x,
      length,
    });

    const y = centerY + amplitudePx * shape * Math.cos(omega * time);

    if (px === startX) ctx.moveTo(px, y);
    else ctx.lineTo(px, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let i = 0; i <= 34; i++) {
      const x = (i / 34) * length;
      const px = metersToCanvasX(x, length, startX, endX);
      const shape = getStandingShape({
        system,
        quantity,
        harmonicNumber,
        x,
        length,
      });

      const y = centerY + amplitudePx * shape * Math.cos(omega * time);

      ctx.fillStyle = quantity === "pressure" ? "#ef4444" : "#4f46e5";
      ctx.beginPath();
      ctx.arc(px, y, i % 4 === 0 ? 6 : 4, 0, TWO_PI);
      ctx.fill();

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  if (showMarkers) {
    markerPositions.nodes.forEach((x) => {
      const px = metersToCanvasX(x, length, startX, endX);
      drawNode(ctx, px, centerY);
    });

    markerPositions.antinodes.forEach((x) => {
      const px = metersToCanvasX(x, length, startX, endX);
      drawAntinode(ctx, px, centerY - amplitudePx - 22);
    });
  }

  if (showProbe) {
    drawProbe({
      ctx,
      system,
      quantity,
      length,
      startX,
      endX,
      centerY,
      amplitudeM,
      amplitudePx,
      probeX,
      probeValue,
      probeVelocity,
      probeAcceleration,
    });
  }
}

function drawSystemBoundaries({
  ctx,
  system,
  quantity,
  startX,
  endX,
  centerY,
}: {
  ctx: CanvasRenderingContext2D;
  system: StandingSystem;
  quantity: TubeQuantity;
  startX: number;
  endX: number;
  centerY: number;
}) {
  if (system === "string_fixed") {
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(startX, centerY - 105);
    ctx.lineTo(startX, centerY + 105);
    ctx.moveTo(endX, centerY - 105);
    ctx.lineTo(endX, centerY + 105);
    ctx.stroke();

    ctx.fillStyle = "#475569";
    ctx.font = "bold 12px Arial";
    ctx.fillText("fixo", startX - 12, centerY + 130);
    ctx.fillText("fixo", endX - 12, centerY + 130);
    return;
  }

  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(startX, centerY - 72);
  ctx.lineTo(endX, centerY - 72);
  ctx.moveTo(startX, centerY + 72);
  ctx.lineTo(endX, centerY + 72);
  ctx.stroke();

  if (system === "tube_open_closed") {
    ctx.beginPath();
    ctx.moveTo(startX, centerY - 72);
    ctx.lineTo(startX, centerY + 72);
    ctx.stroke();
  }

  ctx.fillStyle = "#475569";
  ctx.font = "bold 12px Arial";

  if (system === "tube_open_open") {
    ctx.fillText("aberto", startX - 20, centerY + 105);
    ctx.fillText("aberto", endX - 20, centerY + 105);
  } else {
    ctx.fillText("fechado", startX - 25, centerY + 105);
    ctx.fillText("aberto", endX - 20, centerY + 105);
  }

  ctx.fillStyle = quantity === "pressure" ? "#dc2626" : "#7c3aed";
  ctx.font = "bold 12px Arial";
  ctx.fillText(quantity === "pressure" ? "pressão" : "deslocamento", startX + 8, centerY - 92);
}

function drawEnvelope({
  ctx,
  system,
  quantity,
  harmonicNumber,
  length,
  startX,
  endX,
  centerY,
  amplitudePx,
}: {
  ctx: CanvasRenderingContext2D;
  system: StandingSystem;
  quantity: TubeQuantity;
  harmonicNumber: number;
  length: number;
  startX: number;
  endX: number;
  centerY: number;
  amplitudePx: number;
}) {
  ctx.strokeStyle = "rgba(124, 58, 237, 0.35)";
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 7]);

  ctx.beginPath();
  for (let px = startX; px <= endX; px++) {
    const x = ((px - startX) / (endX - startX)) * length;
    const shape = Math.abs(
      getStandingShape({
        system,
        quantity,
        harmonicNumber,
        x,
        length,
      })
    );

    const y = centerY - amplitudePx * shape;

    if (px === startX) ctx.moveTo(px, y);
    else ctx.lineTo(px, y);
  }
  ctx.stroke();

  ctx.beginPath();
  for (let px = startX; px <= endX; px++) {
    const x = ((px - startX) / (endX - startX)) * length;
    const shape = Math.abs(
      getStandingShape({
        system,
        quantity,
        harmonicNumber,
        x,
        length,
      })
    );

    const y = centerY + amplitudePx * shape;

    if (px === startX) ctx.moveTo(px, y);
    else ctx.lineTo(px, y);
  }
  ctx.stroke();

  ctx.setLineDash([]);
}

function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, TWO_PI);
  ctx.fill();

  ctx.font = "bold 11px Arial";
  ctx.fillText("nó", x - 8, y + 23);
}

function drawAntinode(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = "#7c3aed";
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, TWO_PI);
  ctx.fill();

  ctx.font = "bold 11px Arial";
  ctx.fillText("ventre", x - 18, y - 8);
}

function drawProbe({
  ctx,
  system,
  quantity,
  length,
  startX,
  endX,
  centerY,
  amplitudeM,
  amplitudePx,
  probeX,
  probeValue,
  probeVelocity,
  probeAcceleration,
}: {
  ctx: CanvasRenderingContext2D;
  system: StandingSystem;
  quantity: TubeQuantity;
  length: number;
  startX: number;
  endX: number;
  centerY: number;
  amplitudeM: number;
  amplitudePx: number;
  probeX: number;
  probeValue: number;
  probeVelocity: number;
  probeAcceleration: number;
}) {
  const px = metersToCanvasX(probeX, length, startX, endX);
  const y = centerY + amplitudePx * (probeValue / (amplitudeM || 1));

  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(px, 40);
  ctx.lineTo(px, 405);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.arc(px, y, 10, 0, TWO_PI);
  ctx.fill();

  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.stroke();

  const velocityScale = Math.max(Math.abs(probeVelocity), amplitudeM * 10, 0.01);
  const velocityLength = clamp((probeVelocity / velocityScale) * 58, -58, 58);

  drawArrow(
    ctx,
    px + 30,
    y,
    px + 30,
    y + velocityLength,
    "#0ea5e9",
    "v local"
  );

  const accelScale = Math.max(Math.abs(probeAcceleration), amplitudeM * 100, 0.01);
  const accelLength = clamp((probeAcceleration / accelScale) * 48, -48, 48);

  drawArrow(
    ctx,
    px + 64,
    y,
    px + 64,
    y + accelLength,
    "#a855f7",
    "a local"
  );

  const boxX = clamp(px + 18, 20, 760);
  const boxY = clamp(y - 75, 18, 365);

  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.strokeStyle = "#fed7aa";
  ctx.lineWidth = 1;
  roundRect(ctx, boxX, boxY, 185, 62, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#9a3412";
  ctx.font = "bold 12px Arial";
  ctx.fillText("ponto analisado", boxX + 12, boxY + 22);

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(`x₀ = ${formatNumber(probeX, 2)} m`, boxX + 12, boxY + 42);
  ctx.fillText(
    `${quantity === "pressure" ? "p" : "y"} = ${formatNumber(probeValue, 3)}`,
    boxX + 96,
    boxY + 42
  );
}

function drawEnergyPanel({
  ctx,
  width,
  relativeEnergyLocal,
  energyPercent,
  localMaxAmplitude,
  probeVelocity,
  probeAcceleration,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  relativeEnergyLocal: number;
  energyPercent: number;
  localMaxAmplitude: number;
  probeVelocity: number;
  probeAcceleration: number;
}) {
  const x = width - 315;
  const y = 22;

  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, 285, 122, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("Energia local relativa", x + 18, y + 28);

  ctx.fillStyle = "#e2e8f0";
  roundRect(ctx, x + 18, y + 44, 240, 14, 7);
  ctx.fill();

  ctx.fillStyle = "#7c3aed";
  roundRect(ctx, x + 18, y + 44, (240 * energyPercent) / 100, 14, 7);
  ctx.fill();

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(`A local = ${formatNumber(localMaxAmplitude, 4)} m`, x + 18, y + 78);
  ctx.fillText(`v local = ${formatNumber(probeVelocity, 3)} m/s`, x + 18, y + 96);
  ctx.fillText(`a local = ${formatNumber(probeAcceleration, 3)} m/s²`, x + 18, y + 114);
}

function drawInfoBox({
  ctx,
  systemLabel,
  quantityLabel,
  harmonicNumber,
  length,
  wavelength,
  frequency,
  waveSpeed,
  period,
  probeX,
  probeValue,
}: {
  ctx: CanvasRenderingContext2D;
  systemLabel: string;
  quantityLabel: string;
  harmonicNumber: number;
  length: number;
  wavelength: number;
  frequency: number;
  waveSpeed: number;
  period: number;
  probeX: number;
  probeValue: number;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 350, 188, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("ONDA ESTACIONÁRIA", 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`sistema: ${systemLabel}`, 38, 68);
  ctx.fillText(`visual: ${quantityLabel}`, 38, 88);
  ctx.fillText(`n = ${harmonicNumber}`, 38, 108);
  ctx.fillText(`L = ${formatNumber(length, 2)} m`, 38, 128);
  ctx.fillText(`λ = ${formatNumber(wavelength, 2)} m`, 38, 148);

  ctx.fillText(`f = ${formatNumber(frequency, 2)} Hz`, 190, 108);
  ctx.fillText(`v = ${formatNumber(waveSpeed, 2)} m/s`, 190, 128);
  ctx.fillText(`T = ${formatNumber(period, 2)} s`, 190, 148);

  ctx.fillText(`x₀ = ${formatNumber(probeX, 2)} m`, 38, 172);
  ctx.fillText(`valor = ${formatNumber(probeValue, 3)}`, 190, 172);
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
