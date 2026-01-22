import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Simulator } from "@/components/Simulator";
import { InclinedPlaneSimulator } from "@/components/InclinedPlaneSimulator";

import { CollisionSimulator } from "@/components/CollisionSimulator";
import { LaunchVerticalGroundSimulatorNew } from "@/components/LaunchVerticalGroundSimulatorNew";
import { LaunchVerticalBuildingSimulatorNew } from "@/components/LaunchVerticalBuildingSimulatorNew";
import { LaunchObliqueGroundSimulatorNew } from "@/components/LaunchObliqueGroundSimulatorNew";
import { LaunchObliqueBuildingSimulatorNew } from "@/components/LaunchObliqueBuildingSimulatorNew";

export default function DynamicsSimulator() {
  const [isRunning, setIsRunning] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Acceleration parameters (for force demonstration)
  const [v0Force, setV0Force] = useState(0);
  const [aForce, setAForce] = useState(0.5);

  // Circular parameters (for centripetal force)
  const [rCircular, setRCircular] = useState(80);
  const [wCircular, setWCircular] = useState(0.03);

  // Inclined plane parameters
  const [anglePlane, setAnglePlane] = useState(30);
  const [muPlane, setMuPlane] = useState(0.2);
  const [modePlane, setModePlane] = useState(0); // 0: descendo, 1: subindo, 2: repouso

  // Launch parameters
  const [launchType, setLaunchType] = useState("verticalGround"); // verticalGround, verticalBuilding, obliqueGround, obliqueBuilding

  const resetForce = () => {
    setV0Force(0);
    setAForce(0.5);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetCentripetal = () => {
    setRCircular(80);
    setWCircular(0.03);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetLaunch = () => {
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetInclinedPlane = () => {
    setAnglePlane(30);
    setMuPlane(0.2);
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
          <h1 className="text-lg sm:text-2xl font-bold text-slate-900">Simulador de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="force" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto">
            <TabsTrigger value="force" className="py-3">Força e Aceleração</TabsTrigger>
            <TabsTrigger value="collision" className="py-3">Colisões</TabsTrigger>
            <TabsTrigger value="centripetal" className="py-3">Força Centrípeta</TabsTrigger>
            <TabsTrigger value="launch" className="py-3">Lançamento</TabsTrigger>
            <TabsTrigger value="inclined" className="py-3">Plano Inclinado</TabsTrigger>
          </TabsList>

          {/* Force Tab */}
          <TabsContent value="force">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Força e Aceleração</h3>
                  <p className="text-slate-600 mb-4">
                    Visualize a Segunda Lei de Newton (F = m·a). Ajuste a aceleração para ver como a força resultante afeta o movimento.
                  </p>
                </div>

                <Simulator
                  type="acceleration"
                  isRunning={isRunning}
                  resetTrigger={resetTrigger}
                />

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Aceleração (a)</label>
                      <span className="text-sm font-bold text-blue-600">{aForce.toFixed(1)} m/s²</span>
                    </div>
                    <Slider
                      value={[aForce]}
                      onValueChange={(value) => setAForce(value[0])}
                      min={-2}
                      max={2}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Reproduzir
                        </>
                      )}
                    </Button>
                    <Button onClick={resetForce} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> A força resultante é proporcional à aceleração. Se a massa é constante, 
                    aumentar a força aumenta a aceleração na mesma proporção.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Collision Tab */}
          <TabsContent value="collision">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Colisões</h3>
                  <p className="text-slate-600 mb-4">
                    Observe a conservação da quantidade de movimento em colisões elásticas e inelásticas.
                  </p>
                </div>

                <CollisionSimulator isRunning={isRunning} resetTrigger={resetTrigger} />
              </div>
            </Card>
          </TabsContent>

          {/* Centripetal Force Tab */}
          <TabsContent value="centripetal">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Força Centrípeta</h3>
                  <p className="text-slate-600 mb-4">
                    Visualize o movimento circular uniforme e a força centrípeta necessária para manter a trajetória.
                  </p>
                </div>

                <Simulator
                  type="circular"
                  isRunning={isRunning}
                  resetTrigger={resetTrigger}
                />

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Raio (R)</label>
                      <span className="text-sm font-bold text-blue-600">{rCircular} m</span>
                    </div>
                    <Slider
                      value={[rCircular]}
                      onValueChange={(value) => setRCircular(value[0])}
                      min={50}
                      max={150}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Angular (ω)</label>
                      <span className="text-sm font-bold text-green-600">{wCircular.toFixed(2)} rad/s</span>
                    </div>
                    <Slider
                      value={[wCircular]}
                      onValueChange={(value) => setWCircular(value[0])}
                      min={0.01}
                      max={0.1}
                      step={0.01}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Reproduzir
                        </>
                      )}
                    </Button>
                    <Button onClick={resetCentripetal} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> A força centrípeta aponta sempre para o centro da trajetória circular. 
                    Ela é responsável por mudar a direção da velocidade, mantendo o objeto em movimento circular.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Launch Tab */}
          <TabsContent value="launch">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Lançamento</h3>
                    <p className="text-slate-600">
                      Escolha o tipo de lançamento e ajuste os parâmetros.
                    </p>
                  </div>
                  <Select value={launchType} onValueChange={setLaunchType}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Tipo de Lançamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verticalGround">Vertical (Solo)</SelectItem>
                      <SelectItem value="verticalBuilding">Vertical (Prédio)</SelectItem>
                      <SelectItem value="obliqueGround">Oblíquo (Solo)</SelectItem>
                      <SelectItem value="obliqueBuilding">Oblíquo (Prédio)</SelectItem>
                    </SelectContent>
                  </Select>
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

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> No lançamento horizontal, o objeto tem velocidade inicial apenas na direção horizontal. 
                    A gravidade causa aceleração vertical, criando uma trajetória parabólica. No lançamento vertical, o objeto sobe e desce 
                    sob influência da gravidade.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Inclined Plane Tab */}
          <TabsContent value="inclined">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Plano Inclinado</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como um objeto desliza em um plano inclinado. Ajuste o ângulo e o coeficiente de atrito.
                  </p>
                </div>

                <InclinedPlaneSimulator
                  angle={anglePlane}
                  mu={muPlane}
                  mode={modePlane}
                  isRunning={isRunning}
                  resetTrigger={resetTrigger}
                />

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Modo de Operação</label>
                    </div>
                    <Select value={modePlane.toString()} onValueChange={(v) => setModePlane(parseInt(v))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o modo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Descendo (Atrito Cinético)</SelectItem>
                        <SelectItem value="1">Subindo (Força Externa)</SelectItem>
                        <SelectItem value="2">Repouso (Atrito Estático)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Ângulo (θ)</label>
                      <span className="text-sm font-bold text-blue-600">{anglePlane}°</span>
                    </div>
                    <Slider
                      value={[anglePlane]}
                      onValueChange={(value) => setAnglePlane(value[0])}
                      min={0}
                      max={60}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Coeficiente de Atrito (μ)</label>
                      <span className="text-sm font-bold text-green-600">{muPlane.toFixed(2)}</span>
                    </div>
                    <Slider
                      value={[muPlane]}
                      onValueChange={(value) => setMuPlane(value[0])}
                      min={0}
                      max={1}
                      step={0.05}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Reproduzir
                        </>
                      )}
                    </Button>
                    <Button onClick={resetInclinedPlane} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> A força peso é decomposta em duas componentes: Px (paralela ao plano) e Py (perpendicular ao plano). 
                    A força de atrito se opõe ao movimento relativo entre as superfícies.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
