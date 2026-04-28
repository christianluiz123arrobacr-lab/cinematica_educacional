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
        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🚗 Movimento Retilíneo Uniforme
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRU?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong>, abreviado como <strong>MRU</strong>,
                é o movimento em que um móvel percorre uma <strong>trajetória retilínea</strong>
                com <strong> velocidade constante</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A ideia central é simples, mas muito poderosa: se a velocidade não muda, então a posição
                do móvel varia sempre no mesmo ritmo. Em intervalos de tempo iguais, o móvel sofre
                iguais variações de posição.
              </p>
              <p className="text-slate-700 leading-relaxed">
                O MRU é um dos primeiros modelos fundamentais da Cinemática porque ensina como transformar
                uma descrição verbal do movimento em uma descrição matemática precisa.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia física principal
              </h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p>A trajetória é uma reta.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p>A velocidade permanece constante ao longo do tempo.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p>A posição varia linearmente com o tempo.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">4.</span>
                  <p>A aceleração é nula.</p>
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
              O primeiro grande modelo operacional da Cinemática
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              O estudo matemático do movimento ganhou força com Galileu, quando a Física passou a se preocupar
              em descrever quantitativamente como a posição dos corpos se altera com o tempo.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              O MRU representa o caso mais simples possível: um corpo que continua se deslocando sem alterar
              sua velocidade. Por isso, ele aparece logo no início da Cinemática. Ele serve como base para
              vários raciocínios posteriores.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Mais tarde, a Dinâmica explicará por que um corpo pode manter um movimento uniforme. Mas aqui,
              na Cinemática, nosso foco é descrever o movimento, não explicar sua causa.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="font-bold text-slate-800 text-sm">Fase antiga</p>
              <p className="text-xs text-slate-500 mb-2">visão qualitativa</p>
              <p className="text-xs text-slate-600">
                Movimento tratado de forma mais filosófica do que matemática.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔭</div>
              <p className="font-bold text-slate-800 text-sm">Galileu</p>
              <p className="text-xs text-slate-500 mb-2">descrição quantitativa</p>
              <p className="text-xs text-slate-600">
                Organiza o estudo matemático do movimento.
              </p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🍎</div>
              <p className="font-bold text-slate-800 text-sm">Newton</p>
              <p className="text-xs text-slate-500 mb-2">explicação dinâmica</p>
              <p className="text-xs text-slate-600">
                Explica por que o MRU pode ser mantido.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== DEFINIÇÃO PRECISA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Definição Precisa</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição formal</h4>
              <p className="text-slate-700 leading-relaxed">
                Um móvel realiza <strong>Movimento Retilíneo Uniforme</strong> quando se desloca
                ao longo de uma reta com <strong>velocidade escalar constante</strong>.
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
                  A velocidade escalar permanece constante.
                </p>
                <MathFormula formula="v = \text{constante}" display={true} />
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  Aceleração
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Como a velocidade não varia, a aceleração é nula.
                </p>
                <MathFormula formula="a = 0" display={true} />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-slate-700 text-sm">
                <strong>Leitura física correta:</strong> se a velocidade é constante, então o móvel sofre
                iguais variações de posição em iguais intervalos de tempo.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== EQUAÇÃO HORÁRIA DO ESPAÇO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧮 Equação Horária do Espaço</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Antes da fórmula: o que estamos tentando relacionar?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço nasce de uma pergunta simples:
                <strong> em que posição o móvel estará depois de certo tempo?</strong>
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como o movimento é uniforme, a resposta para essa pergunta não depende de adivinhação,
                mas de três elementos bem definidos:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• a posição inicial do móvel;</p>
                <p>• a velocidade com que ele se desloca;</p>
                <p>• o tempo transcorrido.</p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Se conhecemos essas três grandezas, conseguimos determinar a posição do móvel em qualquer instante.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">A estrutura física da equação</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Antes da dedução matemática, a história física é esta:
                o móvel parte de uma posição inicial e, com o tempo, sua posição vai mudando.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição atual} = \text{posição inicial} + \text{variação de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Toda a equação horária do espaço nada mais é do que a tradução matemática dessa frase.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">A variação da posição</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Se o móvel estava inicialmente numa posição e depois passou a ocupar outra,
                então houve uma mudança de posição. Essa mudança é dada por:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>

              <div className="mt-4 space-y-3 text-slate-700 leading-relaxed">
                <p>• <MathFormula formula="s_0" display={false} /> é a posição inicial;</p>
                <p>• <MathFormula formula="s" display={false} /> é a posição no instante considerado;</p>
                <p>• <MathFormula formula="\Delta s" display={false} /> mede quanto a posição mudou.</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">1. Partindo da definição de velocidade</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A definição de velocidade média é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                No MRU, a velocidade é constante. Portanto, a velocidade média coincide com a velocidade do movimento:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">2. Escrevendo cada termo com clareza</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Já sabemos que:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\Delta s = s - s_0" display={true} />
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\Delta t = t - t_0" display={true} />
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Em Cinemática, é muito comum escolher o instante inicial como origem dos tempos:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="t_0 = 0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Assim, o intervalo de tempo fica simplesmente:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Sigma className="w-5 h-5 text-blue-600" />
                3. Fazendo a dedução
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Substituindo <MathFormula formula="\Delta s = s - s_0" display={false} /> e
                <MathFormula formula="\Delta t = t" display={false} /> em
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={false} />, obtemos:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Multiplicando ambos os lados por <MathFormula formula="t" display={false} />:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="vt = s - s_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Isolando a posição <MathFormula formula="s" display={false} />:
              </p>

              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 flex flex-col items-center">
                <MathFormula formula="s = s_0 + vt" display={true} />
                <p className="text-sm text-blue-800 mt-4 font-medium">
                  Equação horária do espaço no MRU
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 Interpretação que importa</h4>

              <p className="text-slate-300 leading-relaxed mb-4">
                A expressão <MathFormula formula="s = s_0 + vt" display={false} /> deve ser lida assim:
              </p>

              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>• <MathFormula formula="s_0" display={false} /> indica onde o móvel começou;</p>
                <p>• <MathFormula formula="vt" display={false} /> mede quanto a posição mudou;</p>
                <p>• a posição atual é a soma dessas duas partes.</p>
              </div>

              <p className="text-slate-300 leading-relaxed mt-4">
                Se a velocidade for positiva, a posição cresce com o tempo.
                Se a velocidade for negativa, a posição diminui com o tempo.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Erro clássico
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Não confunda <MathFormula formula="s" display={false} /> com distância percorrida.
                A grandeza <MathFormula formula="s" display={false} /> representa posição.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== TERMO A TERMO ===================== */}
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
                  Posição do móvel no instante considerado.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s_0" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição inicial</h4>
                <p className="text-sm text-slate-600 text-center">
                  Posição do móvel no instante inicial.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="v" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Velocidade</h4>
                <p className="text-sm text-slate-600 text-center">
                  Taxa constante de variação da posição.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m/s</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="t" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Tempo</h4>
                <p className="text-sm text-slate-600 text-center">
                  Tempo transcorrido.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: s</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                O termo <MathFormula formula="s_0" display={false} /> diz onde o móvel começou.
                O termo <MathFormula formula="vt" display={false} /> diz quanto a posição variou
                desde o início. A soma desses dois termos fornece a posição atual.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== CLASSIFICAÇÕES ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Classificações do MRU</h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O MRU pode ser classificado pelo sinal da velocidade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
                <MathFormula formula="v > 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  A posição aumenta com o tempo.
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

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                “Para frente” e “para trás” dependem da orientação escolhida para a trajetória.
                Em Física, sinal não é enfeite.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== INTERPRETAÇÃO GRÁFICA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Interpretação Gráfica</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Gráfico posição × tempo
              </h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a função horária do MRU é uma função do primeiro grau:
              </p>
              <MathFormula formula="s = s_0 + vt" display={true} />
              <p className="text-slate-700 leading-relaxed mt-4">
                o gráfico de <MathFormula formula="s \times t" display={false} /> é uma reta.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3">Coeficiente angular</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Representa a velocidade <MathFormula formula="v" display={false} />.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-3">Coeficiente linear</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Representa a posição inicial <MathFormula formula="s_0" display={false} />.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Gráfico velocidade × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a velocidade é constante, o gráfico de
                <MathFormula formula="v \times t" display={false} /> é uma reta horizontal.
              </p>
              <MathFormula formula="v = \text{constante}" display={true} />
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 Propriedade importante</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                A área sob o gráfico <MathFormula formula="v \times t" display={false} />
                fornece a variação da posição:
              </p>
              <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
            </div>
          </div>
        </div>

        {/* ===================== ACELERAÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Aceleração no MRU</h2>

          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h4 className="font-bold text-orange-800 mb-3">Por que a aceleração é zero?</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                A aceleração mede a variação da velocidade no tempo. No MRU, a velocidade é constante.
              </p>
              <MathFormula formula="a = 0" display={true} />
              <p className="text-slate-700 leading-relaxed mt-4">
                Portanto, não existe aceleração. O móvel continua mudando de posição, mas não muda sua velocidade.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== CASOS DE PROVA ===================== */}
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
                Também envolve igualdade de posições, com atenção ao tamanho dos corpos.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h5 className="font-bold text-purple-800 mb-2">Partida com atraso</h5>
              <p className="text-sm text-slate-700">
                É preciso controlar bem o instante inicial de cada móvel.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
              <p className="text-sm text-slate-700">
                Misturar km/h e m/s é um jeito clássico de errar.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
            <MathFormula formula="1 \text{ m/s} = 3{,}6 \text{ km/h}" display={true} />
          </div>
        </div>

        {/* ===================== ARMADILHAS ===================== */}
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
              <li>• Esquecer de converter unidades.</li>
            </ul>
          </div>
        </div>

        {/* ===================== EXEMPLOS RESOLVIDOS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Leitura da função horária
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um móvel obedece à função
                  <MathFormula formula="s = 12 + 3t" display={false} />.
                  Determine a posição inicial, a velocidade e a posição no instante
                  <MathFormula formula="t = 5 \text{ s}" display={false} />.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">Comparando com a forma geral:</p>
                  <MathFormula formula="s = s_0 + vt" display={true} />
                  <MathFormula formula="s_0 = 12 \text{ m} \qquad ; \qquad v = 3 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">Calculando a posição em 5 s:</p>
                  <MathFormula formula="s = 12 + 3 \cdot 5 = 27 \text{ m}" display={true} />

                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <div className="font-bold text-green-900 text-sm">
                      Resposta: <MathFormula formula="s_0 = 12 \text{ m}" display={false} />,
                      <MathFormula formula="v = 3 \text{ m/s}" display={false} /> e
                      <MathFormula formula="s = 27 \text{ m}" display={false} />.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 — Encontro de dois móveis
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Dois móveis obedecem às funções
                  <MathFormula formula="s_A = 10 + 4t" display={false} /> e
                  <MathFormula formula="s_B = 70 - 2t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">No encontro:</p>
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="10 + 4t = 70 - 2t" display={true} />
                  <MathFormula formula="6t = 60 \qquad \Rightarrow \qquad t = 10 \text{ s}" display={true} />

                  <p className="font-bold text-slate-800">Substituindo em qualquer função:</p>
                  <MathFormula formula="s = 10 + 4 \cdot 10 = 50 \text{ m}" display={true} />

                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">
                      Resposta: encontro em <strong>10 s</strong>, na posição <strong>50 m</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 3 — Perseguição com atraso
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um carro A passa por um ponto com velocidade constante de
                  <MathFormula formula="72 \text{ km/h}" display={false} />.
                  Três minutos depois, um carro B passa pelo mesmo ponto, no mesmo sentido,
                  com velocidade constante de <MathFormula formula="90 \text{ km/h}" display={false} />.
                  Depois de quanto tempo, contado a partir da partida de B, ele alcança A?
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">Conversão das velocidades:</p>
                  <MathFormula formula="72 \text{ km/h} = 20 \text{ m/s} \qquad ; \qquad 90 \text{ km/h} = 25 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">Vantagem inicial de A em 3 min = 180 s:</p>
                  <MathFormula formula="\Delta s = 20 \cdot 180 = 3600 \text{ m}" display={true} />

                  <p className="font-bold text-slate-800">Velocidade relativa:</p>
                  <MathFormula formula="v_{rel} = 25 - 20 = 5 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">Tempo para alcançar:</p>
                  <MathFormula formula="t = \frac{3600}{5} = 720 \text{ s} = 12 \text{ min}" display={true} />

                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">
                      Resposta: o carro B alcança A <strong>12 minutos</strong> após sua partida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== FECHAMENTO ===================== */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Fechamento
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              O MRU é simples na forma, mas fundamental na formação. É nele que o aluno aprende
              a conectar movimento, equação, gráfico e interpretação física.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem entende MRU de verdade não sai só com uma fórmula decorada. Sai com uma forma
              de pensar o movimento. E isso vale mais do que qualquer substituição automática de números.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
