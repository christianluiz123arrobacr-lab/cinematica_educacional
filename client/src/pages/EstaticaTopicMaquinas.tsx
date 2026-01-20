import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function EstaticaTopicMaquinas() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Máquinas Simples</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-red-50 to-pink-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Fazendo o Trabalho Pesado Ficar Fácil</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Uma máquina simples é um dispositivo que usa estática para fazer o trabalho mais fácil. Não cria energia (isso violaria as leis da física!), mas redistribui a força para que você precise de menos esforço.</p>
            <p>As máquinas simples são a base de toda a engenharia: desde uma alavanca até um carro!</p>
          </div>
        </Card>

        {/* O Que é Vantagem Mecânica */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Vantagem Mecânica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="text-lg font-semibold"><strong>"Vantagem mecânica é quantas vezes a máquina multiplica a força que você aplica."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula</h3>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto my-4">
              <MathFormula formula="$$$$VM = \\frac{F_{resistência}}{F_{aplicada}}$$$$" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Vantagem Mecânica = Força que você precisa vencer / Força que você aplica</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Isso Significa?</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="mb-2"><strong>Se VM = 2:</strong> Você precisa de metade da força. Mas o deslocamento é o dobro!</p>
              <p className="mb-2"><strong>Se VM = 4:</strong> Você precisa de um quarto da força. Mas o deslocamento é quatro vezes maior!</p>
              <p><strong>Lembrete:</strong> Trabalho = Força × Deslocamento. A máquina não cria energia, apenas redistribui!</p>
            </div>
          </div>
        </Card>

        {/* Tipos de Máquinas Simples */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">As 6 Máquinas Simples Clássicas</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Alavanca</h3>
              <p className="mb-2">Uma barra rígida que gira em torno de um ponto de apoio (fulcro).</p>
              <p className="text-sm"><strong>Exemplos:</strong> Pé de cabra, tesoura, balancim</p>
              <div className="bg-white p-2 rounded mt-2 overflow-x-auto">
                <MathFormula formula="$$$$VM = \\frac{r_{resistência}}{r_{aplicada}}$$$$" className="text-center text-sm" />
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Polia</h3>
              <p className="mb-2">Uma roda com um sulco que permite que uma corda passe por ela.</p>
              <p className="text-sm"><strong>Exemplos:</strong> Poço, elevador, sistema de polias</p>
              <p className="text-sm mt-2"><strong>Polia fixa:</strong> VM = 1 (apenas muda direção)</p>
              <p className="text-sm"><strong>Polia móvel:</strong> VM = 2 (reduz força pela metade)</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Plano Inclinado</h3>
              <p className="mb-2">Uma superfície inclinada que permite subir algo com menos força.</p>
              <p className="text-sm"><strong>Exemplos:</strong> Rampa, escada, estrada em montanha</p>
              <div className="bg-white p-2 rounded mt-2 overflow-x-auto">
                <MathFormula formula="$$$$VM = \\frac{L}{h}$$$$" className="text-center text-sm" />
              </div>
              <p className="text-sm mt-2">L = comprimento da rampa, h = altura</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Parafuso</h3>
              <p className="mb-2">Um plano inclinado enrolado em volta de um cilindro.</p>
              <p className="text-sm"><strong>Exemplos:</strong> Parafuso, prensa de parafuso, jack</p>
              <p className="text-sm mt-2"><strong>Vantagem:</strong> Vantagem mecânica MUITO alta!</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. Cunha</h3>
              <p className="mb-2">Dois planos inclinados unidos em um ângulo agudo.</p>
              <p className="text-sm"><strong>Exemplos:</strong> Machado, faca, porta de cunha</p>
              <p className="text-sm mt-2"><strong>Função:</strong> Separar ou dividir coisas</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">6. Roda e Eixo</h3>
              <p className="mb-2">Uma roda grande ligada a um eixo pequeno.</p>
              <p className="text-sm"><strong>Exemplos:</strong> Volante, maçaneta de porta, roda de bicicleta</p>
              <div className="bg-white p-2 rounded mt-2 overflow-x-auto">
                <MathFormula formula="$$$$VM = \\frac{r_{roda}}{r_{eixo}}$$$$" className="text-center text-sm" />
              </div>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Exemplo 1: Alavanca</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Uma pedra de 1000 N está a 0,5 m do fulcro. Você aplica força a 2 m do fulcro. Qual é a vantagem mecânica e quanto de força você precisa?</p>
              <p className="text-sm">VM = 2 / 0,5 = 4</p>
              <p className="text-sm">Força aplicada = 1000 / 4 = 250 N</p>
              <p className="text-sm mt-2"><strong>Conclusão:</strong> Você precisa de apenas 250 N para levantar 1000 N!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo 2: Plano Inclinado</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Uma caixa de 100 N precisa ser levantada 2 m. Uma rampa tem 10 m de comprimento. Qual é a vantagem mecânica?</p>
              <p className="text-sm">VM = 10 / 2 = 5</p>
              <p className="text-sm">Força aplicada = 100 / 5 = 20 N</p>
              <p className="text-sm mt-2"><strong>Conclusão:</strong> Você precisa de apenas 20 N, mas tem que empurrar por 10 m!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo 3: Sistema de Polias</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Um sistema de 4 polias móveis é usado para levantar uma carga. Qual é a vantagem mecânica?</p>
              <p className="text-sm">VM = 2 × 4 = 8 (cada polia móvel dobra a vantagem)</p>
              <p className="text-sm">Se a carga é 800 N, você precisa de apenas 100 N!</p>
            </div>
          </div>
        </Card>

        {/* Máquinas Compostas */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Máquinas Compostas</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Máquinas compostas são combinações de máquinas simples. Exemplos:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <div><strong>Bicicleta:</strong> Roda e eixo + alavanca (pedal) + corrente</div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <div><strong>Carro:</strong> Muitas máquinas simples combinadas!</div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <div><strong>Escada rolante:</strong> Plano inclinado + roda e eixo</div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <div><strong>Guindaste:</strong> Polia + alavanca + roda e eixo</div>
              </li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p><strong>Importante:</strong> A vantagem mecânica total é o produto das vantagens individuais!</p>
            </div>
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
                  <span><strong>Erro:</strong> "A máquina cria energia"<br/><strong>Verdade:</strong> Máquinas redistribuem força. Trabalho total permanece igual!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Maior vantagem mecânica = melhor sempre"<br/><strong>Verdade:</strong> Maior VM significa maior deslocamento. Depende da situação!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer do atrito"<br/><strong>Verdade:</strong> Na prática, atrito reduz a vantagem mecânica real!</span>
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
              <h3 className="text-lg font-bold text-yellow-900 mb-4">💡 Dicas para Resolver Problemas</h3>
              <ul className="space-y-3 text-yellow-900">
                <li><strong>Passo 1:</strong> Identifique qual máquina simples está sendo usada</li>
                <li><strong>Passo 2:</strong> Calcule a vantagem mecânica usando a fórmula apropriada</li>
                <li><strong>Passo 3:</strong> Use VM = Fresistência / Faplicada para encontrar a força necessária</li>
                <li><strong>Passo 4:</strong> Lembre-se: Trabalho = Força × Deslocamento (conservação de energia)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-red-50 to-pink-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Vantagem Mecânica:</strong> VM = Fresistência / Faplicada</p>
            <p><strong>6 Máquinas Simples:</strong> Alavanca, Polia, Plano Inclinado, Parafuso, Cunha, Roda e Eixo</p>
            <p><strong>Princípio:</strong> Máquinas não criam energia, apenas redistribuem força</p>
            <p><strong>Aplicação:</strong> Toda a engenharia moderna usa máquinas simples!</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
