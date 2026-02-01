import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicMagnetismo() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/fisica-iii">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧲</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Magnetismo</h1>
              <p className="text-xs text-slate-600">Campos magnéticos e indução eletromagnética</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introdução */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Magnetismo: A Força Invisível que Governa o Universo</h2>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              O magnetismo é um dos fenômenos mais fundamentais da natureza, intimamente relacionado à eletricidade através do eletromagnetismo. Enquanto a eletrostática estuda cargas em repouso e a eletrodinâmica estuda cargas em movimento, o magnetismo estuda os campos gerados por essas cargas em movimento e as forças que atuam sobre elas.
            </p>
            <p>
              Diferentemente do campo elétrico, que pode ser gerado por cargas isoladas, o campo magnético é sempre gerado por correntes elétricas (cargas em movimento). Essa é uma das razões pelas quais o magnetismo é mais complexo que a eletrostática: não existem "monopolos magnéticos" isolados na natureza.
            </p>
          </div>
        </section>

        {/* Lei de Ampère */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-600">
          <button
            onClick={() => toggleSection("ampere")}
            className="w-full flex items-center justify-between mb-6 hover:opacity-80 transition-opacity"
          >
            <h3 className="text-3xl font-bold text-slate-900">Lei de Ampère</h3>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${expandedSections["ampere"] ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSections["ampere"] && (
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  A Lei de Ampère é um dos pilares do eletromagnetismo clássico. Ela estabelece a relação entre um campo magnético e a corrente elétrica que o gera. Diferentemente da Lei de Coulomb, que relaciona campos elétricos a cargas pontuais, a Lei de Ampère relaciona campos magnéticos a correntes contínuas.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Forma Integral da Lei de Ampère</h4>
                <MathFormula formula="\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}" />
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>∮ B⃗ · dl⃗</strong> = integral de linha do campo magnético ao longo de um caminho fechado (Amperian loop)</li>
                    <li><strong>μ₀</strong> = permeabilidade magnética do vácuo = 4π × 10⁻⁷ T·m/A</li>
                    <li><strong>I_enc</strong> = corrente elétrica envolvida pelo caminho fechado</li>
                  </ul>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  <strong>Interpretação Física:</strong> A integral de linha do campo magnético ao redor de um caminho fechado é proporcional à corrente que passa através da superfície delimitada por esse caminho. Isso significa que correntes elétricas criam campos magnéticos que circundam a corrente.
                </p>
              </div>

              {/* Imagem da Lei de Ampère */}
              <div className="my-8">
                <img
                  src="/images/lei-ampere-pt.jpg"
                  alt="Lei de Ampère - Fio condutor com campo magnético circular"
                  className="w-full rounded-lg shadow-lg border-2 border-yellow-200"
                />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Aplicação: Campo Magnético de um Fio Reto Infinito</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Considere um fio condutor reto e infinito percorrido por uma corrente I. Queremos encontrar o campo magnético a uma distância r do fio.
                  </p>
                  <p className="text-slate-700">
                    <strong>Passo 1:</strong> Escolhemos um caminho Amperiano circular de raio r, concêntrico ao fio.
                  </p>
                  <p className="text-slate-700">
                    <strong>Passo 2:</strong> Por simetria, o campo magnético é tangencial ao círculo e tem magnitude constante em todos os pontos do caminho.
                  </p>
                  <MathFormula formula="\\oint \\vec{B} \\cdot d\\vec{l} = B \\oint dl = B(2\\pi r)" />
                  <p className="text-slate-700">
                    <strong>Passo 3:</strong> Aplicamos a Lei de Ampère:
                  </p>
                  <MathFormula formula="B(2\\pi r) = \\mu_0 I" />
                  <p className="text-slate-700">
                    <strong>Resultado Final:</strong>
                  </p>
                  <MathFormula formula="B = \\frac{\\mu_0 I}{2\\pi r}" />
                  <p className="text-slate-700">
                    O campo magnético diminui inversamente com a distância do fio e forma linhas circulares ao redor dele, conforme mostrado no diagrama acima.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Força de Lorentz */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
          <button
            onClick={() => toggleSection("lorentz")}
            className="w-full flex items-center justify-between mb-6 hover:opacity-80 transition-opacity"
          >
            <h3 className="text-3xl font-bold text-slate-900">Força de Lorentz</h3>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${expandedSections["lorentz"] ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSections["lorentz"] && (
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  A Força de Lorentz descreve a força exercida por campos elétricos e magnéticos sobre uma partícula carregada. É uma das equações mais importantes da física clássica e forma a base da dinâmica de partículas carregadas.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Forma Completa da Força de Lorentz</h4>
                <MathFormula formula="\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})" />
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>F⃗</strong> = força total sobre a partícula</li>
                    <li><strong>q</strong> = carga elétrica da partícula</li>
                    <li><strong>E⃗</strong> = campo elétrico</li>
                    <li><strong>v⃗</strong> = velocidade da partícula</li>
                    <li><strong>B⃗</strong> = campo magnético</li>
                  </ul>
                </div>
              </div>

              {/* Imagem da Força de Lorentz */}
              <div className="my-8">
                <img
                  src="/images/forca-lorentz-pt.jpg"
                  alt="Força de Lorentz - Partícula carregada em campo magnético"
                  className="w-full rounded-lg shadow-lg border-2 border-orange-200"
                />
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Análise da Componente Magnética</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Considerando apenas a força magnética (quando E⃗ = 0):
                  </p>
                  <MathFormula formula="\\vec{F}_B = q(\\vec{v} \\times \\vec{B})" />
                  <p className="text-slate-700">
                    A magnitude dessa força é:
                  </p>
                  <MathFormula formula="F_B = qvB\\sin(\\theta)" />
                  <p className="text-slate-700">
                    <strong>Onde θ é o ângulo entre v⃗ e B⃗.</strong>
                  </p>
                  <p className="text-slate-700">
                    <strong>Características importantes:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>A força é sempre perpendicular à velocidade (não realiza trabalho)</li>
                    <li>A força é máxima quando v⃗ ⊥ B⃗ (θ = 90°)</li>
                    <li>A força é nula quando v⃗ ∥ B⃗ (θ = 0° ou 180°)</li>
                    <li>A direção é dada pela regra da mão direita: v⃗ × B⃗</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Movimento Circular em Campo Magnético Uniforme</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Quando uma partícula carregada se move perpendicularmente a um campo magnético uniforme, a força magnética fornece a aceleração centrípeta necessária para o movimento circular.
                  </p>
                  <p className="text-slate-700">
                    <strong>Equação do movimento:</strong>
                  </p>
                  <MathFormula formula="qvB = \\frac{mv^2}{r}" />
                  <p className="text-slate-700">
                    Resolvendo para o raio da trajetória:
                  </p>
                  <MathFormula formula="r = \\frac{mv}{qB}" />
                  <p className="text-slate-700">
                    A frequência angular (ciclotron) é:
                  </p>
                  <MathFormula formula="\\omega_c = \\frac{qB}{m}" />
                  <p className="text-slate-700">
                    E o período de revolução é:
                  </p>
                  <MathFormula formula="T = \\frac{2\\pi m}{qB}" />
                  <p className="text-slate-700 font-semibold">
                    Nota importante: O período é independente da velocidade! Isso é o princípio dos ciclotrons e espectrômetros de massa.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Lei de Indução de Faraday */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
          <button
            onClick={() => toggleSection("faraday")}
            className="w-full flex items-center justify-between mb-6 hover:opacity-80 transition-opacity"
          >
            <h3 className="text-3xl font-bold text-slate-900">Lei de Indução de Faraday</h3>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${expandedSections["faraday"] ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSections["faraday"] && (
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  A Lei de Indução de Faraday é um dos resultados mais importantes do eletromagnetismo. Ela estabelece que uma variação no fluxo magnético através de uma superfície induz uma força eletromotriz (tensão) no circuito que delimita essa superfície.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Lei de Faraday</h4>
                <MathFormula formula="\\varepsilon = -\\frac{d\\Phi_B}{dt}" />
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>ε</strong> = força eletromotriz induzida (em Volts)</li>
                    <li><strong>Φ_B</strong> = fluxo magnético através da superfície (em Weber = T·m²)</li>
                    <li><strong>dΦ_B/dt</strong> = taxa de variação do fluxo magnético</li>
                    <li><strong>Sinal negativo</strong> = Lei de Lenz (oposição à mudança)</li>
                  </ul>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  <strong>Definição do Fluxo Magnético:</strong> O fluxo magnético através de uma superfície é definido como:
                </p>
              </div>

              <MathFormula formula="\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} = BA\\cos(\\theta)" />

              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  Para um campo uniforme perpendicular à superfície: Φ_B = BA
                </p>
              </div>

              {/* Imagem da Lei de Faraday */}
              <div className="my-8">
                <img
                  src="/images/inducao-faraday-pt.jpg"
                  alt="Lei de Indução de Faraday - Bobina com fluxo magnético variável"
                  className="w-full rounded-lg shadow-lg border-2 border-red-200"
                />
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Lei de Lenz</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    O sinal negativo na Lei de Faraday representa a Lei de Lenz: <strong>a corrente induzida sempre flui em uma direção que se opõe à mudança no fluxo magnético que a produziu.</strong>
                  </p>
                  <p className="text-slate-700">
                    Isso significa:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Se o fluxo magnético aumenta, a corrente induzida cria um campo que o reduz</li>
                    <li>Se o fluxo magnético diminui, a corrente induzida cria um campo que o aumenta</li>
                    <li>A Lei de Lenz é uma manifestação do princípio de conservação de energia</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Exemplo: Bobina em Campo Magnético Variável</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Considere uma bobina com N espiras, cada uma com área A, em um campo magnético uniforme que varia no tempo: B(t) = B₀ sin(ωt)
                  </p>
                  <p className="text-slate-700">
                    <strong>Passo 1:</strong> Calcular o fluxo magnético total:
                  </p>
                  <MathFormula formula="\\Phi_B = NBA = NB_0 A \\sin(\\omega t)" />
                  <p className="text-slate-700">
                    <strong>Passo 2:</strong> Aplicar a Lei de Faraday:
                  </p>
                  <MathFormula formula="\\varepsilon = -\\frac{d\\Phi_B}{dt} = -NB_0 A \\omega \\cos(\\omega t)" />
                  <p className="text-slate-700">
                    <strong>Amplitude da tensão induzida:</strong>
                  </p>
                  <MathFormula formula="\\varepsilon_0 = NB_0 A \\omega" />
                  <p className="text-slate-700">
                    Observações importantes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>A tensão induzida é proporcional ao número de espiras (N)</li>
                    <li>A tensão induzida é proporcional à taxa de variação (ω)</li>
                    <li>A tensão induzida é proporcional à área da bobina (A)</li>
                    <li>A tensão induzida está 90° fora de fase com o fluxo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Campo Magnético de um Solenóide */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <button
            onClick={() => toggleSection("solenoid")}
            className="w-full flex items-center justify-between mb-6 hover:opacity-80 transition-opacity"
          >
            <h3 className="text-3xl font-bold text-slate-900">Campo Magnético de um Solenóide</h3>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${expandedSections["solenoid"] ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSections["solenoid"] && (
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Um solenóide é uma bobina cilíndrica de fio condutor enrolado em forma de hélice. É um dos dispositivos mais importantes em eletromagnetismo, pois produz campos magnéticos intensos e uniformes no seu interior.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Campo Magnético Dentro de um Solenóide Ideal</h4>
                <MathFormula formula="B = \\mu_0 n I" />
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>B</strong> = campo magnético no interior do solenóide</li>
                    <li><strong>μ₀</strong> = permeabilidade magnética do vácuo = 4π × 10⁻⁷ T·m/A</li>
                    <li><strong>n</strong> = número de espiras por unidade de comprimento (espiras/metro)</li>
                    <li><strong>I</strong> = corrente elétrica no fio</li>
                  </ul>
                </div>
              </div>

              {/* Imagem do Solenóide */}
              <div className="my-8">
                <img
                  src="/images/campo-magnetico-solenoid-pt.jpg"
                  alt="Campo Magnético de um Solenóide"
                  className="w-full rounded-lg shadow-lg border-2 border-blue-200"
                />
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Características do Campo Magnético em um Solenóide</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Interior do Solenóide:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Campo magnético uniforme e paralelo ao eixo</li>
                      <li>Magnitude constante: B = μ₀nI</li>
                      <li>Direção determinada pela regra da mão direita</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Exterior do Solenóide:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Campo magnético muito fraco (aproximadamente nulo para solenóide ideal)</li>
                      <li>Linhas de campo saem do pólo norte e entram no pólo sul</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Indutância de um Solenóide</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    A indutância é a capacidade de um dispositivo armazenar energia em um campo magnético. Para um solenóide, ela é definida como:
                  </p>
                  <MathFormula formula="L = \\mu_0 n^2 V = \\mu_0 n^2 A l" />
                  <p className="text-slate-700">
                    Ou, em termos do número total de espiras N = nl:
                  </p>
                  <MathFormula formula="L = \\mu_0 \\frac{N^2 A}{l}" />
                  <div className="mt-4 space-y-2 text-sm text-slate-700">
                    <p><strong>Onde:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>L</strong> = indutância (em Henry = H)</li>
                      <li><strong>V</strong> = volume do solenóide</li>
                      <li><strong>A</strong> = área da seção transversal</li>
                      <li><strong>l</strong> = comprimento do solenóide</li>
                      <li><strong>N</strong> = número total de espiras</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Transformadores */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <button
            onClick={() => toggleSection("transformer")}
            className="w-full flex items-center justify-between mb-6 hover:opacity-80 transition-opacity"
          >
            <h3 className="text-3xl font-bold text-slate-900">Transformadores</h3>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${expandedSections["transformer"] ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSections["transformer"] && (
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Um transformador é um dispositivo que utiliza a indução eletromagnética para converter tensões alternadas. É um dos equipamentos mais importantes na transmissão e distribuição de energia elétrica.
                </p>
              </div>

              {/* Imagem do Transformador */}
              <div className="my-8">
                <img
                  src="/images/transformador-pt.jpg"
                  alt="Transformador Elétrico"
                  className="w-full rounded-lg shadow-lg border-2 border-green-200"
                />
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Equação do Transformador Ideal</h4>
                <MathFormula formula="\\frac{V_1}{V_2} = \\frac{N_1}{N_2}" />
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>V₁</strong> = tensão no primário</li>
                    <li><strong>V₂</strong> = tensão no secundário</li>
                    <li><strong>N₁</strong> = número de espiras no primário</li>
                    <li><strong>N₂</strong> = número de espiras no secundário</li>
                  </ul>
                </div>
              </div>

              <div className="bg-lime-50 p-6 rounded-lg border-2 border-lime-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Relação de Correntes em um Transformador Ideal</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Para um transformador ideal (sem perdas), a potência é conservada:
                  </p>
                  <MathFormula formula="P_1 = P_2 \\Rightarrow V_1 I_1 = V_2 I_2" />
                  <p className="text-slate-700">
                    Combinando com a equação anterior:
                  </p>
                  <MathFormula formula="\\frac{I_1}{I_2} = \\frac{N_2}{N_1}" />
                  <p className="text-slate-700">
                    <strong>Interpretação:</strong> A corrente é inversamente proporcional ao número de espiras. Um transformador que aumenta a tensão (step-up) reduz a corrente, e vice-versa.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Tipos de Transformadores</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Transformador Step-Up (Elevador):</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>N2 &gt; N1</li>
                      <li>V2 &gt; V1 (tensão aumenta)</li>
                      <li>I2 &lt; I1 (corrente diminui)</li>
                      <li>Usado na transmissão de energia a longas distâncias</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Transformador Step-Down (Abaixador):</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>N2 &lt; N1</li>
                      <li>V2 &lt; V1 (tensão diminui)</li>
                      <li>I2 &gt; I1 (corrente aumenta)</li>
                      <li>Usado para reduzir tensão para uso doméstico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg border-2 border-slate-300">
                <h4 className="font-bold text-lg mb-4 text-slate-900">Por que Transformadores na Transmissão de Energia?</h4>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    A transmissão de energia elétrica a longas distâncias enfrenta um problema crítico: a perda de energia por efeito Joule na resistência dos fios.
                  </p>
                  <MathFormula formula="P_{\\text{perda}} = I^2 R" />
                  <p className="text-slate-700">
                    Como a perda é proporcional ao quadrado da corrente, reduzir a corrente é muito mais eficaz do que reduzir a resistência. Por isso:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>Na usina geradora: transformador step-up aumenta a tensão e reduz a corrente</li>
                    <li>Transmissão: corrente baixa reduz perdas por efeito Joule</li>
                    <li>Na distribuição local: transformador step-down reduz a tensão para níveis seguros</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Resumo e Conclusão */}
        <section className="mb-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-lg p-8 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Resumo: Os Pilares do Magnetismo</h3>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Lei de Ampère:</strong> Correntes elétricas criam campos magnéticos. A integral de linha do campo magnético ao redor de um caminho fechado é proporcional à corrente envolvida.
            </p>
            <p>
              <strong>Força de Lorentz:</strong> Cargas em movimento em um campo magnético experimentam uma força perpendicular à sua velocidade. Isso leva ao movimento circular de partículas carregadas.
            </p>
            <p>
              <strong>Lei de Faraday:</strong> Uma variação no fluxo magnético induz uma força eletromotriz. A Lei de Lenz garante que a corrente induzida se opõe à mudança que a produziu.
            </p>
            <p>
              <strong>Solenóides e Transformadores:</strong> Aplicações práticas do eletromagnetismo que permitem gerar campos magnéticos intensos e converter tensões alternadas com alta eficiência.
            </p>
          </div>
        </section>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t-2 border-slate-200">
          <Link href="/fisica-iii">
            <Button variant="outline" size="lg">
              ← Voltar
            </Button>
          </Link>
          <Link href="/ia-resolver">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Resolver Questões com IA
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
