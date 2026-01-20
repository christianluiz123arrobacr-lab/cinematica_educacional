import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Simulator } from "@/components/Simulator";

export default function CinematicaSimulator() {
  const [isRunning, setIsRunning] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Velocity parameters (MRU - Movimento Retilíneo Uniforme)
  const [vMRU, setVMRU] = useState(3);

  // Acceleration parameters (MRUV - Movimento Retilíneo Uniformemente Variado)
  const [v0MRUV, setV0MRUV] = useState(0);
  const [aMRUV, setAMRUV] = useState(0.5);

  // Free fall parameters
  const [hFreeFall, setHFreeFall] = useState(300);

  // Circular parameters
  const [rCircular, setRCircular] = useState(80);
  const [wCircular, setWCircular] = useState(0.03);

  // Launch parameters
  const [launchType, setLaunchType] = useState("horizontal");
  const [vxLaunch, setVxLaunch] = useState(5);
  const [vyLaunch, setVyLaunch] = useState(10);
  const [hLaunch, setHLaunch] = useState(300);

  const resetMRU = () => {
    setVMRU(3);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetMRUV = () => {
    setV0MRUV(0);
    setAMRUV(0.5);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetFreeFall = () => {
    setHFreeFall(300);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetCircular = () => {
    setRCircular(80);
    setWCircular(0.03);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  const resetLaunch = () => {
    setVxLaunch(5);
    setVyLaunch(10);
    setHLaunch(300);
    setIsRunning(true);
    setResetTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="mru" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="mru">MRU</TabsTrigger>
            <TabsTrigger value="mruv">MRUV</TabsTrigger>
            <TabsTrigger value="freefall">Queda Livre</TabsTrigger>
            <TabsTrigger value="circular">Circular</TabsTrigger>
            <TabsTrigger value="launch">Lançamento</TabsTrigger>
          </TabsList>

          {/* MRU Tab - Movimento Retilíneo Uniforme */}
          <TabsContent value="mru">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Movimento Retilíneo Uniforme (MRU) - v = constante</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Simulator */}
                <div className="flex flex-col items-center justify-center">
                  <Simulator
                    type="acceleration"
                    parameters={{ v0: vMRU, a: 0 }}
                    isRunning={isRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Velocidade: {vMRU.toFixed(1)} m/s
                    </label>
                    <Slider
                      value={[vMRU]}
                      onValueChange={(val) => setVMRU(val[0])}
                      min={0.5}
                      max={10}
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
                    <Button onClick={resetMRU} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-900">Características:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Velocidade constante</li>
                      <li>• Aceleração = 0</li>
                      <li>• Posição varia linearmente</li>
                      <li>• s = v·t</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* MRUV Tab - Movimento Retilíneo Uniformemente Variado */}
          <TabsContent value="mruv">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Movimento Retilíneo Uniformemente Variado (MRUV) - a = constante</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Simulator */}
                <div className="flex flex-col items-center justify-center">
                  <Simulator
                    type="acceleration"
                    parameters={{ v0: v0MRUV, a: aMRUV }}
                    isRunning={isRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Velocidade Inicial: {v0MRUV.toFixed(1)} m/s
                    </label>
                    <Slider
                      value={[v0MRUV]}
                      onValueChange={(val) => setV0MRUV(val[0])}
                      min={0}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Aceleração: {aMRUV.toFixed(2)} m/s²
                    </label>
                    <Slider
                      value={[aMRUV]}
                      onValueChange={(val) => setAMRUV(val[0])}
                      min={0}
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
                    <Button onClick={resetMRUV} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-900">Fórmulas:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• v = v₀ + at</li>
                      <li>• s = v₀t + ½at²</li>
                      <li>• v² = v₀² + 2as</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Free Fall Tab */}
          <TabsContent value="freefall">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Queda Livre - h = h₀ - ½gt²</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Simulator */}
                <div className="flex flex-col items-center justify-center">
                  <Simulator
                    type="freeFall"
                    parameters={{ h: hFreeFall }}
                    isRunning={isRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Altura Inicial: {hFreeFall} m
                    </label>
                    <Slider
                      value={[hFreeFall]}
                      onValueChange={(val) => setHFreeFall(val[0])}
                      min={100}
                      max={500}
                      step={10}
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
                    <Button onClick={resetFreeFall} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-900">Características:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• g = 10 m/s²</li>
                      <li>• Aceleração constante</li>
                      <li>• v₀ = 0 (solto)</li>
                      <li>• Velocidade aumenta linearmente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Circular Tab */}
          <TabsContent value="circular">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Movimento Circular Uniforme - v = ωr</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Simulator */}
                <div className="flex flex-col items-center justify-center">
                  <Simulator
                    type="circular"
                    parameters={{ r: rCircular, w: wCircular }}
                    isRunning={isRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Raio: {rCircular} px
                    </label>
                    <Slider
                      value={[rCircular]}
                      onValueChange={(val) => setRCircular(val[0])}
                      min={40}
                      max={150}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Velocidade Angular: {wCircular.toFixed(3)} rad/s
                    </label>
                    <Slider
                      value={[wCircular]}
                      onValueChange={(val) => setWCircular(val[0])}
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
                    <Button onClick={resetCircular} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-900">Fórmulas:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• v = ωr (velocidade tangencial)</li>
                      <li>• T = 2π/ω (período)</li>
                      <li>• f = 1/T (frequência)</li>
                      <li>• a_c = ω²r (aceleração centrípeta)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Launch Tab */}
          <TabsContent value="launch">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Lançamento de Projétil</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Simulator */}
                <div className="flex flex-col items-center justify-center">
                  <Simulator
                    type={launchType === "horizontal" ? "horizontalLaunch" : launchType === "vertical" ? "verticalLaunch" : "horizontalLaunch"}
                    parameters={{ vx: vxLaunch, vy: vyLaunch, h: hLaunch }}
                    isRunning={isRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Tipo de Lançamento
                    </label>
                    <Select value={launchType} onValueChange={setLaunchType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="horizontal">Horizontal</SelectItem>
                        <SelectItem value="vertical">Vertical</SelectItem>
                        <SelectItem value="oblique">Oblíquo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Velocidade Horizontal: {vxLaunch.toFixed(1)} m/s
                    </label>
                    <Slider
                      value={[vxLaunch]}
                      onValueChange={(val) => setVxLaunch(val[0])}
                      min={1}
                      max={10}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Velocidade Vertical: {vyLaunch.toFixed(1)} m/s
                    </label>
                    <Slider
                      value={[vyLaunch]}
                      onValueChange={(val) => setVyLaunch(val[0])}
                      min={0}
                      max={20}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Altura Inicial: {hLaunch} m
                    </label>
                    <Slider
                      value={[hLaunch]}
                      onValueChange={(val) => setHLaunch(val[0])}
                      min={100}
                      max={500}
                      step={10}
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
                    <Button onClick={resetLaunch} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
