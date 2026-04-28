import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  BookOpen,
  Sigma,
  Info,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
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
        {/* INTRODUÇÃO DO TÓPICO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🚗 Movimento Retilíneo Uniforme (MRU)
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                O que é, de fato, o MRU?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong> é o movimento em que um móvel
                percorre uma <strong>trajetória retilínea</strong> com
                <strong> velocidade escalar constante</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Essa definição parece curta, mas ela já contém duas ideias extremamente fortes.
                A primeira é geométrica: a trajetória é uma reta. A segunda é física: a velocidade
                não muda com o tempo. Juntas, essas duas condições fazem com que a posição varie
                de modo linear.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Dizer que o movimento é uniforme significa dizer que o móvel realiza
                <strong> iguais variações de posição em iguais intervalos de tempo</strong>.
                Essa é a ideia central. A fórmula vem depois.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                O ponto pedagógico mais importante
              </h4>

              <div className="space-y-3 text-slate-700">
                <p>
                  No MRU, a Física quer responder a uma pergunta muito simples:
                  <strong> como a posição muda com o tempo quando o ritmo do movimento é constante?</strong>
                </p>
                <p>
                  A resposta para essa pergunta é a equação horária do espaço.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EQUAÇÃO HORÁRIA DO ESPAÇO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🧮 Equação Horária do Espaço
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Antes da fórmula: a ideia física que manda em tudo
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Em um MRU, o móvel começa em uma posição inicial e continua se deslocando com
                velocidade constante. Portanto, sua posição em um instante qualquer deve depender
                de duas coisas:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>
                  • de <strong>onde ele começou</strong>;
                </p>
                <p>
                  • de <strong>quanto sua posição mudou ao longo do tempo</strong>.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Então, antes de qualquer conta, a estrutura física da situação já é esta:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição atual} = \text{posição inicial} + \text{variação de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Toda a dedução da equação horária consiste em transformar essa ideia em linguagem matemática.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                O que a equação horária faz?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço é a expressão que permite descobrir a posição do móvel
                em qualquer instante.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Ou seja, se alguém disser quanto tempo se passou, a equação consegue dizer onde o
                móvel está. E se alguém disser onde o móvel está, ela pode até ajudar a descobrir
                quanto tempo passou. Ela é a ponte entre posição e tempo.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Passo 1: começar pela definição de velocidade
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A definição geral de velocidade média é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Essa expressão quer dizer que a velocidade mede quanto a posição varia por unidade de tempo.
                É a taxa de variação da posição.
              </p>

              <p className="text-slate-700 leading-relaxed">
                No MRU, a velocidade não muda. Então, em qualquer intervalo de tempo,
                a velocidade média coincide com a velocidade escalar do movimento:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                Passo 2: reescrever o deslocamento de modo explícito
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A variação de posição, ou deslocamento escalar, é dada pela diferença entre a posição final
                e a posição inicial:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Aqui é fundamental entender o significado dos símbolos:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>
                  • <strong><MathFormula formula="s" display={false} /></strong> é a posição do móvel
                  em um instante qualquer;
                </p>
                <p>
                  • <strong><MathFormula formula="s_0" display={false} /></strong> é a posição inicial,
                  isto é, a posição no instante em que começamos a analisar o movimento.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Portanto, <MathFormula formula="s - s_0" display={false} /> mede o quanto a posição mudou
                desde o início.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                Passo 3: tratar o intervalo de tempo com clareza
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                O intervalo de tempo, em princípio, seria escrito como:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t - t_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Mas, em Cinemática, é muito comum escolher o instante inicial como origem dos tempos,
                isto é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="t_0 = 0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Fazendo isso, a expressão do intervalo de tempo fica:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Essa simplificação não é um truque. É apenas uma escolha conveniente de referência temporal.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Sigma className="w-5 h-5 text-blue-600" />
                Passo 4: substituir tudo e construir a equação
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Partimos da relação:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Agora substituímos:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\Delta s = s - s_0" display={true} />
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\Delta t = t" display={true} />
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Então:
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
                Agora isolamos a posição <MathFormula formula="s" display={false} />:
              </p>

              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 flex flex-col items-center">
                <MathFormula formula="s = s_0 + vt" display={true} />
                <p className="text-sm text-blue-800 mt-4 font-medium">
                  Equação horária do espaço no MRU
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">
                💡 Agora vem a parte que quase ninguém explica direito
              </h4>

              <p className="text-slate-300 leading-relaxed mb-4">
                A expressão
                <MathFormula formula="s = s_0 + vt" display={false} />
                tem uma interpretação física muito clara:
              </p>

              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>
                  • <strong><MathFormula formula="s_0" display={false} /></strong> diz de onde o móvel partiu;
                </p>
                <p>
                  • <strong><MathFormula formula="vt" display={false} /></strong> mede quanto a posição mudou
                  ao longo do tempo;
                </p>
                <p>
                  • a posição atual é a soma da posição inicial com essa variação.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mt-4">
                Então o termo <MathFormula formula="vt" display={false} /> não é um enfeite algébrico.
                Ele representa o deslocamento produzido pelo movimento uniforme.
              </p>

              <p className="text-slate-300 leading-relaxed mt-4">
                Se <MathFormula formula="v > 0" display={false} />, o móvel avança no sentido da orientação
                e a posição cresce com o tempo. Se <MathFormula formula="v < 0" display={false} />,
                a posição diminui com o tempo. O sinal da velocidade tem significado físico,
                não apenas matemático.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Como pensar numa questão
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Sempre que aparecer a equação
                <MathFormula formula="s = s_0 + vt" display={false} />,
                faça mentalmente esta leitura:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• onde o móvel começou?</p>
                <p>• com que velocidade ele está se deslocando?</p>
                <p>• quanto tempo passou?</p>
                <p>• logo, em que posição ele estará?</p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Esse raciocínio é muito melhor do que decorar a fórmula mecanicamente,
                porque te obriga a enxergar o movimento, e não apenas a manipular símbolos.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Armadilha clássica
              </h4>

              <p className="text-slate-700 text-sm leading-relaxed">
                Não confunda <MathFormula formula="s" display={false} /> com distância percorrida.
                <MathFormula formula="s" display={false} /> representa <strong>posição</strong>.
                O móvel pode estar na posição 50 m sem ter necessariamente percorrido 50 m.
                Posição e distância percorrida não são a mesma grandeza.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Conclusão desta parte
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço no MRU é:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Ela mostra que a posição do móvel varia linearmente com o tempo,
                porque o movimento acontece com velocidade constante.
              </p>
            </div>
          </div>
        </div>

        {/* FECHAMENTO TEMPORÁRIO */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Fechamento desta etapa
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              Até aqui, o mais importante é ter entendido que a equação horária do espaço
              não é uma fórmula decorativa. Ela é a tradução matemática da ideia de que,
              em um MRU, a posição muda com o tempo em ritmo constante.
            </p>
            <p className="text-blue-100 leading-relaxed">
              A próxima continuação natural é a interpretação gráfica dessa equação,
              porque uma função do primeiro grau pede imediatamente uma leitura geométrica no gráfico.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
