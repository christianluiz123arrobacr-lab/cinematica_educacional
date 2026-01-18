import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Copy, RotateCcw } from "lucide-react";
import { Link } from "wouter";

export default function Calculator() {
  // ============ MRU CALCULATOR ============
  const [mruVariable, setMruVariable] = useState("s");
  const [mruInputs, setMruInputs] = useState({ s0: 0, v: 10, t: 5, s: 50 });
  const [mruResult, setMruResult] = useState<any>(null);

  const calculateMRU = () => {
    const s0 = parseFloat(mruInputs.s0.toString());
    const v = parseFloat(mruInputs.v.toString());
    const t = parseFloat(mruInputs.t.toString());
    const s = parseFloat(mruInputs.s.toString());

    let result: any = {};

    if (mruVariable === "s") {
      result = { value: s0 + v * t, unit: "m", label: "Posição Final (s)" };
    } else if (mruVariable === "s0") {
      result = { value: s - v * t, unit: "m", label: "Posição Inicial (s₀)" };
    } else if (mruVariable === "v") {
      result = { value: (s - s0) / t, unit: "m/s", label: "Velocidade (v)" };
    } else if (mruVariable === "t") {
      result = { value: (s - s0) / v, unit: "s", label: "Tempo (t)" };
    }

    setMruResult(result);
  };

  const resetMRU = () => {
    setMruInputs({ s0: 0, v: 10, t: 5, s: 50 });
    setMruResult(null);
  };

  // ============ MRUV CALCULATOR ============
  const [mruvVariable, setMruvVariable] = useState("s");
  const [mruvInputs, setMruvInputs] = useState({ s0: 0, v0: 0, a: 5, t: 3, s: 22.5, v: 15 });
  const [mruvResult, setMruvResult] = useState<any>(null);

  const calculateMRUV = () => {
    const s0 = parseFloat(mruvInputs.s0.toString());
    const v0 = parseFloat(mruvInputs.v0.toString());
    const a = parseFloat(mruvInputs.a.toString());
    const t = parseFloat(mruvInputs.t.toString());
    const s = parseFloat(mruvInputs.s.toString());
    const v = parseFloat(mruvInputs.v.toString());

    let result: any = {};

    if (mruvVariable === "s") {
      result = { value: s0 + v0 * t + (a * t * t) / 2, unit: "m", label: "Posição Final (s)" };
    } else if (mruvVariable === "s0") {
      result = { value: s - v0 * t - (a * t * t) / 2, unit: "m", label: "Posição Inicial (s₀)" };
    } else if (mruvVariable === "v") {
      result = { value: v0 + a * t, unit: "m/s", label: "Velocidade Final (v)" };
    } else if (mruvVariable === "v0") {
      result = { value: v - a * t, unit: "m/s", label: "Velocidade Inicial (v₀)" };
    } else if (mruvVariable === "a") {
      result = { value: (v - v0) / t, unit: "m/s²", label: "Aceleração (a)" };
    } else if (mruvVariable === "t") {
      result = { value: (v - v0) / a, unit: "s", label: "Tempo (t)" };
    }

    setMruvResult(result);
  };

  const resetMRUV = () => {
    setMruvInputs({ s0: 0, v0: 0, a: 5, t: 3, s: 22.5, v: 15 });
    setMruvResult(null);
  };

  // ============ TORRICELLI CALCULATOR ============
  const [torriVariable, setTorriVariable] = useState("v");
  const [torriInputs, setTorriInputs] = useState({ v0: 0, a: 10, deltaS: 20, v: 20 });
  const [torriResult, setTorriResult] = useState<any>(null);

  const calculateTorricelli = () => {
    const v0 = parseFloat(torriInputs.v0.toString());
    const a = parseFloat(torriInputs.a.toString());
    const deltaS = parseFloat(torriInputs.deltaS.toString());
    const v = parseFloat(torriInputs.v.toString());

    let result: any = {};

    if (torriVariable === "v") {
      const vSquared = v0 * v0 + 2 * a * deltaS;
      result = { value: Math.sqrt(Math.abs(vSquared)), unit: "m/s", label: "Velocidade Final (v)" };
    } else if (torriVariable === "v0") {
      const v0Squared = v * v - 2 * a * deltaS;
      result = { value: Math.sqrt(Math.abs(v0Squared)), unit: "m/s", label: "Velocidade Inicial (v₀)" };
    } else if (torriVariable === "a") {
      result = { value: (v * v - v0 * v0) / (2 * deltaS), unit: "m/s²", label: "Aceleração (a)" };
    } else if (torriVariable === "deltaS") {
      result = { value: (v * v - v0 * v0) / (2 * a), unit: "m", label: "Deslocamento (ΔS)" };
    }

    setTorriResult(result);
  };

  const resetTorricelli = () => {
    setTorriInputs({ v0: 0, a: 10, deltaS: 20, v: 20 });
    setTorriResult(null);
  };

  // ============ FREE FALL CALCULATOR ============
  const [ffVariable, setFfVariable] = useState("v");
  const [ffInputs, setFfInputs] = useState({ h: 45, g: 9.8, t: 3, v: 29.4 });
  const [ffResult, setFfResult] = useState<any>(null);

  const calculateFreeFall = () => {
    const h = parseFloat(ffInputs.h.toString());
    const g = parseFloat(ffInputs.g.toString());
    const t = parseFloat(ffInputs.t.toString());
    const v = parseFloat(ffInputs.v.toString());

    let result: any = {};

    if (ffVariable === "v") {
      result = { value: g * t, unit: "m/s", label: "Velocidade Final (v)" };
    } else if (ffVariable === "t") {
      result = { value: v / g, unit: "s", label: "Tempo (t)" };
    } else if (ffVariable === "h") {
      result = { value: (g * t * t) / 2, unit: "m", label: "Altura (h)" };
    } else if (ffVariable === "g") {
      result = { value: (2 * h) / (t * t), unit: "m/s²", label: "Gravidade (g)" };
    }

    setFfResult(result);
  };

  const resetFreeFall = () => {
    setFfInputs({ h: 45, g: 9.8, t: 3, v: 29.4 });
    setFfResult(null);
  };

  // ============ MCU CALCULATOR ============
  const [mcuVariable, setMcuVariable] = useState("v");
  const [mcuInputs, setMcuInputs] = useState({ r: 5, T: 2, f: 0.5, v: 15.7, ac: 49.3, omega: 3.14 });
  const [mcuResult, setMcuResult] = useState<any>(null);

  const calculateMCU = () => {
    const r = parseFloat(mcuInputs.r.toString());
    const T = parseFloat(mcuInputs.T.toString());
    const f = parseFloat(mcuInputs.f.toString());
    const v = parseFloat(mcuInputs.v.toString());
    const ac = parseFloat(mcuInputs.ac.toString());

    let result: any = {};

    if (mcuVariable === "v") {
      result = { value: (2 * Math.PI * r) / T, unit: "m/s", label: "Velocidade Tangencial (v)" };
    } else if (mcuVariable === "T") {
      result = { value: (2 * Math.PI * r) / v, unit: "s", label: "Período (T)" };
    } else if (mcuVariable === "f") {
      result = { value: v / (2 * Math.PI * r), unit: "Hz", label: "Frequência (f)" };
    } else if (mcuVariable === "r_from_v") {
      result = { value: v / (2 * Math.PI * f), unit: "m", label: "Raio (r)" };
    } else if (mcuVariable === "ac") {
      result = { value: (v * v) / r, unit: "m/s²", label: "Aceleração Centrípeta (ac)" };
    } else if (mcuVariable === "r_from_ac") {
      result = { value: (v * v) / ac, unit: "m", label: "Raio (r)" };
    }

    setMcuResult(result);
  };

  const resetMCU = () => {
    setMcuInputs({ r: 5, T: 2, f: 0.5, v: 15.7, ac: 49.3, omega: 3.14 });
    setMcuResult(null);
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
          <h1 className="text-2xl font-bold text-slate-900">Calculadora Avançada</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-12">
        <Tabs defaultValue="mru" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white border border-slate-200">
            <TabsTrigger value="mru" className="data-[state=active]:bg-blue-50">MRU</TabsTrigger>
            <TabsTrigger value="mruv" className="data-[state=active]:bg-blue-50">MRUV</TabsTrigger>
            <TabsTrigger value="torricelli" className="data-[state=active]:bg-blue-50">Torricelli</TabsTrigger>
            <TabsTrigger value="freefall" className="data-[state=active]:bg-blue-50">Queda Livre</TabsTrigger>
            <TabsTrigger value="mcu" className="data-[state=active]:bg-blue-50">MCU</TabsTrigger>
          </TabsList>

          {/* ============ MRU TAB ============ */}
          <TabsContent value="mru" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">MRU</h2>
                  <p className="text-slate-600 text-sm mt-1">Movimento Retilíneo Uniforme: s = s₀ + v·t</p>
                </div>
                <Button variant="outline" size="sm" onClick={resetMRU}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Calcular:</label>
                <Select value={mruVariable} onValueChange={setMruVariable}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">📍 Posição Final (s)</SelectItem>
                    <SelectItem value="s0">📍 Posição Inicial (s₀)</SelectItem>
                    <SelectItem value="v">⚡ Velocidade (v)</SelectItem>
                    <SelectItem value="t">⏱️ Tempo (t)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">s₀ (m)</label>
                  <Input type="number" value={mruInputs.s0} onChange={(e) => setMruInputs({ ...mruInputs, s0: parseFloat(e.target.value) || 0 })} placeholder="0" className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                  <Input type="number" value={mruInputs.v} onChange={(e) => setMruInputs({ ...mruInputs, v: parseFloat(e.target.value) || 0 })} placeholder="10" className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                  <Input type="number" value={mruInputs.t} onChange={(e) => setMruInputs({ ...mruInputs, t: parseFloat(e.target.value) || 0 })} placeholder="5" className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">s (m)</label>
                  <Input type="number" value={mruInputs.s} onChange={(e) => setMruInputs({ ...mruInputs, s: parseFloat(e.target.value) || 0 })} placeholder="50" className="font-semibold" />
                </div>
              </div>

              <Button onClick={calculateMRU} size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mruResult && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-green-600">{mruResult.value.toFixed(3)}</p>
                  <p className="text-sm text-slate-600">{mruResult.label} ({mruResult.unit})</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* ============ MRUV TAB ============ */}
          <TabsContent value="mruv" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">MRUV</h2>
                  <p className="text-slate-600 text-sm mt-1">Movimento Uniformemente Variado</p>
                </div>
                <Button variant="outline" size="sm" onClick={resetMRUV}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Calcular:</label>
                <Select value={mruvVariable} onValueChange={setMruvVariable}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">📍 Posição Final (s)</SelectItem>
                    <SelectItem value="s0">📍 Posição Inicial (s₀)</SelectItem>
                    <SelectItem value="v">⚡ Velocidade Final (v)</SelectItem>
                    <SelectItem value="v0">⚡ Velocidade Inicial (v₀)</SelectItem>
                    <SelectItem value="a">🚀 Aceleração (a)</SelectItem>
                    <SelectItem value="t">⏱️ Tempo (t)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-3 gap-3 mb-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">s₀ (m)</label>
                  <Input type="number" value={mruvInputs.s0} onChange={(e) => setMruvInputs({ ...mruvInputs, s0: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v₀ (m/s)</label>
                  <Input type="number" value={mruvInputs.v0} onChange={(e) => setMruvInputs({ ...mruvInputs, v0: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">a (m/s²)</label>
                  <Input type="number" value={mruvInputs.a} onChange={(e) => setMruvInputs({ ...mruvInputs, a: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                  <Input type="number" value={mruvInputs.t} onChange={(e) => setMruvInputs({ ...mruvInputs, t: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">s (m)</label>
                  <Input type="number" value={mruvInputs.s} onChange={(e) => setMruvInputs({ ...mruvInputs, s: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                  <Input type="number" value={mruvInputs.v} onChange={(e) => setMruvInputs({ ...mruvInputs, v: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
              </div>

              <Button onClick={calculateMRUV} size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mruvResult && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-orange-600">{mruvResult.value.toFixed(3)}</p>
                  <p className="text-sm text-slate-600">{mruvResult.label} ({mruvResult.unit})</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* ============ TORRICELLI TAB ============ */}
          <TabsContent value="torricelli" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Torricelli</h2>
                  <p className="text-slate-600 text-sm mt-1">Equação de Torricelli: V² = V₀² + 2·a·ΔS</p>
                </div>
                <Button variant="outline" size="sm" onClick={resetTorricelli}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Calcular:</label>
                <Select value={torriVariable} onValueChange={setTorriVariable}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="v">⚡ Velocidade Final (v)</SelectItem>
                    <SelectItem value="v0">⚡ Velocidade Inicial (v₀)</SelectItem>
                    <SelectItem value="a">🚀 Aceleração (a)</SelectItem>
                    <SelectItem value="deltaS">📏 Deslocamento (ΔS)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v₀ (m/s)</label>
                  <Input type="number" value={torriInputs.v0} onChange={(e) => setTorriInputs({ ...torriInputs, v0: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">a (m/s²)</label>
                  <Input type="number" value={torriInputs.a} onChange={(e) => setTorriInputs({ ...torriInputs, a: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">ΔS (m)</label>
                  <Input type="number" value={torriInputs.deltaS} onChange={(e) => setTorriInputs({ ...torriInputs, deltaS: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                  <Input type="number" value={torriInputs.v} onChange={(e) => setTorriInputs({ ...torriInputs, v: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
              </div>

              <Button onClick={calculateTorricelli} size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {torriResult && (
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-red-600">{torriResult.value.toFixed(3)}</p>
                  <p className="text-sm text-slate-600">{torriResult.label} ({torriResult.unit})</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* ============ FREE FALL TAB ============ */}
          <TabsContent value="freefall" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Queda Livre</h2>
                  <p className="text-slate-600 text-sm mt-1">Movimento sob ação da gravidade</p>
                </div>
                <Button variant="outline" size="sm" onClick={resetFreeFall}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Calcular:</label>
                <Select value={ffVariable} onValueChange={setFfVariable}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="v">⚡ Velocidade Final (v)</SelectItem>
                    <SelectItem value="t">⏱️ Tempo (t)</SelectItem>
                    <SelectItem value="h">📏 Altura (h)</SelectItem>
                    <SelectItem value="g">🌍 Gravidade (g)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">h (m)</label>
                  <Input type="number" value={ffInputs.h} onChange={(e) => setFfInputs({ ...ffInputs, h: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">g (m/s²)</label>
                  <Input type="number" value={ffInputs.g} onChange={(e) => setFfInputs({ ...ffInputs, g: parseFloat(e.target.value) || 9.8 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                  <Input type="number" value={ffInputs.t} onChange={(e) => setFfInputs({ ...ffInputs, t: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                  <Input type="number" value={ffInputs.v} onChange={(e) => setFfInputs({ ...ffInputs, v: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
              </div>

              <Button onClick={calculateFreeFall} size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {ffResult && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-purple-600">{ffResult.value.toFixed(3)}</p>
                  <p className="text-sm text-slate-600">{ffResult.label} ({ffResult.unit})</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* ============ MCU TAB ============ */}
          <TabsContent value="mcu" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">MCU</h2>
                  <p className="text-slate-600 text-sm mt-1">Movimento Circular Uniforme</p>
                </div>
                <Button variant="outline" size="sm" onClick={resetMCU}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="mb-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Calcular:</label>
                <Select value={mcuVariable} onValueChange={setMcuVariable}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="v">⚡ Velocidade Tangencial (v)</SelectItem>
                    <SelectItem value="T">⏱️ Período (T)</SelectItem>
                    <SelectItem value="f">🔄 Frequência (f)</SelectItem>
                    <SelectItem value="r_from_v">📏 Raio (r) - a partir de v</SelectItem>
                    <SelectItem value="ac">🎯 Aceleração Centrípeta (ac)</SelectItem>
                    <SelectItem value="r_from_ac">📏 Raio (r) - a partir de ac</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-3 gap-3 mb-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">r (m)</label>
                  <Input type="number" value={mcuInputs.r} onChange={(e) => setMcuInputs({ ...mcuInputs, r: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">T (s)</label>
                  <Input type="number" value={mcuInputs.T} onChange={(e) => setMcuInputs({ ...mcuInputs, T: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">f (Hz)</label>
                  <Input type="number" value={mcuInputs.f} onChange={(e) => setMcuInputs({ ...mcuInputs, f: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                  <Input type="number" value={mcuInputs.v} onChange={(e) => setMcuInputs({ ...mcuInputs, v: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">ac (m/s²)</label>
                  <Input type="number" value={mcuInputs.ac} onChange={(e) => setMcuInputs({ ...mcuInputs, ac: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase">ω (rad/s)</label>
                  <Input type="number" value={mcuInputs.omega} onChange={(e) => setMcuInputs({ ...mcuInputs, omega: parseFloat(e.target.value) || 0 })} className="font-semibold" />
                </div>
              </div>

              <Button onClick={calculateMCU} size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mcuResult && (
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-cyan-600">{mcuResult.value.toFixed(3)}</p>
                  <p className="text-sm text-slate-600">{mcuResult.label} ({mcuResult.unit})</p>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
