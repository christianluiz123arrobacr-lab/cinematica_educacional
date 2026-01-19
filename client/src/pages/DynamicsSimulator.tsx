import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Simulator } from "@/components/Simulator";

export default function DynamicsSimulator() {
  const [isRunning, setIsRunning] = useState(true);

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

  const resetForce = () => {
    setV0Force(0);
    setAForce(0.5);
    setIsRunning(true);
  };

  const resetCollision = () => {
    setM1Collision(1);
    setM2Collision(1);
    setV1Collision(3);
    setV2Collision(0);
    setIsRunning(true);
  };

  const resetCentripetal = () => {
    setRCircular(80);
    setWCircular(0.03);
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="force" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="force">Segunda Lei (F=ma)</TabsTrigger>
            <TabsTrigger value="collision">Colisões</TabsTrigger>
            <TabsTrigger value="centripetal">Força Centrípeta</TabsTrigger>
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
                <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
                  <Simulator
                    type="acceleration"
                    width={800}
                    height={400}
                    isRunning={isRunning}
                    parameters={{ v0: v0Force, a: aForce }}
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
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
                      <span className="text-sm font-bold text-blue-600">{aForce.toFixed(2)} m/s^2</span>
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
                    o objeto acelerar mais rapidamente. A seta verde mostra o vetor de velocidade aumentando.
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
                <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
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
                  />
                </div>

                {/* Controls */}
                <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
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
                      <strong>Momentum Inicial:</strong> p = {(m1Collision * v1Collision + m2Collision * v2Collision).toFixed(2)} kg*m/s
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
                    <strong>Conceito:</strong> Na colisão, o momentum total é conservado (p_antes = p_depois). 
                    Observe como, após a colisão, os objetos se movem com novas velocidades, mas o momentum total 
                    permanece o mesmo. Tente diferentes combinações de massas e velocidades!
                  </p>
                </div>
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
                    Observe como a força centrípeta (F = ma_c) mantém o objeto em movimento circular.
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
                      <label className="text-sm font-semibold text-slate-700">Velocidade Angular (omega)</label>
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

                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="text-sm text-slate-700">
                      <strong>Aceleração Centrípeta:</strong> a_c = omega^2*R = {(wCircular * wCircular * rCircular).toFixed(2)} pixels/frame^2
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
                    <Button onClick={resetCentripetal} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Conceito:</strong> A força centrípeta (F = ma_c) é responsável por manter um objeto 
                    em movimento circular. A seta rosa mostra a aceleração centrípeta apontando sempre para o centro. 
                    Aumentando a velocidade angular ou diminuindo o raio, você aumenta a aceleração centrípeta necessária.
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
