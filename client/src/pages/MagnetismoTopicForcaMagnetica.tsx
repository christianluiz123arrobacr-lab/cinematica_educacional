import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function MagnetismoTopicForcaMagnetica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-rose-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/magnetismo">
            <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </a>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Magnetismo</h1>
              <p className="text-xs text-slate-600">Campo e Força Magnética</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧲 Campo Magnético e Força de Lorentz</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Introdução ao Magnetismo</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Magnetismo</strong> estuda os fenômenos associados a ímãs e cargas elétricas em movimento. Diferente da eletrostática, onde cargas em repouso criam campos elétricos, cargas em movimento (correntes) geram e interagem com <strong>campos magnéticos</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Neste módulo, exploraremos a natureza vetorial do campo magnético <MathFormula formula="\vec{B}" display={false} /> e como ele exerce força sobre partículas carregadas e fios condutores.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📐 O Vetor Campo Magnético</h2>
          
          <div className="space-y-8">
            {/* Definição */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Definição Operacional
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O campo magnético <MathFormula formula="\vec{B}" display={false} /> é definido em termos da força magnética <MathFormula formula="\vec{F}_m" display={false} /> exercida sobre uma carga de prova <MathFormula formula="q" display={false} /> movendo-se com velocidade <MathFormula formula="\vec{v}" display={false} />.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{F}_m = q (\vec{v} \times \vec{B})" display={true} className="text-xl" />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  Unidade no SI: Tesla (T) = Newton por (Coulomb · metro/segundo) = N/(C·m/s) = N/(A·m)
                </p>
              </div>
            </div>

            {/* Força de Lorentz */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Força de Lorentz (Completa)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Se uma partícula carregada se move em uma região onde existem simultaneamente um campo elétrico <MathFormula formula="\vec{E}" display={false} /> e um campo magnético <MathFormula formula="\vec{B}" display={false} />, a força total (Força de Lorentz) é a soma vetorial das forças elétrica e magnética:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{F} = q\vec{E} + q(\vec{v} \times \vec{B})" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-red-400 mb-1">Propriedades da Força Magnética:</p>
                    <ul className="space-y-1">
                      <li>• É sempre perpendicular a <MathFormula formula="\vec{v}" display={false} /> e a <MathFormula formula="\vec{B}" display={false} />.</li>
                      <li>• Seu módulo é <MathFormula formula="F_m = |q|vB \sin\theta" display={false} />.</li>
                      <li>• <strong>Não realiza trabalho</strong> sobre a partícula, pois <MathFormula formula="\vec{F}_m \perp \vec{v}" display={false} />. A energia cinética permanece constante (apenas a direção da velocidade muda).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Movimento de Cargas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Movimento de Cargas em Campo Uniforme
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando uma partícula carregada entra em um campo magnético uniforme <MathFormula formula="\vec{B}" display={false} /> com velocidade <MathFormula formula="\vec{v}" display={false} /> perpendicular a <MathFormula formula="\vec{B}" display={false} />, ela descreve um <strong>Movimento Circular Uniforme (MCU)</strong>.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-slate-700 mb-2">A força magnética atua como força centrípeta:</p>
                <MathFormula formula="F_m = F_{cp} \Rightarrow |q|vB = \frac{mv^2}{R}" display={true} />
                <p className="text-slate-700 mt-4 mb-2">Raio da trajetória (Raio de Larmor):</p>
                <MathFormula formula="R = \frac{mv}{|q|B}" display={true} />
                <p className="text-slate-700 mt-4 mb-2">Período do movimento (independente da velocidade!):</p>
                <MathFormula formula="T = \frac{2\pi R}{v} = \frac{2\pi m}{|q|B}" display={true} />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Movimento Helicoidal
                </h4>
                <p className="text-slate-700 text-sm mb-2">
                  Se a velocidade <MathFormula formula="\vec{v}" display={false} /> não for perpendicular a <MathFormula formula="\vec{B}" display={false} />, decompomos <MathFormula formula="\vec{v}" display={false} /> em componentes paralela (<MathFormula formula="v_{\parallel}" display={false} />) e perpendicular (<MathFormula formula="v_{\perp}" display={false} />) ao campo.
                </p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• <strong>Eixo paralelo:</strong> MRU com velocidade <MathFormula formula="v_{\parallel} = v \cos\theta" display={false} />.</li>
                  <li>• <strong>Plano perpendicular:</strong> MCU com raio <MathFormula formula="R = \frac{mv_{\perp}}{|q|B} = \frac{mv \sin\theta}{|q|B}" display={false} />.</li>
                  <li>• <strong>Trajetória resultante:</strong> Hélice cilíndrica.</li>
                  <li>• <strong>Passo da hélice:</strong> <MathFormula formula="p = v_{\parallel} T = \frac{2\pi m v \cos\theta}{|q|B}" display={false} />.</li>
                </ul>
              </div>
            </div>

            {/* Força sobre Correntes */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Força Magnética sobre Fios Condutores
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Uma corrente elétrica é um fluxo de cargas. A força magnética resultante sobre um fio condutor de comprimento <MathFormula formula="L" display={false} /> percorrido por corrente <MathFormula formula="i" display={false} /> em um campo uniforme é a soma das forças sobre os portadores individuais.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\vec{F}_m = i (\vec{L} \times \vec{B})" display={true} />
                <p className="text-sm text-slate-600 mt-2 text-center">
                  Onde <MathFormula formula="\vec{L}" display={false} /> é um vetor com módulo igual ao comprimento do fio e sentido da corrente convencional.
                </p>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido (Nível ITA)
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 text-sm">
                  <strong>Problema:</strong> Um elétron de massa <MathFormula formula="m" display={false} /> e carga <MathFormula formula="-e" display={false} /> entra em uma região com campos elétrico <MathFormula formula="\vec{E} = E \hat{j}" display={false} /> e magnético <MathFormula formula="\vec{B} = B \hat{k}" display={false} /> uniformes e constantes. Determine a velocidade <MathFormula formula="\vec{v}" display={false} /> para que o elétron atravesse a região em linha reta (sem desvio).
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>
                      <strong>Condição de Movimento Retilíneo:</strong> A força resultante deve ser nula (<MathFormula formula="\vec{F}_{res} = \vec{0}" display={false} />).
                    </li>
                    <li>
                      <strong>Força de Lorentz:</strong> <MathFormula formula="\vec{F} = -e\vec{E} + (-e)(\vec{v} \times \vec{B}) = \vec{0}" display={false} />.
                      <br/>
                      <MathFormula formula="-e\vec{E} - e(\vec{v} \times \vec{B}) = \vec{0} \Rightarrow \vec{E} + \vec{v} \times \vec{B} = \vec{0} \Rightarrow \vec{E} = -(\vec{v} \times \vec{B}) = \vec{B} \times \vec{v}" display={false} />.
                    </li>
                    <li>
                      <strong>Análise Vetorial:</strong> Temos <MathFormula formula="\vec{E} = E \hat{j}" display={false} /> e <MathFormula formula="\vec{B} = B \hat{k}" display={false} />. Para que a força magnética cancele a elétrica (que aponta em <MathFormula formula="-\hat{j}" display={false} /> pois a carga é negativa), a força magnética deve apontar em <MathFormula formula="+\hat{j}" display={false} />.
                      <br/>
                      A força elétrica é <MathFormula formula="\vec{F}_E = -eE\hat{j}" display={false} />. A força magnética é <MathFormula formula="\vec{F}_m = -e(\vec{v} \times B\hat{k})" display={false} />.
                      <br/>
                      Para <MathFormula formula="\vec{F}_m" display={false} /> ser oposta a <MathFormula formula="\vec{F}_E" display={false} />, precisamos que <MathFormula formula="\vec{v}" display={false} /> seja perpendicular a <MathFormula formula="\vec{B}" display={false} /> e <MathFormula formula="\vec{E}" display={false} />. Vamos testar <MathFormula formula="\vec{v} = v \hat{i}" display={false} />.
                      <br/>
                      <MathFormula formula="\vec{v} \times \vec{B} = (v\hat{i}) \times (B\hat{k}) = vB(\hat{i} \times \hat{k}) = vB(-\hat{j}) = -vB\hat{j}" display={false} />.
                      <br/>
                      <MathFormula formula="\vec{F}_m = -e(-vB\hat{j}) = +evB\hat{j}" display={false} />.
                    </li>
                    <li>
                      <strong>Equilíbrio:</strong> <MathFormula formula="\vec{F}_E + \vec{F}_m = -eE\hat{j} + evB\hat{j} = 0 \Rightarrow eE = evB \Rightarrow v = \frac{E}{B}" display={false} />.
                    </li>
                    <li>
                      <strong>Resposta:</strong> A velocidade deve ser <MathFormula formula="\vec{v} = \frac{E}{B} \hat{i}" display={false} />. Este dispositivo é conhecido como <strong>Seletor de Velocidades</strong>.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
