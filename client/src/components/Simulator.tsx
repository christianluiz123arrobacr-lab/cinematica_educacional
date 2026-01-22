import { useRef, useEffect, useState } from "react";

interface SimulatorProps {
  type: "acceleration" | "freeFall" | "circular" | "collision" | "horizontalLaunch" | "verticalLaunch" | "inclinedPlane" | "launchVerticalGround" | "launchVerticalBuilding" | "launchOblique" | "launchObliqueBuilding";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);
  const [canvasWidth, setCanvasWidth] = useState(width);
  const [canvasHeight, setCanvasHeight] = useState(height);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const maxWidth = Math.min(containerWidth - 16, width);
        setCanvasWidth(maxWidth);
        setCanvasHeight(Math.round((maxWidth / width) * height));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

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
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw grid
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      const gridSpacing = Math.round(50 * (canvasWidth / width));
      for (let i = 0; i <= canvasWidth; i += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasHeight);
        ctx.stroke();
      }
      for (let i = 0; i <= canvasHeight; i += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasWidth, i);
        ctx.stroke();
      }

      if (isRunning) {
        switch (type) {
          case "acceleration":
            drawAcceleration(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "freeFall":
            drawFreeFall(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "circular":
            drawCircular(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "collision":
            drawCollision(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "inclinedPlane":
            drawInclinedPlane(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "launchVerticalGround":
            drawLaunchVerticalGround(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "launchVerticalBuilding":
            drawLaunchVerticalBuilding(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "launchOblique":
            drawLaunchOblique(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
            break;
          case "launchObliqueBuilding":
            drawLaunchObliqueBuilding(ctx, frameCountRef.current, canvasWidth, canvasHeight, parameters);
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
  }, [type, canvasWidth, canvasHeight, isRunning, parameters]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="border-2 border-slate-300 rounded-lg bg-slate-50 shadow-md max-w-full"
      />
    </div>
  );
}

// Funções auxiliares
function drawArrow(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number, color: string, label: string = "") {
  const headlen = 12;
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

  if (label) {
    ctx.fillStyle = color;
    ctx.font = "bold 11px Arial";
    ctx.fillText(label, toX + 5, toY - 5);
  }
}

function drawBuilding(ctx: CanvasRenderingContext2D, x: number, y: number, height: number) {
  if (height < 1.5) {
    // Mesa
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(x - 40, y - 10, 80, 10);
    ctx.fillRect(x - 35, y, 15, 15);
    ctx.fillRect(x + 20, y, 15, 15);
  } else if (height < 5) {
    // Casa
    ctx.fillStyle = "#d2691e";
    ctx.fillRect(x - 40, y - 30, 80, 30);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(x - 40, y - 35, 80, 5);
    // Janelas
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(x - 30, y - 25, 15, 10);
    ctx.fillRect(x + 15, y - 25, 15, 10);
  } else {
    // Prédio
    ctx.fillStyle = "#696969";
    ctx.fillRect(x - 30, y - 50, 60, 50);
    // Janelas
    ctx.fillStyle = "#ffff00";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        ctx.fillRect(x - 25 + i * 15, y - 45 + j * 10, 8, 8);
      }
    }
  }
}

function drawGrass(ctx: CanvasRenderingContext2D, y: number, width: number) {
  ctx.fillStyle = "#22c55e";
  ctx.fillRect(0, y, width, 30);
  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 10) {
    ctx.beginPath();
    ctx.moveTo(i, y);
    ctx.lineTo(i + 5, y - 5);
    ctx.stroke();
  }
}

// PLANO INCLINADO COM 3 MODOS
function drawInclinedPlane(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const angle = parameters.angle || 30;
  const mode = parameters.mode || 0; // 0: descendo, 1: subindo, 2: repouso
  const mu = parameters.mu || 0.2;

  const angleRad = (angle * Math.PI) / 180;
  const g = 9.8;

  // Desenhar triângulo retângulo
  const baseX = 100;
  const baseY = height - 50;
  const triHeight = 200;
  const triBase = triHeight / Math.tan(angleRad);

  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(baseX, baseY);
  ctx.lineTo(baseX + triBase, baseY);
  ctx.lineTo(baseX, baseY - triHeight);
  ctx.closePath();
  ctx.stroke();

  // Objeto no plano
  const objDist = 150;
  const objX = baseX + objDist * Math.cos(angleRad);
  const objY = baseY - objDist * Math.sin(angleRad);

  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(objX, objY, 12, 0, Math.PI * 2);
  ctx.fill();

  // Forças
  const m = 1;
  const P = m * g;
  const N = m * g * Math.cos(angleRad);
  const Pparallel = m * g * Math.sin(angleRad);
  const f = mu * N;

  // Peso (vertical para baixo)
  drawArrow(ctx, objX, objY, objX, objY + 40, "#ef4444", "P");

  // Normal (perpendicular ao plano)
  const normalX = objX - N * Math.sin(angleRad) / 50;
  const normalY = objY - N * Math.cos(angleRad) / 50;
  drawArrow(ctx, objX, objY, normalX, normalY, "#10b981", "N");

  if (mode === 0) {
    // Descendo - atrito para cima
    const frictionX = objX - (f * Math.cos(angleRad) / 50);
    const frictionY = objY + (f * Math.sin(angleRad) / 50);
    drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");
    
    const a = g * (Math.sin(angleRad) - mu * Math.cos(angleRad));
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 12px Arial";
    ctx.fillText(`Modo: Descendo`, 10, 20);
    ctx.fillText(`a = g(sinθ - μcosθ) = ${a.toFixed(2)} m/s²`, 10, 35);
  } else if (mode === 1) {
    // Subindo - atrito para baixo
    const frictionX = objX + (f * Math.cos(angleRad) / 50);
    const frictionY = objY - (f * Math.sin(angleRad) / 50);
    drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f");
    
    const a = -g * (Math.sin(angleRad) + mu * Math.cos(angleRad));
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 12px Arial";
    ctx.fillText(`Modo: Subindo`, 10, 20);
    ctx.fillText(`a = -g(sinθ + μcosθ) = ${a.toFixed(2)} m/s²`, 10, 35);
  } else {
    // Repouso - atrito estático
    const fStatic = Pparallel;
    const frictionX = objX - (fStatic * Math.cos(angleRad) / 50);
    const frictionY = objY + (fStatic * Math.sin(angleRad) / 50);
    drawArrow(ctx, objX, objY, frictionX, frictionY, "#8b5cf6", "f_s");
    
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 12px Arial";
    ctx.fillText(`Modo: Repouso`, 10, 20);
    ctx.fillText(`f_s = mg·sinθ = ${fStatic.toFixed(2)} N (necessária)`, 10, 35);
  }

  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`θ = ${angle}°, μ = ${mu.toFixed(2)}`, 10, 50);
}

// LANÇAMENTO VERTICAL DO SOLO
function drawLaunchVerticalGround(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const v0 = parameters.v0 || 20;
  const g = 9.8;

  // Tempo de subida e altura máxima
  const tSubida = v0 / g;
  const hMax = (v0 * v0) / (2 * g);
  const tTotal = 2 * tSubida;

  const x = width / 2;
  const scale = 0.8;
  const y = height - 80 - (v0 * frameCount * scale - 0.5 * g * frameCount * frameCount * scale * 0.1);

  // Gramado
  drawGrass(ctx, height - 50, width);

  if (y < height - 50) {
    // Objeto
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, height - 50, 10, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Objeto
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Trajetória
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i <= frameCount; i++) {
      const ty = height - 80 - (v0 * i * scale - 0.5 * g * i * i * scale * 0.1);
      if (i === 0) ctx.moveTo(x, ty);
      else ctx.lineTo(x, ty);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Velocidade
    const vy = v0 * scale - g * frameCount * scale * 0.1;
    drawArrow(ctx, x, y, x, y + vy * 2, "#ef4444", "v");
  }

  // Cálculos
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 12px Arial";
  ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s`, 10, 20);
  ctx.fillText(`h_máx = v₀²/(2g) = ${hMax.toFixed(1)} m`, 10, 35);
  ctx.fillText(`t_subida = v₀/g = ${tSubida.toFixed(2)} s`, 10, 50);
  ctx.fillText(`t_total = 2v₀/g = ${tTotal.toFixed(2)} s`, 10, 65);
}

// LANÇAMENTO VERTICAL DE PRÉDIO
function drawLaunchVerticalBuilding(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const v0 = parameters.v0 || 15;
  const h0 = parameters.h0 || 20; // altura do prédio em metros
  const g = 9.8;

  // Cálculos
  const tSubida = v0 / g;
  const hMax = h0 + (v0 * v0) / (2 * g);
  const tDescida = Math.sqrt(2 * h0 / g + (v0 * v0) / (g * g)) + v0 / g;

  // Prédio (não muda de tamanho)
  const buildingX = 100;
  const buildingY = height - 80;
  drawBuilding(ctx, buildingX, buildingY, h0);

  // Objeto
  const x = buildingX;
  const scale = 0.5;
  const y = buildingY - 80 - (v0 * frameCount * scale - 0.5 * g * frameCount * frameCount * scale * 0.1);

  if (y < height - 50) {
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, height - 50, 10, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Trajetória
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i <= frameCount; i++) {
      const ty = buildingY - 80 - (v0 * i * scale - 0.5 * g * i * i * scale * 0.1);
      if (i === 0) ctx.moveTo(x, ty);
      else ctx.lineTo(x, ty);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Cálculos
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 11px Arial";
  ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s, h₀ = ${h0.toFixed(1)} m`, 10, 20);
  ctx.fillText(`h_máx = ${hMax.toFixed(1)} m`, 10, 33);
  ctx.fillText(`t_subida = ${tSubida.toFixed(2)} s`, 10, 46);
  ctx.fillText(`t_total = ${tDescida.toFixed(2)} s`, 10, 59);
}

// LANÇAMENTO OBLÍQUO DO SOLO
function drawLaunchOblique(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const v0 = parameters.v0 || 25;
  const angle = parameters.angle || 45;
  const g = 9.8;

  const angleRad = (angle * Math.PI) / 180;
  const vx = v0 * Math.cos(angleRad);
  const vy0 = v0 * Math.sin(angleRad);

  // Cálculos
  const tSubida = vy0 / g;
  const hMax = (vy0 * vy0) / (2 * g);
  const tTotal = 2 * tSubida;
  const alcance = vx * tTotal;

  // Gramado
  drawGrass(ctx, height - 50, width);

  // Objeto
  const x = 50 + vx * frameCount * 1.5;
  const y = height - 80 - (vy0 * frameCount * 1.5 - 0.5 * g * frameCount * frameCount * 0.15);

  if (y < height - 50 || x > width - 50) {
    // Fora da tela
  } else {
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Trajetória
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i <= frameCount; i++) {
      const tx = 50 + vx * i * 1.5;
      const ty = height - 80 - (vy0 * i * 1.5 - 0.5 * g * i * i * 0.15);
      if (i === 0) ctx.moveTo(tx, ty);
      else ctx.lineTo(tx, ty);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Cálculos
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 11px Arial";
  ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s, θ = ${angle}°`, 10, 20);
  ctx.fillText(`h_máx = ${hMax.toFixed(1)} m`, 10, 33);
  ctx.fillText(`t_subida = ${tSubida.toFixed(2)} s`, 10, 46);
  ctx.fillText(`t_descida = ${tSubida.toFixed(2)} s`, 10, 59);
  ctx.fillText(`Alcance = ${alcance.toFixed(1)} m`, 10, 72);
}

// LANÇAMENTO OBLÍQUO DE PRÉDIO
function drawLaunchObliqueBuilding(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const v0 = parameters.v0 || 20;
  const angle = parameters.angle || 45;
  const h0 = parameters.h0 || 30;
  const g = 9.8;

  const angleRad = (angle * Math.PI) / 180;
  const vx = v0 * Math.cos(angleRad);
  const vy0 = v0 * Math.sin(angleRad);

  // Cálculos
  const tSubida = vy0 / g;
  const hMax = h0 + (vy0 * vy0) / (2 * g);
  const tTotal = (vy0 + Math.sqrt(vy0 * vy0 + 2 * g * h0)) / g;
  const alcance = vx * tTotal;

  // Prédio (não muda)
  const buildingX = 50;
  const buildingY = height - 80;
  drawBuilding(ctx, buildingX, buildingY, h0);

  // Objeto
  const x = buildingX + vx * frameCount * 1.2;
  const y = buildingY - 60 - (vy0 * frameCount * 1.2 - 0.5 * g * frameCount * frameCount * 0.12);

  if (y < height - 50 || x > width - 50) {
    // Fora da tela
  } else {
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Trajetória
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i <= frameCount; i++) {
      const tx = buildingX + vx * i * 1.2;
      const ty = buildingY - 60 - (vy0 * i * 1.2 - 0.5 * g * i * i * 0.12);
      if (i === 0) ctx.moveTo(tx, ty);
      else ctx.lineTo(tx, ty);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Cálculos
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 10px Arial";
  ctx.fillText(`v₀ = ${v0.toFixed(1)} m/s, θ = ${angle}°, h₀ = ${h0.toFixed(1)} m`, 10, 20);
  ctx.fillText(`h_máx = ${hMax.toFixed(1)} m`, 10, 31);
  ctx.fillText(`t_subida = ${tSubida.toFixed(2)} s`, 10, 42);
  ctx.fillText(`t_total = ${tTotal.toFixed(2)} s`, 10, 53);
  ctx.fillText(`Alcance = ${alcance.toFixed(1)} m`, 10, 64);
}

// Funções antigas mantidas para compatibilidade
function drawAcceleration(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const v0 = parameters.v0 || 0;
  const a = parameters.a || 0.5;
  const y = height - 80;
  const x = 50 + (v0 * frameCount + 0.5 * a * frameCount * frameCount) * 0.5;

  ctx.fillStyle = "#ef4444";
  ctx.fillRect(Math.min(x, width - 30), y, 30, 30);

  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
  ctx.fillText(`v = ${(v0 + a * frameCount).toFixed(1)} m/s`, 10, 20);
}

function drawFreeFall(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const g = parameters.g || 9.8;
  const y = 50 + (0.5 * g * frameCount * frameCount) * 0.3;
  const x = width / 2;

  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(x, Math.min(y, height - 20), 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 14px Arial";
  ctx.fillText(`v = ${(g * frameCount).toFixed(1)} m/s`, 10, 20);
}

function drawCircular(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const r = parameters.r || 80;
  const w = parameters.w || 0.03;
  const centerX = width / 2;
  const centerY = height / 2;
  const angle = w * frameCount;
  const x = centerX + r * Math.cos(angle);
  const y = centerY + r * Math.sin(angle);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawCollision(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  const m1 = parameters.m1 || 1;
  const m2 = parameters.m2 || 1;
  const v1Initial = parameters.v1 || 3;
  const v2Initial = parameters.v2 || 0;

  const collisionFrame = 100;
  let x1, x2, v1Current, v2Current;
  
  const v1After = ((m1 - m2) * v1Initial + 2 * m2 * v2Initial) / (m1 + m2);
  const v2After = ((m2 - m1) * v2Initial + 2 * m1 * v1Initial) / (m1 + m2);
  const pInitial = m1 * v1Initial + m2 * v2Initial;
  const pFinal = m1 * v1After + m2 * v2After;
  
  if (frameCount < collisionFrame) {
    x1 = 80 + v1Initial * frameCount * 2;
    x2 = width - 80 - v2Initial * frameCount * 2;
    v1Current = v1Initial;
    v2Current = v2Initial;
  } else {
    const t = frameCount - collisionFrame;
    x1 = width / 2 - 60 + v1After * t * 2;
    x2 = width / 2 + 60 + v2After * t * 2;
    v1Current = v1After;
    v2Current = v2After;
  }

  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(Math.max(50, Math.min(x1, width - 50)), height / 2, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(Math.max(50, Math.min(x2, width - 50)), height / 2, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 11px Arial";
  if (frameCount < collisionFrame) {
    ctx.fillText(`Antes da colisao`, 10, 20);
  } else {
    ctx.fillText(`Apos colisao`, 10, 20);
  }
  ctx.fillText(`p_inicial = ${pInitial.toFixed(2)} kg.m/s`, 10, 35);
  ctx.fillText(`p_final = ${pFinal.toFixed(2)} kg.m/s`, 10, 50);
  ctx.fillText(`v1 = ${v1Current.toFixed(2)} m/s`, 10, 65);
  ctx.fillText(`v2 = ${v2Current.toFixed(2)} m/s`, 10, 80);
}

function drawHorizontalLaunch(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  // Placeholder
}

function drawVerticalLaunch(ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number, parameters: Record<string, number>) {
  // Placeholder
}
