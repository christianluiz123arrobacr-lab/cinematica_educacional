import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";

export default function CinematicaGraphs() {
  const [velocityData] = useState([
    { time: 0, velocity: 0, position: 0 },
    { time: 1, velocity: 2, position: 1 },
    { time: 2, velocity: 4, position: 4 },
    { time: 3, velocity: 6, position: 9 },
    { time: 4, velocity: 8, position: 16 },
    { time: 5, velocity: 10, position: 25 },
  ]);

  const [accelerationData] = useState([
    { time: 0, acceleration: 2, velocity: 0 },
    { time: 1, acceleration: 2, velocity: 2 },
    { time: 2, acceleration: 2, velocity: 4 },
    { time: 3, acceleration: 2, velocity: 6 },
    { time: 4, acceleration: 2, velocity: 8 },
    { time: 5, acceleration: 2, velocity: 10 },
  ]);

  const [freeFallData] = useState([
    { time: 0, height: 500, velocity: 0 },
    { time: 1, height: 495, velocity: 10 },
    { time: 2, height: 480, velocity: 20 },
    { time: 3, height: 455, velocity: 30 },
    { time: 4, height: 420, velocity: 40 },
    { time: 5, height: 375, velocity: 50 },
  ]);

  const [circularData] = useState([
    { angle: 0, velocity: 5, acceleration: 0.5 },
    { angle: 45, velocity: 5, acceleration: 0.5 },
    { angle: 90, velocity: 5, acceleration: 0.5 },
    { angle: 135, velocity: 5, acceleration: 0.5 },
    { angle: 180, velocity: 5, acceleration: 0.5 },
    { angle: 225, velocity: 5, acceleration: 0.5 },
    { angle: 270, velocity: 5, acceleration: 0.5 },
    { angle: 315, velocity: 5, acceleration: 0.5 },
  ]);

  const [projectileData] = useState([
    { distance: 0, height: 0 },
    { distance: 2, height: 3.6 },
    { distance: 4, height: 6.4 },
    { distance: 6, height: 8.4 },
    { distance: 8, height: 9.6 },
    { distance: 10, height: 10 },
    { distance: 12, height: 9.6 },
    { distance: 14, height: 8.4 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Gráficos de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="velocity" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="velocity">Velocidade</TabsTrigger>
            <TabsTrigger value="acceleration">Aceleração</TabsTrigger>
            <TabsTrigger value="freefall">Queda Livre</TabsTrigger>
            <TabsTrigger value="circular">Circular</TabsTrigger>
            <TabsTrigger value="projectile">Lançamento</TabsTrigger>
          </TabsList>

          {/* Velocity Tab */}
          <TabsContent value="velocity">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Velocidade e Posição em Função do Tempo (v = v₀ + at)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={velocityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Velocidade (m/s) / Posição (m)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="velocity" stroke="#3b82f6" name="Velocidade (m/s)" strokeWidth={2} />
                    <Bar dataKey="position" fill="#93c5fd" name="Posição (m)" opacity={0.6} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                O gráfico mostra como a velocidade aumenta linearmente com o tempo em movimento uniformemente acelerado, enquanto a posição aumenta quadraticamente.
              </p>
            </Card>
          </TabsContent>

          {/* Acceleration Tab */}
          <TabsContent value="acceleration">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Aceleração Constante (a = Δv/Δt)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={accelerationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Aceleração (m/s²) / Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="acceleration" fill="#0ea5e9" name="Aceleração (m/s²)" />
                    <Line type="monotone" dataKey="velocity" stroke="#06b6d4" name="Velocidade (m/s)" strokeWidth={2} strokeDasharray="5 5" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Com aceleração constante, a velocidade aumenta linearmente. A aceleração permanece constante durante todo o movimento.
              </p>
            </Card>
          </TabsContent>

          {/* Free Fall Tab */}
          <TabsContent value="freefall">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Queda Livre (h = h₀ - ½gt²)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={freeFallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Altura (m) / Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="height" stroke="#8b5cf6" name="Altura (m)" strokeWidth={2} />
                    <Line type="monotone" dataKey="velocity" stroke="#ec4899" name="Velocidade (m/s)" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Na queda livre, a altura diminui quadraticamente enquanto a velocidade aumenta linearmente com o tempo (g = 10 m/s²).
              </p>
            </Card>
          </TabsContent>

          {/* Circular Tab */}
          <TabsContent value="circular">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Movimento Circular Uniforme (v = ωr)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={circularData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="angle" label={{ value: "Ângulo (°)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Velocidade (m/s) / Aceleração (m/s²)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="velocity" stroke="#10b981" name="Velocidade (m/s)" strokeWidth={2} />
                    <Line type="monotone" dataKey="acceleration" stroke="#f59e0b" name="Aceleração Centrípeta (m/s²)" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                No movimento circular uniforme, a velocidade tangencial é constante, mas há aceleração centrípeta dirigida ao centro.
              </p>
            </Card>
          </TabsContent>

          {/* Projectile Tab */}
          <TabsContent value="projectile">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Trajetória de Lançamento de Projétil</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectileData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="distance" label={{ value: "Distância Horizontal (m)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Altura (m)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="height" stroke="#6366f1" name="Altura (m)" strokeWidth={3} dot={{ fill: "#6366f1", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                A trajetória de um projétil forma uma parábola. A altura máxima é atingida no meio do percurso, onde a velocidade vertical é zero.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
