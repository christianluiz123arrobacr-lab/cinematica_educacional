import { Link } from "wouter";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function OpticaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/fisica-ii">
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
              <h1 className="text-xl font-bold text-slate-900">Óptica - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Física II</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🔍 Óptica: A Ciência da Luz</h2>
          <p className="text-slate-700 leading-relaxed">
            Óptica é o ramo da Física que estuda a luz, sua propagação, reflexão, refração e interação com a matéria. Ela explica como enxergamos o mundo ao nosso redor.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/optica/topic/conceitos">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Conceitos Fundamentais</h3>
              <p className="text-slate-600 text-sm">Natureza da luz, propagação, reflexão e refração</p>
            </Card>
          </Link>

          <Link href="/optica/topic/lentes">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔎</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lentes e Espelhos</h3>
              <p className="text-slate-600 text-sm">Formação de imagens, equação de Gauss</p>
            </Card>
          </Link>

          <Link href="/optica/topic/fenomenos">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌈</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fenômenos Ópticos</h3>
              <p className="text-slate-600 text-sm">Dispersão, difração, interferência</p>
            </Card>
          </Link>

          <Link href="/optica/simulator">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Simulador</h3>
              <p className="text-slate-600 text-sm">Visualize fenômenos ópticos interativamente</p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
