import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Info,
  BookOpen,
  Sigma,
  BarChart3,
  Route,
  Gauge,
  Clock3,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
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
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Movimento Retilíneo Uniforme (MRU)</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* INTRODUÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🚗 Movimento Retilíneo Uniforme
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRU?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong> é o movimento em que um móvel
                percorre uma trajetória retilínea com <strong>velocidade constante</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Isso significa que a posição do móvel varia sempre no mesmo ritmo. Em tempos iguais,
                ele sofre iguais variações de posição.
              </p>
              <p className="text-slate-700 leading-relaxed">
                É exatamente dessa regularidade que nascem a equação horária do espaço e toda a
                interpretação gráfica do MRU.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia central
              </h4>
              <div className="space-y-3 text-slate-700">
                <p>• a trajetória é uma reta;</p>
                <p>• a velocidade permanece constante;</p>
                <p>• a posição varia linearmente com o tempo;</p>
                <p>• a aceleração é nula.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEXTO HISTÓRICO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 Contexto Histórico</h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              O modelo mais simples da Cinemática
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              O MRU aparece logo no início da Cinemática porque representa o caso mais simples
              possível de movimento: um corpo que continua se deslocando sem alterar sua velocidade.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              É com ele que se aprende a relacionar posição, tempo e velocidade de forma matemática.
            </p>
            <p className="text-slate-700 leading-relaxed">
              O que mais tarde vira leitura de gráficos, encontros, ultrapassagens e comparação de
              movimentos começa aqui.
            </p>
          </div>
        </div>

        {/* DEFINIÇÃO PRECISA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Definição Precisa</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição formal</h4>
              <p className="text-slate-700 leading-relaxed">
                Um móvel realiza MRU quando se desloca em uma trajetória retilínea com
                <strong> velocidade escalar constante</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Route className="w-4 h-4" />
                  Trajetória
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O caminho percorrido deve ser uma reta.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Velocidade
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Permanece constante.
                </p>
                <MathFormula formula="v = \text{constante}" display={true} />
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  Aceleração
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Como não há variação da velocidade:
                </p>
                <MathFormula formula="a = 0" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* EQUAÇÃO HORÁRIA DO ESPAÇO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧮 Equação Horária do Espaço</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                O que a equação quer responder?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A pergunta central é: <strong>onde o móvel estará depois de certo tempo?</strong>
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como o movimento é uniforme, essa posição depende de três coisas:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• a posição inicial do móvel;</p>
                <p>• a velocidade com que ele se move;</p>
                <p>• o tempo transcorrido.</p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Se essas grandezas são conhecidas, a posição em qualquer instante pode ser calculada.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">A estrutura física da equação</h4>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição atual} = \text{posição inicial} + \text{variação de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                A equação horária nada mais é do que a escrita matemática dessa frase.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                A variação da posição é:
              </p>
              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">Dedução</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Partimos da definição de velocidade:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Tomando <MathFormula formula="t_0 = 0" display={false} />, temos
                <MathFormula formula="\Delta t = t" display={false} />.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Substituindo <MathFormula formula="\Delta s = s - s_0" display={false} /> e
                <MathFormula formula="\Delta t = t" display={false} />, obtemos:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="vt = s - s_0" display={true} />
                </div>

                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 flex flex-col items-center">
                  <MathFormula formula="s = s_0 + vt" display={true} />
                  <p className="text-sm text-blue-800 mt-4 font-medium">
                    Equação horária do espaço no MRU
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 Interpretação física</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                A expressão <MathFormula formula="s = s_0 + vt" display={false} /> deve ser lida assim:
              </p>
              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>• <MathFormula formula="s_0" display={false} /> informa de onde o móvel partiu;</p>
                <p>• <MathFormula formula="vt" display={false} /> informa quanto a posição mudou;</p>
                <p>• a posição atual resulta da soma dessas duas contribuições.</p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERPRETAÇÃO TERMO A TERMO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔍 Interpretação Termo a Termo</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="s = s_0 + vt" display={true} />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição</h4>
                <p className="text-sm text-slate-600 text-center">
                  Posição no instante considerado.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s_0" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição inicial</h4>
                <p className="text-sm text-slate-600 text-center">
                  Onde o móvel começou.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="v" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Velocidade</h4>
                <p className="text-sm text-slate-600 text-center">
                  Ritmo constante de variação da posição.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="t" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Tempo</h4>
                <p className="text-sm text-slate-600 text-center">
                  Tempo transcorrido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLASSIFICAÇÕES */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Classificações do MRU</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
              <MathFormula formula="v > 0" display={true} />
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                A posição cresce com o tempo.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h4 className="font-bold text-orange-800 mb-3">Movimento Retrógrado</h4>
              <MathFormula formula="v < 0" display={true} />
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                A posição diminui com o tempo.
              </p>
            </div>
          </div>
        </div>

        {/* INTERPRETAÇÃO GRÁFICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Interpretação Gráfica</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Antes de olhar o gráfico, entenda a lógica
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A interpretação gráfica do MRU não deve começar por “decorar o formato do gráfico”.
                Ela deve começar pela equação horária:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Essa equação mostra que a posição depende do tempo por meio de uma expressão do
                <strong> primeiro grau</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed">
                E toda função do primeiro grau, quando representada graficamente, gera uma
                <strong> reta</strong>. Então o gráfico de posição em função do tempo no MRU
                deve necessariamente ser uma reta.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">
                1. Gráfico posição × tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como a função horária é
                <MathFormula formula="s = s_0 + vt" display={false} />,
                o gráfico de <MathFormula formula="s \times t" display={false} /> é uma reta.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s(t) = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Isso significa que, à medida que o tempo passa, a posição cresce ou diminui
                sempre de forma linear, isto é, sem curvaturas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h4 className="font-bold text-indigo-800 mb-3">
                  Coeficiente linear
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  No gráfico da reta, o coeficiente linear é <MathFormula formula="s_0" display={false} />.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Isso quer dizer que ele representa a posição inicial do móvel, isto é,
                  a posição no instante <MathFormula formula="t = 0" display={false} />.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3">
                  Coeficiente angular
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  O coeficiente angular da reta é <MathFormula formula="v" display={false} />.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Isso significa que a inclinação da reta informa a velocidade do movimento.
                  Quanto maior o módulo da velocidade, mais inclinada é a reta.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                2. O que a inclinação da reta quer dizer fisicamente?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A inclinação da reta mostra quanto a posição muda em certo intervalo de tempo.
                Isso é exatamente a ideia de velocidade.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Então, no gráfico <MathFormula formula="s \times t" display={false} />,
                não basta olhar “se sobe ou se desce”. É preciso entender que a inclinação da reta
                mede o quanto a posição varia por unidade de tempo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Reta crescente
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Quando <MathFormula formula="v > 0" display={false} />, a posição aumenta com o tempo.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Isso significa que o móvel está se deslocando no sentido positivo da trajetória.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  Reta decrescente
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Quando <MathFormula formula="v < 0" display={false} />, a posição diminui com o tempo.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Isso significa que o móvel está se deslocando no sentido oposto ao da orientação adotada.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                3. Como o valor de <MathFormula formula="s_0" display={false} /> aparece no gráfico
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                O valor de <MathFormula formula="s_0" display={false} /> indica o ponto em que a reta
                corta o eixo das posições quando <MathFormula formula="t = 0" display={false} />.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h5 className="font-bold text-blue-800 mb-2">
                    <MathFormula formula="s_0 > 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta começa acima da origem do eixo das posições.
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <h5 className="font-bold text-indigo-800 mb-2">
                    <MathFormula formula="s_0 = 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta passa pela origem.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h5 className="font-bold text-purple-800 mb-2">
                    <MathFormula formula="s_0 < 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta começa abaixo da origem do eixo das posições.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">
                💡 Leitura inteligente do gráfico <MathFormula formula="s \times t" display={false} />
              </h4>

              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>• primeiro olhe onde a reta começa: isso te dá <MathFormula formula="s_0" display={false} />;</p>
                <p>• depois olhe a inclinação: isso te dá o sinal e o valor da velocidade;</p>
                <p>• reta crescente indica velocidade positiva;</p>
                <p>• reta decrescente indica velocidade negativa;</p>
                <p>• reta mais inclinada significa maior módulo da velocidade.</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h4 className="font-bold text-indigo-900 mb-3">
                4. Gráfico velocidade × tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                No MRU, a velocidade não muda. Portanto, no gráfico
                <MathFormula formula="v \times t" display={false} />, a velocidade é representada por
                uma reta horizontal.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \text{constante}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Se <MathFormula formula="v > 0" display={false} />, essa reta fica acima do eixo do tempo.
                Se <MathFormula formula="v < 0" display={false} />, ela fica abaixo.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                5. O que a área sob o gráfico <MathFormula formula="v \times t" display={false} /> significa?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                No MRU, como o gráfico da velocidade é uma reta horizontal, a região entre a reta e o eixo do tempo
                forma um retângulo.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                O valor dessa “área” é:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\text{área} = v \cdot \Delta t" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Mas, como no MRU:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                concluímos que a área sob o gráfico da velocidade em função do tempo representa
                a <strong>variação da posição</strong>.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">
                6. Gráfico aceleração × tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como a velocidade é constante no MRU, não existe variação de velocidade.
                Logo, a aceleração é nula.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="a = 0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                No gráfico <MathFormula formula="a \times t" display={false} />, isso aparece como uma reta
                coincidente com o eixo do tempo.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Erro clássico de gráfico
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Muita gente olha uma reta crescente no gráfico <MathFormula formula="s \times t" display={false} />
                e diz apenas “o móvel está acelerando”. Isso está errado. No MRU, uma reta crescente em
                <MathFormula formula="s \times t" display={false} /> indica apenas velocidade positiva e constante.
                Aceleração está ligada ao gráfico <MathFormula formula="v \times t" display={false} />, não ao fato
                de a posição crescer com o tempo.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Fechando a interpretação gráfica
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                No MRU:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• o gráfico <MathFormula formula="s \times t" display={false} /> é uma reta;</p>
                <p>• o coeficiente linear da reta é <MathFormula formula="s_0" display={false} />;</p>
                <p>• o coeficiente angular da reta é <MathFormula formula="v" display={false} />;</p>
                <p>• o gráfico <MathFormula formula="v \times t" display={false} /> é horizontal;</p>
                <p>• a área sob o gráfico <MathFormula formula="v \times t" display={false} /> dá <MathFormula formula="\Delta s" display={false} />;</p>
                <p>• o gráfico <MathFormula formula="a \times t" display={false} /> fica sobre o zero.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACELERAÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Aceleração no MRU</h2>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-bold text-orange-800 mb-3">Por que a aceleração é zero?</h4>
            <p className="text-slate-700 leading-relaxed mb-4">
              A aceleração mede a variação da velocidade no tempo. No MRU, a velocidade não varia.
            </p>
            <MathFormula formula="a = 0" display={true} />
          </div>
        </div>

        {/* CASOS DE PROVA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧩 Casos Clássicos de Prova</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h5 className="font-bold text-blue-800 mb-2">Encontro</h5>
              <p className="text-sm text-slate-700">
                No instante do encontro, os móveis ocupam a mesma posição.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <h5 className="font-bold text-indigo-800 mb-2">Ultrapassagem</h5>
              <p className="text-sm text-slate-700">
                Também envolve igualdade de posições, às vezes com comprimento dos corpos.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h5 className="font-bold text-purple-800 mb-2">Partida com atraso</h5>
              <p className="text-sm text-slate-700">
                É essencial controlar o instante inicial de cada móvel.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
              <p className="text-sm text-slate-700">
                Misturar km/h com m/s ainda derruba gente demais.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
            <MathFormula formula="1 \text{ m/s} = 3{,}6 \text{ km/h}" display={true} />
          </div>
        </div>

        {/* ARMADILHAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ Armadilhas e Erros Comuns</h2>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Onde mais se erra
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>• Confundir posição com distância percorrida.</li>
              <li>• Achar que velocidade negativa significa desaceleração.</li>
              <li>• Ignorar o sinal da velocidade.</li>
              <li>• Igualar velocidades quando o problema exige igualar posições.</li>
              <li>• Ler gráfico de posição como se fosse gráfico de velocidade.</li>
            </ul>
          </div>
        </div>

        {/* EXEMPLOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Leitura direta da função
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  Um móvel obedece à função
                  <MathFormula formula="s = 12 + 3t" display={false} />.
                  Determine a posição inicial, a velocidade e a posição em
                  <MathFormula formula="t = 5 \text{ s}" display={false} />.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <MathFormula formula="s = s_0 + vt" display={true} />
                  <MathFormula formula="s_0 = 12 \text{ m} \qquad ; \qquad v = 3 \text{ m/s}" display={true} />
                  <MathFormula formula="s = 12 + 3 \cdot 5 = 27 \text{ m}" display={true} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 — Encontro
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  Dois móveis obedecem às funções
                  <MathFormula formula="s_A = 10 + 4t" display={false} /> e
                  <MathFormula formula="s_B = 70 - 2t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="10 + 4t = 70 - 2t" display={true} />
                  <MathFormula formula="6t = 60 \qquad \Rightarrow \qquad t = 10 \text{ s}" display={true} />
                  <MathFormula formula="s = 10 + 4 \cdot 10 = 50 \text{ m}" display={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FECHAMENTO */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Fechamento
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              O MRU ensina muito mais do que uma fórmula simples. Ele ensina a interpretar movimento
              por equação, por gráfico e por significado físico.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem entende de verdade a interpretação gráfica do MRU já está muito menos vulnerável
              àquelas questões que tentam confundir leitura visual com chute decorado.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
