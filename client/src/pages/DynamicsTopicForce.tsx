import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsTopicForce() {
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
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Força e Atrito</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Força?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Força é um <strong>"empurrão" ou "puxão"</strong> que você aplica em algo. Quando você empurra uma porta, você está aplicando força. Quando você puxa uma corda, está aplicando força.</p>
            <p>A força é medida em <strong>Newtons (N)</strong>. Uma maçã pesa aproximadamente 1 Newton! Força é uma grandeza vetorial, o que significa que tem magnitude (tamanho) e direção (para onde aponta).</p>
          </div>
        </Card>

        {/* Tipos de Força */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Tipos Principais de Força</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">1. Peso (Força da Gravidade)</h3>
            <p>É a força com a qual a Terra puxa você para baixo. Quanto mais pesado você é, maior é seu peso.</p>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto mb-3">
              <MathFormula formula={String.raw`$$$$P = m \\cdot g$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Peso = Massa × Gravidade</strong></p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p><strong>Exemplo:</strong> Se você pesa 70 kg, seu peso é 70 × 10 = 700 N (usando g = 10 m/s²)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. Força Normal</h3>
            <p>É a força que uma superfície exerce para <strong>empurrar você para cima</strong>. Quando você está em pé no chão, o chão empurra você para cima com força normal.</p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p><strong>Analogia:</strong> Imagine uma cama. Quando você deita, a cama empurra você para cima. Essa é a força normal!</p>
              <p className="mt-2"><strong>Importante:</strong> A força normal é sempre perpendicular (em ângulo reto) à superfície.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Tensão</h3>
            <p>É a força que uma corda, cabo ou fio exerce quando está sendo puxado. A tensão sempre puxa (nunca empurra).</p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p><strong>Exemplo:</strong> Quando você puxa uma caixa com uma corda, a tensão na corda é o que puxa a caixa.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Força Aplicada</h3>
            <p>É qualquer força que você (ou algo) aplica diretamente em um objeto. Quando você empurra uma porta, você está aplicando uma força aplicada.</p>
          </div>
        </Card>

        {/* Atrito */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Atrito: A Força que Resiste ao Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>Atrito é a força que se opõe ao movimento.</strong> Quando você tenta deslizar um objeto sobre uma superfície, o atrito tenta impedir isso.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que Existe Atrito?</h3>
            <p>Se você olhar uma superfície com um microscópio, verá que ela não é lisa! Tem pequenas irregularidades. Quando dois objetos deslizam um sobre o outro, essas irregularidades se chocam, criando atrito.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Atrito Estático (Quando Nada Se Move)</h3>
            <p>É o atrito que impede um objeto de começar a se mover. É mais forte que o atrito cinético!</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto mb-3">
              <MathFormula formula={String.raw`$$$$f_s \\leq \\mu_s \\cdot N$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Atrito estático ≤ Coeficiente × Força Normal</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p><strong>Exemplo:</strong> Você tenta empurrar um carro parado. No começo, é muito difícil porque o atrito estático resiste. Mas uma vez que o carro começa a se mover, fica mais fácil!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Atrito Cinético (Quando Algo Está Se Movendo)</h3>
            <p>É o atrito que age quando um objeto já está deslizando sobre uma superfície. É mais fraco que o atrito estático.</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto mb-3">
              <MathFormula formula={String.raw`$$$$f_c = \\mu_c \\cdot N$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Atrito cinético = Coeficiente × Força Normal</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Qual é Maior?</h3>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
              <p><strong>Atrito Estático &gt; Atrito Cinético</strong></p>
              <p className="mt-2">Por isso é mais difícil começar a mover algo do que mantê-lo em movimento!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos do Dia a Dia</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">1.</span>
                <div>
                  <strong>Pista de gelo:</strong> O gelo tem coeficiente de atrito muito baixo. Por isso é fácil derrapar!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">2.</span>
                <div>
                  <strong>Pneus em chuva:</strong> Pneus em asfalto molhado têm menos atrito que em asfalto seco. Por isso é perigoso dirigir na chuva!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">3.</span>
                <div>
                  <strong>Freio de carro:</strong> Os freios funcionam aumentando o atrito entre as rodas e o chão (ou entre as pastilhas e o disco).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">4.</span>
                <div>
                  <strong>Sapato de borracha vs. meias:</strong> Sapatos de borracha têm mais atrito que meias. Por isso você não escorrega com sapatos!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">5.</span>
                <div>
                  <strong>Caminhar:</strong> Quando você caminha, o atrito entre seus pés e o chão é o que o impede de derrapar!
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Diagrama de Forças */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Diagrama de Forças (Diagrama de Corpo Livre)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Um diagrama de forças mostra todas as forças atuando em um objeto. É uma ferramenta muito importante para resolver problemas de dinâmica.</p>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="mb-3"><strong>Exemplo: Uma caixa em repouso no chão</strong></p>
              <p>Duas forças atuam:</p>
              <ul className="space-y-2 mt-2 text-slate-700">
                <li>• <strong>Peso (P):</strong> Aponta para baixo (Terra puxando a caixa)</li>
                <li>• <strong>Força Normal (N):</strong> Aponta para cima (chão empurrando a caixa)</li>
              </ul>
              <p className="mt-3">Como a caixa está em repouso: N = P (as forças se equilibram)</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="mb-3"><strong>Exemplo: Uma caixa sendo puxada</strong></p>
              <p>Quatro forças atuam:</p>
              <ul className="space-y-2 mt-2 text-slate-700">
                <li>• <strong>Peso (P):</strong> Para baixo</li>
                <li>• <strong>Força Normal (N):</strong> Para cima</li>
                <li>• <strong>Tensão (T):</strong> Para frente (corda puxando)</li>
                <li>• <strong>Atrito (f):</strong> Para trás (resistindo ao movimento)</li>
              </ul>
              <p className="mt-3">Se a caixa se move com velocidade constante: T = f (as forças horizontais se equilibram)</p>
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
                  <span><strong>Erro:</strong> "Peso e massa são a mesma coisa"<br/><strong>Verdade:</strong> Massa é a quantidade de matéria (constante). Peso é a força da gravidade (varia com a localização).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Atrito sempre é ruim"<br/><strong>Verdade:</strong> Sem atrito, você não conseguiria caminhar, dirigir ou frear um carro!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Força normal é sempre igual ao peso"<br/><strong>Verdade:</strong> Força normal é igual ao peso apenas quando não há aceleração vertical. Em um elevador acelerado, é diferente!</span>
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
                <li><strong>Passo 1:</strong> Desenhe um diagrama de forças mostrando todas as forças</li>
                <li><strong>Passo 2:</strong> Identifique a direção de cada força (para cima, para baixo, para frente, etc.)</li>
                <li><strong>Passo 3:</strong> Use F = m·a para encontrar a aceleração</li>
                <li><strong>Passo 4:</strong> Cuidado com o atrito! Ele sempre se opõe ao movimento</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Força:</strong> Um empurrão ou puxão, medido em Newtons (N)</p>
            <p><strong>Peso:</strong> P = m·g (força da gravidade)</p>
            <p><strong>Atrito Estático:</strong> Impede movimento (mais forte)</p>
            <p><strong>Atrito Cinético:</strong> Age durante o movimento (mais fraco)</p>
            <p><strong>Diagrama de Forças:</strong> Ferramenta essencial para resolver problemas</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
