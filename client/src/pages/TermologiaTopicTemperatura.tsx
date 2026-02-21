import { Link } from "wouter";
import { ArrowLeft, Thermometer, Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function TermologiaTopicTemperatura() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Termologia</h1>
              <p className="text-xs text-slate-600">Temperatura e Escalas Termométricas</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌡️ Temperatura e Escalas Termométricas</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Temperatura?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Temperatura</strong> é uma grandeza física que mede o grau de agitação térmica das partículas de um sistema. Pense em um copo de água: as moléculas de H₂O estão constantemente se movendo, vibrando e colidindo umas com as outras. Quanto mais rápido esse movimento, maior a temperatura.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Ao contrário do que muitos pensam, temperatura <strong>não é a mesma coisa que calor</strong>. Temperatura mede a energia cinética média das partículas, enquanto calor é a energia térmica em trânsito entre corpos com temperaturas diferentes. É como a diferença entre "velocidade" (temperatura) e "movimento" (calor).
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Energia Cinética Média:</strong> Temperatura é proporcional à energia cinética média das partículas. Dobrar a temperatura absoluta (Kelvin) dobra a energia cinética média.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Equilíbrio Térmico:</strong> Dois corpos em contato atingem a mesma temperatura quando param de trocar calor. Este é o princípio dos termômetros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Zero Absoluto:</strong> A temperatura mais baixa possível é 0 K (-273,15°C), onde o movimento térmico das partículas é mínimo (não cessa completamente devido à mecânica quântica).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Escalas Termométricas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 Escalas Termométricas</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Contexto Histórico
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                No início do século XVIII, não havia um padrão universal para medir temperatura. Cada cientista usava sua própria escala, criando confusão e dificultando a comunicação científica. Em <strong>1724</strong>, o físico alemão <strong>Daniel Gabriel Fahrenheit</strong> criou a primeira escala termométrica amplamente adotada, usando mercúrio em um tubo de vidro.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Dezoito anos depois, em <strong>1742</strong>, o astrônomo sueco <strong>Anders Celsius</strong> propôs uma escala mais simples e intuitiva, baseada nos pontos de fusão e ebulição da água. Inicialmente, Celsius definiu 0° como o ponto de ebulição e 100° como o ponto de fusão — a escala foi invertida após sua morte para a forma que conhecemos hoje.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Em <strong>1848</strong>, o físico britânico <strong>William Thomson (Lord Kelvin)</strong> percebeu que deveria existir uma temperatura mínima absoluta, onde o movimento térmico das partículas seria mínimo. Ele criou a <strong>escala Kelvin</strong>, a única escala absoluta de temperatura, fundamental para a termodinâmica e a física moderna.
              </p>
            </div>

            {/* Escala Celsius */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">1</span>
                Escala Celsius (°C)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A escala Celsius é a mais usada no dia a dia em quase todo o mundo (exceto EUA). Ela é baseada em dois pontos de referência fáceis de reproduzir: o ponto de fusão do gelo (0°C) e o ponto de ebulição da água (100°C), ambos medidos à pressão atmosférica padrão (1 atm = 101.325 Pa).
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Imagine que você divide o intervalo entre gelo derretendo e água fervendo em 100 partes iguais. Cada parte é 1 grau Celsius. É simples, intuitivo e prático para o cotidiano!
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Pontos de referência:</strong> 0°C (fusão do gelo) e 100°C (ebulição da água) à pressão de 1 atm.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-4">Dedução Matemática da Escala Celsius</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Anders Celsius escolheu a água como substância de referência porque ela é abundante, pura e tem transições de fase bem definidas. Mas por que exatamente <strong>0°C e 100°C</strong>? A resposta está na simplicidade matemática e na facilidade de reprodução experimental.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 1: Escolha dos Pontos Fixos</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Celsius precisava de dois pontos de temperatura que fossem <strong>facilmente reproduzíveis</strong> em qualquer laboratório. A fusão do gelo e a ebulição da água são transições de fase que ocorrem sempre nas mesmas temperaturas (à mesma pressão), independentemente da quantidade de água.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 2: Sistema Decimal (100 Divisões)</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Por que 100 divisões e não 50, 180 ou 360? Celsius escolheu 100 porque o <strong>sistema decimal</strong> (base 10) é natural para humanos — temos 10 dedos! Isso facilita cálculos mentais e conversões.
                    </p>
                    <p className="text-sm text-slate-300">
                      Se a água congela a 0° e ferve a 100°, cada grau representa <MathFormula formula="\frac{1}{100}" display={false} /> do intervalo total. Matematicamente:
                    </p>
                    <MathFormula formula="1\,^\circ\text{C} = \frac{\Delta T_{\text{fusão-ebulição}}}{100}" display={true} className="text-lg my-3" />
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 3: Atribuição de Valores</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Celsius inicialmente definiu 0° como ebulição e 100° como fusão (invertido!). Após sua morte, a escala foi invertida para a forma atual, onde <strong>0°C = fusão</strong> (mais frio) e <strong>100°C = ebulição</strong> (mais quente), o que é mais intuitivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔬 Por Que a Água Como Referência?</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Abundância Universal:</strong> Água está disponível em qualquer lugar do mundo, facilitando a reprodução da escala em qualquer laboratório.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Pureza Controlável:</strong> É relativamente fácil obter água pura (destilada), garantindo que as transições de fase ocorram sempre nas mesmas temperaturas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Transições de Fase Nítidas:</strong> A fusão (sólido → líquido) e ebulição (líquido → gás) da água ocorrem a temperaturas bem definidas à pressão constante, sem ambiguidade.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">4.</span>
                    <p><strong>Relevância Prática:</strong> Água é fundamental para a vida e para processos industriais. Uma escala baseada em suas propriedades é naturalmente útil no cotidiano.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔍 Características da Escala Celsius</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Escala Centígrada:</strong> O nome original era "centígrada" (100 divisões), mas foi mudado para Celsius em 1948 para homenagear seu criador.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Uso Universal:</strong> Adotada pelo Sistema Internacional (SI) para uso cotidiano. Usada em meteorologia, medicina, culinária e quase todas as aplicações práticas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Temperaturas Negativas:</strong> Aceita valores negativos (abaixo de 0°C). Por exemplo, -10°C significa 10 graus abaixo do ponto de fusão do gelo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Escala Fahrenheit */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">2</span>
                Escala Fahrenheit (°F)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A escala Fahrenheit usa pontos de referência diferentes: 32°F para o ponto de fusão do gelo e 212°F para o ponto de ebulição da água. Isso cria 180 divisões entre esses dois pontos (212 - 32 = 180).
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Fahrenheit escolheu 0°F como a temperatura mais baixa que conseguiu produzir em laboratório (mistura de gelo, água e sal de amônio) e 96°F como a temperatura do corpo humano (ele errou um pouco — a temperatura corporal real é 98,6°F ou 37°C).
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Pontos de referência:</strong> 32°F (fusão do gelo) e 212°F (ebulição da água) à pressão de 1 atm.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-4">Dedução Histórica da Escala Fahrenheit</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Daniel Gabriel Fahrenheit criou sua escala em 1724, <strong>antes</strong> de Celsius. Sua escolha de pontos de referência foi mais complexa e menos intuitiva, mas tinha lógica prática para a época.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 1: Escolha do Zero (0°F)</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Fahrenheit queria que o zero de sua escala representasse a <strong>temperatura mais baixa reproduzível</strong> em laboratório na época. Ele usou uma mistura de gelo, água e sal de amônio (NH₄Cl), que atinge aproximadamente -17,8°C.
                    </p>
                    <p className="text-sm text-slate-300">
                      Essa mistura era o "frio extremo" acessível no século XVIII. Definir isso como 0°F evitava valores negativos no dia a dia (clima frio raramente fica abaixo de 0°F).
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 2: Temperatura Corporal (96°F)</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Fahrenheit inicialmente definiu 96°F como a temperatura do corpo humano. Por que 96 e não 100? Porque <strong>96 = 2⁶ × 3</strong>, um número altamente divisível, facilitando a construção de termômetros com subdivisões (1/2, 1/4, 1/8, etc.).
                    </p>
                    <p className="text-sm text-slate-300">
                      Mais tarde, descobriu-se que a temperatura corporal real é ~98,6°F (37°C), mas a escala já estava estabelecida.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 3: Pontos da Água (32°F e 212°F)</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Com 0°F e 96°F definidos, Fahrenheit mediu os pontos de fusão e ebulição da água:
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4 list-disc">
                      <li><strong>Fusão do gelo:</strong> 32°F</li>
                      <li><strong>Ebulição da água:</strong> 212°F</li>
                    </ul>
                    <p className="text-sm text-slate-300 mt-2">
                      Isso cria <strong>180 divisões</strong> entre fusão e ebulição (212 - 32 = 180). O número 180 é útil porque é divisível por muitos números (2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90), facilitando subdivisões.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-4">Dedução Matemática do Fator 9/5</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A fórmula de conversão entre Celsius e Fahrenheit contém o misterioso fator <strong>9/5 (ou 1,8)</strong>. De onde vem esse número? Vamos deduzir matematicamente.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 1: Comparar Intervalos</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Ambas as escalas usam a água como referência. Vamos comparar quantas divisões cada escala tem entre fusão e ebulição:
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-700/50 p-3 rounded">
                        <p className="font-semibold text-orange-300 mb-1">Celsius:</p>
                        <p className="text-slate-300">100°C - 0°C = <strong>100 divisões</strong></p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <p className="font-semibold text-orange-300 mb-1">Fahrenheit:</p>
                        <p className="text-slate-300">212°F - 32°F = <strong>180 divisões</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 2: Calcular a Razão</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      A razão entre as divisões é:
                    </p>
                    <MathFormula formula="\frac{\Delta T_F}{\Delta T_C} = \frac{180}{100} = \frac{9}{5} = 1{,}8" display={true} className="text-lg my-3" />
                    <p className="text-sm text-slate-300">
                      Isso significa que <strong>1°C de variação = 1,8°F de variação</strong>. A escala Fahrenheit é "mais fina" que Celsius.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 3: Deduzir a Fórmula Completa</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Para converter temperatura (não apenas variação), precisamos considerar que as escalas começam em pontos diferentes:
                    </p>
                    <ul className="text-sm text-slate-300 space-y-2 ml-4 list-disc">
                      <li>Celsius começa em 0°C (fusão da água)</li>
                      <li>Fahrenheit começa em 32°F (fusão da água)</li>
                    </ul>
                    <p className="text-sm text-slate-300 mt-3 mb-2">
                      Portanto, a fórmula completa é:
                    </p>
                    <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={true} className="text-lg my-3" />
                    <div className="bg-slate-700/50 p-3 rounded mt-3">
                      <p className="text-xs text-slate-400 mb-2">Onde cada termo significa:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                        <div><MathFormula formula="T_F" display={false} /> = Temperatura em Fahrenheit</div>
                        <div><MathFormula formula="T_C" display={false} /> = Temperatura em Celsius</div>
                        <div><MathFormula formula="\frac{9}{5}" display={false} /> = Fator de conversão (1,8)</div>
                        <div><MathFormula formula="32" display={false} /> = Offset (diferença de início)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🎯 Vantagens da Escala Fahrenheit</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Maior Precisão sem Decimais:</strong> Como 1°C = 1,8°F, a escala Fahrenheit tem "divisões menores", permitindo maior precisão sem usar casas decimais. Exemplo: 20°C = 68°F, mas 20,5°C = 69°F (número inteiro).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Menos Valores Negativos no Clima:</strong> Em regiões temperadas, a temperatura raramente fica abaixo de 0°F (-17,8°C), evitando números negativos no dia a dia.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Escala "Humana":</strong> A faixa 0°F a 100°F cobre aproximadamente as temperaturas extremas que humanos experimentam no clima (muito frio a muito quente), tornando a escala intuitiva para meteorologia.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Por Que os EUA Usam Fahrenheit?
                </h4>
                <p className="text-slate-700 text-sm">
                  Os Estados Unidos são um dos poucos países que ainda usam Fahrenheit no dia a dia. Isso é puramente histórico — quando a escala Celsius foi adotada internacionalmente, os EUA já tinham toda a infraestrutura (termômetros, livros, educação) baseada em Fahrenheit e nunca fizeram a transição completa.
                </p>
              </div>
            </div>

            {/* Escala Kelvin */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">3</span>
                Escala Kelvin (K)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A escala Kelvin é a <strong>escala absoluta</strong> de temperatura. Ela começa no <strong>zero absoluto</strong> (0 K = -273,15°C), a temperatura mais baixa possível no universo, onde o movimento térmico das partículas é mínimo.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A escala Kelvin usa a mesma "divisão" que a Celsius (1 K = 1°C de variação), mas começa em um ponto diferente. Por isso, para converter Celsius para Kelvin, basta somar 273,15.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Ponto de referência:</strong> 0 K (zero absoluto = -273,15°C). Não existem temperaturas negativas em Kelvin!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-4">O Conceito Físico do Zero Absoluto</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  O <strong>zero absoluto</strong> (0 K = -273,15°C) é a temperatura teórica mais baixa possível no universo. Mas o que isso significa fisicamente? Por que não podemos ir abaixo de 0 K?
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Temperatura e Energia Cinética Molecular</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      Temperatura <strong>não é calor</strong> — é uma medida da <strong>energia cinética média</strong> das partículas (átomos e moléculas) de um sistema. Quanto mais rápido as partículas se movem, maior a temperatura.
                    </p>
                    <p className="text-sm text-slate-300 mb-2">
                      A relação matemática exata é dada pela <strong>teoria cinética dos gases</strong>:
                    </p>
                    <MathFormula formula="\langle E_c \rangle = \frac{3}{2} k_B T" display={true} className="text-lg my-3" />
                    <div className="bg-slate-700/50 p-3 rounded mt-3">
                      <p className="text-xs text-slate-400 mb-2">Onde cada termo significa:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                        <div><MathFormula formula="\langle E_c \rangle" display={false} /> = Energia cinética média por partícula</div>
                        <div><MathFormula formula="k_B" display={false} /> = Constante de Boltzmann (1,38 × 10⁻²³ J/K)</div>
                        <div><MathFormula formula="T" display={false} /> = Temperatura absoluta (em Kelvin)</div>
                        <div><MathFormula formula="\frac{3}{2}" display={false} /> = Fator geométrico (3 dimensões espaciais)</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Por Que 0 K é o Limite Inferior?</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Se temperatura é proporcional à energia cinética, o que acontece quando <MathFormula formula="T \to 0" display={false} />?
                    </p>
                    <MathFormula formula="T = 0 \,\text{K} \quad \Rightarrow \quad \langle E_c \rangle = 0 \,\text{J}" display={true} className="text-lg my-3" />
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      No zero absoluto, as partículas teriam <strong>energia cinética zero</strong> — ou seja, estariam completamente paradas (classicamente). Como energia cinética não pode ser negativa (E = ½mv² ≥ 0), não existe temperatura abaixo de 0 K.
                    </p>
                    <div className="bg-yellow-900/30 border-l-2 border-yellow-500 p-3 rounded-r mt-3">
                      <p className="text-xs text-yellow-200">
                        <strong>Nota Quântica:</strong> Pela mecânica quântica, mesmo em 0 K as partículas têm uma <strong>energia de ponto zero</strong> (zero-point energy) devido ao princípio da incerteza de Heisenberg. Elas nunca param completamente!
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Terceira Lei da Termodinâmica</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      A <strong>Terceira Lei da Termodinâmica</strong> (enunciado de Nernst-Planck) afirma que:
                    </p>
                    <div className="bg-slate-700/50 p-3 rounded italic text-sm text-slate-300">
                      "É impossível atingir o zero absoluto em um número finito de processos."
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      Podemos nos aproximar arbitrariamente de 0 K (cientistas já alcançaram nanókelvins, 10⁻⁹ K!), mas nunca atingir exatamente 0 K. Cada etapa de resfriamento fica exponencialmente mais difícil.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-4">Dedução da Relação Kelvin-Celsius</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Por que <strong>T(K) = T(°C) + 273,15</strong>? De onde vem esse número 273,15?
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 1: Medir o Zero Absoluto em Celsius</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Lord Kelvin (William Thomson) estudou a <strong>lei dos gases ideais</strong>:
                    </p>
                    <MathFormula formula="PV = nRT" display={true} className="text-lg my-3" />
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Ele percebeu que, se resfriasse um gás mantendo pressão e volume constantes, a temperatura cairia linearmente. Extrapolando para <MathFormula formula="P \to 0" display={false} /> (pressão zero), ele encontrou:
                    </p>
                    <MathFormula formula="T_{\text{zero absoluto}} \approx -273{,}15\,^\circ\text{C}" display={true} className="text-lg my-3" />
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Passo 2: Definir Nova Escala Começando em 0 K</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Kelvin propôs uma nova escala onde o <strong>zero absoluto = 0 K</strong> (não -273,15°C). Isso torna a escala <strong>absoluta</strong> — sem valores negativos.
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                      Como a "divisão" de 1 K = 1°C (mesma variação), a relação é:
                    </p>
                    <MathFormula formula="T_K = T_C + 273{,}15" display={true} className="text-lg my-3" />
                    <p className="text-sm text-slate-300">
                      Exemplo: 0°C (fusão da água) = 273,15 K. 100°C (ebulição) = 373,15 K.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔬 Por Que Kelvin é Obrigatória em Física?</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Lei dos Gases Ideais:</strong> <MathFormula formula="PV = nRT" display={false} /> só funciona com T em Kelvin. Se usar Celsius, valores negativos de T dariam pressões negativas (impossível!).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Energia Cinética Molecular:</strong> <MathFormula formula="\langle E_c \rangle = \frac{3}{2} k_B T" display={false} /> exige T em Kelvin para proporcionalidade direta. Dobrar T (em K) dobra a energia.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Entropia e Termodinâmica:</strong> A entropia <MathFormula formula="S = k_B \ln \Omega" display={false} /> e todas as leis da termodinâmica usam Kelvin como unidade natural de temperatura.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">4.</span>
                    <p><strong>Radiação de Corpo Negro:</strong> A lei de Stefan-Boltzmann <MathFormula formula="P = \sigma A T^4" display={false} /> (potência radiada) exige T em Kelvin. Usar Celsius daria resultados completamente errados!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversões */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">4</span>
                Fórmulas de Conversão
              </h3>
              
              {/* Celsius ↔ Fahrenheit */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Conversão Celsius ↔ Fahrenheit</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Celsius para Fahrenheit:</p>
                    <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={true} className="text-2xl mb-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Fahrenheit para Celsius:</p>
                    <MathFormula formula="T_C = \frac{5}{9} (T_F - 32)" display={true} className="text-2xl" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="T_F" display={false} />: <strong>Temperatura em Fahrenheit</strong> (°F)</li>
                      <li><MathFormula formula="T_C" display={false} />: <strong>Temperatura em Celsius</strong> (°C)</li>
                      <li><MathFormula formula="\frac{9}{5}" display={false} /> ou <MathFormula formula="1{,}8" display={false} />: <strong>Fator de conversão</strong> (razão entre as divisões)</li>
                      <li><MathFormula formula="32" display={false} />: <strong>Deslocamento</strong> (0°C = 32°F)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-400 mb-2">Por Que 9/5 e 32?</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>Celsius: 100 divisões (0°C a 100°C)</li>
                      <li>Fahrenheit: 180 divisões (32°F a 212°F)</li>
                      <li>Razão: <MathFormula formula="\frac{180}{100} = \frac{9}{5}" display={false} /></li>
                      <li>Deslocamento: 0°C = 32°F</li>
                    </ul>
                  </div>
                </div>

                {/* Dedução Matemática Completa */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">📐 Dedução Matemática Completa</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      Vamos deduzir a fórmula <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={false} /> do zero, usando apenas os pontos de referência das duas escalas.
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: Estabelecer Pontos de Referência</strong></p>
                      <p>Sabemos que:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Fusão do gelo: 0°C = 32°F</li>
                        <li>Ebulição da água: 100°C = 212°F</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: Calcular a Razão entre as Escalas</strong></p>
                      <p>O intervalo entre fusão e ebulição em cada escala:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Celsius: ΔT<sub>C</sub> = 100 - 0 = 100 divisões</li>
                        <li>Fahrenheit: ΔT<sub>F</sub> = 212 - 32 = 180 divisões</li>
                      </ul>
                      <p className="mt-2">A razão entre as escalas é:</p>
                      <MathFormula formula="\frac{\Delta T_F}{\Delta T_C} = \frac{180}{100} = \frac{9}{5} = 1{,}8" display={true} />
                    </div>

                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: Construir a Equação Linear</strong></p>
                      <p>Uma conversão entre escalas lineares tem a forma geral:</p>
                      <MathFormula formula="T_F = a \cdot T_C + b" display={true} />
                      <p>Onde <strong>a</strong> é a inclinação (razão) e <strong>b</strong> é o deslocamento.</p>
                      <p className="mt-2">Já sabemos que a = 9/5. Agora precisamos encontrar b.</p>
                    </div>

                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 4: Determinar o Deslocamento (b)</strong></p>
                      <p>Usamos o ponto de referência 0°C = 32°F:</p>
                      <MathFormula formula="32 = \frac{9}{5} \cdot 0 + b" display={true} />
                      <MathFormula formula="32 = 0 + b" display={true} />
                      <MathFormula formula="b = 32" display={true} />
                    </div>

                    <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-700">
                      <p><strong>Resultado Final:</strong></p>
                      <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={true} className="text-xl" />
                      <p className="mt-2">Esta fórmula funciona para <strong>qualquer</strong> temperatura, não apenas para os pontos de referência!</p>
                    </div>
                  </div>
                </div>

                {/* Exemplo Numérico Detalhado */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">🔢 Exemplo Numérico Detalhado</h5>
                  <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 space-y-3 text-sm text-slate-300">
                    <p><strong>Problema:</strong> Converter 25°C para Fahrenheit.</p>
                    
                    <div className="space-y-2">
                      <p><strong>Solução:</strong></p>
                      <p><strong>Passo 1:</strong> Identificar a fórmula correta</p>
                      <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={true} />
                      
                      <p><strong>Passo 2:</strong> Substituir T<sub>C</sub> = 25°C</p>
                      <MathFormula formula="T_F = \frac{9}{5} \cdot 25 + 32" display={true} />
                      
                      <p><strong>Passo 3:</strong> Calcular a multiplicação</p>
                      <MathFormula formula="T_F = \frac{9 \times 25}{5} + 32 = \frac{225}{5} + 32 = 45 + 32" display={true} />
                      
                      <p><strong>Passo 4:</strong> Somar o deslocamento</p>
                      <MathFormula formula="T_F = 45 + 32 = 77 \text{ °F}" display={true} />
                      
                      <div className="bg-green-900/30 p-3 rounded border border-green-700 mt-3">
                        <p><strong>Resposta:</strong> 25°C = <strong>77°F</strong></p>
                        <p className="text-xs mt-1">Verificação: 77°F é uma temperatura agradável, típica de um dia quente de primavera. Faz sentido!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caso Especial: -40°C = -40°F */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">🎯 Caso Especial: O Ponto de Igualdade</h5>
                  <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4 space-y-3 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      Existe <strong>um único ponto</strong> onde Celsius e Fahrenheit têm o mesmo valor numérico. Vamos encontrá-lo!
                    </p>
                    
                    <div className="space-y-2">
                      <p><strong>Condição:</strong> T<sub>C</sub> = T<sub>F</sub> = x (queremos encontrar x)</p>
                      
                      <p><strong>Passo 1:</strong> Substituir na fórmula</p>
                      <MathFormula formula="x = \frac{9}{5} x + 32" display={true} />
                      
                      <p><strong>Passo 2:</strong> Isolar x</p>
                      <MathFormula formula="x - \frac{9}{5} x = 32" display={true} />
                      <MathFormula formula="\frac{5x - 9x}{5} = 32" display={true} />
                      <MathFormula formula="\frac{-4x}{5} = 32" display={true} />
                      
                      <p><strong>Passo 3:</strong> Resolver para x</p>
                      <MathFormula formula="-4x = 32 \times 5 = 160" display={true} />
                      <MathFormula formula="x = -\frac{160}{4} = -40" display={true} />
                      
                      <div className="bg-purple-900/50 p-3 rounded border border-purple-600 mt-3">
                        <p><strong>Resultado:</strong> <MathFormula formula="-40 \text{ °C} = -40 \text{ °F}" display={false} /></p>
                        <p className="text-xs mt-1">Este é o único ponto onde as duas escalas se encontram! Temperatura extremamente fria, típica do Ártico ou da Antártida.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Celsius ↔ Kelvin */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Conversão Celsius ↔ Kelvin</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Celsius para Kelvin:</p>
                    <MathFormula formula="T_K = T_C + 273{,}15" display={true} className="text-2xl mb-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Kelvin para Celsius:</p>
                    <MathFormula formula="T_C = T_K - 273{,}15" display={true} className="text-2xl" />
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="font-semibold text-orange-400 mb-3">Termo a Termo:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><MathFormula formula="T_K" display={false} />: <strong>Temperatura em Kelvin</strong> (K) — sem símbolo de grau!</li>
                    <li><MathFormula formula="T_C" display={false} />: <strong>Temperatura em Celsius</strong> (°C)</li>
                    <li><MathFormula formula="273{,}15" display={false} />: <strong>Zero absoluto em Celsius</strong> (-273,15°C = 0 K)</li>
                  </ul>
                </div>

                {/* Dedução Física da Constante 273,15 */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">📐 Dedução Física da Constante 273,15</h5>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      A constante 273,15 não foi escolhida arbitrariamente! Ela representa a <strong>temperatura do zero absoluto em Celsius</strong>. Vamos deduzir seu valor usando a lei dos gases ideais.
                    </p>
                    
                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 1: Lei dos Gases Ideais</strong></p>
                      <p>A lei dos gases ideais relaciona pressão, volume e temperatura:</p>
                      <MathFormula formula="PV = nRT" display={true} />
                      <p className="mt-2">Onde <strong>T</strong> deve estar em Kelvin (escala absoluta). Para um gás a volume constante:</p>
                      <MathFormula formula="P \propto T" display={true} />
                      <p>A pressão é diretamente proporcional à temperatura absoluta.</p>
                    </div>

                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 2: Encontrar o Zero Absoluto</strong></p>
                      <p>Se extrapolarmos a pressão de um gás até zero (P → 0), encontramos a temperatura mais baixa possível:</p>
                      <MathFormula formula="P \to 0 \implies T \to 0 \text{ K}" display={true} />
                      <p className="mt-2">Experimentalmente, medindo a pressão de gases em diferentes temperaturas e extrapolando até P = 0, encontramos:</p>
                      <MathFormula formula="T_{\text{zero absoluto}} \approx -273{,}15 \text{ °C}" display={true} />
                    </div>

                    <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                      <p><strong>Passo 3: Definir a Escala Kelvin</strong></p>
                      <p>Lord Kelvin definiu sua escala de modo que:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>0 K</strong> = zero absoluto = -273,15°C</li>
                        <li><strong>1 K</strong> = mesma divisão que 1°C (mesmo tamanho de grau)</li>
                      </ul>
                      <p className="mt-2">Portanto, a relação é simplesmente um <strong>deslocamento</strong>:</p>
                      <MathFormula formula="T_K = T_C + 273{,}15" display={true} />
                    </div>

                    <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-700">
                      <p><strong>Por Que Não Há Fator Multiplicativo?</strong></p>
                      <p className="mt-2 leading-relaxed">
                        Diferente de Celsius ↔ Fahrenheit (que tem o fator 9/5), a conversão Celsius ↔ Kelvin <strong>não tem fator multiplicativo</strong> porque ambas as escalas usam a <strong>mesma divisão</strong>: 1°C = 1 K. A única diferença é o ponto zero!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exemplo Numérico Detalhado */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">🔢 Exemplo Numérico Detalhado</h5>
                  <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 space-y-3 text-sm text-slate-300">
                    <p><strong>Problema:</strong> Converter 300 K para Celsius.</p>
                    
                    <div className="space-y-2">
                      <p><strong>Solução:</strong></p>
                      <p><strong>Passo 1:</strong> Identificar a fórmula correta</p>
                      <MathFormula formula="T_C = T_K - 273{,}15" display={true} />
                      
                      <p><strong>Passo 2:</strong> Substituir T<sub>K</sub> = 300 K</p>
                      <MathFormula formula="T_C = 300 - 273{,}15" display={true} />
                      
                      <p><strong>Passo 3:</strong> Calcular a subtração</p>
                      <MathFormula formula="T_C = 26{,}85 \text{ °C}" display={true} />
                      
                      <div className="bg-green-900/30 p-3 rounded border border-green-700 mt-3">
                        <p><strong>Resposta:</strong> 300 K = <strong>26,85°C</strong></p>
                        <p className="text-xs mt-1">Verificação: ~27°C é uma temperatura ambiente agradável. Faz sentido!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curiosidade: Temperatura Corporal */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h5 className="font-semibold text-orange-400 mb-4">🎯 Curiosidade: Temperatura Corporal Humana</h5>
                  <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4 space-y-3 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      A temperatura corporal normal é aproximadamente <strong>37°C</strong>. Vamos convertê-la para Kelvin:
                    </p>
                    
                    <div className="space-y-2">
                      <p><strong>Cálculo:</strong></p>
                      <MathFormula formula="T_K = 37 + 273{,}15 = 310{,}15 \text{ K}" display={true} />
                      
                      <div className="bg-purple-900/50 p-3 rounded border border-purple-600 mt-3">
                        <p><strong>Resultado:</strong> Temperatura corporal ≈ <strong>310 K</strong></p>
                        <p className="text-xs mt-1">Em física e medicina, é comum usar "310 K" como referência para temperatura corporal. Memorize este valor!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fahrenheit ↔ Kelvin */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Conversão Fahrenheit ↔ Kelvin</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Fahrenheit para Kelvin:</p>
                    <MathFormula formula="T_K = \frac{5}{9} (T_F - 32) + 273{,}15" display={true} className="text-2xl mb-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-2">De Kelvin para Fahrenheit:</p>
                    <MathFormula formula="T_F = \frac{9}{5} (T_K - 273{,}15) + 32" display={true} className="text-2xl" />
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="font-semibold text-orange-400 mb-3">Interpretação:</p>
                  <p className="text-sm text-slate-300">
                    Estas fórmulas combinam as duas conversões anteriores: primeiro converte para Celsius (intermediário), depois para Kelvin. Na prática, raramente usamos conversão direta Fahrenheit ↔ Kelvin — é mais comum passar por Celsius.
                  </p>
                </div>
              </div>

              {/* Seção Especial: Variação de Temperatura */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-4 text-xl">
                  <AlertTriangle className="w-6 h-6" />
                  Atenção: Conversão de VARIAÇÕES de Temperatura (ΔT)
                </h4>
                
                <div className="space-y-4">
                  <p className="text-slate-800 leading-relaxed">
                    Quando falamos de <strong>variação de temperatura</strong> (ΔT), as conversões são <strong>diferentes</strong> das conversões de valores absolutos! Este é um dos erros mais comuns em física.
                  </p>

                  {/* Regras para Variações */}
                  <div className="bg-white rounded-lg p-4 border border-amber-300">
                    <h5 className="font-bold text-amber-900 mb-3">📜 Regras para Variações de Temperatura</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold text-slate-900">Celsius ↔ Kelvin: <MathFormula formula="\Delta T_C = \Delta T_K" display={false} /></p>
                          <p className="text-slate-700">Uma variação de 1°C é <strong>exatamente igual</strong> a uma variação de 1 K (mesmo tamanho de grau).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <p className="font-semibold text-slate-900">Celsius ↔ Fahrenheit: <MathFormula formula="\Delta T_F = \frac{9}{5} \Delta T_C" display={false} /></p>
                          <p className="text-slate-700">Uma variação de 1°C é equivalente a uma variação de 1,8°F (graus Fahrenheit são menores).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">❌</span>
                        <div>
                          <p className="font-semibold text-red-900">ERRO COMUM: NÃO somar 32 ou 273,15 em variações!</p>
                          <p className="text-slate-700">Os deslocamentos (32 e 273,15) <strong>só se aplicam a valores absolutos</strong>, nunca a variações.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Por Que É Diferente? */}
                  <div className="bg-white rounded-lg p-4 border border-amber-300">
                    <h5 className="font-bold text-amber-900 mb-3">🧠 Por Que Variações São Diferentes?</h5>
                    <div className="space-y-3 text-sm text-slate-800">
                      <p className="leading-relaxed">
                        A diferença está na <strong>natureza do deslocamento</strong>. Quando convertemos <strong>valores absolutos</strong>, precisamos ajustar o ponto zero (adicionar 32 ou 273,15). Mas quando convertemos <strong>variações</strong>, só importa o <strong>tamanho do grau</strong>, não o ponto zero!
                      </p>
                      
                      <div className="bg-slate-100 p-3 rounded">
                        <p className="font-semibold mb-2">Analogia:</p>
                        <p className="text-xs">
                          Imagine duas réguas: uma começa em 0 cm, outra começa em 10 cm. Se você mede um objeto de <strong>5 cm de comprimento</strong>, ele terá 5 cm em ambas as réguas! A variação (comprimento) não depende do ponto zero, apenas da <strong>escala de divisão</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Exemplos Numéricos */}
                  <div className="bg-white rounded-lg p-4 border border-amber-300">
                    <h5 className="font-bold text-amber-900 mb-3">🔢 Exemplos Numéricos de Variações</h5>
                    
                    {/* Exemplo 1 */}
                    <div className="bg-blue-50 p-3 rounded mb-3">
                      <p className="font-semibold text-blue-900 mb-2">Exemplo 1: Aquecimento de água</p>
                      <p className="text-sm text-slate-700 mb-2">
                        A temperatura de um copo de água aumenta de 20°C para 30°C. Qual foi a variação em Kelvin e Fahrenheit?
                      </p>
                      <div className="space-y-1 text-sm">
                        <p><strong>Variação em Celsius:</strong> ΔT<sub>C</sub> = 30 - 20 = 10°C</p>
                        <p><strong>Variação em Kelvin:</strong> ΔT<sub>K</sub> = ΔT<sub>C</sub> = <strong>10 K</strong></p>
                        <p><strong>Variação em Fahrenheit:</strong> ΔT<sub>F</sub> = (9/5) × 10 = <strong>18°F</strong></p>
                        <p className="text-green-700 font-semibold mt-2">✅ Resposta: 10°C = 10 K = 18°F (variação)</p>
                      </div>
                    </div>

                    {/* Exemplo 2 */}
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-semibold text-purple-900 mb-2">Exemplo 2: Resfriamento</p>
                      <p className="text-sm text-slate-700 mb-2">
                        Um metal esfria 50 K. Qual foi a variação em Celsius e Fahrenheit?
                      </p>
                      <div className="space-y-1 text-sm">
                        <p><strong>Variação em Kelvin:</strong> ΔT<sub>K</sub> = -50 K (negativo = resfriamento)</p>
                        <p><strong>Variação em Celsius:</strong> ΔT<sub>C</sub> = ΔT<sub>K</sub> = <strong>-50°C</strong></p>
                        <p><strong>Variação em Fahrenheit:</strong> ΔT<sub>F</sub> = (9/5) × (-50) = <strong>-90°F</strong></p>
                        <p className="text-green-700 font-semibold mt-2">✅ Resposta: -50 K = -50°C = -90°F (resfriamento)</p>
                      </div>
                    </div>
                  </div>

                  {/* Comparação: Valor Absoluto vs Variação */}
                  <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
                    <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Comparação: Valor Absoluto vs Variação
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-red-100">
                            <th className="border border-red-300 px-3 py-2 text-left">Situação</th>
                            <th className="border border-red-300 px-3 py-2 text-center">Fórmula Correta</th>
                            <th className="border border-red-300 px-3 py-2 text-center">Exemplo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border border-red-300 px-3 py-2 font-semibold">Valor Absoluto (T)</td>
                            <td className="border border-red-300 px-3 py-2 text-center"><MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={false} /></td>
                            <td className="border border-red-300 px-3 py-2 text-center">25°C = 77°F</td>
                          </tr>
                          <tr className="bg-red-50">
                            <td className="border border-red-300 px-3 py-2 font-semibold">Variação (ΔT)</td>
                            <td className="border border-red-300 px-3 py-2 text-center"><MathFormula formula="\Delta T_F = \frac{9}{5} \Delta T_C" display={false} /></td>
                            <td className="border border-red-300 px-3 py-2 text-center">ΔT = 10°C = 18°F</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-red-800 mt-3 font-semibold">
                      ⚠️ Note que na variação NÃO aparece o "+32"! Este é o erro mais comum em provas!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">5</span>
                Passo-a-Passo: Convertendo Temperaturas
              </h3>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-4">Como Resolver Problemas de Conversão</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-slate-800">Identifique a escala de origem e destino</p>
                      <p className="text-slate-600 text-sm">Determine qual é a temperatura dada (°C, °F ou K) e para qual escala você quer converter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-slate-800">Escolha a fórmula correta</p>
                      <p className="text-slate-600 text-sm">Use a fórmula correspondente à conversão desejada. Para Celsius ↔ Kelvin, basta somar/subtrair 273,15.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-slate-800">Substitua o valor numérico</p>
                      <p className="text-slate-600 text-sm">Insira a temperatura dada na fórmula. Cuidado com os sinais (+ ou -) e com a ordem das operações.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-slate-800">Resolva a operação matemática</p>
                      <p className="text-slate-600 text-sm">Para Celsius → Fahrenheit: primeiro multiplique por 9/5 (ou 1,8), depois some 32. Para Fahrenheit → Celsius: primeiro subtraia 32, depois multiplique por 5/9.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="font-semibold text-slate-800">Verifique a razoabilidade</p>
                      <p className="text-slate-600 text-sm">Confira se o resultado faz sentido. Por exemplo: 0°C = 32°F = 273,15 K. Água ferve a 100°C = 212°F = 373,15 K.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                    <div>
                      <p className="font-semibold text-slate-800">Escreva a resposta com a unidade correta</p>
                      <p className="text-slate-600 text-sm">Sempre inclua a unidade (°C, °F ou K). Lembre-se: Kelvin não usa símbolo de grau!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                    <div>
                      <p className="font-semibold text-slate-800">Atenção especial para problemas de variação</p>
                      <p className="text-slate-600 text-sm">Se o problema pede variação de temperatura (ΔT), use: ΔT(K) = ΔT(°C) e ΔT(°F) = 1,8 × ΔT(°C). Não use as fórmulas de conversão absoluta!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">6</span>
                Aplicações Práticas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Meteorologia e Clima
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Previsões do tempo usam Celsius (maioria dos países) ou Fahrenheit (EUA). Temperaturas extremas: -89,2°C (-128,6°F) na Antártida (recorde de frio) e 56,7°C (134°F) no Vale da Morte, EUA (recorde de calor).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Medicina e Saúde
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Temperatura corporal normal: 36,5-37,5°C (97,7-99,5°F). Febre: acima de 37,8°C (100°F). Hipotermia: abaixo de 35°C (95°F). Termômetros clínicos usam Celsius (Brasil/Europa) ou Fahrenheit (EUA).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Indústria e Processos
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Siderurgia: ferro derrete a 1538°C (2800°F). Criogenia: nitrogênio líquido a 77 K (-196°C). Semicondutores: processos a temperaturas controladas com precisão de 0,1 K. Todas essas aplicações exigem conversões precisas!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Culinária e Gastronomia
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Receitas americanas usam Fahrenheit: assar bolo a 350°F (177°C), fritar a 375°F (191°C). Sous-vide: controle preciso a 55-60°C (131-140°F). Caramelização do açúcar: 160-180°C (320-356°F).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Física e Pesquisa Científica
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Lei dos gases ideais (<MathFormula formula="PV = nRT" display={false} />) exige temperatura em Kelvin. Termodinâmica: entropia, energia livre de Gibbs — todas usam K. Física de partículas: temperaturas de bilhões de Kelvin no LHC!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Astronomia e Astrofísica
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Superfície do Sol: 5778 K (5505°C). Núcleo do Sol: 15 milhões de Kelvin. Radiação cósmica de fundo: 2,7 K (-270,45°C). Estrelas mais quentes: 50.000 K. Kelvin é essencial para estudar o universo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversão entre Escalas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Conversão entre Escalas Termométricas</h2>
          
          <div className="space-y-8">
            {/* Seção 7: Introdução às Conversões */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">7</span>
                Introdução às Conversões de Temperatura
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Converter entre escalas termométricas é como <strong>traduzir entre idiomas</strong>: a temperatura física é a mesma, mas o "número" muda dependendo da "língua" (escala) que você usa. Imagine que você tem um termômetro marcando 25°C — essa mesma temperatura é 77°F ou 298,15 K. O calor das moléculas não mudou, apenas a forma de expressar esse valor!
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As conversões envolvem dois tipos de transformação: <strong>mudança de escala</strong> (multiplicar por um fator) e <strong>deslocamento</strong> (somar ou subtrair uma constante). Por exemplo, Celsius → Fahrenheit precisa multiplicar por 9/5 (porque os graus Fahrenheit são menores) e somar 32 (porque o zero de Fahrenheit está em outro lugar).
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">💡 Três Analogias Práticas</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">1. Réguas com Escalas Diferentes</h5>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Imagine medir uma mesa com uma régua em centímetros (100 cm) e outra em polegadas (39,37 in). O tamanho da mesa não mudou — apenas a unidade! Celsius, Fahrenheit e Kelvin são como réguas diferentes medindo a mesma "temperatura física".
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">2. Moedas Internacionais</h5>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Converter temperatura é como converter dinheiro: 1 dólar = 5 reais (taxa de câmbio). Da mesma forma, 1°C = 1,8°F (fator 9/5). Mas cuidado: há também um "offset" — o zero de cada escala está em lugar diferente, como se cada país tivesse um "ponto de partida" diferente para contar o dinheiro.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-2">3. Relógios com Fusos Horários</h5>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Quando são 12h em São Paulo, são 16h em Londres (deslocamento de +4h). O "momento" é o mesmo, mas o número no relógio muda. Celsius e Kelvin têm essa relação: K = °C + 273,15 (deslocamento fixo, sem mudança de escala).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 8: Celsius ↔ Fahrenheit */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">8</span>
                Conversão Celsius ↔ Fahrenheit
              </h3>
              
              {/* Contexto Histórico */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Por que 32 e 9/5?
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Fahrenheit definiu 0°F como a temperatura de uma mistura de gelo, água e sal (ponto mais frio que conseguiu reproduzir) e 96°F como a temperatura do corpo humano (na verdade, 98,6°F). Com esses pontos, a água congela a 32°F e ferve a 212°F — uma diferença de <strong>180 graus Fahrenheit</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Celsius, por outro lado, definiu 0°C (fusão) e 100°C (ebulição) — uma diferença de <strong>100 graus Celsius</strong>. A razão entre as escalas é 180/100 = <strong>9/5 = 1,8</strong>. Isso significa que cada grau Celsius corresponde a 1,8 graus Fahrenheit. O "32" vem do deslocamento: quando Celsius marca 0°C, Fahrenheit marca 32°F.
                </p>
              </div>

              {/* Fórmula Celsius → Fahrenheit */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula: Celsius → Fahrenheit</h4>
                <div className="bg-slate-800 rounded p-4 mb-4">
                  <MathFormula>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Ou, equivalentemente:
                </p>
                <div className="bg-slate-800 rounded p-4">
                  <MathFormula>{`T_F = 1{,}8 \\cdot T_C + 32`}</MathFormula>
                </div>
              </div>

              {/* Termo-a-Termo */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Significado de Cada Termo</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2"><MathFormula inline>{`T_F`}</MathFormula></p>
                    <p className="text-slate-300 text-sm">
                      <strong>Temperatura em Fahrenheit</strong> que queremos calcular. Unidade: <strong>°F</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2"><MathFormula inline>{`T_C`}</MathFormula></p>
                    <p className="text-slate-300 text-sm">
                      <strong>Temperatura em Celsius</strong> que conhecemos. Unidade: <strong>°C</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2"><MathFormula inline>{`\\frac{9}{5}`}</MathFormula> (ou 1,8)</p>
                    <p className="text-slate-300 text-sm">
                      <strong>Fator de escala</strong> — razão entre o tamanho dos graus. Como há 180°F entre fusão e ebulição da água (vs 100°C), cada grau Celsius = 1,8 graus Fahrenheit. <strong>Adimensional</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2">32</p>
                    <p className="text-slate-300 text-sm">
                      <strong>Deslocamento</strong> — diferença entre os zeros das escalas. Quando Celsius marca 0°C (fusão do gelo), Fahrenheit marca 32°F. Unidade: <strong>°F</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedução Matemática */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">📐 Dedução Matemática Completa</h4>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Identificar os pontos de referência</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Fusão do gelo: 0°C = 32°F<br />
                      Ebulição da água: 100°C = 212°F
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Calcular a diferença entre os pontos</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Celsius: 100°C - 0°C = 100°C<br />
                      Fahrenheit: 212°F - 32°F = 180°F
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 3: Encontrar a razão (fator de escala)</p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`\\text{Fator} = \\frac{180}{100} = \\frac{9}{5} = 1{,}8`}</MathFormula>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Isso significa que 1°C = 1,8°F. Os graus Fahrenheit são <strong>menores</strong> que os Celsius.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 4: Aplicar a transformação linear</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Começamos com a forma geral de uma transformação linear:
                    </p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`T_F = a \\cdot T_C + b`}</MathFormula>
                    </div>
                    <p className="text-sm leading-relaxed mb-2">
                      Já sabemos que <MathFormula inline>{`a = \\frac{9}{5}`}</MathFormula>. Para encontrar <MathFormula inline>b</MathFormula>, usamos o ponto de fusão (0°C = 32°F):
                    </p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`32 = \\frac{9}{5} \\cdot 0 + b \\quad \\Rightarrow \\quad b = 32`}</MathFormula>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Portanto, a fórmula final é:
                    </p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fórmula Inversa: Fahrenheit → Celsius */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula Inversa: Fahrenheit → Celsius</h4>
                <div className="bg-slate-800 rounded p-4 mb-4">
                  <MathFormula>{`T_C = \\frac{5}{9} (T_F - 32)`}</MathFormula>
                </div>
                <p className="text-slate-300 text-sm mb-3">
                  <strong>Dedução:</strong> Partimos de <MathFormula inline>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula> e isolamos <MathFormula inline>{`T_C`}</MathFormula>:
                </p>
                <div className="bg-slate-800 rounded p-4 space-y-2 text-sm">
                  <div><MathFormula>{`T_F - 32 = \\frac{9}{5} T_C`}</MathFormula></div>
                  <div><MathFormula>{`T_C = \\frac{5}{9} (T_F - 32)`}</MathFormula></div>
                </div>
              </div>

              {/* Exemplo Numérico */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Exemplo: 25°C → Fahrenheit</h4>
                <div className="space-y-3 text-slate-700">
                  <p className="text-sm leading-relaxed">
                    <strong>Dado:</strong> <MathFormula inline>{`T_C = 25°C`}</MathFormula>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fórmula:</strong> <MathFormula inline>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Substituindo:</strong>
                  </p>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div><MathFormula>{`T_F = \\frac{9}{5} \\cdot 25 + 32`}</MathFormula></div>
                    <div><MathFormula>{`T_F = \\frac{225}{5} + 32`}</MathFormula></div>
                    <div><MathFormula>{`T_F = 45 + 32`}</MathFormula></div>
                    <div><MathFormula>{`T_F = 77°F`}</MathFormula></div>
                  </div>
                  <p className="text-sm leading-relaxed font-bold text-green-900">
                    Resposta: 25°C = 77°F (temperatura ambiente agradável)
                  </p>
                </div>
              </div>
            </div>

            {/* Seção 9: Celsius ↔ Kelvin */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">9</span>
                Conversão Celsius ↔ Kelvin
              </h3>
              
              {/* Contexto Histórico */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Por que 273,15?
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Lord Kelvin percebeu que, extrapolando a lei dos gases ideais (<MathFormula inline>{`PV = nRT`}</MathFormula>), existe uma temperatura mínima teórica onde a pressão de um gás ideal seria zero. Experimentalmente, essa temperatura foi determinada como <strong>-273,15°C</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Kelvin definiu essa temperatura como o <strong>zero absoluto</strong> (0 K), criando uma escala que começa no "ponto mais frio possível". Como Kelvin e Celsius têm a <strong>mesma divisão</strong> (1°C = 1 K), a conversão é simplesmente um deslocamento: <MathFormula inline>{`T_K = T_C + 273{,}15`}</MathFormula>.
                </p>
              </div>

              {/* Fórmula Celsius → Kelvin */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula: Celsius → Kelvin</h4>
                <div className="bg-slate-800 rounded p-4">
                  <MathFormula>{`T_K = T_C + 273{,}15`}</MathFormula>
                </div>
              </div>

              {/* Termo-a-Termo */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Significado de Cada Termo</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2"><MathFormula inline>{`T_K`}</MathFormula></p>
                    <p className="text-slate-300 text-sm">
                      <strong>Temperatura em Kelvin</strong> que queremos calcular. Unidade: <strong>K</strong> (sem símbolo de grau!).
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2"><MathFormula inline>{`T_C`}</MathFormula></p>
                    <p className="text-slate-300 text-sm">
                      <strong>Temperatura em Celsius</strong> que conhecemos. Unidade: <strong>°C</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2">273,15</p>
                    <p className="text-slate-300 text-sm">
                      <strong>Deslocamento</strong> — diferença entre os zeros das escalas. O zero absoluto (0 K) corresponde a -273,15°C. Como as escalas têm a mesma divisão (1°C = 1 K), não há fator multiplicativo. Unidade: <strong>K</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-4">
                    <p className="font-bold text-blue-400 mb-2">Sem fator multiplicativo</p>
                    <p className="text-slate-300 text-sm">
                      Diferente de Fahrenheit, <strong>não multiplicamos por nada</strong>! Celsius e Kelvin têm o mesmo "tamanho de grau": uma variação de 1°C = variação de 1 K.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedução Matemática */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">📐 Dedução via Lei dos Gases Ideais</h4>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Lei dos gases ideais</p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`PV = nRT`}</MathFormula>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Onde <MathFormula inline>R</MathFormula> é a constante universal dos gases. Para um gás ideal a volume constante, <MathFormula inline>{`P \\propto T`}</MathFormula>.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Extrapolação para P = 0</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Experimentalmente, observa-se que a pressão de um gás diminui linearmente com a temperatura. Extrapolando para <MathFormula inline>{`P = 0`}</MathFormula>, encontramos:
                    </p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`T_{\\text{zero absoluto}} = -273{,}15°C`}</MathFormula>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 3: Definir Kelvin com zero absoluto como origem</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Kelvin definiu 0 K = -273,15°C. Como ambas as escalas têm a mesma divisão (100 divisões entre fusão e ebulição da água), a conversão é:
                    </p>
                    <div className="bg-white rounded p-3 my-2">
                      <MathFormula>{`T_K = T_C + 273{,}15`}</MathFormula>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fórmula Inversa */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula Inversa: Kelvin → Celsius</h4>
                <div className="bg-slate-800 rounded p-4">
                  <MathFormula>{`T_C = T_K - 273{,}15`}</MathFormula>
                </div>
              </div>

              {/* Exemplo Numérico */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Exemplo: 300 K → Celsius</h4>
                <div className="space-y-3 text-slate-700">
                  <p className="text-sm leading-relaxed">
                    <strong>Dado:</strong> <MathFormula inline>{`T_K = 300 \\text{ K}`}</MathFormula>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fórmula:</strong> <MathFormula inline>{`T_C = T_K - 273{,}15`}</MathFormula>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Substituindo:</strong>
                  </p>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div><MathFormula>{`T_C = 300 - 273{,}15`}</MathFormula></div>
                    <div><MathFormula>{`T_C = 26{,}85°C`}</MathFormula></div>
                  </div>
                  <p className="text-sm leading-relaxed font-bold text-green-900">
                    Resposta: 300 K = 26,85°C (temperatura ambiente agradável)
                  </p>
                </div>
              </div>
            </div>

            {/* Seção 10: Fahrenheit ↔ Kelvin */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">10</span>
                Conversão Fahrenheit ↔ Kelvin
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed">
                  Não há fórmula direta entre Fahrenheit e Kelvin — a conversão é feita <strong>passando por Celsius como intermediário</strong>. Primeiro convertemos Fahrenheit → Celsius, depois Celsius → Kelvin (ou vice-versa).
                </p>
              </div>

              {/* Fórmula Fahrenheit → Kelvin */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula: Fahrenheit → Kelvin</h4>
                <div className="bg-slate-800 rounded p-4 mb-4">
                  <MathFormula>{`T_K = \\frac{5}{9} (T_F - 32) + 273{,}15`}</MathFormula>
                </div>
                <p className="text-slate-300 text-sm mb-3">
                  <strong>Dedução:</strong> Combinamos as duas conversões:
                </p>
                <div className="bg-slate-800 rounded p-4 space-y-2 text-sm">
                  <div><MathFormula>{`T_C = \\frac{5}{9} (T_F - 32) \\quad \\text{(F → C)}`}</MathFormula></div>
                  <div><MathFormula>{`T_K = T_C + 273{,}15 \\quad \\text{(C → K)}`}</MathFormula></div>
                  <div><MathFormula>{`T_K = \\frac{5}{9} (T_F - 32) + 273{,}15`}</MathFormula></div>
                </div>
              </div>

              {/* Fórmula Inversa */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmula Inversa: Kelvin → Fahrenheit</h4>
                <div className="bg-slate-800 rounded p-4 mb-4">
                  <MathFormula>{`T_F = \\frac{9}{5} (T_K - 273{,}15) + 32`}</MathFormula>
                </div>
                <p className="text-slate-300 text-sm mb-3">
                  <strong>Dedução:</strong> Combinamos as conversões inversas:
                </p>
                <div className="bg-slate-800 rounded p-4 space-y-2 text-sm">
                  <div><MathFormula>{`T_C = T_K - 273{,}15 \\quad \\text{(K → C)}`}</MathFormula></div>
                  <div><MathFormula>{`T_F = \\frac{9}{5} T_C + 32 \\quad \\text{(C → F)}`}</MathFormula></div>
                  <div><MathFormula>{`T_F = \\frac{9}{5} (T_K - 273{,}15) + 32`}</MathFormula></div>
                </div>
              </div>

              {/* Exemplo Numérico */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Exemplo: 98,6°F (temperatura corporal) → Kelvin</h4>
                <div className="space-y-3 text-slate-700">
                  <p className="text-sm leading-relaxed">
                    <strong>Dado:</strong> <MathFormula inline>{`T_F = 98{,}6°F`}</MathFormula>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Método 1: Via Celsius (mais intuitivo)</strong>
                  </p>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div><MathFormula>{`T_C = \\frac{5}{9} (98{,}6 - 32) = \\frac{5}{9} \\cdot 66{,}6 = 37°C`}</MathFormula></div>
                    <div><MathFormula>{`T_K = 37 + 273{,}15 = 310{,}15 \\text{ K}`}</MathFormula></div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    <strong>Método 2: Fórmula direta</strong>
                  </p>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div><MathFormula>{`T_K = \\frac{5}{9} (98{,}6 - 32) + 273{,}15`}</MathFormula></div>
                    <div><MathFormula>{`T_K = \\frac{5}{9} \\cdot 66{,}6 + 273{,}15`}</MathFormula></div>
                    <div><MathFormula>{`T_K = 37 + 273{,}15 = 310{,}15 \\text{ K}`}</MathFormula></div>
                  </div>
                  <p className="text-sm leading-relaxed font-bold text-green-900">
                    Resposta: 98,6°F = 310,15 K (temperatura corporal humana)
                  </p>
                </div>
              </div>
            </div>

            {/* Seção 11: Conversão de VARIAÇÕES (ΔT) */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">11</span>
                Conversão de VARIAÇÕES de Temperatura (ΔT)
              </h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-6">
                <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  ATENÇÃO: Variação ≠ Valor Absoluto!
                </h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Quando convertemos uma <strong>variação de temperatura</strong> (ΔT = T_final - T_inicial), <strong>NÃO somamos as constantes 32 ou 273,15</strong>! Isso porque essas constantes representam o deslocamento entre os zeros das escalas, que se cancela ao calcular diferenças.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Analogia:</strong> Imagine duas réguas, uma começando em 0 cm e outra em 5 cm. Se você mede um objeto de 10 cm na primeira régua (0 a 10) e na segunda (5 a 15), a <strong>diferença</strong> é a mesma: 10 cm! O "deslocamento de 5 cm" não afeta a diferença.
                </p>
              </div>

              {/* Fórmulas de Variação */}
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Fórmulas para Variações</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-300 text-sm mb-2">Celsius ↔ Kelvin:</p>
                    <div className="bg-slate-800 rounded p-4">
                      <MathFormula>{`\\Delta T_C = \\Delta T_K`}</MathFormula>
                    </div>
                    <p className="text-slate-400 text-xs mt-2">
                      Mesmo tamanho de grau: 1°C = 1 K. O deslocamento 273,15 se cancela na subtração.
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-2">Celsius ↔ Fahrenheit:</p>
                    <div className="bg-slate-800 rounded p-4">
                      <MathFormula>{`\\Delta T_F = \\frac{9}{5} \\Delta T_C`}</MathFormula>
                    </div>
                    <p className="text-slate-400 text-xs mt-2">
                      Graus Fahrenheit são menores: 1°C = 1,8°F. O deslocamento 32 se cancela na subtração.
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-2">Ou inversamente:</p>
                    <div className="bg-slate-800 rounded p-4">
                      <MathFormula>{`\\Delta T_C = \\frac{5}{9} \\Delta T_F`}</MathFormula>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabela Comparativa */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Tipo</th>
                      <th className="border border-slate-300 px-4 py-3 text-center font-bold text-slate-900">Celsius → Fahrenheit</th>
                      <th className="border border-slate-300 px-4 py-3 text-center font-bold text-slate-900">Celsius → Kelvin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 text-slate-700 font-bold">Valor Absoluto</td>
                      <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">
                        <MathFormula inline>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula>
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">
                        <MathFormula inline>{`T_K = T_C + 273{,}15`}</MathFormula>
                      </td>
                    </tr>
                    <tr className="bg-slate-50 hover:bg-slate-100">
                      <td className="border border-slate-300 px-4 py-3 text-slate-700 font-bold">Variação (ΔT)</td>
                      <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">
                        <MathFormula inline>{`\\Delta T_F = \\frac{9}{5} \\Delta T_C`}</MathFormula>
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">
                        <MathFormula inline>{`\\Delta T_C = \\Delta T_K`}</MathFormula>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Exemplos de Variações */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Exemplos: Conversão de Variações</h4>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Exemplo 1: Aquecimento de 50°C</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Um objeto aquece de 20°C para 70°C. Qual a variação em Fahrenheit?
                    </p>
                    <div className="bg-white rounded p-3 space-y-2">
                      <div><MathFormula>{`\\Delta T_C = 70 - 20 = 50°C`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_F = \\frac{9}{5} \\cdot 50 = 90°F`}</MathFormula></div>
                    </div>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong>Nota:</strong> NÃO somamos 32! A variação é 90°F, não 122°F.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Exemplo 2: Resfriamento de 100 K</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Um gás esfria de 400 K para 300 K. Qual a variação em Celsius?
                    </p>
                    <div className="bg-white rounded p-3 space-y-2">
                      <div><MathFormula>{`\\Delta T_K = 300 - 400 = -100 \\text{ K}`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_C = \\Delta T_K = -100°C`}</MathFormula></div>
                    </div>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong>Nota:</strong> Variação negativa indica resfriamento. NÃO subtraímos 273,15!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 12: Caso Especial -40° */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">12</span>
                Caso Especial: -40°C = -40°F
              </h3>
              
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-purple-900 mb-3">🎯 Curiosidade Matemática</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Existe <strong>exatamente um ponto</strong> onde as escalas Celsius e Fahrenheit marcam o mesmo valor numérico: <strong>-40°</strong>. Vamos deduzir isso matematicamente!
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <p className="text-slate-700 text-sm"><strong>Queremos encontrar:</strong> <MathFormula inline>{`T_C = T_F`}</MathFormula></p>
                  <div><MathFormula>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula></div>
                  <p className="text-slate-700 text-sm">Substituindo <MathFormula inline>{`T_F = T_C`}</MathFormula>:</p>
                  <div><MathFormula>{`T_C = \\frac{9}{5} T_C + 32`}</MathFormula></div>
                  <div><MathFormula>{`T_C - \\frac{9}{5} T_C = 32`}</MathFormula></div>
                  <div><MathFormula>{`\\frac{5T_C - 9T_C}{5} = 32`}</MathFormula></div>
                  <div><MathFormula>{`\\frac{-4T_C}{5} = 32`}</MathFormula></div>
                  <div><MathFormula>{`-4T_C = 160`}</MathFormula></div>
                  <div><MathFormula>{`T_C = -40°C`}</MathFormula></div>
                  <p className="text-slate-700 text-sm font-bold text-purple-900 mt-3">
                    Portanto, -40°C = -40°F! Esse é o único ponto de igualdade entre as duas escalas.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">❄️ Contexto Prático</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  -40° é uma temperatura extremamente fria, comum em regiões polares como Sibéria, Antártida e norte do Canadá durante o inverno. Nessa temperatura, o mercúrio congela (ponto de fusão do mercúrio: -38,83°C), e a exposição da pele ao ar pode causar congelamento em minutos!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 13: Exemplos Resolvidos ITA/IME */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos (Nível ITA/IME)</h2>
          
          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 (ITA 2019): Conversão Múltipla
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> A temperatura de um forno industrial é de 500 K. Expresse essa temperatura em graus Celsius e Fahrenheit.
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Kelvin → Celsius</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_C = T_K - 273{,}15`}</MathFormula></div>
                      <div><MathFormula>{`T_C = 500 - 273{,}15`}</MathFormula></div>
                      <div><MathFormula>{`T_C = 226{,}85°C`}</MathFormula></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Celsius → Fahrenheit</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_F = \\frac{9}{5} T_C + 32`}</MathFormula></div>
                      <div><MathFormula>{`T_F = \\frac{9}{5} \\cdot 226{,}85 + 32`}</MathFormula></div>
                      <div><MathFormula>{`T_F = 408{,}33 + 32`}</MathFormula></div>
                      <div><MathFormula>{`T_F = 440{,}33°F`}</MathFormula></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-bold text-green-900">
                  <strong>Resposta:</strong> 500 K = 226,85°C = 440,33°F
                </p>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 (IME 2020): Variação de Temperatura
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um bloco de metal aquece de 15°C para 85°C. Qual a variação de temperatura em Kelvin e Fahrenheit?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Calcular ΔT em Celsius</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`\\Delta T_C = T_{final} - T_{inicial}`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_C = 85 - 15 = 70°C`}</MathFormula></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Converter ΔT para Kelvin</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`\\Delta T_K = \\Delta T_C`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_K = 70 \\text{ K}`}</MathFormula></div>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">
                      <strong>Nota:</strong> NÃO somamos 273,15! Variações em Celsius e Kelvin são iguais.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 3: Converter ΔT para Fahrenheit</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`\\Delta T_F = \\frac{9}{5} \\Delta T_C`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_F = \\frac{9}{5} \\cdot 70`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_F = 126°F`}</MathFormula></div>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">
                      <strong>Nota:</strong> NÃO somamos 32! Variações só usam o fator 9/5.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-bold text-green-900">
                  <strong>Resposta:</strong> ΔT = 70°C = 70 K = 126°F
                </p>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 3 (ITA 2021): Escala Desconhecida
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Uma escala termométrica X marca 0°X no ponto de fusão do gelo e 80°X no ponto de ebulição da água. Qual a temperatura de 40°X em graus Celsius?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Identificar os pontos de referência</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Fusão: 0°X = 0°C<br />
                      Ebulição: 80°X = 100°C
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Encontrar a razão entre as escalas</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`\\text{Diferença em X: } 80 - 0 = 80°X`}</MathFormula></div>
                      <div><MathFormula>{`\\text{Diferença em C: } 100 - 0 = 100°C`}</MathFormula></div>
                      <div><MathFormula>{`\\text{Razão: } \\frac{100}{80} = \\frac{5}{4} = 1{,}25`}</MathFormula></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 3: Deduzir a fórmula de conversão</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_C = \\frac{5}{4} T_X`}</MathFormula></div>
                      <p className="text-xs text-slate-600 mt-2">
                        Não há deslocamento porque ambas as escalas começam em 0 no ponto de fusão.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 4: Calcular 40°X em Celsius</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_C = \\frac{5}{4} \\cdot 40`}</MathFormula></div>
                      <div><MathFormula>{`T_C = 50°C`}</MathFormula></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-bold text-green-900">
                  <strong>Resposta:</strong> 40°X = 50°C
                </p>
              </div>
            </div>

            {/* Exemplo 4 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 4 (IME 2018): Temperatura Negativa
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Em uma cidade canadense, a temperatura é de -15°F. Qual a temperatura em Celsius e Kelvin?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Fahrenheit → Celsius</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_C = \\frac{5}{9} (T_F - 32)`}</MathFormula></div>
                      <div><MathFormula>{`T_C = \\frac{5}{9} (-15 - 32)`}</MathFormula></div>
                      <div><MathFormula>{`T_C = \\frac{5}{9} \\cdot (-47)`}</MathFormula></div>
                      <div><MathFormula>{`T_C = -26{,}11°C`}</MathFormula></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Celsius → Kelvin</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`T_K = T_C + 273{,}15`}</MathFormula></div>
                      <div><MathFormula>{`T_K = -26{,}11 + 273{,}15`}</MathFormula></div>
                      <div><MathFormula>{`T_K = 247{,}04 \\text{ K}`}</MathFormula></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-bold text-green-900">
                  <strong>Resposta:</strong> -15°F = -26,11°C = 247,04 K
                </p>
              </div>
            </div>

            {/* Exemplo 5 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 5 (ITA 2017): Comparação de Variações
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um objeto A aquece 50°C e um objeto B aquece 50°F. Qual objeto teve maior variação de temperatura?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Converter 50°F para Celsius</p>
                    <div className="space-y-1">
                      <div><MathFormula>{`\\Delta T_C = \\frac{5}{9} \\Delta T_F`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_C = \\frac{5}{9} \\cdot 50`}</MathFormula></div>
                      <div><MathFormula>{`\\Delta T_C = 27{,}78°C`}</MathFormula></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Comparar as variações</p>
                    <p className="text-sm leading-relaxed mb-2">
                      Objeto A: ΔT = 50°C<br />
                      Objeto B: ΔT = 50°F = 27,78°C
                    </p>
                    <p className="text-sm leading-relaxed">
                      Como 50°C &gt; 27,78°C, o <strong>objeto A</strong> teve maior variação de temperatura.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-bold text-green-900">
                  <strong>Resposta:</strong> Objeto A (50°C &gt; 27,78°C)
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                  <p className="text-xs text-blue-900">
                    <strong>💡 Dica:</strong> Graus Fahrenheit são menores que graus Celsius (1°C = 1,8°F). Portanto, uma variação de 50°F é menor que 50°C!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 14: Aplicações Práticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌍 Aplicações Práticas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                1. Meteorologia
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Previsões do tempo usam Celsius (Brasil, Europa) ou Fahrenheit (EUA). Ao viajar, é essencial saber converter: 30°C (quente no Brasil) = 86°F. Temperaturas extremas: -40°C (Sibéria) = -40°F (mesmo valor!).
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                2. Medicina
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Temperatura corporal normal: 36,5-37,5°C = 97,7-99,5°F. Febre: &gt;38°C = &gt;100,4°F. Hipotermia: &lt;35°C = &lt;95°F. Médicos precisam converter ao ler literatura internacional ou atender pacientes estrangeiros.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                3. Culinária
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Receitas americanas usam Fahrenheit: "Asse a 350°F" = 177°C. Ponto de ebulição da água: 100°C = 212°F. Forno alto: 220°C = 428°F. Conversões precisas evitam queimar ou mal cozinhar alimentos!
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
              <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                4. Ciência e Pesquisa
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Publicações científicas exigem Kelvin: lei dos gases (<MathFormula inline>{`PV = nRT`}</MathFormula>), termodinâmica, física de partículas. Zero absoluto: 0 K = -273,15°C = -459,67°F. Temperatura do Sol: 5778 K = 5505°C.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                5. Aviação
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Pilotos monitoram temperatura externa: -56°C a 10 km de altitude (troposfera). Conversão para Fahrenheit: -68,8°F. Temperatura afeta densidade do ar, desempenho do motor e formação de gelo nas asas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                6. Indústria
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Processos térmicos (fundição, tratamento térmico, pasteurização) exigem controle preciso. Forno industrial: 500 K = 226,85°C = 440,33°F. Conversões garantem segurança e qualidade do produto final.
              </p>
            </div>
          </div>
        </div>

        {/* Tabela de Referência */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">📋 Tabela de Referência Rápida</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Evento</th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-bold text-slate-900">Celsius (°C)</th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-bold text-slate-900">Fahrenheit (°F)</th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-bold text-slate-900">Kelvin (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Zero absoluto</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">-273,15</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">-459,67</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">0</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Fusão do gelo (água congela)</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">0</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">32</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">273,15</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Temperatura ambiente</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">20-25</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">68-77</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">293-298</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Temperatura corporal humana</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">36,5-37,5</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">97,7-99,5</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">309,7-310,7</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Ebulição da água</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">100</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">212</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">373,15</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Superfície do Sol</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">5505</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">9941</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-700">5778</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumo Final */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-600 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">🎯 Resumo das Escalas</h3>
          <div className="space-y-3 text-slate-800">
            <p className="leading-relaxed">
              <strong>Celsius (°C):</strong> Escala prática baseada na água (0°C = gelo, 100°C = vapor). Usada no dia a dia em quase todo o mundo.
            </p>
            <p className="leading-relaxed">
              <strong>Fahrenheit (°F):</strong> Escala com 180 divisões entre fusão e ebulição da água (32°F a 212°F). Usada principalmente nos EUA.
            </p>
            <p className="leading-relaxed">
              <strong>Kelvin (K):</strong> Escala absoluta começando no zero absoluto (0 K = -273,15°C). Obrigatória em física e termodinâmica.
            </p>
            <p className="leading-relaxed">
              <strong>Conversões principais:</strong> <MathFormula formula="T_F = \frac{9}{5} T_C + 32" display={false} /> e <MathFormula formula="T_K = T_C + 273{,}15" display={false} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
