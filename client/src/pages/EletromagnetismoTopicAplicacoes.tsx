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

        {/* Info Box Final */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Resumo: Transformadores</h4>
          <ul className="text-red-800 text-sm space-y-2">
            <li>• Funcionam apenas com corrente alternada (AC)</li>
            <li>• Baseados na Lei de Faraday: V_s/V_p = N_s/N_p</li>
            <li>• Conservam potência: V_p I_p = V_s I_s (ideal)</li>
            <li>• Elevadores aumentam tensão, reduzem corrente</li>
            <li>• Abaixadores reduzem tensão, aumentam corrente</li>
            <li>• Essenciais para transmissão de energia de longa distância</li>
            <li>• Eficiência típica: 95-99% em transformadores modernos</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
