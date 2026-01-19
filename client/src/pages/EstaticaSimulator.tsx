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
  const [angleRight, setAngleRight] = useState(180);
  const [animationPhase, setAnimationPhase] = useState(0);

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
  const forceRightNeeded = distanceLeft > 0 ? torqueLeft / distanceRight : 0;
  const isTorqueBalanced = Math.abs(torqueLeft - (forceRightNeeded * distanceRight)) < 1;

  // ===== MÁQUINAS SIMPLES =====
  const [tipoMaquina, setTipoMaquina] = useState("alavanca");
  const [cargaMaquina, setCargaMaquina] = useState(100);
  const [forcaAplicada, setForcaAplicada] = useState(50);
  const [planoAngle, setPlanoAngle] = useState(30);
  const [numPolias, setNumPolias] = useState(1);
  const [maquinaAnimacao, setMaquinaAnimacao] = useState(0);

  // ===== HIDROSTÁTICA =====
  const [profundidadeHidro, setProfundidadeHidro] = useState(5);
  const [tipoFluidoHidro, setTipoFluidoHidro] = useState("agua");
  const [bolhasAnimacao, setBolhasAnimacao] = useState<Array<{id: number; x: number; y: number; speed: number}>>([]);

  const densidades: { [key: string]: number } = {
    agua: 1000,
    oleo: 900,
    mercurio: 13600,
  };

  const g = 10;
  const P0 = 101325;
  const rho = densidades[tipoFluidoHidro];
  const pressaoHidro = P0 + rho * g * profundidadeHidro;
  const pressaoFluidoOnly = rho * g * profundidadeHidro;

  // Animações
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 360);
      setMaquinaAnimacao((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Gerar bolhas para hidrostática
  useEffect(() => {
    if (activeTab === "hidrostatica" && isAnimating) {
      const newBolhas = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        x: Math.random() * 200 + 50,
        y: Math.random() * profundidadeHidro * 20 + 50,
        speed: Math.random() * 2 + 1,
      }));
      setBolhasAnimacao(newBolhas);
    }
  }, [activeTab, isAnimating, profundidadeHidro]);

  const resetAll = () => {
    setForceLeft(50);
    setForceRight(50);
    setAngleLeft(0);
    setAngleRight(180);
    setForceAlavanca(50);
    setDistanceLeft(2);
    setDistanceRight(3);
    setAngleAlavanca(90);
    setCargaMaquina(100);
    setForcaAplicada(50);
    setProfundidadeHidro(5);
    setAnimationPhase(0);
    setMaquinaAnimacao(0);
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
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border-2 border-blue-200 flex justify-center items-center min-h-80">
                  <svg width="400" height="350" viewBox="0 0 400 350" className="w-full max-w-md">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="400" height="350" fill="url(#grid)" />

                    {/* Centro */}
                    <circle cx="200" cy="175" r="8" fill="#1f2937" />
                    <circle cx="200" cy="175" r="15" fill="none" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />

                    {/* Vetor Esquerdo */}
                    <line
                      x1="200"
                      y1="175"
                      x2={200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2}
                      y2={175 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2}
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2},${175 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2} ${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2 - 8},${175 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2 + 8} ${200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2 + 8},${175 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2 + 8}`}
                      fill="#ef4444"
                    />
                    <text x={200 + (forceLeft * Math.cos((angleLeft * Math.PI) / 180)) / 2 - 30} y={175 - (forceLeft * Math.sin((angleLeft * Math.PI) / 180)) / 2 - 10} className="text-xs font-bold fill-red-600">
                      F₁ = {forceLeft.toFixed(0)} N
                    </text>

                    {/* Vetor Direito */}
                    <line
                      x1="200"
                      y1="175"
                      x2={200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2}
                      y2={175 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2}
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2},${175 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2} ${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2 - 8},${175 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2 + 8} ${200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2 + 8},${175 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2 + 8}`}
                      fill="#3b82f6"
                    />
                    <text x={200 + (forceRight * Math.cos((angleRight * Math.PI) / 180)) / 2 + 10} y={175 - (forceRight * Math.sin((angleRight * Math.PI) / 180)) / 2 - 10} className="text-xs font-bold fill-blue-600">
                      F₂ = {forceRight.toFixed(0)} N
                    </text>

                    {/* Vetor Resultante */}
                    {resultantMagnitude > 1 && (
                      <>
                        <line
                          x1="200"
                          y1="175"
                          x2={200 + resultantX / 2}
                          y2={175 - resultantY / 2}
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="8,4"
                          strokeLinecap="round"
                        />
                        <polygon
                          points={`${200 + resultantX / 2},${175 - resultantY / 2} ${200 + resultantX / 2 - 6},${175 - resultantY / 2 + 6} ${200 + resultantX / 2 + 6},${175 - resultantY / 2 + 6}`}
                          fill="#10b981"
                        />
                        <text x={200 + resultantX / 2 + 10} y={175 - resultantY / 2 - 10} className="text-xs font-bold fill-green-600">
                          R = {resultantMagnitude.toFixed(1)} N
                        </text>
                      </>
                    )}

                    {/* Indicador de Equilíbrio */}
                    {isEquilibrio && (
                      <text x="200" y="30" textAnchor="middle" className="text-2xl font-bold fill-green-600">
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
                        Força 1: {forceLeft.toFixed(0)} N
                      </label>
                      <Slider value={[forceLeft]} onValueChange={(v) => setForceLeft(v[0])} min={0} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Ângulo 1: {angleLeft.toFixed(0)}°
                      </label>
                      <Slider value={[angleLeft]} onValueChange={(v) => setAngleLeft(v[0])} min={0} max={360} step={5} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Força 2: {forceRight.toFixed(0)} N
                      </label>
                      <Slider value={[forceRight]} onValueChange={(v) => setForceRight(v[0])} min={0} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Ângulo 2: {angleRight.toFixed(0)}°
                      </label>
                      <Slider value={[angleRight]} onValueChange={(v) => setAngleRight(v[0])} min={0} max={360} step={5} />
                    </div>
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-red-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força 1</p>
                    <p className="text-2xl font-bold text-red-600">{forceLeft.toFixed(0)} N</p>
                  </Card>
                  <Card className="p-4 bg-blue-50 border-0">
                    <p className="text-xs text-slate-600 mb-1">Força 2</p>
                    <p className="text-2xl font-bold text-blue-600">{forceRight.toFixed(0)} N</p>
                  </Card>
                  <Card className={`p-4 border-0 ${isEquilibrio ? "bg-green-50" : "bg-yellow-50"}`}>
                    <p className="text-xs text-slate-600 mb-1">Resultante</p>
                    <p className={`text-2xl font-bold ${isEquilibrio ? "text-green-600" : "text-yellow-600"}`}>
                      {resultantMagnitude.toFixed(1)} N
                    </p>
                  </Card>
                </div>

                {/* Fórmulas */}
                <Card className="p-4 bg-cyan-50 border-l-4 border-cyan-500">
                  <p className="text-sm font-bold text-slate-900 mb-3">Fórmulas de Equilíbrio:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="F_x = F_1 \\cos(\\theta_1) + F_2 \\cos(\\theta_2)" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="F_y = F_1 \\sin(\\theta_1) + F_2 \\sin(\\theta_2)" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="F_{resultante} = \\sqrt{F_x^2 + F_y^2}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\text{Equilíbrio: } F_{resultante} \\approx 0" display={true} className="text-center" />
                    </div>
                  </div>
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
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg border-2 border-orange-200 flex justify-center items-center min-h-80">
                  <svg width="500" height="250" viewBox="0 0 500 250" className="w-full max-w-lg">
                    {/* Fulcro */}
                    <polygon points="250,130 240,160 260,160" fill="#d97706" />

                    {/* Barra */}
                    <line x1="100" y1="130" x2="400" y2="130" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" />

                    {/* Ponto de aplicação esquerdo */}
                    <circle cx={100 + distanceLeft * 30} cy="130" r="12" fill="#ef4444" />
                    <line
                      x1={100 + distanceLeft * 30}
                      y1="130"
                      x2={100 + distanceLeft * 30 + forceAlavanca * Math.cos((angleAlavanca * Math.PI) / 180) * 0.4}
                      y2={130 - forceAlavanca * Math.sin((angleAlavanca * Math.PI) / 180) * 0.4}
                      stroke="#ef4444"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Ponto de aplicação direito */}
                    <circle cx={400 - distanceRight * 30} cy="130" r="12" fill="#3b82f6" />

                    {/* Distâncias */}
                    <text x={100 + distanceLeft * 30} y="60" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                      d₁ = {distanceLeft.toFixed(1)} m
                    </text>
                    <text x={400 - distanceRight * 30} y="60" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                      d₂ = {distanceRight.toFixed(1)} m
                    </text>

                    {/* Força */}
                    <text x={100 + distanceLeft * 30} y="210" textAnchor="middle" className="text-sm font-bold fill-red-600">
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

                {/* Fórmulas */}
                <Card className="p-4 bg-orange-50 border-l-4 border-orange-500">
                  <p className="text-sm font-bold text-slate-900 mb-3">Fórmulas de Torque:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\tau = r \\cdot F \\cdot \\sin(\\theta)" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\tau_1 = F_1 \\cdot d_1 \\cdot \\sin(\\theta)" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\text{Equilíbrio: } \\tau_1 = \\tau_2" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="F_1 \\cdot d_1 = F_2 \\cdot d_2" display={true} className="text-center" />
                    </div>
                  </div>
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
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-lg border-2 border-yellow-200 flex justify-center items-center min-h-80">
                  {tipoMaquina === "alavanca" && (
                    <svg width="400" height="250" viewBox="0 0 400 250" className="w-full max-w-md">
                      <polygon points="200,140 190,170 210,170" fill="#d97706" />
                      <line x1="100" y1="140" x2="300" y2="140" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="150" cy="140" r="10" fill="#ef4444" />
                      <line x1="150" y1="140" x2="150" y2={140 - forcaAplicada * 0.3} stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                      <text x="150" y="60" textAnchor="middle" className="text-sm font-bold fill-red-600">
                        F aplicada
                      </text>
                      <circle cx="280" cy="140" r="10" fill="#10b981" />
                      <line x1="280" y1="140" x2="280" y2={140 - cargaMaquina * 0.2} stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                      <text x="280" y="60" textAnchor="middle" className="text-sm font-bold fill-green-600">
                        F resultado
                      </text>
                    </svg>
                  )}

                  {tipoMaquina === "plano" && (
                    <svg width="400" height="250" viewBox="0 0 400 250" className="w-full max-w-md">
                      <polygon points="100,180 300,120 300,180" fill="#fbbf24" />
                      <circle cx="250" cy="135" r="10" fill="#10b981" />
                      <text x="200" y="60" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                        Ângulo: {planoAngle.toFixed(0)}°
                      </text>
                    </svg>
                  )}

                  {tipoMaquina === "polia" && (
                    <svg width="400" height="250" viewBox="0 0 400 250" className="w-full max-w-md">
                      <circle cx="200" cy="100" r="40" fill="none" stroke="#1f2937" strokeWidth="5" />
                      <circle cx="200" cy="100" r="30" fill="none" stroke="#1f2937" strokeWidth="2" />
                      <line x1="170" y1="100" x2="230" y2="100" stroke="#1f2937" strokeWidth="2" />
                      <line x1="200" y1="70" x2="200" y2="130" stroke="#1f2937" strokeWidth="2" />
                      <line x1="200" y1="140" x2="200" y2="190" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="200" cy="200" r="10" fill="#10b981" />
                      <text x="200" y="50" textAnchor="middle" className="text-sm font-bold fill-slate-900">
                        {numPolias} Polia{numPolias > 1 ? "s" : ""}
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

                {tipoMaquina === "plano" && (
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Ângulo: {planoAngle.toFixed(0)}°
                    </label>
                    <Slider value={[planoAngle]} onValueChange={(v) => setPlanoAngle(v[0])} min={10} max={80} step={5} />
                  </div>
                )}

                {tipoMaquina === "polia" && (
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Número de Polias: {numPolias}
                    </label>
                    <Slider value={[numPolias]} onValueChange={(v) => setNumPolias(v[0])} min={1} max={4} step={1} />
                  </div>
                )}

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

                {/* Fórmulas */}
                <Card className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <p className="text-sm font-bold text-slate-900 mb-3">Fórmulas de Máquinas Simples:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="VM = \\frac{F_{carga}}{F_{aplicada}}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\text{Alavanca: } VM = \\frac{d_1}{d_2}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\text{Plano Inclinado: } VM = \\frac{1}{\\sin(\\theta)}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\text{Polia: } VM = 2n" display={true} className="text-center" />
                    </div>
                  </div>
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
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-2 border-cyan-200 flex justify-center items-center min-h-80">
                  <svg width="300" height="350" viewBox="0 0 300 350" className="w-full max-w-md">
                    <defs>
                      <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: "#0369a1", stopOpacity: 0.5 }} />
                      </linearGradient>
                    </defs>
                    <rect x="50" y="50" width="200" height={profundidadeHidro * 20} fill="url(#waterGradient)" />

                    {/* Bolhas animadas */}
                    {isAnimating &&
                      bolhasAnimacao.map((bolha) => (
                        <circle
                          key={bolha.id}
                          cx={bolha.x}
                          cy={Math.max(50, bolha.y - (animationPhase * bolha.speed) % (profundidadeHidro * 20))}
                          r="3"
                          fill="#0369a1"
                          opacity="0.5"
                        />
                      ))}

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
                        <line x1={100 + i * 40} y1={50 + profundidadeHidro * 20 - 40} x2={100 + i * 40} y2={50 + profundidadeHidro * 20 - 10} stroke="#0369a1" strokeWidth="3" strokeLinecap="round" />
                        <polygon points={`${100 + i * 40},${50 + profundidadeHidro * 20 - 10} ${100 + i * 40 - 4},${50 + profundidadeHidro * 20 - 18} ${100 + i * 40 + 4},${50 + profundidadeHidro * 20 - 18}`} fill="#0369a1" />
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
                    <p className="text-2xl font-bold text-blue-600">{(pressaoFluidoOnly / 1000).toFixed(1)} kPa</p>
                  </Card>
                  <Card className="p-4 bg-slate-900 border-0">
                    <p className="text-xs text-slate-300 mb-1">Pressão Total</p>
                    <p className="text-2xl font-bold text-white">{(pressaoHidro / 1000).toFixed(1)} kPa</p>
                  </Card>
                </div>

                {/* Fórmulas */}
                <Card className="p-4 bg-cyan-50 border-l-4 border-cyan-500">
                  <p className="text-sm font-bold text-slate-900 mb-3">Fórmulas de Hidrostática:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="P = P_0 + \\rho g h" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="P_0 = 101.325 \\text{ kPa}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="\\rho = \\text{densidade (kg/m}^3\\text{)}" display={true} className="text-center" />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <MathFormula formula="g = 10 \\text{ m/s}^2, \\quad h = \\text{profundidade (m)}" display={true} className="text-center" />
                    </div>
                  </div>
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
