import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicEquacoesMacwell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletromagnetismo">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletromagnetismo</h1>
              <p className="text-xs text-slate-600">Equações de Maxwell</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Introdução às Equações de Maxwell</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que são as Equações de Maxwell?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As <strong>Equações de Maxwell</strong> são um conjunto de quatro equações diferenciais que descrevem completamente o comportamento dos campos elétricos e magnéticos. Formuladas por James Clerk Maxwell em 1865, elas unificam toda a teoria do eletromagnetismo e são fundamentais para a física moderna.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Estas equações mostram que luz é uma onda eletromagnética e predizem a existência de ondas eletromagnéticas, revolucionando nossa compreensão da natureza.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 As Quatro Equações</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">1.</span>
                  <span><strong>Lei de Gauss:</strong> Cargas elétricas geram campos elétricos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">2.</span>
                  <span><strong>Lei de Gauss para o Magnetismo:</strong> Não existem monopolos magnéticos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">3.</span>
                  <span><strong>Lei de Faraday:</strong> Campos magnéticos variáveis geram campos elétricos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">4.</span>
                  <span><strong>Lei de Ampère-Maxwell:</strong> Correntes e campos elétricos variáveis geram campos magnéticos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* As Quatro Equações */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ As Equações de Maxwell em Detalhe</h2>
          
          <div className="space-y-8">
            {/* Lei de Gauss */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Lei de Gauss (Forma Integral)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Gauss relaciona o fluxo do campo elétrico através de uma superfície fechada com a carga elétrica total envolvida por essa superfície.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Forma Diferencial:</p>
                  <MathFormula formula="\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}" display={true} />
                  <p className="mt-2 text-xs">Onde <MathFormula formula="\rho" display={false} /> é a densidade de carga volumétrica.</p>
                </div>
              </div>
            </div>

            {/* Lei de Gauss para o Magnetismo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Lei de Gauss para o Magnetismo
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Esta lei estabelece que não existem monopolos magnéticos. O fluxo magnético total através de qualquer superfície fechada é sempre zero.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\oint \vec{B} \cdot d\vec{A} = 0" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Forma Diferencial:</p>
                  <MathFormula formula="\nabla \cdot \vec{B} = 0" display={true} />
                  <p className="mt-2 text-xs">Isso implica que as linhas de campo magnético sempre formam loops fechados.</p>
                </div>
              </div>
            </div>

            {/* Lei de Faraday */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Lei de Faraday da Indução
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Faraday descreve como campos magnéticos variáveis no tempo geram campos elétricos. A circulação do campo elétrico é igual ao negativo da taxa de variação do fluxo magnético.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Forma Diferencial:</p>
                  <MathFormula formula="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" display={true} />
                </div>
              </div>
            </div>

            {/* Lei de Ampère-Maxwell */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Lei de Ampère-Maxwell
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère-Maxwell é a generalização da Lei de Ampère que inclui o termo de deslocamento de Maxwell. Ela descreve como correntes elétricas e campos elétricos variáveis geram campos magnéticos.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Forma Diferencial:</p>
                  <MathFormula formula="\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={true} />
                  <p className="mt-2">O termo <MathFormula formula="\mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={false} /> é a contribuição de Maxwell (corrente de deslocamento).</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  A Contribuição de Maxwell
                </h4>
                <p className="text-slate-700 text-sm">
                  Maxwell adicionou o termo de deslocamento <MathFormula formula="\mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={false} /> para tornar as equações consistentes com a conservação de carga. Este termo foi crucial para prever a existência de ondas eletromagnéticas.
                </p>
              </div>
            </div>

            {/* Ondas Eletromagnéticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Consequência: Ondas Eletromagnéticas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Combinando as equações de Faraday e Ampère-Maxwell, podemos derivar a equação de onda para o campo eletromagnético. Isto mostra que campos eletromagnéticos podem se propagar como ondas no vácuo.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Velocidade de Propagação:</p>
                  <MathFormula formula="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8 \text{ m/s}" display={true} />
                  <p className="mt-2 text-xs">Esta é exatamente a velocidade da luz! Maxwell concluiu que a luz é uma onda eletromagnética.</p>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Lei de Gauss
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Uma esfera isolante de raio <MathFormula formula="R" display={false} /> tem uma carga total <MathFormula formula="Q" display={false} /> uniformemente distribuída em seu volume. Encontre o campo elétrico em um ponto a uma distância <MathFormula formula="r > R" display={false} /> do centro da esfera.
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Aplicar a Lei de Gauss com simetria esférica:</strong>
                        <MathFormula formula="\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}" display={true} />
                      </li>
                      <li>
                        <strong>Por simetria, E é constante na superfície gaussiana:</strong>
                        <MathFormula formula="E \cdot 4\pi r^2 = \frac{Q}{\epsilon_0}" display={true} />
                      </li>
                      <li>
                        <strong>Resolver para E:</strong>
                        <MathFormula formula="E = \frac{Q}{4\pi \epsilon_0 r^2} = k\frac{Q}{r^2}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resultado:</strong> O campo elétrico fora da esfera é idêntico ao de uma carga pontual <MathFormula formula="Q" display={false} /> no centro. Isto é a Lei de Coulomb derivada de Maxwell!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-yellow-900 mb-2">Próximos Tópicos</h4>
          <p className="text-yellow-800 text-sm">
            As Equações de Maxwell predizem a existência de <strong>Ondas Eletromagnéticas</strong>. No próximo tópico, exploraremos as propriedades avançadas dessas ondas, incluindo polarização, interferência e o espectro eletromagnético.
          </p>
        </div>
      </section>
    </div>
  );
}
