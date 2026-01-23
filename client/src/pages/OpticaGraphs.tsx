import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Eye, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatNumber } from "@/lib/utils";

export default function OpticaGraphs() {
  const [foco, setFoco] = useState(10);
  const [posicaoObjeto, setPosicaoObjeto] = useState(20);
  
  // Dados para o gráfico 1/p + 1/p' = 1/f
  const [dataGauss, setDataGauss] = useState<any[]>([]);
  
  // Dados para o gráfico de Aumento Linear A = -p'/p
  const [dataAumento, setDataAumento] = useState<any[]>([]);

  useEffect(() => {
    // Gerar curva de Gauss: p' em função de p para um f fixo
    const newDataGauss = [];
    
    // Evitar p = f (assíntota)
    for (let p = foco + 0.5; p <= foco * 5; p += 0.5) {
      const pLinha = (foco * p) / (p - foco);
      newDataGauss.push({
        p: p,
        pLinha: pLinha
      });
    }
    setDataGauss(newDataGauss);

    // Gerar curva de Aumento: A em função de p
    const newDataAumento = [];
    for (let p = foco + 0.5; p <= foco * 5; p += 0.5) {
      const pLinha = (foco * p) / (p - foco);
      const aumento = -pLinha / p;
      newDataAumento.push({
        p: p,
        A: aumento
      });
    }
    setDataAumento(newDataAumento);

  }, [foco]);

  const pLinhaAtual = (foco * posicaoObjeto) / (posicaoObjeto - foco);
  const aumentoAtual = -pLinhaAtual / posicaoObjeto;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/optica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Óptica</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Controles */}
          <Card className="p-6 space-y-6 h-fit">
            <h3 className="font-bold text-slate-900">Parâmetros da Lente/Espelho</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Distância Focal (f)</label>
                  <span className="text-sm font-bold text-orange-600">{foco} cm</span>
                </div>
                <Slider
                  value={[foco]}
                  onValueChange={(v) => setFoco(v[0])}
                  min={5}
                  max={50}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Posição do Objeto (p)</label>
                  <span className="text-sm font-bold text-blue-600">{posicaoObjeto} cm</span>
                </div>
                <Slider
                  value={[posicaoObjeto]}
                  onValueChange={(v) => setPosicaoObjeto(v[0])}
                  min={foco + 1}
                  max={100}
                  step={1}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
              <p className="font-semibold text-slate-900">Resultados:</p>
              <MathFormula formula={String.raw`$$ \frac{1}{f} = \frac{1}{p} + \frac{1}{p'} $$`} />
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p>• Posição da Imagem (p'): <span className="font-bold text-slate-900">{formatNumber(pLinhaAtual, 2)} cm</span></p>
                <p>• Aumento Linear (A): <span className="font-bold text-slate-900">{formatNumber(aumentoAtual, 2)}x</span></p>
                <p>• Tipo: <span className="font-bold text-slate-900">{pLinhaAtual > 0 ? "Real" : "Virtual"}</span> e <span className="font-bold text-slate-900">{aumentoAtual < 0 ? "Invertida" : "Direita"}</span></p>
              </div>
            </div>
          </Card>

          {/* Gráficos */}
          <div className="md:col-span-2 space-y-6">
            {/* Gráfico de Gauss */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-600" />
                  Curva de Gauss (p' vs p)
                </h3>
                <p className="text-sm text-slate-500">Como a posição da imagem varia com a posição do objeto.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataGauss}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="p" 
                      label={{ value: 'Posição Objeto p (cm)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={['auto', 'auto']}
                    />
                    <YAxis 
                      label={{ value: "Posição Imagem p' (cm)", angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), "p'"]}
                      labelFormatter={(label: number) => `p: ${label.toFixed(2)}cm`}
                    />
                    <ReferenceLine x={posicaoObjeto} stroke="#3b82f6" strokeDasharray="3 3" label="Objeto" />
                    <ReferenceLine y={pLinhaAtual} stroke="#f97316" strokeDasharray="3 3" label="Imagem" />
                    <Line 
                      type="monotone" 
                      dataKey="pLinha" 
                      stroke="#f97316" 
                      strokeWidth={3} 
                      dot={false} 
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Gráfico de Aumento */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-blue-600" />
                  Aumento Linear (A vs p)
                </h3>
                <p className="text-sm text-slate-500">Variação do tamanho da imagem em relação ao objeto.</p>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataAumento}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="p" 
                      label={{ value: 'Posição Objeto p (cm)', position: 'bottom', offset: 0 }} 
                      type="number"
                      domain={['auto', 'auto']}
                    />
                    <YAxis 
                      label={{ value: 'Aumento (A)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [value.toFixed(2), 'A']}
                      labelFormatter={(label: number) => `p: ${label.toFixed(2)}cm`}
                    />
                    <ReferenceLine x={posicaoObjeto} stroke="#3b82f6" strokeDasharray="3 3" />
                    <ReferenceLine y={aumentoAtual} stroke="#ef4444" strokeDasharray="3 3" />
                    <Line 
                      type="monotone" 
                      dataKey="A" 
                      stroke="#3b82f6" 
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
