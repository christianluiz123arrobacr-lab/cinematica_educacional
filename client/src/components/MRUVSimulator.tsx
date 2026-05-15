import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { MathFormula } from "@/components/MathFormula";

interface MRUVSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type ClassificationData = {
  label: string;
  description: string;
  className: string;
};

type InversionData = {
  exists: boolean;
  t: number | null;
  s: number | null;
  reason: string;
};

const TWO_PI = 2 * Math.PI;

const DEFAULT_TIME_WINDOW = 12;
const DEFAULT_SIM_SPEED = 0.65;

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

export const MRUVSimulator: React.FC<MRUVSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  const [s0, setS0] = useState(0);
  const [v0, setV0] = useState(8);
  const [a, setA] = useState(2);

  const [time, setTime] = useState(0);
  const [timeWindow, setTimeWindow] = useState(DEFAULT_TIME_WINDOW);
  const [simSpeed, setSimSpeed] = useState(DEFAULT_SIM_SPEED);

  const [showGraphs, setShowGraphs] = useState(true);
  const [showVectors, setShowVectors] = useState(true);
  const [showInversion, setShowInversion] = useState(true);
  const [showTable, setShowTable] = useState(true);

  const s = useMemo(() => {
    return s0 + v0 * time + (a * time ** 2) / 2;
  }, [s0, v0, a, time]);

  const v = useMemo(() => {
    return v0 + a * time;
  }, [v0, a, time]);

  const displacement = useMemo(() => {
    return s - s0;
  }, [s, s0]);

  const averageVelocity = useMemo(() => {
    if (time === 0) return 0;
    return displacement / time;
  }, [displacement, time]);

  const finalS = useMemo(() => {
    return s0 + v0 * timeWindow + (a * timeWindow ** 2) / 2;
  }, [s0, v0, a, timeWindow]);

  const finalV = useMemo(() => {
    return v0 + a * timeWindow;
  }, [v0, a, timeWindow]);

  const classification = useMemo<ClassificationData>(() => {
    return classifyMRUV(v, a);
  }, [v, a]);

  const initialClassification = useMemo<ClassificationData>(() => {
    return classifyMRUV(v0, a);
  }, [v0, a]);

  const inversionData = useMemo<InversionData>(() => {
    if (Math.abs(a) < 1e-9) {
      return {
        exists: false,
        t: null,
        s: null,
        reason: "A aceleração é zero. Então não há inversão por MRUV.",
      };
    }

    const tInversion = -v0 / a;
    const sInversion = s0 + v0 * tInversion + (a * tInversion ** 2) / 2;

    if (tInversion < 0) {
      return {
        exists: false,
        t: tInversion,
        s: sInversion,
        reason: "A inversão matemática ocorreu antes do início da simulação.",
      };
    }

    return {
      exists: true,
      t: tInversion,
      s: sInversion,
      reason:
        tInversion <= timeWindow
          ? "A inversão acontece dentro da janela de tempo mostrada."
          : "A inversão existe, mas acontece depois da janela de tempo atual.",
    };
  }, [s0, v0, a, timeWindow]);

  const resetLocal = () => {
    setS0(0);
    setV0(8);
    setA(2);
    setTime(0);
    setTimeWindow(DEFAULT_TIME_WINDOW);
    setSimSpeed(DEFAULT_SIM_SPEED);
    setShowGraphs(true);
    setShowVectors(true);
    setShowInversion(true);
    setShowTable(true);
    lastFrameRef.current = 0;
  };

  useEffect(() => {
    resetLocal();
  }, [resetTrigger]);

  useEffect(() => {
    setTime(0);
    lastFrameRef.current = 0;
  }, [s0, v0, a, timeWindow]);

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

    drawMRUVCanvas({
      ctx,
      width: canvas.width,
      height: canvas.height,
      s0,
      v0,
      a,
      s,
      v,
      time,
      timeWindow,
      finalS,
      finalV,
      inversionData,
      showGraphs,
      showVectors,
      showInversion,
    });
  }, [
    s0,
    v0,
    a,
    s,
    v,
    time,
    timeWindow,
    finalS,
    finalV,
    inversionData,
    showGraphs,
    showVectors,
    showInversion,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Controles do MRUV
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste posição inicial, velocidade inicial e aceleração.
              </p>
            </div>

            <div className="space-y-5 p-5">
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
                  min={4}
                  max={40}
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
                  Carrinho
                </p>

                <div className="space-y-5">
                  <ControlRow
                    label="Posição inicial"
                    symbol="s₀"
                    value={formatUnit(s0, "m")}
                  >
                    <Slider
                      value={[s0]}
                      onValueChange={(value) => setS0(value[0])}
                      min={-100}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Velocidade inicial"
                    symbol="v₀"
                    value={formatUnit(v0, "m/s")}
                  >
                    <Slider
                      value={[v0]}
                      onValueChange={(value) => setV0(value[0])}
                      min={-30}
                      max={30}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Aceleração"
                    symbol="a"
                    value={formatUnit(a, "m/s²")}
                  >
                    <Slider
                      value={[a]}
                      onValueChange={(value) => setA(value[0])}
                      min={-10}
                      max={10}
                      step={0.25}
                      className="w-full"
                    />
                  </ControlRow>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ToggleButton
                  active={showGraphs}
                  onClick={() => setShowGraphs((previous) => !previous)}
                >
                  Gráficos
                </ToggleButton>

                <ToggleButton
                  active={showVectors}
                  onClick={() => setShowVectors((previous) => !previous)}
                >
                  Vetores
                </ToggleButton>

                <ToggleButton
                  active={showInversion}
                  onClick={() => setShowInversion((previous) => !previous)}
                >
                  Inversão
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
                  className="col-span-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Restaurar padrão
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
                label="Classificação atual"
                value={classification.label}
                description={classification.description}
                valueClassName={classification.className}
              />

              <MetricCard
                label="Classificação inicial"
                value={initialClassification.label}
                description={initialClassification.description}
                valueClassName={initialClassification.className}
              />

              <MetricCard
                label="Posição atual"
                value={formatUnit(s, "m")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label="Velocidade atual"
                value={formatUnit(v, "m/s")}
                valueClassName={v >= 0 ? "text-emerald-700" : "text-red-700"}
              />

              <MetricCard
                label="Deslocamento"
                value={formatUnit(displacement, "m")}
              />

              <MetricCard
                label="Velocidade média"
                value={formatUnit(averageVelocity, "m/s")}
              />

              <MetricCard
                label="Ponto de inversão"
                value={
                  inversionData.exists && inversionData.t !== null
                    ? `t = ${formatNumber(inversionData.t, 2)} s`
                    : "Sem inversão futura"
                }
                description={inversionData.reason}
                valueClassName={
                  inversionData.exists ? "text-purple-700" : "text-amber-700"
                }
              />
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
                O carrinho pode acelerar, frear, parar e inverter o sentido.
              </p>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="overflow-x-auto">
                  <canvas
                    ref={canvasRef}
                    width={980}
                    height={560}
                    className="mx-auto w-full min-w-[860px] rounded-lg border border-slate-200 bg-slate-50"
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
                title="Dados do movimento"
                values={[
                  ["s₀", formatUnit(s0, "m")],
                  ["v₀", formatUnit(v0, "m/s")],
                  ["a", formatUnit(a, "m/s²")],
                  ["t", formatUnit(time, "s")],
                ]}
              />

              <CalcMiniCard
                title="Estado atual"
                values={[
                  ["s", formatUnit(s, "m")],
                  ["v", formatUnit(v, "m/s")],
                  ["Δs", formatUnit(displacement, "m")],
                  ["vm", formatUnit(averageVelocity, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Inversão"
                values={[
                  [
                    "t inversão",
                    inversionData.exists && inversionData.t !== null
                      ? formatUnit(inversionData.t, "s")
                      : "—",
                  ],
                  [
                    "s inversão",
                    inversionData.exists && inversionData.s !== null
                      ? formatUnit(inversionData.s, "m")
                      : "—",
                  ],
                  ["v = 0?", Math.abs(v) < 0.08 ? "sim" : "não"],
                  ["tipo atual", classification.label],
                ]}
              />

              <CalcMiniCard
                title="Gráficos"
                values={[
                  ["s × t", "parábola"],
                  ["v × t", "reta"],
                  ["a × t", "reta horizontal"],
                  ["área em v × t", "deslocamento"],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Equações do MRUV
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <FormulaSection
                title="Função horária da posição"
                formulas={[
                  String.raw`s = s_0 + v_0t + \frac{at^2}{2}`,
                  String.raw`s = ${formatNumber(s0, 2)} + ${formatNumber(
                    v0,
                    2
                  )}\cdot ${formatNumber(time, 2)} + \frac{${formatNumber(
                    a,
                    2
                  )}\cdot ${formatNumber(time, 2)}^2}{2}`,
                  String.raw`s = ${formatNumber(s, 2)}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Função horária da velocidade"
                formulas={[
                  String.raw`v = v_0 + at`,
                  String.raw`v = ${formatNumber(v0, 2)} + ${formatNumber(
                    a,
                    2
                  )}\cdot ${formatNumber(time, 2)}`,
                  String.raw`v = ${formatNumber(v, 2)}\,\text{m/s}`,
                ]}
              />

              <FormulaSection
                title="Deslocamento"
                formulas={[
                  String.raw`\Delta s = s - s_0`,
                  String.raw`\Delta s = ${formatNumber(s, 2)} - ${formatNumber(
                    s0,
                    2
                  )}`,
                  String.raw`\Delta s = ${formatNumber(
                    displacement,
                    2
                  )}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Equação de Torricelli"
                formulas={[
                  String.raw`v^2 = v_0^2 + 2a\Delta s`,
                  String.raw`${formatNumber(v, 2)}^2 = ${formatNumber(
                    v0,
                    2
                  )}^2 + 2\cdot ${formatNumber(a, 2)}\cdot ${formatNumber(
                    displacement,
                    2
                  )}`,
                  String.raw`\text{Essa equação é útil quando o tempo não aparece.}`,
                ]}
              />

              <FormulaSection
                title="Ponto de inversão"
                formulas={[
                  String.raw`v = 0`,
                  String.raw`0 = v_0 + at`,
                  String.raw`t = -\frac{v_0}{a}`,
                  inversionData.exists && inversionData.t !== null
                    ? String.raw`t = ${formatNumber(
                        inversionData.t,
                        3
                      )}\,\text{s}`
                    : String.raw`\text{Não há inversão futura válida.}`,
                  inversionData.exists && inversionData.s !== null
                    ? String.raw`s = ${formatNumber(
                        inversionData.s,
                        3
                      )}\,\text{m}`
                    : String.raw`\text{Sem posição futura de inversão.}`,
                ]}
              />

              <FormulaSection
                title="Interpretação gráfica"
                formulas={[
                  String.raw`\text{No gráfico }s\times t,\text{ temos uma parábola.}`,
                  String.raw`\text{No gráfico }v\times t,\text{ temos uma reta.}`,
                  String.raw`\text{No gráfico }a\times t,\text{ temos uma reta horizontal.}`,
                  String.raw`\text{A área no gráfico }v\times t\text{ representa o deslocamento.}`,
                ]}
              />
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
                s0={s0}
                v0={v0}
                a={a}
                timeWindow={timeWindow}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

function classifyMRUV(velocity: number, acceleration: number): ClassificationData {
  if (Math.abs(acceleration) < 1e-9) {
    if (Math.abs(velocity) < 1e-9) {
      return {
        label: "Repouso",
        description: "Velocidade e aceleração nulas. O carrinho fica parado.",
        className: "text-slate-700",
      };
    }

    return {
      label: "MRU",
      description: "A aceleração é zero. A velocidade permanece constante.",
      className: "text-blue-700",
    };
  }

  if (Math.abs(velocity) < 1e-9) {
    return {
      label: "Repouso instantâneo",
      description:
        "A velocidade é zero neste instante, mas a aceleração pode fazer o carrinho voltar a se mover.",
      className: "text-purple-700",
    };
  }

  if (velocity * acceleration > 0) {
    return {
      label: "Movimento acelerado",
      description:
        "Velocidade e aceleração têm o mesmo sinal. O módulo da velocidade aumenta.",
      className: "text-emerald-700",
    };
  }

  return {
    label: "Movimento retardado",
    description:
      "Velocidade e aceleração têm sinais opostos. O módulo da velocidade diminui.",
    className: "text-amber-700",
  };
}

function drawMRUVCanvas({
  ctx,
  width,
  height,
  s0,
  v0,
  a,
  s,
  v,
  time,
  timeWindow,
  finalS,
  finalV,
  inversionData,
  showGraphs,
  showVectors,
  showInversion,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  s0: number;
  v0: number;
  a: number;
  s: number;
  v: number;
  time: number;
  timeWindow: number;
  finalS: number;
  finalV: number;
  inversionData: InversionData;
  showGraphs: boolean;
  showVectors: boolean;
  showInversion: boolean;
}) {
  drawCanvasBackground(ctx, width, height);

  const values = [0, s0, s, finalS];

  if (
    inversionData.s !== null &&
    Number.isFinite(inversionData.s) &&
    inversionData.t !== null &&
    inversionData.t >= 0 &&
    inversionData.t <= timeWindow
  ) {
    values.push(inversionData.s);
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
    y: 145,
    s0,
    s,
    v,
    a,
    inversionData,
    showVectors,
    showInversion,
    timeWindow,
  });

  drawHUD({
    ctx,
    s0,
    v0,
    a,
    s,
    v,
    time,
    inversionData,
  });

  if (showGraphs) {
    drawSTGraph({
      ctx,
      x: 30,
      y: 305,
      width: 290,
      height: 215,
      s0,
      v0,
      a,
      time,
      timeWindow,
    });

    drawVTGraph({
      ctx,
      x: 345,
      y: 305,
      width: 290,
      height: 215,
      v0,
      a,
      time,
      timeWindow,
      finalV,
    });

    drawATGraph({
      ctx,
      x: 660,
      y: 305,
      width: 290,
      height: 215,
      a,
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
  s0,
  s,
  v,
  a,
  inversionData,
  showVectors,
  showInversion,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  range: { min: number; max: number };
  y: number;
  s0: number;
  s: number;
  v: number;
  a: number;
  inversionData: InversionData;
  showVectors: boolean;
  showInversion: boolean;
  timeWindow: number;
}) {
  const left = 70;
  const right = width - 70;

  drawRoad(ctx, left, right, y);

  drawTicks({
    ctx,
    range,
    left,
    right,
    y: y + 34,
  });

  const originX = worldToCanvasX({ value: 0, range, left, right });

  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(originX, y - 65);
  ctx.lineTo(originX, y + 42);
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 12px Arial";
  ctx.fillText("origem", originX + 8, y - 72);

  drawTrail({
    ctx,
    range,
    left,
    right,
    y,
    from: s0,
    to: s,
    color: "#2563eb",
  });

  drawInitialMarker({
    ctx,
    range,
    left,
    right,
    y,
    value: s0,
    color: "#2563eb",
    label: "s₀",
  });

  if (
    showInversion &&
    inversionData.exists &&
    inversionData.s !== null &&
    inversionData.t !== null &&
    inversionData.t >= 0 &&
    inversionData.t <= timeWindow
  ) {
    const xInv = worldToCanvasX({
      value: inversionData.s,
      range,
      left,
      right,
    });

    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(xInv, y - 68);
    ctx.lineTo(xInv, y + 44);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#7c3aed";
    ctx.font = "bold 12px Arial";
    ctx.fillText(
      `inversão: ${formatNumber(inversionData.s, 1)} m`,
      xInv + 8,
      y - 74
    );
  }

  drawCar({
    ctx,
    range,
    left,
    right,
    y,
    value: s,
    color: "#2563eb",
    velocity: v,
  });

  if (showVectors) {
    const xCar = worldToCanvasX({ value: s, range, left, right });

    drawMotionVector({
      ctx,
      x: xCar,
      y: y - 62,
      value: v,
      color: "#16a34a",
      label: `v = ${formatNumber(v, 1)} m/s`,
      scale: 4,
    });

    drawMotionVector({
      ctx,
      x: xCar,
      y: y - 92,
      value: a,
      color: "#dc2626",
      label: `a = ${formatNumber(a, 1)} m/s²`,
      scale: 12,
    });
  }
}

function drawRoad(
  ctx: CanvasRenderingContext2D,
  left: number,
  right: number,
  y: number
) {
  ctx.fillStyle = "#334155";
  roundRect(ctx, left, y - 2, right - left, 40, 8);
  ctx.fill();

  ctx.strokeStyle = "#facc15";
  ctx.lineWidth = 4;
  ctx.setLineDash([26, 24]);
  ctx.beginPath();
  ctx.moveTo(left + 15, y + 19);
  ctx.lineTo(right - 15, y + 19);
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
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(x1, y - 16);
  ctx.lineTo(x2, y - 16);
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
  ctx.fillText(label, x - 8, y - 34);
}

function drawCar({
  ctx,
  range,
  left,
  right,
  y,
  value,
  color,
  velocity,
}: {
  ctx: CanvasRenderingContext2D;
  range: { min: number; max: number };
  left: number;
  right: number;
  y: number;
  value: number;
  color: string;
  velocity: number;
}) {
  const x = worldToCanvasX({ value, range, left, right });
  const carY = y - 29;

  ctx.save();

  ctx.translate(x, carY);

  if (velocity < 0) {
    ctx.scale(-1, 1);
  }

  ctx.fillStyle = color;
  roundRect(ctx, -30, -10, 60, 22, 5);
  ctx.fill();

  ctx.fillStyle = shadeColor(color, 28);
  roundRect(ctx, -16, -27, 32, 20, 5);
  ctx.fill();

  ctx.fillStyle = "#bfdbfe";
  roundRect(ctx, -11, -24, 11, 11, 2);
  ctx.fill();
  roundRect(ctx, 3, -24, 11, 11, 2);
  ctx.fill();

  ctx.fillStyle = "#111827";
  ctx.beginPath();
  ctx.arc(-18, 14, 7, 0, TWO_PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(18, 14, 7, 0, TWO_PI);
  ctx.fill();

  ctx.fillStyle = "#e5e7eb";
  ctx.beginPath();
  ctx.arc(-18, 14, 3, 0, TWO_PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(18, 14, 3, 0, TWO_PI);
  ctx.fill();

  ctx.restore();

  ctx.fillStyle = color;
  ctx.font = "bold 12px Arial";
  ctx.fillText(`s = ${formatNumber(value, 1)} m`, x - 33, y - 51);
}

function drawMotionVector({
  ctx,
  x,
  y,
  value,
  color,
  label,
  scale,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  value: number;
  color: string;
  label: string;
  scale: number;
}) {
  if (Math.abs(value) < 1e-9) {
    ctx.fillStyle = color;
    ctx.font = "bold 12px Arial";
    ctx.fillText(`${label}`, x + 10, y + 4);
    return;
  }

  const length = Math.max(26, Math.min(92, Math.abs(value) * scale));
  const direction = value >= 0 ? 1 : -1;

  const fromX = x;
  const toX = x + direction * length;

  drawArrow(ctx, fromX, y, toX, y, color, label);
}

function drawHUD({
  ctx,
  s0,
  v0,
  a,
  s,
  v,
  time,
  inversionData,
}: {
  ctx: CanvasRenderingContext2D;
  s0: number;
  v0: number;
  a: number;
  s: number;
  v: number;
  time: number;
  inversionData: InversionData;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, 24, 18, 380, 160, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("MOVIMENTO RETILÍNEO UNIFORMEMENTE VARIADO", 42, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`t = ${formatNumber(time, 2)} s`, 42, 68);
  ctx.fillText(
    `s = ${formatNumber(s0, 1)} + ${formatNumber(v0, 1)}t + (${formatNumber(
      a,
      1
    )}t²)/2`,
    42,
    90
  );
  ctx.fillText(`s = ${formatNumber(s, 2)} m`, 42, 112);
  ctx.fillText(`v = ${formatNumber(v0, 1)} + ${formatNumber(a, 1)}t`, 42, 134);
  ctx.fillText(`v = ${formatNumber(v, 2)} m/s`, 42, 156);

  if (inversionData.exists && inversionData.t !== null) {
    ctx.fillStyle = "#7c3aed";
    ctx.font = "bold 12px Arial";
    ctx.fillText(
      `inversão: t = ${formatNumber(inversionData.t, 2)} s`,
      230,
      156
    );
  }
}

function drawSTGraph({
  ctx,
  x,
  y,
  width,
  height,
  s0,
  v0,
  a,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  s0: number;
  v0: number;
  a: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "s × t",
    xLabel: "t",
    yLabel: "s",
  });

  const samples = 80;
  const values: number[] = [];

  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * timeWindow;
    values.push(s0 + v0 * t + (a * t ** 2) / 2);
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

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * timeWindow;
    const s = s0 + v0 * t + (a * t ** 2) / 2;

    if (i === 0) {
      ctx.moveTo(tx(t), sy(s));
    } else {
      ctx.lineTo(tx(t), sy(s));
    }
  }

  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawVTGraph({
  ctx,
  x,
  y,
  width,
  height,
  v0,
  a,
  time,
  timeWindow,
  finalV,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  v0: number;
  a: number;
  time: number;
  timeWindow: number;
  finalV: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "v × t",
    xLabel: "t",
    yLabel: "v",
  });

  const minV = Math.min(v0, finalV, 0);
  const maxV = Math.max(v0, finalV, 0);
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

  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), vy(v0));
  ctx.lineTo(tx(timeWindow), vy(finalV));
  ctx.stroke();

  const currentX = tx(time);

  const vAtTime = v0 + a * time;
  const zeroY = vy(0);
  const currentY = vy(vAtTime);

  ctx.fillStyle = "rgba(22,163,74,0.12)";
  ctx.fillRect(
    plot.left,
    Math.min(zeroY, currentY),
    currentX - plot.left,
    Math.abs(currentY - zeroY)
  );

  ctx.fillStyle = "#475569";
  ctx.font = "11px Arial";
  ctx.fillText("área = Δs", plot.left + 8, Math.min(zeroY, currentY) + 18);

  drawCurrentTimeLine(ctx, plot, currentX);
}

function drawATGraph({
  ctx,
  x,
  y,
  width,
  height,
  a,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  a: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "a × t",
    xLabel: "t",
    yLabel: "a",
  });

  const minA = Math.min(a, 0);
  const maxA = Math.max(a, 0);
  const padding = Math.max((maxA - minA) * 0.2, 1);

  const range = {
    min: minA - padding,
    max: maxA + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / timeWindow) * (plot.right - plot.left);
  };

  const ay = (value: number) => {
    return (
      plot.bottom -
      ((value - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(plot.left, ay(0));
  ctx.lineTo(plot.right, ay(0));
  ctx.stroke();

  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), ay(a));
  ctx.lineTo(tx(timeWindow), ay(a));
  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawCurrentTimeLine(
  ctx: CanvasRenderingContext2D,
  plot: { left: number; right: number; top: number; bottom: number },
  currentX: number
) {
  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(currentX, plot.top);
  ctx.lineTo(currentX, plot.bottom);
  ctx.stroke();
  ctx.setLineDash([]);
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
    left: x + 42,
    right: x + width - 20,
    top: y + 42,
    bottom: y + height - 32,
  };
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

function shadeColor(hex: string, percent: number) {
  const cleanHex = hex.replace("#", "");
  const num = parseInt(cleanHex, 16);

  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + percent));

  return `rgb(${r}, ${g}, ${b})`;
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
  s0,
  v0,
  a,
  timeWindow,
}: {
  s0: number;
  v0: number;
  a: number;
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

    return times.map((t) => {
      const s = s0 + v0 * t + (a * t ** 2) / 2;
      const v = v0 + a * t;

      return {
        t,
        s,
        v,
        a,
      };
    });
  }, [s0, v0, a, timeWindow]);

  return (
    <div className="overflow-x-auto p-5">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left font-bold text-slate-700">
              Tempo
            </th>

            <th className="px-4 py-3 text-left font-bold text-blue-700">
              Posição
            </th>

            <th className="px-4 py-3 text-left font-bold text-emerald-700">
              Velocidade
            </th>

            <th className="px-4 py-3 text-left font-bold text-red-700">
              Aceleração
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.t} className="border-b border-slate-100">
              <td className="px-4 py-3 text-slate-700">
                {formatUnit(row.t, "s")}
              </td>

              <td className="px-4 py-3 font-semibold text-blue-700">
                {formatUnit(row.s, "m")}
              </td>

              <td className="px-4 py-3 font-semibold text-emerald-700">
                {formatUnit(row.v, "m/s")}
              </td>

              <td className="px-4 py-3 font-semibold text-red-700">
                {formatUnit(row.a, "m/s²")}
              </td>
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

export default MRUVSimulator;
