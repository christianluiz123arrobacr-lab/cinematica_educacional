import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Waves, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function OndulatoriaGraphs() {
  const [amplitude, setAmplitude] = useState(2);
  const [frequencia, setFrequencia] = useState(1);
  const [comprimentoOnda, setComprimentoOnda] = useState(4);
  const [tempo, setTempo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Dados para o gráfico y(x) - Perfil da onda no instante t
  const [dataX, setDataX] = useState<any[]>([]);
  
  // Dados para o gráfico y(t) - Oscilação de um ponto x=0 ao longo do tempo
  const [dataT, setDataT] = useState<any[]>([]);

  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      if (isPlaying) {
        setTempo(t => t + 0.02);
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  useEffect(() => {
    // Gerar dados para y(x) fixando t
    const newDataX = [];
    const k = (2 * Math.PI) / comprimentoOnda;
    const omega = 2 * Math.PI * frequencia;
    
    for (let x = 0; x <= 10; x += 0.1) {
      newDataX.push({
        x: x,
        y: amplitude * Math.sin(k * x - omega * tempo)
      });
    }
    setDataX(newDataX);

    // Gerar dados para y(t) fixando x=0
    const newDataT = [];
    // Mostra 2 períodos completos
    const periodo = 1 / frequencia;
    const totalTime = 2 * periodo;
    
    for (let t = 0; t <= totalTime; t += totalTime/50) {
      newDataT.push({
        t: t,
        y: amplitude * Math.sin(k * 0 - omega * t) // x=0
      });
    }
    setDataT(newDataT);

  }, [amplitude, frequencia, comprimentoOnda, tempo]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/ondulatoria">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Ondas</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Controles */}
          <Card className="p-6 space-y-6 h-fit">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Parâmetros</h3>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <span className="font-bold">||</span> : <span className="font-bold">▶</span>}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Amplitude (A)</label>
                  <span className="text-sm font-bold text-cyan-600">{amplitude} m</span>
                </div>
                <Slider
                  value={[amplitude]}
                  onValueChange={(v) => setAmplitude(v[0])}
                  min={0.5}
                  max={5}
                  step={0.1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Frequência (f)</label>
                  <span className="text-sm font-bold text-purple-600">{frequencia} Hz</span>
                </div>
                <Slider
                  value={[frequencia]}
                  onValueChange={(v) => setFrequencia(v[0])}
                  min={0.1}
                  max={2}
                  step={0.1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Comp. de Onda (λ)</label>
                  <span className="text-sm font-bold text-green-600">{comprimentoOnda} m</span>
                </div>
                <Slider
                  value={[comprimentoOnda]}
                  onValueChange={(v) => setComprimentoOnda(v[0])}
                  min={1}
                  max={10}
                  step={0.5}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Equação da Onda:</p>
              <MathFormula formula={String.raw`$$ y(x,t) = A \cdot \sin(kx - \omega t) $$`} />
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>• $k = 2\pi/\lambda = {formatNumber(2*Math.PI/comprimentoOnda, 2)}$ rad/m</p>
                <p>• $\omega = 2\pi f = {formatNumber(2*Math.PI*frequencia, 2)}$ rad/s</p>
                <p>• $v = \lambda f = {formatNumber(comprimentoOnda*frequencia, 2)}$ m/s</p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico y(x) */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Waves className="w-5 h-5 text-cyan-600" />
                  Perfil da Onda (Foto no instante t)
                </h3>
                <p className="text-sm text-slate-500">Variação da posição y em função da distância x.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataX}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="x" 
                      label={{ value: 'Posição x (m)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 10]}
                    />
                    <YAxis 
                      domain={[-5, 5]} 
                      label={{ value: 'y (m)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'y']}
                      labelFormatter={(label: number) => `x: ${label.toFixed(2)}m`}
                    />
                    <ReferenceLine y={0} stroke="#94a3b8" />
                    <Line 
                      type="monotone" 
                      dataKey="y" 
                      stroke="#0891b2" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico y(t) */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-purple-600" />
                  Oscilação Temporal (Ponto x=0)
                </h3>
                <p className="text-sm text-slate-500">Variação da posição y em função do tempo t.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataT}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="t" 
                      label={{ value: 'Tempo t (s)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={[0, 'auto']}
                    />
                    <YAxis 
                      domain={[-5, 5]} 
                      label={{ value: 'y (m)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'y']}
                      labelFormatter={(label: number) => `t: ${label.toFixed(2)}s`}
                    />
                    <ReferenceLine y={0} stroke="#94a3b8" />
                    <Line 
                      type="monotone" 
                      dataKey="y" 
                      stroke="#9333ea" 
                      strokeWidth={3} 
                      dot={false} 
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
