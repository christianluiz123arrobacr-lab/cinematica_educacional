import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";

interface FreeFallSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const FreeFallSimulator: React.FC<FreeFallSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [h0, setH0] = useState(50);
  const [g, setG] = useState(9.8);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const speedFactor = 0.5;
  
  // Tempo de queda: h = 0.5 * g * t^2 => t = sqrt(2h/g)
  const tQueda = Math.sqrt((2 * h0) / g);
  const vFinal = g * tQueda;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger, h0, g]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Escala vertical: pixels por metro
    // Deixar margem em cima e embaixo
    const scale = (height - 80) / h0;

    const animate = () => {
      // Fundo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Grid e Régua Vertical
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      ctx.fillStyle = "#64748b";
      ctx.font = "10px Arial";
      
      // Régua de altura
      const rulerX = 50;
      ctx.beginPath();
      ctx.moveTo(rulerX, 20);
      ctx.lineTo(rulerX, height - 40);
      ctx.stroke();

      for (let h = 0; h <= h0; h += 10) {
        const y = height - 40 - h * scale;
        ctx.beginPath();
        ctx.moveTo(rulerX - 5, y);
        ctx.lineTo(rulerX + 5, y);
        ctx.stroke();
        ctx.fillText(`${h}m`, rulerX - 30, y + 3);
      }

      // Chão
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(0, height - 40, width, 40);
      
      // Tempo atual
      const t = (frameCountRef.current / 60) * speedFactor;
      
      // Cálculos Queda Livre
      // h(t) = h0 - 0.5 * g * t^2
      let currentH = h0 - 0.5 * g * t * t;
      let currentV = g * t;
      
      // Limitar ao chão
      if (currentH < 0) {
        currentH = 0;
        currentV = vFinal;
      }

      // Desenhar objeto (bola)
      const ballX = width / 2;
      const ballY = height - 40 - currentH * scale;

      // Sombra
      const shadowScale = 1 - (currentH / h0) * 0.5;
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.beginPath();
      ctx.ellipse(ballX, height - 30, 15 * shadowScale, 5 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Bola
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(ballX, ballY, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Brilho na bola
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.beginPath();
      ctx.arc(ballX - 5, ballY - 5, 5, 0, Math.PI * 2);
      ctx.fill();

      // Vetor velocidade
      if (currentV > 0.1) {
        const arrowLen = currentV * 3; 
        drawArrow(ctx, ballX + 30, ballY, ballX + 30, ballY + arrowLen, "#3b82f6", 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fillText(`v = ${formatUnit(currentV, "m/s")}`, ballX + 40, ballY + arrowLen / 2);
      }

      // Vetor aceleração (g)
      const gLen = g * 3;
      drawArrow(ctx, ballX - 30, ballY, ballX - 30, ballY + gLen, "#8b5cf6", 2);
      ctx.fillStyle = "#8b5cf6";
      ctx.fillText(`g = ${formatUnit(g, "m/s²")}`, ballX - 80, ballY + gLen / 2);

      // HUD
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(width - 180, 10, 170, 80);
      ctx.strokeStyle = "#cbd5e1";
      ctx.strokeRect(width - 180, 10, 170, 80);
      
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`Tempo: ${formatUnit(t, "s")}`, width - 170, 30);
      ctx.fillText(`Altura: ${formatUnit(currentH, "m")}`, width - 170, 50);
      ctx.fillText(`Velocidade: ${formatUnit(currentV, "m/s")}`, width - 170, 70);

      if (isRunning) {
        if (t < tQueda + 0.5) { // Para um pouco depois de cair
           frameCountRef.current += 1;
        } else {
           frameCountRef.current = 0; // Loop
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
  }, [isRunning, h0, g, tQueda, vFinal]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={600}
          height={500}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Altura Inicial (<MathFormula formula={String.raw`$h_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(h0, "m")}</span>
            </div>
            <Slider
              value={[h0]}
              onValueChange={(value) => setH0(value[0])}
              min={10}
              max={200}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Gravidade (<MathFormula formula={String.raw`$g$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{formatUnit(g, "m/s²")}</span>
            </div>
            <Slider
              value={[g]}
              onValueChange={(value) => setG(value[0])}
              min={1.6} // Lua
              max={24.8} // Júpiter
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Lua (1.6)</span>
              <span>Terra (9.8)</span>
              <span>Júpiter (24.8)</span>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Equações da Queda Livre</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Tempo de Queda (partindo do repouso):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ t_q = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \cdot ${formatNumber(h0)}}{${formatNumber(g)}}} = ${formatUnit(tQueda, "s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Velocidade Final (ao tocar o solo):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v_f = g \cdot t_q = ${formatNumber(g)} \cdot ${formatNumber(tQueda)} = ${formatUnit(vFinal, "m/s")} $$`} />
                <div className="mt-2"></div>
                <p className="text-xs text-slate-500 mb-1">Ou por Torricelli:</p>
                <MathFormula formula={String.raw`$$ v_f = \sqrt{2gh} = \sqrt{2 \cdot ${formatNumber(g)} \cdot ${formatNumber(h0)}} = ${formatUnit(Math.sqrt(2 * g * h0), "m/s")} $$`} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

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
