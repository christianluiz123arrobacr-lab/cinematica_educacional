import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

export const ForceBalanceSimulator: React.FC = () => {
  const [force1, setForce1] = useState(50);
  const [force2, setForce2] = useState(50);
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(180);

  const rad1 = useMemo(() => (angle1 * Math.PI) / 180, [angle1]);
  const rad2 = useMemo(() => (angle2 * Math.PI) / 180, [angle2]);

  const fx1 = useMemo(() => force1 * Math.cos(rad1), [force1, rad1]);
  const fy1 = useMemo(() => force1 * Math.sin(rad1), [force1, rad1]);

  const fx2 = useMemo(() => force2 * Math.cos(rad2), [force2, rad2]);
  const fy2 = useMemo(() => force2 * Math.sin(rad2), [force2, rad2]);

  const resultantX = useMemo(() => fx1 + fx2, [fx1, fx2]);
  const resultantY = useMemo(() => fy1 + fy2, [fy1, fy2]);

  const resultantMagnitude = useMemo(() => {
    return Math.sqrt(resultantX ** 2 + resultantY ** 2);
  }, [resultantX, resultantY]);

  const resultantAngle = useMemo(() => {
    return (Math.atan2(resultantY, resultantX) * 180) / Math.PI;
  }, [resultantY, resultantX]);

  const isEquilibrium = resultantMagnitude < 0.1;

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Equilíbrio de Forças
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Ajuste intensidades e ângulos para observar a resultante e
                atingir o equilíbrio.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-red-200 bg-red-50/60 p-4">
                <h5 className="mb-4 text-sm font-bold uppercase tracking-wide text-red-700">
                  Força 1 — Vermelha
                </h5>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Intensidade <span className="text-slate-500">(F₁)</span>
                      </label>
                      <span className="text-sm font-bold text-red-700">
                        {formatUnit(force1, "N")}
                      </span>
                    </div>
                    <Slider
                      value={[force1]}
                      onValueChange={(value) => setForce1(value[0])}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Ângulo <span className="text-slate-500">(θ₁)</span>
                      </label>
                      <span className="text-sm font-bold text-red-700">
                        {formatNumber(angle1, 0)}°
                      </span>
                    </div>
                    <Slider
                      value={[angle1]}
                      onValueChange={(value) => setAngle1(value[0])}
                      min={0}
                      max={360}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                <h5 className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-700">
                  Força 2 — Azul
                </h5>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Intensidade <span className="text-slate-500">(F₂)</span>
                      </label>
                      <span className="text-sm font-bold text-blue-700">
                        {formatUnit(force2, "N")}
                      </span>
                    </div>
                    <Slider
                      value={[force2]}
                      onValueChange={(value) => setForce2(value[0])}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Ângulo <span className="text-slate-500">(θ₂)</span>
                      </label>
                      <span className="text-sm font-bold text-blue-700">
                        {formatNumber(angle2, 0)}°
                      </span>
                    </div>
                    <Slider
                      value={[angle2]}
                      onValueChange={(value) => setAngle2(value[0])}
                      min={0}
                      max={360}
                      step={5}
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
                    Componente em x{" "}
                    <MathFormula inline formula={String.raw`R_x`} />
                  </>
                }
                value={formatUnit(resultantX, "N")}
              />

              <MetricCard
                label={
                  <>
                    Componente em y{" "}
                    <MathFormula inline formula={String.raw`R_y`} />
                  </>
                }
                value={formatUnit(resultantY, "N")}
              />

              <MetricCard
                label={
                  <>
                    Módulo da resultante{" "}
                    <MathFormula inline formula={String.raw`|R|`} />
                  </>
                }
                value={formatUnit(resultantMagnitude, "N")}
                valueClassName={isEquilibrium ? "text-green-700" : "text-amber-600"}
              />

              <MetricCard
                label={
                  <>
                    Ângulo da resultante{" "}
                    <MathFormula inline formula={String.raw`\theta_R`} />
                  </>
                }
                value={formatUnit(resultantAngle, "°")}
              />

              <MetricCard
                label={<>Estado do sistema</>}
                value={isEquilibrium ? "Em equilíbrio" : "Fora do equilíbrio"}
                valueClassName={isEquilibrium ? "text-green-700" : "text-red-700"}
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
                  <svg
                    width="920"
                    height="420"
                    viewBox="0 0 920 420"
                    className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
                  >
                    <defs>
                      <pattern
                        id="grid-force-balance"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#f1f5f9"
                          strokeWidth="1"
                        />
                      </pattern>

                      <marker
                        id="arrowhead-red"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>

                      <marker
                        id="arrowhead-blue"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                      </marker>

                      <marker
                        id="arrowhead-green"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                      </marker>
                    </defs>

                    <rect width="920" height="420" fill="url(#grid-force-balance)" />

                    {/* eixos */}
                    <line
                      x1="460"
                      y1="20"
                      x2="460"
                      y2="400"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                    />
                    <line
                      x1="20"
                      y1="210"
                      x2="900"
                      y2="210"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                    />

                    {/* centro */}
                    <circle cx="460" cy="210" r="6" fill="#0f172a" />

                    {/* força 1 */}
                    <line
                      x1="460"
                      y1="210"
                      x2={460 + fx1 * 2.2}
                      y2={210 - fy1 * 2.2}
                      stroke="#ef4444"
                      strokeWidth="4"
                      markerEnd="url(#arrowhead-red)"
                    />
                    <text
                      x={460 + fx1 * 2.2 + 10}
                      y={210 - fy1 * 2.2 - 6}
                      fontSize="12"
                      fontWeight="700"
                      fill="#dc2626"
                    >
                      F₁ = {formatNumber(force1)} N
                    </text>

                    {/* força 2 */}
                    <line
                      x1="460"
                      y1="210"
                      x2={460 + fx2 * 2.2}
                      y2={210 - fy2 * 2.2}
                      stroke="#3b82f6"
                      strokeWidth="4"
                      markerEnd="url(#arrowhead-blue)"
                    />
                    <text
                      x={460 + fx2 * 2.2 + 10}
                      y={210 - fy2 * 2.2 - 6}
                      fontSize="12"
                      fontWeight="700"
                      fill="#2563eb"
                    >
                      F₂ = {formatNumber(force2)} N
                    </text>

                    {/* resultante */}
                    {!isEquilibrium && (
                      <>
                        <line
                          x1="460"
                          y1="210"
                          x2={460 + resultantX * 2.2}
                          y2={210 - resultantY * 2.2}
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeDasharray="8,6"
                          markerEnd="url(#arrowhead-green)"
                        />
                        <text
                          x={460 + resultantX * 2.2 + 12}
                          y={210 - resultantY * 2.2 - 6}
                          fontSize="12"
                          fontWeight="700"
                          fill="#059669"
                        >
                          R = {formatNumber(resultantMagnitude)} N
                        </text>
                      </>
                    )}

                    {/* selo de equilíbrio */}
                    {isEquilibrium && (
                      <g>
                        <rect
                          x="330"
                          y="40"
                          width="260"
                          height="50"
                          rx="12"
                          fill="#dcfce7"
                          stroke="#86efac"
                        />
                        <text
                          x="460"
                          y="72"
                          textAnchor="middle"
                          fontSize="22"
                          fontWeight="700"
                          fill="#16a34a"
                        >
                          ✓ EM EQUILÍBRIO
                        </text>
                      </g>
                    )}

                    {/* legenda */}
                    <g>
                      <rect
                        x="650"
                        y="40"
                        width="220"
                        height="96"
                        rx="12"
                        fill="white"
                        stroke="#e2e8f0"
                      />
                      <text x="670" y="64" fontSize="13" fontWeight="700" fill="#0f172a">
                        Legenda dos vetores
                      </text>
                      <text x="670" y="88" fontSize="12" fill="#dc2626">
                        Vermelho: força F₁
                      </text>
                      <text x="670" y="108" fontSize="12" fill="#2563eb">
                        Azul: força F₂
                      </text>
                      <text x="670" y="128" fontSize="12" fill="#059669">
                        Verde: resultante R
                      </text>
                    </g>
                  </svg>
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
                title="Força 1"
                values={[
                  ["F₁x", formatUnit(fx1, "N")],
                  ["F₁y", formatUnit(fy1, "N")],
                ]}
              />

              <CalcMiniCard
                title="Força 2"
                values={[
                  ["F₂x", formatUnit(fx2, "N")],
                  ["F₂y", formatUnit(fy2, "N")],
                ]}
              />

              <CalcMiniCard
                title="Resultante"
                values={[
                  ["Rₓ", formatUnit(resultantX, "N")],
                  ["Rᵧ", formatUnit(resultantY, "N")],
                ]}
              />

              <CalcMiniCard
                title="Estado"
                values={[
                  ["|R|", formatUnit(resultantMagnitude, "N")],
                  ["Situação", isEquilibrium ? "Equilíbrio" : "Desequilíbrio"],
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
              <CalcSection
                title="Decomposição da força 1"
                formulas={[
                  String.raw`F_{1x} = F_1\cos\theta_1 = ${formatNumber(force1)}\cos(${formatNumber(
                    angle1
                  )}^\circ) = ${formatNumber(fx1)} \,\text{N}`,
                  String.raw`F_{1y} = F_1\sin\theta_1 = ${formatNumber(force1)}\sin(${formatNumber(
                    angle1
                  )}^\circ) = ${formatNumber(fy1)} \,\text{N}`,
                ]}
              />

              <CalcSection
                title="Decomposição da força 2"
                formulas={[
                  String.raw`F_{2x} = F_2\cos\theta_2 = ${formatNumber(force2)}\cos(${formatNumber(
                    angle2
                  )}^\circ) = ${formatNumber(fx2)} \,\text{N}`,
                  String.raw`F_{2y} = F_2\sin\theta_2 = ${formatNumber(force2)}\sin(${formatNumber(
                    angle2
                  )}^\circ) = ${formatNumber(fy2)} \,\text{N}`,
                ]}
              />

              <CalcSection
                title="Componentes da resultante"
                formulas={[
                  String.raw`R_x = F_{1x} + F_{2x} = ${formatNumber(fx1)} + ${formatNumber(
                    fx2
                  )} = ${formatNumber(resultantX)} \,\text{N}`,
                  String.raw`R_y = F_{1y} + F_{2y} = ${formatNumber(fy1)} + ${formatNumber(
                    fy2
                  )} = ${formatNumber(resultantY)} \,\text{N}`,
                ]}
              />

              <CalcSection
                title="Módulo e ângulo da resultante"
                formulas={[
                  String.raw`|R| = \sqrt{R_x^2 + R_y^2} = \sqrt{(${formatNumber(
                    resultantX
                  )})^2 + (${formatNumber(resultantY)})^2} = ${formatNumber(
                    resultantMagnitude
                  )} \,\text{N}`,
                  String.raw`\theta_R = \tan^{-1}\left(\frac{R_y}{R_x}\right) = ${formatNumber(
                    resultantAngle
                  )}^\circ`,
                  isEquilibrium
                    ? String.raw`\text{Como }|R| \approx 0,\ \text{o sistema está em equilíbrio.}`
                    : String.raw`\text{Como }|R| \neq 0,\ \text{o sistema não está em equilíbrio.}`,
                ]}
              />
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAStaticsTheory.title}
        introduction={ITAStaticsTheory.introduction}
        sections={ITAStaticsTheory.sections}
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
