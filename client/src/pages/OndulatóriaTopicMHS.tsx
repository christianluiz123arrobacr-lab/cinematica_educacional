import React from 'react';
import { MathFormula } from '@/components/MathFormula';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BookOpen, Zap } from 'lucide-react';

export default function OndulatóriaTopicMHS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Movimento Harmônico Simples (MHS)</h1>
          </div>
          <p className="text-lg text-slate-600">Base Matemática para Ondas - Nível ITA/IME</p>
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
              <strong>Movimento Harmônico Simples (MHS)</strong> é um movimento periódico onde a aceleração é sempre proporcional e oposta ao deslocamento em relação à posição de equilíbrio. Matematicamente, é governado por uma equação diferencial fundamental.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Equação Diferencial do MHS:</strong></p>
              <MathFormula formula={String.raw`$$\frac{d^2x}{dt^2} = -\omega^2 x$$`} display={true} />
            </div>
            <p className="text-slate-600 text-sm">
              Onde: $\omega$ = frequência angular (rad/s), $x$ = deslocamento
            </p>
            <p className="text-slate-700 mt-4">
              A solução geral dessa equação diferencial é:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <MathFormula formula={String.raw`$$x(t) = A \cos(\omega t + \phi)$$`} display={true} />
            </div>
            <p className="text-slate-600 text-sm">
              Ou equivalentemente: $x(t) = A \sin(\omega t + \phi)$
            </p>
          </CardContent>
        </Card>

        {/* Grandezas do MHS */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Grandezas Fundamentais do MHS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Amplitude */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">1. Amplitude (A)</h4>
              <p className="text-slate-700 mb-3">
                É o deslocamento máximo da partícula em relação à posição de equilíbrio. Determina a "intensidade" do movimento.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$x_{\max} = A, \quad x_{\min} = -A$$`} display={true} />
              </div>
            </div>

            {/* Período e Frequência */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">2. Período (T) e Frequência (f)</h4>
              <p className="text-slate-700 mb-3">
                <strong>Período:</strong> Tempo para completar uma oscilação completa.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$T = \frac{2\pi}{\omega} = \frac{1}{f}$$`} display={true} />
              </div>
              <p className="text-slate-700 mb-3">
                <strong>Frequência:</strong> Número de oscilações por unidade de tempo.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$f = \frac{\omega}{2\pi} = \frac{1}{T}$$`} display={true} />
              </div>
            </div>

            {/* Fase */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">3. Fase (φ) e Fase Inicial</h4>
              <p className="text-slate-700 mb-3">
                A <strong>fase</strong> $\phi(t) = \omega t + \phi_0$ determina o estado da oscilação em cada instante.
              </p>
              <p className="text-slate-700 mb-3">
                A <strong>fase inicial</strong> $\phi_0$ depende das condições iniciais do movimento.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$\phi(t) = \omega t + \phi_0$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Exemplo:</strong> Se em $t=0$ temos $x=A$ (máximo), então $\phi_0 = 0$ e $x(t) = A\cos(\omega t)$
              </p>
            </div>

            {/* Velocidade */}
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 mb-2">4. Velocidade no MHS</h4>
              <p className="text-slate-700 mb-3">
                A velocidade é a derivada do deslocamento em relação ao tempo.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$v(t) = \frac{dx}{dt} = -A\omega \sin(\omega t + \phi_0)$$`} display={true} />
              </div>
              <p className="text-slate-700 mb-3">
                A velocidade máxima ocorre quando $\sin(\omega t + \phi_0) = \pm 1$:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$v_{\max} = A\omega$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Importante:</strong> A velocidade máxima ocorre na posição de equilíbrio ($x = 0$), não nos extremos!
              </p>
            </div>

            {/* Aceleração */}
            <div>
              <h4 className="font-bold text-slate-900 mb-2">5. Aceleração no MHS</h4>
              <p className="text-slate-700 mb-3">
                A aceleração é a derivada da velocidade (segunda derivada do deslocamento).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <MathFormula formula={String.raw`$$a(t) = \frac{dv}{dt} = -A\omega^2 \cos(\omega t + \phi_0) = -\omega^2 x(t)$$`} display={true} />
              </div>
              <p className="text-slate-700 mb-3">
                A aceleração máxima ocorre nos extremos da oscilação:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <MathFormula formula={String.raw`$$a_{\max} = A\omega^2$$`} display={true} />
              </div>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Propriedade fundamental:</strong> A aceleração é sempre oposta ao deslocamento ($a = -\omega^2 x$), o que define o MHS!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Energia no MHS */}
        <Card className="mb-6 bg-purple-50">
          <CardHeader>
            <CardTitle>Energia no Movimento Harmônico Simples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              No MHS, a energia total é conservada e oscila entre energia cinética e potencial.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-l-purple-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">Energia Cinética</p>
                <MathFormula formula={String.raw`$$E_c = \frac{1}{2}mv^2 = \frac{1}{2}m A^2 \omega^2 \sin^2(\omega t + \phi_0)$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-purple-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">Energia Potencial</p>
                <MathFormula formula={String.raw`$$E_p = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 A^2 \cos^2(\omega t + \phi_0)$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-purple-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">Energia Total (Conservada)</p>
                <MathFormula formula={String.raw`$$E_{total} = E_c + E_p = \frac{1}{2}m\omega^2 A^2 = \text{constante}$$`} display={true} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mt-4">
              <p className="text-slate-700 text-sm">
                <strong>Transformação de Energia:</strong> Na posição de equilíbrio ($x=0$), toda energia é cinética. Nos extremos ($x=\pm A$), toda energia é potencial. A energia total permanece constante!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Exemplo Prático */}
        <Card className="mb-6 bg-yellow-50 border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Exemplo Prático: Massa em Mola
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              Uma massa de 0,5 kg oscila em uma mola com constante elástica k = 200 N/m. A amplitude é 0,1 m. Determine:
            </p>
            
            <div className="bg-white p-4 rounded-lg space-y-3">
              <p><strong>Dados:</strong></p>
              <p className="text-slate-700">• m = 0,5 kg</p>
              <p className="text-slate-700">• k = 200 N/m</p>
              <p className="text-slate-700">• A = 0,1 m</p>
              
              <p className="mt-4"><strong>a) Frequência angular (ω):</strong></p>
              <MathFormula formula={String.raw`$$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0,5}} = \sqrt{400} = 20 \text{ rad/s}$$`} display={true} />
              
              <p className="mt-4"><strong>b) Período (T):</strong></p>
              <MathFormula formula={String.raw`$$T = \frac{2\pi}{\omega} = \frac{2\pi}{20} = 0,1\pi \approx 0,314 \text{ s}$$`} display={true} />
              
              <p className="mt-4"><strong>c) Frequência (f):</strong></p>
              <MathFormula formula={String.raw`$$f = \frac{1}{T} = \frac{1}{0,1\pi} \approx 3,18 \text{ Hz}$$`} display={true} />
              
              <p className="mt-4"><strong>d) Velocidade máxima:</strong></p>
              <MathFormula formula={String.raw`$$v_{\max} = A\omega = 0,1 \times 20 = 2 \text{ m/s}$$`} display={true} />
              
              <p className="mt-4"><strong>e) Aceleração máxima:</strong></p>
              <MathFormula formula={String.raw`$$a_{\max} = A\omega^2 = 0,1 \times 400 = 40 \text{ m/s}^2$$`} display={true} />
              
              <p className="mt-4"><strong>f) Energia total:</strong></p>
              <MathFormula formula={String.raw`$$E_{total} = \frac{1}{2}kA^2 = \frac{1}{2} \times 200 \times (0,1)^2 = 1 \text{ J}$$`} display={true} />
            </div>
          </CardContent>
        </Card>

        {/* Questão Militar ESPCEX */}
        <Card className="mb-6 bg-red-50 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-600" />
              Questão ESPCEX - Movimento Harmônico Simples
            </CardTitle>
            <CardDescription>Escola Preparatória de Cadetes do Exército</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 font-semibold">
              (ESPCEX) Um corpo de massa 2 kg executa um movimento harmônico simples descrito por $x(t) = 0,2\cos(5t)$ metros, onde $t$ é o tempo em segundos. Determine:
            </p>
            <p className="text-slate-700">a) A amplitude e a frequência angular</p>
            <p className="text-slate-700">b) O período e a frequência</p>
            <p className="text-slate-700">c) A velocidade e aceleração máximas</p>
            <p className="text-slate-700">d) A energia total do sistema</p>
            
            <div className="bg-white p-4 rounded-lg space-y-4 mt-4">
              <p><strong>Solução Completa:</strong></p>
              
              <div className="border-l-4 border-l-blue-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">a) Amplitude e frequência angular</p>
                <p className="text-slate-700 mb-2">
                  Comparando com $x(t) = A\cos(\omega t + \phi_0)$:
                </p>
                <MathFormula formula={String.raw`$$A = 0,2 \text{ m}, \quad \omega = 5 \text{ rad/s}$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-green-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">b) Período e frequência</p>
                <MathFormula formula={String.raw`$$T = \frac{2\pi}{\omega} = \frac{2\pi}{5} \approx 1,26 \text{ s}$$`} display={true} />
                <MathFormula formula={String.raw`$$f = \frac{1}{T} = \frac{5}{2\pi} \approx 0,796 \text{ Hz}$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-purple-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">c) Velocidades e acelerações máximas</p>
                <MathFormula formula={String.raw`$$v_{\max} = A\omega = 0,2 \times 5 = 1 \text{ m/s}$$`} display={true} />
                <MathFormula formula={String.raw`$$a_{\max} = A\omega^2 = 0,2 \times 25 = 5 \text{ m/s}^2$$`} display={true} />
              </div>

              <div className="border-l-4 border-l-orange-400 pl-4">
                <p className="font-semibold text-slate-900 mb-2">d) Energia total</p>
                <p className="text-slate-700 mb-2">
                  Primeiro, encontramos a constante elástica equivalente:
                </p>
                <MathFormula formula={String.raw`$$k = m\omega^2 = 2 \times 25 = 50 \text{ N/m}$$`} display={true} />
                <p className="text-slate-700 mb-2">
                  Então, a energia total:
                </p>
                <MathFormula formula={String.raw`$$E_{total} = \frac{1}{2}kA^2 = \frac{1}{2} \times 50 \times (0,2)^2 = 1 \text{ J}$$`} display={true} />
              </div>

              <div className="bg-blue-100 p-3 rounded-lg mt-4">
                <p className="text-slate-900 font-semibold">Análise Crítica:</p>
                <p className="text-slate-700 text-sm">
                  Note que a energia total é constante! Em qualquer instante, $E_c + E_p = 1$ J. Na posição de equilíbrio ($x=0$), toda energia é cinética. Nos extremos ($x=\pm 0,2$ m), toda energia é potencial.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo de Fórmulas */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>Resumo de Fórmulas - MHS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Deslocamento:</span>
                <MathFormula formula={String.raw`$$x(t) = A\cos(\omega t + \phi_0)$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Velocidade:</span>
                <MathFormula formula={String.raw`$$v(t) = -A\omega\sin(\omega t + \phi_0)$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Aceleração:</span>
                <MathFormula formula={String.raw`$$a(t) = -A\omega^2\cos(\omega t + \phi_0)$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Período:</span>
                <MathFormula formula={String.raw`$$T = \frac{2\pi}{\omega}$$`} display={false} />
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-semibold">Energia total:</span>
                <MathFormula formula={String.raw`$$E = \frac{1}{2}m\omega^2 A^2$$`} display={false} />
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
              ✓ <strong>Defasagem entre x, v e a:</strong> Velocidade está 90° adiantada em relação ao deslocamento. Aceleração está 180° adiantada (oposta).
            </p>
            <p className="text-slate-700">
              ✓ <strong>Máximos e mínimos:</strong> v_max ocorre em x=0. a_max ocorre em x=±A. v=0 nos extremos.
            </p>
            <p className="text-slate-700">
              ✓ <strong>Energia é conservada:</strong> E_total = E_c + E_p = constante. Não há dissipação de energia no MHS ideal.
            </p>
            <p className="text-slate-700">
              ✓ <strong>Relação com mola:</strong> Para uma mola, omega = sqrt(k/m) e T = 2πsqrt(m/k).
            </p>
            <p className="text-slate-700">
              ✓ <strong>Equação diferencial:</strong> Todo MHS satisfaz d²x/dt² = -ω²x.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
