import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicInducaoEletromagnetica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
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
              <p className="text-xs text-slate-600">Indução Eletromagnética</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Indução Eletromagnética</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Indução Eletromagnética?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Indução eletromagnética</strong> é o fenômeno pelo qual um campo magnético variável no tempo induz uma força eletromotriz (fem) em um circuito. Este é um dos conceitos mais importantes da física, pois é a base para o funcionamento de geradores elétricos, transformadores e praticamente toda a tecnologia de transmissão de energia.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Descoberta por Michael Faraday em 1831, a indução eletromagnética mostra que eletricidade e magnetismo são dois aspectos do mesmo fenômeno: o eletromagnetismo.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Fluxo Magnético:</strong> Medida da quantidade de campo magnético que passa através de uma superfície.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Força Eletromotriz Induzida:</strong> Tensão gerada pela variação do fluxo magnético.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Lei de Lenz:</strong> A corrente induzida sempre se opõe à variação que a causa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lei de Faraday - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Faraday - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Fluxo Magnético */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Fluxo Magnético - Conceito Fundamental
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O fluxo magnético é uma medida da quantidade de campo magnético que atravessa uma superfície. É definido como o produto do campo magnético pela área perpendicular a ele. Este conceito é central para entender a indução eletromagnética.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Definição Matemática</h4>
                    <MathFormula formula="\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta" display={true} />
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-3 text-slate-800">Significado de cada termo:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><strong>Φ_B:</strong> Fluxo magnético (Wb - Weber)</li>
                      <li><strong>B:</strong> Campo magnético (T - Tesla)</li>
                      <li><strong>A:</strong> Área da superfície (m²)</li>
                      <li><strong>θ:</strong> Ângulo entre B e a normal à superfície</li>
                      <li><strong>cos(θ):</strong> Apenas a componente perpendicular do campo contribui</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Casos Especiais Importantes</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="bg-white p-3 rounded border border-yellow-200">
                    <p className="font-bold text-yellow-800 mb-1">θ = 0° (Campo perpendicular):</p>
                    <p>Φ_B = BA (fluxo máximo)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-yellow-200">
                    <p className="font-bold text-yellow-800 mb-1">θ = 90° (Campo paralelo):</p>
                    <p>Φ_B = 0 (fluxo nulo)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-yellow-200">
                    <p className="font-bold text-yellow-800 mb-1">Interpretação Física:</p>
                    <p>O fluxo mede quantas linhas de campo atravessam a superfície. Quanto mais perpendicular o campo, maior o fluxo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Contexto Histórico e Conceitual
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Michael Faraday descobriu em 1831 que um campo magnético variável no tempo pode induzir uma força eletromotriz (fem) em um circuito. Isto foi revolucionário porque mostrou que eletricidade e magnetismo não são fenômenos independentes, mas aspectos do mesmo fenômeno: o eletromagnetismo. Enquanto Ampère mostrou que correntes geram campos magnéticos, Faraday mostrou o inverso: campos magnéticos variáveis geram correntes elétricas.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">🔗 Analogia com Lei de Ampère</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Assim como a Lei de Ampère relaciona correntes ao campo magnético, a Lei de Faraday relaciona campos magnéticos variáveis ao campo elétrico induzido:
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-200 text-sm text-slate-600 space-y-2">
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Lei de Ampère:</span>
                    <span>Corrente gera campo magnético circulante</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 min-w-fit">Lei de Faraday:</span>
                    <span>Campo magnético variável gera campo elétrico circulante</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    <p className="text-slate-700"><strong>Diferença crucial:</strong> Ampère relaciona correntes (fonte de carga) a campos magnéticos. Faraday relaciona campos magnéticos variáveis (não correntes!) a campos elétricos induzidos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulação Completa */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Formulação Completa da Lei de Faraday
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Faraday estabelece que a força eletromotriz (fem) induzida em um circuito é igual ao negativo da taxa de variação do fluxo magnético através do circuito. Esta é uma das equações de Maxwell mais importantes e fundamenta toda a tecnologia de geradores e transformadores.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-bold text-yellow-400 mb-3">Forma Integral da Lei de Faraday</h4>
                <MathFormula formula="\mathcal{E} = -\frac{d\Phi_B}{dt}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-3">Significado de cada termo:</p>
                  <ul className="space-y-2">
                    <li><strong>ε (fem induzida):</strong> Força eletromotriz em volts (V) - é a tensão induzida</li>
                    <li><strong>dΦ_B/dt:</strong> Taxa de variação do fluxo magnético (Wb/s = V)</li>
                    <li><strong>Sinal negativo (-):</strong> Indica a direção da fem (Lei de Lenz) - a fem se opõe à variação</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-purple-900 mb-3">Interpretação Física Profunda</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>1. Proporcionalidade:</strong> A fem induzida é proporcional a quão rápido o fluxo magnético muda. Se o fluxo muda lentamente, a fem é pequena. Se muda rapidamente, a fem é grande.
                  </p>
                  <p>
                    <strong>2. Sinal Negativo (Lei de Lenz):</strong> O sinal negativo não é apenas matemático - ele expressa uma lei fundamental da natureza: a corrente induzida sempre cria um campo magnético que se OPÕE à variação que a causou. Isto é conservação de energia!
                  </p>
                  <p>
                    <strong>3. Independência da Fonte:</strong> A fem é induzida não por correntes, mas por campos magnéticos VARIÁVEIS. Uma bobina em repouso em um campo magnético constante não tem fem induzida. Mas se o campo varia (aumenta ou diminui), a fem aparece.
                  </p>
                </div>
              </div>
            </div>

            {/* Lei de Lenz - APROFUNDADO */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Lei de Lenz - Aprofundamento Completo
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Lenz é muito mais que uma regra de sinal. Ela expressa um princípio fundamental da natureza: <strong>a natureza resiste às mudanças</strong>. Sempre que tentamos mudar um fluxo magnético, a natureza cria uma corrente induzida que se opõe a essa mudança.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-red-900 mb-3">Enunciado da Lei de Lenz</h4>
                <p className="text-slate-700 text-sm mb-4">
                  "A corrente induzida em um circuito flui em uma direção tal que seu campo magnético se opõe à variação do fluxo magnético que a causou."
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-bold text-red-800 mb-2">Caso 1: Fluxo Aumentando</p>
                    <p className="text-sm text-slate-700">
                      Se o fluxo magnético através de uma bobina AUMENTA, a corrente induzida cria um campo magnético que se OPÕE a esse aumento (campo contrário ao campo externo).
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-bold text-red-800 mb-2">Caso 2: Fluxo Diminuindo</p>
                    <p className="text-sm text-slate-700">
                      Se o fluxo magnético através de uma bobina DIMINUI, a corrente induzida cria um campo magnético que tenta MANTER esse fluxo (campo na mesma direção do campo externo).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Consequência: Conservação de Energia</h4>
                <p className="text-slate-700 text-sm">
                  A Lei de Lenz é uma manifestação da conservação de energia. Para mudar o fluxo magnético através de uma bobina, você precisa fazer trabalho contra a força magnética criada pela corrente induzida. Este trabalho é convertido em calor (efeito Joule) ou em energia cinética. A natureza não permite mudanças "grátis" - sempre há um custo energético!
                </p>
              </div>
            </div>

            {/* Passo a Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Passo a Passo: Resolver Problemas de Indução
              </h3>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span>Identifique o que está mudando: B, A, ou θ?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span>Calcule o fluxo magnético inicial: Φ_B = BA cos(θ)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span>Calcule o fluxo magnético final após a mudança</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span>Calcule a variação: ΔΦ_B = Φ_final - Φ_inicial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span>Calcule a taxa de variação: dΦ_B/dt = ΔΦ_B / Δt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 6:</span>
                    <span>Aplique Faraday: ε = -dΦ_B/dt (o módulo da fem)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 7:</span>
                    <span>Use Lei de Lenz para determinar a direção da corrente induzida</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">6</span>
                Exemplos Resolvidos
              </h3>
              
              <div className="space-y-6">
                {/* Exemplo 1: Bobina em Campo Variável */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 1: Bobina em Campo Magnético Variável
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Uma bobina com 100 espiras e área de 0,5 m² está em um campo magnético uniforme. O campo aumenta linearmente de 0 T para 2 T em 4 segundos. Qual é a fem induzida?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Calcular fluxo inicial:</strong>
                          <MathFormula formula="\Phi_{B,i} = B_i \cdot A = 0 \times 0,5 = 0 \text{ Wb}" display={true} />
                        </li>
                        <li>
                          <strong>Calcular fluxo final:</strong>
                          <MathFormula formula="\Phi_{B,f} = B_f \cdot A = 2 \times 0,5 = 1 \text{ Wb}" display={true} />
                        </li>
                        <li>
                          <strong>Variação do fluxo:</strong>
                          <MathFormula formula="\Delta\Phi_B = 1 - 0 = 1 \text{ Wb}" display={true} />
                        </li>
                        <li>
                          <strong>Taxa de variação:</strong>
                          <MathFormula formula="\frac{d\Phi_B}{dt} = \frac{1}{4} = 0,25 \text{ Wb/s}" display={true} />
                        </li>
                        <li>
                          <strong>Fem induzida (por espira):</strong>
                          <MathFormula formula="\mathcal{E} = -\frac{d\Phi_B}{dt} = -0,25 \text{ V}" display={true} />
                        </li>
                        <li>
                          <strong>Fem total (100 espiras):</strong>
                          <MathFormula formula="\mathcal{E}_{total} = 100 \times 0,25 = 25 \text{ V}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A fem induzida é <strong>25 V</strong>. O sinal negativo indica que a corrente induzida cria um campo que se opõe ao aumento do fluxo (Lei de Lenz).</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 2: Condutor Móvel */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 2: Condutor Móvel em Campo Magnético
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Uma barra condutora de comprimento 0,3 m move-se com velocidade 5 m/s perpendicular a um campo magnético uniforme de 0,8 T. Qual é a fem induzida entre as extremidades da barra?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Usar fórmula para condutor móvel:</strong>
                          <MathFormula formula="\mathcal{E} = BLv" display={true} />
                        </li>
                        <li>
                          <strong>Substituir valores:</strong>
                          <MathFormula formula="\mathcal{E} = 0,8 \times 0,3 \times 5" display={true} />
                        </li>
                        <li>
                          <strong>Calcular:</strong>
                          <MathFormula formula="\mathcal{E} = 1,2 \text{ V}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A fem induzida é <strong>1,2 V</strong>. Esta é a tensão que apareceria entre as extremidades da barra.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformadores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">7</span>
                Transformadores - Aplicação Prática da Lei de Faraday
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um transformador é um dispositivo que usa indução eletromagnética para converter tensões e correntes alternadas. Consiste em duas bobinas (primária e secundária) enroladas em torno de um núcleo de ferro. A Lei de Faraday é fundamental para entender seu funcionamento.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-bold text-yellow-400 mb-3">Relação de Transformação</h4>
                <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><strong>V_p, V_s:</strong> Tensões primária e secundária</li>
                    <li><strong>N_p, N_s:</strong> Número de espiras primária e secundária</li>
                    <li><strong>I_p, I_s:</strong> Correntes primária e secundária</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Conservação de Energia</h4>
                    <p className="text-sm text-orange-700">
                      Em um transformador ideal (sem perdas), a potência é conservada: P_p = P_s, ou seja, V_p I_p = V_s I_s. Se aumentamos a tensão, diminuímos a corrente proporcionalmente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo: Transformador
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um transformador tem 100 espiras na bobina primária e 500 espiras na bobina secundária. A tensão primária é 120 V. Qual é a tensão secundária? Se a corrente primária é 5 A, qual é a corrente secundária (assumindo transformador ideal)?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Calcular a tensão secundária:</strong>
                        <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p}" display={true} />
                        <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 120 \times \frac{500}{100} = 120 \times 5 = 600 \text{ V}" display={true} />
                      </li>
                      <li>
                        <strong>Calcular a corrente secundária:</strong>
                        <MathFormula formula="I_s = I_p \times \frac{N_p}{N_s} = 5 \times \frac{100}{500} = 5 \times 0,2 = 1 \text{ A}" display={true} />
                      </li>
                      <li>
                        <strong>Verificar conservação de potência:</strong>
                        <MathFormula formula="P_p = V_p I_p = 120 \times 5 = 600 \text{ W}" display={true} />
                        <MathFormula formula="P_s = V_s I_s = 600 \times 1 = 600 \text{ W}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A tensão secundária é <strong>600 V</strong> e a corrente secundária é <strong>1 A</strong>. A potência é conservada em 600 W.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-orange-900 mb-2">Próximos Tópicos</h4>
          <p className="text-orange-800 text-sm">
            Agora que você entende como campos magnéticos variáveis geram campos elétricos, o próximo passo é aprender as <strong>Equações de Maxwell</strong>, que unificam toda a teoria do eletromagnetismo.
          </p>
        </div>
      </section>
    </div>
  );
}
