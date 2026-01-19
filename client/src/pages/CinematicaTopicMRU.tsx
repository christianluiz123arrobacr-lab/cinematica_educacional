import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicMRU() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Movimento Retilíneo Uniforme (MRU)</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Movimento Mais Simples</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O Movimento Retilíneo Uniforme (MRU) é o tipo de movimento mais simples e fundamental na cinemática. Nele, um objeto se move em linha reta com velocidade constante. Apesar de sua simplicidade, o MRU é extremamente importante porque serve como base para entender movimentos mais complexos.</p>
            <p>No MRU, a velocidade não muda nem em magnitude nem em direção. Isso significa que a aceleração é zero. Embora pareça um movimento raro na natureza (onde sempre há alguma força atuando), o MRU é uma excelente aproximação para muitas situações práticas.</p>
          </div>
        </Card>

        {/* Definição */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Características do MRU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Um objeto em Movimento Retilíneo Uniforme percorre distâncias iguais em tempos iguais, mantendo velocidade constante."
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mt-6">Propriedades Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Velocidade Constante:</strong> v = constante</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Aceleração Nula:</strong> a = 0</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Trajetória Retilínea:</strong> Movimento em linha reta</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Distâncias Iguais em Tempos Iguais:</strong> Δs₁ = Δs₂ = Δs₃ = ... para Δt₁ = Δt₂ = Δt₃ = ...</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Equações do MRU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Equações do MRU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 mt-6">Equação Horária da Posição</h3>
            <p>A equação horária descreve como a posição varia com o tempo no MRU. É a equação mais importante para resolver problemas de MRU.</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <MathFormula formula="s = s_0 + v \\cdot t" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: s = posição final (m), s₀ = posição inicial (m), v = velocidade (m/s), t = tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Velocidade no MRU</h3>
            <p>Como a velocidade é constante, a velocidade média é igual à velocidade instantânea em qualquer momento.</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <MathFormula formula="v = \\frac{\\Delta s}{\\Delta t} = \\frac{s - s_0}{t - t_0}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: Δs = deslocamento (m), Δt = intervalo de tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráficos do MRU</h3>
            <p><strong>Gráfico Posição vs. Tempo (s × t):</strong> Uma reta com inclinação igual à velocidade. Se v &gt; 0, a reta é crescente; se v &lt; 0, a reta é decrescente.</p>
            <p><strong>Gráfico Velocidade vs. Tempo (v × t):</strong> Uma reta horizontal, pois a velocidade é constante.</p>
            <p><strong>Gráfico Aceleração vs. Tempo (a × t):</strong> Uma reta no eixo das abscissas (a = 0).</p>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos de MRU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <div>
                  <strong>Carro em rodovia:</strong> Um carro viajando a 100 km/h em uma rodovia reta e plana (sem acelerar ou frear) está em MRU. A cada hora, percorre 100 km.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <div>
                  <strong>Trem de alta velocidade:</strong> Um trem viajando a velocidade constante entre duas cidades está em MRU durante esse trajeto.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <div>
                  <strong>Corredor em pista:</strong> Um corredor mantendo velocidade constante de 5 m/s durante uma volta na pista está em MRU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <div>
                  <strong>Satélite em órbita:</strong> Um satélite orbitando a Terra a velocidade constante está em MRU (embora com aceleração centrípeta, o módulo da velocidade é constante).
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Problema Resolvido</h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold mb-3">Um carro viaja a 80 km/h. Qual é a distância percorrida em 2,5 horas?</p>
              <p className="mb-2"><strong>Dados:</strong> v = 80 km/h, t = 2,5 h</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <MathFormula formula="s = v \\cdot t = 80 \\text{ km/h} \\times 2.5 \\text{ h} = 200 \\text{ km}" className="text-center text-lg" />
              </div>
              <p><strong>Resposta:</strong> O carro percorre 200 km em 2,5 horas.</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
