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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Contexto Histórico</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Galileu Galilei, ao estudar planos inclinados, percebeu que a velocidade de uma esfera rolando não aumentava de forma caótica, mas sim em proporção direta ao tempo de descida. Ele foi o primeiro a entender que a "taxa de ganho de velocidade" (aceleração) era constante. Essa equação é a tradução matemática dessa descoberta revolucionária.
                    </p>
                  </div>
                </div>

                <h4 className="font-bold text-slate-800 mb-3 mt-6 border-t border-slate-200 pt-4">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Pense como um detetive: se você quer descobrir a velocidade de um carro neste exato momento, você precisa saber de duas coisas fundamentais: <strong>qual era a velocidade dele quando você começou a olhar</strong> (velocidade inicial) e <strong>o quanto ele ganhou ou perdeu de velocidade</strong> durante o tempo em que você ficou olhando.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  O "quanto ele ganhou" é simplesmente a aceleração multiplicada pelo tempo. Se ele ganha 2 m/s a cada segundo, em 5 segundos ele ganhou 10 m/s. Simples assim!
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-900 font-bold text-sm mb-1 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Quando usar?</p>
                    <p className="text-slate-700 text-sm">
                      Use quando o problema envolver <strong>Velocidade</strong> e <strong>Tempo</strong>, mas não mencionar nada sobre a <strong>Distância</strong> percorrida.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-900 font-bold text-sm mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Armadilha Clássica</p>
                    <p className="text-slate-700 text-sm">
                      Esquecer o sinal da aceleração! Se o corpo está freando, a aceleração deve entrar na fórmula com sinal <strong>negativo</strong>.
                    </p>
                  </div>
                </div>
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
                        <li><MathFormula formula="v_0" display={false} />: <strong>Velocidade Inicial</strong> (m/s) — A velocidade no momento do disparo do cronômetro (t = 0).</li>
                        <li><MathFormula formula="a" display={false} />: <strong>Aceleração</strong> (m/s²) — O "ritmo" constante de mudança da velocidade.</li>
                        <li><MathFormula formula="t" display={false} />: <strong>Tempo</strong> (s) — O tempo decorrido.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-400 mb-2">Por Que Essa Estrutura?</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>É idêntica à equação da matemática: <MathFormula formula="y = b + ax" display={false} /></li>
                        <li>Onde <MathFormula formula="y" display={false} /> é a velocidade <MathFormula formula="v" display={false} /></li>
                        <li>Onde <MathFormula formula="b" display={false} /> (coeficiente linear) é a velocidade inicial <MathFormula formula="v_0" display={false} /></li>
                        <li>Onde <MathFormula formula="a" display={false} /> (coeficiente angular) é a aceleração <MathFormula formula="a" display={false} /></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dedução Física */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-blue-400 mb-4">📐 Dedução Física Passo a Passo</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      Esta equação não caiu do céu. Ela é a consequência direta da definição de aceleração média.
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: A Definição</strong></p>
                      <p>Aceleração é a variação da velocidade dividida pelo tempo. Como no MRUV a aceleração é constante, a aceleração instantânea é igual à média (<MathFormula formula="a_m = a" display={false} />).</p>
                      <MathFormula formula="a = \frac{\Delta v}{\Delta t} = \frac{v - v_0}{t - t_0}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: Simplificando o Cronômetro</strong></p>
                      <p>Sempre ligamos o cronômetro no início do movimento, logo <MathFormula formula="t_0 = 0" display={false} />.</p>
                      <MathFormula formula="a = \frac{v - v_0}{t}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: Isolando a Velocidade Final (v)</strong></p>
                      <p>Passamos o tempo multiplicando a aceleração, e depois a velocidade inicial somando:</p>
                      <MathFormula formula="a \cdot t = v - v_0 \implies v = v_0 + a \cdot t" display={true} />
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Contexto Histórico</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Antes de Galileu, acreditava-se que um corpo em queda livre caía com velocidade constante. Galileu provou que a distância percorrida na queda era proporcional ao <strong>quadrado do tempo</strong> (<MathFormula formula="s \propto t^2" display={false} />). Essa foi a primeira vez na história da humanidade que uma lei da natureza foi descrita por uma função quadrática.
                    </p>
                  </div>
                </div>

                <h4 className="font-bold text-slate-800 mb-3 mt-6 border-t border-slate-200 pt-4">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Esta é a equação mais famosa (e temida) da cinemática, carinhosamente apelidada de "Sorvetão". Ela nos diz a posição exata do corpo em qualquer instante de tempo.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Por que ela é tão grande? Porque a posição final depende de três fatores somados: <strong>de onde ele saiu</strong> (<MathFormula formula="s_0" display={false} />), <strong>o quanto ele andaria se mantivesse a velocidade inicial</strong> (<MathFormula formula="v_0 \cdot t" display={false} />), e <strong>o bônus (ou penalidade) de distância causado pela aceleração</strong> (<MathFormula formula="\frac{a \cdot t^2}{2}" display={false} />).
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="text-purple-900 font-bold text-sm mb-1 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Quando usar?</p>
                    <p className="text-slate-700 text-sm">
                      Use quando o problema relacionar <strong>Posição/Distância</strong> com o <strong>Tempo</strong>. Se o problema pede "onde ele estará após 5s", é ela!
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-900 font-bold text-sm mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Armadilha Clássica</p>
                    <p className="text-slate-700 text-sm">
                      Esquecer de dividir a aceleração por 2! O termo é <MathFormula formula="\frac{a}{2}t^2" display={false} />. Se a equação dada for <MathFormula formula="s = 10 + 5t + 3t^2" display={false} />, a aceleração <strong>não é 3</strong>, ela é <strong>6</strong> (pois 6/2 = 3).
                    </p>
                  </div>
                </div>
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
                        <li><MathFormula formula="s" display={false} />: <strong>Posição Final</strong> (m) — Onde ele está.</li>
                        <li><MathFormula formula="s_0" display={false} />: <strong>Posição Inicial</strong> (m) — De onde ele saiu.</li>
                        <li><MathFormula formula="v_0 \cdot t" display={false} />: <strong>Parcela Inercial</strong> — Distância que percorreria se não houvesse aceleração.</li>
                        <li><MathFormula formula="\frac{a \cdot t^2}{2}" display={false} />: <strong>Parcela Acelerada</strong> — Distância extra (ou a menos) causada pela aceleração.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-400 mb-2">Por Que Essa Estrutura?</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>É uma função quadrática da matemática: <MathFormula formula="y = c + bx + ax^2" display={false} /></li>
                        <li>Onde <MathFormula formula="y" display={false} /> é a posição <MathFormula formula="s" display={false} /></li>
                        <li>Onde <MathFormula formula="c" display={false} /> (termo independente) é <MathFormula formula="s_0" display={false} /></li>
                        <li>Onde <MathFormula formula="b" display={false} /> (coeficiente de x) é <MathFormula formula="v_0" display={false} /></li>
                        <li>Onde <MathFormula formula="a" display={false} /> (coeficiente de x²) é <MathFormula formula="\frac{a}{2}" display={false} /> (metade da aceleração!)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dedução Física da Equação do Espaço */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-purple-400 mb-4">📐 Dedução Física (O Método da Área do Trapézio)</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      A forma mais elegante e cobrada em vestibulares de alto nível para deduzir esta equação é usando a <strong>Propriedade Gráfica</strong>: a área sob o gráfico Velocidade × Tempo é numericamente igual ao deslocamento (<MathFormula formula="\Delta s" display={false} />).
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: A Geometria do Gráfico v × t</strong></p>
                      <p>No MRUV, a velocidade muda linearmente, então o gráfico é uma reta inclinada. A figura geométrica formada entre essa reta e o eixo do tempo é um <strong>trapézio</strong>.</p>
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: Calculando a Área do Trapézio</strong></p>
                      <p>A área do trapézio é a soma das bases multiplicada pela altura, dividida por dois: <MathFormula formula="\text{Área} = \frac{(B + b) \cdot h}{2}" display={false} /></p>
                      <p>Traduzindo a geometria para a física do nosso gráfico:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-purple-200">
                        <li>Base Maior (<MathFormula formula="B" display={false} />) = <MathFormula formula="v" display={false} /> (velocidade final)</li>
                        <li>Base Menor (<MathFormula formula="b" display={false} />) = <MathFormula formula="v_0" display={false} /> (velocidade inicial)</li>
                        <li>Altura (<MathFormula formula="h" display={false} />) = <MathFormula formula="t" display={false} /> (tempo decorrido)</li>
                      </ul>
                      <MathFormula formula="\Delta s = \frac{(v + v_0) \cdot t}{2}" display={true} />
                      <p className="text-xs text-slate-400 italic mt-1">*Nota: Esta equação intermediária é a famosa fórmula da Velocidade Média no MRUV!</p>
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: A Substituição Mágica</strong></p>
                      <p>Nós não queremos a velocidade final (<MathFormula formula="v" display={false} />) na nossa equação do espaço. Então, usamos a primeira equação (<MathFormula formula="v = v_0 + at" display={false} />) para substituir o <MathFormula formula="v" display={false} /> dentro da fórmula da área:</p>
                      <MathFormula formula="\Delta s = \frac{((v_0 + at) + v_0) \cdot t}{2}" display={true} />
                      <p>Somamos os <MathFormula formula="v_0" display={false} />:</p>
                      <MathFormula formula="\Delta s = \frac{(2v_0 + at) \cdot t}{2}" display={true} />
                      <p>Fazemos a distributiva do tempo (<MathFormula formula="t" display={false} />):</p>
                      <MathFormula formula="\Delta s = \frac{2v_0t + at^2}{2}" display={true} />
                      <p>Separamos a fração em duas partes e simplificamos o 2:</p>
                      <MathFormula formula="\Delta s = v_0t + \frac{at^2}{2}" display={true} />
                      <p className="mt-3 font-semibold text-purple-300">Passo Final:</p>
                      <p>Como o deslocamento é a posição final menos a inicial (<MathFormula formula="\Delta s = s - s_0" display={false} />), passamos o <MathFormula formula="s_0" display={false} /> somando para o outro lado e a obra-prima está pronta:</p>
                      <MathFormula formula="s = s_0 + v_0t + \frac{at^2}{2}" display={true} />
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Contexto Histórico</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Evangelista Torricelli foi aluno e sucessor de Galileu. Ele percebeu um problema prático grave: em muitos experimentos de balística (como o disparo de canhões), era fácil medir a distância percorrida e a velocidade, mas era quase impossível medir o tempo exato com a tecnologia da época (século XVII). Ele precisava de uma equação que "pulasse" o tempo.
                    </p>
                  </div>
                </div>

                <h4 className="font-bold text-slate-800 mb-3 mt-6 border-t border-slate-200 pt-4">A Lógica Intuitiva</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Torricelli usou a álgebra pesada para "fundir" as duas primeiras equações e eliminar a variável tempo (<MathFormula formula="t" display={false} />). O resultado é uma ferramenta poderosa que cria uma relação direta entre a velocidade de um corpo e o espaço que ele percorreu.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-amber-900 font-bold text-sm mb-1 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Quando usar?</p>
                    <p className="text-slate-700 text-sm">
                      <strong>Regra de Ouro Suprema:</strong> Se o problema não forneceu o tempo e não perguntou o tempo, <strong>use Torricelli!</strong> É o atalho perfeito.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-900 font-bold text-sm mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Armadilha Clássica</p>
                    <p className="text-slate-700 text-sm">
                      Esquecer de tirar a raiz quadrada no final! A equação calcula <MathFormula formula="v^2" display={false} />. Se você achar <MathFormula formula="v^2 = 400" display={false} />, a resposta final é <MathFormula formula="v = 20" display={false} />.
                    </p>
                  </div>
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
                        <li><MathFormula formula="v^2" display={false} />: <strong>Velocidade Final ao quadrado</strong> — Cuidado para não esquecer de tirar a raiz no final da conta!</li>
                        <li><MathFormula formula="v_0^2" display={false} />: <strong>Velocidade Inicial ao quadrado</strong></li>
                        <li><MathFormula formula="a" display={false} />: <strong>Aceleração</strong> (m/s²)</li>
                        <li><MathFormula formula="\Delta s" display={false} />: <strong>Deslocamento</strong> (m) — A distância percorrida (<MathFormula formula="s - s_0" display={false} />).</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-400 mb-2">A Matemática por Trás:</p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-2">
                        A dedução é puramente algébrica. Torricelli isolou o tempo na equação da velocidade:
                      </p>
                      <MathFormula formula="t = \frac{v - v_0}{a}" display={true} />
                      <p className="text-sm text-slate-300 leading-relaxed mt-2">
                        E substituiu esse "bloco" no lugar do <MathFormula formula="t" display={false} /> na equação do espaço. Após resolver produtos notáveis e simplificar frações, o tempo desaparece completamente.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dedução Algébrica Completa de Torricelli */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-amber-400 mb-4">📐 Dedução Algébrica Passo a Passo</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      A dedução de Torricelli é um excelente exercício de álgebra. Vamos usar a 4ª Equação (Velocidade Média) para tornar a dedução muito mais rápida e elegante do que usar o "Sorvetão".
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: O Sistema de Equações</strong></p>
                      <p>Temos duas equações fundamentais que conhecemos:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-amber-200">
                        <li>(1) Da aceleração: <MathFormula formula="a = \frac{v - v_0}{t} \implies t = \frac{v - v_0}{a}" display={false} /></li>
                        <li>(2) Da velocidade média: <MathFormula formula="\Delta s = \left(\frac{v + v_0}{2}\right) \cdot t" display={false} /></li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: A Substituição</strong></p>
                      <p>Vamos pegar o tempo <MathFormula formula="t" display={false} /> da equação (1) e jogar dentro da equação (2):</p>
                      <MathFormula formula="\Delta s = \left(\frac{v + v_0}{2}\right) \cdot \left(\frac{v - v_0}{a}\right)" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: O Produto da Soma pela Diferença</strong></p>
                      <p>Multiplicando as frações (numerador com numerador, denominador com denominador):</p>
                      <MathFormula formula="\Delta s = \frac{(v + v_0)(v - v_0)}{2a}" display={true} />
                      <p>Lembre-se da matemática básica: <MathFormula formula="(x+y)(x-y) = x^2 - y^2" display={false} />. Aplicando isso no numerador:</p>
                      <MathFormula formula="\Delta s = \frac{v^2 - v_0^2}{2a}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 4: O Gran Finale</strong></p>
                      <p>Passamos o <MathFormula formula="2a" display={false} /> multiplicando para o outro lado:</p>
                      <MathFormula formula="2a \cdot \Delta s = v^2 - v_0^2" display={true} />
                      <p>E isolamos a velocidade final ao quadrado (<MathFormula formula="v^2" display={false} />):</p>
                      <MathFormula formula="v^2 = v_0^2 + 2a\Delta s" display={true} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplos Resolvidos de Torricelli */}
              <div className="mt-8 space-y-6">
                <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-amber-600" />
                  Exemplos Resolvidos: Torricelli na Prática
                </h4>

                {/* Exemplo 1 */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-50 p-4 border-b border-slate-200">
                    <h5 className="font-bold text-slate-800">Exemplo 1: A Frenagem de Emergência</h5>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-slate-700">
                      Um carro viaja a 108 km/h quando o motorista avista um obstáculo e pisa no freio, aplicando uma desaceleração constante de 5 m/s². Qual a distância mínima que o carro percorre até parar completamente?
                    </p>
                    
                    <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 space-y-3">
                      <p className="font-semibold text-amber-900">1º Passo: Coleta de Dados e Conversão</p>
                      <ul className="list-disc list-inside text-slate-700 text-sm ml-2">
                        <li>Velocidade inicial (<MathFormula formula="v_0" display={false} />): 108 km/h ÷ 3,6 = <strong>30 m/s</strong></li>
                        <li>Velocidade final (<MathFormula formula="v" display={false} />): <strong>0 m/s</strong> (ele vai parar)</li>
                        <li>Aceleração (<MathFormula formula="a" display={false} />): <strong>-5 m/s²</strong> (negativa pois está freando!)</li>
                        <li>Tempo (<MathFormula formula="t" display={false} />): <strong>Não temos e não queremos!</strong> (Alerta Torricelli)</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                      <p className="font-semibold text-slate-800">2º Passo: Aplicação da Fórmula</p>
                      <MathFormula formula="v^2 = v_0^2 + 2a\Delta s" display={true} />
                      <MathFormula formula="0^2 = 30^2 + 2(-5)\Delta s" display={true} />
                      <MathFormula formula="0 = 900 - 10\Delta s" display={true} />
                      <MathFormula formula="10\Delta s = 900" display={true} />
                      <MathFormula formula="\Delta s = 90 \text{ metros}" display={true} />
                    </div>
                  </div>
                </div>

                {/* Exemplo 2 */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-50 p-4 border-b border-slate-200">
                    <h5 className="font-bold text-slate-800">Exemplo 2: O Avião na Pista</h5>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-slate-700">
                      Um avião parte do repouso e acelera a 4 m/s² em uma pista de 800 metros. Qual será a velocidade do avião no momento em que ele decolar (ao final da pista)?
                    </p>
                    
                    <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 space-y-3">
                      <p className="font-semibold text-amber-900">1º Passo: Coleta de Dados</p>
                      <ul className="list-disc list-inside text-slate-700 text-sm ml-2">
                        <li>Velocidade inicial (<MathFormula formula="v_0" display={false} />): <strong>0 m/s</strong> (partiu do repouso)</li>
                        <li>Aceleração (<MathFormula formula="a" display={false} />): <strong>4 m/s²</strong></li>
                        <li>Deslocamento (<MathFormula formula="\Delta s" display={false} />): <strong>800 m</strong></li>
                        <li>Tempo (<MathFormula formula="t" display={false} />): <strong>Não temos!</strong> (Alerta Torricelli)</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                      <p className="font-semibold text-slate-800">2º Passo: Aplicação da Fórmula</p>
                      <MathFormula formula="v^2 = v_0^2 + 2a\Delta s" display={true} />
                      <MathFormula formula="v^2 = 0^2 + 2(4)(800)" display={true} />
                      <MathFormula formula="v^2 = 8 \cdot 800" display={true} />
                      <MathFormula formula="v^2 = 6400" display={true} />
                      <p className="text-sm text-red-600 font-semibold mt-2">⚠️ Cuidado com a armadilha! Não esqueça a raiz quadrada:</p>
                      <MathFormula formula="v = \sqrt{6400} = 80 \text{ m/s}" display={true} />
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
