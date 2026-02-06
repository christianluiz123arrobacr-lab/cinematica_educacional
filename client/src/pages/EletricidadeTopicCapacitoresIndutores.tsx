import { Link } from "wouter";
import { ArrowLeft, Zap, Info, CheckCircle2, Activity, Sigma } from "lucide-react";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicCapacitoresIndutores() {
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
              <p className="text-xs text-slate-600">Capacitores e Indutores Avançados</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔋 Capacitores: Teoria de Campo e Circuitos</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Dedução da Capacitância (Lei de Gauss)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A capacitância é uma propriedade puramente geométrica. Vamos deduzir a expressão para um capacitor de placas paralelas usando a Lei de Gauss.
              </p>

              <div className="my-6 flex justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-md w-full bg-white">
                  <img 
                    src="/capacitor-placas-paralelas-pt.jpg" 
                    alt="Diagrama de Capacitor de Placas Paralelas" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs text-center backdrop-blur-sm">
                    Figura 1: Capacitor de placas paralelas. O campo elétrico é uniforme na região central e nulo fora (aproximação de placas infinitas).
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <ol className="list-decimal list-inside space-y-4 text-slate-700">
                  <li>
                    <strong>Campo Elétrico:</strong> Considere uma superfície gaussiana cilíndrica envolvendo uma das placas. Pela Lei de Gauss (<MathFormula formula="\oint \vec{E} \cdot d\vec{A} = Q_{int}/\epsilon_0" display={false} />), o campo entre as placas é:
                    <div className="py-2 text-center"><MathFormula formula="E = \frac{\sigma}{\epsilon_0} = \frac{Q}{A\epsilon_0}" display={true} /></div>
                  </li>
                  <li>
                    <strong>Diferença de Potencial:</strong> Integramos o campo ao longo do caminho entre as placas (distância <MathFormula formula="d" display={false} />):
                    <div className="py-2 text-center"><MathFormula formula="V = \int_0^d E \, dx = E \cdot d = \frac{Qd}{A\epsilon_0}" display={true} /></div>
                  </li>
                  <li>
                    <strong>Capacitância:</strong> Pela definição <MathFormula formula="C = Q/V" display={false} />:
                    <div className="py-2 text-center"><MathFormula formula="C = \frac{Q}{(Qd/A\epsilon_0)} = \frac{\epsilon_0 A}{d}" display={true} /></div>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Análise Transiente RC (Equação Diferencial)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A análise de circuitos RC envolve a resolução de equações diferenciais lineares de primeira ordem. Vamos resolver rigorosamente para o processo de carga.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <p className="mb-4">Aplicando a Lei das Malhas para <MathFormula formula="t > 0" display={false} />:</p>
                <MathFormula formula="\varepsilon - R i(t) - \frac{q(t)}{C} = 0" display={true} />
                <p className="mt-4 mb-2">Substituindo <MathFormula formula="i(t) = dq/dt" display={false} />:</p>
                <MathFormula formula="R \frac{dq}{dt} + \frac{1}{C}q = \varepsilon" display={true} />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-4">Resolução por Separação de Variáveis:</h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li>
                    Reorganizando a equação:
                    <div className="py-1"><MathFormula formula="\frac{dq}{dt} = \frac{\varepsilon}{R} - \frac{q}{RC} = \frac{C\varepsilon - q}{RC}" display={true} /></div>
                  </li>
                  <li>
                    Separando as variáveis <MathFormula formula="q" display={false} /> e <MathFormula formula="t" display={false} />:
                    <div className="py-1"><MathFormula formula="\frac{dq}{q - C\varepsilon} = -\frac{1}{RC} dt" display={true} /></div>
                  </li>
                  <li>
                    Integrando ambos os lados (de <MathFormula formula="0" display={false} /> a <MathFormula formula="q(t)" display={false} /> e de <MathFormula formula="0" display={false} /> a <MathFormula formula="t" display={false} />):
                    <div className="py-1"><MathFormula formula="\int_0^{q(t)} \frac{dq'}{q' - C\varepsilon} = -\frac{1}{RC} \int_0^t dt'" display={true} /></div>
                    <div className="py-1"><MathFormula formula="\ln(q(t) - C\varepsilon) - \ln(-C\varepsilon) = -\frac{t}{RC}" display={true} /></div>
                  </li>
                  <li>
                    Exponenciando para isolar <MathFormula formula="q(t)" display={false} />:
                    <div className="py-1"><MathFormula formula="\frac{q(t) - C\varepsilon}{-C\varepsilon} = e^{-t/RC} \Rightarrow q(t) = C\varepsilon(1 - e^{-t/RC})" display={true} /></div>
                  </li>
                </ol>
              </div>

              <div className="my-6 flex justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-2xl w-full bg-white">
                  <img 
                    src="/circuito-rc-pt.jpg" 
                    alt="Gráficos de Carga e Corrente no Circuito RC" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs text-center backdrop-blur-sm">
                    Figura 2: Evolução temporal da tensão e corrente. Note que em <MathFormula formula="t = \tau = RC" display={false} />, a carga atinge <MathFormula formula="\approx 63,2\%" display={false} /> do valor máximo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌀 Indutores: Eletromagnetismo e Circuitos</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Dedução da Indutância de um Solenóide
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A indutância <MathFormula formula="L" display={false} /> mede a capacidade de gerar fluxo magnético por unidade de corrente.
              </p>

              <div className="my-6 flex justify-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 max-w-md w-full bg-white">
                  <img 
                    src="/indutor-solenoid-pt.jpg" 
                    alt="Campo Magnético em um Solenóide" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs text-center backdrop-blur-sm">
                    Figura 3: Campo magnético confinado no interior de um solenóide longo.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <ol className="list-decimal list-inside space-y-4 text-slate-700">
                  <li>
                    <strong>Campo Magnético (Lei de Ampère):</strong> Para um solenóide ideal com <MathFormula formula="n" display={false} /> espiras por metro e corrente <MathFormula formula="i" display={false} />:
                    <div className="py-2 text-center"><MathFormula formula="B = \mu_0 n i" display={true} /></div>
                  </li>
                  <li>
                    <strong>Fluxo Magnético Total:</strong> O fluxo através de uma espira é <MathFormula formula="\Phi_1 = B \cdot A" display={false} />. Para um solenóide de comprimento <MathFormula formula="l" display={false} />, o número total de espiras é <MathFormula formula="N = n \cdot l" display={false} />. O fluxo total concatenado é:
                    <div className="py-2 text-center"><MathFormula formula="\Phi_{total} = N \cdot \Phi_1 = (nl)(\mu_0 n i)A = \mu_0 n^2 A l \cdot i" display={true} /></div>
                  </li>
                  <li>
                    <strong>Indutância:</strong> Pela definição <MathFormula formula="L = \Phi_{total}/i" display={false} />:
                    <div className="py-2 text-center"><MathFormula formula="L = \mu_0 n^2 A l = \mu_0 n^2 V_{vol}" display={true} /></div>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Análise Transiente RL (Estabelecimento de Corrente)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A indutância se opõe à variação da corrente, criando uma "inércia eletromagnética".
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <p className="mb-4">Equação diferencial do circuito RL série:</p>
                <MathFormula formula="\varepsilon - R i - L \frac{di}{dt} = 0" display={true} />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-blue-800 mb-2">Solução Analítica:</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Resolvendo de forma análoga ao circuito RC (separação de variáveis), obtemos:
                </p>
                <MathFormula formula="i(t) = \frac{\varepsilon}{R} (1 - e^{-t/\tau_L})" display={true} />
                <p className="text-slate-700 text-sm mt-3">
                  Onde <MathFormula formula="\tau_L = L/R" display={false} /> é a constante de tempo indutiva. Note que para <MathFormula formula="t \to \infty" display={false} />, o indutor comporta-se como um curto-circuito (<MathFormula formula="V_L = 0" display={false} />) e a corrente tende a <MathFormula formula="\varepsilon/R" display={false} />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
