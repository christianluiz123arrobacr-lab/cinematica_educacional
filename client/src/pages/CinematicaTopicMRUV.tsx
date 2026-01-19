import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicMRUV() {
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
          <h1 className="text-2xl font-bold text-slate-900">Movimento Uniformemente Variado (MRUV)</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-orange-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento com Aceleração Constante</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O Movimento Uniformemente Variado (MRUV) é um tipo de movimento onde a aceleração é constante. Isso significa que a velocidade muda de forma linear com o tempo. O MRUV é muito mais comum na natureza do que o MRU, pois sempre há alguma força atuando sobre os objetos.</p>
            <p>Exemplos de MRUV incluem um carro acelerando uniformemente, um objeto em queda livre, e um projétil sob a influência da gravidade. O MRUV é fundamental para entender a dinâmica e as aplicações práticas da física.</p>
          </div>
        </Card>

        {/* Definição */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Características do MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Um objeto em Movimento Uniformemente Variado tem aceleração constante, o que significa que sua velocidade muda de forma linear com o tempo."
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mt-6">Propriedades Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Aceleração Constante:</strong> a = constante (diferente de zero)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Velocidade Variável:</strong> v muda linearmente com o tempo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Trajetória Retilínea:</strong> Movimento em linha reta</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Deslocamentos Diferentes em Tempos Iguais:</strong> Δs aumenta ou diminui uniformemente</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Equações do MRUV */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Equações Fundamentais do MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 mt-6">1. Equação da Velocidade</h3>
            <p>A velocidade em qualquer instante é a velocidade inicial mais a aceleração multiplicada pelo tempo.</p>
            
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <MathFormula formula="v = v_0 + a \\cdot t" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final (m/s), v₀ = velocidade inicial (m/s), a = aceleração (m/s²), t = tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. Equação Horária da Posição</h3>
            <p>A posição em qualquer instante é determinada pela posição inicial, velocidade inicial e aceleração.</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <MathFormula formula="s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: s = posição final (m), s₀ = posição inicial (m), v₀ = velocidade inicial (m/s), a = aceleração (m/s²), t = tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Equação de Torricelli</h3>
            <p>Esta equação relaciona velocidade, aceleração e deslocamento, sem envolver o tempo explicitamente.</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <MathFormula formula="v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final (m/s), v₀ = velocidade inicial (m/s), a = aceleração (m/s²), Δs = deslocamento (m)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Velocidade Média</h3>
            <p>No MRUV, a velocidade média é a média aritmética entre a velocidade inicial e final.</p>
            
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <MathFormula formula="v_m = \\frac{v_0 + v}{2}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v_m = velocidade média (m/s), v₀ = velocidade inicial (m/s), v = velocidade final (m/s)</p>
            </div>
          </div>
        </Card>

        {/* Gráficos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Gráficos do MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Gráfico Posição vs. Tempo (s × t)</h3>
            <p>Uma parábola (função quadrática). A concavidade depende do sinal da aceleração: para cima se a &gt; 0, para baixo se a &lt; 0.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-4">Gráfico Velocidade vs. Tempo (v × t)</h3>
            <p>Uma reta com inclinação igual à aceleração. A inclinação é positiva se a &gt; 0, negativa se a &lt; 0, e zero se a = 0 (MRU).</p>

            <h3 className="text-lg font-bold text-slate-900 mt-4">Gráfico Aceleração vs. Tempo (a × t)</h3>
            <p>Uma reta horizontal no valor da aceleração constante.</p>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos de MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">1.</span>
                <div>
                  <strong>Carro acelerando:</strong> Um carro que sai do repouso e acelera uniformemente a 2 m/s² está em MRUV.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">2.</span>
                <div>
                  <strong>Queda livre:</strong> Um objeto caindo sob a influência da gravidade (sem resistência do ar) tem aceleração constante de 9,8 m/s².
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">3.</span>
                <div>
                  <strong>Carro freando:</strong> Um carro que reduz sua velocidade uniformemente está em MRUV com aceleração negativa (desaceleração).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">4.</span>
                <div>
                  <strong>Lançamento vertical:</strong> Um objeto lançado verticalmente para cima tem aceleração constante (negativa) devido à gravidade.
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Problema Resolvido</h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold mb-3">Um carro parte do repouso e acelera uniformemente a 3 m/s². Qual é sua velocidade após 5 segundos?</p>
              <p className="mb-2"><strong>Dados:</strong> v₀ = 0 m/s, a = 3 m/s², t = 5 s</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <MathFormula formula="v = v_0 + a \\cdot t = 0 + 3 \\times 5 = 15 \\text{ m/s}" className="text-center text-lg" />
              </div>
              <p><strong>Resposta:</strong> A velocidade do carro após 5 segundos é 15 m/s.</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
