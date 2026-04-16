import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAKinematicsTheory } from "@/content/kinematics/ita_kinematics_theory";

interface UnifiedLaunchSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type LaunchCase =
  | "oblique_ground"
  | "oblique_building"
  | "vertical_ground"
  | "vertical_building";

const G = 9.8;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const UnifiedLaunchSimulator: React.FC<UnifiedLaunchSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [launchCase, setLaunchCase] = useState<LaunchCase>("oblique_ground");
  const [initialSpeed, setInitialSpeed] = useState(20);
  const [angleDeg, setAngleDeg] = useState(45);
  const [initialHeight, setInitialHeight] = useState(8);

  const isOblique =
    launchCase === "oblique_ground" || launchCase === "oblique_building";
  const isVertical =
    launchCase === "vertical_ground" || launchCase === "vertical_building";
  const isBuilding =
    launchCase === "oblique_building" || launchCase === "vertical_building";

  const effectiveHeight = isBuilding ? initialHeight : 0;
  const angleRad = useMemo(() => (angleDeg * Math.PI) / 180, [angleDeg]);

  const vx0 = useMemo(() => {
    if (isVertical) return 0;
    return initialSpeed * Math.cos(angleRad);
  }, [isVertical, initialSpeed, angleRad]);

  const vy0 = useMemo(() => {
    if (isVertical) return initialSpeed;
    return initialSpeed * Math.sin(angleRad);
  }, [isVertical, initialSpeed, angleRad]);

  const discriminant = useMemo(() => {
    return vy0 * vy0 + 2 * G * effectiveHeight;
  }, [vy0, effectiveHeight]);

  const flightTime = useMemo(() => {
    if (discriminant < 0) return 0;
    return (vy0 + Math.sqrt(discriminant)) / G;
  }, [discriminant, vy0]);

  const maxHeight = useMemo(() => {
    return effectiveHeight + (vy0 * vy0) / (2 * G);
  }, [effectiveHeight, vy0]);

  const range = useMemo(() => vx0 * flightTime, [vx0, flightTime]);

  const finalVy = useMemo(() => vy0 - G * flightTime, [vy0, flightTime]);

  const finalSpeed = useMemo(() => {
    return Math.sqrt(vx0 * vx0 + finalVy * finalVy);
  }, [vx0, finalVy]);

  const currentTimeMax = useMemo(() => Math.max(flightTime, 0.2), [flightTime]);

  const caseLabel = useMemo(() => {
    switch (launchCase) {
      case "oblique_ground":
        return "LANÇAMENTO OBLÍQUO DO SOLO";
      case "oblique_building":
        return "LANÇAMENTO OBLÍQUO DE PRÉDIO";
      case "vertical_ground":
        return "LANÇAMENTO VERTICAL DO SOLO";
      case "vertical_building":
        return "LANÇAMENTO VERTICAL DE PRÉDIO";
      default:
        return "LANÇAMENTO";
    }
  }, [launchCase]);

  useEffect(() => {
    timeRef.current = 0;
  }, [resetTrigger, launchCase, initialSpeed, angleDeg, initialHeight]);

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

      const paddingBottom = 60;
      const groundY = height - paddingBottom;
      const originX = isBuilding ? 170 : 120;
      const originY = groundY - effectiveHeight * 18;

      const maxX = Math.max(range, 8);
      const maxY = Math.max(maxHeight, effectiveHeight + 5);
      const usableWidth = width - 240;
      const usableHeight = height - 100;
      const scaleX = usableWidth / maxX;
      const scaleY = usableHeight / maxY;
      const scale = Math.min(scaleX, scaleY, 22);

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

      // solo
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(40, groundY);
      ctx.lineTo(width - 30, groundY);
      ctx.stroke();

      // prédio
      if (isBuilding) {
        const buildingWidth = 60;
        ctx.fillStyle = "#cbd5e1";
        ctx.fillRect(originX - buildingWidth / 2, originY, buildingWidth, groundY - originY);
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 2;
        ctx.strokeRect(
          originX - buildingWidth / 2,
          originY,
          buildingWidth,
          groundY - originY
        );
      }

      // trajetória
      ctx.strokeStyle = "#93c5fd";
      ctx.lineWidth = 3;
      ctx.beginPath();

      const samples = 120;
      for (let i = 0; i <= samples; i++) {
        const t = (flightTime * i) / samples;
        const x = vx0 * t;
        const y = effectiveHeight + vy0 * t - 0.5 * G * t * t;

        const canvasX = originX + x * scale;
        const canvasY = groundY - y * scale;

        if (i === 0) ctx.moveTo(canvasX, canvasY);
        else ctx.lineTo(canvasX, canvasY);
      }
      ctx.stroke();

      let tCurrent = clamp(timeRef.current, 0, currentTimeMax);
      const xCurrent = vx0 * tCurrent;
      const yCurrent = Math.max(
        0,
        effectiveHeight + vy0 * tCurrent - 0.5 * G * tCurrent * tCurrent
      );

      const vxCurrent = vx0;
      const vyCurrent = vy0 - G * tCurrent;
      const speedCurrent = Math.sqrt(
        vxCurrent * vxCurrent + vyCurrent * vyCurrent
      );

      const projectileX = originX + xCurrent * scale;
      const projectileY = groundY - yCurrent * scale;

      // origem
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(originX, groundY - effectiveHeight * scale, 5, 0, Math.PI * 2);
      ctx.fill();

      // projétil
      ctx.fillStyle = "#2563eb";
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(projectileX, projectileY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // vetores
      if (speedCurrent > 0.1) {
        drawLabeledArrow(
          ctx,
          projectileX,
          projectileY,
          projectileX + vxCurrent * 2.2,
          projectileY - vyCurrent * 2.2,
          "#2563eb",
          `v = ${formatNumber(speedCurrent)} m/s`
        );
      }

      drawLabeledArrow(
        ctx,
        projectileX,
        projectileY,
        projectileX,
        projectileY + 70,
        "#ef4444",
        `g = ${formatNumber(G)} m/s²`
      );

      if (!isVertical) {
        drawLabeledArrow(
          ctx,
          projectileX,
          projectileY + 10,
          projectileX + vx0 * 2,
          projectileY + 10,
          "#16a34a",
          `v_x = ${formatNumber(vx0)} m/s`
        );
      }

      drawLabeledArrow(
        ctx,
        projectileX + 10,
        projectileY,
        projectileX + 10,
        projectileY - vyCurrent * 2,
        "#f59e0b",
        `v_y = ${formatNumber(vyCurrent)} m/s`
      );

      // título
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(caseLabel, 20, 28);

      ctx.font = "12px Arial";
      ctx.fillText(`v₀ = ${formatUnit(initialSpeed, "m/s")}`, 20, 58);
      ctx.fillText(`h₀ = ${formatUnit(effectiveHeight, "m")}`, 20, 78);

      if (isOblique) {
        ctx.fillText(`θ = ${formatUnit(angleDeg, "°")}`, 20, 98);
        ctx.fillText(`v₀x = ${formatUnit(vx0, "m/s")}`, 20, 118);
        ctx.fillText(`v₀y = ${formatUnit(vy0, "m/s")}`, 20, 138);
      } else {
        ctx.fillText(`v₀y = ${formatUnit(vy0, "m/s")}`, 20, 98);
      }

      ctx.fillText(`t = ${formatUnit(tCurrent, "s")}`, 20, 178);
      ctx.fillText(`x = ${formatUnit(xCurrent, "m")}`, 20, 198);
      ctx.fillText(`y = ${formatUnit(yCurrent, "m")}`, 20, 218);

      if (range > 0.01 && !isVertical) {
        ctx.fillStyle = "#64748b";
        ctx.font = "11px Arial";
        ctx.fillText(
          `alcance = ${formatNumber(range)} m`,
          originX + range * scale - 50,
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
    launchCase,
    initialSpeed,
    angleDeg,
    initialHeight,
    effectiveHeight,
    isBuilding,
    isVertical,
    isOblique,
    vx0,
    vy0,
    range,
    maxHeight,
    flightTime,
    currentTimeMax,
    caseLabel,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Simulador de Lançamentos
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Todos os casos reunidos em uma interface só.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Caso de lançamento
                </p>
                <select
                  value={launchCase}
                  onChange={(e) => setLaunchCase(e.target.value as LaunchCase)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="oblique_ground">Oblíquo do solo</option>
                  <option value="oblique_building">Oblíquo de prédio</option>
                  <option value="vertical_ground">Vertical do solo</option>
                  <option value="vertical_building">Vertical de prédio</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Velocidade inicial <span className="text-slate-500">(v₀)</span>
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

              {isOblique && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Ângulo <span className="text-slate-500">(θ)</span>
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

              {isBuilding && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Altura do prédio <span className="text-slate-500">(h₀)</span>
                    </label>
                    <span className="text-sm font-bold text-slate-900">
                      {formatUnit(initialHeight, "m")}
                    </span>
                  </div>
                  <Slider
                    value={[initialHeight]}
                    onValueChange={(value) => setInitialHeight(value[0])}
                    min={1}
                    max={25}
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
                    Tempo total <MathFormula inline formula={String.raw`t`} />
                  </>
                }
                value={formatUnit(flightTime, "s")}
              />

              <MetricCard
                label={
                  <>
                    Alcance <MathFormula inline formula={String.raw`A`} />
                  </>
                }
                value={isVertical ? "0,00 m" : formatUnit(range, "m")}
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
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Detalhados
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Componentes iniciais
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`v_{0x} = ${formatNumber(vx0)} \,\text{m/s}`}
                  />
                  <MathFormula
                    formula={String.raw`v_{0y} = ${formatNumber(vy0)} \,\text{m/s}`}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Tempo e alcance
                </p>

                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`0 = h_0 + v_{0y}t - \frac{1}{2}gt^2`}
                  />
                  <MathFormula
                    formula={String.raw`t = \frac{v_{0y} + \sqrt{v_{0y}^2 + 2gh_0}}{g} = ${formatNumber(
                      flightTime
                    )} \,\text{s}`}
                  />
                  {!isVertical && (
                    <MathFormula
                      formula={String.raw`A = v_{0x} \cdot t = ${formatNumber(vx0)} \cdot ${formatNumber(
                        flightTime
                      )} = ${formatNumber(range)} \,\text{m}`}
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
                      maxHeight
                    )} \,\text{m}`}
                  />
                  <MathFormula
                    formula={String.raw`v_{fy} = v_{0y} - gt = ${formatNumber(finalVy)} \,\text{m/s}`}
                  />
                  <MathFormula
                    formula={String.raw`v_f = \sqrt{v_x^2 + v_{fy}^2} = ${formatNumber(finalSpeed)} \,\text{m/s}`}
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
