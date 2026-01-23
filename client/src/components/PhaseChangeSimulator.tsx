import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

export const PhaseChangeSimulator: React.FC = () => {
  const [mass, setMass] = useState(1);
  const [phase, setPhase] = useState("fusao");
  
  const latentHeats: Record<string, number> = {
    fusao: 334000,      // Fusão do gelo
    vaporizacao: 2260000, // Vaporização da água
  };
  
  const heat = mass * latentHeats[phase];

  return (
    <div className="w-full space-y-6">
      <Card className="p-6 space-y-6">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Processo (Água)</label>
            <Select value={phase} onValueChange={setPhase}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fusao">Fusão (Gelo → Água): L = 334 kJ/kg</SelectItem>
                <SelectItem value="vaporizacao">Vaporização (Água → Vapor): L = 2260 kJ/kg</SelectItem>
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

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <p className="text-slate-600 font-semibold mb-2">Calor Latente Necessário (Q)</p>
            <p className="text-4xl font-bold text-purple-600 mb-2">
              {formatUnit(heat, "J")}
            </p>
            <p className="text-slate-600 text-sm">
              {formatUnit(heat / 1000, "kJ")}
            </p>
            
            <div className="mt-4">
              <p className="text-slate-600 text-sm mb-1">Cálculo Detalhado:</p>
              <MathFormula formula={String.raw`$$ Q = m \cdot L $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ Q = ${formatNumber(mass)} \cdot ${formatNumber(latentHeats[phase])} = ${formatUnit(heat, "J")} $$`} />
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-900 text-sm">
              <strong>Nota:</strong> Durante a mudança de fase, a temperatura permanece constante! Todo o calor fornecido é usado para quebrar as ligações intermoleculares.
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
