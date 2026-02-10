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

        {/* ESPECTRO ELETROMAGNÉTICO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌈 Espectro Eletromagnético</h2>
          
          {/* Explicação Simples */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o Espectro Eletromagnético?</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Imagine todas as ondas eletromagnéticas possíveis organizadas em ordem de frequência (ou comprimento de onda). Isso é o <strong>espectro eletromagnético</strong>! É como um arco-íris gigante que vai muito além do que nossos olhos conseguem ver.
            </p>
            <p className="text-slate-700 leading-relaxed">
              A luz visível (que vemos) é apenas uma pequena fatia desse espectro. Existem ondas com frequências muito menores (ondas de rádio) e muito maiores (raios X, raios gama) que não conseguimos ver, mas que estão ao nosso redor o tempo todo.
            </p>
          </div>

          {/* Contexto Histórico */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">📜 Contexto Histórico</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              A descoberta do espectro eletromagnético foi gradual ao longo de mais de 100 anos:
            </p>
            <ul className="text-slate-700 space-y-2 ml-6">
              <li>• <strong>1800</strong>: William Herschel descobre o <strong>infravermelho</strong> ao medir temperatura além do vermelho no espectro solar</li>
              <li>• <strong>1801</strong>: Johann Ritter descobre o <strong>ultravioleta</strong> observando reações químicas além do violeta</li>
              <li>• <strong>1888</strong>: Heinrich Hertz produz e detecta <strong>ondas de rádio</strong> artificialmente</li>
              <li>• <strong>1895</strong>: Wilhelm Röntgen descobre os <strong>raios X</strong></li>
              <li>• <strong>1900</strong>: Paul Villard descobre os <strong>raios gama</strong></li>
            </ul>
          </div>

          {/* Fórmulas Fundamentais */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Fórmulas Fundamentais</h3>
            
            <div className="space-y-6">
              {/* Relação c = λf */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">1. Relação entre Velocidade, Frequência e Comprimento de Onda</h4>
                <div className="bg-white p-4 rounded border border-blue-200 mb-3">
                  <MathFormula formula="c = \\lambda f" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">c (velocidade da luz)</p>
                    <p className="text-sm text-slate-600">Velocidade de propagação da onda no vácuo</p>
                    <p className="text-xs text-slate-500 mt-2">c ≈ 3 × 10⁸ m/s (constante)</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">λ (lambda, comprimento de onda)</p>
                    <p className="text-sm text-slate-600">Distância entre dois picos consecutivos da onda</p>
                    <p className="text-xs text-slate-500 mt-2">Unidade: metros (m)</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">f (frequência)</p>
                    <p className="text-sm text-slate-600">Número de oscilações por segundo</p>
                    <p className="text-xs text-slate-500 mt-2">Unidade: Hertz (Hz = 1/s)</p>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 leading-relaxed">
                  <strong>Interpretação física:</strong> Como a velocidade da luz é constante no vácuo, se a frequência aumenta, o comprimento de onda diminui proporcionalmente. Ondas de alta frequência (raios X, raios gama) têm comprimentos de onda muito pequenos. Ondas de baixa frequência (ondas de rádio) têm comprimentos de onda grandes.
                </p>
              </div>

              {/* Energia do fóton */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">2. Energia do Fóton</h4>
                <div className="bg-white p-4 rounded border border-blue-200 mb-3">
                  <MathFormula formula="E = hf = \\frac{hc}{\\lambda}" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">E (energia)</p>
                    <p className="text-sm text-slate-600">Energia de um fóton (partícula de luz)</p>
                    <p className="text-xs text-slate-500 mt-2">Unidade: Joules (J) ou elétron-volts (eV)</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">h (constante de Planck)</p>
                    <p className="text-sm text-slate-600">Constante fundamental da mecânica quântica</p>
                    <p className="text-xs text-slate-500 mt-2">h = 6,626 × 10⁻³⁴ J·s</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">f (frequência)</p>
                    <p className="text-sm text-slate-600">Frequência da onda eletromagnética</p>
                    <p className="text-xs text-slate-500 mt-2">Unidade: Hertz (Hz)</p>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 leading-relaxed">
                  <strong>Interpretação física:</strong> A energia de um fóton é diretamente proporcional à frequência. Raios gama (frequência altíssima) têm energia enorme e podem danificar células. Ondas de rádio (frequência baixa) têm energia muito pequena e são inofensivas.
                </p>
              </div>
            </div>
          </div>

          {/* As 7 Faixas do Espectro */}
          <div className="space-y-6 mb-6">
            <h3 className="text-2xl font-bold text-slate-900">🌌 As 7 Faixas do Espectro Eletromagnético</h3>
            
            {/* 1. Ondas de Rádio */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h4 className="text-xl font-bold text-red-900 mb-3">1️⃣ Ondas de Rádio</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">3 kHz a 300 GHz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">1 mm a 100 km</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Muito baixa</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                São as ondas de <strong>menor frequência</strong> e <strong>maior comprimento de onda</strong> do espectro. Conseguem contornar obstáculos e viajar longas distâncias, por isso são ideais para comunicação.
              </p>
              <div className="bg-white p-4 rounded border border-red-200">
                <p className="font-semibold text-slate-900 mb-2">📡 Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>AM (Amplitude Modulada)</strong>: 535-1605 kHz - rádio AM</li>
                  <li>• <strong>FM (Frequência Modulada)</strong>: 88-108 MHz - rádio FM (melhor qualidade)</li>
                  <li>• <strong>TV</strong>: 54-890 MHz - televisão aberta</li>
                  <li>• <strong>Celular</strong>: 800 MHz - 2,6 GHz - telefonia móvel (4G, 5G)</li>
                  <li>• <strong>Wi-Fi</strong>: 2,4 GHz e 5 GHz - internet sem fio</li>
                  <li>• <strong>Bluetooth</strong>: 2,4 GHz - conexão de dispositivos</li>
                </ul>
              </div>
            </div>

            {/* 2. Micro-ondas */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-orange-900 mb-3">2️⃣ Micro-ondas</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">300 MHz a 300 GHz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">1 mm a 1 m</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Baixa</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Micro-ondas têm frequência maior que ondas de rádio. Sua principal característica é que moléculas de água absorvem essa radiação e vibram, gerando calor. Por isso funcionam tão bem para aquecer alimentos.
              </p>
              <div className="bg-white p-4 rounded border border-orange-200">
                <p className="font-semibold text-slate-900 mb-2">🍳 Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Forno de micro-ondas</strong>: 2,45 GHz - aquece alimentos</li>
                  <li>• <strong>Radar</strong>: 1-40 GHz - detecção de aviões, navios, velocidade</li>
                  <li>• <strong>Satélites</strong>: 1-40 GHz - comunicação via satélite (GPS, TV)</li>
                  <li>• <strong>Astronomia</strong>: detecção de radiação cósmica de fundo</li>
                </ul>
              </div>
            </div>

            {/* 3. Infravermelho */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h4 className="text-xl font-bold text-yellow-900 mb-3">3️⃣ Infravermelho (IV)</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">300 GHz a 430 THz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">700 nm a 1 mm</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Média-baixa</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                "Infra" significa "abaixo". O infravermelho está <strong>abaixo do vermelho</strong> (menor frequência que a luz visível). Não conseguimos ver, mas sentimos como <strong>calor</strong>. Todo objeto quente emite infravermelho.
              </p>
              <div className="bg-white p-4 rounded border border-yellow-200">
                <p className="font-semibold text-slate-900 mb-2">🌡️ Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Controles remotos</strong>: LEDs infravermelhos enviam sinais para TV</li>
                  <li>• <strong>Câmeras térmicas</strong>: detectam calor (bombeiros, polícia, medicina)</li>
                  <li>• <strong>Visão noturna</strong>: detecta radiação IV emitida por objetos</li>
                  <li>• <strong>Aquecedores</strong>: lâmpadas IV aquecem ambientes</li>
                  <li>• <strong>Fibra óptica</strong>: transmissão de dados em alta velocidade</li>
                </ul>
              </div>
            </div>

            {/* 4. Luz Visível */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h4 className="text-xl font-bold text-green-900 mb-3">4️⃣ Luz Visível</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">430 THz a 770 THz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">390 nm a 700 nm</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Média</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                É a <strong>única faixa que conseguimos enxergar</strong>! Representa menos de 1% do espectro total. Cada cor corresponde a uma frequência diferente:
              </p>
              <div className="bg-white p-4 rounded border border-green-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cor</th>
                      <th className="text-left py-2">Comprimento de Onda</th>
                      <th className="text-left py-2">Frequência</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-red-600 rounded mr-2"></span>Vermelho</td>
                      <td>620-750 nm</td>
                      <td>400-484 THz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-orange-500 rounded mr-2"></span>Laranja</td>
                      <td>590-620 nm</td>
                      <td>484-508 THz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-yellow-400 rounded mr-2"></span>Amarelo</td>
                      <td>570-590 nm</td>
                      <td>508-526 THz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-green-500 rounded mr-2"></span>Verde</td>
                      <td>495-570 nm</td>
                      <td>526-606 THz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-blue-500 rounded mr-2"></span>Azul</td>
                      <td>450-495 nm</td>
                      <td>606-668 THz</td>
                    </tr>
                    <tr>
                      <td className="py-2"><span className="inline-block w-4 h-4 bg-purple-600 rounded mr-2"></span>Violeta</td>
                      <td>380-450 nm</td>
                      <td>668-789 THz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="font-semibold text-slate-900 mb-2">👁️ Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Visão humana</strong>: nossos olhos evoluíram para detectar essa faixa</li>
                  <li>• <strong>Iluminação</strong>: lâmpadas, LEDs, velas</li>
                  <li>• <strong>Fotografia</strong>: câmeras capturam luz visível</li>
                  <li>• <strong>Fibra óptica</strong>: transmissão de dados em alta velocidade</li>
                  <li>• <strong>Lasers</strong>: cirurgias, corte de materiais, leitura de códigos de barras</li>
                </ul>
              </div>
            </div>

            {/* 5. Ultravioleta */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">5️⃣ Ultravioleta (UV)</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">770 THz a 30 PHz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">10 nm a 390 nm</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Média-alta</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                "Ultra" significa "além". O ultravioleta está <strong>além do violeta</strong> (maior frequência que a luz visível). Tem energia suficiente para causar reações químicas. O Sol emite UV, mas a camada de ozônio bloqueia a maior parte.
              </p>
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-semibold text-slate-900 mb-2">☀️ Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Esterilização</strong>: lâmpadas UV matam bactérias e vírus</li>
                  <li>• <strong>Bronzeamento</strong>: UV-A estimula produção de melanina na pele</li>
                  <li>• <strong>Detecção de falsificações</strong>: cédulas e documentos têm marcas UV</li>
                  <li>• <strong>Fotolitografia</strong>: fabricação de chips de computador</li>
                  <li>• <strong>Astronomia</strong>: estudo de estrelas e galáxias</li>
                  <li>• <strong>Atenção</strong>: excesso de UV causa queimaduras, envelhecimento e câncer de pele</li>
                </ul>
              </div>
            </div>

            {/* 6. Raios X */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded p-6">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">6️⃣ Raios X</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">30 PHz a 30 EHz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">0,01 nm a 10 nm</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Alta</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Raios X têm energia suficiente para <strong>atravessar tecidos moles</strong> (músculos, pele), mas são absorvidos por materiais densos (ossos, metais). Por isso funcionam tão bem para radiografias.
              </p>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <p className="font-semibold text-slate-900 mb-2">🏥 Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Radiografia</strong>: imagens de ossos e órgãos internos</li>
                  <li>• <strong>Tomografia</strong>: imagens 3D do corpo</li>
                  <li>• <strong>Radioterapia</strong>: tratamento de câncer</li>
                  <li>• <strong>Segurança</strong>: scanners de bagagem em aeroportos</li>
                  <li>• <strong>Cristalografia</strong>: estudo da estrutura de cristais e proteínas</li>
                  <li>• <strong>Astronomia</strong>: detecção de buracos negros e estrelas de nêutrons</li>
                  <li>• <strong>Atenção</strong>: excesso de raios X danifica DNA e causa câncer</li>
                </ul>
              </div>
            </div>

            {/* 7. Raios Gama */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h4 className="text-xl font-bold text-purple-900 mb-3">7️⃣ Raios Gama (γ)</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Frequência</p>
                  <p className="text-sm text-slate-600">&gt; 30 EHz</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Comprimento de Onda</p>
                  <p className="text-sm text-slate-600">&lt; 0,01 nm</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-slate-900">Energia</p>
                  <p className="text-sm text-slate-600">Muito alta</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                São as ondas de <strong>maior frequência</strong> e <strong>maior energia</strong> do espectro. Conseguem atravessar praticamente qualquer material. São produzidos por processos nucleares (decaimento radioativo, fusão nuclear no Sol).
              </p>
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="font-semibold text-slate-900 mb-2">☢️ Aplicações Práticas:</p>
                <ul className="text-slate-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Radioterapia</strong>: tratamento de câncer (destrói células cancerígenas)</li>
                  <li>• <strong>Esterilização</strong>: esterilização de equipamentos médicos e alimentos</li>
                  <li>• <strong>Astronomia</strong>: detecção de explosões de supernovas e buracos negros</li>
                  <li>• <strong>Inspeção industrial</strong>: detecção de defeitos em metais</li>
                  <li>• <strong>Atenção</strong>: extremamente perigosos, causam danos severos ao DNA e morte celular</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tabela Resumo */}
          <div className="bg-slate-50 border-l-4 border-slate-500 rounded p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">📊 Tabela Resumo do Espectro Eletromagnético</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="border border-slate-300 px-4 py-2 text-left">Faixa</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Frequência</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Comprimento de Onda</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Energia</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Aplicações Principais</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Ondas de Rádio</td>
                    <td className="border border-slate-300 px-4 py-2">3 kHz - 300 GHz</td>
                    <td className="border border-slate-300 px-4 py-2">1 mm - 100 km</td>
                    <td className="border border-slate-300 px-4 py-2">Muito baixa</td>
                    <td className="border border-slate-300 px-4 py-2">Rádio, TV, celular, Wi-Fi</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Micro-ondas</td>
                    <td className="border border-slate-300 px-4 py-2">300 MHz - 300 GHz</td>
                    <td className="border border-slate-300 px-4 py-2">1 mm - 1 m</td>
                    <td className="border border-slate-300 px-4 py-2">Baixa</td>
                    <td className="border border-slate-300 px-4 py-2">Forno, radar, satélites</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Infravermelho</td>
                    <td className="border border-slate-300 px-4 py-2">300 GHz - 430 THz</td>
                    <td className="border border-slate-300 px-4 py-2">700 nm - 1 mm</td>
                    <td className="border border-slate-300 px-4 py-2">Média-baixa</td>
                    <td className="border border-slate-300 px-4 py-2">Controles remotos, câmeras térmicas</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Luz Visível</td>
                    <td className="border border-slate-300 px-4 py-2">430 THz - 770 THz</td>
                    <td className="border border-slate-300 px-4 py-2">390 nm - 700 nm</td>
                    <td className="border border-slate-300 px-4 py-2">Média</td>
                    <td className="border border-slate-300 px-4 py-2">Visão, fotografia, lasers</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Ultravioleta</td>
                    <td className="border border-slate-300 px-4 py-2">770 THz - 30 PHz</td>
                    <td className="border border-slate-300 px-4 py-2">10 nm - 390 nm</td>
                    <td className="border border-slate-300 px-4 py-2">Média-alta</td>
                    <td className="border border-slate-300 px-4 py-2">Esterilização, bronzeamento</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Raios X</td>
                    <td className="border border-slate-300 px-4 py-2">30 PHz - 30 EHz</td>
                    <td className="border border-slate-300 px-4 py-2">0,01 nm - 10 nm</td>
                    <td className="border border-slate-300 px-4 py-2">Alta</td>
                    <td className="border border-slate-300 px-4 py-2">Radiografia, segurança</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Raios Gama</td>
                    <td className="border border-slate-300 px-4 py-2">&gt; 30 EHz</td>
                    <td className="border border-slate-300 px-4 py-2">&lt; 0,01 nm</td>
                    <td className="border border-slate-300 px-4 py-2">Muito alta</td>
                    <td className="border border-slate-300 px-4 py-2">Radioterapia, astronomia</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-4">
              <strong>Nota:</strong> kHz = quilohertz (10³ Hz), MHz = megahertz (10⁶ Hz), GHz = gigahertz (10⁹ Hz), THz = terahertz (10¹² Hz), PHz = petahertz (10¹⁵ Hz), EHz = exahertz (10¹⁸ Hz)
            </p>
          </div>

          {/* Exemplos Resolvidos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">📝 Exemplos Resolvidos</h3>
            
            {/* Exemplo 1 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Calculando Comprimento de Onda de uma Estação de Rádio FM</h4>
              <p className="text-slate-700 mb-4">
                Uma estação de rádio FM transmite em 100 MHz. Qual é o comprimento de onda dessa transmissão?
              </p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Dados:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• f = 100 MHz = 100 × 10⁶ Hz = 10⁸ Hz</li>
                  <li>• c = 3 × 10⁸ m/s</li>
                  <li>• λ = ?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Resolução:</p>
                <p className="text-slate-700 mb-2">Usamos a relação c = λf:</p>
                <MathFormula formula="\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{10^8} = 3 \\text{ m}" />
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-1">Resposta:</p>
                <p className="text-slate-700">λ = 3 m. Ondas de rádio FM têm comprimentos de onda da ordem de metros.</p>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Energia de um Fóton de Luz Verde</h4>
              <p className="text-slate-700 mb-4">
                Calcule a energia de um fóton de luz verde com comprimento de onda λ = 550 nm.
              </p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Dados:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• λ = 550 nm = 550 × 10⁻⁹ m</li>
                  <li>• h = 6,626 × 10⁻³⁴ J·s</li>
                  <li>• c = 3 × 10⁸ m/s</li>
                  <li>• E = ?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Resolução:</p>
                <p className="text-slate-700 mb-2">Usamos E = hc/λ:</p>
                <MathFormula formula="E = \\frac{hc}{\\lambda} = \\frac{(6{,}626 \\times 10^{-34})(3 \\times 10^8)}{550 \\times 10^{-9}}" />
                <MathFormula formula="E = \\frac{1{,}988 \\times 10^{-25}}{550 \\times 10^{-9}} = 3{,}61 \\times 10^{-19} \\text{ J}" />
                <p className="text-slate-700 mt-2">Convertendo para elétron-volts (1 eV = 1,6 × 10⁻¹⁹ J):</p>
                <MathFormula formula="E = \\frac{3{,}61 \\times 10^{-19}}{1{,}6 \\times 10^{-19}} \\approx 2{,}26 \\text{ eV}" />
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-1">Resposta:</p>
                <p className="text-slate-700">E ≈ 2,26 eV. Fótons de luz visível têm energia da ordem de 2-3 eV.</p>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 3: Comparando Energias de Raios X e Ondas de Rádio</h4>
              <p className="text-slate-700 mb-4">
                Compare a energia de um fóton de raio X (λ = 0,1 nm) com a energia de um fóton de onda de rádio (λ = 1 m).
              </p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Dados:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• λₓ = 0,1 nm = 10⁻¹⁰ m (raio X)</li>
                  <li>• λᵣ = 1 m (onda de rádio)</li>
                  <li>• h = 6,626 × 10⁻³⁴ J·s</li>
                  <li>• c = 3 × 10⁸ m/s</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Resolução:</p>
                <p className="text-slate-700 mb-2">Energia do raio X:</p>
                <MathFormula formula="E_X = \\frac{hc}{\\lambda_X} = \\frac{(6{,}626 \\times 10^{-34})(3 \\times 10^8)}{10^{-10}} = 1{,}988 \\times 10^{-15} \\text{ J}" />
                <p className="text-slate-700 mb-2 mt-4">Energia da onda de rádio:</p>
                <MathFormula formula="E_r = \\frac{hc}{\\lambda_r} = \\frac{(6{,}626 \\times 10^{-34})(3 \\times 10^8)}{1} = 1{,}988 \\times 10^{-25} \\text{ J}" />
                <p className="text-slate-700 mb-2 mt-4">Razão entre as energias:</p>
                <MathFormula formula="\\frac{E_X}{E_r} = \\frac{1{,}988 \\times 10^{-15}}{1{,}988 \\times 10^{-25}} = 10^{10}" />
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-1">Resposta:</p>
                <p className="text-slate-700">Um fóton de raio X tem energia <strong>10 bilhões de vezes maior</strong> que um fóton de onda de rádio! Por isso raios X são perigosos e ondas de rádio são inofensivas.</p>
              </div>
            </div>

            {/* Exemplo 4 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 4: Frequência de um Forno de Micro-ondas</h4>
              <p className="text-slate-700 mb-4">
                Um forno de micro-ondas opera com ondas de comprimento λ = 12,2 cm. Qual é a frequência dessas ondas?
              </p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Dados:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• λ = 12,2 cm = 0,122 m</li>
                  <li>• c = 3 × 10⁸ m/s</li>
                  <li>• f = ?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Resolução:</p>
                <p className="text-slate-700 mb-2">Usamos c = λf:</p>
                <MathFormula formula="f = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8}{0{,}122} \\approx 2{,}46 \\times 10^9 \\text{ Hz} = 2{,}46 \\text{ GHz}" />
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-1">Resposta:</p>
                <p className="text-slate-700">f ≈ 2,46 GHz. Essa é a frequência padrão de fornos de micro-ondas, escolhida porque moléculas de água absorvem bem essa frequência.</p>
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
