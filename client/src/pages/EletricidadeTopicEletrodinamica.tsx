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

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🕸️ Leis de Kirchhoff (Análise de Circuitos)</h2>
          
          <div className="space-y-8">
            {/* Introdução */}
            <div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Para circuitos complexos que não podem ser reduzidos a simples associações série-paralelo, utilizamos as Leis de Kirchhoff, que são generalizações das leis de conservação da carga e da energia.
              </p>
            </div>

            {/* 1ª Lei: Lei dos Nós */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                1ª Lei de Kirchhoff: Lei dos Nós (LKC)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Baseada na <strong>conservação da carga elétrica</strong>. Em qualquer nó (junção de 3 ou mais fios), a soma das correntes que entram é igual à soma das correntes que saem.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\sum i_{\text{entrada}} = \sum i_{\text{saída}} \quad \text{ou} \quad \sum_{k=1}^{n} i_k = 0" display={true} className="text-xl" />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  (Considerando correntes que entram como positivas e que saem como negativas, ou vice-versa)
                </p>
              </div>
            </div>

            {/* 2ª Lei: Lei das Malhas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                2ª Lei de Kirchhoff: Lei das Malhas (LKT)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Baseada na <strong>conservação da energia</strong>. A soma algébrica das variações de potencial elétrico ao longo de qualquer percurso fechado (malha) é nula.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\sum_{k=1}^{n} V_k = 0" display={true} className="text-xl" />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Convenção de Sinais (Fundamental!)
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Ao percorrer uma malha em um sentido arbitrário (horário ou anti-horário):
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">•</span>
                    <span><strong>Resistores:</strong> Se percorridos no sentido da corrente, <MathFormula formula="\Delta V = -R \cdot i" display={false} /> (queda). Se contra, <MathFormula formula="\Delta V = +R \cdot i" display={false} /> (ganho).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">•</span>
                    <span><strong>Fontes (Baterias):</strong> Se percorrida do polo negativo (-) para o positivo (+), <MathFormula formula="\Delta V = +\varepsilon" display={false} /> (ganho). Se do (+) para o (-), <MathFormula formula="\Delta V = -\varepsilon" display={false} /> (queda).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ponte de Wheatstone */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Ponte de Wheatstone
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um circuito especial usado para medir resistências desconhecidas. A ponte está em <strong>equilíbrio</strong> quando não passa corrente pelo galvanômetro central (<MathFormula formula="i_G = 0" display={false} />), o que implica que os potenciais nos nós centrais são iguais.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-center font-bold text-slate-800 mb-2">Condição de Equilíbrio:</p>
                <MathFormula formula="R_1 \cdot R_x = R_2 \cdot R_3" display={true} />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  (Produto das resistências opostas é igual)
                </p>
              </div>
            </div>

            {/* Exemplo Resolvido Complexo */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido: Circuito de Duas Malhas
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Considere um circuito com duas malhas. Malha 1 (esquerda): Fonte <MathFormula formula="\varepsilon_1 = 10V" display={false} />, resistor <MathFormula formula="R_1 = 2\Omega" display={false} /> em série. Malha 2 (direita): Fonte <MathFormula formula="\varepsilon_2 = 5V" display={false} />, resistor <MathFormula formula="R_2 = 3\Omega" display={false} /> em série. Ramo central (comum às duas malhas): Resistor <MathFormula formula="R_3 = 4\Omega" display={false} />. Determine as correntes em cada ramo.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Definir Correntes:</strong> <MathFormula formula="i_1" display={false} /> na malha 1 (horário), <MathFormula formula="i_2" display={false} /> na malha 2 (horário). No ramo central, a corrente será <MathFormula formula="i_3 = i_1 - i_2" display={false} /> (descendo).
                    </li>
                    <li>
                      <strong>Aplicar LKT na Malha 1:</strong>
                      <br/>
                      <MathFormula formula="10 - 2i_1 - 4(i_1 - i_2) = 0 \Rightarrow 10 - 6i_1 + 4i_2 = 0 \quad (Eq. 1)" display={false} />
                    </li>
                    <li>
                      <strong>Aplicar LKT na Malha 2:</strong>
                      <br/>
                      <MathFormula formula="-5 - 3i_2 - 4(i_2 - i_1) = 0 \Rightarrow -5 - 7i_2 + 4i_1 = 0 \quad (Eq. 2)" display={false} />
                      <br/>
                      <span className="text-xs text-slate-500">(Nota: A fonte de 5V está oposta ao sentido horário)</span>
                    </li>
                    <li>
                      <strong>Resolver o Sistema:</strong>
                      <br/>
                      De (1): <MathFormula formula="3i_1 - 2i_2 = 5" display={false} />
                      <br/>
                      De (2): <MathFormula formula="4i_1 - 7i_2 = 5" display={false} />
                      <br/>
                      Multiplicando (1) por 7 e (2) por 2:
                      <br/>
                      <MathFormula formula="21i_1 - 14i_2 = 35" display={false} />
                      <br/>
                      <MathFormula formula="8i_1 - 14i_2 = 10" display={false} />
                      <br/>
                      Subtraindo: <MathFormula formula="13i_1 = 25 \Rightarrow i_1 \approx 1,92 A" display={false} />
                      <br/>
                      Substituindo: <MathFormula formula="i_2 \approx 0,38 A" display={false} />
                    </li>
                    <li>
                      <strong>Corrente Central:</strong> <MathFormula formula="i_3 = 1,92 - 0,38 = 1,54 A" display={false} />.
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
