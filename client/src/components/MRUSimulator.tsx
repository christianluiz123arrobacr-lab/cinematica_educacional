import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";

interface MRUSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const MRUSimulator: React.FC<MRUSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [s0, setS0] = useState(0);
  const [v, setV] = useState(5);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  // Configurações da simulação
  const timeLimit = 10; // segundos de simulação
  const trackLength = 100; // metros representados na tela

  // Fator de velocidade da animação
  const speedFactor = 0.5;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger, s0, v]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Escala: pixels por metro
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
        
        // Marcações da régua no chão
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
      
      // Posição atual: S = S0 + v*t
      const currentS = s0 + v * t;
      
      // Desenhar carro
      // Posição x no canvas (limitada ao tamanho da tela para não sumir completamente se passar)
      const carX = currentS * scale;
      const carY = height - 55; // Posição vertical fixa (acima da estrada)

      if (carX > -50 && carX < width + 50) {
        drawCar(ctx, carX, carY, "#3b82f6");
        
        // Desenhar vetor velocidade
        if (v !== 0) {
          const arrowLen = v * 5; // Escala visual para o vetor
          drawArrow(ctx, carX, carY - 20, carX + arrowLen, carY - 20, "#ef4444", 2);
          ctx.fillStyle = "#ef4444";
          ctx.fillText(`v = ${formatUnit(v, "m/s")}`, carX - 10, carY - 30);
        }
        
        // Etiqueta de posição
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`S = ${formatUnit(currentS, "m")}`, carX - 15, carY - 5);
      }

      // HUD (Heads-up Display)
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(10, 10, 150, 60);
      ctx.strokeStyle = "#cbd5e1";
      ctx.strokeRect(10, 10, 150, 60);
      
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`Tempo: ${formatUnit(t, "s")}`, 20, 30);
      ctx.fillText(`Posição: ${formatUnit(currentS, "m")}`, 20, 50);

      if (isRunning) {
        // Loop infinito ou para no final? Vamos fazer loop se sair da tela muito longe
        if (currentS > trackLength + 20) {
           frameCountRef.current = 0; // Reinicia para efeito visual contínuo ou pare
           // Se quiser parar: 
           // if (t < timeLimit) frameCountRef.current += 1;
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
  }, [isRunning, s0, v]);

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
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Posição Inicial (<MathFormula formula={String.raw`$S_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(s0, "m")}</span>
            </div>
            <Slider
              value={[s0]}
              onValueChange={(value) => setS0(value[0])}
              min={0}
              max={80}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Velocidade (<MathFormula formula={String.raw`$v$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(v, "m/s")}</span>
            </div>
            <Slider
              value={[v]}
              onValueChange={(value) => setV(value[0])}
              min={0}
              max={20}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Equação Horária da Posição (MRU)</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                No Movimento Retilíneo Uniforme, a velocidade é constante e a posição varia linearmente com o tempo.
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ S(t) = S_0 + v \cdot t $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ S(t) = ${formatNumber(s0)} + ${formatNumber(v)} \cdot t $$`} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-1">Para t = 1s</p>
                <p className="font-bold text-slate-800">{formatUnit(s0 + v * 1, "m")}</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-1">Para t = 5s</p>
                <p className="font-bold text-slate-800">{formatUnit(s0 + v * 5, "m")}</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-1">Para t = 10s</p>
                <p className="font-bold text-slate-800">{formatUnit(s0 + v * 10, "m")}</p>
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
