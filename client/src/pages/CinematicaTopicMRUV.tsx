import { Link } from "wouter";
import { ArrowLeft, Activity, Lightbulb, AlertTriangle, CheckCircle2, Info, Target, Compass, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function CinematicaTopicMRUV() {
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600 font-medium">Equações Fundamentais — MRUV</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            Movimento Retilíneo Uniformemente Variado (MRUV)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRUV?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Enquanto o MRU descreve um mundo ideal sem aceleração, o <strong>Movimento Retilíneo Uniformemente Variado (MRUV)</strong> nos traz para a realidade. É o movimento de um carro freando no semáforo, de um avião decolando na pista ou de uma maçã caindo da árvore.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A palavra-chave aqui é <strong>Uniformemente Variado</strong>. Isso significa que a velocidade do corpo muda, mas ela muda de forma <strong>constante e previsível</strong>. A taxa com que a velocidade muda é o que chamamos de <strong>Aceleração</strong>.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-100 mt-4">
                <p className="font-semibold text-blue-900 mb-2">Exemplo Intuitivo:</p>
                <p className="text-slate-700 text-sm">
                  Imagine um carro esportivo acelerando a <MathFormula formula="5 \text{ m/s}^2" display={false} />. Isso significa que a cada 1 segundo que passa, a velocidade dele aumenta em 5 m/s.
                  Se ele partiu do repouso (0 m/s), após 1 segundo ele estará a 5 m/s. Após 2 segundos, a 10 m/s. Após 3 segundos, a 15 m/s. A velocidade muda, mas o <em>ritmo</em> da mudança é sempre o mesmo.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Os Três Pilares do MRUV
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <div>
                    <p><strong>Aceleração Constante:</strong> A aceleração instantânea é sempre igual à aceleração média, e diferente de zero.</p>
                    <MathFormula formula="a = a_m = \text{constante} \neq 0" display={false} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <div>
                    <p><strong>Velocidade Variável:</strong> A velocidade muda linearmente com o tempo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p><strong>Trajetória Retilínea:</strong> O movimento ocorre em uma única dimensão (linha reta), sem fazer curvas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===================== AS EQUAÇÕES FUNDAMENTAIS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ As Equações Fundamentais</h2>
          
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              Diferente do MRU que possui apenas uma equação, o MRUV é governado por <strong>três equações principais</strong>. Cada uma delas é uma ferramenta específica para um tipo de problema. Dominar o MRUV é saber escolher a ferramenta certa.
            </p>

            {/* 1. Equação Horária da Velocidade */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm font-bold text-blue-700">1</span>
                Equação Horária da Velocidade (A Função do 1º Grau)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Se você quer saber a velocidade de um carro agora, precisa saber de duas coisas: <strong>qual era a velocidade inicial dele</strong> e <strong>o quanto ele acelerou (ou freou)</strong> durante o tempo de viagem.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-4">A Equação e Seus Termos</h4>
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <MathFormula formula="v = v_0 + a \cdot t" display={true} className="text-4xl" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-400 mb-2">Termo a Termo:</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li><MathFormula formula="v" display={false} />: <strong>Velocidade Final</strong> (m/s) — A velocidade no instante t.</li>
                        <li><MathFormula formula="v_0" display={false} />: <strong>Velocidade Inicial</strong> (m/s) — A velocidade em t = 0.</li>
                        <li><MathFormula formula="a" display={false} />: <strong>Aceleração</strong> (m/s²) — A taxa constante de variação da velocidade.</li>
                        <li><MathFormula formula="t" display={false} />: <strong>Tempo</strong> (s) — O instante cronometrado.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-400 mb-2">Dedução Física:</p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-2">
                        Nasce diretamente da definição de aceleração média:
                      </p>
                      <MathFormula formula="a = \frac{\Delta v}{\Delta t} = \frac{v - v_0}{t - 0}" display={true} />
                      <p className="text-sm text-slate-300 leading-relaxed mt-2">
                        Multiplicando cruzado e isolando o <MathFormula formula="v" display={false} />, chegamos à equação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Equação Horária do Espaço */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">2</span>
                Equação Horária do Espaço (A Função do 2º Grau)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Esta é a equação mais famosa da cinemática. Ela nos diz a posição do corpo em qualquer instante de tempo. Como a velocidade está mudando, o corpo percorre distâncias cada vez maiores (se estiver acelerando) ou menores (se estiver freando) a cada segundo. Por isso, o tempo aparece elevado ao quadrado!
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-purple-400 mb-4">A Equação e Seus Termos</h4>
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <MathFormula formula="s = s_0 + v_0 \cdot t + \frac{a \cdot t^2}{2}" display={true} className="text-4xl" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-400 mb-2">Termo a Termo:</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li><MathFormula formula="s" display={false} />: <strong>Posição Final</strong> (m)</li>
                        <li><MathFormula formula="s_0" display={false} />: <strong>Posição Inicial</strong> (m)</li>
                        <li><MathFormula formula="v_0 \cdot t" display={false} />: <strong>Deslocamento devido à velocidade inicial</strong></li>
                        <li><MathFormula formula="\frac{a \cdot t^2}{2}" display={false} />: <strong>Deslocamento devido à aceleração</strong></li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-400 mb-2">Por Que Essa Estrutura?</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>É uma função quadrática: <MathFormula formula="y = c + bx + ax^2" display={false} /></li>
                        <li>O gráfico será obrigatoriamente uma <strong>parábola</strong>.</li>
                        <li>O termo <MathFormula formula="t^2" display={false} /> mostra que a posição cresce (ou decresce) de forma não linear.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dedução Física da Equação do Espaço */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-purple-400 mb-4">📐 Dedução Física (O Método da Área)</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      A forma mais elegante de deduzir esta equação é usando a propriedade gráfica: a área sob o gráfico Velocidade × Tempo é igual ao deslocamento (<MathFormula formula="\Delta s" display={false} />).
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: O Gráfico v × t no MRUV</strong></p>
                      <p>No MRUV, a velocidade muda linearmente, então o gráfico é uma reta inclinada. A figura formada entre a reta e o eixo do tempo é um <strong>trapézio</strong>.</p>
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: A Área do Trapézio</strong></p>
                      <p>A área do trapézio é dada por: <MathFormula formula="\text{Área} = \frac{(\text{Base Maior} + \text{Base Menor}) \cdot \text{Altura}}{2}" display={false} /></p>
                      <p>No nosso gráfico:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Base Maior = <MathFormula formula="v" display={false} /> (velocidade final)</li>
                        <li>Base Menor = <MathFormula formula="v_0" display={false} /> (velocidade inicial)</li>
                        <li>Altura = <MathFormula formula="t" display={false} /> (tempo)</li>
                      </ul>
                      <MathFormula formula="\Delta s = \frac{(v + v_0) \cdot t}{2}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: Substituindo a Velocidade Final</strong></p>
                      <p>Sabemos da primeira equação que <MathFormula formula="v = v_0 + at" display={false} />. Vamos substituir isso na fórmula da área:</p>
                      <MathFormula formula="\Delta s = \frac{((v_0 + at) + v_0) \cdot t}{2}" display={true} />
                      <MathFormula formula="\Delta s = \frac{(2v_0 + at) \cdot t}{2}" display={true} />
                      <MathFormula formula="\Delta s = \frac{2v_0t + at^2}{2}" display={true} />
                      <MathFormula formula="\Delta s = v_0t + \frac{at^2}{2}" display={true} />
                      <p className="mt-2">Como <MathFormula formula="\Delta s = s - s_0" display={false} />, passamos o <MathFormula formula="s_0" display={false} /> somando e chegamos à equação final!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Equação de Torricelli */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-sm font-bold text-amber-700">3</span>
                Equação de Torricelli (A Equação Sem Tempo)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Evangelista Torricelli percebeu um problema prático: muitas vezes, em experimentos ou problemas de física, <strong>nós não temos um cronômetro</strong>. Sabemos a distância, sabemos a aceleração, mas não sabemos o tempo. Ele manipulou a matemática para criar uma equação que relaciona velocidade e espaço diretamente, <strong>sem depender do tempo</strong>.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Regra de Ouro:</strong> Se o problema não deu o tempo e não pediu o tempo, use Torricelli!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-amber-400 mb-4">A Equação e Seus Termos</h4>
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <MathFormula formula="v^2 = v_0^2 + 2 \cdot a \cdot \Delta s" display={true} className="text-4xl" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-400 mb-2">Termo a Termo:</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li><MathFormula formula="v^2" display={false} />: <strong>Velocidade Final ao quadrado</strong></li>
                        <li><MathFormula formula="v_0^2" display={false} />: <strong>Velocidade Inicial ao quadrado</strong></li>
                        <li><MathFormula formula="a" display={false} />: <strong>Aceleração</strong></li>
                        <li><MathFormula formula="\Delta s" display={false} />: <strong>Deslocamento</strong> (<MathFormula formula="s - s_0" display={false} />)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-400 mb-2">Dedução Algébrica:</p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-2">
                        Torricelli simplesmente isolou o tempo (<MathFormula formula="t" display={false} />) na equação da velocidade:
                      </p>
                      <MathFormula formula="t = \frac{v - v_0}{a}" display={true} />
                      <p className="text-sm text-slate-300 leading-relaxed mt-2">
                        E substituiu esse <MathFormula formula="t" display={false} /> dentro da equação horária do espaço. Após alguma álgebra pesada (produtos notáveis), o tempo desaparece e a equação surge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
