import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicCircular() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Movimento Circular Uniforme (MCU)</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento em Trajetória Circular</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O Movimento Circular Uniforme (MCU) é um tipo de movimento onde um objeto se move em uma trajetória circular com velocidade constante em módulo. Embora a velocidade seja constante em magnitude, sua direção muda continuamente, resultando em uma aceleração centrípeta dirigida para o centro da circunferência.</p>
            <p>O MCU é encontrado em muitas situações práticas: satélites orbitando a Terra, rodas girando, carrosséis, e até elétrons orbitando núcleos atômicos. É um movimento fundamental para entender sistemas rotativos e dinâmica orbital.</p>
          </div>
        </Card>

        {/* Definição */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Características do MCU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Um objeto em Movimento Circular Uniforme percorre uma trajetória circular com velocidade constante em módulo, mas com direção sempre tangente à circunferência."
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mt-6">Propriedades Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Velocidade Constante em Módulo:</strong> |v| = constante</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Velocidade Tangencial:</strong> Sempre tangente à circunferência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Aceleração Centrípeta:</strong> Dirigida para o centro, com módulo constante</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Período Constante:</strong> O tempo para completar uma volta é sempre o mesmo</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Conceitos Importantes */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conceitos e Grandezas do MCU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 mt-6">Período (T)</h3>
            <p>O tempo necessário para o objeto completar uma volta completa na circunferência.</p>
            
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <MathFormula formula="T = \\frac{2\\pi r}{v}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: T = período (s), r = raio (m), v = velocidade linear (m/s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Frequência (f)</h3>
            <p>O número de voltas completas por unidade de tempo. É o inverso do período.</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <MathFormula formula="f = \\frac{1}{T}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: f = frequência (Hz), T = período (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Velocidade Angular (ω)</h3>
            <p>A taxa de variação do ângulo em relação ao tempo. Relaciona-se com a velocidade linear pela relação v = ω·r.</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <MathFormula formula="\\omega = \\frac{2\\pi}{T} = 2\\pi f = \\frac{v}{r}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: ω = velocidade angular (rad/s), r = raio (m), v = velocidade linear (m/s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Aceleração Centrípeta (ac)</h3>
            <p>A aceleração dirigida para o centro da circunferência, responsável pela mudança de direção da velocidade.</p>
            
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <MathFormula formula="a_c = \\frac{v^2}{r} = \\omega^2 \\cdot r" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: ac = aceleração centrípeta (m/s²), v = velocidade linear (m/s), r = raio (m), ω = velocidade angular (rad/s)</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos de MCU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">1.</span>
                <div>
                  <strong>Satélite em órbita:</strong> Um satélite orbitando a Terra em órbita circular tem MCU com período que depende da altitude.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">2.</span>
                <div>
                  <strong>Roda girando:</strong> Uma roda que gira com velocidade angular constante está em MCU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">3.</span>
                <div>
                  <strong>Carrossel:</strong> Um carrossel girando com velocidade constante tem todos os seus pontos em MCU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">4.</span>
                <div>
                  <strong>Ponteiros do relógio:</strong> Os ponteiros de um relógio completam voltas com períodos bem definidos (12 horas para o ponteiro das horas, 1 hora para o dos minutos, etc.).
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Problema Resolvido</h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold mb-3">Um objeto move-se em círculo com raio de 2 m, completando uma volta a cada 4 segundos. Calcule a velocidade linear e a aceleração centrípeta.</p>
              <p className="mb-2"><strong>Dados:</strong> r = 2 m, T = 4 s</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <p className="mb-2"><strong>Velocidade linear:</strong></p>
                <MathFormula formula="v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\times 2}{4} = \\pi \\text{ m/s} \\approx 3.14 \\text{ m/s}" className="text-center text-lg" />
              </div>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <p className="mb-2"><strong>Aceleração centrípeta:</strong></p>
                <MathFormula formula="a_c = \\frac{v^2}{r} = \\frac{\\pi^2}{2} \\approx 4.93 \\text{ m/s}^2" className="text-center text-lg" />
              </div>
              <p><strong>Resposta:</strong> v ≈ 3.14 m/s e ac ≈ 4.93 m/s²</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
