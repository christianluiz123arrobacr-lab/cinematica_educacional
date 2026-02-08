import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function MecanicaTopicCinematica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/mecanica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Mecânica</h1>
              <p className="text-xs text-slate-600">Cinemática</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* INTRODUÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📍 Introdução à Cinemática</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Cinemática?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Cinemática é o ramo da Mecânica que descreve o movimento dos corpos sem considerar as causas (forças) que o produzem.</strong> Ela estuda as grandezas cinemáticas: posição, deslocamento, velocidade e aceleração, respondendo a pergunta "Como o objeto se move?" sem se preocupar com "Por que se move assim?"
              </p>
              <p className="text-slate-700 leading-relaxed">
                A Cinemática foi desenvolvida sistematicamente por Galileu Galilei no século XVI e XVII, revolucionando a forma como compreendemos o movimento. Ela é a base para toda a Dinâmica e é essencial para descrever fenômenos desde o movimento de projéteis até a órbita de satélites.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Posição (x ou s):</strong> Localização do objeto em relação a um referencial (origem). É uma grandeza vetorial. Unidade: metro (m).</p>
                <p><strong>Deslocamento (Δx):</strong> Variação de posição entre dois instantes. <MathFormula formula="\Delta x = x_{final} - x_{inicial}" display={false} />. É um vetor, não depende do caminho percorrido.</p>
                <p><strong>Distância (d):</strong> Comprimento total do caminho percorrido. É um escalar (sempre positivo), diferente do deslocamento.</p>
                <p><strong>Velocidade (v):</strong> Taxa de variação da posição em relação ao tempo. <MathFormula formula="v = \frac{\Delta x}{\Delta t}" display={false} />. Pode ser média ou instantânea.</p>
                <p><strong>Aceleração (a):</strong> Taxa de variação da velocidade em relação ao tempo. <MathFormula formula="a = \frac{\Delta v}{\Delta t}" display={false} />. Mede como a velocidade muda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOVIMENTO RETILÍNEO UNIFORME (MRU) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Movimento Retilíneo Uniforme (MRU) - Aprofundado</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto Histórico e Importância
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O Movimento Retilíneo Uniforme (MRU) é o tipo mais simples de movimento. Galileu o identificou como o movimento natural de um corpo quando nenhuma força atua sobre ele (Primeira Lei de Newton). O MRU é fundamental para compreender movimentos mais complexos e é usado como referencial em muitos problemas de Física.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Por que MRU é Importante?</h4>
                <p className="text-slate-700 text-sm">
                  O MRU é a base para compreender movimentos mais complexos. Qualquer movimento pode ser decomposto em componentes de MRU. Além disso, é o movimento de referência em sistemas inerciais (referenciais onde a Primeira Lei de Newton é válida).
                </p>
              </div>
            </div>

            {/* Formulação Escalar */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Formulação Escalar
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                No MRU, a velocidade é constante em magnitude e direção. Isso significa que o objeto percorre distâncias iguais em intervalos de tempo iguais, e a aceleração é nula.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="x = x_0 + v \cdot t" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="x" display={false} />: Posição final (m)</li>
                      <li><MathFormula formula="x_0" display={false} />: Posição inicial (m)</li>
                      <li><MathFormula formula="v" display={false} />: Velocidade constante (m/s)</li>
                      <li><MathFormula formula="t" display={false} />: Tempo (s)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Características do MRU
                </h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p>• Velocidade é <strong>constante</strong>: <MathFormula formula="v = \text{constante}" display={false} /></p>
                  <p>• Aceleração é <strong>nula</strong>: <MathFormula formula="a = 0" display={false} /></p>
                  <p>• Gráfico posição-tempo é uma <strong>reta</strong></p>
                  <p>• Gráfico velocidade-tempo é uma <strong>reta horizontal</strong></p>
                </div>
              </div>
            </div>

            {/* Formulação Vetorial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Formulação Vetorial (Rigor Matemático)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para problemas em 2D ou 3D, a forma vetorial é indispensável. O vetor deslocamento é o produto da velocidade (vetor) pelo intervalo de tempo:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{r}(t) = \vec{r}_0 + \vec{v} \cdot t" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\vec{r}(t)" display={false} />: Vetor posição em função do tempo</li>
                      <li><MathFormula formula="\vec{r}_0" display={false} />: Vetor posição inicial</li>
                      <li><MathFormula formula="\vec{v}" display={false} />: Vetor velocidade (constante)</li>
                      <li><MathFormula formula="t" display={false} />: Tempo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Componentes:</p>
                    <p className="text-sm">Em componentes cartesianas:</p>
                    <MathFormula formula="x = x_0 + v_x t \quad ; \quad y = y_0 + v_y t" display={false} />
                  </div>
                </div>
              </div>
            </div>

            {/* Análise Gráfica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Análise Gráfica
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2 text-center">Posição x Tempo (<MathFormula formula="x \times t" display={false} />)</h4>
                  <div className="h-48 flex items-center justify-center bg-white rounded border border-slate-100 mb-2">
                    <div className="relative w-full h-full p-4">
                      <div className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[1px] bg-slate-400"></div>
                      <div className="absolute left-8 bottom-8 w-[1px] h-[calc(100%-4rem)] bg-slate-400"></div>
                      <svg className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] overflow-visible">
                        <line x1="0" y1="100" x2="150" y2="20" stroke="#3b82f6" strokeWidth="2" />
                      </svg>
                      <span className="absolute bottom-2 right-4 text-xs font-bold">t</span>
                      <span className="absolute top-4 left-2 text-xs font-bold">x</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 text-center">
                    Reta com inclinação <MathFormula formula="v" display={false} />. A posição cresce linearmente com o tempo.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2 text-center">Velocidade x Tempo (<MathFormula formula="v \times t" display={false} />)</h4>
                  <div className="h-48 flex items-center justify-center bg-white rounded border border-slate-100 mb-2">
                    <div className="relative w-full h-full p-4">
                      <div className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[1px] bg-slate-400"></div>
                      <div className="absolute left-8 bottom-8 w-[1px] h-[calc(100%-4rem)] bg-slate-400"></div>
                      <svg className="absolute left-8 bottom-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] overflow-visible">
                        <line x1="0" y1="60" x2="150" y2="60" stroke="#3b82f6" strokeWidth="2" />
                      </svg>
                      <span className="absolute bottom-2 right-4 text-xs font-bold">t</span>
                      <span className="absolute top-4 left-2 text-xs font-bold">v</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 text-center">
                    Reta horizontal. A velocidade é constante. Área sob a curva = deslocamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo a Passo */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📋 Passo a Passo: Resolver Problemas de MRU</h3>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                  <span><strong>Identifique o tipo de movimento:</strong> Verifique se a velocidade é constante (MRU) ou não.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                  <span><strong>Escolha um referencial:</strong> Defina a origem (x₀) e o sentido positivo do movimento.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                  <span><strong>Identifique os dados:</strong> Posição inicial, velocidade, tempo ou distância.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                  <span><strong>Aplique a equação:</strong> Use <MathFormula formula="x = x_0 + vt" display={false} /> ou <MathFormula formula="v = \frac{\Delta x}{\Delta t}" display={false} />.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                  <span><strong>Resolva algebricamente:</strong> Isole a variável desejada.</span>
                </li>
              </ol>
            </div>

            {/* Exemplos Resolvidos */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplos Resolvidos (Nível ITA/IME)
              </h3>

              {/* Exemplo 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Cálculo de Tempo</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um carro se move em MRU com velocidade v = 20 m/s. Qual o tempo necessário para percorrer uma distância de 100 m?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>Dados: <MathFormula formula="v = 20 \text{ m/s}" display={false} />, <MathFormula formula="\Delta x = 100 \text{ m}" display={false} /></li>
                      <li>Fórmula: <MathFormula formula="v = \frac{\Delta x}{\Delta t}" display={true} /></li>
                      <li>Isolando t: <MathFormula formula="\Delta t = \frac{\Delta x}{v} = \frac{100}{20} = 5 \text{ s}" display={true} /></li>
                    </ol>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O tempo necessário é <strong>5 segundos</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Encontro de Dois Móveis</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Dois carros partem simultaneamente de um mesmo ponto em sentidos opostos. O carro A tem velocidade v_A = 30 m/s e o carro B tem velocidade v_B = 20 m/s. Qual a distância entre eles após 10 segundos?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>Distância percorrida por A: <MathFormula formula="x_A = v_A \cdot t = 30 \times 10 = 300 \text{ m}" display={true} /></li>
                      <li>Distância percorrida por B: <MathFormula formula="x_B = v_B \cdot t = 20 \times 10 = 200 \text{ m}" display={true} /></li>
                      <li>Distância entre eles (em sentidos opostos): <MathFormula formula="d = x_A + x_B = 300 + 200 = 500 \text{ m}" display={true} /></li>
                    </ol>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A distância entre os carros é <strong>500 metros</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 3 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 3: Alcance em MRU</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um carro A está 50 m atrás de um carro B. Ambos se movem em MRU na mesma direção. O carro A tem velocidade 25 m/s e o carro B tem velocidade 15 m/s. Quanto tempo leva para o carro A alcançar o carro B?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>Posição de A: <MathFormula formula="x_A = 0 + 25t" display={false} /></li>
                      <li>Posição de B: <MathFormula formula="x_B = 50 + 15t" display={false} /></li>
                      <li>Encontro quando <MathFormula formula="x_A = x_B" display={false} />: <MathFormula formula="25t = 50 + 15t" display={true} /></li>
                      <li>Resolvendo: <MathFormula formula="10t = 50 \Rightarrow t = 5 \text{ s}" display={true} /></li>
                    </ol>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O carro A alcança o carro B em <strong>5 segundos</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOVIMENTO RETILÍNEO UNIFORMEMENTE VARIADO (MRUV) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Movimento Retilíneo Uniformemente Variado (MRUV) - Aprofundado</h2>
          
          <div className="space-y-8">
            {/* Definição */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Definição e Características
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                No MRUV, a aceleração é constante (não nula). Isso significa que a velocidade varia uniformemente com o tempo, aumentando ou diminuindo de forma linear.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="v = v_0 + a \cdot t" display={true} className="text-xl mb-4" />
                    <MathFormula formula="x = x_0 + v_0 t + \frac{1}{2}a t^2" display={true} className="text-xl mb-4" />
                    <MathFormula formula="v^2 = v_0^2 + 2a\Delta x" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="v" display={false} />: Velocidade final (m/s)</li>
                      <li><MathFormula formula="v_0" display={false} />: Velocidade inicial (m/s)</li>
                      <li><MathFormula formula="a" display={false} />: Aceleração (m/s²)</li>
                      <li><MathFormula formula="t" display={false} />: Tempo (s)</li>
                      <li><MathFormula formula="x" display={false} />: Posição final (m)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Características do MRUV
                </h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p>• Aceleração é <strong>constante</strong> e <strong>não nula</strong>: <MathFormula formula="a \neq 0" display={false} /></p>
                  <p>• Velocidade varia <strong>linearmente</strong> com o tempo</p>
                  <p>• Gráfico posição-tempo é uma <strong>parábola</strong></p>
                  <p>• Gráfico velocidade-tempo é uma <strong>reta inclinada</strong></p>
                </div>
              </div>
            </div>

            {/* Exemplos MRUV */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplos Resolvidos (MRUV)
              </h3>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Carro Acelerando</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um carro parte do repouso (v₀ = 0) com aceleração constante a = 5 m/s². Qual é a velocidade após 4 segundos?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>Dados: <MathFormula formula="v_0 = 0" display={false} />, <MathFormula formula="a = 5 \text{ m/s}^2" display={false} />, <MathFormula formula="t = 4 \text{ s}" display={false} /></li>
                      <li>Fórmula: <MathFormula formula="v = v_0 + at" display={true} /></li>
                      <li>Cálculo: <MathFormula formula="v = 0 + 5 \times 4 = 20 \text{ m/s}" display={true} /></li>
                    </ol>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A velocidade após 4 segundos é <strong>20 m/s</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Distância Percorrida em MRUV</h4>
                <div className="space-y-3">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um objeto é lançado verticalmente para cima com velocidade inicial v₀ = 20 m/s. Considerando g = 10 m/s² (aceleração da gravidade), qual é a altura máxima atingida?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                      <li>Na altura máxima, v = 0: <MathFormula formula="v^2 = v_0^2 - 2g h" display={true} /></li>
                      <li>Substituindo: <MathFormula formula="0 = 20^2 - 2 \times 10 \times h" display={true} /></li>
                      <li>Resolvendo: <MathFormula formula="20h = 400 \Rightarrow h = 20 \text{ m}" display={true} /></li>
                    </ol>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A altura máxima é <strong>20 metros</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-blue-900 mb-2">Próximos Tópicos</h4>
          <p className="text-blue-800 text-sm">
            Agora que você compreende os movimentos básicos, explore <strong>Dinâmica</strong> para entender as forças que causam esses movimentos, e <strong>Trabalho e Energia</strong> para uma perspectiva diferente da Mecânica.
          </p>
        </div>
      </section>
    </div>
  );
}
