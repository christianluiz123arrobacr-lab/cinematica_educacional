import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Activity, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function CinematicaGraphs() {
  const [velocidadeInicial, setVelocidadeInicial] = useState(0);
  const [aceleracao, setAceleracao] = useState(2);
  
  // Dados para o gráfico de Posição x Tempo (MRUV)
  const [dataPosicao, setDataPosicao] = useState<any[]>([]);
  
  // Dados para o gráfico de Velocidade x Tempo (MRUV)
  const [dataVelocidade, setDataVelocidade] = useState<any[]>([]);

  useEffect(() => {
    // Gerar curvas para t = 0 a 10s
    const newDataPosicao = [];
    const newDataVelocidade = [];
    
    for (let t = 0; t <= 10; t += 0.5) {
      // S = S0 + v0t + 1/2at^2 (S0 = 0)
      const posicao = velocidadeInicial * t + 0.5 * aceleracao * t * t;
      // v = v0 + at
      const velocidade = velocidadeInicial + aceleracao * t;

      newDataPosicao.push({
        t: t,
        S: posicao
      });

      newDataVelocidade.push({
        t: t,
        v: velocidade
      });
    }
    setDataPosicao(newDataPosicao);
    setDataVelocidade(newDataVelocidade);

  }, [velocidadeInicial, aceleracao]);

  // Valores finais para t=10s
  const tFinal = 10;
  const sFinal = velocidadeInicial * tFinal + 0.5 * aceleracao * tFinal * tFinal;
  const vFinal = velocidadeInicial + aceleracao * tFinal;

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
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Cinemática</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Controles */}
          <Card className="p-6 space-y-6 h-fit">
            <h3 className="font-bold text-slate-900">Parâmetros do Movimento (MRUV)</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Velocidade Inicial (v₀)</label>
                  <span className="text-sm font-bold text-blue-600">{velocidadeInicial} m/s</span>
                </div>
                <Slider
                  value={[velocidadeInicial]}
                  onValueChange={(v) => setVelocidadeInicial(v[0])}
                  min={-20}
                  max={20}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Aceleração (a)</label>
                  <span className="text-sm font-bold text-orange-600">{aceleracao} m/s²</span>
                </div>
                <Slider
                  value={[aceleracao]}
                  onValueChange={(v) => setAceleracao(v[0])}
                  min={-10}
                  max={10}
                  step={0.5}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Equações Horárias:</p>
              <MathFormula formula={String.raw`$$ S(t) = S_0 + v_0t + \frac{1}{2}at^2 $$`} />
              <MathFormula formula={String.raw`$$ v(t) = v_0 + at $$`} />
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>Para t = 10s:</p>
                <p>• Posição Final (S): <span className="font-bold text-slate-900">{formatNumber(sFinal, 2)} m</span></p>
                <p>• Velocidade Final (v): <span className="font-bold text-slate-900">{formatNumber(vFinal, 2)} m/s</span></p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico de Posição */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Move className="w-5 h-5 text-blue-600" />
                  Posição x Tempo (Parábola)
                </h3>
                <p className="text-sm text-slate-500">A posição varia quadraticamente com o tempo no MRUV.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataPosicao}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="t" 
                      label={{ value: 'Tempo t (s)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 10]}
                    />
                    <YAxis 
                      label={{ value: "Posição S (m)", angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), "m"]}
                      labelFormatter={(label: number) => `t: ${label.toFixed(1)}s`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="S" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico de Velocidade */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-600" />
                  Velocidade x Tempo (Reta)
                </h3>
                <p className="text-sm text-slate-500">A velocidade varia linearmente com o tempo. A inclinação é a aceleração.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataVelocidade}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="t" 
                      label={{ value: 'Tempo t (s)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 10]}
                    />
                    <YAxis 
                      label={{ value: 'Velocidade v (m/s)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'm/s']}
                      labelFormatter={(label: number) => `t: ${label.toFixed(1)}s`}
                    />
                    <ReferenceLine y={0} stroke="#94a3b8" />
                    <Line 
                      type="monotone" 
                      dataKey="v" 
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
