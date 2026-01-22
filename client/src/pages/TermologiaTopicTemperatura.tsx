import { Link } from "wouter";
import { ArrowLeft, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌡️ O Que é Temperatura?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Temperatura é uma medida do grau de agitação das moléculas de uma substância.</strong> Quanto mais rápido as moléculas se movem, maior é a temperatura. Quanto mais lentamente elas se movem, menor é a temperatura.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Imagine um gás dentro de um recipiente. As moléculas desse gás estão sempre em movimento, colidindo umas com as outras e com as paredes do recipiente. A temperatura é exatamente uma medida de quão vigorosamente essas moléculas estão se movendo.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Analogia Prática</h4>
              <p className="text-slate-700">
                Pense em um pátio cheio de crianças. Se as crianças estão correndo muito rápido, pulando e brincando com muita energia, podemos dizer que o "nível de energia" do pátio é alto. Se as crianças estão sentadas e quietas, o "nível de energia" é baixo. A temperatura funciona assim com as moléculas!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 As Três Escalas de Temperatura</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Escala Celsius (°C)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A escala Celsius é a mais comum no dia a dia.</strong> Ela foi criada pelo cientista sueco Anders Celsius em 1742. Nesta escala:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>0°C</strong> é o ponto de congelamento da água (quando a água vira gelo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>100°C</strong> é o ponto de ebulição da água (quando a água vira vapor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Temperatura ambiente</strong> é aproximadamente <strong>20-25°C</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Escala Fahrenheit (°F)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A escala Fahrenheit é usada principalmente nos EUA.</strong> Foi criada pelo físico alemão Daniel Gabriel Fahrenheit em 1724. Nesta escala:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>32°F</strong> é o ponto de congelamento da água</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>212°F</strong> é o ponto de ebulição da água</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Temperatura ambiente</strong> é aproximadamente <strong>68-77°F</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Escala Kelvin (K)</h3>
              <p className="text-slate-700 mb-4">
                <strong>A escala Kelvin é usada principalmente em ciência e engenharia.</strong> Foi criada pelo físico britânico William Thomson (Lord Kelvin) em 1848. Nesta escala:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>273,15 K</strong> é o ponto de congelamento da água</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>373,15 K</strong> é o ponto de ebulição da água</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>0 K</strong> é o "zero absoluto" - a temperatura mais baixa possível no universo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Convertendo Entre Escalas</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Celsius para Fahrenheit</h3>
              <p className="text-slate-700 mb-4">Para converter uma temperatura de Celsius para Fahrenheit, usamos a fórmula:</p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T_F = \frac{9}{5} \cdot T_C + 32" display={true} />
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Onde: $T_F$ = temperatura em Fahrenheit, $T_C$ = temperatura em Celsius
              </p>
              <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Exemplo:</p>
                <p className="text-slate-700 mb-2">Converter 20°C para Fahrenheit:</p>
                <MathFormula formula="T_F = \frac{9}{5} \cdot 20 + 32 = 36 + 32 = 68°F" display={true} />
                <p className="text-slate-600 text-sm mt-2">20°C é uma temperatura agradável, e 68°F é exatamente a mesma temperatura!</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Celsius para Kelvin</h3>
              <p className="text-slate-700 mb-4">Para converter uma temperatura de Celsius para Kelvin, usamos a fórmula:</p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T_K = T_C + 273,15" display={true} />
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Onde: $T_K$ = temperatura em Kelvin, $T_C$ = temperatura em Celsius
              </p>
              <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Exemplo:</p>
                <p className="text-slate-700 mb-2">Converter 25°C para Kelvin:</p>
                <MathFormula formula="T_K = 25 + 273,15 = 298,15 K" display={true} />
                <p className="text-slate-600 text-sm mt-2">25°C (temperatura ambiente confortável) é aproximadamente 298 K.</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fahrenheit para Celsius</h3>
              <p className="text-slate-700 mb-4">Para converter uma temperatura de Fahrenheit para Celsius, usamos a fórmula inversa:</p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T_C = \frac{5}{9} \cdot (T_F - 32)" display={true} />
              </div>
              <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Exemplo:</p>
                <p className="text-slate-700 mb-2">Converter 86°F para Celsius:</p>
                <MathFormula formula="T_C = \frac{5}{9} \cdot (86 - 32) = \frac{5}{9} \cdot 54 = 30°C" display={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📋 Tabela Comparativa de Temperaturas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-200">
                  <th className="border border-orange-300 p-3 text-left font-bold">Evento</th>
                  <th className="border border-orange-300 p-3 text-center font-bold">Celsius</th>
                  <th className="border border-orange-300 p-3 text-center font-bold">Fahrenheit</th>
                  <th className="border border-orange-300 p-3 text-center font-bold">Kelvin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-100">
                  <td className="border border-orange-300 p-3">Zero Absoluto</td>
                  <td className="border border-orange-300 p-3 text-center">-273,15°C</td>
                  <td className="border border-orange-300 p-3 text-center">-459,67°F</td>
                  <td className="border border-orange-300 p-3 text-center">0 K</td>
                </tr>
                <tr className="hover:bg-orange-100">
                  <td className="border border-orange-300 p-3">Congelamento da Água</td>
                  <td className="border border-orange-300 p-3 text-center">0°C</td>
                  <td className="border border-orange-300 p-3 text-center">32°F</td>
                  <td className="border border-orange-300 p-3 text-center">273,15 K</td>
                </tr>
                <tr className="hover:bg-orange-100">
                  <td className="border border-orange-300 p-3">Temperatura Ambiente</td>
                  <td className="border border-orange-300 p-3 text-center">20°C</td>
                  <td className="border border-orange-300 p-3 text-center">68°F</td>
                  <td className="border border-orange-300 p-3 text-center">293,15 K</td>
                </tr>
                <tr className="hover:bg-orange-100">
                  <td className="border border-orange-300 p-3">Temperatura Corporal</td>
                  <td className="border border-orange-300 p-3 text-center">37°C</td>
                  <td className="border border-orange-300 p-3 text-center">98,6°F</td>
                  <td className="border border-orange-300 p-3 text-center">310,15 K</td>
                </tr>
                <tr className="hover:bg-orange-100">
                  <td className="border border-orange-300 p-3">Ebulição da Água</td>
                  <td className="border border-orange-300 p-3 text-center">100°C</td>
                  <td className="border border-orange-300 p-3 text-center">212°F</td>
                  <td className="border border-orange-300 p-3 text-center">373,15 K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Dicas Importantes</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Kelvin nunca usa grau (°):</strong> Escrevemos "300 K" e não "300°K". Kelvin é a unidade padrão do Sistema Internacional.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Zero absoluto é impossível de atingir:</strong> É a temperatura teórica mais baixa onde toda a agitação molecular cessa. Nenhum objeto no universo pode estar mais frio que isso.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Diferenças de temperatura:</strong> Uma diferença de 1°C é igual a uma diferença de 1 K, mas é igual a uma diferença de 1,8°F.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
