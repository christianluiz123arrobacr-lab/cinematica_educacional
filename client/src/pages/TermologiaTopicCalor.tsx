import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicCalor() {
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
              <h1 className="text-xl font-bold text-slate-900">Calor e Transferência Térmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: O QUE É CALOR ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔥 O que é Calor?</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Calor é a transferência de energia térmica entre dois corpos com temperaturas diferentes.</strong> Calor sempre flui do corpo mais quente para o corpo mais frio, nunca o contrário (sem trabalho externo).
              </p>
              <p className="text-slate-700 leading-relaxed">
                Calor é um <strong>processo</strong>, não uma propriedade. Um corpo não "tem" calor, mas sim <strong>transfere</strong> calor. A energia que um corpo possui é chamada de <strong>energia interna</strong> ou <strong>energia térmica</strong>.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Diferença Crucial: Calor vs Energia Térmica</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="font-bold text-blue-900">Energia Térmica (U):</p>
                  <p>É a energia total associada ao movimento desordenado das moléculas de um corpo. É uma propriedade que o corpo possui.</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="font-bold text-blue-900">Calor (Q):</p>
                  <p>É a transferência de energia térmica entre dois corpos. Ocorre apenas quando há diferença de temperatura. É um processo.</p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
                <p className="text-slate-700 text-sm">
                  <strong>Analogia:</strong> Energia térmica é como o dinheiro que você tem na conta. Calor é como transferir dinheiro de uma conta para outra. Você não "tem" uma transferência, você <strong>faz</strong> uma transferência!
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Unidades de Calor</h4>
              <div className="space-y-4 text-slate-700">
                <p><strong>Joule (J):</strong> Unidade oficial do SI. 1 J é a quantidade de energia necessária para fazer 1 Newton de força agir por 1 metro.</p>
                <p><strong>Caloria (cal):</strong> Unidade histórica. 1 cal = quantidade de calor necessária para elevar a temperatura de 1 grama de água em 1°C.</p>
                
                <div className="bg-white border border-purple-300 rounded p-3">
                  <p className="font-bold mb-2">Relação entre unidades:</p>
                  <MathFormula formula="1 \\text{ cal} = 4,186 \\text{ J}" display={true} />
                </div>

                <p><strong>Quilocaloria (kcal):</strong> 1 kcal = 1000 cal (usada em nutrição, onde é chamada de "Caloria" com C maiúsculo)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: QUANTIDADE DE CALOR ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Quantidade de Calor</h2>
          
          <p className="text-slate-700 mb-6">
            Quando um corpo recebe ou perde calor, sua temperatura muda (na maioria dos casos). A relação entre calor e variação de temperatura é descrita pela fórmula fundamental da calorimetria.
          </p>

          <div className="space-y-8">
            {/* FÓRMULA FUNDAMENTAL */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Fórmula Fundamental da Calorimetria</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="Q = m \\cdot c \\cdot \\Delta T" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Onde:</strong></p>
                <p>• <strong>Q</strong> = Quantidade de calor (em Joules - J)</p>
                <p>• <strong>m</strong> = Massa do corpo (em quilogramas - kg)</p>
                <p>• <strong>c</strong> = Calor específico da substância (em J/(kg·K) ou J/(kg·°C))</p>
                <p>• <strong>ΔT</strong> = Variação de temperatura = T_final - T_inicial (em Kelvin - K ou Celsius - °C)</p>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mt-4">
                  <p className="font-bold mb-3">Interpretação Física:</p>
                  <p className="mb-2">Esta fórmula diz que:</p>
                  <p className="ml-4">• Quanto <strong>maior a massa</strong>, mais calor é necessário para mudar a temperatura</p>
                  <p className="ml-4">• Quanto <strong>maior o calor específico</strong>, mais calor é necessário para mudar a temperatura</p>
                  <p className="ml-4">• Quanto <strong>maior a variação de temperatura</strong>, mais calor foi transferido</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Sinal de Q:</strong> Se Q {'>'} 0, o corpo absorveu calor (aquecimento). Se Q {'<'} 0, o corpo cedeu calor (resfriamento).
                  </p>
                </div>
              </div>
            </div>

            {/* CALOR ESPECÍFICO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🌡️ Calor Específico</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Calor específico (c)</strong> é a quantidade de calor necessária para elevar a temperatura de 1 kg de uma substância em 1°C (ou 1 K).
              </p>

              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="c = \\frac{Q}{m \\cdot \\Delta T}" display={true} />
              </div>

              <p className="text-slate-700 mb-4">
                <strong>Unidade:</strong> J/(kg·°C) ou J/(kg·K). Essas unidades são equivalentes porque uma variação de 1°C = uma variação de 1 K.
              </p>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">Tabela de Calores Específicos (a 25°C):</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-orange-200">
                        <th className="border border-orange-300 p-2 text-left">Substância</th>
                        <th className="border border-orange-300 p-2 text-center">c (J/(kg·°C))</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Água</td>
                        <td className="border border-orange-300 p-2 text-center font-bold">4.186</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Gelo</td>
                        <td className="border border-orange-300 p-2 text-center">2.090</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Vapor de água</td>
                        <td className="border border-orange-300 p-2 text-center">1.850</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Alumínio</td>
                        <td className="border border-orange-300 p-2 text-center">897</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Ferro</td>
                        <td className="border border-orange-300 p-2 text-center">449</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Cobre</td>
                        <td className="border border-orange-300 p-2 text-center">385</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Ouro</td>
                        <td className="border border-orange-300 p-2 text-center">129</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <td className="border border-orange-300 p-2">Areia</td>
                        <td className="border border-orange-300 p-2 text-center">835</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Observação Importante:</strong> A água tem um calor específico muito alto (4.186 J/(kg·°C)). Isso significa que a água precisa de muito calor para mudar de temperatura. Por isso, oceanos e lagos ajudam a regular o clima!
                </p>
              </div>
            </div>

            {/* EXEMPLOS DE CÁLCULO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📝 Exemplos de Cálculo</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-3">Exemplo 1: Aquecendo água</p>
                  <p className="text-slate-700 mb-3">Quanto de calor é necessário para elevar a temperatura de 2 kg de água de 20°C para 80°C?</p>
                  
                  <div className="bg-slate-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Dados:</p>
                    <p>• m = 2 kg</p>
                    <p>• c = 4.186 J/(kg·°C) (água)</p>
                    <p>• T_inicial = 20°C</p>
                    <p>• T_final = 80°C</p>
                    <p>• ΔT = 80 - 20 = 60°C</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Solução:</p>
                    <MathFormula formula="Q = m \\cdot c \\cdot \\Delta T" display={true} />
                    <MathFormula formula="Q = 2 \\times 4.186 \\times 60" display={true} />
                    <MathFormula formula="Q = 502.32 \\text{ J}" display={true} />
                  </div>

                  <p className="text-slate-700 text-sm">
                    <strong>Resposta:</strong> São necessários 502.32 J (ou aproximadamente 120 kcal) para aquecer 2 kg de água de 20°C para 80°C.
                  </p>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-3">Exemplo 2: Resfriando ferro</p>
                  <p className="text-slate-700 mb-3">Um bloco de ferro de 5 kg é resfriado de 200°C para 50°C. Quanto de calor foi liberado?</p>
                  
                  <div className="bg-slate-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Dados:</p>
                    <p>• m = 5 kg</p>
                    <p>• c = 449 J/(kg·°C) (ferro)</p>
                    <p>• T_inicial = 200°C</p>
                    <p>• T_final = 50°C</p>
                    <p>• ΔT = 50 - 200 = -150°C</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Solução:</p>
                    <MathFormula formula="Q = m \\cdot c \\cdot \\Delta T" display={true} />
                    <MathFormula formula="Q = 5 \\times 449 \\times (-150)" display={true} />
                    <MathFormula formula="Q = -336.750 \\text{ J}" display={true} />
                  </div>

                  <p className="text-slate-700 text-sm">
                    <strong>Resposta:</strong> O bloco libera 336.750 J de calor (o sinal negativo indica que o calor foi liberado, não absorvido).
                  </p>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-3">Exemplo 3: Encontrando a temperatura final</p>
                  <p className="text-slate-700 mb-3">100 g de alumínio a 80°C é colocado em 200 g de água a 20°C. Qual é a temperatura final no equilíbrio?</p>
                  
                  <div className="bg-slate-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Dados:</p>
                    <p>• m_Al = 0,1 kg, c_Al = 897 J/(kg·°C), T_Al = 80°C</p>
                    <p>• m_água = 0,2 kg, c_água = 4.186 J/(kg·°C), T_água = 20°C</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Solução:</p>
                    <p className="text-slate-700 mb-2">No equilíbrio: Q_Al + Q_água = 0</p>
                    <MathFormula formula="m_{Al} \\cdot c_{Al} \\cdot (T_f - T_{Al}) + m_{água} \\cdot c_{água} \\cdot (T_f - T_{água}) = 0" display={true} />
                    <MathFormula formula="0,1 \\times 897 \\times (T_f - 80) + 0,2 \\times 4.186 \\times (T_f - 20) = 0" display={true} />
                    <MathFormula formula="89,7 \\cdot T_f - 7.176 + 837,2 \\cdot T_f - 16.744 = 0" display={true} />
                    <MathFormula formula="926,9 \\cdot T_f = 23.920" display={true} />
                    <MathFormula formula="T_f \\approx 25,8°C" display={true} />
                  </div>

                  <p className="text-slate-700 text-sm">
                    <strong>Resposta:</strong> A temperatura final é aproximadamente 25,8°C.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: MECANISMOS DE TRANSFERÊNCIA DE CALOR ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Mecanismos de Transferência de Calor</h2>
          
          <p className="text-slate-700 mb-6">
            Existem três mecanismos principais pelos quais o calor se transfere de um corpo para outro. Cada um funciona em situações diferentes e tem características únicas.
          </p>

          <div className="space-y-8">
            {/* CONDUÇÃO */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Condução Térmica</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Condução</strong> é a transferência de calor através de um material sólido, sem movimento do material. O calor se propaga de molécula para molécula através de colisões.
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Lei de Fourier da Condução Térmica:</p>
                <MathFormula formula="\\Phi = -k \\cdot A \\cdot \\frac{dT}{dx}" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>Φ</strong> = Fluxo de calor (em Watts - W, que é J/s)</p>
                <p>• <strong>k</strong> = Condutividade térmica da substância (em W/(m·K))</p>
                <p>• <strong>A</strong> = Área de seção transversal (em m²)</p>
                <p>• <strong>dT/dx</strong> = Gradiente de temperatura (em K/m)</p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">Tabela de Condutividades Térmicas:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-blue-300 p-2 text-left">Material</th>
                        <th className="border border-blue-300 p-2 text-center">k (W/(m·K))</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Prata</td>
                        <td className="border border-blue-300 p-2 text-center font-bold">429</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Cobre</td>
                        <td className="border border-blue-300 p-2 text-center">398</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Alumínio</td>
                        <td className="border border-blue-300 p-2 text-center">237</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Ferro</td>
                        <td className="border border-blue-300 p-2 text-center">80</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Vidro</td>
                        <td className="border border-blue-300 p-2 text-center">1,0</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Água</td>
                        <td className="border border-blue-300 p-2 text-center">0,6</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Ar</td>
                        <td className="border border-blue-300 p-2 text-center">0,026</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="border border-blue-300 p-2">Lã de vidro</td>
                        <td className="border border-blue-300 p-2 text-center">0,04</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Exemplo Prático:</strong> Quando você coloca uma colher de metal em uma xícara de chá quente, a colher fica quente porque o calor se conduz através do metal. O ar, por outro lado, é um péssimo condutor, por isso as panelas têm cabos de plástico ou madeira!
                </p>
              </div>
            </div>

            {/* CONVECÇÃO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Convecção Térmica</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Convecção</strong> é a transferência de calor através do movimento de um fluido (líquido ou gás). O fluido quente sobe (menos denso) e o fluido frio desce (mais denso), criando correntes de convecção.
              </p>

              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Lei de Newton do Resfriamento:</p>
                <MathFormula formula="\\Phi = h \\cdot A \\cdot (T_{corpo} - T_{ambiente})" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>Φ</strong> = Fluxo de calor (em Watts - W)</p>
                <p>• <strong>h</strong> = Coeficiente de convecção (em W/(m²·K))</p>
                <p>• <strong>A</strong> = Área de superfície (em m²)</p>
                <p>• <strong>T_corpo</strong> = Temperatura do corpo (em K)</p>
                <p>• <strong>T_ambiente</strong> = Temperatura do ambiente (em K)</p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">Tipos de Convecção:</p>
                <p className="mb-2"><strong>Convecção Natural:</strong> O fluido se move devido à diferença de densidade causada pela diferença de temperatura. Exemplo: ar quente sobe, ar frio desce.</p>
                <p><strong>Convecção Forçada:</strong> O fluido é forçado a se mover por um ventilador ou bomba. Exemplo: ar condicionado, ventilador.</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Exemplo Prático:</strong> Quando você aquece água em uma panela, o calor sobe do fundo através da convecção. A água quente sobe, a água fria desce, criando um ciclo contínuo. É por isso que a água ferve mesmo que você aqueça apenas o fundo!
                </p>
              </div>
            </div>

            {/* RADIAÇÃO */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Radiação Térmica</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Radiação</strong> é a transferência de calor através de ondas eletromagnéticas (luz infravermelha). Não requer um meio material - o calor pode se propagar através do vácuo!
              </p>

              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Lei de Stefan-Boltzmann:</p>
                <MathFormula formula="\\Phi = \\sigma \\cdot \\varepsilon \\cdot A \\cdot T^4" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>Φ</strong> = Potência radiada (em Watts - W)</p>
                <p>• <strong>σ</strong> = Constante de Stefan-Boltzmann = 5,67 × 10⁻⁸ W/(m²·K⁴)</p>
                <p>• <strong>ε</strong> = Emissividade da superfície (0 ≤ ε ≤ 1, adimensional)</p>
                <p>• <strong>A</strong> = Área de superfície (em m²)</p>
                <p>• <strong>T</strong> = Temperatura absoluta (em Kelvin - K)</p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">Observações Importantes:</p>
                <p className="mb-2">• A potência radiada é proporcional a <strong>T⁴</strong> (quarta potência!). Pequenos aumentos de temperatura resultam em grandes aumentos de radiação.</p>
                <p className="mb-2">• <strong>Emissividade (ε):</strong> Corpos negros têm ε = 1 (absorvem e emitem toda a radiação). Corpos brilhantes têm ε {'<'} 1.</p>
                <p>• <strong>Absorção:</strong> Um corpo também absorve radiação do ambiente. A radiação líquida é: Φ_líquida = σ·ε·A·(T⁴ - T_ambiente⁴)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Exemplo Prático:</strong> O Sol aquece a Terra através da radiação térmica, viajando 150 milhões de km através do vácuo do espaço! Você também sente o calor de uma fogueira mesmo estando longe dela - esse é o calor por radiação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4: EQUILÍBRIO TÉRMICO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚖️ Equilíbrio Térmico</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Princípio da Conservação de Energia</h3>
              <p className="text-slate-700 mb-4">
                Quando dois corpos com temperaturas diferentes entram em contato, o calor flui do corpo mais quente para o corpo mais frio até que ambos atinjam a mesma temperatura (equilíbrio térmico).
              </p>
              
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Princípio da Conservação:</p>
                <MathFormula formula="Q_{absorvido} + Q_{cedido} = 0" display={true} />
              </div>

              <p className="text-slate-700 mb-4">Ou equivalentemente:</p>

              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="Q_{absorvido} = -Q_{cedido}" display={true} />
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded">
                <p className="font-bold mb-3">Exemplo: Mistura de Água</p>
                <p className="text-slate-700 mb-3">100 g de água a 80°C é misturada com 200 g de água a 20°C. Qual é a temperatura final?</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <p className="font-bold text-slate-900 mb-2">Dados:</p>
                  <p>• m₁ = 100 g = 0,1 kg (água quente)</p>
                  <p>• T₁ = 80°C</p>
                  <p>• m₂ = 200 g = 0,2 kg (água fria)</p>
                  <p>• T₂ = 20°C</p>
                  <p>• c = 4.186 J/(kg·°C) (água)</p>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-slate-900 mb-2">Solução:</p>
                  <p className="text-slate-700 mb-2">No equilíbrio: Q₁ + Q₂ = 0</p>
                  <MathFormula formula="m_1 \\cdot c \\cdot (T_f - T_1) + m_2 \\cdot c \\cdot (T_f - T_2) = 0" display={true} />
                  <p className="text-slate-700 my-2">Como c é igual para ambas:</p>
                  <MathFormula formula="m_1 \\cdot (T_f - T_1) + m_2 \\cdot (T_f - T_2) = 0" display={true} />
                  <MathFormula formula="0,1 \\cdot (T_f - 80) + 0,2 \\cdot (T_f - 20) = 0" display={true} />
                  <MathFormula formula="0,1 \\cdot T_f - 8 + 0,2 \\cdot T_f - 4 = 0" display={true} />
                  <MathFormula formula="0,3 \\cdot T_f = 12" display={true} />
                  <MathFormula formula="T_f = 40°C" display={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 5: CALOR LATENTE ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">❄️ Calor Latente - Mudanças de Estado</h2>
          
          <p className="text-slate-700 mb-6">
            Calor latente é o calor necessário para <strong>mudar o estado físico</strong> de uma substância <strong>sem alterar sua temperatura</strong>. Durante uma mudança de estado, toda a energia absorvida é usada para quebrar ou formar ligações moleculares, não para aumentar a temperatura.
          </p>

          <div className="bg-white border border-slate-300 rounded p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-3">Fórmula do Calor Latente:</h4>
            <MathFormula formula="Q = m \\cdot L" display={true} />
            <div className="mt-4 space-y-2 text-slate-700">
              <p><strong>Q:</strong> Calor latente (em Joules - J)</p>
              <p><strong>m:</strong> Massa da substância (em kg)</p>
              <p><strong>L:</strong> Calor latente específico (em J/kg)</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Calor Latente de Fusão (Sólido → Líquido)</h4>
              <p className="text-slate-700 mb-3">
                É o calor necessário para derreter uma substância sólida, mantendo a temperatura constante.
              </p>
              <p className="text-slate-700 mb-3"><strong>Exemplo:</strong> Gelo a 0°C → Água a 0°C</p>
              <p className="text-slate-700 mb-3"><strong>Para água:</strong> L_fusão ≈ 334.000 J/kg (ou 334 kJ/kg)</p>
              <p className="text-slate-700">
                <strong>Interpretação:</strong> Para derreter 1 kg de gelo a 0°C, você precisa fornecer 334.000 J de calor, mas a temperatura permanece em 0°C durante todo o processo!
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Calor Latente de Vaporização (Líquido → Gás)</h4>
              <p className="text-slate-700 mb-3">
                É o calor necessário para evaporar uma substância líquida, mantendo a temperatura constante.
              </p>
              <p className="text-slate-700 mb-3"><strong>Exemplo:</strong> Água a 100°C → Vapor a 100°C</p>
              <p className="text-slate-700 mb-3"><strong>Para água:</strong> L_vaporização ≈ 2.260.000 J/kg (ou 2.260 kJ/kg)</p>
              <p className="text-slate-700">
                <strong>Interpretação:</strong> Para vaporizar 1 kg de água a 100°C, você precisa fornecer 2.260.000 J de calor, mas a temperatura permanece em 100°C durante todo o processo!
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Calor Latente de Sublimação (Sólido → Gás)</h4>
              <p className="text-slate-700 mb-3">
                É o calor necessário para transformar uma substância sólida diretamente em gás, sem passar pelo estado líquido.
              </p>
              <p className="text-slate-700 mb-3"><strong>Exemplo:</strong> Gelo seco (CO₂ sólido) → CO₂ gasoso</p>
              <p className="text-slate-700">
                <strong>Observação:</strong> L_sublimação = L_fusão + L_vaporização
              </p>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 6: EXEMPLOS PRÁTICOS COMPLETOS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Práticos Completos</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded border-l-4 border-orange-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 1: Transformação de Gelo em Vapor</p>
              <p className="text-slate-700 mb-3">Quanto de calor é necessário para transformar 1 kg de gelo a -10°C em vapor a 100°C?</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2"><strong>Passo 1:</strong> Aquecer gelo de -10°C a 0°C</p>
                <MathFormula formula="Q_1 = m \\cdot c_{gelo} \\cdot \\Delta T = 1 \\times 2.090 \\times 10 = 20.900 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 2:</strong> Derreter gelo a 0°C</p>
                <MathFormula formula="Q_2 = m \\cdot L_{fusão} = 1 \\times 334.000 = 334.000 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 3:</strong> Aquecer água de 0°C a 100°C</p>
                <MathFormula formula="Q_3 = m \\cdot c_{água} \\cdot \\Delta T = 1 \\times 4.186 \\times 100 = 418.600 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 4:</strong> Vaporizar água a 100°C</p>
                <MathFormula formula="Q_4 = m \\cdot L_{vaporização} = 1 \\times 2.260.000 = 2.260.000 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Total:</strong></p>
                <MathFormula formula="Q_{total} = Q_1 + Q_2 + Q_3 + Q_4 = 20.900 + 334.000 + 418.600 + 2.260.000 = 3.033.500 \\text{ J}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 3.033.500 J ou ≈ 3.034 kJ</p>
            </div>

            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 2: Condução de Calor através de uma Parede</p>
              <p className="text-slate-700 mb-3">Uma parede de vidro tem 0,5 m de espessura, 10 m² de área. A temperatura interna é 20°C e externa é 0°C. Quanto de calor é conduzido em 1 hora?</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2"><strong>Dados:</strong></p>
                <p>• k = 1,0 W/(m·K) (vidro)</p>
                <p>• A = 10 m²</p>
                <p>• ΔT = 20 - 0 = 20 K</p>
                <p>• d = 0,5 m</p>
                <p>• t = 1 hora = 3.600 s</p>
                <p className="mt-3 mb-2"><strong>Solução:</strong></p>
                <MathFormula formula="\\Phi = k \\cdot A \\cdot \\frac{\\Delta T}{d} = 1 \\times 10 \\times \\frac{20}{0,5} = 400 \\text{ W}" display={true} />
                <MathFormula formula="Q = \\Phi \\cdot t = 400 \\times 3.600 = 1.440.000 \\text{ J}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 1.440.000 J ou 1.440 kJ de calor é conduzido em 1 hora.</p>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 7: ERROS COMUNS ===== */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns ao Trabalhar com Calor</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir calor com temperatura:</strong> Calor é transferência de energia, temperatura é medida de agitação molecular.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de converter unidades:</strong> Use sempre kg, J, K ou °C consistentemente.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Ignorar o sinal de Q:</strong> Q positivo = corpo absorve calor. Q negativo = corpo libera calor.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar ΔT errado:</strong> ΔT = T_final - T_inicial, não o contrário!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que radiação não precisa de meio:</strong> Radiação funciona até no vácuo!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir calor sensível com latente:</strong> Sensível muda temperatura, latente muda estado físico.</span>
            </li>
          </ul>
        </div>

        {/* ===== SEÇÃO 8: DICAS PRÁTICAS ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas para Memorizar</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>1. Lembre-se dos três mecanismos:</strong></p>
            <p className="ml-4">• <strong>Condução:</strong> Colher quente no chá (sólido)</p>
            <p className="ml-4">• <strong>Convecção:</strong> Água fervendo na panela (fluido)</p>
            <p className="ml-4">• <strong>Radiação:</strong> Calor do Sol (sem meio)</p>
            
            <p className="mt-4"><strong>2. Fórmula fundamental:</strong> Q = m·c·ΔT</p>
            <p className="ml-4">Memorize: Quanto mais massa, mais calor. Quanto maior a mudança de temperatura, mais calor.</p>
            
            <p className="mt-4"><strong>3. Água é especial:</strong></p>
            <p className="ml-4">• c_água = 4.186 J/(kg·°C) (muito alto!)</p>
            <p className="ml-4">• Água absorve/libera muito calor sem mudar muito de temperatura</p>
            
            <p className="mt-4"><strong>4. Lei de Stefan-Boltzmann:</strong> T⁴ é a chave</p>
            <p className="ml-4">Pequenos aumentos de temperatura = grandes aumentos de radiação</p>

            <p className="mt-4"><strong>5. Calor latente é importante:</strong></p>
            <p className="ml-4">• L_fusão (gelo) = 334.000 J/kg</p>
            <p className="ml-4">• L_vaporização (água) = 2.260.000 J/kg (muito maior!)</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você domina calor e transferência térmica, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calorimetria">
              <Button className="bg-blue-600 hover:bg-blue-700">Calorimetria</Button>
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
