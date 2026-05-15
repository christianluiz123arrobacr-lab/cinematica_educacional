import { Link } from "wouter";
import { ArrowLeft, Activity, Lightbulb, AlertTriangle, CheckCircle2, Info, Target, Compass } from "lucide-react";
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600 font-medium">Equação Horária do Espaço — MRU</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Compass className="w-8 h-8 text-blue-600" />
            Movimento Retilíneo Uniforme (MRU)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRU?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme (MRU)</strong> é o alicerce de toda a cinemática. Ele descreve a situação mais pura e idealizada de movimento: um corpo que viaja em uma <strong>linha reta perfeita</strong>, sem nunca acelerar, frear ou fazer curvas.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A palavra-chave aqui é <strong>Uniforme</strong>. Isso significa que a velocidade do corpo é rigorosamente constante. Na prática, isso se traduz em uma regra de ouro: <strong>o móvel percorre distâncias exatamente iguais em intervalos de tempo iguais</strong>.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-100 mt-4">
                <p className="font-semibold text-blue-900 mb-2">Exemplo Intuitivo:</p>
                <p className="text-slate-700 text-sm">
                  Imagine um trem-bala viajando a constantes 300 km/h em trilhos perfeitamente retos. 
                  Em 1 hora, ele percorre 300 km. Em 2 horas, 600 km. Em meia hora (0,5 h), ele percorre exatamente 150 km. 
                  Não há surpresas, não há variações. O movimento é totalmente previsível.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Os Três Pilares do MRU
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <div>
                    <p><strong>Velocidade Constante:</strong> A velocidade instantânea é sempre igual à velocidade média.</p>
                    <MathFormula formula="v = v_m = \text{constante} \neq 0" display={false} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <div>
                    <p><strong>Aceleração Nula:</strong> Como a velocidade não muda, não existe aceleração.</p>
                    <MathFormula formula="a = 0" display={false} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p><strong>Trajetória Retilínea:</strong> O movimento ocorre em uma única dimensão (linha reta), sem mudanças de direção.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===================== A EQUAÇÃO HORÁRIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⏱️ A Equação Horária do Espaço</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Contexto Histórico: A Revolução de Galileu
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Para entender a importância do MRU, precisamos voltar no tempo. Durante quase 2.000 anos, a humanidade acreditou na física de <strong>Aristóteles</strong>, que dizia: <em>"Para um corpo se manter em movimento, é necessária a ação contínua de uma força"</em>. Isso parecia fazer sentido no dia a dia: se você para de empurrar uma carroça, ela para.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Foi <strong>Galileu Galilei (1564–1642)</strong> quem teve a genialidade de imaginar um mundo ideal. Ele percebeu que a carroça só para por causa do <strong>atrito</strong>. Se pudéssemos remover todo o atrito e a resistência do ar, um corpo em movimento continuaria se movendo para sempre, em linha reta e com velocidade constante.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Essa ideia brilhante foi mais tarde formalizada por <strong>Isaac Newton</strong> como a <strong>Primeira Lei da Mecânica (Lei da Inércia)</strong>: Um corpo livre da ação de forças resultantes manterá seu estado de repouso ou de Movimento Retilíneo Uniforme (MRU).
              </p>
            </div>

            {/* A Fórmula */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm font-bold text-blue-700">1</span>
                A Fórmula Fundamental
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A física não apenas descreve conceitos, ela os quantifica. A <strong>equação horária do espaço</strong> é a ferramenta matemática suprema do MRU. Ela funciona como uma "máquina do tempo": se você me der o instante de tempo (<MathFormula formula="t" display={false} />), eu te digo exatamente onde o corpo está (<MathFormula formula="s" display={false} />).
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Regra de Ouro:</strong> A equação horária é uma função do 1º grau em relação ao tempo.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-4">A Equação e Seus Termos</h4>
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <MathFormula formula="s = s_0 + v \cdot t" display={true} className="text-4xl" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-400 mb-2">Termo a Termo:</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li><MathFormula formula="s" display={false} />: <strong>Posição Final</strong> (m) — Onde o móvel está no instante t.</li>
                        <li><MathFormula formula="s_0" display={false} />: <strong>Posição Inicial</strong> (m) — Onde o móvel estava em t = 0.</li>
                        <li><MathFormula formula="v" display={false} />: <strong>Velocidade</strong> (m/s) — A taxa constante de variação da posição.</li>
                        <li><MathFormula formula="t" display={false} />: <strong>Tempo</strong> (s) — O instante cronometrado.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-400 mb-2">Por Que Essa Estrutura?</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>É uma função linear: <MathFormula formula="y = b + ax" display={false} /></li>
                        <li>Onde <MathFormula formula="y" display={false} /> é a posição <MathFormula formula="s" display={false} /></li>
                        <li>Onde <MathFormula formula="b" display={false} /> é a posição inicial <MathFormula formula="s_0" display={false} /></li>
                        <li>Onde <MathFormula formula="a" display={false} /> é a velocidade <MathFormula formula="v" display={false} /></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dedução Física */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-blue-400 mb-4">📐 Dedução Física da Equação</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      Na física, não decoramos fórmulas cegamente; nós as construímos. A equação horária nasce da própria definição de velocidade média.
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: A Definição</strong></p>
                      <p>Sabemos que a velocidade média é a razão entre o deslocamento e o tempo. Como no MRU a velocidade é constante, <MathFormula formula="v_m = v" display={false} />.</p>
                      <MathFormula formula="v = \frac{\Delta s}{\Delta t} = \frac{s - s_0}{t - t_0}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: Simplificando o Tempo</strong></p>
                      <p>Por convenção, sempre disparamos o cronômetro no início do movimento. Portanto, o tempo inicial é zero (<MathFormula formula="t_0 = 0" display={false} />).</p>
                      <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
                    </div>
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: Isolando a Posição (s)</strong></p>
                      <p>Multiplicamos cruzado e passamos o <MathFormula formula="s_0" display={false} /> somando:</p>
                      <MathFormula formula="v \cdot t = s - s_0 \implies s = s_0 + v \cdot t" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CLASSIFICAÇÃO DO MOVIMENTO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Classificação do Movimento</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Na cinemática, o sinal de mais (+) ou de menos (-) na velocidade não indica se o carro está rápido ou devagar. <strong>O sinal indica apenas o sentido do movimento</strong> em relação à orientação que escolhemos para a trajetória.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Progressivo */}
              <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">+</div>
                    <h3 className="text-2xl font-bold text-blue-900">Movimento Progressivo</h3>
                  </div>
                  <p className="text-slate-700 mb-6 text-lg">
                    Ocorre quando o móvel viaja <strong>a favor</strong> da orientação da trajetória. Ele está "progredindo" na estrada.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>Velocidade Positiva:</strong> <MathFormula formula="v > 0" display={false} /></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>Posições Crescentes:</strong> Com o passar do tempo, o valor da posição (<MathFormula formula="s" display={false} />) aumenta (ex: vai do km 10 para o km 50).</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                    <p className="text-sm text-slate-500 font-bold mb-2 uppercase tracking-wider">Exemplo Numérico</p>
                    <MathFormula formula="s = 10 + 5t" display={true} />
                    <p className="text-xs text-slate-500 text-center mt-2">Parte do 10m e avança 5m a cada segundo.</p>
                  </div>
                </div>
              </div>

              {/* Retrógrado */}
              <div className="bg-gradient-to-b from-red-50 to-white border border-red-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">−</div>
                    <h3 className="text-2xl font-bold text-red-900">Movimento Retrógrado</h3>
                  </div>
                  <p className="text-slate-700 mb-6 text-lg">
                    Ocorre quando o móvel viaja <strong>contra</strong> a orientação da trajetória. Ele está "voltando" na estrada.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>Velocidade Negativa:</strong> <MathFormula formula="v < 0" display={false} /></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>Posições Decrescentes:</strong> Com o passar do tempo, o valor da posição (<MathFormula formula="s" display={false} />) diminui (ex: vai do km 100 para o km 20).</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <p className="text-sm text-slate-500 font-bold mb-2 uppercase tracking-wider">Exemplo Numérico</p>
                    <MathFormula formula="s = 100 - 20t" display={true} />
                    <p className="text-xs text-slate-500 text-center mt-2">Parte do 100m e recua 20m a cada segundo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== GRÁFICOS DO MRU ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 A Visão Gráfica do MRU</h2>
          
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              Em provas de alto nível, a interpretação de gráficos é mais cobrada do que o uso de fórmulas. O MRU possui três gráficos fundamentais que contam toda a história do movimento visualmente.
            </p>

            {/* Gráfico s x t */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-sm font-bold text-indigo-700">1</span>
                Gráfico Posição × Tempo (s × t)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Matematicamente, a equação <MathFormula formula="s = s_0 + vt" display={false} /> é uma <strong>função polinomial do 1º grau</strong>. Portanto, seu gráfico é obrigatoriamente uma <strong>reta inclinada</strong>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                    <h4 className="font-bold text-blue-800 mb-3 text-lg border-b border-blue-100 pb-2">Reta Crescente</h4>
                    <p className="text-slate-700 mb-3">Indica que as posições estão aumentando. Logo, a velocidade é positiva (<MathFormula formula="v > 0" display={false} />).</p>
                    <p className="text-sm font-semibold text-blue-600 bg-blue-50 p-2 rounded">Movimento Progressivo</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
                    <h4 className="font-bold text-red-800 mb-3 text-lg border-b border-red-100 pb-2">Reta Decrescente</h4>
                    <p className="text-slate-700 mb-3">Indica que as posições estão diminuindo. Logo, a velocidade é negativa (<MathFormula formula="v < 0" display={false} />).</p>
                    <p className="text-sm font-semibold text-red-600 bg-red-50 p-2 rounded">Movimento Retrógrado</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Propriedade de Ouro: A Inclinação
                </h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A inclinação da reta (a tangente do ângulo <MathFormula formula="\theta" display={false} /> que a reta faz com a horizontal) nos dá exatamente o valor da velocidade. Quanto mais "em pé" a reta, maior a velocidade.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg flex justify-center">
                  <MathFormula formula="\tan(\theta) = \frac{\Delta s}{\Delta t} = v" display={true} className="text-2xl" />
                </div>
              </div>
            </div>

            {/* Gráfico v x t */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-sm font-bold text-green-700">2</span>
                Gráfico Velocidade × Tempo (v × t)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Como a velocidade não muda com o passar do tempo, o gráfico é uma <strong>reta horizontal</strong>, paralela ao eixo do tempo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Propriedade de Ouro: A Área
                </h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A área da figura geométrica formada entre a reta da velocidade e o eixo do tempo é numericamente igual ao <strong>deslocamento escalar</strong> (<MathFormula formula="\Delta s" display={false} />). Essa propriedade é tão poderosa que vale para <em>qualquer</em> movimento, não apenas o MRU!
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg flex justify-center">
                  <MathFormula formula="\text{Área} \stackrel{N}{=} \Delta s" display={true} className="text-2xl" />
                </div>
                <div className="mt-4 bg-green-900/30 p-4 rounded-lg border border-green-700">
                  <p className="text-sm text-slate-300">
                    <strong>Nota Importante:</strong> O símbolo <MathFormula formula="\stackrel{N}{=}" display={false} /> significa "numericamente igual". Isso porque Área é medida em m² e Deslocamento em m. Os valores numéricos são iguais, mas as grandezas físicas são diferentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXERCÍCIOS RESOLVIDOS PASSO A PASSO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">✏️ Exercícios Resolvidos Passo a Passo</h2>
          
          <div className="space-y-8">
            {/* Exercício 1 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded text-sm font-bold">Exemplo 1</span>
                  <h3 className="font-bold text-slate-800 text-lg">Construção e Análise da Equação</h3>
                </div>
                <p className="text-slate-700 text-lg">
                  Um motociclista viaja em uma rodovia retilínea. No instante <MathFormula formula="t = 0" display={false} />, ele passa pelo marco quilométrico <strong>km 50</strong>. Sabendo que ele mantém uma velocidade constante de <strong>120 km/h</strong> no sentido crescente da rodovia, determine:
                </p>
                <ul className="list-disc list-inside text-slate-700 mt-3 ml-2 space-y-1">
                  <li>a) A equação horária do espaço (em km e horas).</li>
                  <li>b) A posição do motociclista após 2 horas de viagem.</li>
                  <li>c) O instante em que ele passará pelo km 410.</li>
                </ul>
              </div>
              
              <div className="p-6 space-y-6 bg-white">
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Resolução do Item (a):</h4>
                  <p className="text-slate-700 mb-3">Primeiro, identificamos os dados do problema:</p>
                  <ul className="text-slate-700 mb-3 ml-4 space-y-1">
                    <li>• Posição inicial (<MathFormula formula="s_0" display={false} />) = 50 km</li>
                    <li>• Velocidade (<MathFormula formula="v" display={false} />) = +120 km/h (positiva pois é no sentido crescente)</li>
                  </ul>
                  <p className="text-slate-700 mb-3">Substituindo na fórmula geral <MathFormula formula="s = s_0 + vt" display={false} />:</p>
                  <div className="bg-white p-3 rounded border border-blue-200 flex justify-center">
                    <MathFormula formula="s = 50 + 120t \quad \text{(km, h)}" display={true} />
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Resolução do Item (b):</h4>
                  <p className="text-slate-700 mb-3">Queremos saber a posição (<MathFormula formula="s" display={false} />) quando o tempo for <MathFormula formula="t = 2" display={false} /> horas. Basta substituir o <MathFormula formula="t" display={false} /> na equação que acabamos de montar:</p>
                  <div className="bg-white p-3 rounded border border-blue-200 flex justify-center">
                    <MathFormula formula="s = 50 + 120 \cdot (2) \implies s = 50 + 240 \implies \mathbf{s = 290 \text{ km}}" display={true} />
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Resolução do Item (c):</h4>
                  <p className="text-slate-700 mb-3">Agora sabemos a posição final (<MathFormula formula="s = 410" display={false} />) e queremos descobrir o tempo (<MathFormula formula="t" display={false} />). Substituímos o <MathFormula formula="s" display={false} /> na equação:</p>
                  <div className="bg-white p-3 rounded border border-blue-200 flex justify-center">
                    <MathFormula formula="410 = 50 + 120t \implies 410 - 50 = 120t \implies 360 = 120t \implies t = \frac{360}{120} \implies \mathbf{t = 3 \text{ horas}}" display={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Exercício 2 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded text-sm font-bold">Exemplo 2</span>
                  <h3 className="font-bold text-slate-800 text-lg">Encontro de Dois Móveis (Clássico de Provas)</h3>
                </div>
                <p className="text-slate-700 text-lg">
                  Dois carros, A e B, movem-se em uma mesma estrada retilínea. Suas equações horárias, no Sistema Internacional (SI), são dadas por:
                  <br/><br/>
                  <MathFormula formula="s_A = 20 + 15t" display={false} /> e <MathFormula formula="s_B = 100 - 5t" display={false} />
                  <br/><br/>
                  Determine o instante e a posição em que os carros se encontram.
                </p>
              </div>
              
              <div className="p-6 space-y-6 bg-white">
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 mb-2">Análise Inicial:</h4>
                  <p className="text-slate-700 mb-2">O carro A parte da posição 20m com velocidade de +15 m/s (progressivo).</p>
                  <p className="text-slate-700 mb-4">O carro B parte da posição 100m com velocidade de -5 m/s (retrógrado). Eles estão indo um de encontro ao outro!</p>
                  
                  <h4 className="font-bold text-amber-900 mb-2">O Segredo do Encontro:</h4>
                  <p className="text-slate-700 mb-3">Quando dois corpos se encontram, eles ocupam o <strong>mesmo lugar no espaço ao mesmo tempo</strong>. Matematicamente, isso significa igualar as equações horárias:</p>
                  <div className="bg-white p-4 rounded border border-amber-200 flex justify-center mb-4">
                    <MathFormula formula="s_A = s_B" display={true} />
                  </div>
                  
                  <p className="text-slate-700 mb-3">Substituindo as equações e resolvendo para <MathFormula formula="t" display={false} />:</p>
                  <div className="bg-white p-4 rounded border border-amber-200 flex justify-center mb-4">
                    <MathFormula formula="20 + 15t = 100 - 5t \implies 15t + 5t = 100 - 20 \implies 20t = 80 \implies \mathbf{t = 4 \text{ s}}" display={true} />
                  </div>

                  <p className="text-slate-700 mb-3">Para achar a posição do encontro, basta substituir <MathFormula formula="t = 4" display={false} /> em qualquer uma das equações (o resultado tem que ser o mesmo):</p>
                  <div className="bg-white p-4 rounded border border-amber-200 flex justify-center">
                    <MathFormula formula="s_A = 20 + 15(4) = 20 + 60 = \mathbf{80 \text{ m}}" display={true} />
                  </div>
                  <p className="text-slate-600 text-sm mt-2 text-center italic">Verificando no B: s_B = 100 - 5(4) = 100 - 20 = 80 m. Perfeito!</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== PROBLEMAS DE ENCONTRO E PERSEGUIÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-600" />
            Problemas de Encontro e Perseguição
          </h2>
          
          <div className="space-y-8">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Lógica Física do Encontro</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Os problemas de encontro e perseguição são os mais clássicos da cinemática. Eles testam sua capacidade de modelar fisicamente uma situação real. O segredo para resolver <strong>qualquer</strong> problema desse tipo é sempre o mesmo: <strong>igualar as posições</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Por que igualamos as posições? Porque, na física, um "encontro" ou uma "ultrapassagem" significa que dois corpos ocupam <strong>exatamente o mesmo lugar no espaço, no mesmo instante de tempo</strong>. Se o carro A está no km 100 e o carro B também está no km 100 ao mesmo tempo, eles se encontraram.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-100 mt-4 flex justify-center">
                <MathFormula formula="s_A(t) = s_B(t)" display={true} className="text-2xl text-purple-900" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Encontro Frontal */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h3 className="font-bold text-purple-400 mb-4 text-xl border-b border-slate-700 pb-2">💥 Encontro Frontal</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Ocorre quando dois móveis viajam em <strong>sentidos opostos</strong>. Para que isso aconteça na mesma trajetória, um deve ter velocidade positiva (movimento progressivo) e o outro negativa (movimento retrógrado).
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-purple-300 mb-2">Por que a distância diminui rápido?</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Imagine um carro a 60 km/h e outro a 40 km/h vindo em sua direção. A cada hora, o primeiro avança 60 km e o segundo avança 40 km. A distância entre eles diminui 100 km por hora!
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Fisicamente, dizemos que a <strong>velocidade relativa de aproximação</strong> é a soma dos módulos das velocidades:
                  </p>
                  <div className="mt-3 flex justify-center">
                    <MathFormula formula="v_{rel} = |v_A| + |v_B|" display={true} />
                  </div>
                </div>
              </div>

              {/* Perseguição */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h3 className="font-bold text-purple-400 mb-4 text-xl border-b border-slate-700 pb-2">🏃 Perseguição (Ultrapassagem)</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Ocorre quando dois móveis viajam no <strong>mesmo sentido</strong>. Para haver encontro, existe uma condição física inegociável: <strong>o móvel de trás deve ser mais rápido que o da frente</strong>.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-purple-300 mb-2">Por que a aproximação é lenta?</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Se você está a 100 km/h perseguindo um carro a 80 km/h, a cada hora você avança 100 km, mas ele foge 80 km. O seu ganho real é de apenas 20 km por hora.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Fisicamente, a <strong>velocidade relativa de aproximação</strong> é a diferença entre as velocidades:
                  </p>
                  <div className="mt-3 flex justify-center">
                    <MathFormula formula="v_{rel} = |v_A| - |v_B|" display={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo de Perseguição */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden mt-8">
              <div className="bg-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold">Exemplo 3</span>
                  <h3 className="font-bold text-slate-800 text-lg">O Ladrão e a Viatura (Perseguição com Atraso)</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Um carro roubado passa por um posto policial a uma velocidade constante de <strong>30 m/s</strong>. Exatamente <strong>10 segundos depois</strong>, uma viatura policial parte do mesmo posto em perseguição, mantendo uma velocidade constante de <strong>40 m/s</strong>. 
                  <br/><br/>
                  Quanto tempo a viatura leva para alcançar o carro roubado após iniciar a perseguição?
                </p>
              </div>
              
              <div className="p-6 space-y-6 bg-white">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-purple-900 mb-3 text-xl">O Pulo do Gato: A Sincronização do Tempo</h4>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    O maior erro dos alunos neste problema é usar o mesmo <MathFormula formula="t" display={false} /> para os dois veículos. <strong>Isso é um erro físico grave!</strong> O tempo <MathFormula formula="t" display={false} /> na equação horária representa o tempo que o corpo passou em movimento.
                  </p>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Como a viatura sai 10 segundos <em>depois</em>, o carro roubado já estava se movendo. Se o cronômetro da viatura marca <MathFormula formula="t" display={false} /> segundos de perseguição, o carro roubado já está se movendo há <MathFormula formula="t" display={false} /> segundos <strong>mais</strong> os 10 segundos de vantagem inicial.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 mb-6">
                    <ul className="text-slate-800 font-medium space-y-2">
                      <li>⏱️ Tempo de movimento da Viatura = <MathFormula formula="t" display={false} /></li>
                      <li>⏱️ Tempo de movimento do Ladrão = <MathFormula formula="(t + 10)" display={false} /></li>
                    </ul>
                  </div>
                  
                  <h4 className="font-bold text-purple-900 mb-3">Passo 1: Montar as Equações Horárias</h4>
                  <p className="text-slate-700 mb-3">Ambos partem do posto policial. Vamos definir o posto como a origem das posições (<MathFormula formula="s_0 = 0" display={false} />).</p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 mb-6 space-y-4">
                    <div>
                      <p className="text-slate-600 text-sm font-bold mb-1">Equação da Viatura:</p>
                      <MathFormula formula="s_V = 0 + 40 \cdot t \implies s_V = 40t" display={true} />
                    </div>
                    <div className="border-t border-purple-100 pt-4">
                      <p className="text-slate-600 text-sm font-bold mb-1">Equação do Carro Roubado:</p>
                      <MathFormula formula="s_C = 0 + 30 \cdot (t + 10) \implies s_C = 30(t + 10)" display={true} />
                    </div>
                  </div>

                  <h4 className="font-bold text-purple-900 mb-3">Passo 2: A Condição de Encontro</h4>
                  <p className="text-slate-700 mb-3">No momento exato da captura, a viatura e o carro roubado ocupam a mesma posição na estrada. Fisicamente, impomos a condição:</p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 flex justify-center mb-6">
                    <MathFormula formula="s_V = s_C" display={true} className="text-xl" />
                  </div>
                  
                  <h4 className="font-bold text-purple-900 mb-3">Passo 3: Resolução Algébrica</h4>
                  <p className="text-slate-700 mb-3">Substituímos as equações e aplicamos a propriedade distributiva (o "chuveirinho"):</p>
                  <div className="bg-white p-5 rounded-lg border border-purple-200 space-y-4">
                    <MathFormula formula="40t = 30(t + 10)" display={true} />
                    <MathFormula formula="40t = 30t + 300" display={true} />
                    <p className="text-slate-500 text-sm text-center italic">Passamos o 30t para o outro lado subtraindo:</p>
                    <MathFormula formula="40t - 30t = 300" display={true} />
                    <MathFormula formula="10t = 300" display={true} />
                    <MathFormula formula="t = \frac{300}{10} \implies \mathbf{t = 30 \text{ s}}" display={true} className="text-xl text-purple-900" />
                  </div>
                  
                  <div className="mt-6 bg-purple-900 text-white p-4 rounded-lg text-center shadow-md">
                    <p className="font-bold text-lg">
                      A viatura alcançará o carro roubado exatamente 30 segundos após iniciar a perseguição.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== ARMADILHAS COMUNS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            Armadilhas Fatais em Provas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-red-900 mb-3 text-lg">⚠️ A Armadilha das Unidades</h3>
              <p className="text-slate-700 mb-4">
                O erro número 1 dos estudantes é misturar km/h com segundos na mesma equação. A equação horária exige coerência absoluta de unidades.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-red-700 font-bold mb-2">A Regra de Ouro da Conversão:</p>
                <div className="flex justify-center items-center gap-4 font-mono text-sm">
                  <div className="text-center">
                    <p>km/h</p>
                    <p className="text-slate-400">↓</p>
                    <p className="bg-slate-100 px-2 py-1 rounded">÷ 3,6</p>
                    <p className="text-slate-400">↓</p>
                    <p>m/s</p>
                  </div>
                  <div className="text-center">
                    <p>m/s</p>
                    <p className="text-slate-400">↓</p>
                    <p className="bg-slate-100 px-2 py-1 rounded">× 3,6</p>
                    <p className="text-slate-400">↓</p>
                    <p>km/h</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50/50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-red-900 mb-3 text-lg">⚠️ A Armadilha do Sinal Oculto</h3>
              <p className="text-slate-700 mb-4">
                Quando um problema diz "um carro viaja a 20 m/s em direção à origem", muitos escrevem <MathFormula formula="s = s_0 + 20t" display={false} />. <strong>Isso está errado!</strong>
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-slate-700 text-sm">
                  Se ele vai <em>em direção à origem</em> (posição zero), suas posições estão diminuindo. O movimento é retrógrado. A velocidade deve ser negativa na equação!
                </p>
                <p className="text-red-700 font-bold mt-3 text-center bg-red-50 py-2 rounded">
                  Correto: <MathFormula formula="s = s_0 - 20t" display={false} />
                </p>
              </div>
            </Card>
          </div>
        </div>

      </section>
    </div>
  );
}
