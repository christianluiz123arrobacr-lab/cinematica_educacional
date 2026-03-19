import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, ChevronUp, Play, Info, AlertTriangle, CheckCircle2, Target, Zap, Activity, BookOpen, Calculator, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicMRU() {
  const [activeTab, setActiveTab] = useState("teoria");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "ex1": false,
    "ex2": false,
    "ex3": false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/cinematica">
              <a className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </a>
            </Link>
            <h1 className="text-xl font-bold text-slate-900">Movimento Retilíneo Uniforme (MRU)</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Movimento Retilíneo Uniforme (MRU)</h1>
          <p className="text-xl text-slate-600">
            O estudo do movimento mais simples da natureza: velocidade constante em linha reta.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("teoria")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "teoria"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Teoria Completa
          </button>
          <button
            onClick={() => setActiveTab("exercicios")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "exercicios"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Exercícios Resolvidos
          </button>
        </div>

        {activeTab === "teoria" && (
          <div className="space-y-12">
            {/* 1. Contexto Histórico e Conceitual */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Contexto Histórico e Conceitual</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  O Movimento Retilíneo Uniforme (MRU) é o modelo mais fundamental da cinemática. Historicamente, a compreensão de que um corpo pode manter seu estado de movimento indefinidamente sem a ação de forças foi um dos maiores saltos da física, culminando na <strong>Primeira Lei de Newton (Princípio da Inércia)</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Info className="w-6 h-6" />
                    O que significa "Uniforme"?
                  </h3>
                  <p className="text-blue-800">
                    Na física, a palavra "uniforme" significa <strong>constante no tempo</strong>. Portanto, um movimento uniforme é aquele em que a velocidade não muda à medida que o tempo passa. Se a trajetória for uma linha reta, temos o Movimento Retilíneo Uniforme.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Definições Precisas */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Definições Precisas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    Condições para o MRU
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900">Velocidade Constante</strong>
                        <span className="text-slate-600">A velocidade escalar instantânea é a mesma em qualquer instante de tempo (<MathFormula formula="v = \text{constante} \neq 0" display={false} />).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900">Aceleração Nula</strong>
                        <span className="text-slate-600">Como a velocidade não varia, a aceleração é estritamente zero (<MathFormula formula="a = 0" display={false} />).</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900">Trajetória Retilínea</strong>
                        <span className="text-slate-600">O móvel se desloca ao longo de uma linha reta, sem fazer curvas.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Activity className="w-6 h-6 text-blue-600" />
                    Consequência Direta
                  </h3>
                  <p className="text-slate-700 mb-4">
                    No MRU, o móvel percorre <strong>distâncias iguais em intervalos de tempo iguais</strong>.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                    <p className="text-sm text-slate-600 mb-2">Se <MathFormula formula="v = 20 \text{ m/s}" display={false} />:</p>
                    <ul className="text-slate-800 font-medium space-y-1">
                      <li>Em 1s, percorre 20m</li>
                      <li>Em 2s, percorre 40m</li>
                      <li>Em 3s, percorre 60m</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Deduções Matemáticas Completas */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Deduções Matemáticas Completas</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">A Função Horária do Espaço</h3>
                <p className="text-slate-700 mb-6">
                  A função horária do espaço é a equação que permite determinar a posição (<MathFormula formula="s" display={false} />) do móvel em qualquer instante de tempo (<MathFormula formula="t" display={false} />). Vamos deduzi-la a partir da definição de velocidade média.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="text-slate-700">Sabemos que a velocidade média é a razão entre o deslocamento e o intervalo de tempo:</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
                    <MathFormula formula="v_m = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}" display={true} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="text-slate-700">No MRU, a velocidade instantânea (<MathFormula formula="v" display={false} />) é constante, logo ela é igual à própria velocidade média (<MathFormula formula="v = v_m" display={false} />). Além disso, geralmente adotamos o instante inicial como zero (<MathFormula formula="t_0 = 0" display={false} />):</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
                    <MathFormula formula="v = \frac{s - s_0}{t - 0} \implies v = \frac{s - s_0}{t}" display={true} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="text-slate-700">Isolando a posição final (<MathFormula formula="s" display={false} />), obtemos a famosa <strong>Equação do Sorvete</strong>:</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center">
                    <MathFormula formula="s = s_0 + v \cdot t" display={true} />
                    <p className="text-sm text-blue-800 mt-4 font-medium">Função Horária do Espaço no MRU (Equação do 1º Grau)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Termo-a-termo */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Termo-a-termo</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="text-3xl text-blue-600 mb-2 text-center"><MathFormula formula="s" display={false} /></div>
                  <h4 className="font-bold text-slate-900 text-center mb-2">Posição Final</h4>
                  <p className="text-sm text-slate-600 text-center">Onde o móvel está no instante <MathFormula formula="t" display={false} />. No SI, é medido em metros (m).</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="text-3xl text-blue-600 mb-2 text-center"><MathFormula formula="s_0" display={false} /></div>
                  <h4 className="font-bold text-slate-900 text-center mb-2">Posição Inicial</h4>
                  <p className="text-sm text-slate-600 text-center">Onde o móvel estava no instante <MathFormula formula="t = 0" display={false} />. No SI, é medido em metros (m).</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="text-3xl text-blue-600 mb-2 text-center"><MathFormula formula="v" display={false} /></div>
                  <h4 className="font-bold text-slate-900 text-center mb-2">Velocidade</h4>
                  <p className="text-sm text-slate-600 text-center">A taxa constante de variação da posição. No SI, é medida em m/s.</p>
                </div>
              </div>
            </section>

            {/* 5. Relação Matemática Fundamental */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Classificação do Movimento</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  O sinal da velocidade (<MathFormula formula="v" display={false} />) determina o sentido do movimento em relação à orientação da trajetória escolhida.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-green-200 rounded-xl p-6 bg-green-50/30">
                    <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                      <MathFormula formula="v > 0" display={false} /> Movimento Progressivo
                    </h4>
                    <p className="text-slate-700 mb-4">
                      O móvel se desloca <strong>a favor</strong> da orientação da trajetória. As posições (<MathFormula formula="s" display={false} />) crescem com o passar do tempo.
                    </p>
                    <div className="h-24 bg-white rounded-lg border border-green-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute w-full h-0.5 bg-slate-300 top-1/2 -translate-y-1/2"></div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-slate-400 rotate-45"></div>
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full shadow-md z-10"></div>
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 ml-6 -mt-6 text-green-600 font-bold text-sm flex items-center">
                        v <ArrowLeft className="w-3 h-3 rotate-180 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="border border-red-200 rounded-xl p-6 bg-red-50/30">
                    <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                      <MathFormula formula="v < 0" display={false} /> Movimento Retrógrado
                    </h4>
                    <p className="text-slate-700 mb-4">
                      O móvel se desloca <strong>contra</strong> a orientação da trajetória. As posições (<MathFormula formula="s" display={false} />) decrescem com o passar do tempo.
                    </p>
                    <div className="h-24 bg-white rounded-lg border border-red-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute w-full h-0.5 bg-slate-300 top-1/2 -translate-y-1/2"></div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-slate-400 rotate-45"></div>
                      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md z-10"></div>
                      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 mr-6 -mt-6 text-red-600 font-bold text-sm flex items-center">
                        <ArrowLeft className="w-3 h-3 mr-1" /> v
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Interpretação Gráfica */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Interpretação Gráfica</h2>
              <div className="space-y-8">
                {/* Gráfico s x t */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Gráfico Posição vs. Tempo (<MathFormula formula="s \times t" display={false} />)</h3>
                  <p className="text-slate-700 mb-6">
                    Como a função horária <MathFormula formula="s = s_0 + vt" display={false} /> é do 1º grau, o gráfico <MathFormula formula="s \times t" display={false} /> é sempre uma <strong>reta inclinada</strong>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 text-center">Movimento Progressivo (<MathFormula formula="v > 0" display={false} />)</h4>
                      <div className="aspect-video relative bg-white rounded-lg border border-slate-200 p-4">
                        {/* Eixos */}
                        <div className="absolute left-8 bottom-8 top-4 w-0.5 bg-slate-800"></div>
                        <div className="absolute left-8 bottom-8 right-4 h-0.5 bg-slate-800"></div>
                        <div className="absolute left-4 top-4 text-sm font-bold">s</div>
                        <div className="absolute right-4 bottom-2 text-sm font-bold">t</div>
                        {/* Reta */}
                        <svg className="absolute inset-0 w-full h-full" style={{ padding: '2rem 2rem 2rem 2rem' }}>
                          <line x1="0" y1="80%" x2="100%" y2="20%" stroke="#2563eb" strokeWidth="3" />
                          <text x="-15" y="80%" className="text-xs fill-slate-600">s₀</text>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 mt-4 text-center">Reta crescente. A inclinação (tangente do ângulo) é numericamente igual à velocidade.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 text-center">Movimento Retrógrado (<MathFormula formula="v < 0" display={false} />)</h4>
                      <div className="aspect-video relative bg-white rounded-lg border border-slate-200 p-4">
                        {/* Eixos */}
                        <div className="absolute left-8 bottom-8 top-4 w-0.5 bg-slate-800"></div>
                        <div className="absolute left-8 bottom-8 right-4 h-0.5 bg-slate-800"></div>
                        <div className="absolute left-4 top-4 text-sm font-bold">s</div>
                        <div className="absolute right-4 bottom-2 text-sm font-bold">t</div>
                        {/* Reta */}
                        <svg className="absolute inset-0 w-full h-full" style={{ padding: '2rem 2rem 2rem 2rem' }}>
                          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#dc2626" strokeWidth="3" />
                          <text x="-15" y="20%" className="text-xs fill-slate-600">s₀</text>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 mt-4 text-center">Reta decrescente. A inclinação negativa indica velocidade negativa.</p>
                    </div>
                  </div>
                </div>

                {/* Gráfico v x t */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Gráfico Velocidade vs. Tempo (<MathFormula formula="v \times t" display={false} />)</h3>
                  <p className="text-slate-700 mb-6">
                    Como a velocidade é constante, o gráfico <MathFormula formula="v \times t" display={false} /> é uma <strong>reta horizontal</strong> paralela ao eixo do tempo.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Propriedade Fundamental da Área
                    </h4>
                    <p className="text-blue-800">
                      Em qualquer gráfico <MathFormula formula="v \times t" display={false} />, a <strong>área sob a curva</strong> (entre a linha do gráfico e o eixo do tempo) é numericamente igual ao deslocamento escalar (<MathFormula formula="\Delta s" display={false} />).
                    </p>
                    <div className="mt-4 flex justify-center">
                      <MathFormula formula="\text{Área} \stackrel{N}{=} \Delta s" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Encontro de Móveis */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Encontro e Ultrapassagem</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  Um dos problemas mais clássicos de cinemática envolve dois móveis (A e B) que se encontram ou se ultrapassam. A condição matemática para o encontro é simples: <strong>eles devem ocupar a mesma posição no mesmo instante</strong>.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                  <div className="flex justify-center mb-4">
                    <MathFormula formula="s_A = s_B" display={true} />
                  </div>
                  <p className="text-slate-700 text-center">
                    Para resolver: monte a função horária de A (<MathFormula formula="s_A = s_{0A} + v_A t" display={false} />), monte a função horária de B (<MathFormula formula="s_B = s_{0B} + v_B t" display={false} />) e iguale as duas equações para encontrar o instante do encontro (<MathFormula formula="t_e" display={false} />).
                  </p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4 mt-8">O Método da Velocidade Relativa</h4>
                <p className="text-slate-700 mb-4">
                  Uma forma muito mais rápida de resolver problemas de encontro é usar o conceito de velocidade relativa. Adotamos um dos móveis como referencial (ele "para") e o outro se move com a velocidade relativa.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h5 className="font-bold text-slate-900 mb-2">Sentidos Opostos (Colisão/Encontro)</h5>
                    <p className="text-sm text-slate-600 mb-3">Eles se aproximam mais rápido. A velocidade relativa é a soma dos módulos.</p>
                    <div className="bg-slate-100 p-3 rounded flex justify-center">
                      <MathFormula formula="v_{rel} = |v_A| + |v_B|" display={false} />
                    </div>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h5 className="font-bold text-slate-900 mb-2">Mesmo Sentido (Perseguição)</h5>
                    <p className="text-sm text-slate-600 mb-3">O de trás deve ser mais rápido. A velocidade relativa é a diferença dos módulos.</p>
                    <div className="bg-slate-100 p-3 rounded flex justify-center">
                      <MathFormula formula="v_{rel} = |v_A| - |v_B|" display={false} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                  <p className="text-blue-800">
                    O tempo de encontro é simplesmente a distância inicial dividida pela velocidade relativa:
                  </p>
                  <div className="mt-2">
                    <MathFormula formula="t_{encontro} = \frac{d_{inicial}}{v_{rel}}" display={true} />
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Armadilhas e Erros Comuns */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Armadilhas e Erros Comuns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-red-900">Unidades Incompatíveis</h3>
                  </div>
                  <p className="text-red-800 mb-4">
                    O erro mais comum em provas é misturar km/h com metros ou segundos.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-red-200">
                    <p className="text-sm text-slate-700 font-medium mb-2">A Regra de Ouro (Fator 3,6):</p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>km/h <MathFormula formula="\rightarrow" display={false} /> m/s : <strong>divida</strong> por 3,6</li>
                      <li>m/s <MathFormula formula="\rightarrow" display={false} /> km/h : <strong>multiplique</strong> por 3,6</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-orange-900">Corpos Extensos</h3>
                  </div>
                  <p className="text-orange-800 mb-4">
                    Quando um trem atravessa uma ponte, o deslocamento não é apenas o tamanho da ponte!
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-orange-200">
                    <p className="text-sm text-slate-700">
                      Para atravessar completamente, o deslocamento total deve ser a soma do comprimento do trem com o comprimento da ponte:
                    </p>
                    <div className="mt-2 flex justify-center">
                      <MathFormula formula="\Delta s = L_{trem} + L_{ponte}" display={false} />
                    </div>
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Função Horária Básica</h3>
                    <p className="text-slate-700">
                      Dada a função horária <MathFormula formula="s = 10 + 3t" display={false} /> (no SI), determine:
                      <br/>a) O espaço inicial e a velocidade escalar.
                      <br/>b) O espaço no instante <MathFormula formula="t = 5 \text{ s}" display={false} />.
                      <br/>c) O instante em que o móvel passa pela posição <MathFormula formula="s = 31 \text{ m}" display={false} />.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button 
                  onClick={() => toggleSection("ex1")}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  {expandedSections["ex1"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex1"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                
                <AnimatePresence>
                  {expandedSections["ex1"] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">a) Espaço inicial e velocidade</h4>
                          <p className="text-slate-700 mb-2">Comparando a equação dada com a equação geral do MRU:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="s = s_0 + v \cdot t" display={false} />
                            <MathFormula formula="s = 10 + 3 \cdot t" display={false} />
                          </div>
                          <p className="text-slate-700 mt-2">
                            Concluímos diretamente que <MathFormula formula="s_0 = 10 \text{ m}" display={false} /> e <MathFormula formula="v = 3 \text{ m/s}" display={false} />.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">b) Espaço em t = 5s</h4>
                          <p className="text-slate-700 mb-2">Basta substituir <MathFormula formula="t = 5" display={false} /> na equação:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="s = 10 + 3(5) = 10 + 15 = 25 \text{ m}" display={false} />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">c) Instante em que s = 31m</h4>
                          <p className="text-slate-700 mb-2">Substituímos <MathFormula formula="s = 31" display={false} /> e isolamos <MathFormula formula="t" display={false} />:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="31 = 10 + 3t" display={false} />
                            <MathFormula formula="31 - 10 = 3t" display={false} />
                            <MathFormula formula="21 = 3t \implies t = 7 \text{ s}" display={false} />
                          </div>
                        </div>
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">O Trem e a Ponte (Corpo Extenso)</h3>
                    <p className="text-slate-700">
                      Um trem de 250 m de comprimento, viajando a 72 km/h, demora quanto tempo para atravessar completamente uma ponte de 150 metros de extensão?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button 
                  onClick={() => toggleSection("ex2")}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  {expandedSections["ex2"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex2"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                
                <AnimatePresence>
                  {expandedSections["ex2"] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 1: Conversão de Unidades</h4>
                          <p className="text-slate-700 mb-2">A velocidade está em km/h e as distâncias em metros. Precisamos converter a velocidade para m/s dividindo por 3,6:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="v = \frac{72}{3,6} = 20 \text{ m/s}" display={false} />
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 2: Deslocamento Total</h4>
                          <p className="text-slate-700 mb-2">Para atravessar completamente, a frente do trem entra na ponte e a traseira do trem deve sair da ponte. O deslocamento total é a soma dos comprimentos:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="\Delta s = L_{trem} + L_{ponte} = 250 + 150 = 400 \text{ m}" display={false} />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Passo 3: Cálculo do Tempo</h4>
                          <p className="text-slate-700 mb-2">Usando a equação fundamental do MRU (<MathFormula formula="\Delta s = v \cdot \Delta t" display={false} />):</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="400 = 20 \cdot \Delta t" display={false} />
                            <MathFormula formula="\Delta t = \frac{400}{20} = 20 \text{ s}" display={false} />
                          </div>
                          <p className="text-green-700 font-bold mt-4 text-center">Resposta: O trem demora 20 segundos para atravessar a ponte.</p>
                        </div>
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Problema de Perseguição (ITA/IME style)</h3>
                    <p className="text-slate-700">
                      Uma raposa encontra-se a 100 m de um coelho, perseguindo-o. Sabendo que as velocidades da raposa e do coelho valem, respectivamente, 72 km/h e 54 km/h, quanto tempo dura essa perseguição até a raposa alcançar o coelho?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6">
                <button 
                  onClick={() => toggleSection("ex3")}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  {expandedSections["ex3"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expandedSections["ex3"] ? "Ocultar Resolução" : "Ver Resolução Passo a Passo"}
                </button>
                
                <AnimatePresence>
                  {expandedSections["ex3"] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Método 1: Velocidade Relativa (Mais Rápido)</h4>
                          <p className="text-slate-700 mb-2">Primeiro, convertemos as velocidades para m/s:</p>
                          <ul className="list-disc list-inside ml-6 text-slate-700 mb-4">
                            <li>Raposa: <MathFormula formula="v_R = 72 / 3,6 = 20 \text{ m/s}" display={false} /></li>
                            <li>Coelho: <MathFormula formula="v_C = 54 / 3,6 = 15 \text{ m/s}" display={false} /></li>
                          </ul>
                          <p className="text-slate-700 mb-2">Como estão no mesmo sentido, a velocidade relativa de aproximação é a diferença:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center mb-4">
                            <MathFormula formula="v_{rel} = 20 - 15 = 5 \text{ m/s}" display={false} />
                          </div>
                          <p className="text-slate-700 mb-2">Isso significa que a raposa se aproxima do coelho 5 metros a cada segundo. Para tirar a diferença de 100m:</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-center">
                            <MathFormula formula="t = \frac{d}{v_{rel}} = \frac{100}{5} = 20 \text{ s}" display={false} />
                          </div>
                        </div>
                        
                        <div className="border-t border-slate-200 pt-6">
                          <h4 className="font-bold text-slate-900 mb-2">Método 2: Igualando as Funções Horárias (Clássico)</h4>
                          <p className="text-slate-700 mb-2">Adotamos a posição inicial da raposa como <MathFormula formula="s = 0" display={false} />. O coelho está 100m à frente, logo sua posição inicial é <MathFormula formula="s = 100" display={false} />.</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2 mb-4">
                            <MathFormula formula="s_R = 0 + 20t" display={false} />
                            <MathFormula formula="s_C = 100 + 15t" display={false} />
                          </div>
                          <p className="text-slate-700 mb-2">No encontro, as posições são iguais (<MathFormula formula="s_R = s_C" display={false} />):</p>
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center gap-2">
                            <MathFormula formula="20t = 100 + 15t" display={false} />
                            <MathFormula formula="20t - 15t = 100" display={false} />
                            <MathFormula formula="5t = 100 \implies t = 20 \text{ s}" display={false} />
                          </div>
                        </div>
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
