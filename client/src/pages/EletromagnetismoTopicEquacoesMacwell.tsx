import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicEquacoesMacwell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
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
              <p className="text-xs text-slate-600">Equações de Maxwell</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Introdução às Equações de Maxwell</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que são as Equações de Maxwell?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As <strong>Equações de Maxwell</strong> são um conjunto de quatro equações diferenciais que descrevem completamente o comportamento dos campos elétricos e magnéticos. Formuladas por James Clerk Maxwell em 1865, elas unificam toda a teoria do eletromagnetismo e são fundamentais para a física moderna.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Estas equações mostram que luz é uma onda eletromagnética e predizem a existência de ondas eletromagnéticas, revolucionando nossa compreensão da natureza.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 As Quatro Equações</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">1.</span>
                  <span><strong>Lei de Gauss:</strong> Cargas elétricas geram campos elétricos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">2.</span>
                  <span><strong>Lei de Gauss para o Magnetismo:</strong> Não existem monopolos magnéticos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">3.</span>
                  <span><strong>Lei de Faraday:</strong> Campos magnéticos variáveis geram campos elétricos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">4.</span>
                  <span><strong>Lei de Ampère-Maxwell:</strong> Correntes e campos elétricos variáveis geram campos magnéticos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lei de Ampère-Maxwell - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Lei de Ampère-Maxwell - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Contexto Histórico: A Limitação de Ampère
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère original, descoberta por André-Marie Ampère em 1826, relaciona a circulação do campo magnético ao redor de um caminho fechado com a corrente elétrica que passa através desse caminho. No entanto, Maxwell descobriu uma inconsistência fundamental: a Lei de Ampère viola a conservação de carga em situações onde o campo elétrico varia no tempo.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-red-900 mb-3">O Problema: Capacitor Carregando</h4>
                <p className="text-slate-700 text-sm mb-4">
                  Considere um capacitor sendo carregado. Há uma corrente real fluindo no fio conectado ao capacitor. Mas entre as placas do capacitor, não há corrente - apenas um campo elétrico crescente. A Lei de Ampère original não consegue explicar o campo magnético entre as placas!
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-slate-700">
                    <strong>Paradoxo:</strong> Se aplicarmos a Lei de Ampère em um caminho que passa entre as placas do capacitor, obtemos zero (sem corrente). Mas se aplicarmos em um caminho que passa pelo fio, obtemos um valor não-zero. Como a mesma superfície pode ter dois resultados diferentes?
                  </p>
                </div>
              </div>
            </div>

            {/* Corrente de Deslocamento */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                A Solução de Maxwell: Corrente de Deslocamento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Maxwell resolveu este paradoxo introduzindo o conceito de <strong>corrente de deslocamento</strong>. Ele percebeu que um campo elétrico variável no tempo é equivalente a uma corrente para fins de gerar um campo magnético. Esta foi uma das maiores intuições da física!
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Definição: Corrente de Deslocamento</h4>
                <p className="text-slate-700 text-sm mb-3">
                  A corrente de deslocamento é definida como:
                </p>
                <div className="bg-white p-4 rounded-lg border border-purple-200 mb-3">
                  <MathFormula formula="I_d = \epsilon_0 \frac{d\Phi_E}{dt}" display={true} />
                </div>
                <p className="text-slate-700 text-sm">
                  Onde Φ_E é o fluxo do campo elétrico através da superfície. Esta corrente não é uma corrente real de cargas, mas sim uma mudança no fluxo do campo elétrico que produz um efeito magnético equivalente.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Analogia com Lei de Faraday</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>Lei de Faraday:</strong> Um fluxo magnético variável gera um campo elétrico circulante.
                  </p>
                  <p>
                    <strong>Lei de Ampère-Maxwell:</strong> Um fluxo elétrico variável gera um campo magnético circulante.
                  </p>
                  <p className="border-t border-blue-200 pt-2 mt-2">
                    Há uma simetria perfeita! Campos magnéticos variáveis criam campos elétricos, e campos elétricos variáveis criam campos magnéticos. Isto é o que permite a existência de ondas eletromagnéticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulação Completa */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Formulação Completa da Lei de Ampère-Maxwell
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère-Maxwell é a generalização da Lei de Ampère que inclui o termo de deslocamento de Maxwell. Ela descreve como correntes elétricas E campos elétricos variáveis geram campos magnéticos.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-bold text-yellow-400 mb-3">Forma Integral</h4>
                <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-3">Significado de cada termo:</p>
                  <ul className="space-y-2">
                    <li><strong>∮ B · dl:</strong> Circulação do campo magnético ao redor de um caminho fechado</li>
                    <li><strong>μ₀ I_enc:</strong> Contribuição da corrente real (Lei de Ampère original)</li>
                    <li><strong>μ₀ ε₀ dΦ_E/dt:</strong> Contribuição da corrente de deslocamento (adição de Maxwell)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-bold text-yellow-400 mb-3">Forma Diferencial</h4>
                <MathFormula formula="\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><strong>∇ × B:</strong> Rotacional do campo magnético (circulação local)</li>
                    <li><strong>μ₀ J:</strong> Densidade de corrente real</li>
                    <li><strong>μ₀ ε₀ ∂E/∂t:</strong> Densidade de corrente de deslocamento</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Significado Profundo</h4>
                <p className="text-slate-700 text-sm">
                  A Lei de Ampère-Maxwell mostra que campos magnéticos podem ser gerados de duas formas: (1) por correntes elétricas reais (cargas em movimento) e (2) por campos elétricos variáveis no tempo. Isto é revolucionário porque significa que mesmo no vácuo, onde não há cargas, um campo elétrico variável pode gerar um campo magnético!
                </p>
              </div>
            </div>

            {/* Passo a Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Passo a Passo: Resolver Problemas com Ampère-Maxwell
              </h3>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span>Identifique se há corrente real (I_enc) ou apenas campo elétrico variável</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span>Escolha um caminho fechado com simetria apropriada (círculo, quadrado, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span>Calcule a circulação ∮ B · dl usando simetria (B é constante no caminho)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span>Calcule a corrente real I_enc que passa através da superfície</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span>Se houver campo elétrico variável, calcule dΦ_E/dt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 6:</span>
                    <span>Aplique Ampère-Maxwell: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 7:</span>
                    <span>Resolva para B usando a simetria do problema</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Exemplos Resolvidos
              </h3>
              
              <div className="space-y-6">
                {/* Exemplo 1: Capacitor Carregando */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 1: Campo Magnético em Capacitor Carregando
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um capacitor de placas paralelas está sendo carregado. O campo elétrico entre as placas aumenta uniformemente de 0 a 10⁵ V/m em 1 segundo. As placas têm raio 0,1 m. Qual é o campo magnético a uma distância de 0,05 m do eixo central entre as placas?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Identificar o problema:</strong> Não há corrente real entre as placas, apenas campo elétrico variável
                        </li>
                        <li>
                          <strong>Taxa de variação do campo elétrico:</strong>
                          <MathFormula formula="\frac{dE}{dt} = \frac{10^5}{1} = 10^5 \text{ V/(m·s)}" display={true} />
                        </li>
                        <li>
                          <strong>Taxa de variação do fluxo elétrico (em círculo de raio r = 0,05 m):</strong>
                          <MathFormula formula="\frac{d\Phi_E}{dt} = A \frac{dE}{dt} = \pi r^2 \frac{dE}{dt}" display={true} />
                          <MathFormula formula="\frac{d\Phi_E}{dt} = \pi (0,05)^2 \times 10^5 = 785,4 \text{ Wb/s}" display={true} />
                        </li>
                        <li>
                          <strong>Aplicar Ampère-Maxwell (sem corrente real):</strong>
                          <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} />
                          <MathFormula formula="B \cdot 2\pi r = \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} />
                        </li>
                        <li>
                          <strong>Resolver para B:</strong>
                          <MathFormula formula="B = \frac{\mu_0 \epsilon_0}{2\pi r} \frac{d\Phi_E}{dt}" display={true} />
                          <MathFormula formula="B = \frac{(4\pi \times 10^{-7})(8,85 \times 10^{-12})}{2\pi (0,05)} \times 785,4" display={true} />
                          <MathFormula formula="B \approx 2,2 \times 10^{-11} \text{ T}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético é aproximadamente <strong>2,2 × 10⁻¹¹ T</strong>. Embora seja muito fraco, isto prova que a corrente de deslocamento realmente gera um campo magnético!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 2: Fio com Corrente */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 2: Campo Magnético ao Redor de Fio com Corrente
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um fio reto longo carrega uma corrente de 10 A. Qual é o campo magnético a uma distância de 0,02 m do fio?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Usar Ampère-Maxwell com corrente real (sem campo elétrico variável):</strong>
                          <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}" display={true} />
                        </li>
                        <li>
                          <strong>Por simetria cilíndrica, B é constante em círculo de raio r:</strong>
                          <MathFormula formula="B \cdot 2\pi r = \mu_0 I" display={true} />
                        </li>
                        <li>
                          <strong>Resolver para B:</strong>
                          <MathFormula formula="B = \frac{\mu_0 I}{2\pi r} = \frac{(4\pi \times 10^{-7}) \times 10}{2\pi (0,02)}" display={true} />
                          <MathFormula formula="B = \frac{4 \times 10^{-6}}{0,04} = 1 \times 10^{-4} \text{ T} = 0,1 \text{ mT}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético é <strong>0,1 mT</strong> (milliTesla). Este é um campo magnético mensurável e é por isso que fios com corrente podem afetar bússolas!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 3: Solenóide */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 3: Campo Magnético em Solenóide
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um solenóide tem 1000 espiras por metro e raio 0,05 m. Uma corrente de 2 A passa através dele. Qual é o campo magnético no interior do solenóide?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Usar Ampère-Maxwell em um retângulo dentro do solenóide:</strong>
                          <p className="text-xs text-slate-500 mt-1">Apenas o lado dentro do solenóide contribui (B é zero fora)</p>
                        </li>
                        <li>
                          <strong>Número de espiras no retângulo:</strong>
                          <p className="text-xs text-slate-500 mt-1">Se o comprimento do retângulo é L, então N = nL onde n é o número de espiras por unidade de comprimento</p>
                        </li>
                        <li>
                          <strong>Aplicar Ampère-Maxwell:</strong>
                          <MathFormula formula="B \cdot L = \mu_0 (nL) I" display={true} />
                        </li>
                        <li>
                          <strong>Simplificar:</strong>
                          <MathFormula formula="B = \mu_0 n I" display={true} />
                        </li>
                        <li>
                          <strong>Substituir valores:</strong>
                          <MathFormula formula="B = (4\pi \times 10^{-7}) \times 1000 \times 2" display={true} />
                          <MathFormula formula="B = 8\pi \times 10^{-4} \approx 2,51 \times 10^{-3} \text{ T} = 2,51 \text{ mT}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético no interior é aproximadamente <strong>2,51 mT</strong>. Este é um campo magnético moderado, típico de solenóides usados em aplicações práticas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ondas Eletromagnéticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">6</span>
                Consequência: Ondas Eletromagnéticas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Combinando as equações de Faraday e Ampère-Maxwell, podemos derivar a equação de onda para o campo eletromagnético. Isto mostra que campos eletromagnéticos podem se propagar como ondas no vácuo - uma das descobertas mais importantes da física!
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Equação de Onda Eletromagnética</h4>
                <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-3 text-slate-800">Velocidade de Propagação:</p>
                  <MathFormula formula="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8 \text{ m/s}" display={true} />
                  <p className="mt-3 text-xs"><strong>Conclusão de Maxwell:</strong> Esta é exatamente a velocidade da luz! Maxwell concluiu que a luz é uma onda eletromagnética. Esta foi uma das maiores unificações da física.</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Simetria Perfeita entre E e B</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Em uma onda eletromagnética, os campos elétrico e magnético oscilam juntos:
                </p>
                <div className="space-y-2 text-sm text-slate-700 bg-white p-3 rounded border border-green-200">
                  <p><strong>Lei de Faraday:</strong> Campo B variável → gera campo E</p>
                  <p><strong>Lei de Ampère-Maxwell:</strong> Campo E variável → gera campo B</p>
                  <p className="border-t border-green-200 pt-2 mt-2">Isto cria um ciclo: E varia → gera B → B varia → gera E → ... A onda se propaga!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-yellow-900 mb-2">Próximos Tópicos</h4>
          <p className="text-yellow-800 text-sm">
            As Equações de Maxwell predizem a existência de <strong>Ondas Eletromagnéticas</strong>. No próximo tópico, exploraremos as propriedades avançadas dessas ondas, incluindo polarização, interferência e o espectro eletromagnético.
          </p>
        </div>
      </section>
    </div>
  );
}
