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

const TWO_PI = 2 * Math.PI;

export const StandingWaveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [system, setSystem] = useState<StandingSystem>("string_fixed");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [showMeasures, setShowMeasures] = useState(true);

  const [length, setLength] = useState(2);
  const [harmonic, setHarmonic] = useState(2);

  const [tension, setTension] = useState(80);
  const [linearDensity, setLinearDensity] = useState(0.02);

  const [soundSpeed, setSoundSpeed] = useState(340);
  const [amplitudeCm, setAmplitudeCm] = useState(20);

  const effectiveHarmonic = useMemo(() => {
    if (system === "tube_open_closed") {
      return 2 * harmonic - 1;
    }

    return harmonic;
  }, [system, harmonic]);

  const velocity = useMemo(() => {
    if (system === "string_fixed") {
      if (linearDensity <= 0) return 0;
      return Math.sqrt(tension / linearDensity);
    }

    return soundSpeed;
  }, [system, tension, linearDensity, soundSpeed]);

  const wavelength = useMemo(() => {
    if (effectiveHarmonic <= 0) return 0;

    if (system === "tube_open_closed") {
      return (4 * length) / effectiveHarmonic;
    }

    return (2 * length) / effectiveHarmonic;
  }, [system, length, effectiveHarmonic]);

  const frequency = useMemo(() => {
    if (wavelength <= 0) return 0;
    return velocity / wavelength;
  }, [velocity, wavelength]);

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

  const amplitudePx = useMemo(() => {
    return Math.max(15, Math.min(95, amplitudeCm * 2.5));
  }, [amplitudeCm]);

  const nodesCount = useMemo(() => {
    if (system === "string_fixed") return effectiveHarmonic + 1;
    if (system === "tube_open_open") return effectiveHarmonic;
    return Math.ceil(effectiveHarmonic / 2);
  }, [system, effectiveHarmonic]);

  const antinodesCount = useMemo(() => {
    if (system === "string_fixed") return effectiveHarmonic;
    if (system === "tube_open_open") return effectiveHarmonic + 1;
    return Math.ceil(effectiveHarmonic / 2);
  }, [system, effectiveHarmonic]);

  const systemLabel = useMemo(() => {
    if (system === "string_fixed") return "Corda fixa nas duas extremidades";
    if (system === "tube_open_open") return "Tubo aberto-aberto";
    return "Tubo aberto-fechado";
  }, [system]);

  const interpretation = useMemo(() => {
    if (system === "string_fixed") {
      return "Na corda fixa, as extremidades são nós. A frequência aumenta quando a tensão aumenta ou quando a densidade linear diminui.";
    }

    if (system === "tube_open_open") {
      return "No tubo aberto-aberto, as duas extremidades são ventres de deslocamento. Todos os harmônicos inteiros aparecem.";
    }

    return "No tubo aberto-fechado, a extremidade fechada é nó e a aberta é ventre. Só aparecem harmônicos ímpares.";
  }, [system]);

  const reset = () => {
    setSystem("string_fixed");
    setIsPlaying(true);
    setShowParticles(true);
    setShowMeasures(true);
    setLength(2);
    setHarmonic(2);
    setTension(80);
    setLinearDensity(0.02);
    setSoundSpeed(340);
    setAmplitudeCm(20);
    timeRef.current = 0;
  };

  useEffect(() => {
    timeRef.current = 0;
  }, [system, harmonic, length]);

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

      if (system === "string_fixed") {
        drawStandingString({
          ctx,
          width,
          height,
          amplitudePx,
          harmonic: effectiveHarmonic,
          omega,
          t,
          showParticles,
          showMeasures,
        });
      } else {
        drawStandingTube({
          ctx,
          width,
          height,
          amplitudePx,
          system,
          harmonic: effectiveHarmonic,
          omega,
          t,
          showParticles,
          showMeasures,
        });
      }

      drawInfoBox({
        ctx,
        systemLabel,
        effectiveHarmonic,
        length,
        wavelength,
        frequency,
        velocity,
        nodesCount,
        antinodesCount,
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
    system,
    systemLabel,
    isPlaying,
    showParticles,
    showMeasures,
    length,
    harmonic,
    effectiveHarmonic,
    tension,
    linearDensity,
    soundSpeed,
    amplitudeCm,
    amplitudePx,
    velocity,
    wavelength,
    frequency,
    period,
    omega,
    nodesCount,
    antinodesCount,
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
                Analise nós, ventres, harmônicos e frequências naturais.
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
                label={system === "tube_open_closed" ? "Modo ímpar" : "Harmônico"}
                symbol={system === "tube_open_closed" ? "m" : "n"}
                value={
                  system === "tube_open_closed"
                    ? `${harmonic}º modo → n = ${effectiveHarmonic}`
                    : String(effectiveHarmonic)
                }
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

              <ControlRow
                label="Amplitude visual"
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
                    label="Tensão na corda"
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

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                    showParticles
                      ? "border-purple-300 bg-purple-50 text-purple-700"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Partículas
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
                label="Sistema"
                value={systemLabel}
                valueClassName="text-purple-700"
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
                label="Nós"
                value={String(nodesCount)}
              />

              <MetricCard
                label="Ventres"
                value={String(antinodesCount)}
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
                title="Sistema"
                values={[
                  ["Tipo", systemLabel],
                  ["L", formatUnit(length, "m")],
                  ["n", String(effectiveHarmonic)],
                ]}
              />

              <CalcMiniCard
                title="Onda"
                values={[
                  ["λ", formatUnit(wavelength, "m")],
                  ["f", formatUnit(frequency, "Hz")],
                  ["T", formatUnit(period, "s")],
                ]}
              />

              <CalcMiniCard
                title="Velocidade"
                values={[
                  ["v", formatUnit(velocity, "m/s")],
                  [
                    "Origem",
                    system === "string_fixed" ? "√(F/μ)" : "som no tubo",
                  ],
                ]}
              />

              <CalcMiniCard
                title="Estrutura"
                values={[
                  ["Nós", String(nodesCount)],
                  ["Ventres", String(antinodesCount)],
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
                    String.raw`v = \sqrt{\frac{${formatNumber(tension)}}{${formatNumber(linearDensity, 4)}}} = ${formatNumber(velocity, 4)}\,\text{m/s}`,
                  ]}
                />
              )}

              {system !== "string_fixed" && (
                <CalcSection
                  title="Velocidade no tubo"
                  formulas={[
                    String.raw`v \approx v_{som}`,
                    String.raw`v = ${formatNumber(soundSpeed)}\,\text{m/s}`,
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
                    String.raw`\lambda_${effectiveHarmonic} = \frac{2\cdot ${formatNumber(length)}}{${effectiveHarmonic}} = ${formatNumber(wavelength, 4)}\,\text{m}`,
                    String.raw`f_n = \frac{v}{\lambda_n}`,
                    String.raw`f_${effectiveHarmonic} = \frac{${formatNumber(velocity, 4)}}{${formatNumber(wavelength, 4)}} = ${formatNumber(frequency, 4)}\,\text{Hz}`,
                  ]}
                />
              ) : (
                <CalcSection
                  title="Tubo aberto-fechado"
                  formulas={[
                    String.raw`n = 1,3,5,7,\ldots`,
                    String.raw`\lambda_n = \frac{4L}{n}`,
                    String.raw`\lambda_${effectiveHarmonic} = \frac{4\cdot ${formatNumber(length)}}{${effectiveHarmonic}} = ${formatNumber(wavelength, 4)}\,\text{m}`,
                    String.raw`f_n = \frac{v}{\lambda_n}`,
                    String.raw`f_${effectiveHarmonic} = \frac{${formatNumber(velocity, 4)}}{${formatNumber(wavelength, 4)}} = ${formatNumber(frequency, 4)}\,\text{Hz}`,
                  ]}
                />
              )}

              <CalcSection
                title="Forma temporal"
                formulas={[
                  String.raw`\omega = 2\pi f`,
                  String.raw`\omega = 2\pi\cdot ${formatNumber(frequency, 4)} = ${formatNumber(omega, 4)}\,\text{rad/s}`,
                  String.raw`T = \frac{1}{f} = \frac{1}{${formatNumber(frequency, 4)}} = ${formatNumber(period, 4)}\,\text{s}`,
                ]}
              />

              <CalcSection
                title="Leitura física"
                formulas={[
                  system === "string_fixed"
                    ? String.raw`\text{As extremidades fixas são nós da onda estacionária.}`
                    : system === "tube_open_open"
                    ? String.raw`\text{As extremidades abertas são ventres de deslocamento.}`
                    : String.raw`\text{A extremidade fechada é nó e a extremidade aberta é ventre.}`,
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

function drawStandingString({
  ctx,
  width,
  height,
  amplitudePx,
  harmonic,
  omega,
  t,
  showParticles,
  showMeasures,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitudePx: number;
  harmonic: number;
  omega: number;
  t: number;
  showParticles: boolean;
  showMeasures: boolean;
}) {
  const centerY = height / 2;
  const startX = 130;
  const endX = width - 130;
  const stringLengthPx = endX - startX;

  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(startX, centerY - 100);
  ctx.lineTo(startX, centerY + 100);
  ctx.moveTo(endX, centerY - 100);
  ctx.lineTo(endX, centerY + 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = startX; x <= endX; x++) {
    const localX = x - startX;
    const y =
      centerY +
      amplitudePx *
        Math.sin((harmonic * Math.PI * localX) / stringLengthPx) *
        Math.cos(omega * t);

    if (x === startX) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let i = 0; i <= 28; i++) {
      const x = startX + (i / 28) * stringLengthPx;
      const localX = x - startX;
      const y =
        centerY +
        amplitudePx *
          Math.sin((harmonic * Math.PI * localX) / stringLengthPx) *
          Math.cos(omega * t);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, TWO_PI);
      ctx.fill();
    }
  }

  if (showMeasures) {
    for (let n = 0; n <= harmonic; n++) {
      const x = startX + (n / harmonic) * stringLengthPx;
      drawNode(ctx, x, centerY);
    }

    for (let n = 0; n < harmonic; n++) {
      const x = startX + ((n + 0.5) / harmonic) * stringLengthPx;
      drawAntinode(ctx, x, centerY - amplitudePx - 18);
    }
  }
}

function drawStandingTube({
  ctx,
  width,
  height,
  amplitudePx,
  system,
  harmonic,
  omega,
  t,
  showParticles,
  showMeasures,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  amplitudePx: number;
  system: StandingSystem;
  harmonic: number;
  omega: number;
  t: number;
  showParticles: boolean;
  showMeasures: boolean;
}) {
  const centerY = height / 2;
  const startX = 130;
  const endX = width - 130;
  const tubeLengthPx = endX - startX;

  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(startX, centerY - 70);
  ctx.lineTo(endX, centerY - 70);
  ctx.moveTo(startX, centerY + 70);
  ctx.lineTo(endX, centerY + 70);
  ctx.stroke();

  if (system === "tube_open_closed") {
    ctx.beginPath();
    ctx.moveTo(startX, centerY - 70);
    ctx.lineTo(startX, centerY + 70);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  for (let x = startX; x <= endX; x++) {
    const localX = x - startX;
    const normalized = localX / tubeLengthPx;

    const shape =
      system === "tube_open_open"
        ? Math.cos(harmonic * Math.PI * normalized)
        : Math.sin((harmonic * Math.PI * normalized) / 2);

    const y = centerY + amplitudePx * shape * Math.cos(omega * t);

    if (x === startX) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  if (showParticles) {
    for (let i = 0; i <= 32; i++) {
      const x = startX + (i / 32) * tubeLengthPx;
      const localX = x - startX;
      const normalized = localX / tubeLengthPx;

      const shape =
        system === "tube_open_open"
          ? Math.cos(harmonic * Math.PI * normalized)
          : Math.sin((harmonic * Math.PI * normalized) / 2);

      const y = centerY + amplitudePx * shape * Math.cos(omega * t);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, TWO_PI);
      ctx.fill();
    }
  }

  if (showMeasures) {
    ctx.fillStyle = "#475569";
    ctx.font = "bold 12px Arial";

    if (system === "tube_open_open") {
      ctx.fillText("aberto", startX - 22, centerY + 100);
      ctx.fillText("aberto", endX - 20, centerY + 100);
    } else {
      ctx.fillText("fechado", startX - 24, centerY + 100);
      ctx.fillText("aberto", endX - 20, centerY + 100);
    }
  }
}

function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, TWO_PI);
  ctx.fill();

  ctx.font = "bold 11px Arial";
  ctx.fillText("nó", x - 8, y + 22);
}

function drawAntinode(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = "#7c3aed";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, TWO_PI);
  ctx.fill();

  ctx.font = "bold 11px Arial";
  ctx.fillText("ventre", x - 18, y - 8);
}

function drawInfoBox({
  ctx,
  systemLabel,
  effectiveHarmonic,
  length,
  wavelength,
  frequency,
  velocity,
  nodesCount,
  antinodesCount,
}: {
  ctx: CanvasRenderingContext2D;
  systemLabel: string;
  effectiveHarmonic: number;
  length: number;
  wavelength: number;
  frequency: number;
  velocity: number;
  nodesCount: number;
  antinodesCount: number;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 18, 330, 160, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("ONDA ESTACIONÁRIA", 38, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`sistema: ${systemLabel}`, 38, 68);
  ctx.fillText(`n = ${effectiveHarmonic}`, 38, 88);
  ctx.fillText(`L = ${formatNumber(length, 2)} m`, 38, 108);
  ctx.fillText(`λ = ${formatNumber(wavelength, 2)} m`, 38, 128);
  ctx.fillText(`f = ${formatNumber(frequency, 2)} Hz`, 180, 108);
  ctx.fillText(`v = ${formatNumber(velocity, 2)} m/s`, 180, 128);
  ctx.fillText(`nós = ${nodesCount}`, 38, 148);
  ctx.fillText(`ventres = ${antinodesCount}`, 180, 148);
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
