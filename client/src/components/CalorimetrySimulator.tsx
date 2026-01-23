import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

export const CalorimetrySimulator: React.FC = () => {
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

  // Cor do termômetro baseada na variação de temperatura (0 a 100)
  // Azul (frio) -> Vermelho (quente)
  const getThermometerColor = (temp: number) => {
    // Mapear 0-100 para hue 240 (azul) a 0 (vermelho)
    const hue = Math.max(0, 240 - (temp * 2.4));
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-8 rounded-lg">
        <div className="relative w-24 h-64 bg-white rounded-full border-4 border-slate-300 shadow-inner flex items-end justify-center p-2">
           {/* Bulbo */}
           <div className="absolute -bottom-4 w-32 h-32 bg-slate-100 rounded-full -z-10 border-4 border-slate-300"></div>
           
           {/* Líquido */}
           <div 
             className="w-full rounded-b-full transition-all duration-500 ease-out"
             style={{ 
               height: `${Math.max(10, tempChange)}%`, 
               backgroundColor: getThermometerColor(tempChange),
               boxShadow: `0 0 20px ${getThermometerColor(tempChange)}`
             }}
           ></div>
           
           {/* Marcas */}
           <div className="absolute right-0 top-0 h-full w-full flex flex-col justify-between py-4 px-2 pointer-events-none">
             {[100, 80, 60, 40, 20, 0].map(t => (
               <div key={t} className="w-full border-t border-slate-400 h-0 flex items-center justify-end">
                 <span className="text-xs text-slate-500 mr-6">{t}°C</span>
               </div>
             ))}
           </div>
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
                <SelectItem value="agua">Água (c = 4186 J/kg·K)</SelectItem>
                <SelectItem value="ferro">Ferro (c = 448 J/kg·K)</SelectItem>
                <SelectItem value="aluminio">Alumínio (c = 897 J/kg·K)</SelectItem>
                <SelectItem value="cobre">Cobre (c = 385 J/kg·K)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Massa (<MathFormula formula={String.raw`$m$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(mass, "kg")}</span>
            </div>
            <Slider
              value={[mass]}
              onValueChange={(value) => setMass(value[0])}
              min={0.1}
              max={10}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Variação de Temperatura (<MathFormula formula={String.raw`$\Delta T$`} />)</label>
              <span className="text-sm font-bold" style={{ color: getThermometerColor(tempChange) }}>{formatUnit(tempChange, "K")}</span>
            </div>
            <Slider
              value={[tempChange]}
              onValueChange={(value) => setTempChange(value[0])}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <p className="text-slate-600 font-semibold mb-2">Calor Necessário (Q)</p>
            <p className="text-4xl font-bold text-red-600 mb-2">
              {formatUnit(heat, "J")}
            </p>
            <p className="text-slate-600 text-sm">
              {formatUnit(heat / 1000, "kJ")}
            </p>
            
            <div className="mt-4">
              <p className="text-slate-600 text-sm mb-1">Cálculo Detalhado:</p>
              <MathFormula formula={String.raw`$$ Q = m \cdot c \cdot \Delta T $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ Q = ${formatNumber(mass)} \cdot ${formatNumber(specificHeats[material])} \cdot ${formatNumber(tempChange)} = ${formatUnit(heat, "J")} $$`} />
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900 text-sm">
              <strong>Curiosidade:</strong> A água tem o maior calor específico! Por isso, demora muito tempo para aquecer e esfria lentamente. É por isso que o mar modera o clima das regiões costeiras.
            </p>
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
