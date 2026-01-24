import { Link } from "wouter";
import { ArrowLeft, Eye, Microscope, Glasses, ScanEye, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicLentes() {
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
              <h1 className="text-xl font-bold text-slate-900">Lentes e Instrumentos</h1>
              <p className="text-xs text-slate-600">Formação de Imagens e Sistemas Ópticos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔎 Lentes Esféricas Delgadas</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Que São Lentes?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Lentes são meios transparentes limitados por duas superfícies refratoras (pelo menos uma curva). Elas funcionam desviando a luz por <strong>refração</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Diferente dos espelhos (que refletem), as lentes transmitem a luz, convergindo-a ou divergindo-a dependendo de sua geometria e do índice de refração relativo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">+</div>
                  <h4 className="font-bold text-slate-900">Lentes Convergentes (Bordas Finas)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Focam raios paralelos em um ponto real.</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Biconvexa</li>
                  <li>Plano-convexa</li>
                  <li>Côncavo-convexa</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">-</div>
                  <h4 className="font-bold text-slate-900">Lentes Divergentes (Bordas Grossas)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Espalham raios paralelos a partir de um foco virtual.</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Bicôncava</li>
                  <li>Plano-côncava</li>
                  <li>Convexo-côncava</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EQUAÇÃO DE HALLEY ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Equação dos Fabricantes (Halley)</h2>
          
          <div className="space-y-8">
            <p className="text-slate-700">
              Esta equação fundamental relaciona a distância focal ($f$) com o índice de refração do material ($n$) e os raios de curvatura das faces ($R_1, R_2$).
            </p>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col items-center">
              <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm mb-6">
                <MathFormula formula="\frac{1}{f} = (n_{rel} - 1) \left( \frac{1}{R_1} + \frac{1}{R_2} \right)" display={true} />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 w-full">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2 text-center">Índice Relativo</p>
                  <MathFormula formula="n_{rel} = \frac{n_{lente}}{n_{meio}}" display={true} />
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2 text-center">Face Convexa</p>
                  <p className="text-center text-green-600 font-bold text-xl">R &gt; 0</p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2 text-center">Face Côncava</p>
                  <p className="text-center text-red-600 font-bold text-xl">R &lt; 0</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Glasses className="w-5 h-5 text-yellow-600" />
                Vergência (Grau da Lente)
              </h3>
              <p className="text-slate-700 mb-3">
                A "força" de uma lente é medida em <strong>dioptrias (di)</strong>, popularmente chamadas de "graus".
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white/50 p-3 rounded border border-yellow-300">
                  <MathFormula formula="V = \frac{1}{f}" display={true} />
                </div>
                <p className="text-sm text-slate-600">
                  Importante: Para obter dioptrias, a distância focal $f$ deve estar obrigatoriamente em <strong>metros</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FÓRMULAS PRINCIPAIS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calculator className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fórmulas Principais</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border-l-4 border-orange-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Equação de Halley</h3>
              <p className="text-sm text-slate-600 mb-4">Calcula a distância focal com base na geometria da lente.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="\frac{1}{f} = (n_{rel} - 1) \left( \frac{1}{R_1} + \frac{1}{R_2} \right)" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$n_{"{rel}"}$: Índice relativo</span>
                <span>$R_1, R_2$: Raios de curvatura</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vergência</h3>
              <p className="text-sm text-slate-600 mb-4">Poder de convergência ou divergência da lente.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="V = \frac{1}{f}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$V$: Vergência (di)</span>
                <span>$f$: Distância focal (m)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-green-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Associação de Lentes</h3>
              <p className="text-sm text-slate-600 mb-4">Vergência equivalente de lentes justapostas.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="V_{eq} = V_1 + V_2 + \dots" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$V_{"{eq}"}$: Vergência total</span>
                <span>$V_i$: Vergência individual</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-purple-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Lei de Snell-Descartes</h3>
              <p className="text-sm text-slate-600 mb-4">Refração da luz na interface entre dois meios.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="n_1 \cdot \sin(i) = n_2 \cdot \sin(r)" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$n$: Índice de refração</span>
                <span>$i, r$: Ângulos com a normal</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TÓPICOS AVANÇADOS (ITA/IME) ===== */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <ScanEye className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold text-white">Tópicos Avançados (ITA/IME)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Método Matricial (ABCD)</h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                Para sistemas complexos, representamos cada elemento óptico como uma matriz $2 \times 2$ que transforma o vetor raio (altura $y$ e ângulo $\alpha$).
              </p>
              <div className="bg-black/30 p-3 rounded border border-white/10 mb-3">
                <MathFormula formula="\\begin{pmatrix} y_2 \\\\ \alpha_2 \\end{pmatrix} = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ \alpha_1 \\end{pmatrix}" display={true} />
              </div>
              <p className="text-xs text-slate-400">
                A matriz de uma lente delgada é <MathFormula formula="M_L = \\begin{pmatrix} 1 & 0 \\\\ -1/f & 1 \\end{pmatrix}" display={false} />.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Aberrações Ópticas</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-white block mb-1">Aberração Esférica</strong>
                  <p className="text-sm text-slate-300">Raios distantes do eixo (marginais) focam antes dos raios centrais (paraxiais). Corrige-se com lentes asféricas.</p>
                </li>
                <li>
                  <strong className="text-white block mb-1">Aberração Cromática</strong>
                  <p className="text-sm text-slate-300">O índice de refração varia com a cor (<MathFormula formula="n_{azul} > n_{vermelho}" display={false} />). A luz azul foca antes da vermelha. Corrige-se com dubletos acromáticos.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-slate-700 mb-4">Agora que você entende como as lentes funcionam, vamos ver a natureza ondulatória da luz:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/optica/topic/fenomenos">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Fenômenos Ópticos</Button>
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
