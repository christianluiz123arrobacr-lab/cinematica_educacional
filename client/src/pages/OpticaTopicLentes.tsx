import { Link } from "wouter";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAOpticsLensesTheory } from "@/content/optics/ita_optics_lenses";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicLentes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
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
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Lentes e Espelhos - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Física II</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔎 Lentes e Espelhos</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sistemas Ópticos</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>O estudo de lentes e espelhos permite a formação de imagens e a construção de instrumentos ópticos.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Utilizamos o referencial de Gauss e métodos matriciais para analisar sistemas complexos com precisão.
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo Avançado */}
        <AdvancedTheory 
          title={ITAOpticsLensesTheory.title}
          introduction={ITAOpticsLensesTheory.introduction}
          sections={ITAOpticsLensesTheory.sections}
        />

        {/* ===== RESUMO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 mt-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo de Fórmulas Essenciais</h3>
          <div className="space-y-3 text-green-900 text-sm">
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Equação de Halley: } \frac{1}{f} = (n_{rel}-1)(\frac{1}{R_1} + \frac{1}{R_2})$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Vergência: } V = \frac{1}{f} \quad (\text{dioptrias})$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Associação de Lentes: } V_{eq} = V_1 + V_2$$`} display={true} />
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Aprofunde seus conhecimentos em fenômenos ondulatórios da luz:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/optica/topic/fenomenos">
              <Button className="bg-blue-600 hover:bg-blue-700">Fenômenos Ópticos</Button>
            </Link>
            <Link href="/optica">
              <Button variant="outline">Voltar para Óptica</Button>
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
