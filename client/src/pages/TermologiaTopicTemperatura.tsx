import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicTemperatura() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* SEÇÃO 1: O QUE É TEMPERATURA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌡️ O Que é Temperatura?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Temperatura é uma medida do grau de agitação térmica das moléculas de uma substância.</strong> Quanto mais rápido as moléculas se movem, maior é a temperatura. Quanto mais lentamente elas se movem, menor é a temperatura.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Pense em um gás dentro de um recipiente. As moléculas estão constantemente colidindo umas com as outras e com as paredes do recipiente. Essa agitação constante é o que chamamos de movimento térmico. A temperatura é uma medida direta dessa agitação.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Em termos microscópicos, a temperatura está relacionada à <strong>energia cinética média</strong> das moléculas. Se você aumentar a temperatura, as moléculas ganham mais energia e se movem mais rapidamente. Se você diminuir a temperatura, as moléculas perdem energia e se movem mais lentamente.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Analogia Prática</h4>
              <p className="text-slate-700 leading-relaxed">
                Imagine uma sala cheia de pessoas dançando. Quando a música é rápida e animada, as pessoas se movem rapidamente - a "temperatura" da sala é alta. Quando a música fica lenta, as pessoas se movem mais lentamente - a "temperatura" diminui. A temperatura de um gás funciona exatamente assim: quanto mais rápido as moléculas "dançam", maior é a temperatura.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Por Que Medimos Temperatura?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A temperatura é uma das grandezas mais importantes da física porque:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Determina o fluxo de calor:</strong> O calor sempre flui de um corpo mais quente para um corpo mais frio. Sem saber a temperatura, não podemos prever para onde o calor vai fluir.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Afeta as propriedades dos materiais:</strong> A temperatura muda como os materiais se comportam. O metal se expande quando aquecido, a água muda de estado (sólido → líquido → gás) conforme a temperatura aumenta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Governa reações químicas:</strong> A velocidade de uma reação química depende da temperatura. Quanto mais quente, mais rápida a reação.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: ESCALAS TERMOMÉTRICAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 As Três Escalas Termométricas</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Escala Celsius (°C)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A escala Celsius é a mais usada no dia a dia. Ela foi criada pelo astrônomo sueco Anders Celsius em 1742. A ideia é simples:
              </p>
              <ul className="space-y-3 text-slate-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>0°C:</strong> Ponto de congelamento da água (água muda de líquido para sólido)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>100°C:</strong> Ponto de ebulição da água (água muda de líquido para gás)</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                A escala Celsius divide o intervalo entre esses dois pontos em 100 partes iguais. Por isso é chamada de "centígrada" (cem graus). Cada divisão representa 1°C.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Quando usar:</strong> Termômetros de casa, previsão do tempo, temperatura corporal, cozinha.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Escala Fahrenheit (°F)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A escala Fahrenheit foi criada pelo físico alemão Daniel Fahrenheit em 1724. É usada principalmente nos EUA e em alguns países de língua inglesa. Os pontos de referência são diferentes:
              </p>
              <ul className="space-y-3 text-slate-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>32°F:</strong> Ponto de congelamento da água</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>212°F:</strong> Ponto de ebulição da água</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Isso significa que a escala Fahrenheit divide o intervalo entre congelamento e ebulição em 180 partes (212 - 32 = 180), não 100. Portanto, cada grau Fahrenheit é menor que cada grau Celsius.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Quando usar:</strong> Principalmente nos EUA. Se você viajar para lá, precisa entender essa escala.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Escala Kelvin (K)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A escala Kelvin é a escala científica oficial. Ela foi criada pelo físico britânico William Thomson (Lord Kelvin) em 1848. É a escala usada em toda a ciência e engenharia profissional.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>A grande diferença:</strong> A escala Kelvin começa no zero absoluto, que é a temperatura mais baixa possível no universo. Nessa temperatura, toda a agitação térmica das moléculas cessa completamente. Não há nada mais frio que o zero absoluto.
              </p>
              <ul className="space-y-3 text-slate-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>0 K:</strong> Zero absoluto (temperatura mais baixa possível)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>273,15 K:</strong> Ponto de congelamento da água (0°C)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>373,15 K:</strong> Ponto de ebulição da água (100°C)</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                Note que a escala Kelvin não usa o símbolo de grau (°). Você diz "273 Kelvin", não "273 graus Kelvin".
              </p>
              <p className="text-slate-600 text-sm mt-4">
                <strong>Quando usar:</strong> Física, química, engenharia, ciência em geral. É a escala oficial do Sistema Internacional de Unidades (SI).
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3: CONVERSÃO ENTRE ESCALAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Conversão Entre Escalas</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">De Celsius para Fahrenheit</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Para converter uma temperatura de Celsius para Fahrenheit, usamos a seguinte fórmula:
              </p>
              <div className="bg-white border border-indigo-300 rounded p-4 mb-4">
                <MathFormula formula="T_F = \frac{9}{5} \cdot T_C + 32" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Como funciona:</strong> A fórmula tem duas partes:
              </p>
              <ul className="space-y-3 text-slate-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Multiplicar por 9/5 (ou 1,8):</strong> Isso converte a diferença de tamanho entre os graus. Como a escala Fahrenheit tem 180 divisões e a Celsius tem 100, cada grau Celsius é 1,8 vezes maior que cada grau Fahrenheit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Somar 32:</strong> Isso ajusta o ponto zero. 0°C corresponde a 32°F, então adicionamos 32.</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Qual é a temperatura de 25°C em Fahrenheit?
              </p>
              <div className="bg-white border border-indigo-300 rounded p-4 mb-4">
                <MathFormula formula="T_F = \frac{9}{5} \cdot 25 + 32 = 1,8 \cdot 25 + 32 = 45 + 32 = 77°F" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Então, 25°C (temperatura ambiente agradável) = 77°F.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">De Fahrenheit para Celsius</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Para fazer a conversão inversa (Fahrenheit para Celsius), invertemos a fórmula:
              </p>
              <div className="bg-white border border-cyan-300 rounded p-4 mb-4">
                <MathFormula formula="T_C = \frac{5}{9} \cdot (T_F - 32)" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Como funciona:</strong> Fazemos o oposto:
              </p>
              <ul className="space-y-3 text-slate-700 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Subtrair 32:</strong> Primeiro, removemos o deslocamento do ponto zero.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Multiplicar por 5/9:</strong> Depois, convertemos o tamanho dos graus de volta para Celsius.</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Qual é a temperatura de 98,6°F (temperatura corporal normal) em Celsius?
              </p>
              <div className="bg-white border border-cyan-300 rounded p-4 mb-4">
                <MathFormula formula="T_C = \frac{5}{9} \cdot (98,6 - 32) = \frac{5}{9} \cdot 66,6 = 37°C" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Então, a temperatura corporal normal é 37°C.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">De Celsius para Kelvin</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A conversão entre Celsius e Kelvin é a mais simples de todas:
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T_K = T_C + 273,15" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Por que é tão simples?</strong> Porque ambas as escalas têm o mesmo tamanho de grau! A única diferença é o ponto zero. A escala Kelvin começa 273,15 unidades abaixo da escala Celsius.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Qual é a temperatura de 25°C em Kelvin?
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T_K = 25 + 273,15 = 298,15 \text{ K}" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Então, 25°C = 298,15 K (frequentemente arredondado para 298 K).
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">De Kelvin para Celsius</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A conversão inversa é igualmente simples:
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="T_C = T_K - 273,15" display={true} />
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Exemplo:</strong> Qual é a temperatura de 300 K em Celsius?
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="T_C = 300 - 273,15 = 26,85°C \approx 27°C" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Então, 300 K ≈ 27°C (uma temperatura ambiente agradável).
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 4: TABELA COMPARATIVA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Tabela Comparativa de Temperaturas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-300">
                  <th className="p-3 text-left font-bold text-slate-900">Evento</th>
                  <th className="p-3 text-center font-bold text-slate-900">Celsius (°C)</th>
                  <th className="p-3 text-center font-bold text-slate-900">Fahrenheit (°F)</th>
                  <th className="p-3 text-center font-bold text-slate-900">Kelvin (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Zero Absoluto</td>
                  <td className="p-3 text-center text-slate-700">-273,15</td>
                  <td className="p-3 text-center text-slate-700">-459,67</td>
                  <td className="p-3 text-center text-slate-700">0</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Congelamento da Água</td>
                  <td className="p-3 text-center text-slate-700">0</td>
                  <td className="p-3 text-center text-slate-700">32</td>
                  <td className="p-3 text-center text-slate-700">273,15</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Temperatura Corporal</td>
                  <td className="p-3 text-center text-slate-700">37</td>
                  <td className="p-3 text-center text-slate-700">98,6</td>
                  <td className="p-3 text-center text-slate-700">310,15</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Temperatura Ambiente</td>
                  <td className="p-3 text-center text-slate-700">25</td>
                  <td className="p-3 text-center text-slate-700">77</td>
                  <td className="p-3 text-center text-slate-700">298,15</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Ebulição da Água</td>
                  <td className="p-3 text-center text-slate-700">100</td>
                  <td className="p-3 text-center text-slate-700">212</td>
                  <td className="p-3 text-center text-slate-700">373,15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SEÇÃO 5: PONTOS-CHAVE */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave para Lembrar</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Temperatura mede agitação térmica:</strong> Quanto mais rápido as moléculas se movem, maior a temperatura.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Três escalas principais:</strong> Celsius (dia a dia), Fahrenheit (EUA), Kelvin (ciência).
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Conversão Celsius-Fahrenheit:</strong> <MathFormula formula="T_F = \frac{9}{5}T_C + 32" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Conversão Celsius-Kelvin:</strong> <MathFormula formula="T_K = T_C + 273,15" display={false} /> (muito mais simples!)
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Kelvin é a escala científica:</strong> Começa no zero absoluto, não tem valores negativos.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Memorize pontos-chave:</strong> 0°C = 32°F = 273,15 K e 100°C = 212°F = 373,15 K
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
