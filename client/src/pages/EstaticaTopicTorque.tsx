import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function EstaticaTopicTorque() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Torque e Momento</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-orange-50 to-red-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Quando as Coisas Giram</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Imagine uma porta. Você pode empurrar no meio da porta e ela gira facilmente. Mas se você empurrar perto da dobradiça, precisa de muito mais força! Por quê? Porque o <strong>torque</strong> (ou momento) depende não apenas da força, mas também de onde você aplica a força.</p>
            <p>Torque é o que faz as coisas girarem. É tão importante quanto força para entender o equilíbrio de corpos que podem rotacionar.</p>
          </div>
        </Card>

        {/* O Que é Torque */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Torque?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="text-lg font-semibold"><strong>"Torque é o 'efeito de giro' de uma força."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula do Torque</h3>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$\\tau = r \\times F \\times \\sin(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Torque = Distância × Força × Seno do ângulo</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Cada Letra Significa?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-orange-600">τ =</span>
                <span>Torque (em Newton·metro, N·m). É o "efeito de giro".</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600">r =</span>
                <span>Distância do ponto de rotação até onde a força é aplicada (em metros).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600">F =</span>
                <span>Magnitude da força (em Newtons).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600">θ =</span>
                <span>Ângulo entre a força e o braço de alavanca.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Caso Especial: Força Perpendicular</h3>
            <p>Quando a força é perpendicular ao braço de alavanca (ângulo = 90°), sin(θ) = 1, então:</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$\\tau = r \\times F$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Caso mais comum e mais fácil!</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos do Dia a Dia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">1.</span>
                <div>
                  <strong>Porta:</strong> Se você empurra a porta a 1 m da dobradiça com força de 10 N, o torque é 1 × 10 = 10 N·m. Mas se empurra a 0,2 m da dobradiça, o torque é 0,2 × 10 = 2 N·m. Muito menos!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">2.</span>
                <div>
                  <strong>Chave inglesa:</strong> Uma chave comprida faz menos esforço que uma chave curta. Por quê? Porque o braço de alavanca é maior!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">3.</span>
                <div>
                  <strong>Roda de bicicleta:</strong> A roda gira porque há um torque aplicado pelo pedal. Quanto mais longe do centro você pedala, maior o torque!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">4.</span>
                <div>
                  <strong>Balancim:</strong> Duas crianças de pesos diferentes podem se equilibrar se a mais leve ficar mais longe do ponto de apoio!
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Segunda Condição de Equilíbrio */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">A Segunda Condição de Equilíbrio</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Para um corpo estar completamente em equilíbrio (sem girar), a soma de todos os torques deve ser zero:</p>
            
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$\\sum \\tau = 0$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">A soma de todos os torques é zero</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">As Duas Condições de Equilíbrio</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="mb-2"><strong>1ª Condição (Equilíbrio Translacional):</strong></p>
              <p className="mb-3 text-sm">ΣF = 0 (o corpo não se move)</p>
              
              <p className="mb-2"><strong>2ª Condição (Equilíbrio Rotacional):</strong></p>
              <p className="text-sm">Στ = 0 (o corpo não gira)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo: Balancim em Equilíbrio</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p className="mb-3"><strong>Problema:</strong> Uma criança de 30 kg está a 2 m do ponto de apoio. Onde deve ficar uma criança de 20 kg para equilibrar?</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <p className="text-sm">Torque 1 = 30 × 10 × 2 = 600 N·m (para um lado)</p>
              <p className="text-sm">Para equilibrar: 20 × 10 × r = 600</p>
              <p className="text-sm">r = 3 m (a criança mais leve fica a 3 m do ponto de apoio)</p>
            </div>
          </div>
        </Card>

        {/* Centro de Massa */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Centro de Massa e Centro de Gravidade</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Centro de Massa</h3>
            <p>É o ponto onde toda a massa do objeto pode ser considerada concentrada. Para um objeto simétrico, é no meio. Para um objeto irregular, pode ser em qualquer lugar.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Centro de Gravidade</h3>
            <p>É o ponto onde toda a força gravitacional pode ser considerada concentrada. Na maioria dos casos, é o mesmo que o centro de massa.</p>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>Importância:</strong> O torque do peso é calculado como se toda a massa estivesse no centro de gravidade!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• <strong>Bola:</strong> Centro de gravidade no meio</li>
              <li>• <strong>Anel:</strong> Centro de gravidade no meio (mas não há massa lá!)</li>
              <li>• <strong>Boomerang:</strong> Centro de gravidade em um lugar estranho</li>
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
                  <span><strong>Erro:</strong> "Torque é a mesma coisa que força"<br/><strong>Verdade:</strong> Força causa movimento linear, torque causa movimento rotacional. São conceitos diferentes!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer de considerar a distância"<br/><strong>Verdade:</strong> Torque depende tanto da força quanto da distância. Uma força pequena longe pode ter mais torque que uma força grande perto!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Usar sin(θ) = 1 quando θ ≠ 90°"<br/><strong>Verdade:</strong> Sempre calcule sin(θ) corretamente ou decomponha a força.</span>
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
                <li><strong>Passo 1:</strong> Escolha um ponto de rotação (geralmente onde há uma dobradiça ou ponto de apoio)</li>
                <li><strong>Passo 2:</strong> Calcule o torque de cada força em relação a esse ponto</li>
                <li><strong>Passo 3:</strong> Cuidado com os sinais! Torques no sentido horário são positivos ou negativos (escolha uma convenção)</li>
                <li><strong>Passo 4:</strong> Aplique Στ = 0</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-orange-50 to-red-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Torque:</strong> τ = r × F × sin(θ)</p>
            <p><strong>Segunda Condição:</strong> Στ = 0 (equilíbrio rotacional)</p>
            <p><strong>Centro de Gravidade:</strong> Ponto onde toda a massa é concentrada</p>
            <p><strong>Aplicação:</strong> Alavancas, portas, rodas, balancins, estruturas</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
