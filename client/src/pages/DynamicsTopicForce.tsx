import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
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
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força: A Causa do Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Força é uma grandeza vetorial que representa a interação entre corpos, capaz de alterar o estado de movimento ou repouso de um objeto. Todas as forças na natureza podem ser classificadas em quatro tipos fundamentais: força gravitacional, força eletromagnética, força nuclear forte e força nuclear fraca. Na mecânica clássica, lidamos principalmente com forças gravitacionais e de contato.</p>
            <p>A compreensão das forças é essencial para resolver praticamente qualquer problema em dinâmica. Identificar corretamente todas as forças atuando em um objeto é o primeiro passo para aplicar as Leis de Newton.</p>
          </div>
        </Card>

        {/* Tipos de Força */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Tipos Principais de Força</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Peso (Força Gravitacional)</h3>
              <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto mb-3">
                <MathFormula formula="P = m \\cdot g" className="text-center text-lg md:text-2xl mb-4" />
                <p className="text-sm text-slate-600">Onde: P = peso (N), m = massa (kg), g = aceleração da gravidade (m/s²)</p>
              </div>
              <p>O peso é a força com a qual a Terra atrai um objeto. Na superfície da Terra, g ≈ 9,8 m/s². O peso é sempre direcionado para o centro da Terra (verticalmente para baixo). Diferentemente da massa, que é constante, o peso varia com a localização. Na Lua, onde g ≈ 1,6 m/s², um objeto pesa muito menos, mas sua massa permanece a mesma.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Força Normal</h3>
              <p>A força normal é a força de contato exercida por uma superfície sobre um objeto. Ela é sempre perpendicular à superfície de contato e aponta para fora da superfície. A magnitude da força normal depende das outras forças atuando no objeto e da geometria da situação.</p>
              <p className="mt-3 text-sm italic text-slate-600">Exemplo: Quando você está em pé no chão, a força normal equilibra seu peso. Se você está em um elevador acelerado para cima, a força normal é maior que seu peso. Se o elevador está acelerado para baixo, a força normal é menor.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Tensão</h3>
              <p>A tensão é a força exercida por uma corda, cabo ou fio sobre um objeto. Ela sempre atua ao longo da corda, puxando o objeto. A tensão em uma corda ideal (sem massa e inextensível) é a mesma em todos os pontos da corda.</p>
              <p className="mt-3 text-sm italic text-slate-600">Exemplo: Quando você puxa uma caixa com uma corda, a tensão na corda é a força que puxa a caixa. Se a corda passa por uma polia, a tensão é a mesma em ambos os lados (assumindo uma polia ideal sem atrito).</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Força Aplicada</h3>
              <p>A força aplicada é qualquer força exercida diretamente sobre um objeto por um agente externo. Pode ser uma pessoa empurrando ou puxando, um motor fornecendo força, etc. A magnitude e direção da força aplicada dependem da situação específica.</p>
            </div>
          </div>
        </Card>

        {/* Força de Atrito */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força de Atrito: A Resistência ao Movimento</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O atrito é uma força que se opõe ao movimento relativo entre duas superfícies em contato. Existem dois tipos principais de atrito: atrito estático (quando não há movimento) e atrito cinético (quando há movimento). O atrito é causado pelas irregularidades microscópicas nas superfícies e pelas forças intermoleculares entre elas.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Atrito Cinético</h3>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto mb-3">
              <MathFormula formula="f_c = \\mu_c \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: f_c = força de atrito cinético (N), μ_c = coeficiente de atrito cinético, N = força normal (N)</p>
            </div>
            <p>O atrito cinético atua quando um objeto está deslizando sobre uma superfície. A magnitude do atrito cinético é proporcional à força normal. O coeficiente de atrito cinético μ_c depende dos materiais em contato e da condição da superfície. Tipicamente, 0 &lt; μ_c &lt; 1.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Atrito Estático</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto mb-3">
              <MathFormula formula="f_s \\leq \\mu_s \\cdot N" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: f_s = força de atrito estático (N), μ_s = coeficiente de atrito estático (máximo), N = força normal (N)</p>
            </div>
            <p>O atrito estático atua quando um objeto está em repouso ou quando você tenta mover um objeto que ainda não está se movendo. A magnitude do atrito estático pode variar de zero até um valor máximo μ_s·N. O atrito estático é sempre igual e oposto à força aplicada (até o limite máximo).</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Comparação entre Atrito Estático e Cinético</h3>
            <p>Geralmente, μ_s &gt; μ_c, o que significa que o atrito estático é maior que o atrito cinético. Por isso é mais difícil começar a mover um objeto do que mantê-lo em movimento uma vez que já está se movendo. Quando você tira um objeto do repouso, você deve superar o atrito estático máximo. Uma vez em movimento, você só precisa superar o atrito cinético, que é menor.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pneus em asfalto molhado:</strong> O coeficiente de atrito entre pneus e asfalto molhado é menor que entre pneus e asfalto seco. Por isso, é mais fácil derrapar em uma estrada molhada.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Freio de um carro:</strong> O atrito entre as pastilhas de freio e o disco de freio desacelera o carro. Quanto maior o coeficiente de atrito, mais eficaz é o freio.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Caminhada:</strong> Quando você caminha, o atrito entre seus sapatos e o chão permite que você empurre o chão para trás e se mova para frente. Em uma superfície muito lisa (como gelo), o atrito é muito pequeno, e é difícil caminhar.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Diagrama de Forças */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Diagrama de Corpo Livre (DCL)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Um diagrama de corpo livre é uma representação visual de todas as forças atuando sobre um objeto. É uma ferramenta essencial para resolver problemas de dinâmica. Para desenhar um DCL:</p>
            <ol className="space-y-3 text-slate-700 list-decimal list-inside">
              <li>Desenhe o objeto como um ponto ou uma forma simples</li>
              <li>Desenhe setas representando cada força atuando no objeto</li>
              <li>Rotule cada força com seu nome e magnitude (se conhecida)</li>
              <li>Escolha um sistema de coordenadas (geralmente x e y)</li>
              <li>Decomponha as forças em componentes x e y se necessário</li>
            </ol>
            <p className="mt-4">Exemplo: Para um bloco em um plano inclinado, as forças são: peso (P), força normal (N) perpendicular ao plano, e possivelmente atrito (f) paralelo ao plano. O peso pode ser decomposto em componentes paralela e perpendicular ao plano.</p>
          </div>
        </Card>

        {/* Aplicações */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aplicações Práticas de Força e Atrito</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Compreender força e atrito é fundamental para muitas aplicações práticas:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Design de Freios:</strong> Os engenheiros calculam a força de atrito necessária para parar um veículo em uma distância segura, considerando o peso do veículo e o coeficiente de atrito dos materiais de freio.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Segurança em Estradas:</strong> As curvas em estradas são inclinadas para aumentar a força normal e, portanto, o atrito disponível para manter o veículo na trajetória.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Máquinas Industriais:</strong> O atrito em máquinas é minimizado usando lubrificantes para reduzir o consumo de energia e aumentar a eficiência.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Esportes:</strong> A escolha de sapatos com bom atrito é crucial em esportes como futebol, basquete e tênis para melhorar o desempenho e reduzir lesões.</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
}
