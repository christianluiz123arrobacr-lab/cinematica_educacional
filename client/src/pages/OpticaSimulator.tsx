import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OpticaSimulator() {
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
          <h1 className="text-xl font-bold text-slate-900">Simulador de Óptica</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">⚙️ Simulador em Desenvolvimento</h2>
          <p className="text-slate-700 mb-6">O simulador interativo de Óptica será lançado em breve com visualizações de:</p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-slate-700 mb-8">
            <li>✓ Refração de luz em diferentes meios</li>
            <li>✓ Formação de imagens em lentes</li>
            <li>✓ Reflexão em espelhos</li>
            <li>✓ Dispersão e interferência</li>
          </ul>
          <Link href="/optica">
            <Button>Voltar para Óptica</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
