import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TermologiaSimulator() {
  // Simulador 1: Conversão de Temperatura
  const [celsius, setCelsius] = useState(20);
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  // Simulador 2: Calor Sensível
  const [mass, setMass] = useState(1);
  const [tempChange, setTempChange] = useState(10);
  const [material, setMaterial] = useState("agua");
  const specificHeats: Record<string, number> = {
    agua: 4186,
    ferro: 448,
    aluminio: 897,
    cobre: 385,
  };
  const heat = mass * specificHeats[material] * tempChange;

  // Simulador 3: Dilatação Linear
  const [length, setLength] = useState(100);
  const [tempDelta, setTempDelta] = useState(20);
  const [dilationMaterial, setDilationMaterial] = useState("ferro");
  const alphas: Record<string, number> = {
    ferro: 12e-6,
    aluminio: 23e-6,
    cobre: 17e-6,
    vidro: 8e-6,
  };
  const deltaLength = length * alphas[dilationMaterial] * tempDelta;
  const finalLength = length + deltaLength;

  // Simulador 4: Mudança de Estado
  const [massPhase, setMassPhase] = useState(1);
  const [phase, setPhase] = useState("gelo");
  const latentHeats: Record<string, number> = {
    fusao: 334000,
    vaporizacao: 2260000,
  };
  const heatPhase = massPhase * latentHeats[phase === "gelo" ? "fusao" : "vaporizacao"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Simuladores de Termologia</h1>
              <p className="text-xs text-slate-600">Explore conceitos interativamente</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="temperatura" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
            <TabsTrigger value="calor">Calor Sensível</TabsTrigger>
            <TabsTrigger value="dilatacao">Dilatação</TabsTrigger>
            <TabsTrigger value="fase">Mudança de Estado</TabsTrigger>
          </TabsList>

          {/* Simulador 1: Conversão de Temperatura */}
          <TabsContent value="temperatura" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Conversor de Temperatura</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Temperatura em Celsius (°C)
                  </label>
                  <input
                    type="range"
                    min="-50"
                    max="150"
                    value={celsius}
                    onChange={(e) => setCelsius(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center mt-3 text-2xl font-bold text-slate-900">
                    {celsius.toFixed(1)}°C
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-slate-600 font-semibold mb-2">Fahrenheit (°F)</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {fahrenheit.toFixed(2)}°F
                    </p>
                    <p className="text-slate-600 text-sm mt-2">
                      Fórmula: °F = (°C × 9/5) + 32
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <p className="text-slate-600 font-semibold mb-2">Kelvin (K)</p>
                    <p className="text-3xl font-bold text-green-600">
                      {kelvin.toFixed(2)} K
                    </p>
                    <p className="text-slate-600 text-sm mt-2">
                      Fórmula: K = °C + 273,15
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-900 text-sm">
                    <strong>Dica:</strong> O zero absoluto é 0 K = -273,15°C = -459,67°F. Nenhuma temperatura pode ser menor que isso!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Simulador 2: Calor Sensível */}
          <TabsContent value="calor" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cálculo de Calor Sensível</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Massa (kg): {mass.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={mass}
                    onChange={(e) => setMass(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Variação de Temperatura (K): {tempChange.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={tempChange}
                    onChange={(e) => setTempChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Material
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="agua">Água (c = 4186 J/kg·K)</option>
                    <option value="ferro">Ferro (c = 448 J/kg·K)</option>
                    <option value="aluminio">Alumínio (c = 897 J/kg·K)</option>
                    <option value="cobre">Cobre (c = 385 J/kg·K)</option>
                  </select>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <p className="text-slate-600 font-semibold mb-2">Calor Necessário (Q)</p>
                  <p className="text-4xl font-bold text-red-600 mb-2">
                    {heat.toFixed(0)} J
                  </p>
                  <p className="text-slate-600 text-sm">
                    {(heat / 1000).toFixed(2)} kJ
                  </p>
                  <p className="text-slate-600 text-sm mt-3">
                    Fórmula: Q = m × c × ΔT
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-blue-900 text-sm">
                    <strong>Curiosidade:</strong> A água tem o maior calor específico! Por isso, demora muito tempo para aquecer e esfria lentamente. É por isso que o mar modera o clima das regiões costeiras.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Simulador 3: Dilatação Linear */}
          <TabsContent value="dilatacao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Dilatação Linear</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Comprimento Inicial (m): {length.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Variação de Temperatura (K): {tempDelta.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={tempDelta}
                    onChange={(e) => setTempDelta(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Material
                  </label>
                  <select
                    value={dilationMaterial}
                    onChange={(e) => setDilationMaterial(e.target.value)}
                    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="ferro">Ferro (α = 12 × 10⁻⁶ K⁻¹)</option>
                    <option value="aluminio">Alumínio (α = 23 × 10⁻⁶ K⁻¹)</option>
                    <option value="cobre">Cobre (α = 17 × 10⁻⁶ K⁻¹)</option>
                    <option value="vidro">Vidro (α = 8 × 10⁻⁶ K⁻¹)</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <p className="text-slate-600 font-semibold mb-2">Variação de Comprimento (ΔL)</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {deltaLength.toFixed(4)} m
                    </p>
                    <p className="text-slate-600 text-sm mt-2">
                      {(deltaLength * 100).toFixed(2)} cm
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <p className="text-slate-600 font-semibold mb-2">Comprimento Final (L)</p>
                    <p className="text-3xl font-bold text-green-600">
                      {finalLength.toFixed(4)} m
                    </p>
                    <p className="text-slate-600 text-sm mt-2">
                      Fórmula: L = L₀ + ΔL
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-900 text-sm">
                    <strong>Aplicação:</strong> Os trilhos de trem têm espaços entre eles justamente para permitir essa dilatação sem danificar a estrutura!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Simulador 4: Mudança de Estado */}
          <TabsContent value="fase" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cálculo de Calor Latente</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Massa (kg): {massPhase.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={massPhase}
                    onChange={(e) => setMassPhase(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Tipo de Mudança de Estado
                  </label>
                  <select
                    value={phase}
                    onChange={(e) => setPhase(e.target.value)}
                    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="gelo">Fusão (Gelo → Água) - L = 334.000 J/kg</option>
                    <option value="agua">Vaporização (Água → Vapor) - L = 2.260.000 J/kg</option>
                  </select>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <p className="text-slate-600 font-semibold mb-2">Calor Latente Necessário (Q)</p>
                  <p className="text-4xl font-bold text-purple-600 mb-2">
                    {heatPhase.toFixed(0)} J
                  </p>
                  <p className="text-slate-600 text-sm">
                    {(heatPhase / 1000000).toFixed(2)} MJ
                  </p>
                  <p className="text-slate-600 text-sm mt-3">
                    Fórmula: Q = m × L
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-bold text-slate-900 text-sm">Fusão</p>
                    <p className="text-slate-700 text-sm mt-2">Gelo a 0°C → Água a 0°C</p>
                    <p className="text-slate-700 text-sm">L = 334.000 J/kg</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="font-bold text-slate-900 text-sm">Vaporização</p>
                    <p className="text-slate-700 text-sm mt-2">Água a 100°C → Vapor a 100°C</p>
                    <p className="text-slate-700 text-sm">L = 2.260.000 J/kg</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-900 text-sm">
                    <strong>Curiosidade:</strong> A vaporização requer MUITO mais calor que a fusão! Por isso, é fácil derreter gelo, mas difícil fazer água ferver. A vaporização é 6,7 vezes mais energética que a fusão!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
