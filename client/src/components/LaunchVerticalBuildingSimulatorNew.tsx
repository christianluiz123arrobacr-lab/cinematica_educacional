import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

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
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const g = 9.8;
  const tSubida = v0 / g;
  const hMax = h0 + (v0 * v0) / (2 * g);
  
  // Tempo até tocar o solo: h0 + v0*t - 0.5*g*t² = 0
  const discriminant = v0 * v0 + 2 * g * h0;
  const tTotal = (v0 + Math.sqrt(discriminant)) / g;

  // Fator de velocidade da animação
  const speedFactor = 0.5;

  // Tipo de estrutura
  const getStructureType = () => {
    if (h0 < 0.15) return "mesa";
    if (h0 < 5) return "casa";
    return "prédio";
  };

  useEffect(() => {
    frameCountRef.current = 0;
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
      const t = (frameCountRef.current / 60) * speedFactor;

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

        // Textos no Canvas
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`t = ${formatUnit(t, "s")}`, 10, 25);
        ctx.fillText(`v = ${formatUnit(vAtual, "m/s")}`, 10, 40);
        ctx.fillText(`h = ${formatUnit((h0 + v0 * t - 0.5 * g * t * t) || 0, "m")}`, 10, 55);
        ctx.fillText(`h_max = ${formatUnit(hMax, "m")}`, width - 150, 25);
        ctx.fillText(`t_subida = ${formatUnit(tSubida, "s")}`, width - 150, 40);
        ctx.fillText(`t_total = ${formatUnit(tTotal, "s")}`, width - 150, 55);
      }

      if (isRunning) {
        if ((frameCountRef.current / 60) * speedFactor > tTotal) {
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
  }, [isRunning, v0, h0, tSubida, hMax, tTotal]);

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
              <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (<MathFormula formula={String.raw`$v_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(v0, "m/s")}</span>
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
              <label className="text-sm font-semibold text-slate-700">Altura do Prédio (<MathFormula formula={String.raw`$h_0$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(h0, "m")} ({getStructureType()})</span>
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
          <h4 className="font-bold text-slate-900">Resultados</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Altura máxima (<MathFormula formula={String.raw`$h_{max}$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(hMax, "m")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tempo de subida (<MathFormula formula={String.raw`$t_s$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(tSubida, "s")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tempo total (<MathFormula formula={String.raw`$t_t$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(tTotal, "s")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Tipo de estrutura:</span>
              <span className="font-bold text-slate-900 capitalize">{getStructureType()}</span>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculos Detalhados</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Tempo de Subida</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ t_s = \frac{v_0}{g} = \frac{${formatNumber(v0)}}{${formatNumber(g)}} = ${formatUnit(tSubida, "s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Altura Máxima</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ h_{max} = h_0 + \frac{v_0^2}{2g} = ${formatNumber(h0)} + \frac{${formatNumber(v0)}^2}{2 \cdot ${formatNumber(g)}} = ${formatNumber(h0)} + \frac{${formatNumber(v0 * v0)}}{${formatNumber(2 * g)}} = ${formatUnit(hMax, "m")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Tempo Total (Equação do 2º Grau)</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <p className="text-xs text-slate-500 mb-2">Resolvemos: <MathFormula formula={String.raw`$h_0 + v_0t - \frac{1}{2}gt^2 = 0$`} /></p>
                <MathFormula formula={String.raw`$$ t_t = \frac{v_0 + \sqrt{v_0^2 + 2gh_0}}{g} = \frac{${formatNumber(v0)} + \sqrt{${formatNumber(v0)}^2 + 2 \cdot ${formatNumber(g)} \cdot ${formatNumber(h0)}}}{${formatNumber(g)}} = ${formatUnit(tTotal, "s")} $$`} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Teoria Avançada */}
      <AdvancedTheory
        title={ITADynamicsTheory.title}
        introduction={ITADynamicsTheory.introduction}
        sections={ITADynamicsTheory.sections}
      />
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
