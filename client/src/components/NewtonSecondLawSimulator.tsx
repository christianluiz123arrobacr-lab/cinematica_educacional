import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface NewtonSecondLawSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type Scenario =
  | "horizontal"
  | "friction"
  | "two_blocks"
  | "pulley";

const G = 9.8;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const NewtonSecondLawSimulator: React.FC<
  NewtonSecondLawSimulatorProps
> = ({ isRunning, resetTrigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [scenario, setScenario] = useState<Scenario>("horizontal");

  const [mass, setMass] = useState(2);
  const [mass2, setMass2] = useState(1.5);
  const [force, setForce] = useState(10);
  const [frictionCoef, setFrictionCoef] = useState(0.2);

  const usesFriction = scenario === "friction" || scenario === "two_blocks";

  const normalForce = useMemo(() => mass * G, [mass]);
  const frictionMax = useMemo(
    () => (usesFriction ? frictionCoef * normalForce : 0),
    [usesFriction, frictionCoef, normalForce]
  );

  const systemMass = useMemo(() => {
    if (scenario === "two_blocks") return mass + mass2;
    if (scenario === "pulley") return mass + mass2;
    return mass;
  }, [scenario, mass, mass2]);

  const frictionForce = useMemo(() => {
    if (!usesFriction) return 0;
    if (scenario === "two_blocks") {
      return frictionCoef * (mass + mass2) * G;
    }
    return frictionCoef * mass * G;
  }, [usesFriction, scenario, frictionCoef, mass, mass2]);

  const netForce = useMemo(() => {
    if (scenario === "horizontal") {
      return force;
    }

    if (scenario === "friction") {
      const frictionOpposes = Math.sign(force || 1) * frictionForce;
      const result = force - frictionOpposes;
      return Math.abs(force) <= frictionMax ? 0 : result;
    }

    if (scenario === "two_blocks") {
      const frictionOpposes = Math.sign(force || 1) * frictionForce;
      const result = force - frictionOpposes;
      return Math.abs(force) <= frictionForce ? 0 : result;
    }

    // pulley: força motriz = diferença de pesos
    return (mass2 - mass) * G;
  }, [scenario, force, frictionForce, frictionMax, mass, mass2]);

  const acceleration = useMemo(() => {
    if (systemMass <= 0) return 0;
    return netForce / systemMass;
  }, [netForce, systemMass]);

  const appliedTension = useMemo(() => {
    if (scenario !== "pulley") return 0;
    return mass * (G + acceleration);
  }, [scenario, mass, acceleration]);

  const contactForce = useMemo(() => {
    if (scenario !== "two_blocks") return 0;
    return mass2 * acceleration;
  }, [scenario, mass2, acceleration]);

  useEffect(() => {
    positionRef.current = 0;
    velocityRef.current = 0;
    lastTimeRef.current = performance.now();
  }, [resetTrigger, scenario, mass, mass2, force, frictionCoef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.04);
      lastTimeRef.current = time;

      if (isRunning) {
        velocityRef.current += acceleration * dt;
        positionRef.current += velocityRef.current * dt;
      }

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height - 110;

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

      // título
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px Arial";
      ctx.fillText(getScenarioLabel(scenario), 20, 28);

      ctx.font = "12px Arial";
      ctx.fillText(`m₁ = ${formatUnit(mass, "kg")}`, 20, 58);
      if (scenario === "two_blocks" || scenario === "pulley") {
        ctx.fillText(`m₂ = ${formatUnit(mass2, "kg")}`, 20, 78);
      }
      ctx.fillText(`a = ${formatUnit(acceleration, "m/s²")}`, 20, 118);
      ctx.fillText(`v = ${formatUnit(velocityRef.current, "m/s")}`, 20, 138);
      ctx.fillText(`ΣF = ${formatUnit(netForce, "N")}`, 20, 158);

      // desenho do chão
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(40, centerY + 50);
      ctx.lineTo(width - 40, centerY + 50);
      ctx.stroke();

      if (scenario === "horizontal" || scenario === "friction") {
        drawSingleBlockScene(
          ctx,
          width,
          centerY,
          mass,
          force,
          usesFriction ? frictionForce : 0,
          normalForce,
          mass * G,
          positionRef.current,
          velocityRef.current
        );
      }

      if (scenario === "two_blocks") {
        drawTwoBlocksScene(
          ctx,
          width,
          centerY,
          mass,
          mass2,
          force,
          frictionForce,
          contactForce,
          positionRef.current,
          velocityRef.current
        );
      }

      if (scenario === "pulley") {
        drawPulleyScene(
          ctx,
          width,
          height,
          mass,
          mass2,
          appliedTension,
          acceleration,
          positionRef.current
        );
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [
    isRunning,
    scenario,
    mass,
    mass2,
    force,
    frictionCoef,
    acceleration,
    frictionForce,
    normalForce,
    netForce,
    appliedTension,
    contactForce,
    usesFriction,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Leis de Newton
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Escolha um cenário físico e analise forças, resultante e aceleração.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Cenário físico
                </p>
                <select
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value as Scenario)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="horizontal">Superfície horizontal</option>
                  <option value="friction">Superfície com atrito</option>
                  <option value="two_blocks">Dois blocos em contato</option>
                  <option value="pulley">Sistema com polia</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Massa 1 <span className="text-slate-500">(m₁)</span>
                  </label>
                  <span className="text-sm font-bold text-blue-700">
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

              {(scenario === "two_blocks" || scenario === "pulley") && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Massa 2 <span className="text-slate-500">(m₂)</span>
                    </label>
                    <span className="text-sm font-bold text-purple-700">
                      {formatUnit(mass2, "kg")}
                    </span>
                  </div>
                  <Slider
                    value={[mass2]}
                    onValueChange={(value) => setMass2(value[0])}
                    min={0.5}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              )}

              {scenario !== "pulley" && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Força aplicada <span className="text-slate-500">(F)</span>
                    </label>
                    <span className="text-sm font-bold text-red-700">
                      {formatUnit(force, "N")}
                    </span>
                  </div>
                  <Slider
                    value={[force]}
                    onValueChange={(value) => setForce(value[0])}
                    min={-50}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>
              )}

              {(scenario === "friction" || scenario === "two_blocks") && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Coef. de atrito <span className="text-slate-500">(μ)</span>
                    </label>
                    <span className="text-sm font-bold text-orange-700">
                      {formatNumber(frictionCoef)}
                    </span>
                  </div>
                  <Slider
                    value={[frictionCoef]}
                    onValueChange={(value) => setFrictionCoef(value[0])}
                    min={0}
                    max={1}
                    step={0.05}
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
                    Força resultante <MathFormula inline formula={String.raw`\Sigma F`} />
                  </>
                }
                value={formatUnit(netForce, "N")}
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

              <MetricCard
                label={
                  <>
                    Velocidade <MathFormula inline formula={String.raw`v`} />
                  </>
                }
                value={formatUnit(velocityRef.current, "m/s")}
                valueClassName="text-green-700"
              />

              {scenario !== "pulley" && (
                <MetricCard
                  label={
                    <>
                      Normal <MathFormula inline formula={String.raw`N`} />
                    </>
                  }
                  value={formatUnit(normalForce, "N")}
                />
              )}

              {(scenario === "friction" || scenario === "two_blocks") && (
                <MetricCard
                  label={
                    <>
                      Atrito <MathFormula inline formula={String.raw`F_{at}`} />
                    </>
                  }
                  value={formatUnit(frictionForce, "N")}
                  valueClassName="text-orange-700"
                />
              )}

              {scenario === "two_blocks" && (
                <MetricCard
                  label={<>Força de contato</>}
                  value={formatUnit(contactForce, "N")}
                  valueClassName="text-purple-700"
                />
              )}

              {scenario === "pulley" && (
                <MetricCard
                  label={
                    <>
                      Tração <MathFormula inline formula={String.raw`T`} />
                    </>
                  }
                  value={formatUnit(appliedTension, "N")}
                  valueClassName="text-sky-700"
                />
              )}
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
                Diagrama de Corpo Livre
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <CalcMiniCard
                title="Eixo x"
                values={[
                  ["ΣF_x", formatUnit(netForce, "N")],
                  ["a_x", formatUnit(acceleration, "m/s²")],
                ]}
              />
              <CalcMiniCard
                title="Eixo y"
                values={[
                  ["ΣF_y", scenario === "pulley" ? "variável" : "0,00 N"],
                  ["a_y", scenario === "pulley" ? formatUnit(acceleration, "m/s²") : "0,00 m/s²"],
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
              {scenario === "horizontal" && (
                <>
                  <CalcSection
                    title="Superfície horizontal sem atrito"
                    formulas={[
                      String.raw`N = P = mg = ${formatNumber(mass)} \cdot ${formatNumber(G)} = ${formatNumber(normalForce)} \,\text{N}`,
                      String.raw`\Sigma F_x = F = ${formatNumber(force)} \,\text{N}`,
                      String.raw`a = \frac{F}{m} = \frac{${formatNumber(force)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`,
                    ]}
                  />
                </>
              )}

              {scenario === "friction" && (
                <>
                  <CalcSection
                    title="Superfície horizontal com atrito"
                    formulas={[
                      String.raw`N = P = mg = ${formatNumber(mass)} \cdot ${formatNumber(G)} = ${formatNumber(normalForce)} \,\text{N}`,
                      String.raw`F_{at} = \mu N = ${formatNumber(frictionCoef)} \cdot ${formatNumber(normalForce)} = ${formatNumber(frictionForce)} \,\text{N}`,
                      String.raw`\Sigma F_x = F - F_{at} = ${formatNumber(force)} - ${formatNumber(frictionForce)} = ${formatNumber(netForce)} \,\text{N}`,
                      String.raw`a = \frac{\Sigma F_x}{m} = \frac{${formatNumber(netForce)}}{${formatNumber(mass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`,
                    ]}
                  />
                </>
              )}

              {scenario === "two_blocks" && (
                <>
                  <CalcSection
                    title="Dois blocos em contato"
                    formulas={[
                      String.raw`m_{sistema} = m_1 + m_2 = ${formatNumber(mass)} + ${formatNumber(mass2)} = ${formatNumber(systemMass)} \,\text{kg}`,
                      String.raw`F_{at} = \mu (m_1+m_2)g = ${formatNumber(frictionCoef)} \cdot ${formatNumber(systemMass)} \cdot ${formatNumber(G)} = ${formatNumber(frictionForce)} \,\text{N}`,
                      String.raw`\Sigma F = F - F_{at} = ${formatNumber(force)} - ${formatNumber(frictionForce)} = ${formatNumber(netForce)} \,\text{N}`,
                      String.raw`a = \frac{\Sigma F}{m_1+m_2} = \frac{${formatNumber(netForce)}}{${formatNumber(systemMass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`,
                      String.raw`F_{contato} = m_2 a = ${formatNumber(mass2)} \cdot ${formatNumber(acceleration)} = ${formatNumber(contactForce)} \,\text{N}`,
                    ]}
                  />
                </>
              )}

              {scenario === "pulley" && (
                <>
                  <CalcSection
                    title="Sistema com polia"
                    formulas={[
                      String.raw`\Sigma F = (m_2 - m_1)g = (${formatNumber(mass2)} - ${formatNumber(mass)}) \cdot ${formatNumber(G)} = ${formatNumber(netForce)} \,\text{N}`,
                      String.raw`a = \frac{(m_2-m_1)g}{m_1+m_2} = \frac{${formatNumber(netForce)}}{${formatNumber(systemMass)}} = ${formatNumber(acceleration)} \,\text{m/s^2}`,
                      String.raw`T = m_1(g+a) = ${formatNumber(mass)} \cdot (${formatNumber(G)} + ${formatNumber(acceleration)}) = ${formatNumber(appliedTension)} \,\text{N}`,
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

function getScenarioLabel(scenario: Scenario) {
  switch (scenario) {
    case "horizontal":
      return "SUPERFÍCIE HORIZONTAL";
    case "friction":
      return "SUPERFÍCIE COM ATRITO";
    case "two_blocks":
      return "DOIS BLOCOS EM CONTATO";
    case "pulley":
      return "SISTEMA COM POLIA";
    default:
      return "LEIS DE NEWTON";
  }
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
  const headlen = 10;
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const dx = toX - fromX;
  const dy = toY - fromY;
  const length = Math.sqrt(dx * dx + dy * dy);

  if (length < 5) return;

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
    toX - headlen * Math.cos(angle - Math.PI / 6),
    toY - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / 6),
    toY - headlen * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  ctx.font = "bold 11px Arial";
  ctx.fillText(label, toX + 8, toY - 4);
}

function drawBlock(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  stroke: string,
  label: string
) {
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 3;
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);

  ctx.fillStyle = "white";
  ctx.font = "bold 14px Arial";
  ctx.textAlign = "center";
  ctx.fillText(label, x + width / 2, y + height / 2 + 5);
  ctx.textAlign = "start";
}

function drawSingleBlockScene(
  ctx: CanvasRenderingContext2D,
  width: number,
  centerY: number,
  mass: number,
  force: number,
  frictionForce: number,
  normalForce: number,
  weight: number,
  position: number,
  velocity: number
) {
  const scale = 45;
  const blockWidth = 70;
  const blockHeight = 50;
  const x = clamp(100 + position * scale, 40, width - blockWidth - 40);
  const y = centerY;

  drawBlock(ctx, x, y, blockWidth, blockHeight, "#3b82f6", "#1d4ed8", `${formatNumber(mass)}kg`);

  const cx = x + blockWidth / 2;
  const cy = y + blockHeight / 2;

  if (Math.abs(force) > 0.1) {
    drawLabeledArrow(ctx, cx, cy, cx + force * 3.5, cy, "#ef4444", "F");
  }

  if (Math.abs(frictionForce) > 0.1) {
    const dir = Math.sign(force || velocity || 1);
    drawLabeledArrow(
      ctx,
      cx,
      y + blockHeight,
      cx - dir * Math.abs(frictionForce) * 3.5,
      y + blockHeight,
      "#d97706",
      "Fat"
    );
  }

  drawLabeledArrow(ctx, cx, y + blockHeight, cx, y + blockHeight - normalForce * 1.6, "#16a34a", "N");
  drawLabeledArrow(ctx, cx, y + blockHeight, cx, y + blockHeight + weight * 1.6, "#16a34a", "P");
}

function drawTwoBlocksScene(
  ctx: CanvasRenderingContext2D,
  width: number,
  centerY: number,
  m1: number,
  m2: number,
  force: number,
  frictionForce: number,
  contactForce: number,
  position: number,
  velocity: number
) {
  const scale = 40;
  const blockWidth1 = 70;
  const blockWidth2 = 60;
  const blockHeight = 50;
  const baseX = clamp(100 + position * scale, 40, width - 220);
  const y = centerY;

  drawBlock(ctx, baseX, y, blockWidth1, blockHeight, "#3b82f6", "#1d4ed8", "m₁");
  drawBlock(ctx, baseX + blockWidth1 + 10, y, blockWidth2, blockHeight, "#8b5cf6", "#6d28d9", "m₂");

  const cx1 = baseX + blockWidth1 / 2;
  const cx2 = baseX + blockWidth1 + 10 + blockWidth2 / 2;
  const cy = y + blockHeight / 2;

  if (Math.abs(force) > 0.1) {
    drawLabeledArrow(ctx, cx1, cy, cx1 + force * 3.2, cy, "#ef4444", "F");
  }

  if (Math.abs(contactForce) > 0.1) {
    drawLabeledArrow(ctx, baseX + blockWidth1, cy, baseX + blockWidth1 + 10 + contactForce * 4, cy, "#7c3aed", "Fc");
  }

  if (Math.abs(frictionForce) > 0.1) {
    const dir = Math.sign(force || velocity || 1);
    drawLabeledArrow(
      ctx,
      baseX + 60,
      y + blockHeight,
      baseX + 60 - dir * Math.abs(frictionForce) * 1.5,
      y + blockHeight,
      "#d97706",
      "Fat"
    );
  }
}

function drawPulleyScene(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  m1: number,
  m2: number,
  tension: number,
  acceleration: number,
  position: number
) {
  const pulleyX = width / 2;
  const pulleyY = 90;
  const pulleyR = 28;

  ctx.beginPath();
  ctx.arc(pulleyX, pulleyY, pulleyR, 0, Math.PI * 2);
  ctx.fillStyle = "#cbd5e1";
  ctx.fill();
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 3;
  ctx.stroke();

  const travel = clamp(position * 25, -70, 70);

  const leftY = 170 + travel;
  const rightY = 170 - travel;

  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(pulleyX - pulleyR, pulleyY);
  ctx.lineTo(pulleyX - pulleyR, leftY);
  ctx.moveTo(pulleyX + pulleyR, pulleyY);
  ctx.lineTo(pulleyX + pulleyR, rightY);
  ctx.stroke();

  drawBlock(ctx, pulleyX - 90, leftY, 44, 44, "#3b82f6", "#1d4ed8", "m₁");
  drawBlock(ctx, pulleyX + 46, rightY, 44, 44, "#8b5cf6", "#6d28d9", "m₂");

  drawLabeledArrow(ctx, pulleyX - 68, leftY, pulleyX - 68, leftY - tension * 1.6, "#0ea5e9", "T");
  drawLabeledArrow(ctx, pulleyX + 68, rightY, pulleyX + 68, rightY - tension * 1.6, "#0ea5e9", "T");

  drawLabeledArrow(ctx, pulleyX - 68, leftY + 44, pulleyX - 68, leftY + 44 + m1 * G * 1.4, "#16a34a", "P₁");
  drawLabeledArrow(ctx, pulleyX + 68, rightY + 44, pulleyX + 68, rightY + 44 + m2 * G * 1.4, "#16a34a", "P₂");

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`a = ${formatNumber(acceleration)} m/s²`, pulleyX - 45, pulleyY + 70);
}
