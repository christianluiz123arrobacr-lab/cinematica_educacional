import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OndulatóriaTopicMHS() {
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
              <p className="text-xs text-slate-600">MHS</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">📝 Em Desenvolvimento</h2>
          <p className="text-green-800">Conteúdo em desenvolvimento. Volte em breve!</p>
        </div>
      </section>
    </div>
  );
}
