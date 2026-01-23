import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITADynamicsTheory } from "@/content/dynamics/ita_dynamics_theory";

interface CollisionSimulatorProps {
  isRunning: boolean;
  resetTrigger: number;
}

export const CollisionSimulator: React.FC<CollisionSimulatorProps> = ({
  isRunning,
  resetTrigger,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(1);
  const [v1Initial, setV1Initial] = useState(4);
  const [v2Initial, setV2Initial] = useState(0);
  const frameCountRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  // Cálculos de colisão elástica unidimensional
  const v1After = ((m1 - m2) * v1Initial + 2 * m2 * v2Initial) / (m1 + m2);
  const v2After = ((m2 - m1) * v2Initial + 2 * m1 * v1Initial) / (m1 + m2);
  const pInitial = m1 * v1Initial + m2 * v2Initial;
  const pFinal = m1 * v1After + m2 * v2After;
  const ecInitial = 0.5 * m1 * v1Initial * v1Initial + 0.5 * m2 * v2Initial * v2Initial;
  const ecFinal = 0.5 * m1 * v1After * v1After + 0.5 * m2 * v2After * v2After;

  // Fator de velocidade da animação
  const speedFactor = 0.5;

  useEffect(() => {
    frameCountRef.current = 0;
  }, [resetTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const collisionFrame = 80;

    const animate = () => {
      // Fundo
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

      let x1, x2, v1Current, v2Current;

      // Ajuste de velocidade da animação
      const currentFrame = frameCountRef.current * speedFactor;

      if (currentFrame < collisionFrame) {
        // Antes da colisão
        x1 = 80 + v1Initial * currentFrame * 2.5;
        x2 = width - 80 - v2Initial * currentFrame * 2.5;
        v1Current = v1Initial;
        v2Current = v2Initial;
      } else {
        // Depois da colisão
        const t = currentFrame - collisionFrame;
        x1 = width / 2 - 60 + v1After * t * 2.5;
        x2 = width / 2 + 60 + v2After * t * 2.5;
        v1Current = v1After;
        v2Current = v2After;
      }

      // Desenhar objeto 1 (azul)
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.arc(x1, height / 2, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#1e40af";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Desenhar objeto 2 (vermelho)
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(x2, height / 2, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#991b1b";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Desenhar velocidades (setas)
      drawArrow(ctx, x1, height / 2 - 40, x1 + v1Current * 20, height / 2 - 40, "#3b82f6", 3);
      drawArrow(ctx, x2, height / 2 - 40, x2 + v2Current * 20, height / 2 - 40, "#ef4444", 3);

      // Textos no Canvas
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`m₁ = ${formatUnit(m1, "kg")}`, x1 - 30, height / 2 + 45);
      ctx.fillText(`m₂ = ${formatUnit(m2, "kg")}`, x2 - 30, height / 2 + 45);
      ctx.fillText(`v₁ = ${formatUnit(v1Current, "m/s")}`, x1 - 40, height / 2 - 55);
      ctx.fillText(`v₂ = ${formatUnit(v2Current, "m/s")}`, x2 - 40, height / 2 - 55);

      // Status
      ctx.font = "bold 13px Arial";
      if (currentFrame < collisionFrame) {
        ctx.fillText("ANTES DA COLISÃO", 10, 25);
      } else {
        ctx.fillText("APÓS COLISÃO", 10, 25);
      }

      // Informações de conservação
      ctx.font = "11px Arial";
      ctx.fillText(`p_inicial = ${formatUnit(pInitial, "kg·m/s")}`, 10, 45);
      ctx.fillText(`p_final = ${formatUnit(pFinal, "kg·m/s")}`, 10, 60);
      ctx.fillText(`Δp = ${formatUnit(Math.abs(pInitial - pFinal), "kg·m/s")}`, 10, 75);
      ctx.fillText(`EC_inicial = ${formatUnit(ecInitial, "J")}`, 10, 90);
      ctx.fillText(`EC_final = ${formatUnit(ecFinal, "J")}`, 10, 105);

      if (isRunning) {
        if (currentFrame > 200) {
          frameCountRef.current = 0;
        } else {
          frameCountRef.current += 1;
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
  }, [isRunning, m1, m2, v1Initial, v2Initial, v1After, v2After]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Objeto 1 */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Objeto 1 (Azul)</h4>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Massa (m₁)</label>
                <span className="text-sm font-bold text-blue-600">{formatUnit(m1, "kg")}</span>
              </div>
              <Slider
                value={[m1]}
                onValueChange={(value) => setM1(value[0])}
                min={0.5}
                max={5}
                step={0.1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v₁)</label>
                <span className="text-sm font-bold text-blue-600">{formatUnit(v1Initial, "m/s")}</span>
              </div>
              <Slider
                value={[v1Initial]}
                onValueChange={(value) => setV1Initial(value[0])}
                min={0}
                max={8}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          {/* Objeto 2 */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Objeto 2 (Vermelho)</h4>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Massa (m₂)</label>
                <span className="text-sm font-bold text-red-600">{formatUnit(m2, "kg")}</span>
              </div>
              <Slider
                value={[m2]}
                onValueChange={(value) => setM2(value[0])}
                min={0.5}
                max={5}
                step={0.1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Velocidade Inicial (v₂)</label>
                <span className="text-sm font-bold text-red-600">{formatUnit(v2Initial, "m/s")}</span>
              </div>
              <Slider
                value={[v2Initial]}
                onValueChange={(value) => setV2Initial(value[0])}
                min={0}
                max={8}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
          <h4 className="font-bold text-slate-900">Resultados da Colisão</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-600">Velocidade 1 após (<MathFormula formula={String.raw`$v'_1$`} />):</p>
              <p className="font-bold text-blue-600">{formatUnit(v1After, "m/s")}</p>
            </div>
            <div>
              <p className="text-slate-600">Velocidade 2 após (<MathFormula formula={String.raw`$v'_2$`} />):</p>
              <p className="font-bold text-red-600">{formatUnit(v2After, "m/s")}</p>
            </div>
            <div>
              <p className="text-slate-600">Momento inicial (<MathFormula formula={String.raw`$p_i$`} />):</p>
              <p className="font-bold text-slate-900">{formatUnit(pInitial, "kg·m/s")}</p>
            </div>
            <div>
              <p className="text-slate-600">Momento final (<MathFormula formula={String.raw`$p_f$`} />):</p>
              <p className="font-bold text-slate-900">{formatUnit(pFinal, "kg·m/s")}</p>
            </div>
            <div>
              <p className="text-slate-600">Energia cinética inicial (<MathFormula formula={String.raw`$E_{ci}$`} />):</p>
              <p className="font-bold text-slate-900">{formatUnit(ecInitial, "J")}</p>
            </div>
            <div>
              <p className="text-slate-600">Energia cinética final (<MathFormula formula={String.raw`$E_{cf}$`} />):</p>
              <p className="font-bold text-slate-900">{formatUnit(ecFinal, "J")}</p>
            </div>
          </div>
        </div>

        {/* Cálculos Detalhados */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
          <h4 className="font-bold text-slate-900">Cálculos Detalhados</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Conservação do Momento Linear</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ m_1 v_1 + m_2 v_2 = m_1 v'_1 + m_2 v'_2 $$`} />
                <div className="mt-2"></div>
                <MathFormula formula={String.raw`$$ ${formatNumber(m1)} \cdot ${formatNumber(v1Initial)} + ${formatNumber(m2)} \cdot ${formatNumber(v2Initial)} = ${formatNumber(pInitial)} \text{ kg·m/s} $$`} />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Velocidades Finais (Colisão Elástica)</p>
              <div className="bg-white p-3 rounded border border-slate-200 overflow-x-auto">
                <MathFormula formula={String.raw`$$ v'_1 = \frac{(m_1 - m_2)v_1 + 2m_2v_2}{m_1 + m_2} = \frac{(${formatNumber(m1)} - ${formatNumber(m2)}) \cdot ${formatNumber(v1Initial)} + 2 \cdot ${formatNumber(m2)} \cdot ${formatNumber(v2Initial)}}{${formatNumber(m1)} + ${formatNumber(m2)}} = ${formatUnit(v1After, "m/s")} $$`} />
                <div className="mt-4"></div>
                <MathFormula formula={String.raw`$$ v'_2 = \frac{(m_2 - m_1)v_2 + 2m_1v_1}{m_1 + m_2} = \frac{(${formatNumber(m2)} - ${formatNumber(m1)}) \cdot ${formatNumber(v2Initial)} + 2 \cdot ${formatNumber(m1)} \cdot ${formatNumber(v1Initial)}}{${formatNumber(m1)} + ${formatNumber(m2)}} = ${formatUnit(v2After, "m/s")} $$`} />
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

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  width: number
) {
  const headlen = 15;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;

  // Linha
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  // Cabeça da seta
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}
