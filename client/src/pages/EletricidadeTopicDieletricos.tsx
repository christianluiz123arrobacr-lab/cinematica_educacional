import { ArrowLeft, Zap, Info, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicDieletricos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Dielétricos e Polarização</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Introdução aos Dielétricos</h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é um Dielétrico?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Dielétricos</strong> são materiais isolantes que não possuem cargas livres em quantidade significativa, como vidro, cerâmica, plástico e papel. Quando colocados em um campo elétrico externo, os dielétricos não conduzem eletricidade, mas seus átomos e moléculas sofrem uma reorganização de cargas chamada <strong>polarização</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A polarização de dielétricos é fundamental para entender como capacitores funcionam, como os materiais interagem com campos elétricos e como a permissividade relativa afeta a intensidade do campo dentro de um material.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Características Principais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Isolantes:</strong> Não possuem cargas livres para conduzir corrente elétrica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Polarizáveis:</strong> Seus átomos/moléculas podem se deslocar em um campo elétrico.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Reduzem o campo:</strong> Criam um campo interno que se opõe ao campo externo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Polarização de Dielétricos</h2>
          
          <div className="space-y-8">
            {/* Tipos de Polarização */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">1</span>
                Tipos de Polarização
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Polarização Eletrônica</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Ocorre quando o campo elétrico externo desloca a nuvem eletrônica em relação ao núcleo atômico, criando um dipolo elétrico induzido:
                  </p>
                  <MathFormula formula="\vec{p} = \alpha \vec{E}" display={true} />
                  <p className="text-xs text-slate-500 mt-2">onde <MathFormula formula="\alpha" display={false} /> é a polarizabilidade eletrônica.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Polarização Iônica</h4>
                  <p className="text-sm text-slate-700">
                    Ocorre em materiais iônicos quando o campo elétrico desloca os íons positivos e negativos em direções opostas, criando dipolos.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Polarização Orientacional</h4>
                  <p className="text-sm text-slate-700">
                    Ocorre em moléculas que já possuem momento de dipolo permanente (como a água). O campo externo tende a alinhar esses dipolos.
                  </p>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
                <img 
                  src="/images/dieletricos-polarizacao-pt.jpg" 
                  alt="Polarização de Dielétricos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Vetor Polarização */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">2</span>
                Vetor Polarização
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                O <strong>vetor polarização</strong> <MathFormula formula="\vec{P}" display={false} /> descreve o momento de dipolo por unidade de volume do dielétrico:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{P} = \epsilon_0 \chi_e \vec{E}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\chi_e" display={false} />: Susceptibilidade elétrica do material (adimensional)</li>
                    <li><MathFormula formula="\epsilon_0 = 8,85 \times 10^{-12} \, F/m" display={false} />: Permissividade do vácuo</li>
                    <li><MathFormula formula="\vec{E}" display={false} />: Campo elétrico aplicado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Significado Físico
                </h4>
                <p className="text-slate-700 text-sm">
                  <MathFormula formula="\vec{P}" display={false} /> representa a densidade volumétrica de momento de dipolo. Quanto maior a polarização, maior a resposta do material ao campo elétrico.
                </p>
              </div>
            </div>

            {/* Campo Elétrico em Dielétricos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">3</span>
                Campo Elétrico em Dielétricos
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando um dielétrico é colocado em um campo elétrico externo, o campo total dentro do material é reduzido devido ao campo criado pela polarização:
              </p>
              
              <MathFormula formula="\vec{E}_{\text{total}} = \vec{E}_0 - \vec{E}_p" display={true} />
              
              <p className="text-slate-700 mb-4 leading-relaxed">
                Isso pode ser expresso em termos do deslocamento elétrico <MathFormula formula="\vec{D}" display={false} />:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="\vec{D} = \epsilon_0 \vec{E} + \vec{P} = \epsilon_0 (1 + \chi_e) \vec{E} = \epsilon_0 \epsilon_r \vec{E}" display={true} className="text-lg" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Definições:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\vec{D}" display={false} />: Deslocamento elétrico (C/m²)</li>
                    <li><MathFormula formula="\epsilon_r = 1 + \chi_e" display={false} />: Permissividade relativa (constante dielétrica)</li>
                    <li><MathFormula formula="\epsilon = \epsilon_0 \epsilon_r" display={false} />: Permissividade absoluta do material</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-6">
                <h4 className="font-bold text-slate-800 mb-2">Redução do Campo</h4>
                <p className="text-sm text-slate-700 mb-2">
                  O campo dentro do dielétrico é reduzido por um fator <MathFormula formula="\epsilon_r" display={false} />:
                </p>
                <MathFormula formula="E_{\text{dielétrico}} = \frac{E_0}{\epsilon_r}" display={true} />
                <p className="text-xs text-slate-500 mt-2">
                  Por exemplo, para vidro com <MathFormula formula="\epsilon_r \approx 6" display={false} />, o campo é reduzido a 1/6 do valor original.
                </p>
              </div>
            </div>

            {/* Permissividade Relativa */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">4</span>
                Permissividade Relativa
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A <strong>permissividade relativa</strong> (ou constante dielétrica) <MathFormula formula="\epsilon_r" display={false} /> é uma propriedade do material que indica quanto o material reduz o campo elétrico:
              </p>
              
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Valores Típicos de Permissividade Relativa</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-700">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-2 text-left">Material</th>
                        <th className="px-4 py-2 text-center"><MathFormula formula="\epsilon_r" display={false} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="px-4 py-2">Vácuo</td><td className="px-4 py-2 text-center">1</td></tr>
                      <tr className="border-b"><td className="px-4 py-2">Ar</td><td className="px-4 py-2 text-center">1,00054</td></tr>
                      <tr className="border-b"><td className="px-4 py-2">Papel</td><td className="px-4 py-2 text-center">3,7</td></tr>
                      <tr className="border-b"><td className="px-4 py-2">Vidro</td><td className="px-4 py-2 text-center">6</td></tr>
                      <tr className="border-b"><td className="px-4 py-2">Água</td><td className="px-4 py-2 text-center">80</td></tr>
                      <tr><td className="px-4 py-2">Cerâmica</td><td className="px-4 py-2 text-center">10000+</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Observação Importante
                </h4>
                <p className="text-slate-700 text-sm">
                  Quanto maior <MathFormula formula="\epsilon_r" display={false} />, maior a capacidade do material de se polarizar e reduzir o campo elétrico. A água tem uma permissividade relativa muito alta, o que explica suas propriedades especiais.
                </p>
              </div>
            </div>

            {/* Capacitor com Dielétrico */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">5</span>
                Capacitor com Dielétrico
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando um dielétrico é inserido entre as placas de um capacitor, a capacitância aumenta por um fator <MathFormula formula="\epsilon_r" display={false} />:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <MathFormula formula="C = \epsilon_0 \epsilon_r \frac{A}{d}" display={true} className="text-xl" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Comparação:</p>
                  <p><strong>Sem dielétrico:</strong> <MathFormula formula="C_0 = \epsilon_0 \frac{A}{d}" display={false} /></p>
                  <p><strong>Com dielétrico:</strong> <MathFormula formula="C = \epsilon_r C_0" display={false} /></p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">Exemplo Prático</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Um capacitor de placas paralelas com ar (<MathFormula formula="\epsilon_r \approx 1" display={false} />) tem capacitância <MathFormula formula="C_0" display={false} />. Se preenchermos com vidro (<MathFormula formula="\epsilon_r = 6" display={false} />), a capacitância aumenta para <MathFormula formula="C = 6C_0" display={false} />.
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
                  <strong>Enunciado:</strong> Um capacitor de placas paralelas tem área <MathFormula formula="A = 100 \, cm^2" display={false} /> e separação <MathFormula formula="d = 2 \, mm" display={false} />. Calcule a capacitância quando preenchido com vidro (<MathFormula formula="\epsilon_r = 6" display={false} />).
                </p>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-2"><strong>Resolução:</strong></p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>1. Conversão de unidades:</strong> <MathFormula formula="A = 100 \, cm^2 = 0,01 \, m^2" display={false} />, <MathFormula formula="d = 2 \, mm = 0,002 \, m" display={false} /></p>
                    <p><strong>2. Aplicação da fórmula:</strong></p>
                    <p className="ml-4"><MathFormula formula="C = \epsilon_0 \epsilon_r \frac{A}{d} = (8,85 \times 10^{-12}) \times 6 \times \frac{0,01}{0,002}" display={false} /></p>
                    <p className="ml-4"><MathFormula formula="C = 53,1 \times 10^{-12} \times 5 = 2,66 \times 10^{-10} \, F = 266 \, pF" display={false} /></p>
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
              <h4 className="font-bold text-blue-800 mb-2">Capacitores de Alta Capacitância</h4>
              <p className="text-sm text-slate-700">
                Dielétricos com alta permissividade relativa (cerâmicas) permitem criar capacitores compactos com grande capacitância.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">Isolamento Elétrico</h4>
              <p className="text-sm text-slate-700">
                Dielétricos são usados como isolantes em cabos, transformadores e equipamentos de alta tensão.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2">Sensores Capacitivos</h4>
              <p className="text-sm text-slate-700">
                A mudança na permissividade relativa de um material pode ser usada para detectar umidade, proximidade e outras grandezas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
