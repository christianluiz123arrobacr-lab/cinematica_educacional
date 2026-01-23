import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAKinematicsTheory } from "@/content/kinematics/ita_kinematics_theory";

interface CircularMotionSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const CircularMotionSimulator: React.FC<CircularMotionSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [radius, setRadius] = useState(2);
  const [period, setPeriod] = useState(4);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const speedFactor = 0.5;
  
  // Cálculos MCU
  // ω = 2π/T
  const omega = (2 * Math.PI) / period;
  // v = ωr
  const v = omega * radius;
  // acp = v²/r = ω²r
  const acp = omega * omega * radius;
  // f = 1/T
  const frequency = 1 / period;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger, radius, period]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Escala: pixels por metro (ajustar para caber na tela)
    // Raio máximo é 5m, tela tem ~400px de altura útil. 5m -> 150px => 30px/m
    const scale = 30;

    const animate = () => {
      // Fundo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      for (let i = 0; i <= width; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let i = 0; i <= height; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      // Trajetória Circular
      const visualRadius = radius * scale;
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, visualRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Centro
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText("O", centerX + 5, centerY + 15);

      // Tempo atual
      const t = (frameCountRef.current / 60) * speedFactor;
      
      // Ângulo atual: θ = θ0 + ωt (θ0 = 0)
      // No canvas, 0 é direita, sentido horário é positivo.
      // Na física, geralmente anti-horário é positivo. Vamos usar anti-horário (subtrair ângulo).
      const theta = omega * t;
      
      // Posição do objeto
      const objX = centerX + visualRadius * Math.cos(-theta);
      const objY = centerY + visualRadius * Math.sin(-theta);

      // Desenhar raio vetor
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(objX, objY);
      ctx.stroke();

      // Objeto
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.arc(objX, objY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Vetor Velocidade (Tangencial)
      // Perpendicular ao raio. Se raio está em -theta, v está em -theta - 90 (ou +90 dependendo do sentido)
      // Sentido anti-horário: v aponta para "frente"
      const vAngle = -theta - Math.PI / 2;
      const vLen = v * 10; // Escala visual
      const vx = vLen * Math.cos(vAngle);
      const vy = vLen * Math.sin(vAngle);
      
      drawArrow(ctx, objX, objY, objX + vx, objY + vy, "#ef4444", 2);
      ctx.fillStyle = "#ef4444";
      ctx.fillText("v", objX + vx + 5, objY + vy);

      // Vetor Aceleração Centrípeta (Radial)
      // Aponta para o centro
      const acpLen = acp * 5; // Escala visual
      const acpAngle = -theta + Math.PI; // Oposto ao raio
      const ax = acpLen * Math.cos(acpAngle);
      const ay = acpLen * Math.sin(acpAngle);

      drawArrow(ctx, objX, objY, objX + ax, objY + ay, "#8b5cf6", 2);
      ctx.fillStyle = "#8b5cf6";
      ctx.fillText("acp", objX + ax + 5, objY + ay);

      // HUD
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(10, 10, 180, 80);
      ctx.strokeStyle = "#cbd5e1";
      ctx.strokeRect(10, 10, 180, 80);
      
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`Tempo: ${formatUnit(t, "s")}`, 20, 30);
      ctx.fillText(`Ângulo: ${formatNumber((theta * 180 / Math.PI) % 360, 0)}°`, 20, 50);
      ctx.fillText(`Voltas: ${Math.floor(theta / (2 * Math.PI))}`, 20, 70);

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
  }, [isRunning, radius, period, omega, v, acp]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Raio (<MathFormula formula={String.raw`$R$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(radius, "m")}</span>
            </div>
            <Slider
              value={[radius]}
              onValueChange={(value) => setRadius(value[0])}
              min={0.5}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Período (<MathFormula formula={String.raw`$T$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(period, "s")}</span>
            </div>
            <Slider
              value={[period]}
              onValueChange={(value) => setPeriod(value[0])}
              min={1}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <h4 className="font-bold text-slate-900">Grandezas Calculadas</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Frequência (<MathFormula formula={String.raw`$f$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(frequency, "Hz")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Vel. Angular (<MathFormula formula={String.raw`$\omega$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(omega, "rad/s")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Vel. Linear (<MathFormula formula={String.raw`$v$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(v, "m/s")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Acel. Centrípeta (<MathFormula formula={String.raw`$a_{cp}$`} />):</span>
              <span className="font-bold text-slate-900">{formatUnit(acp, "m/s²")}</span>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculos Detalhados</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">
                Frequência e Velocidade Angular:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ f = \frac{1}{T} = \frac{1}{${formatNumber(period)}} = ${formatUnit(frequency, "Hz")} $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ \omega = \frac{2\pi}{T} = 2\pi \cdot f = ${formatUnit(omega, "rad/s")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">
                Velocidade Linear e Aceleração Centrípeta:
              </p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v = \omega \cdot R = ${formatNumber(omega)} \cdot ${formatNumber(radius)} = ${formatUnit(v, "m/s")} $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ a_{cp} = \frac{v^2}{R} = \omega^2 \cdot R = ${formatNumber(omega)}^2 \cdot ${formatNumber(radius)} = ${formatUnit(acp, "m/s²")} $$`} />
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
