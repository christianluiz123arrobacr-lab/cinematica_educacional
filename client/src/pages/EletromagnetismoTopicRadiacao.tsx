import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicRadiacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
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
              <p className="text-xs text-slate-600">Radiação Eletromagnética</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">☀️ Radiação Eletromagnética</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Radiação Eletromagnética?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Radiação eletromagnética</strong> é a emissão de ondas eletromagnéticas por cargas aceleradas. Quando uma carga elétrica é acelerada, ela irradia energia na forma de ondas eletromagnéticas que se propagam no espaço.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A radiação eletromagnética é fundamental para compreender fenômenos como luz, calor radiante, ondas de rádio e raios X. Ela também é essencial para a comunicação sem fio, aquecimento e muitas outras aplicações tecnológicas.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Emissão:</strong> Processo pelo qual cargas aceleradas emitem radiação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Absorção:</strong> Processo pelo qual a matéria absorve radiação eletromagnética.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Interação com Matéria:</strong> Como a radiação interage com átomos e moléculas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emissão de Radiação */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Emissão de Radiação Eletromagnética</h2>
          
          <div className="space-y-8">
            {/* Cargas Aceleradas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Radiação de Cargas Aceleradas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Uma carga elétrica em repouso ou em movimento uniforme não irradia. Porém, quando uma carga é acelerada, ela irradia energia eletromagnética. Este é um princípio fundamental do eletromagnetismo.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Potência Irradiada (Fórmula de Larmor)</h4>
                <MathFormula formula="P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="P" display={false} />: Potência irradiada (W)</li>
                    <li><MathFormula formula="q" display={false} />: Carga da partícula (C)</li>
                    <li><MathFormula formula="a" display={false} />: Aceleração da carga (m/s²)</li>
                    <li><MathFormula formula="\epsilon_0" display={false} />: Permissividade do vácuo</li>
                    <li><MathFormula formula="c" display={false} />: Velocidade da luz</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Implicação Importante
                </h4>
                <p className="text-slate-700 text-sm">
                  A potência irradiada é proporcional ao quadrado da aceleração. Portanto, maiores acelerações resultam em maior radiação. Isto explica por que antenas de rádio funcionam melhor com sinais de alta frequência (maior aceleração).
                </p>
              </div>
            </div>

            {/* Radiação Térmica */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Radiação Térmica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Todos os objetos em temperatura acima do zero absoluto emitem radiação eletromagnética. Esta radiação é resultado do movimento aleatório de cargas dentro dos átomos. A quantidade e o espectro da radiação dependem da temperatura do objeto.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-3">Lei de Stefan-Boltzmann</h4>
                <MathFormula formula="P = \sigma A T^4" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="P" display={false} />: Potência irradiada (W)</li>
                    <li><MathFormula formula="\sigma = 5,67 \times 10^{-8}" display={false} /> W/(m²·K⁴): Constante de Stefan-Boltzmann</li>
                    <li><MathFormula formula="A" display={false} />: Área da superfície (m²)</li>
                    <li><MathFormula formula="T" display={false} />: Temperatura absoluta (K)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Dependência com Temperatura</h4>
                    <p className="text-sm text-orange-700">
                      A potência irradiada é proporcional à quarta potência da temperatura. Isto significa que pequenos aumentos de temperatura resultam em grandes aumentos de radiação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lei de Deslocamento de Wien */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Lei de Deslocamento de Wien
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A distribuição espectral da radiação térmica muda com a temperatura. Objetos mais quentes emitem radiação em comprimentos de onda mais curtos (mais azuis), enquanto objetos mais frios emitem em comprimentos de onda mais longos (mais vermelhos).
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\lambda_{max} T = b" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\lambda_{max}" display={false} />: Comprimento de onda de pico (m)</li>
                    <li><MathFormula formula="T" display={false} />: Temperatura absoluta (K)</li>
                    <li><MathFormula formula="b = 2,898 \times 10^{-3}" display={false} /> m·K: Constante de Wien</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Absorção e Emissividade */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Absorção e Emissividade
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A capacidade de um objeto absorver radiação está relacionada à sua capacidade de emiti-la. Um corpo que absorve bem a radiação também emite bem (corpo negro ideal). Um corpo que reflete bem a radiação emite pouco.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Corpo Negro Ideal</h4>
                    <p className="text-slate-700 text-sm">Um corpo negro é um objeto que absorve toda a radiação incidente (não reflete nada) e emite a máxima quantidade de radiação possível para uma dada temperatura.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Emissividade</h4>
                    <p className="text-slate-700 text-sm">A emissividade <MathFormula formula="\epsilon" display={false} /> é a razão entre a potência irradiada por um objeto e a potência que seria irradiada por um corpo negro ideal na mesma temperatura. Varia de 0 (refletor perfeito) a 1 (corpo negro ideal).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Radiação Térmica
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um filamento de lâmpada incandescente está a uma temperatura de 2700 K. Qual é o comprimento de onda em que a radiação é máxima? (Use <MathFormula formula="b = 2,898 \times 10^{-3}" display={false} /> m·K)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Aplicar a Lei de Deslocamento de Wien:</strong>
                        <MathFormula formula="\lambda_{max} = \frac{b}{T}" display={true} />
                      </li>
                      <li>
                        <strong>Substituir os valores:</strong>
                        <MathFormula formula="\lambda_{max} = \frac{2,898 \times 10^{-3}}{2700}" display={true} />
                      </li>
                      <li>
                        <strong>Calcular:</strong>
                        <MathFormula formula="\lambda_{max} = 1,073 \times 10^{-6} \text{ m} = 1073 \text{ nm}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O comprimento de onda de pico é aproximadamente <strong>1073 nm</strong>, que está na região do infravermelho próximo. Isto explica por que lâmpadas incandescentes emitem principalmente calor (infravermelho) e não luz visível eficientemente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-purple-900 mb-2">Conclusão</h4>
          <p className="text-purple-800 text-sm">
            Você completou o estudo do <strong>Eletromagnetismo</strong>! Dominou os campos magnéticos, indução, equações de Maxwell, ondas eletromagnéticas, aplicações práticas e radiação. Estes conhecimentos formam a base para entender praticamente toda a tecnologia moderna. Parabéns!
          </p>
        </div>
      </section>
    </div>
  );
}
