import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

export const TorqueSimulator: React.FC = () => {
  const [forceLeft, setForceLeft] = useState(50);
  const [distLeft, setDistLeft] = useState(2);
  const [forceRight, setForceRight] = useState(0); // Força da direita (incógnita ou ajustável)
  const [distRight, setDistRight] = useState(3);
  const [angleLeft, setAngleLeft] = useState(90);

  // Cálculos de Torque
  // T = F * d * sin(theta)
  const radLeft = (angleLeft * Math.PI) / 180;
  const torqueLeft = forceLeft * distLeft * Math.sin(radLeft);
  
  // Para equilibrar: TorqueEsq = TorqueDir
  // Vamos deixar o usuário ajustar a força da direita para tentar equilibrar
  const torqueRight = forceRight * distRight; // Assumindo 90 graus para simplificar a direita ou adicionar ângulo depois
  
  const netTorque = torqueLeft - torqueRight;
  const isBalanced = Math.abs(netTorque) < 1;
  
  // Rotação visual baseada no torque líquido (limitada)
  const rotation = Math.max(-30, Math.min(30, netTorque / 10));

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <svg width="600" height="300" viewBox="0 0 600 300" className="w-full max-w-full border border-slate-300 rounded bg-white">
          <defs>
            <pattern id="grid-torque" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="300" fill="url(#grid-torque)" />
          
          {/* Base da Gangorra */}
          <path d="M 280 250 L 320 250 L 300 200 Z" fill="#64748b" />
          
          {/* Grupo da Barra (Rotaciona) */}
          <g transform={`translate(300, 200) rotate(${-rotation})`}>
            {/* Barra */}
            <rect x="-250" y="-5" width="500" height="10" rx="2" fill="#475569" />
            
            {/* Marcações de distância */}
            {[1, 2, 3, 4].map(d => (
              <React.Fragment key={d}>
                <line x1={-d * 50} y1="-5" x2={-d * 50} y2="5" stroke="#cbd5e1" strokeWidth="2" />
                <text x={-d * 50} y="20" textAnchor="middle" fontSize="10" fill="#64748b">{d}m</text>
                
                <line x1={d * 50} y1="-5" x2={d * 50} y2="5" stroke="#cbd5e1" strokeWidth="2" />
                <text x={d * 50} y="20" textAnchor="middle" fontSize="10" fill="#64748b">{d}m</text>
              </React.Fragment>
            ))}

            {/* Força Esquerda */}
            <g transform={`translate(${-distLeft * 50}, -5)`}>
               {/* Vetor Força */}
               <line 
                 x1="0" 
                 y1="0" 
                 x2={-forceLeft * Math.cos(radLeft)} 
                 y2={-forceLeft * Math.sin(radLeft)} 
                 stroke="#ef4444" 
                 strokeWidth="4" 
                 markerEnd="url(#arrowhead-red)"
               />
               {/* Objeto/Peso representativo */}
               <circle cx="0" cy="-15" r="15" fill="#fca5a5" opacity="0.8" />
               <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">F₁</text>
            </g>

            {/* Força Direita */}
            <g transform={`translate(${distRight * 50}, -5)`}>
               {/* Vetor Força (sempre vertical para baixo neste exemplo simplificado) */}
               <line 
                 x1="0" 
                 y1="0" 
                 x2="0" 
                 y2={-forceRight} 
                 stroke="#3b82f6" 
                 strokeWidth="4" 
                 markerEnd="url(#arrowhead-blue)"
               />
               <circle cx="0" cy="-15" r="15" fill="#93c5fd" opacity="0.8" />
               <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">F₂</text>
            </g>
          </g>

          {/* Indicador de Equilíbrio */}
          {isBalanced ? (
            <text x="300" y="50" textAnchor="middle" className="text-2xl font-bold fill-green-600">
              ✓ EQUILÍBRIO
            </text>
          ) : (
            <text x="300" y="50" textAnchor="middle" className="text-xl font-bold fill-slate-400">
              {netTorque > 0 ? "↺ Girando Anti-Horário" : "↻ Girando Horário"}
            </text>
          )}
        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lado Esquerdo */}
          <div className="space-y-4 p-4 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-700">Lado Esquerdo (F₁)</h4>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Força (<MathFormula formula={String.raw`$F_1$`} />)</label>
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
                <label className="text-sm font-semibold text-slate-700">Distância (<MathFormula formula={String.raw`$d_1$`} />)</label>
                <span className="text-sm font-bold text-red-600">{formatUnit(distLeft, "m")}</span>
              </div>
              <Slider
                value={[distLeft]}
                onValueChange={(value) => setDistLeft(value[0])}
                min={0.5}
                max={4.5}
                step={0.5}
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
                max={180}
                step={5}
                className="w-full"
              />
            </div>
          </div>

          {/* Lado Direito */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-700">Lado Direito (F₂)</h4>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Força (<MathFormula formula={String.raw`$F_2$`} />)</label>
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
                <label className="text-sm font-semibold text-slate-700">Distância (<MathFormula formula={String.raw`$d_2$`} />)</label>
                <span className="text-sm font-bold text-blue-600">{formatUnit(distRight, "m")}</span>
              </div>
              <Slider
                value={[distRight]}
                onValueChange={(value) => setDistRight(value[0])}
                min={0.5}
                max={4.5}
                step={0.5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculo dos Torques (Momentos)</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Torque Esquerdo (Anti-horário +):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ \tau_1 = F_1 \cdot d_1 \cdot \sin\theta_1 = ${formatNumber(forceLeft)} \cdot ${formatNumber(distLeft)} \cdot \sin(${formatNumber(angleLeft)}^\circ) = ${formatUnit(torqueLeft, "N·m")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Torque Direito (Horário -):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ \tau_2 = F_2 \cdot d_2 \cdot \sin(90^\circ) = ${formatNumber(forceRight)} \cdot ${formatNumber(distRight)} \cdot 1 = ${formatUnit(torqueRight, "N·m")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Torque Resultante:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ \tau_{res} = \tau_1 - \tau_2 = ${formatNumber(torqueLeft)} - ${formatNumber(torqueRight)} = ${formatUnit(netTorque, "N·m")} $$`} />
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
