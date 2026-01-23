import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAOpticsTheory } from "@/content/optics/ita_optics_theory";

export const MirrorsSimulator: React.FC = () => {
  const [tipoEspelho, setTipoEspelho] = useState("concavo");
  const [foco, setFoco] = useState(100); // Distância focal (positivo para côncavo, negativo para convexo)
  const [distObjeto, setDistObjeto] = useState(200); // Distância do objeto ao vértice
  const [alturaObjeto, setAlturaObjeto] = useState(50);

  // Equação de Gauss: 1/f = 1/p + 1/p'
  // 1/p' = 1/f - 1/p = (p - f) / (f * p)
  // p' = (f * p) / (p - f)
  
  const f = tipoEspelho === "concavo" ? foco : -foco;
  const p = distObjeto;
  
  let p_linha = 0;
  let alturaImagem = 0;
  let aumento = 0;
  let imagemVirtual = false;

  if (p === f) {
    // Imagem imprópria (no infinito)
    p_linha = Infinity;
    aumento = Infinity;
  } else {
    p_linha = (f * p) / (p - f);
    // Aumento linear transversal: A = i/o = -p'/p
    aumento = -p_linha / p;
    alturaImagem = aumento * alturaObjeto;
    imagemVirtual = p_linha < 0;
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-900 p-4 rounded-lg overflow-x-auto">
        <svg width="600" height="300" viewBox="0 0 600 300" className="w-full max-w-full border border-slate-700 rounded bg-slate-900">
          <defs>
            <marker id="arrowhead-light-mirror" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
            </marker>
          </defs>
          
          {/* Eixo Principal */}
          <line x1="0" y1="150" x2="600" y2="150" stroke="white" strokeWidth="1" opacity="0.5" />
          
          {/* Espelho (Vértice em x=300) */}
          <path 
            d={tipoEspelho === "concavo" ? "M 300 50 Q 320 150 300 250" : "M 300 50 Q 280 150 300 250"} 
            fill="none" 
            stroke="#94a3b8" 
            strokeWidth="4" 
          />
          {/* Hachuras do espelho */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line 
              key={i} 
              x1={tipoEspelho === "concavo" ? 305 : 295} 
              y1={50 + i * 10} 
              x2={tipoEspelho === "concavo" ? 315 : 285} 
              y2={60 + i * 10} 
              stroke="#64748b" 
              strokeWidth="1" 
            />
          ))}

          {/* Pontos Notáveis */}
          {/* Vértice */}
          <circle cx="300" cy="150" r="3" fill="white" />
          <text x="305" y="165" fill="white" fontSize="10">V</text>
          
          {/* Foco */}
          <circle cx={300 - f} cy="150" r="3" fill="#fbbf24" />
          <text x={300 - f} y="165" fill="#fbbf24" fontSize="10">F</text>
          
          {/* Centro de Curvatura (C = 2f) */}
          <circle cx={300 - 2 * f} cy="150" r="3" fill="#fbbf24" />
          <text x={300 - 2 * f} y="165" fill="#fbbf24" fontSize="10">C</text>

          {/* Objeto */}
          <g transform={`translate(${300 - p}, 150)`}>
            <line x1="0" y1="0" x2="0" y2={-alturaObjeto} stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead-red)" />
            <text x="0" y={-alturaObjeto - 10} textAnchor="middle" fill="#ef4444" fontWeight="bold">O</text>
          </g>

          {/* Imagem */}
          {p_linha !== Infinity && (
            <g transform={`translate(${300 - p_linha}, 150)`}>
              <line 
                x1="0" 
                y1="0" 
                x2="0" 
                y2={-alturaImagem} 
                stroke="#3b82f6" 
                strokeWidth="3" 
                strokeDasharray={imagemVirtual ? "4,4" : ""}
                markerEnd="url(#arrowhead-blue)" 
              />
              <text x="0" y={-alturaImagem + (alturaImagem > 0 ? -10 : 20)} textAnchor="middle" fill="#3b82f6" fontWeight="bold">I</text>
            </g>
          )}

          {/* Raios Notáveis (Simplificado) */}
          {/* 1. Paralelo ao eixo -> Passa pelo foco */}
          <path 
            d={`M ${300 - p} ${150 - alturaObjeto} L 300 ${150 - alturaObjeto} L ${300 - p_linha} ${150 - alturaImagem}`} 
            fill="none" 
            stroke="#fbbf24" 
            strokeWidth="1" 
            opacity="0.5" 
          />
          
          {/* 2. Passa pelo vértice -> Reflete simétrico */}
          <path 
            d={`M ${300 - p} ${150 - alturaObjeto} L 300 150 L ${300 - p_linha} ${150 - alturaImagem}`} 
            fill="none" 
            stroke="#fbbf24" 
            strokeWidth="1" 
            opacity="0.5" 
          />

        </svg>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Tipo de Espelho</label>
            <Select value={tipoEspelho} onValueChange={setTipoEspelho}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="concavo">Côncavo (Convergent)</SelectItem>
                <SelectItem value="convexo">Convexo (Divergente)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Distância Focal (<MathFormula formula={String.raw`$f$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(foco, "cm")}</span>
            </div>
            <Slider
              value={[foco]}
              onValueChange={(value) => setFoco(value[0])}
              min={20}
              max={150}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Distância do Objeto (<MathFormula formula={String.raw`$p$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(distObjeto, "cm")}</span>
            </div>
            <Slider
              value={[distObjeto]}
              onValueChange={(value) => setDistObjeto(value[0])}
              min={20}
              max={300}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Altura do Objeto (<MathFormula formula={String.raw`$o$`} />)</label>
              <span className="text-sm font-bold text-slate-900">{formatUnit(alturaObjeto, "cm")}</span>
            </div>
            <Slider
              value={[alturaObjeto]}
              onValueChange={(value) => setAlturaObjeto(value[0])}
              min={10}
              max={100}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Equação de Gauss</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Posição da Imagem (<MathFormula formula={String.raw`$p'$`} />):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ \frac{1}{f} = \frac{1}{p} + \frac{1}{p'} \Rightarrow p' = \frac{f \cdot p}{p - f} $$`} />
                <div className="mt-2"></div>
                {p === f ? (
                  <p className="text-red-600 font-bold">Imagem Imprópria (no infinito)</p>
                ) : (
                  <MathFormula formula={String.raw`$$ p' = \frac{${f} \cdot ${p}}{${p} - ${f}} = ${formatNumber(p_linha, 2)} \text{ cm} $$`} />
                )}
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Características da Imagem:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 bg-white p-3 rounded border border-slate-200">
                <li><strong>Natureza:</strong> {imagemVirtual ? "Virtual (atrás do espelho)" : "Real (na frente do espelho)"}</li>
                <li><strong>Orientação:</strong> {alturaImagem > 0 ? "Direita" : "Invertida"}</li>
                <li><strong>Tamanho:</strong> {Math.abs(aumento) > 1 ? "Maior" : Math.abs(aumento) < 1 ? "Menor" : "Igual"} que o objeto (|A| = {formatNumber(Math.abs(aumento), 2)}x)</li>
              </ul>
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
