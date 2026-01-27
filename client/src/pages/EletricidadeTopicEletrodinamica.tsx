import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2, Sigma, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletricidadeTopicEletrodinamica() {
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
              <p className="text-xs text-slate-600">Eletrodinâmica</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Corrente Elétrica e Resistência</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Introdução à Eletrodinâmica</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A <strong>Eletrodinâmica</strong> estuda as cargas elétricas em movimento ordenado. Esse fluxo de cargas constitui a corrente elétrica, fundamental para o funcionamento de circuitos e dispositivos eletrônicos.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Neste módulo, abordaremos desde a visão microscópica do movimento dos elétrons até as leis macroscópicas que regem circuitos resistivos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 Corrente Elétrica (Aprofundado)</h2>
          
          <div className="space-y-8">
            {/* Definição Macroscópica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Definição Macroscópica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A corrente elétrica média <MathFormula formula="i_m" display={false} /> é a taxa de fluxo de carga elétrica através de uma seção transversal de um condutor. A corrente instantânea <MathFormula formula="i" display={false} /> é o limite dessa taxa quando o intervalo de tempo tende a zero:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="i = \frac{dq}{dt}" display={true} className="text-xl" />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  Unidade no SI: Ampère (A) = Coulomb por segundo (C/s)
                </p>
              </div>
            </div>

            {/* Modelo Microscópico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Modelo Microscópico (Velocidade de Deriva)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Em um condutor metálico, os elétrons livres movem-se aleatoriamente com altas velocidades térmicas (<MathFormula formula="\sim 10^6" display={false} /> m/s). Quando um campo elétrico é aplicado, eles adquirem uma pequena velocidade média na direção oposta ao campo, chamada <strong>velocidade de deriva</strong> (<MathFormula formula="v_d" display={false} />), tipicamente da ordem de <MathFormula formula="10^{-4}" display={false} /> m/s.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="i = n \cdot A \cdot e \cdot v_d" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-1">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="n" display={false} />: Densidade de portadores de carga (elétrons/m³)</li>
                      <li><MathFormula formula="A" display={false} />: Área da seção transversal (m²)</li>
                      <li><MathFormula formula="e" display={false} />: Carga elementar (<MathFormula formula="1,6 \cdot 10^{-19} C" display={false} />)</li>
                      <li><MathFormula formula="v_d" display={false} />: Velocidade de deriva (m/s)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Densidade de Corrente */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Vetor Densidade de Corrente (<MathFormula formula="\vec{J}" display={false} />)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A densidade de corrente é uma grandeza vetorial que descreve o fluxo de carga em um ponto específico. Sua direção é a do movimento dos portadores positivos (ou oposta aos elétrons).
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{J} = n q \vec{v}_d" display={true} />
                <p className="text-sm text-slate-600 mt-2">
                  Relação com a corrente escalar: <MathFormula formula="i = \int \vec{J} \cdot d\vec{A}" display={false} />. Se <MathFormula formula="\vec{J}" display={false} /> for uniforme e perpendicular à área <MathFormula formula="A" display={false} />, então <MathFormula formula="J = i/A" display={false} />.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ω Resistência e Leis de Ohm</h2>
          
          <div className="space-y-8">
            {/* Lei de Ohm Microscópica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Lei de Ohm Microscópica (Vetorial)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A densidade de corrente em um condutor é proporcional ao campo elétrico aplicado. A constante de proporcionalidade é a <strong>condutividade elétrica</strong> (<MathFormula formula="\sigma" display={false} />).
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{J} = \sigma \vec{E} = \frac{1}{\rho} \vec{E}" display={true} className="text-xl" />
                <p className="text-center text-sm text-slate-400 mt-2">
                  <MathFormula formula="\rho = 1/\sigma" display={false} /> é a <strong>resistividade elétrica</strong> do material (<MathFormula formula="\Omega \cdot m" display={false} />).
                </p>
              </div>
            </div>

            {/* Lei de Ohm Macroscópica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                1ª Lei de Ohm (Macroscópica)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para um condutor de geometria fixa, a diferença de potencial <MathFormula formula="V" display={false} /> é proporcional à corrente <MathFormula formula="i" display={false} />.
              </p>
              <MathFormula formula="V = R \cdot i" display={true} />
              <p className="text-slate-700 mt-4 leading-relaxed">
                Onde <MathFormula formula="R" display={false} /> é a <strong>resistência elétrica</strong> (<MathFormula formula="\Omega" display={false} />). Condutores que obedecem a essa relação linear são chamados de <em>ôhmicos</em>.
              </p>
            </div>

            {/* 2ª Lei de Ohm */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                2ª Lei de Ohm (Resistência e Geometria)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A resistência de um condutor cilíndrico de comprimento <MathFormula formula="L" display={false} /> e área de seção transversal <MathFormula formula="A" display={false} /> depende do material (<MathFormula formula="\rho" display={false} />) e de suas dimensões:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="R = \rho \frac{L}{A}" display={true} />
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Dependência com a Temperatura
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  A resistividade dos metais aumenta com a temperatura. Para variações moderadas de temperatura, a relação é linear:
                </p>
                <MathFormula formula="\rho(T) = \rho_0 [1 + \alpha(T - T_0)]" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Onde <MathFormula formula="\alpha" display={false} /> é o coeficiente de temperatura da resistividade (<MathFormula formula="K^{-1}" display={false} /> ou <MathFormula formula="^\circ C^{-1}" display={false} />).
                </p>
              </div>
            </div>

            {/* Potência Elétrica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Potência Elétrica e Efeito Joule
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A potência elétrica dissipada ou fornecida a um componente é o produto da tensão pela corrente. Em resistores, essa energia é convertida em calor (Efeito Joule).
              </p>
              <MathFormula formula="P = V \cdot i = R \cdot i^2 = \frac{V^2}{R}" display={true} />
            </div>

            {/* Exemplo Resolvido */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido (Nível ITA)
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um fio de cobre de comprimento <MathFormula formula="L" display={false} /> e diâmetro <MathFormula formula="D" display={false} /> é submetido a uma diferença de potencial <MathFormula formula="V" display={false} />. Se o diâmetro do fio for reduzido à metade (<MathFormula formula="D' = D/2" display={false} />) e o comprimento dobrado (<MathFormula formula="L' = 2L" display={false} />), mantendo a mesma tensão <MathFormula formula="V" display={false} />, qual será a razão entre a nova potência dissipada <MathFormula formula="P'" display={false} /> e a potência original <MathFormula formula="P" display={false} />?
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Resistência Original:</strong> <MathFormula formula="R = \rho \frac{L}{A} = \rho \frac{L}{\pi (D/2)^2} = \frac{4\rho L}{\pi D^2}" display={false} />.
                    </li>
                    <li>
                      <strong>Nova Resistência:</strong> A área nova é <MathFormula formula="A' = \pi (D'/2)^2 = \pi (D/4)^2 = \frac{\pi D^2}{16} = \frac{A}{4}" display={false} />.
                      <br/>
                      <MathFormula formula="R' = \rho \frac{L'}{A'} = \rho \frac{2L}{A/4} = 8 \left( \rho \frac{L}{A} \right) = 8R" display={false} />.
                    </li>
                    <li>
                      <strong>Potência:</strong> Como <MathFormula formula="V" display={false} /> é constante, usamos <MathFormula formula="P = V^2/R" display={false} />.
                      <br/>
                      <MathFormula formula="P' = \frac{V^2}{R'} = \frac{V^2}{8R} = \frac{1}{8} \left( \frac{V^2}{R} \right) = \frac{P}{8}" display={false} />.
                    </li>
                    <li>
                      <strong>Resposta:</strong> A nova potência será <MathFormula formula="1/8" display={false} /> da original. A razão é <MathFormula formula="P'/P = 0,125" display={false} />.
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
