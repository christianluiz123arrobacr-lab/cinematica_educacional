import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

export const ForceBalanceSimulator: React.FC = () => {
  const [forceLeft, setForceLeft] = useState(50);
  const [forceRight, setForceRight] = useState(50);
  const [angleLeft, setAngleLeft] = useState(0);
  const [angleRight, setAngleRight] = useState(180);

  // Cálculos de Resultante
  // Componentes X e Y
  // Ângulos em graus para radianos
  const radLeft = (angleLeft * Math.PI) / 180;
  const radRight = (angleRight * Math.PI) / 180;

  const fx1 = forceLeft * Math.cos(radLeft);
  const fy1 = forceLeft * Math.sin(radLeft);
  
  const fx2 = forceRight * Math.cos(radRight);
  const fy2 = forceRight * Math.sin(radRight);

  const resultantX = fx1 + fx2;
  const resultantY = fy1 + fy2;
  const resultantMagnitude = Math.sqrt(resultantX ** 2 + resultantY ** 2);
  const resultantAngle = (Math.atan2(resultantY, resultantX) * 180) / Math.PI;
  
  const isEquilibrio = resultantMagnitude < 0.1;

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <svg width="600" height="400" viewBox="0 0 600 400" className="w-full max-w-full border border-slate-300 rounded bg-white">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
          </defs>
          <rect width="600" height="400" fill="url(#grid)" />
          
          {/* Eixos */}
          <line x1="300" y1="0" x2="300" y2="400" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="#e2e8f0" strokeWidth="2" />

          {/* Centro */}
          <circle cx="300" cy="200" r="4" fill="#1e293b" />

          {/* Vetor 1 (Vermelho) */}
          <line
            x1="300"
            y1="200"
            x2={300 + fx1 * 2}
            y2={200 - fy1 * 2}
            stroke="#ef4444"
            strokeWidth="3"
            markerEnd="url(#arrowhead-red)"
          />
          <text x={300 + fx1 * 2 + 10} y={200 - fy1 * 2} className="text-xs font-bold fill-red-600">
            F₁
          </text>

          {/* Vetor 2 (Azul) */}
          <line
            x1="300"
            y1="200"
            x2={300 + fx2 * 2}
            y2={200 - fy2 * 2}
            stroke="#3b82f6"
            strokeWidth="3"
            markerEnd="url(#arrowhead-blue)"
          />
          <text x={300 + fx2 * 2 + 10} y={200 - fy2 * 2} className="text-xs font-bold fill-blue-600">
            F₂
          </text>

          {/* Vetor Resultante (Verde) */}
          {!isEquilibrio && (
            <>
              <line
                x1="300"
                y1="200"
                x2={300 + resultantX * 2}
                y2={200 - resultantY * 2}
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead-green)"
                opacity="0.7"
              />
              <text x={300 + resultantX * 2 + 10} y={200 - resultantY * 2} className="text-xs font-bold fill-green-600">
                R
              </text>
            </>
          )}

          {/* Indicador de Equilíbrio */}
          {isEquilibrio && (
            <text x="300" y="50" textAnchor="middle" className="text-2xl font-bold fill-green-600">
              ✓ EM EQUILÍBRIO
            </text>
          )}
        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Força 1 */}
          <div className="space-y-4 p-4 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-700">Força 1 (Vermelha)</h4>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Intensidade (<MathFormula formula={String.raw`$F_1$`} />)</label>
                <span className="text-sm font-bold text-red-600">{formatUnit(forceLeft, "N")}</span>
              </div>
              <Slider
                value={[forceLeft]}
                onValueChange={(value) => setForceLeft(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta_1$`} />)</label>
                <span className="text-sm font-bold text-red-600">{formatNumber(angleLeft, 0)}°</span>
              </div>
              <Slider
                value={[angleLeft]}
                onValueChange={(value) => setAngleLeft(value[0])}
                min={0}
                max={360}
                step={5}
                className="w-full"
              />
            </div>
          </div>

          {/* Força 2 */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-700">Força 2 (Azul)</h4>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Intensidade (<MathFormula formula={String.raw`$F_2$`} />)</label>
                <span className="text-sm font-bold text-blue-600">{formatUnit(forceRight, "N")}</span>
              </div>
              <Slider
                value={[forceRight]}
                onValueChange={(value) => setForceRight(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta_2$`} />)</label>
                <span className="text-sm font-bold text-blue-600">{formatNumber(angleRight, 0)}°</span>
              </div>
              <Slider
                value={[angleRight]}
                onValueChange={(value) => setAngleRight(value[0])}
                min={0}
                max={360}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculo da Resultante</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Decomposição em X e Y:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto text-sm">
                <p className="mb-1">
                  <MathFormula formula={String.raw`$$ R_x = F_{1x} + F_{2x} = ${formatNumber(forceLeft)}\cos(${formatNumber(angleLeft)}^\circ) + ${formatNumber(forceRight)}\cos(${formatNumber(angleRight)}^\circ) $$`} />
                </p>
                <p className="mb-3 font-bold text-slate-800">
                  <MathFormula formula={String.raw`$$ R_x = ${formatNumber(fx1)} + ${formatNumber(fx2)} = ${formatUnit(resultantX, "N")} $$`} />
                </p>
                
                <p className="mb-1">
                  <MathFormula formula={String.raw`$$ R_y = F_{1y} + F_{2y} = ${formatNumber(forceLeft)}\sin(${formatNumber(angleLeft)}^\circ) + ${formatNumber(forceRight)}\sin(${formatNumber(angleRight)}^\circ) $$`} />
                </p>
                <p className="font-bold text-slate-800">
                  <MathFormula formula={String.raw`$$ R_y = ${formatNumber(fy1)} + ${formatNumber(fy2)} = ${formatUnit(resultantY, "N")} $$`} />
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Módulo da Resultante:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ |R| = \sqrt{R_x^2 + R_y^2} = \sqrt{(${formatNumber(resultantX)})^2 + (${formatNumber(resultantY)})^2} = ${formatUnit(resultantMagnitude, "N")} $$`} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Teoria Avançada */}
      <AdvancedTheory
        title={ITAStaticsTheory.title}
        introduction={ITAStaticsTheory.introduction}
        sections={ITAStaticsTheory.sections}
      />
    </div>
  );
};
