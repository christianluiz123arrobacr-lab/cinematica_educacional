import { useRef, useEffect, useState } from "react";
import { MathFormula } from "@/components/MathFormula";

interface InclinedPlaneSimulatorProps {
  angle: number;
  mu: number;
  mode: number; // 0: descendo, 1: subindo, 2: repouso
  isRunning: boolean;
  resetTrigger: number;
}

export function InclinedPlaneSimulator({
  angle,
  mu,
  mode,
  isRunning,
  resetTrigger,
}: InclinedPlaneSimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameCount, setFrameCount] = useState(0);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    setFrameCount(0);
  }, [resetTrigger]);

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

      const angleRad = (angle * Math.PI) / 180;
      const g = 9.8;

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
      ctx.fillText(`θ = ${angle.toFixed(0)}°`, baseX + triBase - 60, baseY - 10);

      // Posição do objeto no plano
      const objDist = 120;
      const objX = baseX + objDist * Math.cos(angleRad);
      const objY = baseY - objDist * Math.sin(angleRad);

      // Desenhar objeto
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(objX, objY, 15, 0, Math.PI * 2);
      ctx.fill();

      // Cálculos de forças
      const m = 1; // massa em kg
      const P = m * g; // peso
      const N = m * g * Math.cos(angleRad); // normal
      const Pparallel = m * g * Math.sin(angleRad); // componente paralela
      const f = mu * N; // atrito cinético

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
      const normalX = objX - N * Math.sin(angleRad) / 20;
      const normalY = objY - N * Math.cos(angleRad) / 20;
      drawArrow(ctx, objX, objY, normalX, normalY, "#10b981", "N");

      // Desenhar componentes do peso
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      // P paralelo (ao longo do plano)
      const pParallelX = objX + (Pparallel * Math.cos(angleRad)) / 20;
      const pParallelY = objY + (Pparallel * Math.sin(angleRad)) / 20;
      ctx.beginPath();
      ctx.moveTo(objX, objY);
      ctx.lineTo(pParallelX, pParallelY);
      ctx.stroke();

      // P perpendicular
      const pPerpX = objX - (Pparallel * Math.sin(angleRad)) / 20;
      const pPerpY = objY + (Pparallel * Math.cos(angleRad)) / 20;
      ctx.beginPath();
      ctx.moveTo(objX, objY);
      ctx.lineTo(pPerpX, pPerpY);
      ctx.stroke();

      ctx.setLineDash([]);

      // Modo específico
      if (mode === 0) {
        // Descendo - atrito para cima (contra o movimento)
        const frictionX = objX - (f * Math.cos(angleRad)) / 20;
        const frictionY = objY + (f * Math.sin(angleRad)) / 20;
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");

        const a = g * (Math.sin(angleRad) - mu * Math.cos(angleRad));
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: DESCENDO", 10, 25);
        ctx.fillText(
          `a = g(sinθ - μcosθ) = ${a.toFixed(2)} m/s²`,
          10,
          45
        );
        ctx.fillText(`f = μN = ${f.toFixed(2)} N (para cima)`, 10, 65);
      } else if (mode === 1) {
        // Subindo - atrito para baixo (contra o movimento)
        const frictionX = objX + (f * Math.cos(angleRad)) / 20;
        const frictionY = objY - (f * Math.sin(angleRad)) / 20;
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");

        const a = -g * (Math.sin(angleRad) + mu * Math.cos(angleRad));
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: SUBINDO", 10, 25);
        ctx.fillText(
          `a = -g(sinθ + μcosθ) = ${a.toFixed(2)} m/s²`,
          10,
          45
        );
        ctx.fillText(`f = μN = ${f.toFixed(2)} N (para baixo)`, 10, 65);
      } else {
        // Repouso - atrito estático
        const fStatic = Pparallel;
        const frictionX = objX - (fStatic * Math.cos(angleRad)) / 20;
        const frictionY = objY + (fStatic * Math.sin(angleRad)) / 20;
        drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f_s");

        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 13px Arial";
        ctx.fillText("Modo: REPOUSO", 10, 25);
        ctx.fillText(`f_s = mg·sinθ = ${fStatic.toFixed(2)} N`, 10, 45);
        ctx.fillText(
          `f_s,máx = μ_s·N = ${(mu * N).toFixed(2)} N (necessária para equilíbrio)`,
          10,
          65
        );
      }

      // Fórmulas e dados
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`μ = ${mu.toFixed(2)}`, 10, 85);
      ctx.fillText(`N = mg·cosθ = ${N.toFixed(2)} N`, 10, 105);
      ctx.fillText(`P∥ = mg·sinθ = ${Pparallel.toFixed(2)} N`, 10, 125);

      if (isRunning) {
        setFrameCount((prev) => prev + 1);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [angle, mu, mode, isRunning]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="border-2 border-slate-300 rounded-lg bg-slate-50 shadow-md w-full"
    />
  );
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string = ""
) {
  const headlen = 12;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle - Math.PI / 6),
    toY - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / 6),
    toY - headlen * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();

  if (label) {
    ctx.fillStyle = color;
    ctx.font = "bold 11px Arial";
    const labelX = toX + 8;
    const labelY = toY - 8;
    ctx.fillText(label, labelX, labelY);
  }
}
