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
                  A escala Celsius é a mais usada no dia a dia em quase todo o mundo (exceto EUA). Ela é baseada em dois pontos de referência fáceis de reproduzir: o ponto de fusão do gelo (0°C) e o ponto de ebulição da água (100°C), ambos medidos à pressão atmosférica padrão (1 atm).
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
                  Fahrenheit escolheu 0°F como a temperatura mais baixa que conseguiu produzir em laboratório (mistura de gelo, água e sal) e 96°F como a temperatura do corpo humano (ele errou um pouco — a temperatura corporal real é 98,6°F ou 37°C).
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Pontos de referência:</strong> 32°F (fusão do gelo) e 212°F (ebulição da água) à pressão de 1 atm.
                  </p>
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

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔍 Por Que Kelvin é Fundamental?</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Escala Absoluta:</strong> Kelvin não tem valores negativos. 0 K é o limite inferior absoluto — não existe temperatura menor.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Proporcionalidade Direta:</strong> A energia cinética média das partículas é diretamente proporcional à temperatura em Kelvin: <MathFormula formula="E_c \propto T" display={false} />. Dobrar a temperatura em Kelvin dobra a energia cinética.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Obrigatória em Física:</strong> Todas as equações da termodinâmica (lei dos gases ideais, entropia, etc.) exigem temperatura em Kelvin. Usar Celsius ou Fahrenheit daria resultados errados!</p>
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

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Atenção: Variação de Temperatura
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Quando falamos de <strong>variação de temperatura</strong> (ΔT), as conversões são diferentes! Uma variação de 1°C é igual a uma variação de 1 K, mas é igual a uma variação de 1,8°F.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Exemplo:</strong> Se a temperatura aumenta 10°C, isso é equivalente a um aumento de 10 K ou 18°F. Não confunda variação com valor absoluto!
                </p>
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
