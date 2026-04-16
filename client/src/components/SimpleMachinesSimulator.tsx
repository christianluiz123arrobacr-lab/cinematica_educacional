import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import {  Select,  SelectContent,  SelectItem,  SelectTrigger,  SelectValue,} from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

type MachineType = "alavanca" | "plano" | "polia";
type LeverClass = "interfixa" | "interresistente" | "interpotente";

const degToRad = (deg: number) => (deg * Math.PI) / 180;

export const SimpleMachinesSimulator: React.FC = () => {
  const [tipoMaquina, setTipoMaquina] = useState<MachineType>("alavanca");
  const [carga, setCarga] = useState(100);
  const [useEfficiency, setUseEfficiency] = useState(true);
  const [efficiency, setEfficiency] = useState(85);

  // Alavanca
  const [leverClass, setLeverClass] = useState<LeverClass>("interfixa");
  const [bracoPotencia, setBracoPotencia] = useState(2);
  const [bracoResistencia, setBracoResistencia] = useState(1);
  const [deslocPotencia, setDeslocPotencia] = useState(2);

  // Plano inclinado
  const [anguloPlano, setAnguloPlano] = useState(30);
  const [comprimentoPlano, setComprimentoPlano] = useState(6);
  const [deslocPlano, setDeslocPlano] = useState(3);

  // Polias
  const [numPoliasMoveis, setNumPoliasMoveis] = useState(1);
  const [deslocPuxado, setDeslocPuxado] = useState(4);

  const eta = useMemo(() => (useEfficiency ? efficiency / 100 : 1), [
    useEfficiency,
    efficiency,
  ]);

  const alturaPlano = useMemo(() => {
    return comprimentoPlano * Math.sin(degToRad(anguloPlano));
  }, [comprimentoPlano, anguloPlano]);

  const vantagemIdeal = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      return bracoPotencia / bracoResistencia;
    }
    if (tipoMaquina === "plano") {
      const sin = Math.sin(degToRad(anguloPlano));
      return sin > 0 ? 1 / sin : 0;
    }
    return Math.pow(2, numPoliasMoveis);
  }, [
    tipoMaquina,
    bracoPotencia,
    bracoResistencia,
    anguloPlano,
    numPoliasMoveis,
  ]);

  const vantagemReal = useMemo(() => vantagemIdeal * eta, [vantagemIdeal, eta]);

  const forcaIdeal = useMemo(() => {
    if (vantagemIdeal <= 0) return 0;
    return carga / vantagemIdeal;
  }, [carga, vantagemIdeal]);

  const forcaReal = useMemo(() => {
    if (vantagemReal <= 0) return 0;
    return carga / vantagemReal;
  }, [carga, vantagemReal]);

  const forcaPotencia = useMemo(() => {
    return useEfficiency ? forcaReal : forcaIdeal;
  }, [useEfficiency, forcaIdeal, forcaReal]);

  const segmentosCordas = useMemo(() => {
    if (tipoMaquina !== "polia") return 0;
    return Math.pow(2, numPoliasMoveis);
  }, [tipoMaquina, numPoliasMoveis]);

  const deslocResistencia = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      return deslocPotencia * (bracoResistencia / bracoPotencia) * eta;
    }
    if (tipoMaquina === "plano") {
      return deslocPlano * Math.sin(degToRad(anguloPlano)) * eta;
    }
    return (deslocPuxado / Math.max(segmentosCordas, 1)) * eta;
  }, [
    tipoMaquina,
    deslocPotencia,
    bracoResistencia,
    bracoPotencia,
    deslocPlano,
    anguloPlano,
    deslocPuxado,
    segmentosCordas,
    eta,
  ]);

  const trabalhoEntrada = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      return forcaPotencia * deslocPotencia;
    }
    if (tipoMaquina === "plano") {
      return forcaPotencia * deslocPlano;
    }
    return forcaPotencia * deslocPuxado;
  }, [tipoMaquina, forcaPotencia, deslocPotencia, deslocPlano, deslocPuxado]);

  const trabalhoSaida = useMemo(() => {
    return carga * deslocResistencia;
  }, [carga, deslocResistencia]);

  const torquePotencia = useMemo(() => {
    if (tipoMaquina !== "alavanca") return 0;
    return forcaPotencia * bracoPotencia;
  }, [tipoMaquina, forcaPotencia, bracoPotencia]);

  const torqueResistencia = useMemo(() => {
    if (tipoMaquina !== "alavanca") return 0;
    return carga * bracoResistencia;
  }, [tipoMaquina, carga, bracoResistencia]);

  const descricaoMaquina = useMemo(() => {
    if (tipoMaquina === "alavanca") {
      if (leverClass === "interfixa") {
        return "Na alavanca interfixa, o apoio fica entre potência e resistência.";
      }
      if (leverClass === "interresistente") {
        return "Na alavanca inter-resistente, a resistência fica entre apoio e potência.";
      }
      return "Na alavanca interpotente, a potência fica entre apoio e resistência.";
    }
    if (tipoMaquina === "plano") {
      return "O plano inclinado reduz a força necessária em troca de um deslocamento maior.";
    }
    return "As polias distribuem a carga entre vários segmentos de corda, reduzindo a força aplicada.";
  }, [tipoMaquina, leverClass]);

  const applyPreset = (preset: string) => {
    if (preset === "lever_easy") {
      setTipoMaquina("alavanca");
      setLeverClass("interfixa");
      setCarga(120);
      setBracoPotencia(4);
      setBracoResistencia(1);
      setDeslocPotencia(2);
      setUseEfficiency(true);
      setEfficiency(90);
    }

    if (preset === "lever_hard") {
      setTipoMaquina("alavanca");
      setLeverClass("interpotente");
      setCarga(120);
      setBracoPotencia(1);
      setBracoResistencia(3);
      setDeslocPotencia(2);
      setUseEfficiency(true);
      setEfficiency(80);
    }

    if (preset === "plane_easy") {
      setTipoMaquina("plano");
      setCarga(150);
      setAnguloPlano(20);
      setComprimentoPlano(8);
      setDeslocPlano(4);
      setUseEfficiency(true);
      setEfficiency(85);
    }

    if (preset === "plane_hard") {
      setTipoMaquina("plano");
      setCarga(150);
      setAnguloPlano(55);
      setComprimentoPlano(5);
      setDeslocPlano(3);
      setUseEfficiency(true);
      setEfficiency(80);
    }

    if (preset === "pulley_strong") {
      setTipoMaquina("polia");
      setCarga(200);
      setNumPoliasMoveis(3);
      setDeslocPuxado(6);
      setUseEfficiency(true);
      setEfficiency(90);
    }
  };

  const leverVisual = useMemo(() => {
    const baseCenterX = 490;
    const y = 245;
    const scale = 54;

    if (leverClass === "interfixa") {
      return {
        pivotX: baseCenterX,
        resistanceX: baseCenterX - bracoResistencia * scale,
        powerX: baseCenterX + bracoPotencia * scale,
      };
    }

    if (leverClass === "interresistente") {
      return {
        pivotX: baseCenterX - 160,
        resistanceX: baseCenterX - 40,
        powerX: baseCenterX + bracoPotencia * scale,
      };
    }

    return {
      pivotX: baseCenterX - 180,
      powerX: baseCenterX - 30,
      resistanceX: baseCenterX + bracoResistencia * scale,
    };
  }, [leverClass, bracoPotencia, bracoResistencia]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Máquinas Simples
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise força, deslocamento, trabalho, vantagem mecânica e eficiência.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="grid grid-cols-1 gap-3">
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("lever_easy")}
                >
                  Preset: alavanca vantajosa
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("lever_hard")}
                >
                  Preset: alavanca desvantajosa
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("plane_easy")}
                >
                  Preset: plano vantajoso
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("plane_hard")}
                >
                  Preset: plano íngreme
                </button>
                <button
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => applyPreset("pulley_strong")}
                >
                  Preset: polias fortes
                </button>
              </div>

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

              {tipoMaquina === "alavanca" && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Classe da alavanca
                  </p>
                  <Select
                    value={leverClass}
                    onValueChange={(value) => setLeverClass(value as LeverClass)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interfixa">Interfixa</SelectItem>
                      <SelectItem value="interresistente">Inter-resistente</SelectItem>
                      <SelectItem value="interpotente">Interpotente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modelo da máquina
                </p>
                <Select
                  value={useEfficiency ? "real" : "ideal"}
                  onValueChange={(value) => setUseEfficiency(value === "real")}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ideal">Ideal</SelectItem>
                    <SelectItem value="real">Com eficiência</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {useEfficiency && (
                <ControlRow
                  label="Eficiência"
                  symbol="η"
                  value={`${formatNumber(efficiency)} %`}
                >
                  <Slider
                    value={[efficiency]}
                    onValueChange={(value) => setEfficiency(value[0])}
                    min={40}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </ControlRow>
              )}

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

                  <ControlRow
                    label="Deslocamento da potência"
                    symbol="s_p"
                    value={formatUnit(deslocPotencia, "m")}
                  >
                    <Slider
                      value={[deslocPotencia]}
                      onValueChange={(value) => setDeslocPotencia(value[0])}
                      min={0.5}
                      max={6}
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

                  <ControlRow
                    label="Deslocamento aplicado"
                    symbol="s_p"
                    value={formatUnit(deslocPlano, "m")}
                  >
                    <Slider
                      value={[deslocPlano]}
                      onValueChange={(value) => setDeslocPlano(value[0])}
                      min={0.5}
                      max={10}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              )}

              {tipoMaquina === "polia" && (
                <>
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

                  <ControlRow
                    label="Corda puxada"
                    symbol="s_p"
                    value={formatUnit(deslocPuxado, "m")}
                  >
                    <Slider
                      value={[deslocPuxado]}
                      onValueChange={(value) => setDeslocPuxado(value[0])}
                      min={0.5}
                      max={10}
                      step={0.5}
                      className="w-full"
                    />
                  </ControlRow>
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
                    Força ideal <MathFormula inline formula={String.raw`F_{ideal}`} />
                  </>
                }
                value={formatUnit(forcaIdeal, "N")}
              />

              <MetricCard
                label={
                  <>
                    Força aplicada <MathFormula inline formula={String.raw`F_p`} />
                  </>
                }
                value={formatUnit(forcaPotencia, "N")}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label={
                  <>
                    Vantagem mecânica ideal{" "}
                    <MathFormula inline formula={String.raw`VM_i`} />
                  </>
                }
                value={formatNumber(vantagemIdeal, 2)}
              />

              <MetricCard
                label={
                  <>
                    Vantagem mecânica real{" "}
                    <MathFormula inline formula={String.raw`VM_r`} />
                  </>
                }
                value={formatNumber(vantagemReal, 2)}
                valueClassName="text-green-700"
              />

              <MetricCard
                label={
                  <>
                    Deslocamento da carga{" "}
                    <MathFormula inline formula={String.raw`s_r`} />
                  </>
                }
                value={formatUnit(deslocResistencia, "m")}
              />

              <MetricCard
                label={
                  <>
                    Trabalho de entrada{" "}
                    <MathFormula inline formula={String.raw`W_{in}`} />
                  </>
                }
                value={formatUnit(trabalhoEntrada, "J")}
              />

              <MetricCard
                label={
                  <>
                    Trabalho útil{" "}
                    <MathFormula inline formula={String.raw`W_{out}`} />
                  </>
                }
                value={formatUnit(trabalhoSaida, "J")}
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
                  {tipoMaquina === "alavanca" && (
                    <svg
                      width="980"
                      height="420"
                      viewBox="0 0 980 420"
                      className="mx-auto w-full min-w-[780px] rounded-lg border border-slate-200 bg-slate-50"
                    >
                      <defs>
                        <pattern id="grid-machines-lever-2" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-machine-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                        <marker id="arrow-red-machine-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-lever-2)" />
                      <rect x="180" y="242" width="620" height="16" rx="6" fill="#475569" />
                      <path d={`M ${leverVisual.pivotX - 30} 320 L ${leverVisual.pivotX + 30} 320 L ${leverVisual.pivotX} 255 Z`} fill="#64748b" />

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

                      <circle cx={leverVisual.pivotX} cy="250" r="7" fill="#0f172a" />

                      <g transform={`translate(${leverVisual.resistanceX}, 242)`}>
                        <rect x="-22" y="-50" width="44" height="44" rx="8" fill="#ef4444" />
                        <text x="0" y="-22" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
                          R
                        </text>
                        <line x1="0" y1="-6" x2="0" y2={-6 - carga * 0.45} stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow-red-machine-2)" />
                      </g>

                      <g transform={`translate(${leverVisual.powerX}, 242)`}>
                        <line x1="0" y1="-6" x2="0" y2={-6 - forcaPotencia * 0.8} stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-blue-machine-2)" />
                        <text x="0" y={-14 - forcaPotencia * 0.8} textAnchor="middle" fill="#2563eb" fontSize="13" fontWeight="700">
                          F
                        </text>
                      </g>

                      <text x="40" y="44" fontSize="14" fontWeight="700" fill="#0f172a">
                        ALAVANCA — {leverClass.toUpperCase()}
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
                        <pattern id="grid-machines-plane-2" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-plane-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-plane-2)" />

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
                                markerEnd="url(#arrow-blue-plane-2)"
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
                        <pattern id="grid-machines-pulley-2" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                        <marker id="arrow-blue-pulley-2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>

                      <rect width="980" height="420" fill="url(#grid-machines-pulley-2)" />
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
                      <line x1="610" y1="50" x2="610" y2="140" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue-pulley-2)" />

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
                  ["VM ideal", formatNumber(vantagemIdeal, 2)],
                  ["VM real", formatNumber(vantagemReal, 2)],
                ]}
              />

              <CalcMiniCard
                title="Deslocamentos"
                values={[
                  ["s potência", formatUnit(
                    tipoMaquina === "alavanca"
                      ? deslocPotencia
                      : tipoMaquina === "plano"
                      ? deslocPlano
                      : deslocPuxado,
                    "m"
                  )],
                  ["s resistência", formatUnit(deslocResistencia, "m")],
                ]}
              />

              <CalcMiniCard
                title="Trabalho"
                values={[
                  ["W entrada", formatUnit(trabalhoEntrada, "J")],
                  ["W útil", formatUnit(trabalhoSaida, "J")],
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
              {tipoMaquina === "alavanca" && (
                <>
                  <CalcSection
                    title="Equilíbrio de momentos"
                    formulas={[
                      String.raw`F_p \cdot d_p = R \cdot d_r`,
                      String.raw`F_{ideal} = \frac{R \cdot d_r}{d_p} = \frac{${formatNumber(carga)} \cdot ${formatNumber(
                        bracoResistencia
                      )}}{${formatNumber(bracoPotencia)}} = ${formatNumber(forcaIdeal)} \,\text{N}`,
                      String.raw`\tau_p = F_p d_p = ${formatNumber(forcaPotencia)} \cdot ${formatNumber(
                        bracoPotencia
                      )} = ${formatNumber(torquePotencia)} \,\text{N·m}`,
                      String.raw`\tau_r = R d_r = ${formatNumber(carga)} \cdot ${formatNumber(
                        bracoResistencia
                      )} = ${formatNumber(torqueResistencia)} \,\text{N·m}`,
                    ]}
                  />

                  <CalcSection
                    title="Vantagem mecânica e eficiência"
                    formulas={[
                      String.raw`VM_i = \frac{R}{F_{ideal}} = \frac{${formatNumber(carga)}}{${formatNumber(
                        forcaIdeal
                      )}} = ${formatNumber(vantagemIdeal, 2)}`,
                      String.raw`VM_i = \frac{d_p}{d_r} = \frac{${formatNumber(
                        bracoPotencia
                      )}}{${formatNumber(bracoResistencia)}} = ${formatNumber(vantagemIdeal, 2)}`,
                      String.raw`\eta = ${formatNumber(eta, 2)}`,
                      String.raw`VM_r = VM_i \cdot \eta = ${formatNumber(vantagemIdeal, 2)} \cdot ${formatNumber(
                        eta,
                        2
                      )} = ${formatNumber(vantagemReal, 2)}`,
                    ]}
                  />

                  <CalcSection
                    title="Deslocamento e trabalho"
                    formulas={[
                      String.raw`s_r = s_p \cdot \frac{d_r}{d_p} \cdot \eta = ${formatNumber(
                        deslocPotencia
                      )} \cdot \frac{${formatNumber(bracoResistencia)}}{${formatNumber(
                        bracoPotencia
                      )}} \cdot ${formatNumber(eta, 2)} = ${formatNumber(
                        deslocResistencia
                      )} \,\text{m}`,
                      String.raw`W_{in} = F_p \cdot s_p = ${formatNumber(forcaPotencia)} \cdot ${formatNumber(
                        deslocPotencia
                      )} = ${formatNumber(trabalhoEntrada)} \,\text{J}`,
                      String.raw`W_{out} = R \cdot s_r = ${formatNumber(carga)} \cdot ${formatNumber(
                        deslocResistencia
                      )} = ${formatNumber(trabalhoSaida)} \,\text{J}`,
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
                      String.raw`F_{ideal} = R \sin\theta = ${formatNumber(carga)} \sin(${formatNumber(
                        anguloPlano
                      )}^\circ) = ${formatNumber(forcaIdeal)} \,\text{N}`,
                      String.raw`F_p = \frac{F_{ideal}}{\eta} = \frac{${formatNumber(
                        forcaIdeal
                      )}}{${formatNumber(eta, 2)}} = ${formatNumber(forcaPotencia)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Vantagem mecânica"
                    formulas={[
                      String.raw`VM_i = \frac{L}{h} = \frac{${formatNumber(comprimentoPlano)}}{${formatNumber(
                        alturaPlano
                      )}} = ${formatNumber(vantagemIdeal, 2)}`,
                      String.raw`VM_r = VM_i \cdot \eta = ${formatNumber(vantagemIdeal, 2)} \cdot ${formatNumber(
                        eta,
                        2
                      )} = ${formatNumber(vantagemReal, 2)}`,
                    ]}
                  />

                  <CalcSection
                    title="Deslocamento e trabalho"
                    formulas={[
                      String.raw`s_r = s_p \sin\theta \cdot \eta = ${formatNumber(
                        deslocPlano
                      )}\sin(${formatNumber(anguloPlano)}^\circ)\cdot ${formatNumber(eta, 2)} = ${formatNumber(
                        deslocResistencia
                      )} \,\text{m}`,
                      String.raw`W_{in} = F_p \cdot s_p = ${formatNumber(forcaPotencia)} \cdot ${formatNumber(
                        deslocPlano
                      )} = ${formatNumber(trabalhoEntrada)} \,\text{J}`,
                      String.raw`W_{out} = R \cdot s_r = ${formatNumber(carga)} \cdot ${formatNumber(
                        deslocResistencia
                      )} = ${formatNumber(trabalhoSaida)} \,\text{J}`,
                    ]}
                  />
                </>
              )}

              {tipoMaquina === "polia" && (
                <>
                  <CalcSection
                    title="Distribuição da carga"
                    formulas={[
                      String.raw`VM_i = 2^n = 2^{${numPoliasMoveis}} = ${formatNumber(vantagemIdeal, 2)}`,
                      String.raw`F_{ideal} = \frac{R}{2^n} = \frac{${formatNumber(carga)}}{${formatNumber(
                        vantagemIdeal,
                        0
                      )}} = ${formatNumber(forcaIdeal)} \,\text{N}`,
                      String.raw`F_p = \frac{F_{ideal}}{\eta} = \frac{${formatNumber(
                        forcaIdeal
                      )}}{${formatNumber(eta, 2)}} = ${formatNumber(forcaPotencia)} \,\text{N}`,
                    ]}
                  />

                  <CalcSection
                    title="Segmentos e deslocamento"
                    formulas={[
                      String.raw`\text{Segmentos ativos} = 2^n = ${formatNumber(segmentosCordas, 0)}`,
                      String.raw`s_r = \frac{s_p}{2^n}\cdot \eta = \frac{${formatNumber(
                        deslocPuxado
                      )}}{${formatNumber(segmentosCordas, 0)}}\cdot ${formatNumber(eta, 2)} = ${formatNumber(
                        deslocResistencia
                      )} \,\text{m}`,
                    ]}
                  />

                  <CalcSection
                    title="Trabalho"
                    formulas={[
                      String.raw`W_{in} = F_p \cdot s_p = ${formatNumber(forcaPotencia)} \cdot ${formatNumber(
                        deslocPuxado
                      )} = ${formatNumber(trabalhoEntrada)} \,\text{J}`,
                      String.raw`W_{out} = R \cdot s_r = ${formatNumber(carga)} \cdot ${formatNumber(
                        deslocResistencia
                      )} = ${formatNumber(trabalhoSaida)} \,\text{J}`,
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
