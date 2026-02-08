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
        {/* INTRODUÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Introdução às Equações de Maxwell</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que são as Equações de Maxwell?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                As <strong>Equações de Maxwell</strong> são um conjunto de quatro equações que descrevem completamente o comportamento dos campos elétricos e magnéticos. Formuladas por James Clerk Maxwell em 1865, elas unificam toda a teoria do eletromagnetismo e são fundamentais para a física moderna. Estas equações mostram que luz é uma onda eletromagnética e predizem a existência de ondas eletromagnéticas, revolucionando nossa compreensão da natureza.
              </p>
              <p className="text-slate-700 leading-relaxed">
                As Equações de Maxwell podem ser expressas em duas formas equivalentes: <strong>forma integral</strong> (mais intuitiva, usada em problemas com simetria) e <strong>forma diferencial</strong> (mais rigorosa matematicamente, usada em análises locais).
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 As Quatro Equações de Maxwell</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">1.</span>
                  <span><strong>Lei de Gauss:</strong> Cargas elétricas geram campos elétricos. Fluxo elétrico através de superfície fechada = carga envolvida.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">2.</span>
                  <span><strong>Lei de Gauss para Magnetismo:</strong> Não existem monopolos magnéticos. Fluxo magnético através de qualquer superfície fechada é zero.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">3.</span>
                  <span><strong>Lei de Faraday:</strong> Campos magnéticos variáveis geram campos elétricos. Variação de fluxo magnético induz força eletromotriz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">4.</span>
                  <span><strong>Lei de Ampère-Maxwell:</strong> Correntes e campos elétricos variáveis geram campos magnéticos. Circulação de campo magnético = corrente + corrente de deslocamento.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FORMAS INTEGRAIS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">∮ Formas Integrais das Equações de Maxwell</h2>
          
          <div className="space-y-8">
            {/* Contexto */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto: Por que Formas Integrais?
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A forma integral das Equações de Maxwell é mais intuitiva e prática para resolver problemas com simetria (esférica, cilíndrica, planar). Ela relaciona campos em superfícies ou caminhos fechados com as fontes (cargas, correntes) envolvidas. A forma integral é ideal quando há simetria que permite simplificar os cálculos.
              </p>
            </div>

            {/* Lei de Gauss */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Lei de Gauss (Forma Integral)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Gauss relaciona o fluxo elétrico através de uma superfície fechada com a carga elétrica total envolvida por essa superfície. É uma das formas mais poderosas para calcular campos elétricos em situações com simetria.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{env}}{\epsilon_0}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\oint_S" display={false} />: Integral de superfície sobre superfície fechada S</li>
                      <li><MathFormula formula="\vec{E}" display={false} />: Campo elétrico (N/C)</li>
                      <li><MathFormula formula="d\vec{A}" display={false} />: Elemento de área (normal para fora)</li>
                      <li><MathFormula formula="Q_{env}" display={false} />: Carga envolvida (C)</li>
                      <li><MathFormula formula="\epsilon_0" display={false} />: Permissividade do vácuo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Interpretação Física:</p>
                    <p className="text-sm">O fluxo elétrico (linhas de campo) que sai de uma superfície fechada é proporcional à carga dentro dela. Cargas positivas geram fluxo para fora, cargas negativas para dentro.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6 mb-4">
                <h4 className="font-bold text-slate-900 mb-2">Exemplo: Campo de Esfera Uniformemente Carregada</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Uma esfera de raio R tem carga total Q uniformemente distribuída. Calcule o campo elétrico a uma distância r do centro (r &gt; R).
                </p>
                <div className="bg-white p-3 rounded border border-green-200 text-sm text-slate-700">
                  <p className="mb-2"><strong>Solução:</strong> Por simetria, o campo é radial e tem mesmo módulo em qualquer ponto a distância r. Escolha superfície gaussiana esférica de raio r:</p>
                  <MathFormula formula="\oint_S \vec{E} \cdot d\vec{A} = E \cdot 4\pi r^2 = \frac{Q}{\epsilon_0}" display={true} />
                  <MathFormula formula="E = \frac{Q}{4\pi\epsilon_0 r^2} = \frac{kQ}{r^2}" display={true} />
                </div>
              </div>
            </div>

            {/* Lei de Gauss para Magnetismo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Lei de Gauss para Magnetismo (Forma Integral)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Esta lei estabelece que não existem monopolos magnéticos isolados. O fluxo magnético através de qualquer superfície fechada é sempre zero, pois as linhas de campo magnético sempre formam loops fechados.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint_S \vec{B} \cdot d\vec{A} = 0" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Interpretação Física:</p>
                  <p>Diferentemente de cargas elétricas que podem existir isoladas, não há "carga magnética" isolada. Sempre que há um polo norte, há um polo sul correspondente. As linhas de campo magnético nunca começam ou terminam - sempre formam loops fechados.</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Diferença Fundamental</h4>
                    <p className="text-sm text-orange-700">
                      Lei de Gauss elétrica: <MathFormula formula="\oint \vec{E} \cdot d\vec{A} = Q/\epsilon_0" display={false} /> (não-zero)
                      <br/>
                      Lei de Gauss magnética: <MathFormula formula="\oint \vec{B} \cdot d\vec{A} = 0" display={false} /> (sempre zero)
                      <br/>
                      Isso reflete a ausência de monopolos magnéticos na natureza.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lei de Faraday */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Lei de Faraday (Forma Integral)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Faraday estabelece que uma variação de fluxo magnético através de uma superfície induz uma força eletromotriz (fem) ao redor do caminho que delimita essa superfície. É o princípio fundamental dos transformadores e geradores.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\oint_C" display={false} />: Integral de linha sobre caminho fechado C</li>
                      <li><MathFormula formula="\Phi_B" display={false} />: Fluxo magnético (Wb = T·m²)</li>
                      <li><MathFormula formula="d\Phi_B/dt" display={false} />: Taxa de variação do fluxo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Interpretação:</p>
                    <p className="text-sm">Campo magnético variável induz campo elétrico. O sinal negativo (Lei de Lenz) indica que o campo induzido se opõe à mudança de fluxo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lei de Ampère-Maxwell */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Lei de Ampère-Maxwell (Forma Integral)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère-Maxwell relaciona a circulação do campo magnético ao redor de um caminho fechado com a corrente elétrica que passa através desse caminho, mais um termo adicional: a corrente de deslocamento (variação do fluxo elétrico).
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\oint_C \vec{B} \cdot d\vec{l} = \mu_0 \left( I_{env} + \epsilon_0 \frac{d\Phi_E}{dt} \right)" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="I_{env}" display={false} />: Corrente envolvida (A)</li>
                      <li><MathFormula formula="\Phi_E" display={false} />: Fluxo elétrico (N·m²/C)</li>
                      <li><MathFormula formula="\mu_0" display={false} />: Permeabilidade do vácuo</li>
                      <li><MathFormula formula="\epsilon_0 \frac{d\Phi_E}{dt}" display={false} />: Corrente de deslocamento</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Inovação de Maxwell:</p>
                    <p className="text-sm">O termo de corrente de deslocamento foi adicionado por Maxwell. Ele permite que campos elétricos variáveis gerem campos magnéticos, mesmo sem corrente real. Isso é essencial para explicar ondas eletromagnéticas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORMAS DIFERENCIAIS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">∇ Formas Diferenciais das Equações de Maxwell</h2>
          
          <div className="space-y-8">
            {/* Contexto */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto: Operadores Diferenciais
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A forma diferencial das Equações de Maxwell usa operadores vetoriais: divergência (∇·) e rotacional (∇×). Estas formas descrevem o comportamento local dos campos em cada ponto do espaço, sem precisar de simetria. São mais gerais mas requerem conhecimento de cálculo vetorial.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Operadores Vetoriais Essenciais</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <p><strong>Divergência (∇·V):</strong> Mede quanto um campo "sai" de um ponto. Se ∇·E &gt; 0, há carga positiva. Se ∇·E &lt; 0, há carga negativa.</p>
                  <p><strong>Rotacional (∇×V):</strong> Mede quanto um campo "gira" em torno de um ponto. Se ∇×E ≠ 0, o campo não é conservativo e há mudança de fluxo magnético.</p>
                  <p><strong>Laplaciano (∇²V):</strong> Combinação de divergência e gradiente. Mede a curvatura de um campo.</p>
                </div>
              </div>
            </div>

            {/* Lei de Gauss Diferencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Lei de Gauss (Forma Diferencial)
              </h3>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <p><MathFormula formula="\nabla \cdot \vec{E}" display={false} />: Divergência do campo elétrico (1/m)</p>
                  <p><MathFormula formula="\rho" display={false} />: Densidade de carga (C/m³)</p>
                  <p className="mt-3 text-yellow-300"><strong>Interpretação:</strong> A divergência do campo elétrico em um ponto é proporcional à densidade de carga naquele ponto. Cargas criam divergência (fontes/sumidouros de campo).</p>
                </div>
              </div>
            </div>

            {/* Lei de Gauss para Magnetismo Diferencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Lei de Gauss para Magnetismo (Forma Diferencial)
              </h3>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla \cdot \vec{B} = 0" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Significado:</p>
                  <p>A divergência do campo magnético é sempre zero em qualquer ponto. Isso confirma que não há monopolos magnéticos - as linhas de campo magnético sempre formam loops fechados, nunca começam ou terminam.</p>
                </div>
              </div>
            </div>

            {/* Lei de Faraday Diferencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Lei de Faraday (Forma Diferencial)
              </h3>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <p><MathFormula formula="\nabla \times \vec{E}" display={false} />: Rotacional do campo elétrico (V/m²)</p>
                  <p><MathFormula formula="\partial \vec{B}/\partial t" display={false} />: Taxa de variação temporal do campo magnético (T/s)</p>
                  <p className="mt-3 text-yellow-300"><strong>Interpretação:</strong> Campo magnético variável no tempo induz um campo elétrico rotacional. O sinal negativo é a Lei de Lenz.</p>
                </div>
              </div>
            </div>

            {/* Lei de Ampère-Maxwell Diferencial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Lei de Ampère-Maxwell (Forma Diferencial)
              </h3>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla \times \vec{B} = \mu_0 \left( \vec{J} + \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right)" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\nabla \times \vec{B}" display={false} />: Rotacional do campo magnético</li>
                      <li><MathFormula formula="\vec{J}" display={false} />: Densidade de corrente (A/m²)</li>
                      <li><MathFormula formula="\partial \vec{E}/\partial t" display={false} />: Variação temporal do campo elétrico</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Inovação de Maxwell:</p>
                    <p className="text-sm">O termo <MathFormula formula="\epsilon_0 \partial \vec{E}/\partial t" display={false} /> (corrente de deslocamento) permite que campos elétricos variáveis gerem campos magnéticos, mesmo sem corrente real. Essencial para ondas eletromagnéticas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELAÇÃO ENTRE FORMAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Relação entre Formas Integral e Diferencial</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              As formas integral e diferencial das Equações de Maxwell são matematicamente equivalentes, relacionadas pelos <strong>Teorema da Divergência</strong> e <strong>Teorema de Stokes</strong>.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Teorema da Divergência (Gauss)</h4>
              <p className="text-slate-700 text-sm mb-3">
                A integral de superfície de um campo vetorial é igual à integral de volume de sua divergência:
              </p>
              <MathFormula formula="\oint_S \vec{V} \cdot d\vec{A} = \int_V (\nabla \cdot \vec{V}) dV" display={true} />
              <p className="text-slate-700 text-sm mt-3">
                <strong>Aplicação:</strong> Lei de Gauss integral → Lei de Gauss diferencial
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Teorema de Stokes</h4>
              <p className="text-slate-700 text-sm mb-3">
                A integral de linha de um campo vetorial é igual à integral de superfície de seu rotacional:
              </p>
              <MathFormula formula="\oint_C \vec{V} \cdot d\vec{l} = \int_S (\nabla \times \vec{V}) \cdot d\vec{A}" display={true} />
              <p className="text-slate-700 text-sm mt-3">
                <strong>Aplicação:</strong> Lei de Faraday integral → Lei de Faraday diferencial
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">✅ Exemplos Resolvidos (Nível ITA/IME)</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 1: Campo Elétrico de Esfera Carregada
              </h4>
              <div className="space-y-3">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Uma esfera sólida de raio R tem densidade de carga uniforme ρ. Use a Lei de Gauss para encontrar o campo elétrico em r = R/2 (dentro da esfera).
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Solução (Forma Integral):</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>Carga envolvida: <MathFormula formula="Q_{env} = \rho \cdot \frac{4}{3}\pi (R/2)^3 = \frac{\rho \pi R^3}{6}" display={false} /></li>
                    <li>Lei de Gauss: <MathFormula formula="E \cdot 4\pi (R/2)^2 = \frac{Q_{env}}{\epsilon_0}" display={true} /></li>
                    <li>Simplificando: <MathFormula formula="E = \frac{\rho R}{6\epsilon_0}" display={true} /></li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 2: Indutor com Campo Magnético Variável
              </h4>
              <div className="space-y-3">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um solenóide tem campo magnético B(t) = B₀ sin(ωt) no interior. Uma espira circular de raio r está no centro do solenóide. Calcule a fem induzida.
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Solução (Lei de Faraday):</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>Fluxo magnético: <MathFormula formula="\Phi_B = B(t) \cdot \pi r^2 = B_0 \sin(\omega t) \pi r^2" display={true} /></li>
                    <li>Lei de Faraday: <MathFormula formula="\mathcal{E} = -\frac{d\Phi_B}{dt} = -B_0 \omega \cos(\omega t) \pi r^2" display={true} /></li>
                    <li>Amplitude: <MathFormula formula="|\mathcal{E}|_{max} = B_0 \omega \pi r^2" display={true} /></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Próximos Tópicos</h4>
          <p className="text-red-800 text-sm">
            Agora que você compreende as Equações de Maxwell, explore <strong>Ondas Eletromagnéticas</strong> para ver como essas equações predizem a existência de ondas que se propagam no espaço, e <strong>Radiação Eletromagnética</strong> para entender como cargas aceleradas emitem ondas.
          </p>
        </div>
      </section>
    </div>
  );
}
