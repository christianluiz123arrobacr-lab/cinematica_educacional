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
import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCw } from "lucide-react";

type DopplerMode =
  | "fonte_aproxima"
  | "fonte_afasta"
  | "observador_aproxima"
  | "observador_afasta"
  | "ambos_aproximam"
  | "ambos_afastam";

type SourceVisual = "ambulance" | "speaker" | "car";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const DopplerSimulator: React.FC = () => {
  const animationIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const [mode, setMode] = useState<DopplerMode>("ambos_aproximam");
  const [sourceVisual, setSourceVisual] = useState<SourceVisual>("ambulance");

  const [sourceFrequency, setSourceFrequency] = useState(440);
  const [soundSpeed, setSoundSpeed] = useState(340);
  const [sourceSpeed, setSourceSpeed] = useState(30);
  const [observerSpeed, setObserverSpeed] = useState(20);

  const [isPlaying, setIsPlaying] = useState(true);
  const [showWavefronts, setShowWavefronts] = useState(true);
  const [showGuides, setShowGuides] = useState(true);
  const [showPitchMeter, setShowPitchMeter] = useState(true);
  const [time, setTime] = useState(0);

  const observerSignedSpeed = useMemo(() => {
    if (mode === "observador_aproxima" || mode === "ambos_aproximam") {
      return observerSpeed;
    }

    if (mode === "observador_afasta" || mode === "ambos_afastam") {
      return -observerSpeed;
    }

    return 0;
  }, [mode, observerSpeed]);

  const sourceSignedSpeed = useMemo(() => {
    if (mode === "fonte_aproxima" || mode === "ambos_aproximam") {
      return sourceSpeed;
    }

    if (mode === "fonte_afasta" || mode === "ambos_afastam") {
      return -sourceSpeed;
    }

    return 0;
  }, [mode, sourceSpeed]);

  const movingSourceSpeed = useMemo(() => {
    if (
      mode === "fonte_aproxima" ||
      mode === "fonte_afasta" ||
      mode === "ambos_aproximam" ||
      mode === "ambos_afastam"
    ) {
      return sourceSpeed;
    }

    return 0;
  }, [mode, sourceSpeed]);

  const apparentFrequency = useMemo(() => {
    const denominator = soundSpeed - sourceSignedSpeed;
    const numerator = soundSpeed + observerSignedSpeed;

    if (Math.abs(denominator) < 1e-9) {
      return Infinity;
    }

    return sourceFrequency * (numerator / denominator);
  }, [sourceFrequency, soundSpeed, sourceSignedSpeed, observerSignedSpeed]);

  const frequencyDifference = useMemo(() => {
    if (!Number.isFinite(apparentFrequency)) return Infinity;
    return apparentFrequency - sourceFrequency;
  }, [apparentFrequency, sourceFrequency]);

  const frequencyRatio = useMemo(() => {
    if (!Number.isFinite(apparentFrequency) || sourceFrequency <= 0) return 1;
    return apparentFrequency / sourceFrequency;
  }, [apparentFrequency, sourceFrequency]);

  const machNumber = useMemo(() => {
    if (soundSpeed <= 0) return 0;
    return movingSourceSpeed / soundSpeed;
  }, [movingSourceSpeed, soundSpeed]);

  const emittedWavelength = useMemo(() => {
    if (sourceFrequency <= 0) return 0;
    return soundSpeed / sourceFrequency;
  }, [soundSpeed, sourceFrequency]);

  const wavelengthAhead = useMemo(() => {
    if (sourceFrequency <= 0) return 0;
    return (soundSpeed - movingSourceSpeed) / sourceFrequency;
  }, [soundSpeed, movingSourceSpeed, sourceFrequency]);

  const wavelengthBehind = useMemo(() => {
    if (sourceFrequency <= 0) return 0;
    return (soundSpeed + movingSourceSpeed) / sourceFrequency;
  }, [soundSpeed, movingSourceSpeed, sourceFrequency]);

  const modeLabel = useMemo(() => {
    if (mode === "fonte_aproxima") return "Fonte se aproxima";
    if (mode === "fonte_afasta") return "Fonte se afasta";
    if (mode === "observador_aproxima") return "Observador se aproxima";
    if (mode === "observador_afasta") return "Observador se afasta";
    if (mode === "ambos_aproximam") return "Fonte e observador se aproximam";
    return "Fonte e observador se afastam";
  }, [mode]);

  const pitchLabel = useMemo(() => {
    if (!Number.isFinite(apparentFrequency)) return "limite do modelo";
    if (frequencyRatio > 1.04) return "mais agudo";
    if (frequencyRatio < 0.96) return "mais grave";
    return "quase igual";
  }, [apparentFrequency, frequencyRatio]);

  const interpretation = useMemo(() => {
    if (!Number.isFinite(apparentFrequency)) {
      return "No limite em que a fonte atinge a velocidade do som, a fórmula simples deixa de ser suficiente.";
    }

    if (frequencyDifference > 0) {
      return "A frequência percebida aumenta. O observador escuta um som mais agudo.";
    }

    if (frequencyDifference < 0) {
      return "A frequência percebida diminui. O observador escuta um som mais grave.";
    }

    return "Não há variação perceptível de frequência neste caso.";
  }, [apparentFrequency, frequencyDifference]);

  const physicalWarning = useMemo(() => {
    if (machNumber >= 1) {
      return "Regime supersônico: aparece cone de Mach e o modelo simples do Doppler fica limitado.";
    }

    if (machNumber >= 0.8) {
      return "A fonte está perto da velocidade do som. A compressão das frentes de onda fica muito intensa.";
    }

    return "Regime subsônico normal.";
  }, [machNumber]);

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

  const reset = () => {
    setMode("ambos_aproximam");
    setSourceVisual("ambulance");
    setSourceFrequency(440);
    setSoundSpeed(340);
    setSourceSpeed(30);
    setObserverSpeed(20);
    setIsPlaying(true);
    setShowWavefronts(true);
    setShowGuides(true);
    setShowPitchMeter(true);
    setTime(0);
    lastTimeRef.current = 0;
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
                Veja como o movimento relativo altera a frequência percebida.
                Sim, agora a animação finalmente faz jus ao nome “simulador”.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Situação
                </p>

                <Select
                  value={mode}
                  onValueChange={(value) => setMode(value as DopplerMode)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fonte_aproxima">
                      Fonte se aproxima
                    </SelectItem>
                    <SelectItem value="fonte_afasta">
                      Fonte se afasta
                    </SelectItem>
                    <SelectItem value="observador_aproxima">
                      Observador se aproxima
                    </SelectItem>
                    <SelectItem value="observador_afasta">
                      Observador se afasta
                    </SelectItem>
                    <SelectItem value="ambos_aproximam">
                      Ambos se aproximam
                    </SelectItem>
                    <SelectItem value="ambos_afastam">
                      Ambos se afastam
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Aparência da fonte
                </p>

                <Select
                  value={sourceVisual}
                  onValueChange={(value) => setSourceVisual(value as SourceVisual)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ambulance">Ambulância</SelectItem>
                    <SelectItem value="speaker">Alto-falante</SelectItem>
                    <SelectItem value="car">Carro</SelectItem>
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
                  max={380}
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

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setShowWavefronts(!showWavefronts)}
                  className={`rounded-lg border px-2 py-2 text-xs font-bold ${
                    showWavefronts
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Ondas
                </button>

                <button
                  onClick={() => setShowGuides(!showGuides)}
                  className={`rounded-lg border px-2 py-2 text-xs font-bold ${
                    showGuides
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Guias
                </button>

                <button
                  onClick={() => setShowPitchMeter(!showPitchMeter)}
                  className={`rounded-lg border px-2 py-2 text-xs font-bold ${
                    showPitchMeter
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Tom
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
                label="Situação"
                value={modeLabel}
                valueClassName="text-indigo-700"
              />

              <MetricCard
                label={
                  <>
                    Frequência emitida{" "}
                    <MathFormula inline formula={String.raw`f`} />
                  </>
                }
                value={formatUnit(sourceFrequency, "Hz")}
              />

              <MetricCard
                label={
                  <>
                    Frequência percebida{" "}
                    <MathFormula inline formula={String.raw`f'`} />
                  </>
                }
                value={
                  Number.isFinite(apparentFrequency)
                    ? formatUnit(apparentFrequency, "Hz")
                    : "indefinida"
                }
                valueClassName={
                  Number.isFinite(frequencyDifference) && frequencyDifference >= 0
                    ? "text-red-700"
                    : "text-blue-700"
                }
              />

              <MetricCard
                label="Tom percebido"
                value={pitchLabel}
                valueClassName={
                  pitchLabel === "mais agudo"
                    ? "text-red-700"
                    : pitchLabel === "mais grave"
                    ? "text-blue-700"
                    : "text-slate-900"
                }
              />

              <MetricCard
                label="Diferença de frequência"
                value={
                  Number.isFinite(frequencyDifference)
                    ? `${frequencyDifference >= 0 ? "+" : ""}${formatNumber(
                        frequencyDifference,
                        2
                      )} Hz`
                    : "indefinida"
                }
                valueClassName={
                  Number.isFinite(frequencyDifference) && frequencyDifference >= 0
                    ? "text-red-700"
                    : "text-blue-700"
                }
              />

              <MetricCard
                label={
                  <>
                    Número de Mach{" "}
                    <MathFormula inline formula={String.raw`M`} />
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

              <MetricCard label="Interpretação" value={interpretation} />

              <MetricCard
                label="Aviso físico"
                value={physicalWarning}
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
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <DopplerAnimationScene
                  mode={mode}
                  sourceVisual={sourceVisual}
                  time={time}
                  sourceFrequency={sourceFrequency}
                  soundSpeed={soundSpeed}
                  sourceSpeed={sourceSpeed}
                  observerSpeed={observerSpeed}
                  apparentFrequency={apparentFrequency}
                  frequencyRatio={frequencyRatio}
                  machNumber={machNumber}
                  showWavefronts={showWavefronts}
                  showGuides={showGuides}
                  showPitchMeter={showPitchMeter}
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
                  ["v_f", formatUnit(sourceSpeed, "m/s")],
                  ["M", formatNumber(machNumber, 3)],
                ]}
              />

              <CalcMiniCard
                title="Meio e observador"
                values={[
                  ["v", formatUnit(soundSpeed, "m/s")],
                  ["v_o", formatUnit(observerSpeed, "m/s")],
                  ["caso", modeLabel],
                ]}
              />

              <CalcMiniCard
                title="Resultado"
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
                      ? `${frequencyDifference >= 0 ? "+" : ""}${formatNumber(
                          frequencyDifference,
                          2
                        )} Hz`
                      : "indefinida",
                  ],
                ]}
              />

              <CalcMiniCard
                title="Comprimento de onda"
                values={[
                  ["emitido", formatUnit(emittedWavelength, "m")],
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
                title="Fórmula geral"
                formulas={[
                  String.raw`f' = f\frac{v + v_o}{v - v_f}`,
                  String.raw`\text{Aqui, }v_o > 0\text{ quando o observador se aproxima, e }v_o < 0\text{ quando se afasta.}`,
                  String.raw`\text{Da mesma forma, }v_f > 0\text{ quando a fonte se aproxima, e }v_f < 0\text{ quando se afasta.}`,
                ]}
              />

              <CalcSection
                title="Substituição no caso escolhido"
                formulas={[
                  String.raw`f' = ${formatNumber(sourceFrequency)}\cdot \frac{${formatNumber(
                    soundSpeed
                  )} ${observerSignedSpeed >= 0 ? "+" : "-"} ${formatNumber(
                    Math.abs(observerSignedSpeed)
                  )}}{${formatNumber(soundSpeed)} ${
                    sourceSignedSpeed >= 0 ? "-" : "+"
                  } ${formatNumber(Math.abs(sourceSignedSpeed))}}`,
                  Number.isFinite(apparentFrequency)
                    ? String.raw`f' = ${formatNumber(
                        apparentFrequency,
                        4
                      )}\,\text{Hz}`
                    : String.raw`f' \text{ fica indefinida no limite } v_f \to v.`,
                ]}
              />

              <CalcSection
                title="Número de Mach"
                formulas={[
                  String.raw`M = \frac{v_f}{v}`,
                  String.raw`M = \frac{${formatNumber(sourceSpeed)}}{${formatNumber(
                    soundSpeed
                  )}} = ${formatNumber(machNumber, 4)}`,
                  machNumber >= 1
                    ? String.raw`M \geq 1 \Rightarrow \text{regime supersônico.}`
                    : String.raw`M < 1 \Rightarrow \text{regime subsônico.}`,
                ]}
              />

              <CalcSection
                title="Comprimentos de onda à frente e atrás"
                formulas={[
                  String.raw`\lambda_0 = \frac{v}{f} = \frac{${formatNumber(
                    soundSpeed
                  )}}{${formatNumber(sourceFrequency)}} = ${formatNumber(
                    emittedWavelength,
                    4
                  )}\,\text{m}`,
                  String.raw`\lambda_{\text{frente}} = \frac{v - v_f}{f} = ${formatNumber(
                    wavelengthAhead,
                    4
                  )}\,\text{m}`,
                  String.raw`\lambda_{\text{atrás}} = \frac{v + v_f}{f} = ${formatNumber(
                    wavelengthBehind,
                    4
                  )}\,\text{m}`,
                ]}
              />

              <CalcSection
                title="Interpretação física"
                formulas={[
                  Number.isFinite(apparentFrequency) && apparentFrequency > sourceFrequency
                    ? String.raw`f' > f \Rightarrow \text{o som percebido fica mais agudo.}`
                    : Number.isFinite(apparentFrequency) && apparentFrequency < sourceFrequency
                    ? String.raw`f' < f \Rightarrow \text{o som percebido fica mais grave.}`
                    : String.raw`f' \approx f \Rightarrow \text{não há mudança perceptível relevante.}`,
                  machNumber >= 1
                    ? String.raw`\text{Quando a fonte atinge ou supera }v,\text{ surge o cone de Mach.}`
                    : String.raw`\text{Em regime subsônico, as frentes de onda se espalham normalmente pelo meio.}`,
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

function DopplerAnimationScene({
  mode,
  sourceVisual,
  time,
  sourceFrequency,
  soundSpeed,
  sourceSpeed,
  observerSpeed,
  apparentFrequency,
  frequencyRatio,
  machNumber,
  showWavefronts,
  showGuides,
  showPitchMeter,
}: {
  mode: DopplerMode;
  sourceVisual: SourceVisual;
  time: number;
  sourceFrequency: number;
  soundSpeed: number;
  sourceSpeed: number;
  observerSpeed: number;
  apparentFrequency: number;
  frequencyRatio: number;
  machNumber: number;
  showWavefronts: boolean;
  showGuides: boolean;
  showPitchMeter: boolean;
}) {
  const width = 920;
  const height = 420;
  const centerY = 215;

  const loopDuration = 4.5;
  const cycleTime = time % loopDuration;

  const waveVisualSpeed = 130;
  const sourceVisualSpeed = clamp(
    (sourceSpeed / soundSpeed) * waveVisualSpeed * 1.05,
    0,
    150
  );
  const observerVisualSpeed = clamp(
    (observerSpeed / soundSpeed) * waveVisualSpeed * 1.1,
    0,
    95
  );

  const scenario = useMemo(() => {
    switch (mode) {
      case "fonte_aproxima":
        return {
          sourceStart: 170,
          sourceDir: 1,
          observerStart: 760,
          observerDir: 0,
        };
      case "fonte_afasta":
        return {
          sourceStart: 360,
          sourceDir: 1,
          observerStart: 180,
          observerDir: 0,
        };
      case "observador_aproxima":
        return {
          sourceStart: 220,
          sourceDir: 0,
          observerStart: 760,
          observerDir: -1,
        };
      case "observador_afasta":
        return {
          sourceStart: 220,
          sourceDir: 0,
          observerStart: 600,
          observerDir: 1,
        };
      case "ambos_aproximam":
        return {
          sourceStart: 180,
          sourceDir: 1,
          observerStart: 760,
          observerDir: -1,
        };
      case "ambos_afastam":
      default:
        return {
          sourceStart: 330,
          sourceDir: -1,
          observerStart: 590,
          observerDir: 1,
        };
    }
  }, [mode]);

  const getSourceXAt = (t: number) => {
    return clamp(
      scenario.sourceStart + scenario.sourceDir * sourceVisualSpeed * t,
      110,
      810
    );
  };

  const getObserverXAt = (t: number) => {
    return clamp(
      scenario.observerStart + scenario.observerDir * observerVisualSpeed * t,
      110,
      810
    );
  };

  const sourceX = getSourceXAt(cycleTime);
  const observerX = getObserverXAt(cycleTime);

  const emissionInterval = clamp(180 / sourceFrequency, 0.08, 0.42);
  const pulses: { x: number; r: number; opacity: number; side: "front" | "back" }[] = [];

  for (let i = 0; i < 28; i++) {
    const emissionTime = cycleTime - i * emissionInterval;
    if (emissionTime < 0) break;

    const x0 = getSourceXAt(emissionTime);
    const radius = waveVisualSpeed * (cycleTime - emissionTime);

    const sourceMovementDir = scenario.sourceDir === 0 ? 1 : scenario.sourceDir;
    const pulseSide = x0 <= sourceX === sourceMovementDir > 0 ? "back" : "front";

    pulses.push({
      x: x0,
      r: radius,
      opacity: Math.max(0.07, 0.9 - i * 0.055),
      side: pulseSide,
    });
  }

  const observerGlow = pulses.some((pulse) => {
    const distance = Math.abs(observerX - pulse.x);
    return Math.abs(distance - pulse.r) < 9;
  });

  const isHigherPitch =
    Number.isFinite(apparentFrequency) && apparentFrequency > sourceFrequency;

  const frontWaveColor = isHigherPitch ? "#dc2626" : "#2563eb";
  const backWaveColor = isHigherPitch ? "#2563eb" : "#dc2626";

  const pitchPointerX = clamp(460 + (frequencyRatio - 1) * 260, 260, 660);

  return (
    <div className="overflow-x-auto">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
      >
        <rect width={width} height={height} fill="#f8fafc" />

        {Array.from({ length: 14 }).map((_, index) => (
          <line
            key={`grid-v-${index}`}
            x1={40 + index * 60}
            y1="0"
            x2={40 + index * 60}
            y2={height}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: 7 }).map((_, index) => (
          <line
            key={`grid-h-${index}`}
            x1="0"
            y1={30 + index * 55}
            x2={width}
            y2={30 + index * 55}
            stroke="#eef2f7"
            strokeWidth="1"
          />
        ))}

        <line
          x1="60"
          y1="320"
          x2="860"
          y2="320"
          stroke="#cbd5e1"
          strokeWidth="4"
        />

        {showWavefronts &&
          machNumber < 1 &&
          pulses.map((pulse, index) => (
            <circle
              key={`pulse-${index}`}
              cx={pulse.x}
              cy={centerY}
              r={pulse.r}
              fill="none"
              stroke={pulse.side === "front" ? frontWaveColor : backWaveColor}
              strokeWidth={pulse.side === "front" ? 2.8 : 2.1}
              opacity={pulse.opacity}
            />
          ))}

        {showWavefronts && machNumber >= 1 && (
          <g opacity="0.96">
            <path
              d={`M ${sourceX} ${centerY}
                  L ${sourceX - 240} ${centerY - 125}
                  L ${sourceX - 240} ${centerY + 125} Z`}
              fill="#ef4444"
              opacity="0.15"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <path
              d={`M ${sourceX} ${centerY}
                  L ${sourceX - 195} ${centerY - 90}
                  L ${sourceX - 195} ${centerY + 90} Z`}
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="8,6"
            />
            <text
              x={sourceX - 230}
              y={centerY - 138}
              fontSize="13"
              fontWeight="700"
              fill="#dc2626"
            >
              cone de Mach
            </text>
          </g>
        )}

        {showGuides && (
          <>
            <text x="58" y="44" fontSize="18" fontWeight="800" fill="#0f172a">
              Efeito Doppler — animação
            </text>

            <text x="58" y="68" fontSize="13" fill="#475569">
              Frente comprimida: frequência percebida maior.
            </text>

            <text x="58" y="88" fontSize="13" fill="#475569">
              Atrás espaçado: frequência percebida menor.
            </text>

            <g>
              <rect
                x="650"
                y="36"
                width="205"
                height="72"
                rx="14"
                fill="white"
                stroke="#e2e8f0"
              />
              <circle cx="674" cy="60" r="7" fill="#dc2626" />
              <text x="690" y="64" fontSize="12" fill="#475569">
                ondas comprimidas
              </text>
              <circle cx="674" cy="86" r="7" fill="#2563eb" />
              <text x="690" y="90" fontSize="12" fill="#475569">
                ondas espaçadas
              </text>
            </g>
          </>
        )}

        <SourceIcon
          x={sourceX}
          y={centerY}
          visual={sourceVisual}
          direction={scenario.sourceDir}
        />

        <ObserverIcon x={observerX} y={centerY} active={observerGlow} />

        {showGuides && (
          <>
            <VelocityArrow
              x={sourceX}
              y={282}
              direction={scenario.sourceDir}
              color="#ef4444"
              label={`v_f = ${formatNumber(sourceSpeed)} m/s`}
            />

            <VelocityArrow
              x={observerX}
              y={112}
              direction={scenario.observerDir}
              color="#2563eb"
              label={`v_o = ${formatNumber(observerSpeed)} m/s`}
            />
          </>
        )}

        {showPitchMeter && (
          <g>
            <rect
              x="245"
              y="350"
              width="430"
              height="46"
              rx="18"
              fill="white"
              stroke="#e2e8f0"
            />
            <text x="266" y="378" fontSize="12" fontWeight="700" fill="#2563eb">
              mais grave
            </text>
            <text x="438" y="378" fontSize="12" fontWeight="700" fill="#64748b">
              igual
            </text>
            <text x="590" y="378" fontSize="12" fontWeight="700" fill="#dc2626">
              mais agudo
            </text>

            <line
              x1="260"
              y1="334"
              x2="660"
              y2="334"
              stroke="#cbd5e1"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <line
              x1="460"
              y1="334"
              x2={pitchPointerX}
              y2="334"
              stroke={isHigherPitch ? "#dc2626" : "#2563eb"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle
              cx={pitchPointerX}
              cy="334"
              r="12"
              fill={isHigherPitch ? "#dc2626" : "#2563eb"}
              stroke="white"
              strokeWidth="3"
            />
          </g>
        )}

        <text
          x="58"
          y="366"
          fontSize="14"
          fontWeight="700"
          fill={isHigherPitch ? "#dc2626" : "#2563eb"}
        >
          {Number.isFinite(apparentFrequency)
            ? `f' = ${formatNumber(apparentFrequency, 2)} Hz`
            : "f' indefinida no limite do modelo"}
        </text>

        <text x="58" y="390" fontSize="13" fill="#475569">
          f = {formatNumber(sourceFrequency)} Hz, v = {formatNumber(soundSpeed)} m/s, M ={" "}
          {formatNumber(machNumber, 3)}
        </text>
      </svg>
    </div>
  );
}

function SourceIcon({
  x,
  y,
  visual,
  direction,
}: {
  x: number;
  y: number;
  visual: SourceVisual;
  direction: number;
}) {
  const flip = direction < 0 ? -1 : 1;

  if (visual === "speaker") {
    return (
      <g transform={`translate(${x}, ${y}) scale(${flip}, 1)`}>
        <rect x="-36" y="-28" width="38" height="56" rx="8" fill="#ef4444" />
        <polygon points="0,-20 35,-38 35,38 0,20" fill="#dc2626" />
        <text
          x="0"
          y="58"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#b91c1c"
          transform={`scale(${flip}, 1)`}
        >
          Fonte
        </text>
      </g>
    );
  }

  if (visual === "car") {
    return (
      <g transform={`translate(${x}, ${y}) scale(${flip}, 1)`}>
        <rect x="-48" y="-26" width="96" height="44" rx="14" fill="#ef4444" />
        <rect x="-22" y="-48" width="45" height="30" rx="8" fill="#fca5a5" />
        <circle cx="-28" cy="22" r="10" fill="#0f172a" />
        <circle cx="30" cy="22" r="10" fill="#0f172a" />
        <text
          x="0"
          y="60"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#b91c1c"
          transform={`scale(${flip}, 1)`}
        >
          Carro
        </text>
      </g>
    );
  }

  return (
    <g transform={`translate(${x}, ${y}) scale(${flip}, 1)`}>
      <rect x="-56" y="-28" width="112" height="52" rx="14" fill="#ef4444" />
      <rect x="-20" y="-50" width="45" height="28" rx="8" fill="#bfdbfe" />
      <rect x="-51" y="-15" width="30" height="18" rx="4" fill="#ffffff" />
      <rect x="18" y="-15" width="30" height="18" rx="4" fill="#ffffff" />
      <rect x="-8" y="-64" width="26" height="14" rx="4" fill="#2563eb" />
      <rect x="18" y="-64" width="26" height="14" rx="4" fill="#dc2626" />
      <circle cx="-34" cy="26" r="10" fill="#0f172a" />
      <circle cx="34" cy="26" r="10" fill="#0f172a" />
      <text
        x="0"
        y="62"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#b91c1c"
        transform={`scale(${flip}, 1)`}
      >
        Ambulância
      </text>
    </g>
  );
}

function ObserverIcon({
  x,
  y,
  active,
}: {
  x: number;
  y: number;
  active: boolean;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {active && (
        <>
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="none"
            stroke="#22c55e"
            strokeWidth="7"
            opacity="0.3"
          />
          <circle
            cx="0"
            cy="0"
            r="56"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            opacity="0.18"
          />
        </>
      )}

      <circle
        cx="0"
        cy="-18"
        r="17"
        fill="#3b82f6"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <path
        d="M -28 34 C -22 5 22 5 28 34 Z"
        fill="#3b82f6"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <text
        x="0"
        y="60"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#1d4ed8"
      >
        Observador
      </text>
    </g>
  );
}

function VelocityArrow({
  x,
  y,
  direction,
  color,
  label,
}: {
  x: number;
  y: number;
  direction: number;
  color: string;
  label: string;
}) {
  if (direction === 0) {
    return (
      <g>
        <text
          x={x}
          y={y}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={color}
        >
          parado
        </text>
      </g>
    );
  }

  const length = 64;
  const x2 = x + direction * length;
  const headSize = 10;

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={x2}
        y2={y}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <polygon
        points={
          direction > 0
            ? `${x2 + headSize},${y} ${x2 - 2},${y - 8} ${x2 - 2},${y + 8}`
            : `${x2 - headSize},${y} ${x2 + 2},${y - 8} ${x2 + 2},${y + 8}`
        }
        fill={color}
      />
      <text
        x={direction > 0 ? x + 10 : x - 10}
        y={y - 10}
        textAnchor={direction > 0 ? "start" : "end"}
        fontSize="12"
        fontWeight="700"
        fill={color}
      >
        {label}
      </text>
    </g>
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
