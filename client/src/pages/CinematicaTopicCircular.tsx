import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle2, Target, Zap, Activity, RefreshCw, Clock, RotateCcw, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicCircular() {
  const [activeTab, setActiveTab] = useState("teoria");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "ex1": false,
    "ex2": false,
    "ex3": false,
    "ex4": false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/cinematica">
            <a className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </a>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Movimento Circular Uniforme (MCU)</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-cyan-600 font-bold mb-2">
            <BookOpen className="w-5 h-5" />
            <span>Baseado em Tópicos de Física & Renato Brito</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Movimento Circular Uniforme (MCU)</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            O estudo descritivo dos movimentos circulares através das grandezas lineares e angulares, onde a rapidez é constante mas a direção varia continuamente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["teoria", "exercicios"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab === "teoria" ? "Teoria Completa" : "Exercícios Resolvidos"}
            </button>
          ))}
        </div>

        {activeTab === "teoria" && (
          <div className="space-y-12">

            {/* 1. O Enfoque Angular */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. O Enfoque Angular</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Até agora, estudamos grandezas <strong>lineares</strong> (espaço <MathFormula formula="s" display={false} />, velocidade <MathFormula formula="v" display={false} />, aceleração <MathFormula formula="a" display={false} />). Nos movimentos circulares, torna-se útil introduzir as grandezas <strong>angulares</strong>, definidas a partir de medidas de ângulos.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Medida de Ângulo (Radiano)</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Um radiano (rad) é a medida do ângulo central que determina na circunferência um arco cujo comprimento (<MathFormula formula="\ell" display={false} />) é igual ao raio (<MathFormula formula="R" display={false} />).
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                      <MathFormula formula="\theta = \frac{\ell}{R}" display={false} />
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Espaço Angular (<MathFormula formula="\phi" display={false} />)</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Também chamado de <strong>fase</strong>, é o ângulo marcado no sentido do movimento a partir de um raio de referência.
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                      <MathFormula formula="\phi = \frac{s}{R}" display={false} />
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                  <h3 className="text-xl font-bold text-cyan-900 mb-3 flex items-center gap-2">
                    <Info className="w-6 h-6" />
                    Relação Fundamental
                  </h3>
                  <p className="text-cyan-800">
                    Qualquer grandeza linear (<MathFormula formula="L" display={false} />) relaciona-se com sua correspondente angular (<MathFormula formula="A" display={false} />) através do raio: <strong>Linear = Angular × Raio</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Definição de MCU */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Movimento Circular e Uniforme (MCU)</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Uma partícula está em MCU quando descreve uma trajetória circular, percorrendo arcos de comprimentos (<MathFormula formula="\Delta s" display={false} />) iguais em iguais intervalos de tempo (<MathFormula formula="\Delta t" display={false} />).
                </p>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                  <h4 className="font-bold text-slate-900 mb-4">Características do MCU:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong>Velocidade Escalar Constante:</strong> <MathFormula formula="v = \text{constante} \neq 0" display={false} /> e <MathFormula formula="\omega = \text{constante} \neq 0" display={false} />.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong>Aceleração Escalar Nula:</strong> A rapidez não muda (<MathFormula formula="\alpha = 0" display={false} />).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong>Aceleração Centrípeta:</strong> Existe e é constante em módulo, pois a direção da velocidade muda.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Cuidado com o Vetor Velocidade!
                  </h3>
                  <p className="text-amber-800">
                    No MCU, a velocidade <strong>escalar</strong> é constante, mas a velocidade <strong>vetorial</strong> (<MathFormula formula="\vec{v}" display={false} />) NÃO é constante, pois sua direção muda a cada instante.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Período e Frequência */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Período (<MathFormula formula="T" display={false} />) e Frequência (<MathFormula formula="f" display={false} />)</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-8">
                  O MCU é um <strong>movimento periódico</strong>, pois suas características se repetem em intervalos de tempo iguais.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-cyan-600" />
                      Período (<MathFormula formula="T" display={false} />)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      É o intervalo de tempo decorrido durante <strong>uma volta</strong> completa da partícula.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                      <MathFormula formula="T = \frac{\Delta t}{n}" display={true} />
                      <p className="text-xs text-slate-500 mt-2">Unidade SI: segundos (s)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <RefreshCw className="w-6 h-6 text-cyan-600" />
                      Frequência (<MathFormula formula="f" display={false} />)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      É o <strong>número de voltas</strong> que a partícula efetua por unidade de tempo.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                      <MathFormula formula="f = \frac{n}{\Delta t}" display={true} />
                      <p className="text-xs text-slate-500 mt-2">Unidade SI: Hertz (Hz = s⁻¹)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center mb-8">
                  <h4 className="font-bold text-cyan-900 mb-4">Relação Fundamental</h4>
                  <MathFormula formula="f = \frac{1}{T} \quad \text{ou} \quad T \cdot f = 1" display={true} />
                  <p className="text-sm text-cyan-800 mt-4 text-center">
                    A frequência é o inverso do período. Quanto mais tempo demora uma volta (maior <MathFormula formula="T" display={false} />), menos voltas são completadas por segundo (menor <MathFormula formula="f" display={false} />).
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Conversão de RPM para Hz</h4>
                  <p className="text-slate-700 mb-4">
                    Na prática, usa-se muito <strong>rotações por minuto (rpm)</strong>. A relação com o Hertz (rotações por segundo) é:
                  </p>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div className="bg-white px-6 py-3 rounded border border-slate-300 font-mono text-cyan-700">
                      60 rpm = 1 Hz
                    </div>
                    <div className="bg-white px-6 py-3 rounded border border-slate-300 font-mono text-cyan-700">
                      f(Hz) = f(rpm) / 60
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Velocidade Angular */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Velocidade Escalar Angular (<MathFormula formula="\omega" display={false} />)</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  No MCU, a velocidade angular é constante e pode ser relacionada com o período e a frequência.
                </p>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                  <p className="text-slate-700 mb-4">
                    Para uma volta completa (<MathFormula formula="\Delta \phi = 2\pi" display={false} /> rad), o tempo gasto é <MathFormula formula="\Delta t = T" display={false} />. Assim:
                  </p>
                  <div className="flex justify-center">
                    <MathFormula formula="\omega = \frac{2\pi}{T} = 2\pi f" display={true} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4">Função Horária do Espaço Angular</h4>
                <p className="text-slate-700 mb-6">
                  Análoga à função horária linear (<MathFormula formula="s = s_0 + vt" display={false} />), temos para o ângulo:
                </p>
                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center">
                  <MathFormula formula="\phi = \phi_0 + \omega t" display={true} />
                  <div className="grid grid-cols-2 gap-8 mt-4 text-sm text-cyan-800">
                    <div><MathFormula formula="\phi" display={false} />: fase final</div>
                    <div><MathFormula formula="\phi_0" display={false} />: fase inicial</div>
                    <div><MathFormula formula="\omega" display={false} />: vel. angular</div>
                    <div><MathFormula formula="t" display={false} />: tempo</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Acoplamento de Polias */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Acoplamento de Polias e Rodas Dentadas</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  Existem dois tipos principais de acoplamento que aparecem com frequência em problemas de engenharia e física:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Mesmo Eixo (Solidárias)
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Duas polias fixas ao mesmo eixo giram juntas.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2 mb-4">
                      <li>• Mesma velocidade angular: <MathFormula formula="\omega_A = \omega_B" display={false} /></li>
                      <li>• Mesmo período: <MathFormula formula="T_A = T_B" display={false} /></li>
                      <li>• Mesma frequência: <MathFormula formula="f_A = f_B" display={false} /></li>
                    </ul>
                    <div className="bg-white p-2 rounded border border-slate-200 text-center text-xs font-bold text-cyan-700">
                      v_A / R_A = v_B / R_B
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-500" />
                      Por Correia ou Contato
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Polias ligadas por correia ou encostadas uma na outra.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2 mb-4">
                      <li>• Mesma velocidade linear: <MathFormula formula="v_A = v_B" display={false} /></li>
                      <li>• Velocidades angulares diferentes!</li>
                    </ul>
                    <div className="bg-white p-2 rounded border border-slate-200 text-center text-xs font-bold text-cyan-700">
                      \omega_A R_A = \omega_B R_B \implies f_A R_A = f_B R_B
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === "exercicios" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Exercícios Resolvidos (Nível Tópicos de Física)</h2>

            {/* Exercício 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cálculo de Velocidade Angular</h3>
                    <p className="text-slate-700 italic mb-4">"Uma partícula percorre, em 10 s, um arco de circunferência de comprimento 60 cm. Sabendo que o raio da trajetória é 30 cm, determine a velocidade escalar média angular."</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex1")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex1"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex1"] ? "Ocultar Resolução" : "Ver Resolução"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex1"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-4">
                        <p className="text-slate-700"><strong>1. Cálculo do deslocamento angular (<MathFormula formula="\Delta \phi" display={false} />):</strong></p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="\Delta \phi = \frac{\Delta s}{R} = \frac{60 \text{ cm}}{30 \text{ cm}} = 2 \text{ rad}" display={false} />
                        </div>
                        <p className="text-slate-700"><strong>2. Cálculo da velocidade angular (<MathFormula formula="\omega_m" display={false} />):</strong></p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="\omega_m = \frac{\Delta \phi}{\Delta t} = \frac{2 \text{ rad}}{10 \text{ s}} = 0,2 \text{ rad/s}" display={false} />
                        </div>
                        <p className="text-green-700 font-bold">Resposta: 0,2 rad/s</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Exercício 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Conversão de RPM e Período</h3>
                    <p className="text-slate-700 italic mb-4">"Um motor gira a 3000 RPM. Determine seu período em segundos e sua frequência em Hz."</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex2")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex2"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex2"] ? "Ocultar Resolução" : "Ver Resolução"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex2"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-4">
                        <p className="text-slate-700"><strong>1. Frequência em Hz:</strong></p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="f = \frac{3000 \text{ rpm}}{60} = 50 \text{ Hz}" display={false} />
                        </div>
                        <p className="text-slate-700"><strong>2. Período T:</strong></p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="T = \frac{1}{f} = \frac{1}{50} = 0,02 \text{ s}" display={false} />
                        </div>
                        <p className="text-green-700 font-bold">Resposta: f = 50 Hz | T = 0,02 s</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Exercício 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Acoplamento de Polias</h3>
                    <p className="text-slate-700 italic mb-4">"Duas polias A e B, de raios R_A = 10 cm e R_B = 40 cm, estão acopladas por uma correia. Se a polia A gira a 120 Hz, qual a frequência da polia B?"</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex3")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex3"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex3"] ? "Ocultar Resolução" : "Ver Resolução"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex3"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-4">
                        <p className="text-slate-700"><strong>1. Relação de acoplamento por correia:</strong></p>
                        <p className="text-sm text-slate-600">Como estão ligadas por correia, a velocidade linear nas periferias é a mesma (<MathFormula formula="v_A = v_B" display={false} />).</p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="f_A \cdot R_A = f_B \cdot R_B" display={false} />
                        </div>
                        <p className="text-slate-700"><strong>2. Substituindo os valores:</strong></p>
                        <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                          <MathFormula formula="120 \cdot 10 = f_B \cdot 40 \implies 1200 = 40 f_B \implies f_B = 30 \text{ Hz}" display={false} />
                        </div>
                        <p className="text-green-700 font-bold">Resposta: 30 Hz</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
