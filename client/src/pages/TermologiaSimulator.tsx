import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TemperatureConverter } from "@/components/TemperatureConverter";
import { CalorimetrySimulator } from "@/components/CalorimetrySimulator";
import { ThermalExpansionSimulator } from "@/components/ThermalExpansionSimulator";
import { PhaseChangeSimulator } from "@/components/PhaseChangeSimulator";

export default function TermologiaSimulator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Simuladores de Termologia</h1>
              <p className="text-xs text-slate-600">Explore conceitos interativamente</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="temperatura" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
            <TabsTrigger value="calor">Calor Sensível</TabsTrigger>
            <TabsTrigger value="dilatacao">Dilatação</TabsTrigger>
            <TabsTrigger value="fase">Mudança de Estado</TabsTrigger>
          </TabsList>

          {/* Simulador 1: Conversão de Temperatura */}
          <TabsContent value="temperatura" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Conversor de Temperatura</h2>
              <TemperatureConverter />
            </div>
          </TabsContent>

          {/* Simulador 2: Calor Sensível */}
          <TabsContent value="calor" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cálculo de Calor Sensível</h2>
              <CalorimetrySimulator />
            </div>
          </TabsContent>

          {/* Simulador 3: Dilatação Linear */}
          <TabsContent value="dilatacao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Dilatação Linear</h2>
              <ThermalExpansionSimulator />
            </div>
          </TabsContent>

          {/* Simulador 4: Mudança de Estado */}
          <TabsContent value="fase" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Mudança de Estado (Calor Latente)</h2>
              <PhaseChangeSimulator />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
