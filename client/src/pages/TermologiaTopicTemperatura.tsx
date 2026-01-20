import { Link } from "wouter";
import { ArrowLeft, BookOpen, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicTemperatura() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Temperatura e Escalas</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: O QUE É TEMPERATURA? ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌡️ O que é Temperatura? (Explicação Simples)</h2>
          
          <div className="space-y-6">
            {/* DEFINIÇÃO SIMPLES */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição que Faz Sentido</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                <strong>Temperatura é a medida de quão rápido as moléculas estão se movimentando.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Pronto! É só isso. Quanto mais rápido as moléculas se mexem, mais quente está. Quanto mais lento, mais frio.
              </p>
            </div>

            {/* EXEMPLO PRÁTICO */}
            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo: Água Fria vs Água Quente</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold text-blue-900">❄️ Água Fria (5°C):</p>
                  <p>As moléculas estão se movimentando LENTAMENTE. Você sente frio na mão.</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold text-red-900">🔥 Água Quente (80°C):</p>
                  <p>As moléculas estão se movimentando RAPIDAMENTE. Você sente calor na mão.</p>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  A diferença? Apenas a velocidade das moléculas! Mesma água, mesma composição, mas moléculas em velocidades diferentes.
                </p>
              </div>
            </div>

            {/* DIFERENÇA IMPORTANTE */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">⚠️ IMPORTANTE: Temperatura vs Calor</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="font-bold text-red-900">Temperatura:</p>
                  <p>É uma PROPRIEDADE. É o quanto as moléculas estão se movimentando. Você MEDE com um termômetro.</p>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="font-bold text-red-900">Calor:</p>
                  <p>É uma AÇÃO. É a energia que flui de um lugar quente para um lugar frio. Você SENTE quando recebe calor.</p>
                </div>
                <p className="text-sm text-slate-600 mt-3 italic">
                  Analogia: Temperatura é como a velocidade de um carro. Calor é como o carro se movendo de um lugar para outro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: AS 3 ESCALAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 As 3 Escalas de Temperatura</h2>
          
          <p className="text-slate-700 mb-6">
            Existem 3 formas principais de medir temperatura. Cada uma começou em um país diferente, e cada uma tem seus pontos de referência.
          </p>

          <div className="space-y-8">
            {/* CELSIUS */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Escala Celsius (°C)</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Criada na Suécia em 1742.</strong> É a mais usada no mundo (exceto EUA).
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Pontos de Referência:</p>
                <p className="text-slate-700">• <strong>0°C</strong> = Água congelando (gelo derretendo)</p>
                <p className="text-slate-700">• <strong>100°C</strong> = Água fervendo (vapor saindo)</p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded">
                <p className="font-bold mb-2">Exemplos do Dia a Dia:</p>
                <p className="text-slate-700 text-sm">• Geladeira: 5°C</p>
                <p className="text-slate-700 text-sm">• Temperatura normal do corpo: 37°C</p>
                <p className="text-slate-700 text-sm">• Dia quente: 30°C</p>
                <p className="text-slate-700 text-sm">• Dia frio: 10°C</p>
              </div>
            </div>

            {/* FAHRENHEIT */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Escala Fahrenheit (°F)</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Criada na Alemanha em 1724.</strong> Usada principalmente nos EUA e alguns países.
              </p>

              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Pontos de Referência:</p>
                <p className="text-slate-700">• <strong>32°F</strong> = Água congelando</p>
                <p className="text-slate-700">• <strong>212°F</strong> = Água fervendo</p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded">
                <p className="font-bold mb-2">Exemplos do Dia a Dia:</p>
                <p className="text-slate-700 text-sm">• Temperatura normal do corpo: 98,6°F</p>
                <p className="text-slate-700 text-sm">• Dia quente: 86°F (30°C)</p>
                <p className="text-slate-700 text-sm">• Dia frio: 50°F (10°C)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="text-slate-700 text-sm">
                  <strong>Por que Fahrenheit é estranho?</strong> Os pontos de referência (32 e 212) não são números redondos! Celsius é muito mais lógico.
                </p>
              </div>
            </div>

            {/* KELVIN */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Escala Kelvin (K)</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Criada na Inglaterra em 1848.</strong> É a escala científica. Usada em laboratórios e física.
              </p>

              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Pontos de Referência:</p>
                <p className="text-slate-700">• <strong>0 K</strong> = Temperatura mais fria possível (zero absoluto)</p>
                <p className="text-slate-700">• <strong>273,15 K</strong> = Água congelando (0°C)</p>
                <p className="text-slate-700">• <strong>373,15 K</strong> = Água fervendo (100°C)</p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded">
                <p className="font-bold mb-2">Por que Kelvin é especial?</p>
                <p className="text-slate-700 text-sm">• Começa no ZERO ABSOLUTO (temperatura mais fria do universo)</p>
                <p className="text-slate-700 text-sm">• Não tem números negativos</p>
                <p className="text-slate-700 text-sm">• Usada em fórmulas científicas</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="text-slate-700 text-sm">
                  <strong>Curiosidade:</strong> Em Kelvin, não usamos o símbolo "°". Escrevemos "300 K", não "300°K".
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: CONVERSÕES ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Como Converter Entre Escalas</h2>
          
          <p className="text-slate-700 mb-6">
            Você pode converter de uma escala para outra usando fórmulas simples. Vamos aprender de forma prática!
          </p>

          <div className="space-y-8">
            {/* CELSIUS PARA FAHRENHEIT */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Celsius → Fahrenheit</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="°F = (°C \\times 1,8) + 32" display={true} />
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">📝 Exemplo Prático:</p>
                <p className="text-slate-700 mb-2">Converter 25°C para Fahrenheit:</p>
                <MathFormula formula="°F = (25 \\times 1,8) + 32 = 45 + 32 = 77°F" display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: 25°C = 77°F (dia quente!)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">💡 Dica de Memorização:</p>
                <p className="text-slate-700 text-sm">Multiplica por 1,8 (ou 9/5) e depois soma 32. Sempre nessa ordem!</p>
              </div>
            </div>

            {/* FAHRENHEIT PARA CELSIUS */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fahrenheit → Celsius</h3>
              
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="°C = \\frac{°F - 32}{1,8}" display={true} />
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">📝 Exemplo Prático:</p>
                <p className="text-slate-700 mb-2">Converter 86°F para Celsius:</p>
                <MathFormula formula="°C = \\frac{86 - 32}{1,8} = \\frac{54}{1,8} = 30°C" display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: 86°F = 30°C (dia quente!)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">💡 Dica de Memorização:</p>
                <p className="text-slate-700 text-sm">Subtrai 32 e depois divide por 1,8. Sempre nessa ordem!</p>
              </div>
            </div>

            {/* CELSIUS PARA KELVIN */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Celsius ↔ Kelvin</h3>
              
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="K = °C + 273,15" display={true} />
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">📝 Exemplo Prático:</p>
                <p className="text-slate-700 mb-2">Converter 25°C para Kelvin:</p>
                <MathFormula formula="K = 25 + 273,15 = 298,15 \\text{ K}" display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: 25°C = 298,15 K (aproximadamente 298 K)</p>
              </div>

              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Kelvin → Celsius (inverso):</p>
                <MathFormula formula="°C = K - 273,15" display={true} />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">💡 Dica de Memorização:</p>
                <p className="text-slate-700 text-sm">Kelvin é Celsius + 273,15. Simples assim! (Muitas vezes usamos 273 para simplificar)</p>
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
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left font-bold">Situação</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Celsius</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Fahrenheit</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Kelvin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border border-slate-300 p-3">Zero Absoluto (mais frio possível)</td>
                  <td className="border border-slate-300 p-3 text-center">-273,15°C</td>
                  <td className="border border-slate-300 p-3 text-center">-459,67°F</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">0 K</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="border border-slate-300 p-3">Água congelando</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">0°C</td>
                  <td className="border border-slate-300 p-3 text-center">32°F</td>
                  <td className="border border-slate-300 p-3 text-center">273,15 K</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-slate-300 p-3">Temperatura normal do corpo</td>
                  <td className="border border-slate-300 p-3 text-center">37°C</td>
                  <td className="border border-slate-300 p-3 text-center">98,6°F</td>
                  <td className="border border-slate-300 p-3 text-center">310,15 K</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-slate-300 p-3">Dia quente</td>
                  <td className="border border-slate-300 p-3 text-center">30°C</td>
                  <td className="border border-slate-300 p-3 text-center">86°F</td>
                  <td className="border border-slate-300 p-3 text-center">303,15 K</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border border-slate-300 p-3">Água fervendo</td>
                  <td className="border border-slate-300 p-3 text-center font-bold">100°C</td>
                  <td className="border border-slate-300 p-3 text-center">212°F</td>
                  <td className="border border-slate-300 p-3 text-center">373,15 K</td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="border border-slate-300 p-3">Superfície do Sol</td>
                  <td className="border border-slate-300 p-3 text-center">5.500°C</td>
                  <td className="border border-slate-300 p-3 text-center">9.932°F</td>
                  <td className="border border-slate-300 p-3 text-center">5.773 K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== SEÇÃO 5: COMO USAR NA PRÁTICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Como Usar Temperatura na Prática</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="font-bold text-slate-900 mb-3">Situação 1: Receita de Bolo</h3>
              <p className="text-slate-700 mb-3">A receita diz "asse a 180°C por 30 minutos". Você precisa saber:</p>
              <div className="bg-white p-3 rounded border border-blue-300 text-slate-700">
                <p>• Sua temperatura é em Celsius (°C)</p>
                <p>• Você coloca no forno a 180°C (bem quente!)</p>
                <p>• Se estivesse em Fahrenheit: 180°C ≈ 356°F</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="font-bold text-slate-900 mb-3">Situação 2: Viagem para os EUA</h3>
              <p className="text-slate-700 mb-3">A previsão do tempo diz "será 68°F amanhã". Você quer saber se é quente ou frio:</p>
              <div className="bg-white p-3 rounded border border-green-300 text-slate-700">
                <MathFormula formula="°C = \\frac{68 - 32}{1,8} = \\frac{36}{1,8} = 20°C" display={true} />
                <p className="mt-2">Resposta: 68°F = 20°C (dia fresco, leve um casaco!)</p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="font-bold text-slate-900 mb-3">Situação 3: Experimento de Física</h3>
              <p className="text-slate-700 mb-3">Seu professor diz "aqueça a água até 60°C". Você precisa:</p>
              <div className="bg-white p-3 rounded border border-orange-300 text-slate-700">
                <p>• Usar um termômetro em Celsius</p>
                <p>• Parar quando chegar a 60°C</p>
                <p>• Saber que 60°C é quente (mas não ferve, que é 100°C)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 6: ERROS COMUNS ===== */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir Celsius com Kelvin:</strong> Kelvin não tem o símbolo "°". Escreva "300 K", não "300°K".</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer o "+32" em Celsius→Fahrenheit:</strong> Sempre some 32 no final!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar 273 em vez de 273,15:</strong> Para cálculos rápidos, 273 funciona. Para precisão, use 273,15.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Achar que temperatura negativa em Kelvin existe:</strong> Kelvin NUNCA é negativo. Começa em 0 K.</span>
            </li>
          </ul>
        </div>

        {/* ===== SEÇÃO 7: RESUMO RÁPIDO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo Rápido</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>O que é Temperatura?</strong> Medida de quão rápido as moléculas estão se movimentando.</p>
            
            <p className="mt-4"><strong>3 Escalas Principais:</strong></p>
            <p className="ml-4">• <strong>Celsius (°C):</strong> 0°C = gelo, 100°C = água fervendo. Mais comum.</p>
            <p className="ml-4">• <strong>Fahrenheit (°F):</strong> 32°F = gelo, 212°F = água fervendo. Usada nos EUA.</p>
            <p className="ml-4">• <strong>Kelvin (K):</strong> 0 K = zero absoluto. Usada em ciência.</p>
            
            <p className="mt-4"><strong>Conversões Principais:</strong></p>
            <p className="ml-4">• <strong>°C → °F:</strong> (°C × 1,8) + 32</p>
            <p className="ml-4">• <strong>°F → °C:</strong> (°F - 32) ÷ 1,8</p>
            <p className="ml-4">• <strong>°C ↔ K:</strong> K = °C + 273,15</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende temperatura, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calor">
              <Button className="bg-blue-600 hover:bg-blue-700">Calor e Transferência Térmica</Button>
            </Link>
            <Link href="/termologia/topic/termodinamica">
              <Button variant="outline">Termodinâmica</Button>
            </Link>
            <Link href="/termologia">
              <Button variant="outline">Voltar para Termologia</Button>
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
