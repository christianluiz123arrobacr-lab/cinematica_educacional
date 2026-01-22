import React from 'react';
import { MathFormula } from '@/components/MathFormula';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BookOpen, Zap } from 'lucide-react';

export default function OndulatóriaTopicConceitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Ondulatória - Nível ITA/IME</h1>
          </div>
          <p className="text-lg text-slate-600">Conceitos Fundamentais de Ondas</p>
        </div>

        {/* Definição Rigorosa */}
        <Card className="mb-6 border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Definição Rigorosa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              <strong>Onda</strong> é uma perturbação que se propaga através de um meio ou do vácuo, transportando energia e quantidade de movimento sem transportar matéria. Diferentemente de uma partícula que se move de um ponto a outro, uma onda é uma oscilação coletiva que se propaga no espaço.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Matematicamente, uma onda pode ser descrita como uma função que depende tanto da posição quanto do tempo: <MathFormula formula={String.raw`$$y(x,t) = A \sin(kx - \omega t + \phi)$$`} display={true} />
            </p>
            <p className="text-slate-600 text-sm">
              Onde: $y$ = deslocamento, $A$ = amplitude, $k$ = número de onda, $\omega$ = frequência angular, $\phi$ = fase inicial.
            </p>
          </CardContent>
        </Card>

        {/* Classificação de Ondas */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Classificação de Ondas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Por Natureza */}
            <div className="border-l-4 border-l-purple-400 pl-4">
              <h3 className="font-bold text-lg mb-3 text-slate-900">1. Por Natureza (Necessidade de Meio)</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Ondas Mecânicas</h4>
                  <p className="text-slate-700 mb-2">
                    Necessitam de um meio material para se propagar. Exemplos: som, ondas em corda, ondas em água.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Propriedade:</strong> A velocidade depende das propriedades do meio (densidade, elasticidade).
                  </p>
                  <MathFormula formula={String.raw`$$v = \sqrt{\frac{\text{propriedade elastica}}{\text{densidade do meio}}}$$`} display={true} />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Ondas Eletromagnéticas</h4>
                  <p className="text-slate-700 mb-2">
                    Não necessitam de meio material. Propagam-se no vácuo. Exemplos: luz, ondas de rádio, raios X.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Propriedade:</strong> A velocidade no vácuo é sempre $c = 3 \times 10^8$ m/s.
                  </p>
                </div>
              </div>
            </div>

            {/* Por Direção de Oscilação */}
            <div className="border-l-4 border-l-green-400 pl-4">
              <h3 className="font-bold text-lg mb-3 text-slate-900">2. Por Direção de Oscilação</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Ondas Transversais</h4>
                  <p className="text-slate-700 mb-2">
                    A oscilação é perpendicular à direção de propagação. Exemplo: luz, ondas em corda.
                  </p>
                  <p className="text-slate-600 text-sm">
                    ↑ Oscilação | → Propagação (perpendiculares)
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Ondas Longitudinais</h4>
                  <p className="text-slate-700 mb-2">
                    A oscilação é paralela à direção de propagação. Exemplo: som, ondas sísmicas P.
                  </p>
                  <p className="text-slate-600 text-sm">
                    → Oscilação | → Propagação (paralelas)
                  </p>
                </div>
              </div>
            </div>

            {/* Por Dimensionalidade */}
            <div className="border-l-4 border-l-red-400 pl-4">
              <h3 className="font-bold text-lg mb-3 text-slate-900">3. Por Dimensionalidade</h3>
              
              <div className="space-y-2 text-slate-700">
                <p><strong>Unidimensionais:</strong> Propagam-se em uma direção (ex: corda)</p>
                <p><strong>Bidimensionais:</strong> Propagam-se em um plano (ex: ondas em água)</p>
                <p><strong>Tridimensionais:</strong> Propagam-se em todas as direções (ex: som no ar)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grandezas Características */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Grandezas Características de uma Onda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Amplitude */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">1. Amplitude (A)</h4>
              <p className="text-slate-700 mb-3">
                É o deslocamento máximo da partícula em relação à posição de equilíbrio. Mede a intensidade da onda.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$A = \text{deslocamento máximo}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Unidade:</strong> metros (m) ou qualquer unidade de comprimento
              </p>
            </div>

            {/* Período e Frequência */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">2. Período (T) e Frequência (f)</h4>
              <p className="text-slate-700 mb-3">
                <strong>Período:</strong> Tempo necessário para a onda completar uma oscilação completa.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$T = \frac{1}{f}$$`} display={true} />
              </div>
              <p className="text-slate-700 mb-3">
                <strong>Frequência:</strong> Número de oscilações completas por unidade de tempo.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$f = \frac{1}{T} \quad \text{(em Hz ou s}^{-1}\text{)}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Relação com frequência angular:</strong> Omega = 2π f = (2π)/T
              </p>
            </div>

            {/* Comprimento de Onda */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">3. Comprimento de Onda (λ)</h4>
              <p className="text-slate-700 mb-3">
                É a distância entre dois pontos consecutivos que estão em fase (mesma oscilação). Também é a distância que a onda percorre em um período.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$\lambda = v \cdot T = \frac{v}{f}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Onde: $v$ = velocidade de propagação, $T$ = período, $f$ = frequência
              </p>
            </div>

            {/* Velocidade de Propagação */}
            <div>
              <h4 className="font-bold text-slate-900 mb-2">4. Velocidade de Propagação (v)</h4>
              <p className="text-slate-700 mb-3">
                É a velocidade com que a perturbação se propaga no meio. <strong>Depende apenas do meio, não da frequência ou amplitude.</strong>
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$v = f \cdot \lambda = \frac{\lambda}{T}$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                <strong>Importante:</strong> A velocidade é uma propriedade do meio. Quando uma onda muda de meio, sua velocidade muda, mas sua frequência permanece constante!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Exemplo Prático */}
        <Card className="mb-6 bg-yellow-50 border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Exemplo Prático: Onda em Corda
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              Uma corda vibra com frequência de 10 Hz. A distância entre duas cristas consecutivas é 0,5 m. Qual é a velocidade de propagação da onda?
            </p>
            
            <div className="bg-white p-4 rounded-lg space-y-3">
              <p><strong>Dados:</strong></p>
              <p className="text-slate-700">• Frequência: $f = 10$ Hz</p>
              <p className="text-slate-700">• Comprimento de onda: $\lambda = 0,5$ m (distância entre cristas)</p>
              
              <p className="mt-4"><strong>Solução:</strong></p>
              <MathFormula formula={String.raw`$$v = f \cdot \lambda = 10 \times 0,5 = 5 \text{ m/s}$$`} display={true} />
              
              <p className="text-slate-700"><strong>Resposta:</strong> A velocidade de propagação é 5 m/s.</p>
            </div>
          </CardContent>
        </Card>

        {/* Questão Militar ESPCEX */}
        <Card className="mb-6 bg-red-50 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-600" />
              Questão ESPCEX - Conceitos Fundamentais
            </CardTitle>
            <CardDescription>Escola Preparatória de Cadetes do Exército</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 font-semibold">
              (ESPCEX) Uma onda harmônica se propaga em uma corda com velocidade de 20 m/s. Sabendo que o comprimento de onda é 0,4 m, determine:
            </p>
            <p className="text-slate-700">a) A frequência da onda</p>
            <p className="text-slate-700">b) O período da onda</p>
            <p className="text-slate-700">c) A frequência angular</p>
            
            <div className="bg-white p-4 rounded-lg space-y-4 mt-4">
              <p><strong>Solução Completa:</strong></p>
              
              <div className="border-l-4 border-l-blue-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">a) Frequência da onda</p>
                <p className="text-slate-700 mb-2">
                  Usando a relação fundamental: $v = f \cdot \lambda$
                </p>
                <MathFormula formula={String.raw`$$f = \frac{v}{\lambda} = \frac{20}{0,4} = 50 \text{ Hz}$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-green-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">b) Período da onda</p>
                <p className="text-slate-700 mb-2">
                  O período é o inverso da frequência:
                </p>
                <MathFormula formula={String.raw`$$T = \frac{1}{f} = \frac{1}{50} = 0,02 \text{ s} = 20 \text{ ms}$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-purple-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">c) Frequência angular</p>
                <p className="text-slate-700 mb-2">
                  A frequência angular é relacionada à frequência por:
                </p>
                <MathFormula formula={String.raw`$$\omega = 2\pi f = 2\pi \times 50 = 100\pi \text{ rad/s} \approx 314,16 \text{ rad/s}$$`} display={true} />
              </div>

              <div className="bg-blue-100 p-3 rounded-lg mt-4">
                <p className="text-slate-900 font-semibold">Análise Crítica:</p>
                <p className="text-slate-700 text-sm">
                  Note que a velocidade é uma propriedade do meio (corda). Se a frequência aumentasse, o comprimento de onda diminuiria proporcionalmente, mantendo a velocidade constante. Isso é fundamental para entender refração de ondas!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo de Fórmulas */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>Resumo de Fórmulas - Conceitos Fundamentais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Relação fundamental:</span>
                <MathFormula formula={String.raw`$$v = f \cdot \lambda$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Período e frequência:</span>
                <MathFormula formula={String.raw`$$T = \frac{1}{f}$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Frequência angular:</span>
                <MathFormula formula={String.raw`$$\omega = 2\pi f = \frac{2\pi}{T}$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Número de onda:</span>
                <MathFormula formula={String.raw`$$k = \frac{2\pi}{\lambda}$$`} display={false} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dicas Importantes */}
        <Card className="bg-green-50 border-l-4 border-l-green-600">
          <CardHeader>
            <CardTitle className="text-green-900">Dicas Importantes para Provas ITA/IME</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-700">
              ✓ <strong>Frequência é invariante:</strong> Quando uma onda muda de meio, sua frequência permanece constante, mas velocidade e comprimento de onda mudam.
            </p>
            <p className="text-slate-700">
              ✓ <strong>Velocidade depende do meio:</strong> A velocidade de uma onda depende apenas das propriedades do meio (densidade, elasticidade), não da frequência ou amplitude.
            </p>
            <p className="text-slate-700">
              ✓ <strong>Amplitude não afeta velocidade:</strong> Uma onda mais intensa (maior amplitude) viaja com a mesma velocidade que uma onda fraca no mesmo meio.
            </p>
            <p className="text-slate-700">
              ✓ <strong>Relação fundamental:</strong> Sempre que tiver velocidade, frequência e comprimento de onda, use $v = f \cdot \lambda$.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
