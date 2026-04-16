import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAKinematicsTheory } from "@/content/kinematics/ita_kinematics_theory";

interface ProjectileMotionSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type LaunchMode = "oblique" | "horizontal" | "vertical";

const G = 9.8;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const ProjectileMotionSimulator: React.FC<
  ProjectileMotionSimulatorProps
> = ({ isRunning, resetTrigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [launchMode, setLaunchMode] = useState<LaunchMode>("oblique");

  const [initialSpeed, setInitialSpeed] = useState(20);
  const [angleDeg, setAngleDeg] = useState(45);
  const [initialHeight, setInitialHeight] = useState(0);

  const angleRad = useMemo(() => (angleDeg * Math.PI) / 180, [angleDeg]);

  const vx0 = useMemo(() => {
    if (launchMode === "vertical") return 0;
    if (launchMode === "horizontal") return initialSpeed;
    return initialSpeed * Math.cos(angleRad);
  }, [launchMode, initialSpeed, angleRad]);

  const vy0 = useMemo(() => {
    if (launchMode === "vertical") return initialSpeed;
    if (launchMode === "horizontal") return 0;
    return initialSpeed * Math.sin(angleRad);
  }, [launchMode, initialSpeed, angleRad]);

  const flightTime = useMemo(() => {
    const discriminant = vy0 * vy0 + 2 * G * initialHeight;
    if (discriminant < 0) return 0;
    return (vy0 + Math.sqrt(discriminant)) / G;
  }, [vy0, initialHeight]);

  const maxHeight = useMemo(() => {
    const extra = (vy0 * vy0) / (2 * G);
    return initialHeight + extra;
  }, [vy0, initialHeight]);

  const range = useMemo(() => {
    return vx0 * flightTime;
  }, [vx0, flightTime]);

  const finalVy = useMemo(() => {
    return vy0 - G * flightTime;
  }, [vy0, flightTime]);

  const finalSpeed = useMemo(() => {
    return Math.sqrt(vx0 * vx0 + finalVy * finalVy);
  }, [vx0, finalVy]);

  const currentTimeMax = useMemo(() => {
    return Math.max(flightTime, 0.2);
  }, [flightTime]);

  const launchLabel = useMemo(() => {
    if (launchMode === "oblique") return "LANÇAMENTO OBLÍQUO";
    if (launchMode === "horizontal") return "LANÇAMENTO HORIZONTAL";
    return "LANÇAMENTO VERTICAL";
  }, [launchMode]);

  useEffect(() => {
    timeRef.current = 0;
  }, [resetTrigger, launchMode, initialSpeed, angleDeg, initialHeight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      const paddingLeft = 80;
      const paddingBottom = 60;
      const groundY = height - paddingBottom;
      const originX = 120;
      const originY = groundY - initialHeight * 18;

      const maxX = Math.max(range, 10);
      const maxY = Math.max(maxHeight, initialHeight + 5);

      const usableWidth = width - 220;
      const usableHeight = height - 120;

      const scaleX = usableWidth / maxX;
      const scaleY = usableHeight / maxY;
      const scale = Math.min(scaleX, scaleY, 22);

      // grade leve
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

      // chão
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(40, groundY);
      ctx.lineTo(width - 30, groundY);
      ctx.stroke();

      // eixo vertical na origem
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(originX, 30);
      ctx.lineTo(originX, groundY);
      ctx.stroke();

      // trajetória inteira
      ctx.strokeStyle = "#93c5fd";
      ctx.lineWidth = 3;
      ctx.beginPath();

      const samples = 120;
      for (let i = 0; i <= samples; i++) {
        const t = (flightTime * i) / samples;
        const x = vx0 * t;
        const y = initialHeight + vy0 * t - 0.5 * G * t * t;

        const canvasX = originX + x * scale;
        const canvasY = groundY - y * scale;

        if (i === 0) ctx.moveTo(canvasX, canvasY);
        else ctx.lineTo(canvasX, canvasY);
      }
      ctx.stroke();

      let tCurrent = timeRef.current;
      tCurrent = clamp(tCurrent, 0, currentTimeMax);

      const xCurrent = vx0 * tCurrent;
      const yCurrent = Math.max(
        0,
        initialHeight + vy0 * tCurrent - 0.5 * G * tCurrent * tCurrent
      );

      const vxCurrent = vx0;
      const vyCurrent = vy0 - G * tCurrent;
      const speedCurrent = Math.sqrt(
        vxCurrent * vxCurrent + vyCurrent * vyCurrent
      );

      const projectileX = originX + xCurrent * scale;
      const projectileY = groundY - yCurrent * scale;

      // ponto inicial
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(originX, groundY - initialHeight * scale, 5, 0, Math.PI * 2);
      ctx.fill();

      // projétil
      ctx.fillStyle = "#2563eb";
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(projectileX, projectileY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // vetor velocidade
      if (speedCurrent > 0.1) {
        const vxArrow = projectileX + vxCurrent * 2.4;
        const vyArrow = projectileY - vyCurrent * 2.4;

        drawLabeledArrow(
          ctx,
          projectileX,
          projectileY,
          vxArrow,
          vyArrow,
          "#2563eb",
          `v = ${formatNumber(speedCurrent)} m/s`
        );
      }

      // vetor gravidade
      drawLabeledArrow(
        ctx,
        projectileX,
        projectileY,
        projectileX,
        projectileY + 70,
        "#ef4444",
        `g = ${formatNumber(G)} m/s²`
      );

      // vetor horizontal
      if (launchMode !== "vertical") {
        drawLabeledArrow(
          ctx,
          projectileX,
          projectileY + 10,
          projectileX + vx0 * 2.1,
          projectileY + 10,
          "#16a34a",
          `v_x = ${formatNumber(vx0)} m/s`
        );
      }

      // vetor vertical
      drawLabeledArrow(
        ctx,
        projectileX + 10,
        projectileY,
        projectileX + 10,
        projectileY - vyCurrent * 2.1,
        "#f59e0b",
        `v_y = ${formatNumber(vyCurrent)} m/s`
      );

      // título
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(launchLabel, 20, 28);

      // dados canto
      ctx.font = "12px Arial";
      ctx.fillText(`v₀ = ${formatUnit(initialSpeed, "m/s")}`, 20, 58);
      ctx.fillText(`h₀ = ${formatUnit(initialHeight, "m")}`, 20, 78);
      if (launchMode === "oblique") {
        ctx.fillText(`θ = ${formatUnit(angleDeg, "°")}`, 20, 98);
        ctx.fillText(`v₀x = ${formatUnit(vx0, "m/s")}`, 20, 118);
        ctx.fillText(`v₀y = ${formatUnit(vy0, "m/s")}`, 20, 138);
      } else if (launchMode === "horizontal") {
        ctx.fillText(`v₀x = ${formatUnit(vx0, "m/s")}`, 20, 98);
      } else {
        ctx.fillText(`v₀y = ${formatUnit(vy0, "m/s")}`, 20, 98);
      }

      ctx.fillText(`t = ${formatUnit(tCurrent, "s")}`, 20, 178);
      ctx.fillText(`x = ${formatUnit(xCurrent, "m")}`, 20, 198);
      ctx.fillText(`y = ${formatUnit(yCurrent, "m")}`, 20, 218);

      // marcas
      ctx.fillStyle = "#64748b";
      ctx.font = "11px Arial";
      ctx.fillText("solo", width - 65, groundY - 8);

      if (range > 0.01) {
        ctx.fillText(
          `alcance = ${formatNumber(range)} m`,
          originX + range * scale - 60,
          groundY + 22
        );
      }

      if (isRunning) {
        if (tCurrent >= currentTimeMax + 0.2) {
          timeRef.current = 0;
        } else {
          timeRef.current += 1 / 60;
        }
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
    isRunning,
    launchMode,
    initialSpeed,
    angleDeg,
    initialHeight,
    vx0,
    vy0,
    range,
    maxHeight,
    flightTime,
    currentTimeMax,
    launchLabel,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Simulador de Lançamentos
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste os parâmetros e veja a trajetória do projétil em tempo
                real.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tipo de lançamento
                </p>
                <select
                  value={launchMode}
                  onChange={(e) => setLaunchMode(e.target.value as LaunchMode)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="oblique">Lançamento oblíquo</option>
                  <option value="horizontal">Lançamento horizontal</option>
                  <option value="vertical">Lançamento vertical</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Velocidade inicial{" "}
                    <span className="text-slate-500">(v₀)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(initialSpeed, "m/s")}
                  </span>
                </div>
                <Slider
                  value={[initialSpeed]}
                  onValueChange={(value) => setInitialSpeed(value[0])}
                  min={1}
                  max={50}
                  step={0.5}
                  className="w-full"
                />
              </div>

              {launchMode === "oblique" && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Ângulo de lançamento{" "}
                      <span className="text-slate-500">(θ)</span>
                    </label>
                    <span className="text-sm font-bold text-slate-900">
                      {formatUnit(angleDeg, "°")}
                    </span>
                  </div>
                  <Slider
                    value={[angleDeg]}
                    onValueChange={(value) => setAngleDeg(value[0])}
                    min={5}
                    max={85}
                    step={1}
                    className="w-full"
                  />
                </div>
              )}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Altura inicial <span className="text-slate-500">(h₀)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(initialHeight, "m")}
                  </span>
                </div>
                <Slider
                  value={[initialHeight]}
                  onValueChange={(value) => setInitialHeight(value[0])}
                  min={0}
                  max={20}
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
                    Tempo total <MathFormula inline formula={String.raw`t`} />
                  </>
                }
                value={formatUnit(flightTime, "s")}
              />

              <MetricCard
                label={
                  <>
                    Alcance horizontal{" "}
                    <MathFormula inline formula={String.raw`A`} />
                  </>
                }
                value={launchMode === "vertical" ? "0,00 m" : formatUnit(range, "m")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Altura máxima{" "}
                    <MathFormula inline formula={String.raw`H_{\max}`} />
                  </>
                }
                value={formatUnit(maxHeight, "m")}
                valueClassName="text-green-700"
              />

              <MetricCard
                label={
                  <>
                    Velocidade final{" "}
                    <MathFormula inline formula={String.raw`v_f`} />
                  </>
                }
                value={formatUnit(finalSpeed, "m/s")}
                valueClassName="text-amber-600"
              />

              <MetricCard
                label={
                  <>
                    Componente horizontal{" "}
                    <MathFormula inline formula={String.raw`v_x`} />
                  </>
                }
                value={formatUnit(vx0, "m/s")}
              />

              <MetricCard
                label={
                  <>
                    Componente vertical inicial{" "}
                    <MathFormula inline formula={String.raw`v_{0y}`} />
                  </>
                }
                value={formatUnit(vy0, "m/s")}
              />
            </div>
          </Card>
        </div>

        {/* DIREITA */}
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
                title="Velocidades iniciais"
                values={[
                  ["v₀", formatUnit(initialSpeed, "m/s")],
                  ["v₀x", formatUnit(vx0, "m/s")],
                  ["v₀y", formatUnit(vy0, "m/s")],
                ]}
              />

              <CalcMiniCard
                title="Trajetória"
                values={[
                  ["Tempo total", formatUnit(flightTime, "s")],
                  ["Alcance", launchMode === "vertical" ? "0,00 m" : formatUnit(range, "m")],
                ]}
              />

              <CalcMiniCard
                title="Altura"
                values={[
                  ["Altura inicial", formatUnit(initialHeight, "m")],
                  ["Altura máxima", formatUnit(maxHeight, "m")],
                ]}
              />

              <CalcMiniCard
                title="Chegada"
                values={[
                  ["vfy", formatUnit(finalVy, "m/s")],
                  ["vf", formatUnit(finalSpeed, "m/s")],
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
                  Decomposição da velocidade inicial
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  {launchMode === "oblique" && (
                    <>
                      <MathFormula
                        formula={String.raw`v_{0x} = v_0 \cos\theta = ${formatNumber(
                          initialSpeed
                        )}\cos(${formatNumber(angleDeg)}^\circ) = ${formatNumber(
                          vx0
                        )} \,\text{m/s}`}
                      />
                      <MathFormula
                        formula={String.raw`v_{0y} = v_0 \sin\theta = ${formatNumber(
                          initialSpeed
                        )}\sin(${formatNumber(angleDeg)}^\circ) = ${formatNumber(
                          vy0
                        )} \,\text{m/s}`}
                      />
                    </>
                  )}

                  {launchMode === "horizontal" && (
                    <>
                      <MathFormula
                        formula={String.raw`v_{0x} = v_0 = ${formatNumber(
                          initialSpeed
                        )} \,\text{m/s}`}
                      />
                      <MathFormula
                        formula={String.raw`v_{0y} = 0 \,\text{m/s}`}
                      />
                    </>
                  )}

                  {launchMode === "vertical" && (
                    <>
                      <MathFormula
                        formula={String.raw`v_{0x} = 0 \,\text{m/s}`}
                      />
                      <MathFormula
                        formula={String.raw`v_{0y} = v_0 = ${formatNumber(
                          initialSpeed
                        )} \,\text{m/s}`}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Equações horárias
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`x(t) = v_{0x}t`}
                  />
                  <MathFormula
                    formula={String.raw`y(t) = h_0 + v_{0y}t - \frac{1}{2}gt^2`}
                  />
                  <MathFormula
                    formula={String.raw`y(t) = ${formatNumber(
                      initialHeight
                    )} + ${formatNumber(vy0)}t - \frac{1}{2}\cdot ${formatNumber(
                      G
                    )}t^2`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Tempo total e alcance
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`0 = h_0 + v_{0y}t - \frac{1}{2}gt^2`}
                  />
                  <MathFormula
                    formula={String.raw`t = \frac{v_{0y} + \sqrt{v_{0y}^2 + 2gh_0}}{g} = \frac{${formatNumber(
                      vy0
                    )} + \sqrt{(${formatNumber(vy0)})^2 + 2\cdot ${formatNumber(
                      G
                    )}\cdot ${formatNumber(initialHeight)}}}{${formatNumber(
                      G
                    )}} = ${formatNumber(flightTime)} \,\text{s}`}
                  />
                  {launchMode !== "vertical" && (
                    <MathFormula
                      formula={String.raw`A = v_{0x} \cdot t = ${formatNumber(
                        vx0
                      )}\cdot ${formatNumber(flightTime)} = ${formatNumber(
                        range
                      )} \,\text{m}`}
                    />
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Altura máxima e velocidade final
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`H_{\max} = h_0 + \frac{v_{0y}^2}{2g} = ${formatNumber(
                      initialHeight
                    )} + \frac{(${formatNumber(vy0)})^2}{2\cdot ${formatNumber(
                      G
                    )}} = ${formatNumber(maxHeight)} \,\text{m}`}
                  />
                  <MathFormula
                    formula={String.raw`v_{fy} = v_{0y} - gt = ${formatNumber(
                      vy0
                    )} - ${formatNumber(G)}\cdot ${formatNumber(
                      flightTime
                    )} = ${formatNumber(finalVy)} \,\text{m/s}`}
                  />
                  <MathFormula
                    formula={String.raw`v_f = \sqrt{v_x^2 + v_{fy}^2} = \sqrt{(${formatNumber(
                      vx0
                    )})^2 + (${formatNumber(finalVy)})^2} = ${formatNumber(
                      finalSpeed
                    )} \,\text{m/s}`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAKinematicsTheory.title}
        introduction={ITAKinematicsTheory.introduction}
        sections={ITAKinematicsTheory.sections}
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
  const headLength = 11;
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
