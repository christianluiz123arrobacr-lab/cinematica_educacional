import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function EstaticaTopicEquilibrio() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Equilíbrio de Forças</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Quando Tudo Fica Parado</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Imagine um livro em repouso sobre uma mesa. Ele não cai, não voa para cima, não desliza. Por quê? Porque as forças que atuam nele estão <strong>equilibradas</strong>.</p>
            <p>Estática é o estudo de corpos em equilíbrio. Quando um corpo está em equilíbrio, a força resultante é zero e ele não acelera. Isso é a base de toda a engenharia estrutural!</p>
          </div>
        </Card>

        {/* O Que é Equilíbrio */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que Significa Estar em Equilíbrio?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 my-4">
              <p className="text-lg font-semibold"><strong>"Um corpo está em equilíbrio quando a força resultante é zero."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Primeira Condição de Equilíbrio</h3>
            <p>Para um corpo estar em equilíbrio, a soma de todas as forças deve ser zero:</p>
            
            <div className="bg-amber-50 p-3 md:p-6 rounded-lg border border-amber-200 overflow-x-auto my-4">
              <MathFormula formula="\\sum \\vec{F} = 0" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">A soma vetorial de todas as forças é zero</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Isso Significa?</h3>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 my-4">
              <p className="mb-2"><strong>Se as forças se equilibram:</strong></p>
              <ul className="space-y-2 mt-2 text-slate-700">
                <li>• Se o corpo está em repouso, continua em repouso</li>
                <li>• Se o corpo está se movendo, continua se movendo com velocidade constante</li>
                <li>• Não há aceleração (a = 0)</li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">1.</span>
                <div>
                  <strong>Livro na mesa:</strong> Peso para baixo = Força normal para cima. Equilibradas!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">2.</span>
                <div>
                  <strong>Caixa pendurada por uma corda:</strong> Peso para baixo = Tensão para cima. Equilibradas!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">3.</span>
                <div>
                  <strong>Carro em movimento constante:</strong> Força do motor = Atrito. Se equilibradas, velocidade constante!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">4.</span>
                <div>
                  <strong>Ponte suspensa:</strong> Peso da ponte = Tensão dos cabos. Tudo em equilíbrio!
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Análise de Equilíbrio */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Como Analisar o Equilíbrio?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Passo 1: Desenhe um Diagrama de Forças</h3>
            <p>Mostre todas as forças atuando no corpo com setas indicando direção e sentido.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Passo 2: Decomponha as Forças</h3>
            <p>Se as forças não estão alinhadas, decomponha em componentes X e Y:</p>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 my-4">
              <p className="mb-2"><strong>Componente X:</strong> Forças para esquerda e direita</p>
              <p><strong>Componente Y:</strong> Forças para cima e para baixo</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Passo 3: Aplique a Condição de Equilíbrio</h3>
            <p>Para cada direção, a soma das forças deve ser zero:</p>
            <div className="bg-amber-50 p-3 md:p-6 rounded-lg border border-amber-200 overflow-x-auto my-4">
              <MathFormula formula="\\sum F_x = 0 \\quad \\text{e} \\quad \\sum F_y = 0" className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo Prático</h3>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 my-4">
              <p className="mb-3"><strong>Problema:</strong> Uma caixa de 100 N está pendurada por duas cordas. Uma faz ângulo de 30° com a horizontal, a outra faz 60°. Qual é a tensão em cada corda?</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <p className="text-sm">1. Desenhe o diagrama com as três forças (peso para baixo, duas tensões nos ângulos)</p>
              <p className="text-sm">2. Decomponha em X e Y</p>
              <p className="text-sm">3. Aplique ΣFx = 0 e ΣFy = 0</p>
              <p className="text-sm">4. Resolva o sistema de equações</p>
            </div>
          </div>
        </Card>

        {/* Tipos de Equilíbrio */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Tipos de Equilíbrio</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Equilíbrio Estático</h3>
            <p>O corpo está em repouso. Exemplo: um livro sobre a mesa.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Equilíbrio Dinâmico</h3>
            <p>O corpo está se movendo com velocidade constante. Exemplo: um carro em velocidade constante em uma estrada reta.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Equilíbrio Estável</h3>
            <p>Se você perturba o corpo, ele volta à posição original. Exemplo: uma bola no fundo de um poço.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Equilíbrio Instável</h3>
            <p>Se você perturba o corpo, ele se afasta mais ainda. Exemplo: uma bola no topo de uma montanha.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Equilíbrio Indiferente</h3>
            <p>Se você perturba o corpo, ele fica em equilíbrio na nova posição. Exemplo: uma bola sobre uma mesa plana.</p>
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
                  <span><strong>Erro:</strong> "Se a força resultante é zero, não há forças"<br/><strong>Verdade:</strong> Há forças, mas elas se cancelam! Exemplo: um livro na mesa tem peso e força normal, mas se equilibram.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Equilíbrio significa não se mover"<br/><strong>Verdade:</strong> Equilíbrio significa não acelerar. Um carro em velocidade constante está em equilíbrio!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer de considerar todas as forças"<br/><strong>Verdade:</strong> Sempre liste todas as forças: peso, normal, tensão, atrito, etc.</span>
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
                <li><strong>Passo 1:</strong> Desenhe um diagrama de forças claro</li>
                <li><strong>Passo 2:</strong> Escolha um sistema de coordenadas (X e Y)</li>
                <li><strong>Passo 3:</strong> Decomponha todas as forças em componentes X e Y</li>
                <li><strong>Passo 4:</strong> Aplique ΣFx = 0 e ΣFy = 0</li>
                <li><strong>Passo 5:</strong> Resolva o sistema de equações</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Equilíbrio:</strong> Força resultante = 0</p>
            <p><strong>Primeira Condição:</strong> ΣF = 0</p>
            <p><strong>Tipos:</strong> Estático, Dinâmico, Estável, Instável, Indiferente</p>
            <p><strong>Aplicação:</strong> Estruturas, pontes, máquinas, tudo que não cai!</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
