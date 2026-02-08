import { Link } from "wouter";
import { ArrowLeft, Magnet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

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
                Neste tópico avançado, exploraremos a equação de onda, polarização, e o vetor de Poynting que descreve o transporte de energia.
              </p>
            </div>
          </div>
        </div>

        {/* EQUAÇÃO DE ONDA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 Equação de Onda Eletromagnética</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-green-200">Equação de Onda Eletromagnética:</p>
              <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-2xl" />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Esta equação descreve como o campo elétrico varia no espaço e no tempo. A solução mais importante é a onda plana monocromática que descreve luz visível, rádio, micro-ondas e outras radiações eletromagnéticas.
            </p>
          </div>
        </div>

        {/* VELOCIDADE DA LUZ */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Velocidade da Luz</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-red-200">Velocidade da Onda Eletromagnética:</p>
              <MathFormula formula="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = 2,998 \times 10^8 \text{ m/s}" display={true} className="text-2xl" />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Maxwell descobriu que a velocidade da onda eletromagnética é determinada apenas pelas constantes fundamentais do vácuo. Isto levou à conclusão revolucionária de que luz é uma onda eletromagnética.
            </p>
          </div>
        </div>

        {/* ONDA PLANA MONOCROMÁTICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">〰️ Onda Plana Monocromática</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-purple-200">Onda Plana Monocromática:</p>
              <MathFormula formula="\vec{E}(\vec{r}, t) = \vec{E}_0 \cos(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} className="text-2xl" />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Esta é a solução mais importante da equação de onda. Descreve uma onda com uma única frequência propagando-se em uma direção específica.
            </p>
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
                <MathFormula formula="\vec{E} = E_0 \cos(kz - \omega t) \hat{x}" display={true} />
                <p className="text-slate-700 text-sm mt-2">O campo elétrico oscila em uma única direção.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Polarização Circular</h4>
                <MathFormula formula="\vec{E} = E_0 [\cos(kz - \omega t) \hat{x} + \sin(kz - \omega t) \hat{y}]" display={true} />
                <p className="text-slate-700 text-sm mt-2">O campo elétrico rotaciona mantendo magnitude constante.</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Lei de Malus</h4>
                <MathFormula formula="I = I_0 \cos^2(\theta)" display={true} />
                <p className="text-slate-700 text-sm mt-2">Intensidade transmitida através de um polarizador.</p>
              </div>
            </div>
          </div>
        </div>

        {/* VETOR DE POYNTING - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Vetor de Poynting - Transporte de Energia (Aprofundado)</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o Vetor de Poynting?</h3>
              <p className="text-slate-700 leading-relaxed">
                O <strong>vetor de Poynting</strong> descreve como a energia é transportada pela onda eletromagnética. Ele aponta na direção de propagação da energia e sua magnitude representa a densidade de fluxo de energia (potência por unidade de área).
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">📚 Contexto Histórico</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Em 1884, John Henry Poynting descobriu que a energia em campos eletromagnéticos flui de forma específica, descrita por um vetor. Isto foi revolucionário porque mostrou que energia não está "armazenada" nos campos, mas flui continuamente através do espaço. Este conceito é fundamental para entender antenas, lasers, radiação solar e muitas aplicações tecnológicas.
              </p>
            </div>

            {/* Definição */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Definição do Vetor de Poynting</h3>
              
              <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg">
                <p className="text-center text-sm mb-3 text-red-200">Vetor de Poynting:</p>
                <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={true} className="text-2xl" />
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Explicação Termo-a-Termo:</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold mb-1">S (Vetor de Poynting)</p>
                    <p>Densidade de fluxo de energia. Aponta na direção de propagação da onda. Unidade: W/m²</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold mb-1">E (Campo Elétrico)</p>
                    <p>Campo elétrico da onda. Varia sinusoidalmente no tempo e espaço. Unidade: V/m</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold mb-1">B (Campo Magnético)</p>
                    <p>Campo magnético da onda. Perpendicular a E e também varia sinusoidalmente. Unidade: T (Tesla)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold mb-1">μ₀ (Permeabilidade do vácuo)</p>
                    <p>Constante fundamental: μ₀ = 4π × 10⁻⁷ H/m = 1,257 × 10⁻⁶ H/m</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold mb-1">× (Produto Vetorial)</p>
                    <p>Operação que garante que S é perpendicular a E e B, apontando na direção de propagação.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Relação E-B */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Relação entre E e B em uma Onda EM</h3>
              
              <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg">
                <p className="text-center text-sm mb-3 text-purple-200">Relação entre amplitudes:</p>
                <MathFormula formula="B_0 = \frac{E_0}{c}" display={true} className="text-2xl" />
              </div>

              <p className="text-slate-700 leading-relaxed">
                Em uma onda eletromagnética, os campos E e B estão sempre em fase (oscilam juntos) e suas amplitudes estão relacionadas pela velocidade da luz. Isto significa que conhecendo E, podemos calcular B, e vice-versa.
              </p>
            </div>

            {/* Intensidade Média */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Intensidade Média - Potência Transportada</h3>
              
              <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-xl p-8 shadow-lg">
                <p className="text-center text-sm mb-3 text-green-200">Intensidade Média (Valor Médio de S):</p>
                <MathFormula formula="I = \langle S \rangle = \frac{1}{2} \frac{E_0 B_0}{\mu_0} = \frac{1}{2} \epsilon_0 c E_0^2" display={true} className="text-2xl" />
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Por que o fator 1/2?</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  O vetor de Poynting oscila entre +S_max e -S_max. O valor médio é metade do máximo. Isto é análogo à potência em circuitos AC: P = V_rms × I_rms = (V_max/√2) × (I_max/√2) = V_max × I_max / 2.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">Formas Equivalentes:</h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>Usando E e B:</strong> I = (1/2) × (E₀ × B₀) / μ₀</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>Usando apenas E:</strong> I = (1/2) × ε₀ × c × E₀²</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>Usando apenas B:</strong> I = (1/2) × c × B₀² / μ₀</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Passo-a-Passo: Calculando Intensidade de uma Onda EM</h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 1:</strong> Identifique a amplitude do campo elétrico E₀ (em V/m)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 2:</strong> Use a relação B₀ = E₀/c para encontrar a amplitude do campo magnético
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 3:</strong> Escolha a fórmula apropriada para intensidade (depende dos dados disponíveis)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 4:</strong> Substitua os valores numéricos
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 5:</strong> Calcule o resultado em W/m²
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 6:</strong> Verifique se o resultado faz sentido (luz visível: ~1000 W/m² em dia ensolarado)
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Exemplos Resolvidos</h3>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Intensidade de Luz Visível</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Uma onda de luz visível tem amplitude de campo elétrico E₀ = 100 V/m. Qual é a intensidade média?</p>
                  
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> E₀ = 100 V/m, ε₀ = 8,85 × 10⁻¹² F/m, c = 3 × 10⁸ m/s</p>
                    <p className="mb-2"><strong>Fórmula:</strong> I = (1/2) × ε₀ × c × E₀²</p>
                    <p className="mb-2">I = (1/2) × 8,85 × 10⁻¹² × 3 × 10⁸ × (100)² = 13,3 W/m²</p>
                    <p className="mt-2"><strong>Resposta:</strong> A intensidade é 13,3 W/m²</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Radiação Solar</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> A radiação solar tem intensidade I = 1000 W/m². Qual é a amplitude do campo elétrico?</p>
                  
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> I = 1000 W/m², ε₀ = 8,85 × 10⁻¹² F/m, c = 3 × 10⁸ m/s</p>
                    <p className="mb-2"><strong>Resolva para E₀:</strong> E₀ = √(2I / (ε₀ × c)) ≈ 274 V/m</p>
                    <p className="mt-2"><strong>Resposta:</strong> O campo elétrico é ~274 V/m. Este é um campo bastante forte!</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 3: Laser de Potência</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um laser com potência P = 10 W é focado em uma área A = 1 mm² = 10⁻⁶ m². Qual é a intensidade no ponto focal?</p>
                  
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> P = 10 W, A = 10⁻⁶ m²</p>
                    <p className="mb-2"><strong>Fórmula:</strong> I = P / A = 10 / 10⁻⁶ = 10⁷ W/m²</p>
                    <p className="mt-2"><strong>Resposta:</strong> A intensidade é 10⁷ W/m² = 10 MW/m². Isto é 10.000 vezes mais intenso que a luz solar!</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Exemplo 4: Antena de Rádio</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Uma antena emite uma onda EM com E₀ = 10 V/m. Qual é a intensidade?</p>
                  
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> E₀ = 10 V/m</p>
                    <p className="mb-2">I = (1/2) × 8,85 × 10⁻¹² × 3 × 10⁸ × (10)² = 0,133 W/m²</p>
                    <p className="mt-2"><strong>Resposta:</strong> A intensidade é 0,133 W/m² = 133 mW/m²</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Aplicações Práticas do Vetor de Poynting</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">📡 Antenas e Radiação</h4>
                  <p className="text-slate-700 text-sm">O vetor de Poynting descreve como a energia flui das antenas. Antenas são projetadas para maximizar o fluxo de energia em direções específicas.</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🔦 Lasers e Processamento de Materiais</h4>
                  <p className="text-slate-700 text-sm">Lasers concentram energia em áreas muito pequenas, criando intensidades enormes. O vetor de Poynting quantifica esta concentração.</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">☀️ Energia Solar</h4>
                  <p className="text-slate-700 text-sm">A intensidade solar (~1000 W/m²) é determinada pelo vetor de Poynting. Painéis solares capturam esta energia.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">📡 Comunicações Ópticas</h4>
                  <p className="text-slate-700 text-sm">Fibras ópticas transportam energia através do vetor de Poynting. A intensidade determina a taxa de transmissão de dados.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🛰️ Radiação Eletromagnética</h4>
                  <p className="text-slate-700 text-sm">Todos os tipos de radiação (rádio, micro-ondas, luz, raios-X) transportam energia descrita pelo vetor de Poynting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Resumo: Ondas Eletromagnéticas Avançadas</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li>• Descritas pela equação de onda derivada de Maxwell</li>
            <li>• Propagam-se à velocidade c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s</li>
            <li>• Podem ter diferentes polarizações (linear, circular, elíptica)</li>
            <li>• Lei de Malus: I = I₀cos²(θ) descreve transmissão através de polarizadores</li>
            <li>• Transportam energia descrita pelo vetor de Poynting: S = (1/μ₀) E × B</li>
            <li>• Intensidade média: I = (1/2) ε₀ c E₀²</li>
            <li>• Aplicações: antenas, lasers, energia solar, comunicações ópticas</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
