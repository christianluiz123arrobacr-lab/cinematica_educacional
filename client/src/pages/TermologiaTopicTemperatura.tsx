import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicTemperatura() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
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
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Temperatura e Escalas Termométricas</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: O QUE É TEMPERATURA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌡️ O que é Temperatura?</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Temperatura é uma medida do grau de agitação das moléculas de um corpo.</strong> Quanto mais rápido as moléculas se movem, maior é a temperatura. Quanto mais lentamente se movem, menor é a temperatura.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Em outras palavras, temperatura mede a <strong>energia cinética média</strong> das moléculas. Quando você aquece um objeto, está aumentando a velocidade de movimento das suas moléculas, aumentando assim sua temperatura.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Relação com Energia Cinética Molecular</h4>
              <p className="text-slate-700 mb-4">
                A temperatura está diretamente relacionada com a energia cinética média das moléculas. Essa relação é descrita pela seguinte fórmula fundamental:
              </p>
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="E_c = \\frac{3}{2} k_B T" display={true} />
              </div>
              <div className="space-y-3 text-slate-700">
                <p><strong>Onde:</strong></p>
                <p>• <strong>E_c</strong> = Energia cinética média das moléculas (em Joules - J)</p>
                <p>• <strong>k_B</strong> = Constante de Boltzmann = 1,38 × 10⁻²³ J/K</p>
                <p>• <strong>T</strong> = Temperatura absoluta (em Kelvin - K)</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação:</strong> Esta fórmula mostra que a energia cinética é <strong>diretamente proporcional</strong> à temperatura. Se você dobrar a temperatura absoluta, a energia cinética média das moléculas também dobra!
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">⚠️ Diferença Importante: Temperatura vs Calor</h4>
              <div className="space-y-3 text-slate-700">
                <p><strong>Temperatura:</strong> É uma propriedade de um corpo que mede o grau de agitação molecular. É uma medida local e instantânea.</p>
                <p><strong>Calor:</strong> É a transferência de energia térmica entre dois corpos com temperaturas diferentes. É um processo, não uma propriedade.</p>
                <p className="text-sm bg-white border border-red-300 rounded p-3 mt-3">
                  <strong>Exemplo:</strong> Uma xícara de café quente a 80°C tem TEMPERATURA alta, mas contém pouco CALOR (pouca energia total). Um lago morno a 20°C tem TEMPERATURA baixa, mas contém MUITO CALOR (muita energia total) porque tem muito mais massa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: ESCALAS TERMOMÉTRICAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Escalas Termométricas</h2>
          
          <p className="text-slate-700 mb-6">
            Existem três escalas principais para medir temperatura. Cada uma foi desenvolvida em um contexto histórico diferente, mas todas medem a mesma coisa: a agitação molecular.
          </p>

          {/* ESCALA CELSIUS */}
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Escala Celsius (°C)</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>Origem:</strong> Criada em 1742 pelo astrônomo sueco Anders Celsius. É a escala mais usada no dia a dia em quase todo o mundo.
                </p>
                
                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold mb-2">Pontos de Referência:</p>
                  <p>• <strong>0°C:</strong> Ponto de fusão do gelo (água sólida vira líquida)</p>
                  <p>• <strong>100°C:</strong> Ponto de ebulição da água (água líquida vira vapor)</p>
                  <p>• <strong>Intervalo:</strong> 100 divisões entre esses dois pontos</p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos de Temperaturas em Celsius:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p>• Temperatura corporal: 37°C</p>
                    <p>• Água morna: 40°C</p>
                    <p>• Dia quente: 30°C</p>
                    <p>• Dia frio: 0°C</p>
                    <p>• Congelador: -18°C</p>
                    <p>• Nitrogênio líquido: -196°C</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCALA FAHRENHEIT */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Escala Fahrenheit (°F)</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>Origem:</strong> Criada em 1724 pelo físico alemão Daniel Gabriel Fahrenheit. É a escala oficial usada nos EUA, Bahamas, Belize, Ilhas Cayman e Palau.
                </p>
                
                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold mb-2">Pontos de Referência:</p>
                  <p>• <strong>32°F:</strong> Ponto de fusão do gelo</p>
                  <p>• <strong>212°F:</strong> Ponto de ebulição da água</p>
                  <p>• <strong>Intervalo:</strong> 180 divisões entre esses dois pontos</p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos de Temperaturas em Fahrenheit:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p>• Temperatura corporal: 98,6°F</p>
                    <p>• Água morna: 104°F</p>
                    <p>• Dia quente: 86°F</p>
                    <p>• Dia frio: 32°F</p>
                    <p>• Congelador: 0°F</p>
                    <p>• Nitrogênio líquido: -320°F</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCALA KELVIN */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Escala Kelvin (K)</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>Origem:</strong> Criada em 1848 pelo físico britânico William Thomson (Lord Kelvin). É a escala oficial do Sistema Internacional de Unidades (SI) e é usada em ciência e engenharia.
                </p>
                
                <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                  <p className="font-bold mb-2">Pontos de Referência:</p>
                  <p>• <strong>0 K:</strong> Zero absoluto (temperatura mais baixa possível no universo)</p>
                  <p>• <strong>273,15 K:</strong> Ponto de fusão do gelo</p>
                  <p>• <strong>373,15 K:</strong> Ponto de ebulição da água</p>
                  <p>• <strong>Intervalo:</strong> Mesma divisão que Celsius, mas começando do zero absoluto</p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded mb-4">
                  <p className="font-bold mb-3">Exemplos de Temperaturas em Kelvin:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p>• Temperatura corporal: 310,15 K</p>
                    <p>• Água morna: 313,15 K</p>
                    <p>• Dia quente: 303,15 K</p>
                    <p>• Dia frio: 273,15 K</p>
                    <p>• Congelador: 255,15 K</p>
                    <p>• Nitrogênio líquido: 77,15 K</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <p className="font-bold text-red-900 mb-2">⚠️ Por que Kelvin é importante?</p>
                  <p className="text-slate-700">
                    Kelvin é a única escala que começa no <strong>zero absoluto</strong> (-273,15°C), que é a temperatura mais baixa possível no universo. Nesta temperatura, toda a agitação molecular cessa completamente. Por isso, Kelvin é essencial em fórmulas científicas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: CONVERSÕES ENTRE ESCALAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Conversões entre Escalas</h2>
          
          <p className="text-slate-700 mb-6">
            Agora que você conhece as três escalas, é importante saber como converter de uma para outra. Vamos aprender as fórmulas e entender por que funcionam.
          </p>

          {/* CONVERSÃO CELSIUS PARA KELVIN */}
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 1: Celsius para Kelvin</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="T(K) = T(°C) + 273,15" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> A escala Kelvin começa 273,15 unidades abaixo de Celsius. Portanto, para converter, basta adicionar 273,15.</p>
                
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold mb-3">Por que 273,15?</p>
                  <p className="mb-2">O zero absoluto é -273,15°C. Quando definimos 0 K = -273,15°C, estamos dizendo que:</p>
                  <p className="ml-4">• 0°C = 0 + 273,15 = 273,15 K ✓</p>
                  <p className="ml-4">• -273,15°C = -273,15 + 273,15 = 0 K ✓</p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 25°C para Kelvin</p>
                      <MathFormula formula="T(K) = 25 + 273,15 = 298,15 \\text{ K}" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 0°C para Kelvin</p>
                      <MathFormula formula="T(K) = 0 + 273,15 = 273,15 \\text{ K}" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 3:</strong> Converter -40°C para Kelvin</p>
                      <MathFormula formula="T(K) = -40 + 273,15 = 233,15 \\text{ K}" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERSÃO KELVIN PARA CELSIUS */}
            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 2: Kelvin para Celsius</h3>
              
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="T(°C) = T(K) - 273,15" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> Esta é a conversão inversa. Para converter de Kelvin para Celsius, subtraímos 273,15.</p>
                
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 300 K para Celsius</p>
                      <MathFormula formula="T(°C) = 300 - 273,15 = 26,85°C" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 273,15 K para Celsius</p>
                      <MathFormula formula="T(°C) = 273,15 - 273,15 = 0°C" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 3:</strong> Converter 373,15 K para Celsius</p>
                      <MathFormula formula="T(°C) = 373,15 - 273,15 = 100°C" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERSÃO CELSIUS PARA FAHRENHEIT */}
            <div className="bg-orange-50 border border-orange-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 3: Celsius para Fahrenheit</h3>
              
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="T(°F) = T(°C) \\times \\frac{9}{5} + 32" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> Esta conversão é mais complexa porque as duas escalas têm diferentes pontos de referência e diferentes tamanhos de graus.</p>
                
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <p className="font-bold mb-2">Por que essa fórmula?</p>
                  <p className="mb-2">Vamos derivar passo a passo:</p>
                  <p className="ml-4 mb-2">1. Celsius tem 100 divisões entre 0°C e 100°C</p>
                  <p className="ml-4 mb-2">2. Fahrenheit tem 180 divisões entre 32°F e 212°F</p>
                  <p className="ml-4 mb-2">3. Razão: 180/100 = 9/5 = 1,8</p>
                  <p className="ml-4">4. Offset: 0°C = 32°F (ponto de referência diferente)</p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 0°C para Fahrenheit</p>
                      <MathFormula formula="T(°F) = 0 \\times \\frac{9}{5} + 32 = 0 + 32 = 32°F" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 100°C para Fahrenheit</p>
                      <MathFormula formula="T(°F) = 100 \\times \\frac{9}{5} + 32 = 180 + 32 = 212°F" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 3:</strong> Converter 37°C (temperatura corporal) para Fahrenheit</p>
                      <MathFormula formula="T(°F) = 37 \\times \\frac{9}{5} + 32 = 66,6 + 32 = 98,6°F" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 4:</strong> Converter 25°C para Fahrenheit</p>
                      <MathFormula formula="T(°F) = 25 \\times \\frac{9}{5} + 32 = 45 + 32 = 77°F" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERSÃO FAHRENHEIT PARA CELSIUS */}
            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 4: Fahrenheit para Celsius</h3>
              
              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <MathFormula formula="T(°C) = \\left( T(°F) - 32 \\right) \\times \\frac{5}{9}" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> Esta é a conversão inversa de Fahrenheit para Celsius. Primeiro subtraímos 32 (o offset), depois multiplicamos por 5/9 (o inverso de 9/5).</p>
                
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 32°F para Celsius</p>
                      <MathFormula formula="T(°C) = (32 - 32) \\times \\frac{5}{9} = 0 \\times \\frac{5}{9} = 0°C" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 212°F para Celsius</p>
                      <MathFormula formula="T(°C) = (212 - 32) \\times \\frac{5}{9} = 180 \\times \\frac{5}{9} = 100°C" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 3:</strong> Converter 98,6°F para Celsius</p>
                      <MathFormula formula="T(°C) = (98,6 - 32) \\times \\frac{5}{9} = 66,6 \\times \\frac{5}{9} = 37°C" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 4:</strong> Converter 77°F para Celsius</p>
                      <MathFormula formula="T(°C) = (77 - 32) \\times \\frac{5}{9} = 45 \\times \\frac{5}{9} = 25°C" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERSÃO KELVIN PARA FAHRENHEIT */}
            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 5: Kelvin para Fahrenheit</h3>
              
              <div className="bg-white border border-indigo-300 rounded p-4 mb-4">
                <MathFormula formula="T(°F) = \\left( T(K) - 273,15 \\right) \\times \\frac{9}{5} + 32" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> Combinamos as duas conversões anteriores: primeiro convertemos Kelvin para Celsius, depois Celsius para Fahrenheit.</p>
                
                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 273,15 K para Fahrenheit</p>
                      <MathFormula formula="T(°F) = (273,15 - 273,15) \\times \\frac{9}{5} + 32 = 0 + 32 = 32°F" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 300 K para Fahrenheit</p>
                      <MathFormula formula="T(°F) = (300 - 273,15) \\times \\frac{9}{5} + 32 = 26,85 \\times 1,8 + 32 = 48,33 + 32 = 80,33°F" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONVERSÃO FAHRENHEIT PARA KELVIN */}
            <div className="bg-teal-50 border border-teal-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📌 Conversão 6: Fahrenheit para Kelvin</h3>
              
              <div className="bg-white border border-teal-300 rounded p-4 mb-4">
                <MathFormula formula="T(K) = \\left( T(°F) - 32 \\right) \\times \\frac{5}{9} + 273,15" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Explicação:</strong> Combinamos as duas conversões: primeiro convertemos Fahrenheit para Celsius, depois Celsius para Kelvin.</p>
                
                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded">
                  <p className="font-bold mb-3">Exemplos Práticos:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 1:</strong> Converter 32°F para Kelvin</p>
                      <MathFormula formula="T(K) = (32 - 32) \\times \\frac{5}{9} + 273,15 = 0 + 273,15 = 273,15 \\text{ K}" display={true} />
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>Exemplo 2:</strong> Converter 212°F para Kelvin</p>
                      <MathFormula formula="T(K) = (212 - 32) \\times \\frac{5}{9} + 273,15 = 100 + 273,15 = 373,15 \\text{ K}" display={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4: TABELA COMPARATIVA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Tabela Comparativa de Temperaturas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-orange-200 to-red-200">
                  <th className="border border-slate-300 p-3 text-left">Evento/Situação</th>
                  <th className="border border-slate-300 p-3 text-center">Celsius (°C)</th>
                  <th className="border border-slate-300 p-3 text-center">Fahrenheit (°F)</th>
                  <th className="border border-slate-300 p-3 text-center">Kelvin (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Zero Absoluto</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">-273,15</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">-459,67</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">0</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-blue-50">
                  <td className="border border-slate-300 p-3">Ponto de Fusão do Gelo</td>
                  <td className="border border-slate-300 p-3 text-center">0</td>
                  <td className="border border-slate-300 p-3 text-center">32</td>
                  <td className="border border-slate-300 p-3 text-center">273,15</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Temperatura Corporal Humana</td>
                  <td className="border border-slate-300 p-3 text-center">37</td>
                  <td className="border border-slate-300 p-3 text-center">98,6</td>
                  <td className="border border-slate-300 p-3 text-center">310,15</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Temperatura Ambiente Confortável</td>
                  <td className="border border-slate-300 p-3 text-center">20-25</td>
                  <td className="border border-slate-300 p-3 text-center">68-77</td>
                  <td className="border border-slate-300 p-3 text-center">293-298</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-red-50">
                  <td className="border border-slate-300 p-3">Ponto de Ebulição da Água</td>
                  <td className="border border-slate-300 p-3 text-center">100</td>
                  <td className="border border-slate-300 p-3 text-center">212</td>
                  <td className="border border-slate-300 p-3 text-center">373,15</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Temperatura de um Forno</td>
                  <td className="border border-slate-300 p-3 text-center">200</td>
                  <td className="border border-slate-300 p-3 text-center">392</td>
                  <td className="border border-slate-300 p-3 text-center">473,15</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Superfície do Sol</td>
                  <td className="border border-slate-300 p-3 text-center">5.500</td>
                  <td className="border border-slate-300 p-3 text-center">9.932</td>
                  <td className="border border-slate-300 p-3 text-center">5.773</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== SEÇÃO 5: ERROS COMUNS ===== */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns ao Trabalhar com Temperatura</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar Celsius em fórmulas científicas:</strong> Sempre use Kelvin em fórmulas! Celsius é apenas para uso cotidiano.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de adicionar 273,15:</strong> Não é 273! É 273,15 para ser preciso.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir a ordem das operações em Fahrenheit:</strong> Sempre subtraia 32 ANTES de multiplicar por 5/9.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que não existe temperatura negativa em Kelvin:</strong> Kelvin nunca pode ser negativo!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir variação de temperatura com temperatura absoluta:</strong> Uma variação de 1°C = 1 K, mas 0°C ≠ 0 K.</span>
            </li>
          </ul>
        </div>

        {/* ===== SEÇÃO 6: DICAS PRÁTICAS ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas para Memorizar</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>1. Memorize os pontos de referência:</strong></p>
            <p className="ml-4">• Água congela: 0°C = 32°F = 273,15 K</p>
            <p className="ml-4">• Água ferve: 100°C = 212°F = 373,15 K</p>
            
            <p className="mt-4"><strong>2. Lembre-se da razão entre escalas:</strong></p>
            <p className="ml-4">• Celsius para Fahrenheit: multiplique por 1,8 (ou 9/5)</p>
            <p className="ml-4">• Fahrenheit para Celsius: multiplique por 0,556 (ou 5/9)</p>
            
            <p className="mt-4"><strong>3. Use a temperatura corporal como referência:</strong></p>
            <p className="ml-4">• 37°C = 98,6°F = 310,15 K</p>
            
            <p className="mt-4"><strong>4. Temperatura ambiente:</strong></p>
            <p className="ml-4">• ~20-25°C = ~70°F = ~293-298 K</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você domina temperatura e escalas, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calor">
              <Button className="bg-blue-600 hover:bg-blue-700">Calor e Transferência Térmica</Button>
            </Link>
            <Link href="/termologia/graphs">
              <Button variant="outline">Ver Gráficos</Button>
            </Link>
            <Link href="/termologia/simulator">
              <Button variant="outline">Usar Simulador</Button>
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
