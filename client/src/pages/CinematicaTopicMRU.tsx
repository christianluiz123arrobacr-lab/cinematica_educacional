import { Link } from "wouter";
import {
  ArrowLeft,
  Activity,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Info,
  Target,
  Zap,
  BookOpen,
  Calculator,
  BarChart3,
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
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Movimento Retilíneo Uniforme — MRU</p>
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
                O <strong>Movimento Retilíneo Uniforme</strong> é o modelo mais simples da Cinemática.
                Nele, um móvel se desloca em uma <strong>trajetória reta</strong> com
                <strong> velocidade constante</strong> ao longo do tempo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Isso significa que o móvel percorre <strong>distâncias iguais em intervalos de tempo iguais</strong>.
                Como a velocidade não muda, a aceleração é nula. Apesar de parecer um caso simples,
                ele é a base para entender função horária, leitura de gráficos, encontros, ultrapassagens
                e boa parte da lógica da Cinemática.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia Física Central
              </h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p>
                    A trajetória é uma reta, então o movimento ocorre em uma única direção geométrica.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p>
                    A velocidade escalar é constante, então o movimento não "acelera" nem "desacelera".
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p>
                    A posição varia linearmente com o tempo, o que torna o MRU um movimento descrito por
                    uma função do primeiro grau.
                  </p>
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
              Do movimento descrito ao movimento explicado
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Durante muito tempo, o estudo do movimento esteve misturado com interpretações filosóficas
              pouco rigorosas. A mudança de chave começou com <strong>Galileu Galilei</strong>, que passou
              a tratar o movimento de forma quantitativa, relacionando posição e tempo com linguagem matemática.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              O MRU nasce justamente desse esforço de descrever o movimento da forma mais simples possível:
              um corpo que continua se movendo sem alterar sua velocidade. Mais tarde, <strong>Newton</strong>
              explicaria, por meio do Princípio da Inércia, por que um corpo pode manter seu estado de
              repouso ou de movimento retilíneo uniforme na ausência de força resultante.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Assim, o MRU não é só uma fórmula decorada. Ele é a tradução matemática mais básica da
              ideia de movimento sem alteração de velocidade.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="font-bold text-slate-800 text-sm">Aristóteles</p>
              <p className="text-xs text-slate-500 mb-2">Antiguidade</p>
              <p className="text-xs text-slate-600">Visão qualitativa e absoluta do movimento.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔭</div>
              <p className="font-bold text-slate-800 text-sm">Galileu</p>
              <p className="text-xs text-slate-500 mb-2">1564–1642</p>
              <p className="text-xs text-slate-600">Descrição matemática do movimento e noção de relatividade.</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🍎</div>
              <p className="font-bold text-slate-800 text-sm">Newton</p>
              <p className="text-xs text-slate-500 mb-2">1643–1727</p>
              <p className="text-xs text-slate-600">Explica o MRU com a Primeira Lei de Newton.</p>
            </div>
          </div>
        </div>

        {/* ===================== DEFINIÇÕES PRECISAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Definições Precisas</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição formal</h4>
              <p className="text-slate-700 leading-relaxed">
                Um móvel realiza <strong>Movimento Retilíneo Uniforme</strong> quando se desloca ao longo
                de uma reta com <strong>velocidade escalar constante</strong> e, consequentemente,
                <strong> aceleração nula</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
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
                  A velocidade escalar não muda com o tempo.
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
                  Como a velocidade não varia, a aceleração é nula.
                </p>
                <div className="mt-3">
                  <MathFormula formula="a = 0" display={true} />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-slate-700 text-sm">
                <strong>Consequência imediata:</strong> se a velocidade é constante, o móvel percorre
                deslocamentos iguais em tempos iguais.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== DEDUÇÃO MATEMÁTICA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧮 Deduções Matemáticas</h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A dedução da função horária do MRU começa pela definição de velocidade média:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              No MRU, como a velocidade é constante, a velocidade média coincide com a velocidade
              do movimento:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Escrevendo o deslocamento em termos da posição inicial e final:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="\Delta s = s - s_0" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              E considerando o instante inicial como <MathFormula formula="t_0 = 0" display={false} />,
              temos <MathFormula formula="\Delta t = t" display={false} />. Logo:
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
              Isolando a posição:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center">
              <MathFormula formula="s = s_0 + vt" display={true} />
              <p className="text-sm text-blue-800 mt-4 font-medium">
                Função horária do espaço no MRU
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 O Pulo do Gato</h4>
              <p className="text-slate-300 leading-relaxed">
                Essa equação mostra que a posição é uma função do primeiro grau do tempo.
                Por isso, o gráfico posição × tempo é uma reta. Isso é uma daquelas coisas simples
                que prova gosta de transformar em armadilha.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== TERMO A TERMO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔍 Termo a termo</h2>

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
                <p className="text-sm text-slate-600 text-center">Posição no instante analisado.</p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s_0" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição inicial</h4>
                <p className="text-sm text-slate-600 text-center">Posição no instante inicial.</p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="v" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Velocidade</h4>
                <p className="text-sm text-slate-600 text-center">Taxa constante de variação da posição.</p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m/s</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="t" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Tempo</h4>
                <p className="text-sm text-slate-600 text-center">Tempo decorrido desde o início.</p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: s</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CLASSIFICAÇÕES ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Classificações do MRU</h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O sinal da velocidade determina o sentido do movimento em relação à orientação da trajetória.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
                <MathFormula formula="v > 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca no mesmo sentido da orientação escolhida.
                  Nesse caso, os valores da posição crescem com o tempo.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3">Movimento Retrógrado</h4>
                <MathFormula formula="v < 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca em sentido oposto ao da orientação escolhida.
                  Nesse caso, os valores da posição diminuem com o tempo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== INTERPRETAÇÃO GRÁFICA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Interpretação Gráfica</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Gráfico posição × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a função horária do MRU é uma função do primeiro grau:
              </p>
              <MathFormula formula="s = s_0 + vt" display={true} />
              <p className="text-slate-700 leading-relaxed mt-4">
                o gráfico de <MathFormula formula="s \times t" display={false} /> é sempre uma reta.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3">Coeficiente angular</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O coeficiente angular da reta representa a velocidade
                  <MathFormula formula="v" display={false} />.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-3">Coeficiente linear</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O coeficiente linear representa a posição inicial
                  <MathFormula formula="s_0" display={false} />.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 Área sob o gráfico v × t</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                No MRU, o gráfico <MathFormula formula="v \times t" display={false} /> é uma reta horizontal,
                porque a velocidade é constante. A área sob esse gráfico fornece o deslocamento:
              </p>
              <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
            </div>
          </div>
        </div>

        {/* ===================== CASOS ESPECIAIS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧩 Casos Especiais que mais caem</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-2">Encontro</h5>
                <p className="text-sm text-slate-700">No instante do encontro, os móveis ocupam a mesma posição.</p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-2">Ultrapassagem</h5>
                <p className="text-sm text-slate-700">Também exige igualdade de posições, mas com atenção ao comprimento dos corpos quando houver.</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h5 className="font-bold text-purple-800 mb-2">Partida com atraso</h5>
                <p className="text-sm text-slate-700">É preciso considerar corretamente o instante em que cada móvel começa a se mover.</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
                <p className="text-sm text-slate-700">Misturar km/h com m/s é uma das formas mais idiotas e mais frequentes de errar questão.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="1 \text{ m/s} = 3{,}6 \text{ km/h}" display={true} />
            </div>
          </div>
        </div>

        {/* ===================== ARMADILHAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ Armadilhas e Erros Comuns</h2>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Onde o aluno mais escorrega
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>• Confundir posição com distância percorrida.</li>
              <li>• Achar que velocidade negativa significa desaceleração.</li>
              <li>• Misturar unidades sem converter.</li>
              <li>• Igualar velocidades quando o problema exigia igualar posições.</li>
              <li>• Ignorar a orientação da trajetória e errar o sinal da velocidade.</li>
            </ul>
          </div>
        </div>

        {/* ===================== DICAS DE ELITE ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Dicas de Elite</h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
            <h4 className="font-semibold text-blue-400 mb-4">Macetes que realmente ajudam</h4>
            <div className="space-y-3 text-slate-300">
              <p>• Em encontro, escreva uma função horária para cada móvel e iguale as posições.</p>
              <p>• Em ultrapassagem, faça o mesmo, mas veja se há comprimento envolvido.</p>
              <p>• Sempre escolha a origem e a orientação da trajetória de forma inteligente.</p>
              <p>• Se o enunciado estiver confuso, monte primeiro a história física e só depois a conta.</p>
              <p>• Gráfico em reta no <MathFormula formula="s \times t" display={false} /> significa velocidade constante.</p>
            </div>
          </div>
        </div>

        {/* ===================== EXEMPLOS RESOLVIDOS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos</h2>

          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Leitura direta da função horária
              </h4>
              <div className="space-y-3 text-slate-700">
                <div className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um móvel obedece à função horária
                  <MathFormula formula="s = 10 + 4t" display={false} />.
                  Determine a posição inicial, a velocidade e a posição no instante
                  <MathFormula formula="t = 5 \text{ s}" display={false} />.
                </div>
                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800 mb-2">Comparando com a forma geral:</p>
                  <MathFormula formula="s = s_0 + vt" display={true} />
                  <MathFormula formula="s_0 = 10 \text{ m} \qquad ; \qquad v = 4 \text{ m/s}" display={true} />
                  <p className="font-bold text-slate-800 mb-2">Calculando a posição em 5 s:</p>
                  <MathFormula formula="s = 10 + 4 \cdot 5 = 30 \text{ m}" display={true} />
                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <div className="font-bold text-green-900 text-sm">
                      Resposta: <MathFormula formula="s_0 = 10 \text{ m}" display={false} />,
                      <MathFormula formula="v = 4 \text{ m/s}" display={false} /> e
                      <MathFormula formula="s = 30 \text{ m}" display={false} />.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 — Encontro entre dois móveis
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Dois móveis A e B percorrem a mesma trajetória e obedecem às funções:
                  <MathFormula formula="s_A = 20 + 5t" display={false} /> e
                  <MathFormula formula="s_B = 80 - 3t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800 mb-2">No encontro:</p>
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="20 + 5t = 80 - 3t" display={true} />
                  <MathFormula formula="8t = 60 \qquad \Rightarrow \qquad t = 7{,}5 \text{ s}" display={true} />
                  <p className="font-bold text-slate-800 mb-2">Substituindo em qualquer das funções:</p>
                  <MathFormula formula="s = 20 + 5 \cdot 7{,}5 = 57{,}5 \text{ m}" display={true} />
                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">
                      Resposta: encontro em <strong>7,5 s</strong>, na posição <strong>57,5 m</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 3 — Perseguição com partida atrasada
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um carro A passa por um ponto com velocidade constante de
                  <MathFormula formula="72 \text{ km/h}" display={false} />.
                  Quatro minutos depois, um carro B passa pelo mesmo ponto, no mesmo sentido,
                  com velocidade constante de <MathFormula formula="90 \text{ km/h}" display={false} />.
                  Depois de quanto tempo, contado a partir da partida de B, ele alcança A?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800 mb-2">Conversão das velocidades:</p>
                  <MathFormula formula="72 \text{ km/h} = 20 \text{ m/s} \qquad ; \qquad 90 \text{ km/h} = 25 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800 mb-2">Vantagem inicial de A em 4 minutos:</p>
                  <MathFormula formula="\Delta s = 20 \cdot 240 = 4800 \text{ m}" display={true} />

                  <p className="font-bold text-slate-800 mb-2">Velocidade relativa de B em relação a A:</p>
                  <MathFormula formula="v_{rel} = 25 - 20 = 5 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800 mb-2">Tempo para alcançar:</p>
                  <MathFormula formula="t = \frac{4800}{5} = 960 \text{ s} = 16 \text{ min}" display={true} />

                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">
                      Resposta: o carro B alcança o carro A <strong>16 minutos</strong> após sua partida.
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
              O MRU é o primeiro grande modelo operacional da Cinemática. Nele, o aluno aprende
              a transformar uma descrição física em uma equação matemática simples, clara e poderosa.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem domina MRU de verdade não domina só “uma fórmula”. Domina a lógica de posição,
              tempo, sinal, gráfico e encontro. E isso já separa bastante gente em prova séria.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
