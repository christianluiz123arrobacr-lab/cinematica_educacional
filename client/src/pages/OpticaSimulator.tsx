import { Link } from "wouter";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefractionSimulator } from "@/components/RefractionSimulator";
import { MirrorsSimulator } from "@/components/MirrorsSimulator";
import { LensesSimulator } from "@/components/LensesSimulator";

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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Simuladores de Óptica</h1>
              <p className="text-xs text-slate-600">Explore a luz e seus fenômenos</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="refracao" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="refracao">Refração (Snell)</TabsTrigger>
            <TabsTrigger value="espelhos">Espelhos</TabsTrigger>
            <TabsTrigger value="lentes">Lentes</TabsTrigger>
          </TabsList>

          {/* Simulador 1: Refração */}
          <TabsContent value="refracao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Lei de Snell-Descartes</h2>
              <RefractionSimulator />
            </div>
          </TabsContent>

          {/* Simulador 2: Espelhos */}
          <TabsContent value="espelhos" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Espelhos Esféricos (Gauss)</h2>
              <MirrorsSimulator />
            </div>
          </TabsContent>

          {/* Simulador 3: Lentes */}
          <TabsContent value="lentes" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Lentes Esféricas (Gauss)</h2>
              <LensesSimulator />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
