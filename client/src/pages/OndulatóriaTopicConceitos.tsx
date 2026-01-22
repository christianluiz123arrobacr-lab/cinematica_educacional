import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicConceitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/fisica-ii">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondulatória - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Conceitos Fundamentais de Ondas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 O que é uma Onda?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Rigorosa</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Onda é uma perturbação que se propaga através de um meio ou do vácuo, transportando energia sem transportar matéria.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Diferentemente de uma partícula que se move de um ponto a outro, uma onda é uma oscilação coletiva que se propaga no espaço. Matematicamente, uma onda pode ser descrita como:
              </p>
              <div className="bg-white border border-blue-300 rounded p-4 mt-3">
                <MathFormula formula={String.raw`$$y(x,t) = A \sin(kx - \omega t + \phi)$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                Onde: $y$ = deslocamento, $A$ = amplitude, $k$ = número de onda, $\omega$ = frequência angular, $\phi$ = fase inicial.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo: Ondas na Água</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold text-blue-900">🌊 Quando você joga uma pedra na água:</p>
                  <p>A pedra cai e faz a água oscilar. Essa oscilação se propaga em círculos concêntricos. A água não se move para frente - ela apenas sobe e desce! A ONDA é que se propaga.</p>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  Essa é a diferença fundamental: a onda transporta ENERGIA, não MATÉRIA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 1: CLASSIFICAÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1️⃣ Classificação de Ondas</h2>
          
          <div className="space-y-8">
            {/* Por Natureza */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Por Natureza (Necessidade de Meio)</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Mecânicas</p>
                  <p className="text-slate-700 mb-2">Necessitam de um meio material para se propagar. Exemplos: som, ondas em corda, ondas em água.</p>
                  <p className="text-slate-600 text-sm">
                    <strong>Propriedade:</strong> A velocidade depende das propriedades do meio (densidade, elasticidade).
                  </p>
                </div>

                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Eletromagnéticas</p>
                  <p className="text-slate-700 mb-2">Não necessitam de meio material. Propagam-se no vácuo. Exemplos: luz, ondas de rádio, raios X.</p>
                  <p className="text-slate-600 text-sm">
                    <strong>Propriedade:</strong> A velocidade no vácio é sempre $c = 3 \times 10^8$ m/s.
                  </p>
                </div>
              </div>
            </div>

            {/* Por Direção de Oscilação */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Por Direção de Oscilação</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Transversais</p>
                  <p className="text-slate-700 mb-2">A oscilação é perpendicular à direção de propagação.</p>
                  <p className="text-slate-600 text-sm">Exemplos: luz, ondas em corda. Visualize: ↑ Oscilação | → Propagação (perpendiculares)</p>
                </div>

                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Longitudinais</p>
                  <p className="text-slate-700 mb-2">A oscilação é paralela à direção de propagação.</p>
                  <p className="text-slate-600 text-sm">Exemplos: som, ondas sísmicas P. Visualize: → Oscilação | → Propagação (paralelas)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: GRANDEZAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">2️⃣ Grandezas Características de uma Onda</h2>
          
          <div className="space-y-8">
            {/* Amplitude */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Amplitude (A)</h3>
              <p className="text-slate-700 mb-4">
                É o deslocamento máximo da partícula em relação à posição de equilíbrio. Mede a intensidade da onda.
              </p>
              <div className="bg-white border border-green-300 rounded p-4">
                <MathFormula formula={String.raw`$$A = \text{deslocamento máximo}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-3">
                <strong>Unidade:</strong> metros (m) | <strong>Símbolo:</strong> $A$
              </p>
            </div>

            {/* Período e Frequência */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Período (T) e Frequência (f)</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Período (T)</p>
                  <p className="text-slate-700 mb-2">Tempo necessário para a onda completar uma oscilação completa.</p>
                  <MathFormula formula={String.raw`$$T = \frac{1}{f}$$`} display={false} />
                  <p className="text-slate-600 text-sm mt-2"><strong>Unidade:</strong> segundos (s)</p>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Frequência (f)</p>
                  <p className="text-slate-700 mb-2">Número de oscilações completas por unidade de tempo.</p>
                  <MathFormula formula={String.raw`$$f = \frac{1}{T}$$`} display={false} />
                  <p className="text-slate-600 text-sm mt-2"><strong>Unidade:</strong> Hertz (Hz) ou s⁻¹</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded p-4 mt-4">
                <p className="font-bold text-slate-900 mb-2">Frequência Angular (ω)</p>
                <MathFormula formula={String.raw`$$\omega = 2\pi f = \frac{2\pi}{T}$$`} display={false} />
                <p className="text-slate-600 text-sm mt-2"><strong>Unidade:</strong> rad/s</p>
              </div>
            </div>

            {/* Comprimento de Onda */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprimento de Onda (λ)</h3>
              <p className="text-slate-700 mb-4">
                É a distância entre dois pontos consecutivos que estão em fase (mesma oscilação). Também é a distância que a onda percorre em um período.
              </p>
              <div className="bg-white border border-red-300 rounded p-4">
                <MathFormula formula={String.raw`$$\lambda = v \cdot T = \frac{v}{f}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-3">
                Onde: $v$ = velocidade de propagação, $T$ = período, $f$ = frequência
              </p>
            </div>

            {/* Velocidade */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Velocidade de Propagação (v)</h3>
              <p className="text-slate-700 mb-4">
                É a velocidade com que a perturbação se propaga no meio. <strong>Depende apenas do meio, não da frequência ou amplitude.</strong>
              </p>
              <div className="bg-white border border-indigo-300 rounded p-4">
                <MathFormula formula={String.raw`$$v = f \cdot \lambda = \frac{\lambda}{T}$$`} display={true} />
              </div>
              <div className="bg-red-100 border border-red-300 rounded p-4 mt-4">
                <p className="font-bold text-red-900 mb-2">⚠️ IMPORTANTE</p>
                <p className="text-red-800 text-sm">
                  A velocidade é uma propriedade do meio. Quando uma onda muda de meio, sua velocidade muda, mas sua frequência permanece constante!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EXEMPLO PRÁTICO ===== */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Exemplo Prático: Onda em Corda</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700 font-semibold">
              Uma corda vibra com frequência de 10 Hz. A distância entre duas cristas consecutivas é 0,5 m. Qual é a velocidade de propagação da onda?
            </p>

            <div className="bg-white border border-yellow-300 rounded p-6 space-y-4">
              <div>
                <p className="font-bold text-slate-900 mb-2">Dados:</p>
                <div className="space-y-2 text-slate-700">
                  <p>• Frequência: $f = 10$ Hz</p>
                  <p>• Comprimento de onda: $\lambda = 0,5$ m (distância entre cristas)</p>
                </div>
              </div>

              <div className="border-t border-yellow-300 pt-4">
                <p className="font-bold text-slate-900 mb-3">Solução:</p>
                <MathFormula formula={String.raw`$$v = f \cdot \lambda = 10 \times 0,5 = 5 \text{ m/s}$$`} display={true} />
              </div>

              <div className="bg-green-100 border border-green-300 rounded p-3">
                <p className="text-green-900 font-bold">✓ Resposta:</p>
                <p className="text-green-800">A velocidade de propagação é 5 m/s.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== QUESTÃO MILITAR ===== */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎖️ Questão ESPCEX - Conceitos Fundamentais</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700 font-semibold">
              (ESPCEX) Uma onda harmônica se propaga em uma corda com velocidade de 20 m/s. Sabendo que o comprimento de onda é 0,4 m, determine:
            </p>
            <p className="text-slate-700">a) A frequência da onda</p>
            <p className="text-slate-700">b) O período da onda</p>
            <p className="text-slate-700">c) A frequência angular</p>

            <div className="bg-white border border-red-300 rounded p-6 space-y-6 mt-6">
              <div className="border-b border-red-300 pb-4">
                <p className="font-bold text-slate-900 mb-3">a) Frequência da onda</p>
                <p className="text-slate-700 mb-2">Usando a relação fundamental: $v = f \cdot \lambda$</p>
                <MathFormula formula={String.raw`$$f = \frac{v}{\lambda} = \frac{20}{0,4} = 50 \text{ Hz}$$`} display={true} />
              </div>

              <div className="border-b border-red-300 pb-4">
                <p className="font-bold text-slate-900 mb-3">b) Período da onda</p>
                <p className="text-slate-700 mb-2">O período é o inverso da frequência:</p>
                <MathFormula formula={String.raw`$$T = \frac{1}{f} = \frac{1}{50} = 0,02 \text{ s} = 20 \text{ ms}$$`} display={true} />
              </div>

              <div>
                <p className="font-bold text-slate-900 mb-3">c) Frequência angular</p>
                <p className="text-slate-700 mb-2">A frequência angular é relacionada à frequência por:</p>
                <MathFormula formula={String.raw`$$\omega = 2\pi f = 2\pi \times 50 = 100\pi \text{ rad/s} \approx 314,16 \text{ rad/s}$$`} display={true} />
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <p className="text-blue-900 font-bold mb-2">📌 Análise Crítica:</p>
                <p className="text-blue-800 text-sm">
                  Note que a velocidade é uma propriedade do meio (corda). Se a frequência aumentasse, o comprimento de onda diminuiria proporcionalmente, mantendo a velocidade constante. Isso é fundamental para entender refração de ondas!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RESUMO ===== */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📋 Resumo de Fórmulas</h2>
          
          <div className="space-y-3">
            <div className="bg-white rounded p-4 border border-blue-300">
              <p className="font-bold text-slate-900 mb-2">Relação fundamental:</p>
              <MathFormula formula={String.raw`$$v = f \cdot \lambda$$`} display={false} />
            </div>

            <div className="bg-white rounded p-4 border border-blue-300">
              <p className="font-bold text-slate-900 mb-2">Período e frequência:</p>
              <MathFormula formula={String.raw`$$T = \frac{1}{f}$$`} display={false} />
            </div>

            <div className="bg-white rounded p-4 border border-blue-300">
              <p className="font-bold text-slate-900 mb-2">Frequência angular:</p>
              <MathFormula formula={String.raw`$$\omega = 2\pi f = \frac{2\pi}{T}$$`} display={false} />
            </div>

            <div className="bg-white rounded p-4 border border-blue-300">
              <p className="font-bold text-slate-900 mb-2">Número de onda:</p>
              <MathFormula formula={String.raw`$$k = \frac{2\pi}{\lambda}$$`} display={false} />
            </div>
          </div>
        </div>

        {/* ===== DICAS ===== */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Dicas para Provas ITA/IME</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência é invariante:</strong> Quando uma onda muda de meio, sua frequência permanece constante, mas velocidade e comprimento de onda mudam.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade depende do meio:</strong> A velocidade de uma onda depende apenas das propriedades do meio (densidade, elasticidade), não da frequência ou amplitude.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Amplitude não afeta velocidade:</strong> Uma onda mais intensa (maior amplitude) viaja com a mesma velocidade que uma onda fraca no mesmo meio.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Relação fundamental:</strong> Sempre que tiver velocidade, frequência e comprimento de onda, use $v = f \cdot \lambda$.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
