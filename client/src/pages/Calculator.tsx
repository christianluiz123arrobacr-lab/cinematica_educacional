import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator as CalcIcon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MathFormula } from "@/components/MathFormula";
import { formatNumber } from "@/lib/utils";

export default function Calculator() {
  const [mode, setMode] = useState("mru");
  const [variable, setVariable] = useState("s");
  const [inputs, setInputs] = useState<Record<string, string>>({ s0: "0", v: "10", t: "5", s: "50", a: "2", v0: "0" });
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const s0 = parseFloat(inputs.s0) || 0;
    const v = parseFloat(inputs.v) || 0;
    const t = parseFloat(inputs.t) || 0;
    const s = parseFloat(inputs.s) || 0;
    const a = parseFloat(inputs.a) || 0;
    const v0 = parseFloat(inputs.v0) || 0;

    let res = 0;

    if (mode === "mru") {
      if (variable === "s") res = s0 + v * t;
      else if (variable === "s0") res = s - v * t;
      else if (variable === "v") res = (s - s0) / t;
      else if (variable === "t") res = (s - s0) / v;
    } else if (mode === "mruv") {
      if (variable === "s") res = s0 + v0 * t + 0.5 * a * t * t;
      else if (variable === "v") res = v0 + a * t;
      else if (variable === "v0") res = v - a * t; // Simplificado
      else if (variable === "a") res = (v - v0) / t;
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/cinematica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CalcIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Calculadora de Cinemática</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 flex justify-center">
        <Card className="w-full max-w-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Tipo de Movimento</label>
                <Select value={mode} onValueChange={setMode}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mru">MRU (Velocidade Constante)</SelectItem>
                    <SelectItem value="mruv">MRUV (Aceleração Constante)</SelectItem>
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
                    {mode === "mru" ? (
                      <>
                        <SelectItem value="s">Posição Final (s)</SelectItem>
                        <SelectItem value="s0">Posição Inicial (s₀)</SelectItem>
                        <SelectItem value="v">Velocidade (v)</SelectItem>
                        <SelectItem value="t">Tempo (t)</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="s">Posição Final (s)</SelectItem>
                        <SelectItem value="v">Velocidade Final (v)</SelectItem>
                        <SelectItem value="a">Aceleração (a)</SelectItem>
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
                  mode === "mru" 
                    ? variable === "s" ? "s = s_0 + v \\cdot t" : "v = \\frac{\\Delta s}{\\Delta t}"
                    : variable === "s" ? "s = s_0 + v_0t + \\frac{1}{2}at^2" : "v = v_0 + at"
                } 
                className="text-lg text-center"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Inputs dinâmicos baseados na seleção */}
              {variable !== "s" && variable !== "s0" && (
                <div>
                  <label className="text-sm text-slate-600">Posição Inicial (s₀)</label>
                  <Input 
                    type="number" 
                    value={inputs.s0} 
                    onChange={(e) => setInputs({...inputs, s0: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "v" && variable !== "v0" && (
                <div>
                  <label className="text-sm text-slate-600">Velocidade {mode === "mruv" ? "Inicial (v₀)" : "(v)"}</label>
                  <Input 
                    type="number" 
                    value={mode === "mru" ? inputs.v : inputs.v0} 
                    onChange={(e) => setInputs({...inputs, [mode === "mru" ? "v" : "v0"]: e.target.value})} 
                  />
                </div>
              )}
              {variable !== "t" && (
                <div>
                  <label className="text-sm text-slate-600">Tempo (t)</label>
                  <Input 
                    type="number" 
                    value={inputs.t} 
                    onChange={(e) => setInputs({...inputs, t: e.target.value})} 
                  />
                </div>
              )}
              {mode === "mruv" && variable !== "a" && (
                <div>
                  <label className="text-sm text-slate-600">Aceleração (a)</label>
                  <Input 
                    type="number" 
                    value={inputs.a} 
                    onChange={(e) => setInputs({...inputs, a: e.target.value})} 
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Calcular
              </Button>
              <Button variant="outline" onClick={() => setResult(null)}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {result !== null && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-4xl font-bold text-slate-900">
                  {formatNumber(result, 2)} 
                  <span className="text-lg text-slate-500 ml-1">
                    {variable.startsWith("s") ? "m" : variable.startsWith("v") ? "m/s" : variable === "t" ? "s" : "m/s²"}
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
