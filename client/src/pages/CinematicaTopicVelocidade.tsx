import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb, Activity, Target, Zap, TrendingUp, Box, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicVelocidade() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Velocidade e Aceleração</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
                {/* ===================== VELOCIDADE MÉDIA E ESCALAR ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🚀 Velocidade Média e Velocidade Escalar</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Essência do Movimento</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A velocidade é a grandeza física que descreve a rapidez com que a posição de um móvel varia no tempo. No nível de elite (ITA/IME), a distinção entre <strong>velocidade escalar média</strong> e <strong>velocidade vetorial média</strong> é fundamental. Enquanto a primeira foca no caminho percorrido, a segunda foca apenas no deslocamento entre os pontos inicial e final.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
                <p className="text-slate-700 text-sm"><strong>Visão de Elite:</strong> A velocidade escalar média (<MathFormula formula="v_{em}" inline={true} />) é sempre maior ou igual ao módulo da velocidade vetorial média (<MathFormula formula="|\vec{v}_m|" inline={true} />). Elas só são iguais se o movimento for retilíneo e sem inversão de sentido.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Definições Precisas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">📌 Definições Precisas</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Velocidade Escalar Média */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-blue-200">Velocidade Escalar Média</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Razão entre a <strong>distância total percorrida</strong> (<MathFormula formula="d" inline={true} />) e o intervalo de tempo total (<MathFormula formula="\Delta t" inline={true} />).
              </p>
              <div className="bg-blue-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-blue-200 font-semibold mb-2">Fórmula:</p>
                <MathFormula formula="v_{em} = \frac{d}{\Delta t}" />
              </div>
              <p className="text-xs text-slate-400">Leva em conta todo o caminho percorrido (ida e volta).</p>
            </div>

            {/* Velocidade Vetorial Média */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-purple-200">Velocidade Vetorial Média</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Razão entre o <strong>vetor deslocamento</strong> (<MathFormula formula="\Delta \vec{r}" inline={true} />) e o intervalo de tempo total (<MathFormula formula="\Delta t" inline={true} />).
              </p>
              <div className="bg-purple-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-purple-200 font-semibold mb-2">Fórmula:</p>
                <MathFormula formula="\vec{v}_m = \frac{\Delta \vec{r}}{\Delta t}" />
              </div>
              <p className="text-xs text-slate-400">Depende apenas das posições inicial e final.</p>
            </div>
          </div>

          {/* Tabela Comparativa */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Característica</th>
                  <th className="p-3 text-center text-blue-300">Escalar Média</th>
                  <th className="p-3 text-center text-purple-300 rounded-tr-lg">Vetorial Média</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Natureza</td>
                  <td className="p-3 text-center text-slate-600">Escalar (número)</td>
                  <td className="p-3 text-center text-slate-600">Vetorial (módulo, dir, sent)</td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Depende da Trajetória?</td>
                  <td className="p-3 text-center text-slate-600">Sim (comprimento total)</td>
                  <td className="p-3 text-center text-slate-600">Não (só início e fim)</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Pode ser zero?</td>
                  <td className="p-3 text-center text-slate-600">Só se não houver movimento</td>
                  <td className="p-3 text-center text-slate-600">Sim (se voltar ao início)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* O Pulo do Gato - Renato Brito */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-8 rounded-r-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            <h3 className="text-2xl font-bold text-yellow-900">O Pulo do Gato (Visão Renato Brito)</h3>
          </div>
          <div className="space-y-4 text-yellow-900">
            <p className="font-semibold">Velocidade Média em Trechos Iguais:</p>
            <p className="text-sm leading-relaxed">
              Se um móvel percorre a primeira metade de uma distância com velocidade <MathFormula formula="v_1" inline={true} /> e a segunda metade com <MathFormula formula="v_2" inline={true} />, a velocidade média <strong>NÃO É</strong> a média aritmética <MathFormula formula="(v_1 + v_2)/2" inline={true} />.
            </p>
            <div className="bg-white/50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-bold mb-2">A Média Harmônica:</p>
              <MathFormula formula="v_m = \frac{2 \cdot v_1 \cdot v_2}{v_1 + v_2}" />
              <p className="text-xs mt-2 italic">*Dica: Isso cai muito no ITA para testar quem faz a média simples por pressa.</p>
            </div>
          </div>
        </div>

        {/* Exemplos Resolvidos ITA/IME */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos (Nível ITA/IME)</h3>
          
          <div className="space-y-8">
            {/* Exemplo 1 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-4">Exemplo 1: O Problema da Ida e Volta (ITA)</h4>
              <p className="text-slate-700 mb-4">
                Um nadador atravessa uma piscina de 50 m em 25 s e retorna ao ponto de partida em 35 s. Calcule: (a) a velocidade escalar média e (b) o módulo da velocidade vetorial média.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="font-bold text-slate-800 mb-2">(a) Velocidade Escalar Média:</p>
                  <MathFormula formula="d = 50 + 50 = 100 \text{ m}" />
                  <MathFormula formula="\Delta t = 25 + 35 = 60 \text{ s}" />
                  <MathFormula formula="v_{em} = \frac{100}{60} \approx 1{,}67 \text{ m/s}" />
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="font-bold text-slate-800 mb-2">(b) Velocidade Vetorial Média:</p>
                  <p className="text-sm text-slate-600 mb-2">Como o nadador voltou ao ponto de partida, o deslocamento é nulo.</p>
                  <MathFormula formula="\Delta \vec{r} = 0 \implies \vec{v}_m = 0" />
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-4">Exemplo 2: Velocidades em Trechos Iguais (IME)</h4>
              <p className="text-slate-700 mb-4">
                Um veículo percorre um terço de sua trajetória a 20 km/h, o segundo terço a 30 km/h e o último terço a 60 km/h. Qual a velocidade média em todo o percurso?
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-bold text-slate-800 mb-2">Resolução por Média Harmônica Generalizada:</p>
                <MathFormula formula="\frac{1}{v_m} = \frac{1}{3} \left( \frac{1}{v_1} + \frac{1}{v_2} + \frac{1}{v_3} \right)" />
                <MathFormula formula="\frac{1}{v_m} = \frac{1}{3} \left( \frac{1}{20} + \frac{1}{30} + \frac{1}{60} \right)" />
                <MathFormula formula="\frac{1}{v_m} = \frac{1}{3} \left( \frac{3+2+1}{60} \right) = \frac{1}{3} \cdot \frac{6}{60} = \frac{1}{30}" />
                <MathFormula formula="v_m = 30 \text{ km/h}" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
