import { Link } from "wouter";
import { ArrowLeft, Activity, Lightbulb, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function CinematicaTopicMRU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Equação Horária do Espaço — MRU</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🚗 Movimento Retilíneo Uniforme (MRU)</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRU?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme (MRU)</strong> é o tipo mais simples de movimento estudado na cinemática. Ele ocorre quando um corpo se desloca ao longo de uma trajetória em linha reta e mantém sua <strong>velocidade constante</strong> ao longo do tempo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Isso significa que o móvel percorre <strong>distâncias iguais em intervalos de tempo iguais</strong>. Se um carro viaja a 80 km/h constantes, ele percorrerá exatamente 80 km a cada hora, 40 km a cada meia hora, e assim por diante.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Características Essenciais
              </h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p><strong>Velocidade Constante:</strong> A velocidade escalar instantânea é igual à velocidade média em qualquer intervalo de tempo (<MathFormula formula="v = v_m = \text{constante} \neq 0" display={false} />).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p><strong>Aceleração Nula:</strong> Como a velocidade não varia, a aceleração é zero (<MathFormula formula="a = 0" display={false} />).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p><strong>Trajetória Retilínea:</strong> O movimento ocorre em uma única direção, sem curvas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CONTEXTO HISTÓRICO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 Contexto Histórico</h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Da Física Aristotélica à Inércia de Galileu
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Por séculos, a física aristotélica afirmava que todo corpo em movimento precisava de uma força contínua para se manter em movimento. Isso parecia óbvio: um carrinho para quando você para de empurrá-lo.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              Foi <strong>Galileu Galilei (1564–1642)</strong> quem percebeu o erro: o carrinho para por causa do <em>atrito</em>, não porque o movimento é naturalmente cessante. Em uma superfície perfeitamente lisa, sem atrito, o carrinho continuaria para sempre. Essa ideia foi formalizada por <strong>Isaac Newton</strong> como a <strong>Primeira Lei da Mecânica (Lei da Inércia)</strong>: um corpo em MRU permanece em MRU enquanto nenhuma força resultante atuar sobre ele.
            </p>
            <p className="text-slate-700 leading-relaxed">
              O MRU é, portanto, o estado natural de qualquer corpo livre de forças. Não é um caso especial — é o caso padrão da natureza.
            </p>
          </div>
        </div>

        {/* ===================== A EQUAÇÃO HORÁRIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⏱️ A Equação Horária do Espaço</h2>
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A equação horária do espaço é a ferramenta matemática que nos permite prever exatamente <strong>onde o móvel estará em qualquer instante de tempo</strong>, desde que conheçamos sua posição inicial e sua velocidade.
            </p>

            {/* Fórmula em destaque */}
            <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center">Equação Horária do Espaço — MRU</h3>
                <div className="flex justify-center mb-8">
                  <div className="bg-slate-800/80 px-8 py-5 rounded-xl border border-slate-700">
                    <MathFormula formula="s = s_0 + v \cdot t" display={true} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <p className="text-blue-400 font-mono font-bold mb-1">s — Posição Final</p>
                    <p className="text-sm text-slate-300">Onde o móvel está no instante <MathFormula formula="t" display={false} />. Unidade: metros (m).</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <p className="text-indigo-400 font-mono font-bold mb-1">s₀ — Posição Inicial</p>
                    <p className="text-sm text-slate-300">Onde o móvel estava em <MathFormula formula="t = 0" display={false} />. Unidade: metros (m).</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <p className="text-green-400 font-mono font-bold mb-1">v — Velocidade</p>
                    <p className="text-sm text-slate-300">Constante no MRU. Pode ser positiva ou negativa. Unidade: m/s.</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <p className="text-amber-400 font-mono font-bold mb-1">t — Tempo</p>
                    <p className="text-sm text-slate-300">Instante de tempo considerado. Unidade: segundos (s).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedução */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Dedução Passo a Passo
              </h3>
              <p className="text-slate-700 mb-4">
                A equação horária é uma consequência direta da definição de velocidade média. No MRU, como a velocidade é constante, temos:
              </p>
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-slate-600 font-semibold mb-2">Passo 1 — Definição de velocidade média:</p>
                  <div className="flex justify-center">
                    <MathFormula formula="v = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}" display={true} />
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-slate-600 font-semibold mb-2">Passo 2 — Adotando <MathFormula formula="t_0 = 0" display={false} /> (convenção padrão):</p>
                  <div className="flex justify-center">
                    <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-slate-600 font-semibold mb-2">Passo 3 — Isolando <MathFormula formula="s" display={false} />:</p>
                  <div className="flex justify-center">
                    <MathFormula formula="v \cdot t = s - s_0 \implies \boxed{s = s_0 + v \cdot t}" display={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== ANÁLISE TERMO A TERMO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔬 Análise Termo a Termo</h2>
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Cada grandeza da equação <MathFormula formula="s = s_0 + v \cdot t" display={false} /> carrega um significado físico preciso. Entender cada uma delas é essencial para resolver qualquer problema de MRU.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold">Símbolo</th>
                    <th className="px-5 py-3 text-left font-semibold">Nome</th>
                    <th className="px-5 py-3 text-left font-semibold">Significado Físico</th>
                    <th className="px-5 py-3 text-left font-semibold">Unidade (SI)</th>
                    <th className="px-5 py-3 text-left font-semibold">Observações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-mono text-blue-700 font-bold text-lg">s</td>
                    <td className="px-5 py-4 font-semibold text-slate-800">Posição Final</td>
                    <td className="px-5 py-4 text-slate-700">Localização do móvel no instante t</td>
                    <td className="px-5 py-4 text-slate-600">metro (m)</td>
                    <td className="px-5 py-4 text-slate-500 text-sm">Pode ser positiva, negativa ou zero</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-mono text-indigo-700 font-bold text-lg">s₀</td>
                    <td className="px-5 py-4 font-semibold text-slate-800">Posição Inicial</td>
                    <td className="px-5 py-4 text-slate-700">Localização do móvel em t = 0</td>
                    <td className="px-5 py-4 text-slate-600">metro (m)</td>
                    <td className="px-5 py-4 text-slate-500 text-sm">É o coeficiente linear da equação (intercepto)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-mono text-green-700 font-bold text-lg">v</td>
                    <td className="px-5 py-4 font-semibold text-slate-800">Velocidade</td>
                    <td className="px-5 py-4 text-slate-700">Taxa de variação da posição com o tempo</td>
                    <td className="px-5 py-4 text-slate-600">m/s</td>
                    <td className="px-5 py-4 text-slate-500 text-sm">É o coeficiente angular da reta s × t</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-mono text-amber-700 font-bold text-lg">t</td>
                    <td className="px-5 py-4 font-semibold text-slate-800">Tempo</td>
                    <td className="px-5 py-4 text-slate-700">Instante em que se quer conhecer a posição</td>
                    <td className="px-5 py-4 text-slate-600">segundo (s)</td>
                    <td className="px-5 py-4 text-slate-500 text-sm">Sempre ≥ 0 (tempo decorrido desde t₀ = 0)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">📌 Sinal de v</p>
                <p className="text-slate-700 text-sm">
                  <strong>v &gt; 0:</strong> Movimento progressivo (posições crescem).<br/>
                  <strong>v &lt; 0:</strong> Movimento retrógrado (posições diminuem).<br/>
                  <strong>v = 0:</strong> Repouso (não é MRU).
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">📌 Sinal de s₀</p>
                <p className="text-slate-700 text-sm">
                  Indica de qual lado da origem o móvel começa. Se <MathFormula formula="s_0 = 0" display={false} />, o móvel parte da origem. Se <MathFormula formula="s_0 > 0" display={false} />, começa à direita da origem.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">📌 Equação do 1º Grau</p>
                <p className="text-slate-700 text-sm">
                  A equação <MathFormula formula="s = s_0 + vt" display={false} /> é linear em t. Isso garante que o gráfico s × t seja sempre uma reta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CLASSIFICAÇÃO DO MOVIMENTO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Classificação do Movimento</h2>
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O sinal da velocidade (<MathFormula formula="v" display={false} />) determina o sentido do movimento em relação à orientação positiva da trajetória.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">+</div>
                  <h3 className="text-xl font-bold text-blue-900">Movimento Progressivo</h3>
                </div>
                <p className="text-slate-700 mb-4">O móvel se desloca no <strong>mesmo sentido</strong> da orientação positiva da trajetória.</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Velocidade positiva: <MathFormula formula="v > 0" display={false} /></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Posições aumentam com o tempo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Reta s × t é crescente</li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-blue-100 text-center">
                  <span className="text-sm text-slate-500 font-mono">Exemplo: s = 10 + 5t</span>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">−</div>
                  <h3 className="text-xl font-bold text-red-900">Movimento Retrógrado</h3>
                </div>
                <p className="text-slate-700 mb-4">O móvel se desloca no <strong>sentido contrário</strong> à orientação positiva da trajetória.</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" /> Velocidade negativa: <MathFormula formula="v < 0" display={false} /></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" /> Posições diminuem com o tempo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" /> Reta s × t é decrescente</li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-red-100 text-center">
                  <span className="text-sm text-slate-500 font-mono">Exemplo: s = 50 − 2t</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== GRÁFICOS DO MRU ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Gráficos do MRU</h2>
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed">
              A análise gráfica é fundamental para a compreensão profunda da cinemática. No MRU, três gráficos descrevem completamente o movimento.
            </p>

            {/* Gráfico s x t */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">A</span>
                Gráfico Posição × Tempo (s × t)
              </h3>
              <p className="text-slate-700 mb-4">
                Como a equação <MathFormula formula="s = s_0 + vt" display={false} /> é do 1º grau em t, o gráfico é sempre uma <strong>reta inclinada</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-bold text-blue-800 mb-1">Progressivo (v &gt; 0)</p>
                  <p className="text-sm text-slate-600">Reta crescente — inclinação positiva.</p>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <p className="font-bold text-red-800 mb-1">Retrógrado (v &lt; 0)</p>
                  <p className="text-sm text-slate-600">Reta decrescente — inclinação negativa.</p>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-1">Propriedade Fundamental:</p>
                <p className="text-indigo-800 text-sm">
                  A inclinação da reta (coeficiente angular) é numericamente igual à velocidade: <MathFormula formula="\tan(\theta) = \frac{\Delta s}{\Delta t} = v" display={false} />.
                </p>
              </div>
            </div>

            {/* Gráfico v x t */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">B</span>
                Gráfico Velocidade × Tempo (v × t)
              </h3>
              <p className="text-slate-700 mb-4">
                Como a velocidade é constante, o gráfico é uma <strong>reta horizontal</strong>, paralela ao eixo do tempo.
              </p>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p className="font-bold text-green-900 mb-2">Propriedade da Área:</p>
                <p className="text-green-800 text-sm mb-2">
                  A área sob a reta no gráfico v × t é numericamente igual ao <strong>deslocamento escalar</strong> (<MathFormula formula="\Delta s" display={false} />) do móvel no intervalo de tempo considerado.
                </p>
                <div className="flex justify-center">
                  <MathFormula formula="\text{Área} \stackrel{N}{=} \Delta s = v \cdot \Delta t" display={true} />
                </div>
              </div>
            </div>

            {/* Gráfico a x t */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">C</span>
                Gráfico Aceleração × Tempo (a × t)
              </h3>
              <p className="text-slate-700 mb-4">
                Como a velocidade não varia, a aceleração é nula em todos os instantes.
              </p>
              <div className="bg-white p-4 rounded border border-slate-200 flex justify-center">
                <MathFormula formula="a = 0 \text{ (reta sobre o eixo do tempo)}" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXEMPLO RESOLVIDO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">✏️ Exemplo Resolvido</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="font-bold text-slate-900 mb-3">Problema:</p>
              <p className="text-slate-700 leading-relaxed">
                Um automóvel trafega em uma estrada retilínea com velocidade constante de <strong>90 km/h</strong>. No instante t = 0, ele se encontra na posição <strong>s₀ = 20 m</strong>. Determine: (a) a equação horária do espaço; (b) a posição em t = 10 s; (c) o instante em que passa por s = 270 m.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900 mb-3">Passo 1 — Converter a velocidade para m/s:</p>
                <div className="flex justify-center">
                  <MathFormula formula="v = \frac{90}{3{,}6} = 25 \text{ m/s}" display={true} />
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <p className="font-bold text-slate-900 mb-3">(a) Equação Horária:</p>
                <div className="flex justify-center">
                  <MathFormula formula="s = 20 + 25t \quad \text{(m)}" display={true} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900 mb-3">(b) Posição em t = 10 s:</p>
                <div className="flex justify-center">
                  <MathFormula formula="s = 20 + 25 \cdot 10 = 20 + 250 = 270 \text{ m}" display={true} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900 mb-3">(c) Instante em que s = 270 m:</p>
                <div className="flex justify-center">
                  <MathFormula formula="270 = 20 + 25t \implies 25t = 250 \implies t = 10 \text{ s}" display={true} />
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="font-bold text-green-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Verificação:
                </p>
                <p className="text-green-800 text-sm">
                  Os itens (b) e (c) confirmam o mesmo resultado (t = 10 s, s = 270 m), o que valida os cálculos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== ARMADILHAS COMUNS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            Armadilhas Comuns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50">
              <h3 className="font-bold text-red-900 mb-2">⚠️ Unidades Incompatíveis</h3>
              <p className="text-slate-700 text-sm mb-3">
                Usar km/h com segundos na mesma equação gera resultado errado. Sempre converta para o SI.
              </p>
              <p className="text-slate-600 text-sm font-mono bg-white p-2 rounded border border-red-100">
                1 km/h = 1/3,6 m/s
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50">
              <h3 className="font-bold text-red-900 mb-2">⚠️ Esquecer o Sinal da Velocidade</h3>
              <p className="text-slate-700 text-sm">
                Se o móvel está voltando, a velocidade é negativa. Usar o módulo sem o sinal correto leva a posições erradas.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50">
              <h3 className="font-bold text-red-900 mb-2">⚠️ Confundir Deslocamento com Distância</h3>
              <p className="text-slate-700 text-sm">
                O deslocamento <MathFormula formula="\Delta s = s - s_0" display={false} /> pode ser negativo. A distância percorrida é sempre positiva.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50">
              <h3 className="font-bold text-red-900 mb-2">⚠️ Usar MRU quando há Aceleração</h3>
              <p className="text-slate-700 text-sm">
                A equação <MathFormula formula="s = s_0 + vt" display={false} /> só vale quando <MathFormula formula="a = 0" display={false} />. Se a velocidade varia, use as equações do MRUV.
              </p>
            </Card>
          </div>
        </div>

      </section>
    </div>
  );
}
