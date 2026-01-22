import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";

export const ThermalExpansionSimulator: React.FC = () => {
  const [length, setLength] = useState(100);
  const [tempDelta, setTempDelta] = useState(20);
  const [material, setMaterial] = useState("ferro");
  
  const alphas: Record<string, number> = {
    ferro: 12e-6,
    aluminio: 23e-6,
    cobre: 17e-6,
    vidro: 8e-6,
  };
  
  const deltaLength = length * alphas[material] * tempDelta;
  const finalLength = length + deltaLength;

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
                <SelectItem value="ferro">Ferro (α = 12 × 10⁻⁶ K⁻¹)</SelectItem>
                <SelectItem value="aluminio">Alumínio (α = 23 × 10⁻⁶ K⁻¹)</SelectItem>
                <SelectItem value="cobre">Cobre (α = 17 × 10⁻⁶ K⁻¹)</SelectItem>
                <SelectItem value="vidro">Vidro (α = 8 × 10⁻⁶ K⁻¹)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Comprimento Inicial (<MathFormula formula={String.raw`$L_0$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(length, "m")}</span>
            </div>
            <Slider
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
              min={10}
              max={500}
              step={10}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Variação de Temperatura (<MathFormula formula={String.raw`$\Delta T$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(tempDelta, "K")}</span>
            </div>
            <Slider
              value={[tempDelta]}
              onValueChange={(value) => setTempDelta(value[0])}
              min={1}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <p className="text-slate-600 font-semibold mb-2">Dilatação (<MathFormula formula={String.raw`$\Delta L$`} />)</p>
              <p className="text-3xl font-bold text-orange-600">
                {formatNumber(deltaLength * 1000, 4)} mm
              </p>
              <p className="text-slate-600 text-sm mt-2">
                {formatNumber(deltaLength, 6)} m
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-600 font-semibold mb-2">Comprimento Final (<MathFormula formula={String.raw`$L$`} />)</p>
              <p className="text-3xl font-bold text-slate-900">
                {formatNumber(finalLength, 4)} m
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200">
            <p className="text-slate-600 text-sm mb-2 font-bold">Cálculo Detalhado:</p>
            <div className="overflow-x-auto">
              <MathFormula formula={String.raw`$$ \Delta L = L_0 \cdot \alpha \cdot \Delta T $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ \Delta L = ${formatNumber(length)} \cdot ${formatNumber(alphas[material] * 1e6)} \times 10^{-6} \cdot ${formatNumber(tempDelta)} $$`} />
              <div className="mt-2"></div>
              <MathFormula formula={String.raw`$$ \Delta L = ${formatNumber(deltaLength, 6)} \text{ m} $$`} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
