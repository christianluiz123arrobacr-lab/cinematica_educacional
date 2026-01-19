import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsFormulas() {
  useEffect(() => {
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
          <h1 className="text-2xl font-bold text-slate-900">Fórmulas de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Segunda Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Segunda Lei de Newton</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula="\\vec{F} = m \\cdot \\vec{a}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 mb-4">Onde: F = força resultante (N), m = massa (kg), a = aceleração (m/s²)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Derivações:</p>
              <MathFormula formula="m = \\frac{F}{a} \\quad \\text{ou} \\quad a = \\frac{F}{m}" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">A segunda lei de Newton é a base da dinâmica. Ela estabelece que a força resultante aplicada a um corpo é proporcional à sua aceleração, sendo a massa a constante de proporcionalidade.</p>
          </div>
        </Card>

        {/* Trabalho */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Trabalho de uma Força</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula="W = F \\cdot d \\cdot \\cos(\\theta)" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 mb-4">Onde: W = trabalho (J), F = força (N), d = deslocamento (m), θ = ângulo entre F e d</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Casos Especiais:</p>
              <MathFormula formula="\\theta = 0° \\Rightarrow W = F \\cdot d \\quad (\\text{máximo trabalho})" className="text-center text-lg md:text-2xl mb-4" />
              <MathFormula formula="\\theta = 90° \\Rightarrow W = 0 \\quad (\\text{nenhum trabalho})" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">O trabalho mede a energia transferida por uma força. Ele depende não apenas da magnitude da força, mas também do ângulo entre a força e o deslocamento.</p>
          </div>
        </Card>

        {/* Energia Cinética */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Cinética</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula="E_c = \\frac{1}{2} \\cdot m \\cdot v^2" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 mb-4">Onde: E_c = energia cinética (J), m = massa (kg), v = velocidade (m/s)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Teorema do Trabalho-Energia:</p>
              <MathFormula formula="W = \\Delta E_c = E_{c,f} - E_{c,i}" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">A energia cinética é a energia do movimento. O trabalho realizado sobre um corpo é igual à variação de sua energia cinética.</p>
          </div>
        </Card>

        {/* Energia Potencial Gravitacional */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Potencial Gravitacional</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula="E_p = m \\cdot g \\cdot h" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 mb-4">Onde: E_p = energia potencial (J), m = massa (kg), g = gravidade (m/s²), h = altura (m)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Variação de Energia Potencial:</p>
              <MathFormula formula="\\Delta E_p = m \\cdot g \\cdot \\Delta h" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">A energia potencial gravitacional depende da posição do objeto em relação a um referencial. Quanto maior a altura, maior a energia potencial.</p>
          </div>
        </Card>

        {/* Conservação de Energia Mecânica */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Energia Mecânica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio Fundamental:</p>
              <MathFormula formula="E_{\\text{mecânica}} = E_c + E_p = \\text{constante}" className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Em um Sistema Isolado:</p>
              <MathFormula formula="E_{c,i} + E_{p,i} = E_{c,f} + E_{p,f}" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">A energia mecânica total de um sistema isolado permanece constante. A energia cinética e potencial podem se transformar uma na outra, mas a soma permanece invariável.</p>
          </div>
        </Card>

        {/* Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Momentum (Quantidade de Movimento)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula="\\vec{p} = m \\cdot \\vec{v}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 mb-4">Onde: p = momentum (kg·m/s), m = massa (kg), v = velocidade (m/s)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Relação com a Segunda Lei de Newton:</p>
              <MathFormula formula="\\vec{F} = \\frac{d\\vec{p}}{dt}" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">O momentum representa a quantidade de movimento de um corpo. A força resultante é a taxa de variação do momentum em relação ao tempo.</p>
          </div>
        </Card>

        {/* Impulso */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Impulso e Teorema do Impulso</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-lime-50 to-green-50 p-3 md:p-6 rounded-lg border border-lime-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Impulso:</p>
              <MathFormula formula="\\vec{I} = \\vec{F} \\cdot \\Delta t" className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Teorema do Impulso:</p>
              <MathFormula formula="\\vec{I} = \\Delta \\vec{p} = \\vec{p}_f - \\vec{p}_i" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: I = impulso (N·s), F = força (N), Δt = intervalo de tempo (s)</p>
            </div>
            <p className="mt-4">O impulso é o produto da força pelo tempo de aplicação. O teorema do impulso afirma que o impulso é igual à variação do momentum.</p>
          </div>
        </Card>

        {/* Conservação de Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-3 md:p-6 rounded-lg border border-rose-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio de Conservação:</p>
              <MathFormula formula="\\vec{p}_{\\text{inicial}} = \\vec{p}_{\\text{final}}" className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Para Dois Corpos em Colisão:</p>
              <MathFormula formula="m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i} = m_1 \\vec{v}_{1f} + m_2 \\vec{v}_{2f}" className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p className="mt-4">Em um sistema isolado (sem forças externas), o momentum total permanece constante. Isso é fundamental para analisar colisões e explosões.</p>
          </div>
        </Card>

        {/* Atrito */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força de Atrito</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 md:p-6 rounded-lg border border-amber-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Atrito Cinético:</p>
              <MathFormula formula="f_c = \\mu_c \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Atrito Estático (máximo):</p>
              <MathFormula formula="f_s \\leq \\mu_s \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: μ = coeficiente de atrito, N = força normal</p>
            </div>
            <p className="mt-4">O atrito é uma força que se opõe ao movimento relativo entre superfícies. O atrito cinético ocorre quando há movimento, enquanto o atrito estático ocorre quando não há movimento.</p>
          </div>
        </Card>

        {/* Potência */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Potência</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 md:p-6 rounded-lg border border-teal-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Potência Média:</p>
              <MathFormula formula="P = \\frac{W}{\\Delta t}" className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Potência Instantânea:</p>
              <MathFormula formula="P = \\vec{F} \\cdot \\vec{v} = F \\cdot v \\cdot \\cos(\\theta)" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: P = potência (W), W = trabalho (J), Δt = intervalo de tempo (s)</p>
            </div>
            <p className="mt-4">A potência mede a taxa de realização de trabalho. Ela indica quão rápido a energia está sendo transferida ou transformada.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
