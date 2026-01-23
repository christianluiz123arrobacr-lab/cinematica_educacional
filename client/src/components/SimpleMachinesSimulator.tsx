import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAStaticsTheory } from "@/content/statics/ita_statics_theory";

export const SimpleMachinesSimulator: React.FC = () => {
  const [tipoMaquina, setTipoMaquina] = useState("alavanca");
  const [carga, setCarga] = useState(100); // Peso da carga (Resistência)
  
  // Parâmetros Alavanca
  const [bracoPotencia, setBracoPotencia] = useState(2);
  const [bracoResistencia, setBracoResistencia] = useState(1);
  
  // Parâmetros Plano Inclinado
  const [anguloPlano, setAnguloPlano] = useState(30);
  
  // Parâmetros Polias
  const [numPoliasMoveis, setNumPoliasMoveis] = useState(1);

  // Cálculos
  let forcaPotencia = 0;
  let vantagemMecanica = 0;

  if (tipoMaquina === "alavanca") {
    // Fp * dp = Fr * dr => Fp = Fr * dr / dp
    forcaPotencia = (carga * bracoResistencia) / bracoPotencia;
    vantagemMecanica = bracoPotencia / bracoResistencia;
  } else if (tipoMaquina === "plano") {
    // Fp = P * sin(theta) (sem atrito para simplificar vantagem ideal)
    const rad = (anguloPlano * Math.PI) / 180;
    forcaPotencia = carga * Math.sin(rad);
    vantagemMecanica = 1 / Math.sin(rad);
  } else if (tipoMaquina === "polia") {
    // Fp = P / 2^n
    forcaPotencia = carga / Math.pow(2, numPoliasMoveis);
    vantagemMecanica = Math.pow(2, numPoliasMoveis);
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <svg width="600" height="300" viewBox="0 0 600 300" className="w-full max-w-full border border-slate-300 rounded bg-white">
          <defs>
            <pattern id="grid-machines" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="300" fill="url(#grid-machines)" />

          {tipoMaquina === "alavanca" && (
            <g transform="translate(300, 200)">
              {/* Base */}
              <path d="M -20 50 L 20 50 L 0 0 Z" fill="#64748b" />
              
              {/* Barra */}
              <rect x="-250" y="-5" width="500" height="10" rx="2" fill="#475569" transform="rotate(0)" />
              
              {/* Carga (Resistência) - Esquerda */}
              <g transform={`translate(${-bracoResistencia * 50}, -5)`}>
                <rect x="-20" y="-40" width="40" height="40" fill="#ef4444" />
                <text x="0" y="-20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">R</text>
                <text x="0" y="20" textAnchor="middle" fill="#64748b" fontSize="10">{bracoResistencia}m</text>
              </g>
              
              {/* Força (Potência) - Direita */}
              <g transform={`translate(${bracoPotencia * 50}, -5)`}>
                <line x1="0" y1="0" x2="0" y2="-50" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
                <text x="0" y="-60" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">F</text>
                <text x="0" y="20" textAnchor="middle" fill="#64748b" fontSize="10">{bracoPotencia}m</text>
              </g>
            </g>
          )}

          {tipoMaquina === "plano" && (
            <g transform="translate(100, 250)">
              {/* Plano */}
              <path d={`M 0 0 L 400 0 L 0 ${-400 * Math.tan((anguloPlano * Math.PI) / 180)} Z`} fill="#e2e8f0" stroke="#64748b" />
              
              {/* Objeto no plano */}
              <g transform={`rotate(${-anguloPlano}) translate(200, -20)`}>
                <rect x="-20" y="-20" width="40" height="40" fill="#ef4444" />
                <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">R</text>
                
                {/* Força puxando */}
                <line x1="20" y1="0" x2="80" y2="0" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
                <text x="90" y="5" fill="#3b82f6" fontSize="12" fontWeight="bold">F</text>
              </g>
              
              <text x="50" y="-10" fontSize="14">θ = {anguloPlano}°</text>
            </g>
          )}

          {tipoMaquina === "polia" && (
            <g transform="translate(300, 50)">
              {/* Teto */}
              <line x1="-100" y1="0" x2="100" y2="0" stroke="#1e293b" strokeWidth="4" />
              
              {/* Corda Principal */}
              <line x1="0" y1="0" x2="0" y2="50" stroke="#94a3b8" strokeWidth="2" />
              
              {/* Polias Móveis (Simplificado visualmente) */}
              {Array.from({ length: numPoliasMoveis }).map((_, i) => (
                <g key={i} transform={`translate(0, ${50 + i * 60})`}>
                  <circle cx="0" cy="0" r="20" fill="white" stroke="#64748b" strokeWidth="2" />
                  <line x1="-20" y1="0" x2="-20" y2="-60" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="20" y1="0" x2="20" y2="-60" stroke="#94a3b8" strokeWidth="2" />
                </g>
              ))}
              
              {/* Carga */}
              <g transform={`translate(0, ${50 + numPoliasMoveis * 60})`}>
                <rect x="-20" y="0" width="40" height="40" fill="#ef4444" />
                <text x="0" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">R</text>
              </g>
              
              {/* Força puxando (última corda) */}
              <line x1="20" y1={50} x2="20" y2="-20" stroke="#3b82f6" strokeWidth="2" />
              <line x1="20" y1="-20" x2="60" y2="-20" stroke="#3b82f6" strokeWidth="2" />
              <line x1="60" y1="-20" x2="60" y2="20" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />
              <text x="70" y="20" fill="#3b82f6" fontSize="12" fontWeight="bold">F</text>
            </g>
          )}
        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Tipo de Máquina</label>
            <Select value={tipoMaquina} onValueChange={setTipoMaquina}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alavanca">Alavanca Interfixa</SelectItem>
                <SelectItem value="plano">Plano Inclinado</SelectItem>
                <SelectItem value="polia">Associação de Polias</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Carga / Resistência (<MathFormula formula={String.raw`$R$`} />)</label>
              <span className="text-sm font-bold text-red-600">{formatUnit(carga, "N")}</span>
            </div>
            <Slider
              value={[carga]}
              onValueChange={(value) => setCarga(value[0])}
              min={10}
              max={500}
              step={10}
              className="w-full"
            />
          </div>

          {tipoMaquina === "alavanca" && (
            <>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Braço de Potência (<MathFormula formula={String.raw`$d_p$`} />)</label>
                  <span className="text-sm font-bold text-blue-600">{formatUnit(bracoPotencia, "m")}</span>
                </div>
                <Slider
                  value={[bracoPotencia]}
                  onValueChange={(value) => setBracoPotencia(value[0])}
                  min={0.5}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Braço de Resistência (<MathFormula formula={String.raw`$d_r$`} />)</label>
                  <span className="text-sm font-bold text-red-600">{formatUnit(bracoResistencia, "m")}</span>
                </div>
                <Slider
                  value={[bracoResistencia]}
                  onValueChange={(value) => setBracoResistencia(value[0])}
                  min={0.5}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </>
          )}

          {tipoMaquina === "plano" && (
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta$`} />)</label>
                <span className="text-sm font-bold text-slate-900">{formatNumber(anguloPlano, 0)}°</span>
              </div>
              <Slider
                value={[anguloPlano]}
                onValueChange={(value) => setAnguloPlano(value[0])}
                min={5}
                max={85}
                step={1}
                className="w-full"
              />
            </div>
          )}

          {tipoMaquina === "polia" && (
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Número de Polias Móveis (<MathFormula formula={String.raw`$n$`} />)</label>
                <span className="text-sm font-bold text-slate-900">{numPoliasMoveis}</span>
              </div>
              <Slider
                value={[numPoliasMoveis]}
                onValueChange={(value) => setNumPoliasMoveis(value[0])}
                min={0}
                max={5}
                step={1}
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Análise de Forças</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Força Necessária (Potência):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                {tipoMaquina === "alavanca" && (
                  <MathFormula formula={String.raw`$$ F_p = \frac{R \cdot d_r}{d_p} = \frac{${formatNumber(carga)} \cdot ${formatNumber(bracoResistencia)}}{${formatNumber(bracoPotencia)}} = ${formatUnit(forcaPotencia, "N")} $$`} />
                )}
                {tipoMaquina === "plano" && (
                  <MathFormula formula={String.raw`$$ F_p = R \cdot \sin\theta = ${formatNumber(carga)} \cdot \sin(${formatNumber(anguloPlano)}^\circ) = ${formatUnit(forcaPotencia, "N")} $$`} />
                )}
                {tipoMaquina === "polia" && (
                  <MathFormula formula={String.raw`$$ F_p = \frac{R}{2^n} = \frac{${formatNumber(carga)}}{2^{${numPoliasMoveis}}} = ${formatUnit(forcaPotencia, "N")} $$`} />
                )}
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Vantagem Mecânica:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ VM = \frac{R}{F_p} = \frac{${formatNumber(carga)}}{${formatNumber(forcaPotencia)}} = ${formatNumber(vantagemMecanica, 2)} $$`} />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Isso significa que sua força é multiplicada por {formatNumber(vantagemMecanica, 2)}x.
              </p>
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
