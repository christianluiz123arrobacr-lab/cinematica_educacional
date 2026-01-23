import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAWavesTheory } from "@/content/waves/ita_waves_theory";

export const WaveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [amplitude, setAmplitude] = useState(50);
  const [frequencia, setFrequencia] = useState(1);
  const [comprimentoOnda, setComprimentoOnda] = useState(200);
  const [tipoOnda, setTipoOnda] = useState("transversal");
  
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  // v = lambda * f
  const velocidade = comprimentoOnda * frequencia; // pixels/s (na escala visual)
  // k = 2*pi / lambda
  const k = (2 * Math.PI) / comprimentoOnda;
  // omega = 2*pi * f
  const omega = 2 * Math.PI * frequencia;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      const t = timeRef.current;

      ctx.clearRect(0, 0, width, height);
      
      // Fundo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Eixo central
      ctx.strokeStyle = "#e2e8f0";
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      if (tipoOnda === "transversal") {
        // Onda Transversal (Corda)
        ctx.beginPath();
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 3;

        for (let x = 0; x < width; x++) {
          // y(x,t) = A * sin(kx - wt)
          const y = height / 2 + amplitude * Math.sin(k * x - omega * t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Pontos na corda (para mostrar que a matéria não se desloca horizontalmente)
        for (let x = 50; x < width; x += 50) {
          const y = height / 2 + amplitude * Math.sin(k * x - omega * t);
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
        }

      } else {
        // Onda Longitudinal (Som/Mola)
        // Representação por densidade de linhas ou partículas
        // Deslocamento horizontal: s(x,t) = A * sin(kx - wt)
        // Posição visual: x_visual = x_equilibrio + s(x,t)
        
        ctx.fillStyle = "#3b82f6";
        for (let xEq = 0; xEq < width; xEq += 5) {
          const displacement = (amplitude / 2) * Math.sin(k * xEq - omega * t);
          const xVisual = xEq + displacement;
          
          ctx.fillRect(xVisual, height / 2 - 20, 2, 40);
        }
        
        // Partícula destacada
        const xEqDestacado = width / 2;
        const dispDestacado = (amplitude / 2) * Math.sin(k * xEqDestacado - omega * t);
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(xEqDestacado + dispDestacado, height / 2, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [amplitude, frequencia, comprimentoOnda, tipoOnda, k, omega]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={800}
          height={300}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Tipo de Onda</label>
            <Select value={tipoOnda} onValueChange={setTipoOnda}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transversal">Transversal (Corda)</SelectItem>
                <SelectItem value="longitudinal">Longitudinal (Som)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Amplitude (<MathFormula formula={String.raw`$A$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(amplitude, "unid")}</span>
            </div>
            <Slider
              value={[amplitude]}
              onValueChange={(value) => setAmplitude(value[0])}
              min={10}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Frequência (<MathFormula formula={String.raw`$f$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{formatUnit(frequencia, "Hz")}</span>
            </div>
            <Slider
              value={[frequencia]}
              onValueChange={(value) => setFrequencia(value[0])}
              min={0.1}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Comprimento de Onda (<MathFormula formula={String.raw`$\lambda$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(comprimentoOnda, "px")}</span>
            </div>
            <Slider
              value={[comprimentoOnda]}
              onValueChange={(value) => setComprimentoOnda(value[0])}
              min={50}
              max={400}
              step={10}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Equação Fundamental da Ondulatória</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Velocidade de Propagação:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v = \lambda \cdot f $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ v = ${formatNumber(comprimentoOnda)} \cdot ${formatNumber(frequencia)} = ${formatUnit(velocidade, "unid/s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Período (T):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ T = \frac{1}{f} = \frac{1}{${formatNumber(frequencia)}} = ${formatUnit(1/frequencia, "s")} $$`} />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Função de Onda (Harmônica):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ y(x,t) = A \cdot \sin(k x - \omega t) $$`} />
                <div className="mt-2"></div>
                <p className="text-xs text-slate-500">
                  Onde <MathFormula formula={String.raw`$k = \frac{2\pi}{\lambda} \approx ${formatNumber(k, 3)}$`} /> e <MathFormula formula={String.raw`$\omega = 2\pi f \approx ${formatNumber(omega, 3)}$`} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <AdvancedTheory 
        title={ITAWavesTheory.title}
        introduction={ITAWavesTheory.introduction}
        sections={ITAWavesTheory.sections}
      />
    </div>
  );
};
