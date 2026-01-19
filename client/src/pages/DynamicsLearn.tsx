import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsLearn() {
  useEffect(() => {
    // Garantir que MathJax está carregado
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Guia Completo de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Força */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Força é uma grandeza vetorial que representa a interação entre corpos, capaz de alterar o estado de movimento ou repouso de um objeto.</p>
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Unidade de Força:</p>
              <MathFormula formula="[F] = \\text{Newton (N)} = \\text{kg} \\cdot \\text{m/s}^2" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">A força é medida em Newtons, que representa a quantidade de movimento que um corpo pode receber.</p>
            </div>
          </div>
        </Card>

        {/* Primeira Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Primeira Lei de Newton (Inércia)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Um corpo em repouso permanece em repouso, e um corpo em movimento permanece em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.</p>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Condição de Equilíbrio:</p>
              <MathFormula formula="\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Se a força resultante é zero, a aceleração também é zero (repouso ou movimento uniforme).</p>
            </div>
          </div>
        </Card>

        {/* Segunda Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Segunda Lei de Newton (Dinâmica)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A força resultante é igual ao produto da massa pela aceleração do corpo.</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Fundamental:</p>
              <MathFormula formula="\\vec{F} = m \\cdot \\vec{a}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: F = força resultante (N), m = massa (kg), a = aceleração (m/s²)</p>
            </div>
          </div>
        </Card>

        {/* Terceira Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Terceira Lei de Newton (Ação e Reação)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Toda ação tem uma reação igual e oposta. Se um corpo A exerce força sobre um corpo B, então B exerce uma força igual e contrária sobre A.</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Relação de Ação e Reação:</p>
              <MathFormula formula="\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">As forças têm mesma magnitude, mesma direção, mas sentidos opostos.</p>
            </div>
          </div>
        </Card>

        {/* Atrito */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força de Atrito</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Atrito é a força que se opõe ao movimento relativo entre duas superfícies em contato.</p>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Força de Atrito Cinético:</p>
              <MathFormula formula="f_c = \\mu_c \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Força de Atrito Estático:</p>
              <MathFormula formula="f_s \\leq \\mu_s \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: μ = coeficiente de atrito, N = força normal</p>
            </div>
          </div>
        </Card>

        {/* Trabalho */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Trabalho</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Trabalho é a energia transferida por uma força quando ela atua sobre um objeto em movimento.</p>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Trabalho:</p>
              <MathFormula formula="W = F \\cdot d \\cdot \\cos(\\theta)" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: W = trabalho (J), F = força (N), d = deslocamento (m), θ = ângulo entre F e d</p>
            </div>
          </div>
        </Card>

        {/* Energia Cinética */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Cinética</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Energia cinética é a energia que um corpo possui devido ao seu movimento.</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Energia Cinética:</p>
              <MathFormula formula="E_c = \\frac{1}{2} \\cdot m \\cdot v^2" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_c = energia cinética (J), m = massa (kg), v = velocidade (m/s)</p>
            </div>
          </div>
        </Card>

        {/* Energia Potencial */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Potencial Gravitacional</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Energia potencial gravitacional é a energia que um corpo possui devido à sua posição em relação a um referencial.</p>
            <div className="bg-pink-50 p-3 md:p-6 rounded-lg border border-pink-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Energia Potencial:</p>
              <MathFormula formula="E_p = m \\cdot g \\cdot h" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_p = energia potencial (J), m = massa (kg), g = gravidade (m/s²), h = altura (m)</p>
            </div>
          </div>
        </Card>

        {/* Conservação de Energia */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Energia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado, a energia mecânica total (cinética + potencial) permanece constante.</p>
            <div className="bg-teal-50 p-3 md:p-6 rounded-lg border border-teal-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio de Conservação:</p>
              <MathFormula formula="E_c + E_p = \\text{constante}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">A energia cinética e potencial podem se transformar uma na outra, mas a energia total permanece constante.</p>
            </div>
          </div>
        </Card>

        {/* Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Momentum (Quantidade de Movimento)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Momentum é o produto da massa pela velocidade de um corpo, representando a dificuldade de parar um objeto em movimento.</p>
            <div className="bg-lime-50 p-3 md:p-6 rounded-lg border border-lime-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Momentum:</p>
              <MathFormula formula="\\vec{p} = m \\cdot \\vec{v}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Impulso (Teorema do Impulso):</p>
              <MathFormula formula="\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: p = momentum (kg·m/s), m = massa (kg), v = velocidade (m/s)</p>
            </div>
          </div>
        </Card>

        {/* Conservação de Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado (sem forças externas), o momentum total permanece constante.</p>
            <div className="bg-violet-50 p-3 md:p-6 rounded-lg border border-violet-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio de Conservação:</p>
              <MathFormula formula="\\vec{p}_{\\text{inicial}} = \\vec{p}_{\\text{final}}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">O momentum total do sistema antes da interação é igual ao momentum total depois.</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
