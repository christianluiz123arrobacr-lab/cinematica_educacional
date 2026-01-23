import { Link } from "wouter";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAOpticsPhenomenaTheory } from "@/content/optics/ita_optics_phenomena";
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
              <h1 className="text-xl font-bold text-slate-900">Fenômenos Ópticos - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Física II</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌈 Óptica Física</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Natureza Ondulatória</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Quando a luz interage com obstáculos de dimensões comparáveis ao seu comprimento de onda, surgem fenômenos que a Óptica Geométrica não explica.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                Interferência, difração e polarização são as provas definitivas do caráter ondulatório da luz.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Experimento Crucial</h4>
              <p className="text-slate-700">
                O experimento da fenda dupla de Young demonstrou que a luz se comporta como onda, criando padrões de interferência construtiva e destrutiva.
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo Avançado */}
        <AdvancedTheory 
          title={ITAOpticsPhenomenaTheory.title}
          introduction={ITAOpticsPhenomenaTheory.introduction}
          sections={ITAOpticsPhenomenaTheory.sections}
        />

        {/* ===== RESUMO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📋 Resumo de Fórmulas Essenciais</h2>
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Interferência e Difração</h3>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white border border-green-300 rounded p-4 mb-4">
                  <MathFormula formula={String.raw`$$\text{Fenda Dupla (Máximos): } d \sin\theta = m\lambda$$`} display={true} />
                </div>
                <div className="bg-white border border-green-300 rounded p-4 mb-4">
                  <MathFormula formula={String.raw`$$\text{Fenda Simples (Mínimos): } a \sin\theta = m\lambda$$`} display={true} />
                </div>
                <div className="bg-white border border-green-300 rounded p-4 mb-4">
                  <MathFormula formula={String.raw`$$\text{Lei de Malus: } I = I_0 \cos^2\theta$$`} display={true} />
                </div>
                <div className="bg-white border border-green-300 rounded p-4 mb-4">
                  <MathFormula formula={String.raw`$$\text{Lei de Brewster: } \tan\theta_B = \frac{n_2}{n_1}$$`} display={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-slate-700 mb-4">Você completou a teoria de Óptica! Teste seus conhecimentos:</p>
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
