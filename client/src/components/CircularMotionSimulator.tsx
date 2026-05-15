import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { MathFormula } from "@/components/MathFormula";

interface CircularMotionSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type ClassificationData = {
  label: string;
  description: string;
  className: string;
};

const TWO_PI = 2 * Math.PI;

const DEFAULT_RADIUS = 4;
const DEFAULT_OMEGA = 1.5;
const DEFAULT_INITIAL_ANGLE_DEG = 0;
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

const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value));
};

export const CircularMotionSimulator: React.FC<CircularMotionSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  const [radius, setRadius] = useState(DEFAULT_RADIUS);
  const [omega, setOmega] = useState(DEFAULT_OMEGA);
  const [initialAngleDeg, setInitialAngleDeg] = useState(DEFAULT_INITIAL_ANGLE_DEG);

  const [time, setTime] = useState(0);
  const [timeWindow, setTimeWindow] = useState(DEFAULT_TIME_WINDOW);
  const [simSpeed, setSimSpeed] = useState(DEFAULT_SIM_SPEED);

  const [showVectors, setShowVectors] = useState(true);
  const [showGraphs, setShowGraphs] = useState(true);
  const [showTrail, setShowTrail] = useState(true);
  const [showTable, setShowTable] = useState(true);

  const initialAngleRad = useMemo(() => {
    return (initialAngleDeg * Math.PI) / 180;
  }, [initialAngleDeg]);

  const angle = useMemo(() => {
    return initialAngleRad + omega * time;
  }, [initialAngleRad, omega, time]);

  const normalizedAngle = useMemo(() => {
    const raw = angle % TWO_PI;
    return raw < 0 ? raw + TWO_PI : raw;
  }, [angle]);

  const angularDisplacement = useMemo(() => {
    return omega * time;
  }, [omega, time]);

  const arcLength = useMemo(() => {
    return radius * angularDisplacement;
  }, [radius, angularDisplacement]);

  const speed = useMemo(() => {
    return Math.abs(omega) * radius;
  }, [omega, radius]);

  const tangentialVelocity = useMemo(() => {
    return omega * radius;
  }, [omega, radius]);

  const centripetalAcceleration = useMemo(() => {
    return omega ** 2 * radius;
  }, [omega, radius]);

  const period = useMemo(() => {
    if (Math.abs(omega) < 1e-9) return Infinity;
    return TWO_PI / Math.abs(omega);
  }, [omega]);

  const frequency = useMemo(() => {
    if (!Number.isFinite(period) || period === 0) return 0;
    return 1 / period;
  }, [period]);

  const revolutions = useMemo(() => {
    return angularDisplacement / TWO_PI;
  }, [angularDisplacement]);

  const classification = useMemo(() => {
    return classifyCircularMotion(omega);
  }, [omega]);

  const resetLocal = () => {
    setRadius(DEFAULT_RADIUS);
    setOmega(DEFAULT_OMEGA);
    setInitialAngleDeg(DEFAULT_INITIAL_ANGLE_DEG);
    setTime(0);
    setTimeWindow(DEFAULT_TIME_WINDOW);
    setSimSpeed(DEFAULT_SIM_SPEED);
    setShowVectors(true);
    setShowGraphs(true);
    setShowTrail(true);
    setShowTable(true);
    lastFrameRef.current = 0;
  };

  useEffect(() => {
    resetLocal();
  }, [resetTrigger]);

  useEffect(() => {
    setTime(0);
    lastFrameRef.current = 0;
  }, [radius, omega, initialAngleDeg, timeWindow]);

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

    drawCircularCanvas({
      ctx,
      width: canvas.width,
      height: canvas.height,
      radius,
      omega,
      initialAngleRad,
      angle,
      normalizedAngle,
      time,
      timeWindow,
      speed,
      tangentialVelocity,
      centripetalAcceleration,
      period,
      frequency,
      revolutions,
      showVectors,
      showGraphs,
      showTrail,
    });
  }, [
    radius,
    omega,
    initialAngleRad,
    angle,
    normalizedAngle,
    time,
    timeWindow,
    speed,
    tangentialVelocity,
    centripetalAcceleration,
    period,
    frequency,
    revolutions,
    showVectors,
    showGraphs,
    showTrail,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Controles do Movimento Circular
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste raio, velocidade angular e ângulo inicial.
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
                  step={0.01}
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
                  Corpo em movimento circular
                </p>

                <div className="space-y-5">
                  <ControlRow
                    label="Raio"
                    symbol="R"
                    value={formatUnit(radius, "m")}
                  >
                    <Slider
                      value={[radius]}
                      onValueChange={(value) => setRadius(value[0])}
                      min={0.5}
                      max={10}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Velocidade angular"
                    symbol="ω"
                    value={formatUnit(omega, "rad/s")}
                  >
                    <Slider
                      value={[omega]}
                      onValueChange={(value) => setOmega(value[0])}
                      min={-5}
                      max={5}
                      step={0.05}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Ângulo inicial"
                    symbol="θ₀"
                    value={`${formatNumber(initialAngleDeg, 0)}°`}
                  >
                    <Slider
                      value={[initialAngleDeg]}
                      onValueChange={(value) => setInitialAngleDeg(value[0])}
                      min={0}
                      max={360}
                      step={5}
                      className="w-full"
                    />
                  </ControlRow>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ToggleButton
                  active={showVectors}
                  onClick={() => setShowVectors((previous) => !previous)}
                >
                  Vetores
                </ToggleButton>

                <ToggleButton
                  active={showGraphs}
                  onClick={() => setShowGraphs((previous) => !previous)}
                >
                  Gráficos
                </ToggleButton>

                <ToggleButton
                  active={showTrail}
                  onClick={() => setShowTrail((previous) => !previous)}
                >
                  Rastro
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
                label="Tipo de movimento"
                value={classification.label}
                description={classification.description}
                valueClassName={classification.className}
              />

              <MetricCard
                label="Ângulo atual"
                value={`${formatNumber((normalizedAngle * 180) / Math.PI, 2)}°`}
                description={`${formatNumber(normalizedAngle, 3)} rad`}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label="Velocidade linear"
                value={formatUnit(speed, "m/s")}
                valueClassName="text-emerald-700"
              />

              <MetricCard
                label="Aceleração centrípeta"
                value={formatUnit(centripetalAcceleration, "m/s²")}
                valueClassName="text-red-700"
              />

              <MetricCard
                label="Período"
                value={
                  Number.isFinite(period) ? formatUnit(period, "s") : "∞"
                }
                description="Tempo para completar uma volta."
              />

              <MetricCard
                label="Frequência"
                value={formatUnit(frequency, "Hz")}
                description="Número de voltas por segundo."
              />

              <MetricCard
                label="Voltas realizadas"
                value={`${formatNumber(revolutions, 3)} volta(s)`}
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
                A velocidade é tangente à trajetória e a aceleração centrípeta aponta para o centro.
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
                  ["R", formatUnit(radius, "m")],
                  ["ω", formatUnit(omega, "rad/s")],
                  ["θ₀", `${formatNumber(initialAngleDeg, 0)}°`],
                  ["t", formatUnit(time, "s")],
                ]}
              />

              <CalcMiniCard
                title="Grandezas angulares"
                values={[
                  ["θ", `${formatNumber(normalizedAngle, 3)} rad`],
                  ["Δθ", `${formatNumber(angularDisplacement, 3)} rad`],
                  ["voltas", formatNumber(revolutions, 3)],
                  ["sentido", omega >= 0 ? "anti-horário" : "horário"],
                ]}
              />

              <CalcMiniCard
                title="Grandezas lineares"
                values={[
                  ["v", formatUnit(speed, "m/s")],
                  ["v tangencial", formatUnit(tangentialVelocity, "m/s")],
                  ["aᶜ", formatUnit(centripetalAcceleration, "m/s²")],
                  ["arco", formatUnit(arcLength, "m")],
                ]}
              />

              <CalcMiniCard
                title="Ciclo"
                values={[
                  ["T", Number.isFinite(period) ? formatUnit(period, "s") : "∞"],
                  ["f", formatUnit(frequency, "Hz")],
                  ["θ × t", "reta"],
                  ["v e aᶜ", "módulos constantes"],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Equações do Movimento Circular Uniforme
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <FormulaSection
                title="Função horária angular"
                formulas={[
                  String.raw`\theta = \theta_0 + \omega t`,
                  String.raw`\theta = ${formatNumber(
                    initialAngleRad,
                    3
                  )} + ${formatNumber(omega, 3)}\cdot ${formatNumber(time, 2)}`,
                  String.raw`\theta = ${formatNumber(angle, 3)}\,\text{rad}`,
                ]}
              />

              <FormulaSection
                title="Velocidade linear"
                formulas={[
                  String.raw`v = \omega R`,
                  String.raw`|v| = |\omega|R`,
                  String.raw`|v| = |${formatNumber(omega, 3)}|\cdot ${formatNumber(
                    radius,
                    2
                  )}`,
                  String.raw`|v| = ${formatNumber(speed, 3)}\,\text{m/s}`,
                ]}
              />

              <FormulaSection
                title="Aceleração centrípeta"
                formulas={[
                  String.raw`a_c = \frac{v^2}{R}`,
                  String.raw`a_c = \omega^2R`,
                  String.raw`a_c = (${formatNumber(omega, 3)})^2\cdot ${formatNumber(
                    radius,
                    2
                  )}`,
                  String.raw`a_c = ${formatNumber(
                    centripetalAcceleration,
                    3
                  )}\,\text{m/s}^2`,
                ]}
              />

              <FormulaSection
                title="Período e frequência"
                formulas={[
                  String.raw`T = \frac{2\pi}{|\omega|}`,
                  Number.isFinite(period)
                    ? String.raw`T = ${formatNumber(period, 3)}\,\text{s}`
                    : String.raw`T = \infty`,
                  String.raw`f = \frac{1}{T} = \frac{|\omega|}{2\pi}`,
                  String.raw`f = ${formatNumber(frequency, 3)}\,\text{Hz}`,
                ]}
              />

              <FormulaSection
                title="Comprimento de arco"
                formulas={[
                  String.raw`\Delta s = R\Delta\theta`,
                  String.raw`\Delta s = ${formatNumber(radius, 2)}\cdot ${formatNumber(
                    angularDisplacement,
                    3
                  )}`,
                  String.raw`\Delta s = ${formatNumber(arcLength, 3)}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Interpretação dos vetores"
                formulas={[
                  String.raw`\vec{v}\text{ é tangente à trajetória.}`,
                  String.raw`\vec{a}_c\text{ aponta para o centro da circunferência.}`,
                  String.raw`\vec{v}\perp \vec{a}_c`,
                  String.raw`\text{No MCU, o módulo da velocidade é constante, mas a direção muda.}`,
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
                radius={radius}
                omega={omega}
                initialAngleRad={initialAngleRad}
                timeWindow={timeWindow}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

function classifyCircularMotion(omega: number): ClassificationData {
  if (Math.abs(omega) < 1e-9) {
    return {
      label: "Repouso angular",
      description: "A velocidade angular é nula. O corpo permanece parado na circunferência.",
      className: "text-slate-700",
    };
  }

  if (omega > 0) {
    return {
      label: "Movimento anti-horário",
      description: "O ângulo aumenta com o tempo. A rotação ocorre no sentido anti-horário.",
      className: "text-emerald-700",
    };
  }

  return {
    label: "Movimento horário",
    description: "O ângulo diminui com o tempo. A rotação ocorre no sentido horário.",
    className: "text-red-700",
  };
}

function drawCircularCanvas({
  ctx,
  width,
  height,
  radius,
  omega,
  initialAngleRad,
  angle,
  normalizedAngle,
  time,
  timeWindow,
  speed,
  tangentialVelocity,
  centripetalAcceleration,
  period,
  frequency,
  revolutions,
  showVectors,
  showGraphs,
  showTrail,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  radius: number;
  omega: number;
  initialAngleRad: number;
  angle: number;
  normalizedAngle: number;
  time: number;
  timeWindow: number;
  speed: number;
  tangentialVelocity: number;
  centripetalAcceleration: number;
  period: number;
  frequency: number;
  revolutions: number;
  showVectors: boolean;
  showGraphs: boolean;
  showTrail: boolean;
}) {
  drawCanvasBackground(ctx, width, height);

  drawCircularScene({
    ctx,
    width,
    radius,
    omega,
    initialAngleRad,
    angle,
    normalizedAngle,
    speed,
    centripetalAcceleration,
    showVectors,
    showTrail,
  });

  drawHUD({
    ctx,
    radius,
    omega,
    normalizedAngle,
    time,
    speed,
    centripetalAcceleration,
    period,
    frequency,
    revolutions,
  });

  if (showGraphs) {
    drawThetaGraph({
      ctx,
      x: 30,
      y: 305,
      width: 290,
      height: 215,
      initialAngleRad,
      omega,
      time,
      timeWindow,
    });

    drawSpeedGraph({
      ctx,
      x: 345,
      y: 305,
      width: 290,
      height: 215,
      speed,
      time,
      timeWindow,
    });

    drawAccelerationGraph({
      ctx,
      x: 660,
      y: 305,
      width: 290,
      height: 215,
      centripetalAcceleration,
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

function drawCircularScene({
  ctx,
  width,
  radius,
  omega,
  initialAngleRad,
  angle,
  normalizedAngle,
  speed,
  centripetalAcceleration,
  showVectors,
  showTrail,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  radius: number;
  omega: number;
  initialAngleRad: number;
  angle: number;
  normalizedAngle: number;
  speed: number;
  centripetalAcceleration: number;
  showVectors: boolean;
  showTrail: boolean;
}) {
  const centerX = width * 0.62;
  const centerY = 155;
  const visualRadius = 92;

  const objectX = centerX + visualRadius * Math.cos(normalizedAngle);
  const objectY = centerY - visualRadius * Math.sin(normalizedAngle);

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, visualRadius, 0, TWO_PI);
  ctx.stroke();

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - visualRadius - 25, centerY);
  ctx.lineTo(centerX + visualRadius + 25, centerY);
  ctx.moveTo(centerX, centerY - visualRadius - 25);
  ctx.lineTo(centerX, centerY + visualRadius + 25);
  ctx.stroke();

  if (showTrail && Math.abs(omega) > 1e-9) {
    const direction = omega >= 0 ? -1 : 1;
    const trailAngle = Math.min(Math.abs(angle - initialAngleRad), TWO_PI * 1.5);

    ctx.strokeStyle = "rgba(37, 99, 235, 0.35)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      visualRadius,
      -initialAngleRad,
      -initialAngleRad + direction * trailAngle,
      omega < 0
    );
    ctx.stroke();
  }

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(objectX, objectY);
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(centerX, centerY, 5, 0, TWO_PI);
  ctx.fill();

  drawCircularBody({
    ctx,
    x: objectX,
    y: objectY,
    color: "#2563eb",
  });

  ctx.fillStyle = "#2563eb";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`R = ${formatNumber(radius, 1)} m`, centerX + 12, centerY - 8);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`θ = ${formatNumber((normalizedAngle * 180) / Math.PI, 1)}°`, objectX + 15, objectY - 12);

  if (showVectors) {
    const tangent = getTangentUnit(normalizedAngle, omega);
    const radial = {
      x: centerX - objectX,
      y: centerY - objectY,
    };

    const radialLength = Math.hypot(radial.x, radial.y) || 1;

    const velocityLength = Math.max(28, Math.min(88, speed * 12));
    const accelerationLength = Math.max(28, Math.min(82, centripetalAcceleration * 3));

    drawArrow(
      ctx,
      objectX,
      objectY,
      objectX + tangent.x * velocityLength,
      objectY + tangent.y * velocityLength,
      "#16a34a",
      `v = ${formatNumber(speed, 1)} m/s`
    );

    drawArrow(
      ctx,
      objectX,
      objectY,
      objectX + (radial.x / radialLength) * accelerationLength,
      objectY + (radial.y / radialLength) * accelerationLength,
      "#dc2626",
      `aᶜ = ${formatNumber(centripetalAcceleration, 1)} m/s²`
    );
  }

  drawAngleArc({
    ctx,
    centerX,
    centerY,
    angle: normalizedAngle,
  });

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(
    omega >= 0 ? "sentido anti-horário" : "sentido horário",
    width - 240,
    75
  );
}

function getTangentUnit(angle: number, omega: number) {
  const sign = omega >= 0 ? 1 : -1;

  return {
    x: -Math.sin(angle) * sign,
    y: -Math.cos(angle) * sign,
  };
}

function drawCircularBody({
  ctx,
  x,
  y,
  color,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
}) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, TWO_PI);
  ctx.fill();

  ctx.strokeStyle = "#dbeafe";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#93c5fd";
  ctx.beginPath();
  ctx.arc(x - 6, y - 6, 5, 0, TWO_PI);
  ctx.fill();
}

function drawAngleArc({
  ctx,
  centerX,
  centerY,
  angle,
}: {
  ctx: CanvasRenderingContext2D;
  centerX: number;
  centerY: number;
  angle: number;
}) {
  const arcRadius = 38;

  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, arcRadius, 0, -angle, true);
  ctx.stroke();

  ctx.fillStyle = "#f97316";
  ctx.font = "bold 12px Arial";
  ctx.fillText("θ", centerX + arcRadius + 8, centerY - 6);
}

function drawHUD({
  ctx,
  radius,
  omega,
  normalizedAngle,
  time,
  speed,
  centripetalAcceleration,
  period,
  frequency,
  revolutions,
}: {
  ctx: CanvasRenderingContext2D;
  radius: number;
  omega: number;
  normalizedAngle: number;
  time: number;
  speed: number;
  centripetalAcceleration: number;
  period: number;
  frequency: number;
  revolutions: number;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, 24, 18, 390, 172, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("MOVIMENTO CIRCULAR UNIFORME", 42, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`t = ${formatNumber(time, 2)} s`, 42, 68);
  ctx.fillText(`R = ${formatNumber(radius, 2)} m`, 42, 90);
  ctx.fillText(`ω = ${formatNumber(omega, 2)} rad/s`, 42, 112);
  ctx.fillText(`θ = ${formatNumber(normalizedAngle, 3)} rad`, 42, 134);
  ctx.fillText(`v = ${formatNumber(speed, 2)} m/s`, 220, 90);
  ctx.fillText(`aᶜ = ${formatNumber(centripetalAcceleration, 2)} m/s²`, 220, 112);
  ctx.fillText(
    `T = ${Number.isFinite(period) ? formatNumber(period, 2) : "∞"} s`,
    220,
    134
  );
  ctx.fillText(`f = ${formatNumber(frequency, 3)} Hz`, 220, 156);

  ctx.fillStyle = "#2563eb";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`voltas = ${formatNumber(revolutions, 3)}`, 42, 156);
}

function drawThetaGraph({
  ctx,
  x,
  y,
  width,
  height,
  initialAngleRad,
  omega,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  initialAngleRad: number;
  omega: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "θ × t",
    xLabel: "t",
    yLabel: "θ",
  });

  const theta0 = initialAngleRad;
  const thetaFinal = initialAngleRad + omega * timeWindow;

  const minTheta = Math.min(theta0, thetaFinal, 0);
  const maxTheta = Math.max(theta0, thetaFinal, 0);
  const padding = Math.max((maxTheta - minTheta) * 0.2, 1);

  const range = {
    min: minTheta - padding,
    max: maxTheta + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / timeWindow) * (plot.right - plot.left);
  };

  const ty = (theta: number) => {
    return (
      plot.bottom -
      ((theta - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), ty(theta0));
  ctx.lineTo(tx(timeWindow), ty(thetaFinal));
  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawSpeedGraph({
  ctx,
  x,
  y,
  width,
  height,
  speed,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "|v| × t",
    xLabel: "t",
    yLabel: "|v|",
  });

  const range = {
    min: 0,
    max: Math.max(speed * 1.4, 1),
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / timeWindow) * (plot.right - plot.left);
  };

  const vy = (value: number) => {
    return (
      plot.bottom -
      ((value - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), vy(speed));
  ctx.lineTo(tx(timeWindow), vy(speed));
  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawAccelerationGraph({
  ctx,
  x,
  y,
  width,
  height,
  centripetalAcceleration,
  time,
  timeWindow,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  centripetalAcceleration: number;
  time: number;
  timeWindow: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "aᶜ × t",
    xLabel: "t",
    yLabel: "aᶜ",
  });

  const range = {
    min: 0,
    max: Math.max(centripetalAcceleration * 1.4, 1),
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

  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), ay(centripetalAcceleration));
  ctx.lineTo(tx(timeWindow), ay(centripetalAcceleration));
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
  radius,
  omega,
  initialAngleRad,
  timeWindow,
}: {
  radius: number;
  omega: number;
  initialAngleRad: number;
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
      const theta = initialAngleRad + omega * t;
      const normalized = ((theta % TWO_PI) + TWO_PI) % TWO_PI;
      const speed = Math.abs(omega) * radius;
      const acceleration = omega ** 2 * radius;

      return {
        t,
        theta: normalized,
        speed,
        acceleration,
        revolutions: (omega * t) / TWO_PI,
      };
    });
  }, [radius, omega, initialAngleRad, timeWindow]);

  return (
    <div className="overflow-x-auto p-5">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left font-bold text-slate-700">
              Tempo
            </th>

            <th className="px-4 py-3 text-left font-bold text-blue-700">
              Ângulo
            </th>

            <th className="px-4 py-3 text-left font-bold text-emerald-700">
              Velocidade
            </th>

            <th className="px-4 py-3 text-left font-bold text-red-700">
              Aceleração centrípeta
            </th>

            <th className="px-4 py-3 text-left font-bold text-slate-700">
              Voltas
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
                {formatNumber(row.theta, 3)} rad
              </td>

              <td className="px-4 py-3 font-semibold text-emerald-700">
                {formatUnit(row.speed, "m/s")}
              </td>

              <td className="px-4 py-3 font-semibold text-red-700">
                {formatUnit(row.acceleration, "m/s²")}
              </td>

              <td className="px-4 py-3 text-slate-700">
                {formatNumber(row.revolutions, 3)}
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

export default CircularMotionSimulator;
