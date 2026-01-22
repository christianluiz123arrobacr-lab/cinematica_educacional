import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicFenomenos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/optica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Fenômenos Ópticos</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌈 Fenômenos Ópticos</h2>
          
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dispersão da Luz</h3>
              <p className="text-slate-700">A dispersão ocorre quando a luz branca é separada em suas cores componentes ao passar por um prisma ou gotícula de água.</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Difração da Luz</h3>
              <p className="text-slate-700">A difração é o desvio da luz quando ela passa por uma abertura ou contorna um obstáculo.</p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Interferência da Luz</h3>
              <p className="text-slate-700">A interferência ocorre quando duas ondas de luz se sobrepõem, resultando em padrões de reforço ou cancelamento.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Polarização da Luz</h3>
              <p className="text-slate-700">A polarização é a orientação preferencial das oscilações do campo elétrico da onda de luz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
