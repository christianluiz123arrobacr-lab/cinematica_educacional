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
                Neste tópico avançado, exploraremos a equação de onda que descreve como os campos E e B variam, como Maxwell derivou a velocidade da luz, polarização, e o vetor de Poynting que descreve o transporte de energia.
              </p>
            </div>
          </div>
        </div>

        {/* EQUAÇÃO DE ONDA - DIDÁTICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 Equação de Onda Eletromagnética - Explicação Completa</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A equação de onda eletromagnética é derivada diretamente das Equações de Maxwell. Ela descreve como os campos elétrico e magnético variam no espaço e no tempo.
            </p>

            {/* Contexto Histórico */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">📚 Contexto Histórico</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Em 1865, James Clerk Maxwell combinou suas quatro equações e descobriu algo extraordinário: os campos elétrico e magnético obedecem à mesma equação que descreve ondas mecânicas! Isto significava que luz é uma onda eletromagnética. Ao calcular a velocidade dessa onda, Maxwell obteve exatamente a velocidade da luz conhecida experimentalmente (c ≈ 3 × 10⁸ m/s). Esta foi uma das maiores descobertas da física!
              </p>
            </div>

            {/* Forma Geral da Equação de Onda */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-green-200">Equação de Onda Eletromagnética (Forma Geral):</p>
              <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-2xl mb-4" />
              <MathFormula formula="\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}" display={true} className="text-2xl" />
            </div>

            {/* Explicação Termo a Termo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Entendendo Cada Termo:</h3>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\nabla^2" display={false} /> - O Operador Laplaciano
                </h4>
                <p className="text-slate-700 mb-3">
                  Este símbolo (∇²) é chamado de <strong>Laplaciano</strong>. Ele mede como o campo varia no espaço em todas as direções.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>O que ele faz?</strong></p>
                  <p className="text-sm text-slate-700 mb-2">O Laplaciano calcula a "curvatura" do campo em um ponto. Se o campo está muito curvado (mudando rapidamente no espaço), o Laplaciano é grande.</p>
                  <p className="text-sm text-slate-700"><strong>Analogia:</strong> Imagine uma corda vibrando. O Laplaciano mede quanto a corda está "ondulada" em um ponto.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\frac{\partial^2 \vec{E}}{\partial t^2}" display={false} /> - Aceleração do Campo Elétrico
                </h4>
                <p className="text-slate-700 mb-3">
                  Este termo mede como rápido o campo elétrico está mudando com o tempo, especificamente a <strong>segunda derivada</strong> (aceleração).
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>O que significa?</strong></p>
                  <p className="text-sm text-slate-700 mb-2">Se o campo está aumentando rapidamente, a primeira derivada é grande. Se está acelerando (aumentando mais rápido), a segunda derivada é grande.</p>
                  <p className="text-sm text-slate-700"><strong>Analogia:</strong> Se você está em um carro, a primeira derivada é a velocidade. A segunda derivada é a aceleração (como rápido você está acelerando).</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\mu_0 \epsilon_0" display={false} /> - Produto de Constantes Fundamentais
                </h4>
                <p className="text-slate-700 mb-3">
                  Este produto de duas constantes fundamentais determina a <strong>velocidade da onda</strong>.
                </p>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Valores:</strong></p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• μ₀ = 4π × 10⁻⁷ T·m/A (permeabilidade do vácuo)</li>
                    <li>• ε₀ = 8,854 × 10⁻¹² C²/(N·m²) (permissividade do vácuo)</li>
                  </ul>
                  <p className="text-sm text-slate-700 mt-2"><strong>O que ele faz?</strong> Relaciona a "curvatura espacial" do campo com sua "aceleração temporal". Quanto menor μ₀ε₀, mais rápido o campo se propaga.</p>
                </div>
              </div>
            </div>

            {/* Significado Geral */}
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">O Significado Completo da Equação de Onda:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>A curvatura espacial do campo elétrico é proporcional à sua aceleração temporal.</strong> Isto descreve uma onda: quando o campo está muito curvado em um ponto, ele está acelerando rapidamente no tempo, propagando-se como uma onda.
              </p>
            </div>
          </div>
        </div>

        {/* VELOCIDADE DA LUZ */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Derivação da Velocidade da Luz</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Uma das maiores descobertas de Maxwell foi que a velocidade da onda eletromagnética é determinada apenas pelas constantes fundamentais do vácuo!
            </p>

            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-red-200">Velocidade da Onda Eletromagnética:</p>
              <MathFormula formula="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}" display={true} className="text-3xl" />
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-bold text-orange-900 mb-3">Como Maxwell Derivou Isto:</h4>
              <p className="text-slate-700 text-sm mb-3">
                Comparando a equação de onda eletromagnética com a forma padrão de uma onda:
              </p>
              <div className="bg-white p-4 rounded border border-orange-200 text-sm text-slate-700 space-y-2">
                <p><strong>Forma padrão de onda:</strong> ∇²f = (1/v²) ∂²f/∂t²</p>
                <p><strong>Nossa equação:</strong> ∇²E = μ₀ε₀ ∂²E/∂t²</p>
                <p><strong>Comparando:</strong> 1/v² = μ₀ε₀</p>
                <p><strong>Portanto:</strong> v = 1/√(μ₀ε₀) = c</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Cálculo Numérico:</h4>
              <div className="bg-white p-4 rounded border border-green-200 text-sm text-slate-700 space-y-2">
                <p><strong>Dados:</strong> μ₀ = 4π × 10⁻⁷, ε₀ = 8,854 × 10⁻¹²</p>
                <MathFormula formula="c = \frac{1}{\sqrt{(4\pi \times 10^{-7})(8,854 \times 10^{-12})}} = \frac{1}{\sqrt{1,112 \times 10^{-17}}} = 2,998 \times 10^8 \text{ m/s}" display={true} />
                <p><strong>Resultado:</strong> c ≈ 3 × 10⁸ m/s (velocidade da luz no vácuo!)</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-3">O Significado Profundo:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Maxwell descobriu que a velocidade da luz não é uma constante arbitrária - ela é determinada pelas propriedades fundamentais do vácuo! Isto sugeriu que luz é uma onda eletromagnética, unificando ótica e eletromagnetismo. Mais tarde, Einstein usaria este resultado como base para a Relatividade Especial.
              </p>
            </div>
          </div>
        </div>

        {/* ONDA PLANA MONOCROMÁTICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">〰️ Onda Plana Monocromática - Solução Mais Comum</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A solução mais importante da equação de onda é a <strong>onda plana monocromática</strong>, que descreve uma onda com uma única frequência propagando-se em uma direção.
            </p>

            <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-purple-200">Onda Plana Monocromática:</p>
              <MathFormula formula="\vec{E}(\vec{r}, t) = \vec{E}_0 \cos(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} className="text-2xl mb-4" />
              <MathFormula formula="\vec{B}(\vec{r}, t) = \vec{B}_0 \cos(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} className="text-2xl" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Entendendo Cada Termo:</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\vec{E}_0" display={false} /> - Amplitude do Campo Elétrico
                </h4>
                <p className="text-slate-700 text-sm">
                  Valor máximo que o campo elétrico atinge. Medido em V/m ou N/C.
                </p>
                <p className="text-slate-700 text-sm mt-2">
                  <strong>Analogia:</strong> Se você agita uma corda, a amplitude é o quanto você levanta a corda para cima.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\vec{k}" display={false} /> - Vetor de Onda
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Aponta na direção de propagação e tem magnitude k = 2π/λ (número de onda).
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>O que significa:</strong> Quanto maior k, mais rapidamente a onda oscila no espaço (comprimento de onda menor).
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\omega" display={false} /> - Frequência Angular
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Mede como rápido a onda oscila no tempo. ω = 2πf, onde f é a frequência em Hz.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Unidade:</strong> Radianos por segundo (rad/s)
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\phi" display={false} /> - Fase Inicial
                </h4>
                <p className="text-slate-700 text-sm">
                  Determina o valor do campo no ponto r = 0 e tempo t = 0. Medida em radianos.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  Relação de Dispersão
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Para ondas eletromagnéticas no vácuo, existe uma relação especial entre k e ω:
                </p>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <MathFormula formula="\omega = ck" display={true} />
                  <p className="text-sm text-slate-700 mt-2">
                    Isto significa que a frequência é proporcional ao número de onda. Ondas com comprimentos de onda menores oscilam mais rapidamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo Numérico */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo: Onda de Luz Visível (Verde)</h4>
              <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-2">
                <p><strong>Comprimento de onda:</strong> λ = 550 nm (verde)</p>
                <p><strong>Número de onda:</strong> k = 2π/λ = 2π/(550 × 10⁻⁹) = 1,14 × 10⁷ m⁻¹</p>
                <p><strong>Frequência:</strong> f = c/λ = (3 × 10⁸)/(550 × 10⁻⁹) = 5,45 × 10¹⁴ Hz</p>
                <p><strong>Frequência angular:</strong> ω = 2πf = 3,42 × 10¹⁵ rad/s</p>
                <p className="mt-3"><strong>Verificação:</strong> ω/k = (3,42 × 10¹⁵)/(1,14 × 10⁷) = 3 × 10⁸ m/s = c ✓</p>
              </div>
            </div>
          </div>
        </div>

        {/* POLARIZAÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔀 Polarização de Ondas Eletromagnéticas</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A <strong>polarização</strong> descreve a orientação do campo elétrico em relação à direção de propagação da onda.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Polarização Linear</h4>
                <p className="text-slate-700 text-sm mb-3">
                  O campo elétrico oscila em uma única direção (perpendicular à propagação).
                </p>
                <div className="bg-white p-3 rounded border border-blue-200 text-sm text-slate-700">
                  <MathFormula formula="\vec{E} = E_0 \cos(kz - \omega t) \hat{x}" display={true} />
                  <p className="mt-2">O campo elétrico oscila apenas na direção x, enquanto a onda se propaga em z.</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Polarização Circular</h4>
                <p className="text-slate-700 text-sm mb-3">
                  O campo elétrico mantém magnitude constante mas rotaciona enquanto a onda se propaga.
                </p>
                <div className="bg-white p-3 rounded border border-green-200 text-sm text-slate-700">
                  <MathFormula formula="\vec{E} = E_0 [\cos(kz - \omega t) \hat{x} + \sin(kz - \omega t) \hat{y}]" display={true} />
                  <p className="mt-2">O campo elétrico traça um círculo no plano xy enquanto se propaga em z.</p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Polarização Elíptica</h4>
                <p className="text-slate-700 text-sm">
                  Caso geral onde o campo elétrico traça uma elipse. Polarização linear e circular são casos especiais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VETOR DE POYNTING */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Vetor de Poynting - Transporte de Energia</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              O <strong>vetor de Poynting</strong> descreve como a energia é transportada pela onda eletromagnética.
            </p>

            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-red-200">Vetor de Poynting:</p>
              <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={true} className="text-2xl" />
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Significado:</h4>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• <strong>Direção:</strong> Aponta na direção de propagação da energia (mesma direção de k)</li>
                <li>• <strong>Magnitude:</strong> Densidade de fluxo de energia (potência por unidade de área)</li>
                <li>• <strong>Unidade:</strong> W/m² (Watts por metro quadrado)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-3">Intensidade Média:</h4>
              <p className="text-slate-700 text-sm mb-3">
                A intensidade média (potência média por unidade de área) é:
              </p>
              <div className="bg-white p-4 rounded border border-blue-200">
                <MathFormula formula="I = \langle S \rangle = \frac{1}{2} \frac{E_0 B_0}{\mu_0} = \frac{1}{2} \epsilon_0 c E_0^2" display={true} />
                <p className="text-sm text-slate-700 mt-2">
                  A intensidade é proporcional ao quadrado da amplitude do campo elétrico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Resumo: Ondas Eletromagnéticas</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li>• Descritas pela equação de onda derivada de Maxwell</li>
            <li>• Propagam-se à velocidade c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s</li>
            <li>• Campos E e B oscilam em fase, perpendiculares entre si</li>
            <li>• Podem ter diferentes polarizações (linear, circular, elíptica)</li>
            <li>• Transportam energia descrita pelo vetor de Poynting</li>
            <li>• Exemplos: luz visível, rádio, micro-ondas, raios-X</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
