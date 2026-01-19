import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trash2, Copy, Download } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";

interface CalculoHistorico {
  id: string;
  disciplina: string;
  tipo: string;
  entrada: Record<string, number>;
  resultado: number | Record<string, number>;
  timestamp: Date;
}

export default function Calculadora() {
  const [activeDisciplina, setActiveDisciplina] = useState("cinematica");
  const [historico, setHistorico] = useState<CalculoHistorico[]>([]);

  // ===== CINEMÁTICA =====
  const [cineInputs, setCineInputs] = useState({
    v0: 0,
    vf: 0,
    a: 0,
    t: 0,
    s: 0,
  });
  const [cineTipo, setCineTipo] = useState("velocidade");

  const calcularCinematica = () => {
    let resultado = 0;
    let tipo = cineTipo;

    if (cineTipo === "velocidade" && cineInputs.v0 !== undefined && cineInputs.a !== undefined && cineInputs.t !== undefined) {
      resultado = cineInputs.v0 + cineInputs.a * cineInputs.t;
      tipo = "Velocidade Final (v = v₀ + at)";
    } else if (cineTipo === "deslocamento" && cineInputs.v0 !== undefined && cineInputs.a !== undefined && cineInputs.t !== undefined) {
      resultado = cineInputs.v0 * cineInputs.t + 0.5 * cineInputs.a * cineInputs.t ** 2;
      tipo = "Deslocamento (s = v₀t + ½at²)";
    } else if (cineTipo === "torricelli" && cineInputs.v0 !== undefined && cineInputs.a !== undefined && cineInputs.s !== undefined) {
      resultado = Math.sqrt(cineInputs.v0 ** 2 + 2 * cineInputs.a * cineInputs.s);
      tipo = "Velocidade Final por Torricelli (vf² = v₀² + 2as)";
    } else if (cineTipo === "tempo" && cineInputs.v0 !== undefined && cineInputs.vf !== undefined && cineInputs.a !== undefined && cineInputs.a !== 0) {
      resultado = (cineInputs.vf - cineInputs.v0) / cineInputs.a;
      tipo = "Tempo (t = (vf - v₀) / a)";
    } else {
      alert("Preencha todos os campos necessários");
      return;
    }

    const novoCalculo: CalculoHistorico = {
      id: Date.now().toString(),
      disciplina: "Cinemática",
      tipo,
      entrada: cineInputs,
      resultado,
      timestamp: new Date(),
    };

    setHistorico([novoCalculo, ...historico]);
  };

  // ===== DINÂMICA =====
  const [dinInputs, setDinInputs] = useState({
    f: 0,
    m: 0,
    a: 0,
    mu: 0,
    g: 10,
  });
  const [dinTipo, setDinTipo] = useState("forca");

  const calcularDinamica = () => {
    let resultado = 0;
    let tipo = dinTipo;

    if (dinTipo === "forca" && dinInputs.m !== undefined && dinInputs.a !== undefined) {
      resultado = dinInputs.m * dinInputs.a;
      tipo = "Força (F = ma)";
    } else if (dinTipo === "aceleracao" && dinInputs.f !== undefined && dinInputs.m !== undefined && dinInputs.m !== 0) {
      resultado = dinInputs.f / dinInputs.m;
      tipo = "Aceleração (a = F/m)";
    } else if (dinTipo === "atrito" && dinInputs.mu !== undefined && dinInputs.m !== undefined && dinInputs.g !== undefined) {
      resultado = dinInputs.mu * dinInputs.m * dinInputs.g;
      tipo = "Força de Atrito (f = μ·m·g)";
    } else if (dinTipo === "peso" && dinInputs.m !== undefined && dinInputs.g !== undefined) {
      resultado = dinInputs.m * dinInputs.g;
      tipo = "Peso (P = m·g)";
    } else {
      alert("Preencha todos os campos necessários");
      return;
    }

    const novoCalculo: CalculoHistorico = {
      id: Date.now().toString(),
      disciplina: "Dinâmica",
      tipo,
      entrada: dinInputs,
      resultado,
      timestamp: new Date(),
    };

    setHistorico([novoCalculo, ...historico]);
  };

  // ===== ESTÁTICA =====
  const [estInputs, setEstInputs] = useState({
    f1: 0,
    d1: 0,
    f2: 0,
    d2: 0,
    rho: 1000,
    g: 10,
    h: 0,
  });
  const [estTipo, setEstTipo] = useState("torque");

  const calcularEstatica = () => {
    let resultado = 0;
    let tipo = estTipo;

    if (estTipo === "torque" && estInputs.f1 !== undefined && estInputs.d1 !== undefined) {
      resultado = estInputs.f1 * estInputs.d1;
      tipo = "Torque (τ = F·d)";
    } else if (estTipo === "alavanca" && estInputs.f1 !== undefined && estInputs.d1 !== undefined && estInputs.d2 !== undefined && estInputs.d2 !== 0) {
      resultado = (estInputs.f1 * estInputs.d1) / estInputs.d2;
      tipo = "Força na Alavanca (F₂ = F₁·d₁/d₂)";
    } else if (estTipo === "pressao" && estInputs.rho !== undefined && estInputs.g !== undefined && estInputs.h !== undefined) {
      resultado = estInputs.rho * estInputs.g * estInputs.h;
      tipo = "Pressão Hidrostática (P = ρ·g·h)";
    } else if (estTipo === "vm" && estInputs.f1 !== undefined && estInputs.f2 !== undefined && estInputs.f2 !== 0) {
      resultado = estInputs.f1 / estInputs.f2;
      tipo = "Vantagem Mecânica (VM = F_carga / F_aplicada)";
    } else {
      alert("Preencha todos os campos necessários");
      return;
    }

    const novoCalculo: CalculoHistorico = {
      id: Date.now().toString(),
      disciplina: "Estática",
      tipo,
      entrada: estInputs,
      resultado,
      timestamp: new Date(),
    };

    setHistorico([novoCalculo, ...historico]);
  };

  const limparHistorico = () => {
    if (confirm("Tem certeza que deseja limpar todo o histórico?")) {
      setHistorico([]);
    }
  };

  const copiarParaClipboard = (texto: string) => {
    navigator.clipboard.writeText(texto);
    alert("Copiado para a área de transferência!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Calculadora Avançada de Física</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Coluna Principal - Calculadora */}
          <div className="md:col-span-2 space-y-6">
            {/* Abas de Disciplinas */}
            <div className="flex gap-2 flex-wrap">
              {[
                { id: "cinematica", label: "Cinemática", cor: "bg-blue-600 hover:bg-blue-700" },
                { id: "dinamica", label: "Dinâmica", cor: "bg-purple-600 hover:bg-purple-700" },
                { id: "estatica", label: "Estática", cor: "bg-orange-600 hover:bg-orange-700" },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeDisciplina === tab.id ? "default" : "outline"}
                  onClick={() => setActiveDisciplina(tab.id)}
                  className={activeDisciplina === tab.id ? tab.cor : ""}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* ===== CINEMÁTICA ===== */}
            {activeDisciplina === "cinematica" && (
              <Card className="p-6 shadow-lg border-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cinemática</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Tipo de Cálculo</label>
                    <select
                      value={cineTipo}
                      onChange={(e) => setCineTipo(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="velocidade">Velocidade Final (v = v₀ + at)</option>
                      <option value="deslocamento">Deslocamento (s = v₀t + ½at²)</option>
                      <option value="torricelli">Torricelli (vf² = v₀² + 2as)</option>
                      <option value="tempo">Tempo (t = (vf - v₀) / a)</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {cineTipo !== "tempo" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">v₀ (m/s)</label>
                          <Input
                            type="number"
                            value={cineInputs.v0}
                            onChange={(e) => setCineInputs({ ...cineInputs, v0: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">a (m/s²)</label>
                          <Input
                            type="number"
                            value={cineInputs.a}
                            onChange={(e) => setCineInputs({ ...cineInputs, a: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}

                    {(cineTipo === "velocidade" || cineTipo === "deslocamento") && (
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">t (s)</label>
                        <Input
                          type="number"
                          value={cineInputs.t}
                          onChange={(e) => setCineInputs({ ...cineInputs, t: parseFloat(e.target.value) || 0 })}
                          placeholder="0"
                        />
                      </div>
                    )}

                    {cineTipo === "torricelli" && (
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">s (m)</label>
                        <Input
                          type="number"
                          value={cineInputs.s}
                          onChange={(e) => setCineInputs({ ...cineInputs, s: parseFloat(e.target.value) || 0 })}
                          placeholder="0"
                        />
                      </div>
                    )}

                    {cineTipo === "tempo" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">vf (m/s)</label>
                          <Input
                            type="number"
                            value={cineInputs.vf}
                            onChange={(e) => setCineInputs({ ...cineInputs, vf: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">v₀ (m/s)</label>
                          <Input
                            type="number"
                            value={cineInputs.v0}
                            onChange={(e) => setCineInputs({ ...cineInputs, v0: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">a (m/s²)</label>
                          <Input
                            type="number"
                            value={cineInputs.a}
                            onChange={(e) => setCineInputs({ ...cineInputs, a: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Button onClick={calcularCinematica} className="w-full bg-blue-600 hover:bg-blue-700">
                  Calcular
                </Button>
              </Card>
            )}

            {/* ===== DINÂMICA ===== */}
            {activeDisciplina === "dinamica" && (
              <Card className="p-6 shadow-lg border-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dinâmica</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Tipo de Cálculo</label>
                    <select
                      value={dinTipo}
                      onChange={(e) => setDinTipo(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="forca">Força (F = ma)</option>
                      <option value="aceleracao">Aceleração (a = F/m)</option>
                      <option value="atrito">Força de Atrito (f = μ·m·g)</option>
                      <option value="peso">Peso (P = m·g)</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {dinTipo !== "peso" && (
                      <>
                        {dinTipo !== "atrito" && (
                          <>
                            <div>
                              <label className="block text-sm font-bold text-slate-900 mb-2">m (kg)</label>
                              <Input
                                type="number"
                                value={dinInputs.m}
                                onChange={(e) => setDinInputs({ ...dinInputs, m: parseFloat(e.target.value) || 0 })}
                                placeholder="0"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-slate-900 mb-2">
                                {dinTipo === "forca" ? "a (m/s²)" : "F (N)"}
                              </label>
                              <Input
                                type="number"
                                value={dinTipo === "forca" ? dinInputs.a : dinInputs.f}
                                onChange={(e) =>
                                  dinTipo === "forca"
                                    ? setDinInputs({ ...dinInputs, a: parseFloat(e.target.value) || 0 })
                                    : setDinInputs({ ...dinInputs, f: parseFloat(e.target.value) || 0 })
                                }
                                placeholder="0"
                              />
                            </div>
                          </>
                        )}

                        {dinTipo === "atrito" && (
                          <>
                            <div>
                              <label className="block text-sm font-bold text-slate-900 mb-2">μ (coeficiente)</label>
                              <Input
                                type="number"
                                value={dinInputs.mu}
                                onChange={(e) => setDinInputs({ ...dinInputs, mu: parseFloat(e.target.value) || 0 })}
                                placeholder="0"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-slate-900 mb-2">m (kg)</label>
                              <Input
                                type="number"
                                value={dinInputs.m}
                                onChange={(e) => setDinInputs({ ...dinInputs, m: parseFloat(e.target.value) || 0 })}
                                placeholder="0"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-slate-900 mb-2">g (m/s²)</label>
                              <Input
                                type="number"
                                value={dinInputs.g}
                                onChange={(e) => setDinInputs({ ...dinInputs, g: parseFloat(e.target.value) || 10 })}
                                placeholder="10"
                              />
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {dinTipo === "peso" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">m (kg)</label>
                          <Input
                            type="number"
                            value={dinInputs.m}
                            onChange={(e) => setDinInputs({ ...dinInputs, m: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">g (m/s²)</label>
                          <Input
                            type="number"
                            value={dinInputs.g}
                            onChange={(e) => setDinInputs({ ...dinInputs, g: parseFloat(e.target.value) || 10 })}
                            placeholder="10"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Button onClick={calcularDinamica} className="w-full bg-purple-600 hover:bg-purple-700">
                  Calcular
                </Button>
              </Card>
            )}

            {/* ===== ESTÁTICA ===== */}
            {activeDisciplina === "estatica" && (
              <Card className="p-6 shadow-lg border-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Estática</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Tipo de Cálculo</label>
                    <select
                      value={estTipo}
                      onChange={(e) => setEstTipo(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="torque">Torque (τ = F·d)</option>
                      <option value="alavanca">Alavanca (F₂ = F₁·d₁/d₂)</option>
                      <option value="pressao">Pressão Hidrostática (P = ρ·g·h)</option>
                      <option value="vm">Vantagem Mecânica (VM = F_carga / F_aplicada)</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {estTipo === "torque" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">F (N)</label>
                          <Input
                            type="number"
                            value={estInputs.f1}
                            onChange={(e) => setEstInputs({ ...estInputs, f1: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">d (m)</label>
                          <Input
                            type="number"
                            value={estInputs.d1}
                            onChange={(e) => setEstInputs({ ...estInputs, d1: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}

                    {estTipo === "alavanca" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">F₁ (N)</label>
                          <Input
                            type="number"
                            value={estInputs.f1}
                            onChange={(e) => setEstInputs({ ...estInputs, f1: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">d₁ (m)</label>
                          <Input
                            type="number"
                            value={estInputs.d1}
                            onChange={(e) => setEstInputs({ ...estInputs, d1: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">d₂ (m)</label>
                          <Input
                            type="number"
                            value={estInputs.d2}
                            onChange={(e) => setEstInputs({ ...estInputs, d2: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}

                    {estTipo === "pressao" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">ρ (kg/m³)</label>
                          <Input
                            type="number"
                            value={estInputs.rho}
                            onChange={(e) => setEstInputs({ ...estInputs, rho: parseFloat(e.target.value) || 1000 })}
                            placeholder="1000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">g (m/s²)</label>
                          <Input
                            type="number"
                            value={estInputs.g}
                            onChange={(e) => setEstInputs({ ...estInputs, g: parseFloat(e.target.value) || 10 })}
                            placeholder="10"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">h (m)</label>
                          <Input
                            type="number"
                            value={estInputs.h}
                            onChange={(e) => setEstInputs({ ...estInputs, h: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}

                    {estTipo === "vm" && (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">F_carga (N)</label>
                          <Input
                            type="number"
                            value={estInputs.f1}
                            onChange={(e) => setEstInputs({ ...estInputs, f1: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-2">F_aplicada (N)</label>
                          <Input
                            type="number"
                            value={estInputs.f2}
                            onChange={(e) => setEstInputs({ ...estInputs, f2: parseFloat(e.target.value) || 0 })}
                            placeholder="0"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Button onClick={calcularEstatica} className="w-full bg-orange-600 hover:bg-orange-700">
                  Calcular
                </Button>
              </Card>
            )}
          </div>

          {/* Coluna Lateral - Histórico */}
          <div className="md:col-span-1">
            <Card className="p-6 shadow-lg border-0 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Histórico</h3>
                {historico.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={limparHistorico}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {historico.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-8">Nenhum cálculo realizado</p>
                ) : (
                  historico.map((calculo) => (
                    <div key={calculo.id} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <p className="text-xs font-bold text-slate-600 mb-1">{calculo.disciplina}</p>
                      <p className="text-xs text-slate-600 mb-2 line-clamp-2">{calculo.tipo}</p>
                      <div className="bg-white p-2 rounded mb-2 border border-slate-100">
                        <p className="text-sm font-bold text-slate-900">
                          {typeof calculo.resultado === "number"
                            ? calculo.resultado.toFixed(2)
                            : JSON.stringify(calculo.resultado)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copiarParaClipboard(calculo.resultado.toString())}
                          className="flex-1 text-xs"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copiar
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setHistorico(historico.filter((h) => h.id !== calculo.id))}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        {calculo.timestamp.toLocaleTimeString("pt-BR")}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
