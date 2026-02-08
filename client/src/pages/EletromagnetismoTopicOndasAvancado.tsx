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
              Esta é a solução mais importante da equação de onda. Descreve uma onda com uma única frequência propagando-se em uma direção específica. Todos os tipos de radiação eletromagnética (luz visível, rádio, raios-X, etc.) podem ser descritos como superposição de ondas planas monocromáticas.
            </p>
          </div>
        </div>

        {/* POLARIZAÇÃO - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔀 Polarização de Ondas Eletromagnéticas - Aprofundado</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Polarização?</h3>
              <p className="text-slate-700 leading-relaxed">
                A <strong>polarização</strong> descreve a orientação e o comportamento do campo elétrico em relação à direção de propagação da onda. É uma propriedade fundamental que afeta como as ondas interagem com a matéria.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">📚 Contexto Histórico</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Em 1808, Étienne-Louis Malus descobriu que a luz refletida em vidro se comportava de forma estranha - sua intensidade variava com ângulos específicos. Isto levou à descoberta da polarização. Mais tarde, Young e Fresnel explicaram isto usando a natureza ondulatória da luz. Hoje, polarização é fundamental em tecnologias como LCD, 3D, comunicações ópticas e filtros solares.
              </p>
            </div>

            {/* Tipos de Polarização */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Tipos de Polarização</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">1️⃣ Polarização Linear</h4>
                <p className="text-slate-700 text-sm mb-3">
                  O campo elétrico oscila em uma única direção fixa (perpendicular à propagação). É o tipo mais comum.
                </p>
                <div className="bg-white p-4 rounded border border-blue-200 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-2">Fórmula:</p>
                    <MathFormula formula="\vec{E} = E_0 \cos(kz - \omega t) \hat{x}" display={true} />
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Significado:</strong> O campo elétrico oscila apenas na direção x com amplitude E₀, enquanto a onda se propaga em z.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Exemplos:</strong> Luz do sol, luz de lâmpadas, luz de monitores LCD
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">2️⃣ Polarização Circular</h4>
                <p className="text-slate-700 text-sm mb-3">
                  O campo elétrico mantém magnitude constante mas rotaciona enquanto a onda se propaga, traçando um círculo.
                </p>
                <div className="bg-white p-4 rounded border border-green-200 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-2">Fórmula (Circular à Direita):</p>
                    <MathFormula formula="\vec{E} = E_0 [\cos(kz - \omega t) \hat{x} + \sin(kz - \omega t) \hat{y}]" display={true} />
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Significado:</strong> O campo elétrico traça um círculo no plano xy enquanto se propaga em z. A magnitude é sempre E₀.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Exemplos:</strong> Luz refletida em superfícies, radiação de antenas circulares, filmes de cristal líquido
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">3️⃣ Polarização Elíptica</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Caso geral onde o campo elétrico traça uma elipse. Polarização linear e circular são casos especiais.
                </p>
                <div className="bg-white p-4 rounded border border-orange-200 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-2">Fórmula Geral:</p>
                    <MathFormula formula="\vec{E} = E_x \cos(kz - \omega t) \hat{x} + E_y \cos(kz - \omega t + \delta) \hat{y}" display={true} />
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Significado:</strong> As componentes x e y têm amplitudes diferentes (Eₓ ≠ Eᵧ) e fases diferentes (δ). Isto cria uma elipse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEI DE MALUS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Malus - Intensidade Após Polarizador</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Quando luz polarizada passa através de um polarizador (filtro), a intensidade transmitida depende do ângulo entre a polarização da luz e o eixo do polarizador.
            </p>

            <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-purple-200">Lei de Malus:</p>
              <MathFormula formula="I = I_0 \cos^2(\theta)" display={true} className="text-3xl" />
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Explicação Termo-a-Termo:</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="font-semibold mb-1">I₀ = Intensidade incidente</p>
                    <p>Intensidade da luz que chega ao polarizador. Medida em W/m².</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="font-semibold mb-1">θ = Ângulo entre polarizações</p>
                    <p>Ângulo entre a direção de polarização da luz incidente e o eixo de transmissão do polarizador.</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="font-semibold mb-1">I = Intensidade transmitida</p>
                    <p>Intensidade da luz que sai do polarizador. Sempre menor ou igual a I₀.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">Casos Especiais:</h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>θ = 0°:</strong> I = I₀ cos²(0°) = I₀ (transmissão máxima)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>θ = 45°:</strong> I = I₀ cos²(45°) = I₀/2 (transmissão de 50%)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p><strong>θ = 90°:</strong> I = I₀ cos²(90°) = 0 (bloqueio total - polarizadores cruzados)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POLARIZADORES */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔬 Polarizadores e Filtros</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Um <strong>polarizador</strong> é um dispositivo que filtra a luz, permitindo passar apenas a componente polarizada em uma direção específica.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Tipos de Polarizadores:</h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="bg-white p-3 rounded border border-blue-200">
                    <strong>Polarizador Linear (Filtro Polaroid):</strong> Absorve uma componente do campo elétrico e transmite a outra. Usado em óculos de sol polarizados.
                  </li>
                  <li className="bg-white p-3 rounded border border-blue-200">
                    <strong>Lâmina de Quarto de Onda (λ/4):</strong> Converte polarização linear em circular. Atrasa uma componente em 90°.
                  </li>
                  <li className="bg-white p-3 rounded border border-blue-200">
                    <strong>Lâmina de Meia Onda (λ/2):</strong> Rotaciona a polarização linear. Atrasa uma componente em 180°.
                  </li>
                  <li className="bg-white p-3 rounded border border-blue-200">
                    <strong>Cristal Birrefringente:</strong> Material que tem dois índices de refração diferentes. Separa luz em componentes polarizadas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* EXEMPLOS PRÁTICOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📋 Exemplos Resolvidos</h2>
          
          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Lei de Malus com Dois Polarizadores</h4>
              <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                <p><strong>Problema:</strong> Luz não polarizada com intensidade I₀ = 100 W/m² passa por dois polarizadores. O primeiro polarizador está a 0°, o segundo a 30°. Qual é a intensidade final?</p>
                
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <p className="font-semibold mb-2">Solução:</p>
                  <p className="mb-2"><strong>Passo 1:</strong> Luz não polarizada passa pelo primeiro polarizador</p>
                  <p className="mb-2">I₁ = I₀/2 = 100/2 = 50 W/m² (metade da intensidade é transmitida)</p>
                  
                  <p className="mb-2"><strong>Passo 2:</strong> Luz polarizada passa pelo segundo polarizador a 30°</p>
                  <MathFormula formula="I_2 = I_1 \cos^2(30°) = 50 \times (\frac{\sqrt{3}}{2})^2 = 50 \times 0,75 = 37,5 \text{ W/m}^2" display={true} />
                  
                  <p className="mt-2"><strong>Resposta:</strong> A intensidade final é 37,5 W/m²</p>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Óculos Polarizados Bloqueando Reflexo</h4>
              <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                <p><strong>Problema:</strong> Luz refletida em água fica polarizada horizontalmente (paralela à superfície). Óculos com polarizador vertical bloqueiam esta luz. Se a intensidade do reflexo é 80 W/m², quanto é transmitido pelos óculos?</p>
                
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <p className="font-semibold mb-2">Solução:</p>
                  <p className="mb-2"><strong>Dados:</strong> Luz polarizada horizontalmente, polarizador vertical (90° de diferença)</p>
                  <MathFormula formula="I = I_0 \cos^2(90°) = 80 \times 0 = 0 \text{ W/m}^2" display={true} />
                  
                  <p className="mt-2"><strong>Resposta:</strong> O reflexo é completamente bloqueado! Os óculos polarizados eliminam o brilho.</p>
                </div>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 3: Encontrando o Ângulo para Transmissão de 25%</h4>
              <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                <p><strong>Problema:</strong> Luz polarizada passa por um polarizador. Qual deve ser o ângulo entre eles para que 25% da intensidade seja transmitida?</p>
                
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                  <p className="font-semibold mb-2">Solução:</p>
                  <p className="mb-2"><strong>Dado:</strong> I = 0,25 I₀</p>
                  <p className="mb-2"><strong>Passo 1:</strong> Usar Lei de Malus</p>
                  <MathFormula formula="0,25 I_0 = I_0 \cos^2(\theta)" display={true} />
                  
                  <p className="mb-2"><strong>Passo 2:</strong> Simplificar</p>
                  <MathFormula formula="\cos^2(\theta) = 0,25" display={true} />
                  
                  <p className="mb-2"><strong>Passo 3:</strong> Tirar raiz quadrada</p>
                  <MathFormula formula="\cos(\theta) = 0,5" display={true} />
                  
                  <p className="mb-2"><strong>Passo 4:</strong> Encontrar θ</p>
                  <MathFormula formula="\theta = \arccos(0,5) = 60°" display={true} />
                  
                  <p className="mt-2"><strong>Resposta:</strong> O ângulo deve ser 60°</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES PRÁTICAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🏭 Aplicações Práticas da Polarização</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">🕶️ Óculos Polarizados</h4>
              <p className="text-slate-700 text-sm">Bloqueiam reflexos em água e superfícies. O reflexo é polarizado horizontalmente, enquanto os óculos têm polarizador vertical.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">📺 Telas LCD</h4>
              <p className="text-slate-700 text-sm">Usam polarizadores e cristais líquidos para controlar a luz. Cada pixel tem dois polarizadores (entrada e saída) e cristal líquido entre eles.</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">🎬 Filmes 3D</h4>
              <p className="text-slate-700 text-sm">Usam polarização circular para enviar imagens diferentes para cada olho. Óculos 3D têm polarizadores que separam as imagens.</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">📡 Comunicações Ópticas</h4>
              <p className="text-slate-700 text-sm">Fibras ópticas usam polarização para aumentar a capacidade de transmissão. Múltiplos canais podem usar diferentes polarizações.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">☀️ Proteção Solar</h4>
              <p className="text-slate-700 text-sm">Vidros polarizados em carros reduzem o brilho do sol. Bloqueiam luz refletida em estradas e outras superfícies.</p>
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
          <h4 className="font-bold text-red-900 mb-2">Resumo: Ondas Eletromagnéticas Avançadas</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li>• Descritas pela equação de onda derivada de Maxwell</li>
            <li>• Propagam-se à velocidade c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s</li>
            <li>• Podem ter diferentes polarizações (linear, circular, elíptica)</li>
            <li>• Lei de Malus: I = I₀cos²(θ) descreve transmissão através de polarizadores</li>
            <li>• Transportam energia descrita pelo vetor de Poynting</li>
            <li>• Aplicações: óculos polarizados, LCD, 3D, comunicações ópticas</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
