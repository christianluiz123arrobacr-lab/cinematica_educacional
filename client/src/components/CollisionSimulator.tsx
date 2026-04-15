import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface CollisionSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const CollisionSimulator: React.FC<CollisionSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(1);
  const [v1Initial, setV1Initial] = useState(4);
  const [v2Initial, setV2Initial] = useState(0);

  const v1After = useMemo(() => {
    return ((m1 - m2) * v1Initial + 2 * m2 * v2Initial) / (m1 + m2);
  }, [m1, m2, v1Initial, v2Initial]);

  const v2After = useMemo(() => {
    return ((m2 - m1) * v2Initial + 2 * m1 * v1Initial) / (m1 + m2);
  }, [m1, m2, v1Initial, v2Initial]);

  const pInitial = useMemo(() => {
    return m1 * v1Initial + m2 * v2Initial;
  }, [m1, m2, v1Initial, v2Initial]);

  const pFinal = useMemo(() => {
    return m1 * v1After + m2 * v2After;
  }, [m1, m2, v1After, v2After]);

  const ecInitial = useMemo(() => {
    return 0.5 * m1 * v1Initial ** 2 + 0.5 * m2 * v2Initial ** 2;
  }, [m1, v1Initial, m2, v2Initial]);

  const ecFinal = useMemo(() => {
    return 0.5 * m1 * v1After ** 2 + 0.5 * m2 * v2After ** 2;
  }, [m1, v1After, m2, v2After]);

  useEffect(() => {
    timeRef.current = 0;
  }, [resetTrigger, m1, m2, v1Initial, v2Initial]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const drawScene = () => {
      const r1 = clamp(18 + m1 * 6, 20, 38);
      const r2 = clamp(18 + m2 * 6, 20, 38);

      const leftPadding = 90;
      const rightPadding = width - 90;
      const groundY = height / 2 + 10;

      const startX1 = leftPadding + r1;
      const startX2 = rightPadding - r2;

      const pixelsPerSpeed = 2.8;
      const relativeSpeed = (v1Initial + v2Initial) * pixelsPerSpeed;

      const gapAtStart = (startX2 - r2) - (startX1 + r1);

      const collisionTime =
        relativeSpeed > 0 ? gapAtStart / relativeSpeed : Number.POSITIVE_INFINITY;

      const x1Collision = startX1 + v1Initial * pixelsPerSpeed * collisionTime;
      const x2Collision = startX2 - v2Initial * pixelsPerSpeed * collisionTime;

      const currentTime = timeRef.current;
      const collided = currentTime >= collisionTime && Number.isFinite(collisionTime);

      let x1 = startX1;
      let x2 = startX2;
      let v1Current = v1Initial;
      let v2Current = -v2Initial;

      if (!Number.isFinite(collisionTime)) {
        x1 = startX1;
        x2 = startX2;
      } else if (!collided) {
        x1 = startX1 + v1Initial * pixelsPerSpeed * currentTime;
        x2 = startX2 - v2Initial * pixelsPerSpeed * currentTime;
        v1Current = v1Initial;
        v2Current = -v2Initial;
      } else {
        const afterTime = currentTime - collisionTime;
        x1 = x1Collision + v1After * pixelsPerSpeed * afterTime;
        x2 = x2Collision + v2After * pixelsPerSpeed * afterTime;
        v1Current = v1After;
        v2Current = v2After;
      }

      x1 = clamp(x1, leftPadding + r1, rightPadding - r1);
      x2 = clamp(x2, leftPadding + r2, rightPadding - r2);

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      for (let i = 0; i <= width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, groundY + Math.max(r1, r2) + 20);
      ctx.lineTo(width - 40, groundY + Math.max(r1, r2) + 20);
      ctx.stroke();

      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 13px Arial";
      ctx.fillText(collided ? "APÓS COLISÃO" : "ANTES DA COLISÃO", 14, 26);

      ctx.font = "12px Arial";
      ctx.fillText(`p_inicial = ${formatUnit(pInitial, "kg·m/s")}`, 14, 50);
      ctx.fillText(`p_final = ${formatUnit(pFinal, "kg·m/s")}`, 14, 68);
      ctx.fillText(`Δp = ${formatUnit(Math.abs(pFinal - pInitial), "kg·m/s")}`, 14, 86);
      ctx.fillText(`EC_inicial = ${formatUnit(ecInitial, "J")}`, 14, 104);
      ctx.fillText(`EC_final = ${formatUnit(ecFinal, "J")}`, 14, 122);

      drawBall(ctx, x1, groundY, r1, "#3b82f6", "#1d4ed8");
      drawBall(ctx, x2, groundY, r2, "#ef4444", "#dc2626");

      drawVelocityArrow(
        ctx,
        x1,
        groundY - r1 - 28,
        v1Current,
        "#3b82f6"
      );
      drawVelocityArrow(
        ctx,
        x2,
        groundY - r2 - 28,
        v2Current,
        "#ef4444"
      );

      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`v₁ = ${formatUnit(v1Current, "m/s")}`, x1, groundY - r1 - 40);
      ctx.fillText(`m₁ = ${formatUnit(m1, "kg")}`, x1, groundY + r1 + 24);

      ctx.fillText(`v₂ = ${formatUnit(v2Current, "m/s")}`, x2, groundY - r2 - 40);
      ctx.fillText(`m₂ = ${formatUnit(m2, "kg")}`, x2, groundY + r2 + 24);

      ctx.textAlign = "start";

      if (isRunning) {
        const resetAfter = Number.isFinite(collisionTime)
          ? collisionTime + 110
          : 180;

        if (currentTime >= resetAfter) {
          timeRef.current = 0;
        } else {
          timeRef.current += 1;
        }
      }

      animationIdRef.current = requestAnimationFrame(drawScene);
    };

    drawScene();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, m1, m2, v1Initial, v2Initial, v1After, v2After, pInitial, pFinal, ecInitial, ecFinal]);

  return (
    <div className="w-full space-y-6">
      <Card className="overflow-hidden border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 bg-white px-5 py-4">
          <h3 className="text-lg font-bold text-slate-900">
            Simulador de Colisão Unidimensional
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Conservação da quantidade de movimento e colisão elástica entre dois corpos.
          </p>
        </div>

        <div className="bg-slate-50 p-4 md:p-6">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="overflow-x-auto">
              <canvas
                ref={canvasRef}
                width={900}
                height={360}
                className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h4 className="text-base font-bold text-slate-900">Controles da Simulação</h4>
          <p className="mt-1 text-sm text-slate-600">
            Ajuste massas e velocidades iniciais para observar como a colisão muda.
          </p>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-800">
                Objeto 1 — Azul
              </h5>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Massa <span className="text-slate-500">(m₁)</span>
                    </label>
                    <span className="text-sm font-bold text-blue-700">
                      {formatUnit(m1, "kg")}
                    </span>
                  </div>
                  <Slider
                    value={[m1]}
                    onValueChange={(value) => setM1(value[0])}
                    min={0.5}
                    max={5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Velocidade inicial <span className="text-slate-500">(v₁)</span>
                    </label>
                    <span className="text-sm font-bold text-blue-700">
                      {formatUnit(v1Initial, "m/s")}
                    </span>
                  </div>
                  <Slider
                    value={[v1Initial]}
                    onValueChange={(value) => setV1Initial(value[0])}
                    min={0}
                    max={8}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wide text-rose-800">
                Objeto 2 — Vermelho
              </h5>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Massa <span className="text-slate-500">(m₂)</span>
                    </label>
                    <span className="text-sm font-bold text-rose-700">
                      {formatUnit(m2, "kg")}
                    </span>
                  </div>
                  <Slider
                    value={[m2]}
                    onValueChange={(value) => setM2(value[0])}
                    min={0.5}
                    max={5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Velocidade inicial <span className="text-slate-500">(v₂)</span>
                    </label>
                    <span className="text-sm font-bold text-rose-700">
                      {formatUnit(v2Initial, "m/s")}
                    </span>
                  </div>
                  <Slider
                    value={[v2Initial]}
                    onValueChange={(value) => setV2Initial(value[0])}
                    min={0}
                    max={8}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h4 className="text-base font-bold text-slate-900">Resultados da Colisão</h4>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <MetricCard
              label={
                <>
                  Velocidade 1 após{" "}
                  <MathFormula inline formula={String.raw`v'_1`} />
                </>
              }
              value={formatUnit(v1After, "m/s")}
              valueClassName="text-blue-700"
            />

            <MetricCard
              label={
                <>
                  Velocidade 2 após{" "}
                  <MathFormula inline formula={String.raw`v'_2`} />
                </>
              }
              value={formatUnit(v2After, "m/s")}
              valueClassName="text-rose-700"
            />

            <MetricCard
              label={
                <>
                  Momento inicial{" "}
                  <MathFormula inline formula={String.raw`p_i`} />
                </>
              }
              value={formatUnit(pInitial, "kg·m/s")}
            />

            <MetricCard
              label={
                <>
                  Momento final{" "}
                  <MathFormula inline formula={String.raw`p_f`} />
                </>
              }
              value={formatUnit(pFinal, "kg·m/s")}
            />

            <MetricCard
              label={
                <>
                  Energia cinética inicial{" "}
                  <MathFormula inline formula={String.raw`E_{ci}`} />
                </>
              }
              value={formatUnit(ecInitial, "J")}
            />

            <MetricCard
              label={
                <>
                  Energia cinética final{" "}
                  <MathFormula inline formula={String.raw`E_{cf}`} />
                </>
              }
              value={formatUnit(ecFinal, "J")}
            />
          </div>
        </div>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h4 className="text-base font-bold text-slate-900">Cálculos Detalhados</h4>
        </div>

        <div className="space-y-5 p-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Conservação da Quantidade de Movimento
            </p>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
              <MathFormula formula={String.raw`m_1 v_1 + m_2 v_2 = m_1 v'_1 + m_2 v'_2`} />
              <MathFormula
                formula={String.raw`${formatNumber(m1)} \cdot ${formatNumber(
                  v1Initial
                )} + ${formatNumber(m2)} \cdot ${formatNumber(
                  v2Initial
                )} = ${formatNumber(pInitial)} \,\text{kg·m/s}`}
              />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Velocidades Finais na Colisão Elástica
            </p>

            <div className="space-y-4 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
              <MathFormula
                formula={String.raw`
                v'_1 = \frac{(m_1 - m_2)v_1 + 2m_2v_2}{m_1 + m_2}
                = \frac{(${formatNumber(m1)} - ${formatNumber(
                  m2
                )}) \cdot ${formatNumber(v1Initial)} + 2 \cdot ${formatNumber(
                  m2
                )} \cdot ${formatNumber(v2Initial)}}{${formatNumber(
                  m1
                )} + ${formatNumber(m2)}}
                = ${formatNumber(v1After)} \,\text{m/s}
                `}
              />

              <MathFormula
                formula={String.raw`
                v'_2 = \frac{(m_2 - m_1)v_2 + 2m_1v_1}{m_1 + m_2}
                = \frac{(${formatNumber(m2)} - ${formatNumber(
                  m1
                )}) \cdot ${formatNumber(v2Initial)} + 2 \cdot ${formatNumber(
                  m1
                )} \cdot ${formatNumber(v1Initial)}}{${formatNumber(
                  m1
                )} + ${formatNumber(m2)}}
                = ${formatNumber(v2After)} \,\text{m/s}
                `}
              />
            </div>
          </div>
        </div>
      </Card>

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
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-lg font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}

function drawBall(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  fill: string,
  stroke: string
) {
  ctx.beginPath();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 3;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function drawVelocityArrow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  velocity: number,
  color: string
) {
  const arrowLength = Math.max(18, Math.abs(velocity) * 18);
  const direction = velocity >= 0 ? 1 : -1;
  const endX = x + arrowLength * direction;
  const headSize = 10;

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(endX, y);
  ctx.lineTo(endX - direction * headSize, y - headSize / 1.5);
  ctx.lineTo(endX - direction * headSize, y + headSize / 1.5);
  ctx.closePath();
  ctx.fill();
}
