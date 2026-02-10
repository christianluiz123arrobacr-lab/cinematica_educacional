import { Link } from "wouter";
import { ArrowLeft, Magnet, Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function EletromagnetismoTopicRadiacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletromagnetismo">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletromagnetismo</h1>
              <p className="text-xs text-slate-600">Radiação Eletromagnética</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">☀️ Radiação Eletromagnética</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Radiação Eletromagnética?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Radiação eletromagnética</strong> é a emissão de ondas eletromagnéticas por cargas aceleradas. Pense em uma pedra jogada na água: ela cria ondas que se propagam pela superfície. De forma similar, quando uma carga elétrica é acelerada (muda sua velocidade), ela cria "ondas" nos campos elétrico e magnético que se propagam pelo espaço na velocidade da luz.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A radiação eletromagnética é fundamental para compreender fenômenos como luz, calor radiante, ondas de rádio e raios X. Ela também é essencial para a comunicação sem fio, aquecimento e muitas outras aplicações tecnológicas.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Conceitos Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Emissão:</strong> Processo pelo qual cargas aceleradas emitem radiação (como uma antena transmitindo sinais).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Absorção:</strong> Processo pelo qual a matéria absorve radiação eletromagnética (como painéis solares absorvendo luz).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Interação com Matéria:</strong> Como a radiação interage com átomos e moléculas (reflexão, refração, espalhamento).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emissão de Radiação */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Emissão de Radiação Eletromagnética</h2>
          
          <div className="space-y-8">
            {/* Contexto Histórico */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Contexto Histórico
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Em <strong>1897</strong>, o físico irlandês <strong>Joseph Larmor</strong> derivou uma fórmula fundamental que descreve a potência irradiada por uma carga acelerada. Esta fórmula, conhecida como <strong>Fórmula de Larmor</strong>, foi um marco importante na compreensão da radiação eletromagnética.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A descoberta de Larmor ajudou a explicar por que elétrons em átomos emitem luz quando são acelerados, e por que antenas de rádio funcionam. Ela também foi fundamental para o desenvolvimento da teoria quântica no início do século XX.
              </p>
            </div>

            {/* Cargas Aceleradas - Explicação Simples */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">1</span>
                Por Que Cargas Aceleradas Emitem Radiação?
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">Explicação Simples</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Imagine que você está segurando uma corda esticada e começa a sacudir uma das pontas para cima e para baixo. Você está <strong>acelerando</strong> a ponta da corda, e isso cria <strong>ondas</strong> que se propagam ao longo da corda.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  De forma similar, quando uma carga elétrica é acelerada (muda sua velocidade ou direção), ela "sacode" os campos elétrico e magnético ao seu redor, criando ondas eletromagnéticas que se propagam pelo espaço na velocidade da luz.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Regra fundamental:</strong> Uma carga em repouso ou em movimento uniforme (velocidade constante) NÃO irradia. Somente cargas <strong>aceleradas</strong> (mudando de velocidade ou direção) emitem radiação eletromagnética.
                  </p>
                </div>
              </div>
            </div>

            {/* Fórmula de Larmor */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">2</span>
                Fórmula de Larmor
              </h3>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Potência Irradiada por uma Carga Acelerada</h4>
                <MathFormula formula="P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}" display={true} className="text-2xl mb-6" />
                
                <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-400 mb-2">Termo a Termo:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="P" display={false} />: <strong>Potência irradiada</strong> (em Watts, W)</li>
                      <li><MathFormula formula="q" display={false} />: <strong>Carga elétrica</strong> da partícula (em Coulombs, C)</li>
                      <li><MathFormula formula="a" display={false} />: <strong>Aceleração</strong> da carga (em m/s²)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-400 mb-2">Constantes:</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li><MathFormula formula="\epsilon_0 = 8{,}85 \times 10^{-12}" display={false} /> F/m: <strong>Permissividade do vácuo</strong></li>
                      <li><MathFormula formula="c = 3 \times 10^8" display={false} /> m/s: <strong>Velocidade da luz</strong></li>
                      <li><MathFormula formula="6\pi \approx 18{,}85" display={false} />: <strong>Fator geométrico</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interpretação Física */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">🔍 Interpretação Física</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <p><strong>Proporcional a q²:</strong> Cargas maiores irradiam mais. Dobrar a carga quadruplica a potência irradiada.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <p><strong>Proporcional a a²:</strong> A potência depende do quadrado da aceleração. Dobrar a aceleração quadruplica a radiação. Por isso antenas de rádio funcionam melhor com sinais de alta frequência (maior aceleração).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <p><strong>Inversamente proporcional a c³:</strong> A velocidade da luz ao cubo no denominador torna a radiação relativamente fraca para acelerações moderadas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dipolo Oscilante */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">3</span>
                Dipolo Oscilante (Antena)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-slate-800 mb-3">O que é um Dipolo Oscilante?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Um <strong>dipolo oscilante</strong> é um sistema de duas cargas opostas (+q e -q) separadas por uma distância que varia senoidalmente com o tempo. Este é o modelo mais simples de uma <strong>antena de rádio</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Quando uma corrente alternada (AC) flui em uma antena, os elétrons oscilam para cima e para baixo, criando um dipolo oscilante. As cargas estão constantemente acelerando, então elas irradiam ondas eletromagnéticas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 mb-6 shadow-xl">
                <h4 className="font-semibold text-purple-400 mb-3">Potência Média Irradiada por um Dipolo</h4>
                <MathFormula formula="\langle P \rangle = \frac{q^2 \omega^4 d^2}{12\pi \epsilon_0 c^3}" display={true} className="text-2xl mb-6" />
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="font-semibold text-purple-400 mb-3">Termo a Termo:</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><MathFormula formula="\langle P \rangle" display={false} />: <strong>Potência média irradiada</strong> (em Watts, W)</li>
                    <li><MathFormula formula="q" display={false} />: <strong>Carga</strong> de cada polo (em Coulombs, C)</li>
                    <li><MathFormula formula="\omega" display={false} />: <strong>Frequência angular</strong> de oscilação (em rad/s)</li>
                    <li><MathFormula formula="d" display={false} />: <strong>Amplitude</strong> da oscilação (distância máxima entre as cargas, em metros)</li>
                    <li><MathFormula formula="\epsilon_0" display={false} />: Permissividade do vácuo</li>
                    <li><MathFormula formula="c" display={false} />: Velocidade da luz</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4" />
                  Dependência com Frequência
                </h4>
                <p className="text-slate-700 text-sm">
                  A potência irradiada é proporcional a <MathFormula formula="\omega^4" display={false} /> (quarta potência da frequência). Isto significa que dobrar a frequência aumenta a radiação em 16 vezes! Por isso, antenas de rádio FM (100 MHz) irradiam muito mais eficientemente que antenas de rádio AM (1 MHz).
                </p>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">4</span>
                Passo-a-Passo: Calculando Radiação Emitida
              </h3>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-4">Como Resolver Problemas de Emissão de Radiação</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-slate-800">Identifique o tipo de movimento</p>
                      <p className="text-slate-600 text-sm">Determine se a carga está em movimento uniforme (não irradia) ou acelerado (irradia). Calcule a aceleração <MathFormula formula="a" display={false} />.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-slate-800">Determine a carga</p>
                      <p className="text-slate-600 text-sm">Identifique a carga <MathFormula formula="q" display={false} /> da partícula (elétron: <MathFormula formula="q = 1{,}6 \times 10^{-19}" display={false} /> C).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-slate-800">Escolha a fórmula apropriada</p>
                      <p className="text-slate-600 text-sm">Para carga com aceleração constante: use Larmor (<MathFormula formula="P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}" display={false} />). Para dipolo oscilante: use fórmula do dipolo.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-slate-800">Substitua os valores</p>
                      <p className="text-slate-600 text-sm">Insira os valores numéricos na fórmula. Use <MathFormula formula="\epsilon_0 = 8{,}85 \times 10^{-12}" display={false} /> F/m e <MathFormula formula="c = 3 \times 10^8" display={false} /> m/s.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="font-semibold text-slate-800">Calcule a potência</p>
                      <p className="text-slate-600 text-sm">Realize os cálculos para obter a potência irradiada em Watts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                    <div>
                      <p className="font-semibold text-slate-800">Interprete o resultado</p>
                      <p className="text-slate-600 text-sm">Compare com valores típicos. Por exemplo, uma lâmpada incandescente irradia ~60 W, uma antena de celular ~1 W.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplos Resolvidos */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">📝 Exemplos Resolvidos</h3>
              
              {/* Exemplo 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo 1: Elétron Acelerado
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um elétron é acelerado com <MathFormula formula="a = 10^{15}" display={false} /> m/s². Qual é a potência irradiada? (Use <MathFormula formula="q_e = 1{,}6 \times 10^{-19}" display={false} /> C, <MathFormula formula="\epsilon_0 = 8{,}85 \times 10^{-12}" display={false} /> F/m, <MathFormula formula="c = 3 \times 10^8" display={false} /> m/s)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>Passo 1:</strong> Identificar a fórmula de Larmor:</p>
                      <MathFormula formula="P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 2:</strong> Substituir os valores:</p>
                      <MathFormula formula="P = \frac{(1{,}6 \times 10^{-19})^2 \times (10^{15})^2}{6\pi \times 8{,}85 \times 10^{-12} \times (3 \times 10^8)^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 3:</strong> Calcular o numerador:</p>
                      <MathFormula formula="(1{,}6 \times 10^{-19})^2 \times (10^{15})^2 = 2{,}56 \times 10^{-38} \times 10^{30} = 2{,}56 \times 10^{-8}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 4:</strong> Calcular o denominador:</p>
                      <MathFormula formula="6\pi \times 8{,}85 \times 10^{-12} \times 27 \times 10^{24} \approx 4{,}5 \times 10^{15}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 5:</strong> Calcular a potência:</p>
                      <MathFormula formula="P = \frac{2{,}56 \times 10^{-8}}{4{,}5 \times 10^{15}} \approx 5{,}7 \times 10^{-24} \text{ W}" display={true} className="my-2" />
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-green-900">
                      <strong>Resposta:</strong> A potência irradiada é aproximadamente <MathFormula formula="5{,}7 \times 10^{-24}" display={false} /> W. Este é um valor extremamente pequeno, mostrando que elétrons individuais irradiam muito pouca energia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exemplo 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo 2: Antena de Rádio FM
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Uma antena de rádio FM opera em 100 MHz (frequência angular <MathFormula formula="\omega = 2\pi f = 6{,}28 \times 10^8" display={false} /> rad/s). A amplitude da oscilação é <MathFormula formula="d = 0{,}5" display={false} /> m e a carga efetiva é <MathFormula formula="q = 10^{-9}" display={false} /> C. Qual é a potência média irradiada?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>Passo 1:</strong> Identificar a fórmula do dipolo oscilante:</p>
                      <MathFormula formula="\langle P \rangle = \frac{q^2 \omega^4 d^2}{12\pi \epsilon_0 c^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 2:</strong> Substituir os valores:</p>
                      <MathFormula formula="\langle P \rangle = \frac{(10^{-9})^2 \times (6{,}28 \times 10^8)^4 \times (0{,}5)^2}{12\pi \times 8{,}85 \times 10^{-12} \times (3 \times 10^8)^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 3:</strong> Calcular <MathFormula formula="\omega^4" display={false} />:</p>
                      <MathFormula formula="(6{,}28 \times 10^8)^4 \approx 1{,}55 \times 10^{35}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 4:</strong> Calcular o numerador:</p>
                      <MathFormula formula="10^{-18} \times 1{,}55 \times 10^{35} \times 0{,}25 \approx 3{,}88 \times 10^{16}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 5:</strong> Calcular o denominador:</p>
                      <MathFormula formula="12\pi \times 8{,}85 \times 10^{-12} \times 27 \times 10^{24} \approx 9 \times 10^{15}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 6:</strong> Calcular a potência:</p>
                      <MathFormula formula="\langle P \rangle = \frac{3{,}88 \times 10^{16}}{9 \times 10^{15}} \approx 4{,}3 \text{ W}" display={true} className="my-2" />
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-green-900">
                      <strong>Resposta:</strong> A potência média irradiada é aproximadamente 4,3 W. Este é um valor típico para uma antena de rádio FM de baixa potência.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exemplo 3 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo 3: Comparação de Frequências
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Uma antena opera em duas frequências: AM (1 MHz) e FM (100 MHz). Quantas vezes mais potência é irradiada em FM comparado a AM, mantendo todos os outros parâmetros constantes?
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>Passo 1:</strong> A potência é proporcional a <MathFormula formula="\omega^4" display={false} />, então:</p>
                      <MathFormula formula="\frac{P_{FM}}{P_{AM}} = \left(\frac{\omega_{FM}}{\omega_{AM}}\right)^4 = \left(\frac{f_{FM}}{f_{AM}}\right)^4" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 2:</strong> Substituir as frequências:</p>
                      <MathFormula formula="\frac{P_{FM}}{P_{AM}} = \left(\frac{100 \text{ MHz}}{1 \text{ MHz}}\right)^4 = (100)^4 = 10^8" display={true} className="my-2" />
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-green-900">
                      <strong>Resposta:</strong> A antena FM irradia <strong>100 milhões de vezes</strong> mais potência que a antena AM! Isto explica por que antenas de rádio FM são muito mais eficientes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exemplo 4 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo 4: Elétron em Movimento Circular
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um elétron se move em uma órbita circular de raio <MathFormula formula="r = 5 \times 10^{-11}" display={false} /> m (raio de Bohr) com velocidade <MathFormula formula="v = 2{,}2 \times 10^6" display={false} /> m/s. Qual é a potência irradiada? (Use <MathFormula formula="q_e = 1{,}6 \times 10^{-19}" display={false} /> C)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>Passo 1:</strong> Calcular a aceleração centrípeta:</p>
                      <MathFormula formula="a = \frac{v^2}{r} = \frac{(2{,}2 \times 10^6)^2}{5 \times 10^{-11}} = \frac{4{,}84 \times 10^{12}}{5 \times 10^{-11}} \approx 9{,}7 \times 10^{22} \text{ m/s}^2" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 2:</strong> Usar a fórmula de Larmor:</p>
                      <MathFormula formula="P = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 3:</strong> Substituir os valores:</p>
                      <MathFormula formula="P = \frac{(1{,}6 \times 10^{-19})^2 \times (9{,}7 \times 10^{22})^2}{6\pi \times 8{,}85 \times 10^{-12} \times (3 \times 10^8)^3}" display={true} className="my-2" />
                      
                      <p className="mt-4"><strong>Passo 4:</strong> Calcular:</p>
                      <MathFormula formula="P \approx 4{,}6 \times 10^{-8} \text{ W}" display={true} className="my-2" />
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-green-900">
                      <strong>Resposta:</strong> A potência irradiada é aproximadamente <MathFormula formula="4{,}6 \times 10^{-8}" display={false} /> W. Este resultado mostra que, segundo a física clássica, o elétron deveria irradiar energia e colapsar no núcleo em ~10⁻¹¹ segundos! Este paradoxo foi resolvido pela mecânica quântica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">🌟 Aplicações Práticas</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-blue-900 mb-2">📡 Antenas de Rádio e TV</h4>
                  <p className="text-slate-700 text-sm">
                    Antenas transmitem sinais acelerando elétrons para cima e para baixo, criando ondas eletromagnéticas que se propagam pelo espaço. A eficiência aumenta com a frequência (FM &gt; AM).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-900 mb-2">📱 Comunicação Celular</h4>
                  <p className="text-slate-700 text-sm">
                    Celulares usam antenas miniaturizadas que operam em GHz (bilhões de Hz), irradiando ~1 W de potência. A alta frequência permite antenas pequenas e eficientes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-5">
                  <h4 className="font-bold text-purple-900 mb-2">💡 Lâmpadas Incandescentes</h4>
                  <p className="text-slate-700 text-sm">
                    Elétrons acelerados em um filamento aquecido emitem luz visível (radiação eletromagnética). A cor da luz depende da temperatura (Lei de Wien).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-5">
                  <h4 className="font-bold text-orange-900 mb-2">🔬 Raios X</h4>
                  <p className="text-slate-700 text-sm">
                    Elétrons acelerados em um tubo de raios X colidem com um alvo metálico, desacelerando bruscamente e emitindo raios X de alta energia (radiação de frenamento ou Bremsstrahlung).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-5">
                  <h4 className="font-bold text-yellow-900 mb-2">🌌 Radiação Síncrotron</h4>
                  <p className="text-slate-700 text-sm">
                    Elétrons acelerados em aceleradores de partículas circulares emitem radiação síncrotron extremamente intensa, usada em pesquisa científica e medicina.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-xl p-5">
                  <h4 className="font-bold text-indigo-900 mb-2">🛰️ Comunicação por Satélite</h4>
                  <p className="text-slate-700 text-sm">
                    Satélites usam antenas de micro-ondas (GHz) para transmitir sinais de TV, internet e GPS. A alta frequência permite transmissão de grandes quantidades de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Radiação Térmica */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔥 Radiação Térmica</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">1</span>
                O que é Radiação Térmica?
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Todos os objetos em temperatura acima do zero absoluto emitem radiação eletromagnética. Esta radiação é resultado do movimento aleatório de cargas dentro dos átomos. A quantidade e o espectro da radiação dependem da temperatura do objeto.
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-inner">
                <h4 className="font-semibold text-yellow-400 mb-3">Lei de Stefan-Boltzmann</h4>
                <MathFormula formula="P = \sigma A T^4" display={true} className="text-xl mb-4" />
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-slate-300">
                  <p className="font-semibold text-yellow-400 mb-2">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="P" display={false} />: Potência irradiada (W)</li>
                    <li><MathFormula formula="\sigma = 5{,}67 \times 10^{-8}" display={false} /> W/(m²·K⁴): Constante de Stefan-Boltzmann</li>
                    <li><MathFormula formula="A" display={false} />: Área da superfície (m²)</li>
                    <li><MathFormula formula="T" display={false} />: Temperatura absoluta (K)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm">Dependência com Temperatura</h4>
                    <p className="text-sm text-orange-700">
                      A potência irradiada é proporcional à quarta potência da temperatura. Isto significa que pequenos aumentos de temperatura resultam em grandes aumentos de radiação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lei de Deslocamento de Wien */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">2</span>
                Lei de Deslocamento de Wien
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A distribuição espectral da radiação térmica muda com a temperatura. Objetos mais quentes emitem radiação em comprimentos de onda mais curtos (mais azuis), enquanto objetos mais frios emitem em comprimentos de onda mais longos (mais vermelhos).
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <MathFormula formula="\lambda_{max} T = b" display={true} className="text-xl mb-4" />
                <div className="text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <p className="font-semibold mb-2 text-slate-800">Onde:</p>
                  <ul className="space-y-1">
                    <li><MathFormula formula="\lambda_{max}" display={false} />: Comprimento de onda de pico (m)</li>
                    <li><MathFormula formula="T" display={false} />: Temperatura absoluta (K)</li>
                    <li><MathFormula formula="b = 2{,}898 \times 10^{-3}" display={false} /> m·K: Constante de Wien</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Absorção e Emissividade */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">3</span>
                Absorção e Emissividade
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A capacidade de um objeto absorver radiação está relacionada à sua capacidade de emiti-la. Um corpo que absorve bem a radiação também emite bem (corpo negro ideal). Um corpo que reflete bem a radiação emite pouco.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Corpo Negro Ideal</h4>
                    <p className="text-slate-700 text-sm">Um corpo negro é um objeto que absorve toda a radiação incidente (não reflete nada) e emite a máxima quantidade de radiação possível para uma dada temperatura.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 mb-2">Emissividade</h4>
                    <p className="text-slate-700 text-sm">A emissividade <MathFormula formula="\epsilon" display={false} /> é a razão entre a potência irradiada por um objeto e a potência que seria irradiada por um corpo negro ideal na mesma temperatura. Varia de 0 (refletor perfeito) a 1 (corpo negro ideal).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo Resolvido */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Exemplo Resolvido: Radiação Térmica
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Problema:</strong> Um filamento de lâmpada incandescente está a uma temperatura de 2700 K. Qual é o comprimento de onda em que a radiação é máxima? (Use <MathFormula formula="b = 2{,}898 \times 10^{-3}" display={false} /> m·K)
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>Resolução:</strong></p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p><strong>Passo 1:</strong> Usar a Lei de Wien:</p>
                      <MathFormula formula="\lambda_{max} = \frac{b}{T} = \frac{2{,}898 \times 10^{-3}}{2700} \approx 1{,}07 \times 10^{-6} \text{ m} = 1070 \text{ nm}" display={true} className="my-2" />
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-green-900">
                      <strong>Resposta:</strong> O comprimento de onda de pico é aproximadamente 1070 nm, que está no infravermelho próximo. Por isso, lâmpadas incandescentes emitem muito calor (infravermelho) além de luz visível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interação com Matéria */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔬 Interação da Radiação Eletromagnética com a Matéria</h2>
          
          <div className="space-y-8">
            {/* Explicação Simples */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Interação com Matéria?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Quando a radiação eletromagnética (luz, ondas de rádio, raios X, etc.) encontra um material, ela pode interagir de várias formas. Pense em uma bola de tênis batendo em uma parede: ela pode <strong>ser absorvida</strong> (a parede é macia e absorve a energia), <strong>ser refletida</strong> (a parede é dura e a bola volta), <strong>atravessar</strong> (a parede é transparente) ou <strong>mudar de direção</strong> (a parede é inclinada).
              </p>
              <p className="text-slate-700 leading-relaxed">
                De forma similar, a radiação EM pode ser <strong>absorvida</strong> (energia é transferida para o material), <strong>refletida</strong> (volta na direção oposta), <strong>refratada</strong> (muda de direção ao passar para outro meio) ou <strong>espalhada</strong> (dispersa em várias direções).
              </p>
            </div>

            {/* Contexto Histórico */}
            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">📜 Contexto Histórico</h4>
              <p className="text-slate-700 leading-relaxed mb-3">
                O estudo da interação da luz com a matéria remonta à Antiguidade. <strong>Euclides</strong> (300 a.C.) estudou a reflexão. <strong>Snell</strong> (1621) descobriu a lei da refração. <strong>Rayleigh</strong> (1871) explicou por que o céu é azul (espalhamento). <strong>Compton</strong> (1923) descobriu o espalhamento de raios X por elétrons.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Hoje, compreendemos que a interação da radiação EM com a matéria é fundamental para tecnologias como óculos, fibras ópticas, espelhos, lentes, lasers e muito mais.
              </p>
            </div>

            {/* 1. Absorção */}
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">1️⃣ Absorção</h3>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r mb-4">
                <h4 className="font-bold text-slate-900 mb-3">O que é Absorção?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Absorção</strong> é o processo pelo qual a energia da radiação eletromagnética é transferida para o material. Os átomos e moléculas do material absorvem fótons (partículas de luz) e ganham energia, que pode ser convertida em calor, energia química ou outras formas.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Pense em um painel solar: ele absorve a luz do Sol e converte a energia em eletricidade. Ou em uma roupa preta em um dia ensolarado: ela absorve muita luz e esquenta.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded p-6 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">Fórmula da Absorção (Lei de Beer-Lambert)</h4>
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <MathFormula formula="I = I_0 e^{-\\alpha x}" />
                </div>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="space-y-1 ml-6">
                    <li><MathFormula formula="I" inline /> = intensidade da radiação após atravessar o material (W/m²)</li>
                    <li><MathFormula formula="I_0" inline /> = intensidade inicial da radiação (W/m²)</li>
                    <li><MathFormula formula="\\alpha" inline /> = coeficiente de absorção do material (m⁻¹)</li>
                    <li><MathFormula formula="x" inline /> = espessura do material (m)</li>
                    <li><MathFormula formula="e" inline /> = número de Euler (≈ 2,718)</li>
                  </ul>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <p className="text-sm text-slate-700">
                    <strong>Interpretação:</strong> A intensidade da radiação diminui exponencialmente à medida que atravessa o material. Quanto maior o coeficiente de absorção <MathFormula formula="\\alpha" inline /> ou a espessura <MathFormula formula="x" inline />, menor a intensidade que sai do outro lado.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo 1: Absorção de Luz por Vidro</h4>
                <p className="text-slate-700 mb-3">
                  Um feixe de luz com intensidade inicial <MathFormula formula="I_0 = 1000 \\, \\text{W/m}^2" inline /> atravessa uma placa de vidro de espessura <MathFormula formula="x = 5 \\, \\text{cm} = 0,05 \\, \\text{m}" inline />. O coeficiente de absorção do vidro é <MathFormula formula="\\alpha = 0,1 \\, \\text{m}^{-1}" inline />. Qual a intensidade da luz após atravessar o vidro?
                </p>
                <div className="bg-white p-4 rounded mb-3">
                  <p className="font-bold text-slate-900 mb-2">Solução:</p>
                  <div className="space-y-2 text-slate-700">
                    <p>Usando a Lei de Beer-Lambert:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="I = I_0 e^{-\\alpha x}" />
                    </div>
                    <p>Substituindo os valores:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="I = 1000 \\cdot e^{-0,1 \\cdot 0,05}" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="I = 1000 \\cdot e^{-0,005}" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="I = 1000 \\cdot 0,995" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="I \\approx 995 \\, \\text{W/m}^2" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <p className="text-sm text-green-900">
                    <strong>Resposta:</strong> A intensidade da luz após atravessar o vidro é aproximadamente 995 W/m². O vidro absorveu apenas 0,5% da luz (5 W/m²), por isso é considerado transparente.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Reflexão */}
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">2️⃣ Reflexão</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r mb-4">
                <h4 className="font-bold text-slate-900 mb-3">O que é Reflexão?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Reflexão</strong> é o processo pelo qual a radiação eletromagnética "volta" ao encontrar uma superfície. Pense em um espelho: quando você olha para ele, a luz que sai do seu rosto é refletida pelo espelho e volta para seus olhos, permitindo que você veja sua imagem.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A reflexão pode ser <strong>especular</strong> (superfície lisa, como espelho) ou <strong>difusa</strong> (superfície rugosa, como papel).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded p-6 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">Lei da Reflexão</h4>
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <MathFormula formula="\\theta_i = \\theta_r" />
                </div>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="space-y-1 ml-6">
                    <li><MathFormula formula="\\theta_i" inline /> = ângulo de incidência (graus ou radianos)</li>
                    <li><MathFormula formula="\\theta_r" inline /> = ângulo de reflexão (graus ou radianos)</li>
                  </ul>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <p className="text-sm text-slate-700">
                    <strong>Interpretação:</strong> O ângulo de incidência (entre o raio incidente e a normal à superfície) é igual ao ângulo de reflexão (entre o raio refletido e a normal). Ambos os raios e a normal estão no mesmo plano.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo 2: Reflexão em Espelho Plano</h4>
                <p className="text-slate-700 mb-3">
                  Um raio de luz incide em um espelho plano com ângulo de incidência <MathFormula formula="\\theta_i = 30°" inline />. Qual o ângulo de reflexão?
                </p>
                <div className="bg-white p-4 rounded mb-3">
                  <p className="font-bold text-slate-900 mb-2">Solução:</p>
                  <div className="space-y-2 text-slate-700">
                    <p>Pela Lei da Reflexão:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="\\theta_r = \\theta_i = 30°" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <p className="text-sm text-green-900">
                    <strong>Resposta:</strong> O ângulo de reflexão é 30°, igual ao ângulo de incidência.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Refração */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">3️⃣ Refração</h3>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r mb-4">
                <h4 className="font-bold text-slate-900 mb-3">O que é Refração?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Refração</strong> é o processo pelo qual a radiação eletromagnética muda de direção ao passar de um meio para outro. Pense em um canudo dentro de um copo com água: ele parece "quebrado" porque a luz muda de direção ao passar do ar para a água.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A refração ocorre porque a velocidade da luz é diferente em diferentes meios. No vácuo, a luz viaja a <MathFormula formula="c = 3 \\times 10^8 \\, \\text{m/s}" inline />. Na água, ela viaja mais devagar, a cerca de <MathFormula formula="2,25 \\times 10^8 \\, \\text{m/s}" inline />.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded p-6 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">Lei de Snell (Lei da Refração)</h4>
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <MathFormula formula="n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)" />
                </div>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="space-y-1 ml-6">
                    <li><MathFormula formula="n_1" inline /> = índice de refração do meio 1 (adimensional)</li>
                    <li><MathFormula formula="n_2" inline /> = índice de refração do meio 2 (adimensional)</li>
                    <li><MathFormula formula="\\theta_1" inline /> = ângulo de incidência no meio 1 (graus ou radianos)</li>
                    <li><MathFormula formula="\\theta_2" inline /> = ângulo de refração no meio 2 (graus ou radianos)</li>
                  </ul>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Interpretação:</strong> Quando a luz passa de um meio com índice de refração <MathFormula formula="n_1" inline /> para outro com <MathFormula formula="n_2" inline />, o ângulo muda de acordo com a Lei de Snell.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Índice de refração:</strong> <MathFormula formula="n = c/v" inline />, onde <MathFormula formula="c" inline /> é a velocidade da luz no vácuo e <MathFormula formula="v" inline /> é a velocidade da luz no meio. Exemplos: ar (<MathFormula formula="n \\approx 1,0" inline />), água (<MathFormula formula="n \\approx 1,33" inline />), vidro (<MathFormula formula="n \\approx 1,5" inline />).
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo 3: Refração Ar-Água</h4>
                <p className="text-slate-700 mb-3">
                  Um raio de luz passa do ar (<MathFormula formula="n_1 = 1,0" inline />) para a água (<MathFormula formula="n_2 = 1,33" inline />) com ângulo de incidência <MathFormula formula="\\theta_1 = 45°" inline />. Qual o ângulo de refração?
                </p>
                <div className="bg-white p-4 rounded mb-3">
                  <p className="font-bold text-slate-900 mb-2">Solução:</p>
                  <div className="space-y-2 text-slate-700">
                    <p>Usando a Lei de Snell:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)" />
                    </div>
                    <p>Substituindo os valores:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="1,0 \\cdot \\sin(45°) = 1,33 \\cdot \\sin(\\theta_2)" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="0,707 = 1,33 \\cdot \\sin(\\theta_2)" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="\\sin(\\theta_2) = \\frac{0,707}{1,33} = 0,532" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="\\theta_2 = \\arcsin(0,532) \\approx 32,1°" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <p className="text-sm text-green-900">
                    <strong>Resposta:</strong> O ângulo de refração é aproximadamente 32,1°. A luz "entorta" em direção à normal ao entrar na água porque a água tem maior índice de refração que o ar.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Espalhamento */}
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4">4️⃣ Espalhamento</h3>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r mb-4">
                <h4 className="font-bold text-slate-900 mb-3">O que é Espalhamento?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Espalhamento</strong> é o processo pelo qual a radiação eletromagnética é dispersa em várias direções ao interagir com partículas pequenas. Pense no céu azul: a luz do Sol é espalhada pelas moléculas de ar, e a luz azul (menor comprimento de onda) é espalhada mais que a luz vermelha (maior comprimento de onda).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Há três tipos principais de espalhamento: <strong>Rayleigh</strong> (partículas muito menores que o comprimento de onda), <strong>Mie</strong> (partículas do tamanho do comprimento de onda) e <strong>Compton</strong> (raios X espalhados por elétrons).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded p-6 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">Espalhamento Rayleigh</h4>
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <MathFormula formula="I \\propto \\frac{1}{\\lambda^4}" />
                </div>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <ul className="space-y-1 ml-6">
                    <li><MathFormula formula="I" inline /> = intensidade da luz espalhada</li>
                    <li><MathFormula formula="\\lambda" inline /> = comprimento de onda da luz (m)</li>
                  </ul>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <p className="text-sm text-slate-700">
                    <strong>Interpretação:</strong> A intensidade da luz espalhada é inversamente proporcional à quarta potência do comprimento de onda. Luz azul (<MathFormula formula="\\lambda \\approx 450 \\, \\text{nm}" inline />) é espalhada cerca de 10 vezes mais que luz vermelha (<MathFormula formula="\\lambda \\approx 650 \\, \\text{nm}" inline />), por isso o céu é azul.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-6">
                <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo 4: Por que o Céu é Azul?</h4>
                <p className="text-slate-700 mb-3">
                  Compare o espalhamento da luz azul (<MathFormula formula="\\lambda_\\text{azul} = 450 \\, \\text{nm}" inline />) com a luz vermelha (<MathFormula formula="\\lambda_\\text{vermelho} = 650 \\, \\text{nm}" inline />).
                </p>
                <div className="bg-white p-4 rounded mb-3">
                  <p className="font-bold text-slate-900 mb-2">Solução:</p>
                  <div className="space-y-2 text-slate-700">
                    <p>A razão entre as intensidades espalhadas é:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="\\frac{I_\\text{azul}}{I_\\text{vermelho}} = \\left(\\frac{\\lambda_\\text{vermelho}}{\\lambda_\\text{azul}}\\right)^4" />
                    </div>
                    <p>Substituindo os valores:</p>
                    <div className="bg-slate-50 p-3 rounded">
                      <MathFormula formula="\\frac{I_\\text{azul}}{I_\\text{vermelho}} = \\left(\\frac{650}{450}\\right)^4 = (1,44)^4 \\approx 4,3" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <p className="text-sm text-green-900">
                    <strong>Resposta:</strong> A luz azul é espalhada cerca de 4,3 vezes mais que a luz vermelha. Por isso, quando olhamos para o céu (longe do Sol), vemos predominantemente luz azul espalhada pelas moléculas de ar.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo-a-Passo */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🛤️ Passo-a-Passo: Como Resolver Problemas de Interação com Matéria</h3>
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <span><strong>Identifique o tipo de interação:</strong> É absorção, reflexão, refração ou espalhamento? Leia o enunciado com atenção para identificar qual fenômeno está ocorrendo.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <span><strong>Identifique os dados fornecidos:</strong> Quais são os valores de intensidade inicial, ângulos, índices de refração, comprimentos de onda, etc.?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <span><strong>Escolha a fórmula apropriada:</strong> Lei de Beer-Lambert para absorção, Lei da Reflexão para reflexão, Lei de Snell para refração, Espalhamento Rayleigh para espalhamento.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <span><strong>Substitua os valores na fórmula:</strong> Certifique-se de que todas as unidades estão consistentes (metros, radianos, etc.).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                  <span><strong>Resolva a equação:</strong> Faça os cálculos passo-a-passo, mostrando cada etapa intermediária.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">6.</span>
                  <span><strong>Interprete o resultado:</strong> O que o valor calculado significa fisicamente? Faz sentido? Por exemplo, se o ângulo de refração é menor que o ângulo de incidência, a luz "entortou" em direção à normal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">7.</span>
                  <span><strong>Verifique as unidades:</strong> O resultado final tem as unidades corretas? Intensidade em W/m², ângulos em graus ou radianos, etc.</span>
                </li>
              </ol>
            </div>

            {/* Aplicações Práticas */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🌐 Aplicações Práticas da Interação com Matéria</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">1. Óculos de Sol</h4>
                  <p className="text-sm text-slate-700">
                    Absorvem luz UV prejudicial aos olhos. Lentes polarizadas também reduzem reflexos.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">2. Fibras Ópticas</h4>
                  <p className="text-sm text-slate-700">
                    Usam reflexão total interna para transmitir luz (e dados) por longas distâncias sem perdas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">3. Lentes e Óculos</h4>
                  <p className="text-sm text-slate-700">
                    Usam refração para corrigir problemas de visão (miopia, hipermetropia, astigmatismo).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">4. Céu Azul e Pôr do Sol</h4>
                  <p className="text-sm text-slate-700">
                    Espalhamento Rayleigh explica por que o céu é azul durante o dia e vermelho ao pôr do sol.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">5. Espelhos e Retrovisores</h4>
                  <p className="text-sm text-slate-700">
                    Usam reflexão especular para formar imagens nítidas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">6. Painéis Solares</h4>
                  <p className="text-sm text-slate-700">
                    Absorvem luz solar e convertem a energia em eletricidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemplo Final */}
            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo 5: Reflexão Total Interna em Fibra Óptica</h4>
              <p className="text-slate-700 mb-3">
                Uma fibra óptica tem núcleo de vidro (<MathFormula formula="n_1 = 1,5" inline />) e casca de vidro com menor índice (<MathFormula formula="n_2 = 1,4" inline />). Qual o ângulo crítico para reflexão total interna?
              </p>
              <div className="bg-white p-4 rounded mb-3">
                <p className="font-bold text-slate-900 mb-2">Solução:</p>
                <div className="space-y-2 text-slate-700">
                  <p>O ângulo crítico <MathFormula formula="\\theta_c" inline /> é dado por:</p>
                  <div className="bg-slate-50 p-3 rounded">
                    <MathFormula formula="\\sin(\\theta_c) = \\frac{n_2}{n_1}" />
                  </div>
                  <p>Substituindo os valores:</p>
                  <div className="bg-slate-50 p-3 rounded">
                    <MathFormula formula="\\sin(\\theta_c) = \\frac{1,4}{1,5} = 0,933" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded">
                    <MathFormula formula="\\theta_c = \\arcsin(0,933) \\approx 69°" />
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                <p className="text-sm text-green-900">
                  <strong>Resposta:</strong> O ângulo crítico é aproximadamente 69°. Se a luz incidir com ângulo maior que 69° (em relação à normal), ela será totalmente refletida dentro do núcleo, permitindo que a luz viaje por longas distâncias sem escapar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Resumo
          </h3>
          <p className="text-slate-700 text-sm">
            A radiação eletromagnética interage com a matéria de quatro formas principais: <strong>absorção</strong> (energia transferida para o material), <strong>reflexão</strong> (ângulo de incidência = ângulo de reflexão), <strong>refração</strong> (mudança de direção ao mudar de meio, Lei de Snell), e <strong>espalhamento</strong> (dispersão em várias direções, Rayleigh/Mie/Compton). Aplicações incluem óculos, fibras ópticas, lentes, céu azul, espelhos e painéis solares.
          </p>
        </div>
      </section>
    </div>
  );
}
