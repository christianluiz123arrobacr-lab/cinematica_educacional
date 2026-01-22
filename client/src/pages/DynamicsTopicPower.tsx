import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsTopicPower() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Potência e Eficiência</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-pink-50 to-rose-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Potência: A Taxa de Realização de Trabalho</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Potência é uma medida de quão rapidamente o trabalho é realizado ou a energia é transferida. Dois motores podem realizar o mesmo trabalho, mas se um o faz mais rapidamente, ele tem maior potência. A potência é uma grandeza escalar que mede a eficiência energética de um sistema.</p>
            <p>Compreender potência é crucial para aplicações práticas, desde o design de motores até a análise de consumo de energia em residências e indústrias. A potência determina quanto tempo leva para realizar uma tarefa e quanto custa em termos de energia.</p>
          </div>
        </Card>

        {/* Potência */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Definição e Cálculo de Potência</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-pink-50 p-3 md:p-6 rounded-lg border border-pink-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$P = \\frac{W}{\\Delta t}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: P = potência (W), W = trabalho (J), Δt = intervalo de tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Unidades de Potência</h3>
            <p>A unidade de potência no Sistema Internacional é o Watt (W), definido como 1 joule por segundo (1 W = 1 J/s). Outras unidades comuns incluem o cavalo-vapor (cv ou hp), onde 1 cv ≈ 735,5 W. A unidade kilowatt (kW) é frequentemente usada para aplicações maiores.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Potência Instantânea</h3>
            <div className="bg-pink-50 p-3 md:p-6 rounded-lg border border-pink-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Forma Diferencial:</p>
              <MathFormula formula={String.raw`$$$$P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">A potência instantânea é o produto escalar da força pela velocidade.</p>
            </div>

            <p>A potência instantânea é a potência em um determinado momento. Se a força e a velocidade são constantes, a potência também é constante. Caso contrário, a potência varia com o tempo.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos Práticos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <span><strong>Subir escadas:</strong> Se você sobe uma escada em 10 segundos, você realiza trabalho contra a gravidade. Se outra pessoa sobe a mesma escada em 5 segundos, ela tem o dobro da potência, mesmo realizando o mesmo trabalho.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <span><strong>Lâmpada elétrica:</strong> Uma lâmpada de 100 W consome 100 joules de energia por segundo. Uma lâmpada de 60 W consome menos energia e, portanto, é mais eficiente energeticamente.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <span><strong>Motor de carro:</strong> Um motor de 200 cv pode realizar mais trabalho por segundo que um motor de 100 cv. Isso permite que o carro acelere mais rapidamente.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Energia e Potência */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Relação entre Energia e Potência</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Energia e potência estão intimamente relacionadas. A potência é a taxa de consumo ou produção de energia. Se você conhece a potência, pode calcular a energia consumida multiplicando pela duração.</p>

            <div className="bg-rose-50 p-3 md:p-6 rounded-lg border border-rose-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Relação Fundamental:</p>
              <MathFormula formula={String.raw`$$$$E = P \\cdot \\Delta t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">A energia é o produto da potência pelo tempo de funcionamento.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Unidades de Energia Elétrica</h3>
            <p>Na prática, a energia elétrica é frequentemente medida em kilowatt-hora (kWh). 1 kWh é a energia consumida por um dispositivo de 1 kW funcionando por 1 hora. Sua conta de eletricidade provavelmente é medida em kWh.</p>

            <div className="bg-rose-50 p-3 md:p-6 rounded-lg border border-rose-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Conversão:</p>
              <MathFormula formula={String.raw`$$$$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ J}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
          </div>
        </Card>

        {/* Eficiência */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Eficiência Energética</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Eficiência é uma medida de quão bem um dispositivo ou sistema converte energia de entrada em trabalho útil. Nenhum dispositivo real é 100% eficiente; sempre há perdas de energia em forma de calor, atrito, som, etc.</p>

            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto mb-3">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Eficiência:</p>
              <MathFormula formula={String.raw`$$$$\\eta = \\frac{P_{\\text{útil}}}{P_{\\text{entrada}}} \\times 100\\%$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: η = eficiência (%), P_útil = potência de saída útil (W), P_entrada = potência de entrada (W)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Interpretação de Eficiência</h3>
            <p>Uma eficiência de 100% significa que toda a energia de entrada é convertida em trabalho útil (impossível na prática). Uma eficiência de 50% significa que metade da energia de entrada é convertida em trabalho útil, e a outra metade é perdida. Quanto maior a eficiência, melhor o dispositivo.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Exemplos de Eficiências Típicas</h3>
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto mb-3">
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Motor elétrico:</strong> 85-95% (muito eficiente)</li>
                <li><strong>Motor de combustão interna:</strong> 25-35% (relativamente ineficiente)</li>
                <li><strong>Lâmpada incandescente:</strong> 5% (apenas 5% da energia é convertida em luz, 95% em calor)</li>
                <li><strong>Lâmpada LED:</strong> 20-30% (muito mais eficiente que incandescente)</li>
                <li><strong>Painel solar:</strong> 15-20% (eficiência típica de conversão de luz em eletricidade)</li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Perdas de Energia</h3>
            <p>As perdas de energia em um dispositivo incluem atrito, calor não desejado, som, deformação, etc. Reduzir essas perdas é uma das principais metas da engenharia moderna. Por exemplo, usar lubrificantes em máquinas reduz o atrito e aumenta a eficiência.</p>
          </div>
        </Card>

        {/* Aplicações Práticas */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Aplicações Práticas de Potência e Eficiência</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Conta de Eletricidade:</strong> Sua conta é baseada em kWh consumidos. Um dispositivo de 1000 W funcionando por 1 hora consome 1 kWh. Dispositivos mais eficientes reduzem sua conta.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Consumo de Combustível:</strong> A eficiência de um carro é medida em km/litro. Um carro mais eficiente percorre mais quilômetros com o mesmo combustível, economizando dinheiro.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Usinas de Energia:</strong> As usinas de energia são projetadas para maximizar a eficiência, convertendo combustível em eletricidade com o mínimo de perda possível.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Isolamento Térmico:</strong> Casas bem isoladas reduzem a perda de calor, aumentando a eficiência do aquecimento e reduzindo contas de energia.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Motores Elétricos vs. Combustão:</strong> Motores elétricos são muito mais eficientes que motores de combustão interna, o que é uma das razões pela qual os carros elétricos estão se tornando mais populares.</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Conservação de Energia */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-pink-50 to-rose-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Princípio da Conservação de Energia</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A energia nunca é criada ou destruída; ela apenas muda de forma. Em um dispositivo "ineficiente", a energia não é perdida, mas convertida em formas menos úteis, como calor. Por exemplo, em um motor de combustão interna, a energia química do combustível é convertida em movimento (útil) e calor (menos útil).</p>
            <p>Compreender essa conversão é fundamental para melhorar a eficiência. Se você puder recuperar ou reutilizar o calor perdido, pode aumentar a eficiência geral do sistema. Por exemplo, em usinas de energia, o calor residual às vezes é usado para aquecer edifícios próximos.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
