import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Learn() {
  useEffect(() => {
    // Carregar MathJax para renderizar fórmulas LaTeX
    const script = document.createElement("script");
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.id = "MathJax-script";
    script2.async = true;
    script2.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    document.head.appendChild(script2);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Guia Completo de Cinemática</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">1. Introdução à Cinemática</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A <strong>Cinemática</strong> é o ramo da Física que estuda o movimento dos corpos sem considerar as causas que o produzem (as forças). Ela descreve como os objetos se movem, analisando posição, velocidade e aceleração ao longo do tempo.
            </p>
            <p>Os conceitos fundamentais da cinemática são:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Posição (s):</strong> Local onde o objeto se encontra em relação a um referencial</li>
              <li><strong>Velocidade (v):</strong> Taxa de variação da posição em relação ao tempo</li>
              <li><strong>Aceleração (a):</strong> Taxa de variação da velocidade em relação ao tempo</li>
            </ul>
          </div>
        </Card>

        {/* Velocidade Média */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">2. Velocidade Média</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A velocidade média é a razão entre o deslocamento total e o intervalo de tempo gasto.</p>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula:</p>
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$v_m = \frac{\Delta s}{\Delta t} = \frac{s_f - s_i}{t_f - t_i}$$`}} />
              <p className="text-sm text-slate-600">Onde: v_m = velocidade média, Δs = deslocamento, Δt = intervalo de tempo</p>
            </div>
            <p><strong>Interpretação Física:</strong> A velocidade média nos diz o quão rápido um objeto se desloca em média durante um intervalo de tempo. Por exemplo, se um carro percorre 100 km em 2 horas, sua velocidade média é de 50 km/h.</p>
          </div>
        </Card>

        {/* Aceleração */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">3. Aceleração</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A aceleração é a taxa de variação da velocidade em relação ao tempo. Ela indica como a velocidade muda.</p>
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula:</p>
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$a = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t_f - t_i}$$`}} />
              <p className="text-sm text-slate-600">Onde: a = aceleração, Δv = variação de velocidade, Δt = intervalo de tempo</p>
            </div>
            <p><strong>Interpretação Física:</strong> Se a aceleração é positiva, a velocidade está aumentando. Se é negativa (desaceleração), a velocidade está diminuindo.</p>
          </div>
        </Card>

        {/* MRU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">4. Movimento Retilíneo Uniforme (MRU)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O MRU é o movimento em linha reta com velocidade constante. Isso significa que a aceleração é zero.</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Fundamental:</p>
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$s = s_0 + v \cdot t$$`}} />
              <p className="text-sm text-slate-600">Onde: s = posição final, s_0 = posição inicial, v = velocidade (constante), t = tempo</p>
            </div>
            <p><strong>Derivação:</strong> Como a velocidade é constante:</p>
            <div className="bg-slate-100 p-3 md:p-4 rounded-lg text-xs md:text-sm overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$v = \frac{s - s_0}{t} \Rightarrow s - s_0 = v \cdot t \Rightarrow s = s_0 + v \cdot t$$`}} />
            <p><strong>Exemplo Prático:</strong> Um carro viaja a 80 km/h em uma estrada reta. Se ele começa na posição 0 km, após 2 horas estará na posição: s = 0 + 80 × 2 = 160 km.</p>
          </div>
        </Card>

        {/* MRUV */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">5. Movimento Uniformemente Variado (MRUV)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O MRUV é o movimento em linha reta com aceleração constante. A velocidade varia linearmente com o tempo.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Fórmula 1: Velocidade em função do tempo</h3>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$v = v_0 + a \cdot t$$`}} />
              <p className="text-sm text-slate-600">Onde: v = velocidade final, v_0 = velocidade inicial, a = aceleração, t = tempo</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Fórmula 2: Posição em função do tempo</h3>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$s = s_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2$$`}} />
              <p className="text-sm text-slate-600">Onde: s = posição final, s_0 = posição inicial, v_0 = velocidade inicial, a = aceleração, t = tempo</p>
            </div>

            <p><strong>Derivação:</strong> A posição é a integral da velocidade:</p>
            <div className="bg-slate-100 p-3 md:p-4 rounded-lg text-xs md:text-sm overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$s = s_0 + \int_0^t v \, dt = s_0 + \int_0^t (v_0 + a \cdot t) \, dt = s_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2$$`}} />

            <p><strong>Exemplo Prático:</strong> Um carro parte do repouso (v_0 = 0) com aceleração constante de 2 m/s². Após 5 segundos:</p>
            <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v = 0 + 2 \times 5 = 10 \text{ m/s}$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$s = 0 + 0 \times 5 + \frac{1}{2} \times 2 \times 5^2 = 25 \text{ m}$$`}} />
            </div>
          </div>
        </Card>

        {/* Torricelli */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">6. Equação de Torricelli</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A equação de Torricelli relaciona velocidade, aceleração e deslocamento sem depender do tempo. É muito útil quando o tempo não é conhecido.</p>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto">
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$v^2 = v_0^2 + 2 \cdot a \cdot \Delta s$$`}} />
              <p className="text-sm text-slate-600">Onde: v = velocidade final, v_0 = velocidade inicial, a = aceleração, Δs = deslocamento</p>
            </div>

            <p><strong>Derivação:</strong> Partindo das duas equações do MRUV:</p>
            <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
              <div dangerouslySetInnerHTML={{__html: String.raw`$$\text{De } v = v_0 + a \cdot t, \text{ temos: } t = \frac{v - v_0}{a}$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$\text{Substituindo em } s = s_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2:$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v^2 = v_0^2 + 2 \cdot a \cdot (s - s_0) = v_0^2 + 2 \cdot a \cdot \Delta s$$`}} />
            </div>

            <p><strong>Exemplo Prático:</strong> Um carro viaja a 20 m/s e acelera a 2 m/s² por 50 m. Qual é sua velocidade final?</p>
            <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v^2 = 20^2 + 2 \times 2 \times 50 = 400 + 200 = 600$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v = \sqrt{600} \approx 24.5 \text{ m/s}$$`}} />
            </div>
          </div>
        </Card>

        {/* Queda Livre */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">7. Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Queda livre é um caso especial do MRUV onde a aceleração é a aceleração da gravidade (g = 9,8 m/s² ou 10 m/s² para simplificação).</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmulas de Queda Livre:</p>
              <div className="space-y-3 font-mono overflow-x-auto">
                <div className="text-center text-lg md:text-xl" dangerouslySetInnerHTML={{__html: String.raw`$$v = g \cdot t$$`}} />
                <div className="text-center text-xl" dangerouslySetInnerHTML={{__html: String.raw`$$h = \frac{1}{2} g \cdot t^2$$`}} />
                <div className="text-center text-xl" dangerouslySetInnerHTML={{__html: String.raw`$$v^2 = 2 \cdot g \cdot h$$`}} />
              </div>
            </div>

            <p><strong>Exemplo Prático:</strong> Uma bola é solta de uma altura de 45 m. Quanto tempo leva para cair?</p>
            <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
              <div dangerouslySetInnerHTML={{__html: String.raw`$$h = \frac{1}{2} g \cdot t^2 \Rightarrow 45 = \frac{1}{2} \times 10 \times t^2$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$t^2 = 9 \Rightarrow t = 3 \text{ s}$$`}} />
              <p className="mt-2">Velocidade ao atingir o solo:</p>
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v = 10 \times 3 = 30 \text{ m/s}$$`}} />
            </div>
          </div>
        </Card>

        {/* MCU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">8. Movimento Circular Uniforme (MCU)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O MCU é o movimento em uma trajetória circular com velocidade escalar constante. A velocidade muda de direção continuamente, resultando em aceleração centrípeta.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Velocidade Tangencial</h3>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$v = \frac{2\pi r}{T} = 2\pi r f$$`}} />
              <p className="text-sm text-slate-600">Onde: r = raio, T = período, f = frequência</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Aceleração Centrípeta</h3>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <div className="text-center text-lg md:text-2xl mb-4 overflow-x-auto" dangerouslySetInnerHTML={{__html: String.raw`$$a_c = \frac{v^2}{r} = \omega^2 r$$`}} />
              <p className="text-sm text-slate-600">Onde: ac = aceleração centrípeta, ω = velocidade angular</p>
            </div>

            <p><strong>Exemplo Prático:</strong> Um objeto gira em um círculo de raio 5 m com período de 2 s. Qual é sua velocidade tangencial?</p>
            <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
              <div dangerouslySetInnerHTML={{__html: String.raw`$$v = \frac{2\pi \times 5}{2} = 5\pi \approx 15.7 \text{ m/s}$$`}} />
              <div dangerouslySetInnerHTML={{__html: String.raw`$$a_c = \frac{(15.7)^2}{5} \approx 49.3 \text{ m/s}^2$$`}} />
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Resumo das Fórmulas Principais</h2>
          <div className="space-y-3 text-slate-700">
            <p>📌 <strong>MRU:</strong> s = s_0 + v·t</p>
            <p>📌 <strong>MRUV (Velocidade):</strong> v = v_0 + a·t</p>
            <p>📌 <strong>MRUV (Posição):</strong> s = s_0 + v_0·t + (1/2)a·t²</p>
            <p>📌 <strong>Torricelli:</strong> v² = v_0² + 2·a·Δs</p>
            <p>📌 <strong>Queda Livre:</strong> h = (1/2)g·t²</p>
            <p>📌 <strong>MCU (Velocidade):</strong> v = 2πr/T</p>
            <p>📌 <strong>MCU (Aceleração):</strong> ac = v²/r</p>
          </div>
        </Card>

        {/* CTA */}
        <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
          <Link href="/calculator">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Calculadora
            </Button>
          </Link>
          <Link href="/graphs">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Gráficos Dinâmicos
            </Button>
          </Link>
          <Link href="/quiz">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Quiz Interativo
            </Button>
          </Link>
          <Link href="/formulas">
            <Button size="lg" variant="outline">
              Fórmulas
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
