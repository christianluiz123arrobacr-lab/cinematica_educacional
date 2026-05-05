import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicMRU() {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"teoria" | "exercicios">("teoria");

  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/cinematica">
              <a className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </a>
            </Link>
            <h1 className="text-xl font-bold text-slate-900">MRU - Equação Horária do Espaço</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Movimento Retilíneo Uniforme (MRU)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Estudo completo e detalhado da <strong>Equação Horária do Espaço</strong>, o fundamento da cinemática escalar.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-300">
          <button
            onClick={() => setActiveTab("teoria")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "teoria"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Teoria Completa
          </button>
          <button
            onClick={() => setActiveTab("exercicios")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "exercicios"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Exercícios Resolvidos
          </button>
        </div>

        {/* TEORIA */}
        {activeTab === "teoria" && (
          <div className="space-y-10">
            {/* ===== SEÇÃO 1: CONTEXTO E DEFINIÇÃO ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                1. O que é Movimento Retilíneo Uniforme?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Definição Fundamental</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    O <strong>Movimento Retilíneo Uniforme (MRU)</strong> é aquele em que um móvel se desloca ao longo de uma trajetória retilínea (linha reta) mantendo uma <strong>velocidade escalar constante</strong> ao longo do tempo. Isso significa que o móvel percorre <strong>distâncias iguais em intervalos de tempo iguais</strong>.
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-5 rounded">
                    <p className="text-slate-800 font-medium">
                      Se um automóvel trafega a 60 km/h em uma estrada retilínea, ele percorre:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1 ml-2">
                      <li>60 km em 1 hora</li>
                      <li>120 km em 2 horas</li>
                      <li>180 km em 3 horas</li>
                    </ul>
                    <p className="text-slate-700 mt-3 text-sm">
                      Observe que a distância é sempre proporcional ao tempo: a razão entre distância e tempo é constante.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Características Essenciais do MRU</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">✓ Velocidade Constante</p>
                      <p className="text-blue-800 text-sm">
                        A velocidade escalar não varia com o tempo: <MathFormula formula="v = \text{constante} \neq 0" display={false} />
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">✓ Aceleração Nula</p>
                      <p className="text-green-800 text-sm">
                        Como a velocidade não muda, a aceleração é zero: <MathFormula formula="a = 0" display={false} />
                      </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <p className="font-semibold text-orange-900 mb-2">✓ Trajetória Retilínea</p>
                      <p className="text-orange-800 text-sm">
                        O móvel se move em linha reta, sem fazer curvas ou desvios.
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2">✓ Velocidade Vetorial Constante</p>
                      <p className="text-red-800 text-sm">
                        Módulo, direção e sentido são constantes simultaneamente.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Observação Histórica</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A compreensão de que um corpo pode manter seu estado de movimento indefinidamente sem a ação de forças foi revolucionária na história da física. Isso é o cerne da <strong>Primeira Lei de Newton (Princípio da Inércia)</strong>, que estabelece que todo corpo em repouso ou em movimento uniforme tende a permanecer nesse estado, a menos que uma força externa atue sobre ele.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== SEÇÃO 2: CONCEITOS PRELIMINARES ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                2. Conceitos Preliminares Essenciais
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 - Posição (s) e Espaço</h3>
                  <p className="text-slate-700 mb-4">
                    A <strong>posição</strong> de um móvel é a localização dele em relação a um ponto de referência chamado <strong>origem</strong>. Representamos a posição pela letra <MathFormula formula="s" display={false} /> e medimos em metros (m) no Sistema Internacional de Unidades (SI).
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-800 font-medium mb-2">Exemplo:</p>
                    <p className="text-slate-700 text-sm">
                      Se um carro está a 50 metros de um semáforo (origem), dizemos que sua posição é <MathFormula formula="s = 50 \text{ m}" display={false} />. Se estiver 30 metros antes do semáforo, sua posição é <MathFormula formula="s = -30 \text{ m}" display={false} /> (negativa, pois está no sentido contrário).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 - Deslocamento Escalar (Δs)</h3>
                  <p className="text-slate-700 mb-4">
                    O <strong>deslocamento escalar</strong> é a variação de posição de um móvel. É calculado como a diferença entre a posição final e a posição inicial:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-center">
                    <MathFormula formula="\Delta s = s - s_0" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4 text-sm">
                    <strong>Importante:</strong> O deslocamento pode ser positivo (movimento no sentido positivo), negativo (movimento no sentido negativo) ou zero (se o móvel retornar ao ponto de partida).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2.3 - Intervalo de Tempo (Δt)</h3>
                  <p className="text-slate-700 mb-4">
                    O <strong>intervalo de tempo</strong> é a duração entre dois instantes. Representamos por <MathFormula formula="\Delta t" display={false} /> e calculamos como:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-center">
                    <MathFormula formula="\Delta t = t - t_0" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4 text-sm">
                    <strong>Convenção:</strong> Geralmente adotamos o instante inicial como <MathFormula formula="t_0 = 0" display={false} />, simplificando para <MathFormula formula="\Delta t = t" display={false} />.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2.4 - Velocidade Escalar Média</h3>
                  <p className="text-slate-700 mb-4">
                    A <strong>velocidade escalar média</strong> é a razão entre o deslocamento escalar e o intervalo de tempo:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-center">
                    <MathFormula formula="v_m = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4">
                    <strong>Unidade no SI:</strong> metro por segundo (m/s)
                  </p>
                  <p className="text-slate-700 text-sm mt-2">
                    <strong>Conversão útil:</strong> Para converter de km/h para m/s, dividimos por 3,6. Para converter de m/s para km/h, multiplicamos por 3,6.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== SEÇÃO 3: DEDUÇÃO DA EQUAÇÃO HORÁRIA ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                3. Dedução Completa da Equação Horária do Espaço
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Passo 1: Definição de Velocidade Média</h3>
                  <p className="text-slate-700 mb-4">
                    Começamos com a definição de velocidade escalar média, que é a razão entre o deslocamento e o intervalo de tempo:
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4">
                    Expandindo o deslocamento e o intervalo de tempo:
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mt-3">
                    <MathFormula formula="v_m = \frac{s - s_0}{t - t_0}" display={true} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Passo 2: Aplicação ao MRU</h3>
                  <p className="text-slate-700 mb-4">
                    No Movimento Retilíneo Uniforme, a velocidade é <strong>constante</strong>. Isso significa que a velocidade escalar instantânea (<MathFormula formula="v" display={false} />) é igual à velocidade escalar média (<MathFormula formula="v_m" display={false} />) em qualquer intervalo de tempo:
                  </p>
                  <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <MathFormula formula="v = v_m = \frac{s - s_0}{t - t_0}" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4">
                    <strong>Adotando a convenção:</strong> Geralmente escolhemos o instante inicial como <MathFormula formula="t_0 = 0" display={false} />, o que simplifica a expressão:
                  </p>
                  <div className="bg-green-50 p-5 rounded-lg border border-green-200 mt-3">
                    <MathFormula formula="v = \frac{s - s_0}{t - 0} = \frac{s - s_0}{t}" display={true} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Passo 3: Isolamento da Posição Final</h3>
                  <p className="text-slate-700 mb-4">
                    Multiplicamos ambos os lados da equação por <MathFormula formula="t" display={false} />:
                  </p>
                  <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                    <MathFormula formula="v \cdot t = s - s_0" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4">
                    Adicionamos <MathFormula formula="s_0" display={false} /> em ambos os lados:
                  </p>
                  <div className="bg-orange-50 p-5 rounded-lg border border-orange-200 mt-3">
                    <MathFormula formula="v \cdot t + s_0 = s" display={true} />
                  </div>
                  <p className="text-slate-700 mt-4">
                    Reordenando, chegamos à famosa equação:
                  </p>
                  <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-400 mt-3 text-center">
                    <MathFormula formula="s = s_0 + v \cdot t" display={true} />
                    <p className="text-purple-900 font-semibold mt-3">Equação Horária do Espaço no MRU</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
                  <p className="text-slate-800 font-semibold mb-2">💡 Observação Importante:</p>
                  <p className="text-slate-700">
                    Esta equação é do <strong>primeiro grau</strong> em relação ao tempo (<MathFormula formula="t" display={false} />). Isso significa que o gráfico de <MathFormula formula="s" display={false} /> versus <MathFormula formula="t" display={false} /> é uma <strong>linha reta</strong>, o que é a marca registrada do MRU.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== SEÇÃO 4: ANÁLISE TERMO-A-TERMO ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                4. Análise Detalhada Termo-a-Termo
              </h2>

              <p className="text-slate-700 mb-6">
                A equação <MathFormula formula="s = s_0 + v \cdot t" display={false} /> contém quatro grandezas fundamentais. Vamos detalhar cada uma:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-slate-300 p-4 text-left font-semibold">Símbolo</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold">Nome</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold">Significado Físico</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold">Unidade (SI)</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold">Observações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-4 font-bold text-lg">s</td>
                      <td className="border border-slate-300 p-4 font-semibold">Posição Final</td>
                      <td className="border border-slate-300 p-4">A localização do móvel no instante t</td>
                      <td className="border border-slate-300 p-4">metro (m)</td>
                      <td className="border border-slate-300 p-4 text-sm">Pode ser positiva ou negativa; é o que queremos encontrar</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50">
                      <td className="border border-slate-300 p-4 font-bold text-lg">s₀</td>
                      <td className="border border-slate-300 p-4 font-semibold">Posição Inicial</td>
                      <td className="border border-slate-300 p-4">A localização do móvel no instante t = 0</td>
                      <td className="border border-slate-300 p-4">metro (m)</td>
                      <td className="border border-slate-300 p-4 text-sm">Frequentemente adotamos s₀ = 0 para simplificar</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-4 font-bold text-lg">v</td>
                      <td className="border border-slate-300 p-4 font-semibold">Velocidade Escalar</td>
                      <td className="border border-slate-300 p-4">A taxa de variação da posição com o tempo (constante no MRU)</td>
                      <td className="border border-slate-300 p-4">m/s</td>
                      <td className="border border-slate-300 p-4 text-sm">v &gt; 0: movimento progressivo; v &lt; 0: movimento retrógrado</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50">
                      <td className="border border-slate-300 p-4 font-bold text-lg">t</td>
                      <td className="border border-slate-300 p-4 font-semibold">Instante de Tempo</td>
                      <td className="border border-slate-300 p-4">O momento em que queremos saber a posição do móvel</td>
                      <td className="border border-slate-300 p-4">segundo (s)</td>
                      <td className="border border-slate-300 p-4 text-sm">Sempre ≥ 0; representa o tempo decorrido desde t₀ = 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <p className="font-semibold text-blue-900 mb-2">📌 Significado de s₀:</p>
                  <p className="text-blue-800">
                    A posição inicial <MathFormula formula="s_0" display={false} /> é onde o móvel se encontra quando começamos a contar o tempo (t = 0). Se escolhermos a origem como ponto de referência, podemos ter <MathFormula formula="s_0 = 0" display={false} />, mas isso é apenas uma escolha de conveniência.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded">
                  <p className="font-semibold text-green-900 mb-2">📌 Significado de v:</p>
                  <p className="text-green-800">
                    A velocidade <MathFormula formula="v" display={false} /> é <strong>constante</strong> no MRU. Ela representa quantos metros o móvel percorre a cada segundo. Se <MathFormula formula="v = 20 \text{ m/s}" display={false} />, o móvel avança 20 metros a cada segundo.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded">
                  <p className="font-semibold text-orange-900 mb-2">📌 Sinal de v:</p>
                  <p className="text-orange-800 mb-3">
                    O sinal de <MathFormula formula="v" display={false} /> indica a direção do movimento:
                  </p>
                  <ul className="list-disc list-inside text-orange-800 space-y-1 ml-2">
                    <li><strong>v &gt; 0:</strong> Movimento progressivo (no sentido positivo da trajetória)</li>
                    <li><strong>v &lt; 0:</strong> Movimento retrógrado (no sentido negativo da trajetória)</li>
                    <li><strong>v = 0:</strong> Móvel em repouso (não é MRU, pois não há movimento)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ===== SEÇÃO 5: EXEMPLO PRÁTICO DETALHADO ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                5. Exemplo Prático Completo
              </h2>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-300 mb-6">
                <p className="text-slate-800 font-semibold mb-4">Problema:</p>
                <p className="text-slate-700 mb-4">
                  Um automóvel trafega em uma estrada retilínea com velocidade constante de 90 km/h. No instante t = 0, ele se encontra na posição s₀ = 20 m (20 metros após um semáforo tomado como origem). Determine:
                </p>
                <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-2">
                  <li>A equação horária do espaço para este automóvel</li>
                  <li>A posição do automóvel no instante t = 10 s</li>
                  <li>O instante em que o automóvel passa pela posição s = 270 m</li>
                  <li>O deslocamento do automóvel entre t = 5 s e t = 15 s</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                <p className="font-semibold text-slate-900 mb-4">Resolução Passo a Passo:</p>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 1: Conversão da Velocidade</p>
                    <p className="text-slate-700 mb-3">
                      A velocidade está em km/h, mas precisamos em m/s para usar com a equação horária. Dividimos por 3,6:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <MathFormula formula="v = 90 \text{ km/h} = \frac{90}{3,6} = 25 \text{ m/s}" display={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 2: Identificação dos Dados</p>
                    <p className="text-slate-700 mb-3">
                      Organizamos os dados fornecidos:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                        <li>Posição inicial: <MathFormula formula="s_0 = 20 \text{ m}" display={false} /></li>
                        <li>Velocidade: <MathFormula formula="v = 25 \text{ m/s}" display={false} /></li>
                        <li>Instante inicial: <MathFormula formula="t_0 = 0" display={false} /></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 3: Equação Horária (Item 1)</p>
                    <p className="text-slate-700 mb-3">
                      Substituindo os valores na equação <MathFormula formula="s = s_0 + vt" display={false} />:
                    </p>
                    <div className="bg-purple-100 p-4 rounded border-2 border-purple-400">
                      <MathFormula formula="s = 20 + 25t" display={true} />
                    </div>
                    <p className="text-slate-700 mt-3 text-sm">
                      <strong>Resposta do Item 1:</strong> A equação horária é <MathFormula formula="s = 20 + 25t" display={false} /> (com s em metros e t em segundos)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 4: Posição em t = 10 s (Item 2)</p>
                    <p className="text-slate-700 mb-3">
                      Substituímos t = 10 s na equação horária:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <MathFormula formula="s = 20 + 25 \cdot 10" display={true} />
                      <MathFormula formula="s = 20 + 250" display={true} />
                      <MathFormula formula="s = 270 \text{ m}" display={true} />
                    </div>
                    <p className="text-slate-700 mt-3 text-sm">
                      <strong>Resposta do Item 2:</strong> No instante t = 10 s, o automóvel está na posição s = 270 m
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 5: Instante em que s = 270 m (Item 3)</p>
                    <p className="text-slate-700 mb-3">
                      Igualamos s = 270 m na equação horária e resolvemos para t:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <MathFormula formula="270 = 20 + 25t" display={true} />
                      <MathFormula formula="270 - 20 = 25t" display={true} />
                      <MathFormula formula="250 = 25t" display={true} />
                      <MathFormula formula="t = \frac{250}{25} = 10 \text{ s}" display={true} />
                    </div>
                    <p className="text-slate-700 mt-3 text-sm">
                      <strong>Resposta do Item 3:</strong> O automóvel passa pela posição s = 270 m no instante t = 10 s
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Passo 6: Deslocamento entre t = 5 s e t = 15 s (Item 4)</p>
                    <p className="text-slate-700 mb-3">
                      Primeiro, calculamos a posição em t = 5 s:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200 mb-3">
                      <MathFormula formula="s_1 = 20 + 25 \cdot 5 = 20 + 125 = 145 \text{ m}" display={true} />
                    </div>
                    <p className="text-slate-700 mb-3">
                      Depois, calculamos a posição em t = 15 s:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200 mb-3">
                      <MathFormula formula="s_2 = 20 + 25 \cdot 15 = 20 + 375 = 395 \text{ m}" display={true} />
                    </div>
                    <p className="text-slate-700 mb-3">
                      O deslocamento é a diferença entre as posições finais e iniciais:
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <MathFormula formula="\Delta s = s_2 - s_1 = 395 - 145 = 250 \text{ m}" display={true} />
                    </div>
                    <p className="text-slate-700 mt-3 text-sm">
                      <strong>Resposta do Item 4:</strong> O deslocamento entre t = 5 s e t = 15 s é Δs = 250 m
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-5 rounded">
                <p className="text-green-900 font-semibold mb-2">✓ Verificação:</p>
                <p className="text-green-800 text-sm">
                  Note que o deslocamento (250 m) é igual a <MathFormula formula="v \cdot \Delta t = 25 \cdot (15 - 5) = 25 \cdot 10 = 250 \text{ m}" display={false} />. Isso confirma que nossos cálculos estão corretos!
                </p>
              </div>
            </section>

            {/* ===== SEÇÃO 6: ARMADILHAS COMUNS ===== */}
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                6. Armadilhas e Erros Comuns
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Armadilha 1: Esquecer a Posição Inicial</p>
                  <p className="text-red-800 mb-3">
                    Muitos alunos escrevem <MathFormula formula="s = vt" display={false} />, esquecendo do termo <MathFormula formula="s_0" display={false} />.
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2"><strong>Errado:</strong> <MathFormula formula="s = 25t" display={false} /></p>
                    <p className="text-green-800 text-sm"><strong>Correto:</strong> <MathFormula formula="s = 20 + 25t" display={false} /></p>
                  </div>
                  <p className="text-red-800 mt-3 text-sm">
                    A equação <MathFormula formula="s = vt" display={false} /> só é válida quando <MathFormula formula="s_0 = 0" display={false} />.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Armadilha 2: Unidades Inconsistentes</p>
                  <p className="text-red-800 mb-3">
                    A velocidade deve estar na mesma unidade de tempo que o tempo na equação.
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2"><strong>Errado:</strong> v = 90 km/h, t = 10 s → s = 20 + 90 × 10 (unidades incompatíveis!)</p>
                    <p className="text-green-800 text-sm"><strong>Correto:</strong> v = 25 m/s, t = 10 s → s = 20 + 25 × 10 = 270 m</p>
                  </div>
                  <p className="text-red-800 mt-3 text-sm">
                    <strong>Conversão:</strong> 1 km/h = 1/3,6 m/s ou 1 m/s = 3,6 km/h
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Armadilha 3: Confundir Deslocamento com Distância</p>
                  <p className="text-red-800 mb-3">
                    O <strong>deslocamento</strong> (<MathFormula formula="\Delta s" display={false} />) é a variação de posição (pode ser negativa), enquanto a <strong>distância</strong> é sempre positiva.
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2">Se um móvel vai de s = 100 m para s = 50 m:</p>
                    <p className="text-red-800 text-sm mb-1">Deslocamento: Δs = 50 - 100 = -50 m (negativo!)</p>
                    <p className="text-red-800 text-sm">Distância: d = 50 m (sempre positiva)</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Armadilha 4: Velocidade Negativa</p>
                  <p className="text-red-800 mb-3">
                    Quando v &lt; 0, o móvel está em movimento retrógrado (voltando). A equação ainda funciona, mas o espaço diminui com o tempo.
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2">Exemplo: s = 100 - 10t (v = -10 m/s)</p>
                    <p className="text-red-800 text-sm mb-1">Em t = 0: s = 100 m</p>
                    <p className="text-red-800 text-sm mb-1">Em t = 5: s = 100 - 50 = 50 m</p>
                    <p className="text-red-800 text-sm">Em t = 10: s = 100 - 100 = 0 m (passa pela origem)</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Armadilha 5: Confundir Velocidade com Aceleração</p>
                  <p className="text-red-800 mb-3">
                    No MRU, a velocidade é constante, então a aceleração é <strong>zero</strong>. Não confunda os dois conceitos!
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2"><strong>MRU:</strong> v = constante, a = 0</p>
                    <p className="text-green-800 text-sm"><strong>MRUV:</strong> v = variável, a ≠ 0 (será estudado depois)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* EXERCÍCIOS */}
        {activeTab === "exercicios" && (
          <div className="space-y-6">
            {/* Exercício 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex1")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 1: Cálculo Básico de Velocidade e Posição
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: Fácil | Conceitos Básicos
                  </p>
                </div>
                {expandedExercise === "ex1" ? (
                  <ChevronUp className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                )}
              </button>

              {expandedExercise === "ex1" && (
                <div className="px-6 pb-6 border-t border-slate-200 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>
                      <p className="text-slate-700">
                        Um ciclista percorre 180 m em 9 s com velocidade constante. Determine:
                      </p>
                      <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                        <li>A velocidade do ciclista</li>
                        <li>A distância percorrida em 30 s</li>
                      </ol>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>
                      
                      <p className="text-slate-700 mb-2">
                        <strong>Item 1: Velocidade</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="v = \frac{\Delta s}{\Delta t} = \frac{180}{9} = 20 \text{ m/s}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 2: Distância em 30 s</strong>
                      </p>
                      <p className="text-slate-700 mb-2">
                        Como a velocidade é constante, usamos:
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="\Delta s = v \cdot \Delta t = 20 \cdot 30 = 600 \text{ m}" display={true} />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas:
                        </p>
                        <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                          <li>v = 20 m/s</li>
                          <li>Δs = 600 m</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Exercício 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex2")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 2: Equação Horária com Posição Inicial Não-Nula
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: Médio | Aplicação da Fórmula
                  </p>
                </div>
                {expandedExercise === "ex2" ? (
                  <ChevronUp className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                )}
              </button>

              {expandedExercise === "ex2" && (
                <div className="px-6 pb-6 border-t border-slate-200 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>
                      <p className="text-slate-700 mb-3">
                        Um trem se move em uma ferrovia retilínea com velocidade constante de 72 km/h. No instante t = 0, ele se encontra na posição s₀ = 50 m (50 metros após uma estação tomada como origem). Determine:
                      </p>
                      <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-2">
                        <li>A equação horária do espaço</li>
                        <li>A posição do trem em t = 20 s</li>
                        <li>O instante em que o trem passa pela posição s = 500 m</li>
                      </ol>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>
                      
                      <p className="text-slate-700 mb-2">
                        <strong>Passo 1: Conversão da velocidade</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="v = 72 \text{ km/h} = \frac{72}{3,6} = 20 \text{ m/s}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 1: Equação Horária</strong>
                      </p>
                      <div className="bg-purple-100 p-3 rounded mb-3 border-2 border-purple-400">
                        <MathFormula formula="s = 50 + 20t" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 2: Posição em t = 20 s</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="s = 50 + 20 \cdot 20 = 50 + 400 = 450 \text{ m}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 3: Instante em que s = 500 m</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="500 = 50 + 20t" display={true} />
                        <MathFormula formula="450 = 20t" display={true} />
                        <MathFormula formula="t = \frac{450}{20} = 22,5 \text{ s}" display={true} />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas:
                        </p>
                        <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                          <li>s = 50 + 20t</li>
                          <li>s = 450 m</li>
                          <li>t = 22,5 s</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Exercício 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex3")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 3: Movimento Retrógrado
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: Médio | Velocidade Negativa
                  </p>
                </div>
                {expandedExercise === "ex3" ? (
                  <ChevronUp className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                )}
              </button>

              {expandedExercise === "ex3" && (
                <div className="px-6 pb-6 border-t border-slate-200 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>
                      <p className="text-slate-700 mb-3">
                        Um automóvel se move em uma trajetória retilínea com velocidade constante de -30 m/s (movimento retrógrado). Sabendo que em t = 0 o automóvel está na posição s₀ = 300 m, determine:
                      </p>
                      <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-2">
                        <li>A equação horária do espaço</li>
                        <li>Em que instante o automóvel passa pela origem (s = 0)?</li>
                        <li>Qual é o deslocamento do automóvel entre t = 2 s e t = 8 s?</li>
                      </ol>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>
                      
                      <p className="text-slate-700 mb-2">
                        <strong>Item 1: Equação Horária</strong>
                      </p>
                      <div className="bg-purple-100 p-3 rounded mb-3 border-2 border-purple-400">
                        <MathFormula formula="s = 300 - 30t" display={true} />
                      </div>
                      <p className="text-slate-700 text-sm">
                        Nota: v = -30 m/s (negativo indica movimento retrógrado)
                      </p>

                      <p className="text-slate-700 mb-2 mt-4">
                        <strong>Item 2: Instante em que s = 0</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="0 = 300 - 30t" display={true} />
                        <MathFormula formula="30t = 300" display={true} />
                        <MathFormula formula="t = \frac{300}{30} = 10 \text{ s}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 3: Deslocamento entre t = 2 s e t = 8 s</strong>
                      </p>
                      <p className="text-slate-700 mb-2">
                        Posição em t = 2 s:
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="s_1 = 300 - 30 \cdot 2 = 300 - 60 = 240 \text{ m}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        Posição em t = 8 s:
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="s_2 = 300 - 30 \cdot 8 = 300 - 240 = 60 \text{ m}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        Deslocamento:
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="\Delta s = s_2 - s_1 = 60 - 240 = -180 \text{ m}" display={true} />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas:
                        </p>
                        <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                          <li>s = 300 - 30t</li>
                          <li>t = 10 s</li>
                          <li>Δs = -180 m (o automóvel se deslocou 180 m no sentido negativo)</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Exercício 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex4")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 4: Problema Integrado com Conversão de Unidades
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: Difícil | Integração de Conceitos
                  </p>
                </div>
                {expandedExercise === "ex4" ? (
                  <ChevronUp className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                )}
              </button>

              {expandedExercise === "ex4" && (
                <div className="px-6 pb-6 border-t border-slate-200 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>
                      <p className="text-slate-700 mb-3">
                        Um ônibus trafega em uma rodovia retilínea com velocidade constante de 108 km/h. No instante t = 0, ele se encontra na posição s₀ = 100 m. Determine:
                      </p>
                      <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-2">
                        <li>A equação horária do espaço (em unidades do SI)</li>
                        <li>A posição do ônibus após 1 minuto de movimento</li>
                        <li>Quantos metros o ônibus percorre em 2 minutos?</li>
                        <li>Em quanto tempo o ônibus percorre 5 km?</li>
                      </ol>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>
                      
                      <p className="text-slate-700 mb-2">
                        <strong>Passo 1: Conversão da velocidade</strong>
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="v = 108 \text{ km/h} = \frac{108}{3,6} = 30 \text{ m/s}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 1: Equação Horária</strong>
                      </p>
                      <div className="bg-purple-100 p-3 rounded mb-3 border-2 border-purple-400">
                        <MathFormula formula="s = 100 + 30t" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 2: Posição após 1 minuto</strong>
                      </p>
                      <p className="text-slate-700 mb-2">
                        Convertemos 1 minuto para segundos: 1 min = 60 s
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="s = 100 + 30 \cdot 60 = 100 + 1800 = 1900 \text{ m}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 3: Distância percorrida em 2 minutos</strong>
                      </p>
                      <p className="text-slate-700 mb-2">
                        2 minutos = 120 s. A distância percorrida é:
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="\Delta s = v \cdot \Delta t = 30 \cdot 120 = 3600 \text{ m} = 3,6 \text{ km}" display={true} />
                      </div>

                      <p className="text-slate-700 mb-2">
                        <strong>Item 4: Tempo para percorrer 5 km</strong>
                      </p>
                      <p className="text-slate-700 mb-2">
                        Convertemos 5 km para metros: 5 km = 5000 m
                      </p>
                      <div className="bg-slate-50 p-3 rounded mb-3">
                        <MathFormula formula="\Delta t = \frac{\Delta s}{v} = \frac{5000}{30} = 166,67 \text{ s} \approx 2 \text{ min } 47 \text{ s}" display={true} />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas:
                        </p>
                        <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                          <li>s = 100 + 30t</li>
                          <li>s = 1900 m</li>
                          <li>Δs = 3600 m (ou 3,6 km)</li>
                          <li>Δt ≈ 166,67 s (ou aproximadamente 2 min 47 s)</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
