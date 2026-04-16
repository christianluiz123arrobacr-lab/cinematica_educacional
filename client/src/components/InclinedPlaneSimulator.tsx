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
type MotionMode = "down" | "up_force" | "launched_up";

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
  const [muStatic, setMuStatic] = useState(0.35);
  const [muKinetic, setMuKinetic] = useState(0.2);
  const [pushForce, setPushForce] = useState(20);
  const [initialVelocity, setInitialVelocity] = useState(6);

  const hasFriction = frictionMode === "withFriction";
  const isPushingUp = motionMode === "up_force";
  const isLaunchedUp = motionMode === "launched_up";

  const angleRad = useMemo(() => (angleDeg * Math.PI) / 180, [angleDeg]);

  const rampLength = useMemo(() => {
    const sinValue = Math.sin(angleRad);
    if (sinValue <= 0) return 0;
    return height / sinValue;
  }, [height, angleRad]);

  const weight = useMemo(() => mass * G, [mass]);
  const normalForce = useMemo(() => mass * G * Math.cos(angleRad), [mass, angleRad]);
  const parallelWeight = useMemo(() => mass * G * Math.sin(angleRad), [mass, angleRad]);
  const perpendicularWeight = useMemo(() => mass * G * Math.cos(angleRad), [mass, angleRad]);

  const maxStaticFriction = useMemo(() => {
    if (!hasFriction) return 0;
    return muStatic * normalForce;
  }, [hasFriction, muStatic, normalForce]);

  const kineticFriction = useMemo(() => {
    if (!hasFriction) return 0;
    return muKinetic * normalForce;
  }, [hasFriction, muKinetic, normalForce]);

  const drivingForceNoFriction = useMemo(() => {
    if (motionMode === "down") return parallelWeight;
    if (motionMode === "up_force") return pushForce - parallelWeight;
    return 0;
  }, [motionMode, parallelWeight, pushForce]);

  const motionStarts = useMemo(() => {
    if (isLaunchedUp) return initialVelocity > 0;
    if (!hasFriction) return Math.abs(drivingForceNoFriction) > 1e-9;
    return Math.abs(drivingForceNoFriction) > maxStaticFriction + 1e-9;
  }, [
    isLaunchedUp,
    initialVelocity,
    hasFriction,
    drivingForceNoFriction,
    maxStaticFriction,
  ]);

  const staticFrictionUsed = useMemo(() => {
    if (!hasFriction || motionStarts || isLaunchedUp) return 0;
    return Math.abs(drivingForceNoFriction);
  }, [hasFriction, motionStarts, drivingForceNoFriction, isLaunchedUp]);

  const frictionForce = useMemo(() => {
    if (!hasFriction) return 0;
    if (isLaunchedUp) return kineticFriction;
    if (!motionStarts) return staticFrictionUsed;
    return kineticFriction;
  }, [hasFriction, isLaunchedUp, kineticFriction, motionStarts, staticFrictionUsed]);

  const netForceSigned = useMemo(() => {
    if (isLaunchedUp) {
      return -(parallelWeight + (hasFriction ? kineticFriction : 0));
    }

    if (!hasFriction) return drivingForceNoFriction;
    if (!motionStarts) return 0;

    if (motionMode === "down") {
      return parallelWeight - kineticFriction;
    }

    return pushForce - parallelWeight - kineticFriction;
  }, [
    isLaunchedUp,
    parallelWeight,
    hasFriction,
    kineticFriction,
    drivingForceNoFriction,
    motionStarts,
    motionMode,
    pushForce,
  ]);

  const acceleration = useMemo(() => {
    if (mass <= 0) return 0;
    return netForceSigned / mass;
  }, [netForceSigned, mass]);

  const canMove = useMemo(() => {
    if (isLaunchedUp) return initialVelocity > 0 && rampLength > 0;
    return rampLength > 0 && Math.abs(acceleration) > 1e-9 && motionStarts;
  }, [isLaunchedUp, initialVelocity, rampLength, acceleration, motionStarts]);

  const travelTime = useMemo(() => {
    if (!canMove || isLaunchedUp) return 0;
    return Math.sqrt((2 * rampLength) / Math.abs(acceleration));
  }, [canMove, rampLength, acceleration, isLaunchedUp]);

  const finalVelocity = useMemo(() => {
    if (!canMove || isLaunchedUp) return 0;
    return Math.sqrt(2 * Math.abs(acceleration) * rampLength);
  }, [canMove, acceleration, rampLength, isLaunchedUp]);

  const accelUpLaunchMagnitude = useMemo(() => {
    if (!isLaunchedUp) return 0;
    return G * Math.sin(angleRad) + (hasFriction ? muKinetic * G * Math.cos(angleRad) : 0);
  }, [isLaunchedUp, angleRad, hasFriction, muKinetic]);

  const timeToStop = useMemo(() => {
    if (!isLaunchedUp || initialVelocity <= 0 || accelUpLaunchMagnitude <= 0) return 0;
    return initialVelocity / accelUpLaunchMagnitude;
  }, [isLaunchedUp, initialVelocity, accelUpLaunchMagnitude]);

  const distanceUp = useMemo(() => {
    if (!isLaunchedUp || initialVelocity <= 0 || accelUpLaunchMagnitude <= 0) return 0;
    return (initialVelocity * initialVelocity) / (2 * accelUpLaunchMagnitude);
  }, [isLaunchedUp, initialVelocity, accelUpLaunchMagnitude]);

  const canReturnAfterStop = useMemo(() => {
    if (!isLaunchedUp) return false;
    if (!hasFriction) return true;
    return parallelWeight > maxStaticFriction + 1e-9;
  }, [isLaunchedUp, hasFriction, parallelWeight, maxStaticFriction]);

  const accelDownAfterStop = useMemo(() => {
    if (!isLaunchedUp) return 0;
    if (!canReturnAfterStop) return 0;
    return G * Math.sin(angleRad) - (hasFriction ? muKinetic * G * Math.cos(angleRad) : 0);
  }, [isLaunchedUp, canReturnAfterStop, angleRad, hasFriction, muKinetic]);

  const timeDownAfterStop = useMemo(() => {
    if (!isLaunchedUp || !canReturnAfterStop || distanceUp <= 0 || accelDownAfterStop <= 0)
      return 0;
    return Math.sqrt((2 * distanceUp) / accelDownAfterStop);
  }, [isLaunchedUp, canReturnAfterStop, distanceUp, accelDownAfterStop]);

  const totalLaunchCycleTime = useMemo(() => {
    if (!isLaunchedUp) return 0;
    return timeToStop + timeDownAfterStop;
  }, [isLaunchedUp, timeToStop, timeDownAfterStop]);

  const potentialEnergy = useMemo(() => mass * G * height, [mass, height]);

  const kineticEnergy = useMemo(() => {
    if (isLaunchedUp) return 0.5 * mass * initialVelocity * initialVelocity;
    return 0.5 * mass * finalVelocity * finalVelocity;
  }, [isLaunchedUp, mass, initialVelocity, finalVelocity]);

  const workWeight = useMemo(() => {
    if (isLaunchedUp) {
      return -parallelWeight * distanceUp;
    }
    return parallelWeight * rampLength;
  }, [isLaunchedUp, parallelWeight, distanceUp, rampLength]);

  const workFriction = useMemo(() => {
    if (!hasFriction) return 0;
    if (isLaunchedUp) {
      return -kineticFriction * distanceUp;
    }
    return -kineticFriction * rampLength;
  }, [hasFriction, isLaunchedUp, kineticFriction, distanceUp, rampLength]);

  const motionDescription = useMemo(() => {
    if (isLaunchedUp) {
      if (initialVelocity <= 0) return "Defina uma velocidade inicial maior que zero.";
      if (canReturnAfterStop) {
        return "O bloco sobe, para e depois desce de volta.";
      }
      return "O bloco sobe, para e permanece em repouso no ponto mais alto.";
    }

    if (!hasFriction) {
      return motionMode === "up_force"
        ? acceleration > 0
          ? "O bloco sobe acelerando."
          : acceleration < 0
          ? "O bloco tenderia a descer."
          : "O bloco permanece em equilíbrio."
        : acceleration > 0
        ? "O bloco desce acelerando."
        : "O bloco permanece em equilíbrio.";
    }

    if (!motionStarts) {
      return "O atrito estático impede o movimento.";
    }

    if (motionMode === "down") {
      return acceleration > 0
        ? "O bloco desce com atrito cinético."
        : "O bloco não consegue descer.";
    }

    return acceleration > 0
      ? "O bloco sobe com atrito cinético."
      : "A força aplicada não vence peso + atrito.";
  }, [
    isLaunchedUp,
    initialVelocity,
    canReturnAfterStop,
    hasFriction,
    motionMode,
    acceleration,
    motionStarts,
  ]);

  useEffect(() => {
    timeRef.current = 0;
  }, [
    resetTrigger,
    mass,
    angleDeg,
    height,
    muStatic,
    muKinetic,
    frictionMode,
    motionMode,
    pushForce,
    initialVelocity,
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

      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(60, groundY);
      ctx.lineTo(width - 40, groundY);
      ctx.stroke();

      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.stroke();

      ctx.fillStyle = "#e2e8f0";
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.lineTo(bottomX, groundY);
      ctx.closePath();
      ctx.fill();

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

      const normalX = -dy;
      const normalY = dx;

      let progress = isPushingUp || isLaunchedUp ? 1 : 0;
      let currentVelocity = 0;
      let accelerationArrowSigned = acceleration;

      if (isLaunchedUp) {
        const t = timeRef.current;

        if (t <= timeToStop) {
          const sUp = initialVelocity * t - 0.5 * accelUpLaunchMagnitude * t * t;
          progress = 1 - (distanceUp > 0 ? sUp / rampLength : 0);
          currentVelocity = Math.max(0, initialVelocity - accelUpLaunchMagnitude * t);
          accelerationArrowSigned = -accelUpLaunchMagnitude;
        } else if (canReturnAfterStop) {
          const tDown = t - timeToStop;
          const sDown = 0.5 * accelDownAfterStop * tDown * tDown;
          const currentDistanceFromBottom = Math.max(0, distanceUp - sDown);
          progress = 1 - currentDistanceFromBottom / rampLength;
          currentVelocity = accelDownAfterStop * tDown;
          accelerationArrowSigned = accelDownAfterStop;
        } else {
          progress = 1 - distanceUp / rampLength;
          currentVelocity = 0;
          accelerationArrowSigned = 0;
        }

        if (isRunning) {
          const endCycle = canReturnAfterStop ? totalLaunchCycleTime + 0.8 : timeToStop + 1.2;
          if (t >= endCycle) {
            timeRef.current = 0;
          } else {
            timeRef.current += 1 / 60;
          }
        }
      } else if (canMove) {
        const currentTime = timeRef.current;
        const traveled = Math.min(
          0.5 * Math.abs(acceleration) * currentTime * currentTime,
          rampLength
        );
        const normalized = traveled / rampLength;

        if (motionMode === "down") {
          progress = normalized;
          currentVelocity = Math.min(Math.abs(acceleration) * currentTime, finalVelocity);
        } else {
          progress = 1 - normalized;
          currentVelocity = Math.min(Math.abs(acceleration) * currentTime, finalVelocity);
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

      ctx.fillStyle = "#3b82f6";
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 3;
      roundRect(ctx, -26, -18, 52, 36, 6);
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      const title =
        motionMode === "down"
          ? "BLOCO DESCENDO"
          : motionMode === "up_force"
          ? "BLOCO EMPURRADO PARA CIMA"
          : "BLOCO LANÇADO PARA CIMA";

      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`${title} ${hasFriction ? "COM ATRITO" : "SEM ATRITO"}`, 22, 28);

      ctx.font = "12px Arial";
      ctx.fillText(`m = ${formatUnit(mass, "kg")}`, 22, 58);
      ctx.fillText(`h = ${formatUnit(height, "m")}`, 22, 78);
      ctx.fillText(`θ = ${formatUnit(angleDeg, "°")}`, 22, 98);
      ctx.fillText(`a = ${formatUnit(accelerationArrowSigned, "m/s²")}`, 22, 118);
      ctx.fillText(`v = ${formatUnit(currentVelocity, "m/s")}`, 22, 138);

      if (hasFriction) {
        ctx.fillText(`μe = ${formatNumber(muStatic)}`, 22, 158);
        ctx.fillText(`μc = ${formatNumber(muKinetic)}`, 22, 178);
      }

      if (isPushingUp) {
        ctx.fillText(`F = ${formatUnit(pushForce, "N")}`, 22, hasFriction ? 198 : 158);
      }

      if (isLaunchedUp) {
        ctx.fillText(`v₀ = ${formatUnit(initialVelocity, "m/s")}`, 22, hasFriction ? 198 : 158);
      }

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX,
        blockCenterY + 105,
        "#475569",
        `P = ${formatNumber(weight)} N`
      );

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX + dx * 88,
        blockCenterY + dy * 88,
        "#2563eb",
        `P∥ = ${formatNumber(parallelWeight)} N`
      );

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX - normalX * 78,
        blockCenterY - normalY * 78,
        "#0ea5e9",
        `P⊥ = ${formatNumber(perpendicularWeight)} N`
      );

      drawLabeledArrow(
        ctx,
        blockCenterX,
        blockCenterY,
        blockCenterX + normalX * 86,
        blockCenterY + normalY * 86,
        "#16a34a",
        `N = ${formatNumber(normalForce)} N`
      );

      if (hasFriction) {
        let frictionMagnitude = 0;
        let frictionLabel = "";

        if (isLaunchedUp) {
          frictionMagnitude = currentVelocity > 0 ? kineticFriction : canReturnAfterStop ? kineticFriction : staticFrictionUsed;
          frictionLabel = currentVelocity > 0
            ? `Fat(cin) = ${formatNumber(kineticFriction)} N`
            : canReturnAfterStop
            ? `Fat(cin) = ${formatNumber(kineticFriction)} N`
            : `Fat(est) ≤ ${formatNumber(maxStaticFriction)} N`;
        } else {
          frictionMagnitude = !motionStarts ? staticFrictionUsed : kineticFriction;
          frictionLabel = !motionStarts
            ? `Fat(est) = ${formatNumber(frictionMagnitude)} N`
            : `Fat(cin) = ${formatNumber(frictionMagnitude)} N`;
        }

        let frictionTipX = blockCenterX;
        let frictionTipY = blockCenterY;

        if (isLaunchedUp) {
          if (currentVelocity > 0) {
            frictionTipX = blockCenterX + dx * 78;
            frictionTipY = blockCenterY + dy * 78;
          } else if (canReturnAfterStop) {
            frictionTipX = blockCenterX - dx * 78;
            frictionTipY = blockCenterY - dy * 78;
          } else {
            frictionTipX = blockCenterX + dx * 70;
            frictionTipY = blockCenterY + dy * 70;
          }
        } else {
          frictionTipX =
            motionMode === "up_force"
              ? blockCenterX + dx * 78
              : blockCenterX - dx * 78;
          frictionTipY =
            motionMode === "up_force"
              ? blockCenterY + dy * 78
              : blockCenterY - dy * 78;
        }

        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY,
          frictionTipX,
          frictionTipY,
          "#ef4444",
          frictionLabel
        );
      }

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

      if (isLaunchedUp) {
        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY,
          blockCenterX - dx * 102,
          blockCenterY - dy * 102,
          "#7c3aed",
          `v₀ = ${formatNumber(initialVelocity)} m/s`
        );
      }

      if (Math.abs(accelerationArrowSigned) > 1e-9) {
        const accelUpward = accelerationArrowSigned < 0;
        const accelTipX = accelUpward
          ? blockCenterX - dx * 118
          : blockCenterX + dx * 118;
        const accelTipY = accelUpward
          ? blockCenterY - dy * 118
          : blockCenterY + dy * 118;

        drawLabeledArrow(
          ctx,
          blockCenterX,
          blockCenterY + 8,
          accelTipX,
          accelTipY + 8,
          "#f59e0b",
          `a = ${formatNumber(accelerationArrowSigned)} m/s²`
        );
      }

      ctx.fillStyle =
        motionDescription.includes("repouso") || motionDescription.includes("não")
          ? "#b91c1c"
          : "#0f172a";
      ctx.font = "bold 13px Arial";
      ctx.fillText(motionDescription, 22, 236);

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
    mass,
    height,
    muStatic,
    muKinetic,
    pushForce,
    initialVelocity,
    weight,
    normalForce,
    parallelWeight,
    perpendicularWeight,
    staticFrictionUsed,
    kineticFriction,
    acceleration,
    canMove,
    finalVelocity,
    travelTime,
    rampLength,
    isRunning,
    motionStarts,
    motionDescription,
    motionMode,
    isPushingUp,
    isLaunchedUp,
    timeToStop,
    distanceUp,
    canReturnAfterStop,
    accelDownAfterStop,
    totalLaunchCycleTime,
    maxStaticFriction,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 bg-white px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Simulador de Plano Inclinado
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Com forças decompostas, atrito estático/cinético e modo lançado para cima.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Atrito
                </p>
                <select
                  value={frictionMode}
                  onChange={(e) => setFrictionMode(e.target.value as FrictionMode)}
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
                  <option value="up_force">Empurrado para cima</option>
                  <option value="launched_up">Lançado para cima</option>
                </select>
              </div>

              <ControlRow label="Massa do bloco" symbol="m" value={formatUnit(mass, "kg")}>
                <Slider value={[mass]} onValueChange={(v) => setMass(v[0])} min={0.5} max={10} step={0.1} className="w-full" />
              </ControlRow>

              <ControlRow label="Altura da rampa" symbol="h" value={formatUnit(height, "m")}>
                <Slider value={[height]} onValueChange={(v) => setHeight(v[0])} min={1} max={8} step={0.1} className="w-full" />
              </ControlRow>

              <ControlRow label="Ângulo da rampa" symbol="θ" value={formatUnit(angleDeg, "°")}>
                <Slider value={[angleDeg]} onValueChange={(v) => setAngleDeg(v[0])} min={10} max={60} step={1} className="w-full" />
              </ControlRow>

              {hasFriction && (
                <>
                  <ControlRow label="Atrito estático" symbol="μe" value={formatNumber(muStatic)}>
                    <Slider value={[muStatic]} onValueChange={(v) => setMuStatic(v[0])} min={0} max={1.2} step={0.01} className="w-full" />
                  </ControlRow>

                  <ControlRow label="Atrito cinético" symbol="μc" value={formatNumber(muKinetic)}>
                    <Slider value={[muKinetic]} onValueChange={(v) => setMuKinetic(v[0])} min={0} max={1} step={0.01} className="w-full" />
                  </ControlRow>
                </>
              )}

              {isPushingUp && (
                <ControlRow label="Força aplicada" symbol="F" value={formatUnit(pushForce, "N")}>
                  <Slider value={[pushForce]} onValueChange={(v) => setPushForce(v[0])} min={1} max={120} step={0.5} className="w-full" />
                </ControlRow>
              )}

              {isLaunchedUp && (
                <ControlRow label="Velocidade inicial" symbol="v₀" value={formatUnit(initialVelocity, "m/s")}>
                  <Slider value={[initialVelocity]} onValueChange={(v) => setInitialVelocity(v[0])} min={0.5} max={20} step={0.1} className="w-full" />
                </ControlRow>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">Resultados Principais</h4>
            </div>

            <div className="space-y-3 p-5">
              <MetricCard label={<><MathFormula inline formula={String.raw`P`} /> Peso</>} value={formatUnit(weight, "N")} />
              <MetricCard label={<><MathFormula inline formula={String.raw`P_{\parallel}`} /> Componente paralela</>} value={formatUnit(parallelWeight, "N")} valueClassName="text-blue-700" />
              <MetricCard label={<><MathFormula inline formula={String.raw`P_{\perp}`} /> Componente perpendicular</>} value={formatUnit(perpendicularWeight, "N")} valueClassName="text-sky-700" />
              <MetricCard label={<><MathFormula inline formula={String.raw`N`} /> Normal</>} value={formatUnit(normalForce, "N")} valueClassName="text-green-700" />
              <MetricCard label={<>Atrito usado</>} value={hasFriction ? formatUnit(isLaunchedUp ? (canReturnAfterStop ? kineticFriction : Math.min(maxStaticFriction, parallelWeight)) : motionStarts ? kineticFriction : staticFrictionUsed, "N") : "0,00 N"} valueClassName="text-red-700" />
              <MetricCard label={<><MathFormula inline formula={String.raw`a`} /> Aceleração</>} value={formatUnit(isLaunchedUp ? -accelUpLaunchMagnitude : acceleration, "m/s²")} valueClassName="text-amber-600" />
            </div>
          </Card>
        </div>

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
              <h4 className="text-base font-bold text-slate-900">Cálculos Rápidos</h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <CalcMiniCard
                title="Decomposição"
                values={[
                  ["P", formatUnit(weight, "N")],
                  ["P∥", formatUnit(parallelWeight, "N")],
                ]}
              />
              <CalcMiniCard
                title="Normal e perpendicular"
                values={[
                  ["P⊥", formatUnit(perpendicularWeight, "N")],
                  ["N", formatUnit(normalForce, "N")],
                ]}
              />
              <CalcMiniCard
                title="Atrito"
                values={[
                  ["Fat máx. estático", formatUnit(maxStaticFriction, "N")],
                  ["Fat cinético", formatUnit(kineticFriction, "N")],
                ]}
              />
              <CalcMiniCard
                title="Movimento"
                values={[
                  ["a", formatUnit(isLaunchedUp ? -accelUpLaunchMagnitude : acceleration, "m/s²")],
                  ["v final", isLaunchedUp ? formatUnit(initialVelocity, "m/s") : canMove ? formatUnit(finalVelocity, "m/s") : "—"],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">Cálculos Detalhados</h4>
            </div>

            <div className="space-y-5 p-5">
              <CalcSection
                title="Decomposição do peso"
                formulas={[
                  String.raw`P = mg = ${formatNumber(mass)} \cdot ${formatNumber(G)} = ${formatNumber(weight)} \,\text{N}`,
                  String.raw`P_{\parallel} = mg\sin\theta = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot \sin(${formatNumber(angleDeg)}^\circ) = ${formatNumber(parallelWeight)} \,\text{N}`,
                  String.raw`P_{\perp} = mg\cos\theta = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot \cos(${formatNumber(angleDeg)}^\circ) = ${formatNumber(perpendicularWeight)} \,\text{N}`,
                  String.raw`N = P_{\perp} = ${formatNumber(normalForce)} \,\text{N}`,
                ]}
              />

              {hasFriction && (
                <CalcSection
                  title="Atrito estático e cinético"
                  formulas={[
                    String.raw`F_{at,\max}^{(est)} = \mu_e N = ${formatNumber(muStatic)} \cdot ${formatNumber(normalForce)} = ${formatNumber(maxStaticFriction)} \,\text{N}`,
                    String.raw`F_{at}^{(cin)} = \mu_c N = ${formatNumber(muKinetic)} \cdot ${formatNumber(normalForce)} = ${formatNumber(kineticFriction)} \,\text{N}`,
                  ]}
                />
              )}

              {!isLaunchedUp ? (
                <>
                  <CalcSection
                    title="Equações por eixo"
                    formulas={[
                      String.raw`\Sigma F_{\perp} = 0 \Rightarrow N - P_{\perp} = 0`,
                      motionMode === "down"
                        ? hasFriction
                          ? !motionStarts
                            ? String.raw`\Sigma F_{\parallel} = P_{\parallel} - F_{at}^{(est)} = 0`
                            : String.raw`\Sigma F_{\parallel} = P_{\parallel} - F_{at}^{(cin)} = ${formatNumber(netForceSigned)} \,\text{N}`
                          : String.raw`\Sigma F_{\parallel} = P_{\parallel} = ${formatNumber(netForceSigned)} \,\text{N}`
                        : hasFriction
                        ? !motionStarts
                          ? String.raw`\Sigma F_{\parallel} = F - P_{\parallel} - F_{at}^{(est)} = 0`
                          : String.raw`\Sigma F_{\parallel} = F - P_{\parallel} - F_{at}^{(cin)} = ${formatNumber(netForceSigned)} \,\text{N}`
                        : String.raw`\Sigma F_{\parallel} = F - P_{\parallel} = ${formatNumber(netForceSigned)} \,\text{N}`,
                      String.raw`a = \frac{\Sigma F_{\parallel}}{m} = \frac{${formatNumber(netForceSigned)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`,
                    ]}
                  />

                  <CalcSection
                    title="Cinemática e energia"
                    formulas={[
                      String.raw`s = \frac{h}{\sin\theta} = \frac{${formatNumber(height)}}{\sin(${formatNumber(angleDeg)}^\circ)} = ${formatNumber(rampLength)} \,\text{m}`,
                      canMove
                        ? String.raw`t = \sqrt{\frac{2s}{|a|}} = \sqrt{\frac{2 \cdot ${formatNumber(rampLength)}}{${formatNumber(Math.abs(acceleration))}}} = ${formatNumber(travelTime)} \,\text{s}`
                        : String.raw`\text{Sem movimento, não há tempo de percurso.}`,
                      canMove
                        ? String.raw`v = \sqrt{2|a|s} = \sqrt{2 \cdot ${formatNumber(Math.abs(acceleration))} \cdot ${formatNumber(rampLength)}} = ${formatNumber(finalVelocity)} \,\text{m/s}`
                        : String.raw`\text{Sem movimento, a velocidade final permanece nula.}`,
                      String.raw`W_P = P_{\parallel}\cdot s = ${formatNumber(workWeight)} \,\text{J}`,
                      String.raw`W_{at} = ${formatNumber(workFriction)} \,\text{J}`,
                      String.raw`E_p = mgh = ${formatNumber(mass)} \cdot ${formatNumber(G)} \cdot ${formatNumber(height)} = ${formatNumber(potentialEnergy)} \,\text{J}`,
                      String.raw`E_c = \frac12 mv^2 = ${formatNumber(kineticEnergy)} \,\text{J}`,
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcSection
                    title="Subida com velocidade inicial"
                    formulas={[
                      hasFriction
                        ? String.raw`a_{\text{subida}} = -\left(g\sin\theta + \mu_c g\cos\theta\right) = -${formatNumber(accelUpLaunchMagnitude)} \,\text{m/s^2}`
                        : String.raw`a_{\text{subida}} = -g\sin\theta = -${formatNumber(accelUpLaunchMagnitude)} \,\text{m/s^2}`,
                      String.raw`t_{\text{parada}} = \frac{v_0}{|a_{\text{subida}}|} = \frac{${formatNumber(initialVelocity)}}{${formatNumber(accelUpLaunchMagnitude)}} = ${formatNumber(timeToStop)} \,\text{s}`,
                      String.raw`s_{\text{subida}} = \frac{v_0^2}{2|a_{\text{subida}}|} = \frac{(${formatNumber(initialVelocity)})^2}{2\cdot ${formatNumber(accelUpLaunchMagnitude)}} = ${formatNumber(distanceUp)} \,\text{m}`,
                    ]}
                  />

                  <CalcSection
                    title="Condição após parar"
                    formulas={[
                      hasFriction
                        ? String.raw`P_{\parallel} = ${formatNumber(parallelWeight)} \,\text{N},\quad F_{at,\max}^{(est)} = ${formatNumber(maxStaticFriction)} \,\text{N}`
                        : String.raw`Sem atrito, o bloco necessariamente retorna.`,
                      canReturnAfterStop
                        ? String.raw`\text{Como }P_{\parallel} > F_{at,\max}^{(est)},\ \text{o bloco desce de volta.}`
                        : String.raw`\text{Como }P_{\parallel} \le F_{at,\max}^{(est)},\ \text{o bloco permanece em repouso no ponto mais alto.}`,
                      canReturnAfterStop
                        ? String.raw`a_{\text{descida}} = g\sin\theta - \mu_c g\cos\theta = ${formatNumber(accelDownAfterStop)} \,\text{m/s^2}`
                        : String.raw`\text{Não há fase de descida.}`,
                      canReturnAfterStop
                        ? String.raw`t_{\text{descida}} = \sqrt{\frac{2s_{\text{subida}}}{a_{\text{descida}}}} = ${formatNumber(timeDownAfterStop)} \,\text{s}`
                        : String.raw`\text{Tempo de descida inexistente.}`,
                    ]}
                  />

                  <CalcSection
                    title="Trabalho e energia"
                    formulas={[
                      String.raw`W_P = -P_{\parallel}\cdot s_{\text{subida}} = ${formatNumber(workWeight)} \,\text{J}`,
                      String.raw`W_{at} = -F_{at}^{(cin)}\cdot s_{\text{subida}} = ${formatNumber(workFriction)} \,\text{J}`,
                      String.raw`E_{c0} = \frac12 mv_0^2 = ${formatNumber(kineticEnergy)} \,\text{J}`,
                      String.raw`E_p = mgh = ${formatNumber(potentialEnergy)} \,\text{J}`,
                    ]}
                  />
                </>
              )}
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
