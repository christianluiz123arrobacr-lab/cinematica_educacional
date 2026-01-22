import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function EstaticaTopicHidrostatica() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Hidrostática</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-cyan-50 to-blue-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Fluidos em Equilíbrio</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Hidrostática é o estudo de fluidos (líquidos e gases) que estão em repouso ou em equilíbrio. É uma parte importante da Estática!</p>
            <p>Você já parou para pensar por que um navio flutua? Por que sentimos pressão quando mergulhamos? Por que a água sobe em um canudo? Todas essas respostas estão na Hidrostática!</p>
          </div>
        </Card>

        {/* O Conceito de Pressão */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Conceito de Pressão</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="text-lg font-semibold"><strong>"Pressão é a força distribuída em uma área. É como se você espalhasse uma força em uma superfície."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Analogia Prática</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">Imagine que você está em pé em uma piscina. Seu peso (força) é distribuído pela área de seus pés. Agora imagine que você coloca uma placa de madeira embaixo dos pés. A mesma força é distribuída por uma área muito maior, então a pressão diminui!</p>
              <p className="text-sm"><strong>Conclusão:</strong> Mesma força, mas áreas diferentes = pressões diferentes!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula de Pressão</h3>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$P = \\frac{F}{A}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center">Pressão = Força / Área</p>
              <p className="text-sm text-slate-600 text-center mt-2">Unidade: Pascal (Pa) = N/m²</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo Prático</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Uma pessoa de 70 kg está em pé em uma piscina. A área de contato de seus pés é 0,05 m². Qual é a pressão exercida?</p>
              <p className="text-sm">Força = 70 × 10 = 700 N</p>
              <p className="text-sm">Pressão = 700 / 0,05 = 14.000 Pa</p>
              <p className="text-sm mt-2"><strong>Conclusão:</strong> Uma pressão de 14.000 Pa! Isso é bastante!</p>
            </div>
          </div>
        </Card>

        {/* Pressão em Fluidos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Pressão em Fluidos</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Pressão Hidrostática</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">A pressão em um fluido depende de três coisas:</p>
              <ul className="space-y-2 text-slate-700 ml-4">
                <li>Profundidade: Quanto mais fundo, maior a pressão</li>
                <li>Densidade do fluido: Fluidos mais densos exercem mais pressão</li>
                <li>Gravidade: Quanto maior a gravidade, maior a pressão</li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula de Pressão Hidrostática</h3>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$P = P_0 + \\rho g h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong>P</strong> = Pressão total</p>
                <p><strong>P₀</strong> = Pressão atmosférica (≈ 101.325 Pa ao nível do mar)</p>
                <p><strong>ρ</strong> = Densidade do fluido (kg/m³)</p>
                <p><strong>g</strong> = Aceleração da gravidade (≈ 10 m/s²)</p>
                <p><strong>h</strong> = Profundidade (m)</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que Sentimos Mais Pressão Embaixo da Água?</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">Quando você mergulha, sente a pressão aumentar nos ouvidos. Por quê?</p>
              <p className="mb-2">Porque toda a água acima de você está empurrando para baixo! Quanto mais profundo você vai, mais água está acima, então mais pressão você sente.</p>
              <p className="text-sm"><strong>Exemplo:</strong> A 10 m de profundidade em água doce, a pressão é aproximadamente 2 vezes a pressão atmosférica!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo Prático</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Qual é a pressão a 5 m de profundidade em água doce?</p>
              <p className="text-sm">P = 101.325 + (1000 × 10 × 5)</p>
              <p className="text-sm">P = 101.325 + 50.000 = 151.325 Pa</p>
              <p className="text-sm mt-2"><strong>Conclusão:</strong> A pressão aumenta 50.000 Pa a cada 5 metros!</p>
            </div>
          </div>
        </Card>

        {/* Princípio de Arquimedes */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Princípio de Arquimedes (Empuxo)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="text-lg font-semibold"><strong>"Todo corpo imerso em um fluido recebe uma força para cima igual ao peso do fluido deslocado."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que as Coisas Flutuam?</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">Quando você coloca um objeto na água, duas forças atuam:</p>
              <ul className="space-y-2 text-slate-700 ml-4">
                <li><strong>Peso (P):</strong> Puxa o objeto para baixo</li>
                <li><strong>Empuxo (E):</strong> Puxa o objeto para cima</li>
              </ul>
              <p className="mt-3"><strong>Se E maior que P:</strong> O objeto flutua!</p>
              <p><strong>Se E igual a P:</strong> O objeto fica em equilíbrio (flutua completamente submerso)</p>
              <p><strong>Se E menor que P:</strong> O objeto afunda!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">A Fórmula de Empuxo</h3>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto my-4">
              <MathFormula formula={String.raw`$$$$E = \\rho_{fluido} \\cdot g \\cdot V_{deslocado}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong>E</strong> = Empuxo (N)</p>
                <p><strong>ρ_fluido</strong> = Densidade do fluido (kg/m³)</p>
                <p><strong>g</strong> = Aceleração da gravidade (≈ 10 m/s²)</p>
                <p><strong>V_deslocado</strong> = Volume do fluido deslocado (m³)</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que um Navio Flutua?</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">Um navio é feito de aço, que é mais denso que a água. Mas ele flutua porque:</p>
              <ul className="space-y-2 text-slate-700 ml-4">
                <li>🚢 O navio tem um grande volume (porque é oco)</li>
                <li>💧 O volume de água deslocado gera um empuxo muito grande</li>
                <li>⚖️ O empuxo é maior que o peso total do navio</li>
              </ul>
              <p className="mt-3"><strong>Conclusão:</strong> O que importa é o volume deslocado, não apenas o material!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo Prático</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-2"><strong>Problema:</strong> Uma bola de 0,01 m³ é colocada em água. Qual é o empuxo?</p>
              <p className="text-sm">E = 1000 × 10 × 0,01</p>
              <p className="text-sm">E = 100 N</p>
              <p className="text-sm mt-2"><strong>Conclusão:</strong> A bola recebe uma força para cima de 100 N!</p>
            </div>
          </div>
        </Card>

        {/* Vasos Comunicantes */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Vasos Comunicantes</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="text-lg font-semibold"><strong>"Em vasos comunicantes, o fluido sempre atinge o mesmo nível, independentemente da forma do vaso."</strong></p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que Isso Acontece?</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">A pressão no fundo de qualquer vaso é a mesma. Se um lado tivesse mais altura que o outro, haveria uma diferença de pressão, e o fluido se moveria até equilibrar.</p>
              <p className="text-sm"><strong>Lembrete:</strong> P = P₀ + ρgh. Se h é diferente, P é diferente. O fluido se move até que P seja igual em todos os pontos!</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos de Vasos Comunicantes</h3>
            <div className="space-y-3 text-slate-700">
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="font-bold mb-2">💧 Torneira de Dois Lados</p>
                <p className="text-sm">Quando você abre uma torneira, a água sai dos dois lados com a mesma força porque estão conectadas internamente (vasos comunicantes).</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="font-bold mb-2">🏗️ Nível de Construção</p>
                <p className="text-sm">Os construtores usam um tubo com água para verificar se uma superfície está nivelada. A água sempre atinge o mesmo nível nos dois lados!</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="font-bold mb-2">🌊 Canais e Rios</p>
                <p className="text-sm">A água em canais conectados sempre atinge o mesmo nível (ou próximo disso), mesmo que os canais tenham formas diferentes.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Densidade e Flutuação */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Densidade e Flutuação</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">O Papel da Densidade</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-3">A densidade é crucial para entender se algo flutua ou afunda:</p>
              <ul className="space-y-2 text-slate-700 ml-4">
                <li><strong>Densidade do objeto maior que Densidade do fluido:</strong> Afunda</li>
                <li><strong>Densidade do objeto igual a Densidade do fluido:</strong> Flutua completamente submerso</li>
                <li><strong>Densidade do objeto menor que Densidade do fluido:</strong> Flutua na superfície</li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos de Densidades</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Ar</td>
                    <td className="py-2 text-right">≈ 1,2 kg/m³</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Água doce</td>
                    <td className="py-2 text-right">1000 kg/m³</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Água salgada</td>
                    <td className="py-2 text-right">≈ 1025 kg/m³</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Óleo</td>
                    <td className="py-2 text-right">≈ 900 kg/m³</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-bold">Ferro</td>
                    <td className="py-2 text-right">≈ 7800 kg/m³</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Ouro</td>
                    <td className="py-2 text-right">≈ 19300 kg/m³</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Por Que o Óleo Flutua na Água?</h3>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-4">
              <p className="mb-2">Porque a densidade do óleo (≈ 900 kg/m³) é menor que a densidade da água (1000 kg/m³)!</p>
              <p className="text-sm"><strong>Conclusão:</strong> Sempre que um fluido tem menor densidade, ele flutua sobre o outro.</p>
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
                  <span><strong>Erro:</strong> "Um objeto mais pesado sempre afunda"<br/><strong>Verdade:</strong> O que importa é a densidade, não o peso total. Um navio pesado flutua!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "A pressão é a mesma em todas as profundidades"<br/><strong>Verdade:</strong> A pressão aumenta com a profundidade: P = P₀ + ρgh</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "O empuxo depende do peso do objeto"<br/><strong>Verdade:</strong> O empuxo depende do volume deslocado e da densidade do fluido!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Vasos comunicantes só funcionam com água"<br/><strong>Verdade:</strong> Funcionam com qualquer fluido em equilíbrio!</span>
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
                <li><strong>Passo 1:</strong> Identifique se é um problema de pressão, empuxo ou vasos comunicantes</li>
                <li><strong>Passo 2:</strong> Anote os valores conhecidos (densidade, profundidade, volume, etc.)</li>
                <li><strong>Passo 3:</strong> Escolha a fórmula apropriada</li>
                <li><strong>Passo 4:</strong> Cuidado com as unidades! Sempre use SI (kg/m³, m, m/s²)</li>
                <li><strong>Passo 5:</strong> Verifique se sua resposta faz sentido (pressão aumenta com profundidade? Densidade menor flutua?)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-cyan-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>Pressão:</strong> P = F/A (força distribuída em uma área)</p>
            <p><strong>Pressão Hidrostática:</strong> P = P₀ + ρgh (aumenta com profundidade)</p>
            <p><strong>Empuxo:</strong> E = ρ_fluido × g × V_deslocado (força para cima)</p>
            <p><strong>Vasos Comunicantes:</strong> Fluido atinge o mesmo nível em todos os lados</p>
            <p><strong>Flutuação:</strong> Depende da densidade relativa (objeto vs fluido)</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
