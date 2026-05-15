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
                Antes de entrarmos nas fórmulas, precisamos entender o tamanho da revolução que a Primeira Lei de Newton causou. Durante mais de dois milênios, a humanidade acreditou na física de <strong>Aristóteles</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    O Erro de Aristóteles
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Aristóteles dizia: <em>"O estado natural dos corpos é o repouso. Para que um corpo se mova, é necessária uma força constante empurrando-o."</em><br/><br/>
                    Parece lógico, não? Se você empurra um livro na mesa e solta, ele para. O senso comum nos diz que o movimento precisa de força para existir.
                  </p>
                </div>
                
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 shadow-sm text-slate-100">
                  <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    A Genialidade de Galileu
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Galileu Galilei percebeu o erro: o livro não para porque "quer" parar, ele para por causa do <strong>atrito</strong>! Se tirarmos todo o atrito, o livro deslizaria para sempre.<br/><br/>
                    Galileu concluiu: <em>"O movimento uniforme é tão natural quanto o repouso."</em>
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
              Inércia não é uma força. Inércia não é uma energia. <strong>Inércia é uma propriedade da matéria</strong>. É a "preguiça" cósmica que todo corpo tem de mudar o que está fazendo.
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-4">A Medida da Inércia</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Como medimos o quão "preguiçoso" um corpo é? Através da sua <strong>Massa</strong>.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Muita Massa:</strong> Muita inércia. É muito difícil fazer um trem parado começar a andar, e igualmente difícil fazer um trem em movimento parar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Pouca Massa:</strong> Pouca inércia. É fácil chutar uma bola de ping-pong e fácil pará-la.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Propriedade de Ouro: A Equivalência
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Para a física, estar em <strong>Repouso</strong> ou em <strong>Movimento Retilíneo Uniforme (MRU)</strong> é exatamente a mesma coisa do ponto de vista dinâmico. Ambos são estados de <strong>Equilíbrio</strong> (Força Resultante = 0).
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplos do Cotidiano */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">A Inércia no Nosso Dia a Dia</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-bold text-slate-800 mb-2">1. A Freada do Ônibus</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Você está em pé no ônibus a 60 km/h. O motorista freia bruscamente. Você é "jogado" para frente. Por quê?<br/><br/>
                    O ônibus freou, mas <strong>você não</strong>. Por inércia, seu corpo tende a continuar a 60 km/h para frente. O cinto de segurança (ou sua mão na barra) é a força externa necessária para mudar seu estado.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-bold text-slate-800 mb-2">2. A Arrancada do Carro</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Você está parado no semáforo. O sinal abre e o carro arranca rápido. Você é "colado" no banco. Por quê?<br/><br/>
                    Seu corpo estava em repouso e tende a continuar em repouso. O carro vai para frente, e o banco empurra suas costas para obrigar você a acompanhar o movimento.
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

      </section>
    </div>
  );
}
