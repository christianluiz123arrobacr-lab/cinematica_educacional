import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

type ActiveTab = "teoria" | "exercicios";

function FormulaBox({
  formula,
  highlight = false,
}: {
  formula: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "bg-purple-100 p-6 rounded-xl border-2 border-purple-400 flex flex-col items-center shadow-inner"
          : "bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-center"
      }
    >
      <MathFormula formula={formula} display={true} />
    </div>
  );
}

function PositionTimeGraph({ type }: { type: "progressivo" | "retrogrado" }) {
  const isProgressive = type === "progressivo";

  return (
    <svg viewBox="0 0 360 220" className="w-full h-52">
      <rect x="0" y="0" width="360" height="220" rx="18" fill="#f8fafc" />

      <line x1="54" y1="176" x2="318" y2="176" stroke="#334155" strokeWidth="2" />
      <line x1="54" y1="176" x2="54" y2="32" stroke="#334155" strokeWidth="2" />

      <text x="322" y="181" fontSize="13" fill="#334155" fontWeight="700">
        t
      </text>
      <text x="42" y="28" fontSize="13" fill="#334155" fontWeight="700">
        s
      </text>

      <line
        x1="54"
        y1={isProgressive ? "144" : "58"}
        x2="300"
        y2={isProgressive ? "54" : "150"}
        stroke={isProgressive ? "#2563eb" : "#dc2626"}
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle
        cx="54"
        cy={isProgressive ? "144" : "58"}
        r="5"
        fill={isProgressive ? "#2563eb" : "#dc2626"}
      />
      <circle
        cx="300"
        cy={isProgressive ? "54" : "150"}
        r="5"
        fill={isProgressive ? "#2563eb" : "#dc2626"}
      />

      <text
        x="178"
        y={isProgressive ? "84" : "108"}
        fontSize="13"
        fill={isProgressive ? "#1d4ed8" : "#b91c1c"}
        fontWeight="800"
      >
        {isProgressive ? "v > 0" : "v < 0"}
      </text>

      <text x="62" y="196" fontSize="12" fill="#64748b">
        tempo aumenta
      </text>
    </svg>
  );
}

function VelocityTimeGraph() {
  return (
    <svg viewBox="0 0 360 220" className="w-full h-52">
      <rect x="0" y="0" width="360" height="220" rx="18" fill="#f8fafc" />

      <line x1="54" y1="176" x2="318" y2="176" stroke="#334155" strokeWidth="2" />
      <line x1="54" y1="176" x2="54" y2="32" stroke="#334155" strokeWidth="2" />

      <text x="322" y="181" fontSize="13" fill="#334155" fontWeight="700">
        t
      </text>
      <text x="42" y="28" fontSize="13" fill="#334155" fontWeight="700">
        v
      </text>

      <rect x="78" y="82" width="210" height="94" fill="#bfdbfe" opacity="0.65" />
      <line x1="78" y1="82" x2="288" y2="82" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />

      <text x="146" y="70" fontSize="13" fill="#1d4ed8" fontWeight="800">
        v constante
      </text>

      <text x="136" y="132" fontSize="14" fill="#1e3a8a" fontWeight="900">
        Área = Δs
      </text>
    </svg>
  );
}

function AccelerationTimeGraph() {
  return (
    <svg viewBox="0 0 360 180" className="w-full h-44">
      <rect x="0" y="0" width="360" height="180" rx="18" fill="#f8fafc" />

      <line x1="54" y1="92" x2="318" y2="92" stroke="#334155" strokeWidth="2" />
      <line x1="54" y1="150" x2="54" y2="32" stroke="#334155" strokeWidth="2" />

      <text x="322" y="98" fontSize="13" fill="#334155" fontWeight="700">
        t
      </text>
      <text x="42" y="28" fontSize="13" fill="#334155" fontWeight="700">
        a
      </text>

      <line x1="54" y1="92" x2="304" y2="92" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />

      <text x="150" y="78" fontSize="14" fill="#15803d" fontWeight="900">
        a = 0
      </text>
    </svg>
  );
}

export default function CinematicaTopicMRU() {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("teoria");

  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/cinematica">
              <a className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </a>
            </Link>

            <h1 className="text-xl font-bold text-slate-900">
              MRU - Equação Horária do Espaço
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-wide text-purple-700 mb-3">
            Cinemática escalar
          </p>

          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Movimento Retilíneo Uniforme (MRU)
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Estudo completo da <strong>Equação Horária do Espaço</strong>, uma das bases
            mais importantes da cinemática. Sim, é aquela fórmula simples que consegue
            derrubar aluno quando a unidade vem misturada. A natureza é elegante, a prova
            nem sempre.
          </p>
        </div>

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

        {activeTab === "teoria" && (
          <div className="space-y-10">
            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                1. O que é Movimento Retilíneo Uniforme?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Definição fundamental
                  </h3>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    O <strong>Movimento Retilíneo Uniforme (MRU)</strong> é aquele em
                    que um móvel se desloca ao longo de uma trajetória retilínea mantendo
                    velocidade escalar constante. Isso significa que o móvel percorre{" "}
                    <strong>distâncias iguais em intervalos de tempo iguais</strong>.
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
                      A distância é proporcional ao tempo: a razão entre distância e tempo é constante.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Características essenciais do MRU
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">
                        Velocidade constante
                      </p>
                      <p className="text-blue-800 text-sm">
                        A velocidade escalar não varia com o tempo:{" "}
                        <MathFormula formula="v = \text{constante}" display={false} />
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">
                        Aceleração nula
                      </p>
                      <p className="text-green-800 text-sm">
                        Como a velocidade não muda, a aceleração é zero:{" "}
                        <MathFormula formula="a = 0" display={false} />
                      </p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <p className="font-semibold text-orange-900 mb-2">
                        Trajetória retilínea
                      </p>
                      <p className="text-orange-800 text-sm">
                        O móvel se desloca em linha reta, sem curvas.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2">
                        Velocidade vetorial constante
                      </p>
                      <p className="text-red-800 text-sm">
                        Módulo, direção e sentido permanecem constantes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Observação histórica
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    A ideia de que um corpo pode manter seu estado de movimento sem a ação
                    contínua de uma força foi revolucionária na história da física. Ela se
                    conecta diretamente ao <strong>Princípio da Inércia</strong>, a Primeira
                    Lei de Newton.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                2. Conceitos preliminares essenciais
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    2.1 Posição ou espaço escalar
                  </h3>

                  <p className="text-slate-700 mb-4">
                    A <strong>posição</strong> de um móvel é sua localização em relação
                    a uma origem escolhida. Representamos por{" "}
                    <MathFormula formula="s" display={false} /> e, no SI, medimos em metros.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-800 font-medium mb-2">Exemplo:</p>
                    <p className="text-slate-700 text-sm">
                      Se um carro está 50 m depois da origem, sua posição é{" "}
                      <MathFormula formula="s = 50 \text{ m}" display={false} />. Se está
                      30 m antes da origem, sua posição é{" "}
                      <MathFormula formula="s = -30 \text{ m}" display={false} />.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    2.2 Deslocamento escalar
                  </h3>

                  <p className="text-slate-700 mb-4">
                    O <strong>deslocamento escalar</strong> é a variação da posição:
                  </p>

                  <FormulaBox formula="\Delta s = s - s_0" />

                  <p className="text-slate-700 mt-4 text-sm">
                    Ele pode ser positivo, negativo ou nulo. Isso depende do sentido do
                    movimento e da escolha da orientação da trajetória.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    2.3 Intervalo de tempo
                  </h3>

                  <p className="text-slate-700 mb-4">
                    O intervalo de tempo é a duração entre dois instantes:
                  </p>

                  <FormulaBox formula="\Delta t = t - t_0" />

                  <p className="text-slate-700 mt-4 text-sm">
                    Em muitas questões, adotamos{" "}
                    <MathFormula formula="t_0 = 0" display={false} />, então{" "}
                    <MathFormula formula="\Delta t = t" display={false} />.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    2.4 Velocidade escalar média
                  </h3>

                  <p className="text-slate-700 mb-4">
                    A velocidade escalar média é a razão entre deslocamento escalar e
                    intervalo de tempo:
                  </p>

                  <FormulaBox formula="v_m = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}" />

                  <p className="text-slate-700 mt-4">
                    No SI, a unidade é metro por segundo:{" "}
                    <MathFormula formula="\text{m/s}" display={false} />.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                    <p className="text-blue-900 font-medium mb-2">Conversão útil:</p>
                    <p className="text-blue-800 text-sm">
                      Para converter de km/h para m/s, divida por 3,6. Para converter
                      de m/s para km/h, multiplique por 3,6.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                3. Dedução da equação horária do espaço
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Passo 1: partir da velocidade média
                  </h3>

                  <p className="text-slate-700 mb-4">
                    Começamos pela definição:
                  </p>

                  <FormulaBox formula="v_m = \frac{\Delta s}{\Delta t}" />

                  <p className="text-slate-700 mt-4">
                    Expandindo deslocamento e intervalo de tempo:
                  </p>

                  <div className="mt-4">
                    <FormulaBox formula="v_m = \frac{s - s_0}{t - t_0}" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Passo 2: usar a condição do MRU
                  </h3>

                  <p className="text-slate-700 mb-4">
                    No MRU, a velocidade é constante. Por isso, a velocidade instantânea
                    é igual à velocidade média em qualquer intervalo:
                  </p>

                  <FormulaBox formula="v = v_m = \frac{s - s_0}{t - t_0}" />

                  <p className="text-slate-700 mt-4">
                    Tomando <MathFormula formula="t_0 = 0" display={false} />:
                  </p>

                  <div className="mt-4">
                    <FormulaBox formula="v = \frac{s - s_0}{t}" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Passo 3: isolar a posição final
                  </h3>

                  <p className="text-slate-700 mb-4">
                    Multiplicamos ambos os lados por{" "}
                    <MathFormula formula="t" display={false} />:
                  </p>

                  <FormulaBox formula="v \cdot t = s - s_0" />

                  <p className="text-slate-700 mt-4">
                    Somando <MathFormula formula="s_0" display={false} /> nos dois lados:
                  </p>

                  <div className="mt-4">
                    <FormulaBox formula="s = s_0 + v \cdot t" highlight />
                  </div>

                  <p className="text-purple-900 font-bold mt-4 text-lg text-center">
                    Equação horária do espaço no MRU
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded">
                  <p className="text-amber-900 font-medium">Observação importante:</p>
                  <p className="text-amber-800 mt-2">
                    Essa equação é uma função do primeiro grau em relação ao tempo.
                    Por isso, o gráfico de posição em função do tempo é uma reta.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                4. Análise termo a termo
              </h2>

              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  A equação <MathFormula formula="s = s_0 + v \cdot t" display={false} />{" "}
                  contém quatro grandezas fundamentais:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-slate-900 font-bold border-b border-slate-200">
                          Símbolo
                        </th>
                        <th className="px-4 py-3 text-left text-slate-900 font-bold border-b border-slate-200">
                          Nome
                        </th>
                        <th className="px-4 py-3 text-left text-slate-900 font-bold border-b border-slate-200">
                          Significado físico
                        </th>
                        <th className="px-4 py-3 text-left text-slate-900 font-bold border-b border-slate-200">
                          Unidade SI
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 py-3 font-mono text-purple-600 font-bold">s</td>
                        <td className="px-4 py-3 text-slate-800">Posição final</td>
                        <td className="px-4 py-3 text-slate-700">
                          Localização do móvel no instante t
                        </td>
                        <td className="px-4 py-3 text-slate-700">m</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-3 font-mono text-purple-600 font-bold">s₀</td>
                        <td className="px-4 py-3 text-slate-800">Posição inicial</td>
                        <td className="px-4 py-3 text-slate-700">
                          Localização do móvel quando começamos a contar o tempo
                        </td>
                        <td className="px-4 py-3 text-slate-700">m</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-3 font-mono text-purple-600 font-bold">v</td>
                        <td className="px-4 py-3 text-slate-800">Velocidade escalar</td>
                        <td className="px-4 py-3 text-slate-700">
                          Taxa de variação da posição no tempo
                        </td>
                        <td className="px-4 py-3 text-slate-700">m/s</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-3 font-mono text-purple-600 font-bold">t</td>
                        <td className="px-4 py-3 text-slate-800">Tempo</td>
                        <td className="px-4 py-3 text-slate-700">
                          Instante em que queremos saber a posição
                        </td>
                        <td className="px-4 py-3 text-slate-700">s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 mb-2">Significado de s₀</p>
                    <p className="text-slate-700 text-sm">
                      É onde o móvel está quando começamos a contar o tempo. Pode ser zero,
                      positivo ou negativo.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 mb-2">Significado de v</p>
                    <p className="text-slate-700 text-sm">
                      Representa quantos metros a posição varia a cada segundo.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 mb-2">Sinal da velocidade</p>

                    <div className="text-slate-700 text-sm">
                      <p>
                        O sinal de <MathFormula formula="v" display={false} /> indica o
                        sentido do movimento:
                      </p>

                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          <strong>v &gt; 0:</strong> movimento progressivo
                        </li>
                        <li>
                          <strong>v &lt; 0:</strong> movimento retrógrado
                        </li>
                        <li>
                          <strong>v = 0:</strong> repouso
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                5. Classificação do movimento
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="text-xl font-bold text-blue-950 mb-3">
                    Movimento progressivo
                  </h3>

                  <p className="text-blue-900 mb-4">
                    Ocorre quando a posição aumenta com o tempo.
                  </p>

                  <FormulaBox formula="v > 0" />

                  <p className="text-blue-900 mt-4 text-sm">
                    No gráfico <MathFormula formula="s \times t" display={false} />, a reta
                    é crescente.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h3 className="text-xl font-bold text-red-950 mb-3">
                    Movimento retrógrado
                  </h3>

                  <p className="text-red-900 mb-4">
                    Ocorre quando a posição diminui com o tempo.
                  </p>

                  <FormulaBox formula="v < 0" />

                  <p className="text-red-900 mt-4 text-sm">
                    No gráfico <MathFormula formula="s \times t" display={false} />, a reta
                    é decrescente.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                6. Exemplo prático completo
              </h2>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-3">Problema:</p>

                  <p className="text-slate-700 leading-relaxed">
                    Um automóvel trafega em uma estrada retilínea com velocidade constante
                    de 90 km/h. No instante <MathFormula formula="t = 0" display={false} />,
                    ele se encontra na posição{" "}
                    <MathFormula formula="s_0 = 20 \text{ m}" display={false} />. Determine:
                  </p>

                  <ol className="list-decimal list-inside text-slate-700 mt-4 space-y-2 ml-2">
                    <li>A equação horária do espaço</li>
                    <li>A posição no instante t = 10 s</li>
                    <li>O instante em que passa pela posição s = 270 m</li>
                    <li>O deslocamento entre t = 5 s e t = 15 s</li>
                  </ol>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-slate-900 mb-2">
                      Passo 1: converter a velocidade
                    </p>

                    <FormulaBox formula="v = \frac{90}{3,6} = 25 \text{ m/s}" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 mb-2">
                      Passo 2: montar a equação horária
                    </p>

                    <p className="text-slate-700 mb-3">
                      Substituindo em{" "}
                      <MathFormula formula="s = s_0 + vt" display={false} />:
                    </p>

                    <FormulaBox formula="s = 20 + 25t" highlight />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 mb-2">
                      Passo 3: posição em t = 10 s
                    </p>

                    <FormulaBox formula="s = 20 + 25 \cdot 10 = 270 \text{ m}" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 mb-2">
                      Passo 4: instante em que s = 270 m
                    </p>

                    <FormulaBox formula="270 = 20 + 25t \Rightarrow 250 = 25t \Rightarrow t = 10 \text{ s}" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 mb-2">
                      Passo 5: deslocamento entre t = 5 s e t = 15 s
                    </p>

                    <div className="space-y-3">
                      <FormulaBox formula="s_1 = 20 + 25 \cdot 5 = 145 \text{ m}" />
                      <FormulaBox formula="s_2 = 20 + 25 \cdot 15 = 395 \text{ m}" />
                      <FormulaBox formula="\Delta s = s_2 - s_1 = 395 - 145 = 250 \text{ m}" />
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-900 font-medium">Verificação:</p>
                    <p className="text-green-800 text-sm mt-1">
                      O deslocamento também é{" "}
                      <MathFormula
                        formula="\Delta s = v \cdot \Delta t = 25 \cdot 10 = 250 \text{ m}"
                        display={false}
                      />.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                7. Gráficos e interpretação gráfica
              </h2>

              <div className="space-y-8">
                <p className="text-slate-700 leading-relaxed">
                  A análise gráfica é uma das ferramentas mais importantes no MRU. Ela
                  permite enxergar o movimento sem ficar preso apenas à fórmula.
                </p>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    A) Gráfico posição × tempo
                  </h3>

                  <p className="text-slate-700 mb-4">
                    Como <MathFormula formula="s = s_0 + vt" display={false} /> é função do
                    primeiro grau, o gráfico é uma reta.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <p className="font-semibold text-blue-900 mb-2">
                        Movimento progressivo
                      </p>
                      <p className="text-sm text-slate-600 mb-3">
                        A reta é crescente, pois <MathFormula formula="v > 0" display={false} />.
                      </p>
                      <PositionTimeGraph type="progressivo" />
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <p className="font-semibold text-red-900 mb-2">
                        Movimento retrógrado
                      </p>
                      <p className="text-sm text-slate-600 mb-3">
                        A reta é decrescente, pois <MathFormula formula="v < 0" display={false} />.
                      </p>
                      <PositionTimeGraph type="retrogrado" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="font-bold text-blue-900 mb-2">
                      Propriedade importante:
                    </p>

                    <p className="text-blue-800 text-sm leading-relaxed">
                      A inclinação da reta representa a velocidade escalar.
                    </p>

                    <div className="mt-3">
                      <MathFormula formula="\tan(\theta) = \frac{\Delta s}{\Delta t} = v" display={true} />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    B) Gráfico velocidade × tempo
                  </h3>

                  <p className="text-slate-700 mb-4">
                    No MRU, a velocidade é constante. Por isso, o gráfico é uma reta
                    horizontal.
                  </p>

                  <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm mb-6">
                    <VelocityTimeGraph />
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="font-bold text-green-900 mb-2">
                      Propriedade da área:
                    </p>

                    <p className="text-green-800 text-sm leading-relaxed">
                      A área sob o gráfico <MathFormula formula="v \times t" display={false} /> é
                      numericamente igual ao deslocamento escalar.
                    </p>

                    <div className="mt-3">
                      <MathFormula formula="\text{Área} \stackrel{N}{=} \Delta s = v \cdot \Delta t" display={true} />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    C) Gráfico aceleração × tempo
                  </h3>

                  <p className="text-slate-700 mb-4">
                    Como a velocidade não varia, a aceleração escalar é nula em todos
                    os instantes.
                  </p>

                  <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <AccelerationTimeGraph />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                8. Armadilhas e erros comuns
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">
                    Armadilha 1: esquecer a posição inicial
                  </p>

                  <p className="text-red-800 mb-3">
                    Muitos alunos escrevem <MathFormula formula="s = vt" display={false} />,
                    esquecendo o termo <MathFormula formula="s_0" display={false} />.
                  </p>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2">
                      <strong>Errado:</strong> s = 25t
                    </p>
                    <p className="text-green-800 text-sm">
                      <strong>Correto:</strong> s = 20 + 25t
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">
                    Armadilha 2: misturar unidades
                  </p>

                  <p className="text-red-800 mb-3">
                    A velocidade deve estar compatível com a unidade de tempo.
                  </p>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2">
                      <strong>Errado:</strong> usar v = 90 km/h com t em segundos.
                    </p>
                    <p className="text-green-800 text-sm">
                      <strong>Correto:</strong> converter 90 km/h para 25 m/s.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">
                    Armadilha 3: confundir deslocamento com distância
                  </p>

                  <p className="text-red-800 mb-3">
                    O deslocamento pode ser negativo. A distância percorrida não.
                  </p>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-1">
                      De s = 100 m para s = 50 m:
                    </p>
                    <p className="text-red-800 text-sm mb-1">
                      Deslocamento: Δs = -50 m.
                    </p>
                    <p className="text-red-800 text-sm">
                      Distância: 50 m.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">
                    Armadilha 4: errar o sentido da velocidade negativa
                  </p>

                  <p className="text-red-800 mb-3">
                    Quando <MathFormula formula="v < 0" display={false} />, a posição diminui
                    com o tempo.
                  </p>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm">
                      Exemplo: em <MathFormula formula="s = 100 - 10t" display={false} />,
                      o móvel se aproxima da origem.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <p className="font-semibold text-red-900 mb-2">
                    Armadilha 5: confundir velocidade com aceleração
                  </p>

                  <p className="text-red-800 mb-3">
                    No MRU, a velocidade é constante e a aceleração é zero.
                  </p>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-red-800 text-sm mb-2">
                      <strong>MRU:</strong> v constante, a = 0
                    </p>
                    <p className="text-green-800 text-sm">
                      <strong>MRUV:</strong> v variável, a diferente de zero
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "exercicios" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex1")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 1: cálculo básico de velocidade
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: fácil
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
                  <div className="space-y-4 pt-5">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>
                      <p className="text-slate-700">
                        Um ciclista percorre 180 m em 9 s com velocidade constante.
                        Determine a velocidade do ciclista e a distância percorrida em 30 s.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>

                      <FormulaBox formula="v = \frac{\Delta s}{\Delta t} = \frac{180}{9} = 20 \text{ m/s}" />

                      <div className="mt-4">
                        <FormulaBox formula="\Delta s = v \cdot \Delta t = 20 \cdot 30 = 600 \text{ m}" />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas: 20 m/s e 600 m.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex2")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 2: montagem da equação horária
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: média
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
                  <div className="space-y-4 pt-5">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>

                      <p className="text-slate-700">
                        Um ponto material se move em trajetória retilínea e suas posições
                        variam conforme a tabela:
                      </p>

                      <div className="my-4 overflow-x-auto">
                        <table className="min-w-full border border-slate-300 bg-white">
                          <tbody>
                            <tr>
                              <th className="border border-slate-300 px-4 py-2 bg-slate-100">
                                t (s)
                              </th>
                              <td className="border border-slate-300 px-4 py-2">0</td>
                              <td className="border border-slate-300 px-4 py-2">1</td>
                              <td className="border border-slate-300 px-4 py-2">2</td>
                              <td className="border border-slate-300 px-4 py-2">3</td>
                            </tr>

                            <tr>
                              <th className="border border-slate-300 px-4 py-2 bg-slate-100">
                                s (m)
                              </th>
                              <td className="border border-slate-300 px-4 py-2">10</td>
                              <td className="border border-slate-300 px-4 py-2">15</td>
                              <td className="border border-slate-300 px-4 py-2">20</td>
                              <td className="border border-slate-300 px-4 py-2">25</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-slate-700">
                        Determine a equação horária do movimento.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>

                      <p className="text-slate-700 mb-3">
                        Quando t = 0, temos s = 10 m. Logo:
                      </p>

                      <FormulaBox formula="s_0 = 10 \text{ m}" />

                      <p className="text-slate-700 my-3">
                        A velocidade é:
                      </p>

                      <FormulaBox formula="v = \frac{15 - 10}{1 - 0} = 5 \text{ m/s}" />

                      <p className="text-slate-700 my-3">
                        Portanto:
                      </p>

                      <FormulaBox formula="s = 10 + 5t" highlight />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex3")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 3: movimento retrógrado
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: média
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
                  <div className="space-y-4 pt-5">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>

                      <p className="text-slate-700">
                        Um móvel obedece à equação{" "}
                        <MathFormula formula="s = 50 - 10t" display={false} />. Determine:
                      </p>

                      <ol className="list-decimal list-inside text-slate-700 mt-2 ml-2">
                        <li>A posição inicial e a velocidade</li>
                        <li>O instante em que passa pela origem</li>
                        <li>A posição em t = 8 s</li>
                      </ol>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>

                      <p className="text-slate-700 mb-3">
                        Comparando com{" "}
                        <MathFormula formula="s = s_0 + vt" display={false} />:
                      </p>

                      <FormulaBox formula="s_0 = 50 \text{ m} \quad \text{e} \quad v = -10 \text{ m/s}" />

                      <div className="mt-4">
                        <FormulaBox formula="0 = 50 - 10t \Rightarrow t = 5 \text{ s}" />
                      </div>

                      <div className="mt-4">
                        <FormulaBox formula="s = 50 - 10 \cdot 8 = -30 \text{ m}" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-600">
              <button
                onClick={() => toggleExercise("ex4")}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Exercício 4: conversão de unidades
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Dificuldade: difícil
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
                  <div className="space-y-4 pt-5">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Enunciado:</p>

                      <p className="text-slate-700">
                        Um ônibus trafega com velocidade constante de 108 km/h. No
                        instante t = 0, ele está na posição s₀ = 100 m. Determine a equação
                        horária, a posição após 1 minuto, o deslocamento em 2 minutos e o
                        tempo para percorrer 5 km.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-3">Resolução:</p>

                      <FormulaBox formula="v = \frac{108}{3,6} = 30 \text{ m/s}" />

                      <div className="mt-4">
                        <FormulaBox formula="s = 100 + 30t" highlight />
                      </div>

                      <div className="mt-4">
                        <FormulaBox formula="s = 100 + 30 \cdot 60 = 1900 \text{ m}" />
                      </div>

                      <div className="mt-4">
                        <FormulaBox formula="\Delta s = 30 \cdot 120 = 3600 \text{ m} = 3,6 \text{ km}" />
                      </div>

                      <div className="mt-4">
                        <FormulaBox formula="\Delta t = \frac{5000}{30} \approx 166,67 \text{ s}" />
                      </div>

                      <div className="mt-4 bg-purple-100 p-3 rounded">
                        <p className="text-slate-800 font-semibold">
                          Respostas: s = 100 + 30t; 1900 m; 3600 m; aproximadamente 166,67 s.
                        </p>
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
