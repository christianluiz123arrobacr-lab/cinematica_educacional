import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicCamposMagneticos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletromagnetismo">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletromagnetismo</h1>
              <p className="text-xs text-slate-600">Campos Magnéticos</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧲 Introdução aos Campos Magnéticos</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é um Campo Magnético?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Campo magnético</strong> é uma propriedade do espaço que exerce força sobre cargas elétricas em movimento e sobre materiais magnetizados. Diferentemente do campo elétrico, que atua sobre cargas em repouso, o campo magnético é uma manifestação da eletricidade em movimento.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Toda corrente elétrica gera um campo magnético ao seu redor. Este é um dos princípios fundamentais do eletromagnetismo e forma a base para transformadores, motores elétricos, geradores e praticamente toda a tecnologia moderna.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Propriedades Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Não-existência de Monopolos Magnéticos:</strong> Não existem cargas magnéticas isoladas. Sempre há um par norte-sul, mesmo ao dividir um ímã.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Linhas de Campo:</strong> As linhas de campo magnético saem do pólo norte e entram no pólo sul, formando loops fechados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Geração por Corrente:</strong> Qualquer corrente elétrica cria um campo magnético perpendicular à direção da corrente (Regra da Mão Direita).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lei de Ampère - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Ampère - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico e Conceitual */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto e Importância Histórica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère, formulada por André-Marie Ampère em 1826, é um dos pilares do eletromagnetismo clássico. Ela estabelece uma relação fundamental entre <strong>correntes elétricas</strong> (movimento de cargas) e <strong>campos magnéticos</strong>. Diferentemente da Lei de Coulomb, que relaciona cargas estacionárias ao campo elétrico, a Lei de Ampère mostra que <strong>cargas em movimento (correntes) criam campos magnéticos</strong>.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">🔗 Analogia com a Lei de Gauss</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Para facilitar a compreensão, compare a Lei de Ampère com a Lei de Gauss (que você já conhece):
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm text-slate-600 space-y-2">
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Lei de Gauss:</span>
                    <span>Fluxo elétrico através de uma superfície fechada = carga envolvida</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Lei de Ampère:</span>
                    <span>Circulação magnética ao redor de um caminho fechado = corrente envolvida</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    <p className="text-slate-700"><strong>Diferença crucial:</strong> Gauss usa uma superfície fechada (3D), Ampère usa um caminho fechado (1D). Mas ambas relacionam uma propriedade do campo com suas fontes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulação Integral - DETALHADA */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Formulação Integral - Explicação Detalhada
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère em sua forma integral relaciona a <strong>circulação do campo magnético</strong> ao redor de um caminho fechado com a <strong>corrente total</strong> que passa através da superfície delimitada por esse caminho. Esta é uma das quatro equações de Maxwell.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Forma Integral da Lei de Ampère</h4>
                    <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}" display={true} className="text-2xl mb-4" />
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-3 text-slate-800">Significado de cada termo:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 min-w-fit">∮:</span>
                        <span><strong>Integral de linha fechada</strong> - você percorre um caminho fechado (como um círculo) e integra ao longo desse caminho</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 min-w-fit">B⃗·dl⃗:</span>
                        <span><strong>Produto escalar</strong> - você multiplica a componente do campo magnético na direção do caminho pelo comprimento infinitesimal do caminho</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 min-w-fit">μ₀:</span>
                        <span><strong>Permeabilidade do vácuo</strong> = 4π × 10⁻⁷ T·m/A. É a "força" com que a corrente gera campo magnético</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 min-w-fit">I_enc:</span>
                        <span><strong>Corrente envolvida</strong> - a corrente total que passa através da superfície delimitada pelo caminho fechado</span>
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
                    A Lei de Ampère diz que: <strong>"A circulação do campo magnético ao redor de um caminho fechado é proporcional à corrente que passa através desse caminho"</strong>
                  </p>
                  <p className="bg-white p-3 rounded border border-yellow-200">
                    Isso significa que se você traçar um círculo ao redor de um fio que transporta corrente, a soma de todas as componentes do campo magnético ao longo do círculo será proporcional à corrente no fio.
                  </p>
                  <p>
                    <strong>Implicação:</strong> Correntes elétricas são as únicas fontes de campo magnético (em eletrostática). Sem corrente, não há campo magnético.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-purple-900 mb-3">🎯 Passo a Passo: Como Aplicar a Lei de Ampère</h4>
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span>Escolha um caminho fechado (amperiano) que tenha simetria com o problema. Geralmente é um círculo ao redor do fio.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span>Determine a direção do caminho usando a regra da mão direita: polegar na direção da corrente, dedos na direção do caminho.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span>Calcule a integral de linha. Se B é constante ao longo do caminho: <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = B \cdot (2\pi r)" display={false} /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span>Identifique a corrente envolvida pelo caminho.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span>Aplique a Lei de Ampère: <MathFormula formula="B \cdot (2\pi r) = \mu_0 I_{enc}" display={false} /> e resolva para B.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Dedução da Fórmula para Fio Reto */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Dedução: Campo em um Fio Reto Infinito
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Vamos deduzir a fórmula do campo magnético ao redor de um fio reto que transporta corrente I. Esta é uma aplicação clássica da Lei de Ampère que demonstra seu poder.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 1: Simetria do Problema</h4>
                    <p className="text-slate-700 text-sm mb-3">
                      Um fio reto infinito tem simetria cilíndrica. O campo magnético deve:
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      <li>• Ter a mesma magnitude em todos os pontos à mesma distância r do fio</li>
                      <li>• Ser tangente aos círculos concêntricos ao redor do fio (não radial)</li>
                      <li>• Formar loops fechados ao redor do fio</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 2: Escolher o Caminho Amperiano</h4>
                    <p className="text-slate-700 text-sm">
                      Escolhemos um círculo de raio r, concêntrico ao fio. Ao longo deste caminho, B é constante em magnitude e paralelo ao caminho.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 3: Calcular a Integral de Linha</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Como B é constante e paralelo ao caminho:
                    </p>
                    <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = B \oint d\vec{l} = B \cdot (2\pi r)" display={true} />
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 4: Aplicar a Lei de Ampère</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      A corrente envolvida pelo caminho é I:
                    </p>
                    <MathFormula formula="B \cdot (2\pi r) = \mu_0 I" display={true} />
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-900 mb-3">Resultado Final</h4>
                    <MathFormula formula="B = \frac{\mu_0 I}{2\pi r}" display={true} className="text-xl mb-3" />
                    <p className="text-slate-700 text-sm">
                      Este é o campo magnético a uma distância r de um fio reto infinito que transporta corrente I.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Características Importantes
                </h4>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li>• O campo é <strong>inversamente proporcional</strong> à distância: <MathFormula formula="B \propto 1/r" display={false} /></li>
                  <li>• A direção é dada pela <strong>Regra da Mão Direita</strong>: polegar na direção da corrente, dedos na direção do campo</li>
                  <li>• O campo é mais intenso próximo ao fio e diminui com a distância</li>
                  <li>• O campo forma <strong>círculos concêntricos</strong> ao redor do fio</li>
                </ul>
              </div>
            </div>

            {/* Campo em Solenóide */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Campo Magnético em um Solenóide - Dedução
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um solenóide é uma bobina de fio enrolado em forma helicoidal. Quando uma corrente passa através dele, cria um campo magnético uniforme no interior. Vamos deduzir a fórmula usando a Lei de Ampère.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 1: Simetria do Solenóide</h4>
                    <p className="text-slate-700 text-sm">
                      Um solenóide ideal tem campo magnético uniforme no interior (paralelo ao eixo) e nulo no exterior. Cada espira contribui um pequeno campo que se soma.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 2: Caminho Amperiano Retangular</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Escolhemos um caminho retangular: dentro do solenóide (comprimento L) e fora (onde B ≈ 0).
                    </p>
                    <p className="text-slate-700 text-sm">
                      A integral de linha é: <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = B \cdot L + 0 + 0 + 0 = B \cdot L" display={false} />
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 3: Corrente Envolvida</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Se o solenóide tem n espiras por unidade de comprimento, então em um comprimento L há nL espiras. Cada espira carrega corrente I.
                    </p>
                    <p className="text-slate-700 text-sm">
                      Corrente total envolvida: <MathFormula formula="I_{enc} = I \cdot (nL)" display={false} />
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">Passo 4: Aplicar Lei de Ampère</h4>
                    <MathFormula formula="B \cdot L = \mu_0 \cdot I \cdot (nL)" display={true} />
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-bold text-orange-900 mb-3">Resultado Final</h4>
                    <MathFormula formula="B = \mu_0 n I" display={true} className="text-xl mb-3" />
                    <div className="text-sm text-slate-600 bg-white p-3 rounded border border-orange-200">
                      <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                      <ul className="space-y-1">
                        <li><MathFormula formula="n" display={false} />: Número de espiras por unidade de comprimento (espiras/m)</li>
                        <li><MathFormula formula="I" display={false} />: Corrente que passa pelo solenóide (A)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Validade da Fórmula</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      A fórmula <MathFormula formula="B = \mu_0 n I" display={false} /> é válida apenas:
                    </p>
                    <ul className="text-sm text-orange-700 space-y-1 ml-4">
                      <li>• No interior do solenóide</li>
                      <li>• Longe das extremidades (não perto das pontas)</li>
                      <li>• Para solenóides muito longos (L &gt;&gt; diâmetro)</li>
                    </ul>
                    <p className="text-sm text-orange-700 mt-2">
                      Fora do solenóide, o campo é aproximadamente nulo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Toróide - Aplicação Avançada */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Aplicação Avançada: Campo em um Toróide
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um toróide é um solenóide dobrado em forma de rosca. É uma aplicação importante em transformadores e reatores. Vamos aplicar a Lei de Ampère para encontrar o campo.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Resultado (dedução análoga ao solenóide):</h4>
                <MathFormula formula="B(r) = \frac{\mu_0 N I}{2\pi r}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="N" display={false} />: Número total de espiras no toróide</li>
                    <li><MathFormula formula="r" display={false} />: Distância radial do centro do toróide</li>
                    <li><strong>Importante:</strong> O campo varia com r (não é uniforme como no solenóide)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Força de Lorentz */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Força Magnética sobre uma Carga em Movimento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Uma carga elétrica em movimento dentro de um campo magnético experimenta uma força perpendicular tanto à sua velocidade quanto ao campo. Esta é a força de Lorentz, que é fundamental para o funcionamento de motores elétricos e aceleradores de partículas.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F} = q(\vec{v} \times \vec{B})" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Propriedades:</p>
                  <ul className="space-y-1">
                    <li>• A força é perpendicular ao plano formado por <MathFormula formula="\vec{v}" display={false} /> e <MathFormula formula="\vec{B}" display={false} /></li>
                    <li>• A magnitude é <MathFormula formula="F = qvB\sin\theta" display={false} />, onde <MathFormula formula="\theta" display={false} /> é o ângulo entre <MathFormula formula="\vec{v}" display={false} /> e <MathFormula formula="\vec{B}" display={false} /></li>
                    <li>• Se <MathFormula formula="v" display={false} /> é paralelo a <MathFormula formula="\vec{B}" display={false} />, a força é nula</li>
                    <li>• A força não realiza trabalho (é sempre perpendicular ao movimento)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">6</span>
                Exemplos Resolvidos Detalhados
              </h3>
              
              <div className="space-y-6">
                {/* Exemplo 1 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 1: Campo ao Redor de um Fio Reto
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um fio reto transporta uma corrente de 10 A. Calcule o campo magnético a uma distância de 5 cm do fio. (Use <MathFormula formula="\mu_0 = 4\pi \times 10^{-7}" display={false} /> T·m/A)
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Identificar a fórmula:</strong>
                          <MathFormula formula="B = \frac{\mu_0 I}{2\pi r}" display={true} />
                        </li>
                        <li>
                          <strong>Converter unidades:</strong>
                          <MathFormula formula="r = 5 \text{ cm} = 0,05 \text{ m}" display={true} />
                        </li>
                        <li>
                          <strong>Substituir valores:</strong>
                          <MathFormula formula="B = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times 0,05}" display={true} />
                        </li>
                        <li>
                          <strong>Simplificar:</strong>
                          <MathFormula formula="B = \frac{4 \times 10^{-6}}{0,1} = 4 \times 10^{-5} \text{ T} = 40 \text{ μT}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético a 5 cm do fio é <strong>40 μT</strong> (microtesla).</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 2 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 2: Campo em um Solenóide
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um solenóide tem 500 espiras uniformemente distribuídas em um comprimento de 0,5 m. Se uma corrente de 2 A passa através dele, qual é a magnitude do campo magnético no interior do solenóide? (Use <MathFormula formula="\mu_0 = 4\pi \times 10^{-7}" display={false} /> T·m/A)
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Calcular o número de espiras por unidade de comprimento:</strong>
                          <MathFormula formula="n = \frac{N}{L} = \frac{500}{0,5} = 1000 \text{ espiras/m}" display={true} />
                        </li>
                        <li>
                          <strong>Aplicar a fórmula do campo em um solenóide:</strong>
                          <MathFormula formula="B = \mu_0 n I = 4\pi \times 10^{-7} \times 1000 \times 2" display={true} />
                        </li>
                        <li>
                          <strong>Calcular o resultado:</strong>
                          <MathFormula formula="B = 8\pi \times 10^{-4} \approx 2,51 \times 10^{-3} \text{ T} = 2,51 \text{ mT}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético no interior do solenóide é aproximadamente <strong>2,51 mT</strong> (militesla).</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 3 */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 3: Força de Lorentz
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um elétron (q = 1,6 × 10⁻¹⁹ C) move-se com velocidade de 10⁶ m/s perpendicular a um campo magnético de 0,5 T. Qual é a força magnética sobre o elétron?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Como v é perpendicular a B:</strong>
                          <MathFormula formula="F = qvB\sin(90°) = qvB" display={true} />
                        </li>
                        <li>
                          <strong>Substituir valores:</strong>
                          <MathFormula formula="F = 1,6 \times 10^{-19} \times 10^6 \times 0,5" display={true} />
                        </li>
                        <li>
                          <strong>Calcular:</strong>
                          <MathFormula formula="F = 8 \times 10^{-14} \text{ N}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A força magnética é <strong>8 × 10⁻¹⁴ N</strong>. A direção é perpendicular a ambos v e B (use a regra da mão direita).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Próximos Tópicos</h4>
          <p className="text-red-800 text-sm">
            Agora que você domina os campos magnéticos gerados por correntes através da Lei de Ampère, o próximo passo é entender como campos magnéticos variáveis geram campos elétricos através da <strong>Indução Eletromagnética</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
