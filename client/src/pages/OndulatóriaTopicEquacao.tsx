import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicEquacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondulatória - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Equação da Onda e Propagação</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Equação da Onda Unidimensional</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Rigorosa</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A equação da onda descreve como uma perturbação se propaga no espaço e no tempo.</strong> É uma equação diferencial parcial que governa todos os tipos de ondas.
              </p>
              <div className="bg-white border border-blue-300 rounded p-4 mt-3">
                <MathFormula formula={String.raw`$$\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}$$`} display={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Conteúdo em Desenvolvimento</h2>
          <p className="text-green-800">Esta página está sendo expandida com exemplos militares completos e análises rigorosas.</p>
        </div>
      </section>
    </div>
  );
}
