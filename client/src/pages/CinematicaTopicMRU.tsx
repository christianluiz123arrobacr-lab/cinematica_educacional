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
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function CinematicaTopicMRU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                O que realmente significa MRU
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong> é o movimento em que um corpo
                percorre uma <strong>trajetória reta</strong> com <strong>velocidade escalar constante</strong>.
                Dizer isso de forma rápida é fácil. O importante é entender o que essa frase quer dizer fisicamente.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Se a velocidade é constante, então o móvel não está “ganhando” nem “perdendo” rapidez.
                Ele mantém sempre a mesma taxa de variação da posição. Em outras palavras:
                em tempos iguais, ele realiza deslocamentos iguais.
              </p>
              <p className="text-slate-700 leading-relaxed">
                O MRU é o primeiro modelo forte da Cinemática porque ensina a conectar três coisas
                que vão aparecer o tempo todo em Física: <strong>posição</strong>, <strong>tempo</strong>
                e <strong>taxa de variação</strong>. Se isso fica mal entendido aqui, o resto da Cinemática
                vira um festival de conta sem compreensão.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                A ideia pedagógica mais importante
              </h4>

              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p>
                    O MRU não é “só uma fórmula”. Ele é um <strong>modelo</strong> para representar um movimento.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p>
                    A fórmula vem <strong>depois</strong> da ideia física, não antes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p>
                    Quando o aluno entende por que a posição varia linearmente com o tempo,
                    ele para de decorar e começa a enxergar o problema.
                  </p>
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
              O movimento descrito antes de ser explicado
            </h3>

            <p className="text-slate-700 leading-relaxed mb-3">
              A Física moderna cresceu quando o estudo do movimento deixou de ser apenas filosófico
              e passou a ser quantitativo. Esse salto foi decisivo. Em vez de apenas perguntar
              “o que é o movimento?”, passou-se também a perguntar “como a posição muda com o tempo?”.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              O MRU é uma das primeiras respostas organizadas para essa pergunta. Ele representa o caso
              mais simples possível: um móvel que continua se deslocando sem alterar sua velocidade.
              É por isso que esse assunto vem tão cedo na Cinemática. Ele serve de base para todo o resto.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Mais tarde, a Dinâmica mostrará por que esse tipo de movimento pode ocorrer. Mas aqui,
              na Cinemática, a meta ainda é outra: <strong>descrever o movimento com precisão</strong>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="font-bold text-slate-800 text-sm">Fase antiga</p>
              <p className="text-xs text-slate-500 mb-2">qualitativa</p>
              <p className="text-xs text-slate-600">
                Movimento descrito com pouca matemática e muita generalidade.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔭</div>
              <p className="font-bold text-slate-800 text-sm">Galileu</p>
              <p className="text-xs text-slate-500 mb-2">quantificação</p>
              <p className="text-xs text-slate-600">
                Organiza a descrição matemática do movimento.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🍎</div>
              <p className="font-bold text-slate-800 text-sm">Newton</p>
              <p className="text-xs text-slate-500 mb-2">explicação</p>
              <p className="text-xs text-slate-600">
                Mostra, pela Inércia, por que o MRU pode se manter.
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
                Um móvel realiza <strong>Movimento Retilíneo Uniforme</strong> quando se move
                em uma trajetória reta com <strong>velocidade escalar constante e diferente de zero</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Route className="w-4 h-4" />
                  Trajetória
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Deve ser retilínea. Se a trajetória for curva, já não é movimento retilíneo.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Velocidade
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  A velocidade escalar permanece constante ao longo do tempo.
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
                  Como não há variação da velocidade, a aceleração escalar é nula.
                </p>
                <div className="mt-3">
                  <MathFormula formula="a = 0" display={true} />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-slate-700 text-sm">
                <strong>Leitura física correta:</strong> dizer que a velocidade é constante
                equivale a dizer que o móvel sofre variações de posição iguais em tempos iguais.
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
              Vamos construir a equação do MRU sem fazer a fórmula “cair do céu”.
              O ponto de partida é a definição de velocidade média:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              No MRU, a velocidade não varia. Por isso, a velocidade média em qualquer intervalo
              coincide com a velocidade do próprio movimento:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Agora escrevemos o deslocamento de forma explícita:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="\Delta s = s - s_0" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Se tomarmos o instante inicial como a origem dos tempos, então:
            </p>

            <div className="bg-slate-50 p-4 rounded-xl flex justify-center overflow-x-auto">
              <MathFormula formula="\Delta t = t" display={true} />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Substituindo essas expressões na fórmula da velocidade:
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
              Finalmente, isolamos a posição:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center">
              <MathFormula formula="s = s_0 + vt" display={true} />
              <p className="text-sm text-blue-800 mt-4 font-medium">
                Função horária do espaço no MRU
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 Interpretação profunda</h4>
              <p className="text-slate-300 leading-relaxed">
                Essa equação diz que a posição atual é igual à posição inicial somada ao quanto o móvel
                “andou” ao longo do tempo. O termo <MathFormula formula="vt" display={false} />
                representa exatamente esse ganho ou perda de posição, dependendo do sinal da velocidade.
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
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição</h4>
                <p className="text-sm text-slate-600 text-center">
                  Onde o móvel está no instante considerado.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: m</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s_0" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição inicial</h4>
                <p className="text-sm text-slate-600 text-center">
                  Onde o móvel estava no início da análise.
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
                  Tempo transcorrido desde o instante inicial.
                </p>
                <p className="text-xs text-slate-500 text-center mt-2">SI: s</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed mb-3">
                O termo <MathFormula formula="s_0" display={false} /> fixa o ponto de partida do movimento.
                Já o termo <MathFormula formula="vt" display={false} /> mede quanto a posição mudou ao longo do tempo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Se <MathFormula formula="v > 0" display={false} />, esse termo soma posição.
                Se <MathFormula formula="v < 0" display={false} />, ele reduz posição.
                Então o sinal da velocidade não é um detalhe algébrico. Ele tem significado físico direto.
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
              A classificação mais importante do MRU depende do sinal da velocidade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
                <MathFormula formula="v > 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca no mesmo sentido da orientação da trajetória.
                  Nesse caso, os valores de posição crescem com o tempo.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3">Movimento Retrógrado</h4>
                <MathFormula formula="v < 0" display={true} />
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  O móvel se desloca em sentido oposto ao da orientação escolhida.
                  Nesse caso, os valores de posição diminuem com o tempo.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Repare que “para frente” e “para trás” não são conceitos absolutos.
                Tudo depende de como a trajetória foi orientada. É por isso que problema de Cinemática
                costuma punir quem ignora sinal como se fosse enfeite.
              </p>
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
                Como a função do MRU é:
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
                  Quanto maior o módulo da velocidade, mais inclinada é a reta.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-3">Coeficiente linear</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Representa a posição inicial <MathFormula formula="s_0" display={false} />.
                  É o valor da posição quando <MathFormula formula="t = 0" display={false} />.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Gráfico velocidade × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como a velocidade é constante no MRU, o gráfico de
                <MathFormula formula="v \times t" display={false} /> é uma reta horizontal.
              </p>
              <MathFormula formula="v = \text{constante}" display={true} />
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Gráfico aceleração × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Como não há variação de velocidade:
              </p>
              <MathFormula formula="a = 0" display={true} />
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 Propriedade essencial</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                A área sob o gráfico <MathFormula formula="v \times t" display={false} /> entre dois instantes
                fornece a variação de espaço:
              </p>
              <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
              <p className="text-slate-300 leading-relaxed mt-4">
                Isso é extremamente útil, porque conecta representação gráfica e interpretação física.
              </p>
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
                  No instante do encontro, os móveis ocupam a mesma posição.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h5 className="font-bold text-indigo-800 mb-2">Ultrapassagem</h5>
                <p className="text-sm text-slate-700">
                  É uma situação de igualdade de posição, com atenção ao comprimento dos corpos quando houver.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h5 className="font-bold text-purple-800 mb-2">Partida com atraso</h5>
                <p className="text-sm text-slate-700">
                  O instante inicial de cada móvel precisa ser controlado com muito cuidado.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
                <p className="text-sm text-slate-700">
                  Um problema simples vira desastre se você mistura km/h com m/s sem converter.
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
              Onde mais se tropeça
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>• Confundir posição com distância percorrida.</li>
              <li>• Achar que velocidade negativa significa desaceleração.</li>
              <li>• Ignorar a orientação da trajetória e errar o sinal.</li>
              <li>• Igualar velocidades quando o problema pedia igualdade de posições.</li>
              <li>• Esquecer de converter unidades.</li>
            </ul>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              O erro mais clássico de todos é este: o aluno vê dois móveis e sai substituindo
              fórmula sem montar a história física. Aí produz uma conta bonita com uma interpretação errada.
              E a Física não corrige intenção, corrige resultado.
            </p>
          </div>
        </div>

        {/* DICAS DE ELITE */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💡 Dicas de Elite
          </h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
            <h4 className="font-semibold text-blue-400 mb-4">Estratégia de resolução</h4>
            <div className="space-y-3 text-slate-300">
              <p>• Primeiro escolha a trajetória e a orientação.</p>
              <p>• Depois monte a função horária de cada móvel.</p>
              <p>• Só então aplique a condição física: encontro, ultrapassagem, atraso etc.</p>
              <p>• Nunca deixe unidade para “arrumar no fim”.</p>
              <p>• Sempre interprete o sinal da velocidade antes da conta.</p>
            </div>
          </div>
        </div>

        {/* EXERCÍCIOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📝 Exercícios Resolvidos
          </h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Lendo a função horária com interpretação
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um móvel obedece à função
                  <MathFormula formula="s = 12 + 3t" display={false} />.
                  Determine a posição inicial, a velocidade e a posição no instante
                  <MathFormula formula="t = 5 \text{ s}" display={false} />.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">
                    A forma geral do MRU é:
                  </p>
                  <MathFormula formula="s = s_0 + vt" display={true} />

                  <p className="text-sm text-slate-700 leading-relaxed">
                    Comparando termo a termo, vemos que a posição inicial é o número isolado
                    e a velocidade é o coeficiente de <MathFormula formula="t" display={false} />.
                  </p>

                  <MathFormula formula="s_0 = 12 \text{ m} \qquad ; \qquad v = 3 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">
                    Agora calculamos a posição em 5 s:
                  </p>
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
                Exemplo 2 — Encontro com leitura física correta
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Dois móveis obedecem às funções
                  <MathFormula formula="s_A = 10 + 4t" display={false} /> e
                  <MathFormula formula="s_B = 70 - 2t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>

                <div className="bg-white rounded p-4 space-y-3">
                  <p className="font-bold text-slate-800">
                    No encontro, os móveis ocupam a mesma posição. Então:
                  </p>
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="10 + 4t = 70 - 2t" display={true} />

                  <p className="text-sm text-slate-700 leading-relaxed">
                    Reorganizando:
                  </p>
                  <MathFormula formula="6t = 60 \qquad \Rightarrow \qquad t = 10 \text{ s}" display={true} />

                  <p className="font-bold text-slate-800">
                    Agora substituímos o tempo em qualquer função:
                  </p>
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
                Exemplo 3 — Perseguição com atraso, do jeito certo
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
                  <p className="font-bold text-slate-800">Passo 1: converter unidades</p>
                  <MathFormula formula="72 \text{ km/h} = 20 \text{ m/s} \qquad ; \qquad 90 \text{ km/h} = 25 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">Passo 2: calcular a vantagem inicial de A</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Em 3 minutos, isto é, 180 s, o carro A já percorreu:
                  </p>
                  <MathFormula formula="\Delta s = 20 \cdot 180 = 3600 \text{ m}" display={true} />

                  <p className="font-bold text-slate-800">Passo 3: calcular a velocidade relativa</p>
                  <MathFormula formula="v_{rel} = 25 - 20 = 5 \text{ m/s}" display={true} />

                  <p className="font-bold text-slate-800">Passo 4: calcular o tempo para eliminar a vantagem</p>
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
              O MRU é simples na aparência, mas profundo na função pedagógica. É nele que a Cinemática
              ensina o aluno a ligar movimento real, equação, gráfico e interpretação física.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem entende MRU de verdade não sai só com uma fórmula. Sai com uma forma de pensar.
              E isso vale muito mais do que decorar meia dúzia de símbolos e torcer para a questão ser boazinha.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
