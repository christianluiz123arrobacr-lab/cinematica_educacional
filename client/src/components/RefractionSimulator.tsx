import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAOpticsTheory } from "@/content/optics/ita_optics_theory";

export const RefractionSimulator: React.FC = () => {
  const [n1, setN1] = useState(1.0); // Ar
  const [n2, setN2] = useState(1.33); // Água
  const [angleIncidence, setAngleIncidence] = useState(45);

  // Lei de Snell: n1 * sin(theta1) = n2 * sin(theta2)
  // theta2 = asin( (n1 * sin(theta1)) / n2 )
  
  const radIncidence = (angleIncidence * Math.PI) / 180;
  const sinRefraction = (n1 * Math.sin(radIncidence)) / n2;
  
  let angleRefraction = 0;
  let isTotalReflection = false;

  if (Math.abs(sinRefraction) > 1) {
    isTotalReflection = true;
    angleRefraction = 90; // Apenas para visualização, na verdade não existe refração
  } else {
    angleRefraction = (Math.asin(sinRefraction) * 180) / Math.PI;
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-900 p-4 rounded-lg overflow-x-auto">
        <svg width="600" height="400" viewBox="0 0 600 400" className="w-full max-w-full border border-slate-700 rounded bg-slate-900">
          <defs>
            <marker id="arrowhead-light" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
            </marker>
          </defs>
          
          {/* Meio 1 (Superior) */}
          <rect x="0" y="0" width="600" height="200" fill="#0f172a" opacity="0.5" />
          <text x="20" y="30" fill="white" opacity="0.7">Meio 1 (n = {n1})</text>
          
          {/* Meio 2 (Inferior) */}
          <rect x="0" y="200" width="600" height="200" fill="#1e293b" opacity="0.8" />
          <text x="20" y="230" fill="white" opacity="0.7">Meio 2 (n = {n2})</text>
          
          {/* Interface */}
          <line x1="0" y1="200" x2="600" y2="200" stroke="white" strokeWidth="1" />
          
          {/* Normal */}
          <line x1="300" y1="50" x2="300" y2="350" stroke="white" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
          
          {/* Raio Incidente */}
          <line 
            x1={300 - 150 * Math.sin(radIncidence)} 
            y1={200 - 150 * Math.cos(radIncidence)} 
            x2="300" 
            y2="200" 
            stroke="#fbbf24" 
            strokeWidth="3" 
            markerEnd="url(#arrowhead-light)"
          />
          
          {/* Raio Refratado ou Refletido Totalmente */}
          {isTotalReflection ? (
            // Reflexão Total Interna (espelho perfeito)
            <line 
              x1="300" 
              y1="200" 
              x2={300 + 150 * Math.sin(radIncidence)} 
              y2={200 - 150 * Math.cos(radIncidence)} 
              stroke="#fbbf24" 
              strokeWidth="3" 
              opacity="0.8"
            />
          ) : (
            // Refração
            <line 
              x1="300" 
              y1="200" 
              x2={300 + 150 * Math.sin((angleRefraction * Math.PI) / 180)} 
              y2={200 + 150 * Math.cos((angleRefraction * Math.PI) / 180)} 
              stroke="#fbbf24" 
              strokeWidth="3" 
              opacity="0.8"
            />
          )}
          
          {/* Raio Refletido (Parcial) - Sempre existe um pouco */}
          {!isTotalReflection && (
             <line 
              x1="300" 
              y1="200" 
              x2={300 + 150 * Math.sin(radIncidence)} 
              y2={200 - 150 * Math.cos(radIncidence)} 
              stroke="#fbbf24" 
              strokeWidth="1" 
              opacity="0.3"
            />
          )}

          {isTotalReflection && (
            <text x="300" y="350" textAnchor="middle" fill="#ef4444" fontWeight="bold" fontSize="16">REFLEXÃO TOTAL INTERNA</text>
          )}
        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Índice de Refração 1 (Origem)</label>
            <Select value={n1.toString()} onValueChange={(v) => setN1(parseFloat(v))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Vácuo/Ar (n=1.0)</SelectItem>
                <SelectItem value="1.33">Água (n=1.33)</SelectItem>
                <SelectItem value="1.5">Vidro (n=1.5)</SelectItem>
                <SelectItem value="2.42">Diamante (n=2.42)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Índice de Refração 2 (Destino)</label>
            <Select value={n2.toString()} onValueChange={(v) => setN2(parseFloat(v))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Vácuo/Ar (n=1.0)</SelectItem>
                <SelectItem value="1.33">Água (n=1.33)</SelectItem>
                <SelectItem value="1.5">Vidro (n=1.5)</SelectItem>
                <SelectItem value="2.42">Diamante (n=2.42)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Ângulo de Incidência (<MathFormula formula={String.raw`$\theta_1$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatNumber(angleIncidence, 1)}°</span>
            </div>
            <Slider
              value={[angleIncidence]}
              onValueChange={(value) => setAngleIncidence(value[0])}
              min={0}
              max={89}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Lei de Snell-Descartes</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Ângulo de Refração:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ n_1 \cdot \sin\theta_1 = n_2 \cdot \sin\theta_2 $$`} />
                <div className="mt-2"></div>
                {isTotalReflection ? (
                  <p className="text-red-600 font-bold">Impossível calcular refração (seno &gt; 1). Ocorre Reflexão Total.</p>
                ) : (
                  <MathFormula formula={String.raw`$$ \theta_2 = \arcsin\left(\frac{${n1} \cdot \sin(${angleIncidence}^\circ)}{${n2}}\right) = ${formatNumber(angleRefraction, 2)}^\circ $$`} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <AdvancedTheory 
        title={ITAOpticsTheory.title}
        introduction={ITAOpticsTheory.introduction}
        sections={ITAOpticsTheory.sections}
      />
    </div>
  );
};
