import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function Learn() {
  useEffect(() => {
    // Garantir que MathJax está carregado
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Guia Completo de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Velocidade Média */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Velocidade Média</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A velocidade média é a razão entre o deslocamento total e o intervalo de tempo gasto.</p>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula:</p>
              <MathFormula formula={String.raw`$$$$v_m = \\frac{\\Delta s}{\\Delta t} = \\frac{s_f - s_i}{t_f - t_i}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v_m = velocidade média, Δs = deslocamento, Δt = intervalo de tempo</p>
            </div>
          </div>
        </Card>

        {/* Aceleração */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aceleração</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A aceleração é a taxa de variação da velocidade em relação ao tempo.</p>
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula:</p>
              <MathFormula formula={String.raw`$$$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: a = aceleração, Δv = variação de velocidade, Δt = intervalo de tempo</p>
            </div>
          </div>
        </Card>

        {/* MRU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento Retilíneo Uniforme (MRU)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O MRU é o movimento em linha reta com velocidade constante.</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Fundamental:</p>
              <MathFormula formula={String.raw`$$$$s = s_0 + v \\cdot t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: s = posição final, s_0 = posição inicial, v = velocidade, t = tempo</p>
            </div>
          </div>
        </Card>

        {/* MRUV */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento Uniformemente Variado (MRUV)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O MRUV é o movimento com aceleração constante.</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Velocidade:</p>
              <MathFormula formula={String.raw`$$$$v = v_0 + a \\cdot t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Fórmula de Posição:</p>
              <MathFormula formula={String.raw`$$$$s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final, v_0 = velocidade inicial, a = aceleração, t = tempo</p>
            </div>
          </div>
        </Card>

        {/* Torricelli */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Equação de Torricelli</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A equação de Torricelli relaciona velocidade, aceleração e deslocamento sem necessidade do tempo.</p>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula:</p>
              <MathFormula formula={String.raw`$$$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final, v_0 = velocidade inicial, a = aceleração, Δs = deslocamento</p>
            </div>
          </div>
        </Card>

        {/* Queda Livre */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Queda livre é um caso especial de MRUV onde a aceleração é a gravidade (g = 9,8 m/s²).</p>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Altura:</p>
              <MathFormula formula={String.raw`$$$$h = \\frac{g \\cdot t^2}{2}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Fórmula de Velocidade:</p>
              <MathFormula formula={String.raw`$$$$v = g \\cdot t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: h = altura, g = aceleração da gravidade (9,8 m/s²), t = tempo, v = velocidade</p>
            </div>
          </div>
        </Card>

        {/* MCU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento Circular Uniforme (MCU)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>MCU é o movimento em trajetória circular com velocidade constante.</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Velocidade Angular:</p>
              <MathFormula formula={String.raw`$$$$\\omega = \\frac{\\Delta \\theta}{\\Delta t}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Velocidade Linear:</p>
              <MathFormula formula={String.raw`$$$$v = \\omega \\cdot R$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Período e Frequência:</p>
              <MathFormula formula={String.raw`$$$$T = \\frac{2\\pi}{\\omega}, \\quad f = \\frac{1}{T}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: ω = velocidade angular, θ = ângulo, v = velocidade linear, R = raio, T = período, f = frequência</p>
            </div>
          </div>
        </Card>

        {/* Link para Quiz */}
        <div className="flex gap-4 justify-center">
          <Link href="/quiz">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ir para Quiz
            </Button>
          </Link>
          <Link href="/graphs">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Ver Gráficos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
