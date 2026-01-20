import { useState } from "react";
import { MathFormula } from "./MathFormula";

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState(25);

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(parseFloat(e.target.value) || 0);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = parseFloat(e.target.value) || 0;
    setCelsius((f - 32) * 5/9);
  };

  const handleKelvinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const k = parseFloat(e.target.value) || 0;
    setCelsius(k - 273.15);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">🎮 Simulador Interativo de Conversão</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* CELSIUS */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Celsius (°C)</label>
          <input
            type="number"
            value={celsius.toFixed(2)}
            onChange={handleCelsiusChange}
            className="w-full px-4 py-3 text-lg font-bold border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-600"
          />
          <p className="text-xs text-slate-600 mt-2">Mude este valor para ver as conversões</p>
        </div>

        {/* FAHRENHEIT */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Fahrenheit (°F)</label>
          <input
            type="number"
            value={fahrenheit.toFixed(2)}
            onChange={handleFahrenheitChange}
            className="w-full px-4 py-3 text-lg font-bold border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-600"
          />
          <p className="text-xs text-slate-600 mt-2">Ou mude este valor</p>
        </div>

        {/* KELVIN */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Kelvin (K)</label>
          <input
            type="number"
            value={kelvin.toFixed(2)}
            onChange={handleKelvinChange}
            className="w-full px-4 py-3 text-lg font-bold border-2 border-purple-400 rounded-lg focus:outline-none focus:border-purple-600"
          />
          <p className="text-xs text-slate-600 mt-2">Ou mude este valor</p>
        </div>
      </div>

      {/* FÓRMULAS USADAS */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-300">
        <h4 className="font-bold text-slate-900 mb-4">📐 Fórmulas Usadas:</h4>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-700 mb-2">Celsius → Fahrenheit:</p>
            <MathFormula formula="°F = (°C \\times \\frac{9}{5}) + 32" display={true} />
          </div>
          <div>
            <p className="text-sm text-slate-700 mb-2">Celsius → Kelvin:</p>
            <MathFormula formula="K = °C + 273,15" display={true} />
          </div>
          <div>
            <p className="text-sm text-slate-700 mb-2">Fahrenheit → Celsius:</p>
            <MathFormula formula="°C = (°F - 32) \\times \\frac{5}{9}" display={true} />
          </div>
        </div>
      </div>

      {/* INTERPRETAÇÃO */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-slate-700">
          <strong>💡 Interpretação:</strong> {
            celsius < 0 ? "Muito frio! Abaixo do ponto de congelamento da água." :
            celsius < 10 ? "Frio. Dia de inverno." :
            celsius < 20 ? "Fresco. Dia de primavera/outono." :
            celsius < 30 ? "Agradável. Dia normal." :
            celsius < 40 ? "Quente. Dia de verão." :
            "Muito quente! Perigoso para saúde."
          }
        </p>
      </div>
    </div>
  );
}
