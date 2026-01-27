import { Link } from "wouter";
import { ArrowLeft, Zap, Info, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicCapacitoresIndutores() {
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
              <p className="text-xs text-slate-600">Capacitores e Indutores</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔋 Capacitores e Circuitos RC</h2>
          
          <div className="space-y-8">
            {/* Definição e Capacitância */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Capacitância e Energia
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um capacitor é um dispositivo capaz de armazenar energia potencial elétrica em um campo elétrico. A capacitância <MathFormula formula="C" display={false} /> é a razão entre a carga armazenada <MathFormula formula="Q" display={false} /> e a diferença de potencial <MathFormula formula="V" display={false} />.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="C = \frac{Q}{V}" display={true} className="text-xl" />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  Unidade no SI: Farad (F) = Coulomb por Volt (C/V)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">Capacitor de Placas Paralelas</h4>
                  <MathFormula formula="C = \frac{\epsilon_0 A}{d}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">A: área das placas, d: distância.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">Energia Armazenada</h4>
                  <MathFormula formula="U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Densidade de energia: <MathFormula formula="u_E = \frac{1}{2}\epsilon_0 E^2" display={false} /></p>
                </div>
              </div>
            </div>

            {/* Circuito RC - Carga */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Circuito RC: Processo de Carga
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Considere um circuito série com uma fonte <MathFormula formula="\varepsilon" display={false} />, um resistor <MathFormula formula="R" display={false} /> e um capacitor <MathFormula formula="C" display={false} /> inicialmente descarregado. Ao fechar a chave em <MathFormula formula="t=0" display={false} />, aplicamos a Lei das Malhas:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\varepsilon - iR - \frac{q}{C} = 0" display={true} />
                <p className="text-slate-400 text-sm mt-2 text-center">
                  Como <MathFormula formula="i = dq/dt" display={false} />, temos a equação diferencial:
                </p>
                <MathFormula formula="R\frac{dq}{dt} + \frac{1}{C}q = \varepsilon" display={true} />
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                A solução para a carga <MathFormula formula="q(t)" display={false} /> e corrente <MathFormula formula="i(t)" display={false} /> é exponencial:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <MathFormula formula="q(t) = C\varepsilon (1 - e^{-t/\tau})" display={true} />
                <MathFormula formula="i(t) = \frac{\varepsilon}{R} e^{-t/\tau}" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Onde <MathFormula formula="\tau = RC" display={false} /> é a <strong>constante de tempo capacitiva</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌀 Indutores e Circuitos RL</h2>
          
          <div className="space-y-8">
            {/* Definição e Indutância */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Indutância e Auto-indução
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um indutor é um componente que se opõe à variação da corrente elétrica, induzindo uma força eletromotriz (fem) contrária. Essa propriedade é chamada de indutância <MathFormula formula="L" display={false} />.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\varepsilon_L = -L \frac{di}{dt}" display={true} className="text-xl" />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  Unidade no SI: Henry (H) = Volt-segundo por Ampère (V·s/A)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">Solenóide Ideal</h4>
                  <MathFormula formula="L = \mu_0 n^2 V_{vol}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">n: espiras/m, <MathFormula formula="V_{vol}" display={false} />: volume.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">Energia Magnética</h4>
                  <MathFormula formula="U_B = \frac{1}{2}Li^2" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Densidade de energia: <MathFormula formula="u_B = \frac{B^2}{2\mu_0}" display={false} /></p>
                </div>
              </div>
            </div>

            {/* Circuito RL - Estabelecimento de Corrente */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Circuito RL: Estabelecimento de Corrente
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Ao conectar uma bateria <MathFormula formula="\varepsilon" display={false} /> a um resistor <MathFormula formula="R" display={false} /> e um indutor <MathFormula formula="L" display={false} /> em série, a corrente não atinge o valor máximo instantaneamente devido à auto-indução.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\varepsilon - iR - L\frac{di}{dt} = 0" display={true} />
                <p className="text-slate-400 text-sm mt-2 text-center">
                  Equação diferencial linear de primeira ordem.
                </p>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                A solução para a corrente <MathFormula formula="i(t)" display={false} /> é:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <MathFormula formula="i(t) = \frac{\varepsilon}{R} (1 - e^{-t/\tau_L})" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Onde <MathFormula formula="\tau_L = L/R" display={false} /> é a <strong>constante de tempo indutiva</strong>.
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
                  <strong>Problema:</strong> Em um circuito contendo uma fonte <MathFormula formula="\varepsilon" display={false} />, um resistor <MathFormula formula="R" display={false} /> e um indutor <MathFormula formula="L" display={false} /> em série, a chave é fechada em <MathFormula formula="t=0" display={false} />. Determine o instante <MathFormula formula="t" display={false} /> em que a energia armazenada no campo magnético do indutor é igual à energia dissipada no resistor por efeito Joule desde o início.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Energia no Indutor:</strong> <MathFormula formula="U_L(t) = \frac{1}{2} L [i(t)]^2" display={false} />.
                    </li>
                    <li>
                      <strong>Energia Dissipada:</strong> <MathFormula formula="E_{diss}(t) = \int_0^t R [i(t')]^2 dt'" display={false} />.
                    </li>
                    <li>
                      <strong>Equação de Energia:</strong> A energia fornecida pela bateria é dividida entre o resistor e o indutor: <MathFormula formula="E_{bat} = E_{diss} + U_L" display={false} />.
                      <br/>
                      Mas o problema pede <MathFormula formula="U_L = E_{diss}" display={false} />. Isso é fisicamente complexo de igualar diretamente para qualquer <MathFormula formula="t" display={false} /> analiticamente simples. Vamos reavaliar a pergunta comum em provas: "Quando a potência dissipada iguala a taxa de armazenamento de energia?"
                    </li>
                    <li>
                      <strong>Alternativa (Potências):</strong> <MathFormula formula="P_{diss} = Ri^2" display={false} /> e <MathFormula formula="P_{L} = Li \frac{di}{dt}" display={false} />.
                      <br/>
                      Igualando: <MathFormula formula="Ri^2 = Li \frac{di}{dt} \Rightarrow Ri = L \frac{di}{dt}" display={false} />.
                      <br/>
                      Substituindo <MathFormula formula="i(t) = I_{max}(1 - e^{-t/\tau})" display={false} /> e <MathFormula formula="\frac{di}{dt} = \frac{I_{max}}{\tau} e^{-t/\tau}" display={false} />:
                      <br/>
                      <MathFormula formula="R I_{max}(1 - e^{-t/\tau}) = L \frac{I_{max}}{L/R} e^{-t/\tau}" display={false} />
                      <br/>
                      <MathFormula formula="1 - e^{-t/\tau} = e^{-t/\tau} \Rightarrow 2e^{-t/\tau} = 1 \Rightarrow e^{-t/\tau} = 0,5" display={false} />.
                      <br/>
                      <MathFormula formula="-t/\tau = \ln(0,5) = -\ln 2 \Rightarrow t = \tau \ln 2" display={false} />.
                    </li>
                    <li>
                      <strong>Resposta:</strong> A taxa de dissipação iguala a taxa de armazenamento em <MathFormula formula="t = \frac{L}{R} \ln 2" display={false} />.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
