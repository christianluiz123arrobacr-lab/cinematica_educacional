import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicTermodinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-indigo-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Termodinâmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: INTRODUÇÃO À TERMODINÂMICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔬 O que é Termodinâmica?</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Termodinâmica é a ciência que estuda as transformações de energia, especialmente a conversão entre energia térmica e outras formas de energia (como trabalho mecânico).</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                A termodinâmica nos ajuda a entender como os motores funcionam, por que os refrigeradores precisam de energia elétrica, e por que certos processos são possíveis enquanto outros não são.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Conceitos Fundamentais</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="font-bold text-blue-900">Sistema Termodinâmico:</p>
                  <p>É a porção do universo que estamos estudando. Pode ser um gás em um cilindro, uma xícara de café, ou um motor.</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="font-bold text-blue-900">Vizinhança:</p>
                  <p>É tudo que está fora do sistema. O sistema interage com a vizinhança através de troca de calor e trabalho.</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="font-bold text-blue-900">Universo Termodinâmico:</p>
                  <p>É o sistema + vizinhança. O universo é um sistema isolado (não troca energia com nada).</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Tipos de Sistemas</h4>
              <div className="space-y-2 text-slate-700">
                <p><strong>Sistema Isolado:</strong> Não troca energia nem matéria com a vizinhança (exemplo: universo)</p>
                <p><strong>Sistema Fechado:</strong> Troca energia mas não matéria (exemplo: gás em um cilindro fechado)</p>
                <p><strong>Sistema Aberto:</strong> Troca energia e matéria (exemplo: xícara de café aberta)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: PRIMEIRA LEI DA TERMODINÂMICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Primeira Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A Primeira Lei da Termodinâmica é uma aplicação do Princípio da Conservação de Energia aos sistemas termodinâmicos. Ela estabelece que a energia não pode ser criada nem destruída, apenas transformada.
          </p>

          <div className="space-y-8">
            {/* ENUNCIADO */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📌 Enunciado da Primeira Lei</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>"A variação da energia interna de um sistema é igual ao calor recebido menos o trabalho realizado pelo sistema."</strong>
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="\\Delta U = Q - W" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Onde:</strong></p>
                <p>• <strong>ΔU</strong> = Variação da energia interna (em Joules - J)</p>
                <p>• <strong>Q</strong> = Calor recebido pelo sistema (em Joules - J)</p>
                <p>• <strong>W</strong> = Trabalho realizado pelo sistema (em Joules - J)</p>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mt-4">
                  <p className="font-bold mb-3">Convenção de Sinais:</p>
                  <p className="mb-2"><strong>Calor (Q):</strong></p>
                  <p className="ml-4">• Q {'>'} 0: Sistema absorve calor (aquecimento)</p>
                  <p className="ml-4">• Q {'<'} 0: Sistema libera calor (resfriamento)</p>
                  <p className="mb-2 mt-2"><strong>Trabalho (W):</strong></p>
                  <p className="ml-4">• W {'>'} 0: Sistema realiza trabalho (expansão)</p>
                  <p className="ml-4">• W {'<'} 0: Trabalho é realizado sobre o sistema (compressão)</p>
                </div>
              </div>
            </div>

            {/* ENERGIA INTERNA */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🔋 Energia Interna</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Energia interna (U)</strong> é a soma de todas as energias cinéticas e potenciais das moléculas de um sistema. Para um gás ideal, a energia interna depende apenas da temperatura.
              </p>

              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Para um gás ideal:</p>
                <MathFormula formula="U = n \\cdot C_V \\cdot T" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>n</strong> = Número de mols (mol)</p>
                <p>• <strong>C_V</strong> = Capacidade térmica a volume constante (J/(mol·K))</p>
                <p>• <strong>T</strong> = Temperatura absoluta (K)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Importante:</strong> Para um gás ideal, a variação de energia interna depende APENAS da variação de temperatura, não do caminho seguido durante o processo!
                </p>
              </div>
            </div>

            {/* TRABALHO TERMODINÂMICO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">⚙️ Trabalho Termodinâmico</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Trabalho termodinâmico</strong> é o trabalho realizado por um gás quando ele se expande ou é comprimido.
              </p>

              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Trabalho em um processo:</p>
                <MathFormula formula="W = \\int P \\, dV" display={true} />
              </div>

              <p className="text-slate-700 mb-4">
                Para processos simples onde a pressão é constante:
              </p>

              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="W = P \\cdot \\Delta V" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>P</strong> = Pressão (em Pascais - Pa)</p>
                <p>• <strong>ΔV</strong> = Variação de volume (em m³)</p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded">
                <p className="font-bold mb-2">Exemplo Prático:</p>
                <p className="text-slate-700">Um gás em um cilindro com êmbolo se expande de 1 m³ para 3 m³ a uma pressão constante de 100 Pa. O trabalho realizado é:</p>
                <MathFormula formula="W = P \\cdot \\Delta V = 100 \\times (3 - 1) = 200 \\text{ J}" display={true} />
              </div>
            </div>

            {/* EXEMPLOS DE APLICAÇÃO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📝 Exemplos de Aplicação da 1ª Lei</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-3">Exemplo 1: Gás aquecido em cilindro fechado</p>
                  <p className="text-slate-700 mb-3">Um gás em um cilindro rígido (volume constante) recebe 500 J de calor. Qual é a variação de energia interna?</p>
                  
                  <div className="bg-slate-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Solução:</p>
                    <p className="text-slate-700 mb-2">Como o volume é constante: ΔV = 0, portanto W = 0</p>
                    <MathFormula formula="\\Delta U = Q - W = 500 - 0 = 500 \\text{ J}" display={true} />
                  </div>

                  <p className="text-slate-700 text-sm">
                    <strong>Resposta:</strong> A energia interna aumenta em 500 J. Todo o calor recebido vai para aumentar a energia interna (e portanto a temperatura).
                  </p>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-3">Exemplo 2: Gás em expansão isobárica</p>
                  <p className="text-slate-700 mb-3">Um gás recebe 1000 J de calor e se expande a pressão constante de 200 Pa, aumentando seu volume de 2 m³ para 5 m³. Qual é a variação de energia interna?</p>
                  
                  <div className="bg-slate-50 p-3 rounded mb-3">
                    <p className="font-bold text-slate-900 mb-2">Solução:</p>
                    <p className="text-slate-700 mb-2">Primeiro, calcular o trabalho:</p>
                    <MathFormula formula="W = P \\cdot \\Delta V = 200 \\times (5 - 2) = 600 \\text{ J}" display={true} />
                    <p className="text-slate-700 mt-3 mb-2">Agora aplicar a 1ª Lei:</p>
                    <MathFormula formula="\\Delta U = Q - W = 1000 - 600 = 400 \\text{ J}" display={true} />
                  </div>

                  <p className="text-slate-700 text-sm">
                    <strong>Resposta:</strong> A energia interna aumenta em 400 J. Dos 1000 J de calor recebido, 600 J foram usados para realizar trabalho de expansão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: SEGUNDA LEI DA TERMODINÂMICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Segunda Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A Segunda Lei da Termodinâmica estabelece a direção em que os processos naturais ocorrem. Ela introduz o conceito de <strong>entropia</strong>, que mede a desordem de um sistema.
          </p>

          <div className="space-y-8">
            {/* ENUNCIADO */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📌 Enunciado da Segunda Lei</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>"A entropia de um sistema isolado nunca diminui. Em um processo espontâneo, a entropia sempre aumenta."</strong>
              </p>

              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <MathFormula formula="\\Delta S_{universo} \\geq 0" display={true} />
              </div>

              <div className="space-y-4 text-slate-700">
                <p><strong>Onde:</strong></p>
                <p>• <strong>ΔS_universo</strong> = Variação de entropia do universo (em J/K)</p>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded mt-4">
                  <p className="font-bold mb-3">Interpretação:</p>
                  <p className="mb-2">• ΔS {'>'} 0: Processo é espontâneo (irreversível)</p>
                  <p className="mb-2">• ΔS = 0: Processo é reversível (equilíbrio)</p>
                  <p>• ΔS {'<'} 0: Processo é impossível (nunca ocorre naturalmente)</p>
                </div>
              </div>
            </div>

            {/* ENTROPIA */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📊 Entropia</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Entropia (S)</strong> é uma medida da desordem ou do número de estados microscópicos acessíveis a um sistema. Quanto maior a entropia, maior a desordem.
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Variação de entropia em um processo reversível:</p>
                <MathFormula formula="dS = \\frac{dQ_{rev}}{T}" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>dS</strong> = Variação infinitesimal de entropia (J/K)</p>
                <p>• <strong>dQ_rev</strong> = Calor reversível (J)</p>
                <p>• <strong>T</strong> = Temperatura absoluta (K)</p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded">
                <p className="font-bold mb-3">Exemplos de Processos e Entropia:</p>
                <p className="mb-2"><strong>Gelo derretendo:</strong> ΔS {'>'} 0 (sólido → líquido, mais desordem)</p>
                <p className="mb-2"><strong>Água evaporando:</strong> ΔS {'>'} 0 (líquido → gás, muito mais desordem)</p>
                <p className="mb-2"><strong>Gases se misturando:</strong> ΔS {'>'} 0 (separados → misturados)</p>
                <p><strong>Café esfriando:</strong> ΔS_universo {'>'} 0 (energia se dispersa)</p>
              </div>
            </div>

            {/* IMPLICAÇÕES */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Implicações da Segunda Lei</h3>
              
              <div className="space-y-3 text-slate-700">
                <p><strong>1. Irreversibilidade:</strong> Todos os processos naturais são irreversíveis. O calor flui do quente para o frio, nunca o contrário.</p>
                <p><strong>2. Máquinas Térmicas:</strong> Nenhuma máquina térmica pode converter 100% do calor em trabalho. Sempre há desperdício.</p>
                <p><strong>3. Morte Térmica:</strong> O universo tende a um estado de máxima entropia (morte térmica), onde toda a energia é dispersa e nenhum trabalho pode ser realizado.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4: PROCESSOS TERMODINÂMICOS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Processos Termodinâmicos</h2>
          
          <p className="text-slate-700 mb-6">
            Um processo termodinâmico é uma transformação de um estado inicial para um estado final. Existem vários tipos de processos, cada um com características únicas.
          </p>

          <div className="space-y-8">
            {/* ISOBÁRICO */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Processo Isobárico (Pressão Constante)</h3>
              
              <p className="text-slate-700 mb-4">
                Em um processo isobárico, a pressão permanece constante enquanto o volume e a temperatura variam.
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula="P = \\text{constante}" display={true} />
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">Características:</p>
                <p className="text-slate-700 mb-2">• Lei dos gases: V/T = constante (Lei de Charles)</p>
                <p className="text-slate-700 mb-2">• Trabalho: W = P·ΔV</p>
                <p className="text-slate-700">• Exemplo: Gás em um cilindro com êmbolo móvel aquecido</p>
              </div>
            </div>

            {/* ISOCÓRICO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Processo Isocórico (Volume Constante)</h3>
              
              <p className="text-slate-700 mb-4">
                Em um processo isocórico, o volume permanece constante enquanto a pressão e a temperatura variam.
              </p>

              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="V = \\text{constante}" display={true} />
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">Características:</p>
                <p className="text-slate-700 mb-2">• Lei dos gases: P/T = constante (Lei de Gay-Lussac)</p>
                <p className="text-slate-700 mb-2">• Trabalho: W = 0 (volume não muda)</p>
                <p className="text-slate-700 mb-2">• 1ª Lei: ΔU = Q (todo calor vai para energia interna)</p>
                <p className="text-slate-700">• Exemplo: Gás em um cilindro rígido aquecido</p>
              </div>
            </div>

            {/* ISOTÉRMICO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Processo Isotérmico (Temperatura Constante)</h3>
              
              <p className="text-slate-700 mb-4">
                Em um processo isotérmico, a temperatura permanece constante enquanto a pressão e o volume variam.
              </p>

              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <MathFormula formula="T = \\text{constante}" display={true} />
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">Características:</p>
                <p className="text-slate-700 mb-2">• Lei dos gases: P·V = constante (Lei de Boyle)</p>
                <p className="text-slate-700 mb-2">• Energia interna: ΔU = 0 (temperatura não muda)</p>
                <p className="text-slate-700 mb-2">• 1ª Lei: Q = W (calor é convertido em trabalho)</p>
                <p className="text-slate-700">• Exemplo: Compressão lenta de um gás em contato com um banho térmico</p>
              </div>
            </div>

            {/* ADIABÁTICO */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4️⃣ Processo Adiabático (Sem Troca de Calor)</h3>
              
              <p className="text-slate-700 mb-4">
                Em um processo adiabático, não há troca de calor entre o sistema e a vizinhança (Q = 0).
              </p>

              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="Q = 0" display={true} />
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">Características:</p>
                <p className="text-slate-700 mb-2">• 1ª Lei: ΔU = -W (trabalho muda energia interna)</p>
                <p className="text-slate-700 mb-2">• Se W {'>'} 0 (expansão): ΔU {'<'} 0 (temperatura diminui)</p>
                <p className="text-slate-700 mb-2">• Se W {'<'} 0 (compressão): ΔU {'>'} 0 (temperatura aumenta)</p>
                <p className="text-slate-700">• Exemplo: Compressão rápida de um gás em um cilindro isolado termicamente</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 5: MÁQUINAS TÉRMICAS E CICLO DE CARNOT ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔧 Máquinas Térmicas e Ciclo de Carnot</h2>
          
          <div className="space-y-8">
            {/* MÁQUINAS TÉRMICAS */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">⚙️ Máquinas Térmicas</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Uma máquina térmica</strong> é um dispositivo que converte calor em trabalho útil. Funciona em ciclos, retornando ao estado inicial após cada ciclo.
              </p>

              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Eficiência de uma máquina térmica:</p>
                <MathFormula formula="\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H} = 1 - \\frac{Q_C}{Q_H}" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>η</strong> = Eficiência (0 ≤ η ≤ 1, ou 0% a 100%)</p>
                <p>• <strong>W</strong> = Trabalho realizado pela máquina (J)</p>
                <p>• <strong>Q_H</strong> = Calor absorvido da fonte quente (J)</p>
                <p>• <strong>Q_C</strong> = Calor liberado para a fonte fria (J)</p>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded">
                <p className="font-bold mb-2">Importante:</p>
                <p className="text-slate-700">A eficiência de qualquer máquina térmica é sempre menor que 100%. Sempre há perda de calor para o ambiente!</p>
              </div>
            </div>

            {/* CICLO DE CARNOT */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🔄 Ciclo de Carnot</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>O Ciclo de Carnot</strong> é um ciclo termodinâmico teórico que representa a máquina térmica mais eficiente possível. Nenhuma máquina real pode ser mais eficiente que uma máquina de Carnot operando entre as mesmas temperaturas.
              </p>

              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Eficiência do Ciclo de Carnot:</p>
                <MathFormula formula="\\eta_{Carnot} = 1 - \\frac{T_C}{T_H}" display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>T_C</strong> = Temperatura da fonte fria (em Kelvin - K)</p>
                <p>• <strong>T_H</strong> = Temperatura da fonte quente (em Kelvin - K)</p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
                <p className="font-bold mb-3">Etapas do Ciclo de Carnot:</p>
                <p className="text-slate-700 mb-2"><strong>1. Expansão Isotérmica:</strong> Gás se expande em contato com a fonte quente, absorvendo calor Q_H</p>
                <p className="text-slate-700 mb-2"><strong>2. Expansão Adiabática:</strong> Gás se expande sem trocar calor, realizando trabalho</p>
                <p className="text-slate-700 mb-2"><strong>3. Compressão Isotérmica:</strong> Gás é comprimido em contato com a fonte fria, liberando calor Q_C</p>
                <p className="text-slate-700"><strong>4. Compressão Adiabática:</strong> Gás é comprimido sem trocar calor, retornando ao estado inicial</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Exemplo:</strong> Uma máquina de Carnot operando entre 300 K (27°C) e 600 K (327°C) tem eficiência:
                </p>
                <MathFormula formula="\\eta = 1 - \\frac{300}{600} = 1 - 0,5 = 0,5 \\text{ ou } 50\\%" display={true} />
                <p className="text-slate-700 text-sm mt-2">
                  Isso significa que no máximo 50% do calor absorvido pode ser convertido em trabalho útil.
                </p>
              </div>
            </div>

            {/* REFRIGERADORES */}
            <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">❄️ Refrigeradores</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Um refrigerador</strong> é uma máquina térmica invertida. Ele usa trabalho para transferir calor de uma fonte fria para uma fonte quente (contra o fluxo natural).
              </p>

              <div className="bg-white border border-cyan-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-2">Coeficiente de Desempenho (COP):</p>
                <MathFormula formula="COP = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C}" display={true} />
              </div>

              <div className="space-y-3 text-slate-700">
                <p><strong>Onde:</strong></p>
                <p>• <strong>COP</strong> = Coeficiente de Desempenho (adimensional)</p>
                <p>• <strong>Q_C</strong> = Calor removido da fonte fria (J)</p>
                <p>• <strong>W</strong> = Trabalho necessário (J)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 6: ERROS COMUNS ===== */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns em Termodinâmica</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir Q e W:</strong> Calor é energia em trânsito, trabalho é energia transferida mecanicamente.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de usar Kelvin:</strong> Em fórmulas termodinâmicas, SEMPRE use temperatura em Kelvin!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Achar que máquinas podem ter η = 100%:</strong> Impossível! A 2ª Lei proíbe isso.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Ignorar sinais:</strong> Q {'>'} 0 (absorção), Q {'<'} 0 (liberação). W {'>'} 0 (expansão), W {'<'} 0 (compressão).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir processos:</strong> Isobárico (P cte), Isocórico (V cte), Isotérmico (T cte), Adiabático (Q = 0).</span>
            </li>
          </ul>
        </div>

        {/* ===== SEÇÃO 7: DICAS PRÁTICAS ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas para Memorizar</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>1. Primeira Lei (ΔU = Q - W):</strong></p>
            <p className="ml-4">Memorize: Energia interna = Calor recebido - Trabalho realizado</p>
            
            <p className="mt-4"><strong>2. Segunda Lei (ΔS ≥ 0):</strong></p>
            <p className="ml-4">Memorize: Entropia sempre aumenta em processos naturais (irreversíveis)</p>
            
            <p className="mt-4"><strong>4 Processos Principais:</strong></p>
            <p className="ml-4">• <strong>Isobárico:</strong> P cte, W = P·ΔV</p>
            <p className="ml-4">• <strong>Isocórico:</strong> V cte, W = 0, ΔU = Q</p>
            <p className="ml-4">• <strong>Isotérmico:</strong> T cte, ΔU = 0, Q = W</p>
            <p className="ml-4">• <strong>Adiabático:</strong> Q = 0, ΔU = -W</p>
            
            <p className="mt-4"><strong>5. Eficiência de Carnot:</strong></p>
            <p className="ml-4">η = 1 - T_C/T_H (sempre use Kelvin!)</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você domina termodinâmica, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/dilatacao">
              <Button className="bg-blue-600 hover:bg-blue-700">Dilatação Térmica</Button>
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
