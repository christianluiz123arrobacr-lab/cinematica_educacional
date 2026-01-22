import { useRef, useEffect, useState } from "react";

interface LaunchVerticalGroundSimulatorProps {
  v0: number;
  isRunning: boolean;
  resetTrigger: number;
}

export function LaunchVerticalGroundSimulator({
  v0,
  isRunning,
  resetTrigger,
}: LaunchVerticalGroundSimulatorProps) {
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

      const g = 9.8;
      const tSubida = v0 / g;
      const hMax = (v0 * v0) / (2 * g);
      const tTotal = 2 * tSubida;

      // Escala para animação
      const scale = 0.8;
      const timeScale = 0.05;

      // Tempo atual em segundos
      const t = frameCount * timeScale;

      // Posição do objeto
      const x = width / 2;
      let y = height - 100 - (v0 * t * scale - 0.5 * g * t * t * scale);

      // Gramado
      drawGrass(ctx, height - 50, width);

      // Se o objeto caiu no chão, parar
      if (y >= height - 50) {
        y = height - 50;
      }

      // Desenhar objeto
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();

      // Desenhar trajetória
      if (frameCount > 0 && t < tTotal) {
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        for (let i = 0; i <= frameCount; i++) {
          const ti = i * timeScale;
          const ty = height - 100 - (v0 * ti * scale - 0.5 * g * ti * ti * scale);
          if (i === 0) ctx.moveTo(x, Math.min(ty, height - 50));
          else ctx.lineTo(x, Math.min(ty, height - 50));
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Desenhar velocidade
      if (t < tTotal) {
        const vy = v0 - g * t;
        const vyScale = vy * 2;
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + vyScale);
        ctx.stroke();

        // Seta
        const arrowLen = 10;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(x, y + vyScale);
        ctx.lineTo(x - 5, y + vyScale - arrowLen);
        ctx.lineTo(x + 5, y + vyScale - arrowLen);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 11px Arial";
        ctx.fillText(`v = ${vy.toFixed(1)} m/s`, x + 15, y + vyScale);
      }

      // Cálculos e informações
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 13px Arial";
      ctx.fillText(`Lançamento Vertical do Solo`, 10, 25);
      ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s`, 10, 45);
      ctx.fillText(`h_máx = v₀²/(2g) = ${hMax.toFixed(2)} m`, 10, 65);
      ctx.fillText(`t_subida = v₀/g = ${tSubida.toFixed(2)} s`, 10, 85);
      ctx.fillText(`t_total = 2v₀/g = ${tTotal.toFixed(2)} s`, 10, 105);

      // Tempo atual
      ctx.fillStyle = "#0284c7";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`t = ${t.toFixed(2)} s`, 10, 125);

      if (isRunning && t < tTotal + 1) {
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
  }, [v0, isRunning]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="border-2 border-slate-300 rounded-lg bg-slate-50 shadow-md w-full"
    />
  );
}

function drawGrass(ctx: CanvasRenderingContext2D, y: number, width: number) {
  ctx.fillStyle = "#22c55e";
  ctx.fillRect(0, y, width, 50);
  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 10) {
    ctx.beginPath();
    ctx.moveTo(i, y);
    ctx.lineTo(i + 5, y - 5);
    ctx.stroke();
  }
}
