import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicMHS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
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
              <h1 className="text-xl font-bold text-slate-900">Ondulatória</h1>
              <p className="text-xs text-slate-600">Movimento Harmônico Simples (MHS)</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 O Que é Movimento Harmônico Simples?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Movimento Harmônico Simples (MHS) é um movimento oscilatório onde a aceleração é sempre proporcional e oposta ao deslocamento.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                Isso significa que quanto mais longe o objeto está da posição de equilíbrio, maior é a força que o puxa de volta. E essa força sempre aponta para a posição de equilíbrio.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplos Práticos</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Massa em uma mola:</strong> Quando você puxa uma mola e solta, ela oscila para frente e para trás. Esse é um MHS perfeito.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Pêndulo:</strong> Um pêndulo que balança para frente e para trás é aproximadamente um MHS (para ângulos pequenos).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Vibração de uma corda de violão:</strong> Quando você toca uma corda, ela vibra em MHS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 As Equações do MHS</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Posição em Função do Tempo</h3>
              <p className="text-slate-700 mb-4">
                A posição de um objeto em MHS varia sinusoidalmente com o tempo:
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="x(t) = A \cos(\omega t + \phi)" display={true} />
              </div>
              <p className="text-slate-700 mb-4">Onde:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• <MathFormula formula="x(t)" display={false} /> = posição no tempo <MathFormula formula="t" display={false} /></li>
                <li>• <MathFormula formula="A" display={false} /> = amplitude (deslocamento máximo)</li>
                <li>• <MathFormula formula="\omega" display={false} /> = frequência angular (em rad/s)</li>
                <li>• <MathFormula formula="\phi" display={false} /> = fase inicial (em radianos)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Velocidade em Função do Tempo</h3>
              <p className="text-slate-700 mb-4">
                A velocidade é a derivada da posição em relação ao tempo:
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="v(t) = -A \omega \sin(\omega t + \phi)" display={true} />
              </div>
              <div className="text-slate-600 text-sm">
                Note: A velocidade máxima é <MathFormula formula="v_{max} = A \omega" display={false} />, e ocorre quando o objeto passa pela posição de equilíbrio.
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Aceleração em Função do Tempo</h3>
              <p className="text-slate-700 mb-4">
                A aceleração é a derivada da velocidade em relação ao tempo:
              </p>
              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <MathFormula formula="a(t) = -A \omega^2 \cos(\omega t + \phi) = -\omega^2 x(t)" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Essa é a propriedade fundamental do MHS: <strong>a aceleração é proporcional e oposta ao deslocamento!</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Frequência Angular (ω)</h3>
              <p className="text-slate-700 mb-4">
                A frequência angular relaciona o período e a frequência:
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="\omega = 2\pi f = \frac{2\pi}{T}" display={true} />
              </div>
              <p className="text-slate-700 mb-4">Onde:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• <MathFormula formula="\omega" display={false} /> = frequência angular (rad/s)</li>
                <li>• <MathFormula formula="f" display={false} /> = frequência (Hz)</li>
                <li>• <MathFormula formula="T" display={false} /> = período (s)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Energia no MHS</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Energia Cinética</h3>
              <p className="text-slate-700 mb-4">
                A energia cinética é a energia do movimento:
              </p>
              <div className="bg-white border border-blue-300 rounded p-4">
                <MathFormula formula="E_c = \frac{1}{2} m v^2 = \frac{1}{2} m A^2 \omega^2 \sin^2(\omega t + \phi)" display={true} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Energia Potencial</h3>
              <p className="text-slate-700 mb-4">
                A energia potencial é a energia armazenada na mola (ou no campo):
              </p>
              <div className="bg-white border border-green-300 rounded p-4">
                <MathFormula formula="E_p = \frac{1}{2} k x^2 = \frac{1}{2} m A^2 \omega^2 \cos^2(\omega t + \phi)" display={true} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Energia Total (Conservada)</h3>
              <p className="text-slate-700 mb-4">
                A energia total é constante no MHS:
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="E_{total} = E_c + E_p = \frac{1}{2} m A^2 \omega^2 = \text{constante}" display={true} />
              </div>
              <div className="text-slate-600 text-sm">
                A energia oscila entre cinética e potencial, mas a soma permanece sempre a mesma!
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Exemplo Prático: Massa em uma Mola</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700 font-semibold">
              Uma massa de 0,5 kg está presa a uma mola com constante elástica k = 200 N/m. A amplitude é 0,1 m.
            </p>

            <div className="bg-white border border-yellow-300 rounded p-4">
              <p className="font-bold text-slate-900 mb-3">Passo 1: Calcule a frequência angular</p>
              <MathFormula formula="\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0,5}} = \sqrt{400} = 20 \text{ rad/s}" display={true} />
            </div>

            <div className="bg-white border border-yellow-300 rounded p-4">
              <p className="font-bold text-slate-900 mb-3">Passo 2: Calcule o período</p>
              <MathFormula formula="T = \frac{2\pi}{\omega} = \frac{2\pi}{20} = 0,314 \text{ s}" display={true} />
            </div>

            <div className="bg-white border border-yellow-300 rounded p-4">
              <p className="font-bold text-slate-900 mb-3">Passo 3: Calcule a frequência</p>
              <MathFormula formula="f = \frac{1}{T} = \frac{1}{0,314} = 3,18 \text{ Hz}" display={true} />
            </div>

            <div className="bg-white border border-yellow-300 rounded p-4">
              <p className="font-bold text-slate-900 mb-3">Passo 4: Calcule a energia total</p>
              <MathFormula formula="E_{total} = \frac{1}{2} m A^2 \omega^2 = \frac{1}{2} \times 0,5 \times (0,1)^2 \times (20)^2 = 1 \text{ J}" display={true} />
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave para Lembrar</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>MHS é periódico:</strong> O movimento se repete exatamente a cada período T.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Aceleração sempre aponta para o equilíbrio:</strong> <MathFormula formula="a = -\omega^2 x" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Energia é conservada:</strong> A soma de cinética + potencial é sempre constante.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade máxima no equilíbrio:</strong> Quando x = 0, v é máximo.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Aceleração máxima nos extremos:</strong> Quando x = ±A, a é máximo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
