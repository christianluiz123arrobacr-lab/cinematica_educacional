import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Simulator } from "@/components/Simulator";

export default function CinematicaSimulator() {
  const [isRunning, setIsRunning] = useState(true);

  // Acceleration parameters
  const [v0Accel, setV0Accel] = useState(0);
  const [aAccel, setAAccel] = useState(0.5);

  // Free fall parameters
  const [gFreeFall, setGFreeFall] = useState(0.3);
  const [hFreeFall, setHFreeFall] = useState(50);

  // Circular parameters
  const [rCircular, setRCircular] = useState(80);
  const [wCircular, setWCircular] = useState(0.03);

  const resetAcceleration = () => {
    setV0Accel(0);
    setAAccel(0.5);
    setIsRunning(true);
  };

  const resetFreeFall = () => {
    setGFreeFall(0.3);
    setHFreeFall(50);
    setIsRunning(true);
  };

  const resetCircular = () => {
    setRCircular(80);
    setWCircular(0.03);
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="acceleration" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="acceleration">Aceleração</TabsTrigger>
            <TabsTrigger value="freeFall">Queda Livre</TabsTrigger>
            <TabsTrigger value="circular">Movimento Circular</TabsTrigger>
          </TabsList>

          {/* Acceleration Tab */}
          <TabsContent value="acceleration">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Aceleração (MRUV)</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como a posição e velocidade mudam com o tempo quando há aceleração constante.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
                  <Simulator
                    type="acceleration"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ v0: v0Accel, a: aAccel }}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v₀)</label>
                      <span className="text-sm font-bold text-blue-600">{v0Accel.toFixed(2)} pixels/frame</span>
                    </div>
                    <Slider
                      value={[v0Accel]}
                      onValueChange={(value) => setV0Accel(value[0])}
                      min={0}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Aceleração (a)</label>
                      <span className="text-sm font-bold text-blue-600">{aAccel.toFixed(2)} pixels/frame²</span>
                    </div>
                    <Slider
                      value={[aAccel]}
                      onValueChange={(value) => setAAccel(value[0])}
                      min={0}
                      max={1.5}
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
                    <Button onClick={resetAcceleration} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> No movimento uniformemente variado (MRUV), a aceleração é constante. 
                    A posição aumenta quadraticamente com o tempo (s = v₀t + ½at²), enquanto a velocidade aumenta 
                    linearmente (v = v₀ + at). Observe como a velocidade (seta verde) aumenta continuamente.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Free Fall Tab */}
          <TabsContent value="freeFall">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Queda Livre</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como um objeto cai sob a influência da gravidade. A velocidade aumenta continuamente.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
                  <Simulator
                    type="freeFall"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ g: gFreeFall, h: hFreeFall }}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Gravidade (g)</label>
                      <span className="text-sm font-bold text-red-600">{gFreeFall.toFixed(2)} pixels/frame²</span>
                    </div>
                    <Slider
                      value={[gFreeFall]}
                      onValueChange={(value) => setGFreeFall(value[0])}
                      min={0.1}
                      max={0.6}
                      step={0.05}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Altura Inicial (h)</label>
                      <span className="text-sm font-bold text-red-600">{hFreeFall.toFixed(0)} pixels</span>
                    </div>
                    <Slider
                      value={[hFreeFall]}
                      onValueChange={(value) => setHFreeFall(value[0])}
                      min={20}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex-1 bg-red-600 hover:bg-red-700"
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
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> Na queda livre, um objeto cai sob a influência exclusiva da gravidade 
                    (g = 9.8 m/s²). A velocidade aumenta linearmente com o tempo (v = gt), enquanto a altura diminui 
                    quadraticamente (h = h₀ - ½gt²). Observe como o objeto acelera continuamente até atingir o solo.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Circular Tab */}
          <TabsContent value="circular">
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Simulação de Movimento Circular Uniforme</h3>
                  <p className="text-slate-600 mb-4">
                    Observe como um objeto se move em círculo com velocidade constante. A aceleração centrípeta aponta para o centro.
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
                  <Simulator
                    type="circular"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ r: rCircular, w: wCircular }}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Raio (R)</label>
                      <span className="text-sm font-bold text-purple-600">{rCircular.toFixed(0)} pixels</span>
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
                      <span className="text-sm font-bold text-purple-600">{(wCircular * 100).toFixed(2)} rad/s</span>
                    </div>
                    <Slider
                      value={[wCircular]}
                      onValueChange={(value) => setWCircular(value[0])}
                      min={0.01}
                      max={0.08}
                      step={0.005}
                      className="w-full"
                    />
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
                    <Button onClick={resetCircular} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> No movimento circular uniforme (MCU), o objeto se move em um círculo com 
                    velocidade constante. A velocidade é sempre tangente ao círculo (seta azul), enquanto a aceleração 
                    centrípeta (seta rosa) sempre aponta para o centro. A aceleração é: a_c = ω²R = v²/R.
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
