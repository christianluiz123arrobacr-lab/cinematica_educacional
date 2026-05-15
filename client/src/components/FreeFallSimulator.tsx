import React, { useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { MathFormula } from "@/components/MathFormula";

interface FreeFallSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

type ClassificationData = {
  label: string;
  description: string;
  className: string;
};

type ApexData = {
  exists: boolean;
  t: number | null;
  h: number;
  reason: string;
};

type ImpactData = {
  t: number;
  v: number;
  speed: number;
};

const TWO_PI = 2 * Math.PI;

const DEFAULT_HEIGHT = 80;
const DEFAULT_INITIAL_VELOCITY = 0;
const DEFAULT_GRAVITY = 9.8;
const DEFAULT_SIM_SPEED = 0.75;

const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value));
};

const formatNumber = (value: number, digits = 2) => {
  if (!Number.isFinite(value)) return "—";

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const formatUnit = (value: number, unit: string, digits = 2) => {
  return `${formatNumber(value, digits)} ${unit}`;
};

export const FreeFallSimulator: React.FC<FreeFallSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  const [height0, setHeight0] = useState(DEFAULT_HEIGHT);
  const [v0, setV0] = useState(DEFAULT_INITIAL_VELOCITY);
  const [gravity, setGravity] = useState(DEFAULT_GRAVITY);

  const [time, setTime] = useState(0);
  const [simSpeed, setSimSpeed] = useState(DEFAULT_SIM_SPEED);

  const [showGraphs, setShowGraphs] = useState(true);
  const [showVectors, setShowVectors] = useState(true);
  const [showApex, setShowApex] = useState(true);
  const [showTable, setShowTable] = useState(true);

  const impactData = useMemo<ImpactData>(() => {
    const discriminant = v0 ** 2 + 2 * gravity * height0;
    const tImpact = (v0 + Math.sqrt(discriminant)) / gravity;
    const vImpact = v0 - gravity * tImpact;

    return {
      t: Math.max(tImpact, 0.1),
      v: vImpact,
      speed: Math.abs(vImpact),
    };
  }, [height0, v0, gravity]);

  const effectiveTime = useMemo(() => {
    return clamp(time, 0, impactData.t);
  }, [time, impactData.t]);

  const height = useMemo(() => {
    const rawHeight =
      height0 + v0 * effectiveTime - (gravity * effectiveTime ** 2) / 2;

    return Math.max(0, rawHeight);
  }, [height0, v0, gravity, effectiveTime]);

  const velocity = useMemo(() => {
    return v0 - gravity * effectiveTime;
  }, [v0, gravity, effectiveTime]);

  const displacement = useMemo(() => {
    return height - height0;
  }, [height, height0]);

  const fallenDistance = useMemo(() => {
    return height0 - height;
  }, [height0, height]);

  const apexData = useMemo<ApexData>(() => {
    if (v0 <= 0) {
      return {
        exists: false,
        t: null,
        h: height0,
        reason:
          "Como a velocidade inicial não é para cima, não há ponto de altura máxima acima da posição inicial.",
      };
    }

    const tApex = v0 / gravity;
    const hApex = height0 + v0 ** 2 / (2 * gravity);

    return {
      exists: true,
      t: tApex,
      h: hApex,
      reason:
        tApex <= impactData.t
          ? "O corpo sobe, para instantaneamente no topo e depois começa a cair."
          : "O topo existe matematicamente, mas ficou fora do intervalo físico considerado.",
    };
  }, [height0, v0, gravity, impactData.t]);

  const maxHeight = useMemo(() => {
    return Math.max(height0, apexData.h, height, 1);
  }, [height0, apexData.h, height]);

  const classification = useMemo(() => {
    return classifyFreeFall({
      velocity,
      v0,
      gravity,
      time: effectiveTime,
      apexData,
      impactTime: impactData.t,
    });
  }, [velocity, v0, gravity, effectiveTime, apexData, impactData.t]);

  const isImpacted = effectiveTime >= impactData.t - 0.03;

  const resetLocal = () => {
    setHeight0(DEFAULT_HEIGHT);
    setV0(DEFAULT_INITIAL_VELOCITY);
    setGravity(DEFAULT_GRAVITY);
    setTime(0);
    setSimSpeed(DEFAULT_SIM_SPEED);
    setShowGraphs(true);
    setShowVectors(true);
    setShowApex(true);
    setShowTable(true);
    lastFrameRef.current = 0;
  };

  useEffect(() => {
    resetLocal();
  }, [resetTrigger]);

  useEffect(() => {
    setTime(0);
    lastFrameRef.current = 0;
  }, [height0, v0, gravity]);

  useEffect(() => {
    if (!isRunning) {
      lastFrameRef.current = 0;
      return;
    }

    const animate = (now: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = now;
      }

      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05);
      lastFrameRef.current = now;

      setTime((previous) => {
        const next = previous + dt * simSpeed;
        return next > impactData.t ? 0 : next;
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, simSpeed, impactData.t]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawFreeFallCanvas({
      ctx,
      width: canvas.width,
      height: canvas.height,
      height0,
      v0,
      gravity,
      currentHeight: height,
      velocity,
      time: effectiveTime,
      impactData,
      apexData,
      maxHeight,
      showGraphs,
      showVectors,
      showApex,
      isImpacted,
    });
  }, [
    height0,
    v0,
    gravity,
    height,
    velocity,
    effectiveTime,
    impactData,
    apexData,
    maxHeight,
    showGraphs,
    showVectors,
    showApex,
    isImpacted,
  ]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Controles da Queda Livre
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste altura inicial, velocidade inicial e gravidade.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <ControlRow
                label="Tempo atual"
                symbol="t"
                value={formatUnit(effectiveTime, "s")}
              >
                <Slider
                  value={[effectiveTime]}
                  onValueChange={(value) => setTime(value[0])}
                  min={0}
                  max={impactData.t}
                  step={0.01}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Velocidade visual"
                symbol="sim"
                value={`${formatNumber(simSpeed, 2)}x`}
              >
                <Slider
                  value={[simSpeed]}
                  onValueChange={(value) => setSimSpeed(value[0])}
                  min={0.1}
                  max={3}
                  step={0.05}
                  className="w-full"
                />
              </ControlRow>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="mb-4 text-sm font-bold text-blue-900">
                  Corpo em queda
                </p>

                <div className="space-y-5">
                  <ControlRow
                    label="Altura inicial"
                    symbol="h₀"
                    value={formatUnit(height0, "m")}
                  >
                    <Slider
                      value={[height0]}
                      onValueChange={(value) => setHeight0(value[0])}
                      min={5}
                      max={250}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Velocidade inicial"
                    symbol="v₀"
                    value={formatUnit(v0, "m/s")}
                  >
                    <Slider
                      value={[v0]}
                      onValueChange={(value) => setV0(value[0])}
                      min={-50}
                      max={50}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Gravidade"
                    symbol="g"
                    value={formatUnit(gravity, "m/s²")}
                  >
                    <Slider
                      value={[gravity]}
                      onValueChange={(value) => setGravity(value[0])}
                      min={1}
                      max={25}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ToggleButton
                  active={showGraphs}
                  onClick={() => setShowGraphs((previous) => !previous)}
                >
                  Gráficos
                </ToggleButton>

                <ToggleButton
                  active={showVectors}
                  onClick={() => setShowVectors((previous) => !previous)}
                >
                  Vetores
                </ToggleButton>

                <ToggleButton
                  active={showApex}
                  onClick={() => setShowApex((previous) => !previous)}
                >
                  Altura máx.
                </ToggleButton>

                <ToggleButton
                  active={showTable}
                  onClick={() => setShowTable((previous) => !previous)}
                >
                  Tabela
                </ToggleButton>

                <button
                  type="button"
                  onClick={resetLocal}
                  className="col-span-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Restaurar padrão
                </button>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Resultados principais
              </h4>
            </div>

            <div className="space-y-3 p-5">
              <MetricCard
                label="Estado atual"
                value={classification.label}
                description={classification.description}
                valueClassName={classification.className}
              />

              <MetricCard
                label="Altura atual"
                value={formatUnit(height, "m")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label="Velocidade atual"
                value={formatUnit(velocity, "m/s")}
                valueClassName={velocity >= 0 ? "text-emerald-700" : "text-red-700"}
              />

              <MetricCard
                label="Distância caída"
                value={formatUnit(fallenDistance, "m")}
              />

              <MetricCard
                label="Tempo até o impacto"
                value={formatUnit(impactData.t, "s")}
                valueClassName="text-amber-700"
              />

              <MetricCard
                label="Velocidade de impacto"
                value={formatUnit(impactData.v, "m/s")}
                description={`Módulo: ${formatUnit(impactData.speed, "m/s")}`}
                valueClassName="text-red-700"
              />

              <MetricCard
                label="Altura máxima"
                value={formatUnit(apexData.h, "m")}
                description={apexData.reason}
                valueClassName={apexData.exists ? "text-purple-700" : "text-slate-700"}
              />
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Visualização da Queda
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                Movimento vertical sob aceleração constante da gravidade.
              </p>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="overflow-x-auto">
                  <canvas
                    ref={canvasRef}
                    width={980}
                    height={560}
                    className="mx-auto w-full min-w-[860px] rounded-lg border border-slate-200 bg-slate-50"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos rápidos
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <CalcMiniCard
                title="Dados iniciais"
                values={[
                  ["h₀", formatUnit(height0, "m")],
                  ["v₀", formatUnit(v0, "m/s")],
                  ["g", formatUnit(gravity, "m/s²")],
                  ["t", formatUnit(effectiveTime, "s")],
                ]}
              />

              <CalcMiniCard
                title="Estado atual"
                values={[
                  ["h", formatUnit(height, "m")],
                  ["v", formatUnit(velocity, "m/s")],
                  ["Δh", formatUnit(displacement, "m")],
                  ["distância caída", formatUnit(fallenDistance, "m")],
                ]}
              />

              <CalcMiniCard
                title="Impacto"
                values={[
                  ["t impacto", formatUnit(impactData.t, "s")],
                  ["v impacto", formatUnit(impactData.v, "m/s")],
                  ["módulo", formatUnit(impactData.speed, "m/s")],
                  ["atingiu o chão?", isImpacted ? "sim" : "não"],
                ]}
              />

              <CalcMiniCard
                title="Gráficos"
                values={[
                  ["h × t", "parábola"],
                  ["v × t", "reta decrescente"],
                  ["a × t", "reta horizontal"],
                  ["área em v × t", "deslocamento vertical"],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Equações da Queda Livre
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <FormulaSection
                title="Função horária da altura"
                formulas={[
                  String.raw`h = h_0 + v_0t - \frac{gt^2}{2}`,
                  String.raw`h = ${formatNumber(height0, 2)} + ${formatNumber(
                    v0,
                    2
                  )}\cdot ${formatNumber(effectiveTime, 2)} - \frac{${formatNumber(
                    gravity,
                    2
                  )}\cdot ${formatNumber(effectiveTime, 2)}^2}{2}`,
                  String.raw`h = ${formatNumber(height, 2)}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Função horária da velocidade"
                formulas={[
                  String.raw`v = v_0 - gt`,
                  String.raw`v = ${formatNumber(v0, 2)} - ${formatNumber(
                    gravity,
                    2
                  )}\cdot ${formatNumber(effectiveTime, 2)}`,
                  String.raw`v = ${formatNumber(velocity, 2)}\,\text{m/s}`,
                ]}
              />

              <FormulaSection
                title="Velocidade de impacto"
                formulas={[
                  String.raw`v^2 = v_0^2 + 2g h_0`,
                  String.raw`|v_{\text{impacto}}| = \sqrt{${formatNumber(
                    v0,
                    2
                  )}^2 + 2\cdot ${formatNumber(gravity, 2)}\cdot ${formatNumber(
                    height0,
                    2
                  )}}`,
                  String.raw`|v_{\text{impacto}}| = ${formatNumber(
                    impactData.speed,
                    2
                  )}\,\text{m/s}`,
                ]}
              />

              <FormulaSection
                title="Tempo de impacto"
                formulas={[
                  String.raw`0 = h_0 + v_0t - \frac{gt^2}{2}`,
                  String.raw`t_{\text{impacto}} = \frac{v_0 + \sqrt{v_0^2 + 2gh_0}}{g}`,
                  String.raw`t_{\text{impacto}} = ${formatNumber(
                    impactData.t,
                    3
                  )}\,\text{s}`,
                ]}
              />

              <FormulaSection
                title="Altura máxima"
                formulas={[
                  String.raw`v = 0`,
                  String.raw`0 = v_0 - gt`,
                  String.raw`t_{\text{topo}} = \frac{v_0}{g}`,
                  apexData.exists && apexData.t !== null
                    ? String.raw`t_{\text{topo}} = ${formatNumber(
                        apexData.t,
                        3
                      )}\,\text{s}`
                    : String.raw`\text{Não há subida inicial, então não há topo acima da posição inicial.}`,
                  String.raw`h_{\text{máx}} = ${formatNumber(
                    apexData.h,
                    3
                  )}\,\text{m}`,
                ]}
              />

              <FormulaSection
                title="Convenção de sinais"
                formulas={[
                  String.raw`\text{Sentido positivo: para cima.}`,
                  String.raw`\text{Velocidade positiva: corpo subindo.}`,
                  String.raw`\text{Velocidade negativa: corpo descendo.}`,
                  String.raw`\text{Aceleração da gravidade: }a=-g.`,
                ]}
              />
            </div>
          </Card>

          {showTable && (
            <Card className="border border-slate-200 shadow-sm">
              <div className="border-b border-slate-200 px-5 py-4">
                <h4 className="text-base font-bold text-slate-900">
                  Tabela de valores
                </h4>
              </div>

              <ValueTable
                height0={height0}
                v0={v0}
                gravity={gravity}
                impactTime={impactData.t}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

function classifyFreeFall({
  velocity,
  v0,
  gravity,
  time,
  apexData,
  impactTime,
}: {
  velocity: number;
  v0: number;
  gravity: number;
  time: number;
  apexData: ApexData;
  impactTime: number;
}): ClassificationData {
  if (time >= impactTime - 0.03) {
    return {
      label: "Impacto",
      description: "O corpo chegou ao solo. Fim da queda, parabéns ao chão por vencer.",
      className: "text-red-700",
    };
  }

  if (Math.abs(velocity) < 0.08 && apexData.exists) {
    return {
      label: "Repouso instantâneo no topo",
      description:
        "A velocidade é zero apenas neste instante. Logo depois, o corpo começa a descer.",
      className: "text-purple-700",
    };
  }

  if (velocity > 0) {
    return {
      label: "Subida retardada",
      description:
        "O corpo ainda está subindo, mas a gravidade reduz o módulo da velocidade.",
      className: "text-amber-700",
    };
  }

  if (Math.abs(v0) < 1e-9 && Math.abs(time) < 1e-9) {
    return {
      label: "Queda livre pura",
      description:
        "O corpo parte do repouso e passa a acelerar para baixo pela gravidade.",
      className: "text-blue-700",
    };
  }

  return {
    label: "Descida acelerada",
    description:
      "O corpo está descendo e o módulo da velocidade aumenta com o tempo.",
    className: "text-emerald-700",
  };
}

function drawFreeFallCanvas({
  ctx,
  width,
  height,
  height0,
  v0,
  gravity,
  currentHeight,
  velocity,
  time,
  impactData,
  apexData,
  maxHeight,
  showGraphs,
  showVectors,
  showApex,
  isImpacted,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  height0: number;
  v0: number;
  gravity: number;
  currentHeight: number;
  velocity: number;
  time: number;
  impactData: ImpactData;
  apexData: ApexData;
  maxHeight: number;
  showGraphs: boolean;
  showVectors: boolean;
  showApex: boolean;
  isImpacted: boolean;
}) {
  drawCanvasBackground(ctx, width, height);

  drawFallScene({
    ctx,
    width,
    height0,
    v0,
    gravity,
    currentHeight,
    velocity,
    time,
    impactData,
    apexData,
    maxHeight,
    showVectors,
    showApex,
    isImpacted,
  });

  drawHUD({
    ctx,
    height0,
    v0,
    gravity,
    currentHeight,
    velocity,
    time,
    impactData,
    apexData,
  });

  if (showGraphs) {
    drawHTGraph({
      ctx,
      x: 30,
      y: 305,
      width: 290,
      height: 215,
      height0,
      v0,
      gravity,
      time,
      impactTime: impactData.t,
      maxHeight,
    });

    drawVTGraph({
      ctx,
      x: 345,
      y: 305,
      width: 290,
      height: 215,
      v0,
      gravity,
      time,
      impactTime: impactData.t,
      impactVelocity: impactData.v,
    });

    drawATGraph({
      ctx,
      x: 660,
      y: 305,
      width: 290,
      height: 215,
      gravity,
      time,
      impactTime: impactData.t,
    });
  }
}

function drawCanvasBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  for (let x = 0; x <= width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawFallScene({
  ctx,
  width,
  height0,
  v0,
  gravity,
  currentHeight,
  velocity,
  time,
  impactData,
  apexData,
  maxHeight,
  showVectors,
  showApex,
  isImpacted,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height0: number;
  v0: number;
  gravity: number;
  currentHeight: number;
  velocity: number;
  time: number;
  impactData: ImpactData;
  apexData: ApexData;
  maxHeight: number;
  showVectors: boolean;
  showApex: boolean;
  isImpacted: boolean;
}) {
  const top = 45;
  const groundY = 255;
  const objectX = width * 0.58;
  const rulerX = 100;

  const sceneMaxHeight = Math.max(maxHeight * 1.1, 10);

  const heightToY = (h: number) => {
    return groundY - (h / sceneMaxHeight) * (groundY - top);
  };

  drawGround(ctx, 55, width - 55, groundY);
  drawRuler(ctx, rulerX, top, groundY, sceneMaxHeight, heightToY);

  const initialY = heightToY(height0);
  const objectY = heightToY(currentHeight);

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(rulerX + 24, initialY);
  ctx.lineTo(width - 80, initialY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#2563eb";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`h₀ = ${formatNumber(height0, 1)} m`, rulerX + 32, initialY - 8);

  if (showApex && apexData.exists && apexData.t !== null) {
    const apexY = heightToY(apexData.h);

    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(rulerX + 24, apexY);
    ctx.lineTo(width - 80, apexY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#7c3aed";
    ctx.font = "bold 12px Arial";
    ctx.fillText(
      `h máx. = ${formatNumber(apexData.h, 1)} m`,
      rulerX + 32,
      apexY - 8
    );
  }

  drawFallingBody({
    ctx,
    x: objectX,
    y: objectY,
    velocity,
    isImpacted,
  });

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 6]);
  ctx.beginPath();
  ctx.moveTo(objectX, top);
  ctx.lineTo(objectX, groundY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`h = ${formatNumber(currentHeight, 1)} m`, objectX + 28, objectY + 5);

  if (showVectors) {
    drawVerticalVector({
      ctx,
      x: objectX + 55,
      y: objectY,
      value: velocity,
      color: "#16a34a",
      label: `v = ${formatNumber(velocity, 1)} m/s`,
      scale: 3,
    });

    drawVerticalVector({
      ctx,
      x: objectX + 100,
      y: objectY,
      value: -gravity,
      color: "#dc2626",
      label: `g = ${formatNumber(gravity, 1)} m/s²`,
      scale: 7,
    });
  }

  if (isImpacted) {
    ctx.fillStyle = "rgba(220,38,38,0.10)";
    ctx.beginPath();
    ctx.ellipse(objectX, groundY + 5, 54, 11, 0, 0, TWO_PI);
    ctx.fill();

    ctx.fillStyle = "#dc2626";
    ctx.font = "bold 13px Arial";
    ctx.fillText("impacto", objectX - 24, groundY + 35);
  }

  ctx.fillStyle = "#475569";
  ctx.font = "12px Arial";
  ctx.fillText(
    `t impacto = ${formatNumber(impactData.t, 2)} s`,
    width - 245,
    70
  );
  ctx.fillText(
    `v impacto = ${formatNumber(impactData.v, 2)} m/s`,
    width - 245,
    92
  );
}

function drawGround(
  ctx: CanvasRenderingContext2D,
  left: number,
  right: number,
  y: number
) {
  ctx.fillStyle = "#334155";
  roundRect(ctx, left, y, right - left, 34, 8);
  ctx.fill();

  ctx.strokeStyle = "#22c55e";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(left, y);
  ctx.lineTo(right, y);
  ctx.stroke();

  ctx.fillStyle = "#64748b";
  ctx.font = "bold 12px Arial";
  ctx.fillText("solo", left + 8, y + 24);
}

function drawRuler(
  ctx: CanvasRenderingContext2D,
  x: number,
  top: number,
  groundY: number,
  sceneMaxHeight: number,
  heightToY: (h: number) => number
) {
  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, top);
  ctx.lineTo(x, groundY);
  ctx.stroke();

  ctx.fillStyle = "#334155";
  ctx.font = "11px Arial";

  const ticks = 5;

  for (let i = 0; i <= ticks; i++) {
    const h = (sceneMaxHeight * i) / ticks;
    const y = heightToY(h);

    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 8, y);
    ctx.lineTo(x + 8, y);
    ctx.stroke();

    ctx.fillText(`${formatNumber(h, 0)} m`, x - 52, y + 4);
  }
}

function drawFallingBody({
  ctx,
  x,
  y,
  velocity,
  isImpacted,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  velocity: number;
  isImpacted: boolean;
}) {
  ctx.save();

  if (isImpacted) {
    ctx.translate(x, y - 4);
    ctx.scale(1.3, 0.45);
  } else {
    ctx.translate(x, y);
  }

  ctx.fillStyle = "#2563eb";
  ctx.beginPath();
  ctx.arc(0, 0, 17, 0, TWO_PI);
  ctx.fill();

  ctx.strokeStyle = "#dbeafe";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#93c5fd";
  ctx.beginPath();
  ctx.arc(-6, -7, 5, 0, TWO_PI);
  ctx.fill();

  ctx.restore();

  ctx.fillStyle = "#2563eb";
  ctx.font = "bold 12px Arial";
  ctx.fillText(velocity >= 0 ? "subindo" : "descendo", x - 24, y - 25);
}

function drawVerticalVector({
  ctx,
  x,
  y,
  value,
  color,
  label,
  scale,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  value: number;
  color: string;
  label: string;
  scale: number;
}) {
  const direction = value >= 0 ? -1 : 1;
  const length = Math.max(28, Math.min(88, Math.abs(value) * scale));

  drawArrow(ctx, x, y, x, y + direction * length, color, label);
}

function drawHUD({
  ctx,
  height0,
  v0,
  gravity,
  currentHeight,
  velocity,
  time,
  impactData,
  apexData,
}: {
  ctx: CanvasRenderingContext2D;
  height0: number;
  v0: number;
  gravity: number;
  currentHeight: number;
  velocity: number;
  time: number;
  impactData: ImpactData;
  apexData: ApexData;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, 24, 18, 390, 170, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText("QUEDA LIVRE / LANÇAMENTO VERTICAL", 42, 44);

  ctx.font = "12px Arial";
  ctx.fillText(`t = ${formatNumber(time, 2)} s`, 42, 68);
  ctx.fillText(
    `h = ${formatNumber(height0, 1)} + ${formatNumber(v0, 1)}t - (${formatNumber(
      gravity,
      1
    )}t²)/2`,
    42,
    90
  );
  ctx.fillText(`h = ${formatNumber(currentHeight, 2)} m`, 42, 112);
  ctx.fillText(`v = ${formatNumber(v0, 1)} - ${formatNumber(gravity, 1)}t`, 42, 134);
  ctx.fillText(`v = ${formatNumber(velocity, 2)} m/s`, 42, 156);

  ctx.fillStyle = "#dc2626";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`impacto: ${formatNumber(impactData.t, 2)} s`, 235, 134);

  if (apexData.exists && apexData.t !== null) {
    ctx.fillStyle = "#7c3aed";
    ctx.fillText(`topo: ${formatNumber(apexData.t, 2)} s`, 235, 156);
  }
}

function drawHTGraph({
  ctx,
  x,
  y,
  width,
  height,
  height0,
  v0,
  gravity,
  time,
  impactTime,
  maxHeight,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  height0: number;
  v0: number;
  gravity: number;
  time: number;
  impactTime: number;
  maxHeight: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "h × t",
    xLabel: "t",
    yLabel: "h",
  });

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / impactTime) * (plot.right - plot.left);
  };

  const hy = (h: number) => {
    return plot.bottom - (h / Math.max(maxHeight * 1.1, 1)) * (plot.bottom - plot.top);
  };

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();

  const steps = 100;

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * impactTime;
    const h = Math.max(0, height0 + v0 * t - (gravity * t ** 2) / 2);

    if (i === 0) {
      ctx.moveTo(tx(t), hy(h));
    } else {
      ctx.lineTo(tx(t), hy(h));
    }
  }

  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawVTGraph({
  ctx,
  x,
  y,
  width,
  height,
  v0,
  gravity,
  time,
  impactTime,
  impactVelocity,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  v0: number;
  gravity: number;
  time: number;
  impactTime: number;
  impactVelocity: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "v × t",
    xLabel: "t",
    yLabel: "v",
  });

  const minV = Math.min(v0, impactVelocity, 0);
  const maxV = Math.max(v0, impactVelocity, 0);
  const padding = Math.max((maxV - minV) * 0.2, 2);

  const range = {
    min: minV - padding,
    max: maxV + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / impactTime) * (plot.right - plot.left);
  };

  const vy = (v: number) => {
    return (
      plot.bottom -
      ((v - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(plot.left, vy(0));
  ctx.lineTo(plot.right, vy(0));
  ctx.stroke();

  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), vy(v0));
  ctx.lineTo(tx(impactTime), vy(impactVelocity));
  ctx.stroke();

  const currentX = tx(time);
  const currentV = v0 - gravity * time;
  const zeroY = vy(0);
  const currentY = vy(currentV);

  ctx.fillStyle = "rgba(22,163,74,0.12)";
  ctx.fillRect(
    plot.left,
    Math.min(zeroY, currentY),
    currentX - plot.left,
    Math.abs(currentY - zeroY)
  );

  ctx.fillStyle = "#475569";
  ctx.font = "11px Arial";
  ctx.fillText("área = Δh", plot.left + 8, Math.min(zeroY, currentY) + 18);

  drawCurrentTimeLine(ctx, plot, currentX);
}

function drawATGraph({
  ctx,
  x,
  y,
  width,
  height,
  gravity,
  time,
  impactTime,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  gravity: number;
  time: number;
  impactTime: number;
}) {
  drawGraphPanel({
    ctx,
    x,
    y,
    width,
    height,
    title: "a × t",
    xLabel: "t",
    yLabel: "a",
  });

  const acceleration = -gravity;
  const minA = Math.min(acceleration, 0);
  const maxA = Math.max(acceleration, 0);
  const padding = Math.max((maxA - minA) * 0.2, 1);

  const range = {
    min: minA - padding,
    max: maxA + padding,
  };

  const plot = getPlotArea(x, y, width, height);

  const tx = (t: number) => {
    return plot.left + (t / impactTime) * (plot.right - plot.left);
  };

  const ay = (a: number) => {
    return (
      plot.bottom -
      ((a - range.min) / (range.max - range.min)) *
        (plot.bottom - plot.top)
    );
  };

  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(plot.left, ay(0));
  ctx.lineTo(plot.right, ay(0));
  ctx.stroke();

  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tx(0), ay(acceleration));
  ctx.lineTo(tx(impactTime), ay(acceleration));
  ctx.stroke();

  drawCurrentTimeLine(ctx, plot, tx(time));
}

function drawCurrentTimeLine(
  ctx: CanvasRenderingContext2D,
  plot: { left: number; right: number; top: number; bottom: number },
  currentX: number
) {
  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(currentX, plot.top);
  ctx.lineTo(currentX, plot.bottom);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawGraphPanel({
  ctx,
  x,
  y,
  width,
  height,
  title,
  xLabel,
  yLabel,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  xLabel: string;
  yLabel: string;
}) {
  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  roundRect(ctx, x, y, width, height, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Arial";
  ctx.fillText(title, x + 16, y + 24);

  const plot = getPlotArea(x, y, width, height);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {
    const gx = plot.left + (i / 4) * (plot.right - plot.left);

    ctx.beginPath();
    ctx.moveTo(gx, plot.top);
    ctx.lineTo(gx, plot.bottom);
    ctx.stroke();
  }

  for (let i = 0; i <= 4; i++) {
    const gy = plot.top + (i / 4) * (plot.bottom - plot.top);

    ctx.beginPath();
    ctx.moveTo(plot.left, gy);
    ctx.lineTo(plot.right, gy);
    ctx.stroke();
  }

  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(plot.left, plot.bottom);
  ctx.lineTo(plot.right, plot.bottom);
  ctx.moveTo(plot.left, plot.bottom);
  ctx.lineTo(plot.left, plot.top);
  ctx.stroke();

  ctx.fillStyle = "#475569";
  ctx.font = "bold 11px Arial";
  ctx.fillText(xLabel, plot.right + 6, plot.bottom + 4);
  ctx.fillText(yLabel, plot.left - 18, plot.top - 8);
}

function getPlotArea(x: number, y: number, width: number, height: number) {
  return {
    left: x + 42,
    right: x + width - 20,
    top: y + 42,
    bottom: y + height - 32,
  };
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string
) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const head = 9;

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
    toX - head * Math.cos(angle - Math.PI / 6),
    toY - head * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - head * Math.cos(angle + Math.PI / 6),
    toY - head * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  ctx.font = "bold 12px Arial";
  ctx.fillText(label, toX + 8, toY - 6);
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        active
          ? "border-indigo-300 bg-indigo-50 text-indigo-700"
          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

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
      <div className="mb-2 flex items-center justify-between gap-4">
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
  description,
  valueClassName = "text-slate-900",
}: {
  label: React.ReactNode;
  value: string;
  description?: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-lg font-bold ${valueClassName}`}>{value}</p>

      {description && (
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      )}
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

function FormulaSection({
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
          <MathFormula key={`${formula}-${index}`} formula={formula} />
        ))}
      </div>
    </div>
  );
}

function ValueTable({
  height0,
  v0,
  gravity,
  impactTime,
}: {
  height0: number;
  v0: number;
  gravity: number;
  impactTime: number;
}) {
  const rows = useMemo(() => {
    const times = [
      0,
      impactTime * 0.25,
      impactTime * 0.5,
      impactTime * 0.75,
      impactTime,
    ];

    return times.map((t) => {
      const h = Math.max(0, height0 + v0 * t - (gravity * t ** 2) / 2);
      const v = v0 - gravity * t;

      return {
        t,
        h,
        v,
        a: -gravity,
      };
    });
  }, [height0, v0, gravity, impactTime]);

  return (
    <div className="overflow-x-auto p-5">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left font-bold text-slate-700">
              Tempo
            </th>

            <th className="px-4 py-3 text-left font-bold text-blue-700">
              Altura
            </th>

            <th className="px-4 py-3 text-left font-bold text-emerald-700">
              Velocidade
            </th>

            <th className="px-4 py-3 text-left font-bold text-red-700">
              Aceleração
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.t} className="border-b border-slate-100">
              <td className="px-4 py-3 text-slate-700">
                {formatUnit(row.t, "s")}
              </td>

              <td className="px-4 py-3 font-semibold text-blue-700">
                {formatUnit(row.h, "m")}
              </td>

              <td className="px-4 py-3 font-semibold text-emerald-700">
                {formatUnit(row.v, "m/s")}
              </td>

              <td className="px-4 py-3 font-semibold text-red-700">
                {formatUnit(row.a, "m/s²")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

export default FreeFallSimulator;
