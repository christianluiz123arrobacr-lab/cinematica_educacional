import { ArrowLeft, Zap, Info, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicCircuitosAC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Circuitos de Corrente Alternada (AC)</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução a Circuitos AC</h2>
          
          <div className="space-y-6">
            <div className="bg-violet-50 border-l-4 border-violet-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Corrente Alternada?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Corrente Alternada (AC)</strong> é um fluxo de carga elétrica que muda periodicamente de direção e magnitude com o tempo. Diferentemente da corrente contínua (DC), que mantém uma direção constante, a corrente alternada oscila sinusoidalmente, sendo a forma de energia elétrica mais utilizada em aplicações práticas.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A corrente alternada é gerada por geradores que utilizam a rotação de bobinas em campos magnéticos. Sua vantagem principal é a facilidade de transmissão a longas distâncias e a transformação de tensões através de transformadores.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Características Principais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Periódica:</strong> A tensão e corrente se repetem em ciclos regulares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Sinusoidal:</strong> Segue a forma matemática de uma função seno ou cosseno.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Frequência Definida:</strong> Oscila a uma frequência específica (50 Hz ou 60 Hz em aplicações comerciais).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Análise de Circuitos AC</h2>
          
          <div className="space-y-8">
            {/* Representação Sinusoidal */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Representação Sinusoidal
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A tensão e corrente alternadas são representadas matematicamente como funções sinusoidais:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="v(t) = V_m \sin(\omega t + \phi)" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="V_m" display={false} />: Amplitude máxima da tensão (V)</li>
                    <li><MathFormula formula="\omega = 2\pi f" display={false} />: Frequência angular (rad/s)</li>
                    <li><MathFormula formula="f" display={false} />: Frequência (Hz)</li>
                    <li><MathFormula formula="\phi" display={false} />: Fase inicial (rad)</li>
                    <li><MathFormula formula="T = 1/f" display={false} />: Período (s)</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
                <img 
                  src="/images/circuito-ac-impedancia-pt.jpg" 
                  alt="Circuito AC - Impedância"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Valores Eficazes */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Valores Eficazes (RMS)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O valor eficaz (ou RMS - Root Mean Square) é o valor de uma corrente/tensão contínua que produziria a mesma potência dissipada em uma resistência:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="V_{\text{RMS}} = \frac{V_m}{\sqrt{2}} \approx 0,707 \cdot V_m" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Observação:</p>
                  <p>Quando mencionamos "110V" ou "220V" em aplicações domésticas, referimo-nos aos valores RMS, não à amplitude máxima.</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Potência em AC
                </h4>
                <p className="text-slate-700 text-sm">
                  A potência média dissipada em um circuito AC é <MathFormula formula="P = V_{\text{RMS}} \cdot I_{\text{RMS}} \cdot \cos(\phi)" display={false} />, onde <MathFormula formula="\cos(\phi)" display={false} /> é o fator de potência.
                </p>
              </div>
            </div>

            {/* Impedância */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Impedância e Reatância
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>impedância</strong> <MathFormula formula="Z" display={false} /> é a oposição total ao fluxo de corrente em um circuito AC, incluindo resistência e reatância:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Reatância Indutiva</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Oposição oferecida por um indutor:
                  </p>
                  <MathFormula formula="X_L = \omega L = 2\pi f L" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Aumenta com a frequência.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Reatância Capacitiva</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Oposição oferecida por um capacitor:
                  </p>
                  <MathFormula formula="X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Diminui com a frequência.</p>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="Z = \sqrt{R^2 + (X_L - X_C)^2}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Impedância em Circuito RLC:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="R" display={false} />: Resistência (Ω)</li>
                    <li><MathFormula formula="X_L" display={false} />: Reatância indutiva (Ω)</li>
                    <li><MathFormula formula="X_C" display={false} />: Reatância capacitiva (Ω)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ressonância */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Ressonância em Circuitos AC
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>ressonância</strong> ocorre quando a reatância indutiva iguala a reatância capacitiva, fazendo a impedância ser mínima e a corrente máxima:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="X_L = X_C \Rightarrow \omega_0 = \frac{1}{\sqrt{LC}}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Frequência de Ressonância:</p>
                  <MathFormula formula="f_0 = \frac{1}{2\pi\sqrt{LC}}" display={true} className="text-lg" />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">Características da Ressonância</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Impedância Mínima:</strong> <MathFormula formula="Z = R" display={false} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Corrente Máxima:</strong> <MathFormula formula="I_{\text{max}} = \frac{V}{R}" display={false} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Fator de Potência Unitário:</strong> <MathFormula formula="\cos(\phi) = 1" display={false} /></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Potência em AC */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Potência em Circuitos AC - Análise Profunda
              </h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Conceito Fundamental de Potência em AC</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Em circuitos de corrente alternada, a potência não é simplesmente o produto da tensão pela corrente, como em circuitos DC. Devido à presença de elementos reativos (indutores e capacitores), a tensão e a corrente podem estar defasadas, resultando em três componentes distintas de potência que devem ser analisadas separadamente.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A defasagem entre tensão e corrente é caracterizada pelo ângulo <MathFormula formula="\phi" display={false} />, que determina como a energia é distribuída entre dissipação real e armazenamento reativo.
                </p>
              </div>

              {/* Derivação da Potência Instantânea */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Derivação da Potência Instantânea</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A potência instantânea em um circuito AC é o produto da tensão instantânea pela corrente instantânea:
                </p>
                
                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="p(t) = v(t) \cdot i(t) = V_m \sin(\omega t) \cdot I_m \sin(\omega t + \phi)" display={true} className="text-lg" />
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  Utilizando a identidade trigonométrica <MathFormula formula="\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]" display={false} />, obtemos:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="p(t) = \frac{V_m I_m}{2}[\cos(\phi) - \cos(2\omega t + \phi)]" display={true} className="text-lg" />
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                    <p className="font-semibold text-yellow-400 mb-2">Interpretação:</p>
                    <ul className="space-y-1">
                      <li>• Primeiro termo: Potência média (constante)</li>
                      <li>• Segundo termo: Potência oscilatória (frequência 2ω)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Potência Real */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Potência Real (P) - Potência Ativa</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A <strong>potência real</strong> é a potência média ao longo de um ciclo completo. Ela representa a energia efetivamente consumida e convertida em calor, trabalho mecânico ou outras formas de energia:
                </p>
                
                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="P = \frac{1}{T} \int_0^T p(t) \, dt = \frac{V_m I_m}{2} \cos(\phi)" display={true} className="text-lg" />
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                    <p className="font-semibold text-yellow-400 mb-2">Em Valores RMS:</p>
                    <MathFormula formula="P = V_{\text{RMS}} \cdot I_{\text{RMS}} \cdot \cos(\phi)" display={true} className="text-lg" />
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-4 mb-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Observação:</strong> O fator <MathFormula formula="\cos(\phi)" display={false} /> é chamado de <strong>fator de potência</strong>. Quando <MathFormula formula="\phi = 0" display={false} /> (circuito puramente resistivo), toda a potência é real. Quando <MathFormula formula="\phi \neq 0" display={false} />, parte da potência é reativa.
                  </p>
                </div>
              </div>

              {/* Potência Reativa */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Potência Reativa (Q) - Potência Sem Dissipação</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A <strong>potência reativa</strong> é a potência que oscila entre a fonte e os elementos reativos (indutores e capacitores). Ela não representa consumo real de energia, mas sim armazenamento e devolução de energia eletromagnética:
                </p>
                
                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="Q = \frac{V_m I_m}{2} \sin(\phi) = V_{\text{RMS}} \cdot I_{\text{RMS}} \cdot \sin(\phi)" display={true} className="text-lg" />
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                    <p className="font-semibold text-yellow-400 mb-2">Unidade: VAR (Volt-Ampere Reativo)</p>
                    <ul className="space-y-1">
                      <li>• <MathFormula formula="Q > 0" display={false} />: Circuito indutivo (carga indutiva)</li>
                      <li>• <MathFormula formula="Q < 0" display={false} />: Circuito capacitivo (carga capacitiva)</li>
                      <li>• <MathFormula formula="Q = 0" display={false} />: Circuito puramente resistivo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Potência Aparente */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Potência Aparente (S) - Potência Total</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A <strong>potência aparente</strong> é o produto simples dos valores RMS de tensão e corrente. Ela representa a potência total que a fonte deve fornecer, incluindo tanto a potência real quanto a reativa:
                </p>
                
                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="S = V_{\text{RMS}} \cdot I_{\text{RMS}} = \sqrt{P^2 + Q^2}" display={true} className="text-lg" />
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                    <p className="font-semibold text-yellow-400 mb-2">Relação Trigonométrica (Triângulo de Potências):</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="P = S \cos(\phi)" display={false} /></li>
                      <li><MathFormula formula="Q = S \sin(\phi)" display={false} /></li>
                      <li><MathFormula formula="\tan(\phi) = \frac{Q}{P}" display={false} /></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-4">
                  <h5 className="font-bold text-slate-800 mb-2">Triângulo de Potências</h5>
                  <p className="text-sm text-slate-700 mb-2">
                    As três potências formam um triângulo retângulo onde:
                  </p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Cateto horizontal: P (potência real)</li>
                    <li>• Cateto vertical: Q (potência reativa)</li>
                    <li>• Hipotenusa: S (potência aparente)</li>
                    <li>• Ângulo: φ (ângulo de defasagem)</li>
                  </ul>
                </div>
              </div>

              {/* Fator de Potência */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Fator de Potência (FP) - Eficiência do Circuito</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  O <strong>fator de potência</strong> é a razão entre a potência real e a potência aparente. Ele quantifica a eficiência com que a potência é utilizada:
                </p>
                
                <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                  <MathFormula formula="\text{FP} = \cos(\phi) = \frac{P}{S}" display={true} className="text-lg" />
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                    <p className="font-semibold text-yellow-400 mb-2">Características:</p>
                    <ul className="space-y-1">
                      <li>• <MathFormula formula="\text{FP} = 1" display={false} />: Circuito puramente resistivo (ideal)</li>
                      <li>• <MathFormula formula="\text{FP} < 1" display={false} />: Presença de elementos reativos (indutivos ou capacitivos)</li>
                      <li>• <MathFormula formula="\text{FP} \approx 0" display={false} />: Circuito predominantemente reativo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Correção de Fator de Potência */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Correção de Fator de Potência</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Em sistemas industriais, um fator de potência baixo resulta em perdas de energia e custos operacionais elevados. A correção é realizada adicionando capacitores em paralelo com a carga indutiva:
                </p>
                
                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-4">
                  <h5 className="font-bold text-slate-800 mb-2">Método de Correção</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    Para melhorar o fator de potência de <MathFormula formula="\cos(\phi_1)" display={false} /> para <MathFormula formula="\cos(\phi_2)" display={false} />, a capacitância necessária é:
                  </p>
                  <MathFormula formula="C = \frac{P[\tan(\phi_1) - \tan(\phi_2)]}{\omega V_{\text{RMS}}^2}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">
                    onde P é a potência real do circuito.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-bold text-green-800 mb-2">Benefícios da Correção</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>✓ Redução de perdas em linhas de transmissão</li>
                    <li>✓ Diminuição de custos de energia elétrica</li>
                    <li>✓ Aumento da capacidade de carga do sistema</li>
                    <li>✓ Melhoria da qualidade de energia</li>
                  </ul>
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
                  <strong>Enunciado:</strong> Um circuito RLC em série tem <MathFormula formula="R = 100 \, \Omega" display={false} />, <MathFormula formula="L = 0,5 \, H" display={false} /> e <MathFormula formula="C = 10 \, \mu F" display={false} />. A tensão aplicada é <MathFormula formula="V = 220 \, V" display={false} /> (RMS) a <MathFormula formula="f = 50 \, Hz" display={false} />. Calcule:
                </p>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>a) A frequência de ressonância</li>
                  <li>b) A impedância do circuito</li>
                  <li>c) A corrente eficaz</li>
                  <li>d) As potências real, reativa e aparente</li>
                </ul>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>a) Frequência de ressonância:</strong></p>
                    <p className="ml-4"><MathFormula formula="f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{0,5 \times 10 \times 10^{-6}}}" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="f_0 = \frac{1}{2\pi \times 7,07 \times 10^{-3}} \approx 22,5 \, Hz" display={false} /></p>
                    
                    <p className="mt-3"><strong>b) Impedância a 50 Hz:</strong></p>
                    <p className="ml-4"><MathFormula formula="\omega = 2\pi f = 2\pi \times 50 = 314,16 \, rad/s" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="X_L = \omega L = 314,16 \times 0,5 = 157,08 \, \Omega" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="X_C = \frac{1}{\omega C} = \frac{1}{314,16 \times 10 \times 10^{-6}} = 318,31 \, \Omega" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="Z = \sqrt{100^2 + (157,08 - 318,31)^2} = \sqrt{10000 + 25921} = 189,5 \, \Omega" display={false} /></p>
                    
                    <p className="mt-3"><strong>c) Corrente eficaz:</strong></p>
                    <p className="ml-4"><MathFormula formula="I_{\text{RMS}} = \frac{V}{Z} = \frac{220}{189,5} \approx 1,16 \, A" display={false} /></p>
                    
                    <p className="mt-3"><strong>d) Potências:</strong></p>
                    <p className="ml-4"><MathFormula formula="\tan(\phi) = \frac{X_L - X_C}{R} = \frac{-161,23}{100} = -1,6123" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="\phi \approx -58,1° \, \text{(capacitivo)}, \cos(\phi) = 0,527" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="P = 220 \times 1,16 \times 0,527 \approx 134,6 \, W" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="Q = 220 \times 1,16 \times (-0,850) \approx -217,2 \, VAR" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="S = 220 \times 1,16 \approx 255,2 \, VA" display={false} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Aplicações Práticas</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Transmissão de Energia Elétrica</h4>
              <p className="text-sm text-slate-700">
                A corrente alternada é ideal para transmissão de energia a longas distâncias, pois permite transformação de tensão através de transformadores com alta eficiência.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">Filtros Eletrônicos</h4>
              <p className="text-sm text-slate-700">
                Circuitos RLC são usados como filtros para selecionar frequências específicas em aplicações de áudio, comunicação e processamento de sinais.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2">Ressonância em Sistemas</h4>
              <p className="text-sm text-slate-700">
                A ressonância é explorada em rádios, osciladores e sistemas de sintonia para amplificar sinais em frequências específicas com máxima eficiência.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 mb-2">Correção de Fator de Potência</h4>
              <p className="text-sm text-slate-700">
                Capacitores são adicionados em paralelo com cargas indutivas para melhorar o fator de potência e reduzir perdas de energia em sistemas industriais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
