import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface LaunchObliqueGroundSimulatorNewProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const LaunchObliqueGroundSimulatorNew: React.FC<LaunchObliqueGroundSimulatorNewProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [v0, setV0] = useState(25);
  const [angle, setAngle] = useState(45);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const g = 9.8;
  const angleRad = (angle * Math.PI) / 180;
  const v0x = v0 * Math.cos(angleRad);
  const v0y = v0 * Math.sin(angleRad);
  
  const tSubida = v0y / g;
  const hMax = (v0y * v0y) / (2 * g);
  const tTotal = 2 * tSubida;
  const alcance = v0x * tTotal;

  // Fator de velocidade da animação
  const speedFactor = 0.5;

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
    const scaleX = (width - 100) / (alcance * 1.1);
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

      // Linha de alcance
      ctx.strokeStyle = "#cbd5e1";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(50, height - 40);
      ctx.lineTo(50 + alcance * scaleX, height - 40);
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
      const t = (frameCountRef.current / 60) * speedFactor;

      if (t <= tTotal) {
        // Posição
        const x = 50 + v0x * t * scaleX;
        const y = height - 40 - (v0y * t - 0.5 * g * t * t) * scaleY;
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
        const arrowScale = 20;
        drawArrow(ctx, x, y, x + vx * arrowScale, y - vy * arrowScale, "#ef4444", 2);

        // Textos no Canvas
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px Arial";
        ctx.fillText(`t = ${formatUnit(t, "s")}`, 10, 25);
        ctx.fillText(`v = ${formatUnit(vMag, "m/s")}`, 10, 40);
        ctx.fillText(`x = ${formatUnit(v0x * t, "m")}`, 10, 55);
        ctx.fillText(`y = ${formatUnit((v0y * t - 0.5 * g * t * t) || 0, "m")}`, 10, 70);
        ctx.fillText(`h_max = ${formatUnit(hMax, "m")}`, width - 150, 25);
        ctx.fillText(`t_subida = ${formatUnit(tSubida, "s")}`, width - 150, 40);
        ctx.fillText(`t_total = ${formatUnit(tTotal, "s")}`, width - 150, 55);
        ctx.fillText(`alcance = ${formatUnit(alcance, "m")}`, width - 150, 70);
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
  }, [isRunning, v0, angle, v0x, v0y, tSubida, hMax, tTotal, alcance]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatNumber(angle, 1)}°</span>
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
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <h4 className="font-bold text-slate-900">Resultados</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Componente horizontal (<MathFormula formula={String.raw`$v_{0x}$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(v0x, "m/s")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Componente vertical (<MathFormula formula={String.raw`$v_{0y}$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(v0y, "m/s")}</span>
            </div>
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
              <span className="text-slate-600">Alcance (<MathFormula formula={String.raw`$A$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(alcance, "m")}</span>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculos Detalhados</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Decomposição da Velocidade</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v_{0x} = v_0 \cdot \cos\theta = ${formatNumber(v0)} \cdot \cos(${formatNumber(angle, 1)}^\circ) = ${formatUnit(v0x, "m/s")} $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ v_{0y} = v_0 \cdot \sin\theta = ${formatNumber(v0)} \cdot \sin(${formatNumber(angle, 1)}^\circ) = ${formatUnit(v0y, "m/s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Tempo de Subida</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ t_s = \frac{v_{0y}}{g} = \frac{${formatNumber(v0y)}}{${formatNumber(g)}} = ${formatUnit(tSubida, "s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Altura Máxima</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ h_{max} = \frac{v_{0y}^2}{2g} = \frac{${formatNumber(v0y)}^2}{2 \cdot ${formatNumber(g)}} = ${formatUnit(hMax, "m")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Alcance Horizontal</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ A = v_{0x} \cdot t_t = ${formatNumber(v0x)} \cdot ${formatNumber(tTotal)} = ${formatUnit(alcance, "m")} $$`} />
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
