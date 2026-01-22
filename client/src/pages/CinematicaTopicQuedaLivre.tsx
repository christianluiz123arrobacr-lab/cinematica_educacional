import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicQuedaLivre() {
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
          <h1 className="text-2xl font-bold text-slate-900">Queda Livre</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-red-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Quando Algo Cai</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Solte uma moeda de uma altura qualquer. O que acontece? Ela cai! E cai cada vez mais rápido. Isso é queda livre.</p>
            <p>A queda livre é um dos movimentos mais comuns na natureza. E a melhor parte? É muito previsível! Podemos calcular exatamente quão rápido algo está caindo e quanto tempo leva para cair.</p>
          </div>
        </Card>

        {/* O Que é Queda Livre */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que é Queda Livre?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p><strong>Queda Livre:</strong> Um objeto caindo sob a ação exclusiva da gravidade, sem resistência do ar.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">As Características Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Aceleração Constante:</strong> g ≈ 9,8 m/s² (ou 10 m/s² para simplificar).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Velocidade Aumenta:</strong> A cada segundo, a velocidade aumenta 9,8 m/s.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Sem Resistência do Ar:</strong> Ignoramos o atrito com o ar (na realidade existe, mas é pequeno).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Movimento Vertical:</strong> Sempre para baixo (na direção da Terra).</span>
              </li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="mb-2"><strong>Analogia:</strong> Queda livre é como MRUV, mas com aceleração sempre igual a g (9,8 m/s²) e sempre para baixo.</p>
            </div>
          </div>
        </Card>

        {/* A Aceleração da Gravidade */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">A Aceleração da Gravidade (g)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A aceleração da gravidade é uma constante que varia ligeiramente dependendo de onde você está na Terra, mas é aproximadamente:</p>
            
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto my-4">
              <p className="text-center text-lg md:text-2xl font-bold mb-2">g ≈ 9,8 m/s²</p>
              <p className="text-sm text-slate-600 text-center">Ou arredondado para facilitar cálculos: g ≈ 10 m/s²</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Isso Significa?</h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p>Se você soltar um objeto do repouso:</p>
              <ul className="space-y-2 mt-3 text-slate-700">
                <li>• Após 1 segundo: velocidade = 9,8 m/s</li>
                <li>• Após 2 segundos: velocidade = 19,6 m/s</li>
                <li>• Após 3 segundos: velocidade = 29,4 m/s</li>
              </ul>
              <p className="mt-3">A cada segundo, a velocidade aumenta 9,8 m/s!</p>
            </div>
          </div>
        </Card>

        {/* As Fórmulas da Queda Livre */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">As Fórmulas da Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>As fórmulas da queda livre são as mesmas do MRUV, mas com a = g (aceleração da gravidade).</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 1: Velocidade Final</h3>
            <p>Qual será a velocidade após cair por um certo tempo?</p>
            
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$v = v_0 + g \\cdot t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Se soltar do repouso (v₀ = 0): v = g·t</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 2: Altura Final</h3>
            <p>Qual será a altura após cair por um certo tempo?</p>
            
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$h = h_0 + v_0 \\cdot t + \\frac{g \\cdot t^2}{2}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Se soltar do repouso (v₀ = 0): h = h₀ + (g·t²)/2</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 3: Equação de Torricelli (Sem Tempo)</h3>
            <p>Qual será a velocidade após cair uma certa altura?</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$v^2 = v_0^2 + 2 \\cdot g \\cdot \\Delta h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Se soltar do repouso (v₀ = 0): v² = 2·g·Δh</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Fórmula 4: Tempo de Queda (Objeto Solto)</h3>
            <p>Quanto tempo leva para cair de uma altura h?</p>
            
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$t = \\sqrt{\\frac{2h}{g}}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Tempo = raiz quadrada de (2 × altura / g)</p>
            </div>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos do Mundo Real</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">1.</span>
                <div>
                  <strong>Soltar uma moeda de um prédio:</strong> Se o prédio tem 45 m de altura, quanto tempo leva para a moeda cair?<br/>
                  <span className="text-sm text-slate-600">t = √(2×45/10) = √9 = 3 segundos</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">2.</span>
                <div>
                  <strong>Qual é a velocidade ao atingir o solo?</strong> Usando a mesma moeda:<br/>
                  <span className="text-sm text-slate-600">v = 10 × 3 = 30 m/s (ou 108 km/h!)</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">3.</span>
                <div>
                  <strong>Lançamento vertical para cima:</strong> Você lança uma bola para cima a 20 m/s. Qual é a altura máxima?<br/>
                  <span className="text-sm text-slate-600">No ponto mais alto, v = 0. Usando v² = v₀² - 2gh: 0 = 400 - 2×10×h → h = 20 m</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">4.</span>
                <div>
                  <strong>Pingo de chuva:</strong> Uma nuvem está a 1000 m de altura. Quanto tempo leva para a chuva cair?<br/>
                  <span className="text-sm text-slate-600">t = √(2×1000/10) = √200 ≈ 14 segundos</span>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Casos Especiais */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Casos Especiais</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Objeto Solto do Repouso</h3>
            <p>Quando você simplesmente solta algo (v₀ = 0), as fórmulas simplificam:</p>
            <ul className="space-y-2 text-slate-700 ml-4">
              <li>• v = g·t</li>
              <li>• h = (g·t²)/2</li>
              <li>• v² = 2·g·h</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Lançamento Vertical para Cima</h3>
            <p>Quando você lança algo para cima com velocidade inicial v₀:</p>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p>• O objeto sobe desacelerando (aceleração negativa)</p>
              <p>• No ponto mais alto, v = 0</p>
              <p>• Depois cai acelerando (aceleração positiva)</p>
              <p>• Tempo de subida = Tempo de descida</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Lançamento Vertical para Baixo</h3>
            <p>Quando você lança algo para baixo com velocidade inicial v₀:</p>
            <p>Use as mesmas fórmulas, mas com v₀ negativo (ou considere como aceleração adicional).</p>
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
                  <span><strong>Erro:</strong> "Objetos mais pesados caem mais rápido"<br/><strong>Verdade:</strong> No vácuo (sem ar), todos os objetos caem com a mesma aceleração g, independentemente do peso!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Usar g = 9,8 quando o problema diz para usar g = 10"<br/><strong>Verdade:</strong> Sempre use o valor que o problema especifica!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Esquecer que a aceleração é negativa quando sobe"<br/><strong>Verdade:</strong> Se considerar para cima como positivo, a = -g (negativa)</span>
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
                <li><strong>Passo 1:</strong> Escolha uma direção positiva (geralmente para cima)</li>
                <li><strong>Passo 2:</strong> Se for para cima, use a = -g. Se for para baixo, use a = +g</li>
                <li><strong>Passo 3:</strong> Organize os dados: h₀, v₀, g, t</li>
                <li><strong>Passo 4:</strong> Escolha a fórmula que tem as informações que você tem e a que você quer</li>
                <li><strong>Dica:</strong> Use g = 10 m/s² para simplificar cálculos (a menos que o problema peça g = 9,8)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-red-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Queda Livre:</strong> Movimento vertical sob ação exclusiva da gravidade</p>
            <p><strong>Aceleração:</strong> g ≈ 9,8 m/s² (ou 10 m/s²)</p>
            <p><strong>Fórmulas:</strong> v = v₀ + gt | h = h₀ + v₀t + gt²/2 | v² = v₀² + 2gΔh</p>
            <p><strong>Casos especiais:</strong> Objeto solto (v₀ = 0), lançamento para cima, lançamento para baixo</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
