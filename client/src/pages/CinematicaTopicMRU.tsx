import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  Clock3,
  Route,
  Sigma,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  Target,
  Zap,
  Info,
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
            🚗 Movimento Retilíneo Uniforme (MRU)
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visão geral</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong>, ou <strong>MRU</strong>, é o movimento
                em que um corpo percorre uma <strong>trajetória retilínea</strong> com
                <strong> velocidade escalar constante</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Isso significa que, em intervalos de tempo iguais, o móvel realiza
                variações de posição iguais. Como a velocidade não muda, a aceleração escalar
                é nula.
              </p>
              <p className="text-slate-700 leading-relaxed">
                O MRU é um dos assuntos mais básicos da Cinemática, mas também um dos mais
                importantes, porque é aqui que se consolida a ideia de função horária,
                interpretação de sinais, leitura de gráficos e modelagem algébrica do movimento.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia central do MRU
              </h4>

              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p>A trajetória é reta.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p>A velocidade escalar permanece constante.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p>A posição varia linearmente com o tempo.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">4.</span>
                  <p>A aceleração escalar é igual a zero.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEXTO HISTÓRICO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📜 Contexto Histórico
          </h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              O primeiro modelo operacional da Cinemática
            </h3>

            <p className="text-slate-700 leading-relaxed mb-3">
              O estudo quantitativo do movimento ganhou força com Galileu, quando a Física
              começou a abandonar explicações puramente filosóficas e passou a descrever os
              fenômenos por meio de relações matemáticas.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              Nesse contexto, o MRU aparece como o modelo mais simples possível de movimento:
              um corpo que se desloca em linha reta sem alterar sua velocidade. Ele se torna
              importante não só por simplicidade, mas porque estabelece a base lógica da
              Cinemática escalar.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Depois, Newton mostraria que esse comportamento está ligado à ausência de força
              resultante, por meio do Princípio da Inércia. Mas na Cinemática o foco ainda é
              outro: <strong>descrever o movimento</strong>, não explicar sua causa.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="font-bold text-slate-800 text-sm">Fase antiga</p>
              <p className="text-xs text-slate-500 mb-2">pré-ciência moderna</p>
              <p className="text-xs text-slate-600">
                Movimento tratado de forma qualitativa e pouco precisa.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔭</div>
              <p className="font-bold text-slate-800 text-sm">Galileu</p>
              <p className="text-xs text-slate-500 mb-2">cinemática quantitativa</p>
              <p className="text-xs text-slate-600">
                Introduz a descrição matemática do movimento.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🍎</div>
              <p className="font-bold text-slate-800 text-sm">Newton</p>
              <p className="text-xs text-slate-500 mb-2">dinâmica</p>
              <p className="text-xs text-slate-600">
                Explica por que o MRU pode ocorrer.
              </p>
            </div>
          </div>
        </div>

        {/* DEFINIÇÕES PRECISAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🎯 Definições Precisas
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição formal</h4>
              <p className="text-slate-700 leading-relaxed">
                Um móvel realiza <strong>Movimento Retilíneo Uniforme</strong> quando se desloca
                ao longo de uma trajetória reta com <strong>velocidade escalar constante</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Route className="w-4 h-4" />
                  Trajetória
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Deve ser retilínea. Se houver curva, o movimento já não é retilíneo.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Velocidade
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  A velocidade escalar não varia com o tempo.
                </p>
                <div className="mt-3">
                  <MathFormula formula="v = \text{constante}" display={true} />
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Aceleração
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Como a velocidade é constante, a aceleração escalar é nula.
                </p>
                <div className="mt-3">
                  <MathFormula formula="a = 0" display={true} />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-slate-700 text-sm">
                <strong>Conclusão imediata:</strong> em tempos iguais, o móvel sofre deslocamentos iguais.
              </p>
            </div>
          </div>
        </div>

        {/* DEDUÇÃO MATEMÁTICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🧮 Dedução Matemática da Função Horária
          </h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A construção da equação do MRU começa pela definição de velocidade média:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              No MRU, como a velocidade é constante, a velocidade média coincide com a velocidade escalar:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Substituindo a variação de posição:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="\Delta s = s - s_0" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              E tomando o instante inicial como origem dos tempos:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="\Delta t = t" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Então:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Multiplicando ambos os lados por <MathFormula formula="t" display={false} />:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="vt = s - s_0" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Finalmente:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center">
              <MathFormula formula="s = s_0 + vt" display={true} />
              <p className="text-sm text-blue-800 mt-4 font-medium">
                Função horária do espaço no MRU
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 Interpretação imediata</h4>
              <p className="text-slate-300 leading-relaxed">
                A equação mostra que a posição varia linearmente com o tempo. Isso é a marca do MRU:
                uma variação uniforme da posição, sem mudança de velocidade.
              </p>
            </div>
          </div>
        </div>

        {/* TERMO A TERMO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🔍 Interpretação Termo a Termo
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="s = s_0 + vt" display={true} />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição final</h4>
                <p className="text-sm text-slate-600 text-center">
                  Posição do móvel no instante analisado.
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
                  Tempo decorrido desde o início do movimento.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: s</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                O termo <MathFormula formula="s_0" display={false} /> determina onde a reta do gráfico
                posição × tempo começa. Já o termo <MathFormula formula="v" display={false} /> mede
                a inclinação dessa reta, isto é, o quanto a posição varia a cada unidade de tempo.
              </p>
            </div>
          </div>
        </div>

        {/* CLASSIFICAÇÕES */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📈 Classificações do MRU
          </h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O MRU pode ser classificado de acordo com o sinal da velocidade:
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
                <MathFormula formula="v > 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca no mesmo sentido da orientação escolhida. Nesse caso,
                  a posição aumenta com o tempo.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3">Movimento Retrógrado</h4>
                <MathFormula formula="v < 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca em sentido contrário ao da orientação escolhida.
                  Nesse caso, a posição diminui com o tempo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERPRETAÇÃO GRÁFICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📊 Interpretação Gráfica
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Gráfico posição × tempo
              </h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a função horária é uma função do primeiro grau:
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
                  Corresponde à velocidade <MathFormula formula="v" display={false} />.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-3">Coeficiente linear</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Corresponde à posição inicial <MathFormula formula="s_0" display={false} />.
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

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Gráfico aceleração × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a aceleração escalar do MRU é nula:
              </p>
              <MathFormula formula="a = 0" display={true} />
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 Propriedade importante</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                A área sob o gráfico <MathFormula formula="v \times t" display={false} /> fornece o deslocamento:
              </p>
              <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
            </div>
          </div>
        </div>

        {/* CASOS ESPECIAIS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🧩 Casos Especiais Mais Cobrados
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-2">Encontro</h5>
                <p className="text-sm text-slate-700">
                  No instante do encontro, os móveis têm a mesma posição.
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
                  É essencial controlar corretamente o instante de início de cada móvel.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
                <p className="text-sm text-slate-700">
                  Erro clássico: usar km/h em uma conta que está toda em SI.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="1 \text{ m/s} = 3{,}6 \text{ km/h}" display={true} />
            </div>
          </div>
        </div>

        {/* ARMADILHAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Armadilhas e Erros Comuns
          </h2>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Onde mais se erra
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>• Confundir posição com distância percorrida.</li>
              <li>• Achar que velocidade negativa significa desaceleração.</li>
              <li>• Esquecer a orientação da trajetória.</li>
              <li>• Igualar velocidades em vez de igualar posições em problemas de encontro.</li>
              <li>• Não converter unidades antes de montar a conta.</li>
            </ul>
          </div>
        </div>

        {/* DICAS DE ELITE */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💡 Dicas de Elite
          </h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
            <h4 className="font-semibold text-blue-400 mb-4">Macetes que ajudam de verdade</h4>
            <div className="space-y-3 text-slate-300">
              <p>• Para encontro, escreva uma função horária para cada móvel e iguale as posições.</p>
              <p>• Para ultrapassagem, faça o mesmo, observando se há comprimento envolvido.</p>
              <p>• Sempre escolha uma orientação conveniente para a trajetória.</p>
              <p>• Padronize as unidades antes da conta, não depois.</p>
              <p>• Gráfico em reta no <MathFormula formula="s \times t" display={false} /> significa velocidade constante.</p>
            </div>
          </div>
        </div>

        {/* EXEMPLOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📝 Exercícios Resolvidos
          </h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Leitura da função horária
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um móvel obedece à função horária
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
                  <strong>Enunciado:</strong> Dois móveis A e B obedecem às funções
                  <MathFormula formula="s_A = 10 + 4t" display={false} /> e
                  <MathFormula formula="s_B = 70 - 2t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">No encontro:</p>
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="10 + 4t = 70 - 2t" display={true} />
                  <MathFormula formula="6t = 60 \qquad \Rightarrow \qquad t = 10 \text{ s}" display={true} />

                  <p className="font-bold text-slate-800">Substituindo em qualquer equação:</p>
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
                  <p className="font-bold text-slate-800">Convertendo as velocidades:</p>
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

        {/* FECHAMENTO */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock3 className="w-6 h-6" />
              Fechamento
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              O MRU é o primeiro modelo forte da Cinemática escalar. Ele ensina a relacionar
              posição, tempo e velocidade de forma organizada e matemática.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem domina MRU de verdade entende função horária, sinal da velocidade,
              leitura gráfica e lógica de encontros. Parece básico, mas é aqui que muita
              gente tropeça. Física tem esse talento curioso de humilhar quem subestima o simples.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
