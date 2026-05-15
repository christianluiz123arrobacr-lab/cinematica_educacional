import { Link } from "wouter";
import { ArrowLeft, Activity, Lightbulb, AlertTriangle, CheckCircle2, Info, Target, Compass, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function DinamicaTopicPrimeiraLei() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Dinâmica</h1>
              <p className="text-xs text-slate-600 font-medium">Primeira Lei de Newton (Inércia)</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-600" />
            A Primeira Lei de Newton: O Princípio da Inércia
          </h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Quebra de um Paradigma de 2000 Anos</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Antes de entrarmos nas fórmulas e definições matemáticas, precisamos entender o tamanho da revolução intelectual que a Primeira Lei de Newton causou. Para compreender a inércia, você precisa primeiro desaprender o que o seu próprio "senso comum" diz sobre o movimento. Durante mais de dois milênios, a humanidade inteira — incluindo os maiores sábios da antiguidade — acreditou na física proposta pelo filósofo grego <strong>Aristóteles</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    O Erro do Senso Comum (Aristóteles)
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Aristóteles observava o mundo ao seu redor e concluía: <em>"O estado natural e perfeito de todos os corpos é o repouso absoluto. Para que um corpo se mova, e continue se movendo, é estritamente necessária a ação de uma força constante empurrando-o."</em>
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Parece extremamente lógico, não é? Se você empurra um livro pesado sobre uma mesa de madeira e solta, o que acontece? Ele para quase imediatamente. Se você para de pedalar uma bicicleta em uma rua plana, ela vai perdendo velocidade até parar. O nosso cérebro, baseado na experiência diária, nos diz que o movimento "morre" naturalmente e precisa de força para "viver". Esse foi o erro que travou a ciência por 2000 anos.
                  </p>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm text-slate-100">
                  <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    A Genialidade de Galileu Galilei
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    No século XVII, Galileu Galilei fez o que ninguém havia feito: ele imaginou um mundo ideal. Ele percebeu que o livro não para porque "quer" parar ou porque o repouso é seu estado natural. O livro para porque existe uma força invisível "roubando" seu movimento: o <strong>atrito</strong>!
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Galileu propôs um experimento mental revolucionário: imagine uma superfície perfeitamente lisa, como gelo polido, e uma esfera perfeitamente redonda. Se você der um empurrão nessa esfera, e não houver atrito nem resistência do ar, ela não vai parar nunca. Ela deslizará em linha reta, com velocidade constante, pela eternidade. Galileu concluiu a maior verdade da cinemática: <em>"O movimento retilíneo uniforme é um estado tão natural e eterno quanto o próprio repouso."</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-600" />
                O Enunciado Oficial de Newton
              </h4>
              <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-700 text-lg my-4">
                "Todo corpo continua em seu estado de repouso ou de movimento retilíneo uniforme, a menos que seja forçado a mudar aquele estado por forças aplicadas sobre ele."
              </blockquote>
              <p className="text-slate-700 mt-4">
                Em linguagem moderna e matemática: Se a força resultante sobre um corpo é nula (<MathFormula formula="\vec{F}_R = \vec{0}" display={false} />), sua aceleração é nula (<MathFormula formula="\vec{a} = \vec{0}" display={false} />).
              </p>
            </div>
          </div>
        </div>

        {/* ===================== O CONCEITO DE INÉRCIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧠 O Que é Inércia, Afinal?</h2>
          
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              A primeira coisa que você precisa gravar na mente é: <strong>Inércia não é uma força. Inércia não é uma energia.</strong> Você nunca vai calcular "quantos Newtons de inércia" um corpo tem. Inércia é uma <strong>propriedade intrínseca da matéria</strong>. É a "preguiça" cósmica, a teimosia absoluta que todo corpo tem de manter exatamente o que está fazendo no momento. Se ele está parado, ele "quer" continuar parado. Se ele está a 100 km/h para o norte, ele "quer" continuar a 100 km/h para o norte, para sempre.
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-4">A Medida da Inércia: A Massa</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Como medimos o quão "preguiçoso" ou "teimoso" um corpo é? Através da sua <strong>Massa</strong>. A massa de um corpo é a medida quantitativa da sua inércia. Quanto maior a massa, maior a dificuldade de alterar seu estado de movimento.
                  </p>
                  <ul className="space-y-4 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1 text-lg">•</span>
                      <span><strong>Muita Massa (Muita Inércia):</strong> Imagine um trem de carga de 500 toneladas parado. É preciso uma força colossal das locomotivas para fazê-lo começar a andar. Agora imagine esse mesmo trem a 80 km/h. É preciso uma força de frenagem absurda, ao longo de quilômetros, para obrigá-lo a parar. A inércia dele é gigantesca.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1 text-lg">•</span>
                      <span><strong>Pouca Massa (Pouca Inércia):</strong> Imagine uma bola de ping-pong de 2 gramas. Um leve sopro a tira do repouso. Se ela estiver voando na sua direção, você a para com um dedo sem sentir dor. A inércia dela é minúscula.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex flex-col justify-center">
                  <h4 className="font-semibold text-amber-400 mb-3 flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5" />
                    Propriedade de Ouro: A Equivalência Dinâmica
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Para a física newtoniana, estar em <strong>Repouso Absoluto</strong> ou estar em <strong>Movimento Retilíneo Uniforme (MRU)</strong> é exatamente a mesma coisa do ponto de vista dinâmico. Não há diferença matemática nas forças.
                  </p>
                  <div className="bg-slate-900 p-3 rounded border border-slate-600 text-center">
                    <p className="text-emerald-400 font-mono text-sm">Repouso = Equilíbrio Estático</p>
                    <p className="text-emerald-400 font-mono text-sm mt-1">MRU = Equilíbrio Dinâmico</p>
                    <p className="text-white font-bold mt-2">Em ambos: Força Resultante = 0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplos do Cotidiano */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">A Inércia no Nosso Dia a Dia (Por que usamos cinto de segurança?)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">1. A Freada Brusca do Ônibus</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Você está em pé no corredor de um ônibus viajando a 60 km/h. De repente, um cachorro cruza a rua e o motorista pisa fundo no freio. O que acontece com você? Você é violentamente "jogado" para frente. Mas preste atenção na física: você não foi jogado para frente. Não existe nenhuma força te empurrando.
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed mt-2">
                    O que realmente aconteceu: O ônibus freou (sofreu uma força externa), mas <strong>você não</strong>. Por inércia, o seu corpo apenas tentou continuar fazendo o que já estava fazendo: viajar a 60 km/h para frente. O ônibus parou, você continuou. É por isso que precisamos nos segurar nas barras: para que a barra aplique em nós a força necessária para mudarmos nosso estado de movimento junto com o ônibus.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">2. A Arrancada do Carro Esportivo</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Você está sentado no banco do passageiro de um carro esportivo parado no semáforo. O sinal fica verde e o motorista acelera com tudo. Você sente suas costas sendo "esmagadas" contra o banco. Novamente, não há uma força te empurrando para trás.
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed mt-2">
                    O que realmente aconteceu: Seu corpo estava em repouso e, por inércia, a tendência natural dele é continuar exatamente ali, parado em relação ao solo. O carro, no entanto, foi violentamente acelerado para frente. O banco do carro avança contra as suas costas e te empurra para frente, obrigando o seu corpo a sair do repouso e acompanhar o carro. A sensação de ser esmagado é apenas a força normal do banco vencendo a sua inércia.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== ARMADILHAS E ERROS CONCEITUAIS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ Armadilhas e Erros Conceituais Clássicos</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              A Primeira Lei de Newton é a que mais derruba alunos em provas de alto nível (como ITA e IME), não por cálculos complexos, mas por <strong>pegadinhas conceituais</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">Erro 1: "Se não tem força, ele para"</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>A Armadilha:</strong> Achar que o movimento precisa de força para se manter.<br/>
                  <strong>A Verdade:</strong> Se a força resultante for zero, um corpo em movimento continuará em MRU para sempre. Ele só para se houver uma força contra (como o atrito).
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">Erro 2: "Força centrífuga é inércia"</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>A Armadilha:</strong> Achar que a "força" que te joga para fora na curva é uma força real.<br/>
                  <strong>A Verdade:</strong> Não existe força te puxando para fora. Seu corpo apenas quer seguir em <strong>linha reta</strong> (inércia). O carro faz a curva, você tenta seguir reto.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">Erro 3: "Inércia depende da velocidade"</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>A Armadilha:</strong> Achar que um caminhão a 100 km/h tem mais inércia que o mesmo caminhão a 10 km/h.<br/>
                  <strong>A Verdade:</strong> A inércia depende <strong>exclusivamente da massa</strong>. A velocidade não altera a inércia do corpo (na física clássica).
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">Erro 4: "MRU e Repouso são diferentes"</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>A Armadilha:</strong> Achar que a Força Resultante = 0 significa apenas que o corpo está parado.<br/>
                  <strong>A Verdade:</strong> Força Resultante = 0 significa <strong>Equilíbrio</strong>. Pode ser Equilíbrio Estático (repouso) ou Equilíbrio Dinâmico (MRU).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXEMPLOS RESOLVIDOS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos</h2>

          <div className="space-y-8">
            {/* Exemplo 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h5 className="font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  Exemplo 1: O Paraquedista
                </h5>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-700">
                  Um paraquedista de 80 kg salta de um avião. Após alguns segundos, ele abre o paraquedas e atinge a chamada "velocidade terminal", caindo com velocidade constante de 5 m/s. Qual é a força resultante sobre o paraquedista neste momento?
                </p>
                
                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100 space-y-3">
                  <p className="font-semibold text-emerald-900">Resolução Passo a Passo:</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    1. O problema afirma que ele cai com <strong>velocidade constante</strong> e em linha reta (para baixo).<br/>
                    2. Movimento em linha reta com velocidade constante é a definição exata de <strong>MRU</strong>.<br/>
                    3. Pela Primeira Lei de Newton, se um corpo está em MRU, ele está em Equilíbrio Dinâmico.<br/>
                    4. Portanto, a força resultante sobre ele é obrigatoriamente <strong>ZERO</strong>.
                  </p>
                  <div className="bg-slate-900 p-3 rounded mt-2 text-center">
                    <MathFormula formula="\vec{F}_R = 0 \text{ N}" display={true} className="text-emerald-400" />
                  </div>
                  <p className="text-slate-600 text-xs italic mt-2">
                    *Nota: Isso significa que a força de resistência do ar para cima anulou exatamente a força peso para baixo.
                  </p>
                </div>
              </div>
            </div>

                        {/* Exemplo 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h5 className="font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  Exemplo 2: A Moeda no Trem
                </h5>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-700">
                  Um trem viaja em linha reta a uma velocidade constante de 100 km/h. Um passageiro joga uma moeda verticalmente para cima. Onde a moeda cairá? (Despreze a resistência do ar dentro do vagão).
                </p>
                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100 space-y-3">
                  <p className="font-semibold text-emerald-900">Resolução Passo a Passo:</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    1. Antes de ser lançada, a moeda está na mão do passageiro, viajando a 100 km/h na horizontal.<br/>
                    2. Ao ser lançada para cima, a moeda adquire um movimento vertical, mas <strong>por inércia</strong>, ela mantém sua velocidade horizontal de 100 km/h.<br/>
                    3. Como o trem também continua a 100 km/h, a moeda e a mão do passageiro andam para frente juntos, na mesma velocidade.<br/>
                    4. Portanto, a moeda cairá <strong>exatamente na mão do passageiro</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== SEGUNDA LEI DE NEWTON ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200 mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-amber-500" />
            A Segunda Lei de Newton: O Princípio Fundamental da Dinâmica
          </h2>
          
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              A Primeira Lei nos disse o que acontece quando a Força Resultante é zero (o corpo fica em MRU ou repouso). Mas e se a Força Resultante <strong>não for zero</strong>? O que acontece quando o equilíbrio é quebrado? A Segunda Lei de Newton responde a essa pergunta com a equação mais famosa da física clássica.
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
              <div className="flex flex-col items-center justify-center mb-8">
                <h3 className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-4">A Equação Fundamental</h3>
                <div className="bg-black/50 p-6 rounded-xl border border-slate-600 shadow-inner">
                  <MathFormula formula="\vec{F}_R = m \cdot \vec{a}" display={true} className="text-4xl text-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-600">
                  <div className="text-amber-400 font-bold text-xl mb-2">F<sub className="text-sm">R</sub></div>
                  <h4 className="text-white font-semibold mb-2">Força Resultante</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    A soma vetorial de <strong>todas</strong> as forças que atuam no corpo. É a causa da mudança de movimento. Medida em Newtons (N).
                  </p>
                </div>
                
                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-600">
                  <div className="text-emerald-400 font-bold text-xl mb-2">m</div>
                  <h4 className="text-white font-semibold mb-2">Massa (Inércia)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    A resistência do corpo à mudança. Quanto maior a massa, mais força é necessária para gerar a mesma aceleração. Medida em quilogramas (kg).
                  </p>
                </div>

                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-600">
                  <div className="text-blue-400 font-bold text-xl mb-2">a</div>
                  <h4 className="text-white font-semibold mb-2">Aceleração</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    A consequência da força. É a taxa de variação da velocidade. A aceleração tem <strong>sempre a mesma direção e sentido</strong> da Força Resultante. Medida em m/s².
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                A Lógica Intuitiva da Fórmula
              </h4>
              <p className="text-slate-700 leading-relaxed mb-3">
                A equação <MathFormula formula="F = m \cdot a" display={false} /> não é apenas uma decoreba matemática, ela conta uma história lógica perfeita:
              </p>
              <ul className="space-y-3 text-slate-700 ml-4 list-disc">
                <li>Se você quer acelerar um carro (aumentar o <strong>a</strong>), você precisa pisar mais fundo no acelerador (aumentar o <strong>F</strong>).</li>
                <li>Se você tentar empurrar um fusca (massa pequena) e depois um caminhão (massa grande) com a mesma força <strong>F</strong>, o fusca vai acelerar muito mais. A massa <strong>m</strong> é o "freio natural" da aceleração.</li>
              </ul>
            </div>

            {/* Exemplo Resolvido da 2ª Lei */}
            <div className="border border-slate-200 rounded-xl overflow-hidden mt-8">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h5 className="font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-amber-600" />
                  Exemplo 3: O Bloco Empurrado
                </h5>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-700">
                  Um bloco de massa <strong>m = 5 kg</strong> está em repouso sobre uma superfície horizontal sem atrito. Uma força constante de <strong>20 N</strong> é aplicada sobre ele. Qual será a velocidade do bloco após 4 segundos?
                </p>
                
                <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 space-y-3">
                  <p className="font-semibold text-amber-900">Resolução Passo a Passo:</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    1. Primeiro, usamos a <strong>Segunda Lei de Newton</strong> para descobrir a aceleração que essa força gera no bloco.
                  </p>
                  <div className="bg-white p-3 rounded border border-slate-200 text-center my-2">
                    <MathFormula formula="F_R = m \cdot a \implies 20 = 5 \cdot a \implies a = \frac{20}{5} = 4 \text{ m/s}^2" display={true} />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    2. Agora que sabemos a aceleração, o problema vira uma questão de <strong>Cinemática (MRUV)</strong>. Queremos a velocidade após 4 segundos, partindo do repouso (<MathFormula formula="v_0 = 0" display={false} />). Usamos a Equação da Velocidade:
                  </p>
                  <div className="bg-white p-3 rounded border border-slate-200 text-center my-2">
                    <MathFormula formula="v = v_0 + a \cdot t \implies v = 0 + 4 \cdot 4 \implies v = 16 \text{ m/s}" display={true} />
                  </div>
                  <p className="text-slate-700 text-sm font-bold mt-2">
                    Resposta: A velocidade será de 16 m/s.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
