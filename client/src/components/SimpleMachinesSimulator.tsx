import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select,  SelectContent, SelectItem,  SelectTrigger,  SelectValue, } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

type MachineType = "alavanca" | "plano" | "polia";

const degToRad = (deg: number) => (deg * Math.PI) / 180;

export const SimpleMachinesSimulator: React.FC = () => {
  const [tipoMaquina, setTipoMaquina] = useState<MachineType>("alavanca");
  const [carga, setCarga] = useState(100);

  // Alavanca
  const [bracoPotencia, setBracoPotencia] = useState(2);
  const [bracoResistencia, setBracoResistencia] = useState(1);

  // Plano inclinado
  const [anguloPlano, setAnguloPlano] = useState(30);
  const [comprimentoPlano, setComprimentoPlano] = useState(6);

  // Polias
  const [numPoliasMoveis, setNumPoliasMoveis] = useState(1);

  const forcaPotencia = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      return (carga * bracoResistencia) / bracoPotencia;
    }

    if (tipoMaquina === "plano") {
      const altura = comprimentoPlano * Math.sin(degToRad(anguloPlano));
      return (carga * altura) / comprimentoPlano;
    }

    return carga / Math.pow(2, numPoliasMoveis);
  }, [
    tipoMaquina,
    carga,
    bracoResistencia,
    bracoPotencia,
    comprimentoPlano,
    anguloPlano,
    numPoliasMoveis,
  ]);

  const vantagemMecanica = useMemo(() => {
    if (forcaPotencia <= 0) return 0;
    return carga / forcaPotencia;
  }, [carga, forcaPotencia]);

  const alturaPlano = useMemo(() => {
    return comprimentoPlano * Math.sin(degToRad(anguloPlano));
  }, [comprimentoPlano, anguloPlano]);

  const torquePotencia = useMemo(() => {
    if (tipoMaquina !== "alavanca") return 0;
    return forcaPotencia * bracoPotencia;
  }, [tipoMaquina, forcaPotencia, bracoPotencia]);

  const torqueResistencia = useMemo(() => {
    if (tipoMaquina !== "alavanca") return 0;
    return carga * bracoResistencia;
  }, [tipoMaquina, carga, bracoResistencia]);

  const segmentosCordas = useMemo(() => {
    if (tipoMaquina !== "polia") return 0;
    return Math.pow(2, numPoliasMoveis);
  }, [tipoMaquina, numPoliasMoveis]);

  const descricaoMaquina = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      return "A alavanca reduz a força necessária aumentando o braço da potência.";
    }
    if (tipoMaquina === "plano") {
      return "O plano inclinado troca força por distância, reduzindo a força aplicada.";
    }
    return "A associação de polias multiplica a força dividindo a carga entre vários segmentos de corda.";
  }, [tipoMaquina]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Máquinas Simples
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Compare como alavancas, planos inclinados e polias reduzem a força necessária.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tipo de máquina
                </p>
                <Select
                  value={tipoMaquina}
                  onValueChange={(value) => setTipoMaquina(value as MachineType)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alavanca">Alavanca</SelectItem>
                    <SelectItem value="plano">Plano inclinado</SelectItem>
                    <SelectItem value="polia">Associação de polias</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow
                label="Carga / resistência"
                symbol="R"
                value={formatUnit(carga, "N")}
              >
                <Slider
                  value={[carga]}
                  onValueChange={(value) => setCarga(value[0])}
                  min={10}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </ControlRow>

              {tipoMaquina === "alavanca" && (
                <>
                  <ControlRow
                    label="Braço da potência"
                    symbol="d_p"
                    value={formatUnit(bracoPotencia, "m")}
                  >
                    <Slider
                      value={[bracoPotencia]}
                      onValueChange={(value) => setBracoPotencia(value[0])}
                      min={0.5}
                      max={5}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Braço da resistência"
                    symbol="d_r"
                    value={formatUnit(bracoResistencia, "m")}
                  >
                    <Slider
                      value={[bracoResistencia]}
                      onValueChange={(value) => setBracoResistencia(value[0])}
                      min={0.5}
                      max={5}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {tipoMaquina === "plano" && (
                <>
                  <ControlRow
                    label="Ângulo do plano"
                    symbol="θ"
                    value={formatUnit(anguloPlano, "°")}
                  >
                    <Slider
                      value={[anguloPlano]}
                      onValueChange={(value) => setAnguloPlano(value[0])}
                      min={5}
                      max={85}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Comprimento do plano"
                    symbol="L"
                    value={formatUnit(comprimentoPlano, "m")}
                  >
                    <Slider
                      value={[comprimentoPlano]}
                      onValueChange={(value) => setComprimentoPlano(value[0])}
                      min={2}
                      max={10}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {tipoMaquina === "polia" && (
                <ControlRow
                  label="Número de polias móveis"
                  symbol="n"
                  value={String(numPoliasMoveis)}
                >
                  <Slider
                    value={[numPoliasMoveis]}
                    onValueChange={(value) => setNumPoliasMoveis(value[0])}
                    min={0}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                </ControlRow>
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
                    Força necessária <MathFormula inline formula={String.raw`F_p`} />
                  </>
                }
                value={formatUnit(forcaPotencia, "N")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Vantagem mecânica <MathFormula inline formula={String.raw`VM`} />
                  </>
                }
                value={formatNumber(vantagemMecanica, 2)}
                valueClassName="text-green-700"
              />

              {tipoMaquina === "alavanca" && (
                <>
                  <MetricCard
                    label={
                      <>
                        Momento da potência{" "}
                        <MathFormula inline formula={String.raw`\tau_p`} />
                      </>
                    }
                    value={formatUnit(torquePotencia, "N·m")}
                  />
                  <MetricCard
                    label={
                      <>
                        Momento da resistência{" "}
                        <MathFormula inline formula={String.raw`\tau_r`} />
                      </>
                    }
                    value={formatUnit(torqueResistencia, "N·m")}
                  />
                </>
              )}

              {tipoMaquina === "plano" && (
                <MetricCard
                  label={
                    <>
                      Altura vencida <MathFormula inline formula={String.raw`h`} />
                    </>
                  }
                  value={formatUnit(alturaPlano, "m")}
                />
              )}

              {tipoMaquina === "polia" && (
                <MetricCard
                  label={<>Segmentos sustentando a carga</>}
                  value={String(segmentosCordas)}
                />
              )}

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-600">
                  Interpretação
                </p>
                <p className="mt-2 text-sm font-bold text-slate-900">
                  {descricaoMaquina}
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
                  {tipoMaquina === "alavanca" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <pattern id="grid-machines-lever" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-machine" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                        <marker id="arrow-red-machine" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-lever)" />

                      <path d="M 460 300 L 520 300 L 490 250 Z" fill="#64748b" />
                      <rect x="220" y="242" width="540" height="16" rx="6" fill="#475569" />

                      {Array.from({ length: 11 }).map((_, i) => {
                        const x = 220 + i * 54;
                        const value = i - 5;
                        return (
                          <g key={i}>
                            <line x1={x} y1="240" x2={x} y2="262" stroke="#cbd5e1" strokeWidth="2" />
                            <text x={x} y="282" textAnchor="middle" fontSize="11" fill="#64748b">
                              {value}m
                            </text>
                          </g>
                        );
                      })}

                      {/* resistência */}
                      <g transform={`translate(${490 - bracoResistencia * 54}, 242)`}>
                        <rect x="-22" y="-50" width="44" height="44" rx="8" fill="#ef4444" />
                        <text x="0" y="-22" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
                          R
                        </text>
                        <line x1="0" y1="-6" x2="0" y2={-6 - carga * 0.45} stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow-red-machine)" />
                      </g>

                      {/* potência */}
                      <g transform={`translate(${490 + bracoPotencia * 54}, 242)`}>
                        <line x1="0" y1="-6" x2="0" y2={-6 - forcaPotencia * 0.8} stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-blue-machine)" />
                        <text x="0" y={-14 - forcaPotencia * 0.8} textAnchor="middle" fill="#2563eb" fontSize="13" fontWeight="700">
                          F
                        </text>
                      </g>

                      <text x="40" y="40" fontSize="14" fontWeight="700" fill="#0f172a">
                        ALAVANCA
                      </text>
                    </svg>
                  )}

                  {tipoMaquina === "plano" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <pattern id="grid-machines-plane" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-plane" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-plane)" />

                      {(() => {
                        const baseX = 180;
                        const baseY = 330;
                        const visualL = 460;
                        const topX = baseX + visualL;
                        const topY = baseY - visualL * Math.tan(degToRad(anguloPlano));

                        return (
                          <>
                            <path
                              d={`M ${baseX} ${baseY} L ${topX} ${baseY} L ${baseX} ${topY} Z`}
                              fill="#e2e8f0"
                              stroke="#64748b"
                              strokeWidth="3"
                            />

                            <g transform={`translate(${baseX + 170}, ${baseY - 100}) rotate(${-anguloPlano})`}>
                              <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#ef4444" />
                              <text x="0" y="7" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">
                                R
                              </text>
                              <line
                                x1="24"
                                y1="0"
                                x2={24 + forcaPotencia * 2}
                                y2="0"
                                stroke="#3b82f6"
                                strokeWidth="4"
                                markerEnd="url(#arrow-blue-plane)"
                              />
                            </g>

                            <text x="70" y="60" fontSize="14" fontWeight="700" fill="#0f172a">
                              PLANO INCLINADO
                            </text>
                            <text x="70" y="88" fontSize="12" fill="#334155">
                              θ = {formatNumber(anguloPlano, 0)}°
                            </text>
                            <text x="70" y="108" fontSize="12" fill="#334155">
                              L = {formatNumber(comprimentoPlano)} m
                            </text>
                            <text x="70" y="128" fontSize="12" fill="#334155">
                              h = {formatNumber(alturaPlano)} m
                            </text>
                          </>
                        );
                      })()}
                    </svg>
                  )}

                  {tipoMaquina === "polia" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <pattern id="grid-machines-pulley" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-pulley" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-pulley)" />

                      <line x1="330" y1="50" x2="650" y2="50" stroke="#0f172a" strokeWidth="5" />

                      {Array.from({ length: Math.max(1, numPoliasMoveis) }).map((_, i) => {
                        const y = 120 + i * 60;
                        return (
                          <g key={i} transform={`translate(490, ${y})`}>
                            <circle cx="0" cy="0" r="26" fill="white" stroke="#64748b" strokeWidth="3" />
                            <line x1="-26" y1="0" x2="-26" y2="-60" stroke="#94a3b8" strokeWidth="3" />
                            <line x1="26" y1="0" x2="26" y2="-60" stroke="#94a3b8" strokeWidth="3" />
                          </g>
                        );
                      })}

                      <g transform={`translate(490, ${120 + Math.max(1, numPoliasMoveis) * 60})`}>
                        <rect x="-28" y="0" width="56" height="56" rx="8" fill="#ef4444" />
                        <text x="0" y="34" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">
                          R
                        </text>
                      </g>

                      <line x1="516" y1="120" x2="516" y2="50" stroke="#3b82f6" strokeWidth="3" />
                      <line x1="516" y1="50" x2="610" y2="50" stroke="#3b82f6" strokeWidth="3" />
                      <line x1="610" y1="50" x2="610" y2="140" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue-pulley)" />

                      <text x="630" y="140" fontSize="13" fontWeight="700" fill="#2563eb">
                        F
                      </text>
                      <text x="70" y="60" fontSize="14" fontWeight="700" fill="#0f172a">
                        ASSOCIAÇÃO DE POLIAS
                      </text>
                      <text x="70" y="88" fontSize="12" fill="#334155">
                        Polias móveis: {numPoliasMoveis}
                      </text>
                      <text x="70" y="108" fontSize="12" fill="#334155">
                        Segmentos ativos: {segmentosCordas}
                      </text>
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
              <CalcMiniCard
                title="Forças"
                values={[
                  ["Resistência", formatUnit(carga, "N")],
                  ["Potência", formatUnit(forcaPotencia, "N")],
                ]}
              />

              <CalcMiniCard
                title="Vantagem"
                values={[
                  ["VM", formatNumber(vantagemMecanica, 2)],
                  ["Redução da força", `${formatNumber((1 - forcaPotencia / carga) * 100, 1)} %`],
                ]}
              />

              {tipoMaquina === "alavanca" && (
                <CalcMiniCard
                  title="Braços"
                  values={[
                    ["d_p", formatUnit(bracoPotencia, "m")],
                    ["d_r", formatUnit(bracoResistencia, "m")],
                  ]}
                />
              )}

              {tipoMaquina === "plano" && (
                <CalcMiniCard
                  title="Geometria"
                  values={[
                    ["L", formatUnit(comprimentoPlano, "m")],
                    ["h", formatUnit(alturaPlano, "m")],
                  ]}
                />
              )}

              {tipoMaquina === "polia" && (
                <CalcMiniCard
                  title="Sistema"
                  values={[
                    ["Polias móveis", String(numPoliasMoveis)],
                    ["Segmentos", String(segmentosCordas)],
                  ]}
                />
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
              {tipoMaquina === "alavanca" && (
                <>
                  <CalcSection
                    title="Equilíbrio de momentos"
                    formulas={[
                      String.raw`F_p \cdot d_p = R \cdot d_r`,
                      String.raw`F_p = \frac{R \cdot d_r}{d_p} = \frac{${formatNumber(carga)} \cdot ${formatNumber(
                        bracoResistencia
                      )}}{${formatNumber(bracoPotencia)}} = ${formatNumber(forcaPotencia)} \,\text{N}`,
                      String.raw`\tau_p = F_p d_p = ${formatNumber(forcaPotencia)} \cdot ${formatNumber(
                        bracoPotencia
                      )} = ${formatNumber(torquePotencia)} \,\text{N·m}`,
                      String.raw`\tau_r = R d_r = ${formatNumber(carga)} \cdot ${formatNumber(
                        bracoResistencia
                      )} = ${formatNumber(torqueResistencia)} \,\text{N·m}`,
                    ]}
                  />

                  <CalcSection
                    title="Vantagem mecânica"
                    formulas={[
                      String.raw`VM = \frac{R}{F_p} = \frac{${formatNumber(carga)}}{${formatNumber(
                        forcaPotencia
                      )}} = ${formatNumber(vantagemMecanica, 2)}`,
                      String.raw`VM = \frac{d_p}{d_r} = \frac{${formatNumber(
                        bracoPotencia
                      )}}{${formatNumber(bracoResistencia)}} = ${formatNumber(vantagemMecanica, 2)}`,
                    ]}
                  />
                </>
              )}

              {tipoMaquina === "plano" && (
                <>
                  <CalcSection
                    title="Geometria do plano"
                    formulas={[
                      String.raw`h = L \sin\theta = ${formatNumber(comprimentoPlano)} \sin(${formatNumber(
                        anguloPlano
                      )}^\circ) = ${formatNumber(alturaPlano)} \,\text{m}`,
                    ]}
                  />

                  <CalcSection
                    title="Força necessária"
                    formulas={[
                      String.raw`F_p = R \sin\theta = ${formatNumber(carga)} \sin(${formatNumber(
                        anguloPlano
                      )}^\circ) = ${formatNumber(forcaPotencia)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Vantagem mecânica"
                    formulas={[
                      String.raw`VM = \frac{R}{F_p} = \frac{${formatNumber(carga)}}{${formatNumber(
                        forcaPotencia
                      )}} = ${formatNumber(vantagemMecanica, 2)}`,
                      String.raw`VM = \frac{L}{h} = \frac{${formatNumber(comprimentoPlano)}}{${formatNumber(
                        alturaPlano
                      )}} = ${formatNumber(vantagemMecanica, 2)}`,
                    ]}
                  />
                </>
              )}

              {tipoMaquina === "polia" && (
                <>
                  <CalcSection
                    title="Distribuição da carga"
                    formulas={[
                      String.raw`F_p = \frac{R}{2^n} = \frac{${formatNumber(carga)}}{2^{${numPoliasMoveis}}} = ${formatNumber(
                        forcaPotencia
                      )} \,\text{N}`,
                      String.raw`VM = 2^n = 2^{${numPoliasMoveis}} = ${formatNumber(vantagemMecanica, 2)}`,
                    ]}
                  />

                  <CalcSection
                    title="Interpretação"
                    formulas={[
                      String.raw`\text{Cada polia móvel dobra o número de segmentos sustentando a carga.}`,
                      String.raw`\text{Logo, a força necessária cai na mesma proporção da vantagem mecânica.}`,
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
