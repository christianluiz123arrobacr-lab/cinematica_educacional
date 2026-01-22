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

// Função auxiliar para desenhar um carro
function drawCar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number = 30) {
  // Corpo do carro
  ctx.fillStyle = "#ef4444";
  ctx.fillRect(x - size/2, y - size/3, size, size/1.5);
  
  // Janela
  ctx.fillStyle = "#93c5fd";
  ctx.fillRect(x - size/3, y - size/4, size/2, size/4);
  
  // Roda esquerda
  ctx.fillStyle = "#1f2937";
  ctx.beginPath();
  ctx.arc(x - size/3, y + size/3, size/6, 0, Math.PI * 2);
  ctx.fill();
  
  // Roda direita
  ctx.beginPath();
  ctx.arc(x + size/3, y + size/3, size/6, 0, Math.PI * 2);
  ctx.fill();
}

// Função auxiliar para desenhar estrada
function drawRoad(ctx: CanvasRenderingContext2D, y: number, width: number) {
  // Asfalto
  ctx.fillStyle = "#374151";
  ctx.fillRect(0, y - 20, width, 40);
  
  // Linha branca do meio
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 2;
  ctx.setLineDash([20, 10]);
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(width, y);
  ctx.stroke();
  ctx.setLineDash([]);
}

// Função para desenhar seta com rótulo
function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  label: string = ""
) {
  const headlen = 15;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  
  // Linha
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  // Ponta da seta
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();

  // Rótulo
  if (label) {
    ctx.fillStyle = color;
    ctx.font = "bold 12px Arial";
    ctx.fillText(label, toX + 5, toY - 5);
  }
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

  const y = height - 80;
  const x = 50 + (v0 * frameCount + 0.5 * a * frameCount * frameCount) * 0.5;

  // Draw road
  drawRoad(ctx, y, width);

  // Draw car
  drawCar(ctx, Math.min(x, width - 30), y, 30);

  // Draw velocity vector
  const vCurrent = v0 + a * frameCount;
  drawArrow(ctx, Math.min(x, width - 30), y - 40, Math.min(x, width - 30) + vCurrent * 2, y - 40, "#ef4444", "v");

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
  ctx.fillText(`v = ${vCurrent.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`a = ${a.toFixed(1)} m/s²`, 10, 40);
  ctx.fillText(`s = ${((v0 * frameCount + 0.5 * a * frameCount * frameCount) * 0.5).toFixed(1)} m`, 10, 60);
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

  // Draw object as circle
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(x, Math.min(y, height - 20), 15, 0, Math.PI * 2);
  ctx.fill();
  
  // Circle outline
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw velocity vector
  const vCurrent = v0 + g * frameCount;
  drawArrow(ctx, x, Math.min(y, height - 20), x, Math.min(y, height - 20) + vCurrent * 2, "#ef4444", "v");

  // Draw weight force
  drawArrow(ctx, x, Math.min(y, height - 20), x + 30, Math.min(y, height - 20) + 40, "#8b5cf6", "P=mg");

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
  ctx.fillText(`v = ${vCurrent.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`h = ${Math.max(0, (height - 50 - y)).toFixed(1)} m`, 10, 40);
  ctx.fillText(`g = 9.8 m/s²`, 10, 60);
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

  // Draw object as circle
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();
  
  // Circle outline
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw centripetal force vector (para o centro)
  drawArrow(ctx, x, y, centerX, centerY, "#8b5cf6", "Fc");

  // Draw velocity vector (tangent)
  const vx = -r * w * Math.sin(angle);
  const vy = r * w * Math.cos(angle);
  drawArrow(ctx, x, y, x + vx * 3, y + vy * 3, "#ef4444", "v");

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
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
  const v1Initial = parameters.v1 || 3;
  const v2Initial = parameters.v2 || 0;

  const collisionFrame = 150;
  const separationFrame = 300;

  let x1, x2, v1, v2;
  
  if (frameCount < collisionFrame) {
    // Antes da colisão
    v1 = v1Initial;
    v2 = v2Initial;
    x1 = 100 + v1 * frameCount * 1.5;
    x2 = width - 100 - v2 * frameCount * 1.5;
  } else if (frameCount < separationFrame) {
    // Depois da colisão (conservação de momento)
    // p_antes = p_depois => m1*v1 + m2*v2 = m1*v1' + m2*v2'
    // Para colisão perfeitamente elástica: v1' = ((m1-m2)*v1 + 2*m2*v2)/(m1+m2)
    //                                      v2' = ((m2-m1)*v2 + 2*m1*v1)/(m1+m2)
    const v1After = ((m1 - m2) * v1Initial + 2 * m2 * v2Initial) / (m1 + m2);
    const v2After = ((m2 - m1) * v2Initial + 2 * m1 * v1Initial) / (m1 + m2);
    
    v1 = v1After;
    v2 = v2After;
    const t = frameCount - collisionFrame;
    x1 = width / 2 - 40 + v1After * t * 1.5;
    x2 = width / 2 + 40 + v2After * t * 1.5;
  } else {
    x1 = 100 + v1Initial * collisionFrame * 1.5;
    x2 = width - 100 - v2Initial * collisionFrame * 1.5;
    v1 = v1Initial;
    v2 = v2Initial;
  }

  // Draw objects as circles
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(Math.max(50, Math.min(x1, width - 80)), height / 2, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1e40af";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(Math.max(50, Math.min(x2, width - 80)), height / 2, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#991b1b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw velocity vectors
  drawArrow(ctx, Math.max(50, Math.min(x1, width - 80)), height / 2 - 30, Math.max(50, Math.min(x1, width - 80)) + v1 * 3, height / 2 - 30, "#3b82f6", "v1");
  drawArrow(ctx, Math.max(50, Math.min(x2, width - 80)), height / 2 + 30, Math.max(50, Math.min(x2, width - 80)) + v2 * 3, height / 2 + 30, "#ef4444", "v2");

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
  ctx.fillText(`m₁ = ${m1.toFixed(1)} kg, v₁ = ${v1.toFixed(2)} m/s`, 10, 20);
  ctx.fillText(`m₂ = ${m2.toFixed(1)} kg, v₂ = ${v2.toFixed(2)} m/s`, 10, 40);
  
  // Conservação de momento
  const pTotal = m1 * v1Initial + m2 * v2Initial;
  const pCurrent = m1 * v1 + m2 * v2;
  ctx.fillText(`p_total = ${pTotal.toFixed(2)} kg·m/s (conservado)`, 10, 60);
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
  const m = parameters.m || 1; // massa do projétil
  const scale = 0.15;

  const x = 50 + vx * frameCount * 2;
  const y = h - (0.5 * g * frameCount * frameCount * scale);

  if (y >= height - 30) {
    return;
  }

  // Draw object as circle
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1e40af";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw trajectory (parabola)
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  for (let i = 0; i <= frameCount; i++) {
    const tx = 50 + vx * i * 2;
    const ty = h - (0.5 * g * i * i * scale);
    if (i === 0) ctx.moveTo(tx, ty);
    else ctx.lineTo(tx, ty);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Velocidades componentes
  const vxCurrent = vx;
  const vyCurrent = g * frameCount * scale;
  const vMag = Math.sqrt(vxCurrent * vxCurrent + vyCurrent * vyCurrent);

  // Draw velocity vector (resultante)
  drawArrow(ctx, x, y, x + vxCurrent * 2, y + vyCurrent * 2, "#ef4444", "v");

  // Draw weight force (P = mg)
  drawArrow(ctx, x, y, x, y + 40, "#8b5cf6", "P=mg");

  // Draw normal force (if touching ground - não aplicável em voo)
  // Draw air resistance (simplified, opposite to velocity)
  // drawArrow(ctx, x, y, x - vxCurrent * 1.5, y - vyCurrent * 1.5, "#f59e0b", "R");

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels with formulas
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`vₓ = ${vxCurrent.toFixed(1)} m/s (constante)`, 10, 20);
  ctx.fillText(`vᵧ = gt = ${vyCurrent.toFixed(1)} m/s`, 10, 35);
  ctx.fillText(`v = √(vₓ² + vᵧ²) = ${vMag.toFixed(1)} m/s`, 10, 50);
  ctx.fillText(`x = vₓ·t = ${((vx * frameCount * 2) / 2).toFixed(1)} m`, 10, 65);
  ctx.fillText(`y = h - ½gt² = ${(h - y).toFixed(1)} m`, 10, 80);
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
  const scale = 0.1;

  const x = width / 2;
  const y = height - 50 - (v0 * frameCount * 2 - 0.5 * g * frameCount * frameCount * scale);

  if (y > height - 30) {
    return;
  }

  // Draw object as circle
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw trajectory
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  for (let i = 0; i <= frameCount; i++) {
    const ty = height - 50 - (v0 * i * 2 - 0.5 * g * i * i * scale);
    if (i === 0) ctx.moveTo(x, ty);
    else ctx.lineTo(x, ty);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Velocity
  const vy = v0 * 2 - g * frameCount * scale;
  
  // Draw velocity vector
  drawArrow(ctx, x, y, x, y + vy, "#ef4444", "v");

  // Draw weight force
  drawArrow(ctx, x, y, x + 30, y + 40, "#8b5cf6", "P=mg");

  // Draw ground
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, height - 10);
  ctx.lineTo(width, height - 10);
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`v = v₀ - gt = ${vy.toFixed(1)} m/s`, 10, 35);
  ctx.fillText(`y = v₀·t - ½gt²`, 10, 50);
}

function drawInclinedPlane(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number,
  parameters: Record<string, number>
) {
  const angle = parameters.angle || 30;
  const mu = parameters.mu || 0.2; // coeficiente de atrito
  const m = parameters.m || 1; // massa

  const angleRad = (angle * Math.PI) / 180;
  const planeLength = 400;
  const startX = 50;
  const startY = height - 50;

  // Cálculo da aceleração: a = g(sin(θ) - μ·cos(θ))
  const g = 9.8;
  const a = g * (Math.sin(angleRad) - mu * Math.cos(angleRad));

  // Draw inclined plane
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + planeLength * Math.cos(angleRad), startY - planeLength * Math.sin(angleRad));
  ctx.stroke();

  // Draw object as circle
  const distance = Math.max(0, a * frameCount * frameCount * 0.5 * 0.5);
  const objX = startX + distance * Math.cos(angleRad);
  const objY = startY - distance * Math.sin(angleRad);

  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(objX, objY, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw forces
  // 1. Peso (P = mg) - vertical para baixo
  const P = m * g;
  drawArrow(ctx, objX, objY, objX, objY + 40, "#ef4444", "P=mg");

  // 2. Normal (N) - perpendicular ao plano
  const N = m * g * Math.cos(angleRad);
  const normalX = objX - N * Math.sin(angleRad) / 50;
  const normalY = objY - N * Math.cos(angleRad) / 50;
  drawArrow(ctx, objX, objY, normalX, normalY, "#10b981", "N");

  // 3. Atrito (f = μ·N) - oposto ao movimento
  const f = mu * N;
  const frictionX = objX - (f * Math.cos(angleRad) / 50);
  const frictionY = objY + (f * Math.sin(angleRad) / 50);
  drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");

  // 4. Componente do peso paralela ao plano (P·sin(θ))
  const Pparallel = m * g * Math.sin(angleRad);
  const parallelX = objX + (Pparallel * Math.cos(angleRad) / 50);
  const parallelY = objY - (Pparallel * Math.sin(angleRad) / 50);
  drawArrow(ctx, objX, objY, parallelX, parallelY, "#f59e0b", "P∥");

  // Draw labels with formulas
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 11px Arial";
  ctx.fillText(`θ = ${angle}°`, 10, 20);
  ctx.fillText(`μ = ${mu.toFixed(2)} (coef. atrito)`, 10, 35);
  ctx.fillText(`a = g(sin θ - μ cos θ) = ${a.toFixed(2)} m/s²`, 10, 50);
  ctx.fillText(`N = mg cos θ = ${N.toFixed(1)} N`, 10, 65);
  ctx.fillText(`f = μN = ${f.toFixed(1)} N`, 10, 80);
  ctx.fillText(`P∥ = mg sin θ = ${Pparallel.toFixed(1)} N`, 10, 95);
}
