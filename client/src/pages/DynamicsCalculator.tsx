import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, RotateCcw, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsCalculator() {
  // ============ FORCE CALCULATOR ============
  const [forceVariable, setForceVariable] = useState<string>("F");
  const [forceInputs, setForceInputs] = useState<Record<string, string>>({ m: "10", a: "5", F: "50" });
  const [forceResult, setForceResult] = useState<any | null>(null);
  const [forceError, setForceError] = useState<string>("");

  const calculateForce = () => {
    setForceError("");
    try {
      const m = parseFloat(forceInputs.m) || 0;
      const a = parseFloat(forceInputs.a) || 0;
      const F = parseFloat(forceInputs.F) || 0;

      let result: any = {};

      if (forceVariable === "F") {
        // F = m * a
        const value = m * a;
        result = { value: value, unit: "N", label: "Força (F)" };
      } else if (forceVariable === "m") {
        // m = F / a
        if (a === 0) {
          setForceError("Aceleração não pode ser zero");
          return;
        }
        const value = F / a;
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (forceVariable === "a") {
        // a = F / m
        if (m === 0) {
          setForceError("Massa não pode ser zero");
          return;
        }
        const value = F / m;
        result = { value: value, unit: "m/s²", label: "Aceleração (a)" };
      }

      setForceResult(result);
    } catch (err) {
      setForceError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetForce = () => {
    setForceInputs({ m: "10", a: "5", F: "50" });
    setForceResult(null);
    setForceError("");
  };

  // ============ WORK CALCULATOR ============
  const [workVariable, setWorkVariable] = useState<string>("W");
  const [workInputs, setWorkInputs] = useState<Record<string, string>>({ F: "10", d: "5", theta: "0", W: "50" });
  const [workResult, setWorkResult] = useState<any | null>(null);
  const [workError, setWorkError] = useState<string>("");

  const calculateWork = () => {
    setWorkError("");
    try {
      const F = parseFloat(workInputs.F) || 0;
      const d = parseFloat(workInputs.d) || 0;
      const theta = parseFloat(workInputs.theta) || 0;
      const W = parseFloat(workInputs.W) || 0;

      const thetaRad = (theta * Math.PI) / 180;

      let result: any = {};

      if (workVariable === "W") {
        // W = F * d * cos(θ)
        const value = F * d * Math.cos(thetaRad);
        result = { value: value, unit: "J", label: "Trabalho (W)" };
      } else if (workVariable === "F") {
        // F = W / (d * cos(θ))
        if (d === 0 || Math.cos(thetaRad) === 0) {
          setWorkError("Valores inválidos para cálculo");
          return;
        }
        const value = W / (d * Math.cos(thetaRad));
        result = { value: value, unit: "N", label: "Força (F)" };
      } else if (workVariable === "d") {
        // d = W / (F * cos(θ))
        if (F === 0 || Math.cos(thetaRad) === 0) {
          setWorkError("Valores inválidos para cálculo");
          return;
        }
        const value = W / (F * Math.cos(thetaRad));
        result = { value: value, unit: "m", label: "Deslocamento (d)" };
      }

      setWorkResult(result);
    } catch (err) {
      setWorkError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetWork = () => {
    setWorkInputs({ F: "10", d: "5", theta: "0", W: "50" });
    setWorkResult(null);
    setWorkError("");
  };

  // ============ KINETIC ENERGY CALCULATOR ============
  const [keVariable, setKeVariable] = useState<string>("Ec");
  const [keInputs, setKeInputs] = useState<Record<string, string>>({ m: "10", v: "5", Ec: "125" });
  const [keResult, setKeResult] = useState<any | null>(null);
  const [keError, setKeError] = useState<string>("");

  const calculateKineticEnergy = () => {
    setKeError("");
    try {
      const m = parseFloat(keInputs.m) || 0;
      const v = parseFloat(keInputs.v) || 0;
      const Ec = parseFloat(keInputs.Ec) || 0;

      let result: any = {};

      if (keVariable === "Ec") {
        // Ec = (1/2) * m * v²
        const value = (1 / 2) * m * v * v;
        result = { value: value, unit: "J", label: "Energia Cinética (Ec)" };
      } else if (keVariable === "m") {
        // m = 2 * Ec / v²
        if (v === 0) {
          setKeError("Velocidade não pode ser zero");
          return;
        }
        const value = (2 * Ec) / (v * v);
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (keVariable === "v") {
        // v = √(2 * Ec / m)
        if (m === 0) {
          setKeError("Massa não pode ser zero");
          return;
        }
        const value = Math.sqrt((2 * Ec) / m);
        result = { value: value, unit: "m/s", label: "Velocidade (v)" };
      }

      setKeResult(result);
    } catch (err) {
      setKeError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetKE = () => {
    setKeInputs({ m: "10", v: "5", Ec: "125" });
    setKeResult(null);
    setKeError("");
  };

  // ============ POTENTIAL ENERGY CALCULATOR ============
  const [peVariable, setPeVariable] = useState<string>("Ep");
  const [peInputs, setPeInputs] = useState<Record<string, string>>({ m: "10", g: "9.8", h: "5", Ep: "490" });
  const [peResult, setPeResult] = useState<any | null>(null);
  const [peError, setPeError] = useState<string>("");

  const calculatePotentialEnergy = () => {
    setPeError("");
    try {
      const m = parseFloat(peInputs.m) || 0;
      const g = parseFloat(peInputs.g) || 9.8;
      const h = parseFloat(peInputs.h) || 0;
      const Ep = parseFloat(peInputs.Ep) || 0;

      let result: any = {};

      if (peVariable === "Ep") {
        // Ep = m * g * h
        const value = m * g * h;
        result = { value: value, unit: "J", label: "Energia Potencial (Ep)" };
      } else if (peVariable === "m") {
        // m = Ep / (g * h)
        if (g === 0 || h === 0) {
          setPeError("Valores inválidos para cálculo");
          return;
        }
        const value = Ep / (g * h);
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (peVariable === "h") {
        // h = Ep / (m * g)
        if (m === 0 || g === 0) {
          setPeError("Valores inválidos para cálculo");
          return;
        }
        const value = Ep / (m * g);
        result = { value: value, unit: "m", label: "Altura (h)" };
      }

      setPeResult(result);
    } catch (err) {
      setPeError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetPE = () => {
    setPeInputs({ m: "10", g: "9.8", h: "5", Ep: "490" });
    setPeResult(null);
    setPeError("");
  };

  // ============ MOMENTUM CALCULATOR ============
  const [momentumVariable, setMomentumVariable] = useState<string>("p");
  const [momentumInputs, setMomentumInputs] = useState<Record<string, string>>({ m: "10", v: "5", p: "50" });
  const [momentumResult, setMomentumResult] = useState<any | null>(null);
  const [momentumError, setMomentumError] = useState<string>("");

  const calculateMomentum = () => {
    setMomentumError("");
    try {
      const m = parseFloat(momentumInputs.m) || 0;
      const v = parseFloat(momentumInputs.v) || 0;
      const p = parseFloat(momentumInputs.p) || 0;

      let result: any = {};

      if (momentumVariable === "p") {
        // p = m * v
        const value = m * v;
        result = { value: value, unit: "kg·m/s", label: "Momentum (p)" };
      } else if (momentumVariable === "m") {
        // m = p / v
        if (v === 0) {
          setMomentumError("Velocidade não pode ser zero");
          return;
        }
        const value = p / v;
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (momentumVariable === "v") {
        // v = p / m
        if (m === 0) {
          setMomentumError("Massa não pode ser zero");
          return;
        }
        const value = p / m;
        result = { value: value, unit: "m/s", label: "Velocidade (v)" };
      }

      setMomentumResult(result);
    } catch (err) {
      setMomentumError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetMomentum = () => {
    setMomentumInputs({ m: "10", v: "5", p: "50" });
    setMomentumResult(null);
    setMomentumError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Calculadora de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="force" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="force">Força</TabsTrigger>
            <TabsTrigger value="work">Trabalho</TabsTrigger>
            <TabsTrigger value="kinetic">Energia Cinética</TabsTrigger>
            <TabsTrigger value="potential">Energia Potencial</TabsTrigger>
            <TabsTrigger value="momentum">Momentum</TabsTrigger>
          </TabsList>

          {/* Force Tab */}
          <TabsContent value="force">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calculadora de Força (F = m·a)</h3>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6 overflow-x-auto">
                    <MathFormula formula="\\vec{F} = m \\cdot \\vec{a}" className="text-center text-lg md:text-2xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Calcular:</label>
                    <Select value={forceVariable} onValueChange={setForceVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="F">Força (F)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="a">Aceleração (a)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {forceVariable !== "F" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Força (F) - N</label>
                      <Input
                        type="number"
                        placeholder="Ex: 50"
                        value={forceInputs.F}
                        onChange={(e) => setForceInputs({ ...forceInputs, F: e.target.value })}
                      />
                    </div>
                  )}

                  {forceVariable !== "m" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Massa (m) - kg</label>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={forceInputs.m}
                        onChange={(e) => setForceInputs({ ...forceInputs, m: e.target.value })}
                      />
                    </div>
                  )}

                  {forceVariable !== "a" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Aceleração (a) - m/s²</label>
                      <Input
                        type="number"
                        placeholder="Ex: 5"
                        value={forceInputs.a}
                        onChange={(e) => setForceInputs({ ...forceInputs, a: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {forceError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{forceError}</p>
                  </div>
                )}

                {forceResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                    <p className="text-3xl font-bold text-green-600">
                      {forceResult.value.toFixed(2)} <span className="text-lg">{forceResult.unit}</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{forceResult.label}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculateForce} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calcular
                  </Button>
                  <Button onClick={resetForce} variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Work Tab */}
          <TabsContent value="work">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calculadora de Trabalho (W = F·d·cos θ)</h3>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6 overflow-x-auto">
                    <MathFormula formula="W = F \\cdot d \\cdot \\cos(\\theta)" className="text-center text-lg md:text-2xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Calcular:</label>
                    <Select value={workVariable} onValueChange={setWorkVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="W">Trabalho (W)</SelectItem>
                        <SelectItem value="F">Força (F)</SelectItem>
                        <SelectItem value="d">Deslocamento (d)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {workVariable !== "W" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Trabalho (W) - J</label>
                      <Input
                        type="number"
                        placeholder="Ex: 50"
                        value={workInputs.W}
                        onChange={(e) => setWorkInputs({ ...workInputs, W: e.target.value })}
                      />
                    </div>
                  )}

                  {workVariable !== "F" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Força (F) - N</label>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={workInputs.F}
                        onChange={(e) => setWorkInputs({ ...workInputs, F: e.target.value })}
                      />
                    </div>
                  )}

                  {workVariable !== "d" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Deslocamento (d) - m</label>
                      <Input
                        type="number"
                        placeholder="Ex: 5"
                        value={workInputs.d}
                        onChange={(e) => setWorkInputs({ ...workInputs, d: e.target.value })}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Ângulo (θ) - graus</label>
                    <Input
                      type="number"
                      placeholder="Ex: 0"
                      value={workInputs.theta}
                      onChange={(e) => setWorkInputs({ ...workInputs, theta: e.target.value })}
                    />
                  </div>
                </div>

                {workError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{workError}</p>
                  </div>
                )}

                {workResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                    <p className="text-3xl font-bold text-green-600">
                      {workResult.value.toFixed(2)} <span className="text-lg">{workResult.unit}</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{workResult.label}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculateWork} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calcular
                  </Button>
                  <Button onClick={resetWork} variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Kinetic Energy Tab */}
          <TabsContent value="kinetic">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calculadora de Energia Cinética (Ec = ½m·v²)</h3>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6 overflow-x-auto">
                    <MathFormula formula="E_c = \\frac{1}{2} \\cdot m \\cdot v^2" className="text-center text-lg md:text-2xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Calcular:</label>
                    <Select value={keVariable} onValueChange={setKeVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ec">Energia Cinética (Ec)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="v">Velocidade (v)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {keVariable !== "Ec" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Energia Cinética (Ec) - J</label>
                      <Input
                        type="number"
                        placeholder="Ex: 125"
                        value={keInputs.Ec}
                        onChange={(e) => setKeInputs({ ...keInputs, Ec: e.target.value })}
                      />
                    </div>
                  )}

                  {keVariable !== "m" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Massa (m) - kg</label>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={keInputs.m}
                        onChange={(e) => setKeInputs({ ...keInputs, m: e.target.value })}
                      />
                    </div>
                  )}

                  {keVariable !== "v" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade (v) - m/s</label>
                      <Input
                        type="number"
                        placeholder="Ex: 5"
                        value={keInputs.v}
                        onChange={(e) => setKeInputs({ ...keInputs, v: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {keError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{keError}</p>
                  </div>
                )}

                {keResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                    <p className="text-3xl font-bold text-green-600">
                      {keResult.value.toFixed(2)} <span className="text-lg">{keResult.unit}</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{keResult.label}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculateKineticEnergy} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calcular
                  </Button>
                  <Button onClick={resetKE} variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Potential Energy Tab */}
          <TabsContent value="potential">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calculadora de Energia Potencial (Ep = m·g·h)</h3>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6 overflow-x-auto">
                    <MathFormula formula="E_p = m \\cdot g \\cdot h" className="text-center text-lg md:text-2xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Calcular:</label>
                    <Select value={peVariable} onValueChange={setPeVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ep">Energia Potencial (Ep)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="h">Altura (h)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {peVariable !== "Ep" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Energia Potencial (Ep) - J</label>
                      <Input
                        type="number"
                        placeholder="Ex: 490"
                        value={peInputs.Ep}
                        onChange={(e) => setPeInputs({ ...peInputs, Ep: e.target.value })}
                      />
                    </div>
                  )}

                  {peVariable !== "m" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Massa (m) - kg</label>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={peInputs.m}
                        onChange={(e) => setPeInputs({ ...peInputs, m: e.target.value })}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Gravidade (g) - m/s²</label>
                    <Input
                      type="number"
                      placeholder="Ex: 9.8"
                      value={peInputs.g}
                      onChange={(e) => setPeInputs({ ...peInputs, g: e.target.value })}
                    />
                  </div>

                  {peVariable !== "h" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Altura (h) - m</label>
                      <Input
                        type="number"
                        placeholder="Ex: 5"
                        value={peInputs.h}
                        onChange={(e) => setPeInputs({ ...peInputs, h: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {peError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{peError}</p>
                  </div>
                )}

                {peResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                    <p className="text-3xl font-bold text-green-600">
                      {peResult.value.toFixed(2)} <span className="text-lg">{peResult.unit}</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{peResult.label}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculatePotentialEnergy} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calcular
                  </Button>
                  <Button onClick={resetPE} variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Momentum Tab */}
          <TabsContent value="momentum">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Calculadora de Momentum (p = m·v)</h3>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6 overflow-x-auto">
                    <MathFormula formula="\\vec{p} = m \\cdot \\vec{v}" className="text-center text-lg md:text-2xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Calcular:</label>
                    <Select value={momentumVariable} onValueChange={setMomentumVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="p">Momentum (p)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="v">Velocidade (v)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {momentumVariable !== "p" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Momentum (p) - kg·m/s</label>
                      <Input
                        type="number"
                        placeholder="Ex: 50"
                        value={momentumInputs.p}
                        onChange={(e) => setMomentumInputs({ ...momentumInputs, p: e.target.value })}
                      />
                    </div>
                  )}

                  {momentumVariable !== "m" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Massa (m) - kg</label>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={momentumInputs.m}
                        onChange={(e) => setMomentumInputs({ ...momentumInputs, m: e.target.value })}
                      />
                    </div>
                  )}

                  {momentumVariable !== "v" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Velocidade (v) - m/s</label>
                      <Input
                        type="number"
                        placeholder="Ex: 5"
                        value={momentumInputs.v}
                        onChange={(e) => setMomentumInputs({ ...momentumInputs, v: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {momentumError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{momentumError}</p>
                  </div>
                )}

                {momentumResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Resultado:</p>
                    <p className="text-3xl font-bold text-green-600">
                      {momentumResult.value.toFixed(2)} <span className="text-lg">{momentumResult.unit}</span>
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{momentumResult.label}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculateMomentum} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calcular
                  </Button>
                  <Button onClick={resetMomentum} variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
