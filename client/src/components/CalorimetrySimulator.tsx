import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";

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

  return (
    <div className="w-full space-y-6">
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
              <span className="text-sm font-bold text-slate-900">{formatUnit(tempChange, "K")}</span>
            </div>
            <Slider
              value={[tempChange]}
              onValueChange={(value) => setTempChange(value[0])}
              min={1}
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
    </div>
  );
};
