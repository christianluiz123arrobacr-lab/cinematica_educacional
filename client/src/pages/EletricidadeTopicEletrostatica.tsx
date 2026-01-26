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
                A força elétrica resultante sobre uma carga <MathFormula formula="q_0" display={false} /> devido a um sistema de <MathFormula formula="N" display={false} /> cargas pontuais <MathFormula formula="q_1, q_2, ..., q_N" display={false} /> é a soma vetorial das forças individuais que cada carga exerce sobre <MathFormula formula="q_0" display={false} />:
              </p>
              <MathFormula formula="\vec{F}_R = \vec{F}_{10} + \vec{F}_{20} + ... + \vec{F}_{N0} = \sum_{i=1}^{N} \vec{F}_{i0}" display={true} />
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Soma Vetorial!</h4>
                    <p className="text-sm text-orange-700">
                      Jamais some apenas os módulos das forças, a menos que elas tenham a mesma direção e sentido. Em geral, você deve decompor os vetores em componentes <MathFormula formula="x" display={false} /> e <MathFormula formula="y" display={false} /> para somá-los.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Análise Gráfica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Análise Gráfica
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2 text-center">Força x Distância (<MathFormula formula="F \times d" display={false} />)</h4>
                  <div className="h-48 flex items-center justify-center bg-white rounded border border-slate-100 mb-2">
                    {/* Placeholder for graph */}
                    <div className="relative w-full h-full p-4">
                      <div className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[1px] bg-slate-400"></div>
                      <div className="absolute left-8 bottom-8 w-[1px] h-[calc(100%-4rem)] bg-slate-400"></div>
                      <svg className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] overflow-visible">
                        <path d="M 0,0 Q 20,100 150,10" fill="none" stroke="#ea580c" strokeWidth="2" transform="scale(1, -1) translate(0, -120)" />
                      </svg>
                      <span className="absolute bottom-2 right-4 text-xs font-bold">d</span>
                      <span className="absolute top-4 left-2 text-xs font-bold">F</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 text-center">
                    Hipérbole cúbica (<MathFormula formula="F \propto 1/d^2" display={false} />). A força cai rapidamente com a distância. Se <MathFormula formula="d" display={false} /> dobra, <MathFormula formula="F" display={false} /> cai para <MathFormula formula="1/4" display={false} />.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2 text-center">Força x Carga (<MathFormula formula="F \times q" display={false} />)</h4>
                  <div className="h-48 flex items-center justify-center bg-white rounded border border-slate-100 mb-2">
                    {/* Placeholder for graph */}
                    <div className="relative w-full h-full p-4">
                      <div className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[1px] bg-slate-400"></div>
                      <div className="absolute left-8 bottom-8 w-[1px] h-[calc(100%-4rem)] bg-slate-400"></div>
                      <svg className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] overflow-visible">
                        <line x1="0" y1="120" x2="150" y2="20" stroke="#ea580c" strokeWidth="2" />
                      </svg>
                      <span className="absolute bottom-2 right-4 text-xs font-bold">q</span>
                      <span className="absolute top-4 left-2 text-xs font-bold">F</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 text-center">
                    Reta linear (<MathFormula formula="F \propto q" display={false} />). A força é diretamente proporcional ao produto das cargas.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido (Nível ITA)
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Enunciado:</strong> Três cargas pontuais idênticas <MathFormula formula="q > 0" display={false} /> são fixadas nos vértices de um triângulo equilátero de lado <MathFormula formula="L" display={false} />. Determine o módulo da força elétrica resultante sobre uma quarta carga <MathFormula formula="Q > 0" display={false} /> colocada no centroide do triângulo.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Simetria:</strong> O centroide é equidistante dos três vértices. A distância <MathFormula formula="d" display={false} /> de cada vértice ao centro é <MathFormula formula="d = \frac{L}{\sqrt{3}}" display={false} />.
                    </li>
                    <li>
                      <strong>Forças Individuais:</strong> Cada carga <MathFormula formula="q" display={false} /> exerce uma força repulsiva <MathFormula formula="F = k \frac{qQ}{d^2}" display={false} /> sobre <MathFormula formula="Q" display={false} />. Os módulos são iguais: <MathFormula formula="|\vec{F}_1| = |\vec{F}_2| = |\vec{F}_3| = F" display={false} />.
                    </li>
                    <li>
                      <strong>Direções:</strong> As forças apontam do vértice para o centro, formando ângulos de <MathFormula formula="120^\circ" display={false} /> entre si.
                    </li>
                    <li>
                      <strong>Soma Vetorial:</strong> A soma de três vetores de mesmo módulo com ângulos de <MathFormula formula="120^\circ" display={false} /> entre si é nula.
                      <div className="my-2 pl-4 border-l-2 border-slate-300">
                        Decompondo: <MathFormula formula="\vec{F}_R = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0}" display={false} />.
                      </div>
                    </li>
                    <li>
                      <strong>Resposta:</strong> A força resultante é nula (<MathFormula formula="0 \, N" display={false} />).
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
                O campo elétrico <MathFormula formula="\vec{E}" display={false} /> em um ponto do espaço é definido como a força elétrica por unidade de carga que atuaria sobre uma carga de prova positiva <MathFormula formula="q_0" display={false} /> colocada nesse ponto, no limite em que <MathFormula formula="q_0 \to 0" display={false} /> (para não perturbar o sistema original).
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{E} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}" display={true} className="text-xl" />
                <p className="text-center text-sm text-slate-400 mt-2">Unidade no SI: Newton por Coulomb (N/C) ou Volt por metro (V/m)</p>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Para uma única carga pontual <MathFormula formula="Q" display={false} />, o campo elétrico a uma distância <MathFormula formula="r" display={false} /> é dado por:
              </p>
              <MathFormula formula="\vec{E} = k \frac{Q}{r^2} \hat{r}" display={true} />
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Carga Positiva (<MathFormula formula="Q > 0" display={false} />)</h4>
                  <p className="text-sm text-slate-700">O campo é <strong>divergente</strong> (aponta para fora da carga). As linhas de força "nascem" na carga positiva.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Carga Negativa (<MathFormula formula="Q < 0" display={false} />)</h4>
                  <p className="text-sm text-slate-700">O campo é <strong>convergente</strong> (aponta para a carga). As linhas de força "morrem" na carga negativa.</p>
                </div>
              </div>
            </div>

            {/* Distribuições Contínuas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Campo de Distribuições Contínuas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para corpos extensos (fios, placas, esferas), não podemos usar a fórmula da carga pontual diretamente. Devemos dividir o corpo em elementos infinitesimais de carga <MathFormula formula="dq" display={false} /> e integrar sobre todo o corpo:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{E} = \int d\vec{E} = \int k \frac{dq}{r^2} \hat{r}" display={true} />
                <div className="mt-4 text-sm text-slate-600">
                  <p className="mb-2"><strong>Densidades de Carga:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Linear (<MathFormula formula="\lambda" display={false} />): <MathFormula formula="dq = \lambda dl" display={false} /> (C/m)</li>
                    <li>Superficial (<MathFormula formula="\sigma" display={false} />): <MathFormula formula="dq = \sigma dA" display={false} /> (C/m²)</li>
                    <li>Volumétrica (<MathFormula formula="\rho" display={false} />): <MathFormula formula="dq = \rho dV" display={false} /> (C/m³)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">Exemplo Clássico: Anel Carregado</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Campo no eixo axial de um anel de raio <MathFormula formula="R" display={false} /> e carga total <MathFormula formula="Q" display={false} />, a uma distância <MathFormula formula="z" display={false} /> do centro:
                </p>
                <MathFormula formula="E_z = \frac{k Q z}{(R^2 + z^2)^{3/2}}" display={true} />
                <p className="text-xs text-slate-500 mt-2">
                  Nota: Se <MathFormula formula="z \gg R" display={false} />, o anel se comporta como uma carga pontual (<MathFormula formula="E \approx kQ/z^2" display={false} />).
                </p>
              </div>
            </div>

            {/* Linhas de Força */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Linhas de Força
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>O vetor campo elétrico <MathFormula formula="\vec{E}" display={false} /> é tangente à linha de força em cada ponto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>A densidade das linhas (número de linhas por unidade de área) é proporcional à intensidade do campo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Linhas de força nunca se cruzam (o campo é único em cada ponto).</span>
                </li>
              </ul>
            </div>

            {/* Exemplo Resolvido Dipolo */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido: Dipolo Elétrico
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Calcule o campo elétrico no ponto <MathFormula formula="P" display={false} /> localizado no eixo perpendicular que passa pelo ponto médio de um dipolo elétrico (duas cargas <MathFormula formula="+q" display={false} /> e <MathFormula formula="-q" display={false} /> separadas por uma distância <MathFormula formula="2a" display={false} />). O ponto <MathFormula formula="P" display={false} /> está a uma distância <MathFormula formula="y" display={false} /> do centro.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Geometria:</strong> A distância de cada carga ao ponto <MathFormula formula="P" display={false} /> é <MathFormula formula="r = \sqrt{a^2 + y^2}" display={false} />.
                    </li>
                    <li>
                      <strong>Campos Individuais:</strong> Os módulos são iguais: <MathFormula formula="E_+ = E_- = k \frac{q}{r^2} = k \frac{q}{a^2 + y^2}" display={false} />.
                    </li>
                    <li>
                      <strong>Decomposição:</strong> As componentes verticais (<MathFormula formula="y" display={false} />) se cancelam devido à simetria. As componentes horizontais (<MathFormula formula="x" display={false} />) se somam.
                      <br/>
                      <MathFormula formula="E_x = E_+ \cos\theta + E_- \cos\theta = 2 E_+ \cos\theta" display={false} />
                    </li>
                    <li>
                      <strong>Cosseno:</strong> Do triângulo retângulo, <MathFormula formula="\cos\theta = \frac{a}{r} = \frac{a}{\sqrt{a^2 + y^2}}" display={false} />.
                    </li>
                    <li>
                      <strong>Resultado Final:</strong> Substituindo:
                      <MathFormula formula="E_{resultante} = 2 \left( k \frac{q}{a^2 + y^2} \right) \left( \frac{a}{(a^2 + y^2)^{1/2}} \right) = \frac{k (2qa)}{(a^2 + y^2)^{3/2}}" display={true} />
                      Onde <MathFormula formula="p = 2qa" display={false} /> é o momento de dipolo elétrico.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔋 Potencial Elétrico e Trabalho (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Trabalho da Força Elétrica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Trabalho da Força Elétrica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A força eletrostática é uma <strong>força conservativa</strong>. Isso significa que o trabalho realizado por ela para mover uma carga de um ponto A para um ponto B independe da trajetória escolhida, dependendo apenas das posições inicial e final.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="W_{AB} = \int_A^B \vec{F}_{el} \cdot d\vec{l} = q \int_A^B \vec{E} \cdot d\vec{l}" display={true} />
                <p className="text-sm text-slate-600 mt-2">
                  Como a força é conservativa, o trabalho em um caminho fechado é nulo: <MathFormula formula="\oint \vec{E} \cdot d\vec{l} = 0" display={false} />.
                </p>
              </div>
            </div>

            {/* Potencial Elétrico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Potencial Elétrico (V)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O potencial elétrico em um ponto é definido como a energia potencial elétrica por unidade de carga. É uma grandeza escalar.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="V_P = \frac{U_P}{q}" display={true} className="text-xl" />
                <p className="text-center text-sm text-slate-400 mt-2">Unidade no SI: Joule por Coulomb (J/C) = Volt (V)</p>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Para uma carga pontual <MathFormula formula="Q" display={false} />, adotando o referencial no infinito (<MathFormula formula="V_{\infty} = 0" display={false} />), o potencial a uma distância <MathFormula formula="d" display={false} /> é:
              </p>
              <MathFormula formula="V = k \frac{Q}{d}" display={true} />
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Diferença de Potencial (ddp)
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  O trabalho realizado pela força elétrica para levar uma carga <MathFormula formula="q" display={false} /> de A para B está relacionado à diferença de potencial:
                </p>
                <MathFormula formula="W_{AB} = q(V_A - V_B) = -q\Delta V" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Cargas positivas tendem a se mover espontaneamente para regiões de <strong>menor potencial</strong>, enquanto cargas negativas movem-se para regiões de <strong>maior potencial</strong>.
                </p>
              </div>
            </div>

            {/* Relação Campo-Potencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Relação Campo-Potencial (Gradiente)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O campo elétrico é o gradiente negativo do potencial elétrico. Matematicamente:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{E} = -\nabla V" display={true} />
                <p className="text-sm text-slate-600 mt-2">
                  Em uma dimensão (ex: eixo x): <MathFormula formula="E_x = -\frac{dV}{dx}" display={false} />.
                </p>
              </div>
              
              <p className="text-slate-700 mb-4 leading-relaxed">
                Isso significa que o campo elétrico aponta sempre na direção de maior decrescimento do potencial.
              </p>
            </div>

            {/* Superfícies Equipotenciais */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Superfícies Equipotenciais
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>São superfícies onde o potencial elétrico é constante em todos os pontos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>As linhas de campo elétrico são sempre <strong>perpendiculares</strong> às superfícies equipotenciais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>O trabalho para mover uma carga sobre uma superfície equipotencial é nulo.</span>
                </li>
              </ul>
            </div>

            {/* Energia Potencial Eletrostática */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Energia Potencial de um Sistema
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A energia potencial eletrostática de um sistema de cargas é o trabalho externo necessário para montar esse sistema, trazendo as cargas do infinito até suas posições finais. Para um par de cargas:
              </p>
              <MathFormula formula="U = k \frac{q_1 q_2}{d}" display={true} />
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Energia de um Quadrado
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Qual a energia potencial total armazenada em um sistema de quatro cargas idênticas <MathFormula formula="q" display={false} /> colocadas nos vértices de um quadrado de lado <MathFormula formula="L" display={false} />?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <p className="text-slate-600 text-sm mb-2">Devemos somar as energias de interação de todos os pares possíveis (combinação de 4 tomados 2 a 2 = 6 pares).</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>
                        <strong>Pares nos lados (4 pares):</strong> Distância <MathFormula formula="L" display={false} />.
                        <br/>
                        <MathFormula formula="U_{lados} = 4 \cdot \left( k \frac{q^2}{L} \right)" display={false} />
                      </li>
                      <li>
                        <strong>Pares nas diagonais (2 pares):</strong> Distância <MathFormula formula="L\sqrt{2}" display={false} />.
                        <br/>
                        <MathFormula formula="U_{diag} = 2 \cdot \left( k \frac{q^2}{L\sqrt{2}} \right)" display={false} />
                      </li>
                      <li>
                        <strong>Energia Total:</strong>
                        <MathFormula formula="U_{total} = \frac{kq^2}{L} \left( 4 + \frac{2}{\sqrt{2}} \right) = \frac{kq^2}{L} (4 + \sqrt{2})" display={true} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
