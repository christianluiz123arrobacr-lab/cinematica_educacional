import { useRef, useEffect } from "react";

interface SimulatorProps {
  type: "acceleration" | "freeFall" | "circular" | "collision" | "horizontalLaunch" | "verticalLaunch" | "inclinedPlane";
  width?: number;
  height?: number;
  isRunning?: boolean;
  parameters?: Record<string, number>;
  resetTrigger?: number;
}

export function Simulator({ 
  type, 
  width = 800, 
  height = 400, 
  isRunning = true,
  parameters = {},
  resetTrigger = 0
}: SimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
            drawAcceleration(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "freeFall":
            drawFreeFall(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "circular":
            drawCircular(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "collision":
            drawCollision(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "horizontalLaunch":
            drawHorizontalLaunch(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "verticalLaunch":
            drawVerticalLaunch(ctx, frameCountRef.current, width, height, parameters);
            break;
          case "inclinedPlane":
            drawInclinedPlane(ctx, frameCountRef.current, width, height, parameters);
            break;
        }
        frameCountRef.current++;

        // Reset animation after 500 frames
        if (frameCountRef.current > 500) {
          frameCountRef.current = 0;
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
  }, [type, width, height, isRunning, parameters]);

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
  const v0 = parameters.v0 || 0;
  const a = parameters.a || 0.5;

  const y = height - 50;
  const x = 50 + (v0 * frameCount + 0.5 * a * frameCount * frameCount) * 0.5;

  // Draw object
  ctx.fillStyle = "#3b82f6";
  ctx.fillRect(Math.min(x, width - 30), y, 30, 30);

  // Draw velocity vector
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(Math.min(x, width - 30) + 15, y + 15);
  ctx.lineTo(Math.min(x, width - 30) + 15 + (v0 + a * frameCount) * 2, y + 15);
  ctx.stroke();

  // Draw acceleration vector
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(Math.min(x, width - 30) + 15, y + 25);
  ctx.lineTo(Math.min(x, width - 30) + 15 + a * 20, y + 25);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`v = ${(v0 + a * frameCount).toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`a = ${a.toFixed(1)} m/s²`, 10, 40);
}

function drawFreeFall(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const g = parameters.g || 9.8;
  const v0 = parameters.v0 || 0;

  const y = 50 + (v0 * frameCount + 0.5 * g * frameCount * frameCount) * 0.3;
  const x = width / 2;

  // Draw object
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(x, Math.min(y, height - 20), 15, 0, Math.PI * 2);
  ctx.fill();

  // Draw velocity vector
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, Math.min(y, height - 20));
  ctx.lineTo(x, Math.min(y, height - 20) + (v0 + g * frameCount) * 2);
  ctx.stroke();

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`v = ${(v0 + g * frameCount).toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`h = ${Math.max(0, (height - 50 - y)).toFixed(1)} m`, 10, 40);
}

function drawCircular(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const r = parameters.r || 80;
  const w = parameters.w || 0.03;

  const centerX = width / 2;
  const centerY = height / 2;
  const angle = w * frameCount;
  const x = centerX + r * Math.cos(angle);
  const y = centerY + r * Math.sin(angle);

  // Draw circle path
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
  ctx.stroke();

  // Draw object
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();

  // Draw centripetal force vector
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();

  // Draw velocity vector (tangent)
  const vx = -r * w * Math.sin(angle);
  const vy = r * w * Math.cos(angle);
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + vx * 3, y + vy * 3);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`r = ${r.toFixed(0)} m`, 10, 20);
  ctx.fillText(`ω = ${w.toFixed(3)} rad/s`, 10, 40);
}

function drawCollision(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const m1 = parameters.m1 || 1;
  const m2 = parameters.m2 || 1;
  const v1 = parameters.v1 || 3;
  const v2 = parameters.v2 || 0;

  const collisionFrame = 150;
  const separationFrame = 300;

  let x1, x2;
  if (frameCount < collisionFrame) {
    x1 = 100 + v1 * frameCount * 1.5;
    x2 = width - 100 - v2 * frameCount * 1.5;
  } else if (frameCount < separationFrame) {
    const v1After = (m1 * v1 + m2 * v2 - m2 * (v1 - v2)) / (m1 + m2);
    const v2After = (m1 * v1 + m2 * v2 - m1 * (v1 - v2)) / (m1 + m2);
    const t = frameCount - collisionFrame;
    x1 = width / 2 - 40 + v1After * t * 1.5;
    x2 = width / 2 + 40 + v2After * t * 1.5;
  } else {
    x1 = 100 + v1 * collisionFrame * 1.5;
    x2 = width - 100 - v2 * collisionFrame * 1.5;
  }

  // Draw objects
  ctx.fillStyle = "#3b82f6";
  ctx.fillRect(Math.max(50, Math.min(x1, width - 80)), height / 2 - 20, 40, 40);

  ctx.fillStyle = "#ef4444";
  ctx.fillRect(Math.max(50, Math.min(x2, width - 80)), height / 2 - 20, 40, 40);

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`m₁ = ${m1.toFixed(1)} kg`, 10, 20);
  ctx.fillText(`m₂ = ${m2.toFixed(1)} kg`, 10, 40);
}

function drawHorizontalLaunch(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const vx = parameters.vx || 5;
  const h = parameters.h || 300;
  const g = 9.8;

  const x = 50 + vx * frameCount * 2;
  const y = h - (0.5 * g * frameCount * frameCount * 0.1);

  if (y >= height - 30) {
    return;
  }

  // Draw object
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  // Draw trajectory
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(50, h);
  for (let i = 0; i <= frameCount; i++) {
    const tx = 50 + vx * i * 2;
    const ty = h - (0.5 * g * i * i * 0.1);
    if (i === 0) ctx.moveTo(tx, ty);
    else ctx.lineTo(tx, ty);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw velocity vector
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + vx * 2, y + frameCount * 0.5);
  ctx.stroke();

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`v_x = ${vx.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`v_y = ${(frameCount * 0.5).toFixed(1)} m/s`, 10, 40);
}

function drawVerticalLaunch(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const v0 = parameters.v0 || 10;
  const g = 9.8;

  const x = width / 2;
  const y = height - 50 - (v0 * frameCount * 2 - 0.5 * g * frameCount * frameCount * 0.1);

  if (y > height - 30) {
    return;
  }

  // Draw object
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  // Draw trajectory
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  for (let i = 0; i <= frameCount; i++) {
    const ty = height - 50 - (v0 * i * 2 - 0.5 * g * i * i * 0.1);
    if (i === 0) ctx.moveTo(x - 20, ty);
    else ctx.lineTo(x - 20 + i * 0.5, ty);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw velocity vector
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + (frameCount * 0.5 - v0 * 2));
  ctx.stroke();

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`v_0 = ${v0.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`v = ${(v0 - frameCount * 0.5).toFixed(1)} m/s`, 10, 40);
}

function drawInclinedPlane(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const angle = (parameters.angle || 30) * (Math.PI / 180);
  const mu = parameters.mu || 0.2;
  const g = 9.8;

  const planeLength = 400;
  const planeX = 100;
  const planeY = height - 50;

  // Draw inclined plane
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(planeX, planeY);
  ctx.lineTo(planeX + planeLength * Math.cos(angle), planeY - planeLength * Math.sin(angle));
  ctx.stroke();

  // Calculate acceleration
  const a = g * (Math.sin(angle) - mu * Math.cos(angle));
  const distance = 0.5 * a * frameCount * frameCount * 0.5;
  const x = planeX + distance * Math.cos(angle);
  const y = planeY - distance * Math.sin(angle);

  if (distance > planeLength) {
    return;
  }

  // Draw object
  ctx.fillStyle = "#f59e0b";
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.fillRect(-10, -10, 20, 20);
  ctx.restore();

  // Draw velocity vector
  const v = a * frameCount * 0.5;
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + v * Math.cos(angle), y - v * Math.sin(angle));
  ctx.stroke();

  // Draw forces
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 1.5;
  
  // Weight
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 30);
  ctx.stroke();

  // Normal force
  ctx.strokeStyle = "#10b981";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 30 * Math.sin(angle), y - 30 * Math.cos(angle));
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "12px Arial";
  ctx.fillText(`θ = ${(angle * 180 / Math.PI).toFixed(0)}°`, 10, 20);
  ctx.fillText(`μ = ${mu.toFixed(2)}`, 10, 40);
  ctx.fillText(`a = ${a.toFixed(1)} m/s²`, 10, 60);
}
