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

        {/* LEI DE GAUSS - DIDÁTICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Lei de Gauss (Forma Integral) - Explicação Completa</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A Lei de Gauss é uma das equações mais importantes do eletromagnetismo. Ela relaciona cargas elétricas com campos elétricos. Vamos entender cada termo da fórmula:
            </p>

            {/* Fórmula Principal */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-blue-200">A Lei de Gauss em sua forma integral:</p>
              <MathFormula formula="\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{env}}{\epsilon_0}" display={true} className="text-3xl mb-6" />
            </div>

            {/* Explicação Termo a Termo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Entendendo Cada Termo:</h3>

              {/* Termo 1: ∮_S */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\oint_S" display={false} /> - O Símbolo de Integral de Superfície
                </h4>
                <p className="text-slate-700 mb-3">
                  Este símbolo significa: <strong>"integrar sobre uma superfície fechada"</strong>. O círculo no integral (∮) significa que a superfície é completamente fechada (como uma esfera, um cubo, etc.).
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>O que significa na prática?</strong></p>
                  <p className="text-sm text-slate-700">Imagine uma superfície fechada (como uma bolha de sabão). O integral ∮_S significa: "some tudo que está acontecendo em toda essa superfície". É como contar todas as linhas de campo que saem dessa bolha.</p>
                </div>
              </div>

              {/* Termo 2: E */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\vec{E}" display={false} /> - Campo Elétrico
                </h4>
                <p className="text-slate-700 mb-3">
                  O campo elétrico é a <strong>força por unidade de carga</strong> que uma carga elétrica experimenta em um ponto do espaço. Ele tem direção (por isso o símbolo de vetor →) e magnitude.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Unidade:</strong> Newton por Coulomb (N/C) ou Volt por metro (V/m)</p>
                  <p className="text-sm text-slate-700 mb-2"><strong>O que significa?</strong> Se você coloca uma carga de 1 Coulomb em um ponto onde E = 100 N/C, ela sofre uma força de 100 Newtons naquela direção.</p>
                  <p className="text-sm text-slate-700"><strong>Analogia:</strong> Pense no campo elétrico como o "vento" em torno de uma carga. Quanto mais forte o vento (maior E), mais força ele exerce nas coisas.</p>
                </div>
              </div>

              {/* Termo 3: dA */}
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="d\vec{A}" display={false} /> - Elemento Infinitesimal de Área
                </h4>
                <p className="text-slate-700 mb-3">
                  Este termo representa um <strong>pedacinho muito pequeno da superfície</strong>. Quando você integra, você soma infinitos pedacinhos.
                </p>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Unidade:</strong> Metro quadrado (m²)</p>
                  <p className="text-sm text-slate-700 mb-2"><strong>Direção especial:</strong> O vetor dA sempre aponta para FORA da superfície (normal exterior). Isso é importante!</p>
                  <p className="text-sm text-slate-700"><strong>Analogia:</strong> Imagine a superfície dividida em milhões de quadradinhos minúsculos. Cada dA é um desses quadradinhos.</p>
                </div>
              </div>

              {/* Termo 4: E·dA */}
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\vec{E} \cdot d\vec{A}" display={false} /> - Produto Escalar (Ponto)
                </h4>
                <p className="text-slate-700 mb-3">
                  O ponto (·) significa <strong>produto escalar</strong>. Ele mede quanto do campo E está apontando para FORA da superfície.
                </p>
                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>O que ele faz?</strong></p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Se E aponta para FORA: E·dA é positivo (contribui positivamente)</li>
                    <li>• Se E aponta para DENTRO: E·dA é negativo (contribui negativamente)</li>
                    <li>• Se E é paralelo à superfície: E·dA é zero (não contribui)</li>
                  </ul>
                  <p className="text-sm text-slate-700 mt-2"><strong>Analogia:</strong> É como medir quanto "vento" está realmente saindo da bolha. Se o vento vai para fora, conta como positivo. Se vai para dentro, conta como negativo.</p>
                </div>
              </div>

              {/* Termo 5: Q_env */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="Q_{env}" display={false} /> - Carga Envolvida
                </h4>
                <p className="text-slate-700 mb-3">
                  Esta é a <strong>carga elétrica total dentro da superfície fechada</strong>. É a fonte que gera o campo elétrico.
                </p>
                <div className="bg-white p-4 rounded border border-red-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Unidade:</strong> Coulomb (C)</p>
                  <p className="text-sm text-slate-700 mb-2"><strong>Exemplos:</strong></p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Se há +5 C dentro: Q_env = +5 C</li>
                    <li>• Se há -3 C dentro: Q_env = -3 C</li>
                    <li>• Se há +5 C e -2 C dentro: Q_env = +3 C (soma algébrica)</li>
                    <li>• Se não há carga dentro: Q_env = 0</li>
                  </ul>
                </div>
              </div>

              {/* Termo 6: ε₀ */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\epsilon_0" display={false} /> - Permissividade do Vácuo
                </h4>
                <p className="text-slate-700 mb-3">
                  Esta é uma <strong>constante fundamental da natureza</strong> que relaciona cargas com campos elétricos no vácuo.
                </p>
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Valor:</strong> ε₀ = 8,854 × 10⁻¹² C²/(N·m²)</p>
                  <p className="text-sm text-slate-700 mb-2"><strong>O que ela faz?</strong> Ela é um fator de conversão. Sem ela, as unidades não funcionariam. Ela também mede como o vácuo "resiste" aos campos elétricos.</p>
                  <p className="text-sm text-slate-700"><strong>Analogia:</strong> É como a "rigidez" do vácuo. Quanto menor ε₀, mais forte é o campo para uma dada carga.</p>
                </div>
              </div>
            </div>

            {/* Significado Geral */}
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">O Significado Completo da Lei de Gauss:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>O fluxo elétrico total que sai de uma superfície fechada é igual à carga total dentro dessa superfície, dividida por ε₀.</strong>
              </p>
              <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                Em outras palavras: cargas elétricas são as fontes dos campos elétricos. Quanto mais carga dentro, mais linhas de campo saem da superfície.
              </p>
            </div>

            {/* Exemplo Numérico */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo Prático Numérico:</h4>
              <p className="text-slate-700 text-sm mb-3">
                Suponha uma esfera de raio R = 0,1 m com carga Q = 1 nC (1 × 10⁻⁹ C) no centro. Qual é o fluxo elétrico através da esfera?
              </p>
              <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-2">
                <p><strong>Dados:</strong> Q_env = 1 × 10⁻⁹ C, ε₀ = 8,854 × 10⁻¹² C²/(N·m²)</p>
                <p><strong>Pela Lei de Gauss:</strong></p>
                <MathFormula formula="\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{env}}{\epsilon_0} = \frac{1 \times 10^{-9}}{8,854 \times 10^{-12}} = 113 \text{ N·m²/C}" display={true} />
                <p><strong>Interpretação:</strong> O fluxo elétrico total saindo da esfera é 113 N·m²/C. Isso significa que há 113 "linhas de campo" saindo da esfera.</p>
              </div>
            </div>
          </div>
        </div>

        {/* LEI DE GAUSS PARA MAGNETISMO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧲 Lei de Gauss para Magnetismo - Explicação Completa</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Esta lei é simples mas profunda. Ela diz que o magnetismo é fundamentalmente diferente da eletricidade:
            </p>

            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-red-200">Lei de Gauss para Magnetismo:</p>
              <MathFormula formula="\oint_S \vec{B} \cdot d\vec{A} = 0" display={true} className="text-3xl" />
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">O que cada termo significa:</h4>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>
                  <strong><MathFormula formula="\oint_S" display={false} />:</strong> Integral sobre superfície fechada (mesma coisa que antes)
                </li>
                <li>
                  <strong><MathFormula formula="\vec{B}" display={false} />:</strong> Campo magnético (medido em Tesla, T). É o campo que faz agulhas de bússola apontarem para o norte.
                </li>
                <li>
                  <strong><MathFormula formula="d\vec{A}" display={false} />:</strong> Elemento de área (mesma coisa que antes)
                </li>
                <li>
                  <strong>= 0:</strong> O resultado é SEMPRE zero! Não importa qual superfície você escolha.
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-bold text-orange-900 mb-3">Por que é zero? A Grande Diferença:</h4>
              <p className="text-slate-700 text-sm mb-3">
                <strong>Não existem monopolos magnéticos!</strong> Diferentemente de cargas elétricas que podem existir isoladas (um elétron tem carga negativa, um próton tem carga positiva), não há "carga magnética" isolada.
              </p>
              <p className="text-slate-700 text-sm mb-3">
                Sempre que há um polo norte, há um polo sul correspondente. Se você quebrar um imã ao meio, não fica um polo norte isolado - você fica com dois imãs menores, cada um com norte e sul.
              </p>
              <p className="text-slate-700 text-sm">
                Por isso o fluxo magnético é sempre zero: as linhas de campo magnético sempre formam loops fechados. Elas nunca começam ou terminam em um ponto (como as linhas de campo elétrico fazem com as cargas).
              </p>
            </div>
          </div>
        </div>

        {/* LEI DE FARADAY */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Lei de Faraday - Explicação Completa</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              A Lei de Faraday é o princípio por trás dos transformadores e geradores. Ela diz que campos magnéticos variáveis geram campos elétricos:
            </p>

            <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-purple-200">Lei de Faraday (Forma Integral):</p>
              <MathFormula formula="\oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}" display={true} className="text-3xl" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Entendendo Cada Termo:</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\oint_C" display={false} /> - Integral de Linha
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Diferentemente de antes (superfície), agora integramos sobre um <strong>caminho fechado</strong> (como um círculo ou um quadrado).
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>O que significa:</strong> Imagine um fio em forma de loop. O integral ∮_C soma o campo elétrico ao longo de todo esse fio, indo em uma direção (horária ou anti-horária).
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="d\vec{l}" display={false} /> - Elemento de Comprimento
                </h4>
                <p className="text-slate-700 text-sm">
                  Um pedacinho muito pequeno do caminho, sempre apontando na direção que você está caminhando ao redor do loop.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\Phi_B" display={false} /> - Fluxo Magnético
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  É a quantidade total de campo magnético passando através do loop. Medido em Weber (Wb) ou Tesla·m².
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Analogia:</strong> Imagine o loop como uma rede. O fluxo magnético é quanto "vento magnético" passa através dessa rede.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\frac{d\Phi_B}{dt}" display={false} /> - Taxa de Variação do Fluxo
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Isto mede <strong>como rápido o fluxo magnético está mudando</strong> com o tempo.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Exemplos:</strong>
                </p>
                <ul className="text-sm text-slate-700 space-y-1 mt-2">
                  <li>• Se o fluxo aumenta: dΦ_B/dt é positivo</li>
                  <li>• Se o fluxo diminui: dΦ_B/dt é negativo</li>
                  <li>• Se o fluxo é constante: dΦ_B/dt = 0 (nada acontece!)</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  O Sinal Negativo (Lei de Lenz)
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  O sinal negativo (-) é <strong>muito importante</strong>. Ele é a Lei de Lenz: a natureza se opõe às mudanças!
                </p>
                <p className="text-slate-700 text-sm">
                  Se o fluxo magnético está aumentando, o campo elétrico induzido vai tentar criar um campo magnético que se opõe a esse aumento. É como a natureza dizendo "não, não vou deixar você mudar tão facilmente!"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">O Significado Completo da Lei de Faraday:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>Um campo magnético variável no tempo induz um campo elétrico ao redor de um caminho fechado. A força do campo elétrico induzido é proporcional à taxa de variação do fluxo magnético.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* LEI DE AMPÈRE-MAXWELL */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Lei de Ampère-Maxwell - Explicação Completa</h2>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Esta é a equação que Maxwell modificou. Ela diz que campos magnéticos são gerados por correntes elétricas E por campos elétricos variáveis:
            </p>

            <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-xl p-8 shadow-lg">
              <p className="text-center text-sm mb-3 text-green-200">Lei de Ampère-Maxwell (Forma Integral):</p>
              <MathFormula formula="\oint_C \vec{B} \cdot d\vec{l} = \mu_0 \left( I_{env} + \epsilon_0 \frac{d\Phi_E}{dt} \right)" display={true} className="text-2xl" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Entendendo Cada Termo:</h3>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\oint_C \vec{B} \cdot d\vec{l}" display={false} /> - Circulação do Campo Magnético
                </h4>
                <p className="text-slate-700 text-sm">
                  Integral de linha do campo magnético ao redor de um caminho fechado. Mede quanto o campo magnético "gira" ao redor do caminho.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\mu_0" display={false} /> - Permeabilidade do Vácuo
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Constante fundamental que relaciona correntes com campos magnéticos no vácuo.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Valor:</strong> μ₀ = 4π × 10⁻⁷ T·m/A (Tesla·metro por Ampère)
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="I_{env}" display={false} /> - Corrente Envolvida
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  A corrente elétrica real que passa através do caminho fechado. Medida em Ampères (A).
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Analogia:</strong> Quanto mais corrente passa através do loop, mais forte é o campo magnético ao redor dele. É como quanto mais água passa por um cano, mais "redemoinho" se forma ao redor.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\frac{d\Phi_E}{dt}" display={false} /> - Taxa de Variação do Fluxo Elétrico
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Mede como rápido o fluxo elétrico está mudando com o tempo. Esta é a <strong>inovação de Maxwell</strong>!
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>O que significa:</strong> Mesmo sem corrente real, se o campo elétrico está mudando, ele gera um campo magnético. Isto é essencial para explicar ondas eletromagnéticas.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3 text-lg">
                  <MathFormula formula="\epsilon_0 \frac{d\Phi_E}{dt}" display={false} /> - Corrente de Deslocamento
                </h4>
                <p className="text-slate-700 text-sm mb-3">
                  Este termo foi adicionado por Maxwell. É uma "corrente" que não é corrente real, mas tem o mesmo efeito de gerar campo magnético.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Exemplo prático:</strong> Em um capacitor carregando, há corrente real nos fios, mas entre as placas não há corrente real - apenas campo elétrico aumentando. A corrente de deslocamento explica por que há campo magnético entre as placas!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">O Significado Completo da Lei de Ampère-Maxwell:</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>Correntes elétricas E campos elétricos variáveis geram campos magnéticos. A força do campo magnético é proporcional à corrente real mais a "corrente de deslocamento".</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Resumo das Quatro Equações</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li><strong>1. Lei de Gauss:</strong> Cargas geram campos elétricos</li>
            <li><strong>2. Lei de Gauss Magnética:</strong> Não há monopolos magnéticos</li>
            <li><strong>3. Lei de Faraday:</strong> Campos magnéticos variáveis geram campos elétricos</li>
            <li><strong>4. Lei de Ampère-Maxwell:</strong> Correntes e campos elétricos variáveis geram campos magnéticos</li>
          </ul>
          <p className="text-red-800 text-sm mt-3">
            Juntas, estas quatro equações descrevem TUDO sobre eletromagnetismo e predizem a existência de ondas eletromagnéticas (luz!).
          </p>
        </div>
      </section>
    </div>
  );
}
