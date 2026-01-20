import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";

export default function DynamicsGraphs() {
  const [forceData] = useState([
    { mass: 1, force: 10, acceleration: 10 },
    { mass: 2, force: 20, acceleration: 10 },
    { mass: 3, force: 30, acceleration: 10 },
    { mass: 4, force: 40, acceleration: 10 },
    { mass: 5, force: 50, acceleration: 10 },
  ]);

  const [energyData] = useState([
    { height: 0, potential: 0, kinetic: 500, total: 500 },
    { height: 5, potential: 245, kinetic: 255, total: 500 },
    { height: 10, potential: 490, kinetic: 10, total: 500 },
  ]);

  const [workData] = useState([
    { distance: 0, work: 0 },
    { distance: 1, work: 10 },
    { distance: 2, work: 20 },
    { distance: 3, work: 30 },
    { distance: 4, work: 40 },
    { distance: 5, work: 50 },
  ]);

  const [momentumData] = useState([
    { time: 0, momentum: 0, velocity: 0 },
    { time: 1, momentum: 10, velocity: 10 },
    { time: 2, momentum: 20, velocity: 20 },
    { time: 3, momentum: 30, velocity: 30 },
    { time: 4, momentum: 40, velocity: 40 },
    { time: 5, momentum: 50, velocity: 50 },
  ]);

  const [powerData] = useState([
    { time: 0, power: 0 },
    { time: 1, power: 50 },
    { time: 2, power: 100 },
    { time: 3, power: 150 },
    { time: 4, power: 200 },
    { time: 5, power: 250 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Gráficos de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <Tabs defaultValue="force" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="force">Força</TabsTrigger>
            <TabsTrigger value="energy">Energia</TabsTrigger>
            <TabsTrigger value="work">Trabalho</TabsTrigger>
            <TabsTrigger value="momentum">Momentum</TabsTrigger>
            <TabsTrigger value="power">Potência</TabsTrigger>
          </TabsList>

          {/* Force Tab */}
          <TabsContent value="force">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Relação entre Força, Massa e Aceleração (F = m*a)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={forceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mass" label={{ value: "Massa (kg)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Força (N) / Aceleração (m/s^2)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="force" fill="#9333ea" name="Força (N)" />
                    <Line type="monotone" dataKey="acceleration" stroke="#ec4899" name="Aceleração (m/s²)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                O gráfico mostra que com aceleração constante, a força aumenta proporcionalmente com a massa.
              </p>
            </Card>
          </TabsContent>

          {/* Energy Tab */}
          <TabsContent value="energy">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Conservação de Energia Mecânica</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="height" label={{ value: "Altura (m)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Energia (J)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="potential" stroke="#3b82f6" name="Energia Potencial (J)" strokeWidth={2} />
                    <Line type="monotone" dataKey="kinetic" stroke="#ef4444" name="Energia Cinética (J)" strokeWidth={2} />
                    <Line type="monotone" dataKey="total" stroke="#10b981" name="Energia Total (J)" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                A energia total permanece constante enquanto a energia potencial e cinética se transformam uma na outra.
              </p>
            </Card>
          </TabsContent>

          {/* Work Tab */}
          <TabsContent value="work">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Trabalho Realizado por uma Força (W = F*d)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={workData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="distance" label={{ value: "Deslocamento (m)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Trabalho (J)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="work" fill="#f59e0b" name="Trabalho (J)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                O trabalho aumenta linearmente com o deslocamento quando a força permanece constante.
              </p>
            </Card>
          </TabsContent>

          {/* Momentum Tab */}
          <TabsContent value="momentum">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Momentum em Função do Tempo (p = m*v)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={momentumData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Momentum (kg*m/s) / Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="momentum" stroke="#8b5cf6" name="Momentum (kg*m/s)" strokeWidth={2} />
                    <Line type="monotone" dataKey="velocity" stroke="#06b6d4" name="Velocidade (m/s)" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Com força constante, o momentum aumenta linearmente com o tempo (Impulso = Δp).
              </p>
            </Card>
          </TabsContent>

          {/* Power Tab */}
          <TabsContent value="power">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Potência em Função do Tempo (P = W/Delta t)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={powerData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Potência (W)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="power" stroke="#06b6d4" name="Potência (W)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                A potência aumenta com o tempo quando o trabalho é realizado a uma taxa constante.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
