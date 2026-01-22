import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicConceitos() {
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
              <p className="text-xs text-slate-600">Conceitos Fundamentais de Ondas</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* SEÇÃO 1: O QUE É ONDA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 O Que é uma Onda? Definição Completa</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Uma onda é uma perturbação que se propaga através de um meio ou do espaço, transportando energia sem transportar matéria.</strong> Esta é a definição mais importante, mas vamos entender cada palavra cuidadosamente.
              </p>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">Vamos quebrar a definição:</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-bold text-slate-900">1. Perturbação</p>
                    <p className="text-slate-700 mt-2">
                      Uma perturbação é uma mudança no estado normal de equilíbrio de um sistema. Quando você joga uma pedra em um lago, a água que estava em repouso é perturbada. Quando você vibra uma corda, o ar ao seu redor é perturbado. Quando uma fonte de luz emite fótons, o campo eletromagnético é perturbado. Toda onda começa com uma perturbação inicial.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-bold text-slate-900">2. Propaga-se</p>
                    <p className="text-slate-700 mt-2">
                      Propagar significa se espalhar, se disseminar. A perturbação não fica localizada no ponto onde foi criada. Ela viaja de um lugar para outro. Quando você grita em um estádio, o som não fica perto de sua boca - ele se propaga por todo o estádio. Essa propagação é o que chamamos de onda.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-bold text-slate-900">3. Através de um meio</p>
                    <p className="text-slate-700 mt-2">
                      A maioria das ondas precisa de um meio material para se propagar. O som precisa de ar, água ou sólido. As ondas em uma corda precisam da corda. As ondas em um lago precisam da água. O meio é o material que vibra e passa a vibração adiante. Mas há uma exceção importante: as ondas eletromagnéticas (como luz) não precisam de um meio. Elas viajam no vácuo do espaço!
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-bold text-slate-900">4. Transporta energia</p>
                    <p className="text-slate-700 mt-2">
                      Toda onda carrega energia de um lugar para outro. Essa é uma das razões pelas quais as ondas são tão importantes. O som leva energia até seus ouvidos, permitindo que você ouça. A luz leva energia até seus olhos, permitindo que você veja. As ondas de rádio levam energia até sua antena. Sem essa capacidade de transportar energia, as ondas não seriam tão úteis.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-bold text-slate-900">5. Sem transportar matéria</p>
                    <p className="text-slate-700 mt-2">
                      Este é o ponto crucial que diferencia uma onda do transporte de matéria. Quando uma onda passa, a matéria não viaja junto com ela. Quando o som passa por você, o ar não sai voando. O ar apenas vibra para frente e para trás. Quando uma onda passa em um lago, a água não viaja até a margem. A água apenas sobe e desce. A onda é o padrão de movimento, não o movimento da matéria em si.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                <strong>Por que isso é importante?</strong> Porque isso significa que você pode enviar informação (energia) de um lugar para outro sem mover a matéria. Você pode ouvir uma pessoa a 100 metros de distância sem que o ar entre você e ela se mova para lá. Essa é a magia das ondas!
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-4">💡 Analogias Práticas para Entender Ondas</h4>
              <div className="space-y-4">
                <div className="bg-white border border-yellow-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Analogia 1: A Corda</p>
                  <p className="text-slate-700">
                    Imagine uma corda pendurada. Você pega uma ponta e faz um movimento rápido para cima e para baixo. Uma perturbação viaja pela corda até a outra ponta. Observe: a corda não se move para frente ou para trás. Ela apenas sobe e desce. A onda é essa perturbação que viaja, não a corda em si. Se você colocar uma etiqueta em um ponto da corda, verá que ela apenas sobe e desce, não viaja com a onda.
                  </p>
                </div>

                <div className="bg-white border border-yellow-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Analogia 2: O Lago</p>
                  <p className="text-slate-700">
                    Quando você joga uma pedra em um lago, forma-se uma onda circular. A água não viaja até a margem com a onda. A água apenas sobe e desce. Se você colocar uma boia na água, verá que ela apenas sobe e desce enquanto a onda passa. A onda é o padrão de movimento que se propaga, não a água em si.
                  </p>
                </div>

                <div className="bg-white border border-yellow-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Analogia 3: A Onda de Estádio</p>
                  <p className="text-slate-700">
                    Em um estádio de futebol, os torcedores fazem uma "onda" levantando e abaixando os braços. A onda viaja ao redor do estádio, mas cada torcedor apenas levanta e abaixa o braço. Os torcedores não viajam ao redor do estádio. A onda é o padrão de movimento, não o movimento dos torcedores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Por Que Estudar Ondas?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As ondas são fundamentais para entender o universo. Aqui estão algumas razões:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Som:</strong> O som é uma onda. Sem entender ondas, você não entende como você ouve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Luz:</strong> A luz é uma onda eletromagnética. Sem entender ondas, você não entende como você vê.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Comunicação:</strong> Rádio, TV, Wi-Fi, celular - tudo usa ondas eletromagnéticas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Medicina:</strong> Ultrassom usa ondas sonoras. Raios X usam ondas eletromagnéticas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Física Moderna:</strong> Na mecânica quântica, até as partículas se comportam como ondas!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: CARACTERÍSTICAS DAS ONDAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Características Fundamentais das Ondas</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Amplitude (A)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A amplitude é a <strong>altura máxima</strong> da onda em relação à posição de equilíbrio. Imagine uma onda em uma corda: a amplitude é a distância máxima que a corda se move para cima (ou para baixo) a partir de sua posição de repouso.
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="A = \text{distância máxima do ponto de equilíbrio}" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Significado físico:</strong> A amplitude está relacionada à <strong>energia</strong> da onda. Quanto maior a amplitude, mais energia a onda carrega. Uma onda sonora com grande amplitude é um som alto. Uma onda de luz com grande amplitude é uma luz brilhante.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Unidade:</strong> Metros (m) ou qualquer unidade de comprimento.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Período (T)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O período é o <strong>tempo que leva para a onda completar um ciclo completo</strong>. Um ciclo é uma oscilação completa: a onda sobe, desce e volta à posição inicial. Se você observar um ponto na água enquanto uma onda passa, o período é o tempo que leva para aquele ponto subir, descer e voltar à posição original.
              </p>
              <div className="bg-white border border-indigo-300 rounded p-4 mb-4">
                <MathFormula formula="T = \text{tempo para completar um ciclo}" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Se uma onda em uma corda completa um ciclo a cada 0,5 segundos, então T = 0,5 s.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Unidade:</strong> Segundos (s).
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Frequência (f)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A frequência é o <strong>número de ciclos que a onda completa em um segundo</strong>. É o inverso do período. Se uma onda completa 10 ciclos em um segundo, sua frequência é 10 Hz (hertz).
              </p>
              <div className="bg-white border border-cyan-300 rounded p-4 mb-4">
                <MathFormula formula="f = \frac{1}{T}" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Relação com período:</strong> Frequência e período são inversamente proporcionais. Se o período é pequeno (onda rápida), a frequência é grande. Se o período é grande (onda lenta), a frequência é pequena.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Se T = 0,5 s, então f = 1/0,5 = 2 Hz. A onda completa 2 ciclos por segundo.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Unidade:</strong> Hertz (Hz) = ciclos por segundo.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Comprimento de Onda (λ)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O comprimento de onda é a <strong>distância entre dois pontos idênticos consecutivos da onda</strong>. Por exemplo, a distância entre duas cristas (pontos altos) consecutivas, ou a distância entre dois vales (pontos baixos) consecutivos.
              </p>
              <div className="bg-white border border-pink-300 rounded p-4 mb-4">
                <MathFormula formula="\lambda = \text{distância entre cristas (ou vales) consecutivas}" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Visualização:</strong> Se você desenhar uma onda, o comprimento de onda é a distância horizontal de um pico ao próximo pico.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Unidade:</strong> Metros (m) ou qualquer unidade de comprimento.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Velocidade da Onda (v)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A velocidade da onda é a <strong>rapidez com que a onda se propaga</strong> através do meio. É a distância que a onda viaja por unidade de tempo.
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="v = \frac{\lambda}{T} = \lambda \cdot f" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Derivação:</strong> Em um período T, a onda viaja uma distância igual a um comprimento de onda λ. Portanto, a velocidade é λ/T. Como f = 1/T, podemos também escrever v = λf.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Se λ = 2 m e f = 5 Hz, então v = 2 × 5 = 10 m/s. A onda viaja 10 metros por segundo.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Unidade:</strong> Metros por segundo (m/s).
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3: RELAÇÃO ENTRE GRANDEZAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔗 Relação Entre as Grandezas: A Equação Fundamental</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
            <p className="text-slate-700 leading-relaxed mb-4">
              Todas as características das ondas estão relacionadas por uma única equação fundamental:
            </p>
            <div className="bg-white border border-blue-300 rounded p-4 mb-4">
              <MathFormula formula="v = \lambda \cdot f" display={true} />
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Esta é a equação mais importante da ondulatória!</strong> Ela conecta a velocidade (v), o comprimento de onda (λ) e a frequência (f). Se você conhecer dois desses valores, pode encontrar o terceiro.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
            <h4 className="font-bold text-slate-900 mb-4">📝 Exemplo Prático Completo</h4>
            <p className="text-slate-700 leading-relaxed mb-4">
              Uma onda sonora tem frequência de 440 Hz (essa é a nota Lá em um piano). A velocidade do som no ar é aproximadamente 340 m/s. Qual é o comprimento de onda?
            </p>
            <div className="bg-white border border-yellow-300 rounded p-4 mb-4">
              <p className="text-slate-700 mb-3"><strong>Solução passo-a-passo:</strong></p>
              <p className="text-slate-700 mb-2">Dados: f = 440 Hz, v = 340 m/s, λ = ?</p>
              <p className="text-slate-700 mb-3">Usamos a equação: v = λ · f</p>
              <MathFormula formula="\lambda = \frac{v}{f} = \frac{340}{440} = 0,77 \text{ m} = 77 \text{ cm}" display={true} />
              <p className="text-slate-700 mt-3">
                <strong>Resultado:</strong> O comprimento de onda é 77 cm. Isso significa que a distância entre duas cristas consecutivas dessa onda sonora é 77 centímetros.
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 4: PONTOS-CHAVE */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave para Lembrar</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Onda:</strong> Perturbação que se propaga transportando energia, sem transportar matéria.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Amplitude (A):</strong> Altura máxima da onda. Relacionada à energia.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Período (T):</strong> Tempo para completar um ciclo. Unidade: segundos.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência (f):</strong> Número de ciclos por segundo. <MathFormula formula="f = \frac{1}{T}" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Comprimento de onda (λ):</strong> Distância entre cristas consecutivas.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Equação fundamental:</strong> <MathFormula formula="v = \lambda \cdot f" display={false} /> (MEMORIZE ISSO!)
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade da onda:</strong> Depende do meio, não da frequência ou amplitude.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
