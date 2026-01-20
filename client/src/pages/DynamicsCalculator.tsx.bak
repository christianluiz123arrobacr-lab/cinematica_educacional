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
  // ============ SEGUNDA LEI DE NEWTON ============
  const [newtonVariable, setNewtonVariable] = useState<string>("a");
  const [newtonInputs, setNewtonInputs] = useState<Record<string, string>>({ F: "100", m: "10", a: "10" });
  const [newtonResult, setNewtonResult] = useState<any | null>(null);
  const [newtonError, setNewtonError] = useState<string>("");

  const calculateNewton = () => {
    setNewtonError("");
    try {
      const F = parseFloat(newtonInputs.F) || 0;
      const m = parseFloat(newtonInputs.m) || 0;
      const a = parseFloat(newtonInputs.a) || 0;

      if (isNaN(F) || isNaN(m) || isNaN(a)) {
        setNewtonError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (newtonVariable === "a") {
        if (m === 0) {
          setNewtonError("Massa não pode ser zero");
          return;
        }
        const value = F / m;
        result = { value: value, unit: "m/s²", label: "Aceleração (a)" };
      } else if (newtonVariable === "F") {
        const value = m * a;
        result = { value: value, unit: "N", label: "Força (F)" };
      } else if (newtonVariable === "m") {
        if (a === 0) {
          setNewtonError("Aceleração não pode ser zero");
          return;
        }
        const value = F / a;
        result = { value: value, unit: "kg", label: "Massa (m)" };
      }

      setNewtonResult(result);
    } catch (err) {
      setNewtonError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetNewton = () => {
    setNewtonInputs({ F: "100", m: "10", a: "10" });
    setNewtonResult(null);
    setNewtonError("");
  };

  // ============ TRABALHO ============
  const [workVariable, setWorkVariable] = useState<string>("W");
  const [workInputs, setWorkInputs] = useState<Record<string, string>>({ F: "50", d: "10", angle: "0", W: "500" });
  const [workResult, setWorkResult] = useState<any | null>(null);
  const [workError, setWorkError] = useState<string>("");

  const calculateWork = () => {
    setWorkError("");
    try {
      const F = parseFloat(workInputs.F) || 0;
      const d = parseFloat(workInputs.d) || 0;
      const angle = parseFloat(workInputs.angle) || 0;
      const W = parseFloat(workInputs.W) || 0;

      if (isNaN(F) || isNaN(d) || isNaN(angle) || isNaN(W)) {
        setWorkError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};
      const angleRad = (angle * Math.PI) / 180;

      if (workVariable === "W") {
        const value = F * d * Math.cos(angleRad);
        result = { value: value, unit: "J", label: "Trabalho (W)" };
      } else if (workVariable === "F") {
        if (d === 0 || Math.cos(angleRad) === 0) {
          setWorkError("Deslocamento ou cosseno não pode ser zero");
          return;
        }
        const value = W / (d * Math.cos(angleRad));
        result = { value: value, unit: "N", label: "Força (F)" };
      } else if (workVariable === "d") {
        if (F === 0 || Math.cos(angleRad) === 0) {
          setWorkError("Força ou cosseno não pode ser zero");
          return;
        }
        const value = W / (F * Math.cos(angleRad));
        result = { value: value, unit: "m", label: "Deslocamento (d)" };
      }

      setWorkResult(result);
    } catch (err) {
      setWorkError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetWork = () => {
    setWorkInputs({ F: "50", d: "10", angle: "0", W: "500" });
    setWorkResult(null);
    setWorkError("");
  };

  // ============ ENERGIA CINÉTICA ============
  const [kineticVariable, setKineticVariable] = useState<string>("Ec");
  const [kineticInputs, setKineticInputs] = useState<Record<string, string>>({ m: "10", v: "5", Ec: "125" });
  const [kineticResult, setKineticResult] = useState<any | null>(null);
  const [kineticError, setKineticError] = useState<string>("");

  const calculateKinetic = () => {
    setKineticError("");
    try {
      const m = parseFloat(kineticInputs.m) || 0;
      const v = parseFloat(kineticInputs.v) || 0;
      const Ec = parseFloat(kineticInputs.Ec) || 0;

      if (isNaN(m) || isNaN(v) || isNaN(Ec)) {
        setKineticError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (kineticVariable === "Ec") {
        const value = 0.5 * m * v * v;
        result = { value: value, unit: "J", label: "Energia Cinética (Ec)" };
      } else if (kineticVariable === "m") {
        if (v === 0) {
          setKineticError("Velocidade não pode ser zero");
          return;
        }
        const value = (2 * Ec) / (v * v);
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (kineticVariable === "v") {
        if (m === 0) {
          setKineticError("Massa não pode ser zero");
          return;
        }
        const value = Math.sqrt((2 * Ec) / m);
        result = { value: value, unit: "m/s", label: "Velocidade (v)" };
      }

      setKineticResult(result);
    } catch (err) {
      setKineticError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetKinetic = () => {
    setKineticInputs({ m: "10", v: "5", Ec: "125" });
    setKineticResult(null);
    setKineticError("");
  };

  // ============ ENERGIA POTENCIAL ============
  const [potentialVariable, setPotentialVariable] = useState<string>("Ep");
  const [potentialInputs, setPotentialInputs] = useState<Record<string, string>>({ m: "10", g: "9.8", h: "10", Ep: "980" });
  const [potentialResult, setPotentialResult] = useState<any | null>(null);
  const [potentialError, setPotentialError] = useState<string>("");

  const calculatePotential = () => {
    setPotentialError("");
    try {
      const m = parseFloat(potentialInputs.m) || 0;
      const g = parseFloat(potentialInputs.g) || 0;
      const h = parseFloat(potentialInputs.h) || 0;
      const Ep = parseFloat(potentialInputs.Ep) || 0;

      if (isNaN(m) || isNaN(g) || isNaN(h) || isNaN(Ep)) {
        setPotentialError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (potentialVariable === "Ep") {
        const value = m * g * h;
        result = { value: value, unit: "J", label: "Energia Potencial (Ep)" };
      } else if (potentialVariable === "m") {
        if (g === 0 || h === 0) {
          setPotentialError("Gravidade ou altura não pode ser zero");
          return;
        }
        const value = Ep / (g * h);
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (potentialVariable === "h") {
        if (m === 0 || g === 0) {
          setPotentialError("Massa ou gravidade não pode ser zero");
          return;
        }
        const value = Ep / (m * g);
        result = { value: value, unit: "m", label: "Altura (h)" };
      }

      setPotentialResult(result);
    } catch (err) {
      setPotentialError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetPotential = () => {
    setPotentialInputs({ m: "10", g: "9.8", h: "10", Ep: "980" });
    setPotentialResult(null);
    setPotentialError("");
  };

  // ============ MOMENTUM ============
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

      if (isNaN(m) || isNaN(v) || isNaN(p)) {
        setMomentumError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (momentumVariable === "p") {
        const value = m * v;
        result = { value: value, unit: "kg·m/s", label: "Momentum (p)" };
      } else if (momentumVariable === "m") {
        if (v === 0) {
          setMomentumError("Velocidade não pode ser zero");
          return;
        }
        const value = p / v;
        result = { value: value, unit: "kg", label: "Massa (m)" };
      } else if (momentumVariable === "v") {
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

  // ============ POTÊNCIA ============
  const [powerVariable, setPowerVariable] = useState<string>("P");
  const [powerInputs, setPowerInputs] = useState<Record<string, string>>({ W: "500", t: "10", P: "50" });
  const [powerResult, setPowerResult] = useState<any | null>(null);
  const [powerError, setPowerError] = useState<string>("");

  const calculatePower = () => {
    setPowerError("");
    try {
      const W = parseFloat(powerInputs.W) || 0;
      const t = parseFloat(powerInputs.t) || 0;
      const P = parseFloat(powerInputs.P) || 0;

      if (isNaN(W) || isNaN(t) || isNaN(P)) {
        setPowerError("Preencha todos os campos com números válidos");
        return;
      }

      let result: any = {};

      if (powerVariable === "P") {
        if (t === 0) {
          setPowerError("Tempo não pode ser zero");
          return;
        }
        const value = W / t;
        result = { value: value, unit: "W", label: "Potência (P)" };
      } else if (powerVariable === "W") {
        const value = P * t;
        result = { value: value, unit: "J", label: "Trabalho (W)" };
      } else if (powerVariable === "t") {
        if (P === 0) {
          setPowerError("Potência não pode ser zero");
          return;
        }
        const value = W / P;
        result = { value: value, unit: "s", label: "Tempo (t)" };
      }

      setPowerResult(result);
    } catch (err) {
      setPowerError("Erro no cálculo. Verifique os valores.");
    }
  };

  const resetPower = () => {
    setPowerInputs({ W: "500", t: "10", P: "50" });
    setPowerResult(null);
    setPowerError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
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

      <section className="container py-6 md:py-12">
        <Tabs defaultValue="newton" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="newton">F = ma</TabsTrigger>
            <TabsTrigger value="work">Trabalho</TabsTrigger>
            <TabsTrigger value="kinetic">Ec</TabsTrigger>
            <TabsTrigger value="potential">Ep</TabsTrigger>
            <TabsTrigger value="momentum">Momentum</TabsTrigger>
            <TabsTrigger value="power">Potência</TabsTrigger>
          </TabsList>

          {/* Newton Tab */}
          <TabsContent value="newton">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Segunda Lei de Newton (F = ma)</h3>
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 overflow-x-auto">
                  <MathFormula formula="\\vec{F} = m \\cdot \\vec{a}" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
                    <Select value={newtonVariable} onValueChange={setNewtonVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Aceleração (a)</SelectItem>
                        <SelectItem value="F">Força (F)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {newtonVariable !== "F" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Força (N)</label>
                        <Input type="number" value={newtonInputs.F} onChange={(e) => setNewtonInputs({ ...newtonInputs, F: e.target.value })} />
                      </div>
                    )}
                    {newtonVariable !== "m" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Massa (kg)</label>
                        <Input type="number" value={newtonInputs.m} onChange={(e) => setNewtonInputs({ ...newtonInputs, m: e.target.value })} />
                      </div>
                    )}
                    {newtonVariable !== "a" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Aceleração (m/s²)</label>
                        <Input type="number" value={newtonInputs.a} onChange={(e) => setNewtonInputs({ ...newtonInputs, a: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {newtonError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{newtonError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculateNewton} className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Calcular
                    </Button>
                    <Button onClick={resetNewton} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {newtonResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{newtonResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{newtonResult.value.toFixed(4)} {newtonResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Work Tab */}
          <TabsContent value="work">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Trabalho (W = F·d·cos θ)</h3>
              <div className="space-y-6">
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 overflow-x-auto">
                  <MathFormula formula="W = F \\cdot d \\cdot \\cos(\\theta)" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
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

                  <div className="grid md:grid-cols-4 gap-4">
                    {workVariable !== "F" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Força (N)</label>
                        <Input type="number" value={workInputs.F} onChange={(e) => setWorkInputs({ ...workInputs, F: e.target.value })} />
                      </div>
                    )}
                    {workVariable !== "d" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Deslocamento (m)</label>
                        <Input type="number" value={workInputs.d} onChange={(e) => setWorkInputs({ ...workInputs, d: e.target.value })} />
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-2 block">Ângulo (°)</label>
                      <Input type="number" value={workInputs.angle} onChange={(e) => setWorkInputs({ ...workInputs, angle: e.target.value })} />
                    </div>
                    {workVariable !== "W" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Trabalho (J)</label>
                        <Input type="number" value={workInputs.W} onChange={(e) => setWorkInputs({ ...workInputs, W: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {workError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{workError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculateWork} className="flex-1 bg-cyan-600 hover:bg-cyan-700">
                      Calcular
                    </Button>
                    <Button onClick={resetWork} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {workResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{workResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{workResult.value.toFixed(4)} {workResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Kinetic Energy Tab */}
          <TabsContent value="kinetic">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Energia Cinética (Ec = ½mv²)</h3>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 overflow-x-auto">
                  <MathFormula formula="E_c = \\frac{1}{2} \\cdot m \\cdot v^2" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
                    <Select value={kineticVariable} onValueChange={setKineticVariable}>
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

                  <div className="grid md:grid-cols-3 gap-4">
                    {kineticVariable !== "m" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Massa (kg)</label>
                        <Input type="number" value={kineticInputs.m} onChange={(e) => setKineticInputs({ ...kineticInputs, m: e.target.value })} />
                      </div>
                    )}
                    {kineticVariable !== "v" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Velocidade (m/s)</label>
                        <Input type="number" value={kineticInputs.v} onChange={(e) => setKineticInputs({ ...kineticInputs, v: e.target.value })} />
                      </div>
                    )}
                    {kineticVariable !== "Ec" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Energia Cinética (J)</label>
                        <Input type="number" value={kineticInputs.Ec} onChange={(e) => setKineticInputs({ ...kineticInputs, Ec: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {kineticError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{kineticError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculateKinetic} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      Calcular
                    </Button>
                    <Button onClick={resetKinetic} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {kineticResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{kineticResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{kineticResult.value.toFixed(4)} {kineticResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Potential Energy Tab */}
          <TabsContent value="potential">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Energia Potencial (Ep = mgh)</h3>
              <div className="space-y-6">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 overflow-x-auto">
                  <MathFormula formula="E_p = m \\cdot g \\cdot h" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
                    <Select value={potentialVariable} onValueChange={setPotentialVariable}>
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

                  <div className="grid md:grid-cols-4 gap-4">
                    {potentialVariable !== "m" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Massa (kg)</label>
                        <Input type="number" value={potentialInputs.m} onChange={(e) => setPotentialInputs({ ...potentialInputs, m: e.target.value })} />
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-2 block">Gravidade (m/s²)</label>
                      <Input type="number" value={potentialInputs.g} onChange={(e) => setPotentialInputs({ ...potentialInputs, g: e.target.value })} />
                    </div>
                    {potentialVariable !== "h" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Altura (m)</label>
                        <Input type="number" value={potentialInputs.h} onChange={(e) => setPotentialInputs({ ...potentialInputs, h: e.target.value })} />
                      </div>
                    )}
                    {potentialVariable !== "Ep" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Energia Potencial (J)</label>
                        <Input type="number" value={potentialInputs.Ep} onChange={(e) => setPotentialInputs({ ...potentialInputs, Ep: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {potentialError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{potentialError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculatePotential} className="flex-1 bg-pink-600 hover:bg-pink-700">
                      Calcular
                    </Button>
                    <Button onClick={resetPotential} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {potentialResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{potentialResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{potentialResult.value.toFixed(4)} {potentialResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Momentum Tab */}
          <TabsContent value="momentum">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Momentum (p = mv)</h3>
              <div className="space-y-6">
                <div className="bg-lime-50 p-4 rounded-lg border border-lime-200 overflow-x-auto">
                  <MathFormula formula="\\vec{p} = m \\cdot \\vec{v}" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
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

                  <div className="grid md:grid-cols-3 gap-4">
                    {momentumVariable !== "m" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Massa (kg)</label>
                        <Input type="number" value={momentumInputs.m} onChange={(e) => setMomentumInputs({ ...momentumInputs, m: e.target.value })} />
                      </div>
                    )}
                    {momentumVariable !== "v" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Velocidade (m/s)</label>
                        <Input type="number" value={momentumInputs.v} onChange={(e) => setMomentumInputs({ ...momentumInputs, v: e.target.value })} />
                      </div>
                    )}
                    {momentumVariable !== "p" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Momentum (kg·m/s)</label>
                        <Input type="number" value={momentumInputs.p} onChange={(e) => setMomentumInputs({ ...momentumInputs, p: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {momentumError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{momentumError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculateMomentum} className="flex-1 bg-lime-600 hover:bg-lime-700">
                      Calcular
                    </Button>
                    <Button onClick={resetMomentum} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {momentumResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{momentumResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{momentumResult.value.toFixed(4)} {momentumResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Power Tab */}
          <TabsContent value="power">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Calculadora: Potência (P = W/t)</h3>
              <div className="space-y-6">
                <div className="bg-sky-50 p-4 rounded-lg border border-sky-200 overflow-x-auto">
                  <MathFormula formula="P = \\frac{W}{\\Delta t}" className="text-center text-lg md:text-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Calcular:</label>
                    <Select value={powerVariable} onValueChange={setPowerVariable}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="P">Potência (P)</SelectItem>
                        <SelectItem value="W">Trabalho (W)</SelectItem>
                        <SelectItem value="t">Tempo (t)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {powerVariable !== "W" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Trabalho (J)</label>
                        <Input type="number" value={powerInputs.W} onChange={(e) => setPowerInputs({ ...powerInputs, W: e.target.value })} />
                      </div>
                    )}
                    {powerVariable !== "t" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Tempo (s)</label>
                        <Input type="number" value={powerInputs.t} onChange={(e) => setPowerInputs({ ...powerInputs, t: e.target.value })} />
                      </div>
                    )}
                    {powerVariable !== "P" && (
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Potência (W)</label>
                        <Input type="number" value={powerInputs.P} onChange={(e) => setPowerInputs({ ...powerInputs, P: e.target.value })} />
                      </div>
                    )}
                  </div>

                  {powerError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{powerError}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={calculatePower} className="flex-1 bg-sky-600 hover:bg-sky-700">
                      Calcular
                    </Button>
                    <Button onClick={resetPower} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Limpar
                    </Button>
                  </div>

                  {powerResult && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-2">{powerResult.label}</p>
                      <p className="text-2xl font-bold text-green-700">{powerResult.value.toFixed(4)} {powerResult.unit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
