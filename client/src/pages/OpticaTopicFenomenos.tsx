import { Link } from "wouter";
import { ArrowLeft, Eye, Waves, Rainbow, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicFenomenos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/optica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Óptica Física</h1>
              <p className="text-xs text-slate-600">Interferência, Difração e Polarização</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 A Natureza Ondulatória</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quando a Geometria Falha</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Óptica Geométrica funciona bem para espelhos e lentes comuns. Mas quando a luz interage com obstáculos muito pequenos (da ordem de micrômetros), surgem fenômenos que só podem ser explicados tratando a luz como <strong>onda</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A prova definitiva de que a luz é uma onda veio com o Experimento de Young (Fenda Dupla), que demonstrou a interferência luminosa.
              </p>
            </div>
          </div>
        </div>

        {/* ===== INTERFERÊNCIA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌈 Interferência (Young)</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  No experimento de Young, a luz passa por duas fendas estreitas separadas por uma distância $d$. As ondas que saem das fendas interferem entre si ao chegar na tela.
                </p>
                <div className="bg-slate-50 p-4 rounded border border-slate-200 mb-4">
                  <p className="font-bold text-slate-900 mb-2">Diferença de Caminho ($\Delta x$)</p>
                  <MathFormula formula="\Delta x = d \sin\theta \approx d \frac{y}{D}" display={true} />
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                {/* Representação visual abstrata de interferência */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.8),_transparent_50%),radial-gradient(circle_at_70%_50%,_rgba(255,255,255,0.8),_transparent_50%)]"></div>
                <div className="text-center relative z-10">
                  <Waves className="w-12 h-12 text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-bold">Padrão de Franjas</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-center">Interferência Construtiva (Brilho)</h3>
                <div className="bg-white p-4 rounded border border-green-300 mb-4">
                  <MathFormula formula="\Delta x = m\lambda" display={true} />
                </div>
                <p className="text-sm text-green-800 text-center">
                  Ocorre quando a diferença de caminho é um múltiplo inteiro do comprimento de onda.
                </p>
              </div>

              <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-center">Interferência Destrutiva (Escuro)</h3>
                <div className="bg-white p-4 rounded border border-slate-300 mb-4">
                  <MathFormula formula="\Delta x = (m + 1/2)\lambda" display={true} />
                </div>
                <p className="text-sm text-slate-700 text-center">
                  Ocorre quando a diferença de caminho é um múltiplo semi-inteiro (meio comprimento de onda).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DIFRAÇÃO E POLARIZAÇÃO ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Difração */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-900">Difração</h2>
            </div>
            <p className="text-slate-700 mb-4 text-sm">
              É a capacidade da luz de contornar obstáculos. Em uma fenda simples de largura $a$, a condição para <strong>mínimos</strong> (escuro) é:
            </p>
            <div className="bg-orange-50 p-4 rounded border border-orange-200 mb-4">
              <MathFormula formula="a \sin\theta = m\lambda" display={true} />
            </div>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Critério de Rayleigh</h4>
              <p className="text-xs text-slate-600 mb-2">Limite de resolução de instrumentos ópticos (abertura $D$):</p>
              <MathFormula formula="\theta_{min} = 1,22 \frac{\lambda}{D}" display={true} />
            </div>
          </div>

          {/* Polarização */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Rainbow className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-slate-900">Polarização</h2>
            </div>
            <p className="text-slate-700 mb-4 text-sm">
              A luz é uma onda transversal. Polarizar significa selecionar um único plano de vibração para o campo elétrico.
            </p>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-900 text-sm mb-2">Lei de Malus</h4>
                <p className="text-xs text-purple-800 mb-2">Intensidade após passar por polarizador:</p>
                <MathFormula formula="I = I_0 \cos^2\theta" display={true} />
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-900 text-sm mb-2">Lei de Brewster</h4>
                <p className="text-xs text-purple-800 mb-2">Polarização total por reflexão:</p>
                <MathFormula formula="\tan\theta_B = \frac{n_2}{n_1}" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Missão Cumprida!</h3>
          <p className="text-slate-700 mb-4">Você completou toda a teoria de Óptica Física. Agora é hora de praticar:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/optica/simulator">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Ir para Simulador</Button>
            </Link>
            <Link href="/optica">
              <Button variant="outline" className="border-orange-200 hover:bg-orange-100 text-orange-700">Voltar para Óptica</Button>
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
