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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📡 Introdução a Ondas Eletromagnéticas</h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que são Ondas Eletromagnéticas?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Ondas eletromagnéticas</strong> são perturbações que se propagam através do espaço, transportando energia sob a forma de campos elétricos e magnéticos oscilantes. Diferentemente das ondas mecânicas, que necessitam de um meio material para se propagar, as ondas eletromagnéticas podem se propagar no vácuo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A existência de ondas eletromagnéticas foi prevista teoricamente por James Clerk Maxwell através de suas equações e posteriormente confirmada experimentalmente por Heinrich Hertz. Luz visível, ondas de rádio, radiação infravermelha e raios X são todos exemplos de ondas eletromagnéticas.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Características Principais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Transversais:</strong> Os campos E e B oscilam perpendicularmente à direção de propagação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Ortogonais:</strong> Os campos elétrico e magnético são perpendiculares entre si.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Velocidade Constante:</strong> Propagam-se no vácuo com velocidade <MathFormula formula="c = 3 \times 10^8 \, m/s" display={false} />.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔬 Equações de Maxwell e Ondas</h2>
          
          <div className="space-y-8">
            {/* Equações de Maxwell */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Equações de Maxwell
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                As equações de Maxwell descrevem como campos elétricos e magnéticos se relacionam e como variam no espaço e tempo:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Lei de Gauss</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    O fluxo de campo elétrico através de uma superfície fechada é proporcional à carga encerrada:
                  </p>
                  <MathFormula formula="\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" display={true} />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Lei de Gauss para o Magnetismo</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Não existem monopólos magnéticos; o fluxo de campo magnético através de qualquer superfície fechada é zero:
                  </p>
                  <MathFormula formula="\oint \vec{B} \cdot d\vec{A} = 0" display={true} />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Lei de Faraday</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Uma variação no fluxo magnético induz um campo elétrico:
                  </p>
                  <MathFormula formula="\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}" display={true} />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Lei de Ampère-Maxwell</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Uma corrente elétrica ou uma variação no fluxo elétrico gera um campo magnético:
                  </p>
                  <MathFormula formula="\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={true} />
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Importância do Termo de Deslocamento
                </h4>
                <p className="text-slate-700 text-sm">
                  O termo <MathFormula formula="\mu_0 \epsilon_0 \frac{d\Phi_E}{dt}" display={false} /> (corrente de deslocamento) foi a contribuição crucial de Maxwell que permitiu a previsão de ondas eletromagnéticas.
                </p>
              </div>
            </div>

            {/* Equação de Onda */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Equação de Onda Eletromagnética
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Combinando as equações de Maxwell, obtém-se a equação de onda para o campo elétrico:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Solução Geral:</p>
                  <MathFormula formula="\vec{E}(\vec{r}, t) = \vec{E}_0 \sin(\vec{k} \cdot \vec{r} - \omega t + \phi)" display={true} className="text-lg" />
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                A velocidade de propagação da onda eletromagnética é determinada por:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8 \, m/s" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Relação de Dispersão:</p>
                  <MathFormula formula="\omega = c k" display={true} className="text-lg" />
                </div>
              </div>
            </div>

            {/* Propriedades das Ondas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Propriedades das Ondas Eletromagnéticas
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Relação entre E e B</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Os campos elétrico e magnético estão relacionados por:
                  </p>
                  <MathFormula formula="E = c B" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Os campos oscilam em fase e com amplitudes proporcionais.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Comprimento de Onda e Frequência</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Relacionados pela velocidade da luz:
                  </p>
                  <MathFormula formula="c = \lambda f" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Ondas com maior frequência têm menor comprimento de onda.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Vetor de Poynting (Intensidade)</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    A densidade de energia transportada pela onda:
                  </p>
                  <MathFormula formula="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Intensidade média: <MathFormula formula="I = \frac{1}{2} \epsilon_0 c E_0^2" display={false} /></p>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
                <img 
                  src="/images/ondas-eletromagneticas-espectro-pt.jpg" 
                  alt="Ondas Eletromagnéticas - Espectro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Espectro Eletromagnético */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Espectro Eletromagnético
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O espectro eletromagnético compreende todas as frequências possíveis de radiação eletromagnética, ordenadas da menor para a maior frequência (ou maior para menor comprimento de onda):
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
                  <p className="font-bold text-red-800">Ondas de Rádio</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="f < 10^9 \, Hz" display={false} />, <MathFormula formula="\lambda > 0,3 \, mm" display={false} /></p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r">
                  <p className="font-bold text-orange-800">Micro-ondas</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="10^9 - 10^{12} \, Hz" display={false} />, <MathFormula formula="0,3 \, mm - 0,3 \, m" display={false} /></p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r">
                  <p className="font-bold text-yellow-800">Radiação Infravermelha</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="10^{12} - 4 \times 10^{14} \, Hz" display={false} />, <MathFormula formula="0,7 - 1000 \, \mu m" display={false} /></p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <p className="font-bold text-green-800">Luz Visível</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="4 \times 10^{14} - 8 \times 10^{14} \, Hz" display={false} />, <MathFormula formula="400 - 700 \, nm" display={false} /></p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                  <p className="font-bold text-blue-800">Radiação Ultravioleta</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="8 \times 10^{14} - 10^{17} \, Hz" display={false} />, <MathFormula formula="1 - 400 \, nm" display={false} /></p>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-r">
                  <p className="font-bold text-indigo-800">Raios X</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="10^{17} - 10^{19} \, Hz" display={false} />, <MathFormula formula="0,01 - 10 \, nm" display={false} /></p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r">
                  <p className="font-bold text-purple-800">Raios Gama</p>
                  <p className="text-xs text-slate-600"><MathFormula formula="f > 10^{19} \, Hz" display={false} />, <MathFormula formula="\lambda < 0,01 \, nm" display={false} /></p>
                </div>
              </div>
            </div>

            {/* Polarização */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Polarização de Ondas Eletromagnéticas
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>polarização</strong> descreve a orientação do vetor campo elétrico em relação à direção de propagação:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Polarização Linear</h4>
                  <p className="text-sm text-slate-700">
                    O campo elétrico oscila em um plano fixo. A maioria das ondas eletromagnéticas naturais é não-polarizada, mas pode ser polarizada usando filtros.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Lei de Malus</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Quando luz polarizada passa através de um polarizador:
                  </p>
                  <MathFormula formula="I = I_0 \cos^2(\theta)" display={true} />
                  <p className="text-xs text-slate-500 mt-2">Onde θ é o ângulo entre a polarização da luz e o eixo do polarizador.</p>
                </div>
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
                  <strong>Enunciado:</strong> Uma onda eletromagnética plana tem comprimento de onda <MathFormula formula="\lambda = 500 \, nm" display={false} /> (luz verde). Calcule:
                </p>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>a) A frequência da onda</li>
                  <li>b) A frequência angular (ω)</li>
                  <li>c) O número de onda (k)</li>
                  <li>d) A amplitude do campo magnético se <MathFormula formula="E_0 = 1000 \, V/m" display={false} /></li>
                </ul>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>a) Frequência:</strong></p>
                    <p className="ml-4"><MathFormula formula="f = \frac{c}{\lambda} = \frac{3 \times 10^8}{500 \times 10^{-9}} = 6 \times 10^{14} \, Hz" display={false} /></p>
                    
                    <p className="mt-3"><strong>b) Frequência angular:</strong></p>
                    <p className="ml-4"><MathFormula formula="\omega = 2\pi f = 2\pi \times 6 \times 10^{14} \approx 3,77 \times 10^{15} \, rad/s" display={false} /></p>
                    
                    <p className="mt-3"><strong>c) Número de onda:</strong></p>
                    <p className="ml-4"><MathFormula formula="k = \frac{2\pi}{\lambda} = \frac{2\pi}{500 \times 10^{-9}} \approx 1,26 \times 10^7 \, m^{-1}" display={false} /></p>
                    
                    <p className="mt-3"><strong>d) Amplitude do campo magnético:</strong></p>
                    <p className="ml-4"><MathFormula formula="B_0 = \frac{E_0}{c} = \frac{1000}{3 \times 10^8} \approx 3,33 \times 10^{-6} \, T" display={false} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Aplicações Práticas</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Comunicação Sem Fio</h4>
              <p className="text-sm text-slate-700">
                Ondas de rádio e micro-ondas são utilizadas em televisão, rádio, telefonia celular e comunicação via satélite.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">Visão e Fotografia</h4>
              <p className="text-sm text-slate-700">
                A luz visível permite a visão e é capturada por câmeras fotográficas e sensores eletrônicos.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2">Diagnóstico Médico</h4>
              <p className="text-sm text-slate-700">
                Raios X e radiação ultravioleta são utilizados em radiografia, tomografia e esterilização de equipamentos.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 mb-2">Aquecimento e Energia</h4>
              <p className="text-sm text-slate-700">
                Radiação infravermelha é usada em fornos micro-ondas, aquecedores e painéis solares para conversão de energia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
