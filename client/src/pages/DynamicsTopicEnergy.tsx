import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsTopicEnergy() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Trabalho e Energia</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Trabalho e Energia: Conceitos Fundamentais</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Trabalho e energia são conceitos intimamente relacionados que fornecem uma forma alternativa de analisar o movimento dos objetos. Enquanto as Leis de Newton descrevem como as forças causam mudanças no movimento, o conceito de energia oferece uma perspectiva sobre a "quantidade de ação" que pode ser realizada.</p>
            <p>A energia é uma das grandezas mais fundamentais da física. Ela pode ser transformada de uma forma para outra, mas nunca é criada ou destruída (Princípio da Conservação da Energia). Compreender trabalho e energia é essencial para resolver muitos problemas práticos em engenharia e física.</p>
          </div>
        </Card>

        {/* Trabalho */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Trabalho de uma Força</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Trabalho é uma medida da energia transferida por uma força. Ele depende não apenas da magnitude da força, mas também do ângulo entre a força e o deslocamento. Quando a força está na mesma direção do deslocamento, o trabalho é máximo e positivo. Quando a força é perpendicular ao deslocamento, o trabalho é zero.</p>

            <div className="bg-yellow-50 p-3 md:p-6 rounded-lg border border-yellow-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$W = F \\cdot d \\cdot \\cos(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: W = trabalho (J), F = força (N), d = deslocamento (m), θ = ângulo entre F e d</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Casos Especiais</h3>
            <div className="bg-yellow-50 p-3 md:p-6 rounded-lg border border-yellow-200 overflow-x-auto mb-3">
              <MathFormula formula={String.raw`$$$$\\theta = 0° \\Rightarrow W = F \\cdot d \\quad (\\text{máximo trabalho positivo})$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <MathFormula formula={String.raw`$$$$\\theta = 90° \\Rightarrow W = 0 \\quad (\\text{nenhum trabalho})$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <MathFormula formula={String.raw`$$$$\\theta = 180° \\Rightarrow W = -F \\cdot d \\quad (\\text{máximo trabalho negativo})$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Interpretação Física</h3>
            <p>Trabalho positivo significa que a força está transferindo energia para o objeto, aumentando sua capacidade de realizar ação. Trabalho negativo significa que a força está removendo energia do objeto. Trabalho zero significa que a força não está afetando a energia do objeto.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Levantar uma caixa:</strong> Quando você levanta uma caixa verticalmente, a força que você aplica está na mesma direção do deslocamento, então o trabalho é positivo. Você está transferindo energia para a caixa.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Carregar uma caixa horizontalmente:</strong> Quando você carrega uma caixa horizontalmente, a força gravitacional (peso) é perpendicular ao deslocamento, então o trabalho realizado pela gravidade é zero. Você está realizando trabalho contra o atrito, não contra a gravidade.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Freiar um carro:</strong> A força de atrito atua na direção oposta ao deslocamento, então o trabalho é negativo. O atrito está removendo energia do carro, desacelerando-o.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Energia Cinética */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Cinética</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Energia cinética é a energia associada ao movimento de um corpo. Todo objeto em movimento possui energia cinética. A energia cinética depende tanto da massa quanto da velocidade do objeto, e é proporcional ao quadrado da velocidade.</p>

            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$E_c = \\frac{1}{2} \\cdot m \\cdot v^2$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_c = energia cinética (J), m = massa (kg), v = velocidade (m/s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Teorema do Trabalho-Energia</h3>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Relação Fundamental:</p>
              <MathFormula formula={String.raw`$$$$W = \\Delta E_c = E_{c,f} - E_{c,i}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <p>O Teorema do Trabalho-Energia estabelece que o trabalho realizado sobre um corpo é igual à variação de sua energia cinética. Se o trabalho é positivo, a energia cinética aumenta e o objeto acelera. Se é negativo, a energia cinética diminui e o objeto desacelera.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Importância do Quadrado da Velocidade</h3>
            <p>Observe que a energia cinética é proporcional ao quadrado da velocidade. Isso significa que aumentar a velocidade tem um efeito muito maior na energia cinética do que aumentar a massa. Por exemplo, duplicar a velocidade quadruplica a energia cinética, enquanto duplicar a massa apenas a duplica. Por isso, em acidentes de trânsito, a velocidade é muito mais importante que o peso do veículo.</p>
          </div>
        </Card>

        {/* Energia Potencial */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Potencial Gravitacional</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Energia potencial gravitacional é a energia armazenada em um objeto devido à sua posição em um campo gravitacional. Quanto mais alto o objeto está, maior é sua energia potencial. Esta energia pode ser convertida em energia cinética quando o objeto cai.</p>

            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$E_p = m \\cdot g \\cdot h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_p = energia potencial (J), m = massa (kg), g = gravidade (m/s²), h = altura (m)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Referencial de Altura</h3>
            <p>A escolha do referencial (ponto onde E_p = 0) é arbitrária. O que importa fisicamente é a variação da energia potencial, não seu valor absoluto. Você pode escolher o solo, o nível do mar, ou qualquer outro ponto como referencial. A variação de energia potencial será a mesma independentemente da escolha.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Variação de Energia Potencial</h3>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto mb-3">
              <MathFormula formula={String.raw`$$$$\\Delta E_p = m \\cdot g \\cdot \\Delta h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
          </div>
        </Card>

        {/* Conservação de Energia */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Energia Mecânica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado (sem forças externas como atrito, resistência do ar, etc.), a energia mecânica total permanece constante. A energia cinética e potencial podem se transformar uma na outra, mas a soma permanece invariável. Este é um dos princípios mais importantes da física.</p>

            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio Fundamental:</p>
              <MathFormula formula={String.raw`$$$$E_{\\text{mecânica}} = E_c + E_p = \\text{constante}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Em um Sistema Isolado:</p>
              <MathFormula formula={String.raw`$$$$E_{c,i} + E_{p,i} = E_{c,f} + E_{p,f}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplo: Bola Lançada para Cima</h3>
            <p>Quando uma bola é lançada para cima, sua energia cinética diminui enquanto sua energia potencial aumenta. No ponto mais alto, toda a energia cinética foi convertida em energia potencial (a velocidade é zero). Ao cair, o processo se inverte: a energia potencial é convertida em energia cinética. A energia mecânica total permanece constante durante todo o processo.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Sistemas com Atrito</h3>
            <p>Quando há atrito ou outras forças dissipativas, a energia mecânica não é conservada. Parte da energia é convertida em calor, som, deformação, etc. A energia total (incluindo calor e outras formas) é sempre conservada, mas a energia mecânica diminui. Por isso, um pêndulo eventualmente para de oscilar: o atrito converte a energia mecânica em calor.</p>
          </div>
        </Card>

        {/* Aplicações */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aplicações Práticas de Trabalho e Energia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Usinas Hidrelétricas:</strong> A energia potencial da água em uma represa é convertida em energia cinética quando a água cai, que é então convertida em energia elétrica por turbinas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Amortecedores de Carro:</strong> Os amortecedores absorvem a energia cinética do carro quando ele sobe e desce, convertendo-a em calor através do atrito.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Montanha-Russa:</strong> A energia potencial no topo da montanha-russa é convertida em energia cinética enquanto desce, e vice-versa. O atrito e a resistência do ar dissipam parte da energia.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Painéis Solares:</strong> Convertem a energia do sol (radiação eletromagnética) em energia elétrica.</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
}
