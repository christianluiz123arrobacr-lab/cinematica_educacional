import { useState } from "react";
import { MathFormula } from "./MathFormula";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

type ProcessType = "isothermal" | "adiabatic" | "isobaric" | "isochoric";

interface ProcessData {
  name: string;
  description: string;
  formula: string;
  color: string;
  equation: string;
}

export function PVDiagramSimulator() {
  const [selectedProcess, setSelectedProcess] = useState<ProcessType>("isothermal");
  const [parameter, setParameter] = useState(50);

  const processes: Record<ProcessType, ProcessData> = {
    isothermal: {
      name: "Processo Isotérmico",
      description: "Temperatura constante (T = constante). Pressão e volume variam inversamente.",
      formula: "P \\cdot V = \\text{constante}",
      color: "from-blue-500 to-blue-700",
      equation: "PV = nRT = \\text{const}",
    },
    adiabatic: {
      name: "Processo Adiabático",
      description: "Sem troca de calor com o ambiente (Q = 0). Pressão, volume e temperatura variam.",
      formula: "P \\cdot V^\\gamma = \\text{constante}",
      color: "from-red-500 to-red-700",
      equation: "PV^\\gamma = \\text{const} \\quad (\\gamma \\approx 1,4)",
    },
    isobaric: {
      name: "Processo Isobárico",
      description: "Pressão constante (P = constante). Volume e temperatura variam proporcionalmente.",
      formula: "\\frac{V}{T} = \\text{constante}",
      color: "from-green-500 to-green-700",
      equation: "\\frac{V}{T} = \\frac{nR}{P} = \\text{const}",
    },
    isochoric: {
      name: "Processo Isocórico",
      description: "Volume constante (V = constante). Pressão e temperatura variam proporcionalmente.",
      formula: "\\frac{P}{T} = \\text{constante}",
      color: "from-orange-500 to-orange-700",
      equation: "\\frac{P}{T} = \\frac{nR}{V} = \\text{const}",
    },
  };

  const current = processes[selectedProcess];

  // Gerar pontos para o gráfico
  const generateCurve = () => {
    const points = [];
    const startV = 20 + parameter * 0.3;
    const startP = 100 - parameter * 0.5;

    if (selectedProcess === "isothermal") {
      // PV = const
      for (let v = startV; v <= startV + 60; v += 5) {
        const p = (startV * startP) / v;
        points.push({ v, p });
      }
    } else if (selectedProcess === "adiabatic") {
      // PV^1.4 = const
      const k = startP * Math.pow(startV, 1.4);
      for (let v = startV; v <= startV + 60; v += 5) {
        const p = k / Math.pow(v, 1.4);
        points.push({ v, p });
      }
    } else if (selectedProcess === "isobaric") {
      // P = const
      for (let v = startV; v <= startV + 60; v += 5) {
        points.push({ v, p: startP });
      }
    } else if (selectedProcess === "isochoric") {
      // V = const
      for (let p = startP; p <= startP + 50; p += 5) {
        points.push({ v: startV, p });
      }
    }

    return points;
  };

  const points = generateCurve();
  const maxV = Math.max(...points.map(p => p.v), 100);
  const maxP = Math.max(...points.map(p => p.p), 150);

  // Converter para coordenadas SVG
  const toSVG = (v: number, p: number) => {
    const x = (v / maxV) * 400 + 50;
    const y = 450 - (p / maxP) * 350;
    return { x, y };
  };

  const pathData = points.map((p, i) => {
    const { x, y } = toSVG(p.v, p.p);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">📈 Simulador de Diagrama P-V</h3>
        
        {/* SELEÇÃO DE PROCESSO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {(Object.keys(processes) as ProcessType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedProcess(type)}
              className={`p-4 rounded-lg border-2 font-bold transition-all ${
                selectedProcess === type
                  ? `bg-gradient-to-r ${processes[type].color} text-white border-current`
                  : "bg-slate-100 text-slate-900 border-slate-300 hover:border-slate-400"
              }`}
            >
              {processes[type].name}
            </button>
          ))}
        </div>

        {/* DESCRIÇÃO */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-300 mb-8">
          <h4 className="font-bold text-slate-900 mb-2">📖 O que é?</h4>
          <p className="text-slate-700 mb-4">{current.description}</p>
          
          <h4 className="font-bold text-slate-900 mb-2">📐 Equação Característica:</h4>
          <MathFormula formula={current.formula} display={true} />
        </div>

        {/* GRÁFICO P-V */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border-2 border-slate-300 mb-8">
          <h4 className="font-bold text-slate-900 mb-4">📊 Diagrama P-V Interativo:</h4>
          
          <svg width="100%" height="500" viewBox="0 0 500 500" className="bg-white rounded border border-slate-300">
            {/* Eixos */}
            <line x1="50" y1="450" x2="450" y2="450" stroke="#000" strokeWidth="2" />
            <line x1="50" y1="450" x2="50" y2="50" stroke="#000" strokeWidth="2" />
            
            {/* Rótulos dos eixos */}
            <text x="460" y="460" fontSize="14" fontWeight="bold">V</text>
            <text x="30" y="40" fontSize="14" fontWeight="bold">P</text>
            
            {/* Grid */}
            {[...Array(5)].map((_, i) => (
              <g key={`grid-${i}`}>
                <line x1="50" y1={450 - (i * 100)} x2="450" y2={450 - (i * 100)} stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5" />
                <line x1={50 + (i * 100)} y1="450" x2={50 + (i * 100)} y2="50" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5" />
              </g>
            ))}
            
            {/* Curva do processo */}
            <path
              d={pathData}
              fill="none"
              stroke={`url(#gradient-${selectedProcess})`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Gradiente */}
            <defs>
              <linearGradient id={`gradient-${selectedProcess}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={current.color.split(" ")[1]} />
                <stop offset="100%" stopColor={current.color.split(" ")[3]} />
              </linearGradient>
            </defs>
            
            {/* Pontos */}
            {points.map((p, i) => {
              const { x, y } = toSVG(p.v, p.p);
              return (
                <circle key={i} cx={x} cy={y} r="3" fill={current.color.split(" ")[1]} opacity="0.6" />
              );
            })}
            
            {/* Ponto inicial */}
            {points.length > 0 && (
              <circle
                cx={toSVG(points[0].v, points[0].p).x}
                cy={toSVG(points[0].v, points[0].p).y}
                r="6"
                fill="green"
                stroke="darkgreen"
                strokeWidth="2"
              />
            )}
            
            {/* Ponto final */}
            {points.length > 0 && (
              <circle
                cx={toSVG(points[points.length - 1].v, points[points.length - 1].p).x}
                cy={toSVG(points[points.length - 1].v, points[points.length - 1].p).y}
                r="6"
                fill="red"
                stroke="darkred"
                strokeWidth="2"
              />
            )}
          </svg>
          
          <p className="text-xs text-slate-600 mt-2">🟢 Início do processo | 🔴 Fim do processo</p>
        </div>

        {/* CONTROLE INTERATIVO */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h4 className="font-bold text-slate-900 mb-4">🎮 Parâmetro de Controle</h4>
          <input
            type="range"
            min="0"
            max="100"
            value={parameter}
            onChange={(e) => setParameter(parseFloat(e.target.value))}
            className="w-full mb-4"
          />
          <p className="text-sm text-slate-700">Valor: {parameter.toFixed(0)}</p>
        </div>

        {/* EQUAÇÃO */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-300">
          <h4 className="font-bold text-slate-900 mb-3">🔤 Equação Geral:</h4>
          <MathFormula formula={current.equation} display={true} />
        </div>
      </div>

      <AdvancedTheory 
        title={ITAThermologyTheory.title}
        introduction={ITAThermologyTheory.introduction}
        sections={ITAThermologyTheory.sections}
      />
    </div>
  );
}
