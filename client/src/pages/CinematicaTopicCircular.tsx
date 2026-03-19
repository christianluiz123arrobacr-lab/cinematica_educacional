import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle2, Target, Zap, Activity, RefreshCw, Clock, RotateCcw } from "lucide-react";
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Movimento Circular Uniforme (MCU)</h1>
          <p className="text-xl text-slate-600">
            O movimento em trajetória circular com rapidez constante — onde velocidade e aceleração coexistem de forma surpreendente.
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

            {/* 1. Contexto e Definição */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. O que é o MCU?</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  O Movimento Circular Uniforme (MCU) é aquele em que um corpo descreve uma <strong>trajetória circular</strong> com <strong>rapidez (módulo da velocidade) constante</strong>. Apesar da rapidez ser constante, a <em>direção</em> da velocidade muda continuamente — o que implica, necessariamente, a existência de aceleração.
                </p>
                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                  <h3 className="text-xl font-bold text-cyan-900 mb-3 flex items-center gap-2">
                    <Info className="w-6 h-6" />
                    A Grande Sacada do MCU
                  </h3>
                  <p className="text-cyan-800">
                    No MCU, a velocidade vetorial <MathFormula formula="\vec{v}" display={false} /> é sempre <strong>tangente à circunferência</strong> e perpendicular ao raio. Ela muda de direção a cada instante, mas seu módulo permanece constante. Essa variação de direção é o que caracteriza a <strong>aceleração centrípeta</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Período T */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Período <MathFormula formula="T" display={false} /></h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Definição</h3>
                    <p className="text-lg text-slate-700">
                      O <strong>Período</strong> (<MathFormula formula="T" display={false} />) é o <strong>tempo necessário para o móvel completar uma volta completa</strong> (360° ou <MathFormula formula="2\pi" display={false} /> radianos) na trajetória circular.
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center mb-8">
                  <MathFormula formula="T = \frac{\Delta t}{n}" display={true} />
                  <p className="text-sm text-cyan-800 mt-3 font-medium text-center">
                    Onde <MathFormula formula="\Delta t" display={false} /> é o intervalo de tempo total e <MathFormula formula="n" display={false} /> é o número de voltas completas realizadas nesse intervalo.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4">Termo-a-termo</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
                    <div className="text-2xl text-cyan-600 mb-2"><MathFormula formula="T" display={false} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Período</h5>
                    <p className="text-sm text-slate-600">Tempo de uma volta completa. No SI, medido em <strong>segundos (s)</strong>.</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
                    <div className="text-2xl text-cyan-600 mb-2"><MathFormula formula="\Delta t" display={false} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Intervalo de Tempo</h5>
                    <p className="text-sm text-slate-600">Tempo total observado. No SI, medido em <strong>segundos (s)</strong>.</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
                    <div className="text-2xl text-cyan-600 mb-2"><MathFormula formula="n" display={false} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Número de Voltas</h5>
                    <p className="text-sm text-slate-600">Quantidade de rotações completas. <strong>Adimensional</strong> (sem unidade).</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">Exemplos do Cotidiano</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <RotateCcw className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>O ponteiro dos <strong>segundos</strong> de um relógio completa uma volta em 60 s, portanto <MathFormula formula="T = 60 \text{ s}" display={false} />.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <RotateCcw className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>O ponteiro dos <strong>minutos</strong> completa uma volta em 3600 s (1 hora), portanto <MathFormula formula="T = 3600 \text{ s}" display={false} />.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <RotateCcw className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>Um <strong>carrossel</strong> que dá uma volta a cada 8 segundos tem <MathFormula formula="T = 8 \text{ s}" display={false} />.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Frequência f */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Frequência <MathFormula formula="f" display={false} /></h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center shrink-0">
                    <RefreshCw className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Definição</h3>
                    <p className="text-lg text-slate-700">
                      A <strong>Frequência</strong> (<MathFormula formula="f" display={false} />) é o <strong>número de voltas completas realizadas por unidade de tempo</strong>. Ela mede o quão "rápido" o objeto completa suas rotações.
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center mb-8">
                  <MathFormula formula="f = \frac{n}{\Delta t}" display={true} />
                  <p className="text-sm text-cyan-800 mt-3 font-medium text-center">
                    Onde <MathFormula formula="n" display={false} /> é o número de voltas e <MathFormula formula="\Delta t" display={false} /> é o intervalo de tempo.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-8">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Unidade: Hertz (Hz)
                  </h4>
                  <p className="text-blue-800">
                    A unidade de frequência no SI é o <strong>Hertz (Hz)</strong>, em homenagem ao físico Heinrich Hertz. Por definição, <MathFormula formula="1 \text{ Hz} = 1 \text{ volta/segundo} = 1 \text{ s}^{-1}" display={false} />.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4">Exemplos do Cotidiano</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Motor de carro em marcha lenta</p>
                    <p className="text-sm text-slate-600 mb-2">Gira a cerca de 800 RPM (rotações por minuto).</p>
                    <div className="bg-white p-2 rounded border border-slate-200 text-center">
                      <MathFormula formula="f = \frac{800}{60} \approx 13,3 \text{ Hz}" display={false} />
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Hélice de ventilador</p>
                    <p className="text-sm text-slate-600 mb-2">Gira a cerca de 1200 RPM no máximo.</p>
                    <div className="bg-white p-2 rounded border border-slate-200 text-center">
                      <MathFormula formula="f = \frac{1200}{60} = 20 \text{ Hz}" display={false} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Relação Inversa T e f */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">4. A Relação Inversa entre <MathFormula formula="T" display={false} /> e <MathFormula formula="f" display={false} /></h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  Período e frequência são <strong>grandezas inversamente proporcionais</strong>: quanto maior o período (mais lento), menor a frequência (menos voltas por segundo), e vice-versa. Essa relação é a mais importante do MCU e deve ser memorizada.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="text-slate-700">Partindo das definições de <MathFormula formula="T" display={false} /> e <MathFormula formula="f" display={false} />:</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex justify-center gap-16 flex-wrap overflow-x-auto">
                    <MathFormula formula="T = \frac{\Delta t}{n}" display={true} />
                    <MathFormula formula="f = \frac{n}{\Delta t}" display={true} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="text-slate-700">Multiplicando as duas expressões:</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
                    <MathFormula formula="T \cdot f = \frac{\Delta t}{n} \cdot \frac{n}{\Delta t} = 1" display={true} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="text-slate-700">Portanto, a relação fundamental é:</p>
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center">
                    <MathFormula formula="T = \frac{1}{f} \quad \Longleftrightarrow \quad f = \frac{1}{T}" display={true} />
                    <p className="text-sm text-cyan-800 mt-4 font-medium text-center">Relação Inversa entre Período e Frequência</p>
                  </div>
                </div>

                {/* Tabela de exemplos */}
                <h4 className="text-xl font-bold text-slate-900 mb-4">Tabela de Correspondência</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cyan-600 text-white">
                        <th className="p-3 text-left rounded-tl-lg">Objeto</th>
                        <th className="p-3 text-center">Período T (s)</th>
                        <th className="p-3 text-center rounded-tr-lg">Frequência f (Hz)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-slate-100">
                        <td className="p-3 text-slate-700">Ponteiro dos segundos</td>
                        <td className="p-3 text-center font-mono text-cyan-700">60</td>
                        <td className="p-3 text-center font-mono text-cyan-700">≈ 0,017</td>
                      </tr>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <td className="p-3 text-slate-700">Carrossel (1 volta em 8s)</td>
                        <td className="p-3 text-center font-mono text-cyan-700">8</td>
                        <td className="p-3 text-center font-mono text-cyan-700">0,125</td>
                      </tr>
                      <tr className="bg-white border-b border-slate-100">
                        <td className="p-3 text-slate-700">Hélice de ventilador (20 Hz)</td>
                        <td className="p-3 text-center font-mono text-cyan-700">0,05</td>
                        <td className="p-3 text-center font-mono text-cyan-700">20</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 text-slate-700">Motor (800 RPM)</td>
                        <td className="p-3 text-center font-mono text-cyan-700">≈ 0,075</td>
                        <td className="p-3 text-center font-mono text-cyan-700">≈ 13,3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 5. RPM e conversão */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">5. RPM — Rotações por Minuto</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  Na prática, motores e máquinas têm sua velocidade de rotação expressa em <strong>RPM (rotações por minuto)</strong>. Para usar nas fórmulas do MCU, é preciso converter para Hz (rotações por segundo) ou para o período em segundos.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">RPM <MathFormula formula="\rightarrow" display={false} /> Hz</h4>
                    <p className="text-sm text-slate-600 mb-3">Divida por 60 (pois 1 minuto = 60 segundos):</p>
                    <div className="bg-white p-3 rounded border border-slate-200 flex justify-center">
                      <MathFormula formula="f \text{ (Hz)} = \frac{\text{RPM}}{60}" display={false} />
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">RPM <MathFormula formula="\rightarrow" display={false} /> Período T</h4>
                    <p className="text-sm text-slate-600 mb-3">Divida 60 pelo valor em RPM:</p>
                    <div className="bg-white p-3 rounded border border-slate-200 flex justify-center">
                      <MathFormula formula="T \text{ (s)} = \frac{60}{\text{RPM}}" display={false} />
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Armadilha Clássica em Provas
                  </h4>
                  <p className="text-amber-800">
                    Quando o enunciado diz "o motor gira a 1800 RPM", ele <strong>não</strong> está dizendo que <MathFormula formula="f = 1800 \text{ Hz}" display={false} />! Você deve converter: <MathFormula formula="f = 1800/60 = 30 \text{ Hz}" display={false} /> e <MathFormula formula="T = 1/30 \approx 0,033 \text{ s}" display={false} />.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Velocidade Angular */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Velocidade Angular <MathFormula formula="\omega" display={false} /></h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  A <strong>velocidade angular</strong> (<MathFormula formula="\omega" display={false} />, lê-se "ômega") mede a taxa de variação do ângulo percorrido pelo móvel. É a grandeza angular análoga à velocidade linear.
                </p>

                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center mb-6">
                  <MathFormula formula="\omega = \frac{\Delta \theta}{\Delta t}" display={true} />
                  <p className="text-sm text-cyan-800 mt-3 font-medium">Unidade no SI: radiano por segundo (rad/s)</p>
                </div>

                <p className="text-slate-700 mb-4">
                  Para uma volta completa, o ângulo percorrido é <MathFormula formula="2\pi" display={false} /> radianos e o tempo gasto é o período <MathFormula formula="T" display={false} />. Portanto:
                </p>
                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 flex flex-col items-center mb-6">
                  <MathFormula formula="\omega = \frac{2\pi}{T} = 2\pi f" display={true} />
                  <p className="text-sm text-cyan-800 mt-3 font-medium">Relação entre velocidade angular, período e frequência</p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4">Tabela de Relações Fundamentais do MCU</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="p-3 text-left rounded-tl-lg">Grandeza</th>
                        <th className="p-3 text-center">Símbolo</th>
                        <th className="p-3 text-center">Unidade SI</th>
                        <th className="p-3 text-center rounded-tr-lg">Fórmula Principal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-slate-100">
                        <td className="p-3 text-slate-700 font-medium">Período</td>
                        <td className="p-3 text-center"><MathFormula formula="T" display={false} /></td>
                        <td className="p-3 text-center text-slate-600">s</td>
                        <td className="p-3 text-center"><MathFormula formula="T = \Delta t / n" display={false} /></td>
                      </tr>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <td className="p-3 text-slate-700 font-medium">Frequência</td>
                        <td className="p-3 text-center"><MathFormula formula="f" display={false} /></td>
                        <td className="p-3 text-center text-slate-600">Hz = s⁻¹</td>
                        <td className="p-3 text-center"><MathFormula formula="f = n / \Delta t = 1/T" display={false} /></td>
                      </tr>
                      <tr className="bg-white border-b border-slate-100">
                        <td className="p-3 text-slate-700 font-medium">Vel. Angular</td>
                        <td className="p-3 text-center"><MathFormula formula="\omega" display={false} /></td>
                        <td className="p-3 text-center text-slate-600">rad/s</td>
                        <td className="p-3 text-center"><MathFormula formula="\omega = 2\pi f = 2\pi/T" display={false} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 7. Armadilhas */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Armadilhas e Erros Comuns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-red-900">Confundir RPM com Hz</h3>
                  </div>
                  <p className="text-red-800 mb-3">RPM e Hz são unidades diferentes! RPM é rotações por <em>minuto</em>, Hz é rotações por <em>segundo</em>.</p>
                  <div className="bg-white p-3 rounded border border-red-200 text-center">
                    <MathFormula formula="f (\text{Hz}) = \frac{\text{RPM}}{60}" display={false} />
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-orange-900">Período não é frequência</h3>
                  </div>
                  <p className="text-orange-800 mb-3">Período e frequência são inversos um do outro. Um período de 2s <strong>não</strong> é uma frequência de 2 Hz!</p>
                  <div className="bg-white p-3 rounded border border-orange-200 text-center">
                    <MathFormula formula="T = 2 \text{ s} \implies f = \frac{1}{2} = 0,5 \text{ Hz}" display={false} />
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === "exercicios" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Exercícios Resolvidos Passo a Passo</h2>

            {/* Exercício 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Calculando Período e Frequência</h3>
                    <p className="text-slate-700">
                      Uma roda de bicicleta completa 150 voltas em 1 minuto. Determine:
                      <br/>a) O período <MathFormula formula="T" display={false} /> da roda.
                      <br/>b) A frequência <MathFormula formula="f" display={false} /> em Hz.
                      <br/>c) A velocidade angular <MathFormula formula="\omega" display={false} /> em rad/s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex1")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex1"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex1"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex1"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Dados do problema</h4>
                          <ul className="list-disc list-inside ml-4 text-slate-700 space-y-1">
                            <li><MathFormula formula="n = 150 \text{ voltas}" display={false} /></li>
                            <li><MathFormula formula="\Delta t = 1 \text{ min} = 60 \text{ s}" display={false} /> (atenção à conversão!)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">a) Período T</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="T = \frac{\Delta t}{n} = \frac{60}{150} = 0,4 \text{ s}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">b) Frequência f</h4>
                          <p className="text-slate-700 mb-2">Podemos calcular diretamente pela definição ou usando a relação com T:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="f = \frac{1}{T} = \frac{1}{0,4} = 2,5 \text{ Hz}" display={false} />
                          </div>
                          <p className="text-slate-600 text-sm mt-2">Verificação: <MathFormula formula="f = n/\Delta t = 150/60 = 2,5 \text{ Hz}" display={false} /> ✓</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">c) Velocidade Angular ω</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="\omega = 2\pi f = 2\pi \times 2,5 = 5\pi \approx 15,7 \text{ rad/s}" display={false} />
                          </div>
                        </div>
                        <p className="text-green-700 font-bold text-center">Respostas: T = 0,4 s | f = 2,5 Hz | ω ≈ 15,7 rad/s</p>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Motor em RPM</h3>
                    <p className="text-slate-700">
                      Um motor elétrico gira a 3600 RPM. Determine a frequência em Hz, o período em segundos e a velocidade angular em rad/s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex2")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex2"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex2"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex2"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 1: Converter RPM para Hz</h4>
                          <p className="text-slate-700 mb-2">RPM significa rotações por minuto. Para obter Hz (rotações por segundo), dividimos por 60:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="f = \frac{3600}{60} = 60 \text{ Hz}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 2: Calcular o Período</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="T = \frac{1}{f} = \frac{1}{60} \approx 0,0167 \text{ s}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 3: Calcular a Velocidade Angular</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="\omega = 2\pi f = 2\pi \times 60 = 120\pi \approx 377 \text{ rad/s}" display={false} />
                          </div>
                        </div>
                        <p className="text-green-700 font-bold text-center">Respostas: f = 60 Hz | T ≈ 0,017 s | ω = 120π ≈ 377 rad/s</p>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Quantas voltas em um dado tempo?</h3>
                    <p className="text-slate-700">
                      Um ventilador tem frequência de 25 Hz. Quantas voltas ele completa em 3 minutos?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex3")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex3"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex3"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex3"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 1: Converter o tempo para segundos</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="\Delta t = 3 \text{ min} = 3 \times 60 = 180 \text{ s}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 2: Isolar n na fórmula da frequência</h4>
                          <p className="text-slate-700 mb-2">Da definição <MathFormula formula="f = n / \Delta t" display={false} />, isolamos <MathFormula formula="n" display={false} />:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="n = f \cdot \Delta t = 25 \times 180 = 4500 \text{ voltas}" display={false} />
                          </div>
                        </div>
                        <p className="text-green-700 font-bold text-center">Resposta: O ventilador completa 4500 voltas em 3 minutos.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Exercício 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ponteiros do Relógio (Clássico)</h3>
                    <p className="text-slate-700">
                      Determine a velocidade angular do ponteiro dos minutos de um relógio analógico em rad/s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button onClick={() => toggleSection("ex4")} className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  {expandedSections["ex4"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex4"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                <AnimatePresence>
                  {expandedSections["ex4"] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 1: Identificar o Período</h4>
                          <p className="text-slate-700 mb-2">O ponteiro dos minutos completa uma volta em 1 hora = 60 minutos = 3600 segundos:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="T = 3600 \text{ s}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 2: Calcular a Frequência</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="f = \frac{1}{T} = \frac{1}{3600} \approx 2,78 \times 10^{-4} \text{ Hz}" display={false} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 3: Calcular ω</h4>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="\omega = \frac{2\pi}{T} = \frac{2\pi}{3600} = \frac{\pi}{1800} \approx 1,75 \times 10^{-3} \text{ rad/s}" display={false} />
                          </div>
                        </div>
                        <p className="text-green-700 font-bold text-center">Resposta: ω = π/1800 ≈ 1,75 × 10⁻³ rad/s</p>
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
