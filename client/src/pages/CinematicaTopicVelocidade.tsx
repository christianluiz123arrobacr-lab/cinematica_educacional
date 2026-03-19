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
                {/* ===================== 1. CONTEXTO HISTÓRICO E CONCEITUAL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">1. Contexto Histórico e Conceitual</h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A ideia de "quão rápido" algo se move é intuitiva, mas sua formalização matemática levou séculos. Para <strong>Aristóteles</strong>, o movimento era uma "qualidade" do objeto. Foi apenas com <strong>Galileu Galilei</strong> que a velocidade passou a ser tratada como uma grandeza física mensurável, relacionando a distância percorrida com o tempo gasto.
            </p>
            <p>
              Na física de elite, não basta saber "o valor" da velocidade. Precisamos entender se estamos medindo o caminho total (escalar) ou a mudança de posição líquida (vetorial). Essa distinção é o que separa um problema simples de um desafio de nível ITA/IME.
            </p>
          </div>
        </div>

        {/* ===================== 2. DEFINIÇÕES PRECISAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">2. Definições Precisas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Velocidade Escalar Média (<MathFormula formula="v_{em}" inline={true} />)</h3>
              <p className="text-slate-600 text-sm mb-4">
                É a grandeza escalar que mede a rapidez média com que um móvel percorre uma <strong>distância total</strong> ao longo de sua trajetória.
              </p>
              <div className="bg-blue-100/50 p-3 rounded-lg text-blue-900 font-mono text-sm">
                Foco: Comprimento da trajetória (caminho real).
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Velocidade Vetorial Média (<MathFormula formula="\vec{v}_m" inline={true} />)</h3>
              <p className="text-slate-600 text-sm mb-4">
                É a grandeza vetorial definida pela razão entre o <strong>vetor deslocamento</strong> e o intervalo de tempo correspondente.
              </p>
              <div className="bg-purple-100/50 p-3 rounded-lg text-purple-900 font-mono text-sm">
                Foco: Mudança de posição (início ao fim).
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 3. DEDUÇÕES MATEMÁTICAS COMPLETAS ===================== */}
        <div className="bg-slate-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">3. Deduções Matemáticas Completas</h2>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-blue-300 font-semibold mb-2">Partindo da definição de taxa de variação:</p>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="mb-4 text-slate-300">Para a velocidade escalar média, consideramos a distância total <MathFormula formula="d" inline={true} /> percorrida no tempo <MathFormula formula="\Delta t" inline={true} />:</p>
                <MathFormula formula="v_{em} = \frac{d}{\Delta t} = \frac{\sum | \Delta s_i |}{t_f - t_i}" className="text-2xl" />
              </div>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-2">Para a velocidade vetorial média:</p>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="mb-4 text-slate-300">Consideramos o vetor posição final <MathFormula formula="\vec{r}_f" inline={true} /> e inicial <MathFormula formula="\vec{r}_i" inline={true} />:</p>
                <MathFormula formula="\vec{v}_m = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_f - \vec{r}_i}{t_f - t_i}" className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 4. TERMO-A-TERMO EM GRID 2 COLUNAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Box className="w-6 h-6 text-slate-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">4. Termo-a-termo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 w-12 text-center"><MathFormula formula="v_m" inline={true} /></div>
              <div>
                <p className="font-bold text-slate-800">Velocidade Média</p>
                <p className="text-xs text-slate-500">Unidade SI: m/s (metros por segundo)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 w-12 text-center"><MathFormula formula="\Delta s" inline={true} /></div>
              <div>
                <p className="font-bold text-slate-800">Deslocamento Escalar</p>
                <p className="text-xs text-slate-500">Variação da posição na trajetória</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 w-12 text-center"><MathFormula formula="d" inline={true} /></div>
              <div>
                <p className="font-bold text-slate-800">Distância Percorrida</p>
                <p className="text-xs text-slate-500">Soma dos módulos de todos os deslocamentos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 w-12 text-center"><MathFormula formula="\Delta t" inline={true} /></div>
              <div>
                <p className="font-bold text-slate-800">Intervalo de Tempo</p>
                <p className="text-xs text-slate-500">Duração do evento (<MathFormula formula="t_{final} - t_{inicial}" inline={true} />)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 5. RELAÇÃO MATEMÁTICA ===================== */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-8 rounded-r-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900">5. Relação Matemática Fundamental</h3>
          </div>
          <div className="space-y-4 text-blue-900">
            <p className="text-lg">
              A relação entre a velocidade escalar e a vetorial é dada pela desigualdade:
            </p>
            <div className="bg-white/80 p-6 rounded-xl border border-blue-200 text-center">
              <MathFormula formula="v_{em} \geq |\vec{v}_m|" className="text-3xl" />
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span><strong>Igualdade (=):</strong> Ocorre apenas em movimentos retilíneos e sem inversão de sentido.</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span><strong>Desigualdade (>):</strong> Ocorre se a trajetória for curva ou se houver "vai e vem" (inversão de sentido).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===================== 6. TABELAS COMPARATIVAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-slate-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">6. Tabela Comparativa</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 text-left rounded-tl-lg">Critério</th>
                  <th className="p-4 text-center">Velocidade Escalar Média</th>
                  <th className="p-4 text-center rounded-tr-lg">Velocidade Vetorial Média</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700">O que mede?</td>
                  <td className="p-4 text-center text-slate-600">Rapidez ao longo do caminho</td>
                  <td className="p-4 text-center text-slate-600">Rapidez da mudança de posição</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700">Cálculo</td>
                  <td className="p-4 text-center text-slate-600"><MathFormula formula="d / \Delta t" inline={true} /></td>
                  <td className="p-4 text-center text-slate-600"><MathFormula formula="\Delta \vec{r} / \Delta t" inline={true} /></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700">Sinal</td>
                  <td className="p-4 text-center text-slate-600">Sempre positiva (ou zero)</td>
                  <td className="p-4 text-center text-slate-600">Pode ser positiva, negativa ou zero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== 7. EXEMPLOS RESOLVIDOS ITA/IME ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">7. Exemplos Resolvidos (ITA/IME)</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-900 mb-4">Exemplo 1: O Pulo do Gato (Renato Brito)</h4>
              <p className="text-slate-700 mb-4">
                Um carro percorre a primeira metade de uma estrada com velocidade <MathFormula formula="v_1 = 40 \text{ km/h}" inline={true} /> e a segunda metade com <MathFormula formula="v_2 = 60 \text{ km/h}" inline={true} />. Qual a velocidade média em todo o percurso?
              </p>
              <div className="bg-white p-6 rounded-xl border border-green-200">
                <p className="font-bold text-slate-800 mb-4">Resolução Passo a Passo:</p>
                <div className="space-y-3 text-slate-600 text-sm">
                  <p>1. Seja <MathFormula formula="L" inline={true} /> a distância total. Cada trecho tem <MathFormula formula="L/2" inline={true} />.</p>
                  <p>2. Tempo no trecho 1: <MathFormula formula="t_1 = \frac{L/2}{v_1} = \frac{L}{2v_1}" inline={true} />.</p>
                  <p>3. Tempo no trecho 2: <MathFormula formula="t_2 = \frac{L/2}{v_2} = \frac{L}{2v_2}" inline={true} />.</p>
                  <p>4. Velocidade Média: <MathFormula formula="v_m = \frac{L}{t_1 + t_2} = \frac{L}{\frac{L}{2v_1} + \frac{L}{2v_2}}" inline={true} />.</p>
                  <p>5. Simplificando (Média Harmônica): <MathFormula formula="v_m = \frac{2 \cdot v_1 \cdot v_2}{v_1 + v_2}" inline={true} />.</p>
                  <div className="bg-green-900 text-white p-4 rounded-lg mt-4 text-center">
                    <MathFormula formula="v_m = \frac{2 \cdot 40 \cdot 60}{40 + 60} = \frac{4800}{100} = 48 \text{ km/h}" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 8. APLICAÇÕES PRÁTICAS ===================== */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">8. Aplicações Práticas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h4 className="font-bold text-blue-300 mb-2">GPS e Navegação</h4>
              <p className="text-xs text-slate-300">O GPS calcula sua velocidade vetorial instantânea via satélite para prever o tempo de chegada (ETA).</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h4 className="font-bold text-blue-300 mb-2">Tráfego Rodoviário</h4>
              <p className="text-xs text-slate-300">Radares de velocidade média usam a definição escalar para multar veículos entre dois pontos.</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h4 className="font-bold text-blue-300 mb-2">Aeronáutica</h4>
              <p className="text-xs text-slate-300">Pilotos diferenciam a velocidade em relação ao ar (escalar) da velocidade em relação ao solo (vetorial).</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
