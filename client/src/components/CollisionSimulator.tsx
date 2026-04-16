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

type CollisionType =
  | "elastic"
  | "partial_inelastic"
  | "perfectly_inelastic";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const CollisionSimulator: React.FC<CollisionSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [collisionType, setCollisionType] =
    useState<CollisionType>("elastic");

  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(1);
  const [v1Initial, setV1Initial] = useState(4);
  const [v2Initial, setV2Initial] = useState(0);
  const [restitution, setRestitution] = useState(1);

  const effectiveE = useMemo(() => {
    if (collisionType === "elastic") return 1;
    if (collisionType === "perfectly_inelastic") return 0;
    return restitution;
  }, [collisionType, restitution]);

  const commonVelocity = useMemo(() => {
    return (m1 * v1Initial + m2 * v2Initial) / (m1 + m2);
  }, [m1, m2, v1Initial, v2Initial]);

  const v1After = useMemo(() => {
    if (collisionType === "perfectly_inelastic") return commonVelocity;
    return (
      (m1 * v1Initial +
        m2 * v2Initial -
        m2 * effectiveE * (v1Initial - v2Initial)) /
      (m1 + m2)
    );
  }, [
    collisionType,
    commonVelocity,
    m1,
    m2,
    v1Initial,
    v2Initial,
    effectiveE,
  ]);

  const v2After = useMemo(() => {
    if (collisionType === "perfectly_inelastic") return commonVelocity;
    return (
      (m1 * v1Initial +
        m2 * v2Initial +
        m1 * effectiveE * (v1Initial - v2Initial)) /
      (m1 + m2)
    );
  }, [
    collisionType,
    commonVelocity,
    m1,
    m2,
    v1Initial,
    v2Initial,
    effectiveE,
  ]);

  const p1Initial = useMemo(() => m1 * v1Initial, [m1, v1Initial]);
  const p2Initial = useMemo(() => m2 * v2Initial, [m2, v2Initial]);
  const pInitial = useMemo(() => p1Initial + p2Initial, [p1Initial, p2Initial]);

  const p1Final = useMemo(() => m1 * v1After, [m1, v1After]);
  const p2Final = useMemo(() => m2 * v2After, [m2, v2After]);
  const pFinal = useMemo(() => p1Final + p2Final, [p1Final, p2Final]);

  const ec1Initial = useMemo(() => 0.5 * m1 * v1Initial ** 2, [m1, v1Initial]);
  const ec2Initial = useMemo(() => 0.5 * m2 * v2Initial ** 2, [m2, v2Initial]);
  const ecInitial = useMemo(() => ec1Initial + ec2Initial, [ec1Initial, ec2Initial]);

  const ec1Final = useMemo(() => 0.5 * m1 * v1After ** 2, [m1, v1After]);
  const ec2Final = useMemo(() => 0.5 * m2 * v2After ** 2, [m2, v2After]);
  const ecFinal = useMemo(() => ec1Final + ec2Final, [ec1Final, ec2Final]);

  const deltaEc = useMemo(() => ecFinal - ecInitial, [ecFinal, ecInitial]);
  const energyLoss = useMemo(() => ecInitial - ecFinal, [ecInitial, ecFinal]);
  const energyLossPercent = useMemo(() => {
    if (ecInitial <= 0) return 0;
    return (energyLoss / ecInitial) * 100;
  }, [energyLoss, ecInitial]);

  const impulse1 = useMemo(() => p1Final - p1Initial, [p1Final, p1Initial]);
  const impulse2 = useMemo(() => p2Final - p2Initial, [p2Final, p2Initial]);

  const cmInitialVelocity = useMemo(() => {
    return pInitial / (m1 + m2);
  }, [pInitial, m1, m2]);

  const typeLabel = useMemo(() => {
    if (collisionType === "elastic") return "COLISÃO ELÁSTICA";
    if (collisionType === "perfectly_inelastic")
      return "COLISÃO PERFEITAMENTE INELÁSTICA";
    return "COLISÃO PARCIALMENTE INELÁSTICA";
  }, [collisionType]);

  const applyPreset = (preset: string) => {
    if (preset === "equal") {
      setM1(2);
      setM2(2);
      setV1Initial(4);
      setV2Initial(0);
      setCollisionType("elastic");
      setRestitution(1);
    }
    if (preset === "heavy1") {
      setM1(4);
      setM2(1);
      setV1Initial(4);
      setV2Initial(0);
      setCollisionType("elastic");
      setRestitution(1);
    }
    if (preset === "headon") {
      setM1(2);
      setM2(2);
      setV1Initial(4);
      setV2Initial(-3);
      setCollisionType("elastic");
      setRestitution(1);
    }
    if (preset === "stick") {
      setM1(2);
      setM2(1.5);
      setV1Initial(4);
      setV2Initial(0);
      setCollisionType("perfectly_inelastic");
      setRestitution(0);
    }
    if (preset === "partial") {
      setM1(2);
      setM2(1);
      setV1Initial(5);
      setV2Initial(-1);
      setCollisionType("partial_inelastic");
      setRestitution(0.5);
    }
  };

  useEffect(() => {
    timeRef.current = 0;
  }, [resetTrigger, m1, m2, v1Initial, v2Initial, collisionType, restitution]);

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
      const relativeSpeed = (v1Initial - v2Initial) * pixelsPerSpeed;

      const gapAtStart = (startX2 - r2) - (startX1 + r1);

      const collisionTime =
        relativeSpeed > 0
          ? gapAtStart / relativeSpeed
          : Number.POSITIVE_INFINITY;

      const x1Collision = startX1 + v1Initial * pixelsPerSpeed * collisionTime;
      const x2Collision = startX2 + v2Initial * pixelsPerSpeed * collisionTime;

      const currentTime = timeRef.current;
      const collided =
        currentTime >= collisionTime && Number.isFinite(collisionTime);

      let x1 = startX1;
      let x2 = startX2;
      let v1Current = v1Initial;
      let v2Current = v2Initial;

      if (!Number.isFinite(collisionTime)) {
        x1 = startX1;
        x2 = startX2;
      } else if (!collided) {
        x1 = startX1 + v1Initial * pixelsPerSpeed * currentTime;
        x2 = startX2 + v2Initial * pixelsPerSpeed * currentTime;
        v1Current = v1Initial;
        v2Current = v2Initial;
      } else {
        const afterTime = currentTime - collisionTime;
        x1 = x1Collision + v1After * pixelsPerSpeed * afterTime;
        x2 = x2Collision + v2After * pixelsPerSpeed * afterTime;
        v1Current = v1After;
        v2Current = v2After;
      }

      x1 = clamp(x1, leftPadding + r1, rightPadding - r1);
      x2 = clamp(x2, leftPadding + r2, rightPadding - r2);

      const cmX = ((m1 * x1 + m2 * x2) / (m1 + m2));

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
      ctx.fillText(typeLabel, 14, 44);

      ctx.font = "12px Arial";
      ctx.fillText(`e = ${formatNumber(effectiveE)}`, 14, 66);
      ctx.fillText(`p_total = ${formatUnit(pFinal, "kg·m/s")}`, 14, 86);
      ctx.fillText(`EC_total = ${formatUnit(ecFinal, "J")}`, 14, 106);
      ctx.fillText(`V_cm = ${formatUnit(cmInitialVelocity, "m/s")}`, 14, 126);

      drawBall(ctx, x1, groundY, r1, "#3b82f6", "#1d4ed8");
      drawBall(ctx, x2, groundY, r2, "#ef4444", "#dc2626");

      drawVelocityArrow(ctx, x1, groundY - r1 - 28, v1Current, "#3b82f6");
      drawVelocityArrow(ctx, x2, groundY - r2 - 28, v2Current, "#ef4444");

      drawMomentumArrow(ctx, x1, groundY + r1 + 38, p1Final, "#1d4ed8");
      drawMomentumArrow(ctx, x2, groundY + r2 + 38, p2Final, "#b91c1c");

      // centro de massa
      ctx.beginPath();
      ctx.arc(cmX, groundY - 65, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#111827";
      ctx.fill();
      ctx.font = "bold 11px Arial";
      ctx.fillText("CM", cmX - 10, groundY - 75);

      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`v₁ = ${formatUnit(v1Current, "m/s")}`, x1, groundY - r1 - 42);
      ctx.fillText(`m₁ = ${formatUnit(m1, "kg")}`, x1, groundY + r1 + 24);

      ctx.fillText(`v₂ = ${formatUnit(v2Current, "m/s")}`, x2, groundY - r2 - 42);
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
  }, [
    isRunning,
    m1,
    m2,
    v1Initial,
    v2Initial,
    v1After,
    v2After,
    pInitial,
    pFinal,
    p1Final,
    p2Final,
    ecFinal,
    effectiveE,
    typeLabel,
    cmInitialVelocity,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Colisão Unidimensional
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Explore colisões elásticas, parcialmente inelásticas e perfeitamente inelásticas.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tipo de colisão
                </p>
                <select
                  value={collisionType}
                  onChange={(e) => setCollisionType(e.target.value as CollisionType)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="elastic">Elástica</option>
                  <option value="partial_inelastic">Parcialmente inelástica</option>
                  <option value="perfectly_inelastic">Perfeitamente inelástica</option>
                </select>
              </div>

              {collisionType === "partial_inelastic" && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Coeficiente de restituição <span className="text-slate-500">(e)</span>
                    </label>
                    <span className="text-sm font-bold text-slate-900">
                      {formatNumber(restitution)}
                    </span>
                  </div>
                  <Slider
                    value={[restitution]}
                    onValueChange={(value) => setRestitution(value[0])}
                    min={0}
                    max={1}
                    step={0.05}
                    className="w-full"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("equal")}
                >
                  Preset: massas iguais
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("heavy1")}
                >
                  Preset: objeto 1 mais pesado
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("headon")}
                >
                  Preset: colisão frontal
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("stick")}
                >
                  Preset: perfeitamente inelástica
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("partial")}
                >
                  Preset: parcialmente inelástica
                </button>
              </div>

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
                      min={-8}
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
                      min={-8}
                      max={8}
                      step={0.1}
                      className="w-full"
                    />
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

            <div className="space-y-3 p-5">
              <MetricCard
                label={
                  <>
                    Velocidade 1 após <MathFormula inline formula={String.raw`v'_1`} />
                  </>
                }
                value={formatUnit(v1After, "m/s")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Velocidade 2 após <MathFormula inline formula={String.raw`v'_2`} />
                  </>
                }
                value={formatUnit(v2After, "m/s")}
                valueClassName="text-rose-700"
              />

              <MetricCard
                label={
                  <>
                    Impulso no corpo 1 <MathFormula inline formula={String.raw`I_1`} />
                  </>
                }
                value={formatUnit(impulse1, "N·s")}
              />

              <MetricCard
                label={
                  <>
                    Impulso no corpo 2 <MathFormula inline formula={String.raw`I_2`} />
                  </>
                }
                value={formatUnit(impulse2, "N·s")}
              />

              <MetricCard
                label={
                  <>
                    Perda de energia <MathFormula inline formula={String.raw`\Delta E_c`} />
                  </>
                }
                value={formatUnit(energyLoss, "J")}
              />

              <MetricCard
                label={<>Perda percentual</>}
                value={`${formatNumber(energyLossPercent)} %`}
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
                    width={920}
                    height={380}
                    className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
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
                title="Velocidades"
                values={[
                  ["v₁ inicial", formatUnit(v1Initial, "m/s")],
                  ["v₂ inicial", formatUnit(v2Initial, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Após a colisão"
                values={[
                  ["v₁ final", formatUnit(v1After, "m/s")],
                  ["v₂ final", formatUnit(v2After, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Quantidade de movimento"
                values={[
                  ["p inicial", formatUnit(pInitial, "kg·m/s")],
                  ["p final", formatUnit(pFinal, "kg·m/s")],
                ]}
              />

              <CalcMiniCard
                title="Energia"
                values={[
                  ["EC inicial", formatUnit(ecInitial, "J")],
                  ["EC final", formatUnit(ecFinal, "J")],
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
                  Conservação do momento linear
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
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
                  Coeficiente de restituição
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula formula={String.raw`e = \frac{v'_2 - v'_1}{v_1 - v_2}`} />
                  <MathFormula
                    formula={String.raw`e = ${formatNumber(effectiveE)}`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Velocidades finais
                </p>
                <div className="space-y-4 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  {collisionType !== "perfectly_inelastic" ? (
                    <>
                      <MathFormula
                        formula={String.raw`v'_1 = \frac{m_1v_1 + m_2v_2 - m_2e(v_1-v_2)}{m_1+m_2} = ${formatNumber(
                          v1After
                        )} \,\text{m/s}`}
                      />
                      <MathFormula
                        formula={String.raw`v'_2 = \frac{m_1v_1 + m_2v_2 + m_1e(v_1-v_2)}{m_1+m_2} = ${formatNumber(
                          v2After
                        )} \,\text{m/s}`}
                      />
                    </>
                  ) : (
                    <>
                      <MathFormula
                        formula={String.raw`v'_1 = v'_2 = \frac{m_1v_1 + m_2v_2}{m_1+m_2} = ${formatNumber(
                          commonVelocity
                        )} \,\text{m/s}`}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Impulso e energia
                </p>
                <div className="space-y-4 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`I_1 = \Delta p_1 = p'_1 - p_1 = ${formatNumber(
                      impulse1
                    )} \,\text{N·s}`}
                  />
                  <MathFormula
                    formula={String.raw`I_2 = \Delta p_2 = p'_2 - p_2 = ${formatNumber(
                      impulse2
                    )} \,\text{N·s}`}
                  />
                  <MathFormula
                    formula={String.raw`E_{ci} = ${formatNumber(ecInitial)} \,\text{J}`}
                  />
                  <MathFormula
                    formula={String.raw`E_{cf} = ${formatNumber(ecFinal)} \,\text{J}`}
                  />
                  <MathFormula
                    formula={String.raw`\Delta E_c = E_{cf} - E_{ci} = ${formatNumber(
                      deltaEc
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
  const arrowLength = Math.max(18, Math.abs(velocity) * 16);
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

function drawMomentumArrow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  momentum: number,
  color: string
) {
  const arrowLength = Math.max(14, Math.abs(momentum) * 8);
  const direction = momentum >= 0 ? 1 : -1;
  const endX = x + arrowLength * direction;
  const headSize = 8;

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 3;

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
