import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface LaunchVerticalBuildingSimulatorNewProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const LaunchVerticalBuildingSimulatorNew: React.FC<LaunchVerticalBuildingSimulatorNewProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [v0, setV0] = useState(15);
  const [h0, setH0] = useState(20);
  const [frameCount, setFrameCount] = useState(0);
  const animationIdRef = useRef<number | null>(null);

  const g = 9.8;
  const tSubida = v0 / g;
  const hMax = h0 + (v0 * v0) / (2 * g);
  
  // Tempo até tocar o solo: h0 + v0*t - 0.5*g*t² = 0
  const discriminant = v0 * v0 + 2 * g * h0;
  const tTotal = (v0 + Math.sqrt(discriminant)) / g;

  // Tipo de estrutura
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
    const scale = height / (hMax * 1.3);

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
      const structureX = 100;
      const structureY = height - 40 - h0 * scale;
      drawStructure(ctx, structureX, structureY, h0 * scale, getStructureType());

      // Tempo atual
      const t = (frameCount / 60) * tTotal;

      if (t <= tTotal) {
        // Posição e velocidade
        const y = height - 40 - (h0 + v0 * t - 0.5 * g * t * t) * scale;
        const vAtual = v0 - g * t;

        // Desenhar objeto
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(structureX + 30, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#1e40af";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Desenhar velocidade (seta)
        const arrowLength = Math.abs(vAtual) * 3;
        const arrowY = vAtual >= 0 ? y - arrowLength : y + arrowLength;
        drawArrow(ctx, structureX + 30, y, structureX + 30, arrowY, "#ef4444", 2);

        // Altura máxima (linha tracejada)
        const yMax = height - 40 - hMax * scale;
        ctx.strokeStyle = "#a78bfa";
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, yMax);
        ctx.lineTo(width, yMax);
        ctx.stroke();
        ctx.setLineDash([]);

        // Textos
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`t = ${t.toFixed(2)}s`, 10, 25);
        ctx.fillText(`v = ${vAtual.toFixed(2)} m/s`, 10, 40);
        ctx.fillText(`h = ${((h0 + v0 * t - 0.5 * g * t * t) || 0).toFixed(2)} m`, 10, 55);
        ctx.fillText(`h_max = ${hMax.toFixed(2)} m`, width - 150, 25);
        ctx.fillText(`t_subida = ${tSubida.toFixed(2)}s`, width - 150, 40);
        ctx.fillText(`t_total = ${tTotal.toFixed(2)}s`, width - 150, 55);
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
  }, [frameCount, isRunning, v0, h0, tSubida, hMax, tTotal]);

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
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">Parâmetros</h4>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v₀)</label>
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
              <label className="text-sm font-semibold text-slate-700">Altura do Prédio (h₀)</label>
              <span className="text-sm font-bold text-green-600">{h0.toFixed(2)} m ({getStructureType()})</span>
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
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Altura máxima (h_max = h₀ + v₀²/2g):</span>
              <span className="font-bold text-slate-900">{hMax.toFixed(3)} m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tempo de subida (t_s = v₀/g):</span>
              <span className="font-bold text-slate-900">{tSubida.toFixed(3)} s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tempo total (h₀ + v₀t - ½gt² = 0):</span>
              <span className="font-bold text-slate-900">{tTotal.toFixed(3)} s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tipo de estrutura:</span>
              <span className="font-bold text-slate-900 capitalize">{getStructureType()}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function drawStructure(ctx: CanvasRenderingContext2D, x: number, y: number, height: number, type: string) {
  if (type === "mesa") {
    // Mesa
    ctx.fillStyle = "#8b7355";
    ctx.fillRect(x - 40, y, 80, 8);
    ctx.fillStyle = "#a0826d";
    ctx.fillRect(x - 5, y + 8, 10, height);
  } else if (type === "casa") {
    // Casa
    ctx.fillStyle = "#d97706";
    ctx.fillRect(x - 40, y, 80, height);
    ctx.fillStyle = "#92400e";
    ctx.fillRect(x - 35, y + 10, 15, 15);
    ctx.fillRect(x + 20, y + 10, 15, 15);
  } else {
    // Prédio
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
