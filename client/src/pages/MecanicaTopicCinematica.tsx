import { Link } from "wouter";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function MecanicaTopicCinematica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/mecanica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática - Nível ITA/IME</h1>
              <p className="text-xs text-slate-600">Mecânica</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* ===== INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📍 Cinemática: O Estudo do Movimento</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Rigorosa</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Cinemática é o ramo da Mecânica que descreve o movimento dos corpos sem considerar as causas (forças) que o produzem.</strong> Ela estuda as grandezas: posição, deslocamento, velocidade e aceleração.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Diferentemente da Dinâmica (que estuda as forças), a Cinemática é puramente descritiva. Ela responde: "Como o objeto se move?" mas não "Por que se move assim?"
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">🎯 Conceitos Fundamentais</h4>
              <div className="space-y-3 text-slate-700 text-sm">
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold mb-1">Posição:</p>
                  <MathFormula formula={String.raw`$$x \\text{ ou } s$$`} display={false} />
                  <p className="text-xs mt-1">Localização do objeto em relação a um referencial (origem).</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold mb-1">Deslocamento:</p>
                  <MathFormula formula={String.raw`$$\Delta x = x_{final} - x_{inicial}$$`} display={false} />
                  <p className="text-xs mt-1">Variação de posição. É um vetor!</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold mb-1">Distância:</p>
                  <MathFormula formula={String.raw`$$d = \\text{comprimento total do caminho percorrido}$$`} display={false} />
                  <p className="text-xs mt-1">É um escalar (sempre positivo).</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold mb-1">Velocidade:</p>
                  <MathFormula formula={String.raw`$$v = \\frac{\\Delta x}{\\Delta t}$$`} display={false} />
                  <p className="text-xs mt-1">Taxa de variação da posição. Pode ser média ou instantânea.</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold mb-1">Aceleração:</p>
                  <MathFormula formula={String.raw`$$a = \\frac{\\Delta v}{\\Delta t}$$`} display={false} />
                  <p className="text-xs mt-1">Taxa de variação da velocidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 1: MRU ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1️⃣ Movimento Retilíneo Uniforme (MRU)</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição e Características</h3>
              <p className="text-slate-700 mb-4">
                <strong>MRU é o movimento com velocidade constante em linha reta.</strong> Isso implica aceleração nula.
              </p>
              <div className="bg-white border border-blue-300 rounded p-4 space-y-3">
                <p className="font-bold text-slate-900 mb-2">Características:</p>
                <div className="space-y-2">
                  <div className="bg-blue-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$v = \\text{constante}$$`} display={false} />
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$a = 0$$`} display={false} />
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$\Delta x \\propto t$$`} display={false} />
                    <p className="text-xs text-slate-600 mt-1">Deslocamento é proporcional ao tempo</p>
                  </div>
                  <p className="text-slate-700 text-sm">• Trajetória é uma linha reta</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equações Fundamentais do MRU</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Velocidade Média:</p>
                  <MathFormula formula={String.raw`$$$$v = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}$$$$`} display={true} />
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Equação Horária da Posição:</p>
                  <MathFormula formula={String.raw`$$$$x(t) = x_0 + v \\cdot t$$$$`} display={true} />
                  <div className="bg-green-50 p-2 rounded mt-2">
                    <MathFormula formula={String.raw`$$$$\\text{Onde: } x_0 = \\text{posição inicial}, \\quad v = \\text{velocidade (constante)}, \\quad t = \\text{tempo}$$$$`} display={true} />
                  </div>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Deslocamento Escalar:</p>
                  <MathFormula formula={String.raw`$$$$\\Delta x = v \\cdot \\Delta t$$$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border border-blue-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 1: Problema Clássico de Encontro (ESPCEX)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Dois trens partem simultaneamente de duas estações A e B, distantes 600 km. O trem 1 sai de A com velocidade constante de 80 km/h em direção a B. O trem 2 sai de B com velocidade constante de 70 km/h em direção a A. Determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) Tempo até o encontro</p>
                <p className="text-slate-700 text-sm mb-3">b) Posição do encontro em relação a A</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Estabelecer referencial</strong></p>
                  <p className="ml-4">Origem em A, sentido positivo para B.</p>
                  
                  <p className="mt-3"><strong>Passo 2: Escrever equações horárias</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$\\text{Trem 1: } x_1(t) = 0 + 80t = 80t$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$\\text{Trem 2: } x_2(t) = 600 - 70t$$$$`} display={true} />
                    <p className="text-xs text-slate-600 mt-2">(velocidade negativa, pois vai contra o sentido positivo)</p>
                  </div>
                  
                  <p className="mt-3"><strong>Passo 3: Encontro ocorre quando</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$x_1 = x_2$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$80t = 600 - 70t$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$150t = 600$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$t = 4 \\text{ horas}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Posição do encontro</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$x = 80 \\times 4 = 320 \\text{ km de A}$$$$`} display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Resposta:</p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{a) } t = 4 \\text{ horas}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{b) } x = 320 \\text{ km de A (ou } 280 \\text{ km de B)}$$$$`} display={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: MRUV ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">2️⃣ Movimento Retilíneo Uniformemente Variado (MRUV)</h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição e Características</h3>
              <p className="text-slate-700 mb-4">
                <strong>MRUV é o movimento com aceleração constante em linha reta.</strong> A velocidade varia linearmente com o tempo.
              </p>
              <div className="bg-white border border-red-300 rounded p-4 space-y-3">
                <p className="font-bold text-slate-900 mb-2">Características:</p>
                <div className="space-y-2">
                  <div className="bg-red-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$a = \\text{constante} \\neq 0$$`} display={false} />
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$v(t) = v_0 + at$$`} display={false} />
                    <p className="text-xs text-slate-600 mt-1">Velocidade varia linearmente</p>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$\Delta x \\propto t^2$$`} display={false} />
                    <p className="text-xs text-slate-600 mt-1">Deslocamento varia quadraticamente</p>
                  </div>
                  <p className="text-slate-700 text-sm">• Trajetória é uma linha reta</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equações Fundamentais do MRUV</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">1. Velocidade em Função do Tempo:</p>
                  <MathFormula formula={String.raw`$$$$v(t) = v_0 + a \\cdot t$$$$`} display={true} />
                  <div className="bg-orange-50 p-2 rounded mt-2">
                    <MathFormula formula={String.raw`$$$$\\text{Onde: } v_0 = \\text{velocidade inicial}, \\quad a = \\text{aceleração (constante)}$$$$`} display={true} />
                  </div>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">2. Posição em Função do Tempo:</p>
                  <MathFormula formula={String.raw`$$$$x(t) = x_0 + v_0 \\cdot t + \\frac{1}{2} a \\cdot t^2$$$$`} display={true} />
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">3. Equação de Torricelli (sem tempo):</p>
                  <MathFormula formula={String.raw`$$$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta x$$$$`} display={true} />
                  <p className="text-slate-700 text-sm mt-2">Muito útil quando não conhecemos o tempo!</p>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">4. Deslocamento Médio:</p>
                  <MathFormula formula={String.raw`$$$$\\Delta x = \\frac{(v_0 + v) \\cdot t}{2}$$$$`} display={true} />
                  <p className="text-slate-700 text-sm mt-2">Também igual à velocidade média vezes o tempo</p>
                </div>

                <div className="bg-white border border-orange-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">5. Aceleração Média:</p>
                  <MathFormula formula={String.raw`$$$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t}$$$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border border-red-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 2: Frenagem de Emergência (EFOMM)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Um carro viaja a 90 km/h quando o motorista avista um obstáculo a 50 m de distância. Ele freia imediatamente com aceleração constante de -5 m/s². Determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) Velocidade ao atingir o obstáculo</p>
                <p className="text-slate-700 text-sm mb-2">b) Tempo de frenagem até parar</p>
                <p className="text-slate-700 text-sm mb-3">c) Distância de frenagem até parar completamente</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Converter unidades</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v_0 = 90 \\text{ km/h} = \\frac{90}{3,6} = 25 \\text{ m/s}$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$a = -5 \\text{ m/s}^2 \\quad \\text{(negativa porque freia)}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 2: Velocidade ao atingir o obstáculo (50 m)</strong></p>
                  <p className="ml-4">Usar Torricelli:</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v^2 = v_0^2 + 2a\\Delta x$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$v^2 = 25^2 + 2 \\times (-5) \\times 50$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$v^2 = 625 - 500 = 125$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$v = \\sqrt{125} = 5\\sqrt{5} \\approx 11,18 \\text{ m/s}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 3: Tempo até parar completamente</strong></p>
                  <p className="ml-4">Usar</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v = v_0 + at, \\quad \\text{com } v = 0$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$0 = 25 + (-5) \\times t$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$t = 5 \\text{ segundos}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Distância de frenagem total</strong></p>
                  <p className="ml-4">Usar Torricelli com</p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v = 0$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$0 = 25^2 + 2 \\times (-5) \\times \\Delta x$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$10 \\Delta x = 625$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$\\Delta x = 62,5 \\text{ m}$$$$`} display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded p-4 mt-4">
                <p className="font-bold text-red-900 mb-2">⚠️ Análise Crítica:</p>
                <p className="text-red-900 text-sm mb-2">O carro NÃO consegue parar a tempo! Ele atinge o obstáculo com velocidade de 11,18 m/s (≈ 40 km/h). Distância necessária (62,5 m) é maior que a disponível (50 m).</p>
                <p className="text-red-900 text-sm"><strong>Conclusão:</strong> Haverá colisão!</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{a) } v \\approx 11,18 \\text{ m/s} \\approx 40,2 \\text{ km/h}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{b) } t = 5 \\text{ s (tempo até parar completamente)}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{c) } \\Delta x = 62,5 \\text{ m (distância total de frenagem)}$$$$`} display={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: LANÇAMENTOS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">3️⃣ Lançamentos: Horizontal, Oblíquo e Vertical</h2>
          
          <div className="space-y-8">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Princípio da Superposição</h3>
              <p className="text-slate-700 mb-4">
                <strong>Lançamentos são movimentos compostos:</strong> movimento horizontal (MRU) + movimento vertical (MRUV sob gravidade).
              </p>
              <div className="bg-white border border-purple-300 rounded p-4">
                <p className="font-bold text-slate-900 mb-2">Decomposição:</p>
                <div className="space-y-2">
                  <div className="bg-purple-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{Eixo X (horizontal): } v_x = \\text{constante (sem aceleração)}$$$$`} display={true} />
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{Eixo Y (vertical): } a_y = -g = -10 \\text{ m/s}^2 \\text{ (aceleração da gravidade)}$$$$`} display={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* LANÇAMENTO HORIZONTAL */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A. Lançamento Horizontal</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Equações do Lançamento Horizontal:</p>
                  <p className="text-slate-700 text-sm mb-2">Eixo X (horizontal):</p>
                  <MathFormula formula={String.raw`$$$$x(t) = v_0 \\cdot t$$$$`} display={true} />
                  
                  <p className="text-slate-700 text-sm mt-3 mb-2">Eixo Y (vertical):</p>
                  <MathFormula formula={String.raw`$$$$y(t) = h - \\frac{1}{2}g t^2$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$v_y(t) = -g \\cdot t$$$$`} display={true} />
                </div>

                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Tempo de Queda (até y = 0):</p>
                  <MathFormula formula={String.raw`$$$$0 = h - \\frac{1}{2}g t^2 \\Rightarrow t = \\sqrt{\\frac{2h}{g}}$$$$`} display={true} />
                </div>

                <div className="bg-white border border-blue-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Alcance Horizontal:</p>
                  <MathFormula formula={String.raw`$$$$A = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}$$$$`} display={true} />
                </div>
              </div>
            </div>

            {/* LANÇAMENTO OBLÍQUO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">B. Lançamento Oblíquo</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Decomposição da Velocidade Inicial:</p>
                  <MathFormula formula={String.raw`$$$$v_{0x} = v_0 \\cos\\theta$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$v_{0y} = v_0 \\sin\\theta$$$$`} display={true} />
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Equações Horárias:</p>
                  <MathFormula formula={String.raw`$$$$x(t) = v_0 \\cos\\theta \\cdot t$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}g t^2$$$$`} display={true} />
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Tempo de Voo (até y = 0):</p>
                  <MathFormula formula={String.raw`$$$$t_{voo} = \\frac{2 v_0 \\sin\\theta}{g}$$$$`} display={true} />
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Alcance Máximo:</p>
                  <MathFormula formula={String.raw`$$$$A = \\frac{v_0^2 \\sin(2\\theta)}{g}$$$$`} display={true} />
                  <div className="bg-green-50 p-2 rounded mt-2">
                    <MathFormula formula={String.raw`$$$$\\text{Máximo quando } \\theta = 45°$$$$`} display={true} />
                  </div>
                </div>

                <div className="bg-white border border-green-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Altura Máxima:</p>
                  <MathFormula formula={String.raw`$$$$h_{max} = \\frac{(v_0 \\sin\\theta)^2}{2g}$$$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border border-purple-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 3: Lançamento Oblíquo (EEAR)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Um projétil é lançado com velocidade inicial de 50 m/s em um ângulo de 30° com a horizontal. Considerando g = 10 m/s², determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) Altura máxima atingida</p>
                <p className="text-slate-700 text-sm mb-2">b) Tempo de voo total</p>
                <p className="text-slate-700 text-sm mb-3">c) Alcance horizontal máximo</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Decomposição da velocidade inicial</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v_{0x} = 50 \\cos(30°) = 50 \\times \\frac{\\sqrt{3}}{2} = 25\\sqrt{3} \\text{ m/s}$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$v_{0y} = 50 \\sin(30°) = 50 \\times \\frac{1}{2} = 25 \\text{ m/s}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 2: Altura máxima</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$h_{max} = \\frac{(25)^2}{2 \\times 10} = \\frac{625}{20} = 31,25 \\text{ m}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 3: Tempo de voo</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$t_{voo} = \\frac{2 \\times 25}{10} = 5 \\text{ s}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Alcance horizontal</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$A = 25\\sqrt{3} \\times 5 = 125\\sqrt{3} \\approx 216,5 \\text{ m}$$$$`} display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{a) } h_{max} = 31,25 \\text{ m}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{b) } t_{voo} = 5 \\text{ s}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{c) } A = 125\\sqrt{3} \\approx 216,5 \\text{ m}$$$$`} display={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4: MCU ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">4️⃣ Movimento Circular Uniforme (MCU)</h2>
          
          <div className="space-y-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição e Grandezas</h3>
              <p className="text-slate-700 mb-4">
                <strong>MCU é o movimento em trajetória circular com velocidade escalar constante.</strong> Apesar da velocidade escalar ser constante, há aceleração (centrípeta) pois a direção muda.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-indigo-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Grandezas Angulares:</p>
                  <MathFormula formula={String.raw`$$$$\\omega = \\frac{\\theta}{t} \\quad \\text{(velocidade angular)}$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$f = \\frac{1}{T} \\quad \\text{(frequência)}$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$T = \\frac{2\\pi}{\\omega} \\quad \\text{(período)}$$$$`} display={true} />
                </div>

                <div className="bg-white border border-indigo-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Relação entre Grandezas Lineares e Angulares:</p>
                  <MathFormula formula={String.raw`$$$$v = \\omega \\cdot R$$$$`} display={true} />
                  <MathFormula formula={String.raw`$$$$a_c = \\frac{v^2}{R} = \\omega^2 \\cdot R$$$$`} display={true} />
                </div>

                <div className="bg-white border border-indigo-300 rounded p-4">
                  <p className="font-bold text-slate-900 mb-2">Deslocamento Angular:</p>
                  <MathFormula formula={String.raw`$$$$\\theta(t) = \\theta_0 + \\omega \\cdot t$$$$`} display={true} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-lg border border-indigo-300">
              <p className="font-bold mb-4 text-lg">📝 Exemplo 4: Satélite em Órbita Circular (AFA)</p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-slate-700 mb-3"><strong>Enunciado:</strong></p>
                <p className="text-slate-700 text-sm mb-3">
                  Um satélite geoestacionário orbita a Terra em uma órbita circular. Sabendo que o período é T = 24 horas e o raio da órbita é R = 42.000 km, determine:
                </p>
                <p className="text-slate-700 text-sm mb-2">a) Velocidade angular em rad/s</p>
                <p className="text-slate-700 text-sm mb-2">b) Velocidade linear em m/s</p>
                <p className="text-slate-700 text-sm mb-3">c) Aceleração centrípeta em m/s²</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-3">Resolução Detalhada:</p>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p><strong>Passo 1: Converter unidades</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$T = 24 \\text{ h} = 24 \\times 3600 = 86.400 \\text{ s}$$$$`} display={true} />
                    <MathFormula formula={String.raw`$$$$R = 42.000 \\text{ km} = 42 \\times 10^6 \\text{ m}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 2: Velocidade angular</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{86.400} \\approx 7,27 \\times 10^{-5} \\text{ rad/s}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 3: Velocidade linear</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$v = \\omega R = 7,27 \\times 10^{-5} \\times 42 \\times 10^6 \\approx 3.054 \\text{ m/s}$$$$`} display={true} />
                  </div>
                  
                  <p className="mt-3"><strong>Passo 4: Aceleração centrípeta</strong></p>
                  <div className="bg-white p-2 rounded ml-4 mt-2">
                    <MathFormula formula={String.raw`$$$$a_c = \\omega^2 R = (7,27 \\times 10^{-5})^2 \\times 42 \\times 10^6 \\approx 0,22 \\text{ m/s}^2$$$$`} display={true} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
                <p className="font-bold text-green-900 mb-2">✅ Respostas:</p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{a) } \\omega \\approx 7,27 \\times 10^{-5} \\text{ rad/s}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{b) } v \\approx 3.054 \\text{ m/s (≈ 11.000 km/h)}$$$$`} display={true} />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <MathFormula formula={String.raw`$$$$\\text{c) } a_c \\approx 0,22 \\text{ m/s}^2$$$$`} display={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RESUMO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo de Fórmulas Essenciais</h3>
          <div className="space-y-3 text-green-900 text-sm">
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$$$\\text{MRU: } x = x_0 + vt$$$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$$$\\text{MRUV: } v = v_0 + at; \\quad x = x_0 + v_0 t + \\frac{1}{2}at^2; \\quad v^2 = v_0^2 + 2a\\Delta x$$$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$$$\\text{Lançamento Oblíquo: } A = \\frac{v_0^2\\sin 2\\theta}{g}; \\quad h_{max} = \\frac{v_0^2\\sin^2\\theta}{2g}$$$$`} display={true} />
            </div>
            <div className="bg-white p-2 rounded">
              <MathFormula formula={String.raw`$$$$\\text{MCU: } v = \\omega R; \\quad a_c = \\frac{v^2}{R} = \\omega^2 R; \\quad T = \\frac{2\\pi}{\\omega}$$$$`} display={true} />
            </div>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que domina Cinemática, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mecanica/topic/dinamica">
              <Button className="bg-blue-600 hover:bg-blue-700">Dinâmica - Leis de Newton</Button>
            </Link>
            <Link href="/mecanica">
              <Button variant="outline">Voltar para Mecânica</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
