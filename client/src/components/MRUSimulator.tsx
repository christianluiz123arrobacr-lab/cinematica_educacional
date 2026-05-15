import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { MathFormula } from "@/components/MathFormula";

type MRUMode = "single" | "meeting";

interface MRUSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type MeetingData = {
  exists: boolean;
  t: number | null;
  s: number | null;
  reason: string;
};

const TWO_PI = 2 * Math.PI;

const DEFAULT_TIME_WINDOW = 20;
const DEFAULT_SIM_SPEED = 0.75;

const formatNumber = (value: number, digits = 2) => {
  if (!Number.isFinite(value)) return "—";

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const formatUnit = (value: number, unit: string, digits = 2) => {
  return `${formatNumber(value, digits)} ${unit}`;
};

export const MRUSimulator: React.FC<MRUSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  const [mode, setMode] = useState<MRUMode>("single");

  const [s0A, setS0A] = useState(0);
  const [vA, setVA] = useState(5);

  const [s0B, setS0B] = useState(70);
  const [vB, setVB] = useState(-2);

  const [time, setTime] = useState(0);
  const [timeWindow, setTimeWindow] = useState(DEFAULT_TIME_WINDOW);
  const [simSpeed, setSimSpeed] = useState(DEFAULT_SIM_SPEED);

  const [showGraphs, setShowGraphs] = useState(true);
  const [showMeetingPoint, setShowMeetingPoint] = useState(true);
  const [showTable, setShowTable] = useState(true);

  const sA = useMemo(() => s0A + vA * time, [s0A, vA, time]);
  const sB = useMemo(() => s0B + vB * time, [s0B, vB, time]);

  const displacementA = useMemo(() => sA - s0A, [sA, s0A]);
  const displacementB = useMemo(() => sB - s0B, [sB, s0B]);

  const motionA = useMemo(() => classifyMotion(vA), [vA]);
  const motionB = useMemo(() => classifyMotion(vB), [vB]);

  const meetingData = useMemo<MeetingData>(() => {
    if (mode !== "meeting") {
      return {
        exists: false,
        t: null,
        s: null,
        reason: "Ative o modo encontro para comparar dois móveis.",
      };
    }

    const relativeVelocity = vA - vB;

    if (Math.abs(relativeVelocity) < 1e-9) {
      const sameStart = Math.abs(s0A - s0B) < 1e-9;

      return {
        exists: sameStart,
        t: sameStart ? 0 : null,
        s: sameStart ? s0A : null,
        reason: sameStart
          ? "Os móveis começam juntos. Encontro em t = 0."
          : "As velocidades são iguais e as posições iniciais são diferentes. Não haverá encontro futuro.",
      };
    }

    const t = (s0B - s0A) / relativeVelocity;
    const s = s0A + vA * t;

    if (t < 0) {
      return {
        exists: false,
        t,
        s,
        reason: "O encontro matemático aconteceu antes do início da simulação.",
      };
    }

    return {
      exists: true,
      t,
      s,
      reason:
        t <= timeWindow
          ? "O encontro acontece dentro da janela de tempo mostrada."
          : "O encontro existe, mas acontece depois da janela atual.",
    };
  }, [mode, s0A, s0B, vA, vB, timeWindow]);

  const resetLocal = () => {
    setMode("single");
    setS0A(0);
    setVA(5);
    setS0B(70);
    setVB(-2);
    setTime(0);
    setTimeWindow(DEFAULT_TIME_WINDOW);
    setSimSpeed(DEFAULT_SIM_SPEED);
    setShowGraphs(true);
    setShowMeetingPoint(true);
    setShowTable(true);
    lastFrameRef.current = 0;
  };

  useEffect(() => {
    resetLocal();
  }, [resetTrigger]);

  useEffect(() => {
    setTime(0);
    lastFrameRef.current = 0;
  }, [mode, s0A, vA, s0B, vB, timeWindow]);

  useEffect(() => {
    if (!isRunning) {
      lastFrameRef.current = 0;
      return;
    }

    const animate = (now: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = now;
      }

      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05);
      lastFrameRef.current = now;

      setTime((previous) => {
        const next = previous + dt * simSpeed;
        return next > timeWindow ? 0 : next;
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, simSpeed, timeWindow]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawMRUCanvas({
      ctx,
      width: canvas.width,
      height: canvas.height,
      mode,
      s0A,
      vA,
      sA,
      s0B,
      vB,
      sB,
      time,
      timeWindow,
      meetingData,
      showGraphs,
      showMeetingPoint,
    });
  }, [
    mode,
    s0A,
    vA,
    sA,
    s0B,
    vB,
    sB,
    time,
    timeWindow,
    meetingData,
    showGraphs,
    showMeetingPoint,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Controles do MRU
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste posição inicial, velocidade e compare móveis no encontro.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo de simulação
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <ModeButton
                    active={mode === "single"}
                    onClick={() => setMode("single")}
                  >
                    Um móvel
                  </ModeButton>

                  <ModeButton
                    active={mode === "meeting"}
                    onClick={() => setMode("meeting")}
                  >
                    Encontro
                  </ModeButton>
                </div>
              </div>

              <ControlRow
                label="Tempo atual"
                symbol="t"
                value={formatUnit(time, "s")}
              >
                <Slider
                  value={[time]}
                  onValueChange={(value) => setTime(value[0])}
                  min={0}
                  max={timeWindow}
                  step={0.1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Janela de tempo"
                symbol="T"
                value={formatUnit(timeWindow, "s")}
              >
                <Slider
                  value={[timeWindow]}
                  onValueChange={(value) => setTimeWindow(value[0])}
                  min={5}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Velocidade visual"
                symbol="sim"
                value={`${formatNumber(simSpeed, 2)}x`}
              >
                <Slider
                  value={[simSpeed]}
                  onValueChange={(value) => setSimSpeed(value[0])}
                  min={0.1}
                  max={3}
                  step={0.05}
                  className="w-full"
                />
              </ControlRow>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="mb-4 text-sm font-bold text-blue-900">
                  Carrinho A
                </p>

                <div className="space-y-5">
                  <ControlRow
                    label="Posição inicial"
                    symbol="s₀A"
                    value={formatUnit(s0A, "m")}
                  >
                    <Slider
                      value={[s0A]}
                      onValueChange={(value) => setS0A(value[0])}
                      min={-100}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Velocidade"
                    symbol="vA"
                    value={formatUnit(vA, "m/s")}
                  >
                    <Slider
                      value={[vA]}
                      onValueChange={(value) => setVA(value[0])}
                      min={-20}
                      max={20}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>
                </div>
              </div>

              {mode === "meeting" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="mb-4 text-sm font-bold text-red-900">
                    Carrinho B
                  </p>

                  <div className="space-y-5">
                    <ControlRow
                      label="Posição inicial"
                      symbol="s₀B"
                      value={formatUnit(s0B, "m")}
                    >
                      <Slider
                        value={[s0B]}
                        onValueChange={(value) => setS0B(value[0])}
                        min={-100}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </ControlRow>

                    <ControlRow
                      label="Velocidade"
                      symbol="vB"
                      value={formatUnit(vB, "m/s")}
                    >
                      <Slider
                        value={[vB]}
                        onValueChange={(value) => setVB(value[0])}
                        min={-20}
                        max={20}
                        step={0.5}
                        className="w-full"
                      />
                    </ControlRow>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <ToggleButton
                  active={showGraphs}
                  onClick={() => setShowGraphs((previous) => !previous)}
                >
                  Gráficos
                </ToggleButton>

                <ToggleButton
                  active={showMeetingPoint}
                  onClick={() => setShowMeetingPoint((previous) => !previous)}
                >
                  Encontro
                </ToggleButton>

                <ToggleButton
                  active={showTable}
                  onClick={() => setShowTable((previous) => !previous)}
                >
                  Tabela
                </ToggleButton>

                <button
                  type="button"
                  onClick={resetLocal}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Padrão
                </button>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Resultados principais
              </h4>
            </div>

            <div className="space-y-3 p-5">
              <MetricCard
                label="Classificação de A"
                value={motionA.label}
                description={motionA.description}
                valueClassName={motionA.className}
              />

              <MetricCard
                label="Posição de A"
                value={formatUnit(sA, "m")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label="Deslocamento de A"
                value={formatUnit(displacementA, "m")}
              />

              {mode === "meeting" && (
                <>
                  <MetricCard
                    label="Classificação de B"
                    value={motionB.label}
                    description={motionB.description}
                    valueClassName={motionB.className}
                  />

                  <MetricCard
                    label="Posição de B"
                    value={formatUnit(sB, "m")}
                    valueClassName="text-red-700"
                  />

                  <MetricCard
                    label="Distância entre A e B"
                    value={formatUnit(Math.abs(sB - sA), "m")}
                  />

                  <MetricCard
                    label="Encontro"
                    value={
                      meetingData.exists && meetingData.t !== null
                        ? `t = ${formatNumber(meetingData.t, 2)} s`
                        : "Sem encontro futuro"
                    }
                    description={meetingData.reason}
                    valueClassName={
                      meetingData.exists
                        ? "text-emerald-700"
                        : "text-amber-700"
                    }
                  />
                </>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Visualização do Movimento
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                Agora com carrinho, porque bolinha para MRU ficava parecendo simulação feita por um átomo perdido.
              </p>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="overflow-x-auto">
                  <canvas
                    ref={canvasRef}
                    width={980}
                    height={540}
                    className="mx-auto w-full min-w-[820px] rounded-lg border border-slate-200 bg-slate-50"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos rápidos
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <CalcMiniCard
                title="Carrinho A"
                values={[
                  ["s₀A", formatUnit(s0A, "m")],
                  ["vA", formatUnit(vA, "m/s")],
                  ["t", formatUnit(time, "s")],
                  ["sA", formatUnit(sA, "m")],
                ]}
              />

              {mode === "meeting" ? (
                <CalcMiniCard
                  title="Carrinho B"
                  values={[
                    ["s₀B", formatUnit(s0B, "m")],
                    ["vB", formatUnit(vB, "m/s")],
                    ["t", formatUnit(time, "s")],
                    ["sB", formatUnit(sB, "m")],
                  ]}
                />
              ) : (
                <CalcMiniCard
                  title="Interpretação"
                  values={[
                    ["tipo", motionA.label],
                    ["inclinação s × t", formatUnit(vA, "m/s")],
                    ["área v × t", formatUnit(vA * time, "m")],
                    ["Δs", formatUnit(displacementA, "m")],
                  ]}
                />
              )}

              {mode === "meeting" && (
                <CalcMiniCard
                  title="Encontro"
                  values={[
                    [
                      "t encontro",
                      meetingData.exists && meetingData.t !== null
                        ? formatUnit(meetingData.t, "s")
                        : "—",
                    ],
                    [
                      "s encontro",
                      meetingData.exists && meetingData.s !== null
                        ? formatUnit(meetingData.s, "m")
                        : "—",
                    ],
                    ["v relativa", formatUnit(vA - vB, "m/s")],
                    ["distância atual", formatUnit(Math.abs(sB - sA), "m")],
                  ]}
                />
              )}

              <CalcMiniCard
                title="Gráficos"
                values={[
                  ["s × t", "reta"],
                  ["v × t", "reta horizontal"],
                  ["inclinação de s × t", "velocidade"],
                  ["área de v × t", "deslocamento"],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Equações do MRU
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <FormulaSection
                title="Função horária da posição"
                formulas={[
                  String.raw`s = s_0 + vt`,
                  String.raw`s_A = ${formatNumber(s0A, 2)} + ${formatNumber(
                    vA,
                    2
                  )}\cdot ${formatNumber(time, 2)}`,
                  String.raw`s_A = ${formatNumber(sA, 2)}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Deslocamento"
                formulas={[
                  String.raw`\Delta s = s - s_0`,
                  String.raw`\Delta s_A = ${formatNumber(
                    sA,
                    2
                  )} - ${formatNumber(s0A, 2)}`,
                  String.raw`\Delta s_A = ${formatNumber(
                    displacementA,
                    2
                  )}\,\text{m}`,
                  String.raw`\Delta s_A = v_A t = ${formatNumber(
                    vA,
                    2
                  )}\cdot ${formatNumber(time, 2)}`,
                ]}
              />

              <FormulaSection
                title="Interpretação gráfica"
                formulas={[
                  String.raw`\text{No gráfico }s\times t,\text{ a inclinação da reta é a velocidade.}`,
                  String.raw`v = \frac{\Delta s}{\Delta t}`,
                  String.raw`\text{No gráfico }v\times t,\text{ a área representa o deslocamento.}`,
                  String.raw`\Delta s = v\cdot t`,
                ]}
              />

              {mode === "meeting" && (
                <FormulaSection
                  title="Encontro entre dois móveis"
                  formulas={[
                    String.raw`s_A = s_B`,
                    String.raw`s_{0A} + v_A t = s_{0B} + v_B t`,
                    String.raw`t = \frac{s_{0B} - s_{0A}}{v_A - v_B}`,
                    String.raw`t = \frac{${formatNumber(
                      s0B,
                      2
                    )} - ${formatNumber(s0A, 2)}}{${formatNumber(
                      vA,
                      2
                    )} - ${formatNumber(vB, 2)}}`,
                    meetingData.exists && meetingData.t !== null
                      ? String.raw`t = ${formatNumber(
                          meetingData.t,
                          3
                        )}\,\text{s}`
                      : String.raw`\text{Não há encontro futuro válido.}`,
                    meetingData.exists && meetingData.s !== null
                      ? String.raw`s = ${formatNumber(
                          meetingData.s,
                          3
                        )}\,\text{m}`
                      : String.raw`\text{A configuração atual não gera encontro futuro.}`,
                  ]}
                />
              )}
            </div>
          </Card>

          {showTable && (
            <Card className="border border-slate-200 shadow-sm">
              <div className="border-b border-slate-200 px-5 py-4">
                <h4 className="text-base font-bold text-slate-900">
                  Tabela de valores
                </h4>
              </div>

              <ValueTable
                mode={mode}
                s0A={s0A}
                vA={vA}
                s0B={s0B}
                vB={vB}
                timeWindow={timeWindow}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

function classifyMotion(velocity: number) {
  if (velocity > 0) {
    return {
      label: "Progressivo",
      description: "A posição aumenta com o tempo.",
      className: "text-emerald-700",
    };
  }

  if (velocity < 0) {
    return {
      label: "Retrógrado",
      description: "A posição diminui com o tempo.",
      className: "text-red-700",
    };
  }

  return {
    label: "Repouso",
    description: "A posição permanece constante.",
    className: "text-slate-700",
  };
}

function drawMRUCanvas({
  ctx,
  width,
  height,
  mode,
  s0A,
  vA,
  sA,
  s0B,
  vB,
  sB,
  time,
  timeWindow,
  meetingData,
  showGraphs,
  showMeetingPoint,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  mode: MRUMode;
  s0A: number;
  vA: number;
  sA: number;
  s0B: number;
  vB: number;
  sB: number;
  time: number;
  timeWindow: number;
  meetingData: MeetingData;
  showGraphs: boolean;
  showMeetingPoint: boolean;
}) {
  drawCanvasBackground(ctx, width, height);

  const futureA = s0A + vA * timeWindow;
  const futureB = s0B + vB * timeWindow;

  const values = [0, s0A, sA, futureA];

  if (mode === "meeting") {
    values.push(s0B, sB, futureB);

    if (meetingData.s !== null && Number.isFinite(meetingData.s)) {
      values.push(meetingData.s);
    }
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(max - min, 20);

  const range = {
    min: min - span * 0.15,
    max: max + span * 0.15,
  };

  drawTrack({
    ctx,
    width,
    range,
    y: 128,
    mode,
    s0A,
    sA,
    s0B,
    sB,
    meetingData,
    showMeetingPoint,
  });

  drawHUD({
    ctx,
    mode,
    s0A,
    vA,
    sA,
    s0B,
    vB,
    sB,
    time,
    meetingData,
  });

  if (showGraphs) {
    drawSTGraph({
      ctx,
      x: 36,
      y: 260,
      width: 430,
      height: 230,
      mode,
      s0A,
      vA,
      s0B,
      vB,
      time,
      timeWindow,
    });

    drawVTGraph({
      ctx,
      x: 520,
      y: 260,
      width: 420,
      height: 230,
      mode,
      vA,
      vB,
      time,
      timeWindow,
    });
  }
}

function drawCanvasBackground(
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
}

function worldToCanvasX({
  value,
  range,
  left,
  right,
}: {
  value: number;
  range: { min: number; max: number };
  left: number;
  right: number;
}) {
  return left + ((value - range.min) / (range.max - range.min)) * (right - left);
}

function drawTrack({
  ctx,
  width,
  range,
  y,
  mode,
  s0A,
  sA,
  s0B,
  sB,
  meetingData,
  showMeetingPoint,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  range: { min: number; max: number };
  y: number;
  mode: MRUMode;
  s0A: number;
  sA: number;
  s0B: number;
  sB: number;
  meetingData: MeetingData;
  showMeetingPoint: boolean;
}) {
  const left = 70;
  const right = width - 70;
  const yB = y + 70;

  drawRoad(ctx, left, right, y);

  if (mode === "meeting") {
    drawRoad(ctx, left, right, yB);
  }

  drawTicks({
    ctx,
    range,
    left,
    right,
    y: mode === "meeting" ? yB + 30 : y + 30,
  });

  const originX = worldToCanvasX({ value: 0, range, left, right });

  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(originX, y - 55);
  ctx.lineTo(originX, mode === "meeting" ? yB + 35 : y + 35);
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 12px Arial";
  ctx.fillText("origem", originX + 8, y - 62);

  drawTrail({
    ctx,
    range,
    left,
    right,
    y,
    from: s0A,
    to: sA,
    color: "#2563eb",
  });

  drawInitialMarker({
    ctx,
    range,
    left,
    right,
    y,
    value: s0A,
    color: "#2563eb",
    label: "s₀A",
  });

  drawCar({
    ctx,
    range,
    left,
    right,
    y,
    value: sA,
    color: "#2563eb",
    label: "A",
    velocity: sA >= s0A ? 1 : -1,
  });

  if (mode === "meeting") {
    drawTrail({
      ctx,
      range,
      left,
      right,
      y: yB,
      from: s0B,
      to: sB,
      color: "#dc2626",
    });

    drawInitialMarker({
      ctx,
      range,
      left,
      right,
      y: yB,
      value: s0B,
      color: "#dc2626",
      label: "s₀B",
    });

    drawCar({
      ctx,
      range,
      left,
      right,
      y: yB,
      value: sB,
      color: "#dc2626",
      label: "B",
      velocity: sB >= s0B ? 1 : -1,
    });
  }

  if (
    mode === "meeting" &&
    showMeetingPoint &&
    meetingData.exists &&
    meetingData.s !== null
  ) {
    const meetingX = worldToCanvasX({
      value: meetingData.s,
      range,
      left,
      right,
    });

    ctx.strokeStyle = "#059669";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(meetingX, y - 58);
    ctx.lineTo(meetingX, yB + 42);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#059669";
    ctx.font = "bold 12px Arial";
    ctx.fillText(
      `encontro: ${formatNumber(meetingData.s, 1)} m`,
      meetingX + 8,
      y - 64
    );
  }
}

function drawRoad(
  ctx: CanvasRenderingContext2D,
  left: number,
  right: number,
  y: number
) {
  ctx.fillStyle = "#334155";
  roundRect(ctx, left, y - 2, right - left, 38, 8);
  ctx.fill();

  ctx.strokeStyle = "#facc15";
  ctx.lineWidth = 4;
  ctx.setLineDash([26, 24]);
  ctx.beginPath();
  ctx.moveTo(left + 15, y + 18);
  ctx.lineTo(right - 15, y + 18);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, y - 2);
  ctx.lineTo(right, y - 2);
  ctx.stroke();
}

function drawTicks({
  ctx,
  range,
  left,
  right,
  y,
}: {
  ctx: CanvasRenderingContext2D;
  range: { min: number; max: number };
  left: number;
  right: number;
  y: number;
}) {
  ctx.strokeStyle = "#94a3b8";
  ctx.fillStyle = "#475569";
  ctx.lineWidth = 1;
  ctx.font = "11px Arial";

  const ticks = 8;

  for (let i = 0; i <= ticks; i++) {
    const alpha = i / ticks;
    const value = range.min + alpha * (range.max - range.min);
    const x = left + alpha * (right - left);

    ctx.beginPath();
    ctx.moveTo(x, y - 40);
    ctx.lineTo(x, y - 22);
    ctx.stroke();

    ctx.fillText(`${formatNumber(value, 0)} m`, x - 17, y);
  }
}

function drawTrail({
  ctx,
  range,
  left,
  right,
  y,
  from,
  to,
  color,
}: {
  ctx: CanvasRenderingContext2D;
  range: { min: number; max: number };
  left: number;
  right: number;
  y: number;
  from: number;
  to: number;
  color: string;
}) {
  const x1 = worldToCanvasX({ value: from, range, left, right });
  const x2 = worldToCanvasX({ value: to, range, left, right });

  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.25;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(x1, y - 14);
  ctx.lineTo(x2, y - 14);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawInitialMarker({
  ctx,
  range,
  left,
  right,
  y,
  value,
  color,
  label,
}: {
  ctx: CanvasRenderingContext2D;
  range: { min: number; max: number };
  left: number;
  right: number;
  y: number;
  value: number;
  color: string;
  label: string;
}) {
  const x = worldToCanvasX({ value, range, left, right });

  ctx.fillStyle = color;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(x, y - 18, 6, 0, TWO_PI);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = color;
  ctx.font = "bold 11px Arial";
  ctx.fillText(label, x - 12, y - 33);
}

function drawCar({
  ctx,
  range,
  left,
  right,
  y,
  value,
  color,
  label,
  velocity,
}: {
  ctx: CanvasRenderingContext2D;
  range: { min: number; max: number };
  left: number;
  right: number;
  y: number;
  value: number;
  color: string;
  label: string;
  velocity: number;
}) {
  const x = worldToCanvasX({ value, range, left, right });
  const carY = y - 28;

  ctx.save();

  ctx.translate(x, carY);

  if (velocity < 0) {
    ctx.scale(-1, 1);
  }

  ctx.fillStyle = color;
  roundRect(ctx, -28, -10, 56, 20, 5);
  ctx.fill();

  ctx.fillStyle = shadeColor(color, 28);
  roundRect(ctx, -14, -25, 28, 18, 5);
  ctx.fill();

  ctx.fillStyle = "#bfdbfe";
  roundRect(ctx, -9, -22, 10, 10, 2);
  ctx.fill();
  roundRect(ctx, 3, -22, 10, 10, 2);
  ctx.fill();

  ctx.fillStyle = "#111827";
  ctx.beginPath();
  ctx.arc(-17, 13, 7, 0, TWO_PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(17, 13, 7, 0, TWO_PI);
  ctx.fill();

  ctx.fillStyle = "#e5e7eb";
  ctx.beginPath();
  ctx.arc(-17, 13, 3, 0, TWO_PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(17, 13, 3, 0, TWO_PI);
  ctx.fill();

  ctx.restore();

  ctx.fillStyle = color;
  ctx.font = "bold 12px Arial";
  ctx.fillText(`Carrinho ${label}`, x - 34, y - 62);
  ctx.fillText(`s = ${formatNumber(value, 1)} m`, x - 32, y - 47);
}

function drawHUD({
  ctx,
  mode,
  s0A,
  vA,
  sA,
  s0B,
  vB,
  sB,
  time,
  meetingData,
}: {
  ctx: CanvasRenderingContext2D;
  mode: MRUMode;
  s0A: number;
  vA: number;
  sA: number;
  s0B: number;
  vB: number;
  sB: number;
  time: number;
  meetingData: MeetingData;
}) {
  const boxHeight = mode === "meeting" ? 178 : 128;

  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, 24, 18, 355, boxHeight, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("MOVIMENTO RETILÍNEO UNIFORME", 42, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`t = ${formatNumber(time, 2)} s`, 42, 68);
  ctx.fillText(
    `A: s = ${formatNumber(s0A, 1)} + ${formatNumber(vA, 1)}t`,
    42,
    90
  );
  ctx.fillText(`sA = ${formatNumber(sA, 2)} m`, 42, 112);

  if (mode === "meeting") {
    ctx.fillText(
      `B: s = ${formatNumber(s0B, 1)} + ${formatNumber(vB, 1)}t`,
      42,
      136
    );
    ctx.fillText(`sB = ${formatNumber(sB, 2)} m`, 42, 158);

    if (meetingData.exists && meetingData.t !== null && meetingData.s !== null) {
      ctx.fillStyle = "#059669";
      ctx.font = "bold 12px Arial";
      ctx.fillText(
        `encontro: t = ${formatNumber(
          meetingData.t,
          2
        )} s, s = ${formatNumber(meetingData.s, 2)} m`,
        42,
        180
      );
    }
  }
}

function drawSTGraph({
  ctx,
  x,
  y,
  width,
  height,
  mode,
  s0A,
  vA,
  s0B,
  vB,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  mode: MRUMode;
  s0A: number;
  vA: number;
  s0B: number;
  vB: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "Gráfico s × t",
    xLabel: "t",
    yLabel: "s",
  });

  const values = [s0A, s0A + vA * timeWindow];

  if (mode === "meeting") {
    values.push(s0B, s0B + vB * timeWindow);
  }

  const minS = Math.min(...values);
  const maxS = Math.max(...values);
  const padding = Math.max((maxS - minS) * 0.15, 5);
  const range = {
    min: minS - padding,
    max: maxS + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / timeWindow) * (plot.right - plot.left);
  };

  const sy = (s: number) => {
    return (
      plot.bottom -
      ((s - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  drawLineGraph({
    ctx,
    t0: 0,
    t1: timeWindow,
    fn: (t) => s0A + vA * t,
    tx,
    sy,
    color: "#2563eb",
  });

  if (mode === "meeting") {
    drawLineGraph({
      ctx,
      t0: 0,
      t1: timeWindow,
      fn: (t) => s0B + vB * t,
      tx,
      sy,
      color: "#dc2626",
    });
  }

  const currentX = tx(time);

  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(currentX, plot.top);
  ctx.lineTo(currentX, plot.bottom);
  ctx.stroke();
  ctx.setLineDash([]);

  drawGraphLegend(ctx, x + width - 120, y + 24, mode);
}

function drawVTGraph({
  ctx,
  x,
  y,
  width,
  height,
  mode,
  vA,
  vB,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  mode: MRUMode;
  vA: number;
  vB: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "Gráfico v × t",
    xLabel: "t",
    yLabel: "v",
  });

  const values = mode === "meeting" ? [vA, vB, 0] : [vA, 0];
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const padding = Math.max((maxV - minV) * 0.2, 2);

  const range = {
    min: minV - padding,
    max: maxV + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / timeWindow) * (plot.right - plot.left);
  };

  const vy = (v: number) => {
    return (
      plot.bottom -
      ((v - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(plot.left, vy(0));
  ctx.lineTo(plot.right, vy(0));
  ctx.stroke();

  drawConstantGraph({
    ctx,
    t0: 0,
    t1: timeWindow,
    value: vA,
    tx,
    vy,
    color: "#2563eb",
  });

  if (mode === "meeting") {
    drawConstantGraph({
      ctx,
      t0: 0,
      t1: timeWindow,
      value: vB,
      tx,
      vy,
      color: "#dc2626",
    });
  }

  const currentX = tx(time);

  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(currentX, plot.top);
  ctx.lineTo(currentX, plot.bottom);
  ctx.stroke();
  ctx.setLineDash([]);

  const areaY = Math.min(vy(vA), vy(0));
  const areaH = Math.abs(vy(vA) - vy(0));

  ctx.fillStyle = "rgba(37,99,235,0.12)";
  ctx.fillRect(plot.left, areaY, currentX - plot.left, areaH);

  ctx.fillStyle = "#475569";
  ctx.font = "11px Arial";
  ctx.fillText("área = Δs", plot.left + 8, areaY + 18);
}

function drawGraphPanel({
  ctx,
  x,
  y,
  width,
  height,
  title,
  xLabel,
  yLabel,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  xLabel: string;
  yLabel: string;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, x, y, width, height, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText(title, x + 16, y + 24);

  const plot = getPlotArea(x, y, width, height);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {
    const gx = plot.left + (i / 4) * (plot.right - plot.left);

    ctx.beginPath();
    ctx.moveTo(gx, plot.top);
    ctx.lineTo(gx, plot.bottom);
    ctx.stroke();
  }

  for (let i = 0; i <= 4; i++) {
    const gy = plot.top + (i / 4) * (plot.bottom - plot.top);

    ctx.beginPath();
    ctx.moveTo(plot.left, gy);
    ctx.lineTo(plot.right, gy);
    ctx.stroke();
  }

  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(plot.left, plot.bottom);
  ctx.lineTo(plot.right, plot.bottom);
  ctx.moveTo(plot.left, plot.bottom);
  ctx.lineTo(plot.left, plot.top);
  ctx.stroke();

  ctx.fillStyle = "#475569";
  ctx.font = "bold 11px Arial";
  ctx.fillText(xLabel, plot.right + 6, plot.bottom + 4);
  ctx.fillText(yLabel, plot.left - 18, plot.top - 8);
}

function getPlotArea(x: number, y: number, width: number, height: number) {
  return {
    left: x + 48,
    right: x + width - 24,
    top: y + 42,
    bottom: y + height - 36,
  };
}

function drawLineGraph({
  ctx,
  t0,
  t1,
  fn,
  tx,
  sy,
  color,
}: {
  ctx: CanvasRenderingContext2D;
  t0: number;
  t1: number;
  fn: (t: number) => number;
  tx: (t: number) => number;
  sy: (s: number) => number;
  color: string;
}) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();

  const steps = 80;

  for (let i = 0; i <= steps; i++) {
    const t = t0 + (i / steps) * (t1 - t0);
    const x = tx(t);
    const y = sy(fn(t));

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
}

function drawConstantGraph({
  ctx,
  t0,
  t1,
  value,
  tx,
  vy,
  color,
}: {
  ctx: CanvasRenderingContext2D;
  t0: number;
  t1: number;
  value: number;
  tx: (t: number) => number;
  vy: (v: number) => number;
  color: string;
}) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(t0), vy(value));
  ctx.lineTo(tx(t1), vy(value));
  ctx.stroke();
}

function drawGraphLegend(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  mode: MRUMode
) {
  ctx.fillStyle = "#2563eb";
  ctx.fillRect(x, y, 12, 4);

  ctx.fillStyle = "#475569";
  ctx.font = "11px Arial";
  ctx.fillText("A", x + 18, y + 5);

  if (mode === "meeting") {
    ctx.fillStyle = "#dc2626";
    ctx.fillRect(x + 42, y, 12, 4);

    ctx.fillStyle = "#475569";
    ctx.fillText("B", x + 60, y + 5);
  }
}

function shadeColor(hex: string, percent: number) {
  const cleanHex = hex.replace("#", "");
  const num = parseInt(cleanHex, 16);

  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + percent));

  return `rgb(${r}, ${g}, ${b})`;
}

function ModeButton({
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
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        active
          ? "border-indigo-300 bg-indigo-50 text-indigo-700"
          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

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
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        active
          ? "border-indigo-300 bg-indigo-50 text-indigo-700"
          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
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
      <div className="mb-2 flex items-center justify-between gap-4">
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
  description,
  valueClassName = "text-slate-900",
}: {
  label: React.ReactNode;
  value: string;
  description?: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-lg font-bold ${valueClassName}`}>{value}</p>

      {description && (
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      )}
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

function FormulaSection({
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
          <MathFormula key={`${formula}-${index}`} formula={formula} />
        ))}
      </div>
    </div>
  );
}

function ValueTable({
  mode,
  s0A,
  vA,
  s0B,
  vB,
  timeWindow,
}: {
  mode: MRUMode;
  s0A: number;
  vA: number;
  s0B: number;
  vB: number;
  timeWindow: number;
}) {
  const rows = useMemo(() => {
    const times = [
      0,
      timeWindow * 0.25,
      timeWindow * 0.5,
      timeWindow * 0.75,
      timeWindow,
    ];

    return times.map((t) => ({
      t,
      sA: s0A + vA * t,
      sB: s0B + vB * t,
    }));
  }, [s0A, vA, s0B, vB, timeWindow]);

  return (
    <div className="overflow-x-auto p-5">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left font-bold text-slate-700">
              Tempo
            </th>

            <th className="px-4 py-3 text-left font-bold text-blue-700">
              Posição A
            </th>

            {mode === "meeting" && (
              <th className="px-4 py-3 text-left font-bold text-red-700">
                Posição B
              </th>
            )}

            {mode === "meeting" && (
              <th className="px-4 py-3 text-left font-bold text-slate-700">
                Distância
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.t} className="border-b border-slate-100">
              <td className="px-4 py-3 text-slate-700">
                {formatUnit(row.t, "s")}
              </td>

              <td className="px-4 py-3 font-semibold text-blue-700">
                {formatUnit(row.sA, "m")}
              </td>

              {mode === "meeting" && (
                <td className="px-4 py-3 font-semibold text-red-700">
                  {formatUnit(row.sB, "m")}
                </td>
              )}

              {mode === "meeting" && (
                <td className="px-4 py-3 text-slate-700">
                  {formatUnit(Math.abs(row.sB - row.sA), "m")}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

export default MRUSimulator;
