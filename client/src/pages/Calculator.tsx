import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Calculator() {
  // MRU Calculator
  const [mruMode, setMruMode] = useState<"position" | "velocity">("position");
  const [mruInputs, setMruInputs] = useState({ s0: 0, v: 10, t: 5, s: 50 });
  const [mruResult, setMruResult] = useState<number | null>(null);

  const calculateMRU = () => {
    if (mruMode === "position") {
      const s = parseFloat(mruInputs.s0.toString()) + parseFloat(mruInputs.v.toString()) * parseFloat(mruInputs.t.toString());
      setMruResult(s);
    } else {
      const v = (parseFloat(mruInputs.s.toString()) - parseFloat(mruInputs.s0.toString())) / parseFloat(mruInputs.t.toString());
      setMruResult(v);
    }
  };

  // MRUV Calculator
  const [mruvInputs, setMruvInputs] = useState({ s0: 0, v0: 0, a: 5, t: 3 });
  const [mruvResult, setMruvResult] = useState<{ s: number; v: number } | null>(null);

  const calculateMRUV = () => {
    const v0 = parseFloat(mruvInputs.v0.toString());
    const a = parseFloat(mruvInputs.a.toString());
    const t = parseFloat(mruvInputs.t.toString());
    const s0 = parseFloat(mruvInputs.s0.toString());

    const v = v0 + a * t;
    const s = s0 + v0 * t + (a * t * t) / 2;

    setMruvResult({ s, v });
  };

  // Torricelli Calculator
  const [torricelliInputs, setTorricelliInputs] = useState({ v0: 0, a: 10, deltaS: 20 });
  const [torricelliResult, setTorricelliResult] = useState<number | null>(null);

  const calculateTorricelli = () => {
    const v0 = parseFloat(torricelliInputs.v0.toString());
    const a = parseFloat(torricelliInputs.a.toString());
    const deltaS = parseFloat(torricelliInputs.deltaS.toString());

    const vSquared = v0 * v0 + 2 * a * deltaS;
    const v = Math.sqrt(Math.abs(vSquared));

    setTorricelliResult(v);
  };

  // Free Fall Calculator
  const [freefall, setFreefall] = useState({ h: 45, g: 9.8 });
  const [freefallResult, setFreefallResult] = useState<{ t: number; v: number } | null>(null);

  const calculateFreeFall = () => {
    const h = parseFloat(freefall.h.toString());
    const g = parseFloat(freefall.g.toString());

    const t = Math.sqrt((2 * h) / g);
    const v = g * t;

    setFreefallResult({ t, v });
  };

  // MCU Calculator
  const [mcuMode, setMcuMode] = useState<"velocity" | "acceleration" | "period">("velocity");
  const [mcuInputs, setMcuInputs] = useState({ r: 5, T: 2, f: 0.5, v: 10, omega: 3.14 });
  const [mcuResult, setMcuResult] = useState<any>(null);

  const calculateMCU = () => {
    if (mcuMode === "velocity") {
      const r = parseFloat(mcuInputs.r.toString());
      const T = parseFloat(mcuInputs.T.toString());
      const v = (2 * Math.PI * r) / T;
      setMcuResult({ value: v, unit: "m/s", label: "Velocidade Tangencial" });
    } else if (mcuMode === "acceleration") {
      const v = parseFloat(mcuInputs.v.toString());
      const r = parseFloat(mcuInputs.r.toString());
      const ac = (v * v) / r;
      setMcuResult({ value: ac, unit: "m/s²", label: "Aceleração Centrípeta" });
    } else {
      const r = parseFloat(mcuInputs.r.toString());
      const f = parseFloat(mcuInputs.f.toString());
      const v = 2 * Math.PI * r * f;
      setMcuResult({ value: v, unit: "m/s", label: "Velocidade Tangencial" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Calculadora de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-12">
        <Tabs defaultValue="mru" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="mru">MRU</TabsTrigger>
            <TabsTrigger value="mruv">MRUV</TabsTrigger>
            <TabsTrigger value="torricelli">Torricelli</TabsTrigger>
            <TabsTrigger value="freefall">Queda Livre</TabsTrigger>
            <TabsTrigger value="mcu">MCU</TabsTrigger>
          </TabsList>

          {/* MRU Tab */}
          <TabsContent value="mru" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Movimento Retilíneo Uniforme</h2>
              <p className="text-slate-600 mb-6">Escolha o que deseja calcular:</p>

              <div className="flex gap-4 mb-8">
                <Button 
                  onClick={() => setMruMode("position")}
                  variant={mruMode === "position" ? "default" : "outline"}
                >
                  Calcular Posição
                </Button>
                <Button 
                  onClick={() => setMruMode("velocity")}
                  variant={mruMode === "velocity" ? "default" : "outline"}
                >
                  Calcular Velocidade
                </Button>
              </div>

              {mruMode === "position" ? (
                <>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Posição Inicial (s₀) em metros</label>
                      <Input
                        type="number"
                        value={mruInputs.s0}
                        onChange={(e) => setMruInputs({ ...mruInputs, s0: parseFloat(e.target.value) || 0 })}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade (v) em m/s</label>
                      <Input
                        type="number"
                        value={mruInputs.v}
                        onChange={(e) => setMruInputs({ ...mruInputs, v: parseFloat(e.target.value) || 0 })}
                        placeholder="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Tempo (t) em segundos</label>
                      <Input
                        type="number"
                        value={mruInputs.t}
                        onChange={(e) => setMruInputs({ ...mruInputs, t: parseFloat(e.target.value) || 0 })}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Fórmula: s = s₀ + v·t</p>
                </>
              ) : (
                <>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Posição Inicial (s₀) em metros</label>
                      <Input
                        type="number"
                        value={mruInputs.s0}
                        onChange={(e) => setMruInputs({ ...mruInputs, s0: parseFloat(e.target.value) || 0 })}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Posição Final (s) em metros</label>
                      <Input
                        type="number"
                        value={mruInputs.s}
                        onChange={(e) => setMruInputs({ ...mruInputs, s: parseFloat(e.target.value) || 0 })}
                        placeholder="50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Tempo (t) em segundos</label>
                      <Input
                        type="number"
                        value={mruInputs.t}
                        onChange={(e) => setMruInputs({ ...mruInputs, t: parseFloat(e.target.value) || 0 })}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Fórmula: v = (s - s₀) / t</p>
                </>
              )}

              <Button onClick={calculateMRU} size="lg" className="w-full mb-6">
                Calcular
              </Button>

              {mruResult !== null && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                  <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                  <p className="text-3xl font-bold text-green-600">{mruResult.toFixed(2)} {mruMode === "position" ? "m" : "m/s"}</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* MRUV Tab */}
          <TabsContent value="mruv" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Movimento Uniformemente Variado</h2>
              <p className="text-slate-600 mb-6">Fórmulas: V = V₀ + a·t e S = S₀ + V₀·t + (a·t²)/2</p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Posição Inicial (s₀) em metros</label>
                  <Input
                    type="number"
                    value={mruvInputs.s0}
                    onChange={(e) => setMruvInputs({ ...mruvInputs, s0: parseFloat(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade Inicial (v₀) em m/s</label>
                  <Input
                    type="number"
                    value={mruvInputs.v0}
                    onChange={(e) => setMruvInputs({ ...mruvInputs, v0: parseFloat(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Aceleração (a) em m/s²</label>
                  <Input
                    type="number"
                    value={mruvInputs.a}
                    onChange={(e) => setMruvInputs({ ...mruvInputs, a: parseFloat(e.target.value) || 0 })}
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Tempo (t) em segundos</label>
                  <Input
                    type="number"
                    value={mruvInputs.t}
                    onChange={(e) => setMruvInputs({ ...mruvInputs, t: parseFloat(e.target.value) || 0 })}
                    placeholder="3"
                  />
                </div>
              </div>

              <Button onClick={calculateMRUV} size="lg" className="w-full mb-6">
                Calcular Posição e Velocidade
              </Button>

              {mruvResult !== null && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-sm text-slate-600 mb-2">Posição Final:</p>
                    <p className="text-3xl font-bold text-blue-600">s = {mruvResult.s.toFixed(2)} m</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-sm text-slate-600 mb-2">Velocidade Final:</p>
                    <p className="text-3xl font-bold text-purple-600">v = {mruvResult.v.toFixed(2)} m/s</p>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Torricelli Tab */}
          <TabsContent value="torricelli" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Equação de Torricelli</h2>
              <p className="text-slate-600 mb-6">Fórmula: V² = V₀² + 2·a·ΔS</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade Inicial (v₀) em m/s</label>
                  <Input
                    type="number"
                    value={torricelliInputs.v0}
                    onChange={(e) => setTorricelliInputs({ ...torricelliInputs, v0: parseFloat(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Aceleração (a) em m/s²</label>
                  <Input
                    type="number"
                    value={torricelliInputs.a}
                    onChange={(e) => setTorricelliInputs({ ...torricelliInputs, a: parseFloat(e.target.value) || 0 })}
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Deslocamento (ΔS) em metros</label>
                  <Input
                    type="number"
                    value={torricelliInputs.deltaS}
                    onChange={(e) => setTorricelliInputs({ ...torricelliInputs, deltaS: parseFloat(e.target.value) || 0 })}
                    placeholder="20"
                  />
                </div>
              </div>

              <Button onClick={calculateTorricelli} size="lg" className="w-full mb-6">
                Calcular Velocidade Final
              </Button>

              {torricelliResult !== null && (
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6">
                  <p className="text-sm text-slate-600 mb-2">Velocidade Final:</p>
                  <p className="text-3xl font-bold text-orange-600">v = {torricelliResult.toFixed(2)} m/s</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Free Fall Tab */}
          <TabsContent value="freefall" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Queda Livre</h2>
              <p className="text-slate-600 mb-6">Fórmulas: t = √(2h/g) e v = g·t</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Altura (h) em metros</label>
                  <Input
                    type="number"
                    value={freefall.h}
                    onChange={(e) => setFreefall({ ...freefall, h: parseFloat(e.target.value) || 0 })}
                    placeholder="45"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Gravidade (g) em m/s²</label>
                  <Input
                    type="number"
                    value={freefall.g}
                    onChange={(e) => setFreefall({ ...freefall, g: parseFloat(e.target.value) || 9.8 })}
                    placeholder="9.8"
                  />
                </div>
              </div>

              <Button onClick={calculateFreeFall} size="lg" className="w-full mb-6">
                Calcular Tempo e Velocidade
              </Button>

              {freefallResult !== null && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                    <p className="text-sm text-slate-600 mb-2">Tempo de Queda:</p>
                    <p className="text-3xl font-bold text-red-600">{freefallResult.t.toFixed(2)} s</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                    <p className="text-sm text-slate-600 mb-2">Velocidade ao Chegar ao Solo:</p>
                    <p className="text-3xl font-bold text-red-600">{freefallResult.v.toFixed(2)} m/s</p>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* MCU Tab */}
          <TabsContent value="mcu" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Movimento Circular Uniforme</h2>
              <p className="text-slate-600 mb-6">Escolha o que deseja calcular:</p>

              <div className="flex gap-4 mb-8 flex-wrap">
                <Button 
                  onClick={() => setMcuMode("velocity")}
                  variant={mcuMode === "velocity" ? "default" : "outline"}
                  size="sm"
                >
                  Velocidade Tangencial
                </Button>
                <Button 
                  onClick={() => setMcuMode("acceleration")}
                  variant={mcuMode === "acceleration" ? "default" : "outline"}
                  size="sm"
                >
                  Aceleração Centrípeta
                </Button>
                <Button 
                  onClick={() => setMcuMode("period")}
                  variant={mcuMode === "period" ? "default" : "outline"}
                  size="sm"
                >
                  Vel. por Frequência
                </Button>
              </div>

              {mcuMode === "velocity" && (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Raio (r) em metros</label>
                      <Input
                        type="number"
                        value={mcuInputs.r}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, r: parseFloat(e.target.value) || 0 })}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Período (T) em segundos</label>
                      <Input
                        type="number"
                        value={mcuInputs.T}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, T: parseFloat(e.target.value) || 0 })}
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Fórmula: v = 2πr / T</p>
                </>
              )}

              {mcuMode === "acceleration" && (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade Tangencial (v) em m/s</label>
                      <Input
                        type="number"
                        value={mcuInputs.v}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, v: parseFloat(e.target.value) || 0 })}
                        placeholder="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Raio (r) em metros</label>
                      <Input
                        type="number"
                        value={mcuInputs.r}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, r: parseFloat(e.target.value) || 0 })}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Fórmula: ac = v² / r</p>
                </>
              )}

              {mcuMode === "period" && (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Raio (r) em metros</label>
                      <Input
                        type="number"
                        value={mcuInputs.r}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, r: parseFloat(e.target.value) || 0 })}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Frequência (f) em Hz</label>
                      <Input
                        type="number"
                        value={mcuInputs.f}
                        onChange={(e) => setMcuInputs({ ...mcuInputs, f: parseFloat(e.target.value) || 0 })}
                        placeholder="0.5"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Fórmula: v = 2πrf</p>
                </>
              )}

              <Button onClick={calculateMCU} size="lg" className="w-full mb-6">
                Calcular
              </Button>

              {mcuResult !== null && (
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6">
                  <p className="text-sm text-slate-600 mb-2">{mcuResult.label}:</p>
                  <p className="text-3xl font-bold text-cyan-600">{mcuResult.value.toFixed(2)} {mcuResult.unit}</p>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
