import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw, Play, Pause } from "lucide-react";
import { Link } from "wouter";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";

export default function EstaticaSimulator() {
  const [activeTab, setActiveTab] = useState("equilibrio");
  const [isAnimating, setIsAnimating] = useState(false);

  // ===== EQUILÍBRIO DE FORÇAS =====
  const [forceLeft, setForceLeft] = useState(50);
  const [forceRight, setForceRight] = useState(50);
  const [angleLeft, setAngleLeft] = useState(0);
  const [angleRight, setAngleRight] = useState(0);

  const resultantX = forceLeft * Math.cos((angleLeft * Math.PI) / 180) + forceRight * Math.cos((angleRight * Math.PI) / 180);
  const resultantY = forceLeft * Math.sin((angleLeft * Math.PI) / 180) + forceRight * Math.sin((angleRight * Math.PI) / 180);
  const resultantMagnitude = Math.sqrt(resultantX ** 2 + resultantY ** 2);
  const isEquilibrio = resultantMagnitude < 5;

  // ===== TORQUE =====
  const [forceAlavanca, setForceAlavanca] = useState(50);
  const [distanceLeft, setDistanceLeft] = useState(2);
  const [distanceRight, setDistanceRight] = useState(3);
  const [angleAlavanca, setAngleAlavanca] = useState(90);

  const torqueLeft = forceAlavanca * distanceLeft * Math.sin((angleAlavanca * Math.PI) / 180);
  const forceRightNeeded = torqueLeft / distanceRight;
  const isTorqueBalanced = Math.abs(torqueLeft - (forceRightNeeded * distanceRight)) < 1;

  // ===== MÁQUINAS SIMPLES =====
  const [tipoMaquina, setTipoMaquina] = useState("alavanca");
  const [cargaMaquina, setCargaMaquina] = useState(100);
  const [forcaAplicada, setForcaAplicada] = useState(50);

  const vmAlavanca = distanceLeft / distanceRight;
  const vmPlano = 1 / Math.sin(((30 * Math.PI) / 180));
  const vmPolia = 2;

  // ===== HIDROSTÁTICA =====
  const [profundidadeHidro, setProfundidadeHidro] = useState(5);
  const [tipoFluidoHidro, setTipoFluidoHidro] = useState("agua");

  const densidades: { [key: string]: number } = {
    agua: 1000,
    oleo: 900,
    mercurio: 13600,
  };

  const g = 10;
  const P0 = 101325;
  const rho = densidades[tipoFluidoHidro];
  const pressaoHidro = P0 + rho * g * profundidadeHidro;

  // Animação
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setForceLeft((prev) => {
        const next = prev + 2;
        if (next > 100) return 50;
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const resetAll = () => {
    setForceLeft(50);
    setForceRight(50);
    setAngleLeft(0);
    setAngleRight(0);
    setForceAlavanca(50);
    setDistanceLeft(2);
    setDistanceRight(3);
    setAngleAlavanca(90);
    setCargaMaquina(100);
    setForcaAplicada(50);
    setProfundidadeHidro(5);
    setIsAnimating(false);
  };

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
            {[
              { id: "equilibrio", label: "Equilíbrio de Forças" },
              { id: "torque", label: "Torque e Momento" },
              { id: "maquinas", label: "Máquinas Simples" },
              { id: "hidrostatica", label: "Hidrostática" },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsAnimating(false);
                }}
                className={activeTab === tab.id ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* ===== EQUILÍBRIO DE FORÇAS ===== */}
          {activeTab === "equilibrio" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Equilíbrio de Forças</h2>
                  <p className="text-slate-600">Ajuste as forças e ângulos para alcançar o equilíbrio (resultante ≈ 0)</p>
                </div>

                {/* Visualização de Vetores */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border-2 border-blue-200 flex justify-center items-center min-h-64">
                  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-md">
                    {/* Centro */}
                    <circle cx="200" cy="150" r="8" fill="#1f2937" />

                    {/* Vetor Esquerdo */}
                    <line
                      x1="200"
                      y1="150"
                      x2={200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2}
                      y2={150 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2}
                      stroke="#ef4444"
                      strokeWidth="3"
                    />
                    <polygon
                      points={`${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2},${150 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2} ${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2 - 5},${150 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2 + 5} ${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2 + 5},${150 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2 + 5}`}
                      fill="#ef4444"
                    />

                    {/* Vetor Direito */}
                    <line
                      x1="200"
                      y1="150"
                      x2={200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2}
                      y2={150 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2}
                      stroke="#3b82f6"
                      strokeWidth="3"
                    />
                    <polygon
                      points={`${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2},${150 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2} ${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2 - 5},${150 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2 + 5} ${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2 + 5},${150 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2 + 5}`}
                      fill="#3b82f6"
                    />

                    {/* Vetor Resultante */}
                    {resultantMagnitude > 1 && (
                      <>
                        <line
                          x1="200"
                          y1="150"
                          x2={200 + resultantX / 2}
                          y2={150 - resultantY / 2}
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                        <polygon
                          points={`${200 + resultantX / 2},${150 - resultantY / 2} ${200 + resultantX / 2 - 3},${150 - resultantY / 2 + 3} ${200 + resultantX / 2 + 3},${150 - resultantY / 2 + 3}`}
                          fill="#10b981"
                        />
                      </>
                    )}

                    {/* Indicador de Equilíbrio */}
                    {isEquilibrio && (
                      <text x="200" y="30" textAnchor="middle" className="text-lg font-bold fill-green-600">
                        ✓ EQUILIBRIO
                      </text>
                    )}
                  </svg>
                </div>

                {/* Controles */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Força Esquerda: {forceLeft.toFixed(0)} N
                      </label>
                      <Slider value={[forceLeft]} onValueChange={(v) => setForceLeft(v[0])} min={0} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Ângulo Esquerdo: {angleLeft.toFixed(0)}°
                      </label>
                      <Slider value={[angleLeft]} onValueChange={(v) => setAngleLeft(v[0])} min={0} max={360} step={5} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Força Direita: {forceRight.toFixed(0)} N
                      </label>
                      <Slider value={[forceRight]} onValueChange={(v) => setForceRight(v[0])} min={0} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Ângulo Direito: {angleRight.toFixed(0)}°
                      </label>
                      <Slider value={[angleRight]} onValueChange={(v) => setAngleRight(v[0])} min={0} max={360} step={5} />
                    </div>
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-red-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força Esquerda</p>
                    <p className="text-2xl font-bold text-red-600">{forceLeft.toFixed(0)} N</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força Direita</p>
                    <p className="text-2xl font-bold text-blue-600">{forceRight.toFixed(0)} N</p>
                  </Card>
                  <Card className="p-4 bg-green-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Resultante</p>
                    <p className="text-2xl font-bold text-green-600">{resultantMagnitude.toFixed(1)} N</p>
                  </Card>
                </div>

                <Card className="p-4 bg-cyan-50 border-l-4 border-cyan-500">
                  <p className="text-sm font-bold text-slate-900 mb-2">Fórmula:</p>
                  <MathFormula formula="\\sum \\vec{F} = 0 \\Rightarrow \\text{Equilibrio}" className="text-center" />
                </Card>
              </div>
            </Card>
          )}

          {/* ===== TORQUE E MOMENTO ===== */}
          {activeTab === "torque" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Torque e Momento</h2>
                  <p className="text-slate-600">Ajuste a força, distância e ângulo para visualizar o torque</p>
                </div>

                {/* Visualização de Alavanca */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg border-2 border-orange-200 flex justify-center items-center min-h-64">
                  <svg width="500" height="200" viewBox="0 0 500 200" className="w-full max-w-lg">
                    {/* Fulcro */}
                    <polygon points="250,120 240,150 260,150" fill="#d97706" />

                    {/* Barra */}
                    <line x1="100" y1="120" x2="400" y2="120" stroke="#1f2937" strokeWidth="10" />

                    {/* Ponto de aplicação esquerdo */}
                    <circle cx={100 + distanceLeft * 30} cy="120" r="10" fill="#ef4444" />
                    <line
                      x1={100 + distanceLeft * 30}
                      y1="120"
                      x2={100 + distanceLeft * 30 + forceAlavanca * Math.cos((angleAlavanca * Math.PI) / 180) * 0.5}
                      y2={120 - forceAlavanca * Math.sin((angleAlavanca * Math.PI) / 180) * 0.5}
                      stroke="#ef4444"
                      strokeWidth="3"
                    />

                    {/* Ponto de aplicação direito */}
                    <circle cx={400 - distanceRight * 30} cy="120" r="10" fill="#3b82f6" />

                    {/* Distâncias */}
                    <text x={100 + distanceLeft * 30} y="50" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                      d₁ = {distanceLeft.toFixed(1)} m
                    </text>
                    <text x={400 - distanceRight * 30} y="50" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                      d₂ = {distanceRight.toFixed(1)} m
                    </text>

                    {/* Força */}
                    <text x={100 + distanceLeft * 30} y="180" textAnchor="middle" className="text-sm font-bold fill-red-600">
                      F = {forceAlavanca.toFixed(0)} N
                    </text>
                  </svg>
                </div>

                {/* Controles */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Força: {forceAlavanca.toFixed(0)} N
                    </label>
                    <Slider value={[forceAlavanca]} onValueChange={(v) => setForceAlavanca(v[0])} min={10} max={100} step={5} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Distância 1: {distanceLeft.toFixed(1)} m
                    </label>
                    <Slider value={[distanceLeft]} onValueChange={(v) => setDistanceLeft(v[0])} min={0.5} max={5} step={0.5} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Distância 2: {distanceRight.toFixed(1)} m
                    </label>
                    <Slider value={[distanceRight]} onValueChange={(v) => setDistanceRight(v[0])} min={0.5} max={5} step={0.5} />
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-red-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Torque 1</p>
                    <p className="text-2xl font-bold text-red-600">{torqueLeft.toFixed(1)} N·m</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força Necessária 2</p>
                    <p className="text-2xl font-bold text-blue-600">{forceRightNeeded.toFixed(1)} N</p>
                  </Card>
                  <Card className={`p-4 border-0 ${isTorqueBalanced ? "bg-green-50" : "bg-yellow-50"}`}>
                    <p className="text-xs text-slate-600 mb-1">Status</p>
                    <p className={`text-lg font-bold ${isTorqueBalanced ? "text-green-600" : "text-yellow-600"}`}>
                      {isTorqueBalanced ? "✓ Equilibrio" : "⚠ Desequilibrio"}
                    </p>
                  </Card>
                </div>

                <Card className="p-4 bg-orange-50 border-l-4 border-orange-500">
                  <p className="text-sm font-bold text-slate-900 mb-2">Fórmula:</p>
                  <MathFormula formula="\\tau = \\vec{r} \\times \\vec{F} = r \\cdot F \\cdot \\sin(\\theta)" className="text-center" />
                </Card>
              </div>
            </Card>
          )}

          {/* ===== MÁQUINAS SIMPLES ===== */}
          {activeTab === "maquinas" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Máquinas Simples</h2>
                  <p className="text-slate-600">Visualize como as máquinas simples multiplicam força</p>
                </div>

                {/* Seletor de Máquina */}
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: "alavanca", label: "Alavanca" },
                    { id: "plano", label: "Plano Inclinado" },
                    { id: "polia", label: "Polia" },
                  ].map((maq) => (
                    <Button
                      key={maq.id}
                      variant={tipoMaquina === maq.id ? "default" : "outline"}
                      onClick={() => setTipoMaquina(maq.id)}
                      className={tipoMaquina === maq.id ? "bg-amber-600" : ""}
                    >
                      {maq.label}
                    </Button>
                  ))}
                </div>

                {/* Visualização */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-lg border-2 border-yellow-200 flex justify-center items-center min-h-64">
                  {tipoMaquina === "alavanca" && (
                    <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-md">
                      <polygon points="200,120 190,150 210,150" fill="#d97706" />
                      <line x1="100" y1="120" x2="300" y2="120" stroke="#1f2937" strokeWidth="8" />
                      <circle cx="150" cy="120" r="8" fill="#ef4444" />
                      <text x="150" y="60" textAnchor="middle" className="text-sm font-bold fill-red-600">
                        F aplicada
                      </text>
                      <circle cx="280" cy="120" r="8" fill="#10b981" />
                      <text x="280" y="60" textAnchor="middle" className="text-sm font-bold fill-green-600">
                        F resultado
                      </text>
                    </svg>
                  )}

                  {tipoMaquina === "plano" && (
                    <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-md">
                      <polygon points="100,150 300,100 300,150" fill="#fbbf24" />
                      <circle cx="280" cy="110" r="8" fill="#10b981" />
                      <text x="280" y="60" textAnchor="middle" className="text-sm font-bold fill-green-600">
                        Carga
                      </text>
                    </svg>
                  )}

                  {tipoMaquina === "polia" && (
                    <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-md">
                      <circle cx="200" cy="80" r="30" fill="none" stroke="#1f2937" strokeWidth="4" />
                      <line x1="200" y1="110" x2="200" y2="160" stroke="#1f2937" strokeWidth="4" />
                      <circle cx="200" cy="170" r="8" fill="#10b981" />
                      <text x="200" y="50" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                        Polia
                      </text>
                    </svg>
                  )}
                </div>

                {/* Controles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Carga: {cargaMaquina.toFixed(0)} N
                    </label>
                    <Slider value={[cargaMaquina]} onValueChange={(v) => setCargaMaquina(v[0])} min={50} max={200} step={10} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Força Aplicada: {forcaAplicada.toFixed(0)} N
                    </label>
                    <Slider value={[forcaAplicada]} onValueChange={(v) => setForcaAplicada(v[0])} min={10} max={100} step={5} />
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-yellow-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Carga</p>
                    <p className="text-2xl font-bold text-yellow-600">{cargaMaquina.toFixed(0)} N</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força Aplicada</p>
                    <p className="text-2xl font-bold text-blue-600">{forcaAplicada.toFixed(0)} N</p>
                  </Card>
                  <Card className="p-4 bg-green-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Vantagem Mecânica</p>
                    <p className="text-2xl font-bold text-green-600">{(cargaMaquina / forcaAplicada).toFixed(2)}x</p>
                  </Card>
                </div>

                <Card className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <p className="text-sm font-bold text-slate-900 mb-2">Fórmula:</p>
                  <MathFormula formula="VM = \\frac{F_{resistencia}}{F_{potencia}}" className="text-center" />
                </Card>
              </div>
            </Card>
          )}

          {/* ===== HIDROSTÁTICA ===== */}
          {activeTab === "hidrostatica" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Hidrostática</h2>
                  <p className="text-slate-600">Visualize como a pressão aumenta com a profundidade</p>
                </div>

                {/* Visualização */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-2 border-cyan-200 flex justify-center items-center min-h-64">
                  <svg width="300" height="300" viewBox="0 0 300 300" className="w-full max-w-md">
                    {/* Água */}
                    <rect x="50" y="50" width="200" height={profundidadeHidro * 20} fill="#3b82f6" opacity="0.3" />

                    {/* Linha de profundidade */}
                    <line x1="30" y1={50 + profundidadeHidro * 20} x2="270" y2={50 + profundidadeHidro * 20} stroke="#0369a1" strokeWidth="2" strokeDasharray="5,5" />

                    {/* Objeto */}
                    <circle cx="150" cy={50 + profundidadeHidro * 20} r="15" fill="#ef4444" />

                    {/* Profundidade label */}
                    <text x="20" y={60 + profundidadeHidro * 20} textAnchor="middle" className="text-sm font-bold fill-slate-900">
                      {profundidadeHidro.toFixed(1)} m
                    </text>

                    {/* Pressão arrows */}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={i}>
                        <line x1={100 + i * 40} y1={50 + profundidadeHidro * 20 - 30} x2={100 + i * 40} y2={50 + profundidadeHidro * 20 - 10} stroke="#0369a1" strokeWidth="2" />
                        <polygon points={`${100 + i * 40},${50 + profundidadeHidro * 20 - 10} ${100 + i * 40 - 3},${50 + profundidadeHidro * 20 - 15} ${100 + i * 40 + 3},${50 + profundidadeHidro * 20 - 15}`} fill="#0369a1" />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Controles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Profundidade: {profundidadeHidro.toFixed(1)} m
                    </label>
                    <Slider value={[profundidadeHidro]} onValueChange={(v) => setProfundidadeHidro(v[0])} min={0} max={50} step={1} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Tipo de Fluido</label>
                    <div className="flex gap-2">
                      {["agua", "oleo", "mercurio"].map((tipo) => (
                        <Button
                          key={tipo}
                          variant={tipoFluidoHidro === tipo ? "default" : "outline"}
                          onClick={() => setTipoFluidoHidro(tipo)}
                          size="sm"
                          className={tipoFluidoHidro === tipo ? "bg-cyan-600" : ""}
                        >
                          {tipo === "agua" ? "Água" : tipo === "oleo" ? "Óleo" : "Mercúrio"}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-cyan-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Pressão Atmosférica</p>
                    <p className="text-2xl font-bold text-cyan-600">{(P0 / 1000).toFixed(1)} kPa</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Pressão do Fluido</p>
                    <p className="text-2xl font-bold text-blue-600">{((pressaoHidro - P0) / 1000).toFixed(1)} kPa</p>
                  </Card>
                  <Card className="p-4 bg-slate-900 border-0">
                    <p className="text-xs text-slate-300 mb-1">Pressão Total</p>
                    <p className="text-2xl font-bold text-white">{(pressaoHidro / 1000).toFixed(1)} kPa</p>
                  </Card>
                </div>

                <Card className="p-4 bg-cyan-50 border-l-4 border-cyan-500">
                  <p className="text-sm font-bold text-slate-900 mb-2">Fórmula:</p>
                  <MathFormula formula="P = P_0 + \\rho g h" className="text-center" />
                </Card>
              </div>
            </Card>
          )}

          {/* Botões de Controle */}
          <div className="flex gap-2 justify-center">
            <Button onClick={() => setIsAnimating(!isAnimating)} className="bg-amber-600 hover:bg-amber-700">
              {isAnimating ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Animar
                </>
              )}
            </Button>
            <Button onClick={resetAll} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Resetar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
