import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2, Sigma, MousePointerClick } from "lucide-react";
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌐 Campo Elétrico (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Definição Vetorial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Definição Vetorial Rigorosa
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O campo elétrico <MathFormula formula="\vec{E}" display={false} /> em um ponto do espaço é definido como a força elétrica <MathFormula formula="\vec{F}" display={false} /> que atua sobre uma carga de prova positiva <MathFormula formula="q_0" display={false} /> colocada nesse ponto, dividida pelo valor da carga, no limite em que <MathFormula formula="q_0 \to 0" display={false} /> (para não perturbar o campo original).
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{E} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="mb-2">Para uma carga pontual <MathFormula formula="Q" display={false} /> na origem, o campo em um ponto <MathFormula formula="P" display={false} /> (vetor posição <MathFormula formula="\vec{r}" display={false} />) é:</p>
                  <MathFormula formula="\vec{E} = k \frac{Q}{|\vec{r}|^2} \hat{r} = k \frac{Q}{|\vec{r}|^3} \vec{r}" display={true} />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Carga Positiva ($Q &gt; 0$)</h4>
                  <p className="text-sm text-slate-700">O campo é <strong>divergente</strong> (aponta para fora da carga). As linhas de força "nascem" na carga positiva.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Carga Negativa ($Q &lt; 0$)</h4>
                  <p className="text-sm text-slate-700">O campo é <strong>convergente</strong> (aponta para a carga). As linhas de força "morrem" na carga negativa.</p>
                </div>
              </div>
            </div>

            {/* Distribuições Contínuas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Distribuições Contínuas de Carga
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para corpos macroscópicos, tratamos a carga como uma distribuição contínua. O campo total é a integral vetorial dos campos infinitesimais <MathFormula formula="d\vec{E}" display={false} /> gerados por cada elemento de carga <MathFormula formula="dq" display={false} />.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                <MathFormula formula="\vec{E} = \int d\vec{E} = k \int \frac{dq}{r^2} \hat{r}" display={true} />
                
                <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <p className="font-bold text-slate-800 mb-1">Linear ($\lambda$)</p>
                    <MathFormula formula="dq = \lambda dl" display={true} />
                    <p className="text-xs text-slate-500 mt-1">Fios, anéis</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <p className="font-bold text-slate-800 mb-1">Superficial ($\sigma$)</p>
                    <MathFormula formula="dq = \sigma dA" display={true} />
                    <p className="text-xs text-slate-500 mt-1">Placas, discos, esferas ocas</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <p className="font-bold text-slate-800 mb-1">Volumétrica ($\rho$)</p>
                    <MathFormula formula="dq = \rho dV" display={true} />
                    <p className="text-xs text-slate-500 mt-1">Esferas maciças, cilindros</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Sigma className="w-4 h-4" />
                  Caso Clássico: Anel Carregado
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Campo no eixo de um anel de raio <MathFormula formula="R" display={false} /> e carga total <MathFormula formula="Q" display={false} />, a uma distância <MathFormula formula="x" display={false} /> do centro:
                </p>
                <MathFormula formula="E_x = \frac{k Q x}{(R^2 + x^2)^{3/2}}" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  <strong>Análise de Limites:</strong>
                  <br/>• Se <MathFormula formula="x=0" display={false} /> (centro), <MathFormula formula="E=0" display={false} /> (simetria).
                  <br/>• Se <MathFormula formula="x \gg R" display={false} /> (muito longe), <MathFormula formula="E \approx kQ/x^2" display={false} /> (comporta-se como carga pontual).
                </p>
              </div>
            </div>

            {/* Linhas de Força */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Linhas de Força
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    As linhas de força são representações geométricas que nos ajudam a visualizar o campo elétrico.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>O vetor campo elétrico <MathFormula formula="\vec{E}" display={false} /> é tangente à linha de força em cada ponto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>A densidade de linhas é proporcional à intensidade do campo (mais linhas = campo mais forte).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>As linhas nunca se cruzam (o campo tem direção única em cada ponto).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Saem de cargas positivas e entram em cargas negativas.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
                  {/* Abstract representation of dipole field lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  <div className="relative z-10 flex gap-12 items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center justify-center text-white font-bold">+</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] flex items-center justify-center text-white font-bold">-</div>
                  </div>
                  {/* Curved lines suggestive of dipole */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M 130 100 Q 180 50 230 100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <path d="M 130 100 Q 180 150 230 100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <path d="M 130 100 Q 180 20 230 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <path d="M 130 100 Q 180 180 230 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  </svg>
                </div>
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
                  <strong>Problema:</strong> Duas cargas pontuais <MathFormula formula="+q" display={false} /> e <MathFormula formula="-q" display={false} /> (um dipolo elétrico) estão separadas por uma distância <MathFormula formula="2a" display={false} />. Determine o campo elétrico resultante em um ponto <MathFormula formula="P" display={false} /> localizado sobre a mediatriz do segmento que une as cargas, a uma distância <MathFormula formula="y" display={false} /> do centro do dipolo.
                </p>
                
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 mb-2 font-bold text-sm text-blue-600">SOLUÇÃO:</p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
                    <li>
                      <strong>Geometria:</strong>
                      <p className="ml-4 mt-1 text-slate-600">
                        A distância de cada carga até o ponto <MathFormula formula="P" display={false} /> é <MathFormula formula="r = \sqrt{a^2 + y^2}" display={false} />.
                      </p>
                    </li>
                    <li>
                      <strong>Módulos dos Campos:</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-200">
                        <MathFormula formula="E_+ = E_- = \frac{kq}{r^2} = \frac{kq}{a^2 + y^2}" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Decomposição Vetorial:</strong>
                      <p className="ml-4 mt-1 text-slate-600">
                        Por simetria, as componentes verticais (eixo y) se cancelam. As componentes horizontais (eixo x) se somam.
                        Seja <MathFormula formula="\theta" display={false} /> o ângulo entre o campo e a horizontal: <MathFormula formula="\cos\theta = \frac{a}{r} = \frac{a}{\sqrt{a^2+y^2}}" display={false} />.
                      </p>
                      <div className="my-2 pl-4 border-l-2 border-slate-200">
                        <MathFormula formula="E_R = 2 E_+ \cos\theta = 2 \left( \frac{kq}{a^2+y^2} \right) \left( \frac{a}{\sqrt{a^2+y^2}} \right)" display={true} />
                        <MathFormula formula="E_R = \frac{k (2qa)}{(a^2+y^2)^{3/2}}" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Conclusão:</strong>
                      <p className="ml-4 mt-1 text-slate-600">
                        O campo resultante é horizontal, apontando da carga positiva para a negativa (paralelo ao eixo do dipolo). O termo <MathFormula formula="p = 2qa" display={false} /> é o momento de dipolo elétrico.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Placeholder for Interactive Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <MousePointerClick className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Simulador de Linhas de Campo</h3>
            <p className="text-slate-500 text-sm">Interaja com cargas positivas e negativas e veja como o campo se comporta em tempo real.</p>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white" disabled>Em Breve</Button>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Calculadora de Campo</h3>
            <p className="text-slate-500 text-sm">Calcule o campo elétrico resultante de múltiplas cargas pontuais automaticamente.</p>
            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white" disabled>Em Breve</Button>
          </div>
        </div>

      </section>
    </div>
  );
}
