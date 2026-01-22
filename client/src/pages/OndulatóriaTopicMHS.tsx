import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicMHS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondulatória - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Movimento Harmônico Simples (MHS)</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Movimento Harmônico Simples (MHS)</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Rigorosa</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>MHS é um movimento periódico onde a aceleração é sempre proporcional e oposta ao deslocamento.</strong>
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo: Massa em Mola</h4>
              <p className="text-slate-700">Uma massa presa a uma mola oscila para cima e para baixo. Quanto mais afastada da posição de equilíbrio, maior a força restauradora.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1️⃣ Solução Geral do MHS</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Posição em Função do Tempo</h3>
              <div className="bg-white border border-blue-300 rounded p-4">
                <MathFormula formula={String.raw`$$x(t) = A \sin(\omega t + \phi)$$`} display={true} />
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
