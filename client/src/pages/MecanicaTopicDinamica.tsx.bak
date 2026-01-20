import { Link } from "wouter";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function MecanicaTopicDinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/mecanica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Dinâmica - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Mecânica</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Dinâmica: O Estudo das Forças</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Rigorosa</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Dinâmica é o ramo da Mecânica que estuda as causas do movimento, ou seja, as forças.</strong> Ela responde a pergunta: "Por que o objeto se move assim?"
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                A Dinâmica é fundamentada nas três Leis de Newton, que relacionam forças, massa e aceleração.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">🎯 Conceitos Fundamentais</h4>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Força (F):</strong> Ação que altera o estado de movimento ou repouso de um corpo. Unidade: Newton (N = kg·m/s²).</p>
                <p><strong>Massa (m):</strong> Medida da inércia de um corpo. Propriedade intrínseca, não depende da gravidade.</p>
                <p><strong>Peso (P):</strong> Força gravitacional. P = mg. Varia com a gravidade local.</p>
                <p><strong>Normal (N):</strong> Força de contato perpendicular à superfície.</p>
                <p><strong>Atrito (f):</strong> Força que se opõe ao movimento relativo entre superfícies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 1: LEIS DE NEWTON ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1️⃣ As Três Leis de Newton</h2>
          
          <div className="space-y-8">
            {/* 1ª LEI */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1ª Lei: Inércia</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3">
                  <strong>"Um corpo em repouso permanece em repouso, e um corpo em movimento permanece em movimento uniforme, a menos que uma força resultante atue sobre ele."</strong>
                </p>
                <MathFormula formula="\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0" display={true} />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm"><strong>Interpretação:</strong> Se a força resultante é nula, o corpo está em equilíbrio (repouso ou MRU).</p>
              </div>
            </div>

            {/* 2ª LEI */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2ª Lei: Princípio Fundamental da Dinâmica</h3>
              
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3">
                  <strong>"A força resultante é igual ao produto da massa pela aceleração."</strong>
                </p>
                <MathFormula formula="\\vec{F}_{res} = m \\cdot \\vec{a}" display={true} />
                <p className="text-slate-700 text-sm mt-3">Ou em componentes:</p>
                <MathFormula formula="F_x = m \\cdot a_x \\quad ; \\quad F_y = m \\cdot a_y" display={true} />
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Consequências Importantes:</p>
                  <p className="text-slate-700 text-sm">• Força e aceleração são vetores na mesma direção</p>
                  <p className="text-slate-700 text-sm">• Quanto maior a massa, menor a aceleração para mesma força</p>
                  <p className="text-slate-700 text-sm">• Unidade de força: 1 N = 1 kg·m/s²</p>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Força Resultante (Soma Vetorial):</p>
                  <MathFormula formula="F_{res} = \\sqrt{F_x^2 + F_y^2}" display={true} />
                </div>
              </div>
            </div>

            {/* 3ª LEI */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3ª Lei: Ação e Reação</h3>
              
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3">
                  <strong>"Se um corpo A exerce uma força sobre um corpo B, então B exerce uma força igual e oposta sobre A."</strong>
                </p>
                <MathFormula formula="\\vec{F}_{A \\rightarrow B} = -\\vec{F}_{B \\rightarrow A}" display={true} />
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Características Essenciais:</p>
                  <p className="text-slate-700 text-sm">• Ação e reação atuam em corpos diferentes</p>
                  <p className="text-slate-700 text-sm">• Têm mesma magnitude e direções opostas</p>
                  <p className="text-slate-700 text-sm">• Nunca se anulam (atuam em corpos diferentes!)</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-slate-700 text-sm"><strong>Erro Comum:</strong> Dizer que ação e reação se anulam. ERRADO! Elas atuam em corpos diferentes, portanto não se cancelam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: FORÇAS ESPECIAIS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">2️⃣ Forças Especiais e Suas Características</h2>
          
          <div className="space-y-8">
            {/* PESO */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A. Peso (P)</h3>
              
              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Peso é a força gravitacional exercida pela Terra sobre um corpo.</strong></p>
                <MathFormula formula="P = m \\cdot g" display={true} />
                <p className="text-slate-700 text-sm mt-3">Onde: m = massa (kg), g = aceleração da gravidade (m/s²)</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-red-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Diferenças: Massa vs Peso</p>
                  <p className="text-slate-700 text-sm"><strong>Massa:</strong> Propriedade intrínseca, não muda com a gravidade. Unidade: kg.</p>
                  <p className="text-slate-700 text-sm"><strong>Peso:</strong> Força gravitacional, varia com g. Unidade: N.</p>
                  <p className="text-slate-700 text-sm mt-2">Na Lua (g ≈ 1,6 m/s²): Peso é 1/6 do peso na Terra, mas massa é a mesma!</p>
                </div>
              </div>
            </div>

            {/* NORMAL */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">B. Força Normal (N)</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Força normal é a força de contato perpendicular à superfície.</strong></p>
                <p className="text-slate-700 text-sm">Ela surge sempre que há contato entre superfícies. A normal é uma força de reação que impede a penetração.</p>
              </div>

              <div className="bg-white border border-blue-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Casos Especiais:</p>
                <p className="text-slate-700 text-sm"><strong>1. Superfície Horizontal:</strong> N = P = mg</p>
                <p className="text-slate-700 text-sm"><strong>2. Superfície Inclinada (ângulo θ):</strong> N = mg cos(θ)</p>
                <p className="text-slate-700 text-sm"><strong>3. Elevador Acelerado para Cima:</strong> N = m(g + a)</p>
                <p className="text-slate-700 text-sm"><strong>4. Elevador Acelerado para Baixo:</strong> N = m(g - a)</p>
              </div>
            </div>

            {/* ATRITO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">C. Força de Atrito (f)</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Atrito Estático (f_s):</p>
                  <p className="text-slate-700 text-sm mb-2">Atua quando não há movimento relativo. Pode variar de 0 até um máximo.</p>
                  <MathFormula formula="0 \\leq f_s \\leq \\mu_s \\cdot N" display={true} />
                  <p className="text-slate-700 text-sm mt-2">Onde: μ_s = coeficiente de atrito estático</p>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Atrito Cinético (f_k):</p>
                  <p className="text-slate-700 text-sm mb-2">Atua quando há movimento relativo. É constante.</p>
                  <MathFormula formula="f_k = \\mu_k \\cdot N" display={true} />
                  <p className="text-slate-700 text-sm mt-2">Onde: mu_k = coeficiente de atrito cinético (mu_k &lt; mu_s)</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-slate-700 text-sm"><strong>Propriedade Importante:</strong> Atrito cinético é sempre menor que atrito estático máximo. Por isso é mais fácil manter um objeto em movimento do que começar a movê-lo.</p>
                </div>
              </div>
            </div>

            {/* TRAÇÃO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">D. Força de Tração (T)</h3>
              
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Tração é a força transmitida por um fio, corda ou cabo.</strong></p>
                <p className="text-slate-700 text-sm">Propriedades:</p>
                <p className="text-slate-700 text-sm">• Atua ao longo da corda</p>
                <p className="text-slate-700 text-sm">• Em uma corda ideal (sem massa), a tração é a mesma em toda parte</p>
                <p className="text-slate-700 text-sm">• Sempre puxa (nunca empurra)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: APLICAÇÕES PRÁTICAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">3️⃣ Aplicações Práticas: Problemas Clássicos</h2>
          
          <div className="space-y-8">
            {/* PROBLEMA 1 */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border border-red-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 1: Bloco em Plano Inclinado (ESPCEX)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Um bloco de massa m = 5 kg está em um plano inclinado de ângulo θ = 30°. O coeficiente de atrito cinético é μ_k = 0,2. Determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) A aceleração do bloco descendo o plano</p>
                <p className="text-slate-700 text-sm mb-3">b) A força de atrito atuante</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Decomposição de Forças</strong></p>
                  <p className="ml-4">Paralela ao plano: P_paralela = mg sin(30°) = 5 × 10 × 0,5 = 25 N</p>
                  <p className="ml-4">Perpendicular ao plano: P_perp = mg cos(30°) = 5 × 10 × (√3/2) ≈ 43,3 N</p>
                  
                  <p className="mt-3"><strong>Passo 2: Força Normal</strong></p>
                  <p className="ml-4">N = P_⊥ = 43,3 N</p>
                  
                  <p className="mt-3"><strong>Passo 3: Força de Atrito</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="f_k = \\mu_k \\cdot N = 0,2 \\times 43,3 = 8,66 \\text{ N}" display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Força Resultante (paralela ao plano)</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="F_{res} = P_\\parallel - f_k = 25 - 8,66 = 16,34 \\text{ N}" display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 5: Aceleração</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="a = \\frac{F_{res}}{m} = \\frac{16,34}{5} = 3,27 \\text{ m/s}^2" display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <p className="text-green-900 text-sm">a) a ≈ 3,27 m/s²</p>
                <p className="text-green-900 text-sm">b) f_k ≈ 8,66 N</p>
              </div>
            </div>

            {/* PROBLEMA 2 */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border border-blue-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 2: Máquina de Atwood (EFOMM)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Dois blocos de massas m₁ = 3 kg e m₂ = 5 kg estão conectados por uma corda que passa por uma polia. O bloco m₂ está pendurado e m₁ está sobre uma mesa. Desprezando atrito e a massa da corda, determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) A aceleração do sistema</p>
                <p className="text-slate-700 text-sm mb-3">b) A tração na corda</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Análise do Sistema</strong></p>
                  <p className="ml-4">Como m2 &gt; m1, o bloco m2 desce e m1 sobe.</p>
                  <p className="ml-4">Ambos têm mesma aceleração a (conectados pela corda).</p>
                  
                  <p className="mt-3"><strong>Passo 2: Equações para cada bloco</strong></p>
                  <p className="ml-4">Para m1 (subindo): T - m1*g = m1*a</p>
                  <p className="ml-4">Para m2 (descendo): m2*g - T = m2*a</p>
                  
                  <p className="mt-3"><strong>Passo 3: Somar as equações</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="m_2 g - m_1 g = m_1 a + m_2 a" display={true} />
                    <MathFormula formula="(m_2 - m_1)g = (m_1 + m_2)a" display={true} />
                    <MathFormula formula="a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5-3) \\times 10}{3+5} = \\frac{20}{8} = 2,5 \\text{ m/s}^2" display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Tração na corda</strong></p>
                  <p className="ml-4">Usar a primeira equação: T = m₁(g + a)</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="T = 3 \\times (10 + 2,5) = 3 \\times 12,5 = 37,5 \\text{ N}" display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <p className="text-green-900 text-sm">a) a = 2,5 m/s²</p>
                <p className="text-green-900 text-sm">b) T = 37,5 N</p>
              </div>
            </div>

            {/* PROBLEMA 3 */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 3: Elevador Acelerado (AFA)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Uma pessoa de massa m = 60 kg está em pé dentro de um elevador. O elevador sobe com aceleração a = 2 m/s². Determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) A força normal (aparente) que o piso exerce na pessoa</p>
                <p className="text-slate-700 text-sm mb-2">b) O peso aparente da pessoa</p>
                <p className="text-slate-700 text-sm mb-3">c) Se o elevador descesse com a mesma aceleração, qual seria a força normal?</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Elevador Subindo com Aceleração</strong></p>
                  <p className="ml-4">Força resultante deve apontar para cima (direção da aceleração).</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="N - P = ma" display={true} />
                    <MathFormula formula="N = P + ma = mg + ma = m(g + a)" display={true} />
                    <MathFormula formula="N = 60 \\times (10 + 2) = 60 \\times 12 = 720 \\text{ N}" display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 2: Peso Aparente</strong></p>
                  <p className="ml-4">O peso aparente é a força normal (o que a balança marca).</p>
                  <p className="ml-4">P_aparente = 720 N (ou 72 kgf)</p>
                  
                  <p className="mt-3"><strong>Passo 3: Elevador Descendo com Aceleração</strong></p>
                  <p className="ml-4">Força resultante aponta para baixo (direção da aceleração).</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula="P - N = ma" display={true} />
                    <MathFormula formula="N = P - ma = mg - ma = m(g - a)" display={true} />
                    <MathFormula formula="N = 60 \\times (10 - 2) = 60 \\times 8 = 480 \\text{ N}" display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <p className="text-green-900 text-sm">a) N = 720 N (subindo)</p>
                <p className="text-green-900 text-sm">b) P_aparente = 720 N (pessoa se sente mais pesada)</p>
                <p className="text-green-900 text-sm">c) N = 480 N (descendo - pessoa se sente mais leve)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RESUMO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo de Fórmulas Essenciais</h3>
          <div className="space-y-3 text-green-900 text-sm">
            <p><strong>2ª Lei de Newton:</strong> F_res = ma</p>
            <p><strong>Peso:</strong> P = mg</p>
            <p><strong>Atrito Cinético:</strong> f_k = μ_k × N</p>
            <p><strong>Atrito Estático:</strong> f_s ≤ μ_s × N</p>
            <p><strong>Plano Inclinado:</strong> N = mg cos(θ); P_∥ = mg sin(θ)</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que domina Dinâmica, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mecanica/topic/trabalho-energia">
              <Button className="bg-blue-600 hover:bg-blue-700">Trabalho e Energia</Button>
            </Link>
            <Link href="/mecanica">
              <Button variant="outline">Voltar para Mecânica</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
