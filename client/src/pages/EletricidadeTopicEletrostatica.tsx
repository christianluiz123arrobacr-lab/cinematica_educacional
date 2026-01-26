import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletricidadeTopicEletrostatica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Eletrostática</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Eletrostática</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Eletrostática?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Eletrostática</strong> é o ramo da física que estuda as cargas elétricas em repouso e os fenômenos relacionados a elas, como a força elétrica, o campo elétrico e o potencial elétrico.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Toda a matéria é composta por átomos, que contêm partículas carregadas: prótons (carga positiva) e elétrons (carga negativa). A interação entre essas cargas é a base de quase todos os fenômenos que observamos no dia a dia, desde a estrutura da matéria até a eletricidade que usamos.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Princípios Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Princípio da Atração e Repulsão:</strong> Cargas de mesmo sinal se repelem, e cargas de sinais opostos se atraem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div className="flex flex-wrap items-center gap-1">
                    <strong>Princípio da Conservação da Carga Elétrica:</strong> Em um sistema isolado, a soma algébrica das cargas elétricas é constante:
                    <MathFormula formula="\sum Q_{\text{antes}} = \sum Q_{\text{depois}}" display={false} />
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div className="flex flex-wrap items-center gap-1">
                    <strong>Quantização da Carga Elétrica:</strong> A carga elétrica de um corpo é sempre um múltiplo inteiro da carga elementar (<MathFormula formula="e \approx 1,6 \cdot 10^{-19} C" display={false} />). Ou seja, <MathFormula formula="Q = n \cdot e" display={false} />, onde <MathFormula formula="n \in \mathbb{Z}" display={false} />.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Coulomb (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Formulação Escalar */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Formulação Escalar
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Coulomb, formulada por Charles-Augustin de Coulomb em 1785, descreve a força de interação eletrostática entre duas cargas pontuais em repouso. A magnitude da força é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2}" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="F" display={false} />: Módulo da força elétrica (N)</li>
                      <li><MathFormula formula="k" display={false} />: Constante eletrostática do meio (<MathFormula formula="N \cdot m^2/C^2" display={false} />)</li>
                      <li><MathFormula formula="q_1, q_2" display={false} />: Cargas elétricas (C)</li>
                      <li><MathFormula formula="d" display={false} />: Distância entre as cargas (m)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Constante Eletrostática e Permissividade
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  A constante <MathFormula formula="k" display={false} /> depende do meio onde as cargas estão imersas. No vácuo, ela é denotada por <MathFormula formula="k_0" display={false} />:
                </p>
                <MathFormula formula="k_0 \approx 9,0 \cdot 10^9 \, N \cdot m^2/C^2" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Formalmente, <MathFormula formula="k" display={false} /> é definida em termos da <strong>permissividade elétrica</strong> (<MathFormula formula="\epsilon" display={false} />) do meio:
                </p>
                <MathFormula formula="k = \frac{1}{4\pi\epsilon}" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  No vácuo, <MathFormula formula="\epsilon_0 \approx 8,85 \cdot 10^{-12} \, C^2/(N \cdot m^2)" display={false} />. Para outros meios materiais, <MathFormula formula="\epsilon = \epsilon_r \cdot \epsilon_0" display={false} />, onde <MathFormula formula="\epsilon_r" display={false} /> é a constante dielétrica relativa do meio (<MathFormula formula="\epsilon_r \geq 1" display={false} />).
                </p>
              </div>
            </div>

            {/* Formulação Vetorial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Formulação Vetorial (Rigor Matemático)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para problemas complexos, especialmente em 3D, a forma vetorial é indispensável. A força que a carga <MathFormula formula="q_1" display={false} /> exerce sobre a carga <MathFormula formula="q_2" display={false} /> é dada por:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F}_{12} = k \cdot \frac{q_1 \cdot q_2}{|\vec{r}_{21}|^2} \cdot \hat{r}_{21} = k \cdot \frac{q_1 \cdot q_2}{|\vec{r}_{21}|^3} \cdot \vec{r}_{21}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\vec{r}_1, \vec{r}_2" display={false} />: Vetores posição das cargas</li>
                      <li><MathFormula formula="\vec{r}_{21} = \vec{r}_2 - \vec{r}_1" display={false} />: Vetor deslocamento de 1 para 2</li>
                      <li><MathFormula formula="|\vec{r}_{21}| = d" display={false} />: Distância entre as cargas</li>
                      <li><MathFormula formula="\hat{r}_{21} = \frac{\vec{r}_{21}}{|\vec{r}_{21}|}" display={false} />: Versor apontando de 1 para 2</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Interpretação:</p>
                    <p>
                      Se <MathFormula formula="q_1 \cdot q_2 > 0" display={false} /> (sinais iguais), a força <MathFormula formula="\vec{F}_{12}" display={false} /> tem o mesmo sentido de <MathFormula formula="\hat{r}_{21}" display={false} /> (repulsão).
                      <br/>
                      Se <MathFormula formula="q_1 \cdot q_2 < 0" display={false} /> (sinais opostos), a força <MathFormula formula="\vec{F}_{12}" display={false} /> tem sentido oposto a <MathFormula formula="\hat{r}_{21}" display={false} /> (atração).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Princípio da Superposição */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Princípio da Superposição
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A força elétrica resultante sobre uma carga de prova <MathFormula formula="q_0" display={false} /> devido a um sistema de <MathFormula formula="N" display={false} /> cargas discretas <MathFormula formula="q_1, q_2, ..., q_N" display={false} /> é a soma vetorial das forças individuais que cada carga exerce sobre <MathFormula formula="q_0" display={false} />.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                <MathFormula formula="\vec{F}_R = \vec{F}_1 + \vec{F}_2 + ... + \vec{F}_N = \sum_{i=1}^{N} \vec{F}_i" display={true} />
                <div className="mt-4">
                  <MathFormula formula="\vec{F}_R = q_0 \sum_{i=1}^{N} k \frac{q_i}{|\vec{r}_i - \vec{r}_0|^3} (\vec{r}_0 - \vec{r}_i)" display={true} />
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Atenção: Soma Vetorial!
                </h4>
                <p className="text-slate-700 text-sm">
                  Jamais some apenas os módulos das forças, a menos que elas estejam na mesma direção. Você deve decompor as forças em componentes (<MathFormula formula="F_x, F_y" display={false} />) ou usar a notação vetorial completa para encontrar a resultante correta.
                </p>
              </div>
            </div>

            {/* Análise Gráfica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Análise Gráfica
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-center">Força vs. Distância (<MathFormula formula="F \times d" display={false} />)</h4>
                  <div className="h-48 bg-slate-50 rounded border border-slate-100 flex items-center justify-center mb-4 relative overflow-hidden">
                    {/* Simplified SVG representation of 1/x^2 curve */}
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                      <path d="M 10 5 L 10 95 L 95 95" fill="none" stroke="#94a3b8" strokeWidth="2" />
                      <path d="M 15 5 C 15 80, 20 90, 90 92" fill="none" stroke="#eab308" strokeWidth="3" />
                      <text x="50" y="90" className="text-[8px] fill-slate-500">d (distância)</text>
                      <text x="15" y="50" className="text-[8px] fill-slate-500" transform="rotate(-90 15 50)">F (Força)</text>
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 text-center">
                    A força decai com o quadrado da distância (<MathFormula formula="F \propto 1/d^2" display={false} />). Se a distância dobra, a força cai para <MathFormula formula="1/4" display={false} />. Se triplica, cai para <MathFormula formula="1/9" display={false} />.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-center">Força vs. Carga (<MathFormula formula="F \times q" display={false} />)</h4>
                  <div className="h-48 bg-slate-50 rounded border border-slate-100 flex items-center justify-center mb-4 relative overflow-hidden">
                    {/* Simplified SVG representation of linear curve */}
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                      <path d="M 10 5 L 10 95 L 95 95" fill="none" stroke="#94a3b8" strokeWidth="2" />
                      <path d="M 10 95 L 90 15" fill="none" stroke="#eab308" strokeWidth="3" />
                      <text x="50" y="90" className="text-[8px] fill-slate-500">q (carga)</text>
                      <text x="15" y="50" className="text-[8px] fill-slate-500" transform="rotate(-90 15 50)">F (Força)</text>
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 text-center">
                    A força é linearmente proporcional ao produto das cargas (<MathFormula formula="F \propto q_1 \cdot q_2" display={false} />). Se uma carga dobra, a força dobra.
                  </p>
                </Card>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Exemplo Resolvido (Nível ITA)
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 font-medium">
                  <strong>Problema:</strong> Três cargas pontuais <MathFormula formula="q_1 = +2\mu C" display={false} />, <MathFormula formula="q_2 = -4\mu C" display={false} /> e <MathFormula formula="q_3 = +5\mu C" display={false} /> estão fixas nos vértices de um triângulo equilátero de lado <MathFormula formula="L = 30 \text{ cm}" display={false} />. Determine o módulo da força elétrica resultante sobre a carga <MathFormula formula="q_3" display={false} />. (Considere <MathFormula formula="k_0 = 9 \cdot 10^9 N \cdot m^2/C^2" display={false} />).
                </p>
                
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 mb-2 font-bold text-sm text-blue-600">SOLUÇÃO:</p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
                    <li>
                      <strong>Análise das Forças:</strong>
                      <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                        <li><MathFormula formula="F_{13}" display={false} />: Repulsão (cargas positivas). Aponta para fora do triângulo, alinhado com o lado <MathFormula formula="q_1-q_3" display={false} />.</li>
                        <li><MathFormula formula="F_{23}" display={false} />: Atração (sinais opostos). Aponta para <MathFormula formula="q_2" display={false} />, alinhado com o lado <MathFormula formula="q_3-q_2" display={false} />.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cálculo dos Módulos:</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-200">
                        <MathFormula formula="F_{13} = \frac{k|q_1 q_3|}{L^2} = \frac{9\cdot 10^9 \cdot 2\cdot 10^{-6} \cdot 5\cdot 10^{-6}}{(0,3)^2} = \frac{90 \cdot 10^{-3}}{0,09} = 1,0 \, N" display={true} />
                        <MathFormula formula="F_{23} = \frac{k|q_2 q_3|}{L^2} = \frac{9\cdot 10^9 \cdot 4\cdot 10^{-6} \cdot 5\cdot 10^{-6}}{(0,3)^2} = \frac{180 \cdot 10^{-3}}{0,09} = 2,0 \, N" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Cálculo da Resultante (Lei dos Cossenos):</strong>
                      <p className="mt-1">O ângulo interno do triângulo equilátero é <MathFormula formula="60^\circ" display={false} />. O ângulo entre os vetores <MathFormula formula="\vec{F}_{13}" display={false} /> e <MathFormula formula="\vec{F}_{23}" display={false} /> é <MathFormula formula="120^\circ" display={false} /> (suplementar de 60, pois um atrai e outro repele).</p>
                      <div className="my-2 pl-4 border-l-2 border-slate-200">
                        <MathFormula formula="F_R^2 = F_{13}^2 + F_{23}^2 + 2 F_{13} F_{23} \cos(120^\circ)" display={true} />
                        <MathFormula formula="F_R^2 = 1^2 + 2^2 + 2(1)(2)(-0,5)" display={true} />
                        <MathFormula formula="F_R^2 = 1 + 4 - 2 = 3 \implies F_R = \sqrt{3} \approx 1,73 \, N" display={true} />
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌐 Campo Elétrico</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição de Campo</h3>
              <p className="text-slate-700 mb-4">
                O campo elétrico é uma região do espaço onde uma carga elétrica de prova sofre a ação de uma força elétrica. É uma grandeza vetorial, possuindo módulo, direção e sentido.
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="\vec{E} = \frac{\vec{F}}{q}" display={true} />
              </div>
              <p className="text-slate-700 mb-4">
                Para uma carga pontual <MathFormula formula="Q" display={false} />, o módulo do campo elétrico a uma distância <MathFormula formula="d" display={false} /> é dado por:
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="E = k \cdot \frac{|Q|}{d^2}" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Interactive Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center opacity-70">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Simulador de Cargas</h3>
            <p className="text-slate-500">Em breve: Visualize as linhas de campo e forças entre cargas.</p>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center opacity-70">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Calculadora de Coulomb</h3>
            <p className="text-slate-500">Em breve: Calcule forças e campos elétricos automaticamente.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
