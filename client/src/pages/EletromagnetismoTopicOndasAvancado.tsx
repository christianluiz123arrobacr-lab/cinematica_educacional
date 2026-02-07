import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicOndasAvancado() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-teal-50">
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
              <p className="text-xs text-slate-600">Ondas Eletromagnéticas Avançado</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📡 Ondas Eletromagnéticas Avançado</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Propriedades Avançadas de Ondas EM</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As <strong>ondas eletromagnéticas</strong> são perturbações nos campos elétrico e magnético que se propagam no espaço. Diferentemente das ondas mecânicas, elas não necessitam de um meio para se propagar e viajam à velocidade da luz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Neste tópico avançado, exploraremos propriedades sofisticadas como polarização, interferência, difração e o vetor de Poynting, que descrevem como a energia é transportada pelas ondas eletromagnéticas.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Avançados</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Polarização:</strong> Orientação do campo elétrico em relação à direção de propagação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Vetor de Poynting:</strong> Densidade de fluxo de energia da onda.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Intensidade:</strong> Potência média por unidade de área.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Propriedades das Ondas EM */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Propriedades Fundamentais</h2>
          
          <div className="space-y-8">
            {/* Equação de Onda */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Equação de Onda Eletromagnética
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A equação de onda descreve como os campos elétrico e magnético variam no espaço e no tempo. Para uma onda plana se propagando na direção z:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{E}(\vec{r}, t) = \vec{E}_0 \cos(kz - \omega t + \phi)" display={true} className="text-lg mb-4" />
                <MathFormula formula="\vec{B}(\vec{r}, t) = \vec{B}_0 \cos(kz - \omega t + \phi)" display={true} className="text-lg mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Parâmetros:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="k = \frac{2\pi}{\lambda}" display={false} />: Número de onda</li>
                    <li><MathFormula formula="\omega = 2\pi f" display={false} />: Frequência angular</li>
                    <li><MathFormula formula="c = \frac{\omega}{k} = \lambda f" display={false} />: Velocidade da luz</li>
                    <li><MathFormula formula="\phi" display={false} />: Fase inicial</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Relação entre E e B
                </h4>
                <p className="text-slate-700 text-sm">
                  Em uma onda eletromagnética, os campos elétrico e magnético estão em fase e perpendiculares entre si. A relação entre suas amplitudes é:
                </p>
                <MathFormula formula="E_0 = c B_0" display={true} className="mt-2" />
              </div>
            </div>

            {/* Polarização */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Polarização de Ondas Eletromagnéticas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>polarização</strong> descreve a orientação do vetor campo elétrico em relação à direção de propagação da onda. Existem três tipos principais de polarização:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">1. Polarização Linear</h4>
                    <p className="text-slate-700 text-sm mb-2">O campo elétrico oscila em um único plano fixo. A maioria das ondas EM geradas por antenas são linearmente polarizadas.</p>
                    <MathFormula formula="\vec{E} = E_0 \cos(kz - \omega t) \hat{x}" display={true} />
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">2. Polarização Circular</h4>
                    <p className="text-slate-700 text-sm mb-2">O vetor campo elétrico rotaciona enquanto a onda se propaga, traçando um círculo no plano perpendicular à propagação.</p>
                    <MathFormula formula="\vec{E} = E_0 [\cos(kz - \omega t) \hat{x} + \sin(kz - \omega t) \hat{y}]" display={true} />
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">3. Polarização Elíptica</h4>
                    <p className="text-slate-700 text-sm">Caso geral onde o campo elétrico traça uma elipse. Linear e circular são casos especiais da polarização elíptica.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Lei de Malus</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Quando luz polarizada passa através de um polarizador, a intensidade transmitida é:
                    </p>
                    <MathFormula formula="I = I_0 \cos^2\theta" display={true} />
                    <p className="text-sm text-orange-700 mt-2">
                      Onde <MathFormula formula="\theta" display={false} /> é o ângulo entre a polarização da luz e o eixo do polarizador.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vetor de Poynting */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Vetor de Poynting e Transporte de Energia
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O <strong>vetor de Poynting</strong> descreve o fluxo de energia eletromagnética. Ele aponta na direção de propagação da onda e sua magnitude é a potência por unidade de área.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Unidades e Interpretação:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\vec{S}" display={false} />: Vetor de Poynting (W/m²)</li>
                    <li>• Magnitude: <MathFormula formula="S = \frac{E \cdot B}{\mu_0}" display={false} /> = densidade de potência</li>
                    <li>• Direção: Perpendicular a ambos <MathFormula formula="\vec{E}" display={false} /> e <MathFormula formula="\vec{B}" display={false} /></li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Intensidade Média</h4>
                <p className="text-slate-700 text-sm mb-3">A intensidade média (potência média por unidade de área) é:</p>
                <MathFormula formula="I = \langle S \rangle = \frac{1}{2} \frac{E_0 B_0}{\mu_0} = \frac{1}{2} \epsilon_0 c E_0^2 = \frac{E_0^2}{2Z_0}" display={true} />
                <p className="text-slate-700 text-sm mt-3">
                  Onde <MathFormula formula="Z_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 377 \, \Omega" display={false} /> é a impedância do vácuo.
                </p>
              </div>
            </div>

            {/* Espectro Eletromagnético */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Espectro Eletromagnético
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O espectro eletromagnético é a faixa completa de frequências (ou comprimentos de onda) das ondas eletromagnéticas. Diferentes regiões têm aplicações e propriedades distintas:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="font-semibold">Tipo de Onda</span>
                    <span className="font-semibold">Frequência</span>
                    <span className="font-semibold">Comprimento de Onda</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ondas de Rádio</span>
                    <span><MathFormula formula="< 10^9" display={false} /> Hz</span>
                    <span><MathFormula formula="> 0,3" display={false} /> mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Micro-ondas</span>
                    <span><MathFormula formula="10^9 - 10^{12}" display={false} /> Hz</span>
                    <span><MathFormula formula="0,3 \text{ mm} - 0,3 \text{ m}" display={false} /></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infravermelho</span>
                    <span><MathFormula formula="10^{12} - 4 \times 10^{14}" display={false} /> Hz</span>
                    <span><MathFormula formula="700 \text{ nm} - 0,3 \text{ mm}" display={false} /></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Luz Visível</span>
                    <span><MathFormula formula="4 - 8 \times 10^{14}" display={false} /> Hz</span>
                    <span><MathFormula formula="400 - 700 \text{ nm}" display={false} /></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ultravioleta</span>
                    <span><MathFormula formula="8 \times 10^{14} - 10^{17}" display={false} /> Hz</span>
                    <span><MathFormula formula="10 - 400 \text{ nm}" display={false} /></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Raios X</span>
                    <span><MathFormula formula="10^{17} - 10^{19}" display={false} /> Hz</span>
                    <span><MathFormula formula="0,01 - 10 \text{ nm}" display={false} /></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Raios Gama</span>
                    <span><MathFormula formula="> 10^{19}" display={false} /> Hz</span>
                    <span><MathFormula formula="< 0,01 \text{ nm}" display={false} /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Intensidade de Onda EM
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Uma onda eletromagnética tem amplitude de campo elétrico <MathFormula formula="E_0 = 100 \text{ V/m}" display={false} />. Calcule a intensidade média da onda. (Use <MathFormula formula="c = 3 \times 10^8 \text{ m/s}" display={false} /> e <MathFormula formula="\epsilon_0 = 8,85 \times 10^{-12} \text{ F/m}" display={false} />)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Usar a fórmula de intensidade média:</strong>
                        <MathFormula formula="I = \frac{1}{2} \epsilon_0 c E_0^2" display={true} />
                      </li>
                      <li>
                        <strong>Substituir os valores:</strong>
                        <MathFormula formula="I = \frac{1}{2} \times 8,85 \times 10^{-12} \times 3 \times 10^8 \times (100)^2" display={true} />
                      </li>
                      <li>
                        <strong>Calcular:</strong>
                        <MathFormula formula="I = \frac{1}{2} \times 8,85 \times 10^{-12} \times 3 \times 10^8 \times 10^4" display={true} />
                        <MathFormula formula="I = \frac{1}{2} \times 2,655 \times 10^1 = 13,3 \text{ W/m}^2" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A intensidade média da onda é aproximadamente <strong>13,3 W/m²</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-green-900 mb-2">Próximos Tópicos</h4>
          <p className="text-green-800 text-sm">
            Agora que você domina as propriedades avançadas das ondas eletromagnéticas, explore as <strong>Aplicações Práticas</strong> do eletromagnetismo em transformadores, motores e geradores.
          </p>
        </div>
      </section>
    </div>
  );
}
