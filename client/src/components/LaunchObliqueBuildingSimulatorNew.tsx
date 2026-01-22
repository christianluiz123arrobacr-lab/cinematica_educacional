import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

interface LaunchObliqueBuildingSimulatorNewProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const LaunchObliqueBuildingSimulatorNew: React.FC<LaunchObliqueBuildingSimulatorNewProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [v0, setV0] = useState(20);
  const [angle, setAngle] = useState(45);
  const [h0, setH0] = useState(25);
  const [frameCount, setFrameCount] = useState(0);
  const animationIdRef = useRef<number | null>(null);

  const g = 9.8;
  const angleRad = (angle * Math.PI) / 180;
  const v0x = v0 * Math.cos(angleRad);
  const v0y = v0 * Math.sin(angleRad);
  
  const tSubida = v0y / g;
  const hMax = h0 + (v0y * v0y) / (2 * g);
  
  // Tempo até tocar o solo: h0 + v0y*t - 0.5*g*t² = 0
  const discriminant = v0y * v0y + 2 * g * h0;
  const tTotal = (v0y + Math.sqrt(discriminant)) / g;
  const alcance = v0x * tTotal;

  const getStructureType = () => {
    if (h0 < 0.15) return "mesa";
    if (h0 < 5) return "casa";
    return "prédio";
  };

  useEffect(() => {
    setFrameCount(0);
  }, [resetTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scaleX = (width - 150) / (alcance * 1.1);
    const scaleY = (height - 100) / (hMax * 1.3);

    const animate = () => {
      // Fundo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      for (let i = 0; i <= width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      // Gramado
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(0, height - 40, width, 40);
      ctx.fillStyle = "#16a34a";
      for (let i = 0; i < width; i += 20) {
        ctx.fillRect(i, height - 35, 10, 5);
      }

      // Desenhar estrutura
      const structureX = 80;
      const structureY = height - 40 - h0 * scaleY;
      drawStructure(ctx, structureX, structureY, h0 * scaleY, getStructureType());

      // Linha de alcance
      ctx.strokeStyle = "#cbd5e1";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(structureX + 30, height - 40);
      ctx.lineTo(structureX + 30 + alcance * scaleX, height - 40);
      ctx.stroke();
      ctx.setLineDash([]);

      // Altura máxima (linha tracejada)
      const yMax = height - 40 - hMax * scaleY;
      ctx.strokeStyle = "#a78bfa";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, yMax);
      ctx.lineTo(width, yMax);
      ctx.stroke();
      ctx.setLineDash([]);

      // Tempo atual
      const t = (frameCount / 60) * tTotal;

      if (t <= tTotal) {
        // Posição
        const x = structureX + 30 + v0x * t * scaleX;
        const y = height - 40 - (h0 + v0y * t - 0.5 * g * t * t) * scaleY;
        const vx = v0x;
        const vy = v0y - g * t;
        const vMag = Math.sqrt(vx * vx + vy * vy);

        // Desenhar objeto
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#1e40af";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Desenhar velocidade (seta)
        const arrowScale = 15;
        drawArrow(ctx, x, y, x + vx * arrowScale, y - vy * arrowScale, "#ef4444", 2);

        // Textos
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`t = ${t.toFixed(2)}s`, 10, 25);
        ctx.fillText(`v = ${vMag.toFixed(2)} m/s`, 10, 40);
        ctx.fillText(`x = ${(v0x * t).toFixed(2)} m`, 10, 55);
        ctx.fillText(`y = ${((h0 + v0y * t - 0.5 * g * t * t) || 0).toFixed(2)} m`, 10, 70);
        ctx.fillText(`h_max = ${hMax.toFixed(2)} m`, width - 150, 25);
        ctx.fillText(`t_subida = ${tSubida.toFixed(2)}s`, width - 150, 40);
        ctx.fillText(`t_total = ${tTotal.toFixed(2)}s`, width - 150, 55);
        ctx.fillText(`alcance = ${alcance.toFixed(2)} m`, width - 150, 70);
      }

      if (isRunning) {
        setFrameCount((prev) => (prev > 60 * tTotal ? 0 : prev + 1));
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [frameCount, isRunning, v0, angle, h0, v0x, v0y, tSubida, hMax, tTotal, alcance]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Velocidade (<MathFormula formula={String.raw`$v_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{v0.toFixed(2)} m/s</span>
            </div>
            <Slider
              value={[v0]}
              onValueChange={(value) => setV0(value[0])}
              min={1}
              max={50}
              step={0.5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta$`} />)</label>
              <span className="text-sm font-bold text-green-600">{angle.toFixed(1)}°</span>
            </div>
            <Slider
              value={[angle]}
              onValueChange={(value) => setAngle(value[0])}
              min={1}
              max={89}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Altura (<MathFormula formula={String.raw`$h_0$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{h0.toFixed(2)} m</span>
            </div>
            <Slider
              value={[h0]}
              onValueChange={(value) => setH0(value[0])}
              min={0.1}
              max={100}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <h4 className="font-bold text-slate-900">Cálculos</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600"><MathFormula formula={String.raw`$v_{0x} = v_0\cos\theta$`} />:</span>
              <span className="font-bold text-slate-900">{v0x.toFixed(3)} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600"><MathFormula formula={String.raw`$v_{0y} = v_0\sin\theta$`} />:</span>
              <span className="font-bold text-slate-900">{v0y.toFixed(3)} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600"><MathFormula formula={String.raw`$h_{max} = h_0 + \frac{v_{0y}^2}{2g}$`} />:</span>
              <span className="font-bold text-slate-900">{hMax.toFixed(3)} m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600"><MathFormula formula={String.raw`$t_s = \frac{v_{0y}}{g}$`} />:</span>
              <span className="font-bold text-slate-900">{tSubida.toFixed(3)} s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tempo total (<MathFormula formula={String.raw`$h_0 + v_{0y}t - \frac{1}{2}gt^2 = 0$`} />):</span>
              <span className="font-bold text-slate-900">{tTotal.toFixed(3)} s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Alcance (<MathFormula formula={String.raw`$A = v_{0x} \cdot t_t$`} />):</span>
              <span className="font-bold text-slate-900">{alcance.toFixed(3)} m</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function drawStructure(ctx: CanvasRenderingContext2D, x: number, y: number, height: number, type: string) {
  if (type === "mesa") {
    ctx.fillStyle = "#8b7355";
    ctx.fillRect(x - 40, y, 80, 8);
    ctx.fillStyle = "#a0826d";
    ctx.fillRect(x - 5, y + 8, 10, height);
  } else if (type === "casa") {
    ctx.fillStyle = "#d97706";
    ctx.fillRect(x - 40, y, 80, height);
    ctx.fillStyle = "#92400e";
    ctx.fillRect(x - 35, y + 10, 15, 15);
    ctx.fillRect(x + 20, y + 10, 15, 15);
  } else {
    ctx.fillStyle = "#64748b";
    ctx.fillRect(x - 40, y, 80, height);
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1;
    for (let i = 0; i < height; i += 20) {
      for (let j = -35; j < 40; j += 20) {
        ctx.fillStyle = "#fbbf24";
        ctx.fillRect(x + j, y + i, 12, 12);
        ctx.strokeRect(x + j, y + i, 12, 12);
      }
    }
  }
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
  const headlen = 12;
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
