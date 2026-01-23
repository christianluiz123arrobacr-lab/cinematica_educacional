import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAKinematicsTheory } from "@/content/kinematics/ita_kinematics_theory";

interface FreeFallSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const FreeFallSimulator: React.FC<FreeFallSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [h0, setH0] = useState(50);
  const [g, setG] = useState(9.8);
  
  // Estado para controle de tempo preciso
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const animationIdRef = useRef<number | null>(null);

  const maxHeight = 100; // metros representados na tela
  const timeScale = 0.5; // Fator de câmera lenta

  // Reset
  useEffect(() => {
    setElapsedTime(0);
    startTimeRef.current = 0;
    pausedTimeRef.current = 0;
    if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
  }, [resetTrigger, h0, g]);

  // Controle de Animação
  useEffect(() => {
    if (isRunning) {
      if (startTimeRef.current === 0) {
        startTimeRef.current = performance.now() - pausedTimeRef.current;
      } else {
        startTimeRef.current = performance.now() - (pausedTimeRef.current > 0 ? pausedTimeRef.current : 0);
      }

      const animate = (time: number) => {
        const rawTime = (time - startTimeRef.current) / 1000;
        const t = rawTime * timeScale;
        
        setElapsedTime(t);
        
        // h = h0 - 0.5 * g * t^2
        const currentH = h0 - 0.5 * g * t * t;
        
        if (currentH >= 0) {
          animationIdRef.current = requestAnimationFrame(animate);
        } else {
          // Parar no chão
          // Calcular tempo exato de queda para exibir no final
          const t_final = Math.sqrt(2 * h0 / g);
          setElapsedTime(t_final);
        }
      };
      animationIdRef.current = requestAnimationFrame(animate);
    } else {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (startTimeRef.current > 0) {
        pausedTimeRef.current = performance.now() - startTimeRef.current;
      }
    }

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [isRunning]);

  // Renderização do Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scale = height / maxHeight; // Escala vertical

    // Limpar
    ctx.clearRect(0, 0, width, height);

    // Fundo (Céu)
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#3b82f6");
    gradient.addColorStop(1, "#93c5fd");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Chão
    ctx.fillStyle = "#166534";
    ctx.fillRect(0, height - 20, width, 20);

    // Régua Lateral
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";
    ctx.font = "10px Arial";
    
    for (let i = 0; i <= maxHeight; i += 10) {
      const y = height - 20 - (i * scale);
      ctx.beginPath();
      ctx.moveTo(width - 50, y);
      ctx.lineTo(width, y);
      ctx.stroke();
      ctx.fillText(`${i}m`, width - 40, y + 3);
    }

    // Cálculos Físicos
    const t = elapsedTime;
    let currentH = h0 - 0.5 * g * t * t;
    if (currentH < 0) currentH = 0;
    
    const currentV = g * t;
    
    // Desenhar bola
    const ballX = width / 2;
    const ballY = height - 20 - (currentH * scale);
    const radius = 10;

    // Sombra
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    const shadowScale = 1 - (currentH / maxHeight);
    ctx.ellipse(ballX, height - 15, radius * shadowScale * 1.5, radius * shadowScale * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bola
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(ballX, ballY - radius, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Brilho na bola
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.beginPath();
    ctx.arc(ballX - 3, ballY - radius - 3, 3, 0, Math.PI * 2);
    ctx.fill();

    // Vetor velocidade
    if (currentV > 0.1) {
      const arrowLen = currentV * 2; 
      drawArrow(ctx, ballX + 20, ballY - radius, ballX + 20, ballY - radius + arrowLen, "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fillText(`v = ${formatUnit(currentV, "m/s")}`, ballX + 25, ballY);
    }

    // HUD
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.fillRect(10, 10, 180, 70);
    ctx.strokeStyle = "#cbd5e1";
    ctx.strokeRect(10, 10, 180, 70);
    
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 14px Arial";
    ctx.fillText(`Tempo: ${formatUnit(t, "s")}`, 20, 30);
    ctx.fillText(`Altura: ${formatUnit(currentH, "m")}`, 20, 50);
    ctx.fillText(`Velocidade: ${formatUnit(currentV, "m/s")}`, 20, 70);

  }, [elapsedTime, h0, g]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={400}
          height={500}
          className="max-w-full border border-slate-300 rounded shadow-inner"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Altura Inicial (<MathFormula formula={String.raw`$H_0$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(h0, "m")}</span>
            </div>
            <Slider
              value={[h0]}
              onValueChange={(value) => setH0(value[0])}
              min={10}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Gravidade (<MathFormula formula={String.raw`$g$`} />)</label>
              <span className="text-sm font-bold text-purple-600">{formatUnit(g, "m/s²")}</span>
            </div>
            <Slider
              value={[g]}
              onValueChange={(value) => setG(value[0])}
              min={1.6}
              max={24.8}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Queda Livre</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Altura em função do tempo:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ h(t) = H_0 - \frac{1}{2} g t^2 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ h(${formatNumber(elapsedTime, 2)}) = ${formatNumber(h0)} - \frac{1}{2} \cdot ${formatNumber(g)} \cdot (${formatNumber(elapsedTime, 2)})^2 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ h = ${formatUnit(Math.max(0, h0 - 0.5 * g * elapsedTime * elapsedTime), "m")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Velocidade de queda:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v(t) = g \cdot t $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ v = ${formatNumber(g)} \cdot ${formatNumber(elapsedTime, 2)} = ${formatUnit(g * elapsedTime, "m/s")} $$`} />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Tempo total de queda (estimado):
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ t_{queda} = \sqrt{\frac{2 H_0}{g}} = \sqrt{\frac{2 \cdot ${formatNumber(h0)}}{${formatNumber(g)}}} = ${formatUnit(Math.sqrt(2 * h0 / g), "s")} $$`} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Teoria Avançada */}
      <AdvancedTheory
        title={ITAKinematicsTheory.title}
        introduction={ITAKinematicsTheory.introduction}
        sections={ITAKinematicsTheory.sections}
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
  const headlen = 10;
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
