import { Link } from "wouter";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WaveSimulator } from "@/components/WaveSimulator";
import { DopplerSimulator } from "@/components/DopplerSimulator";
import { ProgressiveWaveSimulator } from "@/components/waves/ProgressiveWaveSimulator";

export default function OndulatoriaSimulator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Simuladores de Ondulatória
              </h1>
              <p className="text-xs text-slate-600">
                Ondas mecânicas, estacionárias, interferência e efeito Doppler
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto max-w-7xl px-4 py-12">
        <Tabs defaultValue="progressivas" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="progressivas">Ondas Progressivas</TabsTrigger>
            <TabsTrigger value="estacionarias">Estacionárias</TabsTrigger>
            <TabsTrigger value="interferencia">Interferência</TabsTrigger>
            <TabsTrigger value="doppler">Efeito Doppler</TabsTrigger>
          </TabsList>

          <TabsContent value="progressivas" className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <ProgressiveWaveSimulator />
            </div>
          </TabsContent>

          <TabsContent value="estacionarias" className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <WaveSimulator
                initialMode="standing"
                lockedMode="standing"
                title="Ondas Estacionárias"
                description="Analise nós, ventres, harmônicos e modos normais de vibração."
              />
            </div>
          </TabsContent>

          <TabsContent value="interferencia" className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <WaveSimulator
                initialMode="interference"
                lockedMode="interference"
                title="Interferência de Ondas"
                description="Analise superposição, diferença de fase e amplitude resultante."
              />
            </div>
          </TabsContent>

          <TabsContent value="doppler" className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <DopplerSimulator />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
