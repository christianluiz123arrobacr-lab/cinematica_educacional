import { useState } from "react";
import { MathFormula } from "./MathFormula";

export function RealWorldApplications() {
  const [activeApp, setActiveApp] = useState<"water" | "cooling" | "insulation" | "engine">("water");

  // APP 1: Custo de Aquecer Água
  const [waterMass, setWaterMass] = useState(100);
  const [waterInitialTemp, setWaterInitialTemp] = useState(20);
  const [waterFinalTemp, setWaterFinalTemp] = useState(60);
  const waterQ = waterMass * 4200 * (waterFinalTemp - waterInitialTemp);
  const waterCost = (waterQ / 3600000) * 0.50; // R$ 0,50 por kWh

  // APP 2: Tempo de Resfriamento
  const [coolingInitialTemp, setCoolingInitialTemp] = useState(80);
  const [coolingFinalTemp, setCoolingFinalTemp] = useState(25);
  const coolingDeltaT = coolingInitialTemp - coolingFinalTemp;
  const coolingTime = coolingDeltaT * 2; // Aproximadamente 2 minutos por °C

  // APP 3: Isolamento Térmico
  const [wallThickness, setWallThickness] = useState(10);
  const [insideTemp, setInsideTemp] = useState(22);
  const [outsideTemp, setOutsideTemp] = useState(5);
  const [wallArea, setWallArea] = useState(100);
  const conductivity = 0.5; // W/(m·K) para isolamento
  const heatLoss = (conductivity * wallArea * (insideTemp - outsideTemp)) / (wallThickness / 100);
  const dailyCost = (heatLoss * 24 / 1000) * 0.50;

  // APP 4: Eficiência de Motor
  const [hotReservoir, setHotReservoir] = useState(500);
  const [coldReservoir, setColdReservoir] = useState(300);
  const carnotEfficiency = ((hotReservoir - coldReservoir) / hotReservoir) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">🌍 Aplicações Reais e Calculadoras</h3>
      
      {/* SELEÇÃO DE APLICAÇÃO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setActiveApp("water")}
          className={`p-4 rounded-lg border-2 font-bold transition-all text-left ${
            activeApp === "water"
              ? "bg-blue-100 border-blue-500 text-blue-900"
              : "bg-slate-100 border-slate-300 text-slate-900 hover:border-blue-400"
          }`}
        >
          💧 Custo de Aquecer Água
        </button>
        <button
          onClick={() => setActiveApp("cooling")}
          className={`p-4 rounded-lg border-2 font-bold transition-all text-left ${
            activeApp === "cooling"
              ? "bg-green-100 border-green-500 text-green-900"
              : "bg-slate-100 border-slate-300 text-slate-900 hover:border-green-400"
          }`}
        >
          ❄️ Tempo de Resfriamento
        </button>
        <button
          onClick={() => setActiveApp("insulation")}
          className={`p-4 rounded-lg border-2 font-bold transition-all text-left ${
            activeApp === "insulation"
              ? "bg-orange-100 border-orange-500 text-orange-900"
              : "bg-slate-100 border-slate-300 text-slate-900 hover:border-orange-400"
          }`}
        >
          🏠 Isolamento Térmico
        </button>
        <button
          onClick={() => setActiveApp("engine")}
          className={`p-4 rounded-lg border-2 font-bold transition-all text-left ${
            activeApp === "engine"
              ? "bg-red-100 border-red-500 text-red-900"
              : "bg-slate-100 border-slate-300 text-slate-900 hover:border-red-400"
          }`}
        >
          🚗 Eficiência de Motor
        </button>
      </div>

      {/* APP 1: CUSTO DE AQUECER ÁGUA */}
      {activeApp === "water" && (
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4">💧 Quanto Custa Aquecer Água em Casa?</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Volume (litros)</label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={waterMass}
                onChange={(e) => setWaterMass(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-blue-900 mt-2">{waterMass} L</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Inicial (°C)</label>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={waterInitialTemp}
                onChange={(e) => setWaterInitialTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-blue-900 mt-2">{waterInitialTemp}°C</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Final (°C)</label>
              <input
                type="range"
                min="30"
                max="80"
                step="1"
                value={waterFinalTemp}
                onChange={(e) => setWaterFinalTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-blue-900 mt-2">{waterFinalTemp}°C</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-300 mb-6">
            <h5 className="font-bold text-slate-900 mb-3">Cálculo:</h5>
            <MathFormula formula={`Q = ${waterMass} \\times 4.200 \\times (${waterFinalTemp} - ${waterInitialTemp}) = ${waterQ.toLocaleString()} \\text{ J}`} display={true} />
            <p className="text-sm text-slate-700 mt-3">
              Energia necessária: {(waterQ / 3600000).toFixed(2)} kWh
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-300">
            <p className="text-2xl font-bold text-green-900 mb-2">
              💰 Custo: R$ {waterCost.toFixed(2)}
            </p>
            <p className="text-sm text-green-800">
              (Considerando R$ 0,50 por kWh)
            </p>
          </div>
        </div>
      )}

      {/* APP 2: TEMPO DE RESFRIAMENTO */}
      {activeApp === "cooling" && (
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4">❄️ Quanto Tempo para Resfriar?</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Inicial (°C)</label>
              <input
                type="range"
                min="30"
                max="100"
                step="1"
                value={coolingInitialTemp}
                onChange={(e) => setCoolingInitialTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-green-900 mt-2">{coolingInitialTemp}°C</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Final (°C)</label>
              <input
                type="range"
                min="15"
                max="50"
                step="1"
                value={coolingFinalTemp}
                onChange={(e) => setCoolingFinalTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-green-900 mt-2">{coolingFinalTemp}°C</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-green-300 mb-6">
            <h5 className="font-bold text-slate-900 mb-3">Cálculo Aproximado:</h5>
            <MathFormula formula={`\\Delta T = ${coolingInitialTemp} - ${coolingFinalTemp} = ${coolingDeltaT}°C`} display={true} />
            <p className="text-sm text-slate-700 mt-3">
              Tempo aproximado: {coolingTime} minutos (considerando ~2 min por °C)
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border border-blue-300">
            <p className="text-2xl font-bold text-blue-900 mb-2">
              ⏱️ {coolingTime} minutos
            </p>
            <p className="text-sm text-blue-800">
              (Aproximadamente {(coolingTime / 60).toFixed(1)} horas)
            </p>
          </div>
        </div>
      )}

      {/* APP 3: ISOLAMENTO TÉRMICO */}
      {activeApp === "insulation" && (
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4">🏠 Perda de Calor em Casa</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Espessura do Isolamento (cm)</label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={wallThickness}
                onChange={(e) => setWallThickness(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-orange-900 mt-2">{wallThickness} cm</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Área da Parede (m²)</label>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={wallArea}
                onChange={(e) => setWallArea(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-orange-900 mt-2">{wallArea} m²</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temp. Interna (°C)</label>
              <input
                type="range"
                min="15"
                max="30"
                step="1"
                value={insideTemp}
                onChange={(e) => setInsideTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-orange-900 mt-2">{insideTemp}°C</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temp. Externa (°C)</label>
              <input
                type="range"
                min="-10"
                max="20"
                step="1"
                value={outsideTemp}
                onChange={(e) => setOutsideTemp(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-orange-900 mt-2">{outsideTemp}°C</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-orange-300 mb-6">
            <h5 className="font-bold text-slate-900 mb-3">Cálculo:</h5>
            <MathFormula formula={`Q = \\frac{k \\cdot A \\cdot \\Delta T}{d} = \\frac{0,5 \\times ${wallArea} \\times ${insideTemp - outsideTemp}}{${wallThickness / 100}} = ${heatLoss.toFixed(0)} \\text{ W}`} display={true} />
            <p className="text-sm text-slate-700 mt-3">
              Perda diária: {(heatLoss * 24 / 1000).toFixed(2)} kWh
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border border-red-300">
            <p className="text-2xl font-bold text-red-900 mb-2">
              🔥 Custo Diário: R$ {dailyCost.toFixed(2)}
            </p>
            <p className="text-sm text-red-800">
              Custo mensal: R$ {(dailyCost * 30).toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* APP 4: EFICIÊNCIA DE MOTOR */}
      {activeApp === "engine" && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4">🚗 Eficiência de Motor (Ciclo de Carnot)</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Quente (K)</label>
              <input
                type="range"
                min="300"
                max="800"
                step="10"
                value={hotReservoir}
                onChange={(e) => setHotReservoir(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-red-900 mt-2">{hotReservoir} K ({(hotReservoir - 273.15).toFixed(0)}°C)</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Temperatura Fria (K)</label>
              <input
                type="range"
                min="250"
                max="400"
                step="10"
                value={coldReservoir}
                onChange={(e) => setColdReservoir(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-lg font-bold text-red-900 mt-2">{coldReservoir} K ({(coldReservoir - 273.15).toFixed(0)}°C)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-300 mb-6">
            <h5 className="font-bold text-slate-900 mb-3">Cálculo:</h5>
            <MathFormula formula={`\\eta = \\left(1 - \\frac{T_c}{T_h}\\right) \\times 100 = \\left(1 - \\frac{${coldReservoir}}{${hotReservoir}}\\right) \\times 100 = ${carnotEfficiency.toFixed(1)}\\%`} display={true} />
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border border-yellow-300">
            <p className="text-2xl font-bold text-yellow-900 mb-2">
              ⚡ Eficiência Máxima: {carnotEfficiency.toFixed(1)}%
            </p>
            <p className="text-sm text-yellow-800">
              {carnotEfficiency > 50 ? "Excelente eficiência!" : "Eficiência moderada. Aumentar ΔT melhora."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
