import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicLentes() {
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
          <h1 className="text-xl font-bold text-slate-900">Lentes e Espelhos</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔎 Lentes e Espelhos</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equação de Gauss para Lentes</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Equação da Lente Delgada:</strong> Relaciona a distância do objeto, distância da imagem e a distância focal.</p>
                <div className="bg-white border border-blue-300 rounded p-4">
                  <MathFormula formula={String.raw`$$\frac{1}{f} = \frac{1}{p} + \frac{1}{q}$$`} display={true} />
                </div>
                <p className="text-sm mt-2">Onde: f = distância focal, p = distância do objeto, q = distância da imagem</p>
                <p className="mt-3"><strong>Ampliação:</strong></p>
                <div className="bg-white border border-blue-300 rounded p-4">
                  <MathFormula formula={String.raw`$$A = -\frac{q}{p} = \frac{h'}{h}$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Espelhos Esféricos</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Equação dos Espelhos:</strong> Mesma forma que a equação de Gauss para lentes.</p>
                <div className="bg-white border border-green-300 rounded p-4">
                  <MathFormula formula={String.raw`$$\frac{1}{f} = \frac{1}{p} + \frac{1}{q}$$`} display={true} />
                </div>
                <p className="text-sm mt-2">Para espelhos côncavos: f {'>'} 0; Para espelhos convexos: f {'<'} 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
