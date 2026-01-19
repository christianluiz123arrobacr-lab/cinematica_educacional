import { useEffect, useRef, useState } from "react";

interface SimulatorProps {
  type: "acceleration" | "freeFall" | "circular" | "collision";
  width?: number;
  height?: number;
  isRunning?: boolean;
  parameters?: Record<string, number>;
}

export function Simulator({ 
  type, 
  width = 800, 
  height = 400, 
  isRunning = true,
  parameters = {}
}: SimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationId, setAnimationId] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;
    const animate = () => {
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Draw grid
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

      if (isRunning) {
        switch (type) {
          case "acceleration":
            drawAcceleration(ctx, frameCount, width, height, parameters);
            break;
          case "freeFall":
            drawFreeFall(ctx, frameCount, width, height, parameters);
            break;
          case "circular":
            drawCircular(ctx, frameCount, width, height, parameters);
            break;
          case "collision":
            drawCollision(ctx, frameCount, width, height, parameters);
            break;
        }
        frameCount++;
      }

      const id = requestAnimationFrame(animate);
      setAnimationId(id);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [type, width, height, isRunning, parameters, animationId]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border-2 border-slate-300 rounded-lg bg-slate-50 shadow-md"
    />
  );
}

function drawAcceleration(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const v0 = parameters.v0 || 0; // velocidade inicial (pixels/frame)
  const a = parameters.a || 0.5; // aceleração (pixels/frame²)
  const maxFrames = 200;

  // Posição do objeto
  const x = 50 + v0 * frameCount + 0.5 * a * frameCount * frameCount;
  const y = height - 60;

  // Se saiu da tela, reinicia
  if (x > width - 30) {
    frameCount = 0;
  }

  // Desenhar objeto (círculo)
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fill();

  // Desenhar vetor de velocidade
  const velocity = v0 + a * frameCount;
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + velocity * 2, y);
  ctx.stroke();

  // Desenhar seta de velocidade
  const arrowSize = 8;
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.moveTo(x + velocity * 2, y);
  ctx.lineTo(x + velocity * 2 - arrowSize, y - arrowSize / 2);
  ctx.lineTo(x + velocity * 2 - arrowSize, y + arrowSize / 2);
  ctx.fill();

  // Informações
  ctx.fillStyle = "#1e293b";
  ctx.font = "14px Arial";
  ctx.fillText(`v = ${(velocity / 2).toFixed(1)} m/s`, 20, 30);
  ctx.fillText(`x = ${(x / 10).toFixed(1)} m`, 20, 50);
  ctx.fillText(`a = ${(a / 2).toFixed(1)} m/s²`, 20, 70);

  // Traço do movimento
  ctx.strokeStyle = "#93c5fd";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(50, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawFreeFall(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const g = parameters.g || 0.3; // gravidade (pixels/frame²)
  const initialHeight = parameters.h || 50; // altura inicial

  // Posição do objeto
  const y = initialHeight + 0.5 * g * frameCount * frameCount;
  const x = width / 2;

  // Se caiu, reinicia
  if (y > height - 30) {
    frameCount = 0;
  }

  // Desenhar objeto (círculo)
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();

  // Desenhar vetor de velocidade (para baixo)
  const velocity = g * frameCount;
  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + velocity * 2);
  ctx.stroke();

  // Desenhar seta de velocidade
  const arrowSize = 8;
  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.moveTo(x, y + velocity * 2);
  ctx.lineTo(x - arrowSize / 2, y + velocity * 2 - arrowSize);
  ctx.lineTo(x + arrowSize / 2, y + velocity * 2 - arrowSize);
  ctx.fill();

  // Desenhar solo
  ctx.fillStyle = "#92400e";
  ctx.fillRect(0, height - 20, width, 20);

  // Informações
  ctx.fillStyle = "#1e293b";
  ctx.font = "14px Arial";
  ctx.fillText(`v = ${(velocity * 3.33).toFixed(1)} m/s`, 20, 30);
  ctx.fillText(`h = ${((height - y) / 10).toFixed(1)} m`, 20, 50);
  ctx.fillText(`g = 9.8 m/s²`, 20, 70);
  ctx.fillText(`t = ${(frameCount / 30).toFixed(2)} s`, 20, 90);

  // Traço do movimento
  ctx.strokeStyle = "#fca5a5";
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(x, initialHeight);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawCircular(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const radius = parameters.r || 80; // raio da órbita
  const angularVelocity = parameters.w || 0.03; // velocidade angular (rad/frame)

  const centerX = width / 2;
  const centerY = height / 2;

  // Ângulo atual
  const angle = angularVelocity * frameCount;

  // Posição do objeto
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  // Desenhar órbita
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Desenhar centro
  ctx.fillStyle = "#64748b";
  ctx.beginPath();
  ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
  ctx.fill();

  // Desenhar objeto
  ctx.fillStyle = "#8b5cf6";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  // Desenhar raio
  ctx.strokeStyle = "#d8b4fe";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.setLineDash([]);

  // Desenhar vetor de velocidade (tangente)
  const vx = -angularVelocity * radius * Math.sin(angle);
  const vy = angularVelocity * radius * Math.cos(angle);
  const scale = 30;

  ctx.strokeStyle = "#06b6d4";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + vx * scale, y + vy * scale);
  ctx.stroke();

  // Seta de velocidade
  const arrowSize = 8;
  ctx.fillStyle = "#06b6d4";
  ctx.save();
  ctx.translate(x + vx * scale, y + vy * scale);
  ctx.rotate(Math.atan2(vy, vx));
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-arrowSize, -arrowSize / 2);
  ctx.lineTo(-arrowSize, arrowSize / 2);
  ctx.fill();
  ctx.restore();

  // Desenhar vetor de aceleração centrípeta
  const ax = -angularVelocity * angularVelocity * radius * Math.cos(angle);
  const ay = -angularVelocity * angularVelocity * radius * Math.sin(angle);

  ctx.strokeStyle = "#ec4899";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + ax * scale, y + ay * scale);
  ctx.stroke();

  // Informações
  ctx.fillStyle = "#1e293b";
  ctx.font = "14px Arial";
  const v = angularVelocity * radius;
  const ac = angularVelocity * angularVelocity * radius;
  ctx.fillText(`v = ${(v * 10).toFixed(1)} m/s`, 20, 30);
  ctx.fillText(`a_c = ${(ac * 10).toFixed(1)} m/s²`, 20, 50);
  ctx.fillText(`R = ${(radius / 10).toFixed(1)} m`, 20, 70);
  ctx.fillText(`ω = ${(angularVelocity * 100).toFixed(2)} rad/s`, 20, 90);
}

function drawCollision(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const m1 = parameters.m1 || 1; // massa 1
  const m2 = parameters.m2 || 1; // massa 2
  const v1Initial = parameters.v1 || 3; // velocidade inicial 1
  const v2Initial = parameters.v2 || 0; // velocidade inicial 2

  const cycleLength = 300;
  const phase = frameCount % cycleLength;

  // Posições antes da colisão
  const x1Before = 100 + v1Initial * phase;
  const x2Before = width - 100 - v2Initial * phase;

  // Ponto de colisão
  const collisionPoint = width / 2;

  // Detecção de colisão
  const collisionStart = (collisionPoint - 100) / v1Initial;
  const collisionDuration = 30;

  let x1, x2, v1, v2;

  if (phase < collisionStart) {
    // Antes da colisão
    x1 = 100 + v1Initial * phase;
    x2 = width - 100;
    v1 = v1Initial;
    v2 = 0;
  } else if (phase < collisionStart + collisionDuration) {
    // Durante a colisão (compressão)
    x1 = collisionPoint - 15;
    x2 = collisionPoint + 15;
    v1 = 0;
    v2 = 0;
  } else {
    // Após a colisão (conservação de momentum)
    const timeSinceCollision = phase - collisionStart - collisionDuration;
    const v1Final = ((m1 - m2) * v1Initial) / (m1 + m2);
    const v2Final = (2 * m1 * v1Initial) / (m1 + m2);

    x1 = collisionPoint - 15 + v1Final * timeSinceCollision;
    x2 = collisionPoint + 15 + v2Final * timeSinceCollision;
    v1 = v1Final;
    v2 = v2Final;
  }

  // Desenhar objetos
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(x1, height / 2, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`m₁=${m1}kg`, x1 - 20, height / 2 + 40);

  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(x2, height / 2, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`m₂=${m2}kg`, x2 - 20, height / 2 + 40);

  // Desenhar vetores de velocidade
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, height / 2);
  ctx.lineTo(x1 + v1 * 15, height / 2);
  ctx.stroke();

  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x2, height / 2);
  ctx.lineTo(x2 + v2 * 15, height / 2);
  ctx.stroke();

  // Informações
  ctx.fillStyle = "#1e293b";
  ctx.font = "14px Arial";
  ctx.fillText(`v₁ = ${v1.toFixed(2)} m/s`, 20, 30);
  ctx.fillText(`v₂ = ${v2.toFixed(2)} m/s`, 20, 50);
  const totalMomentum = m1 * v1 + m2 * v2;
  ctx.fillText(`p_total = ${totalMomentum.toFixed(2)} kg·m/s`, 20, 70);
}
