import { Link } from "wouter";
import { ArrowLeft, Eye, Lightbulb, MousePointer2, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OpticaTopicConceitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/optica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Óptica Geométrica</h1>
              <p className="text-xs text-slate-600">Fundamentos e Reflexão</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Princípios Fundamentais</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Natureza da Luz</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Óptica Geométrica ignora a natureza ondulatória da luz e a trata como <strong>raios de luz</strong>: linhas orientadas que representam a direção de propagação da energia luminosa.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Este modelo é válido sempre que as dimensões dos obstáculos e aberturas forem muito maiores que o comprimento de onda da luz ($\lambda \approx 400-700$ nm).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-orange-600">
                  <MousePointer2 className="w-5 h-5" />
                  <h4 className="font-bold">Propagação Retilínea</h4>
                </div>
                <p className="text-sm text-slate-600">Em meios homogêneos e transparentes, a luz viaja em linha reta. (Base da formação de sombras).</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-orange-600">
                  <MousePointer2 className="w-5 h-5" />
                  <h4 className="font-bold">Independência</h4>
                </div>
                <p className="text-sm text-slate-600">Os raios de luz se cruzam sem interferir na trajetória um do outro.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-orange-600">
                  <MousePointer2 className="w-5 h-5" />
                  <h4 className="font-bold">Reversibilidade</h4>
                </div>
                <p className="text-sm text-slate-600">O caminho de ida é idêntico ao caminho de volta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== REFLEXÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🪞 Reflexão e Espelhos Planos</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Leis da Reflexão</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <p className="text-slate-700">
                    1. O raio incidente, a reta normal e o raio refletido são <strong>coplanares</strong>.
                  </p>
                  <p className="text-slate-700">
                    2. O ângulo de incidência é igual ao ângulo de reflexão:
                  </p>
                  <div className="bg-white p-3 rounded border border-slate-300 inline-block">
                    <MathFormula formula="i = r" display={true} />
                  </div>
                </div>
                <div className="w-full md:w-1/3 bg-white p-4 rounded border border-slate-200 flex flex-col items-center">
                  <div className="w-32 h-32 border-b-2 border-slate-400 relative">
                    {/* Diagrama simplificado CSS */}
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-full bg-dashed bg-slate-300 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-full h-0.5 bg-slate-800 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-24 h-0.5 bg-red-500 origin-bottom-left -rotate-[45deg]"></div>
                    <div className="absolute bottom-0 left-1/2 w-24 h-0.5 bg-red-500 origin-bottom-left rotate-[225deg]"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-center">Raio incidente (i) = Raio refletido (r)</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                Dica ITA: Rotação de Espelhos
              </h3>
              <p className="text-slate-700 mb-3">
                Se um espelho plano gira de um ângulo $\alpha$ em torno de um eixo no seu plano, o raio refletido gira de um ângulo $2\alpha$.
              </p>
              <div className="bg-white/50 p-3 rounded border border-yellow-300">
                <MathFormula formula="\Delta \theta_{refletido} = 2 \cdot \Delta \theta_{espelho}" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* ===== ESPELHOS ESFÉRICOS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔮 Espelhos Esféricos (Gauss)</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700">
              Para espelhos esféricos com pequena abertura (condições de nitidez de Gauss, $\alpha &lt; 10^\circ$), utilizamos a Equação dos Pontos Conjugados:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-center">Equação de Gauss</h3>
                <div className="bg-white p-4 rounded border border-green-300 mb-4">
                  <MathFormula formula="\frac{1}{f} = \frac{1}{p} + \frac{1}{p'}" display={true} />
                </div>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>$f$: distância focal ($f = R/2$)</li>
                  <li>$p$: distância do objeto ao vértice</li>
                  <li>$p'$: distância da imagem ao vértice</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-900 mb-4 text-center">Aumento Linear</h3>
                <div className="bg-white p-4 rounded border border-purple-300 mb-4">
                  <MathFormula formula="A = \frac{i}{o} = -\frac{p'}{p}" display={true} />
                </div>
                <ul className="text-sm text-purple-800 space-y-2">
                  <li>$A &gt; 0$: Imagem direita</li>
                  <li>$A &lt; 0$: Imagem invertida</li>
                  <li>$|A| &gt; 1$: Imagem ampliada</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Convenção de Sinais (Referencial de Gauss)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-300">
                      <th className="text-left py-2">Grandeza</th>
                      <th className="text-center py-2">Positivo (+)</th>
                      <th className="text-center py-2">Negativo (-)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-2 font-medium">Foco ($f$)</td>
                      <td className="text-center text-green-600">Espelho Côncavo</td>
                      <td className="text-center text-red-600">Espelho Convexo</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Imagem ($p'$)</td>
                      <td className="text-center text-green-600">Real (na frente)</td>
                      <td className="text-center text-red-600">Virtual (atrás)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Objeto ($p$)</td>
                      <td className="text-center text-green-600">Real</td>
                      <td className="text-center text-red-600">Virtual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FÓRMULAS PRINCIPAIS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calculator className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fórmulas Principais</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border-l-4 border-orange-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Equação de Gauss</h3>
              <p className="text-sm text-slate-600 mb-4">Relaciona a distância focal com as posições do objeto e da imagem.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="\frac{1}{f} = \frac{1}{p} + \frac{1}{p'}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$f$: Distância focal (m)</span>
                <span>$p$: Posição do objeto (m)</span>
                <span>$p'$: Posição da imagem (m)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Aumento Linear Transversal</h3>
              <p className="text-sm text-slate-600 mb-4">Determina o quanto a imagem é maior ou menor que o objeto.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="A = \frac{i}{o} = -\frac{p'}{p}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$A$: Aumento linear (adimensional)</span>
                <span>$i$: Tamanho da imagem (m)</span>
                <span>$o$: Tamanho do objeto (m)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-green-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Associação de Espelhos Planos</h3>
              <p className="text-sm text-slate-600 mb-4">Número de imagens formadas por dois espelhos planos com ângulo $\alpha$.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="N = \frac{360^\circ}{\alpha} - 1" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$N$: Número de imagens</span>
                <span>$\alpha$: Ângulo entre espelhos (graus)</span>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-purple-500 rounded-r-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Rotação de Espelho Plano</h3>
              <p className="text-sm text-slate-600 mb-4">Desvio angular do raio refletido ao girar o espelho.</p>
              <div className="bg-white p-4 rounded border border-slate-200 mb-3 flex justify-center">
                <MathFormula formula="\Delta \theta_{ref} = 2 \cdot \Delta \theta_{esp}" display={true} />
              </div>
              <div className="text-xs text-slate-500 grid grid-cols-2 gap-2">
                <span>$\Delta \theta_{"{ref}"}$: Giro do raio refletido</span>
                <span>$\Delta \theta_{"{esp}"}$: Giro do espelho</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-slate-700 mb-4">Agora que você domina a reflexão, vamos estudar o que acontece quando a luz muda de meio:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/optica/topic/lentes">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Refração e Lentes</Button>
            </Link>
            <Link href="/optica">
              <Button variant="outline" className="border-orange-200 hover:bg-orange-100 text-orange-700">Voltar para Óptica</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
