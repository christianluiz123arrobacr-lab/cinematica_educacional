import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  BookOpen,
  Sigma,
  Info,
  Calculator,
  AlertTriangle,
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
                O que é o MRU?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong>, ou simplesmente <strong>MRU</strong>,
                é o movimento em que um corpo percorre uma <strong>trajetória retilínea</strong> com
                <strong> velocidade escalar constante</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Isso significa que o móvel não altera a sua taxa de variação da posição.
                Em tempos iguais, ele realiza variações de posição iguais. Em outras palavras:
                a posição muda de forma regular, previsível e linear.
              </p>

              <p className="text-slate-700 leading-relaxed">
                O MRU é um dos primeiros modelos realmente importantes da Cinemática porque é nele que
                o aluno aprende a passar da descrição verbal do movimento para a descrição matemática.
                E é justamente aqui que nasce a equação horária do espaço.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia central antes da fórmula
              </h4>

              <div className="space-y-3 text-slate-700">
                <p>
                  Antes de escrever qualquer equação, a ideia física é muito simples:
                </p>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>o móvel começa em uma posição inicial;</li>
                  <li>o tempo passa;</li>
                  <li>como ele se move com velocidade constante, sua posição vai mudando regularmente;</li>
                  <li>portanto, deve existir uma expressão que relacione posição, tempo e velocidade.</li>
                </ul>
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
                O que essa equação faz?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A equação horária do espaço é a expressão matemática que permite calcular a
                <strong> posição do móvel em qualquer instante</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Ela não serve apenas para “substituir números”. Ela traduz, em linguagem matemática,
                a evolução do movimento com o passar do tempo. Em termos bem diretos:
                essa equação nos diz <strong>onde o móvel estará depois de certo tempo</strong>.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Como no MRU a velocidade é constante, a posição do móvel não varia de forma confusa,
                nem irregular. Ela varia seguindo um padrão simples. É justamente esse padrão que a equação descreve.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                A ideia física antes da álgebra
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Se um móvel parte de uma posição inicial e continua se deslocando com velocidade constante,
                então sua posição depois de certo tempo deve ser dada por:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição final} = \text{posição inicial} + \text{variação de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Essa frase simples já contém toda a lógica da equação horária. O que vamos fazer agora
                é transformar essa ideia em uma fórmula rigorosa.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Passo 1: começar pela definição de velocidade média
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A definição geral de velocidade média é:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v_m = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Isso significa que a velocidade média mede quanto a posição varia por unidade de tempo.
                Em outras palavras, ela nos diz o “ritmo” com que o móvel muda de posição.
              </p>

              <p className="text-slate-700 leading-relaxed">
                No MRU, como a velocidade é constante, a velocidade média em qualquer intervalo
                coincide com a velocidade escalar do movimento. Então podemos escrever:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                Passo 2: escrever a variação da posição de forma explícita
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A variação da posição é a diferença entre a posição final e a posição inicial:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Aqui:
              </p>

              <ul className="space-y-2 text-slate-700 leading-relaxed mt-3 pl-5 list-disc">
                <li>
                  <MathFormula formula="s" display={false} /> representa a posição do móvel em um instante qualquer;
                </li>
                <li>
                  <MathFormula formula="s_0" display={false} /> representa a posição inicial.
                </li>
              </ul>

              <p className="text-slate-700 leading-relaxed mt-4">
                Então, quando fazemos <MathFormula formula="s - s_0" display={false} />,
                estamos calculando quanto a posição mudou desde o começo do movimento.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                Passo 3: tratar o intervalo de tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Se tomarmos o instante inicial como origem dos tempos, então o tempo decorrido será simplesmente:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta t = t" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Isso quer dizer que estamos considerando:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="t_0 = 0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Essa escolha é muito comum porque simplifica a escrita e deixa a equação mais limpa.
                Em vez de escrever <MathFormula formula="t - t_0" display={false} />, podemos trabalhar apenas com
                <MathFormula formula="t" display={false} />.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Sigma className="w-5 h-5 text-blue-600" />
                Passo 4: substituir tudo na definição da velocidade
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como já vimos:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Agora substituímos:
              </p>

              <ul className="space-y-2 text-slate-700 leading-relaxed pl-5 list-disc">
                <li><MathFormula formula="\Delta s = s - s_0" display={false} /></li>
                <li><MathFormula formula="\Delta t = t" display={false} /></li>
              </ul>

              <p className="text-slate-700 leading-relaxed mt-4">
                Assim, obtemos:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Multiplicando ambos os lados por <MathFormula formula="t" display={false} />:
              </p>

              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="vt = s - s_0" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Finalmente, isolando a posição <MathFormula formula="s" display={false} />:
              </p>

              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-4 flex flex-col items-center">
                <MathFormula formula="s = s_0 + vt" display={true} />
                <p className="text-sm text-blue-800 mt-4 font-medium">
                  Equação horária do espaço no MRU
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">
                💡 Interpretação física realmente importante
              </h4>

              <p className="text-slate-300 leading-relaxed mb-4">
                A equação
                <MathFormula formula="s = s_0 + vt" display={false} />
                mostra que a posição final é formada por duas partes:
              </p>

              <ul className="space-y-3 text-slate-300 leading-relaxed">
                <li>
                  • <strong><MathFormula formula="s_0" display={false} /></strong>:
                  indica onde o móvel começou;
                </li>
                <li>
                  • <strong><MathFormula formula="vt" display={false} /></strong>:
                  representa quanto a posição mudou ao longo do tempo.
                </li>
              </ul>

              <p className="text-slate-300 leading-relaxed mt-4">
                Isso significa que o termo <MathFormula formula="vt" display={false} /> representa
                o deslocamento produzido pelo movimento uniforme.
              </p>

              <p className="text-slate-300 leading-relaxed mt-4">
                Se <MathFormula formula="v > 0" display={false} />, a posição aumenta com o tempo.
                Se <MathFormula formula="v < 0" display={false} />, a posição diminui com o tempo.
                Então o sinal da velocidade tem interpretação física direta e não pode ser ignorado.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Como ler essa equação na prática
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Sempre que aparecer uma equação do tipo:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                você deve pensar assim:
              </p>

              <ul className="space-y-2 text-slate-700 leading-relaxed mt-3 pl-5 list-disc">
                <li>onde o móvel começou;</li>
                <li>qual é sua velocidade;</li>
                <li>quanto tempo passou;</li>
                <li>qual será sua posição depois desse tempo.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Armadilha clássica
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Não confunda <MathFormula formula="s" display={false} /> com distância percorrida.
                <MathFormula formula="s" display={false} /> representa a <strong>posição</strong>.
                Um móvel pode ter posição 50 m sem necessariamente ter percorrido 50 m.
              </p>
            </div>
          </div>
        </div>

        {/* FECHAMENTO TEMPORÁRIO */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Fechamento desta parte
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              Até aqui, o ponto central é este: no MRU, a posição varia linearmente com o tempo,
              e essa variação é descrita pela equação
              <MathFormula formula="s = s_0 + vt" display={false} />.
            </p>
            <p className="text-blue-100 leading-relaxed">
              O que vem depois naturalmente é a interpretação gráfica dessa equação,
              porque uma função do primeiro grau sempre pede para ser lida também no gráfico.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
