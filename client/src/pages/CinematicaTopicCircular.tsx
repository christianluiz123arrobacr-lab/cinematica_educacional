import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicCircular() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Movimento Circular Uniforme (MCU)</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Quando as Coisas Giram</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Pense em um carrossel girando, em um satélite orbitando a Terra, ou em uma roda de bicicleta. Todos esses são exemplos de movimento circular.</p>
            <p>O interessante é que, mesmo que a velocidade seja constante em <strong>magnitude</strong> (rapidez), a <strong>direção</strong> está sempre mudando. E isso significa que há aceleração! Confuso? Vamos entender.</p>
          </div>
        </Card>

        {/* O Que é MCU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Movimento Circular Uniforme?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p><strong>MCU:</strong> Um objeto se move em um círculo, sempre com a mesma rapidez, mas a direção muda continuamente.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">As Características Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Velocidade Constante em Magnitude:</strong> A rapidez não muda (sempre 60 km/h, por exemplo).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Direção Sempre Mudando:</strong> A cada instante, o objeto aponta para uma direção diferente.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Trajetória Circular:</strong> O caminho é um círculo perfeito.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span><strong>Aceleração Centrípeta:</strong> Há uma aceleração dirigida para o centro do círculo.</span>
              </li>
            </ul>

            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-2"><strong>Analogia:</strong> Imagine você em um carrossel. Você se move com a mesma rapidez o tempo todo, mas está sempre virando. Essa mudança de direção é aceleração!</p>
            </div>
          </div>
        </Card>

        {/* Conceitos Importantes */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conceitos Importantes do MCU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">1. Período (T) - Quanto Tempo Leva para Dar Uma Volta?</h3>
            <p>É o tempo necessário para o objeto completar uma volta completa no círculo.</p>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p><strong>Exemplo:</strong> Um satélite que leva 90 minutos para orbitar a Terra tem período T = 90 min.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. Frequência (f) - Quantas Voltas por Segundo?</h3>
            <p>É o número de voltas que o objeto completa em 1 segundo.</p>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$f = \\frac{1}{T}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Frequência é o inverso do período</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Velocidade Linear (v) - Quão Rápido Ele Se Move?</h3>
            <p>É a rapidez com que o objeto percorre o círculo.</p>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$v = \\frac{2\\pi r}{T}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Velocidade = Perímetro do círculo / Período</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Velocidade Angular (ω) - Quão Rápido Ele Gira?</h3>
            <p>É o ângulo que o objeto percorre por unidade de tempo. Medida em radianos por segundo (rad/s).</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$\\omega = \\frac{2\\pi}{T} = 2\\pi f$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Velocidade angular = 2π / Período</p>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p><strong>Relação importante:</strong> v = ω × r (velocidade linear = velocidade angular × raio)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">5. Aceleração Centrípeta (ac) - A Aceleração Dirigida para o Centro</h3>
            <p>É a aceleração que muda a direção do objeto, mantendo-o em movimento circular.</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$a_c = \\frac{v^2}{r} = \\omega^2 \\cdot r$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Aceleração centrípeta = Velocidade² / Raio</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>Importante:</strong> Essa aceleração não muda a rapidez, apenas a direção! É por isso que o movimento é "uniforme" (rapidez constante).</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos do Mundo Real</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">1.</span>
                <div>
                  <strong>Satélite em órbita:</strong> Um satélite orbita a Terra em uma órbita circular com período de 90 minutos. Ele se move com velocidade constante, mas está sempre acelerando em direção ao centro da Terra!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">2.</span>
                <div>
                  <strong>Roda de bicicleta:</strong> Uma roda que gira a 100 RPM (rotações por minuto) tem frequência de 100/60 ≈ 1,67 Hz.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">3.</span>
                <div>
                  <strong>Carrossel:</strong> Um carrossel que completa uma volta a cada 10 segundos tem período T = 10 s e frequência f = 0,1 Hz.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">4.</span>
                <div>
                  <strong>Ponteiros do relógio:</strong> O ponteiro dos segundos completa uma volta a cada 60 segundos (T = 60 s). O ponteiro das horas leva 12 horas (T = 43.200 s).
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Erros Comuns */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-red-50">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Erros Comuns</h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "No MCU não há aceleração porque a velocidade é constante"<br/><strong>Verdade:</strong> A rapidez é constante, mas a direção muda. Isso é aceleração! É chamada aceleração centrípeta.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Confundir velocidade linear com velocidade angular"<br/><strong>Verdade:</strong> São coisas diferentes! Linear é em m/s, angular é em rad/s.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer de converter RPM para Hz"<br/><strong>Verdade:</strong> RPM = rotações por minuto. Para converter para Hz (rotações por segundo), divida por 60!</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Dicas Práticas */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-yellow-50">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-4">💡 Dicas para Lembrar</h3>
              <ul className="space-y-3 text-yellow-900">
                <li><strong>Período:</strong> Quanto tempo leva para dar uma volta? Medido em segundos.</li>
                <li><strong>Frequência:</strong> Quantas voltas por segundo? Medida em Hz (Hertz).</li>
                <li><strong>Velocidade Linear:</strong> Quão rápido ele se move? Medida em m/s.</li>
                <li><strong>Aceleração Centrípeta:</strong> Sempre aponta para o centro do círculo!</li>
                <li><strong>Relação útil:</strong> v = ω × r (conecta velocidade linear e angular)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>MCU:</strong> Movimento em círculo com velocidade constante em magnitude</p>
            <p><strong>Período (T):</strong> Tempo para uma volta completa</p>
            <p><strong>Frequência (f):</strong> Número de voltas por segundo (f = 1/T)</p>
            <p><strong>Velocidade Linear:</strong> v = 2πr/T</p>
            <p><strong>Aceleração Centrípeta:</strong> ac = v²/r (dirigida para o centro)</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
