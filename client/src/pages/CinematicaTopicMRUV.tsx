import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
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
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Movimento Mais Realista</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Na vida real, quase nada se move com velocidade constante. Quando você sai de casa, o carro acelera. Quando chega perto de um sinal, freia. Isso é MRUV!</p>
            <p>MRUV é o movimento onde a velocidade muda de forma <strong>uniforme</strong> (sempre da mesma forma). Se você acelera a 2 m/s a cada segundo, isso continua acontecendo o tempo todo.</p>
          </div>
        </Card>

        {/* O Que é MRUV */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que Significa MRUV?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>M</strong> = Movimento (está se movendo)</p>
              <p><strong>R</strong> = Retilíneo (em linha reta)</p>
              <p><strong>U</strong> = Uniformemente (sempre da mesma forma)</p>
              <p><strong>V</strong> = Variado (velocidade muda)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">As Características Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Aceleração Constante:</strong> A velocidade muda sempre da mesma forma.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Velocidade Variável:</strong> Aumenta ou diminui, mas de forma previsível.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Linha Reta:</strong> Sem curvas, sem mudança de direção.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Deslocamentos Diferentes em Tempos Iguais:</strong> Cada segundo você percorre uma distância diferente.</span>
              </li>
            </ul>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="mb-2"><strong>Exemplo prático:</strong></p>
              <p>Um carro que sai do repouso e acelera a 5 m/s a cada segundo. No 1º segundo, vai de 0 a 5 m/s. No 2º segundo, vai de 5 a 10 m/s. No 3º segundo, vai de 10 a 15 m/s. A aceleração é sempre a mesma (5 m/s por segundo), mas a velocidade muda.</p>
            </div>
          </div>
        </Card>

        {/* As Fórmulas do MRUV */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">As Fórmulas do MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>No MRUV, temos <strong>3 fórmulas principais</strong>. Cada uma é útil para situações diferentes.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 1: Velocidade Final</h3>
            <p>Quando você quer saber qual será a velocidade após um certo tempo.</p>
            
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$v = v_0 + a \\cdot t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Lê-se:</strong> "Velocidade final = Velocidade inicial + Aceleração × Tempo"</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 2: Posição Final</h3>
            <p>Quando você quer saber onde o objeto estará após um certo tempo.</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Lê-se:</strong> "Posição = Posição inicial + Velocidade inicial × Tempo + (Aceleração × Tempo²) / 2"</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 3: Equação de Torricelli (A Mais Útil!)</h3>
            <p>Quando você não sabe o tempo, mas sabe a distância percorrida.</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Lê-se:</strong> "Velocidade final² = Velocidade inicial² + 2 × Aceleração × Deslocamento"</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="mb-2"><strong>Por que é útil?</strong> Porque às vezes você sabe quanto o objeto se moveu, mas não sabe quanto tempo levou. Essa fórmula resolve isso!</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos do Mundo Real</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">1.</span>
                <div>
                  <strong>Carro acelerando:</strong> Sai do repouso e acelera a 3 m/s². Após 10 segundos, qual é sua velocidade?<br/>
                  <span className="text-sm text-slate-600">Resposta: v = 0 + 3 × 10 = 30 m/s</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">2.</span>
                <div>
                  <strong>Carro freando:</strong> Viaja a 30 m/s e freia com aceleração de -5 m/s². Quanto tempo leva para parar?<br/>
                  <span className="text-sm text-slate-600">Resposta: 0 = 30 - 5 × t → t = 6 segundos</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">3.</span>
                <div>
                  <strong>Queda de um objeto:</strong> Um objeto cai com aceleração de 10 m/s². Qual é sua velocidade após cair 20 metros?<br/>
                  <span className="text-sm text-slate-600">Resposta: v² = 0 + 2 × 10 × 20 = 400 → v = 20 m/s</span>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Gráficos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Os Gráficos do MRUV</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Gráfico 1: Posição vs. Tempo</h3>
            <p>Uma <strong>parábola</strong> (curva). Não é uma reta como no MRU, porque a velocidade está mudando.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráfico 2: Velocidade vs. Tempo</h3>
            <p>Uma <strong>reta inclinada</strong>. Porque a velocidade muda linearmente com o tempo.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráfico 3: Aceleração vs. Tempo</h3>
            <p>Uma <strong>reta horizontal</strong> (no valor da aceleração). Porque a aceleração é constante.</p>
          </div>
        </Card>

        {/* Erros Comuns */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-red-50">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Erros Comuns</h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Usar a fórmula do MRU quando há aceleração"<br/><strong>Verdade:</strong> Se há aceleração, use MRUV! A fórmula do MRU só funciona quando a velocidade é constante.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer de elevar o tempo ao quadrado na fórmula"<br/><strong>Verdade:</strong> A fórmula é s = s₀ + v₀·t + (a·t²)/2. O t está ao quadrado!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Confundir velocidade final com velocidade média"<br/><strong>Verdade:</strong> São coisas diferentes! A velocidade média é (v₀ + v)/2</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Dicas Práticas */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-yellow-50">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-4">💡 Dicas para Resolver Problemas</h3>
              <ul className="space-y-3 text-yellow-900">
                <li><strong>Passo 1:</strong> Organize os dados: v₀, v, a, t, s</li>
                <li><strong>Passo 2:</strong> Veja qual informação falta</li>
                <li><strong>Passo 3:</strong> Escolha a fórmula que tem as informações que você tem e a que você quer</li>
                <li><strong>Passo 4:</strong> Cuidado com as unidades! Tudo deve estar no mesmo sistema.</li>
                <li><strong>Dica:</strong> A Equação de Torricelli é a mais versátil quando você não tem tempo!</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-orange-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>MRUV:</strong> Movimento em linha reta com aceleração constante</p>
            <p><strong>Fórmulas:</strong> v = v₀ + at | s = s₀ + v₀t + at²/2 | v² = v₀² + 2aΔs</p>
            <p><strong>Gráficos:</strong> Posição é parábola, velocidade é reta inclinada, aceleração é reta horizontal</p>
            <p><strong>Quando usar:</strong> Quando há aceleração constante (carro acelerando, queda livre, etc.)</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
