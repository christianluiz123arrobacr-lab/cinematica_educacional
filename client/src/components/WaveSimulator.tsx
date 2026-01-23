import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAWavesTheory } from "@/content/waves/ita_waves_theory";
import { Play, Pause, RefreshCw, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const WaveSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [amplitude, setAmplitude] = useState(50);
  const [frequencia, setFrequencia] = useState(1);
  const [comprimentoOnda, setComprimentoOnda] = useState(200);
  const [tipoOnda, setTipoOnda] = useState("transversal");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVectors, setShowVectors] = useState(false);
  
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  // v = lambda * f
  const velocidade = comprimentoOnda * frequencia; // pixels/s (na escala visual)
  // k = 2*pi / lambda
  const k = (2 * Math.PI) / comprimentoOnda;
  // omega = 2*pi * f
  const omega = 2 * Math.PI * frequencia;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    const animate = () => {
      if (isPlaying) {
        timeRef.current += 0.016; // ~60fps
      }
      const t = timeRef.current;

      ctx.clearRect(0, 0, width, height);
      
      // Fundo com grid suave
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);
      
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      
      // Grid vertical
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Grid horizontal
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Eixo central
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      if (tipoOnda === "transversal") {
        // Onda Transversal (Corda)
        ctx.beginPath();
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Desenhar a corda contínua
        for (let x = 0; x < width; x++) {
          // y(x,t) = A * sin(kx - wt)
          const y = height / 2 + amplitude * Math.sin(k * x - omega * t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Sombra da corda para dar profundidade
        ctx.beginPath();
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
        ctx.lineWidth = 8;
        for (let x = 0; x < width; x++) {
          const y = height / 2 + amplitude * Math.sin(k * x - omega * t) + 4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Partículas na corda
        for (let x = 50; x < width; x += 50) {
          const y = height / 2 + amplitude * Math.sin(k * x - omega * t);
          
          // Desenhar partícula
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Vetores de velocidade (opcional)
          if (showVectors) {
            // v_y = dy/dt = -A*omega*cos(kx - wt)
            const vy = -amplitude * omega * Math.cos(k * x - omega * t);
            const scale = 0.1; // Escala para visualização
            
            ctx.beginPath();
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 2;
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + vy * scale);
            
            // Seta
            const angle = Math.atan2(vy * scale, 0);
            const headLen = 5;
            ctx.lineTo(x - headLen * Math.sin(angle - Math.PI / 6), y + vy * scale - headLen * Math.cos(angle - Math.PI / 6));
            ctx.moveTo(x, y + vy * scale);
            ctx.lineTo(x + headLen * Math.sin(angle + Math.PI / 6), y + vy * scale - headLen * Math.cos(angle + Math.PI / 6));
            ctx.stroke();
          }
        }

      } else {
        // Onda Longitudinal (Som/Mola)
        // Representação por partículas
        
        const numParticles = 40;
        const spacing = width / numParticles;
        
        for (let i = 0; i < numParticles; i++) {
          const xEq = i * spacing;
          
          // Deslocamento horizontal: s(x,t) = A * sin(kx - wt)
          const displacement = (amplitude * 0.8) * Math.sin(k * xEq - omega * t);
          const xVisual = xEq + displacement;
          
          // Desenhar "camadas" de ar ou espiras da mola
          ctx.fillStyle = i % 5 === 0 ? "#ef4444" : "#3b82f6"; // Destacar algumas partículas
          
          // Desenhar como uma barra vertical (frente de onda plana)
          const barWidth = 4;
          const barHeight = 60;
          
          // Sombra
          ctx.fillStyle = "rgba(0,0,0,0.1)";
          ctx.fillRect(xVisual + 2, height / 2 - barHeight / 2 + 2, barWidth, barHeight);
          
          // Barra principal
          ctx.fillStyle = i % 5 === 0 ? "#ef4444" : "#3b82f6";
          ctx.fillRect(xVisual, height / 2 - barHeight / 2, barWidth, barHeight);
          
          // Vetores de velocidade para partículas destacadas
          if (showVectors && i % 5 === 0) {
             // v_x = ds/dt = -A*omega*cos(kx - wt)
             const vx = -amplitude * 0.8 * omega * Math.cos(k * xEq - omega * t);
             const scale = 0.1;
             
             ctx.beginPath();
             ctx.strokeStyle = "#10b981";
             ctx.lineWidth = 2;
             ctx.moveTo(xVisual, height / 2 - barHeight / 2 - 10);
             ctx.lineTo(xVisual + vx * scale, height / 2 - barHeight / 2 - 10);
             
             // Seta horizontal
             const angle = Math.atan2(0, vx * scale); // 0 ou PI
             const headLen = 5;
             // Desenhar seta manualmente simplificada para horizontal
             if (vx > 0) {
                ctx.lineTo(xVisual + vx * scale - 5, height / 2 - barHeight / 2 - 10 - 3);
                ctx.moveTo(xVisual + vx * scale, height / 2 - barHeight / 2 - 10);
                ctx.lineTo(xVisual + vx * scale - 5, height / 2 - barHeight / 2 - 10 + 3);
             } else {
                ctx.lineTo(xVisual + vx * scale + 5, height / 2 - barHeight / 2 - 10 - 3);
                ctx.moveTo(xVisual + vx * scale, height / 2 - barHeight / 2 - 10);
                ctx.lineTo(xVisual + vx * scale + 5, height / 2 - barHeight / 2 - 10 + 3);
             }
             ctx.stroke();
          }
        }
        
        // Desenhar representação senoidal auxiliar abaixo (fantasma)
        ctx.beginPath();
        ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        for (let x = 0; x < width; x++) {
          const y = height / 2 + 80 + (amplitude * 0.5) * Math.sin(k * x - omega * t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = "#64748b";
        ctx.font = "12px Inter";
        ctx.fillText("Representação Transversal Equivalente", 10, height / 2 + 120);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [amplitude, frequencia, comprimentoOnda, tipoOnda, k, omega, isPlaying, showVectors]);

  return (
    <div className="w-full space-y-6">
      <div className="relative flex justify-center bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner overflow-hidden">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full max-w-full rounded bg-white shadow-sm"
        />
        
        <div className="absolute top-6 right-6 flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/90 backdrop-blur hover:bg-white shadow-sm"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-slate-700" /> : <Play className="w-4 h-4 text-slate-700" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isPlaying ? "Pausar" : "Reproduzir"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={showVectors ? "default" : "secondary"}
                  size="icon" 
                  onClick={() => setShowVectors(!showVectors)}
                  className={showVectors ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm" : "bg-white/90 backdrop-blur hover:bg-white shadow-sm"}
                >
                  <Info className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mostrar Vetores de Velocidade</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={() => {
                    setAmplitude(50);
                    setFrequencia(1);
                    setComprimentoOnda(200);
                    timeRef.current = 0;
                  }}
                  className="bg-white/90 backdrop-blur hover:bg-white shadow-sm"
                >
                  <RefreshCw className="w-4 h-4 text-slate-700" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reiniciar Parâmetros</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Card className="p-6 space-y-8 border-t-4 border-t-indigo-500 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-slate-900 mb-2 block flex items-center gap-2">
                Tipo de Onda
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Modo de Visualização</span>
              </label>
              <Select value={tipoOnda} onValueChange={setTipoOnda}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transversal">Transversal (Corda/Luz)</SelectItem>
                  <SelectItem value="longitudinal">Longitudinal (Som/Mola)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex justify-between mb-2 items-end">
                <label className="text-sm font-bold text-slate-700">Amplitude (<MathFormula formula={String.raw`$A$`} />)</label>
                <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{formatUnit(amplitude, "unid")}</span>
              </div>
              <Slider
                value={[amplitude]}
                onValueChange={(value) => setAmplitude(value[0])}
                min={10}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-slate-500 mt-1">Energia transportada pela onda.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 items-end">
                <label className="text-sm font-bold text-slate-700">Frequência (<MathFormula formula={String.raw`$f$`} />)</label>
                <span className="text-sm font-mono font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">{formatUnit(frequencia, "Hz")}</span>
              </div>
              <Slider
                value={[frequencia]}
                onValueChange={(value) => setFrequencia(value[0])}
                min={0.1}
                max={3}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-slate-500 mt-1">Oscilações por segundo.</p>
            </div>

            <div>
              <div className="flex justify-between mb-2 items-end">
                <label className="text-sm font-bold text-slate-700">Comprimento de Onda (<MathFormula formula={String.raw`$\lambda$`} />)</label>
                <span className="text-sm font-mono font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{formatUnit(comprimentoOnda, "px")}</span>
              </div>
              <Slider
                value={[comprimentoOnda]}
                onValueChange={(value) => setComprimentoOnda(value[0])}
                min={50}
                max={400}
                step={10}
                className="w-full"
              />
              <p className="text-xs text-slate-500 mt-1">Distância entre dois picos.</p>
            </div>
          </div>
        </div>

        {/* Resultados em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Velocidade ($v$)</p>
            <div className="text-2xl font-bold text-slate-900">
              {formatUnit(velocidade, "px/s")}
            </div>
            <p className="text-xs text-slate-400 mt-1">Depende do meio</p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Período ($T$)</p>
            <div className="text-2xl font-bold text-slate-900">
              {formatUnit(1/frequencia, "s")}
            </div>
            <p className="text-xs text-slate-400 mt-1">Tempo de 1 ciclo</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Número de Onda ($k$)</p>
            <div className="text-2xl font-bold text-slate-900">
              {formatNumber(k, 3)} <span className="text-sm font-normal text-slate-500">rad/m</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Densidade espacial</p>
          </div>
        </div>

        {/* Equação Dinâmica */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-inner">
          <h4 className="font-bold text-indigo-300 mb-4 flex items-center gap-2">
            <Info className="w-4 h-4" />
            Equação da Onda em Tempo Real
          </h4>
          <div className="flex flex-col items-center justify-center space-y-4">
            <MathFormula 
              formula={String.raw`$$ y(x,t) = ${amplitude} \cdot \sin(${formatNumber(k, 2)}x - ${formatNumber(omega, 2)}t) $$`} 
              display={true}
              className="text-xl"
            />
            <p className="text-sm text-slate-400 text-center max-w-md">
              Esta equação descreve a posição vertical $y$ de qualquer ponto $x$ no instante $t$. Observe como $k$ e $\omega$ mudam com os sliders.
            </p>
          </div>
        </div>
      </Card>

      <AdvancedTheory 
        title={ITAWavesTheory.title}
        introduction={ITAWavesTheory.introduction}
        sections={ITAWavesTheory.sections}
      />
    </div>
  );
};
