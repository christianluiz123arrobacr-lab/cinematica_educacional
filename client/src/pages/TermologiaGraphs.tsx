import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Thermometer, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function TermologiaGraphs() {
  const [massa, setMassa] = useState(1);
  const [calorEspecifico, setCalorEspecifico] = useState(4186); // Água
  const [coefDilatacao, setCoefDilatacao] = useState(23); // Alumínio (x10^-6)
  
  // Dados para o gráfico de Calor x Temperatura
  const [dataCalor, setDataCalor] = useState<any[]>([]);
  
  // Dados para o gráfico de Dilatação x Temperatura
  const [dataDilatacao, setDataDilatacao] = useState<any[]>([]);

  useEffect(() => {
    // Gráfico 1: Calor Sensível (Q = mcΔT)
    const newDataCalor = [];
    for (let dt = 0; dt <= 100; dt += 5) {
      newDataCalor.push({
        dt: dt,
        q: massa * calorEspecifico * dt
      });
    }
    setDataCalor(newDataCalor);

    // Gráfico 2: Dilatação Linear (ΔL = L0 * α * ΔT)
    // Assumindo L0 = 1m
    const l0 = 1;
    const alpha = coefDilatacao * 1e-6;
    const newDataDilatacao = [];
    for (let dt = 0; dt <= 100; dt += 5) {
      newDataDilatacao.push({
        dt: dt,
        dl: l0 * alpha * dt * 1000 // em mm
      });
    }
    setDataDilatacao(newDataDilatacao);

  }, [massa, calorEspecifico, coefDilatacao]);

  // Valores atuais para exemplo (ΔT = 50°C)
  const dtExemplo = 50;
  const qExemplo = massa * calorEspecifico * dtExemplo;
  const dlExemplo = 1 * (coefDilatacao * 1e-6) * dtExemplo * 1000;

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
                <TrendingUp className="w-5 h-5 text-red-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Termologia</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Controles */}
          <Card className="p-6 space-y-6 h-fit">
            <h3 className="font-bold text-slate-900">Parâmetros do Sistema</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Massa (m)</label>
                  <span className="text-sm font-bold text-red-600">{massa} kg</span>
                </div>
                <Slider
                  value={[massa]}
                  onValueChange={(v) => setMassa(v[0])}
                  min={0.1}
                  max={5}
                  step={0.1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Calor Específico (c)</label>
                  <span className="text-sm font-bold text-blue-600">{calorEspecifico} J/kg·K</span>
                </div>
                <select 
                  className="w-full p-2 border rounded-md text-sm"
                  value={calorEspecifico}
                  onChange={(e) => setCalorEspecifico(Number(e.target.value))}
                >
                  <option value={4186}>Água (4186)</option>
                  <option value={2400}>Álcool (2400)</option>
                  <option value={900}>Alumínio (900)</option>
                  <option value={450}>Ferro (450)</option>
                  <option value={128}>Chumbo (128)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Coef. Dilatação (α)</label>
                  <span className="text-sm font-bold text-orange-600">{coefDilatacao} x10⁻⁶ °C⁻¹</span>
                </div>
                <select 
                  className="w-full p-2 border rounded-md text-sm"
                  value={coefDilatacao}
                  onChange={(e) => setCoefDilatacao(Number(e.target.value))}
                >
                  <option value={23}>Alumínio (23)</option>
                  <option value={17}>Cobre (17)</option>
                  <option value={12}>Ferro (12)</option>
                  <option value={9}>Vidro (9)</option>
                </select>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Fórmulas:</p>
              <MathFormula formula={String.raw`$$ Q = m \cdot c \cdot \Delta T $$`} />
              <MathFormula formula={String.raw`$$ \Delta L = L_0 \cdot \alpha \cdot \Delta T $$`} />
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Para ΔT = 50°C:</p>
                <p>• Calor Necessário: <span className="font-bold text-slate-900">{formatNumber(qExemplo, 0)} J</span></p>
                <p>• Dilatação (L0=1m): <span className="font-bold text-slate-900">{formatNumber(dlExemplo, 3)} mm</span></p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico de Calor x Temperatura */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-600" />
                  Calor Sensível (Q x ΔT)
                </h3>
                <p className="text-sm text-slate-500">Quanto maior o calor específico, mais energia é necessária para aquecer o material.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataCalor}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="dt" 
                      label={{ value: 'Variação Temp ΔT (°C)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 100]}
                    />
                    <YAxis 
                      label={{ value: "Calor Q (J)", angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [formatNumber(value, 0), "J"]}
                      labelFormatter={(label: number) => `ΔT: ${label}°C`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="q" 
                      stroke="#ef4444" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico de Dilatação */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-orange-600" />
                  Dilatação Linear (ΔL x ΔT)
                </h3>
                <p className="text-sm text-slate-500">A dilatação é proporcional à variação de temperatura e ao coeficiente do material.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataDilatacao}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="dt" 
                      label={{ value: 'Variação Temp ΔT (°C)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 100]}
                    />
                    <YAxis 
                      label={{ value: 'Dilatação ΔL (mm)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(3), 'mm']}
                      labelFormatter={(label: number) => `ΔT: ${label}°C`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="dl" 
                      stroke="#f97316" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
