import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  BookOpen,
  Info,
  Calculator,
  Sigma,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                A ideia central do MRU
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong> é o movimento em que um móvel
                percorre uma trajetória retilínea com <strong>velocidade constante</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Dizer que a velocidade é constante significa dizer que a posição do móvel varia
                sempre no mesmo ritmo. Em tempos iguais, o móvel sofre variações de posição iguais.
              </p>

              <p className="text-slate-700 leading-relaxed">
                É dessa regularidade que nasce a necessidade de uma equação que relacione
                <strong> posição</strong>, <strong>tempo</strong> e <strong>velocidade</strong>.
                Essa equação é a equação horária do espaço.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                O que queremos descobrir nesta parte?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-3">
                Queremos construir uma expressão que permita responder à seguinte pergunta:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{qual será a posição do móvel após certo tempo?}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                A Física não quer uma fórmula por enfeite. Ela quer uma forma rigorosa de prever
                a posição do móvel em qualquer instante.
              </p>
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
                Antes da fórmula: a construção da ideia
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço não deve ser tratada como uma fórmula que surgiu do nada.
                Ela é a tradução matemática de uma ideia física extremamente simples e importante.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Se um móvel parte de uma posição inicial e continua se movendo com velocidade constante,
                então sua posição em um instante qualquer será dada por:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição no instante considerado} = \text{posição inicial} + \text{mudança de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Toda a dedução da equação horária consiste apenas em escrever essa frase com símbolos matemáticos.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">
                O que precisa aparecer na equação?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Para descrever a posição do móvel ao longo do tempo, a equação precisa envolver:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• a posição inicial do móvel;</p>
                <p>• o tempo transcorrido;</p>
                <p>• a velocidade do movimento.</p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Isso já nos mostra, intuitivamente, que a posição final depende do ponto de partida
                e de quanto o móvel conseguiu variar sua posição ao longo do tempo.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                O significado de variação de posição
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Se um móvel estava inicialmente em uma posição e depois passou a ocupar outra,
                então houve uma mudança de posição. Essa mudança recebe o nome de
                <strong> variação de posição</strong> ou <strong>deslocamento escalar</strong>.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>

              <div className="mt-4 space-y-3 text-slate-700 leading-relaxed">
                <p>
                  • <MathFormula formula="s_0" display={false} /> é a posição inicial;
                </p>
                <p>
                  • <MathFormula formula="s" display={false} /> é a posição num instante qualquer;
                </p>
                <p>
                  • logo, <MathFormula formula="\Delta s" display={false} /> mede quanto a posição mudou.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Aqui vale uma atenção importante: isso não é ainda distância percorrida.
                Estamos falando de <strong>posição</strong> e de <strong>variação de posição</strong>.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                1. O ponto de partida da dedução
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A definição geral de velocidade média é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Essa expressão diz que a velocidade média mede quanto a posição varia por unidade de tempo.
                Ou seja, ela expressa o “ritmo” de mudança da posição.
              </p>

              <p className="text-slate-700 leading-relaxed">
                No MRU, como a velocidade não muda ao longo do tempo, a velocidade média coincide com a
                velocidade do movimento:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                2. Reescrevendo cada pedaço da fórmula
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Já sabemos que a variação de posição é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Para o intervalo de tempo, a forma geral seria:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t - t_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Em Cinemática, é muito comum escolher o instante inicial como origem dos tempos, isto é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="t_0 = 0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Fazendo isso:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Essa escolha não muda a Física. Ela apenas simplifica a escrita e torna a interpretação mais direta.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Sigma className="w-5 h-5 text-blue-600" />
                3. A dedução propriamente dita
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Partimos da expressão:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Substituindo
                <MathFormula formula="\Delta s = s - s_0" display={false} /> e
                <MathFormula formula="\Delta t = t" display={false} />, obtemos:
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
                Agora isolamos <MathFormula formula="s" display={false} />:
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
                💡 A interpretação que precisa ser memorizada pelo entendimento
              </h4>

              <p className="text-slate-300 leading-relaxed mb-4">
                A expressão
                <MathFormula formula="s = s_0 + vt" display={false} />
                deve ser lida da seguinte maneira:
              </p>

              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>
                  • <MathFormula formula="s_0" display={false} /> informa de onde o móvel partiu;
                </p>
                <p>
                  • <MathFormula formula="vt" display={false} /> informa quanto sua posição mudou ao longo do tempo;
                </p>
                <p>
                  • a posição atual é a soma dessas duas contribuições.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mt-4">
                Portanto, o termo <MathFormula formula="vt" display={false} /> representa o deslocamento produzido
                por um movimento que ocorre com velocidade constante.
              </p>

              <p className="text-slate-300 leading-relaxed mt-4">
                Se <MathFormula formula="v > 0" display={false} />, a posição cresce com o tempo.
                Se <MathFormula formula="v < 0" display={false} />, a posição diminui com o tempo.
                O sinal da velocidade tem significado físico direto.
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
                você deve pensar:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• onde o móvel começou;</p>
                <p>• com que velocidade ele está se movendo;</p>
                <p>• quanto tempo já passou;</p>
                <p>• onde ele estará depois desse tempo.</p>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Esse tipo de leitura é muito melhor do que decorar a fórmula como desenho morto.
                Ela transforma a equação em movimento pensado.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Erro clássico
              </h4>

              <p className="text-slate-700 text-sm leading-relaxed">
                Não confunda <MathFormula formula="s" display={false} /> com distância percorrida.
                A grandeza <MathFormula formula="s" display={false} /> representa <strong>posição</strong>.
                Posição e distância percorrida não são a mesma coisa.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Fechando a construção
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço no MRU é:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Ela mostra que, em um movimento uniforme, a posição varia linearmente com o tempo,
                pois o movimento acontece com velocidade constante.
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
              Até aqui, o ponto essencial é este: a equação horária do espaço não é uma fórmula solta.
              Ela é a tradução matemática da ideia de que, no MRU, a posição muda com o tempo em ritmo constante.
            </p>
            <p className="text-blue-100 leading-relaxed">
              O próximo passo natural é interpretar graficamente essa equação,
              porque toda função do primeiro grau pede também uma leitura geométrica.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
