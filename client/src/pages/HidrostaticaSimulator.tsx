import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw, Info } from "lucide-react";
import { Link } from "wouter";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";

export default function HidrostaticaSimulator() {
  const [depth, setDepth] = useState(5);
  const [fluidType, setFluidType] = useState("agua-doce");
  const [temperature, setTemperature] = useState(20);
  const [showPressureBreakdown, setShowPressureBreakdown] = useState(false);

  // Densidades de diferentes fluidos
  const fluids: { [key: string]: { name: string; density: number; color: string; description: string } } = {
    "agua-doce": { name: "Água Doce", density: 1000, color: "#3b82f6", description: "Rios e lagos" },
    "agua-salgada": { name: "Água Salgada", density: 1025, color: "#0369a1", description: "Oceano" },
    "oleo": { name: "Óleo", density: 900, color: "#f59e0b", description: "Óleo mineral" },
    "mercurio": { name: "Mercúrio", density: 13600, color: "#6b7280", description: "Metal líquido" },
  };

  const g = 10; // m/s²
  const P0 = 101325; // Pressão atmosférica em Pa
  const currentFluid = fluids[fluidType];
  const rho = currentFluid.density;

  // Cálculos de pressão
  const pressureFromFluid = rho * g * depth;
  const totalPressure = P0 + pressureFromFluid;
  const totalPressureAtm = totalPressure / 101325;

  // Cálculo de profundidade equivalente em água doce para comparação
  const equivalentDepthWater = (totalPressure - P0) / (1000 * g);

  // Visualização da coluna de fluido
  const maxVisualDepth = 20;
  const visualHeight = Math.min((depth / maxVisualDepth) * 300, 300);

  // Cores de intensidade baseadas na pressão
  const getPressureColor = () => {
    if (totalPressure < 150000) return "#3b82f6"; // Azul claro
    if (totalPressure < 300000) return "#0ea5e9"; // Azul
    if (totalPressure < 500000) return "#0369a1"; // Azul escuro
    if (totalPressure < 1000000) return "#1e3a8a"; // Azul muito escuro
    return "#000000"; // Preto
  };

  const resetSimulator = () => {
    setDepth(5);
    setFluidType("agua-doce");
    setTemperature(20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica/topic/hidrostatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Hidrostática</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6">
        {/* Instruções */}
        <Card className="p-4 md:p-6 shadow-lg border-0 bg-cyan-50 border-l-4 border-cyan-500">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-cyan-900 mb-2">Como usar o simulador:</p>
              <p className="text-sm text-cyan-800">Ajuste a profundidade e o tipo de fluido para ver como a pressão muda em tempo real. A pressão aumenta com a profundidade e depende da densidade do fluido!</p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Controles */}
          <Card className="md:col-span-1 p-6 shadow-lg border-0">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Controles</h2>

            {/* Seletor de Fluido */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">Tipo de Fluido</label>
              <div className="space-y-2">
                {Object.entries(fluids).map(([key, fluid]) => (
                  <button
                    key={key}
                    onClick={() => setFluidType(key)}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      fluidType === key
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:border-cyan-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: fluid.color }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900">{fluid.name}</p>
                        <p className="text-xs text-slate-600">{fluid.density} kg/m³</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Profundidade */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Profundidade: {depth.toFixed(1)} m
              </label>
              <Slider
                value={[depth]}
                onValueChange={(value) => setDepth(value[0])}
                min={0}
                max={50}
                step={0.5}
                className="w-full"
              />
              <p className="text-xs text-slate-600 mt-2">0 - 50 metros</p>
            </div>

            {/* Temperatura (informativo) */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Temperatura: {temperature}°C
              </label>
              <Slider
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-slate-600 mt-2">Nota: A temperatura afeta a densidade (simulação simplificada)</p>
            </div>

            {/* Botão Reset */}
            <Button
              onClick={resetSimulator}
              variant="outline"
              className="w-full"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Resetar
            </Button>
          </Card>

          {/* Visualização */}
          <Card className="md:col-span-2 p-6 shadow-lg border-0">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Visualização da Pressão</h2>

            <div className="space-y-6">
              {/* Coluna de Fluido */}
              <div className="flex justify-center items-end gap-8">
                {/* Coluna visual */}
                <div className="flex flex-col items-center">
                  <div className="text-sm font-bold text-slate-600 mb-2">Coluna de {currentFluid.name}</div>
                  <div
                    className="border-4 border-slate-400 rounded-lg transition-all"
                    style={{
                      width: "80px",
                      height: `${visualHeight}px`,
                      backgroundColor: currentFluid.color,
                      opacity: 0.7,
                    }}
                  ></div>
                  <div className="text-sm font-bold text-slate-900 mt-4">{depth.toFixed(1)} m</div>
                </div>

                {/* Indicador de Pressão */}
                <div className="flex flex-col items-center">
                  <div className="text-sm font-bold text-slate-600 mb-2">Pressão</div>
                  <div
                    className="rounded-lg p-6 transition-all shadow-lg"
                    style={{
                      backgroundColor: getPressureColor(),
                      width: "120px",
                      height: `${Math.min(visualHeight, 300)}px`,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <div className="text-white font-bold text-center pb-4">
                      <div className="text-2xl">{(totalPressure / 1000).toFixed(0)}</div>
                      <div className="text-xs">kPa</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resultados Detalhados */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 border-0">
                  <p className="text-sm text-slate-600 mb-2">Pressão Atmosférica</p>
                  <p className="text-3xl font-bold text-cyan-700">{(P0 / 1000).toFixed(1)} kPa</p>
                  <p className="text-xs text-slate-600 mt-1">{(P0 / 101325).toFixed(2)} atm</p>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                  <p className="text-sm text-slate-600 mb-2">Pressão do Fluido</p>
                  <p className="text-3xl font-bold text-blue-700">{(pressureFromFluid / 1000).toFixed(1)} kPa</p>
                  <p className="text-xs text-slate-600 mt-1">ρ × g × h</p>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 border-0 md:col-span-2">
                  <p className="text-sm text-slate-300 mb-2">Pressão Total (Atmosférica + Fluido)</p>
                  <p className="text-4xl font-bold text-white">{(totalPressure / 1000).toFixed(1)} kPa</p>
                  <p className="text-sm text-slate-300 mt-2">{totalPressureAtm.toFixed(2)} atm</p>
                </Card>
              </div>

              {/* Fórmula */}
              <Card className="p-4 bg-cyan-50 border-l-4 border-cyan-500">
                <p className="text-sm font-bold text-slate-900 mb-3">Fórmula Usada:</p>
                <div className="bg-white p-3 rounded-lg overflow-x-auto">
                  <MathFormula formula={String.raw`$$$$P = P_0 + \\rho g h$$$$`} className="text-center text-lg" />
                </div>
                <div className="mt-3 text-sm text-slate-700 space-y-1">
                  <p><strong>P₀</strong> = {(P0 / 1000).toFixed(1)} kPa (pressão atmosférica)</p>
                  <p><strong>ρ</strong> = {rho} kg/m³ (densidade do fluido)</p>
                  <p><strong>g</strong> = {g} m/s² (aceleração da gravidade)</p>
                  <p><strong>h</strong> = {depth.toFixed(1)} m (profundidade)</p>
                </div>
              </Card>

              {/* Informações Adicionais */}
              <Card className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <p className="text-sm font-bold text-slate-900 mb-3">Comparação com Água Doce:</p>
                <p className="text-sm text-slate-700">
                  A pressão atual é equivalente a <strong>{equivalentDepthWater.toFixed(1)} m</strong> de profundidade em água doce.
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Isso significa que {currentFluid.name} é {(rho / 1000).toFixed(1)}x mais densa que água doce!
                </p>
              </Card>

              {/* Botão para mostrar/ocultar breakdown */}
              <Button
                onClick={() => setShowPressureBreakdown(!showPressureBreakdown)}
                variant="outline"
                className="w-full"
              >
                {showPressureBreakdown ? "Ocultar" : "Mostrar"} Detalhes da Pressão
              </Button>

              {showPressureBreakdown && (
                <Card className="p-4 bg-slate-50 border-0">
                  <h3 className="font-bold text-slate-900 mb-4">Análise Detalhada</h3>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Pressão Atmosférica (P₀):</span>
                      <span className="font-bold">{(P0 / 1000).toFixed(1)} kPa</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Densidade (ρ):</span>
                      <span className="font-bold">{rho} kg/m³</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Gravidade (g):</span>
                      <span className="font-bold">{g} m/s²</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Profundidade (h):</span>
                      <span className="font-bold">{depth.toFixed(1)} m</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b bg-cyan-50 p-2 rounded">
                      <span>ρ × g × h:</span>
                      <span className="font-bold">{(pressureFromFluid / 1000).toFixed(1)} kPa</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 bg-slate-900 text-white p-2 rounded font-bold">
                      <span>Pressão Total:</span>
                      <span>{(totalPressure / 1000).toFixed(1)} kPa</span>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </Card>
        </div>

        {/* Dicas Educacionais */}
        <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-cyan-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Dicas para Explorar:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div>
              <p className="font-bold text-slate-900 mb-2">Teste 1: Profundidade</p>
              <p>Aumente a profundidade de 0 para 50 m. Veja como a pressão aumenta linearmente!</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-2">Teste 2: Densidade</p>
              <p>Mude de Água Doce para Mercúrio. Veja como a pressão salta dramaticamente!</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-2">Teste 3: Comparação</p>
              <p>Compare a pressão em diferentes fluidos na mesma profundidade. Qual é mais densa?</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
