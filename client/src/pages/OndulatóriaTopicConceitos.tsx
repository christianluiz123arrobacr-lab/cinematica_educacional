import { Link } from "wouter";
import { ArrowLeft, Waves, Activity, Radio, Zap, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatoriaTopicConceitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondas Mecânicas</h1>
              <p className="text-xs text-slate-600">Natureza e Propagação</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 O Que é uma Onda?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Uma onda é uma perturbação que se propaga através de um meio (ou no vácuo), transportando <strong>energia</strong> e <strong>momento linear</strong>, mas sem transportar <strong>matéria</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Imagine uma "ola" em um estádio de futebol: a perturbação (pessoas levantando) viaja pela arquibancada, mas ninguém sai do seu lugar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-bold text-slate-900">Ondas Mecânicas</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Precisam de um meio material para se propagar.</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Som (ar, água, sólidos)</li>
                  <li>Ondas em cordas</li>
                  <li>Ondas sísmicas</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Radio className="w-6 h-6 text-purple-600" />
                  <h4 className="font-bold text-slate-900">Ondas Eletromagnéticas</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Propagam-se no vácuo e em meios materiais.</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Luz visível</li>
                  <li>Rádio, Wi-Fi</li>
                  <li>Raios X, Micro-ondas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EQUAÇÃO DE ONDA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 A Equação Fundamental</h2>
          
          <div className="space-y-8">
            <p className="text-slate-700">
              A relação mais importante da ondulatória conecta a velocidade de propagação ($v$), o comprimento de onda ($\lambda$) e a frequência ($f$).
            </p>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col items-center">
              <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm mb-6">
                <MathFormula formula="v = \lambda \cdot f" display={true} />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 w-full">
                <div className="bg-white p-4 rounded border border-slate-200 text-center">
                  <p className="font-bold text-slate-900 mb-1">Velocidade ($v$)</p>
                  <p className="text-xs text-slate-500">Depende apenas do MEIO de propagação.</p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200 text-center">
                  <p className="font-bold text-slate-900 mb-1">Frequência ($f$)</p>
                  <p className="text-xs text-slate-500">Depende apenas da FONTE. Não muda na refração.</p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200 text-center">
                  <p className="font-bold text-slate-900 mb-1">Comp. de Onda ($\lambda$)</p>
                  <p className="text-xs text-slate-500">Distância entre dois picos consecutivos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FÓRMULAS PRINCIPAIS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calculator className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fórmulas Principais</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Equação Fundamental da Ondulatória</h3>
              <p className="text-sm text-slate-600 mb-4">Relaciona velocidade, comprimento de onda e frequência.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="v = \lambda \cdot f" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$v$: Velocidade (m/s)</span>
                <span>$\lambda$: Comprimento de onda (m)</span>
                <span>$f$: Frequência (Hz)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-purple-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Período e Frequência</h3>
              <p className="text-sm text-slate-600 mb-4">Relação inversa entre o tempo de um ciclo e a frequência.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="T = \frac{1}{f}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$T$: Período (s)</span>
                <span>$f$: Frequência (Hz)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Função de Onda Harmônica</h3>
              <p className="text-sm text-slate-600 mb-4">Descreve a posição de qualquer ponto da onda no tempo e espaço.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="y(x,t) = A \cos(kx - \omega t + \phi_0)" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$k$: Número de onda ($2\pi/\lambda$)</span>
                <span>$\omega$: Frequência angular ($2\pi f$)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-green-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Velocidade em Corda Tensa (Taylor)</h3>
              <p className="text-sm text-slate-600 mb-4">Velocidade da onda em função da tensão e densidade linear.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="v = \sqrt{\frac{T}{\mu}}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$T$: Tração na corda (N)</span>
                <span>$\mu$: Densidade linear (kg/m)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TÓPICOS AVANÇADOS (ITA/IME) ===== */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Tópicos Avançados (ITA/IME)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">Equação de Onda Diferencial</h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                A dedução dinâmica para uma corda tensa leva à equação diferencial parcial que governa todas as ondas clássicas:
              </p>
              <div className="bg-black/30 p-3 rounded border border-white/10 mb-3">
                <MathFormula formula="\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}" display={true} />
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">Função de Onda Harmônica</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Solução para uma onda senoidal viajando no sentido positivo de $x$:
              </p>
              <div className="bg-black/30 p-3 rounded border border-white/10 mb-3">
                <MathFormula formula="y(x,t) = A \cos(kx - \omega t + \phi_0)" display={true} />
              </div>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>$k = 2\pi/\lambda$ (Número de onda)</li>
                <li>$\omega = 2\pi f$ (Frequência angular)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-slate-700 mb-4">Agora que você conhece a equação fundamental, vamos estudar o movimento que origina as ondas:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ondulatoria/topic/mhs">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Movimento Harmônico Simples (MHS)</Button>
            </Link>
            <Link href="/ondulatoria">
              <Button variant="outline" className="border-indigo-200 hover:bg-indigo-100 text-indigo-700">Voltar para Ondulatória</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
