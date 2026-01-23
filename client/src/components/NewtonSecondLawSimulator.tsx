import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface NewtonSecondLawSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const NewtonSecondLawSimulator: React.FC<NewtonSecondLawSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [force, setForce] = useState(10);
  const [mass, setMass] = useState(2);
  const [frictionCoef, setFrictionCoef] = useState(0);
  
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Cálculos Físicos
  const g = 9.8;
  const normalForce = mass * g;
  const maxFriction = frictionCoef * normalForce;
  
  // Aceleração
  let acceleration = 0;
  let frictionForce = 0;

  if (Math.abs(velocityRef.current) > 0.001) {
    // Em movimento: atrito cinético oposto à velocidade
    frictionForce = frictionCoef * normalForce * Math.sign(velocityRef.current);
    const netForce = force - frictionForce;
    acceleration = netForce / mass;
  } else {
    // Repouso: atrito estático
    if (Math.abs(force) > maxFriction) {
      frictionForce = maxFriction * Math.sign(force);
      const netForce = force - frictionForce;
      acceleration = netForce / mass;
    } else {
      frictionForce = force;
      acceleration = 0;
    }
  }

  useEffect(() => {
    positionRef.current = 0;
    velocityRef.current = 0;
    frameCountRef.current = 0;
    lastTimeRef.current = performance.now();
  }, [resetTrigger, mass, force, frictionCoef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (time: number) => {
      const dt = (time - lastTimeRef.current) / 1000; // Delta time em segundos
      lastTimeRef.current = time;

      if (isRunning) {
        // Atualizar física (Euler integration)
        // Recalcular aceleração a cada frame para lidar com mudanças de sentido do atrito
        let currentAccel = 0;
        let currentFriction = 0;

        if (Math.abs(velocityRef.current) > 0.001) {
            currentFriction = frictionCoef * normalForce * Math.sign(velocityRef.current);
            currentAccel = (force - currentFriction) / mass;
        } else {
             if (Math.abs(force) > maxFriction) {
                currentFriction = maxFriction * Math.sign(force);
                currentAccel = (force - currentFriction) / mass;
            } else {
                currentFriction = force;
                currentAccel = 0;
            }
        }

        velocityRef.current += currentAccel * dt;
        positionRef.current += velocityRef.current * dt;
      }

      // Desenhar
      const width = canvas.width;
      const height = canvas.height;
      
      // Limpar
      ctx.clearRect(0, 0, width, height);

      // Chão
      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(0, height - 100, width, 100);
      
      // Marcações de distância
      ctx.strokeStyle = "#94a3b8";
      ctx.beginPath();
      for(let i = 0; i < width; i+=50) {
          ctx.moveTo(i, height - 100);
          ctx.lineTo(i, height - 90);
      }
      ctx.stroke();

      // Bloco
      const scale = 50; // pixels por metro
      const blockWidth = 60 + mass * 5; // Tamanho visual depende da massa
      const blockHeight = 40 + mass * 5;
      
      // Posição visual (com wrap-around ou câmera seguindo)
      // Vamos fazer câmera fixa por enquanto, bloco se move
      const visualX = 50 + positionRef.current * scale;
      const visualY = height - 100 - blockHeight;

      // Se sair da tela, resetar visualmente (loop infinito) ou limitar?
      // Vamos limitar visualmente para não sumir
      const clampedVisualX = Math.min(Math.max(visualX, 0), width - blockWidth);

      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(clampedVisualX, visualY, blockWidth, blockHeight);
      ctx.strokeStyle = "#1e40af";
      ctx.strokeRect(clampedVisualX, visualY, blockWidth, blockHeight);
      
      // Texto Massa
      ctx.fillStyle = "white";
      ctx.font = "bold 14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${mass}kg`, clampedVisualX + blockWidth/2, visualY + blockHeight/2 + 5);

      // Vetores de Força
      const centerX = clampedVisualX + blockWidth/2;
      const centerY = visualY + blockHeight/2;

      // Força Aplicada (F)
      if (force !== 0) {
        drawArrow(ctx, centerX, centerY, centerX + force * 5, centerY, "#ef4444", "F");
      }

      // Força de Atrito (Fat)
      let currentFrictionDraw = 0;
       if (Math.abs(velocityRef.current) > 0.001) {
            currentFrictionDraw = frictionCoef * normalForce * Math.sign(velocityRef.current);
        } else {
             if (Math.abs(force) > maxFriction) {
                currentFrictionDraw = maxFriction * Math.sign(force);
            } else {
                currentFrictionDraw = force;
            }
        }
      
      if (currentFrictionDraw !== 0) {
          // Atrito é oposto ao movimento ou à tendência de movimento
          // Se v > 0, Fat < 0. Se v=0 e F>0, Fat < 0.
          // O cálculo acima já dá o sinal correto se usarmos a lógica certa.
          // Mas para desenhar, queremos a seta saindo do centro ou da base? Centro para simplificar.
          // O valor calculado `currentFrictionDraw` tem o mesmo sinal da força se estivermos parados?
          // Não, atrito se opõe.
          
          // Correção visual: Atrito sempre oposto à velocidade (se v!=0) ou oposto à Força (se v=0)
          let frictionDir = 0;
          if (Math.abs(velocityRef.current) > 0.001) {
              frictionDir = -Math.sign(velocityRef.current);
          } else {
              frictionDir = -Math.sign(force);
          }
          
          const frictionMag = Math.abs(currentFrictionDraw);
          drawArrow(ctx, centerX, visualY + blockHeight, centerX + frictionDir * frictionMag * 5, visualY + blockHeight, "#d97706", "Fat");
      }

      // Normal e Peso
      drawArrow(ctx, centerX, visualY + blockHeight, centerX, visualY + blockHeight - normalForce * 2, "#22c55e", "N");
      drawArrow(ctx, centerX, visualY + blockHeight, centerX, visualY + blockHeight + normalForce * 2, "#22c55e", "P");

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isRunning, mass, force, frictionCoef, maxFriction, normalForce]);

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center bg-slate-50 p-4 rounded-lg overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full max-w-full border border-slate-300 rounded"
        />
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Força Aplicada (<MathFormula formula={String.raw`$F$`} />)</label>
              <span className="text-sm font-bold text-red-600">{formatUnit(force, "N")}</span>
            </div>
            <Slider
              value={[force]}
              onValueChange={(value) => setForce(value[0])}
              min={-50}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Massa (<MathFormula formula={String.raw`$m$`} />)</label>
              <span className="text-sm font-bold text-blue-600">{formatUnit(mass, "kg")}</span>
            </div>
            <Slider
              value={[mass]}
              onValueChange={(value) => setMass(value[0])}
              min={1}
              max={20}
              step={0.5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Coef. Atrito (<MathFormula formula={String.raw`$\mu$`} />)</label>
              <span className="text-sm font-bold text-orange-600">{formatNumber(frictionCoef, 2)}</span>
            </div>
            <Slider
              value={[frictionCoef]}
              onValueChange={(value) => setFrictionCoef(value[0])}
              min={0}
              max={1}
              step={0.05}
              className="w-full"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Análise Dinâmica</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Força Resultante</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ F_{res} = F - F_{at} = ${formatNumber(force)} - ${formatNumber(Math.abs(frictionForce) * Math.sign(force))} = ${formatUnit(force - (Math.abs(frictionForce) * Math.sign(force)), "N")} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Aceleração (2ª Lei de Newton)</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ a = \frac{F_{res}}{m} = \frac{${formatNumber(force - (Math.abs(frictionForce) * Math.sign(force)))}}{${formatNumber(mass)}} = ${formatUnit(acceleration, "m/s^2")} $$`} />
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
    const length = Math.sqrt(dx*dx + dy*dy);

    if (length < 5) return; // Não desenhar setas muito pequenas

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

    // Label
    ctx.fillStyle = color;
    ctx.font = "bold 12px Arial";
    ctx.fillText(label, toX + 10, toY);
}
