import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletricidadeTopicPotencialEletrico() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-indigo-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Potencial Elétrico</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Introdução ao Potencial Elétrico</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Potencial Elétrico?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Potencial Elétrico</strong> é uma grandeza escalar que descreve a energia potencial elétrica por unidade de carga em um ponto do espaço. Enquanto o campo elétrico é uma grandeza vetorial que descreve a força por unidade de carga, o potencial elétrico é uma grandeza escalar que descreve a energia por unidade de carga.
              </p>
              <p className="text-slate-700 leading-relaxed">
                O conceito de potencial é fundamental na eletrostática porque permite transformar um problema vetorial complexo em um problema escalar mais simples. Além disso, o potencial elétrico está diretamente relacionado ao trabalho realizado por forças elétricas, o que o torna essencial para entender a dinâmica de cargas em campos elétricos.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Relação Fundamental: Potencial e Campo</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Potencial como Energia:</strong> O potencial elétrico em um ponto é definido como a energia potencial elétrica por unidade de carga de prova positiva naquele ponto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Relação com Campo:</strong> O campo elétrico é o negativo do gradiente do potencial: <MathFormula formula="\vec{E} = -\nabla V" display={false} />. Em uma dimensão: <MathFormula formula="E = -\frac{dV}{dx}" display={false} />.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Unidade:</strong> O potencial é medido em Volts (V), onde <MathFormula formula="1 \, V = 1 \, J/C" display={false} /> (1 Joule por Coulomb).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Definição Rigorosa do Potencial Elétrico</h2>
          
          <div className="space-y-8">
            {/* Definição Escalar */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Definição de Potencial Elétrico
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O potencial elétrico <MathFormula formula="V" display={false} /> em um ponto P do espaço é definido como o trabalho realizado pela força elétrica para trazer uma carga de prova positiva unitária <MathFormula formula="q_0 = 1 \, C" display={false} /> do infinito até o ponto P, dividido pela carga:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="V_P = \frac{W_{\infty \to P}}{q_0}" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="V_P" display={false} />: Potencial elétrico no ponto P (V)</li>
                      <li><MathFormula formula="W_{\infty \to P}" display={false} />: Trabalho realizado pela força elétrica (J)</li>
                      <li><MathFormula formula="q_0" display={false} />: Carga de prova (C)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Alternativamente, o potencial pode ser definido em termos da energia potencial elétrica:
              </p>
              <MathFormula formula="V = \frac{U}{q_0}" display={true} />
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Interpretação Física
                </h4>
                <p className="text-slate-700 text-sm">
                  O potencial elétrico em um ponto representa a quantidade de energia (em Joules) que uma carga de 1 Coulomb teria se colocada naquele ponto. Um potencial de 100 V significa que uma carga de 1 C teria 100 J de energia potencial elétrica naquele ponto.
                </p>
              </div>
            </div>

            {/* Potencial de Carga Pontual */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Potencial de uma Carga Pontual
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para uma carga pontual <MathFormula formula="Q" display={false} /> fixa no espaço, o potencial elétrico a uma distância <MathFormula formula="r" display={false} /> dela é obtido integrando o campo elétrico:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="V(r) = k \frac{Q}{r}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="k \approx 9,0 \times 10^9 \, N \cdot m^2/C^2" display={false} />: Constante eletrostática</li>
                    <li><MathFormula formula="Q" display={false} />: Carga geradora do potencial (C)</li>
                    <li><MathFormula formula="r" display={false} />: Distância da carga ao ponto (m)</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Carga Positiva (<MathFormula formula="Q > 0" display={false} />)</h4>
                  <p className="text-sm text-slate-700">O potencial é <strong>positivo</strong> em todos os pontos. Quanto mais próximo da carga, maior o potencial.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Carga Negativa (<MathFormula formula="Q < 0" display={false} />)</h4>
                  <p className="text-sm text-slate-700">O potencial é <strong>negativo</strong> em todos os pontos. Quanto mais próximo da carga, menor (mais negativo) o potencial.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-6">
                <h4 className="font-bold text-slate-800 mb-2">Dedução da Fórmula</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Partindo da definição de potencial como trabalho, integramos o campo elétrico:
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 text-sm text-slate-700 space-y-2">
                  <p><MathFormula formula="V(r) = -\int_{\infty}^{r} \vec{E} \cdot d\vec{l}" display={false} /></p>
                  <p><MathFormula formula="V(r) = -\int_{\infty}^{r} k\frac{Q}{r'^2} dr'" display={false} /></p>
                  <p><MathFormula formula="V(r) = -kQ \left[ -\frac{1}{r'} \right]_{\infty}^{r}" display={false} /></p>
                  <p><MathFormula formula="V(r) = k\frac{Q}{r}" display={false} /></p>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
                <img 
                  src="/images/potencial-eletrico-pt.jpg" 
                  alt="Potencial Elétrico"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Superposição de Potenciais */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Princípio da Superposição
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Assim como o campo elétrico, o potencial elétrico obedece ao princípio da superposição. O potencial total em um ponto devido a um sistema de cargas é a soma algébrica dos potenciais individuais:
              </p>
              <MathFormula formula="V_{\text{total}} = V_1 + V_2 + ... + V_N = \sum_{i=1}^{N} k\frac{q_i}{r_i}" display={true} />
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Vantagem sobre Campo Elétrico</h4>
                    <p className="text-sm text-orange-700">
                      Diferentemente do campo elétrico (que é vetorial), o potencial é escalar. Portanto, não precisamos nos preocupar com direções e sentidos — apenas somamos os valores numéricos!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diferença de Potencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Diferença de Potencial e Trabalho
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A diferença de potencial entre dois pontos A e B é definida como:
              </p>
              <MathFormula formula="U_{AB} = V_A - V_B" display={true} />
              
              <p className="text-slate-700 mb-4 leading-relaxed">
                O trabalho realizado pela força elétrica para deslocar uma carga <MathFormula formula="q" display={false} /> de A para B é:
              </p>
              <MathFormula formula="W_{AB} = q \cdot U_{AB} = q(V_A - V_B)" display={true} />
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2">Trabalho Positivo</h4>
                  <p className="text-sm text-slate-700">
                    Ocorre quando <MathFormula formula="q(V_A - V_B) > 0" display={false} />. A força elétrica realiza trabalho, aumentando a energia cinética da carga.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2">Trabalho Negativo</h4>
                  <p className="text-sm text-slate-700">
                    Ocorre quando <MathFormula formula="q(V_A - V_B) < 0" display={false} />. A força elétrica resiste ao movimento, diminuindo a energia cinética da carga.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Conservação de Energia
                </h4>
                <p className="text-slate-700 text-sm">
                  A energia total da carga é conservada: <MathFormula formula="K_A + U_A = K_B + U_B" display={false} />, onde <MathFormula formula="U = qV" display={false} /> é a energia potencial elétrica.
                </p>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100">
                <img 
                  src="/images/trabalho-potencial-energia-pt.jpg" 
                  alt="Trabalho e Potencial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Superfícies Equipotenciais */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Superfícies Equipotenciais
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Uma <strong>superfície equipotencial</strong> é o conjunto de todos os pontos do espaço que possuem o mesmo potencial elétrico. Essas superfícies são perpendiculares às linhas de força do campo elétrico.
              </p>
              
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span><strong>Propriedade 1:</strong> O campo elétrico é sempre perpendicular às superfícies equipotenciais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span><strong>Propriedade 2:</strong> Não há trabalho realizado ao deslocar uma carga sobre uma superfície equipotencial (<MathFormula formula="W = 0" display={false} />).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span><strong>Propriedade 3:</strong> Para uma carga pontual, as superfícies equipotenciais são esferas concêntricas.</span>
                </li>
              </ul>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">Exemplo: Carga Pontual</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Para uma carga pontual <MathFormula formula="Q" display={false} />, as superfícies equipotenciais são esferas de raio <MathFormula formula="r" display={false} /> onde:
                </p>
                <MathFormula formula="V = k\frac{Q}{r} = \text{constante}" display={true} />
                <p className="text-xs text-slate-500 mt-2">
                  Todos os pontos a uma mesma distância da carga têm o mesmo potencial.
                </p>
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
                  <strong>Enunciado:</strong> Duas cargas pontuais <MathFormula formula="q_1 = +2 \, \mu C" display={false} /> e <MathFormula formula="q_2 = -3 \, \mu C" display={false} /> estão separadas por uma distância <MathFormula formula="d = 0,5 \, m" display={false} />. Calcule o potencial elétrico no ponto médio entre as duas cargas.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Distância de cada carga ao ponto médio:</strong> <MathFormula formula="r_1 = r_2 = \frac{d}{2} = 0,25 \, m" display={false} />.
                    </li>
                    <li>
                      <strong>Potencial devido a q₁:</strong> <MathFormula formula="V_1 = k\frac{q_1}{r_1} = 9 \times 10^9 \times \frac{2 \times 10^{-6}}{0,25}" display={false} /> <MathFormula formula="= 7,2 \times 10^4 \, V" display={false} />.
                    </li>
                    <li>
                      <strong>Potencial devido a q₂:</strong> <MathFormula formula="V_2 = k\frac{q_2}{r_2} = 9 \times 10^9 \times \frac{-3 \times 10^{-6}}{0,25}" display={false} /> <MathFormula formula="= -1,08 \times 10^5 \, V" display={false} />.
                    </li>
                    <li>
                      <strong>Potencial total:</strong> <MathFormula formula="V_{\text{total}} = V_1 + V_2 = 7,2 \times 10^4 - 1,08 \times 10^5" display={false} /> <MathFormula formula="= -3,6 \times 10^4 \, V = -36 \, kV" display={false} />.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔗 Relação entre Campo e Potencial</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O campo elétrico e o potencial elétrico estão intimamente relacionados. O campo é o negativo do gradiente do potencial:
            </p>
            
            <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-inner">
              <MathFormula formula="\vec{E} = -\nabla V = -\left( \frac{\partial V}{\partial x} \hat{i} + \frac{\partial V}{\partial y} \hat{j} + \frac{\partial V}{\partial z} \hat{k} \right)" display={true} className="text-lg" />
              <p className="text-center text-sm text-slate-400 mt-2">Em uma dimensão: <MathFormula formula="E_x = -\frac{dV}{dx}" display={false} /></p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <Info className="w-4 h-4" />
                Interpretação Física
              </h4>
              <p className="text-slate-700 text-sm">
                O campo elétrico aponta na direção de maior decréscimo do potencial. Em outras palavras, o campo aponta de potencial alto para potencial baixo, assim como a água flui de um lugar alto para um lugar baixo.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Exemplo: Campo Uniforme</h4>
              <p className="text-sm text-slate-700 mb-2">
                Para um campo elétrico uniforme <MathFormula formula="E = 1000 \, V/m" display={false} /> apontando na direção x, o potencial varia como:
              </p>
              <MathFormula formula="V(x) = -Ex + C = -1000x + C" display={true} />
              <p className="text-xs text-slate-500 mt-2">
                onde C é uma constante que depende da escolha do ponto de referência.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Aplicações Práticas</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Tubo de Raios Catódicos</h4>
              <p className="text-sm text-slate-700">
                Elétrons são acelerados através de uma diferença de potencial de alguns milhares de volts, adquirindo energia cinética que os permite atingir alta velocidade.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">Capacitores</h4>
              <p className="text-sm text-slate-700">
                A diferença de potencial entre as placas de um capacitor determina a quantidade de carga armazenada: <MathFormula formula="Q = CV" display={false} />.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2">Eletrostática em Condutores</h4>
              <p className="text-sm text-slate-700">
                Em um condutor em equilíbrio eletrostático, o potencial é constante em toda a superfície (superfície equipotencial).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
