import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

type BalanceMode = "free_forces" | "suspended_weight";

const degToRad = (deg: number) => (deg * Math.PI) / 180;

export const ForceBalanceSimulator: React.FC = () => {
  const [mode, setMode] = useState<BalanceMode>("free_forces");

  // modo livre
  const [force1, setForce1] = useState(50);
  const [force2, setForce2] = useState(50);
  const [force3, setForce3] = useState(30);

  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(180);
  const [angle3, setAngle3] = useState(90);

  // modo peso suspenso
  const [weight, setWeight] = useState(60);
  const [thetaLeft, setThetaLeft] = useState(50);
  const [thetaRight, setThetaRight] = useState(50);

  const freeData = useMemo(() => {
    const rad1 = degToRad(angle1);
    const rad2 = degToRad(angle2);
    const rad3 = degToRad(angle3);

    const fx1 = force1 * Math.cos(rad1);
    const fy1 = force1 * Math.sin(rad1);

    const fx2 = force2 * Math.cos(rad2);
    const fy2 = force2 * Math.sin(rad2);

    const fx3 = force3 * Math.cos(rad3);
    const fy3 = force3 * Math.sin(rad3);

    const rx = fx1 + fx2 + fx3;
    const ry = fy1 + fy2 + fy3;
    const r = Math.sqrt(rx ** 2 + ry ** 2);
    const angleR = (Math.atan2(ry, rx) * 180) / Math.PI;

    return {
      fx1,
      fy1,
      fx2,
      fy2,
      fx3,
      fy3,
      rx,
      ry,
      r,
      angleR,
      isEquilibrium: r < 0.1,
    };
  }, [force1, force2, force3, angle1, angle2, angle3]);

  const suspendedData = useMemo(() => {
    const a = degToRad(thetaLeft);
    const b = degToRad(thetaRight);

    const sinSum = Math.sin(a + b);
    const tLeft = sinSum > 1e-6 ? (weight * Math.cos(b)) / sinSum : 0;
    const tRight = sinSum > 1e-6 ? (weight * Math.cos(a)) / sinSum : 0;

    const fxLeft = -tLeft * Math.cos(a);
    const fyLeft = tLeft * Math.sin(a);

    const fxRight = tRight * Math.cos(b);
    const fyRight = tRight * Math.sin(b);

    const fxWeight = 0;
    const fyWeight = -weight;

    const rx = fxLeft + fxRight + fxWeight;
    const ry = fyLeft + fyRight + fyWeight;
    const r = Math.sqrt(rx ** 2 + ry ** 2);
    const angleR = (Math.atan2(ry, rx) * 180) / Math.PI;

    return {
      tLeft,
      tRight,
      fxLeft,
      fyLeft,
      fxRight,
      fyRight,
      fxWeight,
      fyWeight,
      rx,
      ry,
      r,
      angleR,
      isEquilibrium: r < 0.1,
    };
  }, [weight, thetaLeft, thetaRight]);

  const active = mode === "free_forces" ? freeData : suspendedData;

  const equilibriumPercent = Math.max(0, 100 - Math.min(active.r * 8, 100));

  const applyPreset = (preset: string) => {
    if (preset === "free_equal") {
      setMode("free_forces");
      setForce1(50);
      setAngle1(0);
      setForce2(50);
      setAngle2(180);
      setForce3(0);
      setAngle3(90);
    }

    if (preset === "free_three") {
      setMode("free_forces");
      setForce1(40);
      setAngle1(0);
      setForce2(40);
      setAngle2(120);
      setForce3(40);
      setAngle3(240);
    }

    if (preset === "free_unbalanced") {
      setMode("free_forces");
      setForce1(70);
      setAngle1(20);
      setForce2(30);
      setAngle2(190);
      setForce3(20);
      setAngle3(90);
    }

    if (preset === "suspended_sym") {
      setMode("suspended_weight");
      setWeight(60);
      setThetaLeft(45);
      setThetaRight(45);
    }

    if (preset === "suspended_asym") {
      setMode("suspended_weight");
      setWeight(80);
      setThetaLeft(35);
      setThetaRight(60);
    }
  };

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
                Analise forças concorrentes e sistemas suspensos em equilíbrio.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo
                </p>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value as BalanceMode)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="free_forces">Forças livres no plano</option>
                  <option value="suspended_weight">
                    Duas cordas sustentando um peso
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("free_equal")}
                >
                  Preset: forças opostas
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("free_three")}
                >
                  Preset: três forças equilibradas
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("free_unbalanced")}
                >
                  Preset: sistema desequilibrado
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("suspended_sym")}
                >
                  Preset: cordas simétricas
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("suspended_asym")}
                >
                  Preset: cordas assimétricas
                </button>
              </div>

              {mode === "free_forces" ? (
                <>
                  <ForceEditor
                    title="Força 1 — Vermelha"
                    titleClass="text-red-700"
                    bgClass="bg-red-50/60 border-red-200"
                    force={force1}
                    angle={angle1}
                    setForce={setForce1}
                    setAngle={setAngle1}
                    forceLabel="F₁"
                    angleLabel="θ₁"
                    valueClass="text-red-700"
                  />

                  <ForceEditor
                    title="Força 2 — Azul"
                    titleClass="text-blue-700"
                    bgClass="bg-blue-50/60 border-blue-200"
                    force={force2}
                    angle={angle2}
                    setForce={setForce2}
                    setAngle={setAngle2}
                    forceLabel="F₂"
                    angleLabel="θ₂"
                    valueClass="text-blue-700"
                  />

                  <ForceEditor
                    title="Força 3 — Verde"
                    titleClass="text-emerald-700"
                    bgClass="bg-emerald-50/60 border-emerald-200"
                    force={force3}
                    angle={angle3}
                    setForce={setForce3}
                    setAngle={setAngle3}
                    forceLabel="F₃"
                    angleLabel="θ₃"
                    valueClass="text-emerald-700"
                  />
                </>
              ) : (
                <>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700">
                      Peso suspenso
                    </p>

                    <div className="space-y-5">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">
                            Peso <span className="text-slate-500">(P)</span>
                          </label>
                          <span className="text-sm font-bold text-slate-900">
                            {formatUnit(weight, "N")}
                          </span>
                        </div>
                        <Slider
                          value={[weight]}
                          onValueChange={(value) => setWeight(value[0])}
                          min={10}
                          max={150}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">
                            Ângulo esquerdo{" "}
                            <span className="text-slate-500">(θₑ)</span>
                          </label>
                          <span className="text-sm font-bold text-red-700">
                            {formatNumber(thetaLeft, 0)}°
                          </span>
                        </div>
                        <Slider
                          value={[thetaLeft]}
                          onValueChange={(value) => setThetaLeft(value[0])}
                          min={10}
                          max={80}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">
                            Ângulo direito{" "}
                            <span className="text-slate-500">(θ_d)</span>
                          </label>
                          <span className="text-sm font-bold text-blue-700">
                            {formatNumber(thetaRight, 0)}°
                          </span>
                        </div>
                        <Slider
                          value={[thetaRight]}
                          onValueChange={(value) => setThetaRight(value[0])}
                          min={10}
                          max={80}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </>
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
                    Componente em x{" "}
                    <MathFormula inline formula={String.raw`R_x`} />
                  </>
                }
                value={formatUnit(active.rx, "N")}
              />

              <MetricCard
                label={
                  <>
                    Componente em y{" "}
                    <MathFormula inline formula={String.raw`R_y`} />
                  </>
                }
                value={formatUnit(active.ry, "N")}
              />

              <MetricCard
                label={
                  <>
                    Módulo da resultante{" "}
                    <MathFormula inline formula={String.raw`|R|`} />
                  </>
                }
                value={formatUnit(active.r, "N")}
                valueClassName={
                  active.isEquilibrium ? "text-green-700" : "text-amber-600"
                }
              />

              <MetricCard
                label={<>Estado do sistema</>}
                value={active.isEquilibrium ? "Em equilíbrio" : "Fora do equilíbrio"}
                valueClassName={
                  active.isEquilibrium ? "text-green-700" : "text-red-700"
                }
              />

              {mode === "suspended_weight" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Tensão esquerda{" "}
                        <MathFormula inline formula={String.raw`T_e`} />
                      </>
                    }
                    value={formatUnit(suspendedData.tLeft, "N")}
                    valueClassName="text-red-700"
                  />
                  <MetricCard
                    label={
                      <>
                        Tensão direita{" "}
                        <MathFormula inline formula={String.raw`T_d`} />
                      </>
                    }
                    value={formatUnit(suspendedData.tRight, "N")}
                    valueClassName="text-blue-700"
                  />
                </>
              )}

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-600">
                  Nível de equilíbrio
                </p>
                <div className="mt-3 h-3 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      equilibriumPercent > 90
                        ? "bg-green-500"
                        : equilibriumPercent > 60
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${equilibriumPercent}%` }}
                  />
                </div>
                <p className="mt-2 text-sm font-bold text-slate-900">
                  {formatNumber(equilibriumPercent)}%
                </p>
              </div>
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
                  {mode === "free_forces" ? (
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

                        <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                        </marker>
                        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                        <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                        </marker>
                        <marker id="arrowhead-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#059669" />
                        </marker>
                      </defs>

                      <rect width="920" height="420" fill="url(#grid-force-balance)" />

                      <line x1="460" y1="20" x2="460" y2="400" stroke="#e2e8f0" strokeWidth="2" />
                      <line x1="20" y1="210" x2="900" y2="210" stroke="#e2e8f0" strokeWidth="2" />

                      {/* guia angular */}
                      <circle
                        cx="460"
                        cy="210"
                        r="130"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeDasharray="6,6"
                        strokeWidth="2"
                      />

                      <circle cx="460" cy="210" r="6" fill="#0f172a" />

                      {/* F1 */}
                      <line
                        x1="460"
                        y1="210"
                        x2={460 + freeData.fx1 * 2.2}
                        y2={210 - freeData.fy1 * 2.2}
                        stroke="#ef4444"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-red)"
                      />
                      <text
                        x={460 + freeData.fx1 * 2.2 + 10}
                        y={210 - freeData.fy1 * 2.2 - 6}
                        fontSize="12"
                        fontWeight="700"
                        fill="#dc2626"
                      >
                        F₁
                      </text>

                      {/* F2 */}
                      <line
                        x1="460"
                        y1="210"
                        x2={460 + freeData.fx2 * 2.2}
                        y2={210 - freeData.fy2 * 2.2}
                        stroke="#3b82f6"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-blue)"
                      />
                      <text
                        x={460 + freeData.fx2 * 2.2 + 10}
                        y={210 - freeData.fy2 * 2.2 - 6}
                        fontSize="12"
                        fontWeight="700"
                        fill="#2563eb"
                      >
                        F₂
                      </text>

                      {/* F3 */}
                      <line
                        x1="460"
                        y1="210"
                        x2={460 + freeData.fx3 * 2.2}
                        y2={210 - freeData.fy3 * 2.2}
                        stroke="#059669"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-emerald)"
                      />
                      <text
                        x={460 + freeData.fx3 * 2.2 + 10}
                        y={210 - freeData.fy3 * 2.2 - 6}
                        fontSize="12"
                        fontWeight="700"
                        fill="#059669"
                      >
                        F₃
                      </text>

                      {/* R */}
                      {!freeData.isEquilibrium && (
                        <>
                          <line
                            x1="460"
                            y1="210"
                            x2={460 + freeData.rx * 2.2}
                            y2={210 - freeData.ry * 2.2}
                            stroke="#10b981"
                            strokeWidth="4"
                            strokeDasharray="8,6"
                            markerEnd="url(#arrowhead-green)"
                          />
                          <text
                            x={460 + freeData.rx * 2.2 + 12}
                            y={210 - freeData.ry * 2.2 - 6}
                            fontSize="12"
                            fontWeight="700"
                            fill="#059669"
                          >
                            R
                          </text>
                        </>
                      )}

                      {/* selo */}
                      {freeData.isEquilibrium && (
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

                      {/* polígono de forças */}
                      <g>
                        <rect
                          x="635"
                          y="180"
                          width="230"
                          height="170"
                          rx="14"
                          fill="white"
                          stroke="#e2e8f0"
                        />
                        <text x="655" y="205" fontSize="13" fontWeight="700" fill="#0f172a">
                          Polígono das forças
                        </text>

                        {(() => {
                          const sx = 690;
                          const sy = 290;
                          const scale = 1.4;

                          const x1 = sx + freeData.fx1 * scale;
                          const y1 = sy - freeData.fy1 * scale;

                          const x2 = x1 + freeData.fx2 * scale;
                          const y2 = y1 - freeData.fy2 * scale;

                          const x3 = x2 + freeData.fx3 * scale;
                          const y3 = y2 - freeData.fy3 * scale;

                          return (
                            <>
                              <line x1={sx} y1={sy} x2={x1} y2={y1} stroke="#ef4444" strokeWidth="3" />
                              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth="3" />
                              <line x1={x2} y1={y2} x2={x3} y2={y3} stroke="#059669" strokeWidth="3" />
                              {!freeData.isEquilibrium && (
                                <line
                                  x1={x3}
                                  y1={y3}
                                  x2={sx}
                                  y2={sy}
                                  stroke="#10b981"
                                  strokeWidth="3"
                                  strokeDasharray="6,4"
                                />
                              )}
                            </>
                          );
                        })()}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="920"
                      height="420"
                      viewBox="0 0 920 420"
                      className="mx-auto w-full min-w-[760px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <pattern
                          id="grid-suspended"
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

                        <marker id="arrowhead-red-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                        </marker>
                        <marker id="arrowhead-blue-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                        <marker id="arrowhead-green-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                        </marker>
                      </defs>

                      <rect width="920" height="420" fill="url(#grid-suspended)" />

                      <line x1="220" y1="80" x2="700" y2="80" stroke="#475569" strokeWidth="6" />
                      <circle cx="460" cy="200" r="7" fill="#0f172a" />

                      {/* cordas */}
                      <line
                        x1="460"
                        y1="200"
                        x2={460 - 170 * Math.cos(degToRad(thetaLeft))}
                        y2={200 - 170 * Math.sin(degToRad(thetaLeft))}
                        stroke="#ef4444"
                        strokeWidth="4"
                      />
                      <line
                        x1="460"
                        y1="200"
                        x2={460 + 170 * Math.cos(degToRad(thetaRight))}
                        y2={200 - 170 * Math.sin(degToRad(thetaRight))}
                        stroke="#3b82f6"
                        strokeWidth="4"
                      />

                      {/* peso */}
                      <rect x="430" y="200" width="60" height="80" rx="10" fill="#64748b" stroke="#334155" strokeWidth="3" />
                      <text x="460" y="245" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">
                        P
                      </text>

                      {/* vetores */}
                      <line
                        x1="460"
                        y1="200"
                        x2={460 - suspendedData.tLeft * Math.cos(degToRad(thetaLeft)) * 1.5}
                        y2={200 - suspendedData.tLeft * Math.sin(degToRad(thetaLeft)) * 1.5}
                        stroke="#ef4444"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-red-2)"
                      />
                      <text
                        x={460 - suspendedData.tLeft * Math.cos(degToRad(thetaLeft)) * 1.5 - 10}
                        y={200 - suspendedData.tLeft * Math.sin(degToRad(thetaLeft)) * 1.5 - 6}
                        fontSize="12"
                        fontWeight="700"
                        fill="#dc2626"
                      >
                        Tₑ
                      </text>

                      <line
                        x1="460"
                        y1="200"
                        x2={460 + suspendedData.tRight * Math.cos(degToRad(thetaRight)) * 1.5}
                        y2={200 - suspendedData.tRight * Math.sin(degToRad(thetaRight)) * 1.5}
                        stroke="#3b82f6"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-blue-2)"
                      />
                      <text
                        x={460 + suspendedData.tRight * Math.cos(degToRad(thetaRight)) * 1.5 + 10}
                        y={200 - suspendedData.tRight * Math.sin(degToRad(thetaRight)) * 1.5 - 6}
                        fontSize="12"
                        fontWeight="700"
                        fill="#2563eb"
                      >
                        T_d
                      </text>

                      <line
                        x1="460"
                        y1="240"
                        x2="460"
                        y2={240 + weight * 1.5}
                        stroke="#10b981"
                        strokeWidth="4"
                        markerEnd="url(#arrowhead-green-2)"
                      />
                      <text
                        x="472"
                        y={240 + weight * 1.5 + 4}
                        fontSize="12"
                        fontWeight="700"
                        fill="#059669"
                      >
                        P
                      </text>

                      {suspendedData.isEquilibrium && (
                        <g>
                          <rect
                            x="330"
                            y="30"
                            width="260"
                            height="50"
                            rx="12"
                            fill="#dcfce7"
                            stroke="#86efac"
                          />
                          <text
                            x="460"
                            y="62"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#16a34a"
                          >
                            ✓ EM EQUILÍBRIO
                          </text>
                        </g>
                      )}

                      {/* polígono */}
                      <g>
                        <rect
                          x="650"
                          y="185"
                          width="200"
                          height="145"
                          rx="14"
                          fill="white"
                          stroke="#e2e8f0"
                        />
                        <text x="670" y="210" fontSize="13" fontWeight="700" fill="#0f172a">
                          Polígono das forças
                        </text>

                        {(() => {
                          const sx = 700;
                          const sy = 285;
                          const scale = 1.5;

                          const x1 = sx + suspendedData.fxLeft * scale;
                          const y1 = sy - suspendedData.fyLeft * scale;

                          const x2 = x1 + suspendedData.fxRight * scale;
                          const y2 = y1 - suspendedData.fyRight * scale;

                          const x3 = x2 + suspendedData.fxWeight * scale;
                          const y3 = y2 - suspendedData.fyWeight * scale;

                          return (
                            <>
                              <line x1={sx} y1={sy} x2={x1} y2={y1} stroke="#ef4444" strokeWidth="3" />
                              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth="3" />
                              <line x1={x2} y1={y2} x2={x3} y2={y3} stroke="#059669" strokeWidth="3" />
                              {!suspendedData.isEquilibrium && (
                                <line
                                  x1={x3}
                                  y1={y3}
                                  x2={sx}
                                  y2={sy}
                                  stroke="#10b981"
                                  strokeWidth="3"
                                  strokeDasharray="6,4"
                                />
                              )}
                            </>
                          );
                        })()}
                      </g>
                    </svg>
                  )}
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
              {mode === "free_forces" ? (
                <>
                  <CalcMiniCard
                    title="Força 1"
                    values={[
                      ["F₁x", formatUnit(freeData.fx1, "N")],
                      ["F₁y", formatUnit(freeData.fy1, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Força 2"
                    values={[
                      ["F₂x", formatUnit(freeData.fx2, "N")],
                      ["F₂y", formatUnit(freeData.fy2, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Força 3"
                    values={[
                      ["F₃x", formatUnit(freeData.fx3, "N")],
                      ["F₃y", formatUnit(freeData.fy3, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Resultante"
                    values={[
                      ["Rₓ", formatUnit(freeData.rx, "N")],
                      ["Rᵧ", formatUnit(freeData.ry, "N")],
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcMiniCard
                    title="Tensão esquerda"
                    values={[
                      ["Tₑx", formatUnit(suspendedData.fxLeft, "N")],
                      ["Tₑy", formatUnit(suspendedData.fyLeft, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Tensão direita"
                    values={[
                      ["Tdx", formatUnit(suspendedData.fxRight, "N")],
                      ["Tdy", formatUnit(suspendedData.fyRight, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Peso"
                    values={[
                      ["Px", formatUnit(suspendedData.fxWeight, "N")],
                      ["Py", formatUnit(suspendedData.fyWeight, "N")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Resultante"
                    values={[
                      ["Rₓ", formatUnit(suspendedData.rx, "N")],
                      ["Rᵧ", formatUnit(suspendedData.ry, "N")],
                    ]}
                  />
                </>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Detalhados
              </h4>
            </div>

            <div className="space-y-5 p-5">
              {mode === "free_forces" ? (
                <>
                  <CalcSection
                    title="Decomposição das forças"
                    formulas={[
                      String.raw`F_{1x} = F_1\cos\theta_1 = ${formatNumber(force1)}\cos(${formatNumber(
                        angle1
                      )}^\circ) = ${formatNumber(freeData.fx1)} \,\text{N}`,
                      String.raw`F_{1y} = F_1\sin\theta_1 = ${formatNumber(force1)}\sin(${formatNumber(
                        angle1
                      )}^\circ) = ${formatNumber(freeData.fy1)} \,\text{N}`,
                      String.raw`F_{2x} = F_2\cos\theta_2 = ${formatNumber(force2)}\cos(${formatNumber(
                        angle2
                      )}^\circ) = ${formatNumber(freeData.fx2)} \,\text{N}`,
                      String.raw`F_{2y} = F_2\sin\theta_2 = ${formatNumber(force2)}\sin(${formatNumber(
                        angle2
                      )}^\circ) = ${formatNumber(freeData.fy2)} \,\text{N}`,
                      String.raw`F_{3x} = F_3\cos\theta_3 = ${formatNumber(force3)}\cos(${formatNumber(
                        angle3
                      )}^\circ) = ${formatNumber(freeData.fx3)} \,\text{N}`,
                      String.raw`F_{3y} = F_3\sin\theta_3 = ${formatNumber(force3)}\sin(${formatNumber(
                        angle3
                      )}^\circ) = ${formatNumber(freeData.fy3)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Condição de equilíbrio"
                    formulas={[
                      String.raw`R_x = F_{1x} + F_{2x} + F_{3x} = ${formatNumber(
                        freeData.fx1
                      )} + ${formatNumber(freeData.fx2)} + ${formatNumber(
                        freeData.fx3
                      )} = ${formatNumber(freeData.rx)} \,\text{N}`,
                      String.raw`R_y = F_{1y} + F_{2y} + F_{3y} = ${formatNumber(
                        freeData.fy1
                      )} + ${formatNumber(freeData.fy2)} + ${formatNumber(
                        freeData.fy3
                      )} = ${formatNumber(freeData.ry)} \,\text{N}`,
                      String.raw`|R| = \sqrt{R_x^2 + R_y^2} = ${formatNumber(
                        freeData.r
                      )} \,\text{N}`,
                      freeData.isEquilibrium
                        ? String.raw`\text{Como }R_x \approx 0\ \text{e }R_y \approx 0,\ \text{o sistema está em equilíbrio.}`
                        : String.raw`\text{Como }R_x \neq 0\ \text{ou }R_y \neq 0,\ \text{o sistema não está em equilíbrio.}`,
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcSection
                    title="Equilíbrio de um nó com duas cordas"
                    formulas={[
                      String.raw`T_e \cos\theta_e = T_d \cos\theta_d`,
                      String.raw`T_e \sin\theta_e + T_d \sin\theta_d = P`,
                      String.raw`T_e = \frac{P\cos\theta_d}{\sin(\theta_e+\theta_d)} = ${formatNumber(
                        suspendedData.tLeft
                      )} \,\text{N}`,
                      String.raw`T_d = \frac{P\cos\theta_e}{\sin(\theta_e+\theta_d)} = ${formatNumber(
                        suspendedData.tRight
                      )} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Condição de equilíbrio"
                    formulas={[
                      String.raw`R_x = ${formatNumber(
                        suspendedData.fxLeft
                      )} + ${formatNumber(suspendedData.fxRight)} + ${formatNumber(
                        suspendedData.fxWeight
                      )} = ${formatNumber(suspendedData.rx)} \,\text{N}`,
                      String.raw`R_y = ${formatNumber(
                        suspendedData.fyLeft
                      )} + ${formatNumber(suspendedData.fyRight)} + ${formatNumber(
                        suspendedData.fyWeight
                      )} = ${formatNumber(suspendedData.ry)} \,\text{N}`,
                      String.raw`|R| = \sqrt{R_x^2 + R_y^2} = ${formatNumber(
                        suspendedData.r
                      )} \,\text{N}`,
                      suspendedData.isEquilibrium
                        ? String.raw`\text{As forças se anulam: sistema em equilíbrio.}`
                        : String.raw`\text{As forças não se anulam: sistema fora do equilíbrio.}`,
                    ]}
                  />
                </>
              )}
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

function ForceEditor({
  title,
  titleClass,
  bgClass,
  force,
  angle,
  setForce,
  setAngle,
  forceLabel,
  angleLabel,
  valueClass,
}: {
  title: string;
  titleClass: string;
  bgClass: string;
  force: number;
  angle: number;
  setForce: (value: number) => void;
  setAngle: (value: number) => void;
  forceLabel: string;
  angleLabel: string;
  valueClass: string;
}) {
  return (
    <div className={`rounded-xl border p-4 ${bgClass}`}>
      <h5 className={`mb-4 text-sm font-bold uppercase tracking-wide ${titleClass}`}>
        {title}
      </h5>

      <div className="space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Intensidade <span className="text-slate-500">({forceLabel})</span>
            </label>
            <span className={`text-sm font-bold ${valueClass}`}>
              {formatUnit(force, "N")}
            </span>
          </div>
          <Slider
            value={[force]}
            onValueChange={(value) => setForce(value[0])}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Ângulo <span className="text-slate-500">({angleLabel})</span>
            </label>
            <span className={`text-sm font-bold ${valueClass}`}>
              {formatNumber(angle, 0)}°
            </span>
          </div>
          <Slider
            value={[angle]}
            onValueChange={(value) => setAngle(value[0])}
            min={0}
            max={360}
            step={5}
            className="w-full"
          />
        </div>
      </div>
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
