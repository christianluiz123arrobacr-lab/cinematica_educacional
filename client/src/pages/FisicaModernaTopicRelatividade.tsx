import { Link } from "wouter";
import { ArrowLeft, Rocket, Info, AlertTriangle, CheckCircle2, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function FisicaModernaTopicRelatividade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/fisica-moderna">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Física Moderna</h1>
              <p className="text-xs text-slate-600">Relatividade Restrita</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Relatividade Restrita</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é a Relatividade Restrita?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Relatividade Restrita</strong> é a teoria física que descreve o comportamento do espaço e do tempo para observadores em movimento relativo uniforme (sem aceleração). Formulada por Albert Einstein em 1905, ela revolucionou nossa compreensão do universo ao mostrar que **tempo e espaço não são absolutos** — eles dependem do estado de movimento do observador.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Diferentemente da mecânica clássica de Newton, onde o tempo flui igual para todos e as distâncias são fixas, a Relatividade mostra que relógios em movimento andam mais devagar (dilatação do tempo) e objetos em movimento encolhem (contração do espaço). Estes não são efeitos ilusórios — são propriedades fundamentais do espaço-tempo.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Não Existe Referencial Absoluto:</strong> Não há um ponto "parado" no universo. Todo movimento é relativo a outro referencial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Velocidade da Luz é Constante:</strong> A luz viaja sempre a 300.000 km/s no vácuo, independente do movimento da fonte ou do observador.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Espaço-Tempo Unificado:</strong> Espaço e tempo não são entidades separadas, mas formam um continuum quadridimensional chamado espaço-tempo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Postulados de Einstein - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Postulados de Einstein - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico e Conceitual */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto e Importância Histórica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                No final do século XIX, a física clássica enfrentava uma **crise profunda**. As equações de Maxwell para o eletromagnetismo previam que a luz viajava a uma velocidade fixa, mas em relação a quê? Os físicos acreditavam que a luz precisava de um meio material chamado **éter luminífero** para se propagar, assim como o som precisa do ar.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">🔬 Experimento de Michelson-Morley (1887)</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Albert Michelson e Edward Morley realizaram o experimento mais famoso da história da física: tentaram detectar o movimento da Terra através do éter. A ideia era simples:
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm text-slate-600 space-y-2">
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Hipótese:</span>
                    <span>Se a Terra se move através do éter a 30 km/s, a luz deveria viajar mais rápido em uma direção e mais devagar na direção oposta</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Resultado:</span>
                    <span>A velocidade da luz foi **exatamente a mesma** em todas as direções, independentemente do movimento da Terra</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    <p className="text-slate-700"><strong>Conclusão:</strong> O éter não foi detectado. Este resultado negativo permaneceu inexplicável por quase 20 anos.</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Várias tentativas foram feitas para "salvar" a teoria do éter. Hendrik Lorentz propôs que os objetos em movimento através do éter se contraem na direção do movimento (contração de Lorentz), o que explicaria o resultado nulo. Mas essa explicação era artificial e não tinha base física clara.
              </p>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Em **1905**, Albert Einstein, então um jovem funcionário do escritório de patentes em Berna (Suíça), publicou um artigo revolucionário: **"Sobre a Eletrodinâmica dos Corpos em Movimento"**. Ele não tentou salvar o éter — ele o **aboliu completamente**. Einstein percebeu que o problema não estava nas equações, mas nas **suposições fundamentais** sobre espaço e tempo.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-3">🎯 A Revolução Conceitual de Einstein</h4>
                <p className="text-slate-700 text-sm mb-2">
                  Einstein propôs dois postulados simples que, quando levados às suas consequências lógicas, destroem completamente a física newtoniana:
                </p>
                <ol className="space-y-2 text-sm text-slate-700 ml-4">
                  <li><strong>1.</strong> As leis da física são as mesmas em todos os referenciais inerciais</li>
                  <li><strong>2.</strong> A velocidade da luz no vácuo é a mesma para todos os observadores, independente do movimento da fonte ou do observador</li>
                </ol>
                <p className="text-slate-700 text-sm mt-3">
                  Estes dois postulados, aparentemente simples, levam a conclusões extraordinárias: tempo e espaço devem ser relativos, não absolutos.
                </p>
              </div>
            </div>

            {/* Postulado 1 - DETALHADO */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Postulado 1: Princípio da Relatividade - Explicação Detalhada
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O primeiro postulado de Einstein estende o **Princípio da Relatividade de Galileu** (válido para a mecânica) para **todas as leis da física**, incluindo eletromagnetismo e óptica. Este é um dos pilares da teoria.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Enunciado do Postulado 1</h4>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 p-6 mb-4">
                      <p className="text-lg font-semibold text-slate-900 mb-2">
                        "As leis da física são as mesmas em todos os referenciais inerciais."
                      </p>
                      <p className="text-slate-700 italic text-sm">
                        (Ou: Não existe um referencial privilegiado ou "absoluto" no universo)
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-3 text-slate-800">Significado de cada termo:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Leis da física:</span>
                        <span>Todas as equações que descrevem fenômenos naturais (mecânica, eletromagnetismo, termodinâmica, óptica, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">São as mesmas:</span>
                        <span>Têm a mesma forma matemática, produzem os mesmos resultados experimentais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Referenciais inerciais:</span>
                        <span>Sistemas de coordenadas que se movem com velocidade constante (sem aceleração) em relação uns aos outros</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4" />
                  Interpretação Física Profunda
                </h4>
                <div className="text-slate-700 text-sm space-y-2">
                  <p>
                    O Postulado 1 diz que: <strong>"Se você realizar qualquer experimento dentro de um laboratório em movimento uniforme, os resultados serão idênticos aos obtidos em um laboratório 'parado'"</strong>
                  </p>
                  <p className="bg-white p-3 rounded border border-yellow-200">
                    Isso significa que não há como detectar movimento absoluto — apenas movimento **relativo** entre referenciais. Você pode dizer "estou me movendo a 100 km/h em relação à Terra", mas não pode dizer "estou me movendo a 100 km/h em relação ao espaço absoluto".
                  </p>
                  <p>
                    <strong>Implicação:</strong> O conceito de "repouso absoluto" não tem significado físico. Não podemos dizer que a Terra está "realmente parada" e o Sol está "realmente se movendo" — ambos estão em movimento relativo.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo Cotidiano</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Quando você está em um avião em cruzeiro (velocidade constante), pode jogar uma bola para cima e ela cai de volta na sua mão — exatamente como se estivesse no chão. A bola não "fica para trás" porque o avião está se movendo a 900 km/h.
                </p>
                <p className="text-slate-700 text-sm">
                  Do ponto de vista de quem está dentro do avião, as leis da mecânica funcionam normalmente. Você não consegue detectar o movimento do avião sem olhar para fora — todas as experiências físicas dão os mesmos resultados.
                </p>
              </div>
            </div>

            {/* Postulado 2 - DETALHADO */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Postulado 2: Constância da Velocidade da Luz - Explicação Detalhada
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O segundo postulado é o **mais revolucionário e contra-intuitivo** da Relatividade. Ele contradiz completamente nossa experiência cotidiana com velocidades e é a chave para entender todos os efeitos relativísticos.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Enunciado do Postulado 2</h4>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 p-6 mb-4">
                      <p className="text-lg font-semibold text-slate-900 mb-2">
                        "A velocidade da luz no vácuo é a mesma em todos os referenciais inerciais, independentemente do movimento da fonte ou do observador."
                      </p>
                      <p className="text-slate-700 italic text-sm mt-2">
                        (Matematicamente: <MathFormula inline>{`c = 299.792.458 \\text{ m/s}`}</MathFormula> = constante universal)
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-3 text-slate-800">Significado de cada termo:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Velocidade da luz no vácuo (c):</span>
                        <span>299.792.458 m/s (aproximadamente 300.000 km/s) — a velocidade máxima possível no universo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">É a mesma:</span>
                        <span>Tem exatamente o mesmo valor numérico para todos os observadores</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Em todos os referenciais inerciais:</span>
                        <span>Não importa se você está parado, movendo-se a 1 km/s ou a 99% da velocidade da luz — você sempre medirá c = 300.000 km/s</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Independente da fonte:</span>
                        <span>A velocidade da luz não depende da velocidade da lanterna que a emitiu</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-purple-600 min-w-fit">Independente do observador:</span>
                        <span>A velocidade da luz não depende da velocidade de quem a mede</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-red-800 flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  Contradição com a Intuição Clássica
                </h4>
                <div className="text-slate-700 text-sm space-y-2">
                  <p className="mb-2">
                    Na mecânica clássica (Galileu/Newton), velocidades se **somam**. Se você está em um carro a 100 km/h e joga uma bola para frente a 50 km/h, a bola se move a 150 km/h em relação ao chão.
                  </p>
                  <p className="bg-white p-3 rounded border border-red-200 mb-2">
                    **Mas com a luz, isso não acontece!** Se você está em uma nave espacial a 200.000 km/s e acende uma lanterna para frente, a luz **não** viaja a 500.000 km/s (200.000 + 300.000). Ela viaja a exatamente **300.000 km/s**, tanto para você quanto para um observador "parado".
                  </p>
                  <p>
                    Isso parece impossível, mas é exatamente o que acontece na natureza e foi confirmado por inúmeros experimentos.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4" />
                  Como Isso É Possível?
                </h4>
                <div className="text-slate-700 text-sm space-y-2">
                  <p>
                    A única maneira de conciliar os dois postulados é abandonar a ideia de que tempo e espaço são absolutos. Se a velocidade da luz é sempre <MathFormula inline>{`c = \\frac{\\text{distância}}{\\text{tempo}}`}</MathFormula>, e <MathFormula inline>c</MathFormula> é constante, então **distância e tempo precisam variar** de forma coordenada para diferentes observadores.
                  </p>
                  <p className="bg-white p-3 rounded border border-yellow-200">
                    Esta é a origem da **dilatação do tempo** (relógios em movimento andam mais devagar) e da **contração do espaço** (objetos em movimento encolhem na direção do movimento). Não são efeitos ilusórios — são propriedades fundamentais do espaço-tempo.
                  </p>
                </div>
              </div>
            </div>

            {/* Consequências dos Postulados */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Consequências Revolucionárias dos Postulados
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Os dois postulados de Einstein, quando levados às suas consequências lógicas, produzem resultados extraordinários que destroem completamente a física newtoniana. Vamos explorar as quatro consequências principais:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-6">
                  {/* Dilatação do Tempo */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">1. Dilatação do Tempo</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Relógios em movimento andam mais devagar em relação a relógios "parados". Um astronauta viajando a 90% da velocidade da luz envelhece mais devagar que alguém na Terra.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 mb-3">
                      <MathFormula>{`\\Delta t' = \\gamma \\Delta t \\quad \\text{onde} \\quad \\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}`}</MathFormula>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded p-3">
                      <p className="font-semibold text-purple-900 text-sm mb-2">Termo-a-Termo:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li><MathFormula inline>{`\\Delta t'`}</MathFormula>: Tempo medido pelo observador em movimento (tempo dilatado)</li>
                        <li><MathFormula inline>{`\\Delta t`}</MathFormula>: Tempo próprio (medido no referencial em repouso em relação ao evento)</li>
                        <li><MathFormula inline>{`\\gamma`}</MathFormula>: Fator de Lorentz (sempre ≥ 1)</li>
                        <li><MathFormula inline>v</MathFormula>: Velocidade relativa entre os referenciais</li>
                        <li><MathFormula inline>c</MathFormula>: Velocidade da luz (300.000 km/s)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Contração do Espaço */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">2. Contração do Espaço (Contração de Lorentz)</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Objetos em movimento encolhem na direção do movimento. Uma nave de 100 m viajando a 90% de <MathFormula inline>c</MathFormula> tem apenas 43,6 m de comprimento para um observador externo.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 mb-3">
                      <MathFormula>{`L' = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - v^2/c^2}`}</MathFormula>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded p-3">
                      <p className="font-semibold text-purple-900 text-sm mb-2">Termo-a-Termo:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li><MathFormula inline>{`L'`}</MathFormula>: Comprimento medido pelo observador externo (comprimento contraído)</li>
                        <li><MathFormula inline>{`L_0`}</MathFormula>: Comprimento próprio (medido no referencial em repouso em relação ao objeto)</li>
                        <li><MathFormula inline>{`\\gamma`}</MathFormula>: Fator de Lorentz</li>
                        <li>Nota: A contração ocorre **apenas na direção do movimento**. Dimensões perpendiculares não mudam.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Relatividade da Simultaneidade */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">3. Relatividade da Simultaneidade</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Eventos que são simultâneos para um observador podem não ser simultâneos para outro em movimento. O conceito de "agora" é relativo!
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100">
                      <p className="text-slate-700 text-sm mb-2">
                        <strong>Exemplo:</strong> Dois relâmpagos que caem "ao mesmo tempo" para você (na Terra) podem cair em momentos diferentes para alguém em uma nave espacial em movimento. O observador na nave pode ver o relâmpago da frente primeiro e o de trás depois.
                      </p>
                      <p className="text-slate-700 text-sm">
                        Isso não é uma ilusão de percepção — é uma propriedade fundamental do espaço-tempo. Não existe um "agora" universal.
                      </p>
                    </div>
                  </div>

                  {/* Equivalência Massa-Energia */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">4. Equivalência Massa-Energia (E=mc²)</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Massa e energia são duas formas da mesma coisa. A famosa equação <MathFormula inline>{`E = mc^2`}</MathFormula> mostra que uma pequena quantidade de massa contém energia enorme.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 mb-3">
                      <MathFormula>{`E = mc^2`}</MathFormula>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded p-3">
                      <p className="font-semibold text-purple-900 text-sm mb-2">Termo-a-Termo:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li><MathFormula inline>E</MathFormula>: Energia equivalente à massa (joules)</li>
                        <li><MathFormula inline>m</MathFormula>: Massa do objeto (kg)</li>
                        <li><MathFormula inline>c</MathFormula>: Velocidade da luz (3×10⁸ m/s)</li>
                        <li>Como <MathFormula inline>{`c^2`}</MathFormula> é enorme (9×10¹⁶ m²/s²), uma pequena massa produz energia gigantesca</li>
                      </ul>
                      <p className="text-slate-700 text-xs mt-2">
                        <strong>Aplicação:</strong> Energia nuclear (fissão e fusão), aniquilação matéria-antimatéria, energia das estrelas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Quando os Efeitos São Perceptíveis?</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Os efeitos relativísticos só são perceptíveis quando a velocidade é uma fração significativa da velocidade da luz:
                    </p>
                    <ul className="text-sm text-orange-700 space-y-1 ml-4">
                      <li>• A 10% de c (30.000 km/s): γ ≈ 1,005 (0,5% de efeito)</li>
                      <li>• A 50% de c (150.000 km/s): γ ≈ 1,15 (15% de efeito)</li>
                      <li>• A 90% de c (270.000 km/s): γ ≈ 2,29 (129% de efeito!)</li>
                      <li>• A 99,9% de c: γ ≈ 22,4 (2.140% de efeito!)</li>
                    </ul>
                    <p className="text-sm text-orange-700 mt-2">
                      Para velocidades cotidianas (carros, aviões), os efeitos são desprezíveis. Por isso a física newtoniana funciona bem no dia a dia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo para Resolver Problemas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Passo-a-Passo: Como Resolver Problemas de Relatividade
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Resolver problemas de Relatividade Restrita requer uma abordagem sistemática. Siga estes passos para garantir que você está aplicando os conceitos corretamente:
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-purple-900 mb-3">🎯 Método Sistemático</h4>
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span><strong>Identifique os referenciais inerciais.</strong> Determine quais são os sistemas de referência envolvidos no problema. Exemplo: Terra (referencial S) e nave espacial (referencial S') movendo-se com velocidade <MathFormula inline>v</MathFormula> constante.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span><strong>Escolha um referencial como "parado".</strong> Por convenção, escolha um referencial como S (geralmente o observador na Terra ou no laboratório). O outro referencial S' está em movimento com velocidade <MathFormula inline>v</MathFormula> em relação a S.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span><strong>Calcule o fator de Lorentz (γ).</strong> Este fator aparece em todas as equações relativísticas: <MathFormula inline>{`\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}`}</MathFormula></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span><strong>Identifique o tipo de problema.</strong> É dilatação do tempo? Contração do espaço? Transformação de coordenadas? Escolha a fórmula apropriada.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span><strong>Identifique o tempo/comprimento próprio.</strong> Tempo próprio é medido no referencial em repouso em relação ao evento. Comprimento próprio é medido no referencial em repouso em relação ao objeto.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 6:</span>
                    <span><strong>Aplique a fórmula correta.</strong> Use <MathFormula inline>{`\\Delta t' = \\gamma \\Delta t`}</MathFormula> para dilatação do tempo ou <MathFormula inline>{`L' = L_0/\\gamma`}</MathFormula> para contração do espaço.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 7:</span>
                    <span><strong>Verifique a consistência.</strong> Sempre confirme que a velocidade da luz é a mesma em ambos os referenciais. Se você obtiver <MathFormula inline>{`c' \\neq c`}</MathFormula>, há um erro no cálculo.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">🔍 Dicas Importantes</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="font-bold text-blue-700 mb-1">1. Tempo Próprio vs Tempo Dilatado</p>
                    <p>O tempo próprio é sempre o **menor** tempo medido. Se um evento ocorre no mesmo lugar no referencial S, então S mede o tempo próprio. Todos os outros referenciais em movimento medem tempos maiores.</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="font-bold text-blue-700 mb-1">2. Comprimento Próprio vs Comprimento Contraído</p>
                    <p>O comprimento próprio é sempre o **maior** comprimento medido. Se um objeto está em repouso no referencial S, então S mede o comprimento próprio. Todos os outros referenciais em movimento medem comprimentos menores.</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="font-bold text-blue-700 mb-1">3. Fator de Lorentz</p>
                    <p>γ é sempre ≥ 1. Para velocidades baixas (v ≪ c), γ ≈ 1 e os efeitos relativísticos são desprezíveis. Para v → c, γ → ∞.</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="font-bold text-blue-700 mb-1">4. Contração Apenas na Direção do Movimento</p>
                    <p>A contração de Lorentz ocorre apenas na direção paralela ao movimento. Dimensões perpendiculares não mudam.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Aplicações Práticas no Mundo Real
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Relatividade Restrita não é apenas uma teoria abstrata — ela tem aplicações práticas fundamentais na tecnologia moderna. Vamos explorar algumas aplicações importantes:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">1. GPS e Navegação por Satélite</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Os satélites GPS orbitam a 20.000 km de altitude a 14.000 km/h. Devido à dilatação do tempo relativística, os relógios atômicos nos satélites **atrasam 7 microssegundos por dia** em relação aos relógios na Terra.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100">
                      <p className="text-slate-700 text-sm mb-2">
                        <strong>Cálculo do erro:</strong> Sem correção relativística, o GPS acumularia um erro de posição de **10 km por dia**! Isso tornaria o GPS completamente inútil para navegação.
                      </p>
                      <p className="text-slate-700 text-sm">
                        Os engenheiros precisam programar os satélites para compensar esse efeito, fazendo os relógios dos satélites "andarem mais rápido" para sincronizar com a Terra.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">2. Aceleradores de Partículas (LHC)</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      No Large Hadron Collider (LHC), prótons são acelerados a **99,9999991% da velocidade da luz**. Nessa velocidade, γ ≈ 7.500!
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100">
                      <p className="text-slate-700 text-sm mb-2">
                        <strong>Efeito observado:</strong> Múons (partículas instáveis que deveriam decair em 2,2 microssegundos) vivem **30 vezes mais** devido à dilatação do tempo. Isso permite sua detecção nos detectores.
                      </p>
                      <p className="text-slate-700 text-sm">
                        Sem a Relatividade, não conseguiríamos explicar por que essas partículas chegam aos detectores antes de decair.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">3. Energia Nuclear (Fissão e Fusão)</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      A equação <MathFormula inline>{`E = mc^2`}</MathFormula> explica como usinas nucleares e bombas atômicas funcionam. Quando um núcleo de urânio-235 sofre fissão, perde **0,1% de sua massa** — essa massa é convertida em energia gigantesca.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100">
                      <p className="text-slate-700 text-sm mb-2">
                        <strong>Cálculo:</strong> 1 kg de urânio-235 completamente fissionado libera energia equivalente a **20.000 toneladas de TNT**.
                      </p>
                      <p className="text-slate-700 text-sm">
                        Essa é a base das usinas nucleares, que fornecem ~10% da eletricidade mundial.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">4. Fusão Solar e Energia das Estrelas</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      O Sol converte **4 milhões de toneladas de massa em energia a cada segundo** através de fusão nuclear. Essa energia (luz e calor) é o que mantém a vida na Terra.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-100">
                      <p className="text-slate-700 text-sm">
                        Sem <MathFormula inline>{`E = mc^2`}</MathFormula>, não entenderíamos como o Sol brilha há 4,6 bilhões de anos. A física clássica previa que o Sol deveria ter se apagado há milhões de anos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Próximos Tópicos */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">Próximos Tópicos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Transformações de Lorentz</h3>
              <p className="text-slate-600 text-sm">
                Dedução completa das equações que relacionam coordenadas e tempos entre referenciais em movimento.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Paradoxo dos Gêmeos</h3>
              <p className="text-slate-600 text-sm">
                Análise detalhada do famoso paradoxo e resolução usando diagramas de espaço-tempo.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Adição Relativística de Velocidades</h3>
              <p className="text-slate-600 text-sm">
                Como somar velocidades corretamente na Relatividade (não é simplesmente v₁ + v₂).
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Energia e Momento Relativísticos</h3>
              <p className="text-slate-600 text-sm">
                Derivação de E=mc², energia cinética relativística e momento relativístico.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
