import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsTopicMomentum() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Momentum e Colisões</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Momentum: A Quantidade de Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Momentum, também chamado de quantidade de movimento, é uma grandeza vetorial que representa a "quantidade de movimento" de um corpo. Um corpo pesado movendo-se lentamente pode ter o mesmo momentum que um corpo leve movendo-se rapidamente. O momentum é particularmente útil para analisar colisões e explosões.</p>
            <p>O conceito de momentum é fundamental em física porque é conservado em sistemas isolados, independentemente de como as forças internas atuam. Isso torna o momentum uma ferramenta poderosa para resolver problemas complexos.</p>
          </div>
        </Card>

        {/* Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Definição e Propriedades do Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$\\vec{p} = m \\cdot \\vec{v}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: p = momentum (kg·m/s), m = massa (kg), v = velocidade (m/s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Relação com a Segunda Lei de Newton</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Forma Alternativa:</p>
              <MathFormula formula={String.raw`$$$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <p>A Segunda Lei de Newton pode ser reescrita em termos de momentum: a força resultante é a taxa de variação do momentum em relação ao tempo. Isto é, uma força causa mudança no momentum. Essa forma é particularmente útil quando a massa está mudando (como em um foguete que está queimando combustível).</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Impulso</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Impulso:</p>
              <MathFormula formula={String.raw`$$$$\\vec{I} = \\vec{F} \\cdot \\Delta t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Teorema do Impulso:</p>
              <MathFormula formula={String.raw`$$$$\\vec{I} = \\Delta \\vec{p} = \\vec{p}_f - \\vec{p}_i$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: I = impulso (N·s), F = força (N), Δt = intervalo de tempo (s)</p>
            </div>

            <p>O impulso é o produto da força pelo tempo de aplicação. O Teorema do Impulso afirma que o impulso é igual à variação do momentum. Uma força grande aplicada por um tempo curto pode produzir o mesmo impulso que uma força pequena aplicada por um tempo longo.</p>
          </div>
        </Card>

        {/* Conservação de Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado (sem forças externas), o momentum total permanece constante. Este é um dos princípios mais fundamentais da física e é especialmente útil para analisar colisões e explosões.</p>

            <div className="bg-emerald-50 p-3 md:p-6 rounded-lg border border-emerald-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio de Conservação:</p>
              <MathFormula formula={String.raw`$$$$\\vec{p}_{\\text{inicial}} = \\vec{p}_{\\text{final}}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Para Dois Corpos em Colisão:</p>
              <MathFormula formula={String.raw`$$$$m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i} = m_1 \\vec{v}_{1f} + m_2 \\vec{v}_{2f}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Importante: Momentum vs. Energia</h3>
            <p>Diferentemente da energia cinética, o momentum é sempre conservado em colisões (em sistemas isolados), mesmo que a energia cinética não seja. Em colisões inelásticas, parte da energia cinética é convertida em calor, som, deformação, etc., mas o momentum permanece conservado.</p>
          </div>
        </Card>

        {/* Colisões */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Tipos de Colisões</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Colisão Elástica</h3>
              <p>Em uma colisão elástica, tanto o momentum quanto a energia cinética são conservados. Os objetos não se deformam permanentemente e não há perda de energia. Colisões elásticas são raras na natureza, mas ocorrem aproximadamente entre bolas de bilhar ou entre partículas subatômicas.</p>
              <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto mt-3">
                <p className="text-center text-sm md:text-lg font-semibold mb-3">Conservação em Colisão Elástica:</p>
                <MathFormula formula={String.raw`$$$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
                <MathFormula formula={String.raw`$$$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Colisão Inelástica</h3>
              <p>Em uma colisão inelástica, o momentum é conservado, mas a energia cinética não é. Parte da energia cinética é convertida em calor, som, deformação, etc. A maioria das colisões no mundo real são inelásticas. Um caso especial é a colisão perfeitamente inelástica, onde os objetos ficam juntos após a colisão.</p>
              <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto mt-3">
                <p className="text-center text-sm md:text-lg font-semibold mb-3">Colisão Perfeitamente Inelástica:</p>
                <MathFormula formula={String.raw`$$$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f$$$$`} className="text-center text-lg md:text-2xl mb-4" />
                <p className="text-sm text-slate-600">Os objetos se movem juntos com a mesma velocidade final.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Colisão Parcialmente Elástica</h3>
              <p>A maioria das colisões reais são parcialmente elásticas, com alguma perda de energia cinética, mas não total. O grau de elasticidade é medido pelo coeficiente de restituição, que varia de 0 (perfeitamente inelástica) a 1 (perfeitamente elástica).</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos de Momentum e Colisões</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Airbag em Carro:</strong> O airbag aumenta o tempo de colisão, reduzindo a força máxima e, portanto, o impulso necessário para parar você. Isso reduz lesões graves.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Bola de Bilhar:</strong> Quando uma bola de bilhar bate em outra, a colisão é aproximadamente elástica. O momentum é transferido de uma bola para a outra.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Explosão:</strong> Em uma explosão, o momentum total é conservado. Se um objeto em repouso explode em duas partes, as partes se movem em direções opostas com momentum igual e oposto.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Foguete:</strong> Um foguete funciona expelindo gases para trás. Os gases têm momentum para trás, então o foguete tem momentum para frente (pelo Princípio da Conservação de Momentum).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Acidente de Trânsito:</strong> Em um acidente, o momentum total antes da colisão é igual ao momentum total depois. Isso é usado para reconstruir acidentes e determinar velocidades antes da colisão.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Aplicações */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aplicações Práticas de Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Investigação de Acidentes:</strong> Peritos usam a conservação de momentum para reconstruir acidentes de trânsito e determinar velocidades antes da colisão.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Design de Proteção:</strong> Capacetes, airbags e sistemas de amortecimento são projetados para aumentar o tempo de colisão e reduzir lesões.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Física de Partículas:</strong> A conservação de momentum é usada para analisar colisões de partículas e descobrir novas partículas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Engenharia Espacial:</strong> O momentum é conservado no espaço, então foguetes podem se mover expelindo massa (combustível).</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
}
