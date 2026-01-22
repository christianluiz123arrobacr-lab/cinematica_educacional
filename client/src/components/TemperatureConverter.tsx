import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

export const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState(25);

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  // Cor do termômetro (-20 a 100)
  const getThermometerColor = (tempC: number) => {
    // Clamp entre -20 e 100
    const t = Math.max(-20, Math.min(100, tempC));
    // Mapear -20 -> 270 (roxo), 100 -> 0 (vermelho)
    const hue = 270 - ((t + 20) / 120) * 270;
    return `hsl(${hue}, 100%, 50%)`;
  };

  const color = getThermometerColor(celsius);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center gap-8 bg-slate-50 p-8 rounded-lg flex-wrap">
        {/* Termômetro Celsius */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-slate-700">Celsius</span>
          <div className="relative w-12 h-64 bg-white rounded-full border-4 border-slate-300 shadow-inner flex items-end justify-center p-1">
             <div className="absolute -bottom-2 w-16 h-16 bg-slate-100 rounded-full -z-10 border-4 border-slate-300"></div>
             <div 
               className="w-full rounded-b-full transition-all duration-300 ease-out"
               style={{ 
                 height: `${Math.min(100, Math.max(0, ((celsius + 20) / 120) * 100))}%`, 
                 backgroundColor: color,
                 boxShadow: `0 0 15px ${color}`
               }}
             ></div>
          </div>
          <span className="font-bold text-xl" style={{ color }}>{formatNumber(celsius)}°C</span>
        </div>

        {/* Termômetro Fahrenheit */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-slate-700">Fahrenheit</span>
          <div className="relative w-12 h-64 bg-white rounded-full border-4 border-slate-300 shadow-inner flex items-end justify-center p-1">
             <div className="absolute -bottom-2 w-16 h-16 bg-slate-100 rounded-full -z-10 border-4 border-slate-300"></div>
             <div 
               className="w-full rounded-b-full transition-all duration-300 ease-out"
               style={{ 
                 height: `${Math.min(100, Math.max(0, ((celsius + 20) / 120) * 100))}%`, 
                 backgroundColor: color,
                 opacity: 0.8
               }}
             ></div>
          </div>
          <span className="font-bold text-xl text-slate-600">{formatNumber(fahrenheit)}°F</span>
        </div>

        {/* Termômetro Kelvin */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-slate-700">Kelvin</span>
          <div className="relative w-12 h-64 bg-white rounded-full border-4 border-slate-300 shadow-inner flex items-end justify-center p-1">
             <div className="absolute -bottom-2 w-16 h-16 bg-slate-100 rounded-full -z-10 border-4 border-slate-300"></div>
             <div 
               className="w-full rounded-b-full transition-all duration-300 ease-out"
               style={{ 
                 height: `${Math.min(100, Math.max(0, ((celsius + 20) / 120) * 100))}%`, 
                 backgroundColor: color,
                 opacity: 0.6
               }}
             ></div>
          </div>
          <span className="font-bold text-xl text-slate-600">{formatNumber(kelvin)} K</span>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-slate-700">Temperatura (Celsius)</label>
            <span className="text-sm font-bold" style={{ color }}>{formatNumber(celsius)}°C</span>
          </div>
          <Slider
            value={[celsius]}
            onValueChange={(value) => setCelsius(value[0])}
            min={-20}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <p className="font-bold text-slate-900 mb-2">Celsius para Fahrenheit</p>
            <MathFormula formula={String.raw`$$ T_F = \frac{9}{5} T_C + 32 $$`} />
            <div className="mt-2"></div>
            <MathFormula formula={String.raw`$$ T_F = \frac{9}{5} \cdot ${formatNumber(celsius)} + 32 = ${formatNumber(fahrenheit)}^\circ F $$`} />
          </div>

          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <p className="font-bold text-slate-900 mb-2">Celsius para Kelvin</p>
            <MathFormula formula={String.raw`$$ T_K = T_C + 273,15 $$`} />
            <div className="mt-2"></div>
            <MathFormula formula={String.raw`$$ T_K = ${formatNumber(celsius)} + 273,15 = ${formatNumber(kelvin)} K $$`} />
          </div>
        </div>
      </Card>
    </div>
  );
};
