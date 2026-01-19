import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsTopicNewton() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">As Três Leis de Newton</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-blue-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Fundamentos da Dinâmica Clássica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>As três Leis de Newton, publicadas em 1687 no livro "Philosophiæ Naturalis Principia Mathematica" (Princípios Matemáticos da Filosofia Natural), formam a base de toda a mecânica clássica. Essas leis revolucionaram a forma como entendemos o movimento dos objetos e continuam sendo fundamentais para a engenharia, física e tecnologia moderna.</p>
            <p>Isaac Newton não apenas descreveu como os objetos se movem, mas explicou por que se movem da forma que se movem. Suas leis conectam causas (forças) com efeitos (mudanças no movimento), permitindo-nos prever e controlar o comportamento dos objetos em praticamente qualquer situação.</p>
          </div>
        </Card>

        {/* Primeira Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Primeira Lei de Newton: Lei da Inércia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Um corpo em repouso permanece em repouso, e um corpo em movimento retilíneo uniforme permanece em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele."
            </p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Condição de Equilíbrio:</p>
              <MathFormula formula="\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Se a força resultante é zero, a aceleração também é zero (repouso ou movimento uniforme).</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Conceito de Inércia</h3>
            <p>A inércia é a tendência natural dos corpos de manter seu estado de movimento (ou repouso). Quanto maior a massa de um objeto, maior é sua inércia, ou seja, mais difícil é mudar seu estado de movimento. A massa é a medida quantitativa da inércia.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Carro em movimento:</strong> Quando um carro freia bruscamente, os passageiros são "jogados" para frente. Isso ocorre porque seus corpos tendem a continuar em movimento enquanto o carro desacelera. O cinto de segurança fornece a força necessária para desacelerá-los.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Toalha sob pratos:</strong> Quando você puxa rapidamente uma toalha de mesa, os pratos permanecem no lugar. Isso ocorre porque a toalha exerce uma força muito pequena sobre os pratos durante o breve tempo de contato, insuficiente para vencer a inércia dos pratos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Satélite em órbita:</strong> Um satélite continua orbitando a Terra indefinidamente (na ausência de atrito atmosférico) porque não há força resultante atuando sobre ele na direção do movimento.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Referencial Inercial</h3>
            <p>A Primeira Lei de Newton é válida apenas em referenciais inerciais, ou seja, referenciais que não estão acelerados. Um referencial fixo na Terra é aproximadamente inercial (embora a Terra esteja em rotação). Um referencial dentro de um carro acelerado não é inercial, pois observadores nesse referencial perceberão forças fictícias.</p>
          </div>
        </Card>

        {/* Segunda Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Segunda Lei de Newton: Lei Fundamental da Dinâmica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "A força resultante aplicada a um corpo é igual ao produto de sua massa pela aceleração adquirida."
            </p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Fundamental:</p>
              <MathFormula formula="\\vec{F}_{\\text{resultante}} = m \\cdot \\vec{a}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: F = força resultante (N), m = massa (kg), a = aceleração (m/s²)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Interpretação Física</h3>
            <p>A Segunda Lei de Newton estabelece uma relação linear entre força e aceleração. Isso significa que se você duplicar a força, a aceleração também duplica. Por outro lado, se você duplicar a massa, a aceleração cai pela metade para a mesma força. A massa atua como uma medida de resistência à aceleração.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Unidades</h3>
            <p>A unidade de força no Sistema Internacional é o Newton (N), definido como a força necessária para acelerar uma massa de 1 kg a uma aceleração de 1 m/s². Portanto, 1 N = 1 kg·m/s².</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Forma Vetorial</h3>
            <p>A Segunda Lei de Newton é uma equação vetorial, o que significa que força e aceleração têm a mesma direção e sentido. Se você aplicar uma força para a direita, a aceleração será para a direita. Isso permite analisar movimentos em duas ou três dimensões decompondo as forças em componentes.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Forma com Momentum</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Forma Alternativa (Momentum):</p>
              <MathFormula formula="\\vec{F} = \\frac{d\\vec{p}}{dt}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">A força é a taxa de variação do momentum em relação ao tempo.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Empurrar um carro:</strong> Se você empurra um carro de 1000 kg com uma força de 2000 N, a aceleração será a = F/m = 2000/1000 = 2 m/s². Se você empurra com 4000 N, a aceleração dobra para 4 m/s².</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Bola de futebol vs. bola de boliche:</strong> Se você aplicar a mesma força a uma bola de futebol (menor massa) e a uma bola de boliche (maior massa), a bola de futebol acelerará muito mais. Por isso é mais fácil chutar uma bola de futebol do que uma bola de boliche.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Foguete:</strong> Um foguete acelera porque expele gases a alta velocidade. A força de reação desses gases acelera o foguete para cima, de acordo com a Segunda Lei de Newton.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Terceira Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Terceira Lei de Newton: Ação e Reação</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Se um corpo A exerce uma força sobre um corpo B, então B exerce uma força igual e oposta sobre A."
            </p>
            
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Relação de Ação e Reação:</p>
              <MathFormula formula="\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">As forças têm mesma magnitude, mesma direção, mas sentidos opostos.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Pontos Importantes</h3>
            <p>É crucial entender que as forças de ação e reação <strong>não se cancelam</strong> porque atuam em corpos diferentes. Se cancelassem, nenhum movimento seria possível. A ação atua no corpo B e a reação atua no corpo A. Para analisar o movimento de um corpo, você deve considerar apenas as forças que atuam nele, não as forças que ele exerce sobre outros corpos.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Caminhar:</strong> Quando você caminha, seus pés empurram o chão para trás (ação), e o chão empurra seus pés para frente (reação) com força igual. É essa força de reação que o move para frente.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pular:</strong> Você empurra a Terra para baixo com seus pés, e a Terra o empurra para cima com força igual. Você salta porque a força de reação da Terra supera seu peso.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Foguete:</strong> O foguete expele gases para baixo (ação), e os gases o empurram para cima (reação). Quanto mais gases são expelidos, maior é a força de reação.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Colisão:</strong> Quando dois carros colidem, cada um exerce uma força sobre o outro. Essas forças são iguais em magnitude e opostas em direção, de acordo com a Terceira Lei de Newton.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Força Normal</h3>
            <p>A força normal é um exemplo clássico de ação e reação. Quando você está em pé no chão, seu peso (força que você exerce sobre o chão) é equilibrado pela força normal (força que o chão exerce sobre você). Essas duas forças têm a mesma magnitude, mas atuam em corpos diferentes: uma atua no chão, a outra atua em você.</p>
          </div>
        </Card>

        {/* Aplicações */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aplicações das Leis de Newton</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>As Leis de Newton têm aplicações práticas em praticamente todos os aspectos da engenharia e tecnologia moderna:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Engenharia Automotiva:</strong> Os sistemas de frenagem, suspensão e controle de tração dos carros são projetados usando as Leis de Newton para garantir segurança e conforto.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Engenharia Aeroespacial:</strong> O design de foguetes, aviões e satélites depende fundamentalmente das Leis de Newton para calcular trajetórias e forças necessárias.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Engenharia Civil:</strong> Estruturas de edifícios, pontes e outras construções são projetadas considerando as forças que atuam sobre elas, usando as Leis de Newton.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Esportes:</strong> A análise do movimento em esportes, como o arremesso de uma bola ou o salto em altura, usa as Leis de Newton para otimizar o desempenho.</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
}
