import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicCalor() {
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
              <h1 className="text-xl font-bold text-slate-900">Calor e Energia Térmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🔥 O que é Calor?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Calor é a <strong>transferência de energia térmica</strong> entre dois corpos com temperaturas diferentes. Importante: <strong>calor e temperatura não são a mesma coisa!</strong> Temperatura mede a intensidade do movimento das moléculas, enquanto calor é a energia que flui de um corpo quente para um corpo frio.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-slate-700">
              <strong>Analogia:</strong> Se temperatura é como medir o "agito" das moléculas, calor é como medir a "quantidade de energia" que flui de um corpo para outro. Um copo de água quente tem alta temperatura, mas pouca energia (pouco calor). Uma piscina morna tem baixa temperatura, mas muita energia (muito calor).
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-3">Definição Formal</h4>
            <p className="text-slate-700 mb-4">
              Calor é a energia em trânsito que flui espontaneamente de um sistema com temperatura mais alta para um sistema com temperatura mais baixa. A unidade de calor no Sistema Internacional é o <strong>Joule (J)</strong>, embora historicamente também se use a <strong>caloria (cal)</strong>.
            </p>
            <div className="bg-white border border-slate-300 rounded p-3">
              <p className="text-slate-700"><strong>Relação entre unidades:</strong></p>
              <MathFormula formula="1 \\text{ cal} = 4,186 \\text{ J}" display={true} />
            </div>
          </div>
        </div>

        {/* Formas de Transferência */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📤 Formas de Transferência de Calor</h2>
          
          <div className="space-y-8">
            {/* Condução */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Condução Térmica</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através do material, de molécula para molécula, <strong>sem movimento do material</strong>. As moléculas mais energéticas transferem energia para as moléculas vizinhas menos energéticas.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Exemplo prático:</strong> Quando você coloca uma colher em uma xícara de chá quente, a colher aquece porque o calor se propaga pelo metal de uma ponta para a outra.</p>
              </div>

              <div className="bg-white border border-slate-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Lei de Fourier da Condução Térmica:</strong></p>
                <MathFormula formula="Q = k \\cdot A \\cdot \\frac{\\Delta T}{d} \\cdot t" display={true} />
                <p className="text-sm text-slate-600 mt-3">
                  Onde: <strong>Q</strong> = calor conduzido (J), <strong>k</strong> = condutividade térmica (W/(m·K)), <strong>A</strong> = área (m²), <strong>ΔT</strong> = diferença de temperatura (K), <strong>d</strong> = espessura (m), <strong>t</strong> = tempo (s)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded border border-red-200">
                  <p className="text-slate-700 font-bold mb-2">Bons Condutores:</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Cobre (k ≈ 385 W/(m·K))</li>
                    <li>• Alumínio (k ≈ 205 W/(m·K))</li>
                    <li>• Ferro (k ≈ 80 W/(m·K))</li>
                    <li>• Prata (k ≈ 430 W/(m·K))</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-slate-700 font-bold mb-2">Isolantes Térmicos:</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Ar (k ≈ 0,026 W/(m·K))</li>
                    <li>• Madeira (k ≈ 0,1 W/(m·K))</li>
                    <li>• Plástico (k ≈ 0,2 W/(m·K))</li>
                    <li>• Cortiça (k ≈ 0,04 W/(m·K))</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Convecção */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Convecção Térmica</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através do <strong>movimento do fluido</strong> (líquido ou gás). O fluido quente sobe (menos denso) e o fluido frio desce (mais denso), criando correntes de convecção que transportam calor.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Exemplo prático:</strong> Quando você aquece água em uma panela, a água quente sobe para o topo e a água fria desce para o fundo, criando um movimento circular que distribui o calor.</p>
              </div>

              <div className="bg-white border border-slate-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Lei de Newton do Resfriamento (Convecção):</strong></p>
                <MathFormula formula="Q = h \\cdot A \\cdot \\Delta T \\cdot t" display={true} />
                <p className="text-sm text-slate-600 mt-3">
                  Onde: <strong>h</strong> = coeficiente de convecção (W/(m²·K)), <strong>A</strong> = área (m²), <strong>ΔT</strong> = diferença de temperatura (K)
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <p className="text-slate-700 font-bold mb-2">Tipos de Convecção:</p>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li><strong>Natural:</strong> Ocorre naturalmente devido à diferença de densidade (exemplo: água aquecida)</li>
                  <li><strong>Forçada:</strong> Causada por agentes externos como ventiladores ou bombas (exemplo: ar-condicionado)</li>
                </ul>
              </div>
            </div>

            {/* Radiação */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Radiação Térmica</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através de <strong>ondas eletromagnéticas</strong>, <strong>sem necessidade de um meio</strong>. Todos os corpos emitem radiação térmica, e a quantidade depende de sua temperatura.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Exemplo prático:</strong> O calor do Sol chega até nós através do vácuo do espaço por radiação. Você também sente o calor de um fogo mesmo a uma distância, sem contato direto.</p>
              </div>

              <div className="bg-white border border-slate-300 rounded p-4 mb-4">
                <p className="text-slate-700 mb-3"><strong>Lei de Stefan-Boltzmann (Radiação):</strong></p>
                <MathFormula formula="P = \\sigma \\cdot A \\cdot \\varepsilon \\cdot T^4" display={true} />
                <p className="text-sm text-slate-600 mt-3">
                  Onde: <strong>P</strong> = potência radiada (W), <strong>σ</strong> = constante de Stefan-Boltzmann (5,67 × 10⁻⁸ W/(m²·K⁴)), <strong>A</strong> = área (m²), <strong>ε</strong> = emissividade (0 a 1), <strong>T</strong> = temperatura absoluta (K)
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <p className="text-slate-700 font-bold mb-2">Características da Radiação:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Não precisa de meio para se propagar (funciona no vácuo)</li>
                  <li>• Propaga-se à velocidade da luz</li>
                  <li>• Aumenta com a quarta potência da temperatura (T⁴)</li>
                  <li>• Corpos negros são melhores emissores e absorvedores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Calor Sensível */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Calor Sensível - Derivação Completa</h2>
          
          <p className="text-slate-700 mb-6">
            Calor sensível é o calor que <strong>causa variação de temperatura</strong> em um corpo, sem mudança de estado físico.
          </p>

          <div className="bg-white border border-slate-300 rounded p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-3">Fórmula Fundamental:</h4>
            <MathFormula formula="Q = m \\cdot c \\cdot \\Delta T" display={true} />
            <div className="mt-4 space-y-2 text-slate-700">
              <p><strong>Q:</strong> Calor sensível (em Joules - J)</p>
              <p><strong>m:</strong> Massa do corpo (em kg)</p>
              <p><strong>c:</strong> Calor específico (em J/(kg·K))</p>
              <p><strong>ΔT:</strong> Variação de temperatura (em K ou °C)</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-3">O que é Calor Específico?</h4>
            <p className="text-slate-700 mb-3">
              Calor específico é a quantidade de calor necessária para elevar a temperatura de <strong>1 kg</strong> de uma substância em <strong>1 K (ou 1°C)</strong>.
            </p>
            <div className="bg-white border border-blue-300 rounded p-3">
              <MathFormula formula="c = \\frac{Q}{m \\cdot \\Delta T}" display={true} />
            </div>
            <p className="text-sm text-slate-600 mt-3">Unidade: J/(kg·K) ou J/(kg·°C)</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-slate-900 mb-4">Calor Específico de Materiais Comuns:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="border border-slate-300 p-2 text-left">Substância</th>
                    <th className="border border-slate-300 p-2 text-center">c (J/(kg·K))</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Água</td>
                    <td className="border border-slate-300 p-2 text-center">4.186</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Gelo</td>
                    <td className="border border-slate-300 p-2 text-center">2.090</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Vapor de água</td>
                    <td className="border border-slate-300 p-2 text-center">2.010</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Ferro</td>
                    <td className="border border-slate-300 p-2 text-center">449</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Cobre</td>
                    <td className="border border-slate-300 p-2 text-center">385</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Alumínio</td>
                    <td className="border border-slate-300 p-2 text-center">897</td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="border border-slate-300 p-2">Ar</td>
                    <td className="border border-slate-300 p-2 text-center">1.005</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded p-6">
            <h4 className="font-bold text-slate-900 mb-3">Por que a água tem alto calor específico?</h4>
            <p className="text-slate-700">
              A água tem um dos maiores calores específicos entre as substâncias comuns (4.186 J/(kg·K)). Isso significa que é necessária muita energia para aumentar sua temperatura. Isso ocorre porque as moléculas de água formam ligações de hidrogênio fortes, que absorvem muita energia durante o aquecimento.
            </p>
          </div>
        </div>

        {/* Calor Latente */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">❄️ Calor Latente - Mudanças de Estado</h2>
          
          <p className="text-slate-700 mb-6">
            Calor latente é o calor necessário para <strong>mudar o estado físico</strong> de uma substância <strong>sem alterar sua temperatura</strong>.
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
              <p className="text-slate-700 mb-3">Para água: L_fusão ≈ 334.000 J/kg</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Calor Latente de Vaporização (Líquido → Gás)</h4>
              <p className="text-slate-700 mb-3">
                É o calor necessário para evaporar uma substância líquida, mantendo a temperatura constante.
              </p>
              <p className="text-slate-700 mb-3"><strong>Exemplo:</strong> Água a 100°C → Vapor a 100°C</p>
              <p className="text-slate-700 mb-3">Para água: L_vaporização ≈ 2.260.000 J/kg</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Calor Latente de Sublimação (Sólido → Gás)</h4>
              <p className="text-slate-700 mb-3">
                É o calor necessário para transformar uma substância sólida diretamente em gás.
              </p>
              <p className="text-slate-700 mb-3"><strong>Exemplo:</strong> Gelo seco (CO₂ sólido) → CO₂ gasoso</p>
            </div>
          </div>
        </div>

        {/* Exemplos Práticos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Práticos Resolvidos</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded border-l-4 border-orange-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 1: Calcular calor para aquecer água</p>
              <p className="text-slate-700 mb-3">Quanto de calor é necessário para aquecer 2 kg de água de 20°C para 80°C?</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2"><strong>Dados:</strong> m = 2 kg, c = 4.186 J/(kg·K), ΔT = 80 - 20 = 60 K</p>
                <MathFormula formula="Q = m \\cdot c \\cdot \\Delta T = 2 \\times 4.186 \\times 60 = 502.320 \\text{ J}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 502.320 J ou ≈ 502,3 kJ</p>
            </div>

            <div className="bg-red-50 p-6 rounded border-l-4 border-red-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 2: Calcular calor para derreter gelo</p>
              <p className="text-slate-700 mb-3">Quanto de calor é necessário para derreter 0,5 kg de gelo a 0°C?</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2"><strong>Dados:</strong> m = 0,5 kg, L_fusão = 334.000 J/kg</p>
                <MathFormula formula="Q = m \\cdot L = 0,5 \\times 334.000 = 167.000 \\text{ J}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 167.000 J ou 167 kJ</p>
            </div>

            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-500">
              <p className="text-slate-900 font-bold mb-3">Exemplo 3: Calcular calor total (sensível + latente)</p>
              <p className="text-slate-700 mb-3">Quanto de calor é necessário para transformar 1 kg de gelo a -10°C em vapor a 100°C?</p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="text-slate-700 mb-2"><strong>Passo 1:</strong> Aquecer gelo de -10°C a 0°C</p>
                <MathFormula formula="Q_1 = 1 \\times 2.090 \\times 10 = 20.900 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 2:</strong> Derreter gelo a 0°C</p>
                <MathFormula formula="Q_2 = 1 \\times 334.000 = 334.000 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 3:</strong> Aquecer água de 0°C a 100°C</p>
                <MathFormula formula="Q_3 = 1 \\times 4.186 \\times 100 = 418.600 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Passo 4:</strong> Vaporizar água a 100°C</p>
                <MathFormula formula="Q_4 = 1 \\times 2.260.000 = 2.260.000 \\text{ J}" display={true} />
                <p className="text-slate-700 mt-3 mb-2"><strong>Total:</strong></p>
                <MathFormula formula="Q_{total} = Q_1 + Q_2 + Q_3 + Q_4 = 20.900 + 334.000 + 418.600 + 2.260.000 = 3.033.500 \\text{ J}" display={true} />
              </div>
              <p className="text-slate-700"><strong>Resposta:</strong> 3.033.500 J ou ≈ 3.034 kJ</p>
            </div>
          </div>
        </div>

        {/* Erros Comuns */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir calor com temperatura:</strong> Calor é energia em trânsito; temperatura é uma medida do movimento molecular.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que calor latente não muda temperatura:</strong> Durante mudanças de estado, a temperatura permanece constante.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar Celsius em vez de Kelvin:</strong> Em fórmulas científicas, sempre use Kelvin para ΔT.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de converter unidades:</strong> Certifique-se de que massa está em kg e calor em J.</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende calor profundamente, estude:</p>
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
