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
                Neste tópico, exploraremos as aplicações mais importantes: transformadores, motores elétricos e geradores. Compreender como esses dispositivos funcionam é essencial para qualquer engenheiro.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Principais Aplicações</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Transformadores:</strong> Convertem tensões e correntes em sistemas de potência.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Motores Elétricos:</strong> Convertem energia elétrica em energia mecânica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Geradores:</strong> Convertem energia mecânica em energia elétrica.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transformadores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Transformadores</h2>
          
          <div className="space-y-8">
            {/* Funcionamento */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Princípio de Funcionamento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um transformador consiste em duas bobinas (primária e secundária) enroladas em torno de um núcleo de ferro. Quando uma tensão alternada é aplicada à bobina primária, cria um campo magnético variável que induz uma tensão na bobina secundária.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Equação de Transformação</h4>
                <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p}" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="V_p, V_s" display={false} />: Tensões primária e secundária (V)</li>
                    <li><MathFormula formula="N_p, N_s" display={false} />: Número de espiras primária e secundária</li>
                    <li><strong>Transformador elevador:</strong> <MathFormula formula="N_s > N_p" display={false} /> (aumenta tensão, diminui corrente)</li>
                    <li><strong>Transformador abaixador:</strong> <MathFormula formula="N_s < N_p" display={false} /> (diminui tensão, aumenta corrente)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Conservação de Potência
                </h4>
                <p className="text-slate-700 text-sm">
                  Em um transformador ideal (sem perdas), a potência é conservada:
                </p>
                <MathFormula formula="P_p = P_s \Rightarrow V_p I_p = V_s I_s" display={true} className="mt-2" />
              </div>
            </div>

            {/* Aplicações */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Aplicações de Transformadores
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Transformadores são essenciais em sistemas de potência e eletrônica:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Transmissão de Energia</h4>
                    <p className="text-slate-700 text-sm">Transformadores elevadores aumentam a tensão para transmissão de longa distância (reduzindo perdas), e transformadores abaixadores reduzem a tensão para distribuição local.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Eletrônica de Consumo</h4>
                    <p className="text-slate-700 text-sm">Transformadores em fontes de alimentação convertem 110V/220V AC para tensões menores (ex: 12V) necessárias para eletrônicos.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Isolamento Elétrico</h4>
                    <p className="text-slate-700 text-sm">Transformadores isolam circuitos, protegendo equipamentos e pessoas de choques elétricos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motores Elétricos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Motores Elétricos</h2>
          
          <div className="space-y-8">
            {/* Princípio */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Princípio de Funcionamento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um motor elétrico converte energia elétrica em energia mecânica usando a força magnética sobre um condutor que transporta corrente. A força de Lorentz sobre uma bobina em um campo magnético gera um torque que faz a bobina girar.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-3">Força e Torque</h4>
                <MathFormula formula="\vec{F} = I\vec{L} \times \vec{B}" display={true} className="text-lg mb-4" />
                <MathFormula formula="\tau = NIAB\sin\theta" display={true} className="text-lg mb-4" />
                <div className="text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="N" display={false} />: Número de espiras na bobina</li>
                    <li><MathFormula formula="I" display={false} />: Corrente (A)</li>
                    <li><MathFormula formula="A" display={false} />: Área da bobina (m²)</li>
                    <li><MathFormula formula="B" display={false} />: Campo magnético (T)</li>
                    <li><MathFormula formula="\theta" display={false} />: Ângulo entre a normal da bobina e o campo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Torque Máximo</h4>
                    <p className="text-sm text-orange-700">
                      O torque é máximo quando <MathFormula formula="\sin\theta = 1" display={false} />, ou seja, quando o plano da bobina é paralelo ao campo magnético.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tipos de Motores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Tipos de Motores Elétricos
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Motor CC (Corrente Contínua)</h4>
                    <p className="text-slate-700 text-sm">Usa comutadores para manter o torque constante. Oferece controle preciso de velocidade e torque. Usado em aplicações que requerem variação de velocidade.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Motor CA (Corrente Alternada)</h4>
                    <p className="text-slate-700 text-sm">Mais simples e robusto que motores CC. Não requer comutadores. Muito usado em aplicações industriais e domésticas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geradores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Geradores Elétricos</h2>
          
          <div className="space-y-8">
            {/* Princípio */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Princípio de Funcionamento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um gerador elétrico converte energia mecânica em energia elétrica usando indução eletromagnética. Quando uma bobina gira em um campo magnético, a variação do fluxo magnético induz uma fem (força eletromotriz) que gera corrente elétrica.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Fem Induzida</h4>
                <MathFormula formula="\mathcal{E} = NAB\omega \sin(\omega t)" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="N" display={false} />: Número de espiras</li>
                    <li><MathFormula formula="A" display={false} />: Área da bobina (m²)</li>
                    <li><MathFormula formula="B" display={false} />: Campo magnético (T)</li>
                    <li><MathFormula formula="\omega" display={false} />: Velocidade angular (rad/s)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Fem Máxima
                </h4>
                <p className="text-slate-700 text-sm">
                  A fem máxima é <MathFormula formula="\mathcal{E}_{max} = NAB\omega" display={false} />, que ocorre quando <MathFormula formula="\sin(\omega t) = 1" display={false} />.
                </p>
              </div>
            </div>

            {/* Tipos de Geradores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Tipos de Geradores
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Gerador CA (Alternador)</h4>
                    <p className="text-slate-700 text-sm">Produz corrente alternada. Sem comutadores, é mais simples e robusto. Usado em usinas de energia elétrica.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Gerador CC</h4>
                    <p className="text-slate-700 text-sm">Produz corrente contínua usando comutadores. Usado em aplicações que requerem CC, como carregamento de baterias.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Gerador AC
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um gerador AC tem uma bobina com 100 espiras, área de 0,1 m², girando em um campo magnético de 0,5 T a uma frequência de 60 Hz. Qual é a fem máxima gerada?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Calcular a velocidade angular:</strong>
                        <MathFormula formula="\omega = 2\pi f = 2\pi \times 60 = 120\pi \text{ rad/s}" display={true} />
                      </li>
                      <li>
                        <strong>Calcular a fem máxima:</strong>
                        <MathFormula formula="\mathcal{E}_{max} = NAB\omega = 100 \times 0,1 \times 0,5 \times 120\pi" display={true} />
                      </li>
                      <li>
                        <strong>Resultado:</strong>
                        <MathFormula formula="\mathcal{E}_{max} = 600\pi \approx 1884 \text{ V}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A fem máxima gerada é aproximadamente <strong>1884 V</strong> ou <strong>1,88 kV</strong>.</p>
                    </div>
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
