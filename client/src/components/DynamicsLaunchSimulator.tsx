import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface DynamicsLaunchSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type LaunchCase =
  | "verticalGround"
  | "verticalBuilding"
  | "obliqueGround"
  | "obliqueBuilding";

const G = 9.8;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const DynamicsLaunchSimulator: React.FC<DynamicsLaunchSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  const [launchType, setLaunchType] = useState<LaunchCase>("verticalGround");
  const [v0, setV0] = useState(25);
  const [angle, setAngle] = useState(45);
  const [h0, setH0] = useState(8);

  const isVertical =
    launchType === "verticalGround" || launchType === "verticalBuilding";
  const isOblique =
    launchType === "obliqueGround" || launchType === "obliqueBuilding";
  const hasInitialHeight =
    launchType === "verticalBuilding" || launchType === "obliqueBuilding";

  const effectiveH0 = hasInitialHeight ? h0 : 0;
  const angleRad = (angle * Math.PI) / 180;

  const v0x = useMemo(() => {
    if (isVertical) return 0;
    return v0 * Math.cos(angleRad);
  }, [isVertical, v0, angleRad]);

  const v0y = useMemo(() => {
    if (isVertical) return v0;
    return v0 * Math.sin(angleRad);
  }, [isVertical, v0, angleRad]);

  const delta = useMemo(() => v0y * v0y + 2 * G * effectiveH0, [v0y, effectiveH0]);

  const tTotal = useMemo(() => {
    if (delta < 0) return 0;
    return (v0y + Math.sqrt(delta)) / G;
  }, [delta, v0y]);

  const tSubida = useMemo(() => Math.max(v0y / G, 0), [v0y]);

  const hMax = useMemo(() => effectiveH0 + (v0y * v0y) / (2 * G), [effectiveH0, v0y]);

  const alcance = useMemo(() => v0x * tTotal, [v0x, tTotal]);

  const vfy = useMemo(() => v0y - G * tTotal, [v0y, tTotal]);

  const vf = useMemo(() => Math.sqrt(v0x * v0x + vfy * vfy), [v0x, vfy]);

  const caseLabel = useMemo(() => {
    switch (launchType) {
      case "verticalGround":
        return "LANÇAMENTO VERTICAL DO SOLO";
      case "verticalBuilding":
        return "LANÇAMENTO VERTICAL DE ALTURA h";
      case "obliqueGround":
        return "LANÇAMENTO OBLÍQUO DO SOLO";
      case "obliqueBuilding":
        return "LANÇAMENTO OBLÍQUO DE ALTURA h";
      default:
        return "LANÇAMENTO";
    }
  }, [launchType]);

  useEffect(() => {
    timeRef.current = 0;
  }, [resetTrigger, launchType, v0, angle, h0]);

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

      const groundY = height - 60;
      const originX = hasInitialHeight ? 150 : 110;
      const maxX = Math.max(alcance, 10);
      const maxY = Math.max(hMax, effectiveH0 + 6);
      const usableWidth = width - 220;
      const usableHeight = height - 100;
      const scale = Math.min(usableWidth / maxX, usableHeight / maxY, 24);

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
      if (hasInitialHeight) {
        const buildingTopY = groundY - effectiveH0 * scale;
        ctx.fillStyle = "#cbd5e1";
        ctx.fillRect(originX - 30, buildingTopY, 60, groundY - buildingTopY);
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 2;
        ctx.strokeRect(originX - 30, buildingTopY, 60, groundY - buildingTopY);
      }

      // trajetória
      ctx.strokeStyle = "#93c5fd";
      ctx.lineWidth = 3;
      ctx.beginPath();

      const samples = 120;
      for (let i = 0; i <= samples; i++) {
        const t = (tTotal * i) / samples;
        const x = v0x * t;
        const y = effectiveH0 + v0y * t - 0.5 * G * t * t;

        const canvasX = originX + x * scale;
        const canvasY = groundY - y * scale;

        if (i === 0) ctx.moveTo(canvasX, canvasY);
        else ctx.lineTo(canvasX, canvasY);
      }
      ctx.stroke();

      const tCurrent = clamp(timeRef.current, 0, Math.max(tTotal, 0.2));
      const xCurrent = v0x * tCurrent;
      const yCurrent = Math.max(
        0,
        effectiveH0 + v0y * tCurrent - 0.5 * G * tCurrent * tCurrent
      );

      const vxCurrent = v0x;
      const vyCurrent = v0y - G * tCurrent;
      const vCurrent = Math.sqrt(vxCurrent * vxCurrent + vyCurrent * vyCurrent);

      const px = originX + xCurrent * scale;
      const py = groundY - yCurrent * scale;

      // origem
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(originX, groundY - effectiveH0 * scale, 5, 0, Math.PI * 2);
      ctx.fill();

      // projétil
      ctx.fillStyle = "#2563eb";
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // vetores
      if (vCurrent > 0.1) {
        drawLabeledArrow(
          ctx,
          px,
          py,
          px + vxCurrent * 2.2,
          py - vyCurrent * 2.2,
          "#2563eb",
          `v = ${formatNumber(vCurrent)} m/s`
        );
      }

      drawLabeledArrow(
        ctx,
        px,
        py,
        px,
        py + 65,
        "#ef4444",
        `g = ${formatNumber(G)} m/s²`
      );

      if (!isVertical) {
        drawLabeledArrow(
          ctx,
          px,
          py + 10,
          px + v0x * 2.1,
          py + 10,
          "#16a34a",
          `v_x = ${formatNumber(v0x)} m/s`
        );
      }

      drawLabeledArrow(
        ctx,
        px + 10,
        py,
        px + 10,
        py - vyCurrent * 2.1,
        "#f59e0b",
        `v_y = ${formatNumber(vyCurrent)} m/s`
      );

      // título e infos
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(caseLabel, 20, 28);

      ctx.font = "12px Arial";
      ctx.fillText(`v₀ = ${formatUnit(v0, "m/s")}`, 20, 58);
      ctx.fillText(`h₀ = ${formatUnit(effectiveH0, "m")}`, 20, 78);

      if (isOblique) {
        ctx.fillText(`θ = ${formatUnit(angle, "°")}`, 20, 98);
        ctx.fillText(`v₀x = ${formatUnit(v0x, "m/s")}`, 20, 118);
        ctx.fillText(`v₀y = ${formatUnit(v0y, "m/s")}`, 20, 138);
      } else {
        ctx.fillText(`v₀y = ${formatUnit(v0y, "m/s")}`, 20, 98);
      }

      ctx.fillText(`t = ${formatUnit(tCurrent, "s")}`, 20, 178);
      ctx.fillText(`x = ${formatUnit(xCurrent, "m")}`, 20, 198);
      ctx.fillText(`y = ${formatUnit(yCurrent, "m")}`, 20, 218);

      if (!isVertical && alcance > 0.01) {
        ctx.fillStyle = "#64748b";
        ctx.font = "11px Arial";
        ctx.fillText(
          `alcance = ${formatNumber(alcance)} m`,
          originX + alcance * scale - 50,
          groundY + 22
        );
      }

      if (isRunning) {
        if (tCurrent >= Math.max(tTotal, 0.2) + 0.2) {
          timeRef.current = 0;
        } else {
          timeRef.current += 1 / 60;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [
    isRunning,
    launchType,
    v0,
    angle,
    h0,
    isVertical,
    isOblique,
    hasInitialHeight,
    effectiveH0,
    v0x,
    v0y,
    tTotal,
    hMax,
    alcance,
    caseLabel,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Simulador de Lançamentos
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste os parâmetros e acompanhe a trajetória em tempo real.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tipo de lançamento
                </p>
                <select
                  value={launchType}
                  onChange={(e) => setLaunchType(e.target.value as LaunchCase)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="verticalGround">Vertical (solo)</option>
                  <option value="verticalBuilding">Vertical (altura h)</option>
                  <option value="obliqueGround">Oblíquo (solo)</option>
                  <option value="obliqueBuilding">Oblíquo (altura h)</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Velocidade inicial <span className="text-slate-500">(v₀)</span>
                  </label>
                  <span className="text-sm font-bold text-slate-900">
                    {formatUnit(v0, "m/s")}
                  </span>
                </div>
                <Slider
                  value={[v0]}
                  onValueChange={(value) => setV0(value[0])}
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
                      {formatUnit(angle, "°")}
                    </span>
                  </div>
                  <Slider
                    value={[angle]}
                    onValueChange={(value) => setAngle(value[0])}
                    min={1}
                    max={89}
                    step={1}
                    className="w-full"
                  />
                </div>
              )}

              {hasInitialHeight && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Altura inicial <span className="text-slate-500">(h₀)</span>
                    </label>
                    <span className="text-sm font-bold text-slate-900">
                      {formatUnit(h0, "m")}
                    </span>
                  </div>
                  <Slider
                    value={[h0]}
                    onValueChange={(value) => setH0(value[0])}
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
                    Tempo total <MathFormula inline formula={String.raw`t_t`} />
                  </>
                }
                value={formatUnit(tTotal, "s")}
              />
              <MetricCard
                label={
                  <>
                    Tempo de subida <MathFormula inline formula={String.raw`t_s`} />
                  </>
                }
                value={formatUnit(tSubida, "s")}
                valueClassName="text-green-700"
              />
              <MetricCard
                label={
                  <>
                    Altura máxima <MathFormula inline formula={String.raw`h_{max}`} />
                  </>
                }
                value={formatUnit(hMax, "m")}
                valueClassName="text-blue-700"
              />
              <MetricCard
                label={
                  <>
                    Alcance <MathFormula inline formula={String.raw`A`} />
                  </>
                }
                value={isVertical ? "0,00 m" : formatUnit(alcance, "m")}
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
                title="Componentes"
                values={[
                  ["v₀x", formatUnit(v0x, "m/s")],
                  ["v₀y", formatUnit(v0y, "m/s")],
                ]}
              />
              <CalcMiniCard
                title="Trajetória"
                values={[
                  ["Tempo total", formatUnit(tTotal, "s")],
                  ["Alcance", isVertical ? "0,00 m" : formatUnit(alcance, "m")],
                ]}
              />
              <CalcMiniCard
                title="Altura"
                values={[
                  ["h₀", formatUnit(effectiveH0, "m")],
                  ["hmax", formatUnit(hMax, "m")],
                ]}
              />
              <CalcMiniCard
                title="Chegada"
                values={[
                  ["vfy", formatUnit(vfy, "m/s")],
                  ["vf", formatUnit(vf, "m/s")],
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
                  Decomposição da velocidade
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`v_{0x} = ${formatNumber(v0x)} \,\text{m/s}`}
                  />
                  <MathFormula
                    formula={String.raw`v_{0y} = ${formatNumber(v0y)} \,\text{m/s}`}
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
                    formula={String.raw`t_t = \frac{v_{0y} + \sqrt{v_{0y}^2 + 2gh_0}}{g} = ${formatNumber(
                      tTotal
                    )} \,\text{s}`}
                  />
                  {!isVertical && (
                    <MathFormula
                      formula={String.raw`A = v_{0x} \cdot t_t = ${formatNumber(v0x)} \cdot ${formatNumber(
                        tTotal
                      )} = ${formatNumber(alcance)} \,\text{m}`}
                    />
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Altura máxima
                </p>
                <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
                  <MathFormula
                    formula={String.raw`t_s = \frac{v_{0y}}{g} = ${formatNumber(tSubida)} \,\text{s}`}
                  />
                  <MathFormula
                    formula={String.raw`h_{max} = h_0 + \frac{v_{0y}^2}{2g} = ${formatNumber(
                      hMax
                    )} \,\text{m}`}
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
