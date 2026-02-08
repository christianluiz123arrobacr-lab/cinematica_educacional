import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function MecanicaTopicDinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
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
              <h1 className="text-xl font-bold text-slate-900">Mecânica</h1>
              <p className="text-xs text-slate-600">Dinâmica</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* INTRODUÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Dinâmica</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Dinâmica?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Dinâmica é o ramo da Mecânica que estuda as causas do movimento, ou seja, as forças.</strong> Enquanto a Cinemática descreve "como" os objetos se movem (velocidade, aceleração), a Dinâmica responde "por que" eles se movem assim, relacionando forças, massa e aceleração através das Leis de Newton.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Isaac Newton formulou suas três leis do movimento em 1687, revolucionando nossa compreensão do universo. Essas leis são válidas para praticamente todos os fenômenos macroscópicos e formam a base de toda a Mecânica Clássica, sendo essenciais para engenharia, física e tecnologia moderna.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Força (F):</strong> Ação que altera o estado de movimento ou repouso de um corpo. É uma grandeza vetorial. Unidade: Newton (N = kg·m/s²).</p>
                <p><strong>Massa (m):</strong> Medida da inércia de um corpo, sua resistência a mudanças de movimento. Propriedade intrínseca, não depende da gravidade local.</p>
                <p><strong>Peso (P):</strong> Força gravitacional exercida pela Terra. <MathFormula formula="P = mg" display={false} />. Varia com a gravidade local.</p>
                <p><strong>Normal (N):</strong> Força de contato perpendicular à superfície, exercida por uma superfície sobre um corpo.</p>
                <p><strong>Atrito (f):</strong> Força que se opõe ao movimento relativo entre superfícies. Pode ser estático ou cinético.</p>
              </div>
            </div>
          </div>
        </div>

        {/* LEIS DE NEWTON - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 As Três Leis de Newton - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">0</span>
                Contexto Histórico e Importância
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Isaac Newton publicou suas três leis do movimento em 1687 no livro "Philosophiæ Naturalis Principia Mathematica" (Princípios Matemáticos da Filosofia Natural). Estas leis unificaram toda a Mecânica e permitiram descrever o movimento de objetos desde uma maçã caindo até os planetas orbitando o Sol. As leis de Newton permancem válidas e são a base de toda a engenharia clássica, sendo fundamentais para projetar máquinas, estruturas e sistemas.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Por que as Leis de Newton são Fundamentais?</h4>
                <p className="text-slate-700 text-sm">
                  As Leis de Newton estabelecem a relação entre força, massa e aceleração, permitindo prever o movimento de qualquer objeto sob ação de forças conhecidas. Sem elas, seria impossível projetar máquinas, edifícios, veículos, ou compreender fenômenos naturais. São as leis mais importantes da Física Clássica e formam o alicerce de toda a tecnologia moderna.
                </p>
              </div>
            </div>

            {/* 1ª LEI */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Primeira Lei: Lei da Inércia
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Primeira Lei de Newton, também conhecida como Lei da Inércia, estabelece que um corpo em repouso permanece em repouso, e um corpo em movimento uniforme permanece em movimento uniforme, a menos que uma força resultante não-nula atue sobre ele. Esta lei define o conceito fundamental de inércia.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                  <p className="text-slate-700 mb-3 text-sm">
                    <strong>"Um corpo em repouso permanece em repouso, e um corpo em movimento permanece em movimento uniforme em linha reta, a menos que uma força resultante não-nula atue sobre ele."</strong>
                  </p>
                  <MathFormula formula="\sum \vec{F} = 0 \Rightarrow \vec{a} = 0" display={true} />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-slate-700 text-sm"><strong>Interpretação Física:</strong> Se a força resultante é nula, o corpo está em equilíbrio (repouso ou movimento retilíneo uniforme). A inércia é a tendência natural dos corpos de manter seu estado de movimento ou repouso.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Exemplos Práticos da 1ª Lei</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Freio de carro:</strong> Quando o carro freia, você continua se movendo para frente (inércia) até ser parado pelo cinto de segurança.</li>
                  <li>• <strong>Satélite em órbita:</strong> Um satélite continua em movimento circular uniforme porque a força gravitacional (centripeta) mantém a aceleração necessária.</li>
                  <li>• <strong>Disco deslizando no gelo:</strong> Um disco de hóquei continua deslizando porque o atrito é mínimo (força resultante ≈ 0).</li>
                </ul>
              </div>
            </div>

            {/* 2ª LEI */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Segunda Lei: Princípio Fundamental da Dinâmica
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Segunda Lei de Newton é a mais importante e prática. Ela estabelece que a força resultante sobre um corpo é igual ao produto de sua massa pela aceleração. Esta lei permite calcular a aceleração de um objeto conhecendo as forças que atuam sobre ele.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-4">Formulação Vetorial (Rigor Matemático)</h4>
                <MathFormula formula="\vec{F}_{res} = m \cdot \vec{a}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\vec{F}_{res}" display={false} />: Força resultante (N)</li>
                      <li><MathFormula formula="m" display={false} />: Massa do corpo (kg)</li>
                      <li><MathFormula formula="\vec{a}" display={false} />: Aceleração (m/s²)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Componentes:</p>
                    <p className="text-sm">Em componentes cartesianas:</p>
                    <MathFormula formula="F_x = m a_x \quad ; \quad F_y = m a_y \quad ; \quad F_z = m a_z" display={false} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Derivação: Por que F = ma?</h4>
                <p className="text-slate-700 text-sm mb-3">
                  A força resultante causa mudança na velocidade (aceleração). Experimentalmente, observa-se que:
                </p>
                <div className="bg-white p-3 rounded border border-green-200 text-sm text-slate-700">
                  <p className="mb-2">• Quanto maior a força aplicada, maior a aceleração produzida: <MathFormula formula="\vec{F}_{res} \propto \vec{a}" display={false} /></p>
                  <p>• Quanto maior a massa, menor a aceleração para mesma força: <MathFormula formula="\vec{a} \propto 1/m" display={false} /></p>
                  <p className="mt-2 pt-2 border-t border-green-200">Combinando: <MathFormula formula="\vec{F}_{res} \propto m \cdot \vec{a}" display={false} /> → <MathFormula formula="\vec{F}_{res} = m \cdot \vec{a}" display={false} /></p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Força Resultante!</h4>
                    <p className="text-sm text-orange-700">
                      A equação F = ma usa a <strong>força resultante</strong>, ou seja, a soma vetorial de todas as forças. Se há múltiplas forças, você deve somá-las como vetores (não apenas os módulos).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3ª LEI */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Terceira Lei: Lei da Ação e Reação
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Terceira Lei de Newton estabelece que se um corpo A exerce uma força sobre um corpo B, então o corpo B exerce uma força de igual magnitude mas sentido oposto sobre o corpo A. As forças sempre ocorrem em pares.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="bg-white border border-red-300 rounded p-4 mb-4">
                  <p className="text-slate-700 mb-3 text-sm">
                    <strong>"Para toda ação, existe uma reação igual e oposta."</strong>
                  </p>
                  <MathFormula formula="\vec{F}_{AB} = -\vec{F}_{BA}" display={true} />
                  <p className="text-sm text-slate-600 mt-2">Ou em módulos: <MathFormula formula="F_{AB} = F_{BA}" display={false} /> (mesma magnitude, sentidos opostos)</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-slate-700 text-sm"><strong>Interpretação Física:</strong> As forças sempre ocorrem em pares. Não existe uma força isolada na natureza. Quando você empurra uma parede, a parede o empurra com força igual.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Exemplos Práticos da 3ª Lei</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Foguete:</strong> O foguete expele gases para baixo (ação), os gases empurram o foguete para cima (reação).</li>
                  <li>• <strong>Salto:</strong> Você empurra o chão para baixo (ação), o chão o empurra para cima (reação).</li>
                  <li>• <strong>Colisão:</strong> Carro A bate em carro B com força F. Carro B bate em carro A com força -F (mesma magnitude, sentido oposto).</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Cuidado: Ação e Reação Atuam em Corpos Diferentes!</h4>
                    <p className="text-sm text-orange-700">
                      Um erro comum é tentar "cancelar" ação e reação. Elas atuam em corpos diferentes, portanto não se cancelam. Por exemplo, a força que o chão exerce sobre você não cancela a força que você exerce no chão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO A PASSO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📋 Passo a Passo: Resolver Problemas de Dinâmica</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <ol className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                <span><strong>Desenhe um diagrama de forças (DCL):</strong> Represente o corpo como um ponto e desenhe todas as forças atuando sobre ele com setas indicando direção e sentido.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                <span><strong>Escolha um sistema de coordenadas:</strong> Geralmente x (horizontal) e y (vertical). Alinha os eixos com as forças quando possível.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                <span><strong>Decomponha as forças:</strong> Separe cada força em componentes x e y usando trigonometria (Fx = F cos θ, Fy = F sen θ).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                <span><strong>Calcule a força resultante:</strong> Some as componentes: ΣFx e ΣFy.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                <span><strong>Aplique F = ma:</strong> Use a Segunda Lei para calcular a aceleração: a = F_res / m.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 min-w-fit">Passo 6:</span>
                <span><strong>Verifique o resultado:</strong> A aceleração deve ter a mesma direção da força resultante. Unidades devem estar corretas.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* EXEMPLOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">✅ Exemplos Resolvidos (Nível ITA/IME)</h2>
          
          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 1: Bloco em Plano Horizontal com Atrito
              </h4>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um bloco de massa m = 5 kg é puxado por uma corda com força F = 30 N em um plano horizontal. O coeficiente de atrito cinético é μ_k = 0,2. Determine a aceleração do bloco. (g = 10 m/s²)
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                    <li>
                      <strong>Forças na vertical (equilíbrio):</strong>
                      <MathFormula formula="N - P = 0 \Rightarrow N = mg = 5 \times 10 = 50 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Força de atrito cinético:</strong>
                      <MathFormula formula="f_k = \mu_k N = 0,2 \times 50 = 10 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Força resultante na horizontal:</strong>
                      <MathFormula formula="F_{res} = F - f_k = 30 - 10 = 20 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Aceleração (Segunda Lei):</strong>
                      <MathFormula formula="a = \frac{F_{res}}{m} = \frac{20}{5} = 4 \text{ m/s}^2" display={true} />
                    </li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A aceleração do bloco é <strong>4 m/s²</strong> na direção da força aplicada.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 2: Bloco em Plano Inclinado
              </h4>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um bloco de massa m = 10 kg está em um plano inclinado de θ = 30° com a horizontal. Não há atrito. Qual é a aceleração do bloco ao longo do plano? (g = 10 m/s²)
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                    <li>
                      <strong>Componente do peso ao longo do plano:</strong>
                      <MathFormula formula="P_{\parallel} = mg \sin\theta = 10 \times 10 \times \sin(30°) = 100 \times 0,5 = 50 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Componente perpendicular (equilibra com normal):</strong>
                      <MathFormula formula="P_{\perp} = mg \cos\theta = 100 \times \cos(30°) = 100 \times 0,866 = 86,6 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Força resultante ao longo do plano:</strong>
                      <MathFormula formula="F_{res} = P_{\parallel} = 50 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Aceleração:</strong>
                      <MathFormula formula="a = \frac{F_{res}}{m} = \frac{50}{10} = 5 \text{ m/s}^2" display={true} />
                    </li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A aceleração do bloco é <strong>5 m/s²</strong> ao longo do plano inclinado (para baixo).</p>
                    <p className="text-slate-700 text-sm mt-2"><strong>Observação:</strong> Note que a = g sin θ, independente da massa. Todos os objetos deslizam com mesma aceleração em um plano inclinado sem atrito.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 3: Dois Blocos Acoplados (Máquina de Atwood)
              </h4>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Dois blocos de massas m₁ = 3 kg e m₂ = 2 kg estão conectados por uma corda inextensível sobre uma polia sem atrito. O bloco m₁ está sobre uma mesa horizontal sem atrito, e m₂ está pendurado. Qual é a aceleração do sistema? (g = 10 m/s²)
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                    <li>
                      <strong>Para o bloco m₂ (descendo):</strong>
                      <MathFormula formula="m_2 g - T = m_2 a" display={true} />
                    </li>
                    <li>
                      <strong>Para o bloco m₁ (sendo puxado):</strong>
                      <MathFormula formula="T = m_1 a" display={true} />
                    </li>
                    <li>
                      <strong>Somando as equações (T se cancela):</strong>
                      <MathFormula formula="m_2 g = (m_1 + m_2) a" display={true} />
                    </li>
                    <li>
                      <strong>Aceleração:</strong>
                      <MathFormula formula="a = \frac{m_2 g}{m_1 + m_2} = \frac{2 \times 10}{3 + 2} = \frac{20}{5} = 4 \text{ m/s}^2" display={true} />
                    </li>
                    <li>
                      <strong>Tensão na corda:</strong>
                      <MathFormula formula="T = m_1 a = 3 \times 4 = 12 \text{ N}" display={true} />
                    </li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 text-sm"><strong>Resposta:</strong> Aceleração = <strong>4 m/s²</strong>, Tensão = <strong>12 N</strong>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 4 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo 4: Força em Ângulo (Nível ITA)
              </h4>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um bloco de massa m = 4 kg está em repouso sobre uma superfície horizontal. Uma força F = 20 N é aplicada em um ângulo de θ = 37° acima da horizontal. O coeficiente de atrito estático é μ_s = 0,3. Determine se o bloco se move e, se sim, qual é a aceleração. (g = 10 m/s², sen 37° = 0,6, cos 37° = 0,8)
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                    <li>
                      <strong>Componentes da força F:</strong>
                      <MathFormula formula="F_x = F \cos\theta = 20 \times 0,8 = 16 \text{ N}" display={true} />
                      <MathFormula formula="F_y = F \sin\theta = 20 \times 0,6 = 12 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Equilíbrio vertical:</strong>
                      <MathFormula formula="N + F_y = mg \Rightarrow N = 40 - 12 = 28 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Força de atrito estático máxima:</strong>
                      <MathFormula formula="f_{s,max} = \mu_s N = 0,3 \times 28 = 8,4 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Comparação:</strong> <MathFormula formula="F_x = 16 \text{ N} > f_{s,max} = 8,4 \text{ N}" display={false} /> → Bloco se move!
                    </li>
                    <li>
                      <strong>Força de atrito cinético:</strong>
                      <MathFormula formula="f_k = \mu_k N = 0,2 \times 28 = 5,6 \text{ N}" display={true} />
                    </li>
                    <li>
                      <strong>Aceleração:</strong>
                      <MathFormula formula="a = \frac{F_x - f_k}{m} = \frac{16 - 5,6}{4} = \frac{10,4}{4} = 2,6 \text{ m/s}^2" display={true} />
                    </li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O bloco se move com aceleração <strong>2,6 m/s²</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Próximos Tópicos</h4>
          <p className="text-red-800 text-sm">
            Agora que você compreende as Leis de Newton, explore <strong>Trabalho e Energia</strong>, que relacionam força e deslocamento, e <strong>Quantidade de Movimento</strong>, que estende os conceitos de dinâmica para sistemas mais complexos.
          </p>
        </div>
      </section>
    </div>
  );
}
