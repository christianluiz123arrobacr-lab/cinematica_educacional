import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FisicaModernaTopicQuantica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/fisica-moderna" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Física Moderna
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Física Quântica</h1>
          <Button variant="outline" size="sm">Progresso</Button>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Conteúdo em desenvolvimento. Em breve: explicações detalhadas, fórmulas com termo-a-termo, exemplos ITA/IME e aplicações práticas.
          </AlertDescription>
        </Alert>

        <Card className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Física Quântica</h2>
          <p className="text-slate-600 leading-relaxed">
            A Física Quântica descreve o comportamento da matéria e da energia em escalas atômicas e subatômicas. 
            Esta seção abordará a radiação de corpo negro e a hipótese de Planck, o efeito fotoelétrico, 
            a dualidade onda-partícula, o princípio da incerteza de Heisenberg, e as interpretações da mecânica quântica.
          </p>
        </Card>
      </main>
    </div>
  );
}
