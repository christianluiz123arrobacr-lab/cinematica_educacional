import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicConceitos() {
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
              <p className="text-xs text-slate-600">Conceitos Fundamentais de Ondas</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 O Que é uma Onda?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Uma onda é uma perturbação que se propaga através de um meio ou do espaço, transportando energia sem transportar matéria.</strong> Essa é a definição mais importante que você precisa entender.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Vamos quebrar isso em partes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span><strong>Perturbação:</strong> É uma mudança no estado normal de algo. Por exemplo, quando você joga uma pedra em um lago, a água que estava quieta é perturbada e começa a se mover.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span><strong>Propaga-se:</strong> Significa que a perturbação se espalha de um lugar para outro. A onda viaja de um ponto para outro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span><strong>Através de um meio:</strong> A maioria das ondas precisa de um meio (como ar, água, corda) para se propagar. Mas existem exceções, como a luz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span><strong>Transporta energia:</strong> A onda carrega energia de um lugar para outro. Por isso o som consegue chegar até seus ouvidos e a luz consegue chegar até seus olhos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">5.</span>
                  <span><strong>Sem transportar matéria:</strong> Aqui está o ponto crucial! A onda não leva a matéria consigo. Quando uma onda de som passa por você, o ar não sai voando junto com o som. O ar apenas vibra para frente e para trás.</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Analogia Prática</h4>
              <p className="text-slate-700 mb-4">
                Imagine uma corda pendurada. Você pega uma ponta e faz um movimento rápido para cima e para baixo. Uma "onda" viaja pela corda até a outra ponta. Mas note: a corda não se move para frente ou para trás. Ela apenas sobe e desce. A onda é essa perturbação que viaja, não a corda em si.
              </p>
              <p className="text-slate-700">
                Outro exemplo: quando você joga uma pedra em um lago, forma-se uma onda. A água não viaja até a margem com a onda. A água apenas sobe e desce. A onda é o padrão de movimento que se propaga.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Classificação das Ondas</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Por Natureza (O que vibra?)</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Mecânicas</p>
                  <p className="text-slate-700">
                    São ondas que <strong>precisam de um meio material para se propagar</strong>. Exemplos: som, ondas em cordas, ondas na água. O meio vibra e passa a vibração adiante.
                  </p>
                </div>

                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Eletromagnéticas</p>
                  <p className="text-slate-700">
                    São ondas que <strong>não precisam de um meio para se propagar</strong>. Elas viajam no vácuo! Exemplos: luz, ondas de rádio, raios X. Essas ondas são vibrações de campos elétricos e magnéticos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Por Direção de Vibração</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Transversais</p>
                  <p className="text-slate-700 mb-2">
                    A vibração ocorre <strong>perpendicular (em ângulo reto) à direção de propagação</strong> da onda.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Exemplo: quando você agita uma corda para cima e para baixo, a corda vibra verticalmente, mas a onda viaja horizontalmente. Outro exemplo: a luz é uma onda transversal.
                  </p>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Longitudinais</p>
                  <p className="text-slate-700 mb-2">
                    A vibração ocorre <strong>na mesma direção da propagação</strong> da onda.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Exemplo: o som é uma onda longitudinal. As moléculas de ar vibram para frente e para trás na mesma direção que o som viaja.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Por Dimensionalidade</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-red-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Unidimensionais</p>
                  <p className="text-slate-700">Propagam-se em uma única direção. Exemplo: onda em uma corda.</p>
                </div>

                <div className="bg-white border border-red-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Bidimensionais</p>
                  <p className="text-slate-700">Propagam-se em um plano (duas dimensões). Exemplo: ondas na superfície da água.</p>
                </div>

                <div className="bg-white border border-red-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Ondas Tridimensionais</p>
                  <p className="text-slate-700">Propagam-se em todas as direções do espaço. Exemplo: som no ar, luz no espaço.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Grandezas Características de uma Onda</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Amplitude (A)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A amplitude é o deslocamento máximo de uma partícula em relação à sua posição de equilíbrio.</strong> Em outras palavras, é o "tamanho" da onda.
              </p>
              <p className="text-slate-700 mb-4">
                Imagine uma corda oscilando. A amplitude é a altura máxima que a corda atinge acima ou abaixo da sua posição normal. Quanto maior a amplitude, mais "forte" ou "intensa" a onda é.
              </p>
              <div className="bg-white border border-blue-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Unidade:</p>
                <MathFormula formula="A \text{ (metros, m)}" display={false} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Período (T)</h3>
              <p className="text-slate-700 mb-4">
                <strong>O período é o tempo que uma onda leva para completar uma oscilação completa.</strong> É o tempo para a onda voltar ao mesmo estado.
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: se você agita uma corda para cima, depois para baixo, e depois volta à posição inicial, o tempo que isso levou é o período.
              </p>
              <div className="bg-white border border-green-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Unidade:</p>
                <MathFormula formula="T \text{ (segundos, s)}" display={false} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Frequência (f)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A frequência é o número de oscilações completas que ocorrem em um segundo.</strong> É o "inverso" do período.
              </p>
              <p className="text-slate-700 mb-4">
                Se uma onda completa uma oscilação a cada segundo, sua frequência é 1. Se completa 10 oscilações por segundo, sua frequência é 10.
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Fórmula:</p>
                <MathFormula formula="f = \frac{1}{T}" display={true} />
              </div>
              <div className="bg-white border border-purple-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Unidade:</p>
                <MathFormula formula="f \text{ (Hertz, Hz) ou (s}^{-1}\text{)}" display={false} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Comprimento de Onda (λ)</h3>
              <p className="text-slate-700 mb-4">
                <strong>O comprimento de onda é a distância entre dois pontos consecutivos que estão no mesmo estado de vibração.</strong> É a "largura" de uma onda completa.
              </p>
              <p className="text-slate-700 mb-4">
                Imagine uma onda na água. O comprimento de onda é a distância de uma "crista" (ponto mais alto) até a próxima crista.
              </p>
              <div className="bg-white border border-orange-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Unidade:</p>
                <MathFormula formula="\lambda \text{ (metros, m)}" display={false} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Velocidade de Propagação (v)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A velocidade de propagação é a rapidez com que a onda se move através do meio.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Essa velocidade depende do meio. Por exemplo, o som viaja mais rápido na água do que no ar.
              </p>
              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Fórmula Fundamental:</p>
                <MathFormula formula="v = f \cdot \lambda" display={true} />
              </div>
              <div className="bg-white border border-red-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Ou:</p>
                <MathFormula formula="v = \frac{\lambda}{T}" display={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Exemplo Prático Completo</h2>
          
          <div className="space-y-4">
            <p className="text-slate-700 font-semibold">
              Uma onda em uma corda tem as seguintes características:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Amplitude: <MathFormula formula="A = 0,05 \text{ m}" display={false} /></li>
              <li>• Período: <MathFormula formula="T = 0,2 \text{ s}" display={false} /></li>
              <li>• Comprimento de onda: <MathFormula formula="\lambda = 0,4 \text{ m}" display={false} /></li>
            </ul>

            <div className="bg-white border border-yellow-300 rounded p-4 mt-4">
              <p className="font-bold text-slate-900 mb-3">Calcule a frequência e a velocidade:</p>
              
              <div className="space-y-4">
                <div className="border-b border-yellow-300 pb-4">
                  <p className="font-bold text-slate-900 mb-2">Frequência:</p>
                  <MathFormula formula="f = \frac{1}{T} = \frac{1}{0,2} = 5 \text{ Hz}" display={true} />
                  <p className="text-slate-600 text-sm mt-2">A onda completa 5 oscilações a cada segundo.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 mb-2">Velocidade:</p>
                  <MathFormula formula="v = f \cdot \lambda = 5 \times 0,4 = 2 \text{ m/s}" display={true} />
                  <p className="text-slate-600 text-sm mt-2">A onda se propaga a 2 metros por segundo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave para Lembrar</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Onda transporta energia, não matéria:</strong> Esse é o conceito mais importante de toda a ondulatória.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência e período são inversos:</strong> <MathFormula formula="f = \frac{1}{T}" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade = frequência × comprimento de onda:</strong> <MathFormula formula="v = f \cdot \lambda" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Amplitude não afeta velocidade:</strong> Uma onda "grande" viaja na mesma velocidade que uma onda "pequena" no mesmo meio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
