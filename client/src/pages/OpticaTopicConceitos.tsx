import { Link } from "wouter";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicConceitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/optica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Conceitos Fundamentais de Óptica</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Conceitos Fundamentais da Óptica</h2>
          
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Natureza da Luz</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Teoria Corpuscular:</strong> A luz é composta por partículas chamadas fótons, cada uma carregando uma quantidade discreta de energia.</p>
                <div className="bg-white border border-yellow-300 rounded p-4">
                  <MathFormula formula={String.raw`$$E = h\nu = \frac{hc}{\lambda}$$`} display={true} />
                  <p className="text-sm mt-2">Onde: h = constante de Planck, ν = frequência, c = velocidade da luz, λ = comprimento de onda</p>
                </div>
                <p className="mt-3"><strong>Teoria Ondulatória:</strong> A luz é uma onda eletromagnética que se propaga no espaço.</p>
                <p className="mt-3"><strong>Dualidade Onda-Partícula:</strong> A luz apresenta características tanto de onda quanto de partícula, dependendo do experimento.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Propagação da Luz</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Velocidade da Luz:</strong> A luz viaja a uma velocidade constante no vácuo.</p>
                <div className="bg-white border border-blue-300 rounded p-4">
                  <MathFormula formula={String.raw`$$c = 3 \times 10^8 \text{ m/s}$$`} display={true} />
                </div>
                <p className="mt-3"><strong>Índice de Refração:</strong> Razão entre a velocidade da luz no vácuo e a velocidade em um meio.</p>
                <div className="bg-white border border-blue-300 rounded p-4">
                  <MathFormula formula={String.raw`$$n = \frac{c}{v}$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reflexão da Luz</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Lei da Reflexão:</strong> O ângulo de incidência é igual ao ângulo de reflexão.</p>
                <div className="bg-white border border-green-300 rounded p-4">
                  <MathFormula formula={String.raw`$$\theta_i = \theta_r$$`} display={true} />
                </div>
                <p className="text-sm mt-2">Ambos os ângulos são medidos em relação à normal (linha perpendicular à superfície).</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Refração da Luz</h3>
              <div className="space-y-4 text-slate-700">
                <p><strong>Lei de Snell:</strong> Relaciona os ângulos de incidência e refração com os índices de refração dos meios.</p>
                <div className="bg-white border border-purple-300 rounded p-4">
                  <MathFormula formula={String.raw`$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$`} display={true} />
                </div>
                <p className="text-sm mt-2">Onde: n₁ e n₂ são os índices de refração dos meios 1 e 2, θ₁ e θ₂ são os ângulos de incidência e refração.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo de Fórmulas Essenciais</h3>
          <div className="space-y-3 text-green-900 text-sm">
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Energia do Fóton: } E = h\nu$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Índice de Refração: } n = \frac{c}{v}$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$\text{Lei de Snell: } n_1 \sin\theta_1 = n_2 \sin\theta_2$$`} display={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
