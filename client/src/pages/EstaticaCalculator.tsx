import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator as CalcIcon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber } from "@/lib/utils";

export default function EstaticaCalculator() {
  const [mode, setMode] = useState("torque");
  const [variable, setVariable] = useState("T");
  const [inputs, setInputs] = useState<Record<string, string>>({ F: "50", d: "2", T: "100", angle: "90" });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const F = parseFloat(inputs.F) || 0;
    const d = parseFloat(inputs.d) || 0;
    const T = parseFloat(inputs.T) || 0;
    const angle = parseFloat(inputs.angle) || 90;
    const angleRad = (angle * Math.PI) / 180;
    const sinTheta = Math.sin(angleRad);

    let res = 0;

    if (mode === "torque") {
      if (variable === "T") res = F * d * sinTheta;
      else if (variable === "F") res = T / (d * sinTheta);
      else if (variable === "d") res = T / (F * sinTheta);
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/estatica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 rounded-lg">
                <CalcIcon className="w-5 h-5 text-amber-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Calculadora de Estática</h1>
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
                    <SelectItem value="torque">Momento (Torque)</SelectItem>
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
                    <SelectItem value="T">Torque (τ)</SelectItem>
                    <SelectItem value="F">Força (F)</SelectItem>
                    <SelectItem value="d">Braço de Alavanca (d)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-slate-500 mb-2">Fórmula Utilizada:</p>
              <MathFormula 
                formula={
                  variable === "T" ? "\\tau = F \\cdot d \\cdot \\sin(\\theta)" : 
                  variable === "F" ? "F = \\frac{\\tau}{d \\cdot \\sin(\\theta)}" : 
                  "d = \\frac{\\tau}{F \\cdot \\sin(\\theta)}"
                } 
                className="text-lg text-center"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {variable !== "F" && (
                <div>
                  <label className="text-sm text-slate-600">Força (F)</label>
                  <Input 
                    type="number" 
                    value={inputs.F} 
                    onChange={(e) => setInputs({...inputs, F: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "d" && (
                <div>
                  <label className="text-sm text-slate-600">Braço (d)</label>
                  <Input 
                    type="number" 
                    value={inputs.d} 
                    onChange={(e) => setInputs({...inputs, d: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "T" && (
                <div>
                  <label className="text-sm text-slate-600">Torque (τ)</label>
                  <Input 
                    type="number" 
                    value={inputs.T} 
                    onChange={(e) => setInputs({...inputs, T: e.target.value})} 
                  />
                </div>
              )}
              <div>
                <label className="text-sm text-slate-600">Ângulo (θ em graus)</label>
                <Input 
                  type="number" 
                  value={inputs.angle} 
                  onChange={(e) => setInputs({...inputs, angle: e.target.value})} 
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1 bg-amber-600 hover:bg-amber-700">
                Calcular
              </Button>
              <Button variant="outline" onClick={() => setResult(null)}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {result !== null && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                <p className="text-sm text-amber-600 font-semibold uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-4xl font-bold text-slate-900">
                  {formatNumber(result, 2)} 
                  <span className="text-lg text-slate-500 ml-1">
                    {variable === "T" ? "N·m" : variable === "F" ? "N" : "m"}
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
