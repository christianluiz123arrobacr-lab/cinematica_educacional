import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

export const ThermalExpansionSimulator: React.FC = () => {
  const [l0, setL0] = useState(10);
  const [deltaT, setDeltaT] = useState(50);
  const [material, setMaterial] = useState("aco");
  
  const coeficientes: Record<string, number> = {
    aco: 11e-6,
    aluminio: 23e-6,
    cobre: 17e-6,
    vidro: 9e-6,
  };
  
  const alpha = coeficientes[material];
  const deltaL = l0 * alpha * deltaT;
  const lFinal = l0 + deltaL;

  // Cor do termômetro
  const getThermometerColor = (temp: number) => {
    const hue = Math.max(0, 240 - (temp * 2.4));
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col items-center bg-slate-50 p-8 rounded-lg space-y-8">
        {/* Termômetro Visual */}
        <div className="w-full max-w-xs flex items-center gap-4">
          <div className="relative w-full h-4 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
            <div 
              className="h-full transition-all duration-500"
              style={{ 
                width: `${deltaT}%`, 
                backgroundColor: getThermometerColor(deltaT) 
              }}
            ></div>
          </div>
          <span className="font-bold w-16 text-right" style={{ color: getThermometerColor(deltaT) }}>
            {deltaT}°C
          </span>
        </div>

        {/* Barra Visual */}
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Barra Original (Fantasma) */}
          <div 
            className="absolute h-8 bg-slate-300 opacity-30 rounded border border-slate-400"
            style={{ width: `${l0 * 20}px` }} // Escala visual
          ></div>
          
          {/* Barra Expandida */}
          <div 
            className="h-8 bg-gradient-to-r from-slate-700 to-slate-500 rounded shadow-lg transition-all duration-500 flex items-center justify-center text-white text-xs"
            style={{ 
              width: `${lFinal * 20}px`, // Escala visual exagerada para notar a diferença
              backgroundColor: deltaT > 50 ? "#ef4444" : "#3b82f6" // Muda cor se muito quente
            }}
          >
            {formatNumber(lFinal, 4)} m
          </div>
          
          {/* Indicador de Delta L (Exagerado visualmente para didática) */}
          {deltaL > 0 && (
            <div className="absolute top-20 flex flex-col items-center">
              <div className="w-full h-px bg-red-500 relative">
                <div className="absolute -top-1 left-0 w-px h-3 bg-red-500"></div>
                <div className="absolute -top-1 right-0 w-px h-3 bg-red-500"></div>
              </div>
              <span className="text-red-600 text-xs font-bold mt-1">
                Dilatação: {formatUnit(deltaL * 1000, "mm")}
              </span>
            </div>
          )}
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Material</label>
            <Select value={material} onValueChange={setMaterial}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aco">Aço (α = 11×10⁻⁶ °C⁻¹)</SelectItem>
                <SelectItem value="aluminio">Alumínio (α = 23×10⁻⁶ °C⁻¹)</SelectItem>
                <SelectItem value="cobre">Cobre (α = 17×10⁻⁶ °C⁻¹)</SelectItem>
                <SelectItem value="vidro">Vidro (α = 9×10⁻⁶ °C⁻¹)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Comprimento Inicial (<MathFormula formula={String.raw`$L_0$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(l0, "m")}</span>
            </div>
            <Slider
              value={[l0]}
              onValueChange={(value) => setL0(value[0])}
              min={1}
              max={20}
              step={0.5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Variação de Temperatura (<MathFormula formula={String.raw`$\Delta T$`} />)</label>
              <span className="text-sm font-bold" style={{ color: getThermometerColor(deltaT) }}>{formatUnit(deltaT, "°C")}</span>
            </div>
            <Slider
              value={[deltaT]}
              onValueChange={(value) => setDeltaT(value[0])}
              min={0}
              max={200}
              step={1}
              className="w-full"
            />
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-slate-600 text-sm">Dilatação Linear (<MathFormula formula={String.raw`$\Delta L$`} />)</p>
                <p className="text-xl font-bold text-slate-900">{formatUnit(deltaL * 1000, "mm")}</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">Comprimento Final (<MathFormula formula={String.raw`$L$`} />)</p>
                <p className="text-xl font-bold text-slate-900">{formatUnit(lFinal, "m")}</p>
              </div>
            </div>
            
            <div>
              <p className="text-slate-600 text-sm mb-1">Cálculo Detalhado:</p>
              <MathFormula formula={String.raw`$$ \Delta L = L_0 \cdot \alpha \cdot \Delta T $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ \Delta L = ${formatNumber(l0)} \cdot ${formatNumber(alpha * 1e6)} \times 10^{-6} \cdot ${formatNumber(deltaT)} $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ \Delta L = ${formatNumber(deltaL, 6)} \text{ m} = ${formatNumber(deltaL * 1000, 3)} \text{ mm} $$`} />
            </div>
          </div>
        </div>
      </Card>

      <AdvancedTheory 
        title={ITAThermologyTheory.title}
        introduction={ITAThermologyTheory.introduction}
        sections={ITAThermologyTheory.sections}
      />
    </div>
  );
};
