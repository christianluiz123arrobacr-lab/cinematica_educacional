import { useRef, useEffect, useState } from "react";
import { MathFormula } from "@/components/MathFormula";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface InclinedPlaneSimulatorProps {
  angle?: number;
  mu?: number;
  mode?: number; // 0: descendo, 1: subindo, 2: repouso
  isRunning: boolean;
  resetTrigger: number;
}

export function InclinedPlaneSimulator({
  angle: initialAngle = 30,
  mu: initialMu = 0.2,
  mode: initialMode = 0,
  isRunning,
  resetTrigger,
}: InclinedPlaneSimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  // Estados locais para permitir edição
  const [angle, setAngle] = useState(initialAngle);
  const [mu, setMu] = useState(initialMu);
  const [mass, setMass] = useState(1); // Massa editável
  const [mode, setMode] = useState(initialMode);

  // Atualizar estados se props mudarem (opcional, mas bom para reset)
  useEffect(() => {
    setAngle(initialAngle);
    setMu(initialMu);
    setMode(initialMode);
  }, [initialAngle, initialMu, initialMode, resetTrigger]);

  const g = 9.8;
  const angleRad = (angle * Math.PI) / 180;
  const P = mass * g;
  const N = mass * g * Math.cos(angleRad);
  const Pparallel = mass * g * Math.sin(angleRad);
  const f = mu * N;

  // Fator de velocidade da animação
  const speedFactor = 0.5;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger, angle, mu, mass, mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Background
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
      for (let i = 0; i <= height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      // Triângulo retângulo (plano inclinado)
      const baseX = 80;
      const baseY = height - 60;
      const triHeight = 200;
      const triBase = triHeight / Math.tan(angleRad);

      // Desenhar plano
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      ctx.lineTo(baseX + triBase, baseY);
      ctx.lineTo(baseX, baseY - triHeight);
      ctx.closePath();
      ctx.stroke();

      // Desenhar ângulo
      ctx.fillStyle = "#1f2937";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`θ = ${formatNumber(angle, 0)}°`, baseX + triBase - 60, baseY - 10);

      // Posição do objeto no plano
      const objDist = 120;
      const objX = baseX + objDist * Math.cos(angleRad);
      const objY = baseY - objDist * Math.sin(angleRad);

      // Desenhar objeto
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(objX, objY, 15, 0, Math.PI * 2);
      ctx.fill();

      // Desenhar peso (vertical para baixo)
      drawArrow(
        ctx,
        objX,
        objY,
        objX,
        objY + 50,
        "#ef4444",
        "P = mg"
      );

      // Desenhar normal (perpendicular ao plano)
      const normalX = objX - N * Math.sin(angleRad) / (mass * 2); // Escala visual ajustada
      const normalY = objY - N * Math.cos(angleRad) / (mass * 2);
      drawArrow(ctx, objX, objY, normalX, normalY, "#10b981", "N");

      // Desenhar componentes do peso
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      // P paralelo (ao longo do plano)
      const pParallelX = objX + (Pparallel * Math.cos(angleRad)) / (mass * 2);
      const pParallelY = objY + (Pparallel * Math.sin(angleRad)) / (mass * 2);
      ctx.beginPath();
      ctx.moveTo(objX, objY);
      ctx.lineTo(pParallelX, pParallelY);
      ctx.stroke();

      // P perpendicular
      const pPerpX = objX - (Pparallel * Math.sin(angleRad)) / (mass * 2);
      const pPerpY = objY + (Pparallel * Math.cos(angleRad)) / (mass * 2);
      ctx.beginPath();
      ctx.moveTo(objX, objY);
      ctx.lineTo(pPerpX, pPerpY);
      ctx.stroke();

      ctx.setLineDash([]);

      // Modo específico
      if (mode === 0) {
        // Descendo - atrito para cima (contra o movimento)
        const frictionX = objX - (f * Math.cos(angleRad)) / (mass * 2);
        const frictionY = objY + (f * Math.sin(angleRad)) / (mass * 2);
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");

        const a = g * (Math.sin(angleRad) - mu * Math.cos(angleRad));
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: DESCENDO", 10, 25);
        ctx.fillText(
          `a = ${formatUnit(a, "m/s²")}`,
          10,
          45
        );
        ctx.fillText(`f = ${formatUnit(f, "N")} (para cima)`, 10, 65);
      } else if (mode === 1) {
        // Subindo - atrito para baixo (contra o movimento)
        const frictionX = objX + (f * Math.cos(angleRad)) / (mass * 2);
        const frictionY = objY - (f * Math.sin(angleRad)) / (mass * 2);
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");

        const a = -g * (Math.sin(angleRad) + mu * Math.cos(angleRad));
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: SUBINDO", 10, 25);
        ctx.fillText(
          `a = ${formatUnit(a, "m/s²")}`,
          10,
          45
        );
        ctx.fillText(`f = ${formatUnit(f, "N")} (para baixo)`, 10, 65);
      } else {
        // Repouso - atrito estático
        const fStatic = Pparallel;
        const frictionX = objX - (fStatic * Math.cos(angleRad)) / (mass * 2);
        const frictionY = objY + (fStatic * Math.sin(angleRad)) / (mass * 2);
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f_s");

        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: REPOUSO", 10, 25);
        ctx.fillText(`f_s = ${formatUnit(fStatic, "N")}`, 10, 45);
        ctx.fillText(
          `f_s,máx = ${formatUnit(mu * N, "N")} (necessária)`,
          10,
          65
        );
      }

      // Fórmulas e dados
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`μ = ${formatNumber(mu)}`, 10, 85);
      ctx.fillText(`N = ${formatUnit(N, "N")}`, 10, 105);
      ctx.fillText(`P∥ = ${formatUnit(Pparallel, "N")}`, 10, 125);

      if (isRunning) {
        frameCountRef.current += 1;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [angle, mu, mass, mode, isRunning, P, N, Pparallel, f, angleRad]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Ângulo (<MathFormula formula={String.raw`$\theta$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatNumber(angle, 0)}°</span>
            </div>
            <Slider
              value={[angle]}
              onValueChange={(value) => setAngle(value[0])}
              min={5}
              max={85}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Coef. Atrito (<MathFormula formula={String.raw`$\mu$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatNumber(mu, 2)}</span>
            </div>
            <Slider
              value={[mu]}
              onValueChange={(value) => setMu(value[0])}
              min={0}
              max={1}
              step={0.05}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Massa (<MathFormula formula={String.raw`$m$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{formatUnit(mass, "kg")}</span>
            </div>
            <Slider
              value={[mass]}
              onValueChange={(value) => setMass(value[0])}
              min={0.5}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <h4 className="font-bold text-slate-900">Forças Calculadas</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Peso (<MathFormula formula={String.raw`$P = mg$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(P, "N")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Normal (<MathFormula formula={String.raw`$N = P\cos\theta$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(N, "N")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Peso Paralelo (<MathFormula formula={String.raw`$P_{\parallel} = P\sin\theta$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(Pparallel, "N")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Força de Atrito (<MathFormula formula={String.raw`$f = \mu N$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(f, "N")}</span>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculos Detalhados</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Decomposição do Peso</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ P_{\parallel} = P \sin\theta = ${formatNumber(mass)} \cdot ${formatNumber(g)} \cdot \sin(${formatNumber(angle)}^\circ) = ${formatUnit(Pparallel, "N")} $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ N = P \cos\theta = ${formatNumber(mass)} \cdot ${formatNumber(g)} \cdot \cos(${formatNumber(angle)}^\circ) = ${formatUnit(N, "N")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Força de Atrito Cinético</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ f = \mu \cdot N = ${formatNumber(mu)} \cdot ${formatNumber(N)} = ${formatUnit(f, "N")} $$`} />
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
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string
) {
  const headlen = 10;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;

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

  // Label
  ctx.fillStyle = color;
  ctx.font = "bold 12px Arial";
  ctx.fillText(label, toX + 10, toY);
}
