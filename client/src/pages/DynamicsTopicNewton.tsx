import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
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
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Por Que Precisamos das Leis de Newton?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Imagine que você está em um ônibus em movimento. Quando o ônibus freia bruscamente, você é "jogado" para frente. Por quê? Porque seu corpo quer continuar se movendo. Isso é a Primeira Lei de Newton em ação!</p>
            <p>As três Leis de Newton explicam <strong>por que as coisas se movem como se movem</strong>. Elas não descrevem apenas o movimento, mas também as <strong>causas</strong> do movimento. Essas leis são a base de toda a física moderna e engenharia.</p>
          </div>
        </Card>

        {/* Primeira Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Primeira Lei: Lei da Inércia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="text-lg font-semibold"><strong>"Um objeto em repouso quer ficar em repouso. Um objeto em movimento quer continuar se movendo. A menos que algo o force a mudar!"</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que é Inércia?</h3>
            <p>Inércia é a <strong>preguiça</strong> dos objetos de mudar seu estado de movimento. Quanto mais pesado o objeto, maior é sua inércia. Um carro pesado é mais "preguiçoso" para mudar de velocidade do que uma bicicleta leve.</p>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="mb-2"><strong>Exemplo:</strong> Quando você está em um carro que freia bruscamente, seu corpo quer continuar para frente (inércia). O cinto de segurança é o que o força a parar junto com o carro.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula da Primeira Lei</h3>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto my-4">
              <MathFormula formula="$$$$\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0$$$$" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Se a força resultante é zero, não há aceleração (repouso ou movimento uniforme)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Carro freando:</strong> Você é "jogado" para frente porque seu corpo quer continuar se movendo.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Truque da toalha:</strong> Puxe rapidamente uma toalha de mesa e os pratos ficam no lugar! Porque a toalha não exerce força suficiente nos pratos para vencer a inércia deles.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Satélite em órbita:</strong> Um satélite continua orbitando a Terra para sempre porque não há força para pará-lo (no vácuo do espaço).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Pista de gelo:</strong> É difícil parar em uma pista de gelo porque há pouca fricção. Seu corpo quer continuar se movendo (inércia).</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Segunda Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Segunda Lei: Lei Fundamental da Dinâmica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p className="text-lg font-semibold"><strong>"Quanto maior a força, maior a aceleração. Quanto maior a massa, menor a aceleração para a mesma força."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula Mais Importante da Física</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <MathFormula formula="$$$$F = m \\cdot a$$$$" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Força = Massa × Aceleração</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Cada Letra Significa?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-green-600">F =</span>
                <span>Força (em Newtons, N). É o "empurrão" ou "puxão" que você aplica.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">m =</span>
                <span>Massa (em quilogramas, kg). É o "peso" do objeto (mais precisamente, a quantidade de matéria).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">a =</span>
                <span>Aceleração (em m/s²). É como a velocidade muda.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Entendendo a Relação</h3>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p className="mb-3"><strong>Regra 1: Mais força = Mais aceleração</strong></p>
              <p className="mb-3">Se você empurra um carro com força de 100 N, ele acelera. Se você empurra com 200 N, ele acelera o dobro!</p>
              
              <p className="mb-3 mt-4"><strong>Regra 2: Mais massa = Menos aceleração</strong></p>
              <p>Se você empurra uma bicicleta (10 kg) com 100 N, ela acelera muito. Se você empurra um carro (1000 kg) com 100 N, ele acelera muito menos.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <div>
                  <strong>Carro acelerando:</strong> Um carro de 1000 kg é empurrado com força de 2000 N.<br/>
                  <span className="text-sm text-slate-600">a = F/m = 2000/1000 = 2 m/s²</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">2.</span>
                <div>
                  <strong>Bola de futebol vs. Bola de boliche:</strong> Se você chuta ambas com a mesma força, a bola de futebol (menor massa) voa muito mais longe que a bola de boliche (maior massa)!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">3.</span>
                <div>
                  <strong>Foguete:</strong> Um foguete expele gases para baixo com grande força. Pela Segunda Lei de Newton, isso cria uma força igual para cima, acelerando o foguete.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">4.</span>
                <div>
                  <strong>Freio de carro:</strong> Para parar um carro de 1000 kg em 5 segundos, você precisa de uma força de frenagem de aproximadamente 2000 N (dependendo da velocidade inicial).
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Newton (N) - Unidade de Força</h3>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p>1 Newton é a força necessária para acelerar 1 kg a 1 m/s².</p>
              <p className="mt-2">Ou seja: 1 N = 1 kg·m/s²</p>
              <p className="mt-2"><strong>Na prática:</strong> Um maçã pesa aproximadamente 1 Newton!</p>
            </div>
          </div>
        </Card>

        {/* Terceira Lei */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Terceira Lei: Ação e Reação</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="text-lg font-semibold"><strong>"Para cada ação, há uma reação igual e oposta."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Isso Significa?</h3>
            <p>Quando você empurra algo, esse algo também o empurra de volta com a mesma força! Essas forças são iguais em magnitude, mas apontam em direções opostas.</p>

            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula="$$$$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$$$" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Força de A em B = - Força de B em A</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Ponto Importante!</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>As forças de ação e reação NÃO se cancelam!</strong></p>
              <p className="mt-2">Por quê? Porque elas atuam em corpos diferentes! A ação atua no corpo B, e a reação atua no corpo A. Não há como elas se cancelarem.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">1.</span>
                <div>
                  <strong>Caminhar:</strong> Seus pés empurram o chão para trás (ação). O chão empurra seus pés para frente (reação) com força igual. É essa reação que o move para frente!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">2.</span>
                <div>
                  <strong>Nadar:</strong> Você empurra a água para trás (ação). A água empurra você para frente (reação). Por isso você se move!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">3.</span>
                <div>
                  <strong>Foguete:</strong> O foguete expele gases para baixo (ação). Os gases empurram o foguete para cima (reação). Por isso o foguete sobe!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">4.</span>
                <div>
                  <strong>Pular:</strong> Você empurra o chão para baixo (ação). O chão empurra você para cima (reação). Por isso você salta!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">5.</span>
                <div>
                  <strong>Bola na parede:</strong> Você lança uma bola na parede (ação). A parede empurra a bola de volta (reação). Por isso a bola volta!
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
                  <span><strong>Erro:</strong> "Ação e reação se cancelam"<br/><strong>Verdade:</strong> Elas atuam em corpos diferentes, então não se cancelam!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Força maior sempre vence força menor"<br/><strong>Verdade:</strong> Depende também da massa! Uma força pequena em uma massa pequena pode ter grande aceleração.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Massa e peso são a mesma coisa"<br/><strong>Verdade:</strong> Massa é a quantidade de matéria. Peso é a força da gravidade sobre a massa.</span>
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
              <h3 className="text-lg font-bold text-yellow-900 mb-4">💡 Resumo das Três Leis</h3>
              <ul className="space-y-3 text-yellow-900">
                <li><strong>1ª Lei:</strong> Objetos querem manter seu estado (repouso ou movimento)</li>
                <li><strong>2ª Lei:</strong> F = m·a (Força causa aceleração)</li>
                <li><strong>3ª Lei:</strong> Ação e reação são iguais e opostas</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
