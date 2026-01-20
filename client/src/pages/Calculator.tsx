import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, RotateCcw, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function Calculator() {
  // ============ MRU CALCULATOR ============
  const [mruVariable, setMruVariable] = useState<string>("s");
  const [mruInputs, setMruInputs] = useState<Record<string, string>>({ s0: "0", v: "10", t: "5", s: "50" });
  const [mruResult, setMruResult] = useState<any | null>(null);
  const [mruError, setMruError] = useState<string>("");

  const calculateMRU = () => {
    setMruError("");
    try {
      const s0 = parseFloat(mruInputs.s0) || 0;
      const v = parseFloat(mruInputs.v) || 0;
      const t = parseFloat(mruInputs.t) || 0;
      const s = parseFloat(mruInputs.s) || 0;

      if (isNaN(s0) || isNaN(v) || isNaN(t) || isNaN(s)) {
        setMruError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (mruVariable === "s") {
        // s = s₀ + v·t
        const value = s0 + v * t;
        result = { value: value, unit: "m", label: "Posição Final (s)" };
      } else if (mruVariable === "s0") {
        // s₀ = s - v·t
        const value = s - v * t;
        result = { value: value, unit: "m", label: "Posição Inicial (s₀)" };
      } else if (mruVariable === "v") {
        // v = (s - s₀) / t
        if (t === 0) {
          setMruError("Tempo não pode ser zero");
          return;
        }
        const value = (s - s0) / t;
        result = { value: value, unit: "m/s", label: "Velocidade (v)" };
      } else if (mruVariable === "t") {
        // t = (s - s₀) / v
        if (v === 0) {
          setMruError("Velocidade não pode ser zero");
          return;
        }
        const value = (s - s0) / v;
        result = { value: value, unit: "s", label: "Tempo (t)" };
      }

      setMruResult(result);
    } catch (err) {
      setMruError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetMRU = () => {
    setMruInputs({ s0: "0", v: "10", t: "5", s: "50" });
    setMruResult(null);
    setMruError("");
  };

  // ============ MRUV CALCULATOR ============
  const [mruvVariable, setMruvVariable] = useState<string>("s");
  const [mruvInputs, setMruvInputs] = useState<Record<string, string>>({ s0: "0", v0: "0", a: "5", t: "3", s: "22.5", v: "15" });
  const [mruvResult, setMruvResult] = useState<any | null>(null);
  const [mruvError, setMruvError] = useState<string>("");

  const calculateMRUV = () => {
    setMruvError("");
    try {
      const s0 = parseFloat(mruvInputs.s0) || 0;
      const v0 = parseFloat(mruvInputs.v0) || 0;
      const a = parseFloat(mruvInputs.a) || 0;
      const t = parseFloat(mruvInputs.t) || 0;
      const s = parseFloat(mruvInputs.s) || 0;
      const v = parseFloat(mruvInputs.v) || 0;

      let result: any = {};

      if (mruvVariable === "s") {
        // s = s₀ + v₀·t + (a·t²)/2
        const value = s0 + v0 * t + (a * t * t) / 2;
        result = { value: value, unit: "m", label: "Posição Final (s)" };
      } else if (mruvVariable === "s0") {
        // s₀ = s - v₀·t - (a·t²)/2
        const value = s - v0 * t - (a * t * t) / 2;
        result = { value: value, unit: "m", label: "Posição Inicial (s₀)" };
      } else if (mruvVariable === "v") {
        // v = v₀ + a·t
        const value = v0 + a * t;
        result = { value: value, unit: "m/s", label: "Velocidade Final (v)" };
      } else if (mruvVariable === "v0") {
        // v₀ = v - a·t
        const value = v - a * t;
        result = { value: value, unit: "m/s", label: "Velocidade Inicial (v₀)" };
      } else if (mruvVariable === "a") {
        // a = (v - v₀) / t
        if (t === 0) {
          setMruvError("Tempo não pode ser zero");
          return;
        }
        const value = (v - v0) / t;
        result = { value: value, unit: "m/s²", label: "Aceleração (a)" };
      } else if (mruvVariable === "t") {
        // t = (v - v₀) / a
        if (a === 0) {
          setMruvError("Aceleração não pode ser zero");
          return;
        }
        const value = (v - v0) / a;
        result = { value: value, unit: "s", label: "Tempo (t)" };
      }

      setMruvResult(result);
    } catch (err) {
      setMruvError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetMRUV = () => {
    setMruvInputs({ s0: "0", v0: "0", a: "5", t: "3", s: "22.5", v: "15" });
    setMruvResult(null);
    setMruvError("");
  };

  // ============ TORRICELLI CALCULATOR ============
  const [torriVariable, setTorriVariable] = useState<string>("v");
  const [torriInputs, setTorriInputs] = useState<Record<string, string>>({ v0: "0", a: "10", deltaS: "20", v: "20" });
  const [torriResult, setTorriResult] = useState<any | null>(null);
  const [torriError, setTorriError] = useState<string>("");

  const calculateTorricelli = () => {
    setTorriError("");
    try {
      const v0 = parseFloat(torriInputs.v0) || 0;
      const a = parseFloat(torriInputs.a) || 0;
      const deltaS = parseFloat(torriInputs.deltaS) || 0;
      const v = parseFloat(torriInputs.v) || 0;

      let result: any = {};

      if (torriVariable === "v") {
        // v² = v₀² + 2·a·ΔS
        const vSquared = v0 * v0 + 2 * a * deltaS;
        if (vSquared < 0) {
          setTorriError("Resultado inválido: v² não pode ser negativo");
          return;
        }
        const value = Math.sqrt(vSquared);
        result = { value: value, unit: "m/s", label: "Velocidade Final (v)" };
      } else if (torriVariable === "v0") {
        // v₀² = v² - 2·a·ΔS
        const v0Squared = v * v - 2 * a * deltaS;
        if (v0Squared < 0) {
          setTorriError("Resultado inválido: v₀² não pode ser negativo");
          return;
        }
        const value = Math.sqrt(v0Squared);
        result = { value: value, unit: "m/s", label: "Velocidade Inicial (v₀)" };
      } else if (torriVariable === "a") {
        // a = (v² - v₀²) / (2·ΔS)
        if (deltaS === 0) {
          setTorriError("Deslocamento não pode ser zero");
          return;
        }
        const value = (v * v - v0 * v0) / (2 * deltaS);
        result = { value: value, unit: "m/s²", label: "Aceleração (a)" };
      } else if (torriVariable === "deltaS") {
        // ΔS = (v² - v₀²) / (2·a)
        if (a === 0) {
          setTorriError("Aceleração não pode ser zero");
          return;
        }
        const value = (v * v - v0 * v0) / (2 * a);
        result = { value: value, unit: "m", label: "Deslocamento (ΔS)" };
      }

      setTorriResult(result);
    } catch (err) {
      setTorriError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetTorricelli = () => {
    setTorriInputs({ v0: "0", a: "10", deltaS: "20", v: "20" });
    setTorriResult(null);
    setTorriError("");
  };

  // ============ FREE FALL CALCULATOR ============
  const [ffVariable, setFfVariable] = useState<string>("v");
  const [ffInputs, setFfInputs] = useState<Record<string, string>>({ h: "45", g: "9.8", t: "3", v: "29.4" });
  const [ffResult, setFfResult] = useState<any | null>(null);
  const [ffError, setFfError] = useState<string>("");

  const calculateFreeFall = () => {
    setFfError("");
    try {
      const h = parseFloat(ffInputs.h) || 0;
      const g = parseFloat(ffInputs.g) || 9.8;
      const t = parseFloat(ffInputs.t) || 0;
      const v = parseFloat(ffInputs.v) || 0;

      let result: any = {};

      if (ffVariable === "v") {
        // v = g·t
        const value = g * t;
        result = { value: value, unit: "m/s", label: "Velocidade Final (v)" };
      } else if (ffVariable === "t") {
        // t = v / g
        if (g === 0) {
          setFfError("Gravidade não pode ser zero");
          return;
        }
        const value = v / g;
        result = { value: value, unit: "s", label: "Tempo (t)" };
      } else if (ffVariable === "h") {
        // h = (g·t²) / 2
        const value = (g * t * t) / 2;
        result = { value: value, unit: "m", label: "Altura (h)" };
      } else if (ffVariable === "g") {
        // g = 2·h / t²
        if (t === 0) {
          setFfError("Tempo não pode ser zero");
          return;
        }
        const value = (2 * h) / (t * t);
        result = { value: value, unit: "m/s²", label: "Gravidade (g)" };
      }

      setFfResult(result);
    } catch (err) {
      setFfError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetFreeFall = () => {
    setFfInputs({ h: "45", g: "9.8", t: "3", v: "29.4" });
    setFfResult(null);
    setFfError("");
  };

  // ============ MCU CALCULATOR ============
  const [mcuVariable, setMcuVariable] = useState<string>("v");
  const [mcuInputs, setMcuInputs] = useState<Record<string, string>>({ r: "5", T: "2", f: "0.5", v: "15.7", ac: "49.3" });
  const [mcuResult, setMcuResult] = useState<any | null>(null);
  const [mcuError, setMcuError] = useState<string>("");

  const calculateMCU = () => {
    setMcuError("");
    try {
      const r = parseFloat(mcuInputs.r) || 0;
      const T = parseFloat(mcuInputs.T) || 0;
      const f = parseFloat(mcuInputs.f) || 0;
      const v = parseFloat(mcuInputs.v) || 0;
      const ac = parseFloat(mcuInputs.ac) || 0;

      let result: any = {};

      if (mcuVariable === "v") {
        // v = 2πr / T
        if (T === 0) {
          setMcuError("Período não pode ser zero");
          return;
        }
        const value = (2 * Math.PI * r) / T;
        result = { value: value, unit: "m/s", label: "Velocidade Tangencial (v)" };
      } else if (mcuVariable === "T") {
        // T = 2πr / v
        if (v === 0) {
          setMcuError("Velocidade não pode ser zero");
          return;
        }
        const value = (2 * Math.PI * r) / v;
        result = { value: value, unit: "s", label: "Período (T)" };
      } else if (mcuVariable === "f") {
        // f = v / (2πr)
        if (r === 0) {
          setMcuError("Raio não pode ser zero");
          return;
        }
        const value = v / (2 * Math.PI * r);
        result = { value: value, unit: "Hz", label: "Frequência (f)" };
      } else if (mcuVariable === "r_from_v") {
        // r = v / (2πf)
        if (f === 0) {
          setMcuError("Frequência não pode ser zero");
          return;
        }
        const value = v / (2 * Math.PI * f);
        result = { value: value, unit: "m", label: "Raio (r)" };
      } else if (mcuVariable === "ac") {
        // ac = v² / r
        if (r === 0) {
          setMcuError("Raio não pode ser zero");
          return;
        }
        const value = (v * v) / r;
        result = { value: value, unit: "m/s²", label: "Aceleração Centrípeta (ac)" };
      } else if (mcuVariable === "r_from_ac") {
        // r = v² / ac
        if (ac === 0) {
          setMcuError("Aceleração centrípeta não pode ser zero");
          return;
        }
        const value = (v * v) / ac;
        result = { value: value, unit: "m", label: "Raio (r)" };
      }

      setMcuResult(result);
    } catch (err) {
      setMcuError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetMCU = () => {
    setMcuInputs({ r: "5", T: "2", f: "0.5", v: "15.7", ac: "49.3" });
    setMcuResult(null);
    setMcuError("");
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
            <TabsTrigger value="mru">MRU</TabsTrigger>
            <TabsTrigger value="mruv">MRUV</TabsTrigger>
            <TabsTrigger value="torricelli">Torricelli</TabsTrigger>
            <TabsTrigger value="freefall">Queda Livre</TabsTrigger>
            <TabsTrigger value="mcu">MCU</TabsTrigger>
          </TabsList>

          {/* ============ MRU TAB ============ */}
          <TabsContent value="mru" className="space-y-6">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">MRU</h2>
                  <div className="mt-2">
                    <MathFormula formula="$$$$s = s_0 + v \\cdot t$$$$" className="text-sm" />
                  </div>
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
                    <SelectItem value="s0">📍 Posição Inicial (s_0)</SelectItem>
                    <SelectItem value="v">⚡ Velocidade (v)</SelectItem>
                    <SelectItem value="t">⏱️ Tempo (t)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                {mruVariable !== "s0" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">s_0 (m)</label>
                    <Input type="number" value={mruInputs.s0} onChange={(e) => setMruInputs({ ...mruInputs, s0: e.target.value })} placeholder="0" />
                  </div>
                )}
                {mruVariable !== "v" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                    <Input type="number" value={mruInputs.v} onChange={(e) => setMruInputs({ ...mruInputs, v: e.target.value })} placeholder="10" />
                  </div>
                )}
                {mruVariable !== "t" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                    <Input type="number" value={mruInputs.t} onChange={(e) => setMruInputs({ ...mruInputs, t: e.target.value })} placeholder="5" />
                  </div>
                )}
                {mruVariable !== "s" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">s (m)</label>
                    <Input type="number" value={mruInputs.s} onChange={(e) => setMruInputs({ ...mruInputs, s: e.target.value })} placeholder="50" />
                  </div>
                )}
              </div>

              {mruError && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-700">{mruError}</span>
                </div>
              )}

              <Button onClick={calculateMRU} size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mruResult && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-green-600">{mruResult.value.toFixed(2)}</p>
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
                    <SelectItem value="s0">📍 Posição Inicial (s_0)</SelectItem>
                    <SelectItem value="v">⚡ Velocidade Final (v)</SelectItem>
                    <SelectItem value="v0">⚡ Velocidade Inicial (v_0)</SelectItem>
                    <SelectItem value="a">🚀 Aceleração (a)</SelectItem>
                    <SelectItem value="t">⏱️ Tempo (t)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-3 gap-3 mb-6">
                {mruvVariable !== "s0" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">s_0 (m)</label>
                    <Input type="number" value={mruvInputs.s0} onChange={(e) => setMruvInputs({ ...mruvInputs, s0: e.target.value })} />
                  </div>
                )}
                {mruvVariable !== "v0" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v_0 (m/s)</label>
                    <Input type="number" value={mruvInputs.v0} onChange={(e) => setMruvInputs({ ...mruvInputs, v0: e.target.value })} />
                  </div>
                )}
                {mruvVariable !== "a" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">a (m/s²)</label>
                    <Input type="number" value={mruvInputs.a} onChange={(e) => setMruvInputs({ ...mruvInputs, a: e.target.value })} />
                  </div>
                )}
                {mruvVariable !== "t" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                    <Input type="number" value={mruvInputs.t} onChange={(e) => setMruvInputs({ ...mruvInputs, t: e.target.value })} />
                  </div>
                )}
                {mruvVariable !== "s" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">s (m)</label>
                    <Input type="number" value={mruvInputs.s} onChange={(e) => setMruvInputs({ ...mruvInputs, s: e.target.value })} />
                  </div>
                )}
                {mruvVariable !== "v" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                    <Input type="number" value={mruvInputs.v} onChange={(e) => setMruvInputs({ ...mruvInputs, v: e.target.value })} />
                  </div>
                )}
              </div>

              {mruvError && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-700">{mruvError}</span>
                </div>
              )}

              <Button onClick={calculateMRUV} size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mruvResult && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-orange-600">{mruvResult.value.toFixed(2)}</p>
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
                  <div className="mt-2">
                    <MathFormula formula="$$$$V^2 = V_0^2 + 2 \\cdot a \\cdot \\Delta S$$$$" className="text-sm" />
                  </div>
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
                    <SelectItem value="v0">⚡ Velocidade Inicial (v_0)</SelectItem>
                    <SelectItem value="a">🚀 Aceleração (a)</SelectItem>
                    <SelectItem value="deltaS">📏 Deslocamento (Delta S)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                {torriVariable !== "v0" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v_0 (m/s)</label>
                    <Input type="number" value={torriInputs.v0} onChange={(e) => setTorriInputs({ ...torriInputs, v0: e.target.value })} />
                  </div>
                )}
                {torriVariable !== "a" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">a (m/s²)</label>
                    <Input type="number" value={torriInputs.a} onChange={(e) => setTorriInputs({ ...torriInputs, a: e.target.value })} />
                  </div>
                )}
                {torriVariable !== "deltaS" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Delta S (m)</label>
                    <Input type="number" value={torriInputs.deltaS} onChange={(e) => setTorriInputs({ ...torriInputs, deltaS: e.target.value })} />
                  </div>
                )}
                {torriVariable !== "v" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                    <Input type="number" value={torriInputs.v} onChange={(e) => setTorriInputs({ ...torriInputs, v: e.target.value })} />
                  </div>
                )}
              </div>

              {torriError && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-700">{torriError}</span>
                </div>
              )}

              <Button onClick={calculateTorricelli} size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {torriResult && (
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-red-600">{torriResult.value.toFixed(2)}</p>
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
                  <div className="mt-2">
                    <MathFormula formula="$$$$V = V_0 + g \\cdot t$$$$" className="text-sm" />
                  </div>
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
                {ffVariable !== "h" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">h (m)</label>
                    <Input type="number" value={ffInputs.h} onChange={(e) => setFfInputs({ ...ffInputs, h: e.target.value })} />
                  </div>
                )}
                {ffVariable !== "g" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">g (m/s²)</label>
                    <Input type="number" value={ffInputs.g} onChange={(e) => setFfInputs({ ...ffInputs, g: e.target.value })} />
                  </div>
                )}
                {ffVariable !== "t" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">t (s)</label>
                    <Input type="number" value={ffInputs.t} onChange={(e) => setFfInputs({ ...ffInputs, t: e.target.value })} />
                  </div>
                )}
                {ffVariable !== "v" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                    <Input type="number" value={ffInputs.v} onChange={(e) => setFfInputs({ ...ffInputs, v: e.target.value })} />
                  </div>
                )}
              </div>

              {ffError && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-700">{ffError}</span>
                </div>
              )}

              <Button onClick={calculateFreeFall} size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {ffResult && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-purple-600">{ffResult.value.toFixed(2)}</p>
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
                  <div className="mt-2">
                    <MathFormula formula="$$$$v = \\frac{2\\pi r}{T}$$$$" className="text-sm" />
                  </div>
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
                {mcuVariable !== "r_from_v" && mcuVariable !== "r_from_ac" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">r (m)</label>
                    <Input type="number" value={mcuInputs.r} onChange={(e) => setMcuInputs({ ...mcuInputs, r: e.target.value })} />
                  </div>
                )}
                {mcuVariable !== "T" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">T (s)</label>
                    <Input type="number" value={mcuInputs.T} onChange={(e) => setMcuInputs({ ...mcuInputs, T: e.target.value })} />
                  </div>
                )}
                {mcuVariable !== "f" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">f (Hz)</label>
                    <Input type="number" value={mcuInputs.f} onChange={(e) => setMcuInputs({ ...mcuInputs, f: e.target.value })} />
                  </div>
                )}
                {mcuVariable !== "v" && mcuVariable !== "r_from_v" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">v (m/s)</label>
                    <Input type="number" value={mcuInputs.v} onChange={(e) => setMcuInputs({ ...mcuInputs, v: e.target.value })} />
                  </div>
                )}
                {mcuVariable !== "ac" && mcuVariable !== "r_from_ac" && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">ac (m/s^2)</label>
                    <Input type="number" value={mcuInputs.ac} onChange={(e) => setMcuInputs({ ...mcuInputs, ac: e.target.value })} />
                  </div>
                )}
              </div>

              {mcuError && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-700">{mcuError}</span>
                </div>
              )}

              <Button onClick={calculateMCU} size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold mb-6">
                Calcular
              </Button>

              {mcuResult && (
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-700">✓ Resultado:</p>
                  <p className="text-4xl font-bold text-cyan-600">{mcuResult.value.toFixed(2)}</p>
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
