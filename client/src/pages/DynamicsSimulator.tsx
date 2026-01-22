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
import { LaunchVerticalGroundSimulator } from "@/components/LaunchVerticalGroundSimulator";
import { LaunchVerticalBuildingSimulator } from "@/components/LaunchVerticalBuildingSimulator";
import { LaunchObliqueGroundSimulator } from "@/components/LaunchObliqueGroundSimulator";
import { LaunchObliqueBuildingSimulator } from "@/components/LaunchObliqueBuildingSimulator";

export default function DynamicsSimulator() {
  const [isRunning, setIsRunning] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Acceleration parameters (for force demonstration)
  const [v0Force, setV0Force] = useState(0);
  const [aForce, setAForce] = useState(0.5);

  // Collision parameters
  const [m1Collision, setM1Collision] = useState(1);
  const [m2Collision, setM2Collision] = useState(1);
  const [v1Collision, setV1Collision] = useState(3);
  const [v2Collision, setV2Collision] = useState(0);

  // Circular parameters (for centripetal force)
  const [rCircular, setRCircular] = useState(80);
  const [wCircular, setWCircular] = useState(0.03);

  // Inclined plane parameters
  const [anglePlane, setAnglePlane] = useState(30);
  const [muPlane, setMuPlane] = useState(0.2);
  const [modePlane, setModePlane] = useState(0); // 0: descendo, 1: subindo, 2: repouso

  // Launch parameters
  const [launchV0, setLaunchV0] = useState(20);
  const [launchAngle, setLaunchAngle] = useState(45);
  const [launchH0, setLaunchH0] = useState(30);
  const [launchType, setLaunchType] = useState("verticalGround"); // verticalGround, verticalBuilding, obliqueGround, obliqueBuilding

  const resetForce = () => {
    setV0Force(0);
    setAForce(0.5);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetCollision = () => {
    setM1Collision(1);
    setM2Collision(1);
    setV1Collision(3);
    setV2Collision(0);
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
    setLaunchV0(20);
    setLaunchAngle(45);
    setLaunchH0(30);
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-4 sm:mb-8 gap-1 sm:gap-0 h-auto">
            <TabsTrigger value="force" className="text-xs sm:text-sm">F=ma</TabsTrigger>
            <TabsTrigger value="collision" className="text-xs sm:text-sm">Colisões</TabsTrigger>
            <TabsTrigger value="centripetal" className="text-xs sm:text-sm hidden sm:inline-flex">Centrípeta</TabsTrigger>
            <TabsTrigger value="launch" className="text-xs sm:text-sm">Lançamento</TabsTrigger>
            <TabsTrigger value="inclined" className="text-xs sm:text-sm hidden lg:inline-flex">Plano</TabsTrigger>
          </TabsList>

          {/* Force Tab */}
          <TabsContent value="force">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação da Segunda Lei de Newton (F = ma)</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como a força aplicada causa aceleração. Quanto maior a força, maior a aceleração.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
                  <Simulator
                    type="acceleration"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ v0: v0Force, a: aForce }}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v_0)</label>
                      <span className="text-sm font-bold text-blue-600">{v0Force.toFixed(2)} m/s</span>
                    </div>
                    <Slider
                      value={[v0Force]}
                      onValueChange={(value) => setV0Force(value[0])}
                      min={0}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Aceleração (a) - Força Aplicada</label>
                      <span className="text-sm font-bold text-blue-600">{aForce.toFixed(2)} m/s²</span>
                    </div>
                    <Slider
                      value={[aForce]}
                      onValueChange={(value) => setAForce(value[0])}
                      min={0}
                      max={1.5}
                      step={0.05}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm text-slate-700">
                      <strong>Cálculo:</strong> Se m = 10 kg, então F = m × a = 10 × {aForce.toFixed(2)} = {(10 * aForce).toFixed(2)} N
                    </p>
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
                    <strong>Conceito:</strong> A Segunda Lei de Newton (F = ma) estabelece que a força resultante é 
                    igual ao produto da massa pela aceleração. Aumentando a aceleração (força aplicada), você verá 
                    o objeto acelerar mais rapidamente. A seta vermelha mostra o vetor de velocidade aumentando.
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Colisões - Conservação de Momentum</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como o momentum é conservado em uma colisão. Ajuste as massas e velocidades iniciais.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
                  <Simulator
                    type="collision"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{
                      m1: m1Collision,
                      m2: m2Collision,
                      v1: v1Collision,
                      v2: v2Collision,
                    }}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Massa 1 (m_1)</label>
                      <span className="text-sm font-bold text-blue-600">{m1Collision.toFixed(1)} kg</span>
                    </div>
                    <Slider
                      value={[m1Collision]}
                      onValueChange={(value) => setM1Collision(value[0])}
                      min={0.5}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Massa 2 (m_2)</label>
                      <span className="text-sm font-bold text-red-600">{m2Collision.toFixed(1)} kg</span>
                    </div>
                    <Slider
                      value={[m2Collision]}
                      onValueChange={(value) => setM2Collision(value[0])}
                      min={0.5}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Inicial 1 (v_1)</label>
                      <span className="text-sm font-bold text-blue-600">{v1Collision.toFixed(2)} m/s</span>
                    </div>
                    <Slider
                      value={[v1Collision]}
                      onValueChange={(value) => setV1Collision(value[0])}
                      min={0}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Inicial 2 (v_2)</label>
                      <span className="text-sm font-bold text-red-600">{v2Collision.toFixed(2)} m/s</span>
                    </div>
                    <Slider
                      value={[v2Collision]}
                      onValueChange={(value) => setV2Collision(value[0])}
                      min={0}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded p-3">
                    <p className="text-sm text-slate-700">
                      <strong>Momentum Inicial:</strong> p = {(m1Collision * v1Collision + m2Collision * v2Collision).toFixed(2)} kg·m/s
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
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
                    <Button onClick={resetCollision} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> Em uma colisão, o momentum total é conservado. Antes da colisão: 
                    p_inicial = m₁v₁ + m₂v₂. Após a colisão, os objetos trocam momentum mantendo o total conservado.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Centripetal Tab */}
          <TabsContent value="centripetal">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Força Centrípeta - Movimento Circular</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como a força centrípeta mantém o objeto em movimento circular. A seta roxa aponta para o centro.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
                  <Simulator
                    type="circular"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ r: rCircular, w: wCircular }}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Raio (r)</label>
                      <span className="text-sm font-bold text-green-600">{rCircular.toFixed(0)} m</span>
                    </div>
                    <Slider
                      value={[rCircular]}
                      onValueChange={(value) => setRCircular(value[0])}
                      min={40}
                      max={150}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Angular (ω)</label>
                      <span className="text-sm font-bold text-green-600">{wCircular.toFixed(3)} rad/s</span>
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

                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <p className="text-sm text-slate-700">
                      <strong>Velocidade Linear:</strong> v = ω × r = {wCircular.toFixed(3)} × {rCircular.toFixed(0)} = {(wCircular * rCircular).toFixed(2)} m/s
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-green-600 hover:bg-green-700"
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
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> A força centrípeta (F_c = m·v²/r) é sempre direcionada para o centro do círculo. 
                    Ela é responsável por manter o objeto em trajetória circular. Aumentando a velocidade angular, a força centrípeta aumenta.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Launch Tab */}
          <TabsContent value="launch">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Lançamento de Projéteis</h3>
                  <p className="text-slate-600 mb-4">
                    Observe o movimento parabólico de um projétil. Escolha entre lançamento horizontal, vertical ou em plano inclinado.
                  </p>
                </div>

                {/* Launch Type Selector */}
                <div className="bg-slate-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Tipo de Lançamento:</label>
                  <Select value={launchType} onValueChange={setLaunchType}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verticalGround">Vertical do Solo</SelectItem>
                      <SelectItem value="verticalBuilding">Vertical de Prédio</SelectItem>
                      <SelectItem value="obliqueGround">Oblíquo do Solo</SelectItem>
                      <SelectItem value="obliqueBuilding">Oblíquo de Prédio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
                  {launchType === "verticalGround" && (
                    <LaunchVerticalGroundSimulator
                      v0={launchV0}
                      isRunning={isRunning}
                      resetTrigger={resetTrigger}
                    />
                  )}
                  {launchType === "verticalBuilding" && (
                    <LaunchVerticalBuildingSimulator
                      v0={launchV0}
                      h0={launchH0}
                      isRunning={isRunning}
                      resetTrigger={resetTrigger}
                    />
                  )}
                  {launchType === "obliqueGround" && (
                    <LaunchObliqueGroundSimulator
                      v0={launchV0}
                      angle={launchAngle}
                      isRunning={isRunning}
                      resetTrigger={resetTrigger}
                    />
                  )}
                  {launchType === "obliqueBuilding" && (
                    <LaunchObliqueBuildingSimulator
                      v0={launchV0}
                      angle={launchAngle}
                      h0={launchH0}
                      isRunning={isRunning}
                      resetTrigger={resetTrigger}
                    />
                  )}
                </div>

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  {launchType === "horizontal" ? (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-slate-700">Velocidade Horizontal (v_x)</label>
                          <span className="text-sm font-bold text-blue-600">{launchV0.toFixed(2)} m/s</span>
                        </div>
                        <Slider
                        value={[launchV0]}
                        onValueChange={(value) => setLaunchV0(value[0])}
                          min={1}
                          max={10}
                          step={0.5}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-slate-700">Altura Inicial (h)</label>
                          <span className="text-sm font-bold text-blue-600">{launchH0.toFixed(0)} m</span>
                        </div>
                        <Slider
                          value={[launchH0]}
                          onValueChange={(value) => setLaunchH0(value[0])}
                          min={5}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v_0)</label>
                        <span className="text-sm font-bold text-green-600">{launchV0.toFixed(2)} m/s</span>
                      </div>
                      <Slider
                        value={[launchV0]}
                        onValueChange={(value) => setLaunchV0(value[0])}
                        min={1}
                        max={30}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                  )}

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
                    <Button onClick={resetLaunch} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

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

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-2 sm:p-4 rounded-lg overflow-x-auto w-full">
                  <Simulator
                    type="inclinedPlane"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ angle: anglePlane, mu: muPlane, mode: modePlane }}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-4 sm:space-y-6 bg-slate-50 p-4 sm:p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Ângulo (θ)</label>
                      <span className="text-sm font-bold text-purple-600">{anglePlane.toFixed(0)}°</span>
                    </div>
                    <Slider
                      value={[anglePlane]}
                      onValueChange={(value) => setAnglePlane(value[0])}
                      min={0}
                      max={60}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Coeficiente de Atrito (μ)</label>
                      <span className="text-sm font-bold text-purple-600">{muPlane.toFixed(2)}</span>
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

                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="text-sm text-slate-700">
                      <strong>Aceleração:</strong> a = g(sin θ - μ cos θ) = 9.8({Math.sin(anglePlane * Math.PI / 180).toFixed(3)} - {muPlane.toFixed(2)} × {Math.cos(anglePlane * Math.PI / 180).toFixed(3)}) = {(9.8 * (Math.sin(anglePlane * Math.PI / 180) - muPlane * Math.cos(anglePlane * Math.PI / 180))).toFixed(2)} m/s²
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
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
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> Em um plano inclinado, a aceleração depende do ângulo e do atrito. 
                    A componente da gravidade paralela ao plano é mg sin θ, e a força de atrito é μN = μmg cos θ. 
                    A aceleração resultante é a = g(sin θ - μ cos θ). Aumentando o ângulo, a aceleração aumenta. 
                    Aumentando o atrito, a aceleração diminui.
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
