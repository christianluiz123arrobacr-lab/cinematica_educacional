import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface InclinedPlaneSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type FrictionMode = "withoutFriction" | "withFriction";
type MotionMode = "down" | "up";

const G = 9.8;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const InclinedPlaneSimulator: React.FC<InclinedPlaneSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [frictionMode, setFrictionMode] =
    useState<FrictionMode>("withFriction");
  const [motionMode, setMotionMode] = useState<MotionMode>("down");

  const [mass, setMass] = useState(2);
  const [angleDeg, setAngleDeg] = useState(30);
  const [height, setHeight] = useState(4);
  const [mu, setMu] = useState(0.2);
  const [pushForce, setPushForce] = useState(20);

  const hasFriction = frictionMode === "withFriction";
  const isPushingUp = motionMode === "up";

  const angleRad = useMemo(() => (angleDeg * Math.PI) / 180, [angleDeg]);

  const rampLength = useMemo(() => {
    const sinValue = Math.sin(angleRad);
    if (sinValue <= 0) return 0;
    return height / sinValue;
  }, [height, angleRad]);

  const weight = useMemo(() => mass * G, [mass]);
  const normalForce = useMemo(() => mass * G * Math.cos(angleRad), [mass, angleRad]);
  const parallelWeight = useMemo(() => mass * G * Math.sin(angleRad), [mass, angleRad]);

  const frictionForce = useMemo(() => {
    if (!hasFriction) return 0;
    return mu * normalForce;
  }, [hasFriction, mu, normalForce]);

  const netForce = useMemo(() => {
    if (!isPushingUp) {
      return hasFriction ? parallelWeight - frictionForce : parallelWeight;
    }

    return pushForce - parallelWeight - (hasFriction ? frictionForce : 0);
  }, [isPushingUp, hasFriction, parallelWeight, frictionForce, pushForce]);

  const acceleration = useMemo(() => {
    const value = netForce / mass;
    return value > 0 ? value : 0;
  }, [netForce, mass]);

  const canMove = rampLength > 0 && acceleration > 0;

  const travelTime = useMemo(() => {
    if (!canMove) return 0;
    return Math.sqrt((2 * rampLength) / acceleration);
  }, [canMove, rampLength, acceleration]);

  const finalVelocity = useMemo(() => {
    if (!canMove) return 0;
    return Math.sqrt(2 * acceleration * rampLength);
  }, [canMove, acceleration, rampLength]);

  const potentialEnergy = useMemo(() => mass * G * height, [mass, height]);
  const kineticEnergy = useMemo(
    () => 0.5 * mass * finalVelocity * finalVelocity,
    [mass, finalVelocity]
  );

  useEffect(() => {
    timeRef.current = 0;
  }, [
    resetTrigger,
    mass,
    angleDeg,
    height,
    mu,
    frictionMode,
    motionMode,
    pushForce,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const heightCanvas = canvas.height;

    const animate = () => {
      ctx.clearRect(0, 0, width, heightCanvas);
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, heightCanvas);

      const groundY = heightCanvas - 72;

      const bottomX = 760;
      const bottomY = groundY;
      const rampVisualLength = 430;

      const topX = bottomX - rampVisualLength * Math.cos(angleRad);
      const topY = bottomY - rampVisualLength * Math.sin(angleRad);

      // chão
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(60, groundY);
      ctx.lineTo(width - 40, groundY);
      ctx.stroke();

      // rampa
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.stroke();

      // preenchimento sutil da rampa
      ctx.fillStyle = "#e2e8f0";
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.lineTo(bottomX, groundY);
      ctx.closePath();
      ctx.fill();

      // linha altura
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX, groundY);
      ctx.stroke();
      ctx.setLineDash([]);

      // arco ângulo
      ctx.strokeStyle = "#64748b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(bottomX, bottomY, 34, Math.PI, Math.PI + angleRad, false);
      ctx.stroke();

      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 13px Arial";
      ctx.fillText(`${formatNumber(angleDeg)}°`, bottomX - 48, bottomY - 12);

      const totalVisualLength = Math.hypot(bottomX - topX, bottomY - topY);
      const dx = (bottomX - topX) / totalVisualLength;
      const dy = (bottomY - topY) / totalVisualLength;

      let progress = isPushingUp ? 1 : 0;
      let currentVelocity = 0;

      if (canMove) {
        const currentTime = timeRef.current;
        const traveled = Math.min(
          0.5 * acceleration * currentTime * currentTime,
          rampLength
        );
        const normalized = traveled / rampLength;

        if (!isPushingUp) {
          progress = normalized;
          currentVelocity = Math.min(acceleration * currentTime, finalVelocity);
        } else {
          progress = 1 - normalized;
          currentVelocity = Math.min(acceleration * currentTime, finalVelocity);
        }

        if (isRunning) {
          if (currentTime >= travelTime + 0.8) {
            timeRef.current = 0;
          } else {
            timeRef.current += 1 / 60;
          }
        }
      }

      progress = clamp(progress, 0, 1);

      const blockCenterX = topX + (bottomX - topX) * progress;
      const blockCenterY = topY + (bottomY - topY) * progress;

      // bloco
      ctx.save();
      ctx.translate(blockCenterX, blockCenterY);
      ctx.rotate(Math.atan2(bottomY - topY, bottomX - topX));

      ctx.fillStyle = "#3b82f6";
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 3;
      roundRect(ctx, -26, -18, 52, 36, 6);
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      // título interno
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(
        `${isPushingUp ? "BLOCO EMPURRADO PARA CIMA" : "BLOCO DESCENDO"} ${
          hasFriction ? "COM ATRITO" : "SEM ATRITO"
        }`,
        22,
        28
      );

      // dados canto esquerdo do canvas
      ctx.font = "12px Arial";
      ctx.fillText(`m = ${formatUnit(mass, "kg")}`, 22, 58);
      ctx.fillText(`h = ${formatUnit(height, "m")}`, 22, 78);
      ctx.fillText(`θ = ${formatUnit(angleDeg, "°")}`, 22, 98);
      ctx.fillText(`a = ${formatUnit(acceleration, "m/s²")}`, 22, 118);
      ctx.fillText(`v = ${formatUnit(currentVelocity, "m/s")}`, 22, 138);

      if (hasFriction) {
        ctx.fillText(`μ = ${formatNumber(mu)}`, 22, 158);
      }

      if (isPushingUp) {
        ctx.fillText(
          `F = ${formatUnit(pushForce, "N")}`,
          22,
          hasFriction ? 178 : 158
        );
      }

      // vetor componente do peso paralela
      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX + dx * 88,
        blockCenterY + dy * 88,
        "#2563eb",
        `P∥ = ${formatNumber(parallelWeight)} N`
      );

      // normal
      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX - dy * 74,
        blockCenterY + dx * 74,
        "#16a34a",
        `N = ${formatNumber(normalForce)} N`
      );

      // atrito: sempre contra o movimento/tendência de movimento
      if (hasFriction) {
        const frictionTipX = isPushingUp
          ? blockCenterX + dx * 78
          : blockCenterX - dx * 78;
        const frictionTipY = isPushingUp
          ? blockCenterY + dy * 78
          : blockCenterY - dy * 78;

        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY,
          frictionTipX,
          frictionTipY,
          "#ef4444",
          `Fat = ${formatNumber(frictionForce)} N`
        );
      }

      // força aplicada para cima
      if (isPushingUp) {
        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY,
          blockCenterX - dx * 102,
          blockCenterY - dy * 102,
          "#7c3aed",
          `F = ${formatNumber(pushForce)} N`
        );
      }

      // aceleração
      if (acceleration > 0) {
        const accelTipX = isPushingUp
          ? blockCenterX - dx * 118
          : blockCenterX + dx * 118;
        const accelTipY = isPushingUp
          ? blockCenterY - dy * 118
          : blockCenterY + dy * 118;

        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY + 8,
          accelTipX,
          accelTipY + 8,
          "#f59e0b",
          `a = ${formatNumber(acceleration)} m/s²`
        );
      }

      if (!canMove) {
        ctx.fillStyle = "#b91c1c";
        ctx.font = "bold 13px Arial";
        ctx.fillText(
          "Não há força resultante suficiente para mover o bloco.",
          22,
          208
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    angleDeg,
    angleRad,
    hasFriction,
    isPushingUp,
    mass,
    height,
    mu,
    pushForce,
    normalForce,
    parallelWeight,
    frictionForce,
    acceleration,
    canMove,
    finalVelocity,
    travelTime,
    rampLength,
    isRunning,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Simulador de Plano Inclinado
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste os parâmetros e observe a dinâmica do bloco em tempo real.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Atrito
                </p>
                <select
                  value={frictionMode}
                  onChange={(e) =>
                    setFrictionMode(e.target.value as FrictionMode)
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="withoutFriction">Sem atrito</option>
                  <option value="withFriction">Com atrito</option>
                </select>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Situação
                </p>
                <select
                  value={motionMode}
                  onChange={(e) => setMotionMode(e.target.value as MotionMode)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="down">Descendo a rampa</option>
                  <option value="up">Empurrado para cima</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Massa do bloco <span className="text-slate-500">(m)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(mass, "kg")}
                  </span>
                </div>
                <Slider
                  value={[mass]}
                  onValueChange={(value) => setMass(value[0])}
                  min={0.5}
                  max={10}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Altura da rampa <span className="text-slate-500">(h)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(height, "m")}
                  </span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={(value) => setHeight(value[0])}
                  min={1}
                  max={8}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Ângulo da rampa <span className="text-slate-500">(θ)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(angleDeg, "°")}
                  </span>
                </div>
                <Slider
                  value={[angleDeg]}
                  onValueChange={(value) => setAngleDeg(value[0])}
                  min={10}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </div>

              {hasFriction && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Coeficiente de atrito{" "}
                      <span className="text-slate-500">(μ)</span>
                    </label>
                    <span className="text-sm font-bold text-blue-700">
                      {formatNumber(mu)}
                    </span>
                  </div>
                  <Slider
                    value={[mu]}
                    onValueChange={(value) => setMu(value[0])}
                    min={0}
                    max={1}
                    step={0.01}
                    className="w-full"
                  />
                </div>
              )}

              {isPushingUp && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Força aplicada <span className="text-slate-500">(F)</span>
                    </label>
                    <span className="text-sm font-bold text-violet-700">
                      {formatUnit(pushForce, "N")}
                    </span>
                  </div>
                  <Slider
                    value={[pushForce]}
                    onValueChange={(value) => setPushForce(value[0])}
                    min={1}
                    max={120}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              )}
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
                    Força peso <MathFormula inline formula={String.raw`P`} />
                  </>
                }
                value={formatUnit(weight, "N")}
              />

              <MetricCard
                label={
                  <>
                    Normal <MathFormula inline formula={String.raw`N`} />
                  </>
                }
                value={formatUnit(normalForce, "N")}
                valueClassName="text-green-700"
              />

              <MetricCard
                label={
                  <>
                    Componente paralela{" "}
                    <MathFormula inline formula={String.raw`P_{\parallel}`} />
                  </>
                }
                value={formatUnit(parallelWeight, "N")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Força de atrito{" "}
                    <MathFormula inline formula={String.raw`F_{at}`} />
                  </>
                }
                value={hasFriction ? formatUnit(frictionForce, "N") : "0,00 N"}
                valueClassName="text-red-700"
              />

              {isPushingUp && (
                <MetricCard
                  label={
                    <>
                      Força aplicada{" "}
                      <MathFormula inline formula={String.raw`F`} />
                    </>
                  }
                  value={formatUnit(pushForce, "N")}
                  valueClassName="text-violet-700"
                />
              )}

              <MetricCard
                label={
                  <>
                    Aceleração <MathFormula inline formula={String.raw`a`} />
                  </>
                }
                value={formatUnit(acceleration, "m/s²")}
                valueClassName="text-amber-600"
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
                title="Peso e normal"
                values={[
                  ["Peso", formatUnit(weight, "N")],
                  ["Normal", formatUnit(normalForce, "N")],
                ]}
              />

              <CalcMiniCard
                title="Forças paralelas"
                values={[
                  ["Componente paralela", formatUnit(parallelWeight, "N")],
                  ["Atrito", hasFriction ? formatUnit(frictionForce, "N") : "0,00 N"],
                ]}
              />

              <CalcMiniCard
                title="Movimento"
                values={[
                  ["Comprimento da rampa", formatUnit(rampLength, "m")],
                  ["Aceleração", formatUnit(acceleration, "m/s²")],
                ]}
              />

              <CalcMiniCard
                title="Velocidade e energia"
                values={[
                  ["Velocidade final", canMove ? formatUnit(finalVelocity, "m/s") : "—"],
                  ["Energia cinética", formatUnit(kineticEnergy, "J")],
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
                  Decomposição das forças
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`P = mg = ${formatNumber(mass)} \cdot ${formatNumber(
                      G
                    )} = ${formatNumber(weight)} \,\text{N}`}
                  />
                  <MathFormula
                    formula={String.raw`N = mg\cos\theta = ${formatNumber(
                      mass
                    )} \cdot ${formatNumber(G)} \cdot \cos(${formatNumber(
                      angleDeg
                    )}^\circ) = ${formatNumber(normalForce)} \,\text{N}`}
                  />
                  <MathFormula
                    formula={String.raw`P_{\parallel} = mg\sin\theta = ${formatNumber(
                      mass
                    )} \cdot ${formatNumber(G)} \cdot \sin(${formatNumber(
                      angleDeg
                    )}^\circ) = ${formatNumber(parallelWeight)} \,\text{N}`}
                  />
                </div>
              </div>

              {hasFriction && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-3 text-sm font-semibold text-slate-700">
                    Força de atrito
                  </p>

                  <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                    <MathFormula
                      formula={String.raw`F_{at} = \mu N = ${formatNumber(
                        mu
                      )} \cdot ${formatNumber(normalForce)} = ${formatNumber(
                        frictionForce
                      )} \,\text{N}`}
                    />
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Força resultante e aceleração
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  {!isPushingUp && !hasFriction && (
                    <>
                      <MathFormula
                        formula={String.raw`F_{res} = P_{\parallel} = ${formatNumber(
                          parallelWeight
                        )} \,\text{N}`}
                      />
                      <MathFormula
                        formula={String.raw`a = g\sin\theta = ${formatNumber(
                          G
                        )} \cdot \sin(${formatNumber(
                          angleDeg
                        )}^\circ) = ${formatNumber(acceleration)} \,\text{m/s^2}`}
                      />
                    </>
                  )}

                  {!isPushingUp && hasFriction && (
                    <>
                      <MathFormula
                        formula={String.raw`F_{res} = P_{\parallel} - F_{at} = ${formatNumber(
                          parallelWeight
                        )} - ${formatNumber(frictionForce)} = ${formatNumber(
                          Math.max(netForce, 0)
                        )} \,\text{N}`}
                      />
                      <MathFormula
                        formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(
                          Math.max(netForce, 0)
                        )}}{${formatNumber(mass)}} = ${formatNumber(
                          acceleration
                        )} \,\text{m/s^2}`}
                      />
                    </>
                  )}

                  {isPushingUp && !hasFriction && (
                    <>
                      <MathFormula
                        formula={String.raw`F_{res} = F - P_{\parallel} = ${formatNumber(
                          pushForce
                        )} - ${formatNumber(parallelWeight)} = ${formatNumber(
                          Math.max(netForce, 0)
                        )} \,\text{N}`}
                      />
                      <MathFormula
                        formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(
                          Math.max(netForce, 0)
                        )}}{${formatNumber(mass)}} = ${formatNumber(
                          acceleration
                        )} \,\text{m/s^2}`}
                      />
                    </>
                  )}

                  {isPushingUp && hasFriction && (
                    <>
                      <MathFormula
                        formula={String.raw`F_{res} = F - P_{\parallel} - F_{at} = ${formatNumber(
                          pushForce
                        )} - ${formatNumber(parallelWeight)} - ${formatNumber(
                          frictionForce
                        )} = ${formatNumber(Math.max(netForce, 0))} \,\text{N}`}
                      />
                      <MathFormula
                        formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(
                          Math.max(netForce, 0)
                        )}}{${formatNumber(mass)}} = ${formatNumber(
                          acceleration
                        )} \,\text{m/s^2}`}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Cinemática e energia
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`s = \frac{h}{\sin\theta} = \frac{${formatNumber(
                      height
                    )}}{\sin(${formatNumber(angleDeg)}^\circ)} = ${formatNumber(
                      rampLength
                    )} \,\text{m}`}
                  />

                  {canMove ? (
                    <>
                      <MathFormula
                        formula={String.raw`t = \sqrt{\frac{2s}{a}} = \sqrt{\frac{2 \cdot ${formatNumber(
                          rampLength
                        )}}{${formatNumber(acceleration)}}} = ${formatNumber(
                          travelTime
                        )} \,\text{s}`}
                      />
                      <MathFormula
                        formula={String.raw`v = \sqrt{2as} = \sqrt{2 \cdot ${formatNumber(
                          acceleration
                        )} \cdot ${formatNumber(rampLength)}} = ${formatNumber(
                          finalVelocity
                        )} \,\text{m/s}`}
                      />
                    </>
                  ) : (
                    <MathFormula
                      formula={String.raw`\text{Como }F_{res} \le 0,\ \text{o bloco não entra em movimento.}`}
                    />
                  )}

                  <MathFormula
                    formula={String.raw`E_p = mgh = ${formatNumber(
                      mass
                    )} \cdot ${formatNumber(G)} \cdot ${formatNumber(
                      height
                    )} = ${formatNumber(potentialEnergy)} \,\text{J}`}
                  />
                  <MathFormula
                    formula={String.raw`E_c = \frac12 mv^2 = \frac12 \cdot ${formatNumber(
                      mass
                    )} \cdot (${formatNumber(finalVelocity)})^2 = ${formatNumber(
                      kineticEnergy
                    )} \,\text{J}`}
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
  const headLength = 12;
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
    toX - headLength * Math.cos(angle - Math.PI / 6),
    toY - headLength * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - headLength * Math.cos(angle + Math.PI / 6),
    toY - headLength * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  const labelX = toX + 10 * Math.cos(angle);
  const labelY = toY + 10 * Math.sin(angle);

  ctx.fillStyle = color;
  ctx.font = "bold 11px Arial";
  ctx.fillText(label, labelX, labelY);
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
