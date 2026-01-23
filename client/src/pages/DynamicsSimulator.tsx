import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { InclinedPlaneSimulator } from "@/components/InclinedPlaneSimulator";
import { CollisionSimulator } from "@/components/CollisionSimulator";
import { LaunchVerticalGroundSimulatorNew } from "@/components/LaunchVerticalGroundSimulatorNew";
import { LaunchVerticalBuildingSimulatorNew } from "@/components/LaunchVerticalBuildingSimulatorNew";
import { LaunchObliqueGroundSimulatorNew } from "@/components/LaunchObliqueGroundSimulatorNew";
import { LaunchObliqueBuildingSimulatorNew } from "@/components/LaunchObliqueBuildingSimulatorNew";
import { NewtonSecondLawSimulator } from "@/components/NewtonSecondLawSimulator";
import { CentripetalForceSimulator } from "@/components/CentripetalForceSimulator";

export default function DynamicsSimulator() {
  const [isRunning, setIsRunning] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Launch parameters
  const [launchType, setLaunchType] = useState("verticalGround"); // verticalGround, verticalBuilding, obliqueGround, obliqueBuilding

  const resetSimulation = () => {
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-2 sm:gap-4">
          <Link href="/dinamica" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Link>
          <h1 className="text-lg sm:text-2xl font-bold text-slate-900">Simulador de Dinâmica Avançada (ITA/IME)</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="force" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto">
            <TabsTrigger value="force" className="py-3">Leis de Newton</TabsTrigger>
            <TabsTrigger value="collision" className="py-3">Colisões</TabsTrigger>
            <TabsTrigger value="centripetal" className="py-3">Dinâmica Circular</TabsTrigger>
            <TabsTrigger value="launch" className="py-3">Lançamentos</TabsTrigger>
            <TabsTrigger value="inclined" className="py-3">Plano Inclinado</TabsTrigger>
          </TabsList>

          {/* Force Tab */}
          <TabsContent value="force">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Segunda Lei de Newton</h3>
                    <p className="text-slate-600">
                      Simulação vetorial de forças, atrito e aceleração resultante.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setIsRunning(!isRunning)} variant="outline" size="sm">
                      {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button onClick={resetSimulation} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <NewtonSecondLawSimulator
                  isRunning={isRunning}
                  resetTrigger={resetTrigger}
                />
              </div>
            </Card>
          </TabsContent>

          {/* Collision Tab */}
          <TabsContent value="collision">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Colisões e Impulso</h3>
                    <p className="text-slate-600">
                      Conservação da Quantidade de Movimento e Coeficiente de Restituição.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setIsRunning(!isRunning)} variant="outline" size="sm">
                      {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button onClick={resetSimulation} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CollisionSimulator isRunning={isRunning} resetTrigger={resetTrigger} />
              </div>
            </Card>
          </TabsContent>

          {/* Centripetal Force Tab */}
          <TabsContent value="centripetal">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dinâmica do Movimento Circular</h3>
                    <p className="text-slate-600">
                      Força Centrípeta, Aceleração Radial e Velocidade Angular.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setIsRunning(!isRunning)} variant="outline" size="sm">
                      {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button onClick={resetSimulation} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CentripetalForceSimulator
                  isRunning={isRunning}
                  resetTrigger={resetTrigger}
                />
              </div>
            </Card>
          </TabsContent>

          {/* Launch Tab */}
          <TabsContent value="launch">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lançamento de Projéteis</h3>
                    <p className="text-slate-600">
                      Análise vetorial de lançamentos verticais e oblíquos.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <Select value={launchType} onValueChange={setLaunchType}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Tipo de Lançamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="verticalGround">Vertical (Solo)</SelectItem>
                        <SelectItem value="verticalBuilding">Vertical (Altura h)</SelectItem>
                        <SelectItem value="obliqueGround">Oblíquo (Solo)</SelectItem>
                        <SelectItem value="obliqueBuilding">Oblíquo (Altura h)</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex gap-2">
                      <Button onClick={() => setIsRunning(!isRunning)} variant="outline" size="icon">
                        {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button onClick={resetSimulation} variant="outline" size="icon">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {launchType === "verticalGround" && (
                  <LaunchVerticalGroundSimulatorNew isRunning={isRunning} resetTrigger={resetTrigger} />
                )}
                {launchType === "verticalBuilding" && (
                  <LaunchVerticalBuildingSimulatorNew isRunning={isRunning} resetTrigger={resetTrigger} />
                )}
                {launchType === "obliqueGround" && (
                  <LaunchObliqueGroundSimulatorNew isRunning={isRunning} resetTrigger={resetTrigger} />
                )}
                {launchType === "obliqueBuilding" && (
                  <LaunchObliqueBuildingSimulatorNew isRunning={isRunning} resetTrigger={resetTrigger} />
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Inclined Plane Tab */}
          <TabsContent value="inclined">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plano Inclinado com Atrito</h3>
                    <p className="text-slate-600">
                      Decomposição de forças e análise de movimento em rampas.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setIsRunning(!isRunning)} variant="outline" size="sm">
                      {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button onClick={resetSimulation} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <InclinedPlaneSimulator isRunning={isRunning} resetTrigger={resetTrigger} />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
