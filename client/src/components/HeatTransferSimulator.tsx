import { useState } from "react";
import { MathFormula } from "./MathFormula";

type TransferType = "conduction" | "convection" | "radiation";

export function HeatTransferSimulator() {
  const [selectedType, setSelectedType] = useState<TransferType>("conduction");
  const [intensity, setIntensity] = useState(50);

  const transferTypes = {
    conduction: {
      title: "Condução Térmica",
      description: "Calor passa através de contato direto entre objetos.",
      formula: "Q = \\frac{k \\cdot A \\cdot \\Delta T}{d}",
      variables: [
        { symbol: "k", meaning: "Condutividade térmica do material (W/(m·K))" },
        { symbol: "A", meaning: "Área de contato (m²)" },
        { symbol: "\\Delta T", meaning: "Diferença de temperatura (K)" },
        { symbol: "d", meaning: "Espessura do material (m)" },
      ],
      examples: [
        "Colher quente em uma panela",
        "Mão tocando um radiador",
        "Xícara de café aquecendo as mãos",
      ],
      visualization: "🔗 Contato Direto",
      color: "from-blue-500 to-blue-700",
    },
    convection: {
      title: "Convecção Térmica",
      description: "Calor passa através do movimento de um fluido (líquido ou gás).",
      formula: "Q = h \\cdot A \\cdot \\Delta T",
      variables: [
        { symbol: "h", meaning: "Coeficiente de convecção (W/(m²·K))" },
        { symbol: "A", meaning: "Área de superfície (m²)" },
        { symbol: "\\Delta T", meaning: "Diferença de temperatura (K)" },
      ],
      examples: [
        "Água fervendo em uma panela",
        "Ar quente subindo de um radiador",
        "Ventilador circulando ar quente",
      ],
      visualization: "🌀 Movimento de Fluido",
      color: "from-green-500 to-green-700",
    },
    radiation: {
      title: "Radiação Térmica",
      description: "Calor passa através de ondas eletromagnéticas (sem contato).",
      formula: "P = \\sigma \\cdot \\varepsilon \\cdot A \\cdot T^4",
      variables: [
        { symbol: "\\sigma", meaning: "Constante de Stefan-Boltzmann (5,67×10⁻⁸ W/(m²·K⁴))" },
        { symbol: "\\varepsilon", meaning: "Emissividade do material (0 a 1)" },
        { symbol: "A", meaning: "Área de superfície (m²)" },
        { symbol: "T", meaning: "Temperatura absoluta (K)" },
      ],
      examples: [
        "Calor do Sol chegando na Terra",
        "Calor de uma fogueira",
        "Forno de micro-ondas",
      ],
      visualization: "☀️ Ondas Eletromagnéticas",
      color: "from-orange-500 to-orange-700",
    },
  };

  const current = transferTypes[selectedType];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">🌡️ Simulador de Transferência de Calor</h3>
      
      {/* SELEÇÃO DE TIPO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(transferTypes) as TransferType[]).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`p-4 rounded-lg border-2 font-bold transition-all ${
              selectedType === type
                ? `bg-gradient-to-r ${transferTypes[type].color} text-white border-current`
                : "bg-slate-100 text-slate-900 border-slate-300 hover:border-slate-400"
            }`}
          >
            {transferTypes[type].title}
          </button>
        ))}
      </div>

      {/* DESCRIÇÃO */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-300 mb-8">
        <h4 className="font-bold text-slate-900 mb-2">📖 O que é?</h4>
        <p className="text-slate-700 mb-4">{current.description}</p>
        
        <h4 className="font-bold text-slate-900 mb-2">📐 Fórmula:</h4>
        <MathFormula formula={current.formula} display={true} />
      </div>

      {/* VARIÁVEIS */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-slate-900 mb-4">🔤 Variáveis:</h4>
        <div className="space-y-3">
          {current.variables.map((v, i) => (
            <div key={i} className="flex gap-3">
              <div className="bg-white px-3 py-1 rounded font-mono text-sm font-bold text-blue-900 min-w-fit">
                <MathFormula formula={v.symbol} display={false} />
              </div>
              <p className="text-slate-700">{v.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SIMULADOR INTERATIVO */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300 mb-8">
        <h4 className="font-bold text-slate-900 mb-4">🎮 Intensidade de Transferência</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
          className="w-full mb-4"
        />
        
        <div className="bg-white p-6 rounded-lg border-2 border-purple-300 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-slate-900">Transferência de Calor</span>
            <span className="text-2xl font-bold text-purple-900">{intensity.toFixed(0)}%</span>
          </div>
          
          {/* VISUALIZAÇÃO */}
          <div className="relative h-20 bg-slate-100 rounded-lg overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${current.color} transition-all duration-300`}
              style={{ width: `${intensity}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">{current.visualization}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-700">
          <strong>Interpretação:</strong> Com {intensity.toFixed(0)}% de intensidade, o calor está sendo transferido {
            intensity < 25 ? "muito lentamente" :
            intensity < 50 ? "lentamente" :
            intensity < 75 ? "rapidamente" :
            "muito rapidamente"
          }.
        </p>
      </div>

      {/* EXEMPLOS */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h4 className="font-bold text-slate-900 mb-3">💡 Exemplos Práticos:</h4>
        <ul className="space-y-2">
          {current.examples.map((example, i) => (
            <li key={i} className="flex gap-2 text-slate-700">
              <span className="font-bold">•</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
