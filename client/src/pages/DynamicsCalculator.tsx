import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator as CalcIcon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber } from "@/lib/utils";

export default function DynamicsCalculator() {
  const [mode, setMode] = useState("newton");
  const [variable, setVariable] = useState("a");
  const [inputs, setInputs] = useState<Record<string, string>>({ F: "100", m: "10", a: "10", v: "5", Ec: "125", Ep: "980", h: "10", g: "9.8" });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const F = parseFloat(inputs.F) || 0;
    const m = parseFloat(inputs.m) || 0;
    const a = parseFloat(inputs.a) || 0;
    const v = parseFloat(inputs.v) || 0;
    const h = parseFloat(inputs.h) || 0;
    const g = parseFloat(inputs.g) || 9.8;
    const Ec = parseFloat(inputs.Ec) || 0;
    const Ep = parseFloat(inputs.Ep) || 0;

    let res = 0;

    if (mode === "newton") {
      if (variable === "a") res = F / m;
      else if (variable === "F") res = m * a;
      else if (variable === "m") res = F / a;
    } else if (mode === "kinetic") {
      if (variable === "Ec") res = 0.5 * m * v * v;
      else if (variable === "m") res = (2 * Ec) / (v * v);
      else if (variable === "v") res = Math.sqrt((2 * Ec) / m);
    } else if (mode === "potential") {
      if (variable === "Ep") res = m * g * h;
      else if (variable === "m") res = Ep / (g * h);
      else if (variable === "h") res = Ep / (m * g);
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dinamica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CalcIcon className="w-5 h-5 text-purple-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Calculadora de Dinâmica</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 flex justify-center">
        <Card className="w-full max-w-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Tipo de Cálculo</label>
                <Select value={mode} onValueChange={setMode}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newton">2ª Lei de Newton (F=ma)</SelectItem>
                    <SelectItem value="kinetic">Energia Cinética</SelectItem>
                    <SelectItem value="potential">Energia Potencial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">O que calcular?</label>
                <Select value={variable} onValueChange={setVariable}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mode === "newton" ? (
                      <>
                        <SelectItem value="a">Aceleração (a)</SelectItem>
                        <SelectItem value="F">Força Resultante (F)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                      </>
                    ) : mode === "kinetic" ? (
                      <>
                        <SelectItem value="Ec">Energia Cinética (Ec)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="v">Velocidade (v)</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="Ep">Energia Potencial (Ep)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="h">Altura (h)</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-slate-500 mb-2">Fórmula Utilizada:</p>
              <MathFormula 
                formula={
                  mode === "newton" 
                    ? variable === "F" ? "F = m \\cdot a" : variable === "a" ? "a = \\frac{F}{m}" : "m = \\frac{F}{a}"
                    : mode === "kinetic"
                    ? variable === "Ec" ? "E_c = \\frac{1}{2}mv^2" : "v = \\sqrt{\\frac{2E_c}{m}}"
                    : variable === "Ep" ? "E_p = mgh" : "h = \\frac{E_p}{mg}"
                } 
                className="text-lg text-center"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Inputs dinâmicos */}
              {variable !== "F" && mode === "newton" && (
                <div>
                  <label className="text-sm text-slate-600">Força (F)</label>
                  <Input 
                    type="number" 
                    value={inputs.F} 
                    onChange={(e) => setInputs({...inputs, F: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "m" && (
                <div>
                  <label className="text-sm text-slate-600">Massa (m)</label>
                  <Input 
                    type="number" 
                    value={inputs.m} 
                    onChange={(e) => setInputs({...inputs, m: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "a" && mode === "newton" && (
                <div>
                  <label className="text-sm text-slate-600">Aceleração (a)</label>
                  <Input 
                    type="number" 
                    value={inputs.a} 
                    onChange={(e) => setInputs({...inputs, a: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "v" && mode === "kinetic" && (
                <div>
                  <label className="text-sm text-slate-600">Velocidade (v)</label>
                  <Input 
                    type="number" 
                    value={inputs.v} 
                    onChange={(e) => setInputs({...inputs, v: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "h" && mode === "potential" && (
                <div>
                  <label className="text-sm text-slate-600">Altura (h)</label>
                  <Input 
                    type="number" 
                    value={inputs.h} 
                    onChange={(e) => setInputs({...inputs, h: e.target.value})} 
                  />
                </div>
              )}
              {mode === "potential" && (
                <div>
                  <label className="text-sm text-slate-600">Gravidade (g)</label>
                  <Input 
                    type="number" 
                    value={inputs.g} 
                    onChange={(e) => setInputs({...inputs, g: e.target.value})} 
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1 bg-purple-600 hover:bg-purple-700">
                Calcular
              </Button>
              <Button variant="outline" onClick={() => setResult(null)}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {result !== null && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                <p className="text-sm text-purple-600 font-semibold uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-4xl font-bold text-slate-900">
                  {formatNumber(result, 2)} 
                  <span className="text-lg text-slate-500 ml-1">
                    {variable === "a" ? "m/s²" : variable === "F" ? "N" : variable === "m" ? "kg" : variable === "v" ? "m/s" : variable === "h" ? "m" : "J"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
