import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicTemperatura() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
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
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🌡️ O que é Temperatura?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Temperatura é uma medida da <strong>intensidade do movimento das moléculas</strong> de um corpo. Quanto mais rápido as moléculas se movem, maior é a temperatura. É como medir o "agito" das partículas: em um corpo quente, as moléculas estão dançando muito rápido; em um corpo frio, elas se movem lentamente.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-slate-700">
              <strong>Analogia:</strong> Pense em uma festa. Em uma festa animada (temperatura alta), as pessoas estão pulando e se movimentando muito. Em uma festa tranquila (temperatura baixa), as pessoas estão sentadas e quietas.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-3">Relação com Energia Cinética Molecular</h4>
            <p className="text-slate-700 mb-4">
              A temperatura está diretamente relacionada à <strong>energia cinética média das moléculas</strong>. Quanto maior a temperatura, maior a velocidade média das moléculas e, portanto, maior sua energia cinética.
            </p>
            <div className="bg-white border border-slate-300 rounded p-4 mb-3">
              <p className="text-sm text-slate-600 mb-2">Relação entre Temperatura Absoluta e Energia Cinética Média:</p>
              <MathFormula formula="E_c = \\frac{3}{2}k_B T" display={true} />
            </div>
            <p className="text-sm text-slate-600">
              Onde: <strong>E_c</strong> = energia cinética média, <strong>k_B</strong> = constante de Boltzmann (1,38 × 10⁻²³ J/K), <strong>T</strong> = temperatura absoluta (Kelvin)
            </p>
          </div>
        </div>

        {/* Escalas de Temperatura */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Escalas de Temperatura</h2>
          
          <div className="space-y-8">
            {/* Celsius */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Celsius (°C)</h3>
              <p className="text-slate-700 mb-4">
                A escala Celsius é a mais usada no dia a dia. Ela foi criada usando dois pontos de referência: <strong>0°C é o ponto de congelamento da água</strong> e <strong>100°C é o ponto de ebulição da água</strong> (à pressão de 1 atm).
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Características:</strong></p>
                <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                  <li>Intervalo entre congelamento e ebulição: 100 divisões</li>
                  <li>Cada divisão é chamada de grau Celsius (°C)</li>
                  <li>Pode ter valores negativos (abaixo de 0°C)</li>
                  <li>Mais prática para uso cotidiano</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Exemplos de Temperaturas:</strong></p>
                <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                  <li>Temperatura ambiente: ~20-25°C</li>
                  <li>Temperatura corporal humana: ~37°C</li>
                  <li>Água fervendo: 100°C</li>
                  <li>Nitrogênio líquido: -196°C</li>
                  <li>Superfície do Sol: ~5.778 K ≈ 5.505°C</li>
                </ul>
              </div>
            </div>

            {/* Fahrenheit */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Fahrenheit (°F)</h3>
              <p className="text-slate-700 mb-4">
                Usada principalmente nos EUA e em alguns países. Nessa escala, <strong>32°F é o ponto de congelamento da água</strong> e <strong>212°F é o ponto de ebulição</strong> (à pressão de 1 atm).
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Características:</strong></p>
                <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                  <li>Intervalo entre congelamento e ebulição: 180 divisões</li>
                  <li>Cada divisão é chamada de grau Fahrenheit (°F)</li>
                  <li>Criada por Daniel Gabriel Fahrenheit em 1724</li>
                  <li>Menos usada na Física científica</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-300 rounded p-4">
                <p className="text-slate-700 mb-3"><strong>Fórmula de conversão de Celsius para Fahrenheit:</strong></p>
                <MathFormula formula="T_F = \\frac{9}{5}T_C + 32" display={true} />
              </div>
            </div>

            {/* Kelvin */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Kelvin (K)</h3>
              <p className="text-slate-700 mb-4">
                A escala Kelvin é a escala absoluta, usada na Física. <strong>0 K é o zero absoluto</strong>, a menor temperatura possível no universo (onde as moléculas param de se mover teoricamente).
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Características:</strong></p>
                <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                  <li>Escala absoluta (não tem valores negativos)</li>
                  <li>Criada por William Thomson (Lord Kelvin) em 1848</li>
                  <li>Unidade oficial do SI (Sistema Internacional)</li>
                  <li>Essencial para cálculos científicos e equações de Física</li>
                  <li>Zero absoluto = -273,15°C</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-300 rounded p-4">
                <p className="text-slate-700 mb-3"><strong>Fórmula de conversão de Celsius para Kelvin:</strong></p>
                <MathFormula formula="T_K = T_C + 273,15" display={true} />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="text-slate-700"><strong>Nota importante:</strong> Kelvin não usa o símbolo de grau (°). Escrevemos "298 K" e não "298°K".</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversões Detalhadas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Conversões entre Escalas - Derivação Completa</h2>
          
          <div className="space-y-8">
            {/* Celsius ↔ Kelvin */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Celsius ↔ Kelvin</h4>
              <p className="text-slate-700 mb-4">
                A relação entre Celsius e Kelvin é linear. Como 0°C = 273,15 K, temos:
              </p>
              <div className="bg-white p-4 rounded border border-blue-300 mb-4">
                <p className="text-slate-700 mb-2"><strong>Para converter Celsius em Kelvin:</strong></p>
                <MathFormula formula="T_K = T_C + 273,15" display={true} />
              </div>
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-slate-700 mb-2"><strong>Para converter Kelvin em Celsius:</strong></p>
                <MathFormula formula="T_C = T_K - 273,15" display={true} />
              </div>
            </div>

            {/* Celsius ↔ Fahrenheit */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Celsius ↔ Fahrenheit - Derivação</h4>
              <p className="text-slate-700 mb-4">
                A escala Celsius tem 100 divisões entre congelamento (0°C) e ebulição (100°C), enquanto Fahrenheit tem 180 divisões (32°F a 212°F). Portanto, a razão é 180/100 = 9/5.
              </p>
              
              <div className="bg-white p-4 rounded border border-orange-300 mb-4">
                <p className="text-slate-700 mb-2"><strong>Derivação:</strong></p>
                <div className="space-y-2 text-slate-700">
                  <p>Ponto de congelamento: 0°C = 32°F</p>
                  <p>Ponto de ebulição: 100°C = 212°F</p>
                  <p>Razão de escalas: <MathFormula formula="\\frac{\\Delta T_F}{\\Delta T_C} = \\frac{212-32}{100-0} = \\frac{180}{100} = \\frac{9}{5}" display={false} /></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-orange-300 mb-4">
                <p className="text-slate-700 mb-2"><strong>Para converter Celsius em Fahrenheit:</strong></p>
                <MathFormula formula="T_F = \\frac{9}{5}T_C + 32" display={true} />
              </div>
              <div className="bg-white p-4 rounded border border-orange-300">
                <p className="text-slate-700 mb-2"><strong>Para converter Fahrenheit em Celsius:</strong></p>
                <MathFormula formula="T_C = \\frac{5}{9}(T_F - 32)" display={true} />
              </div>
            </div>

            {/* Kelvin ↔ Fahrenheit */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Kelvin ↔ Fahrenheit</h4>
              <p className="text-slate-700 mb-4">
                Combinando as duas conversões anteriores:
              </p>
              <div className="bg-white p-4 rounded border border-purple-300 mb-4">
                <p className="text-slate-700 mb-2"><strong>Para converter Kelvin em Fahrenheit:</strong></p>
                <MathFormula formula="T_F = \\frac{9}{5}(T_K - 273,15) + 32" display={true} />
              </div>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-slate-700 mb-2"><strong>Para converter Fahrenheit em Kelvin:</strong></p>
                <MathFormula formula="T_K = \\frac{5}{9}(T_F - 32) + 273,15" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Exemplos Práticos Detalhados */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Práticos Resolvidos</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 1: Converter 25°C para Kelvin</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2">Usando a fórmula:</p>
                <MathFormula formula="T_K = T_C + 273,15 = 25 + 273,15 = 298,15 \\text{ K}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 25°C = 298,15 K</p>
            </div>

            <div className="bg-orange-50 p-6 rounded border-l-4 border-orange-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 2: Converter 98,6°F para Celsius</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2">Usando a fórmula:</p>
                <MathFormula formula="T_C = \\frac{5}{9}(T_F - 32) = \\frac{5}{9}(98,6 - 32) = \\frac{5}{9} \\times 66,6 = 37°C" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 98,6°F = 37°C (temperatura corporal humana)</p>
            </div>

            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 3: Converter 0 K para Celsius</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2">Usando a fórmula:</p>
                <MathFormula formula="T_C = T_K - 273,15 = 0 - 273,15 = -273,15°C" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 0 K = -273,15°C (Zero Absoluto)</p>
            </div>

            <div className="bg-purple-50 p-6 rounded border-l-4 border-purple-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 4: Converter 373,15 K para Fahrenheit</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2">Passo 1: Converter Kelvin para Celsius</p>
                <MathFormula formula="T_C = T_K - 273,15 = 373,15 - 273,15 = 100°C" display={true} />
                <p className="text-slate-700 mt-3 mb-2">Passo 2: Converter Celsius para Fahrenheit</p>
                <MathFormula formula="T_F = \\frac{9}{5} \\times 100 + 32 = 180 + 32 = 212°F" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 373,15 K = 212°F (ponto de ebulição da água)</p>
            </div>
          </div>
        </div>

        {/* Tabela Comparativa */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Tabela Comparativa de Escalas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left font-bold">Evento</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Celsius (°C)</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Fahrenheit (°F)</th>
                  <th className="border border-slate-300 p-3 text-center font-bold">Kelvin (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Zero Absoluto</td>
                  <td className="border border-slate-300 p-3 text-center">-273,15</td>
                  <td className="border border-slate-300 p-3 text-center">-459,67</td>
                  <td className="border border-slate-300 p-3 text-center">0</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Ponto de Congelamento da Água</td>
                  <td className="border border-slate-300 p-3 text-center">0</td>
                  <td className="border border-slate-300 p-3 text-center">32</td>
                  <td className="border border-slate-300 p-3 text-center">273,15</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-yellow-50">
                  <td className="border border-slate-300 p-3">Temperatura Ambiente</td>
                  <td className="border border-slate-300 p-3 text-center">20-25</td>
                  <td className="border border-slate-300 p-3 text-center">68-77</td>
                  <td className="border border-slate-300 p-3 text-center">293-298</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Temperatura Corporal Humana</td>
                  <td className="border border-slate-300 p-3 text-center">37</td>
                  <td className="border border-slate-300 p-3 text-center">98,6</td>
                  <td className="border border-slate-300 p-3 text-center">310,15</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-3">Ponto de Ebulição da Água</td>
                  <td className="border border-slate-300 p-3 text-center">100</td>
                  <td className="border border-slate-300 p-3 text-center">212</td>
                  <td className="border border-slate-300 p-3 text-center">373,15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Erros Comuns */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de adicionar 273,15:</strong> Muitos alunos usam apenas 273 em vez de 273,15. O valor correto é 273,15!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir a ordem das operações:</strong> Na conversão Celsius-Fahrenheit, multiplique por 9/5 ANTES de adicionar 32.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que Kelvin não usa "graus":</strong> Escrevemos "298 K" e não "298°K".</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar Celsius em fórmulas científicas:</strong> Muitas equações de Física exigem temperatura em Kelvin. Sempre converta!</span>
            </li>
          </ul>
        </div>

        {/* Dicas Práticas */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas</h3>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Memorize pontos de referência:</strong> 0°C = 273,15 K = 32°F. Isso ajuda a verificar suas conversões.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Use a proporcionalidade:</strong> Celsius e Fahrenheit têm escalas diferentes (100 vs 180 divisões), então use 9/5 ou 5/9.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Sempre use Kelvin em cálculos científicos:</strong> Muitas fórmulas de Física exigem temperatura em Kelvin.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Verifique suas conversões:</strong> Use pontos de referência conhecidos para verificar se sua resposta está correta.</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende temperatura e escalas profundamente, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calor">
              <Button className="bg-blue-600 hover:bg-blue-700">Calor e Energia Térmica</Button>
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
