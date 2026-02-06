import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2, Sigma, MousePointerClick } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletricidadeTopicMagnetismo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Magnetismo</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧲 Introdução ao Magnetismo</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Magnetismo?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Magnetismo</strong> é o ramo da física que estuda os fenômenos relacionados aos campos magnéticos, suas fontes (cargas em movimento e materiais magnéticos) e suas interações com cargas elétricas e correntes. Diferentemente da eletrostática, que estuda cargas em repouso, o magnetismo está intimamente ligado ao movimento de cargas.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Todo imã possui dois polos: norte e sul. Polos de mesmo tipo se repelem, enquanto polos opostos se atraem. Além disso, qualquer corrente elétrica (movimento de cargas) gera um campo magnético ao seu redor. Essa relação entre eletricidade e magnetismo é tão profunda que os dois fenômenos são frequentemente descritos como aspectos diferentes de uma única força: a força eletromagnética.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Princípios Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Monopólos Magnéticos Não Existem:</strong> Diferentemente das cargas elétricas, não é possível isolar um polo magnético. Se você quebrar um imã, obterá dois imãs menores, cada um com seus próprios polos norte e sul.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div className="flex flex-wrap items-center gap-1">
                    <strong>Campo Magnético é Produzido por Correntes:</strong> Uma corrente elétrica <MathFormula formula="I" display={false} /> gera um campo magnético <MathFormula formula="\vec{B}" display={false} /> ao seu redor. Quanto maior a corrente, mais intenso o campo.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div className="flex flex-wrap items-center gap-1">
                    <strong>Força Magnética sobre Cargas em Movimento:</strong> Uma carga <MathFormula formula="q" display={false} /> movendo-se com velocidade <MathFormula formula="\vec{v}" display={false} /> em um campo magnético <MathFormula formula="\vec{B}" display={false} /> experimenta uma força perpendicular tanto a <MathFormula formula="\vec{v}" display={false} /> quanto a <MathFormula formula="\vec{B}" display={false} />.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Força Magnética de Lorentz (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Formulação Vetorial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Força de Lorentz
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A força magnética que atua sobre uma carga elétrica <MathFormula formula="q" display={false} /> movendo-se com velocidade <MathFormula formula="\vec{v}" display={false} /> em um campo magnético <MathFormula formula="\vec{B}" display={false} /> é dada pela força de Lorentz. Esta é uma das equações mais fundamentais do eletromagnetismo.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F} = q \cdot \vec{v} \times \vec{B}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="q" display={false} />: Carga elétrica (C)</li>
                      <li><MathFormula formula="\vec{v}" display={false} />: Velocidade da carga (m/s)</li>
                      <li><MathFormula formula="\vec{B}" display={false} />: Campo magnético (T - Tesla)</li>
                      <li><MathFormula formula="\vec{F}" display={false} />: Força magnética (N)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Propriedades do Produto Vetorial:</p>
                    <p>
                      A força é <strong>perpendicular</strong> tanto a <MathFormula formula="\vec{v}" display={false} /> quanto a <MathFormula formula="\vec{B}" display={false} />. 
                      <br/>
                      Se <MathFormula formula="\vec{v}" display={false} /> é paralelo a <MathFormula formula="\vec{B}" display={false} />, então <MathFormula formula="\vec{F} = 0" display={false} />.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Módulo da Força Magnética
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  O módulo da força é dado por:
                </p>
                <MathFormula formula="F = q \cdot v \cdot B \cdot \sin(\theta)" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  onde <MathFormula formula="\theta" display={false} /> é o ângulo entre <MathFormula formula="\vec{v}" display={false} /> e <MathFormula formula="\vec{B}" display={false} />.
                </p>
                <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                  <li>Se <MathFormula formula="\theta = 90^\circ" display={false} />, então <MathFormula formula="F_{\max} = qvB" display={false} /> (força máxima)</li>
                  <li>Se <MathFormula formula="\theta = 0^\circ" display={false} /> ou <MathFormula formula="180^\circ" display={false} />, então <MathFormula formula="F = 0" display={false} /> (força nula)</li>
                </ul>
              </div>
            </div>

            {/* Movimento em Campo Uniforme */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Movimento de Carga em Campo Magnético Uniforme
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando uma carga entra em um campo magnético uniforme com velocidade perpendicular ao campo, a força magnética atua como uma força centrípeta, fazendo a carga descrever um movimento circular uniforme.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <p className="text-slate-700">
                    A força centrípeta é fornecida pela força magnética:
                  </p>
                  <MathFormula formula="q \cdot v \cdot B = \frac{m \cdot v^2}{r}" display={true} />
                  <p className="text-slate-700">
                    Resolvendo para o raio da trajetória circular:
                  </p>
                  <MathFormula formula="r = \frac{m \cdot v}{q \cdot B}" display={true} />
                  <p className="text-slate-700 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100">
                    <strong>Interpretação:</strong> O raio é proporcional à massa e velocidade da carga, e inversamente proporcional à carga e ao campo magnético. Cargas mais pesadas ou mais rápidas descrevem trajetórias maiores.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-800 text-sm">Período do Movimento Circular</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      O período (tempo para completar uma volta) é:
                    </p>
                    <MathFormula formula="T = \frac{2\pi r}{v} = \frac{2\pi m}{q \cdot B}" display={true} className="mt-2" />
                    <p className="text-sm text-yellow-700 mt-2">
                      Observe que <MathFormula formula="T" display={false} /> é <strong>independente da velocidade</strong>! Isso é fundamental para o funcionamento de aceleradores de partículas como o ciclotron.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Força em Condutores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Força Magnética em Condutores com Corrente
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um fio condutor transportando uma corrente elétrica em um campo magnético experimenta uma força. Isso ocorre porque a corrente é constituída por cargas em movimento, e cada uma delas sofre a força de Lorentz.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F} = I \cdot \vec{L} \times \vec{B}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="I" display={false} />: Corrente elétrica (A)</li>
                      <li><MathFormula formula="\vec{L}" display={false} />: Vetor comprimento do fio (m)</li>
                      <li><MathFormula formula="\vec{B}" display={false} />: Campo magnético (T)</li>
                      <li><MathFormula formula="\vec{F}" display={false} />: Força no fio (N)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Módulo da Força:</p>
                    <MathFormula formula="F = I \cdot L \cdot B \cdot \sin(\theta)" display={false} />
                    <p className="mt-2">
                      onde <MathFormula formula="\theta" display={false} /> é o ângulo entre o fio e o campo magnético.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Direção da Força: Regra da Mão Direita</h4>
                    <p className="text-sm text-orange-700 mt-1">
                      Para determinar a direção de <MathFormula formula="\vec{F}" display={false} />, use a regra da mão direita: aponte os dedos na direção da corrente <MathFormula formula="I" display={false} />, dobre-os na direção de <MathFormula formula="\vec{B}" display={false} />, e o polegar apontará na direção de <MathFormula formula="\vec{F}" display={false} />.
                    </p>
                  </div>
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
                  <strong>Enunciado:</strong> Um elétron com carga <MathFormula formula="e = 1,6 \times 10^{-19} C" display={false} /> e massa <MathFormula formula="m = 9,1 \times 10^{-31} kg" display={false} /> entra em um campo magnético uniforme <MathFormula formula="B = 0,1 T" display={false} /> com velocidade <MathFormula formula="v = 2 \times 10^6 m/s" display={false} /> perpendicular ao campo. Determine o raio da trajetória circular.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Identificação:</strong> O elétron move-se perpendicular a <MathFormula formula="\vec{B}" display={false} />, então descreverá uma trajetória circular.
                    </li>
                    <li>
                      <strong>Aplicação da Fórmula:</strong> Usamos <MathFormula formula="r = \frac{m \cdot v}{q \cdot B}" display={false} />.
                    </li>
                    <li>
                      <strong>Substituição:</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-300">
                        <MathFormula formula="r = \frac{9,1 \times 10^{-31} \times 2 \times 10^6}{1,6 \times 10^{-19} \times 0,1}" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Cálculo:</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-300">
                        <MathFormula formula="r = \frac{1,82 \times 10^{-24}}{1,6 \times 10^{-20}} = 1,14 \times 10^{-4} m \approx 0,114 mm" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Resposta:</strong> O raio da trajetória é aproximadamente <MathFormula formula="0,114 mm" display={false} />, um valor muito pequeno, típico de partículas subatômicas em campos magnéticos.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Lei de Ampère (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Lei de Ampère */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Formulação Integral
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère relaciona o campo magnético ao redor de um condutor com a corrente que flui através dele. Ela estabelece que a circulação do campo magnético ao longo de um caminho fechado é proporcional à corrente envolvida por esse caminho.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 \cdot I_{\text{envolvida}}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\oint \vec{B} \cdot d\vec{l}" display={false} />: Circulação do campo magnético (integral de linha fechada)</li>
                    <li><MathFormula formula="\mu_0" display={false} />: Permeabilidade magnética do vácuo (<MathFormula formula="\mu_0 = 4\pi \times 10^{-7} T \cdot m/A" display={false} />)</li>
                    <li><MathFormula formula="I_{\text{envolvida}}" display={false} />: Corrente total que passa através da superfície delimitada pelo caminho</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Campo Magnético de um Fio Reto Infinito
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Para um fio reto transportando corrente <MathFormula formula="I" display={false} />, o campo magnético a uma distância <MathFormula formula="r" display={false} /> é:
                </p>
                <MathFormula formula="B = \frac{\mu_0 \cdot I}{2\pi r}" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  As linhas de campo são círculos concêntricos ao fio. A direção é dada pela regra da mão direita: aponte o polegar na direção da corrente, e os dedos indicarão a direção do campo.
                </p>
              </div>
            </div>

            {/* Campo em Solenóide */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Campo Magnético em Solenóide
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um solenóide é uma bobina de fio enrolado em forma de hélice. Quando uma corrente passa por ele, gera um campo magnético uniforme no seu interior, similar ao de um imã de barra.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700 mb-3">
                  Para um solenóide ideal (infinitamente longo ou com extremidades desprezíveis), o campo magnético no interior é:
                </p>
                <MathFormula formula="B = \mu_0 \cdot n \cdot I" display={true} />
                <p className="text-slate-700 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100 mt-4">
                  onde <MathFormula formula="n" display={false} /> é o número de espiras por unidade de comprimento (<MathFormula formula="n = N/L" display={false} />, com <MathFormula formula="N" display={false} /> sendo o número total de espiras e <MathFormula formula="L" display={false} /> o comprimento).
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-800 text-sm">Características do Campo em Solenóide</h4>
                    <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                      <li>• <strong>Interior:</strong> Campo uniforme e paralelo ao eixo</li>
                      <li>• <strong>Exterior:</strong> Campo praticamente nulo (ideal)</li>
                      <li>• <strong>Intensidade:</strong> Proporcional à corrente e ao número de espiras</li>
                      <li>• <strong>Aplicações:</strong> Eletroímãs, relés, transformadores</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📡 Indução Eletromagnética (Lei de Faraday)</h2>
          
          <div className="space-y-8">
            {/* Lei de Faraday */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Lei de Faraday da Indução
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Michael Faraday descobriu que uma variação no fluxo magnético através de um circuito induz uma força eletromotriz (FEM) nesse circuito. Esta é uma das leis mais importantes do eletromagnetismo, pois fundamenta o funcionamento de geradores, transformadores e muitos outros dispositivos.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\mathcal{E} = -\frac{d\Phi_B}{dt}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\mathcal{E}" display={false} />: Força eletromotriz induzida (V)</li>
                    <li><MathFormula formula="\Phi_B" display={false} />: Fluxo magnético através do circuito (Wb - Weber)</li>
                    <li><MathFormula formula="\frac{d\Phi_B}{dt}" display={false} />: Taxa de variação do fluxo magnético</li>
                    <li>O sinal negativo representa a Lei de Lenz (ver abaixo)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Fluxo Magnético
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  O fluxo magnético através de uma superfície é definido como:
                </p>
                <MathFormula formula="\Phi_B = \int \vec{B} \cdot d\vec{A} = B \cdot A \cdot \cos(\theta)" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Para um campo uniforme perpendicular à superfície, <MathFormula formula="\Phi_B = B \cdot A" display={false} /> (em Weber, Wb).
                </p>
              </div>
            </div>

            {/* Lei de Lenz */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Lei de Lenz
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Lenz é uma consequência da Lei de Faraday e descreve a direção da corrente induzida. Ela estabelece que a corrente induzida sempre se opõe à variação de fluxo que a causou.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-800 text-sm">Enunciado da Lei de Lenz</h4>
                    <p className="text-sm text-red-700 mt-1">
                      A corrente induzida em um circuito cria um campo magnético que <strong>se opõe</strong> à variação do fluxo magnético que a induziu.
                    </p>
                    <p className="text-sm text-red-700 mt-2">
                      <strong>Implicação:</strong> Se o fluxo magnético através de um circuito aumenta, a corrente induzida cria um campo que tenta diminuir esse fluxo. Se o fluxo diminui, a corrente induzida cria um campo que tenta aumentá-lo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformadores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Transformadores
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um transformador é um dispositivo que usa indução eletromagnética para converter tensões e correntes alternadas. Ele consiste em duas bobinas (primária e secundária) enroladas em um núcleo de ferro comum.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700 mb-3">
                  A relação entre as tensões primária e secundária é dada por:
                </p>
                <MathFormula formula="\frac{V_2}{V_1} = \frac{N_2}{N_1}" display={true} />
                <p className="text-slate-700 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100 mt-4">
                  onde <MathFormula formula="V_1, V_2" display={false} /> são as tensões e <MathFormula formula="N_1, N_2" display={false} /> são os números de espiras nas bobinas primária e secundária.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Transformador Step-Up (Elevador)</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li><MathFormula formula="N_2 > N_1" display={false} /></li>
                    <li><MathFormula formula="V_2 > V_1" display={false} /> (tensão aumenta)</li>
                    <li><MathFormula formula="I_2 < I_1" display={false} /> (corrente diminui)</li>
                    <li>Usado na transmissão de energia a longas distâncias</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Transformador Step-Down (Abaixador)</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li><MathFormula formula="N_2 < N_1" display={false} /></li>
                    <li><MathFormula formula="V_2 < V_1" display={false} /> (tensão diminui)</li>
                    <li><MathFormula formula="I_2 > I_1" display={false} /> (corrente aumenta)</li>
                    <li>Usado para reduzir tensão para uso doméstico</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-800 text-sm">Conservação de Energia em Transformadores Ideais</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Em um transformador ideal (sem perdas), a potência é conservada:
                    </p>
                    <MathFormula formula="P_1 = P_2 \Rightarrow V_1 \cdot I_1 = V_2 \cdot I_2" display={true} className="mt-2" />
                    <p className="text-sm text-yellow-700 mt-2">
                      <strong>Aplicação Prática:</strong> Na transmissão de energia elétrica, transformadores step-up aumentam a tensão e reduzem a corrente, minimizando as perdas por efeito Joule (<MathFormula formula="P_{\text{perda}} = I^2 R" display={false} />) durante o transporte.
                    </p>
                  </div>
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
                  <strong>Enunciado:</strong> Um transformador tem 100 espiras na bobina primária e 500 espiras na bobina secundária. A tensão primária é <MathFormula formula="V_1 = 220 V" display={false} /> e a corrente primária é <MathFormula formula="I_1 = 10 A" display={false} />. Determine a tensão e a corrente secundárias (assumindo transformador ideal).
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Relação de Tensões:</strong> <MathFormula formula="\frac{V_2}{V_1} = \frac{N_2}{N_1} = \frac{500}{100} = 5" display={false} />
                    </li>
                    <li>
                      <strong>Tensão Secundária:</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-300">
                        <MathFormula formula="V_2 = V_1 \times 5 = 220 \times 5 = 1100 V" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Corrente Secundária (Conservação de Potência):</strong>
                      <div className="my-2 pl-4 border-l-2 border-slate-300">
                        <MathFormula formula="I_2 = \frac{V_1 \cdot I_1}{V_2} = \frac{220 \times 10}{1100} = 2 A" display={true} />
                      </div>
                    </li>
                    <li>
                      <strong>Resposta:</strong> A tensão secundária é <MathFormula formula="1100 V" display={false} /> e a corrente é <MathFormula formula="2 A" display={false} />. Este é um transformador step-up que aumenta a tensão em 5 vezes e reduz a corrente em 5 vezes.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagens Educacionais */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Diagramas Educacionais</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src="/lei-ampere-pt.jpg" alt="Lei de Ampère" className="w-full h-auto" />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Lei de Ampère:</strong> Campo magnético ao redor de um fio com corrente</p>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src="/forca-lorentz-pt.jpg" alt="Força de Lorentz" className="w-full h-auto" />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Força de Lorentz:</strong> Trajetória circular de carga em campo magnético</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src="/inducao-faraday-pt.jpg" alt="Indução de Faraday" className="w-full h-auto" />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Indução de Faraday:</strong> Variação de fluxo induz FEM</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src="/campo-magnetico-solenoid-pt.jpg" alt="Campo em Solenóide" className="w-full h-auto" />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Campo em Solenóide:</strong> Campo uniforme no interior da bobina</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img src="/transformador-pt.jpg" alt="Transformador" className="w-full h-auto" />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Transformador:</strong> Conversão de tensão e corrente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
