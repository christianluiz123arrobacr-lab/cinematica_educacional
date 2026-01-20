import { useState } from "react";
import { MathFormula } from "./MathFormula";

interface Material {
  name: string;
  specificHeat: number;
  color: string;
}

const materials: Material[] = [
  { name: "Água", specificHeat: 4200, color: "bg-blue-100" },
  { name: "Ferro", specificHeat: 450, color: "bg-gray-100" },
  { name: "Alumínio", specificHeat: 900, color: "bg-slate-100" },
  { name: "Areia", specificHeat: 800, color: "bg-yellow-100" },
  { name: "Vidro", specificHeat: 840, color: "bg-cyan-100" },
  { name: "Cobre", specificHeat: 385, color: "bg-orange-100" },
];

export function HeatCalculator() {
  const [mass, setMass] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [initialTemp, setInitialTemp] = useState(20);
  const [finalTemp, setFinalTemp] = useState(80);

  const deltaT = finalTemp - initialTemp;
  const Q = mass * selectedMaterial.specificHeat * deltaT;
  const QkJ = Q / 1000;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">🔥 Calculador de Calor Necessário</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* MASSA */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Massa (kg)</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-lg font-bold text-blue-900 mt-2">{mass.toFixed(1)} kg</p>
        </div>

        {/* MATERIAL */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Material</label>
          <select
            value={selectedMaterial.name}
            onChange={(e) => {
              const mat = materials.find(m => m.name === e.target.value);
              if (mat) setSelectedMaterial(mat);
            }}
            className="w-full px-4 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:border-green-600"
          >
            {materials.map(m => (
              <option key={m.name} value={m.name}>{m.name}</option>
            ))}
          </select>
          <p className="text-xs text-slate-600 mt-2">c = {selectedMaterial.specificHeat} J/(kg·°C)</p>
        </div>

        {/* TEMPERATURA INICIAL */}
        <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Temperatura Inicial (°C)</label>
          <input
            type="range"
            min="-50"
            max="100"
            step="1"
            value={initialTemp}
            onChange={(e) => setInitialTemp(parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-lg font-bold text-cyan-900 mt-2">{initialTemp}°C</p>
        </div>

        {/* TEMPERATURA FINAL */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Temperatura Final (°C)</label>
          <input
            type="range"
            min="-50"
            max="100"
            step="1"
            value={finalTemp}
            onChange={(e) => setFinalTemp(parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-lg font-bold text-orange-900 mt-2">{finalTemp}°C</p>
        </div>
      </div>

      {/* RESULTADO */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-2 border-red-300 mb-8">
        <h4 className="font-bold text-slate-900 mb-4">📊 Resultado:</h4>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-700 mb-2">Variação de Temperatura (ΔT):</p>
            <MathFormula formula={`\\Delta T = ${finalTemp}°C - ${initialTemp}°C = ${deltaT}°C`} display={true} />
          </div>
          <div>
            <p className="text-sm text-slate-700 mb-2">Quantidade de Calor Necessária:</p>
            <MathFormula formula={`Q = m \\cdot c \\cdot \\Delta T = ${mass} \\times ${selectedMaterial.specificHeat} \\times ${deltaT} = ${Q.toLocaleString()} \\text{ J}`} display={true} />
          </div>
          <div className="bg-white p-4 rounded border border-red-200">
            <p className="text-lg font-bold text-red-900">
              💥 {Q > 0 ? "Calor NECESSÁRIO:" : "Calor LIBERADO:"} {Math.abs(QkJ).toFixed(0)} kJ
            </p>
            <p className="text-xs text-slate-600 mt-2">
              {Q > 0 ? "Você precisa ADICIONAR este calor para aquecer." : "Este calor será LIBERADO ao esfriar."}
            </p>
          </div>
        </div>
      </div>

      {/* INTERPRETAÇÃO */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-slate-700">
          <strong>💡 Interpretação:</strong> Para aquecer {mass.toFixed(1)} kg de {selectedMaterial.name.toLowerCase()} de {initialTemp}°C para {finalTemp}°C, você precisa fornecer {Math.abs(QkJ).toFixed(0)} kJ de calor. Isso é equivalente a {(Math.abs(QkJ) / 4.18).toFixed(0)} calorias (cal).
        </p>
      </div>
    </div>
  );
}
