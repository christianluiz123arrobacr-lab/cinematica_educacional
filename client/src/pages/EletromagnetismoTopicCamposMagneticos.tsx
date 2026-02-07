import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicCamposMagneticos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
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
              <p className="text-xs text-slate-600">Campos Magnéticos</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧲 Introdução aos Campos Magnéticos</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é um Campo Magnético?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Campo magnético</strong> é uma propriedade do espaço que exerce força sobre cargas elétricas em movimento e sobre materiais magnetizados. Diferentemente do campo elétrico, que atua sobre cargas em repouso, o campo magnético é uma manifestação da eletricidade em movimento.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Toda corrente elétrica gera um campo magnético ao seu redor. Este é um dos princípios fundamentais do eletromagnetismo e forma a base para transformadores, motores elétricos, geradores e praticamente toda a tecnologia moderna.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Propriedades Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Não-existência de Monopolos Magnéticos:</strong> Não existem cargas magnéticas isoladas. Sempre há um par norte-sul, mesmo ao dividir um ímã.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Linhas de Campo:</strong> As linhas de campo magnético saem do pólo norte e entram no pólo sul, formando loops fechados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Geração por Corrente:</strong> Qualquer corrente elétrica cria um campo magnético perpendicular à direção da corrente (Regra da Mão Direita).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lei de Ampère */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Ampère</h2>
          
          <div className="space-y-8">
            {/* Formulação */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Formulação Integral
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A Lei de Ampère relaciona a circulação do campo magnético ao redor de um caminho fechado com a corrente elétrica que passa através da superfície delimitada por esse caminho. Esta é uma das equações de Maxwell e é fundamental para entender o eletromagnetismo.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 w-full">
                    <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}" display={true} className="text-xl" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                    <ul className="space-y-1">
                      <li><MathFormula formula="\vec{B}" display={false} />: Campo magnético (T - Tesla)</li>
                      <li><MathFormula formula="d\vec{l}" display={false} />: Elemento infinitesimal de comprimento</li>
                      <li><MathFormula formula="\mu_0" display={false} />: Permeabilidade do vácuo (<MathFormula formula="4\pi \times 10^{-7}" display={false} /> T·m/A)</li>
                      <li><MathFormula formula="I_{enc}" display={false} />: Corrente envolvida pelo caminho (A)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Interpretação Física
                </h4>
                <p className="text-slate-700 text-sm">
                  A integral de linha do campo magnético ao redor de um caminho fechado é proporcional à corrente que passa através da superfície delimitada. Isso significa que correntes elétricas são as fontes do campo magnético.
                </p>
              </div>
            </div>

            {/* Campo em um Fio Reto */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Campo Magnético em um Fio Reto Infinito
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Aplicando a Lei de Ampère a um fio reto infinito que transporta corrente <MathFormula formula="I" display={false} />, o campo magnético forma círculos concêntricos ao redor do fio. A magnitude do campo a uma distância <MathFormula formula="r" display={false} /> do fio é:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="B = \frac{\mu_0 I}{2\pi r}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-1">Características:</p>
                  <ul className="space-y-1">
                    <li>• O campo é inversamente proporcional à distância: <MathFormula formula="B \propto 1/r" display={false} /></li>
                    <li>• A direção é dada pela <strong>Regra da Mão Direita</strong>: polegar na direção da corrente, dedos na direção do campo</li>
                    <li>• O campo é mais intenso próximo ao fio e diminui com a distância</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Campo em Solenóide */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Campo Magnético em um Solenóide
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Um solenóide é uma bobina de fio enrolado em forma helicoidal. Quando uma corrente passa através dele, cria um campo magnético uniforme no interior. Esta é uma aplicação prática muito importante da Lei de Ampère.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="B = \mu_0 n I" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="n" display={false} />: Número de espiras por unidade de comprimento (espiras/m)</li>
                    <li><MathFormula formula="I" display={false} />: Corrente que passa pelo solenóide (A)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Atenção: Validade da Fórmula</h4>
                    <p className="text-sm text-orange-700">
                      A fórmula <MathFormula formula="B = \mu_0 n I" display={false} /> é válida apenas no interior do solenóide e longe das extremidades. Fora do solenóide, o campo é aproximadamente nulo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Força de Lorentz */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Força Magnética sobre uma Carga em Movimento
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Uma carga elétrica em movimento dentro de um campo magnético experimenta uma força perpendicular tanto à sua velocidade quanto ao campo. Esta é a força de Lorentz, que é fundamental para o funcionamento de motores elétricos e aceleradores de partículas.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F} = q(\vec{v} \times \vec{B})" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Propriedades:</p>
                  <ul className="space-y-1">
                    <li>• A força é perpendicular ao plano formado por <MathFormula formula="\vec{v}" display={false} /> e <MathFormula formula="\vec{B}" display={false} /></li>
                    <li>• A magnitude é <MathFormula formula="F = qvB\sin\theta" display={false} />, onde <MathFormula formula="\theta" display={false} /> é o ângulo entre <MathFormula formula="\vec{v}" display={false} /> e <MathFormula formula="\vec{B}" display={false} /></li>
                    <li>• Se <MathFormula formula="v" display={false} /> é paralelo a <MathFormula formula="\vec{B}" display={false} />, a força é nula</li>
                    <li>• A força não realiza trabalho (é sempre perpendicular ao movimento)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Campo em um Solenóide
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um solenóide tem 500 espiras uniformemente distribuídas em um comprimento de 0,5 m. Se uma corrente de 2 A passa através dele, qual é a magnitude do campo magnético no interior do solenóide? (Use <MathFormula formula="\mu_0 = 4\pi \times 10^{-7}" display={false} /> T·m/A)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600">
                      <li>
                        <strong>Calcular o número de espiras por unidade de comprimento:</strong>
                        <MathFormula formula="n = \frac{N}{L} = \frac{500}{0,5} = 1000 \text{ espiras/m}" display={true} />
                      </li>
                      <li>
                        <strong>Aplicar a fórmula do campo em um solenóide:</strong>
                        <MathFormula formula="B = \mu_0 n I = 4\pi \times 10^{-7} \times 1000 \times 2" display={true} />
                      </li>
                      <li>
                        <strong>Calcular o resultado:</strong>
                        <MathFormula formula="B = 8\pi \times 10^{-4} \approx 2,51 \times 10^{-3} \text{ T} = 2,51 \text{ mT}" display={true} />
                      </li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm"><strong>Resposta:</strong> O campo magnético no interior do solenóide é aproximadamente <strong>2,51 mT</strong> (militesla).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <h4 className="font-bold text-red-900 mb-2">Próximos Tópicos</h4>
          <p className="text-red-800 text-sm">
            Agora que você domina os campos magnéticos gerados por correntes, o próximo passo é entender como campos magnéticos variáveis geram campos elétricos através da <strong>Indução Eletromagnética</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
