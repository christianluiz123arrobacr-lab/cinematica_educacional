import { Link } from "wouter";
import { ArrowLeft, Atom, Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
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
              <Atom className="w-6 h-6 text-white" />
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Relatividade Restrita</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é a Relatividade Restrita?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Relatividade Restrita</strong> é a teoria física que descreve o comportamento do espaço e do tempo para observadores em movimento relativo uniforme (sem aceleração). Pense em dois trens passando um pelo outro: cada passageiro vê o outro trem se movendo, mas ambos estão "parados" dentro de seus próprios trens. A Relatividade mostra que <strong>tempo e espaço não são absolutos</strong> — eles dependem do estado de movimento do observador.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Formulada por Albert Einstein em 1905, ela revolucionou nossa compreensão do universo ao mostrar que relógios em movimento andam mais devagar (dilatação do tempo) e objetos em movimento encolhem (contração do espaço). Estes não são efeitos ilusórios — são propriedades fundamentais do espaço-tempo.
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

        {/* Postulados de Einstein */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Postulados de Einstein</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Contexto Histórico
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                No final do século XIX, a física clássica enfrentava uma <strong>crise profunda</strong>. As equações de Maxwell previam que a luz viajava a uma velocidade fixa, mas em relação a quê? Os físicos acreditavam que a luz precisava de um meio material chamado <strong>éter luminífero</strong> para se propagar.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Em <strong>1887</strong>, Albert Michelson e Edward Morley realizaram o experimento mais famoso da história da física: tentaram detectar o movimento da Terra através do éter. O resultado foi surpreendente: <strong>a velocidade da luz foi exatamente a mesma em todas as direções</strong>, independentemente do movimento da Terra. O éter não foi detectado.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Em <strong>1905</strong>, Albert Einstein, então um jovem funcionário do escritório de patentes em Berna (Suíça), publicou um artigo revolucionário: <strong>"Sobre a Eletrodinâmica dos Corpos em Movimento"</strong>. Ele não tentou salvar o éter — ele o <strong>aboliu completamente</strong>. Einstein percebeu que o problema não estava nas equações, mas nas <strong>suposições fundamentais</strong> sobre espaço e tempo.
              </p>
            </div>

            {/* Postulado 1 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">1</span>
                Primeiro Postulado: Princípio da Relatividade
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Imagine que você está em um avião em cruzeiro (velocidade constante). Você pode jogar uma bola para cima e ela cai de volta na sua mão — exatamente como se estivesse no chão. A bola não "fica para trás" porque o avião está se movendo a 900 km/h.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Do ponto de vista de quem está dentro do avião, as leis da física funcionam normalmente. Você não consegue detectar o movimento do avião sem olhar para fora — todas as experiências físicas dão os mesmos resultados.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Regra fundamental:</strong> Não existe um referencial "absoluto" ou "privilegiado" no universo. Apenas movimento <strong>relativo</strong> entre referenciais tem significado físico.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Enunciado do Primeiro Postulado</h4>
                <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
                  <p className="text-lg text-slate-100 italic">
                    "As leis da física são as mesmas em todos os referenciais inerciais."
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-400 mb-2">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><strong>Leis da física:</strong> Todas as equações que descrevem fenômenos naturais (mecânica, eletromagnetismo, termodinâmica)</li>
                      <li><strong>São as mesmas:</strong> Têm a mesma forma matemática, produzem os mesmos resultados experimentais</li>
                      <li><strong>Referenciais inerciais:</strong> Sistemas de coordenadas que se movem com velocidade constante (sem aceleração)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-400 mb-2">Implicações:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>Não podemos detectar movimento absoluto</li>
                      <li>Apenas movimento relativo tem significado</li>
                      <li>Não existe um referencial "parado" no universo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔍 Interpretação Física</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Extensão de Galileu:</strong> Este postulado estende o Princípio da Relatividade de Galileu (válido para mecânica) para <strong>todas as leis da física</strong>, incluindo eletromagnetismo e óptica.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Equivalência de Referenciais:</strong> Se você realizar qualquer experimento dentro de um laboratório em movimento uniforme, os resultados serão idênticos aos obtidos em um laboratório "parado".</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Impossibilidade de Detecção:</strong> Não há como detectar movimento absoluto — apenas movimento relativo entre referenciais. Você pode dizer "estou me movendo a 100 km/h em relação à Terra", mas não "estou me movendo a 100 km/h em relação ao espaço absoluto".</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Postulado 2 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">2</span>
                Segundo Postulado: Constância da Velocidade da Luz
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Na mecânica clássica (Galileu/Newton), velocidades se <strong>somam</strong>. Se você está em um carro a 100 km/h e joga uma bola para frente a 50 km/h, a bola se move a 150 km/h em relação ao chão.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Mas com a luz, isso não acontece!</strong> Se você está em uma nave espacial a 200.000 km/s e acende uma lanterna para frente, a luz <strong>não</strong> viaja a 500.000 km/s (200.000 + 300.000). Ela viaja a exatamente <strong>300.000 km/s</strong>, tanto para você quanto para um observador "parado".
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Regra fundamental:</strong> A velocidade da luz no vácuo é uma <strong>constante universal</strong>. Ela não depende do movimento da fonte nem do observador.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Enunciado do Segundo Postulado</h4>
                <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
                  <p className="text-lg text-slate-100 italic mb-4">
                    "A velocidade da luz no vácuo é a mesma em todos os referenciais inerciais, independentemente do movimento da fonte ou do observador."
                  </p>
                  <MathFormula formula="c = 299{,}792{,}458 \text{ m/s} = \text{constante universal}" display={true} className="text-xl" />
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><MathFormula formula="c" display={false} />: <strong>Velocidade da luz no vácuo</strong> (299.792.458 m/s ≈ 300.000 km/s)</li>
                    <li><strong>É a mesma:</strong> Tem exatamente o mesmo valor numérico para todos os observadores</li>
                    <li><strong>Em todos os referenciais inerciais:</strong> Não importa se você está parado ou movendo-se a 99% da velocidade da luz</li>
                    <li><strong>Independente da fonte:</strong> A velocidade da luz não depende da velocidade da lanterna que a emitiu</li>
                    <li><strong>Independente do observador:</strong> A velocidade da luz não depende da velocidade de quem a mede</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Contradição com a Intuição Clássica
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Este postulado contradiz completamente nossa experiência cotidiana com velocidades. Na mecânica newtoniana, se você está em um carro a 100 km/h e joga uma bola para frente a 50 km/h, a bola se move a 150 km/h em relação ao chão.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Com a luz:</strong> Se você está em uma nave a 200.000 km/s e acende uma lanterna, a luz <strong>não</strong> viaja a 500.000 km/s. Ela viaja a exatamente <MathFormula formula="c = 300{,}000" display={false} /> km/s para você e para qualquer observador!
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">🔍 Como Isso É Possível?</h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  A única maneira de conciliar os dois postulados é abandonar a ideia de que tempo e espaço são absolutos. Se a velocidade da luz é sempre <MathFormula formula="c = \frac{\text{distância}}{\text{tempo}}" display={false} />, e <MathFormula formula="c" display={false} /> é constante, então <strong>distância e tempo precisam variar</strong> de forma coordenada para diferentes observadores.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Esta é a origem da <strong>dilatação do tempo</strong> (relógios em movimento andam mais devagar) e da <strong>contração do espaço</strong> (objetos em movimento encolhem na direção do movimento). Não são efeitos ilusórios — são propriedades fundamentais do espaço-tempo.
                </p>
              </div>
            </div>

            {/* Consequências */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">3</span>
                Consequências Revolucionárias
              </h3>
              
              <div className="space-y-6">
                {/* Fator de Lorentz */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                  <h4 className="font-semibold text-purple-400 mb-3">Fator de Lorentz (γ)</h4>
                  <MathFormula formula="\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}" display={true} className="text-2xl mb-6" />
                  
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="\gamma" display={false} /> (gama): <strong>Fator de Lorentz</strong> — mede o quanto o tempo dilata e o espaço contrai</li>
                      <li><MathFormula formula="v" display={false} />: <strong>Velocidade</strong> do objeto em movimento (em m/s)</li>
                      <li><MathFormula formula="c" display={false} />: <strong>Velocidade da luz</strong> (299.792.458 m/s)</li>
                      <li><MathFormula formula="v/c" display={false} />: <strong>Fração da velocidade da luz</strong> (adimensional, entre 0 e 1)</li>
                    </ul>
                  </div>
                </div>

                {/* Dilatação do Tempo */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                  <h4 className="font-semibold text-purple-400 mb-3">Dilatação do Tempo</h4>
                  <MathFormula formula="\Delta t' = \gamma \Delta t \quad \text{onde} \quad \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}" display={true} className="text-2xl mb-6" />
                  
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="\Delta t'" display={false} />: <strong>Tempo medido pelo observador em repouso</strong> (tempo "dilatado")</li>
                      <li><MathFormula formula="\Delta t" display={false} />: <strong>Tempo próprio</strong> (medido no referencial em movimento)</li>
                      <li><MathFormula formula="\gamma" display={false} />: <strong>Fator de Lorentz</strong> (sempre ≥ 1)</li>
                      <li><MathFormula formula="v" display={false} />: Velocidade relativa entre os referenciais</li>
                      <li><MathFormula formula="c" display={false} />: Velocidade da luz</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4" />
                    Interpretação da Dilatação do Tempo
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Se um astronauta viaja a 0,9c (90% da velocidade da luz), para ele 1 hora passa normalmente. Mas para um observador na Terra, esse mesmo intervalo corresponde a <MathFormula formula="\gamma \approx 2{,}29" display={false} /> horas (aproximadamente 2 horas e 17 minutos). O relógio do astronauta "anda mais devagar" em relação ao relógio da Terra.
                  </p>
                </div>

                {/* Contração do Espaço */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                  <h4 className="font-semibold text-purple-400 mb-3">Contração do Espaço (Lorentz)</h4>
                  <MathFormula formula="L' = \frac{L_0}{\gamma} = L_0 \sqrt{1 - v^2/c^2}" display={true} className="text-2xl mb-6" />
                  
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="L'" display={false} />: <strong>Comprimento medido pelo observador em repouso</strong> (comprimento "contraído")</li>
                      <li><MathFormula formula="L_0" display={false} />: <strong>Comprimento próprio</strong> (medido no referencial em movimento)</li>
                      <li><MathFormula formula="\gamma" display={false} />: <strong>Fator de Lorentz</strong> (sempre ≥ 1)</li>
                    </ul>
                  </div>
                </div>

                {/* E=mc² */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                  <h4 className="font-semibold text-purple-400 mb-3">Equivalência Massa-Energia</h4>
                  <MathFormula formula="E = mc^2" display={true} className="text-3xl mb-6" />
                  
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="E" display={false} />: <strong>Energia total</strong> da partícula em repouso (em Joules, J)</li>
                      <li><MathFormula formula="m" display={false} />: <strong>Massa</strong> da partícula (em kg)</li>
                      <li><MathFormula formula="c" display={false} />: <strong>Velocidade da luz</strong> (299.792.458 m/s)</li>
                      <li><MathFormula formula="c^2" display={false} />: <strong>Fator de conversão</strong> ≈ 9 × 10¹⁶ m²/s² (imenso!)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">🔍 Interpretação de E=mc²</h4>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">1.</span>
                      <p><strong>Massa é Energia Concentrada:</strong> Massa e energia são duas formas da mesma coisa. Uma pequena quantidade de massa contém uma quantidade enorme de energia.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">2.</span>
                      <p><strong>Conversão Massa-Energia:</strong> Em reações nucleares (fissão, fusão), uma pequena fração da massa é convertida em energia. Por exemplo, 1 kg de matéria contém <MathFormula formula="E = (1)(9 \times 10^{16}) = 9 \times 10^{16}" display={false} /> J — energia suficiente para abastecer uma cidade por meses!</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">3.</span>
                      <p><strong>Limite de Velocidade:</strong> À medida que um objeto acelera, sua energia cinética aumenta. Para atingir a velocidade da luz, seria necessária energia infinita — por isso nenhum objeto com massa pode atingir <MathFormula formula="c" display={false} />.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">4</span>
                Passo-a-Passo: Resolvendo Problemas de Relatividade
              </h3>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-4">Como Resolver Problemas Relativísticos</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-slate-800">Identifique os referenciais</p>
                      <p className="text-slate-600 text-sm">Determine qual é o referencial "em repouso" e qual está "em movimento". Lembre-se: movimento é relativo!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-slate-800">Calcule a velocidade relativa</p>
                      <p className="text-slate-600 text-sm">Determine a velocidade <MathFormula formula="v" display={false} /> entre os dois referenciais. Expresse como fração da velocidade da luz (<MathFormula formula="v/c" display={false} />).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-slate-800">Calcule o fator de Lorentz</p>
                      <p className="text-slate-600 text-sm">Use <MathFormula formula="\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}" display={false} />. Se <MathFormula formula="v \ll c" display={false} /> (muito menor que c), então <MathFormula formula="\gamma \approx 1" display={false} /> e efeitos relativísticos são desprezíveis.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-slate-800">Escolha a fórmula apropriada</p>
                      <p className="text-slate-600 text-sm">Para tempo: <MathFormula formula="\Delta t' = \gamma \Delta t" display={false} />. Para comprimento: <MathFormula formula="L' = L_0 / \gamma" display={false} />. Para energia: <MathFormula formula="E = mc^2" display={false} /> ou <MathFormula formula="E = \gamma mc^2" display={false} /> (energia total).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="font-semibold text-slate-800">Substitua os valores</p>
                      <p className="text-slate-600 text-sm">Insira os valores numéricos na fórmula. Use <MathFormula formula="c = 3 \times 10^8" display={false} /> m/s.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                    <div>
                      <p className="font-semibold text-slate-800">Calcule o resultado</p>
                      <p className="text-slate-600 text-sm">Realize os cálculos e interprete o resultado fisicamente. Verifique se faz sentido: <MathFormula formula="\gamma \geq 1" display={false} />, <MathFormula formula="L' \leq L_0" display={false} />, <MathFormula formula="\Delta t' \geq \Delta t" display={false} />.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                    <div>
                      <p className="font-semibold text-slate-800">Interprete o resultado</p>
                      <p className="text-slate-600 text-sm">Explique o significado físico: "O relógio em movimento anda X vezes mais devagar" ou "O comprimento se contrai para Y% do valor original".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">5</span>
                Aplicações Práticas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    GPS (Sistema de Posicionamento Global)
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Os satélites GPS orbitam a Terra a 20.000 km de altitude, movendo-se a cerca de 14.000 km/h. Devido à dilatação do tempo relativística, os relógios atômicos nos satélites andam mais devagar que os relógios na Terra. Sem correções relativísticas, o GPS acumularia erros de <strong>10 km por dia</strong>!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Aceleradores de Partículas (LHC)
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    No Large Hadron Collider (LHC), prótons são acelerados a 99,9999991% da velocidade da luz. Nessa velocidade, <MathFormula formula="\gamma \approx 7{,}500" display={false} />, e a massa efetiva dos prótons aumenta 7.500 vezes! A Relatividade é essencial para projetar os ímãs que curvam a trajetória das partículas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Energia Nuclear
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    A equação <MathFormula formula="E = mc^2" display={false} /> explica por que reações nucleares liberam tanta energia. Na fissão de 1 kg de urânio-235, apenas 0,1% da massa é convertida em energia — mas isso produz <strong>8 × 10¹³ J</strong>, equivalente a 20.000 toneladas de TNT!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-green-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Fusão Solar
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    O Sol converte 4 milhões de toneladas de massa em energia a cada segundo através de fusão nuclear (4 prótons → 1 hélio). A energia liberada (<MathFormula formula="E = mc^2" display={false} />) é o que mantém o Sol brilhando há 4,6 bilhões de anos e continuará por mais 5 bilhões!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Observações Finais */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-600 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">🎯 Resumo dos Postulados</h3>
          <div className="space-y-3 text-slate-800">
            <p className="leading-relaxed">
              <strong>1. Princípio da Relatividade:</strong> As leis da física são as mesmas em todos os referenciais inerciais. Não existe movimento absoluto.
            </p>
            <p className="leading-relaxed">
              <strong>2. Constância da Luz:</strong> A velocidade da luz no vácuo (<MathFormula formula="c = 300{,}000" display={false} /> km/s) é a mesma para todos os observadores, independente do movimento.
            </p>
            <p className="leading-relaxed">
              <strong>Consequências:</strong> Dilatação do tempo (<MathFormula formula="\Delta t' = \gamma \Delta t" display={false} />), contração do espaço (<MathFormula formula="L' = L_0/\gamma" display={false} />), e equivalência massa-energia (<MathFormula formula="E = mc^2" display={false} />).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
