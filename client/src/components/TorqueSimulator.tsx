import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const TorqueSimulator: React.FC = () => {
  const [pivotPosition, setPivotPosition] = useState(0);

  const [showBarWeight, setShowBarWeight] = useState(true);
  const [barMass, setBarMass] = useState(4);
  const [barLength, setBarLength] = useState(10);

  const [force1, setForce1] = useState(40);
  const [distance1, setDistance1] = useState(-3);
  const [angle1, setAngle1] = useState(90);

  const [force2, setForce2] = useState(30);
  const [distance2, setDistance2] = useState(3);
  const [angle2, setAngle2] = useState(90);

  const [force3, setForce3] = useState(20);
  const [distance3, setDistance3] = useState(1.5);
  const [angle3, setAngle3] = useState(120);

  const g = 9.8;
  const halfLength = barLength / 2;

  const barWeight = useMemo(() => barMass * g, [barMass]);
  const barCenterPosition = 0;

  const torque1 = useMemo(() => {
    return distance1 * force1 * Math.sin(degToRad(angle1));
  }, [distance1, force1, angle1]);

  const torque2 = useMemo(() => {
    return distance2 * force2 * Math.sin(degToRad(angle2));
  }, [distance2, force2, angle2]);

  const torque3 = useMemo(() => {
    return distance3 * force3 * Math.sin(degToRad(angle3));
  }, [distance3, force3, angle3]);

  const barWeightTorque = useMemo(() => {
    if (!showBarWeight) return 0;
    const lever = barCenterPosition - pivotPosition;
    return lever * (-barWeight);
  }, [showBarWeight, barCenterPosition, pivotPosition, barWeight]);

  const netTorque = useMemo(() => {
    return torque1 + torque2 + torque3 + barWeightTorque;
  }, [torque1, torque2, torque3, barWeightTorque]);

  const isBalanced = Math.abs(netTorque) < 0.5;

  const rotationVisual = clamp(netTorque / 8, -18, 18);

  const directionText = useMemo(() => {
    if (isBalanced) return "Em equilíbrio rotacional";
    return netTorque > 0 ? "Tendência anti-horária" : "Tendência horária";
  }, [isBalanced, netTorque]);

  const force1Perp = useMemo(() => force1 * Math.sin(degToRad(angle1)), [force1, angle1]);
  const force2Perp = useMemo(() => force2 * Math.sin(degToRad(angle2)), [force2, angle2]);
  const force3Perp = useMemo(() => force3 * Math.sin(degToRad(angle3)), [force3, angle3]);

  const applyPreset = (preset: string) => {
    if (preset === "simple_balance") {
      setPivotPosition(0);
      setShowBarWeight(false);
      setForce1(40);
      setDistance1(-2);
      setAngle1(90);
      setForce2(20);
      setDistance2(4);
      setAngle2(90);
      setForce3(0);
      setDistance3(1.5);
      setAngle3(90);
    }

    if (preset === "unbalanced") {
      setPivotPosition(0);
      setShowBarWeight(false);
      setForce1(50);
      setDistance1(-3);
      setAngle1(90);
      setForce2(20);
      setDistance2(2);
      setAngle2(90);
      setForce3(10);
      setDistance3(4);
      setAngle3(90);
    }

    if (preset === "inclined_force") {
      setPivotPosition(0);
      setShowBarWeight(false);
      setForce1(40);
      setDistance1(-3);
      setAngle1(60);
      setForce2(30);
      setDistance2(3);
      setAngle2(120);
      setForce3(15);
      setDistance3(1);
      setAngle3(90);
    }

    if (preset === "bar_weight") {
      setPivotPosition(0);
      setShowBarWeight(true);
      setBarMass(6);
      setForce1(35);
      setDistance1(-4);
      setAngle1(90);
      setForce2(25);
      setDistance2(3);
      setAngle2(90);
      setForce3(0);
      setDistance3(1);
      setAngle3(90);
    }

    if (preset === "off_center_pivot") {
      setPivotPosition(2);
      setShowBarWeight(true);
      setBarMass(4);
      setForce1(30);
      setDistance1(-4);
      setAngle1(90);
      setForce2(25);
      setDistance2(4);
      setAngle2(90);
      setForce3(20);
      setDistance3(-1);
      setAngle3(120);
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
                Torque e Momento
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise torques múltiplos, forças inclinadas, pivô móvel e peso da barra.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="grid grid-cols-1 gap-3">
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("simple_balance")}
                >
                  Preset: equilíbrio simples
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("unbalanced")}
                >
                  Preset: desequilibrado
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("inclined_force")}
                >
                  Preset: força inclinada
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("bar_weight")}
                >
                  Preset: com peso da barra
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("off_center_pivot")}
                >
                  Preset: pivô deslocado
                </button>
              </div>

              <ControlRow
                label="Posição do pivô"
                symbol="x_p"
                value={formatUnit(pivotPosition, "m")}
              >
                <Slider
                  value={[pivotPosition]}
                  onValueChange={(value) => setPivotPosition(value[0])}
                  min={-4}
                  max={4}
                  step={0.5}
                  className="w-full"
                />
              </ControlRow>

              <ControlRow
                label="Comprimento da barra"
                symbol="L"
                value={formatUnit(barLength, "m")}
              >
                <Slider
                  value={[barLength]}
                  onValueChange={(value) => setBarLength(value[0])}
                  min={6}
                  max={12}
                  step={0.5}
                  className="w-full"
                />
              </ControlRow>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Peso da barra
                </p>
                <select
                  value={showBarWeight ? "with" : "without"}
                  onChange={(e) => setShowBarWeight(e.target.value === "with")}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
                >
                  <option value="with">Com peso da barra</option>
                  <option value="without">Sem peso da barra</option>
                </select>
              </div>

              {showBarWeight && (
                <ControlRow
                  label="Massa da barra"
                  symbol="m_b"
                  value={formatUnit(barMass, "kg")}
                >
                  <Slider
                    value={[barMass]}
                    onValueChange={(value) => setBarMass(value[0])}
                    min={1}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </ControlRow>
              )}

              <ForceCard
                title="Força 1 — Vermelha"
                titleClass="text-red-700"
                bgClass="bg-red-50/60 border-red-200"
                force={force1}
                distance={distance1}
                angle={angle1}
                setForce={setForce1}
                setDistance={setDistance1}
                setAngle={setAngle1}
                forceSymbol="F₁"
                distanceSymbol="r₁"
                angleSymbol="θ₁"
                valueClass="text-red-700"
                minDist={-halfLength}
                maxDist={halfLength}
              />

              <ForceCard
                title="Força 2 — Azul"
                titleClass="text-blue-700"
                bgClass="bg-blue-50/60 border-blue-200"
                force={force2}
                distance={distance2}
                angle={angle2}
                setForce={setForce2}
                setDistance={setDistance2}
                setAngle={setAngle2}
                forceSymbol="F₂"
                distanceSymbol="r₂"
                angleSymbol="θ₂"
                valueClass="text-blue-700"
                minDist={-halfLength}
                maxDist={halfLength}
              />

              <ForceCard
                title="Força 3 — Verde"
                titleClass="text-emerald-700"
                bgClass="bg-emerald-50/60 border-emerald-200"
                force={force3}
                distance={distance3}
                angle={angle3}
                setForce={setForce3}
                setDistance={setDistance3}
                setAngle={setAngle3}
                forceSymbol="F₃"
                distanceSymbol="r₃"
                angleSymbol="θ₃"
                valueClass="text-emerald-700"
                minDist={-halfLength}
                maxDist={halfLength}
              />
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
                    Torque 1 <MathFormula inline formula={String.raw`\tau_1`} />
                  </>
                }
                value={formatUnit(torque1, "N·m")}
                valueClassName="text-red-700"
              />

              <MetricCard
                label={
                  <>
                    Torque 2 <MathFormula inline formula={String.raw`\tau_2`} />
                  </>
                }
                value={formatUnit(torque2, "N·m")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Torque 3 <MathFormula inline formula={String.raw`\tau_3`} />
                  </>
                }
                value={formatUnit(torque3, "N·m")}
                valueClassName="text-emerald-700"
              />

              {showBarWeight && (
                <MetricCard
                  label={
                    <>
                      Torque da barra{" "}
                      <MathFormula inline formula={String.raw`\tau_b`} />
                    </>
                  }
                  value={formatUnit(barWeightTorque, "N·m")}
                  valueClassName="text-slate-700"
                />
              )}

              <MetricCard
                label={
                  <>
                    Torque resultante{" "}
                    <MathFormula inline formula={String.raw`\Sigma \tau`} />
                  </>
                }
                value={formatUnit(netTorque, "N·m")}
                valueClassName={isBalanced ? "text-green-700" : "text-amber-600"}
              />

              <MetricCard
                label={<>Estado rotacional</>}
                value={directionText}
                valueClassName={isBalanced ? "text-green-700" : "text-red-700"}
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
                    width="980"
                    height="420"
                    viewBox="0 0 980 420"
                    className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                  >
                    <defs>
                      <pattern id="grid-torque-new" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#f1f5f9"
                          strokeWidth="1"
                        />
                      </pattern>
                      <marker id="arrow-red-torque" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>
                      <marker id="arrow-blue-torque" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                      </marker>
                      <marker id="arrow-green-torque" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#059669" />
                      </marker>
                      <marker id="arrow-gray-torque" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                      </marker>
                    </defs>

                    <rect width="980" height="420" fill="url(#grid-torque-new)" />

                    {/* base */}
                    <path d="M 455 320 L 525 320 L 490 255 Z" fill="#64748b" />

                    {/* barra */}
                    <g transform={`translate(490, 255) rotate(${-rotationVisual})`}>
                      <rect
                        x={-barLength * 35 / 2}
                        y={-8}
                        width={barLength * 35}
                        height={16}
                        rx={4}
                        fill="#475569"
                      />

                      {/* marcações */}
                      {Array.from({ length: Math.floor(barLength) + 1 }).map((_, i) => {
                        const x = -barLength * 35 / 2 + i * 35;
                        const meterValue = -halfLength + i;
                        return (
                          <g key={i}>
                            <line x1={x} y1="-8" x2={x} y2="8" stroke="#cbd5e1" strokeWidth="2" />
                            <text x={x} y="28" textAnchor="middle" fontSize="10" fill="#64748b">
                              {formatNumber(meterValue, 0)}m
                            </text>
                          </g>
                        );
                      })}

                      {/* pivô */}
                      <circle cx={pivotPosition * 35} cy="0" r="7" fill="#0f172a" />

                      {/* força 1 */}
                      <ForceVector
                        x={distance1 * 35}
                        force={force1}
                        angleDeg={angle1}
                        color="#ef4444"
                        marker="url(#arrow-red-torque)"
                        label="F₁"
                      />

                      {/* força 2 */}
                      <ForceVector
                        x={distance2 * 35}
                        force={force2}
                        angleDeg={angle2}
                        color="#3b82f6"
                        marker="url(#arrow-blue-torque)"
                        label="F₂"
                      />

                      {/* força 3 */}
                      <ForceVector
                        x={distance3 * 35}
                        force={force3}
                        angleDeg={angle3}
                        color="#059669"
                        marker="url(#arrow-green-torque)"
                        label="F₃"
                      />

                      {/* peso da barra */}
                      {showBarWeight && (
                        <>
                          <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2={barWeight * 0.9}
                            stroke="#475569"
                            strokeWidth="4"
                            markerEnd="url(#arrow-gray-torque)"
                          />
                          <text
                            x="12"
                            y={barWeight * 0.9 + 4}
                            fontSize="12"
                            fontWeight="700"
                            fill="#334155"
                          >
                            P_b
                          </text>
                        </>
                      )}
                    </g>

                    {/* selo */}
                    {isBalanced ? (
                      <g>
                        <rect
                          x="350"
                          y="28"
                          width="280"
                          height="50"
                          rx="12"
                          fill="#dcfce7"
                          stroke="#86efac"
                        />
                        <text
                          x="490"
                          y="60"
                          textAnchor="middle"
                          fontSize="22"
                          fontWeight="700"
                          fill="#16a34a"
                        >
                          ✓ EQUILÍBRIO ROTACIONAL
                        </text>
                      </g>
                    ) : (
                      <g>
                        <rect
                          x="340"
                          y="28"
                          width="300"
                          height="50"
                          rx="12"
                          fill="#fef3c7"
                          stroke="#fcd34d"
                        />
                        <text
                          x="490"
                          y="60"
                          textAnchor="middle"
                          fontSize="18"
                          fontWeight="700"
                          fill="#b45309"
                        >
                          {netTorque > 0 ? "↺ TENDÊNCIA ANTI-HORÁRIA" : "↻ TENDÊNCIA HORÁRIA"}
                        </text>
                      </g>
                    )}

                    {/* legenda */}
                    <g>
                      <rect
                        x="700"
                        y="44"
                        width="220"
                        height="145"
                        rx="12"
                        fill="white"
                        stroke="#e2e8f0"
                      />
                      <text x="720" y="68" fontSize="13" fontWeight="700" fill="#0f172a">
                        Legenda
                      </text>
                      <text x="720" y="92" fontSize="12" fill="#dc2626">
                        Vermelho: força F₁
                      </text>
                      <text x="720" y="112" fontSize="12" fill="#2563eb">
                        Azul: força F₂
                      </text>
                      <text x="720" y="132" fontSize="12" fill="#059669">
                        Verde: força F₃
                      </text>
                      <text x="720" y="152" fontSize="12" fill="#334155">
                        Cinza: peso da barra
                      </text>
                      <text x="720" y="172" fontSize="12" fill="#0f172a">
                        Preto: pivô
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
                  ["F₁⊥", formatUnit(force1Perp, "N")],
                  ["τ₁", formatUnit(torque1, "N·m")],
                ]}
              />

              <CalcMiniCard
                title="Força 2"
                values={[
                  ["F₂⊥", formatUnit(force2Perp, "N")],
                  ["τ₂", formatUnit(torque2, "N·m")],
                ]}
              />

              <CalcMiniCard
                title="Força 3"
                values={[
                  ["F₃⊥", formatUnit(force3Perp, "N")],
                  ["τ₃", formatUnit(torque3, "N·m")],
                ]}
              />

              <CalcMiniCard
                title="Sistema"
                values={[
                  ["τ resultante", formatUnit(netTorque, "N·m")],
                  ["Estado", isBalanced ? "Equilíbrio" : "Rotação"],
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
                title="Torques das forças aplicadas"
                formulas={[
                  String.raw`\tau_1 = r_1 F_1 \sin\theta_1 = ${formatNumber(distance1)} \cdot ${formatNumber(force1)} \cdot \sin(${formatNumber(angle1)}^\circ) = ${formatNumber(torque1)} \,\text{N·m}`,
                  String.raw`\tau_2 = r_2 F_2 \sin\theta_2 = ${formatNumber(distance2)} \cdot ${formatNumber(force2)} \cdot \sin(${formatNumber(angle2)}^\circ) = ${formatNumber(torque2)} \,\text{N·m}`,
                  String.raw`\tau_3 = r_3 F_3 \sin\theta_3 = ${formatNumber(distance3)} \cdot ${formatNumber(force3)} \cdot \sin(${formatNumber(angle3)}^\circ) = ${formatNumber(torque3)} \,\text{N·m}`,
                ]}
              />

              {showBarWeight && (
                <CalcSection
                  title="Torque do peso da barra"
                  formulas={[
                    String.raw`P_b = m_b g = ${formatNumber(barMass)} \cdot ${formatNumber(g)} = ${formatNumber(barWeight)} \,\text{N}`,
                    String.raw`\tau_b = (x_{CM} - x_p)(-P_b) = (${formatNumber(barCenterPosition)} - ${formatNumber(
                      pivotPosition
                    )})(-${formatNumber(barWeight)}) = ${formatNumber(barWeightTorque)} \,\text{N·m}`,
                  ]}
                />
              )}

              <CalcSection
                title="Torque resultante"
                formulas={[
                  showBarWeight
                    ? String.raw`\Sigma\tau = \tau_1 + \tau_2 + \tau_3 + \tau_b = ${formatNumber(
                        torque1
                      )} + ${formatNumber(torque2)} + ${formatNumber(torque3)} + ${formatNumber(
                        barWeightTorque
                      )} = ${formatNumber(netTorque)} \,\text{N·m}`
                    : String.raw`\Sigma\tau = \tau_1 + \tau_2 + \tau_3 = ${formatNumber(
                        torque1
                      )} + ${formatNumber(torque2)} + ${formatNumber(torque3)} = ${formatNumber(
                        netTorque
                      )} \,\text{N·m}`,
                  isBalanced
                    ? String.raw`\text{Como }\Sigma\tau \approx 0,\ \text{o sistema está em equilíbrio rotacional.}`
                    : netTorque > 0
                    ? String.raw`\Sigma\tau > 0 \Rightarrow \text{tendência de rotação anti-horária.}`
                    : String.raw`\Sigma\tau < 0 \Rightarrow \text{tendência de rotação horária.}`,
                ]}
              />

              <CalcSection
                title="Componente perpendicular das forças"
                formulas={[
                  String.raw`F_{1\perp} = F_1\sin\theta_1 = ${formatNumber(force1)}\sin(${formatNumber(
                    angle1
                  )}^\circ) = ${formatNumber(force1Perp)} \,\text{N}`,
                  String.raw`F_{2\perp} = F_2\sin\theta_2 = ${formatNumber(force2)}\sin(${formatNumber(
                    angle2
                  )}^\circ) = ${formatNumber(force2Perp)} \,\text{N}`,
                  String.raw`F_{3\perp} = F_3\sin\theta_3 = ${formatNumber(force3)}\sin(${formatNumber(
                    angle3
                  )}^\circ) = ${formatNumber(force3Perp)} \,\text{N}`,
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

function ForceCard({
  title,
  titleClass,
  bgClass,
  force,
  distance,
  angle,
  setForce,
  setDistance,
  setAngle,
  forceSymbol,
  distanceSymbol,
  angleSymbol,
  valueClass,
  minDist,
  maxDist,
}: {
  title: string;
  titleClass: string;
  bgClass: string;
  force: number;
  distance: number;
  angle: number;
  setForce: (value: number) => void;
  setDistance: (value: number) => void;
  setAngle: (value: number) => void;
  forceSymbol: string;
  distanceSymbol: string;
  angleSymbol: string;
  valueClass: string;
  minDist: number;
  maxDist: number;
}) {
  return (
    <div className={`rounded-xl border p-4 ${bgClass}`}>
      <h5 className={`mb-4 text-sm font-bold uppercase tracking-wide ${titleClass}`}>
        {title}
      </h5>

      <div className="space-y-5">
        <ControlRow label="Intensidade" symbol={forceSymbol} value={formatUnit(force, "N")}>
          <Slider
            value={[force]}
            onValueChange={(value) => setForce(value[0])}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </ControlRow>

        <ControlRow label="Posição na barra" symbol={distanceSymbol} value={formatUnit(distance, "m")}>
          <Slider
            value={[distance]}
            onValueChange={(value) => setDistance(value[0])}
            min={minDist}
            max={maxDist}
            step={0.5}
            className="w-full"
          />
        </ControlRow>

        <ControlRow label="Ângulo da força" symbol={angleSymbol} value={formatUnit(angle, "°")}>
          <Slider
            value={[angle]}
            onValueChange={(value) => setAngle(value[0])}
            min={0}
            max={180}
            step={5}
            className="w-full"
          />
        </ControlRow>

        <p className={`text-sm font-bold ${valueClass}`}>
          Componente útil: {formatUnit(force * Math.sin(degToRad(angle)), "N")}
        </p>
      </div>
    </div>
  );
}

function ForceVector({
  x,
  force,
  angleDeg,
  color,
  marker,
  label,
}: {
  x: number;
  force: number;
  angleDeg: number;
  color: string;
  marker: string;
  label: string;
}) {
  const rad = degToRad(angleDeg);
  const x2 = x + force * Math.cos(rad);
  const y2 = -force * Math.sin(rad);

  return (
    <g transform={`translate(${x}, 0)`}>
      <line
        x1="0"
        y1="0"
        x2={force * Math.cos(rad)}
        y2={-force * Math.sin(rad)}
        stroke={color}
        strokeWidth="4"
        markerEnd={marker}
      />
      <circle cx="0" cy="-16" r="14" fill={color} opacity="0.22" />
      <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>
        {label}
      </text>

      <line
        x1="0"
        y1="0"
        x2="0"
        y2={y2}
        stroke={color}
        strokeDasharray="4,4"
        strokeWidth="2"
        opacity="0.6"
      />
    </g>
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
