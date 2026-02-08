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

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Principais Aplicações</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Transformadores:</strong> Convertem tensões e correntes em sistemas de potência (Lei de Faraday).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Motores Elétricos:</strong> Convertem energia elétrica em energia mecânica (Lei de Ampère + Força de Lorentz).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* TRANSFORMADORES - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Transformadores - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Contexto Histórico e Importância
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O transformador foi inventado em 1886 por Nikola Tesla e Westinghouse, revolucionando a transmissão de energia elétrica. Antes dos transformadores, a eletricidade tinha que ser gerada perto de onde era consumida, limitando a distância de transmissão. Os transformadores permitiram transmitir energia em alta tensão (reduzindo perdas) e depois reduzir para tensões seguras para uso.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Por que Transformadores são Essenciais?</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>Problema:</strong> Transmitir energia em baixa tensão causa perdas enormes (P_perda = I²R). Com correntes altas, o aquecimento dos fios é proporcional ao quadrado da corrente.
                  </p>
                  <p>
                    <strong>Solução:</strong> Transformadores elevadores aumentam a tensão (reduzindo corrente) para transmissão, depois transformadores abaixadores reduzem a tensão para uso seguro.
                  </p>
                  <p className="border-t border-purple-200 pt-2 mt-2">
                    <strong>Resultado:</strong> Redução drástica de perdas, permitindo transmissão de energia a milhares de quilômetros.
                  </p>
                </div>
              </div>
            </div>

            {/* Princípio de Funcionamento */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Princípio de Funcionamento Baseado em Lei de Faraday
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um transformador consiste em duas bobinas (primária e secundária) enroladas em torno de um núcleo de ferro. Quando uma tensão alternada é aplicada à bobina primária, cria um campo magnético variável que induz uma tensão na bobina secundária através da Lei de Faraday.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Lei de Faraday em Transformadores</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Na bobina primária:</p>
                    <MathFormula formula="V_p = -N_p \frac{d\Phi_B}{dt}" display={true} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Na bobina secundária:</p>
                    <MathFormula formula="V_s = -N_s \frac{d\Phi_B}{dt}" display={true} />
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200">
                    <p className="text-sm text-slate-700">
                      Como o fluxo magnético é o mesmo em ambas as bobinas (núcleo de ferro), dividindo as equações:
                    </p>
                    <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p}" display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Condição Essencial
                </h4>
                <p className="text-slate-700 text-sm">
                  Transformadores funcionam APENAS com corrente alternada (AC). Com corrente contínua (DC), não há variação de fluxo magnético, portanto não há indução.
                </p>
              </div>
            </div>

            {/* Transformadores Ideais vs Reais */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Transformadores Ideais vs Reais
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Transformador Ideal</h4>
                    <p className="text-slate-700 text-sm mb-2">Assumptions:</p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      <li>• Sem perdas de energia (eficiência = 100%)</li>
                      <li>• Sem resistência nos fios</li>
                      <li>• Núcleo de ferro perfeito (sem perdas magnéticas)</li>
                      <li>• Acoplamento magnético perfeito entre bobinas</li>
                    </ul>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Transformador Real</h4>
                    <p className="text-slate-700 text-sm mb-2">Perdas práticas:</p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      <li>• Perdas por resistência (aquecimento dos fios): I²R</li>
                      <li>• Perdas no núcleo (histerese magnética): P_núcleo</li>
                      <li>• Eficiência típica: 95-99%</li>
                      <li>• Acoplamento magnético: 95-98%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Conservação de Potência (Ideal)</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Em um transformador ideal, a potência é conservada:
                </p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <MathFormula formula="P_p = P_s" display={true} />
                  <MathFormula formula="V_p I_p = V_s I_s" display={true} />
                  <p className="text-sm text-slate-700 mt-3">
                    Se aumentamos a tensão (step-up), a corrente diminui proporcionalmente. Se diminuímos a tensão (step-down), a corrente aumenta proporcionalmente.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo a Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Passo a Passo: Resolver Problemas com Transformadores
              </h3>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span>Identifique se é transformador ideal ou real</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span>Anote os dados: N_p, N_s, V_p (ou V_s), I_p (ou I_s)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span>Use a relação de transformação: V_s/V_p = N_s/N_p</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span>Se ideal, use conservação de potência: V_p I_p = V_s I_s</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span>Se real, calcule perdas e eficiência: η = P_saída / P_entrada</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Exemplos Resolvidos
              </h3>
              
              <div className="space-y-6">
                {/* Exemplo 1: Step-Up */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 1: Transformador Elevador (Step-Up)
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Uma usina gera 10 kV com corrente de 1000 A. Um transformador elevador tem 100 espiras na primária e 10000 espiras na secundária. Qual é a tensão e corrente secundárias (assumindo ideal)?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Relação de transformação:</strong>
                          <MathFormula formula="\frac{N_s}{N_p} = \frac{10000}{100} = 100" display={true} />
                        </li>
                        <li>
                          <strong>Tensão secundária:</strong>
                          <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 10000 \times 100 = 1.000.000 \text{ V} = 1 \text{ MV}" display={true} />
                        </li>
                        <li>
                          <strong>Corrente secundária (conservação de potência):</strong>
                          <MathFormula formula="I_s = I_p \times \frac{N_p}{N_s} = 1000 \times \frac{100}{10000} = 10 \text{ A}" display={true} />
                        </li>
                        <li>
                          <strong>Verificar potência:</strong>
                          <MathFormula formula="P_p = 10000 \times 1000 = 10 \text{ MW}" display={true} />
                          <MathFormula formula="P_s = 1000000 \times 10 = 10 \text{ MW}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> Tensão secundária = <strong>1 MV</strong>, Corrente secundária = <strong>10 A</strong>. A tensão aumentou 100 vezes, a corrente diminuiu 100 vezes, potência conservada.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 2: Step-Down */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 2: Transformador Abaixador (Step-Down)
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Uma fonte de alimentação tem um transformador com 500 espiras na primária e 10 espiras na secundária. A tensão primária é 220 V AC. Qual é a tensão secundária? Se a corrente secundária é 5 A, qual é a corrente primária (ideal)?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Tensão secundária:</strong>
                          <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 220 \times \frac{10}{500} = 220 \times 0,02 = 4,4 \text{ V}" display={true} />
                        </li>
                        <li>
                          <strong>Corrente primária (conservação de potência):</strong>
                          <MathFormula formula="I_p = I_s \times \frac{N_s}{N_p} = 5 \times \frac{10}{500} = 5 \times 0,02 = 0,1 \text{ A}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> Tensão secundária = <strong>4,4 V</strong>, Corrente primária = <strong>0,1 A</strong>. Este é um transformador típico de fonte de alimentação.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">6</span>
                Aplicações Práticas de Transformadores
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Transmissão de Energia (Longa Distância)</h4>
                    <p className="text-slate-700 text-sm">Transformadores elevadores aumentam a tensão para transmissão de longa distância (reduzindo perdas I²R), e transformadores abaixadores reduzem a tensão para distribuição local segura.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Eletrônica de Consumo</h4>
                    <p className="text-slate-700 text-sm">Transformadores em fontes de alimentação convertem 110V/220V AC para tensões menores (ex: 12V, 5V) necessárias para eletrônicos, computadores, carregadores de celular.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Isolamento Elétrico</h4>
                    <p className="text-slate-700 text-sm">Transformadores isolam circuitos, protegendo equipamentos e pessoas de choques elétricos. Essencial em equipamentos médicos e industriais.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Ajuste de Impedância</h4>
                    <p className="text-slate-700 text-sm">Transformadores ajustam impedâncias entre circuitos para máxima transferência de potência. Usado em sistemas de áudio e RF.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOTORES ELÉTRICOS - APROFUNDADO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Motores Elétricos - Aprofundamento Completo</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Contexto Histórico e Importância
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O motor elétrico foi desenvolvido por Nikola Tesla em 1887, revolucionando a indústria. Antes dos motores elétricos, as máquinas eram acionadas por vapor ou energia hidráulica. Os motores elétricos permitiram maior precisão, controle e eficiência, transformando completamente a manufatura moderna.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Importância dos Motores Elétricos</h4>
                <p className="text-slate-700 text-sm">
                  Motores elétricos são responsáveis por aproximadamente 45% do consumo de eletricidade mundial. Estão em praticamente tudo: ventiladores, bombas, compressores, máquinas industriais, veículos elétricos, etc. Melhorar a eficiência de motores tem impacto direto na sustentabilidade energética global.
                </p>
              </div>
            </div>

            {/* Princípio de Funcionamento */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Princípio de Funcionamento: Lei de Ampère + Força de Lorentz
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um motor elétrico converte energia elétrica em energia mecânica usando dois princípios fundamentais: (1) Lei de Ampère (corrente gera campo magnético) e (2) Força de Lorentz (campo magnético exerce força sobre condutor com corrente).
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-4">Força de Lorentz em um Condutor</h4>
                <MathFormula formula="\vec{F} = I\vec{L} \times \vec{B}" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-3">Significado:</p>
                  <ul className="space-y-2">
                    <li><strong>I:</strong> Corrente no condutor (A)</li>
                    <li><strong>L:</strong> Comprimento do condutor (m)</li>
                    <li><strong>B:</strong> Campo magnético (T)</li>
                    <li><strong>F:</strong> Força resultante (N) - perpendicular a I e B</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-4">Torque em uma Bobina</h4>
                <MathFormula formula="\tau = NIAB\sin\theta" display={true} className="text-2xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-3">Onde:</p>
                  <ul className="space-y-2">
                    <li><strong>N:</strong> Número de espiras na bobina</li>
                    <li><strong>I:</strong> Corrente (A)</li>
                    <li><strong>A:</strong> Área da bobina (m²)</li>
                    <li><strong>B:</strong> Campo magnético (T)</li>
                    <li><strong>θ:</strong> Ângulo entre a normal da bobina e o campo</li>
                    <li><strong>τ:</strong> Torque (N·m) - causa rotação</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">Como Funciona a Rotação?</h4>
                <p className="text-slate-700 text-sm mb-3">
                  Quando corrente passa pela bobina em um campo magnético, a força de Lorentz atua em lados opostos da bobina em direções opostas, criando um torque. A bobina começa a girar. Para manter a rotação contínua, a corrente deve ser comutada (invertida) a cada meia volta, mantendo o torque sempre na mesma direção.
                </p>
              </div>
            </div>

            {/* Tipos de Motores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Tipos de Motores Elétricos
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Motor CC (Corrente Contínua)</h4>
                    <p className="text-slate-700 text-sm mb-2"><strong>Funcionamento:</strong> Usa comutadores (escovas) para inverter a corrente a cada meia volta, mantendo o torque.</p>
                    <p className="text-slate-700 text-sm mb-2"><strong>Vantagens:</strong> Controle preciso de velocidade e torque. Torque de partida alto.</p>
                    <p className="text-slate-700 text-sm"><strong>Desvantagens:</strong> Comutadores requerem manutenção. Mais caro. Não ideal para altas velocidades.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Motor CA (Corrente Alternada) - Síncrono</h4>
                    <p className="text-slate-700 text-sm mb-2"><strong>Funcionamento:</strong> O campo magnético gira com a frequência da AC. A bobina segue o campo (sincronismo).</p>
                    <p className="text-slate-700 text-sm mb-2"><strong>Vantagens:</strong> Velocidade constante. Sem comutadores.</p>
                    <p className="text-slate-700 text-sm"><strong>Desvantagens:</strong> Requer sincronismo. Torque de partida baixo.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Motor CA - Indução (Assíncrono)</h4>
                    <p className="text-slate-700 text-sm mb-2"><strong>Funcionamento:</strong> O rotor não segue exatamente o campo (escorregamento). Muito robusto e simples.</p>
                    <p className="text-slate-700 text-sm mb-2"><strong>Vantagens:</strong> Muito robusto. Sem comutadores. Barato. Fácil de manter.</p>
                    <p className="text-slate-700 text-sm"><strong>Aplicação:</strong> Mais usado em aplicações industriais e domésticas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passo a Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Passo a Passo: Resolver Problemas com Motores
              </h3>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 1:</span>
                    <span>Identifique o tipo de motor (CC, CA síncrono, indução)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 2:</span>
                    <span>Anote os dados: N (espiras), A (área), B (campo), I (corrente), θ (ângulo)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 3:</span>
                    <span>Calcule o torque: τ = NIAB sin(θ)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 4:</span>
                    <span>Se tiver velocidade angular ω, calcule potência: P = τω</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600 min-w-fit">Passo 5:</span>
                    <span>Calcule eficiência: η = P_mecânica / P_elétrica</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Exemplos Resolvidos
              </h3>
              
              <div className="space-y-6">
                {/* Exemplo 1: Motor CC */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 1: Torque em Motor CC
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> Um motor CC tem uma bobina com 50 espiras, área de 0,02 m², em um campo magnético de 0,5 T. A corrente é 10 A. Qual é o torque máximo?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Torque máximo ocorre quando sin(θ) = 1:</strong>
                          <MathFormula formula="\tau_{max} = NIAB = 50 \times 10 \times 0,02 \times 0,5" display={true} />
                        </li>
                        <li>
                          <strong>Calcular:</strong>
                          <MathFormula formula="\tau_{max} = 50 \times 10 \times 0,02 \times 0,5 = 5 \text{ N·m}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O torque máximo é <strong>5 N·m</strong>. Este é um torque moderado, típico de motores pequenos.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exemplo 2: Potência do Motor */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Exemplo 2: Potência Mecânica de um Motor
                  </h4>
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Problema:</strong> O motor do exemplo anterior gira a 1800 RPM. Qual é a potência mecânica desenvolvida?
                    </p>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                        <li>
                          <strong>Converter RPM para rad/s:</strong>
                          <MathFormula formula="\omega = 1800 \text{ RPM} = 1800 \times \frac{2\pi}{60} = 60\pi \text{ rad/s} \approx 188,5 \text{ rad/s}" display={true} />
                        </li>
                        <li>
                          <strong>Potência = Torque × Velocidade Angular:</strong>
                          <MathFormula formula="P = \tau \omega = 5 \times 188,5 = 942,5 \text{ W} \approx 1 \text{ kW}" display={true} />
                        </li>
                      </ol>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A potência mecânica é aproximadamente <strong>1 kW</strong>. Este é um motor típico para aplicações industriais pequenas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">6</span>
                Aplicações Práticas de Motores Elétricos
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Ventiladores e Bombas</h4>
                    <p className="text-slate-700 text-sm">Motores CA indução de baixa potência (0,1-1 kW) em ventiladores, ar condicionado, bombas de água.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Máquinas Industriais</h4>
                    <p className="text-slate-700 text-sm">Motores CA indução de alta potência (10-100 kW) em compressores, máquinas de usinagem, transportadores.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Eletrônicos de Consumo</h4>
                    <p className="text-slate-700 text-sm">Motores CC pequenos (1-100 W) em liquidificadores, furadeiras, ventiladores de computador, drones.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Veículos Elétricos</h4>
                    <p className="text-slate-700 text-sm">Motores síncronos de alta potência (50-300 kW) em carros elétricos, oferecendo alto torque e eficiência.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-blue-900 mb-2">Próximos Tópicos</h4>
          <p className="text-blue-800 text-sm">
            Agora que você compreende as aplicações práticas do eletromagnetismo, explore a <strong>Radiação Eletromagnética</strong> e como a energia é emitida e absorvida pelos materiais.
          </p>
        </div>
      </section>
    </div>
  );
}
