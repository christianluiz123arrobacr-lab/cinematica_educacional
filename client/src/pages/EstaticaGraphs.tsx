import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Scale, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function EstaticaGraphs() {
  const [forca, setForca] = useState(50);
  const [distancia, setDistancia] = useState(2);
  
  // Dados para o gráfico de Torque x Distância
  const [dataTorque, setDataTorque] = useState<any[]>([]);
  
  // Dados para o gráfico de Torque x Força
  const [dataTorqueForca, setDataTorqueForca] = useState<any[]>([]);

  useEffect(() => {
    // Gráfico 1: Torque em função da Distância (Força constante)
    // T = F * d
    const newDataTorque = [];
    for (let d = 0; d <= 5; d += 0.5) {
      newDataTorque.push({
        d: d,
        t: forca * d
      });
    }
    setDataTorque(newDataTorque);

    // Gráfico 2: Torque em função da Força (Distância constante)
    // T = F * d
    const newDataTorqueForca = [];
    for (let f = 0; f <= 100; f += 5) {
      newDataTorqueForca.push({
        f: f,
        t: f * distancia
      });
    }
    setDataTorqueForca(newDataTorqueForca);

  }, [forca, distancia]);

  // Valores atuais
  const torqueAtual = forca * distancia;

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
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Estática</h1>
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
                  <label className="text-sm font-medium text-slate-700">Força Aplicada (F)</label>
                  <span className="text-sm font-bold text-amber-600">{forca} N</span>
                </div>
                <Slider
                  value={[forca]}
                  onValueChange={(v) => setForca(v[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Braço de Alavanca (d)</label>
                  <span className="text-sm font-bold text-blue-600">{distancia} m</span>
                </div>
                <Slider
                  value={[distancia]}
                  onValueChange={(v) => setDistancia(v[0])}
                  min={0}
                  max={5}
                  step={0.1}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Momento de uma Força (Torque):</p>
              <MathFormula formula={String.raw`$$ \tau = F \cdot d \cdot \sin(\theta) $$`} />
              <p className="text-xs text-slate-500 italic">(Considerando força perpendicular, sen(90°) = 1)</p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Para F = {forca}N e d = {distancia}m:</p>
                <p>• Torque Resultante: <span className="font-bold text-slate-900">{formatNumber(torqueAtual, 2)} N·m</span></p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico de Torque x Distância */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-600" />
                  Torque x Distância (Linear)
                </h3>
                <p className="text-sm text-slate-500">Quanto maior o braço de alavanca, maior o torque gerado pela mesma força.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataTorque}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="d" 
                      label={{ value: 'Distância d (m)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 5]}
                    />
                    <YAxis 
                      label={{ value: "Torque τ (N·m)", angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), "N·m"]}
                      labelFormatter={(label: number) => `d: ${label}m`}
                    />
                    <ReferenceLine x={distancia} stroke="#d97706" strokeDasharray="3 3" label="Atual" />
                    <Line 
                      type="monotone" 
                      dataKey="t" 
                      stroke="#d97706" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico de Torque x Força */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  Torque x Força (Linear)
                </h3>
                <p className="text-sm text-slate-500">Para uma distância fixa, o torque aumenta proporcionalmente à força aplicada.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataTorqueForca}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="f" 
                      label={{ value: 'Força F (N)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 100]}
                    />
                    <YAxis 
                      label={{ value: 'Torque τ (N·m)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'N·m']}
                      labelFormatter={(label: number) => `F: ${label}N`}
                    />
                    <ReferenceLine x={forca} stroke="#3b82f6" strokeDasharray="3 3" label="Atual" />
                    <Line 
                      type="monotone" 
                      dataKey="t" 
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
