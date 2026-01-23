import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Activity, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function DynamicsGraphs() {
  const [massa, setMassa] = useState(2);
  const [forca, setForca] = useState(10);
  
  // Dados para o gráfico de Aceleração x Força
  const [dataAceleracao, setDataAceleracao] = useState<any[]>([]);
  
  // Dados para o gráfico de Energia Cinética x Velocidade
  const [dataEnergia, setDataEnergia] = useState<any[]>([]);

  useEffect(() => {
    // Gráfico 1: Aceleração em função da Força (massa constante)
    // a = F/m
    const newDataAceleracao = [];
    for (let f = 0; f <= 50; f += 2) {
      newDataAceleracao.push({
        f: f,
        a: f / massa
      });
    }
    setDataAceleracao(newDataAceleracao);

    // Gráfico 2: Energia Cinética em função da Velocidade (massa constante)
    // Ec = 1/2 * m * v^2
    const newDataEnergia = [];
    for (let v = 0; v <= 20; v += 1) {
      newDataEnergia.push({
        v: v,
        ec: 0.5 * massa * v * v
      });
    }
    setDataEnergia(newDataEnergia);

  }, [massa, forca]);

  // Valores atuais
  const aceleracaoAtual = forca / massa;
  // Supondo v = 10 m/s para exemplo de energia
  const vExemplo = 10;
  const ecExemplo = 0.5 * massa * vExemplo * vExemplo;

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
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Dinâmica</h1>
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
                  <span className="text-sm font-bold text-purple-600">{massa} kg</span>
                </div>
                <Slider
                  value={[massa]}
                  onValueChange={(v) => setMassa(v[0])}
                  min={0.5}
                  max={10}
                  step={0.5}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Força Aplicada (F)</label>
                  <span className="text-sm font-bold text-blue-600">{forca} N</span>
                </div>
                <Slider
                  value={[forca]}
                  onValueChange={(v) => setForca(v[0])}
                  min={0}
                  max={50}
                  step={1}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Leis de Newton:</p>
              <MathFormula formula={String.raw`$$ F_R = m \cdot a $$`} />
              <MathFormula formula={String.raw`$$ E_c = \frac{1}{2}mv^2 $$`} />
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Para F = {forca}N:</p>
                <p>• Aceleração (a): <span className="font-bold text-slate-900">{formatNumber(aceleracaoAtual, 2)} m/s²</span></p>
                <p>Para v = 10 m/s:</p>
                <p>• Energia Cinética: <span className="font-bold text-slate-900">{formatNumber(ecExemplo, 2)} J</span></p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico de Aceleração x Força */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Aceleração x Força (Linear)
                </h3>
                <p className="text-sm text-slate-500">A aceleração é diretamente proporcional à força aplicada (para massa constante).</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataAceleracao}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="f" 
                      label={{ value: 'Força F (N)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 50]}
                    />
                    <YAxis 
                      label={{ value: "Aceleração a (m/s²)", angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), "m/s²"]}
                      labelFormatter={(label: number) => `F: ${label}N`}
                    />
                    <ReferenceLine x={forca} stroke="#9333ea" strokeDasharray="3 3" label="Atual" />
                    <Line 
                      type="monotone" 
                      dataKey="a" 
                      stroke="#9333ea" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico de Energia Cinética */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Energia Cinética x Velocidade (Quadrática)
                </h3>
                <p className="text-sm text-slate-500">A energia cinética cresce com o quadrado da velocidade.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataEnergia}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="v" 
                      label={{ value: 'Velocidade v (m/s)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 20]}
                    />
                    <YAxis 
                      label={{ value: 'Energia Ec (J)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'J']}
                      labelFormatter={(label: number) => `v: ${label}m/s`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="ec" 
                      stroke="#3b82f6" 
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
