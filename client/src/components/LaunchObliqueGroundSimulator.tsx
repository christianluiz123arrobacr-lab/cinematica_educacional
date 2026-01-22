import { useRef, useEffect, useState } from "react";

interface LaunchObliqueGroundSimulatorProps {
  v0: number;
  angle: number; // em graus
  isRunning: boolean;
  resetTrigger: number;
}

export function LaunchObliqueGroundSimulator({
  v0,
  angle,
  isRunning,
  resetTrigger,
}: LaunchObliqueGroundSimulatorProps) {
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
      const angleRad = (angle * Math.PI) / 180;
      const vx = v0 * Math.cos(angleRad);
      const vy0 = v0 * Math.sin(angleRad);

      const tSubida = vy0 / g;
      const hMax = (vy0 * vy0) / (2 * g);
      const tTotal = 2 * tSubida;
      const alcance = vx * tTotal;

      // Escala para animação
      const scale = 0.6;
      const timeScale = 0.05;

      // Tempo atual em segundos
      const t = frameCount * timeScale;

      // Posição do objeto
      const x = 50 + vx * t * scale;
      let y = height - 100 - (vy0 * t * scale - 0.5 * g * t * t * scale);

      // Gramado
      drawGrass(ctx, height - 50, width);

      // Se o objeto caiu no chão, parar
      if (y >= height - 50 || x > width - 50) {
        y = height - 50;
      }

      // Desenhar objeto
      if (x < width - 50) {
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
            const tx = 50 + vx * ti * scale;
            const ty = height - 100 - (vy0 * ti * scale - 0.5 * g * ti * ti * scale);
            if (i === 0) ctx.moveTo(tx, Math.min(ty, height - 50));
            else ctx.lineTo(tx, Math.min(ty, height - 50));
          }
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Desenhar velocidade
        if (t < tTotal) {
          const vxCurrent = vx;
          const vyCurrent = vy0 - g * t;
          const vMag = Math.sqrt(vxCurrent * vxCurrent + vyCurrent * vyCurrent);
          const vAngle = Math.atan2(vyCurrent, vxCurrent);

          const velScale = 1.5;
          const velX = x + vxCurrent * velScale;
          const velY = y + vyCurrent * velScale;

          ctx.strokeStyle = "#ef4444";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(velX, velY);
          ctx.stroke();

          // Seta
          const arrowLen = 10;
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.moveTo(velX, velY);
          ctx.lineTo(
            velX - arrowLen * Math.cos(vAngle - Math.PI / 6),
            velY - arrowLen * Math.sin(vAngle - Math.PI / 6)
          );
          ctx.lineTo(
            velX - arrowLen * Math.cos(vAngle + Math.PI / 6),
            velY - arrowLen * Math.sin(vAngle + Math.PI / 6)
          );
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = "#ef4444";
          ctx.font = "bold 10px Arial";
          ctx.fillText(`v = ${vMag.toFixed(1)} m/s`, velX + 10, velY);
        }
      }

      // Cálculos e informações
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`Lançamento Oblíquo do Solo`, 10, 25);
      ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s, θ = ${angle.toFixed(0)}°`, 10, 42);
      ctx.fillText(`h_máx = ${hMax.toFixed(2)} m`, 10, 59);
      ctx.fillText(`t_subida = ${tSubida.toFixed(2)} s`, 10, 76);
      ctx.fillText(`t_descida = ${tSubida.toFixed(2)} s`, 10, 93);
      ctx.fillText(`Alcance = ${alcance.toFixed(2)} m`, 10, 110);

      // Tempo atual
      ctx.fillStyle = "#0284c7";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`t = ${t.toFixed(2)} s`, 10, 127);

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
  }, [v0, angle, isRunning]);

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
