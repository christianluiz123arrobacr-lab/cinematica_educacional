import { Link } from "wouter";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WaveSimulator } from "@/components/WaveSimulator";

export default function OndulatoriaSimulator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Simuladores de Ondulatória</h1>
              <p className="text-xs text-slate-600">Explore ondas mecânicas e sonoras</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="ondas" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="ondas">Ondas Mecânicas</TabsTrigger>
          </TabsList>

          {/* Simulador 1: Ondas */}
          <TabsContent value="ondas" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Propagação de Ondas</h2>
              <WaveSimulator />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
