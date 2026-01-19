import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";

export default function EstaticaGraphs() {
  const [activeTab, setActiveTab] = useState("torque");

  // Dados para Gráfico de Torque vs Distância
  const torqueData = [
    { distance: 0.5, torque: 50 },
    { distance: 1, torque: 100 },
    { distance: 1.5, torque: 150 },
    { distance: 2, torque: 200 },
    { distance: 2.5, torque: 250 },
    { distance: 3, torque: 300 },
  ];

  // Dados para Gráfico de Vantagem Mecânica
  const vmData = [
    { name: "Alavanca 1ª", vm: 4 },
    { name: "Alavanca 2ª", vm: 6 },
    { name: "Alavanca 3ª", vm: 2 },
    { name: "Polia Móvel", vm: 2 },
    { name: "Plano Inclinado", vm: 5 },
    { name: "Parafuso", vm: 10 },
  ];

  // Dados para Gráfico de Força vs Deslocamento
  const forceData = [
    { displacement: 0, force: 100 },
    { displacement: 1, force: 100 },
    { displacement: 2, force: 100 },
    { displacement: 3, force: 100 },
    { displacement: 4, force: 100 },
    { displacement: 5, force: 100 },
  ];

  // Dados para Gráfico de Equilíbrio de Forças
  const equilibriumData = [
    { angle: 0, forceX: 100, forceY: 0 },
    { angle: 30, forceX: 86.6, forceY: 50 },
    { angle: 45, forceX: 70.7, forceY: 70.7 },
    { angle: 60, forceX: 50, forceY: 86.6 },
    { angle: 90, forceX: 0, forceY: 100 },
  ];

  // Dados para Gráfico de Centro de Massa
  const centerOfMassData = [
    { position: -2, mass: 10 },
    { position: -1, mass: 20 },
    { position: 0, mass: 50 },
    { position: 1, mass: 20 },
    { position: 2, mass: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Gráficos de Estática</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12">
        <div className="space-y-6">
          {/* Abas de Navegação */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={activeTab === "torque" ? "default" : "outline"}
              onClick={() => setActiveTab("torque")}
              className={activeTab === "torque" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Torque vs Distância
            </Button>
            <Button
              variant={activeTab === "vm" ? "default" : "outline"}
              onClick={() => setActiveTab("vm")}
              className={activeTab === "vm" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Vantagem Mecânica
            </Button>
            <Button
              variant={activeTab === "force" ? "default" : "outline"}
              onClick={() => setActiveTab("force")}
              className={activeTab === "force" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Força Constante
            </Button>
            <Button
              variant={activeTab === "equilibrium" ? "default" : "outline"}
              onClick={() => setActiveTab("equilibrium")}
              className={activeTab === "equilibrium" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Equilíbrio de Forças
            </Button>
            <Button
              variant={activeTab === "center" ? "default" : "outline"}
              onClick={() => setActiveTab("center")}
              className={activeTab === "center" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Centro de Massa
            </Button>
          </div>

          {/* Gráfico de Torque */}
          {activeTab === "torque" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Torque vs Distância do Fulcro</h2>
              <p className="text-slate-600 mb-4">Com força constante de 100 N, o torque aumenta linearmente com a distância.</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={torqueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="distance" label={{ value: "Distância (m)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Torque (N·m)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="torque" stroke="#d97706" strokeWidth={2} name="Torque (N·m)" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Gráfico de Vantagem Mecânica */}
          {activeTab === "vm" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vantagem Mecânica de Máquinas Simples</h2>
              <p className="text-slate-600 mb-4">Comparação da vantagem mecânica entre diferentes máquinas simples.</p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={vmData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: "Vantagem Mecânica", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Bar dataKey="vm" fill="#d97706" name="VM" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Gráfico de Força Constante */}
          {activeTab === "force" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Força Aplicada vs Deslocamento</h2>
              <p className="text-slate-600 mb-4">Com uma máquina simples, a força permanece constante enquanto você se desloca.</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={forceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="displacement" label={{ value: "Deslocamento (m)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Força (N)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="force" stroke="#d97706" strokeWidth={2} name="Força (N)" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Gráfico de Equilíbrio */}
          {activeTab === "equilibrium" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Componentes de Força vs Ângulo</h2>
              <p className="text-slate-600 mb-4">Como os componentes X e Y de uma força mudam com o ângulo.</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={equilibriumData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="angle" label={{ value: "Ângulo (°)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Força (N)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="forceX" stroke="#d97706" strokeWidth={2} name="Componente X (N)" />
                  <Line type="monotone" dataKey="forceY" stroke="#f59e0b" strokeWidth={2} name="Componente Y (N)" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Gráfico de Centro de Massa */}
          {activeTab === "center" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Distribuição de Massa e Centro de Massa</h2>
              <p className="text-slate-600 mb-4">O centro de massa é onde toda a massa pode ser considerada concentrada.</p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={centerOfMassData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="position" label={{ value: "Posição (m)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Massa (kg)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Bar dataKey="mass" fill="#d97706" name="Massa (kg)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Explicações */}
          <Card className="p-6 shadow-lg bg-amber-50">
            <h3 className="text-lg font-bold text-slate-900 mb-4">📊 O Que Esses Gráficos Mostram?</h3>
            <div className="space-y-3 text-slate-700">
              <p><strong>Torque vs Distância:</strong> Mostra como o torque aumenta linearmente com a distância do fulcro (para força constante).</p>
              <p><strong>Vantagem Mecânica:</strong> Compara a eficiência de diferentes máquinas simples.</p>
              <p><strong>Força Constante:</strong> Ilustra que com uma máquina simples, você aplica menos força em maior distância.</p>
              <p><strong>Equilíbrio de Forças:</strong> Mostra como uma força é decomposta em componentes X e Y.</p>
              <p><strong>Centro de Massa:</strong> Visualiza como a massa é distribuída e onde está o centro de gravidade.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
