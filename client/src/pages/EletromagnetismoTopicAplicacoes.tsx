import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicAplicacoes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletromagnetismo">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletromagnetismo</h1>
              <p className="text-xs text-slate-600">Aplicações Práticas</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔧 Aplicações Práticas do Eletromagnetismo</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Importância das Aplicações</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O eletromagnetismo não é apenas uma teoria abstrata - é a base de praticamente toda a tecnologia moderna. Desde a geração de eletricidade até a transmissão de dados, os princípios eletromagnéticos são aplicados continuamente em dispositivos que usamos diariamente.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Neste tópico, exploraremos as aplicações mais importantes: transformadores e motores elétricos. Compreender como esses dispositivos funcionam é essencial para qualquer engenheiro.
              </p>
            </div>
          </div>
        </div>

        {/* TRANSFORMADORES - APROFUNDADO COM DIDÁTICA SUPERIOR */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Transformadores - Aprofundamento Didático Completo</h2>
          
          <div className="space-y-8">
            {/* O que é um Transformador? */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">O que é um Transformador?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Um <strong>transformador</strong> é um dispositivo que muda a tensão e corrente de uma corrente alternada (AC) sem alterar a potência total. Ele funciona como um "conversor" de energia elétrica: se você aumenta a tensão, a corrente diminui proporcionalmente (e vice-versa).
              </p>
              <div className="bg-white p-4 rounded border border-blue-200 mt-4">
                <p className="text-slate-700 text-sm mb-2"><strong>Analogia com água:</strong> Imagine um cano com água. Um transformador é como um dispositivo que pode fazer a água fluir mais rápido com menos volume, ou mais lento com mais volume - a quantidade total de água (potência) permanece a mesma.</p>
              </div>
            </div>

            {/* Contexto Histórico */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">📚 Contexto Histórico (1886)</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                O transformador foi inventado por Nikola Tesla e George Westinghouse em 1886. Isto foi revolucionário porque antes dos transformadores, a eletricidade tinha que ser gerada perto de onde era consumida. Com transformadores, a energia poderia ser transmitida em alta tensão (reduzindo perdas) e depois reduzida para tensões seguras. Isto permitiu cidades inteiras serem alimentadas por usinas distantes - mudou o mundo!
              </p>
            </div>

            {/* Componentes Principais */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Componentes Principais de um Transformador</h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-slate-900 mb-2">1️⃣ Bobina Primária (Entrada)</h4>
                  <p className="text-slate-700 text-sm mb-2">Recebe a tensão AC de entrada. Quando corrente passa por ela, cria um campo magnético variável.</p>
                  <p className="text-slate-700 text-sm"><strong>Símbolo:</strong> N_p (número de espiras), V_p (tensão primária), I_p (corrente primária)</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-bold text-slate-900 mb-2">2️⃣ Núcleo de Ferro</h4>
                  <p className="text-slate-700 text-sm mb-2">Material ferromagnético que concentra e amplifica o campo magnético. Permite que o campo da bobina primária chegue à bobina secundária com eficiência.</p>
                  <p className="text-slate-700 text-sm"><strong>Função:</strong> Aumentar o acoplamento magnético entre as bobinas (tipicamente 95-98%)</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                  <h4 className="font-bold text-slate-900 mb-2">3️⃣ Bobina Secundária (Saída)</h4>
                  <p className="text-slate-700 text-sm mb-2">Recebe a indução magnética da bobina primária através do núcleo. Isto induz uma tensão na bobina secundária.</p>
                  <p className="text-slate-700 text-sm"><strong>Símbolo:</strong> N_s (número de espiras), V_s (tensão secundária), I_s (corrente secundária)</p>
                </div>
              </div>
            </div>

            {/* Lei de Faraday em Transformadores */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Como Funciona: Lei de Faraday em Transformadores</h3>
              
              <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl p-8 shadow-lg mb-6">
                <p className="text-center text-sm mb-3 text-red-200">Lei de Faraday em Transformadores:</p>
                <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p}" display={true} className="text-2xl" />
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-4">Explicação Termo-a-Termo:</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold text-slate-900 mb-1">V_s (Tensão Secundária)</p>
                    <p className="text-slate-700 text-sm">A tensão que sai do transformador, medida em volts (V)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold text-slate-900 mb-1">V_p (Tensão Primária)</p>
                    <p className="text-slate-700 text-sm">A tensão que entra no transformador, medida em volts (V)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold text-slate-900 mb-1">N_s (Espiras Secundárias)</p>
                    <p className="text-slate-700 text-sm">Número de voltas de fio na bobina secundária</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-semibold text-slate-900 mb-1">N_p (Espiras Primárias)</p>
                    <p className="text-slate-700 text-sm">Número de voltas de fio na bobina primária</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-green-900 mb-3">💡 Interpretação Física:</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  A razão entre as tensões é EXATAMENTE IGUAL à razão entre o número de espiras. Se a bobina secundária tem 10 vezes mais espiras que a primária, a tensão secundária será 10 vezes maior. Isto é uma consequência direta da Lei de Faraday: mais espiras = mais indução.
                </p>
              </div>
            </div>

            {/* Conservação de Potência */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Conservação de Potência (Transformador Ideal)</h3>
              
              <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-xl p-8 shadow-lg mb-6">
                <p className="text-center text-sm mb-3 text-green-200">Potência Conservada:</p>
                <MathFormula formula="P_p = P_s" display={true} className="text-2xl mb-4" />
                <MathFormula formula="V_p I_p = V_s I_s" display={true} className="text-2xl" />
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-4">O que isto significa?</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>Regra de Ouro:</strong> Se você aumenta a tensão, a corrente diminui. Se você diminui a tensão, a corrente aumenta. A potência total permanece constante.
                  </p>
                  <div className="bg-white p-3 rounded border border-green-200 mt-3">
                    <p className="font-semibold mb-2">Exemplo Prático:</p>
                    <p>• Entrada: 100V × 10A = 1000W</p>
                    <p>• Saída: 1000V × 1A = 1000W (mesma potência!)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tipos de Transformadores */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Tipos de Transformadores</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">📈 Transformador Elevador (Step-Up)</h4>
                  <p className="text-slate-700 text-sm mb-3">N_s &gt; N_p (mais espiras na secundária)</p>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="text-sm text-slate-700"><strong>Resultado:</strong> Tensão aumenta, corrente diminui</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Exemplo:</strong> 100V → 1000V (tensão 10× maior, corrente 10× menor)</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Uso:</strong> Transmissão de energia de longa distância</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">📉 Transformador Abaixador (Step-Down)</h4>
                  <p className="text-slate-700 text-sm mb-3">N_s &lt; N_p (menos espiras na secundária)</p>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="text-sm text-slate-700"><strong>Resultado:</strong> Tensão diminui, corrente aumenta</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Exemplo:</strong> 220V → 12V (tensão 18× menor, corrente 18× maior)</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Uso:</strong> Fontes de alimentação, carregadores de celular</p>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">⚖️ Transformador Isolador (1:1)</h4>
                  <p className="text-slate-700 text-sm mb-3">N_s = N_p (mesma quantidade de espiras)</p>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="text-sm text-slate-700"><strong>Resultado:</strong> Tensão e corrente iguais</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Função:</strong> Isolar circuitos eletricamente</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Uso:</strong> Proteção contra choques, equipamentos médicos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Passo-a-Passo: Resolver Problemas com Transformadores</h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 1:</strong> Identifique os dados: N_p, N_s, V_p (ou V_s), I_p (ou I_s)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 2:</strong> Determine o tipo: elevador (N_s &gt; N_p) ou abaixador (N_s &lt; N_p)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 3:</strong> Use a relação de transformação: V_s/V_p = N_s/N_p
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 4:</strong> Use conservação de potência: V_p I_p = V_s I_s
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 5:</strong> Se real, calcule perdas: η = P_saída / P_entrada × 100%
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 6:</strong> Verifique: potência de entrada ≈ potência de saída (com perdas mínimas)
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Exemplos Resolvidos Detalhados</h3>
              
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 1: Transformador Elevador em Usina de Energia</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Uma usina gera 10 kV com corrente de 1000 A. Um transformador elevador tem 100 espiras na primária e 10.000 espiras na secundária. Qual é a tensão e corrente secundárias? Qual é a potência?</p>
                  
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-semibold mb-2">Solução Passo-a-Passo:</p>
                    <p className="mb-2"><strong>Dados:</strong> V_p = 10 kV = 10.000 V, I_p = 1000 A, N_p = 100, N_s = 10.000</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 1 - Relação de transformação:</strong></p>
                    <MathFormula formula="\frac{N_s}{N_p} = \frac{10000}{100} = 100" display={true} />
                    <p className="text-sm mt-2">Isto significa que a tensão será 100 vezes maior e a corrente 100 vezes menor.</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 2 - Tensão secundária:</strong></p>
                    <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 10.000 \times 100 = 1.000.000 \text{ V} = 1 \text{ MV}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 3 - Corrente secundária (conservação de potência):</strong></p>
                    <MathFormula formula="I_s = I_p \times \frac{N_p}{N_s} = 1000 \times \frac{100}{10000} = 1000 \times 0,01 = 10 \text{ A}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 4 - Verificar potência:</strong></p>
                    <MathFormula formula="P_p = V_p \times I_p = 10.000 \times 1000 = 10.000.000 \text{ W} = 10 \text{ MW}" display={true} />
                    <MathFormula formula="P_s = V_s \times I_s = 1.000.000 \times 10 = 10.000.000 \text{ W} = 10 \text{ MW}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-blue-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Tensão secundária: <strong>1 MV</strong> (1 milhão de volts!)</p>
                      <p>• Corrente secundária: <strong>10 A</strong></p>
                      <p>• Potência: <strong>10 MW</strong> (conservada)</p>
                      <p className="mt-2 text-xs text-slate-600">Por que elevar a tensão? Porque com 10 A em vez de 1000 A, as perdas I²R são 10.000 vezes menores! Isto permite transmitir energia a centenas de quilômetros sem perdas excessivas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 2: Transformador Abaixador em Fonte de Alimentação</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Uma fonte de alimentação tem um transformador com 500 espiras na primária e 10 espiras na secundária. A tensão primária é 220 V AC. Qual é a tensão secundária? Se a corrente secundária é 5 A, qual é a corrente primária?</p>
                  
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold mb-2">Solução Passo-a-Passo:</p>
                    <p className="mb-2"><strong>Dados:</strong> V_p = 220 V, N_p = 500, N_s = 10, I_s = 5 A</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 1 - Relação de transformação:</strong></p>
                    <MathFormula formula="\frac{N_s}{N_p} = \frac{10}{500} = 0,02 = \frac{1}{50}" display={true} />
                    <p className="text-sm mt-2">A tensão será 50 vezes menor e a corrente 50 vezes maior.</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 2 - Tensão secundária:</strong></p>
                    <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 220 \times 0,02 = 4,4 \text{ V}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 3 - Corrente primária (conservação de potência):</strong></p>
                    <MathFormula formula="I_p = I_s \times \frac{N_s}{N_p} = 5 \times 0,02 = 0,1 \text{ A}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 4 - Verificar potência:</strong></p>
                    <MathFormula formula="P_p = 220 \times 0,1 = 22 \text{ W}" display={true} />
                    <MathFormula formula="P_s = 4,4 \times 5 = 22 \text{ W}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-green-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Tensão secundária: <strong>4,4 V</strong></p>
                      <p>• Corrente primária: <strong>0,1 A</strong></p>
                      <p>• Potência: <strong>22 W</strong> (conservada)</p>
                      <p className="mt-2 text-xs text-slate-600">Este é um transformador típico de fonte de alimentação. Reduz 220V para 4,4V (seguro para eletrônicos), aumentando a corrente de 0,1A para 5A.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 3: Transformador Real com Perdas</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um transformador ideal teria 100 W de saída com 100 W de entrada. Mas um transformador real tem eficiência de 95%. Se a entrada é 100 W, qual é a saída real? Quanto de energia é perdido?</p>
                  
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> P_entrada = 100 W, η (eficiência) = 95% = 0,95</p>
                    
                    <p className="mt-3 mb-2"><strong>Potência de saída:</strong></p>
                    <MathFormula formula="P_{saída} = P_{entrada} \times \eta = 100 \times 0,95 = 95 \text{ W}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Potência perdida:</strong></p>
                    <MathFormula formula="P_{perdida} = P_{entrada} - P_{saída} = 100 - 95 = 5 \text{ W}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-orange-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Potência de saída: <strong>95 W</strong></p>
                      <p>• Potência perdida: <strong>5 W</strong> (5% de perdas)</p>
                      <p className="mt-2 text-xs text-slate-600">Estas perdas são principalmente aquecimento dos fios (resistência) e perdas magnéticas no núcleo. Transformadores modernos têm eficiências de 95-99%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Aplicações Práticas de Transformadores</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🌍 Transmissão de Energia (Longa Distância)</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Como funciona:</strong> Usina gera 10 kV → Transformador elevador para 500 kV → Transmissão por linhas de alta tensão → Transformador abaixador para 110 kV → Distribuição local → Transformador abaixador para 220V/110V → Casas e comércios
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Por quê?</strong> Reduz perdas I²R drasticamente. Com alta tensão e baixa corrente, o aquecimento dos fios é mínimo, permitindo transmitir energia a centenas de quilômetros.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🔌 Eletrônica de Consumo</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Exemplos:</strong> Carregadores de celular, fontes de computador, adaptadores de voltagem, transformadores em TV/rádio
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Função:</strong> Reduzem 110V/220V AC para tensões menores (5V, 12V, 24V DC) necessárias para eletrônicos. Depois retificadores convertem AC para DC.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🛡️ Isolamento Elétrico</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Uso:</strong> Equipamentos médicos, instrumentação, proteção contra choques
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Vantagem:</strong> Transformadores 1:1 isolam circuitos eletricamente. Se uma pessoa toca um lado, não completa o circuito no outro lado. Essencial em hospitais.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🎵 Ajuste de Impedância</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Uso:</strong> Sistemas de áudio, antenas, transmissores RF
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Função:</strong> Transformadores ajustam impedâncias entre circuitos para máxima transferência de potência. Essencial em amplificadores e sistemas de som.
                  </p>
                </div>
              </div>
            </div>

            {/* Transformadores Ideais vs Reais */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Transformadores Ideais vs Reais</h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-slate-900 mb-3">✅ Transformador Ideal (Teórico)</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Sem perdas de energia (eficiência = 100%)</li>
                      <li>• Sem resistência nos fios</li>
                      <li>• Núcleo de ferro perfeito (sem perdas magnéticas)</li>
                      <li>• Acoplamento magnético perfeito (100%)</li>
                      <li>• Conservação exata: V_p I_p = V_s I_s</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-3">⚠️ Transformador Real (Prático)</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Perdas por resistência (I²R):</strong> Fios têm resistência, causam aquecimento</li>
                      <li>• <strong>Perdas no núcleo:</strong> Histerese magnética, correntes parasitas</li>
                      <li>• <strong>Eficiência típica:</strong> 95-99% (pequenos transformadores: 85-95%)</li>
                      <li>• <strong>Acoplamento magnético:</strong> 95-98% (nem todo fluxo chega à bobina secundária)</li>
                      <li>• <strong>Conservação aproximada:</strong> V_p I_p ≈ V_s I_s (com perdas)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOTORES ELÉTRICOS - APROFUNDADO COM DIDÁTICA SUPERIOR */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Motores Elétricos - Aprofundamento Didático Completo</h2>
          
          <div className="space-y-8">
            {/* O que é um Motor Elétrico? */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">O que é um Motor Elétrico?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Um <strong>motor elétrico</strong> é um dispositivo que converte energia elétrica em energia mecânica (movimento). Ele funciona usando campos magnéticos para criar força e torque, fazendo uma bobina girar continuamente.
              </p>
              <div className="bg-white p-4 rounded border border-blue-200 mt-4">
                <p className="text-slate-700 text-sm mb-2"><strong>Analogia com engrenagens:</strong> Imagine duas engrenagens - uma movida por você (energia elétrica) e outra que gira em resposta (energia mecânica). Um motor elétrico faz isso sem contato físico, usando apenas campos magnéticos!</p>
              </div>
            </div>

            {/* Contexto Histórico */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">📚 Contexto Histórico (1887)</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                O motor elétrico moderno foi desenvolvido por Nikola Tesla em 1887. Antes disso, as máquinas eram movidas a vapor ou energia hidráulica - pesadas, perigosas e ineficientes. Os motores elétricos revolucionaram a indústria permitindo controle preciso, partida instantânea e eficiência superior. Hoje, motores elétricos consomem cerca de 45% da eletricidade mundial!
              </p>
            </div>

            {/* Princípio de Funcionamento */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Como Funciona: Força de Lorentz + Lei de Ampère</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-3">💡 Princípio Básico:</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Um motor elétrico usa dois princípios fundamentais:
                </p>
                <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                  <li><strong>Lei de Ampère:</strong> Corrente elétrica gera campo magnético ao redor de um condutor</li>
                  <li><strong>Força de Lorentz:</strong> Campo magnético externo exerce força sobre um condutor com corrente</li>
                </ol>
                <p className="text-slate-700 text-sm mt-3">Quando você combina esses dois efeitos em uma bobina, ela começa a girar!</p>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-lg mb-6">
                <h4 className="font-semibold text-blue-200 mb-4 text-center">Força de Lorentz em um Condutor</h4>
                <MathFormula formula="\vec{F} = I\vec{L} \times \vec{B}" display={true} className="text-2xl mb-4" />
                
                <div className="mt-6 pt-4 border-t border-blue-700">
                  <h5 className="font-semibold text-blue-200 mb-3">Explicação Termo-a-Termo:</h5>
                  <div className="space-y-3">
                    <div className="bg-white/10 p-3 rounded border border-blue-600">
                      <p className="font-semibold mb-1">F (Força)</p>
                      <p className="text-sm text-blue-100">Força resultante que empurra o condutor, medida em newtons (N). Esta força é perpendicular tanto à corrente quanto ao campo magnético.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-blue-600">
                      <p className="font-semibold mb-1">I (Corrente)</p>
                      <p className="text-sm text-blue-100">Corrente elétrica que passa pelo condutor, medida em ampères (A). Quanto maior a corrente, maior a força.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-blue-600">
                      <p className="font-semibold mb-1">L (Comprimento)</p>
                      <p className="text-sm text-blue-100">Comprimento do condutor dentro do campo magnético, medido em metros (m). Quanto maior o comprimento, maior a força.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-blue-600">
                      <p className="font-semibold mb-1">B (Campo Magnético)</p>
                      <p className="text-sm text-blue-100">Intensidade do campo magnético externo, medido em teslas (T). Quanto mais forte o campo, maior a força.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-blue-600">
                      <p className="font-semibold mb-1">× (Produto Vetorial)</p>
                      <p className="text-sm text-blue-100">Indica que a força é perpendicular tanto à corrente quanto ao campo. Use a regra da mão direita para encontrar a direção.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-lg mb-6">
                <h4 className="font-semibold text-purple-200 mb-4 text-center">Torque em uma Bobina (Motor)</h4>
                <MathFormula formula="\tau = NIAB\sin\theta" display={true} className="text-2xl mb-4" />
                
                <div className="mt-6 pt-4 border-t border-purple-700">
                  <h5 className="font-semibold text-purple-200 mb-3">Explicação Termo-a-Termo:</h5>
                  <div className="space-y-3">
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">τ (Torque)</p>
                      <p className="text-sm text-purple-100">Torque (momento) que faz a bobina girar, medido em newton-metros (N·m). É a "força de rotação".</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">N (Número de Espiras)</p>
                      <p className="text-sm text-purple-100">Quantas voltas de fio tem a bobina. Mais espiras = mais torque. Típico: 50-500 espiras.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">I (Corrente)</p>
                      <p className="text-sm text-purple-100">Corrente que passa pela bobina, em ampères (A). Controlar a corrente controla o torque.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">A (Área da Bobina)</p>
                      <p className="text-sm text-purple-100">Área da bobina em metros quadrados (m²). Bobinas maiores geram mais torque.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">B (Campo Magnético)</p>
                      <p className="text-sm text-purple-100">Intensidade do campo magnético externo, em teslas (T). Campos mais fortes geram mais torque.</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded border border-purple-600">
                      <p className="font-semibold mb-1">θ (Ângulo)</p>
                      <p className="text-sm text-purple-100">Ângulo entre a normal da bobina e o campo magnético. Torque máximo quando θ = 90° (sin 90° = 1).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">Como a Bobina Gira Continuamente?</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Quando corrente passa pela bobina em um campo magnético, a Força de Lorentz atua em lados opostos da bobina em direções opostas. Isto cria um torque que faz a bobina começar a girar.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>O truque:</strong> Para manter a rotação contínua, a corrente deve ser invertida (comutada) a cada meia volta. Isto mantém o torque sempre empurrando na mesma direção de rotação. Sem comutação, a bobina oscilaria para frente e para trás, mas não giraria continuamente.
                </p>
              </div>
            </div>

            {/* Tipos de Motores */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Tipos de Motores Elétricos</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-3">🔋 Motor CC (Corrente Contínua)</h4>
                  <div className="bg-white p-4 rounded border border-blue-200 space-y-2 text-sm text-slate-700">
                    <p><strong>Como funciona:</strong> Usa comutadores (escovas de carvão) para inverter a corrente a cada meia volta automaticamente, mantendo o torque sempre na mesma direção.</p>
                    <p><strong>Vantagens:</strong> Controle preciso de velocidade e torque. Torque de partida muito alto. Ideal para aplicações que exigem controle fino.</p>
                    <p><strong>Desvantagens:</strong> Comutadores (escovas) se desgastam com o tempo e requerem manutenção periódica. Mais caro que motores CA.</p>
                    <p><strong>Aplicações:</strong> Veículos elétricos, ferramentas elétricas, robótica, elevadores, guindastes</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-3">🔌 Motor CA Síncrono (Corrente Alternada)</h4>
                  <div className="bg-white p-4 rounded border border-green-200 space-y-2 text-sm text-slate-700">
                    <p><strong>Como funciona:</strong> O campo magnético gira com a frequência da corrente alternada (50 Hz ou 60 Hz). A bobina "segue" o campo girante em sincronismo perfeito.</p>
                    <p><strong>Vantagens:</strong> Velocidade constante e precisa. Sem comutadores (sem desgaste). Alta eficiência.</p>
                    <p><strong>Desvantagens:</strong> Requer sincronização inicial. Torque de partida baixo. Não funciona bem com cargas variáveis.</p>
                    <p><strong>Aplicações:</strong> Relógios elétricos, gravadores de fita, equipamentos de precisão, geradores síncronos</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-3">⚡ Motor CA de Indução (Assíncrono)</h4>
                  <div className="bg-white p-4 rounded border border-orange-200 space-y-2 text-sm text-slate-700">
                    <p><strong>Como funciona:</strong> O rotor não segue exatamente o campo girante - há um pequeno "escorregamento" (slip). Este escorregamento induz corrente no rotor, criando seu próprio campo magnético.</p>
                    <p><strong>Vantagens:</strong> Extremamente robusto e confiável. Sem comutadores. Barato. Fácil de manter. Funciona bem com cargas variáveis.</p>
                    <p><strong>Desvantagens:</strong> Velocidade varia ligeiramente com a carga. Controle de velocidade mais complexo.</p>
                    <p><strong>Aplicações:</strong> Bombas, ventiladores, compressores, máquinas industriais, eletrodomésticos (geladeiras, ar-condicionado)</p>
                    <p className="font-semibold text-orange-900 mt-3">Este é o tipo de motor mais usado no mundo!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Passo-a-Passo: Resolver Problemas com Motores</h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 1:</strong> Identifique o tipo de motor (CC, CA síncrono, indução)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 2:</strong> Anote os dados: N (espiras), A (área da bobina), B (campo magnético), I (corrente), θ (ângulo)
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 3:</strong> Calcule o torque usando τ = NIAB sin(θ). Torque máximo quando θ = 90°
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 4:</strong> Se tiver velocidade angular ω (rad/s), calcule potência mecânica: P = τω
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 5:</strong> Calcule eficiência: η = P_mecânica / P_elétrica × 100%
                  </li>
                  <li className="bg-white p-3 rounded border border-yellow-200">
                    <strong>Passo 6:</strong> Verifique unidades: torque em N·m, potência em W, eficiência em %
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Exemplos Resolvidos Detalhados</h3>
              
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 1: Torque Máximo em Motor CC</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um motor CC tem uma bobina com 50 espiras, área de 0,02 m², em um campo magnético de 0,5 T. A corrente é 10 A. Qual é o torque máximo?</p>
                  
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-semibold mb-2">Solução Passo-a-Passo:</p>
                    <p className="mb-2"><strong>Dados:</strong> N = 50, A = 0,02 m², B = 0,5 T, I = 10 A</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 1 - Torque máximo ocorre quando sin(θ) = 1 (θ = 90°):</strong></p>
                    <MathFormula formula="\tau_{max} = NIAB = 50 \times 10 \times 0,02 \times 0,5" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 2 - Calcular:</strong></p>
                    <MathFormula formula="\tau_{max} = 50 \times 10 \times 0,02 \times 0,5 = 5 \text{ N·m}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-blue-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Torque máximo: <strong>5 N·m</strong></p>
                      <p className="mt-2 text-xs text-slate-600">Este é um torque moderado, típico de motores pequenos usados em ferramentas elétricas ou ventiladores. Para comparação, um motor de carro tem torque de 200-400 N·m.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 2: Potência Mecânica de um Motor</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um motor gera torque de 8 N·m e gira a 300 rpm (rotações por minuto). Qual é a potência mecânica?</p>
                  
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold mb-2">Solução Passo-a-Passo:</p>
                    <p className="mb-2"><strong>Dados:</strong> τ = 8 N·m, rotação = 300 rpm</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 1 - Converter rpm para rad/s:</strong></p>
                    <MathFormula formula="\omega = 300 \text{ rpm} \times \frac{2\pi \text{ rad}}{1 \text{ rot}} \times \frac{1 \text{ min}}{60 \text{ s}}" display={true} />
                    <MathFormula formula="\omega = 300 \times \frac{2\pi}{60} = 300 \times 0,1047 = 31,4 \text{ rad/s}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 2 - Calcular potência:</strong></p>
                    <MathFormula formula="P = \tau \omega = 8 \times 31,4 = 251,2 \text{ W}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-green-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Velocidade angular: <strong>31,4 rad/s</strong></p>
                      <p>• Potência mecânica: <strong>251 W</strong> (aproximadamente 0,34 HP)</p>
                      <p className="mt-2 text-xs text-slate-600">Este é um motor de potência moderada, típico de ferramentas elétricas como furadeiras ou serras circulares.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 3: Eficiência de um Motor Real</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um motor consome 1000 W de potência elétrica e produz 850 W de potência mecânica. Qual é a eficiência? Quanto de energia é perdido?</p>
                  
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> P_elétrica = 1000 W, P_mecânica = 850 W</p>
                    
                    <p className="mt-3 mb-2"><strong>Passo 1 - Calcular eficiência:</strong></p>
                    <MathFormula formula="\eta = \frac{P_{mecânica}}{P_{elétrica}} \times 100\% = \frac{850}{1000} \times 100\% = 85\%" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Passo 2 - Calcular potência perdida:</strong></p>
                    <MathFormula formula="P_{perdida} = P_{elétrica} - P_{mecânica} = 1000 - 850 = 150 \text{ W}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-orange-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• Eficiência: <strong>85%</strong></p>
                      <p>• Potência perdida: <strong>150 W</strong> (15% de perdas)</p>
                      <p className="mt-2 text-xs text-slate-600">Estas perdas são principalmente aquecimento dos fios (resistência), atrito nos rolamentos e perdas magnéticas. Motores modernos têm eficiências de 85-95%. Motores industriais de alta eficiência chegam a 96-98%.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Exemplo 4: Motor com Ângulo Variável</h4>
                <div className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 space-y-3">
                  <p><strong>Problema:</strong> Um motor tem N = 100, I = 5 A, A = 0,01 m², B = 0,8 T. Calcule o torque quando θ = 30°, 60° e 90°.</p>
                  
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="font-semibold mb-2">Solução:</p>
                    <p className="mb-2"><strong>Dados:</strong> N = 100, I = 5 A, A = 0,01 m², B = 0,8 T</p>
                    
                    <p className="mt-3 mb-2"><strong>Fórmula geral:</strong></p>
                    <MathFormula formula="\tau = NIAB\sin\theta = 100 \times 5 \times 0,01 \times 0,8 \times \sin\theta = 4\sin\theta" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Para θ = 30°:</strong></p>
                    <MathFormula formula="\tau_{30} = 4 \times \sin(30°) = 4 \times 0,5 = 2 \text{ N·m}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Para θ = 60°:</strong></p>
                    <MathFormula formula="\tau_{60} = 4 \times \sin(60°) = 4 \times 0,866 = 3,46 \text{ N·m}" display={true} />
                    
                    <p className="mt-3 mb-2"><strong>Para θ = 90°:</strong></p>
                    <MathFormula formula="\tau_{90} = 4 \times \sin(90°) = 4 \times 1 = 4 \text{ N·m}" display={true} />
                    
                    <div className="mt-4 pt-3 border-t border-purple-200">
                      <p className="font-semibold">Resposta:</p>
                      <p>• θ = 30°: <strong>2 N·m</strong> (50% do torque máximo)</p>
                      <p>• θ = 60°: <strong>3,46 N·m</strong> (86,5% do torque máximo)</p>
                      <p>• θ = 90°: <strong>4 N·m</strong> (100% - torque máximo)</p>
                      <p className="mt-2 text-xs text-slate-600">O torque varia com o seno do ângulo. Por isso motores precisam de comutação - para manter o ângulo próximo de 90° e maximizar o torque continuamente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Aplicações Práticas de Motores Elétricos</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🚗 Veículos Elétricos</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Tipo:</strong> Motores CC sem escovas (brushless) ou motores de indução trifásicos
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Vantagens:</strong> Torque instantâneo, alta eficiência (90-95%), regeneração de energia na frenagem, controle preciso de velocidade. Tesla Model S usa motor de indução de 450 HP.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🏭 Indústria e Manufatura</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Aplicações:</strong> Bombas, ventiladores, compressores, esteiras transportadoras, máquinas CNC, robôs industriais
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Tipo dominante:</strong> Motores de indução trifásicos (robustos, baratos, confiáveis). Respondem por 70% do consumo industrial de eletricidade.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🏠 Eletrodomésticos</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Exemplos:</strong> Geladeiras, ar-condicionado, máquinas de lavar, ventiladores, liquidificadores, aspiradores de pó
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Tipos:</strong> Motores de indução (geladeiras, AC), motores universais (liquidificadores, aspiradores), motores CC (ventiladores modernos com controle de velocidade)
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🤖 Robótica e Automação</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Tipo:</strong> Servomotores (motores CC com controle de posição preciso)
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Características:</strong> Controle de posição angular preciso (±0,1°), resposta rápida, torque controlável. Essencial em braços robóticos, drones, impressoras 3D, câmeras automatizadas.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-2">🚆 Transporte Ferroviário</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    <strong>Aplicações:</strong> Trens elétricos, metrôs, bondes, trens de alta velocidade (Shinkansen, TGV)
                  </p>
                  <p className="text-slate-700 text-sm">
                    <strong>Vantagens:</strong> Torque alto em baixas velocidades (partida), eficiência superior a motores a diesel, regeneração de energia na frenagem, menor manutenção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geradores Elétricos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">3. Geradores Elétricos</h2>
          
          {/* O que é um Gerador */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-purple-900 mb-3">💡 O que é um Gerador Elétrico?</h4>
            <p className="text-purple-800 leading-relaxed">
              Um <strong>gerador elétrico</strong> é uma máquina que converte <strong>energia mecânica</strong> (movimento) em <strong>energia elétrica</strong>. 
              É o <strong>inverso de um motor</strong>: enquanto o motor usa eletricidade para criar movimento, o gerador usa movimento para criar eletricidade.
            </p>
            <p className="text-purple-800 leading-relaxed mt-3">
              <strong>Analogia:</strong> Imagine uma bicicleta com dínamo. Quando você pedala (energia mecânica), o dínamo gira e acende a luz (energia elétrica). 
              Você está convertendo o movimento das suas pernas em eletricidade!
            </p>
          </div>

          {/* Contexto Histórico */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-purple-900 mb-3">📜 Contexto Histórico</h4>
            <p className="text-purple-800 leading-relaxed">
              O primeiro gerador elétrico prático foi inventado por <strong>Michael Faraday em 1831</strong>, baseado na sua descoberta da <strong>indução eletromagnética</strong>. 
              Ele percebeu que mover um ímã perto de uma bobina induz uma corrente elétrica.
            </p>
            <p className="text-purple-800 leading-relaxed mt-3">
              Em <strong>1866</strong>, Werner von Siemens desenvolveu o <strong>gerador de corrente contínua (CC)</strong> auto-excitado. 
              Em <strong>1882</strong>, Nikola Tesla inventou o <strong>gerador de corrente alternada (CA)</strong>, que revolucionou a transmissão de energia elétrica.
            </p>
            <p className="text-purple-800 leading-relaxed mt-3">
              Hoje, <strong>geradores</strong> são a base de toda a produção de eletricidade: usinas hidrelétricas, térmicas, eólicas e nucleares usam geradores para converter movimento em eletricidade.
            </p>
          </div>

          {/* Princípio de Funcionamento */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-purple-900">Princípio de Funcionamento</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-purple-900 mb-4">Lei de Faraday Aplicada a Geradores</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Um gerador funciona baseado na <strong>Lei de Faraday</strong>: quando o fluxo magnético através de uma bobina varia, uma <strong>força eletromotriz (fem)</strong> é induzida.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="font-mono text-lg text-center mb-3">ε = -N dΦ/dt</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>ε (epsilon):</strong> Força eletromotriz induzida (fem) em volts (V)</p>
                  <p><strong>N:</strong> Número de espiras na bobina (adimensional)</p>
                  <p><strong>dΦ/dt:</strong> Taxa de variação do fluxo magnético (Wb/s = V)</p>
                  <p><strong>Sinal negativo:</strong> Lei de Lenz - a fem se opõe à variação do fluxo</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Em um gerador, uma bobina gira dentro de um campo magnético (ou um ímã gira perto de bobinas fixas). 
                Conforme a bobina gira, o fluxo magnético através dela varia continuamente, induzindo uma fem alternada.
              </p>
            </div>

            {/* Gerador Simples */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-purple-900 mb-4">Gerador de Corrente Alternada (CA) Simples</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Considere uma bobina retangular de área <strong>A</strong> com <strong>N</strong> espiras girando com velocidade angular <strong>ω</strong> em um campo magnético uniforme <strong>B</strong>.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="font-mono text-lg text-center mb-3">ε(t) = NABω sin(ωt) = ε₀ sin(ωt)</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>ε(t):</strong> Fem induzida em função do tempo (V)</p>
                  <p><strong>N:</strong> Número de espiras (adimensional)</p>
                  <p><strong>A:</strong> Área de cada espira (m²)</p>
                  <p><strong>B:</strong> Campo magnético (T)</p>
                  <p><strong>ω (omega):</strong> Velocidade angular de rotação (rad/s)</p>
                  <p><strong>ε₀ = NABω:</strong> Amplitude máxima da fem (V)</p>
                  <p><strong>sin(ωt):</strong> Função senoidal que varia entre -1 e +1</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Interpretação Física:</strong> A fem é máxima quando a bobina está na posição horizontal (sin(ωt) = ±1) e zero quando está na posição vertical (sin(ωt) = 0). 
                  Isso cria uma <strong>corrente alternada (CA)</strong> que muda de direção periodicamente.
                </p>
              </div>
            </div>
          </div>

          {/* Tipos de Geradores */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-purple-900">Tipos de Geradores</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gerador CA */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-3">Gerador de Corrente Alternada (CA)</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Produz corrente que varia senoidalmente com o tempo. Usado em <strong>usinas elétricas</strong> (hidrelétricas, térmicas, eólicas).
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Vantagens:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Mais simples (sem comutador)</li>
                    <li>Pode usar transformadores para mudar tensão</li>
                    <li>Transmissão eficiente em longas distâncias</li>
                  </ul>
                  <p className="mt-2"><strong>Desvantagens:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Requer retificação para obter CC</li>
                  </ul>
                  <p className="mt-2"><strong>Aplicações:</strong> Usinas elétricas, geradores portáteis, alternadores de veículos</p>
                </div>
              </div>

              {/* Gerador CC */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-3">Gerador de Corrente Contínua (CC)</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Usa um <strong>comutador</strong> (anel dividido) para converter a corrente alternada em corrente contínua pulsante.
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Vantagens:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Produz corrente contínua diretamente</li>
                    <li>Bom para carregar baterias</li>
                  </ul>
                  <p className="mt-2"><strong>Desvantagens:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Comutador requer manutenção</li>
                    <li>Não pode usar transformadores</li>
                    <li>Menos eficiente para transmissão</li>
                  </ul>
                  <p className="mt-2"><strong>Aplicações:</strong> Dínamos de bicicleta, geradores de soldagem, sistemas de backup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Passo-a-Passo */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Passo-a-Passo para Resolver Problemas de Geradores</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                <div>
                  <strong>Identifique o tipo de gerador:</strong> CA (senoidal) ou CC (comutador)?
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                <div>
                  <strong>Anote os dados:</strong> N (espiras), A (área), B (campo), ω (velocidade angular)
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                <div>
                  <strong>Calcule a fem máxima:</strong> ε₀ = NABω
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                <div>
                  <strong>Escreva a fem em função do tempo:</strong> ε(t) = ε₀ sin(ωt) para CA
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
                <div>
                  <strong>Calcule a corrente:</strong> i(t) = ε(t)/R se houver resistência R
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
                <div>
                  <strong>Calcule a potência:</strong> P(t) = ε(t) × i(t) ou P_média = ε₀²/(2R)
                </div>
              </li>
            </ol>
          </div>

          {/* Exemplos Resolvidos */}
          <div className="space-y-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-900">Exemplos Resolvidos</h3>
            
            {/* Exemplo 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-900 mb-4">Exemplo 1: Gerador CA Simples</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Enunciado:</p>
                <p className="text-gray-700">
                  Um gerador CA possui uma bobina com N = 100 espiras, área A = 0,05 m², girando a ω = 120 rad/s em um campo magnético B = 0,8 T. 
                  Calcule: (a) a fem máxima, (b) a fem em t = π/240 s.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-purple-900 mb-2">Solução (a): Fem máxima</p>
                  <div className="bg-purple-50 rounded p-3 space-y-2 text-sm">
                    <p>Dados: N = 100, A = 0,05 m², ω = 120 rad/s, B = 0,8 T</p>
                    <p>ε₀ = NABω = 100 × 0,05 × 0,8 × 120</p>
                    <p>ε₀ = 480 V</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-purple-900 mb-2">Solução (b): Fem em t = π/240 s</p>
                  <div className="bg-purple-50 rounded p-3 space-y-2 text-sm">
                    <p>ε(t) = ε₀ sin(ωt) = 480 sin(120 × π/240)</p>
                    <p>ε(t) = 480 sin(π/2) = 480 × 1</p>
                    <p>ε(t) = 480 V (fem máxima neste instante)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-4">Exemplo 2: Potência Média de um Gerador</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Enunciado:</p>
                <p className="text-gray-700">
                  O gerador do Exemplo 1 está conectado a uma resistência R = 50 Ω. Calcule a potência média fornecida.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-green-900 mb-2">Solução:</p>
                  <div className="bg-green-50 rounded p-3 space-y-2 text-sm">
                    <p>Dados: ε₀ = 480 V (do Exemplo 1), R = 50 Ω</p>
                    <p>A potência instantânea é: P(t) = ε²(t)/R = [ε₀ sin(ωt)]²/R</p>
                    <p>A potência média é: P_média = ε₀²/(2R)</p>
                    <p>P_média = (480)²/(2 × 50) = 230400/100</p>
                    <p>P_média = 2304 W ≈ 2,3 kW</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-3">
                  <p className="text-yellow-800 text-sm">
                    <strong>Nota:</strong> A potência média é metade da potência máxima (ε₀²/R) porque a função sin²(ωt) tem valor médio de 1/2.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-4">Exemplo 3: Gerador de Usina Hidrelétrica</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Enunciado:</p>
                <p className="text-gray-700">
                  Uma turbina hidrelétrica gira a 60 rpm (rotações por minuto). O gerador possui N = 500 espiras, A = 2 m², B = 1,5 T. 
                  Calcule a fem máxima gerada.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Solução:</p>
                  <div className="bg-blue-50 rounded p-3 space-y-2 text-sm">
                    <p>Dados: N = 500, A = 2 m², B = 1,5 T, f = 60 rpm</p>
                    <p>Primeiro, converta rpm para rad/s:</p>
                    <p>ω = 2πf = 2π × (60/60) = 2π × 1 = 6,28 rad/s</p>
                    <p>Agora calcule ε₀:</p>
                    <p>ε₀ = NABω = 500 × 2 × 1,5 × 6,28</p>
                    <p>ε₀ = 9420 V ≈ 9,4 kV</p>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 rounded p-3">
                  <p className="text-green-800 text-sm">
                    <strong>Aplicação Real:</strong> Usinas hidrelétricas geram tensões de 10-25 kV, que são elevadas para 230-500 kV por transformadores para transmissão eficiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-4">Exemplo 4: Frequência de um Gerador</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">Enunciado:</p>
                <p className="text-gray-700">
                  Um gerador CA deve produzir corrente alternada com frequência f = 60 Hz. Quantas rotações por segundo a turbina deve fazer?
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-orange-900 mb-2">Solução:</p>
                  <div className="bg-orange-50 rounded p-3 space-y-2 text-sm">
                    <p>Dados: f = 60 Hz (frequência da corrente alternada)</p>
                    <p>A frequência da corrente alternada é igual à frequência de rotação da bobina:</p>
                    <p>f_rotação = f = 60 Hz = 60 rotações/segundo</p>
                    <p>Em rpm: f_rotação = 60 × 60 = 3600 rpm</p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-3">
                  <p className="text-blue-800 text-sm">
                    <strong>Nota:</strong> No Brasil, a frequência padrão é 60 Hz. Na Europa, é 50 Hz. Geradores de usinas são projetados para girar a 3600 rpm (60 Hz) ou 3000 rpm (50 Hz).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aplicações Práticas */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Aplicações Práticas de Geradores</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2">1. Usinas Hidrelétricas</h4>
                <p className="text-gray-700 text-sm">
                  Água em queda gira turbinas conectadas a geradores CA de grande porte (100-700 MW). Fornecem 60% da eletricidade do Brasil.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-2">2. Usinas Eólicas</h4>
                <p className="text-gray-700 text-sm">
                  Vento gira pás conectadas a geradores CA (2-8 MW por turbina). Energia limpa e renovável em crescimento.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-orange-900 mb-2">3. Usinas Térmicas e Nucleares</h4>
                <p className="text-gray-700 text-sm">
                  Vapor de água gira turbinas conectadas a geradores CA (500-1500 MW). Usam combustíveis fósseis ou fissão nuclear.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2">4. Alternadores de Veículos</h4>
                <p className="text-gray-700 text-sm">
                  Motor do carro gira um alternador (gerador CA) que carrega a bateria e alimenta sistemas elétricos (12V, 50-150A).
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-red-900 mb-2">5. Geradores Portáteis</h4>
                <p className="text-gray-700 text-sm">
                  Motor a gasolina/diesel gira gerador CA para fornecer eletricidade em locais remotos ou emergências (1-10 kW).
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-indigo-900 mb-2">6. Dínamos de Bicicleta</h4>
                <p className="text-gray-700 text-sm">
                  Roda da bicicleta gira um pequeno gerador CC que acende faróis (6V, 3W). Exemplo clássico de gerador mecânico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box Final */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Resumo: Transformadores, Motores e Geradores</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li>• <strong>Transformadores:</strong> Mudam tensão/corrente sem alterar potência. Essenciais para transmissão de energia.</li>
            <li>• <strong>Motores:</strong> Convertem energia elétrica em mecânica usando Força de Lorentz.</li>
            <li>• <strong>Geradores:</strong> Convertem energia mecânica em elétrica usando Lei de Faraday (inverso do motor).</li>
            <li>• <strong>Todos:</strong> Baseados em eletromagnetismo (Lei de Faraday, Lei de Ampère, Lei de Lenz)</li>
            <li>• <strong>Transformadores:</strong> Funcionam apenas com AC. Eficiência típica: 95-99%</li>
            <li>• <strong>Motores:</strong> Podem ser CC ou CA. Eficiência típica: 85-95%</li>
            <li>• <strong>Geradores:</strong> Produzem CA (usinas) ou CC (dínamos). Eficiência típica: 90-98%</li>
            <li>• <strong>Impacto:</strong> Geradores produzem 100% da eletricidade mundial. Transformadores permitem transmissão eficiente. Motores consomem 45% da eletricidade.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
