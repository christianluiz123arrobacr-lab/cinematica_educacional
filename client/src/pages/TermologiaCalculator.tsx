import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator as CalcIcon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber } from "@/lib/utils";

export default function TermologiaCalculator() {
  const [mode, setMode] = useState("heat");
  const [variable, setVariable] = useState("Q");
  const [inputs, setInputs] = useState<Record<string, string>>({ m: "1", c: "4186", dt: "10", Q: "41860", L0: "1", alpha: "23", dl: "0.00023" });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const m = parseFloat(inputs.m) || 0;
    const c = parseFloat(inputs.c) || 0;
    const dt = parseFloat(inputs.dt) || 0;
    const Q = parseFloat(inputs.Q) || 0;
    const L0 = parseFloat(inputs.L0) || 0;
    const alpha = parseFloat(inputs.alpha) || 0;
    const dl = parseFloat(inputs.dl) || 0;

    let res = 0;

    if (mode === "heat") {
      if (variable === "Q") res = m * c * dt;
      else if (variable === "m") res = Q / (c * dt);
      else if (variable === "dt") res = Q / (m * c);
    } else if (mode === "expansion") {
      // alpha entra como x10^-6
      const alphaReal = alpha * 1e-6;
      if (variable === "dl") res = L0 * alphaReal * dt;
      else if (variable === "L0") res = dl / (alphaReal * dt);
      else if (variable === "dt") res = dl / (L0 * alphaReal);
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/termologia">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-lg">
                <CalcIcon className="w-5 h-5 text-red-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Calculadora de Termologia</h1>
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
                    <SelectItem value="heat">Calor Sensível (Q=mcΔT)</SelectItem>
                    <SelectItem value="expansion">Dilatação Linear (ΔL=L₀αΔT)</SelectItem>
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
                    {mode === "heat" ? (
                      <>
                        <SelectItem value="Q">Calor (Q)</SelectItem>
                        <SelectItem value="m">Massa (m)</SelectItem>
                        <SelectItem value="dt">Variação Temp (ΔT)</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="dl">Dilatação (ΔL)</SelectItem>
                        <SelectItem value="L0">Comp. Inicial (L₀)</SelectItem>
                        <SelectItem value="dt">Variação Temp (ΔT)</SelectItem>
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
                  mode === "heat" 
                    ? variable === "Q" ? "Q = m \\cdot c \\cdot \\Delta T" : variable === "m" ? "m = \\frac{Q}{c \\cdot \\Delta T}" : "\\Delta T = \\frac{Q}{m \\cdot c}"
                    : variable === "dl" ? "\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T" : variable === "L0" ? "L_0 = \\frac{\\Delta L}{\\alpha \\cdot \\Delta T}" : "\\Delta T = \\frac{\\Delta L}{L_0 \\cdot \\alpha}"
                } 
                className="text-lg text-center"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Inputs dinâmicos */}
              {variable !== "m" && mode === "heat" && (
                <div>
                  <label className="text-sm text-slate-600">Massa (kg)</label>
                  <Input 
                    type="number" 
                    value={inputs.m} 
                    onChange={(e) => setInputs({...inputs, m: e.target.value})} 
                  />
                </div>
              )}
              {mode === "heat" && (
                <div>
                  <label className="text-sm text-slate-600">Calor Específico (J/kg·K)</label>
                  <Input 
                    type="number" 
                    value={inputs.c} 
                    onChange={(e) => setInputs({...inputs, c: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "dt" && (
                <div>
                  <label className="text-sm text-slate-600">Variação Temp (°C)</label>
                  <Input 
                    type="number" 
                    value={inputs.dt} 
                    onChange={(e) => setInputs({...inputs, dt: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "Q" && mode === "heat" && (
                <div>
                  <label className="text-sm text-slate-600">Calor (J)</label>
                  <Input 
                    type="number" 
                    value={inputs.Q} 
                    onChange={(e) => setInputs({...inputs, Q: e.target.value})} 
                  />
                </div>
              )}
              
              {variable !== "L0" && mode === "expansion" && (
                <div>
                  <label className="text-sm text-slate-600">Comp. Inicial (m)</label>
                  <Input 
                    type="number" 
                    value={inputs.L0} 
                    onChange={(e) => setInputs({...inputs, L0: e.target.value})} 
                  />
                </div>
              )}
              {mode === "expansion" && (
                <div>
                  <label className="text-sm text-slate-600">Coef. (x10⁻⁶ °C⁻¹)</label>
                  <Input 
                    type="number" 
                    value={inputs.alpha} 
                    onChange={(e) => setInputs({...inputs, alpha: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "dl" && mode === "expansion" && (
                <div>
                  <label className="text-sm text-slate-600">Dilatação (m)</label>
                  <Input 
                    type="number" 
                    value={inputs.dl} 
                    onChange={(e) => setInputs({...inputs, dl: e.target.value})} 
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1 bg-red-600 hover:bg-red-700">
                Calcular
              </Button>
              <Button variant="outline" onClick={() => setResult(null)}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {result !== null && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                <p className="text-sm text-red-600 font-semibold uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-4xl font-bold text-slate-900">
                  {formatNumber(result, mode === "expansion" && variable === "dl" ? 6 : 2)} 
                  <span className="text-lg text-slate-500 ml-1">
                    {variable === "Q" ? "J" : variable === "m" ? "kg" : variable === "dt" ? "°C" : "m"}
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
