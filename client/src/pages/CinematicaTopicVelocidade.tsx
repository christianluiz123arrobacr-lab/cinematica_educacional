import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicVelocidade() {
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
          <h1 className="text-2xl font-bold text-slate-900">Velocidade e Aceleração</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Por Que Precisamos Entender Isso?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Pense em um carro saindo de um sinal de trânsito. Ele não sai do repouso direto a 60 km/h. Ele <strong>acelera gradualmente</strong>. Velocidade e aceleração são conceitos que descrevem exatamente isso: como algo se move e como essa velocidade muda.</p>
            <p>Você usa esses conceitos todos os dias: quando pisa no acelerador do carro, quando freia, quando faz uma curva. A física só está dando nomes e fórmulas para o que você já vê acontecendo!</p>
          </div>
        </Card>

        {/* Velocidade - Explicação Simples */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Velocidade?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800">
              <strong>Velocidade = Quão rápido você se move E em qual direção</strong>
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="mb-2"><strong>Exemplo simples:</strong></p>
              <p>Se você percorre 100 km em 2 horas, sua velocidade é 50 km/h. Mas se você vai para o norte a 50 km/h, isso é diferente de ir para o sul a 50 km/h!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Velocidade Média (A Mais Fácil)</h3>
            <p>É a velocidade que você teria se viajasse em linha reta sem parar, do ponto A ao ponto B. Tipo quando você diz: "Fiz 300 km em 3 horas, então viajei a 100 km/h em média".</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto my-4">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula da Velocidade Média:</p>
              <MathFormula formula={String.raw`$$$$v_m = \\frac{\\text{distância total}}{\\text{tempo total}}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Ou em letras: v_m = Δs / Δt</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Velocidade Instantânea (A Mais Realista)</h3>
            <p>É a velocidade <strong>neste exato momento</strong>. Tipo o que o velocímetro do seu carro mostra agora. Pode ser diferente da velocidade média porque você pode estar acelerando ou freando.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="mb-2"><strong>Na prática:</strong></p>
              <p>Quando você viaja 300 km em 3 horas, sua velocidade média é 100 km/h. Mas em alguns momentos você estava a 80 km/h (em congestionamento), em outros a 120 km/h (na rodovia). Esses são seus valores de velocidade instantânea.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Corrida de 100 metros:</strong> Um atleta pode atingir 10 m/s no meio da corrida (velocidade instantânea), mas sua velocidade média é um pouco menor porque ele começa devagar.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Viagem de carro:</strong> Você sai de São Paulo para o Rio. A velocidade média é 100 km/h, mas em São Paulo você estava a 30 km/h no trânsito, e na rodovia a 120 km/h.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Bola de futebol:</strong> Quando o goleiro chuta a bola, ela sai com alta velocidade. Conforme voa, a velocidade diminui (por causa do ar).</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Aceleração - Explicação Simples */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Aceleração?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800">
              <strong>Aceleração = Mudança de velocidade</strong>
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p className="mb-2"><strong>Exemplo simples:</strong></p>
              <p>Quando você pisa no acelerador do carro, a velocidade aumenta. Quando você freia, a velocidade diminui. Nos dois casos, há <strong>aceleração</strong>!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Três Tipos de Aceleração</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <div>
                  <strong>Aceleração Positiva (Aumentando velocidade):</strong> Quando você pisa no acelerador. A velocidade fica maior a cada segundo.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">2.</span>
                <div>
                  <strong>Aceleração Negativa (Diminuindo velocidade):</strong> Quando você freia. A velocidade fica menor a cada segundo. Também chamada de <strong>desaceleração</strong>.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">3.</span>
                <div>
                  <strong>Aceleração de Direção (Mudando de direção):</strong> Quando você faz uma curva, mesmo mantendo a mesma velocidade. A direção muda, então há aceleração!
                </div>
              </li>
            </ul>

            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula da Aceleração:</p>
              <MathFormula formula={String.raw`$$$$a = \\frac{\\text{mudança de velocidade}}{\\text{tempo}}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Ou em letras: a = Δv / Δt</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Carro acelerando:</strong> Sai de 0 a 100 km/h em 10 segundos. A aceleração é 10 km/h por segundo (ou 2,78 m/s²).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Freio de emergência:</strong> De 100 km/h para 0 em 5 segundos. A aceleração é negativa: -20 km/h por segundo.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Curva em rodovia:</strong> Você mantém 80 km/h, mas faz uma curva. Há aceleração porque a direção muda!</span>
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
                  <span><strong>Erro:</strong> "Aceleração é só quando aumenta velocidade"<br/><strong>Verdade:</strong> Aceleração é qualquer mudança de velocidade, incluindo diminuição ou mudança de direção.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Velocidade e rapidez são a mesma coisa"<br/><strong>Verdade:</strong> Velocidade tem direção (é um vetor), rapidez não. 100 km/h norte é diferente de 100 km/h sul!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Se a aceleração é zero, o objeto não se move"<br/><strong>Verdade:</strong> Se a aceleração é zero, a velocidade é constante. O objeto pode estar se movendo muito rápido!</span>
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
                <li><strong>Velocidade:</strong> Pense no velocímetro do carro. Ele mostra a velocidade instantânea.</li>
                <li><strong>Aceleração:</strong> Pense na sensação que você sente quando pisa no acelerador ou no freio. É a aceleração!</li>
                <li><strong>Unidades:</strong> Velocidade em m/s ou km/h. Aceleração em m/s² (metros por segundo ao quadrado).</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Velocidade:</strong> Quão rápido você se move e em qual direção</p>
            <p><strong>Aceleração:</strong> Como sua velocidade está mudando (aumentando, diminuindo ou mudando de direção)</p>
            <p><strong>Relação:</strong> Se você está acelerando, sua velocidade está mudando. Se sua velocidade é constante, a aceleração é zero.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
