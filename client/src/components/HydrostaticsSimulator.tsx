import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";

export const HydrostaticsSimulator: React.FC = () => {
  const [profundidade, setProfundidade] = useState(5);
  const [tipoFluido, setTipoFluido] = useState("agua");
  const [bolhas, setBolhas] = useState<Array<{id: number; x: number; y: number; speed: number}>>([]);

  const densidades: { [key: string]: number } = {
    agua: 1000,
    oleo: 900,
    mercurio: 13600,
  };

  const g = 9.8;
  const P0 = 101325; // Pressão atmosférica em Pa
  const rho = densidades[tipoFluido];
  
  // Pressão Hidrostática (manométrica): P = rho * g * h
  const pressaoHidro = rho * g * profundidade;
  // Pressão Absoluta: P_abs = P0 + P
  const pressaoAbsoluta = P0 + pressaoHidro;

  // Animação de bolhas
  useEffect(() => {
    const interval = setInterval(() => {
      setBolhas(prev => {
        // Remover bolhas que saíram
        const filtered = prev.filter(b => b.y > 0);
        // Adicionar novas bolhas aleatoriamente
        if (filtered.length < 10 && Math.random() > 0.7) {
          filtered.push({
            id: Math.random(),
            x: Math.random() * 180 + 10,
            y: 200, // Fundo do tanque visual
            speed: Math.random() * 2 + 1
          });
        }
        // Mover bolhas
        return filtered.map(b => ({ ...b, y: b.y - b.speed }));
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getFluidColor = () => {
    switch (tipoFluido) {
      case "agua": return "#3b82f6"; // Azul
      case "oleo": return "#eab308"; // Amarelo
      case "mercurio": return "#94a3b8"; // Cinza
      default: return "#3b82f6";
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-full border border-slate-300 rounded bg-white">
          <defs>
            <pattern id="grid-hydro" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid-hydro)" />

          {/* Tanque */}
          <g transform="translate(100, 50)">
            {/* Paredes */}
            <line x1="0" y1="0" x2="0" y2="200" stroke="#1e293b" strokeWidth="4" />
            <line x1="200" y1="0" x2="200" y2="200" stroke="#1e293b" strokeWidth="4" />
            <line x1="0" y1="200" x2="200" y2="200" stroke="#1e293b" strokeWidth="4" />
            
            {/* Fluido */}
            <rect x="2" y="20" width="196" height="178" fill={getFluidColor()} opacity="0.5" />
            
            {/* Superfície */}
            <path d="M 2 20 Q 50 15, 100 20 T 198 20" fill="none" stroke={getFluidColor()} strokeWidth="2" />
            
            {/* Bolhas */}
            {bolhas.map(b => (
              <circle key={b.id} cx={b.x} cy={b.y} r={3} fill="white" opacity="0.6" />
            ))}

            {/* Medidor de Profundidade (Objeto) */}
            {/* Escala visual: 200px = 20m (exemplo) -> 10px/m */}
            {/* Vamos usar uma escala relativa à profundidade máxima do slider (20m) */}
            {/* Se profundidade = 5m, objeto está em 5/20 do caminho? Não, o slider define onde medimos. */}
            {/* Vamos fixar o fundo como 20m e o topo como 0m. */}
            {/* y = 20 + (profundidade / 20) * 180 */}
            
            <g transform={`translate(100, ${20 + (profundidade / 20) * 170})`}>
              <circle cx="0" cy="0" r="8" fill="#ef4444" stroke="white" strokeWidth="2" />
              <line x1="10" y1="0" x2="50" y2="0" stroke="#ef4444" strokeDasharray="2,2" />
              <text x="55" y="4" fontSize="12" fill="#ef4444" fontWeight="bold">Ponto A</text>
            </g>
            
            {/* Régua Lateral */}
            <g transform="translate(-10, 20)">
              <line x1="0" y1="0" x2="0" y2="180" stroke="#64748b" />
              {[0, 5, 10, 15, 20].map(h => (
                <g key={h} transform={`translate(0, ${(h / 20) * 170})`}>
                  <line x1="-5" y1="0" x2="0" y2="0" stroke="#64748b" />
                  <text x="-10" y="4" textAnchor="end" fontSize="10" fill="#64748b">{h}m</text>
                </g>
              ))}
            </g>
            
            {/* Seta P0 */}
            <g transform="translate(100, 0)">
              <line x1="0" y1="-20" x2="0" y2="10" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />
              <text x="5" y="-10" fontSize="12" fill="#64748b">P₀ (atm)</text>
            </g>
          </g>
        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Tipo de Fluido</label>
            <Select value={tipoFluido} onValueChange={setTipoFluido}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agua">Água (1000 kg/m³)</SelectItem>
                <SelectItem value="oleo">Óleo (900 kg/m³)</SelectItem>
                <SelectItem value="mercurio">Mercúrio (13600 kg/m³)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Profundidade (<MathFormula formula={String.raw`$h$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(profundidade, "m")}</span>
            </div>
            <Slider
              value={[profundidade]}
              onValueChange={(value) => setProfundidade(value[0])}
              min={0}
              max={20}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Lei de Stevin</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Pressão Hidrostática (devida apenas ao líquido):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ P_{hidro} = \rho \cdot g \cdot h = ${formatNumber(rho)} \cdot ${formatNumber(g)} \cdot ${formatNumber(profundidade)} = ${formatUnit(pressaoHidro, "Pa")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Pressão Absoluta (Total):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ P_{abs} = P_0 + P_{hidro} = ${formatNumber(P0)} + ${formatNumber(pressaoHidro)} = ${formatUnit(pressaoAbsoluta, "Pa")} $$`} />
                <div className="mt-2"></div>
                <p className="text-xs text-slate-500">
                  Em atmosferas: {formatNumber(pressaoAbsoluta / 101325, 2)} atm
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
