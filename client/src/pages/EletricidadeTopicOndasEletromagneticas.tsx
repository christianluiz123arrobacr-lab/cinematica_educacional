import { ArrowLeft, Zap, Info, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicOndasEletromagneticas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Ondas Eletromagnéticas</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Introdução a Ondas Eletromagnéticas</h2>
          
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              As <strong>ondas eletromagnéticas</strong> representam um dos conceitos mais fundamentais da Física Clássica, unificando os fenômenos elétricos e magnéticos em uma descrição coerente. Diferentemente das ondas mecânicas, que requerem um meio material para se propagar, as ondas eletromagnéticas propagam-se no vácuo transportando energia sob a forma de campos elétricos e magnéticos oscilantes e acoplados.
            </p>

            <p>
              A existência teórica de ondas eletromagnéticas foi prevista por James Clerk Maxwell em 1865 através de suas quatro equações fundamentais. Maxwell demonstrou que a velocidade de propagação dessas ondas no vácuo era exatamente a velocidade da luz, levando à conclusão revolucionária de que a luz é uma onda eletromagnética. Essa previsão foi confirmada experimentalmente por Heinrich Hertz em 1887, que gerou e detectou ondas de rádio em laboratório.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Características Fundamentais</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Natureza Transversal:</strong> Os campos elétrico <MathFormula formula="\vec{E}" display={false} /> e magnético <MathFormula formula="\vec{B}" display={false} /> oscilam perpendicularmente à direção de propagação e um ao outro.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Ortogonalidade Mútua:</strong> <MathFormula formula="\vec{E} \perp \vec{B} \perp \vec{k}" display={false} />, onde <MathFormula formula="\vec{k}" display={false} /> é o vetor de onda.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Velocidade Constante no Vácuo:</strong> <MathFormula formula="c = 3 \times 10^8 \, m/s" display={false} />, independente da frequência ou amplitude.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Transporte de Energia:</strong> Descrito pelo vetor de Poynting <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={false} />.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Equações de Maxwell */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Equações de Maxwell e Derivação de Ondas</h2>
          
          <div className="space-y-8">
            {/* As Quatro Equações */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                As Quatro Equações de Maxwell
              </h3>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                As equações de Maxwell na forma integral descrevem como campos elétricos e magnéticos se relacionam com cargas e correntes, e como variam no espaço e tempo:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-3">Lei de Gauss (Eletrostática)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    O fluxo do campo elétrico através de uma superfície fechada é proporcional à carga elétrica encerrada:
                  </p>
                  <div className="bg-white p-3 rounded border border-blue-200 mb-3">
                    <MathFormula formula="\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Forma diferencial:</strong> <MathFormula formula="\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}" display={false} />
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg p-5">
                  <h4 className="font-bold text-purple-900 mb-3">Lei de Gauss para o Magnetismo</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Não existem monopólos magnéticos. O fluxo de campo magnético através de qualquer superfície fechada é sempre zero:
                  </p>
                  <div className="bg-white p-3 rounded border border-purple-200 mb-3">
                    <MathFormula formula="\oint_S \vec{B} \cdot d\vec{A} = 0" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Forma diferencial:</strong> <MathFormula formula="\nabla \cdot \vec{B} = 0" display={false} />
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-lg p-5">
                  <h4 className="font-bold text-green-900 mb-3">Lei de Faraday (Indução Eletromagnética)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Uma variação temporal no fluxo magnético induz um campo elétrico. A circulação do campo elétrico ao longo de um caminho fechado iguala o negativo da taxa de variação do fluxo magnético:
                  </p>
                  <div className="bg-white p-3 rounded border border-green-200 mb-3">
                    <MathFormula formula="\oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Forma diferencial:</strong> <MathFormula formula="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" display={false} />
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-r-lg p-5">
                  <h4 className="font-bold text-orange-900 mb-3">Lei de Ampère-Maxwell</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Uma corrente elétrica ou uma variação temporal no fluxo elétrico gera um campo magnético. A circulação do campo magnético ao longo de um caminho fechado iguala a corrente encerrada mais a corrente de deslocamento:
                  </p>
                  <div className="bg-white p-3 rounded border border-orange-200 mb-3">
                    <MathFormula formula="\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Forma diferencial:</strong> <MathFormula formula="\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={false} />
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5" />
                  O Termo de Deslocamento de Maxwell
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  O termo <MathFormula formula="\mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={false} /> (corrente de deslocamento) foi a contribuição crucial de Maxwell que permitiu a previsão teórica de ondas eletromagnéticas. Sem este termo, as equações de Maxwell não seriam simétricas e não permitiriam soluções ondulatórias. Esse termo representa a capacidade do campo elétrico variável de gerar um campo magnético, mesmo na ausência de corrente elétrica real.
                </p>
              </div>
            </div>

            {/* Derivação da Equação de Onda */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Derivação da Equação de Onda Eletromagnética
              </h3>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Para derivar a equação de onda, consideramos uma região do espaço sem cargas (<MathFormula formula="\rho = 0" display={false} />) e sem correntes (<MathFormula formula="\vec{J} = 0" display={false} />). As equações de Maxwell reduzem-se a:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 space-y-3">
                <p className="text-sm text-slate-700"><MathFormula formula="\nabla \cdot \vec{E} = 0" display={false} /></p>
                <p className="text-sm text-slate-700"><MathFormula formula="\nabla \cdot \vec{B} = 0" display={false} /></p>
                <p className="text-sm text-slate-700"><MathFormula formula="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" display={false} /></p>
                <p className="text-sm text-slate-700"><MathFormula formula="\nabla \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}" display={false} /></p>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Aplicando o operador rotacional à Lei de Faraday:
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6">
                <MathFormula formula="\nabla \times (\nabla \times \vec{E}) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})" display={true} />
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Usando a identidade vetorial <MathFormula formula="\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}" display={false} /> e substituindo <MathFormula formula="\nabla \times \vec{B}" display={false} />:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <p className="text-sm text-slate-300 mb-3">Como <MathFormula formula="\nabla \cdot \vec{E} = 0" display={false} />, obtemos:</p>
                <MathFormula formula="-\nabla^2 \vec{E} = -\mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-yellow-400 font-semibold mb-3">Equação de Onda para o Campo Elétrico:</p>
                  <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-2xl" />
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                De forma análoga, aplicando o operador rotacional à Lei de Ampère-Maxwell, obtemos a equação de onda para o campo magnético:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}" display={true} className="text-2xl" />
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Essas são as equações de onda tridimensionais. A solução geral para uma onda plana propagando-se na direção <MathFormula formula="\hat{k}" display={false} /> é:
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3 mb-6">
                <div>
                  <p className="text-sm text-slate-700 font-bold mb-2">Campo Elétrico:</p>
                  <MathFormula formula="\vec{E}(\vec{r}, t) = \vec{E}_0 \cos(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} />
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-bold mb-2">Campo Magnético:</p>
                  <MathFormula formula="\vec{B}(\vec{r}, t) = \vec{B}_0 \cos(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} />
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Substituindo a solução na equação de onda, obtemos a <strong>relação de dispersão</strong>:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <p className="text-sm text-slate-300 mb-3">A relação entre frequência angular ω e número de onda k:</p>
                <MathFormula formula="\omega^2 = \frac{1}{\mu_0 \epsilon_0} k^2" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-yellow-400 font-semibold mb-3">Velocidade de Propagação:</p>
                  <MathFormula formula="v = \frac{\omega}{k} = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = c \approx 3 \times 10^8 \, m/s" display={true} className="text-xl" />
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">Significado Físico</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  A velocidade de propagação das ondas eletromagnéticas no vácuo depende apenas das constantes fundamentais do eletromagnetismo: a permeabilidade magnética <MathFormula formula="\mu_0" display={false} /> e a permissividade elétrica <MathFormula formula="\epsilon_0" display={false} />. Essa velocidade é exatamente a velocidade da luz, confirmando que a luz é uma onda eletromagnética!
                </p>
              </div>
            </div>

            {/* Propriedades das Ondas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Propriedades das Ondas Eletromagnéticas
              </h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Relação entre Campos E e B</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    Para uma onda plana propagando-se na direção <MathFormula formula="\hat{k}" display={false} />, os campos elétrico e magnético estão relacionados por:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
                    <MathFormula formula="\vec{B} = \frac{\vec{k} \times \vec{E}}{\omega} = \frac{1}{c} \hat{k} \times \vec{E}" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    Os campos oscilam em fase, com amplitudes relacionadas por <MathFormula formula="E_0 = c B_0" display={false} />.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Comprimento de Onda, Frequência e Período</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    Para uma onda eletromagnética, a relação fundamental entre comprimento de onda λ, frequência f e velocidade c é:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3 space-y-2">
                    <div><MathFormula formula="c = \lambda f = \frac{\lambda}{T}" display={true} /></div>
                    <div className="text-xs text-slate-600">onde T é o período da oscilação.</div>
                  </div>
                  <p className="text-xs text-slate-600">
                    Ondas com maior frequência têm menor comprimento de onda. A frequência determina a energia da onda.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Vetor de Poynting e Intensidade</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    O vetor de Poynting <MathFormula formula="\vec{S}" display={false} /> representa a densidade de fluxo de energia (potência por unidade de área) transportada pela onda eletromagnética:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
                    <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={true} />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    A intensidade (potência média por unidade de área) é:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
                    <MathFormula formula="I = \langle S \rangle = \frac{1}{2} \epsilon_0 c E_0^2 = \frac{1}{2\mu_0 c} B_0^2" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    A intensidade é proporcional ao quadrado da amplitude do campo elétrico.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Densidade de Energia</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    A densidade de energia eletromagnética é a soma das densidades de energia elétrica e magnética:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3 space-y-2">
                    <div><MathFormula formula="u = u_E + u_B = \frac{1}{2}\epsilon_0 E^2 + \frac{1}{2\mu_0} B^2" display={true} /></div>
                    <div className="text-xs text-slate-600">Para uma onda eletromagnética, <MathFormula formula="u_E = u_B" display={false} />, ou seja, a energia está igualmente distribuída entre os campos.</div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-8">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031598027/MgJADzxhMoaCQwqO.jpg" 
                  alt="Ondas Eletromagnéticas - Espectro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Espectro Eletromagnético */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Espectro Eletromagnético
              </h3>

              <p className="text-slate-700 mb-6 leading-relaxed">
                O espectro eletromagnético compreende todas as frequências possíveis de radiação eletromagnética, ordenadas da menor para a maior frequência (ou maior para menor comprimento de onda). Cada região do espectro possui características e aplicações distintas:
              </p>

              <div className="space-y-3 mb-8">
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded-r-lg p-4">
                  <p className="font-bold text-red-800 mb-1">Ondas de Rádio</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="f < 10^9 \, Hz" display={false} />, <MathFormula formula="\lambda > 0,3 \, mm" display={false} /></p>
                  <p className="text-xs text-slate-600">Usadas em radiodifusão, televisão, comunicações wireless. Geradas por circuitos oscilantes e antenas.</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-r-lg p-4">
                  <p className="font-bold text-orange-800 mb-1">Micro-ondas</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="10^9 - 10^{12} \, Hz" display={false} />, <MathFormula formula="0,3 \, mm - 0,3 \, m" display={false} /></p>
                  <p className="text-xs text-slate-600">Usadas em fornos de micro-ondas, radares, comunicações por satélite. Comprimento de onda comparável a objetos macroscópicos.</p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 rounded-r-lg p-4">
                  <p className="font-bold text-yellow-800 mb-1">Radiação Infravermelha</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="10^{12} - 4 \times 10^{14} \, Hz" display={false} />, <MathFormula formula="0,7 - 1000 \, \mu m" display={false} /></p>
                  <p className="text-xs text-slate-600">Radiação térmica. Detectada como calor. Usada em câmeras térmicas e sensores infravermelhos.</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-lg p-4">
                  <p className="font-bold text-green-800 mb-1">Luz Visível</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="4 \times 10^{14} - 8 \times 10^{14} \, Hz" display={false} />, <MathFormula formula="400 - 700 \, nm" display={false} /></p>
                  <p className="text-xs text-slate-600">Única região do espectro detectada pelo olho humano. Cores variam de violeta (menor λ) a vermelho (maior λ).</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg p-4">
                  <p className="font-bold text-blue-800 mb-1">Radiação Ultravioleta</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="8 \times 10^{14} - 10^{17} \, Hz" display={false} />, <MathFormula formula="1 - 400 \, nm" display={false} /></p>
                  <p className="text-xs text-slate-600">Causa queimaduras solares. Bloqueada pela camada de ozônio. Usada em esterilização e fluorescência.</p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 rounded-r-lg p-4">
                  <p className="font-bold text-indigo-800 mb-1">Raios X</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="10^{17} - 10^{19} \, Hz" display={false} />, <MathFormula formula="0,01 - 10 \, nm" display={false} /></p>
                  <p className="text-xs text-slate-600">Penetram tecidos moles. Usados em radiografia médica. Gerados por desaceleração de elétrons de alta energia.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg p-4">
                  <p className="font-bold text-purple-800 mb-1">Raios Gama</p>
                  <p className="text-xs text-slate-700 mb-2"><MathFormula formula="f > 10^{19} \, Hz" display={false} />, <MathFormula formula="\lambda < 0,01 \, nm" display={false} /></p>
                  <p className="text-xs text-slate-600">Radiação de alta energia emitida por núcleos radioativos. Altamente penetrante e ionizante. Perigosa para tecidos vivos.</p>
                </div>
              </div>
            </div>

            {/* Polarização */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Polarização de Ondas Eletromagnéticas
              </h3>

              <p className="text-slate-700 mb-6 leading-relaxed">
                A <strong>polarização</strong> descreve a orientação e a variação temporal do vetor campo elétrico <MathFormula formula="\vec{E}" display={false} /> em relação à direção de propagação. É uma propriedade fundamental que distingue diferentes tipos de ondas eletromagnéticas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Polarização Linear</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    O vetor campo elétrico oscila em um plano fixo que contém a direção de propagação. A ponta do vetor <MathFormula formula="\vec{E}" display={false} /> traça uma linha reta no espaço. Matematicamente:
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
                    <MathFormula formula="\vec{E}(z,t) = E_0 \hat{x} \cos(kz - \omega t)" display={true} />
                  </div>
                  <p className="text-xs text-slate-600">
                    A maioria das ondas eletromagnéticas naturais é não-polarizada, mas pode ser polarizada usando filtros polarizadores.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Polarização Circular</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    O vetor campo elétrico mantém magnitude constante mas rotaciona continuamente. A ponta do vetor traça um círculo. Pode ser dextrorrotativa (sentido horário) ou levorrotativa (sentido anti-horário):
                  </p>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
                    <MathFormula formula="\vec{E}(z,t) = E_0 (\hat{x} \cos(kz - \omega t) \pm \hat{y} \sin(kz - \omega t))" display={true} />
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Polarização Elíptica</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    Caso geral onde o vetor campo elétrico tem componentes em duas direções perpendiculares com amplitudes diferentes e fases diferentes. A ponta do vetor traça uma elipse.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-800 mb-3">Lei de Malus</h4>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    Quando luz polarizada linearmente passa através de um polarizador, a intensidade transmitida depende do ângulo θ entre a polarização da luz incidente e o eixo de transmissão do polarizador:
                  </p>
                  <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-3">
                    <MathFormula formula="I = I_0 \cos^2(\theta)" display={true} className="text-xl" />
                  </div>
                  <p className="text-xs text-slate-600">
                    Quando θ = 0°, toda a luz é transmitida. Quando θ = 90°, nenhuma luz é transmitida. Quando θ = 45°, metade da intensidade é transmitida.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Exemplo Resolvido (Nível ITA)
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="text-slate-700 text-sm mb-4">
                    <strong>Enunciado:</strong> Uma onda eletromagnética plana se propaga no vácuo com comprimento de onda <MathFormula formula="\lambda = 500 \, nm" display={false} /> (luz verde). Determine:
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2 ml-4 mb-4">
                    <li><strong>a)</strong> A frequência da onda</li>
                    <li><strong>b)</strong> A frequência angular (ω)</li>
                    <li><strong>c)</strong> O número de onda (k)</li>
                    <li><strong>d)</strong> A amplitude do campo magnético se <MathFormula formula="E_0 = 1000 \, V/m" display={false} /></li>
                    <li><strong>e)</strong> A intensidade média da onda</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="text-slate-700 text-sm font-bold mb-3">Resolução:</p>
                  
                  <div className="space-y-4 text-sm text-slate-700">
                    <div>
                      <p className="font-bold text-green-800">a) Frequência:</p>
                      <p className="ml-4 mt-1"><MathFormula formula="f = \frac{c}{\lambda} = \frac{3 \times 10^8 \, m/s}{500 \times 10^{-9} \, m} = 6 \times 10^{14} \, Hz" display={false} /></p>
                    </div>

                    <div>
                      <p className="font-bold text-green-800">b) Frequência angular:</p>
                      <p className="ml-4 mt-1"><MathFormula formula="\omega = 2\pi f = 2\pi \times 6 \times 10^{14} = 3,77 \times 10^{15} \, rad/s" display={false} /></p>
                    </div>

                    <div>
                      <p className="font-bold text-green-800">c) Número de onda:</p>
                      <p className="ml-4 mt-1"><MathFormula formula="k = \frac{2\pi}{\lambda} = \frac{2\pi}{500 \times 10^{-9}} = 1,26 \times 10^7 \, m^{-1}" display={false} /></p>
                    </div>

                    <div>
                      <p className="font-bold text-green-800">d) Amplitude do campo magnético:</p>
                      <p className="ml-4 mt-1">Usando a relação <MathFormula formula="E_0 = c B_0" display={false} />:</p>
                      <p className="ml-4 mt-1"><MathFormula formula="B_0 = \frac{E_0}{c} = \frac{1000}{3 \times 10^8} = 3,33 \times 10^{-6} \, T = 3,33 \, \mu T" display={false} /></p>
                    </div>

                    <div>
                      <p className="font-bold text-green-800">e) Intensidade média:</p>
                      <p className="ml-4 mt-1"><MathFormula formula="I = \frac{1}{2} \epsilon_0 c E_0^2 = \frac{1}{2} \times 8,85 \times 10^{-12} \times 3 \times 10^8 \times (1000)^2" display={false} /></p>
                      <p className="ml-4 mt-1"><MathFormula formula="I = 1,33 \times 10^3 \, W/m^2 = 1,33 \, kW/m^2" display={false} /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusão</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            As ondas eletromagnéticas representam uma unificação elegante dos fenômenos elétricos e magnéticos, revelando que luz, ondas de rádio e radiação são todas manifestações do mesmo fenômeno fundamental. A previsão teórica de Maxwell e a confirmação experimental de Hertz marcaram um ponto de virada na Física, levando ao desenvolvimento de tecnologias que transformaram a civilização moderna.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Compreender as ondas eletromagnéticas é essencial para dominar tópicos avançados como Óptica, Relatividade Restrita e Mecânica Quântica, consolidando uma base sólida para estudos posteriores em Física.
          </p>
        </div>
      </section>
    </div>
  );
}
