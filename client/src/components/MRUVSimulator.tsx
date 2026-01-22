import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";

interface MRUVSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const MRUVSimulator: React.FC<MRUVSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [s0, setS0] = useState(0);
  const [v0, setV0] = useState(0);
  const [a, setA] = useState(1);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const trackLength = 100; // metros representados na tela
  const speedFactor = 0.5;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger, s0, v0, a]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scale = width / trackLength;

    const animate = () => {
      // Fundo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Grid e Régua
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      ctx.fillStyle = "#64748b";
      ctx.font = "10px Arial";
      
      for (let i = 0; i <= trackLength; i += 10) {
        const x = i * scale;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        
        ctx.fillRect(x - 1, height - 45, 2, 10);
        ctx.fillText(`${i}m`, x - 8, height - 20);
      }

      // Estrada
      ctx.fillStyle = "#334155";
      ctx.fillRect(0, height - 40, width, 40);
      
      // Faixas da estrada
      ctx.fillStyle = "#fbbf24";
      for (let i = 0; i < width; i += 40) {
        ctx.fillRect(i, height - 22, 20, 4);
      }

      // Tempo atual
      const t = (frameCountRef.current / 60) * speedFactor;
      
      // Cálculos MRUV
      // S = S0 + v0*t + 0.5*a*t²
      const currentS = s0 + v0 * t + 0.5 * a * t * t;
      // v = v0 + a*t
      const currentV = v0 + a * t;
      
      // Desenhar carro
      const carX = currentS * scale;
      const carY = height - 55;

      if (carX > -50 && carX < width + 50) {
        drawCar(ctx, carX, carY, "#f97316"); // Laranja para MRUV
        
        // Vetor velocidade
        if (Math.abs(currentV) > 0.1) {
          const arrowLen = currentV * 3; 
          drawArrow(ctx, carX, carY - 20, carX + arrowLen, carY - 20, "#ef4444", 2);
          ctx.fillStyle = "#ef4444";
          ctx.fillText(`v = ${formatUnit(currentV, "m/s")}`, carX - 10, carY - 30);
        }

        // Vetor aceleração (constante)
        if (a !== 0) {
          const accLen = a * 10;
          drawArrow(ctx, carX, carY - 40, carX + accLen, carY - 40, "#8b5cf6", 2);
          ctx.fillStyle = "#8b5cf6";
          ctx.fillText(`a = ${formatUnit(a, "m/s²")}`, carX - 10, carY - 50);
        }
        
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`S = ${formatUnit(currentS, "m")}`, carX - 15, carY - 5);
      }

      // HUD
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(10, 10, 180, 80);
      ctx.strokeStyle = "#cbd5e1";
      ctx.strokeRect(10, 10, 180, 80);
      
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`Tempo: ${formatUnit(t, "s")}`, 20, 30);
      ctx.fillText(`Posição: ${formatUnit(currentS, "m")}`, 20, 50);
      ctx.fillText(`Velocidade: ${formatUnit(currentV, "m/s")}`, 20, 70);

      if (isRunning) {
        if (currentS > trackLength + 20) {
           frameCountRef.current = 0;
        } else {
           frameCountRef.current += 1;
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, s0, v0, a]);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Posição Inicial (<MathFormula formula={String.raw`$S_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(s0, "m")}</span>
            </div>
            <Slider
              value={[s0]}
              onValueChange={(value) => setS0(value[0])}
              min={0}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (<MathFormula formula={String.raw`$v_0$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(v0, "m/s")}</span>
            </div>
            <Slider
              value={[v0]}
              onValueChange={(value) => setV0(value[0])}
              min={0}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Aceleração (<MathFormula formula={String.raw`$a$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{formatUnit(a, "m/s²")}</span>
            </div>
            <Slider
              value={[a]}
              onValueChange={(value) => setA(value[0])}
              min={0}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Equações do MRUV</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Função Horária da Posição:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ S(t) = S_0 + v_0 t + \frac{1}{2} a t^2 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ S(t) = ${formatNumber(s0)} + ${formatNumber(v0)} t + \frac{1}{2} (${formatNumber(a)}) t^2 $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Função Horária da Velocidade:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v(t) = v_0 + a t $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ v(t) = ${formatNumber(v0)} + ${formatNumber(a)} t $$`} />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Equação de Torricelli (sem tempo):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v^2 = v_0^2 + 2 a \Delta S $$`} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function drawCar(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  // Corpo do carro
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x - 20, y - 10, 40, 15, 3);
  ctx.fill();
  
  // Teto
  ctx.fillStyle = "#93c5fd"; // Vidro
  ctx.beginPath();
  ctx.roundRect(x - 10, y - 20, 20, 10, 2);
  ctx.fill();
  
  // Rodas
  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(x - 12, y + 5, 5, 0, Math.PI * 2);
  ctx.arc(x + 12, y + 5, 5, 0, Math.PI * 2);
  ctx.fill();
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  width: number
) {
  const headlen = 10;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}
