import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface CentripetalForceSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const CentripetalForceSimulator: React.FC<CentripetalForceSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [radius, setRadius] = useState(100);
  const [angularVelocity, setAngularVelocity] = useState(2); // rad/s
  const [mass, setMass] = useState(1);
  
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const angleRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Cálculos
  const linearVelocity = angularVelocity * (radius / 50); // Escala visual
  const centripetalAccel = (linearVelocity * linearVelocity) / (radius / 50);
  const centripetalForce = mass * centripetalAccel;

  useEffect(() => {
    angleRef.current = 0;
    frameCountRef.current = 0;
    lastTimeRef.current = performance.now();
  }, [resetTrigger, radius, angularVelocity, mass]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (time: number) => {
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (isRunning) {
        angleRef.current += angularVelocity * dt;
      }

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Limpar
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      // Trajetória
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#cbd5e1";
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Objeto
      const objX = centerX + radius * Math.cos(angleRef.current);
      const objY = centerY + radius * Math.sin(angleRef.current);

      // Vetor Velocidade (Tangencial)
      const vX = -Math.sin(angleRef.current) * 40;
      const vY = Math.cos(angleRef.current) * 40;
      drawArrow(ctx, objX, objY, objX + vX, objY + vY, "#22c55e", "v");

      // Vetor Força Centrípeta (Radial)
      const fX = -Math.cos(angleRef.current) * 40;
      const fY = -Math.sin(angleRef.current) * 40;
      drawArrow(ctx, objX, objY, objX + fX, objY + fY, "#ef4444", "Fcp");

      // Corpo
      ctx.beginPath();
      ctx.arc(objX, objY, 10 + mass * 2, 0, Math.PI * 2);
      ctx.fillStyle = "#3b82f6";
      ctx.fill();
      ctx.strokeStyle = "#1e40af";
      ctx.stroke();

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, radius, angularVelocity, mass]);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Raio (<MathFormula formula={String.raw`$R$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(radius / 50, "m")}</span>
            </div>
            <Slider
              value={[radius]}
              onValueChange={(value) => setRadius(value[0])}
              min={50}
              max={150}
              step={10}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Vel. Angular (<MathFormula formula={String.raw`$\omega$`} />)</label>
              <span className="text-sm font-bold text-green-600">{formatUnit(angularVelocity, "rad/s")}</span>
            </div>
            <Slider
              value={[angularVelocity]}
              onValueChange={(value) => setAngularVelocity(value[0])}
              min={0.5}
              max={5}
              step={0.1}
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
              max={5}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Análise Dinâmica</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Aceleração Centrípeta</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ a_{cp} = \omega^2 R = ${formatNumber(angularVelocity)}^2 \cdot ${formatNumber(radius/50)} = ${formatUnit(angularVelocity * angularVelocity * (radius/50), "m/s^2")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Força Centrípeta Resultante</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ F_{cp} = m \cdot a_{cp} = ${formatNumber(mass)} \cdot ${formatNumber(angularVelocity * angularVelocity * (radius/50))} = ${formatUnit(mass * angularVelocity * angularVelocity * (radius/50), "N")} $$`} />
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
};

function drawArrow(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number, color: string, label: string) {
    const headlen = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);

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

    ctx.font = "bold 12px Arial";
    ctx.fillText(label, toX + 10, toY);
}
