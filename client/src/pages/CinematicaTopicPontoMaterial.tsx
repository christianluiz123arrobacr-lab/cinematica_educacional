import { Link } from "wouter";
import { ArrowLeft, Box, Lightbulb, AlertTriangle, CheckCircle2, Info, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function CinematicaTopicPontoMaterial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Ponto Material vs. Corpo Extenso</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📦 Ponto Material vs. Corpo Extenso</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Por que essa distinção importa?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Antes de descrever qualquer movimento, precisamos decidir <strong>como modelar o corpo</strong> que estamos estudando. Essa escolha determina quais equações podemos usar e como interpretar os resultados. Usar o modelo errado leva a erros conceituais graves — e o ITA e o IME adoram explorar exatamente essa armadilha.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A questão fundamental é simples: as <strong>dimensões do corpo</strong> são relevantes para o fenômeno que estamos analisando? Se não forem, podemos usar o modelo de <strong>ponto material</strong>. Se forem, precisamos tratar o corpo como <strong>corpo extenso</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Regra de Ouro (Tópicos de Física)
              </h4>
              <p className="text-slate-700 leading-relaxed">
                A permissão para usar o modelo de ponto material <strong>não é determinada pelas dimensões absolutas do corpo</strong>, mas pelo fato de essas dimensões serem ou não <em>importantes na situação em estudo</em>. Um avião de 70 m pode ser ponto material quando voa de SP ao RJ (430 km), mas é corpo extenso quando pousa numa pista de 3 km.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== DEFINIÇÕES PRECISAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📌 Definições Precisas</h2>

          {/* Grid 2 colunas */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Ponto Material */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-blue-200">Ponto Material</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Modelo no qual um corpo é representado por um <strong className="text-white">único ponto geométrico</strong>, no qual se supõe concentrada toda a sua massa. Também chamado de <em>partícula</em>.
              </p>
              <div className="bg-blue-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-blue-200 font-semibold mb-2">Critério matemático:</p>
                <MathFormula formula="\frac{L}{D} \ll 1 \quad \left(\text{tipicamente} < 0{,}01\right)" />
              </div>
              <p className="text-xs text-slate-400">onde L = dimensão do corpo e D = distância envolvida no problema.</p>
              <div className="mt-4 space-y-1">
                <p className="text-xs text-blue-200 font-semibold">Exemplos:</p>
                <p className="text-xs text-slate-300">• Avião SP→RJ: 70 m ÷ 430.000 m ≈ 0,00016 ✓</p>
                <p className="text-xs text-slate-300">• Terra orbitando o Sol: 12.700 km ÷ 150.000.000 km ≈ 0,000085 ✓</p>
                <p className="text-xs text-slate-300">• Peixe em rio de 1 km: tamanho ≪ 1 km ✓</p>
              </div>
            </div>

            {/* Corpo Extenso */}
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center">
                  <Box className="w-5 h-5 text-orange-300" />
                </div>
                <h3 className="text-lg font-bold text-orange-200">Corpo Extenso</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Modelo no qual as <strong className="text-white">dimensões do corpo não podem ser desprezadas</strong>. Cada ponto do corpo pode ter posição, velocidade e aceleração <em>diferentes</em>.
              </p>
              <div className="bg-orange-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-orange-200 font-semibold mb-2">Critério matemático:</p>
                <MathFormula formula="\frac{L}{D} \sim 1 \quad \text{ou} \quad L \text{ influencia o fenômeno}" />
              </div>
              <p className="text-xs text-slate-400">As dimensões do corpo afetam diretamente o resultado do problema.</p>
              <div className="mt-4 space-y-1">
                <p className="text-xs text-orange-200 font-semibold">Exemplos:</p>
                <p className="text-xs text-slate-300">• Trem de 200 m passando por túnel de 800 m ✗</p>
                <p className="text-xs text-slate-300">• Roda girando (cada ponto tem v = ωr diferente) ✗</p>
                <p className="text-xs text-slate-300">• Porta sendo aberta (torque depende da distância) ✗</p>
              </div>
            </div>
          </div>

          {/* Tabela comparativa */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Característica</th>
                  <th className="p-3 text-center text-blue-300">Ponto Material</th>
                  <th className="p-3 text-center text-orange-300 rounded-tr-lg">Corpo Extenso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Dimensões</td>
                  <td className="p-3 text-center text-slate-600">Desprezíveis</td>
                  <td className="p-3 text-center text-slate-600">Relevantes</td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Representação</td>
                  <td className="p-3 text-center text-slate-600">Um único ponto</td>
                  <td className="p-3 text-center text-slate-600">Conjunto de pontos</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Velocidade</td>
                  <td className="p-3 text-center text-slate-600">Única para o corpo</td>
                  <td className="p-3 text-center text-slate-600">Diferente em cada ponto</td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-700">Rotação</td>
                  <td className="p-3 text-center text-slate-600">Ignorada</td>
                  <td className="p-3 text-center text-slate-600">Considerada</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold text-slate-700 rounded-bl-lg">Equações</td>
                  <td className="p-3 text-center text-slate-600">Cinemática escalar/vetorial</td>
                  <td className="p-3 text-center text-slate-600 rounded-br-lg">Cinemática de rotação</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== CRITÉRIO DE DECISÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Critério de Decisão — Como Decidir?</h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Fluxograma de Decisão
            </h3>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                <span className="text-green-600 font-bold text-lg">1.</span>
                <p><strong>Identifique as dimensões do corpo</strong> (comprimento, largura, raio, etc.) e as distâncias envolvidas no problema.</p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                <span className="text-green-600 font-bold text-lg">2.</span>
                <p><strong>Calcule a razão L/D.</strong> Se for muito menor que 1 (tipicamente menor que 1%), as dimensões são desprezíveis → ponto material.</p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                <span className="text-green-600 font-bold text-lg">3.</span>
                <p><strong>Verifique se a rotação importa.</strong> Se o problema envolve torque, velocidade angular ou diferentes pontos do corpo com comportamentos distintos → corpo extenso.</p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                <span className="text-green-600 font-bold text-lg">4.</span>
                <p><strong>Leia o enunciado com atenção.</strong> Palavras como "o trem leva X segundos para passar completamente" indicam que o comprimento do trem importa → corpo extenso.</p>
              </div>
            </div>
          </div>

          {/* Exemplos lado a lado */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Quando usar Ponto Material
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Carro percorrendo uma rodovia de centenas de km</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Planeta orbitando uma estrela</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Projétil em lançamento oblíquo (quando não há rotação)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Atleta correndo 100 m rasos</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                Quando usar Corpo Extenso
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Trem passando por um túnel (comprimento importa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Roda ou polia girando</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Porta sendo aberta (torque depende da posição)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Satélite sendo lançado (rotação da Terra importa)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===================== ALERTA: TREM NO TÚNEL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ O Clássico do Trem no Túnel — Erro Fatal em Provas</h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Este é o erro mais comum em questões de Cinemática no ITA e IME
            </h3>
            <p className="text-slate-700">
              Quando um trem de comprimento <strong>L</strong> passa por um túnel de comprimento <strong>D</strong>, o trem <strong>não pode ser tratado como ponto material</strong>. Para o trem passar <em>completamente</em>, a locomotiva precisa percorrer uma distância de <strong>L + D</strong>, não apenas D.
            </p>
          </div>

          {/* Dedução com LaTeX */}
          <div className="bg-slate-900 rounded-xl p-6 mb-6">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Dedução Matemática Completa
            </h4>
            <div className="space-y-4 text-slate-300 text-sm">
              <div>
                <p className="text-slate-400 mb-2">Dados do problema:</p>
                <MathFormula formula="L = \text{comprimento do trem}, \quad D = \text{comprimento do túnel}, \quad v = \text{velocidade do trem}" />
              </div>
              <div>
                <p className="text-slate-400 mb-2">O trem começa a entrar quando a locomotiva está na entrada do túnel. O trem termina de sair quando a última vagão ultrapassa a saída. A distância percorrida pela locomotiva é:</p>
                <MathFormula formula="\Delta s = L + D" />
              </div>
              <div>
                <p className="text-slate-400 mb-2">Portanto, o tempo para o trem passar completamente pelo túnel é:</p>
                <MathFormula formula="t = \frac{L + D}{v}" />
              </div>
              <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">⚠️ Erro comum:</p>
                <p className="text-slate-300">Usar <span className="text-red-400 font-mono">t = D/v</span> (ignora o comprimento do trem) ou <span className="text-red-400 font-mono">t = L/v</span> (ignora o comprimento do túnel). Ambos estão errados!</p>
              </div>
            </div>
          </div>

          {/* Exemplo numérico */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 mb-4">Exemplo Numérico — A Diferença que Cai no ITA</h4>
            <p className="text-slate-700 mb-4">Um trem de comprimento <strong>200 m</strong> circula a <strong>72 km/h</strong> e passa por um túnel de <strong>800 m</strong>. Quanto tempo o trem leva para passar completamente pelo túnel?</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2">✓ Resolução Correta:</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>Convertendo: <span className="font-mono">v = 72 km/h = 20 m/s</span></p>
                  <MathFormula formula="\Delta s = L + D = 200 + 800 = 1000 \text{ m}" />
                  <MathFormula formula="t = \frac{\Delta s}{v} = \frac{1000}{20} = 50 \text{ s}" />
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold mb-2">✗ Resolução Errada (erro comum):</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>Tratando o trem como ponto material:</p>
                  <MathFormula formula="\Delta s = D = 800 \text{ m \quad (ERRADO!)}" />
                  <MathFormula formula="t = \frac{800}{20} = 40 \text{ s \quad (ERRADO!)}" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXEMPLOS RESOLVIDOS ITA/IME ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🏆 Exemplos Resolvidos — Nível ITA/IME</h2>

          {/* Exemplo 1 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Exemplo 1</span>
              <span className="text-sm text-slate-500">Nível: Médio — FUVEST</span>
            </div>
            <p className="text-slate-700 mb-4 font-medium">
              Um trem de passageiros de 300 m de comprimento viaja a 108 km/h. Ele encontra um trem de carga de 500 m vindo em sentido contrário a 72 km/h. Quanto tempo os dois trens levam para se cruzar completamente?
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-slate-700 font-semibold mb-3">Resolução:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <p>Como os trens se movem em sentidos opostos, a velocidade relativa é a soma das velocidades:</p>
                <MathFormula formula="v_{rel} = v_1 + v_2 = 108 + 72 = 180 \text{ km/h} = 50 \text{ m/s}" />
                <p>Para que os dois trens se cruzem completamente, a distância percorrida (em relação ao referencial do encontro) deve ser igual à soma dos comprimentos:</p>
                <MathFormula formula="\Delta s = L_1 + L_2 = 300 + 500 = 800 \text{ m}" />
                <p>Portanto:</p>
                <MathFormula formula="t = \frac{\Delta s}{v_{rel}} = \frac{800}{50} = 16 \text{ s}" />
                <div className="bg-green-100 rounded p-3 mt-2">
                  <p className="text-green-800 font-semibold">Resposta: Os trens levam <strong>16 segundos</strong> para se cruzar completamente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo 2 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Exemplo 2</span>
              <span className="text-sm text-slate-500">Nível: Difícil — ITA</span>
            </div>
            <p className="text-slate-700 mb-4 font-medium">
              Um trem de comprimento L percorre um túnel de comprimento D. O tempo desde que a locomotiva entra no túnel até que a última vagão saia é T₁. O tempo em que o trem está completamente dentro do túnel é T₂. Sabendo que a velocidade do trem é constante e igual a v, determine L e D em função de T₁, T₂ e v.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-slate-700 font-semibold mb-3">Resolução:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Analisando T₁:</strong> É o tempo para o trem passar completamente. A locomotiva percorre L + D:</p>
                <MathFormula formula="T_1 = \frac{L + D}{v} \implies L + D = v \cdot T_1 \quad (I)" />
                <p><strong>Analisando T₂:</strong> É o tempo em que o trem está completamente dentro. Isso ocorre desde que a última vagão entra até que a locomotiva sai. A locomotiva percorre D − L:</p>
                <MathFormula formula="T_2 = \frac{D - L}{v} \implies D - L = v \cdot T_2 \quad (II)" />
                <p><strong>Somando (I) e (II):</strong></p>
                <MathFormula formula="2D = v(T_1 + T_2) \implies \boxed{D = \frac{v(T_1 + T_2)}{2}}" />
                <p><strong>Subtraindo (II) de (I):</strong></p>
                <MathFormula formula="2L = v(T_1 - T_2) \implies \boxed{L = \frac{v(T_1 - T_2)}{2}}" />
                <div className="bg-green-100 rounded p-3 mt-2">
                  <p className="text-green-800 font-semibold">Nota: Para que T₂ exista (trem completamente dentro), é necessário que D &gt; L.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo 3 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Exemplo 3</span>
              <span className="text-sm text-slate-500">Nível: Conceitual — IME</span>
            </div>
            <p className="text-slate-700 mb-4 font-medium">
              A Terra, ao orbitar o Sol, pode ser tratada como ponto material para o cálculo da força gravitacional. No entanto, para explicar o fenômeno das estações do ano, ela deve ser tratada como corpo extenso. Justifique.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-slate-700 font-semibold mb-3">Resolução:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Para a força gravitacional:</strong> A Lei de Newton considera a distância entre os centros de massa. O raio da Terra (≈ 6.371 km) é desprezível em relação à distância Terra-Sol (≈ 150.000.000 km):</p>
                <MathFormula formula="\frac{R_{Terra}}{d_{Terra-Sol}} = \frac{6.371}{150.000.000} \approx 4{,}2 \times 10^{-5} \ll 1" />
                <p>Portanto, a Terra pode ser tratada como ponto material → a força gravitacional é calculada como se toda a massa estivesse concentrada no centro.</p>
                <p><strong>Para as estações do ano:</strong> As estações ocorrem porque o eixo de rotação da Terra é inclinado em relação ao plano orbital (≈ 23,5°). Isso significa que diferentes regiões da Terra recebem a luz solar com ângulos diferentes ao longo do ano. Para explicar esse fenômeno, é essencial considerar a <em>orientação e as dimensões</em> da Terra → corpo extenso.</p>
                <div className="bg-green-100 rounded p-3 mt-2">
                  <p className="text-green-800 font-semibold">Conclusão: O mesmo objeto (Terra) pode ser ponto material ou corpo extenso dependendo do fenômeno analisado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== APLICAÇÕES PRÁTICAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌍 Aplicações Práticas</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5 border-l-4 border-blue-500">
              <h4 className="font-bold text-slate-900 mb-2">🚀 Engenharia Espacial</h4>
              <p className="text-sm text-slate-600">Foguetes e satélites são tratados como pontos materiais para calcular órbitas (distâncias de milhares de km), mas como corpos extensos para calcular o torque dos propulsores de atitude.</p>
            </Card>
            <Card className="p-5 border-l-4 border-orange-500">
              <h4 className="font-bold text-slate-900 mb-2">🚂 Engenharia Ferroviária</h4>
              <p className="text-sm text-slate-600">O comprimento dos trens é fundamental para o projeto de túneis, estações e sistemas de sinalização. Um trem de 500 m não pode ser ignorado em uma estação de 300 m.</p>
            </Card>
            <Card className="p-5 border-l-4 border-green-500">
              <h4 className="font-bold text-slate-900 mb-2">⚙️ Mecânica de Máquinas</h4>
              <p className="text-sm text-slate-600">Engrenagens, polias e rodas são sempre corpos extensos: cada ponto tem velocidade tangencial diferente (v = ωr), o que é fundamental para o projeto de transmissões mecânicas.</p>
            </Card>
            <Card className="p-5 border-l-4 border-purple-500">
              <h4 className="font-bold text-slate-900 mb-2">🌊 Física Nuclear</h4>
              <p className="text-sm text-slate-600">Prótons e nêutrons são tratados como pontos materiais na maioria dos cálculos de colisões. Porém, para entender a estrutura interna dos núcleons, eles são corpos extensos compostos de quarks.</p>
            </Card>
          </div>
        </div>

        {/* ===================== RESUMO FINAL ===================== */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            Resumo — O que Levar para a Prova
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-blue-200 mb-2">Ponto Material</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Dimensões desprezíveis: L/D ≪ 1</li>
                <li>• Toda a massa concentrada num ponto</li>
                <li>• Uma única velocidade e aceleração</li>
                <li>• Usa as equações da Cinemática escalar</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-orange-200 mb-2">Corpo Extenso</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Dimensões relevantes: L/D ~ 1</li>
                <li>• Cada ponto tem posição diferente</li>
                <li>• Velocidade varia de ponto a ponto</li>
                <li>• Trem no túnel: distância = L + D</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-4">
            <p className="text-yellow-200 font-semibold text-sm">
              🎯 Dica de Prova: Sempre que o enunciado mencionar "passar completamente", "cruzar" ou "tempo dentro do túnel", o corpo é extenso e a distância percorrida é a soma dos comprimentos envolvidos.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
