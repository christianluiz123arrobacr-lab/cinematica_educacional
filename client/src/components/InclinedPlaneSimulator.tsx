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
    useState<FrictionMode>("withoutFriction");
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
  }, [resetTrigger, mass, angleDeg, height, mu, frictionMode, motionMode, pushForce]);

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

      const marginBottom = 70;
      const groundY = heightCanvas - marginBottom;

      const bottomX = 760;
      const bottomY = groundY;

      const rampVisualLength = 430;
      const topX = bottomX - rampVisualLength * Math.cos(angleRad);
      const topY = bottomY - rampVisualLength * Math.sin(angleRad);

      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(60, groundY);
      ctx.lineTo(width - 50, groundY);
      ctx.stroke();

      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.stroke();

      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX, groundY);
      ctx.stroke();
      ctx.setLineDash([]);

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
        const traveled = Math.min(0.5 * acceleration * currentTime * currentTime, rampLength);
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

      ctx.save();
      ctx.translate(blockCenterX, blockCenterY);
      ctx.rotate(Math.atan2(bottomY - topY, bottomX - topX));

      ctx.fillStyle = hasFriction ? "#2563eb" : "#0ea5e9";
      ctx.strokeStyle = "#1e3a8a";
      ctx.lineWidth = 3;
      ctx.fillRect(-24, -18, 48, 36);
      ctx.strokeRect(-24, -18, 48, 36);

      ctx.restore();

      const downLabelPointX = blockCenterX + dx * 74;
      const downLabelPointY = blockCenterY + dy * 74;

      const upLabelPointX = blockCenterX - dx * 74;
      const upLabelPointY = blockCenterY - dy * 74;

      const normalTipX = blockCenterX - dy * 62;
      const normalTipY = blockCenterY + dx * 62;

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        downLabelPointX,
        downLabelPointY,
        "#2563eb",
        `P∥ = ${formatNumber(parallelWeight)} N`
      );

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        normalTipX,
        normalTipY,
        "#16a34a",
        `N = ${formatNumber(normalForce)} N`
      );

      if (hasFriction) {
        const frictionOpposesUp = isPushingUp;
        const frictionTipX = frictionOpposesUp
          ? blockCenterX - dx * 66
          : blockCenterX + dx * 66;
        const frictionTipY = frictionOpposesUp
          ? blockCenterY - dy * 66
          : blockCenterY + dy * 66;

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

      if (isPushingUp) {
        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY,
          upLabelPointX,
          upLabelPointY,
          "#7c3aed",
          `F = ${formatNumber(pushForce)} N`
        );
      }

      const accelDirectionPositive = acceleration > 0;
      if (accelDirectionPositive) {
        const accelTipX = isPushingUp
          ? blockCenterX - dx * 95
          : blockCenterX + dx * 95;
        const accelTipY = isPushingUp
          ? blockCenterY - dy * 95
          : blockCenterY + dy * 95;

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

      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(
        `${isPushingUp ? "BLOCO EMPURRADO PARA CIMA" : "BLOCO DESCENDO"} ${hasFriction ? "COM ATRITO" : "SEM ATRITO"}`,
        20,
        28
      );

      ctx.font = "12px Arial";
      ctx.fillText(`m = ${formatUnit(mass, "kg")}`, 20, 58);
      ctx.fillText(`h = ${formatUnit(height, "m")}`, 20, 76);
      ctx.fillText(`θ = ${formatUnit(angleDeg, "°")}`, 20, 94);
      ctx.fillText(`a = ${formatUnit(acceleration, "m/s²")}`, 20, 112);
      ctx.fillText(`v = ${formatUnit(currentVelocity, "m/s")}`, 20, 130);

      if (hasFriction) {
        ctx.fillText(`μ = ${formatNumber(mu)}`, 20, 148);
      }

      if (isPushingUp) {
        ctx.fillText(`F = ${formatUnit(pushForce, "N")}`, 20, hasFriction ? 166 : 148);
      }

      if (!canMove) {
        ctx.fillStyle = "#b91c1c";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Não há força resultante suficiente para mover o bloco.", 20, 196);
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
      <Card className="overflow-hidden border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 bg-white px-5 py-4">
          <h3 className="text-lg font-bold text-slate-900">
            Simulador de Plano Inclinado
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Agora você pode analisar o bloco descendo ou sendo empurrado para cima,
            com ou sem atrito, observando forças, aceleração e energia.
          </p>
        </div>

        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Atrito
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setFrictionMode("withoutFriction")}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    frictionMode === "withoutFriction"
                      ? "border-sky-600 bg-sky-600 text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Sem atrito
                </button>

                <button
                  type="button"
                  onClick={() => setFrictionMode("withFriction")}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    frictionMode === "withFriction"
                      ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Com atrito
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Situação do movimento
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setMotionMode("down")}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    motionMode === "down"
                      ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Descendo a rampa
                </button>

                <button
                  type="button"
                  onClick={() => setMotionMode("up")}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    motionMode === "up"
                      ? "border-violet-700 bg-violet-700 text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Empurrado para cima
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 md:p-6">
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
            Controles da Simulação
          </h4>
          <p className="mt-1 text-sm text-slate-600">
            Ajuste a geometria da rampa, o atrito e a força aplicada ao bloco.
          </p>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="space-y-5">
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

                {hasFriction && (
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Coeficiente de atrito <span className="text-slate-500">(μ)</span>
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
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700">
                Leitura rápida
              </h5>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Modo:</span>{" "}
                  {isPushingUp ? "Empurrado para cima" : "Descendo a rampa"}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Atrito:</span>{" "}
                  {hasFriction ? "Com atrito" : "Sem atrito"}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Comprimento da rampa:</span>{" "}
                  {formatUnit(rampLength, "m")}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">O bloco se move?</span>{" "}
                  {canMove ? "Sim" : "Não"}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Aceleração:</span>{" "}
                  {formatUnit(acceleration, "m/s²")}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Tempo total:</span>{" "}
                  {canMove ? formatUnit(travelTime, "s") : "—"}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Velocidade final:</span>{" "}
                  {canMove ? formatUnit(finalVelocity, "m/s") : "—"}
                </p>
                {isPushingUp && (
                  <p>
                    <span className="font-semibold text-slate-900">Força aplicada:</span>{" "}
                    {formatUnit(pushForce, "N")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h4 className="text-base font-bold text-slate-900">
            Resultados Principais
          </h4>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                  Força resultante{" "}
                  <MathFormula inline formula={String.raw`F_{res}`} />
                </>
              }
              value={formatUnit(netForce > 0 ? netForce : 0, "N")}
            />

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
        </div>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h4 className="text-base font-bold text-slate-900">
            Cálculos do Plano Inclinado
          </h4>
        </div>

        <div className="space-y-5 p-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Decomposição das forças
            </p>

            <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
              <MathFormula formula={String.raw`P = mg = ${formatNumber(mass)} \cdot ${formatNumber(G)} = ${formatNumber(weight)} \,\text{N}`} />
              <MathFormula formula={String.raw`N = mg\cos\theta = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot \cos(${formatNumber(angleDeg)}^\circ) = ${formatNumber(normalForce)} \,\text{N}`} />
              <MathFormula formula={String.raw`P_{\parallel} = mg\sin\theta = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot \sin(${formatNumber(angleDeg)}^\circ) = ${formatNumber(parallelWeight)} \,\text{N}`} />
            </div>
          </div>

          {hasFriction && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                Atrito
              </p>

              <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                <MathFormula formula={String.raw`F_{at} = \mu N = ${formatNumber(mu)} \cdot ${formatNumber(normalForce)} = ${formatNumber(frictionForce)} \,\text{N}`} />
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
                  <MathFormula formula={String.raw`F_{res} = P_{\parallel} = ${formatNumber(parallelWeight)} \,\text{N}`} />
                  <MathFormula formula={String.raw`a = g\sin\theta = ${formatNumber(G)} \cdot \sin(${formatNumber(angleDeg)}^\circ) = ${formatNumber(acceleration)} \,\text{m/s^2}`} />
                </>
              )}

              {!isPushingUp && hasFriction && (
                <>
                  <MathFormula formula={String.raw`F_{res} = P_{\parallel} - F_{at} = ${formatNumber(parallelWeight)} - ${formatNumber(frictionForce)} = ${formatNumber(netForce > 0 ? netForce : 0)} \,\text{N}`} />
                  <MathFormula formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(netForce > 0 ? netForce : 0)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`} />
                </>
              )}

              {isPushingUp && !hasFriction && (
                <>
                  <MathFormula formula={String.raw`F_{res} = F - P_{\parallel} = ${formatNumber(pushForce)} - ${formatNumber(parallelWeight)} = ${formatNumber(netForce > 0 ? netForce : 0)} \,\text{N}`} />
                  <MathFormula formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(netForce > 0 ? netForce : 0)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`} />
                </>
              )}

              {isPushingUp && hasFriction && (
                <>
                  <MathFormula formula={String.raw`F_{res} = F - P_{\parallel} - F_{at} = ${formatNumber(pushForce)} - ${formatNumber(parallelWeight)} - ${formatNumber(frictionForce)} = ${formatNumber(netForce > 0 ? netForce : 0)} \,\text{N}`} />
                  <MathFormula formula={String.raw`a = \frac{F_{res}}{m} = \frac{${formatNumber(netForce > 0 ? netForce : 0)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`} />
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Cinemática e energia
            </p>

            <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
              <MathFormula formula={String.raw`s = \frac{h}{\sin\theta} = \frac{${formatNumber(height)}}{\sin(${formatNumber(angleDeg)}^\circ)} = ${formatNumber(rampLength)} \,\text{m}`} />
              {canMove ? (
                <>
                  <MathFormula formula={String.raw`t = \sqrt{\frac{2s}{a}} = \sqrt{\frac{2 \cdot ${formatNumber(rampLength)}}{${formatNumber(acceleration)}}} = ${formatNumber(travelTime)} \,\text{s}`} />
                  <MathFormula formula={String.raw`v = \sqrt{2as} = \sqrt{2 \cdot ${formatNumber(acceleration)} \cdot ${formatNumber(rampLength)}} = ${formatNumber(finalVelocity)} \,\text{m/s}`} />
                </>
              ) : (
                <MathFormula formula={String.raw`\text{Como }F_{res} \le 0,\ \text{o bloco não entra em movimento.}`} />
              )}
              <MathFormula formula={String.raw`E_p = mgh = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot ${formatNumber(height)} = ${formatNumber(potentialEnergy)} \,\text{J}`} />
              <MathFormula formula={String.raw`E_c = \frac12 mv^2 = \frac12 \cdot ${formatNumber(mass)} \cdot (${formatNumber(finalVelocity)})^2 = ${formatNumber(kineticEnergy)} \,\text{J}`} />
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

  const labelX = toX + 8 * Math.cos(angle);
  const labelY = toY + 8 * Math.sin(angle);

  ctx.fillStyle = color;
  ctx.font = "bold 11px Arial";
  ctx.fillText(label, labelX, labelY);
}
