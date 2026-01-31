import { Link } from "wouter";
import { ArrowLeft, Zap, Info, CheckCircle2, BookOpen, Sigma } from "lucide-react";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicEletrodinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </a>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Eletrodinâmica Avançada</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Teoria Microscópica da Condução</h2>
          
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Modelo de Drude-Lorentz</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Para compreender a origem da resistência elétrica e a Lei de Ohm, devemos analisar o comportamento dos elétrons livres no interior de um condutor metálico. O <strong>Modelo de Drude</strong> trata os elétrons como um gás clássico que colide com os íons da rede cristalina.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Velocidade de Deriva e Densidade de Corrente
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Na ausência de campo elétrico externo, os elétrons movem-se aleatoriamente com alta velocidade térmica (<MathFormula formula="v_{term} \approx 10^6" display={false} /> m/s), resultando em uma velocidade média nula. Ao aplicarmos um campo elétrico <MathFormula formula="\vec{E}" display={false} />, surge uma força elétrica <MathFormula formula="\vec{F} = -e\vec{E}" display={false} />.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Entre duas colisões sucessivas (intervalo de tempo médio <MathFormula formula="\tau" display={false} />), o elétron é acelerado:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{a} = \frac{\vec{F}}{m_e} = -\frac{e\vec{E}}{m_e}" display={true} />
                <p className="text-slate-700 mt-4">
                  A velocidade adicional adquirida (velocidade de deriva <MathFormula formula="\vec{v}_d" display={false} />) é dada por <MathFormula formula="\vec{v}_d = \vec{a}\tau" display={false} />:
                </p>
                <MathFormula formula="\vec{v}_d = -\frac{e\tau}{m_e}\vec{E}" display={true} />
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A densidade de corrente <MathFormula formula="\vec{J}" display={false} /> é definida como o fluxo de carga por unidade de área. Se temos <MathFormula formula="n" display={false} /> elétrons por unidade de volume:
              </p>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{J} = n(-e)\vec{v}_d = n(-e)\left(-\frac{e\tau}{m_e}\vec{E}\right) = \left(\frac{ne^2\tau}{m_e}\right)\vec{E}" display={true} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                A Lei de Ohm Microscópica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A equação acima mostra que a densidade de corrente é proporcional ao campo elétrico. A constante de proporcionalidade é a <strong>condutividade elétrica</strong> (<MathFormula formula="\sigma" display={false} />):
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{J} = \sigma \vec{E}" display={true} className="text-xl" />
                <p className="text-center text-sm text-slate-600 mt-4">
                  Onde <MathFormula formula="\sigma = \frac{ne^2\tau}{m_e}" display={false} />.
                </p>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>resistividade</strong> (<MathFormula formula="\rho" display={false} />) é o inverso da condutividade:
              </p>
              <MathFormula formula="\rho = \frac{1}{\sigma} = \frac{m_e}{ne^2\tau}" display={true} />
              <p className="text-slate-700 mt-4 leading-relaxed text-sm italic">
                Nota: Isso explica por que a resistência aumenta com a temperatura. O aumento da temperatura aumenta a vibração da rede cristalina, reduzindo o tempo livre médio (<MathFormula formula="\tau" display={false} />) entre colisões, o que aumenta <MathFormula formula="\rho" display={false} />.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🕸️ Análise de Circuitos Complexos</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Leis de Kirchhoff: Fundamentos Físicos
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                As Leis de Kirchhoff não são meras regras práticas, mas consequências diretas de leis de conservação fundamentais da física aplicadas a circuitos de parâmetros concentrados.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">1ª Lei (Lei dos Nós)</h4>
                  <p className="text-sm text-slate-600 mb-3">Base: <strong>Conservação da Carga Elétrica</strong></p>
                  <p className="text-slate-700 text-sm mb-3">
                    Como a carga não pode se acumular indefinidamente em um ponto sem capacidade (nó), a taxa de carga que chega deve ser igual à que sai.
                  </p>
                  <MathFormula formula="\sum I_{ent} = \sum I_{sai}" display={true} />
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">2ª Lei (Lei das Malhas)</h4>
                  <p className="text-sm text-slate-600 mb-3">Base: <strong>Conservação da Energia</strong></p>
                  <p className="text-slate-700 text-sm mb-3">
                    O campo elétrico estacionário é conservativo (<MathFormula formula="\oint \vec{E} \cdot d\vec{l} = 0" display={false} />). Logo, a variação total de potencial em um loop fechado deve ser nula.
                  </p>
                  <MathFormula formula="\sum \Delta V = 0" display={true} />
                </div>
              </div>

              <div className="my-8 flex justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-2xl w-full bg-white">
                  <img 
                    src="/images/kirchhoff-circuit.jpg" 
                    alt="Diagrama de Circuito para Leis de Kirchhoff" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs text-center backdrop-blur-sm">
                    Figura 1: Circuito de múltiplas malhas. A aplicação correta das leis exige a definição arbitrária mas consistente dos sentidos das correntes.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Ponte de Wheatstone: Dedução Rigorosa
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Ponte de Wheatstone é um arranjo fundamental para medições de precisão. Vamos deduzir sua condição de equilíbrio analisando os potenciais nos nós centrais.
              </p>

              <div className="my-6 flex justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-md w-full bg-white">
                  <img 
                    src="/images/wheatstone-bridge.jpg" 
                    alt="Diagrama da Ponte de Wheatstone" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs text-center backdrop-blur-sm">
                    Figura 2: Ponte de Wheatstone. O galvanômetro G detecta a diferença de potencial entre os ramos centrais.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-4">Demonstração:</h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li>
                    Considere os nós centrais (entre <MathFormula formula="R_1, R_3" display={false} /> e <MathFormula formula="R_2, R_x" display={false} />). Vamos chamá-los de <strong>B</strong> e <strong>D</strong>.
                  </li>
                  <li>
                    A condição de equilíbrio é definida por corrente nula no galvanômetro (<MathFormula formula="I_G = 0" display={false} />). Isso implica que não há diferença de potencial entre B e D:
                    <div className="py-2 text-center"><MathFormula formula="V_B = V_D" display={true} /></div>
                  </li>
                  <li>
                    Se <MathFormula formula="I_G = 0" display={false} />, a corrente que passa por <MathFormula formula="R_1" display={false} /> é a mesma que passa por <MathFormula formula="R_3" display={false} /> (chamaremos de <MathFormula formula="I_1" display={false} />). Analogamente, a corrente em <MathFormula formula="R_2" display={false} /> é a mesma em <MathFormula formula="R_x" display={false} /> (chamaremos de <MathFormula formula="I_2" display={false} />).
                  </li>
                  <li>
                    Calculando os potenciais a partir do nó superior (potencial <MathFormula formula="V_A" display={false} />):
                    <div className="py-2 text-center"><MathFormula formula="V_B = V_A - R_1 I_1" display={true} /></div>
                    <div className="py-2 text-center"><MathFormula formula="V_D = V_A - R_2 I_2" display={true} /></div>
                  </li>
                  <li>
                    Igualando <MathFormula formula="V_B = V_D" display={false} />:
                    <div className="py-2 text-center"><MathFormula formula="R_1 I_1 = R_2 I_2 \quad (Eq. 1)" display={true} /></div>
                  </li>
                  <li>
                    Agora, calculando a partir do nó inferior (potencial <MathFormula formula="V_C" display={false} />):
                    <div className="py-2 text-center"><MathFormula formula="V_B - V_C = R_3 I_1" display={true} /></div>
                    <div className="py-2 text-center"><MathFormula formula="V_D - V_C = R_x I_2" display={true} /></div>
                    Como <MathFormula formula="V_B = V_D" display={false} />, temos:
                    <div className="py-2 text-center"><MathFormula formula="R_3 I_1 = R_x I_2 \quad (Eq. 2)" display={true} /></div>
                  </li>
                  <li>
                    Dividindo a (Eq. 1) pela (Eq. 2):
                    <div className="py-2 text-center"><MathFormula formula="\frac{R_1 I_1}{R_3 I_1} = \frac{R_2 I_2}{R_x I_2} \Rightarrow \frac{R_1}{R_3} = \frac{R_2}{R_x}" display={true} /></div>
                  </li>
                  <li>
                    Reorganizando, chegamos à famosa relação do produto cruzado:
                    <div className="bg-yellow-100 p-4 rounded-lg mt-2 border border-yellow-300 text-center">
                      <MathFormula formula="R_1 \cdot R_x = R_2 \cdot R_3" display={true} className="text-xl font-bold" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Capacitors and Inductors Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-8 mt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">⚡ Capacitores e Indutores na Eletrodinâmica</h2>

              {/* Capacitors Subsection */}
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Capacitores: Armazenamento de Energia Elétrica</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Um capacitor é um dispositivo que armazena energia em um campo elétrico. O capacitor mais simples é o <strong>capacitor de placas paralelas</strong>, composto por duas placas condutoras paralelas separadas por um dielétrico (isolante).
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 mb-6 border border-slate-200">
                    <img src="/images/capacitor-parallel-plates-pt.jpg" alt="Capacitor de Placas Paralelas" className="w-full rounded-lg mb-4 border border-slate-300" />
                    <p className="text-sm text-slate-600 text-center italic">Figura: Capacitor de placas paralelas com campo elétrico uniforme entre as placas</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Dedução da Capacitância</h4>
                      <p className="text-slate-700 mb-3">
                        Quando uma carga Q é armazenada no capacitor, uma placa adquire carga +Q e a outra -Q. O campo elétrico entre as placas é uniforme:
                      </p>
                      <MathFormula formula="E = \\frac{\\sigma}{\\epsilon_0} = \\frac{Q}{\\epsilon_0 A}" display={true} />
                      <p className="text-slate-700 mt-3 mb-3">
                        onde σ = Q/A é a densidade superficial de carga e ε₀ = 8.854 × 10⁻¹² F/m é a permissividade do vácuo.
                      </p>
                      <p className="text-slate-700 mb-3">
                        A diferença de potencial entre as placas é:
                      </p>
                      <MathFormula formula="V = E \\cdot d = \\frac{Q}{\\epsilon_0 A} \\cdot d" display={true} />
                      <p className="text-slate-700 mt-3 mb-3">
                        A capacitância é definida como a razão entre a carga armazenada e a tensão:
                      </p>
                      <MathFormula formula="C = \\frac{Q}{V} = \\frac{\\epsilon_0 A}{d}" display={true} />
                      <p className="text-slate-700 mt-3">
                        <strong>Conclusão:</strong> A capacitância depende apenas da geometria (área A e separação d) e do material dielétrico (ε₀).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Energia Armazenada em um Capacitor</h4>
                  <p className="text-slate-700 mb-3">
                    A energia armazenada no campo elétrico é:
                  </p>
                  <MathFormula formula="U_C = \\frac{1}{2}CV^2 = \\frac{1}{2}\\frac{Q^2}{C} = \\frac{1}{2}QV" display={true} />
                  <p className="text-slate-700 mt-3">
                    Essa energia é proporcional ao quadrado da tensão, o que explica por que capacitores de alta tensão podem armazenar quantidades enormes de energia.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Carregamento de um Capacitor: Circuito RC</h4>
                  <p className="text-slate-700 mb-4">
                    Quando um capacitor é conectado a uma fonte de tensão através de um resistor, a carga não é instantânea. A tensão no capacitor evolui segundo:
                  </p>
                  <MathFormula formula="V_C(t) = V_0(1 - e^{-t/\\tau})" display={true} />
                  <p className="text-slate-700 mt-4 mb-4">
                    onde τ = RC é a <strong>constante de tempo</strong>. Após um tempo τ, a tensão atinge 63% do valor final.
                  </p>
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <img src="/images/capacitor-charging-curve-pt.jpg" alt="Curva de Carregamento do Capacitor" className="w-full rounded-lg mb-4 border border-slate-300" />
                    <p className="text-sm text-slate-600 text-center italic">Figura: Resposta temporal de um circuito RC durante o carregamento</p>
                  </div>
                </div>
              </div>

              {/* Inductors Subsection */}
              <div className="space-y-8 border-t-2 border-slate-300 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Indutores: Armazenamento de Energia Magnética</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Um indutor é um dispositivo que armazena energia em um campo magnético. O indutor mais comum é o <strong>solenóide</strong>, uma bobina de fio condutor enrolada em forma de hélice.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 mb-6 border border-slate-200">
                    <img src="/images/indutor-solenide-pt.jpg" alt="Solenóide Indutor" className="w-full rounded-lg mb-4 border border-slate-300" />
                    <p className="text-sm text-slate-600 text-center italic">Figura: Solenóide mostrando o campo magnético uniforme no interior</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Dedução da Indutância</h4>
                      <p className="text-slate-700 mb-3">
                        Para um solenóide com N espiras, comprimento L e área de seção transversal A, o campo magnético no interior é uniforme:
                      </p>
                      <MathFormula formula="B = \\mu_0 \\frac{N}{L} I" display={true} />
                      <p className="text-slate-700 mt-3 mb-3">
                        onde μ₀ = 4π × 10⁻⁷ H/m é a permeabilidade do vácuo.
                      </p>
                      <p className="text-slate-700 mb-3">
                        O fluxo magnético através de uma espira é:
                      </p>
                      <MathFormula formula="\\Phi = B \\cdot A = \\mu_0 \\frac{N}{L} I \\cdot A" display={true} />
                      <p className="text-slate-700 mt-3 mb-3">
                        O fluxo total através de todas as N espiras é:
                      </p>
                      <MathFormula formula="\\Psi = N\\Phi = \\mu_0 \\frac{N^2 A}{L} I" display={true} />
                      <p className="text-slate-700 mt-3 mb-3">
                        A indutância é definida como a razão entre o fluxo total e a corrente:
                      </p>
                      <MathFormula formula="L = \\frac{\\Psi}{I} = \\mu_0 \\frac{N^2 A}{L}" display={true} />
                      <p className="text-slate-700 mt-3">
                        <strong>Conclusão:</strong> A indutância é proporcional ao quadrado do número de espiras e inversamente proporcional ao comprimento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Energia Armazenada em um Indutor</h4>
                  <p className="text-slate-700 mb-3">
                    A energia armazenada no campo magnético é:
                  </p>
                  <MathFormula formula="U_L = \\frac{1}{2}LI^2" display={true} />
                  <p className="text-slate-700 mt-3">
                    Essa energia é proporcional ao quadrado da corrente. Um indutor resiste a mudanças na corrente, tentando manter o fluxo magnético constante.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Resposta Transiente: Circuito RL</h4>
                  <p className="text-slate-700 mb-4">
                    Quando um indutor é conectado a uma fonte de tensão através de um resistor, a corrente não cresce instantaneamente. A corrente evolui segundo:
                  </p>
                  <MathFormula formula="i(t) = \\frac{V}{R}\\left(1 - e^{-Rt/L}\\right)" display={true} />
                  <p className="text-slate-700 mt-4 mb-4">
                    onde τ = L/R é a <strong>constante de tempo</strong> do circuito RL.
                  </p>
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <img src="/images/rl-circuit-transient-pt.jpg" alt="Resposta Transiente RL" className="w-full rounded-lg mb-4 border border-slate-300" />
                    <p className="text-sm text-slate-600 text-center italic">Figura: Resposta temporal de um circuito RL durante o fechamento da chave</p>
                  </div>
                </div>
              </div>

              {/* Comparison Section */}
              <div className="border-t-2 border-slate-300 pt-8 mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Comparação: Capacitores vs. Indutores</h3>
                <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
                  <img src="/images/energy-storage-pt.jpg" alt="Comparação de Energia" className="w-full rounded-lg border border-slate-300" />
                  <p className="text-sm text-slate-600 text-center italic mt-4">Figura: Comparação entre armazenamento de energia em capacitores e indutores</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-8 border border-slate-700 mt-12">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                Desafio ITA: Simetria em Circuitos
              </h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                Em problemas de alto nível, frequentemente encontramos circuitos que parecem complexos mas possuem eixos de simetria.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded border border-slate-600">
                  <p className="font-bold text-yellow-400 mb-2">Teorema da Simetria:</p>
                  <p className="text-sm text-slate-300">
                    Se um circuito possui um eixo de simetria perpendicular à direção da corrente de entrada/saída, todos os pontos sobre esse eixo têm o mesmo potencial (são equipotenciais).
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    <strong>Consequência:</strong> Você pode desconectar nós que estão sobre o eixo de simetria ou conectar nós equipotenciais sem alterar as correntes do circuito, simplificando drasticamente a resolução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
