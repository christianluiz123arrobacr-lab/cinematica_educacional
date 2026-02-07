import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicInducaoEletromagnetica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
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
              <p className="text-xs text-slate-600">Indução Eletromagnética</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Indução Eletromagnética</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Indução Eletromagnética?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Indução eletromagnética</strong> é o fenômeno pelo qual um campo magnético variável no tempo induz uma força eletromotriz (fem) em um circuito. Este é um dos conceitos mais importantes da física, pois é a base para o funcionamento de geradores elétricos, transformadores e praticamente toda a tecnologia de transmissão de energia.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Descoberta por Michael Faraday em 1831, a indução eletromagnética mostra que eletricidade e magnetismo são dois aspectos do mesmo fenômeno: o eletromagnetismo.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Fluxo Magnético:</strong> Medida da quantidade de campo magnético que passa através de uma superfície.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Força Eletromotriz Induzida:</strong> Tensão gerada pela variação do fluxo magnético.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Lei de Lenz:</strong> A corrente induzida sempre se opõe à variação que a causa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lei de Faraday */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Faraday da Indução</h2>
          
          <div className="space-y-8">
            {/* Fluxo Magnético */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Fluxo Magnético
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O fluxo magnético é uma medida da quantidade de campo magnético que atravessa uma superfície. É definido como o produto do campo magnético pela área perpendicular a ele.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\Phi_B" display={false} />: Fluxo magnético (Wb - Weber)</li>
                      <li><MathFormula formula="B" display={false} />: Campo magnético (T)</li>
                      <li><MathFormula formula="A" display={false} />: Área da superfície (m²)</li>
                      <li><MathFormula formula="\theta" display={false} />: Ângulo entre <MathFormula formula="\vec{B}" display={false} /> e a normal à superfície</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lei de Faraday */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Formulação da Lei de Faraday
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Faraday estabelece que a força eletromotriz (fem) induzida em um circuito é igual ao negativo da taxa de variação do fluxo magnético através do circuito. Esta é uma das equações de Maxwell mais importantes.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\mathcal{E} = -\frac{d\Phi_B}{dt}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Interpretação:</p>
                  <ul className="space-y-1">
                    <li>• A fem induzida é proporcional à taxa de variação do fluxo magnético</li>
                    <li>• O sinal negativo indica a direção da fem (Lei de Lenz)</li>
                    <li>• Se o fluxo aumenta, a fem se opõe a esse aumento</li>
                    <li>• Se o fluxo diminui, a fem tenta manter o fluxo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Lei de Lenz
                </h4>
                <p className="text-slate-700 text-sm">
                  A <strong>Lei de Lenz</strong> afirma que a corrente induzida sempre flui em uma direção tal que seu campo magnético se opõe à variação do fluxo magnético que a causou. Este é um princípio de conservação de energia: a natureza resiste às mudanças.
                </p>
              </div>
            </div>

            {/* Fem em um Condutor Móvel */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Fem Induzida em um Condutor Móvel
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando um condutor de comprimento <MathFormula formula="L" display={false} /> se move com velocidade <MathFormula formula="v" display={false} /> perpendicular a um campo magnético <MathFormula formula="B" display={false} />, uma fem é induzida entre suas extremidades.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\mathcal{E} = BLv" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Aplicação Prática:</p>
                  <p>Esta é a fórmula fundamental para geradores elétricos. Quando uma bobina gira em um campo magnético, a variação do fluxo induz uma fem que pode ser usada para gerar corrente elétrica.</p>
                </div>
              </div>
            </div>

            {/* Transformadores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Transformadores
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um transformador é um dispositivo que usa indução eletromagnética para converter tensões e correntes alternadas. Consiste em duas bobinas (primária e secundária) enroladas em torno de um núcleo de ferro.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="V_p, V_s" display={false} />: Tensões primária e secundária</li>
                    <li><MathFormula formula="N_p, N_s" display={false} />: Número de espiras primária e secundária</li>
                    <li><MathFormula formula="I_p, I_s" display={false} />: Correntes primária e secundária</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Conservação de Energia</h4>
                    <p className="text-sm text-orange-700">
                      Em um transformador ideal (sem perdas), a potência é conservada: <MathFormula formula="P_p = P_s" display={false} />, ou seja, <MathFormula formula="V_p I_p = V_s I_s" display={false} />. Se aumentamos a tensão, diminuímos a corrente proporcionalmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Transformador
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um transformador tem 100 espiras na bobina primária e 500 espiras na bobina secundária. A tensão primária é 120 V. Qual é a tensão secundária? Se a corrente primária é 5 A, qual é a corrente secundária (assumindo transformador ideal)?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Calcular a tensão secundária:</strong>
                        <MathFormula formula="\frac{V_s}{V_p} = \frac{N_s}{N_p}" display={true} />
                        <MathFormula formula="V_s = V_p \times \frac{N_s}{N_p} = 120 \times \frac{500}{100} = 120 \times 5 = 600 \text{ V}" display={true} />
                      </li>
                      <li>
                        <strong>Calcular a corrente secundária:</strong>
                        <MathFormula formula="I_s = I_p \times \frac{N_p}{N_s} = 5 \times \frac{100}{500} = 5 \times 0,2 = 1 \text{ A}" display={true} />
                      </li>
                      <li>
                        <strong>Verificar conservação de potência:</strong>
                        <MathFormula formula="P_p = V_p I_p = 120 \times 5 = 600 \text{ W}" display={true} />
                        <MathFormula formula="P_s = V_s I_s = 600 \times 1 = 600 \text{ W}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> A tensão secundária é <strong>600 V</strong> e a corrente secundária é <strong>1 A</strong>. A potência é conservada em 600 W.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-orange-900 mb-2">Próximos Tópicos</h4>
          <p className="text-orange-800 text-sm">
            Agora que você entende como campos magnéticos variáveis geram campos elétricos, o próximo passo é aprender as <strong>Equações de Maxwell</strong>, que unificam toda a teoria do eletromagnetismo.
          </p>
        </div>
      </section>
    </div>
  );
}
