import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
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
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conceitos Fundamentais do Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Velocidade e aceleração são os dois conceitos mais fundamentais da cinemática. Enquanto a velocidade descreve como um objeto se move através do espaço, a aceleração descreve como essa velocidade muda ao longo do tempo. Compreender esses conceitos é essencial para analisar qualquer tipo de movimento.</p>
            <p>A velocidade não é apenas uma medida de quão rápido algo se move, mas também em qual direção. Da mesma forma, a aceleração não descreve apenas mudanças na rapidez, mas também mudanças na direção do movimento. Esses conceitos vetoriais são a base para toda a análise de movimento em física.</p>
          </div>
        </Card>

        {/* Velocidade */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Velocidade: Medindo o Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Velocidade é a taxa de variação da posição em relação ao tempo. É uma grandeza vetorial que possui magnitude (rapidez) e direção."
            </p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Velocidade Média:</p>
              <MathFormula formula="v_m = \\frac{\\Delta s}{\\Delta t} = \\frac{s_f - s_i}{t_f - t_i}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: Δs = deslocamento (m), Δt = intervalo de tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Velocidade Instantânea</h3>
            <p>A velocidade instantânea é a velocidade em um instante específico de tempo. Matematicamente, é o limite da velocidade média quando o intervalo de tempo tende a zero, ou seja, a derivada da posição em relação ao tempo.</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <MathFormula formula="v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}" className="text-center text-lg md:text-2xl" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Carro em rodovia:</strong> Um carro que percorre 100 km em 2 horas tem uma velocidade média de 50 km/h. A velocidade instantânea pode variar durante o trajeto.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Velocímetro do carro:</strong> O velocímetro mostra a velocidade instantânea do veículo em cada momento.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Corredor em pista:</strong> Um corredor pode ter velocidade média de 8 m/s em uma corrida de 100 m, mas sua velocidade instantânea varia durante a prova.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Aceleração */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aceleração: Mudança de Velocidade</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Aceleração é a taxa de variação da velocidade em relação ao tempo. É uma grandeza vetorial que descreve como a velocidade muda."
            </p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Aceleração Média:</p>
              <MathFormula formula="a_m = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: Δv = variação de velocidade (m/s), Δt = intervalo de tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Aceleração Instantânea</h3>
            <p>A aceleração instantânea é a aceleração em um instante específico de tempo. É a derivada da velocidade em relação ao tempo, ou a segunda derivada da posição.</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <MathFormula formula="a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}" className="text-center text-lg md:text-2xl" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Tipos de Aceleração</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Aceleração Positiva:</strong> Quando a velocidade aumenta (ex: carro acelerando)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Aceleração Negativa (Desaceleração):</strong> Quando a velocidade diminui (ex: carro freando)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Aceleração Centrípeta:</strong> Mudança na direção da velocidade (ex: movimento circular)</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Carro acelerando:</strong> Um carro que vai de 0 a 100 km/h em 10 segundos tem uma aceleração média de 10 km/h por segundo.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Queda de um objeto:</strong> Um objeto em queda livre tem aceleração constante de 9,8 m/s² (aceleração da gravidade).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Curva em rodovia:</strong> Um carro fazendo uma curva a velocidade constante ainda tem aceleração (centrípeta) porque sua direção está mudando.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Relação entre Velocidade e Aceleração */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Relação entre Velocidade e Aceleração</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A relação entre velocidade e aceleração é fundamental para entender o movimento. Se você conhece a aceleração e a velocidade inicial, pode calcular a velocidade em qualquer momento futuro.</p>
            
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Equação Fundamental:</p>
              <MathFormula formula="v = v_0 + a \\cdot t" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final, v₀ = velocidade inicial, a = aceleração, t = tempo</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráficos de Movimento</h3>
            <p>Os gráficos de velocidade vs. tempo e aceleração vs. tempo são ferramentas poderosas para visualizar o movimento. A inclinação do gráfico v-t é a aceleração, enquanto a área sob a curva representa o deslocamento.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
