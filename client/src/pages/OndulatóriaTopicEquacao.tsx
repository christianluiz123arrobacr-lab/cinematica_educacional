import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicEquacao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondulatória</h1>
              <p className="text-xs text-slate-600">Equação da Onda</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 A Equação da Onda</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Equação Diferencial da Onda</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>A equação da onda descreve como uma perturbação se propaga através de um meio.</strong> É uma das equações mais importantes da física.
              </p>
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="\\frac{\\partial^2 y}{\\partial t^2} = v^2 \\frac{\\partial^2 y}{\\partial x^2}" display={true} />
              </div>
              <p className="text-slate-700">Onde:</p>
              <ul className="space-y-2 text-slate-700 mt-2">
                <li>• <MathFormula formula="y(x,t)" display={false} /> = deslocamento no ponto x no tempo t</li>
                <li>• <MathFormula formula="v" display={false} /> = velocidade de propagação da onda</li>
                <li>• <MathFormula formula="\\frac{\\partial^2 y}{\\partial t^2}" display={false} /> = segunda derivada em relação ao tempo</li>
                <li>• <MathFormula formula="\\frac{\\partial^2 y}{\\partial x^2}" display={false} /> = segunda derivada em relação à posição</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 O Que Significa?</h4>
              <p className="text-slate-700">
                A equação da onda diz que a aceleração de uma partícula (primeira parte) é proporcional à curvatura da onda (segunda parte). Quanto mais "curvada" a onda, maior a aceleração das partículas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 Solução Geral da Equação</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Onda Senoidal</h3>
              <p className="text-slate-700 mb-4">
                A solução mais comum é uma onda senoidal que se propaga:
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="y(x,t) = A \\sin(kx - \\omega t + \\phi)" display={true} />
              </div>
              <p className="text-slate-700 mb-4">Ou equivalentemente:</p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="y(x,t) = A \\sin\\left(\\frac{2\\pi}{\\lambda}x - 2\\pi f t + \\phi\\right)" display={true} />
              </div>
              <p className="text-slate-700">Onde:</p>
              <ul className="space-y-2 text-slate-700 mt-2">
                <li>• <MathFormula formula="A" display={false} /> = amplitude</li>
                <li>• <MathFormula formula="k = \\frac{2\\pi}{\\lambda}" display={false} /> = número de onda</li>
                <li>• <MathFormula formula="\\omega = 2\\pi f" display={false} /> = frequência angular</li>
                <li>• <MathFormula formula="\\phi" display={false} /> = fase inicial</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Relação de Dispersão</h3>
              <p className="text-slate-700 mb-4">
                A relação entre frequência, comprimento de onda e velocidade:
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="v = f \\lambda = \\frac{\\omega}{k}" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Essa é a relação fundamental que conecta todas as grandezas da onda!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>A equação da onda é linear:</strong> Múltiplas ondas podem se sobrepor (princípio da superposição).
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade depende do meio:</strong> Diferentes meios têm diferentes velocidades de onda.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência não muda ao mudar de meio:</strong> Mas comprimento de onda e velocidade mudam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
