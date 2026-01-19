import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Slider } from "@/components/ui/slider";

export default function EstaticaSimulator() {
  const [activeTab, setActiveTab] = useState("alavanca");

  // Estado para Alavanca
  const [forceLeft, setForceLeft] = useState(50);
  const [distanceLeft, setDistanceLeft] = useState(2);
  const [distanceRight, setDistanceRight] = useState(3);

  // Estado para Plano Inclinado
  const [angle, setAngle] = useState(30);
  const [mass, setMass] = useState(50);

  // Estado para Polia
  const [numPolias, setNumPolias] = useState(1);
  const [cargaPolia, setCargaPolia] = useState(100);

  // Cálculos
  const torqueLeft = forceLeft * distanceLeft;
  const forceRightNeeded = torqueLeft / distanceRight;
  const isBalanced = Math.abs(torqueLeft - (forceRightNeeded * distanceRight)) < 1;

  const angleRad = (angle * Math.PI) / 180;
  const forceParallel = mass * 10 * Math.sin(angleRad);
  const forcePerpendicular = mass * 10 * Math.cos(angleRad);
  const vmPlano = 1 / Math.sin(angleRad);

  const vmPolia = numPolias * 2;
  const forceNeededPolia = cargaPolia / vmPolia;

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
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Estática</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12">
        <div className="space-y-6">
          {/* Abas de Navegação */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={activeTab === "alavanca" ? "default" : "outline"}
              onClick={() => setActiveTab("alavanca")}
              className={activeTab === "alavanca" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Alavanca
            </Button>
            <Button
              variant={activeTab === "plano" ? "default" : "outline"}
              onClick={() => setActiveTab("plano")}
              className={activeTab === "plano" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Plano Inclinado
            </Button>
            <Button
              variant={activeTab === "polia" ? "default" : "outline"}
              onClick={() => setActiveTab("polia")}
              className={activeTab === "polia" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Polia
            </Button>
          </div>

          {/* Simulador de Alavanca */}
          {activeTab === "alavanca" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Alavanca</h2>
              
              <div className="space-y-6">
                {/* Visualização */}
                <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200 flex justify-center items-center min-h-48">
                  <svg width="400" height="150" viewBox="0 0 400 150" className="w-full max-w-md">
                    {/* Fulcro */}
                    <polygon points="200,100 190,130 210,130" fill="#d97706" />
                    
                    {/* Barra */}
                    <line x1="100" y1="100" x2="300" y2="100" stroke="#1f2937" strokeWidth="8" />
                    
                    {/* Ponto de aplicação esquerdo */}
                    <circle cx={100 + distanceLeft * 20} cy="100" r="8" fill="#ef4444" />
                    <text x={100 + distanceLeft * 20} y="50" textAnchor="middle" className="text-sm font-bold">
                      F = {forceLeft.toFixed(0)} N
                    </text>
                    
                    {/* Ponto de aplicação direito */}
                    <circle cx={300 - distanceRight * 20} cy="100" r="8" fill="#3b82f6" />
                    <text x={300 - distanceRight * 20} y="50" textAnchor="middle" className="text-sm font-bold">
                      F = {forceRightNeeded.toFixed(0)} N
                    </text>
                    
                    {/* Distâncias */}
                    <text x={100 + distanceLeft * 10} y="130" textAnchor="middle" className="text-xs">
                      {distanceLeft.toFixed(1)} m
                    </text>
                    <text x={300 - distanceRight * 10} y="130" textAnchor="middle" className="text-xs">
                      {distanceRight.toFixed(1)} m
                    </text>
                  </svg>
                </div>

                {/* Controles */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Força Esquerda: {forceLeft.toFixed(0)} N
                    </label>
                    <Slider
                      value={[forceLeft]}
                      onValueChange={(value) => setForceLeft(value[0])}
                      min={10}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Distância Esquerda: {distanceLeft.toFixed(1)} m
                    </label>
                    <Slider
                      value={[distanceLeft]}
                      onValueChange={(value) => setDistanceLeft(value[0])}
                      min={0.5}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Distância Direita: {distanceRight.toFixed(1)} m
                    </label>
                    <Slider
                      value={[distanceRight]}
                      onValueChange={(value) => setDistanceRight(value[0])}
                      min={0.5}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-amber-50 border-2 border-amber-200">
                    <p className="text-sm text-slate-600">Torque Esquerdo</p>
                    <p className="text-2xl font-bold text-amber-700">{torqueLeft.toFixed(1)} N·m</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-2 border-blue-200">
                    <p className="text-sm text-slate-600">Torque Direito</p>
                    <p className="text-2xl font-bold text-blue-700">{(forceRightNeeded * distanceRight).toFixed(1)} N·m</p>
                  </Card>
                  <Card className={`p-4 border-2 ${isBalanced ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                    <p className="text-sm text-slate-600">Vantagem Mecânica</p>
                    <p className={`text-2xl font-bold ${isBalanced ? "text-green-700" : "text-red-700"}`}>
                      {(distanceLeft / distanceRight).toFixed(2)}
                    </p>
                  </Card>
                  <Card className={`p-4 border-2 ${isBalanced ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                    <p className="text-sm text-slate-600">Status</p>
                    <p className={`text-lg font-bold ${isBalanced ? "text-green-700" : "text-red-700"}`}>
                      {isBalanced ? "✓ Equilibrado!" : "✗ Desequilibrado"}
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          )}

          {/* Simulador de Plano Inclinado */}
          {activeTab === "plano" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Plano Inclinado</h2>
              
              <div className="space-y-6">
                {/* Visualização */}
                <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200 flex justify-center items-center min-h-48">
                  <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-md">
                    {/* Plano inclinado */}
                    <line x1="50" y1="150" x2="350" y2={150 - 300 * Math.sin(angleRad / 180 * Math.PI)} stroke="#1f2937" strokeWidth="4" />
                    
                    {/* Bloco */}
                    <rect x="200" y={120 - 300 * Math.sin(angleRad / 180 * Math.PI)} width="30" height="30" fill="#ef4444" />
                    
                    {/* Setas de força */}
                    <line x1="215" y1={135 - 300 * Math.sin(angleRad / 180 * Math.PI)} x2="215" y2={180 - 300 * Math.sin(angleRad / 180 * Math.PI)} stroke="#3b82f6" strokeWidth="2" />
                    <polygon points="215,180 210,170 220,170" fill="#3b82f6" />
                    
                    {/* Ângulo */}
                    <text x="80" y="160" className="text-sm font-bold">{angle.toFixed(0)}°</text>
                  </svg>
                </div>

                {/* Controles */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Ângulo: {angle.toFixed(0)}°
                    </label>
                    <Slider
                      value={[angle]}
                      onValueChange={(value) => setAngle(value[0])}
                      min={0}
                      max={90}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Massa: {mass.toFixed(0)} kg
                    </label>
                    <Slider
                      value={[mass]}
                      onValueChange={(value) => setMass(value[0])}
                      min={10}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-amber-50 border-2 border-amber-200">
                    <p className="text-sm text-slate-600">Força Paralela</p>
                    <p className="text-2xl font-bold text-amber-700">{forceParallel.toFixed(1)} N</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-2 border-blue-200">
                    <p className="text-sm text-slate-600">Força Perpendicular</p>
                    <p className="text-2xl font-bold text-blue-700">{forcePerpendicular.toFixed(1)} N</p>
                  </Card>
                  <Card className="p-4 bg-green-50 border-2 border-green-200">
                    <p className="text-sm text-slate-600">Vantagem Mecânica</p>
                    <p className="text-2xl font-bold text-green-700">{vmPlano.toFixed(2)}</p>
                  </Card>
                  <Card className="p-4 bg-purple-50 border-2 border-purple-200">
                    <p className="text-sm text-slate-600">Peso Total</p>
                    <p className="text-2xl font-bold text-purple-700">{(mass * 10).toFixed(0)} N</p>
                  </Card>
                </div>
              </div>
            </Card>
          )}

          {/* Simulador de Polia */}
          {activeTab === "polia" && (
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Polia</h2>
              
              <div className="space-y-6">
                {/* Visualização */}
                <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200 flex justify-center items-center min-h-48">
                  <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-md">
                    {/* Polias */}
                    {Array.from({ length: numPolias }).map((_, i) => (
                      <g key={i}>
                        <circle cx={100 + i * 80} cy="60" r="20" fill="none" stroke="#1f2937" strokeWidth="2" />
                        <circle cx={100 + i * 80} cy="60" r="15" fill="none" stroke="#d97706" strokeWidth="1" />
                      </g>
                    ))}
                    
                    {/* Carga */}
                    <rect x="170" y="120" width="60" height="40" fill="#ef4444" />
                    <text x="200" y="145" textAnchor="middle" className="text-sm font-bold text-white">
                      {cargaPolia.toFixed(0)} N
                    </text>
                  </svg>
                </div>

                {/* Controles */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Número de Polias Móveis: {numPolias}
                    </label>
                    <Slider
                      value={[numPolias]}
                      onValueChange={(value) => setNumPolias(value[0])}
                      min={1}
                      max={4}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Carga: {cargaPolia.toFixed(0)} N
                    </label>
                    <Slider
                      value={[cargaPolia]}
                      onValueChange={(value) => setCargaPolia(value[0])}
                      min={50}
                      max={400}
                      step={10}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-amber-50 border-2 border-amber-200">
                    <p className="text-sm text-slate-600">Vantagem Mecânica</p>
                    <p className="text-2xl font-bold text-amber-700">{vmPolia.toFixed(0)}</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-2 border-blue-200">
                    <p className="text-sm text-slate-600">Força Necessária</p>
                    <p className="text-2xl font-bold text-blue-700">{forceNeededPolia.toFixed(1)} N</p>
                  </Card>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
