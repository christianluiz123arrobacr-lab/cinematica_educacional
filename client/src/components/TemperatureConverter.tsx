import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

export const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState(20);
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  return (
    <div className="w-full space-y-6">
      <Card className="p-6 space-y-6">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Temperatura em Celsius (°C)</label>
              <span className="text-sm font-bold text-slate-900">{formatNumber(celsius, 1)}°C</span>
            </div>
            <Slider
              value={[celsius]}
              onValueChange={(value) => setCelsius(value[0])}
              min={-50}
              max={150}
              step={0.5}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-slate-600 font-semibold mb-2">Fahrenheit (°F)</p>
              <p className="text-3xl font-bold text-blue-600">
                {formatNumber(fahrenheit, 2)}°F
              </p>
              <div className="mt-4">
                <p className="text-slate-600 text-sm mb-1">Fórmula:</p>
                <MathFormula formula={String.raw`$$ ^\circ F = \left( ^\circ C \times \frac{9}{5} \right) + 32 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ ^\circ F = \left( ${formatNumber(celsius)} \times 1,8 \right) + 32 = ${formatNumber(fahrenheit, 2)} $$`} />
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-slate-600 font-semibold mb-2">Kelvin (K)</p>
              <p className="text-3xl font-bold text-green-600">
                {formatNumber(kelvin, 2)} K
              </p>
              <div className="mt-4">
                <p className="text-slate-600 text-sm mb-1">Fórmula:</p>
                <MathFormula formula={String.raw`$$ K = ^\circ C + 273,15 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ K = ${formatNumber(celsius)} + 273,15 = ${formatNumber(kelvin, 2)} $$`} />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-900 text-sm">
              <strong>Dica:</strong> O zero absoluto é 0 K = -273,15°C = -459,67°F. Nenhuma temperatura pode ser menor que isso!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
