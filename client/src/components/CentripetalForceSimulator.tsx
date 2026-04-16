import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface CentripetalForceSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const CentripetalForceSimulator: React.FC<
  CentripetalForceSimulatorProps
> = ({ isRunning, resetTrigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const angleRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [radiusPx, setRadiusPx] = useState(110);
  const [angularVelocity, setAngularVelocity] = useState(2);
  const [mass, setMass] = useState(1.5);

  const radiusMeters = useMemo(() => radiusPx / 50, [radiusPx]);
  const linearVelocity = useMemo(
    () => angularVelocity * radiusMeters,
    [angularVelocity, radiusMeters]
  );
  const centripetalAccel = useMemo(() => {
    if (radiusMeters <= 0) return 0;
    return (linearVelocity * linearVelocity) / radiusMeters;
  }, [linearVelocity, radiusMeters]);

  const centripetalForce = useMemo(
    () => mass * centripetalAccel,
    [mass, centripetalAccel]
  );

  const period = useMemo(() => {
    if (angularVelocity <= 0) return 0;
    return (2 * Math.PI) / angularVelocity;
  }, [angularVelocity]);

  const frequency = useMemo(() => {
    if (period <= 0) return 0;
    return 1 / period;
  }, [period]);

  useEffect(() => {
    angleRef.current = 0;
    lastTimeRef.current = performance.now();
  }, [resetTrigger, radiusPx, angularVelocity, mass]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.04);
      lastTimeRef.current = time;

      if (isRunning) {
        angleRef.current += angularVelocity * dt;
      }

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2 + 10;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // grade
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // trajetória circular
      ctx.beginPath();
      ctx.arc(centerX, centerY, radiusPx, 0, Math.PI * 2);
      ctx.strokeStyle = "#cbd5e1";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);

      // eixos discretos
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX - radiusPx - 30, centerY);
      ctx.lineTo(centerX + radiusPx + 30, centerY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radiusPx - 30);
      ctx.lineTo(centerX, centerY + radiusPx + 30);
      ctx.stroke();

      // centro
      ctx.beginPath();
      ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#0f172a";
      ctx.fill();

      const objX = centerX + radiusPx * Math.cos(angleRef.current);
      const objY = centerY + radiusPx * Math.sin(angleRef.current);

      const tangentX = -Math.sin(angleRef.current);
      const tangentY = Math.cos(angleRef.current);

      const radialInX = -Math.cos(angleRef.current);
      const radialInY = -Math.sin(angleRef.current);

      const velocityArrowLength = clamp(28 + linearVelocity * 10, 35, 110);
      const accelArrowLength = clamp(28 + centripetalAccel * 4, 35, 110);
      const forceArrowLength = clamp(28 + centripetalForce * 4, 35, 120);

      // raio
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(objX, objY);
      ctx.stroke();

      ctx.fillStyle = "#475569";
      ctx.font = "bold 12px Arial";
      ctx.fillText(
        `R = ${formatNumber(radiusMeters)} m`,
        (centerX + objX) / 2 + 8,
        (centerY + objY) / 2 - 8
      );

      // vetores
      drawLabeledArrow(
        ctx,
        objX,
        objY,
        objX + tangentX * velocityArrowLength,
        objY + tangentY * velocityArrowLength,
        "#16a34a",
        `v = ${formatNumber(linearVelocity)} m/s`
      );

      drawLabeledArrow(
        ctx,
        objX,
        objY,
        objX + radialInX * accelArrowLength,
        objY + radialInY * accelArrowLength,
        "#f59e0b",
        `a_cp = ${formatNumber(centripetalAccel)} m/s²`
      );

      drawLabeledArrow(
        ctx,
        objX,
        objY,
        objX + radialInX * forceArrowLength,
        objY + radialInY * forceArrowLength,
        "#ef4444",
        `F_cp = ${formatNumber(centripetalForce)} N`
      );

      // corpo
      ctx.beginPath();
      ctx.arc(objX, objY, 12 + mass * 2, 0, Math.PI * 2);
      ctx.fillStyle = "#3b82f6";
      ctx.fill();
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 3;
      ctx.stroke();

      // HUD
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText("DINÂMICA DO MOVIMENTO CIRCULAR", 20, 28);

      ctx.font = "12px Arial";
      ctx.fillText(`m = ${formatUnit(mass, "kg")}`, 20, 58);
      ctx.fillText(`R = ${formatUnit(radiusMeters, "m")}`, 20, 78);
      ctx.fillText(`ω = ${formatUnit(angularVelocity, "rad/s")}`, 20, 98);
      ctx.fillText(`v = ${formatUnit(linearVelocity, "m/s")}`, 20, 118);
      ctx.fillText(`a_cp = ${formatUnit(centripetalAccel, "m/s²")}`, 20, 138);
      ctx.fillText(`F_cp = ${formatUnit(centripetalForce, "N")}`, 20, 158);

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [
    isRunning,
    radiusPx,
    angularVelocity,
    mass,
    radiusMeters,
    linearVelocity,
    centripetalAccel,
    centripetalForce,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Dinâmica Circular
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste massa, raio e velocidade angular para analisar a força
                centrípeta.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Raio <span className="text-slate-500">(R)</span>
                  </label>
                  <span className="text-sm font-bold text-blue-700">
                    {formatUnit(radiusMeters, "m")}
                  </span>
                </div>
                <Slider
                  value={[radiusPx]}
                  onValueChange={(value) => setRadiusPx(value[0])}
                  min={50}
                  max={160}
                  step={10}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Velocidade angular{" "}
                    <span className="text-slate-500">(ω)</span>
                  </label>
                  <span className="text-sm font-bold text-green-700">
                    {formatUnit(angularVelocity, "rad/s")}
                  </span>
                </div>
                <Slider
                  value={[angularVelocity]}
                  onValueChange={(value) => setAngularVelocity(value[0])}
                  min={0.5}
                  max={5}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Massa <span className="text-slate-500">(m)</span>
                  </label>
                  <span className="text-sm font-bold text-purple-700">
                    {formatUnit(mass, "kg")}
                  </span>
                </div>
                <Slider
                  value={[mass]}
                  onValueChange={(value) => setMass(value[0])}
                  min={0.5}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
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
                label={
                  <>
                    Velocidade linear{" "}
                    <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(linearVelocity, "m/s")}
                valueClassName="text-green-700"
              />

              <MetricCard
                label={
                  <>
                    Aceleração centrípeta{" "}
                    <MathFormula inline formula={String.raw`a_{cp}`} />
                  </>
                }
                value={formatUnit(centripetalAccel, "m/s²")}
                valueClassName="text-amber-600"
              />

              <MetricCard
                label={
                  <>
                    Força centrípeta{" "}
                    <MathFormula inline formula={String.raw`F_{cp}`} />
                  </>
                }
                value={formatUnit(centripetalForce, "N")}
                valueClassName="text-red-700"
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
                    Frequência <MathFormula inline formula={String.raw`f`} />
                  </>
                }
                value={formatUnit(frequency, "Hz")}
              />
            </div>
          </Card>
        </div>

        {/* COLUNA DIREITA */}
        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">Simulação</h4>
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
                title="Geometria"
                values={[
                  ["Raio", formatUnit(radiusMeters, "m")],
                  ["Massa", formatUnit(mass, "kg")],
                ]}
              />
              <CalcMiniCard
                title="Rotação"
                values={[
                  ["ω", formatUnit(angularVelocity, "rad/s")],
                  ["T", formatUnit(period, "s")],
                ]}
              />
              <CalcMiniCard
                title="Cinemática"
                values={[
                  ["v", formatUnit(linearVelocity, "m/s")],
                  ["a_cp", formatUnit(centripetalAccel, "m/s²")],
                ]}
              />
              <CalcMiniCard
                title="Dinâmica"
                values={[
                  ["F_cp", formatUnit(centripetalForce, "N")],
                  ["f", formatUnit(frequency, "Hz")],
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
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Velocidade linear
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`v = \omega R = ${formatNumber(
                      angularVelocity
                    )} \cdot ${formatNumber(radiusMeters)} = ${formatNumber(
                      linearVelocity
                    )} \,\text{m/s}`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Aceleração centrípeta
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`a_{cp} = \frac{v^2}{R} = \frac{(${formatNumber(
                      linearVelocity
                    )})^2}{${formatNumber(radiusMeters)}} = ${formatNumber(
                      centripetalAccel
                    )} \,\text{m/s^2}`}
                  />
                  <MathFormula
                    formula={String.raw`a_{cp} = \omega^2 R = ${formatNumber(
                      angularVelocity
                    )}^2 \cdot ${formatNumber(radiusMeters)} = ${formatNumber(
                      centripetalAccel
                    )} \,\text{m/s^2}`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Força centrípeta
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`F_{cp} = m a_{cp} = ${formatNumber(
                      mass
                    )} \cdot ${formatNumber(centripetalAccel)} = ${formatNumber(
                      centripetalForce
                    )} \,\text{N}`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Período e frequência
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`T = \frac{2\pi}{\omega} = \frac{2\pi}{${formatNumber(
                      angularVelocity
                    )}} = ${formatNumber(period)} \,\text{s}`}
                  />
                  <MathFormula
                    formula={String.raw`f = \frac{1}{T} = \frac{1}{${formatNumber(
                      period
                    )}} = ${formatNumber(frequency)} \,\text{Hz}`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITADynamicsTheory.title}
        introduction={ITADynamicsTheory.introduction}
        sections={ITADynamicsTheory.sections}
      />
    </div>
  );
};

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

function drawLabeledArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string
) {
  const headlen = 11;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle - Math.PI / 6),
    toY - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / 6),
    toY - headlen * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  const labelX = toX + 10 * Math.cos(angle);
  const labelY = toY + 10 * Math.sin(angle);

  ctx.fillStyle = color;
  ctx.font = "bold 11px Arial";
  ctx.fillText(label, labelX, labelY);
}
