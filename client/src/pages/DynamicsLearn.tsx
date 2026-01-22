import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function DynamicsLearn() {
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
          <h1 className="text-2xl font-bold text-slate-900">Guia Completo de Dinâmica</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-blue-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Introdução à Dinâmica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A Dinâmica é o ramo da Mecânica que estuda as causas do movimento dos corpos. Enquanto a Cinemática descreve como os objetos se movem, a Dinâmica explica por que se movem da forma que se movem. O conceito fundamental da Dinâmica é a força, que é a causa da mudança no estado de movimento de um corpo.</p>
            <p>As Leis de Newton formam a base de toda a Dinâmica clássica e permitem-nos entender e prever o movimento de objetos em praticamente qualquer situação, desde o movimento de carros na rua até o movimento de planetas no espaço.</p>
          </div>
        </Card>

        {/* Primeira Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Primeira Lei de Newton (Lei da Inércia)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A Primeira Lei de Newton, também conhecida como Lei da Inércia, afirma que um corpo em repouso permanece em repouso, e um corpo em movimento retilíneo uniforme permanece em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.</p>
            <p>A inércia é a tendência natural dos corpos de manter seu estado de movimento (ou repouso). Quanto maior a massa de um objeto, maior é sua inércia, ou seja, mais difícil é mudar seu estado de movimento.</p>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Condição de Equilíbrio:</p>
              <MathFormula formula={String.raw`$$$$\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Se a força resultante é zero, a aceleração também é zero (repouso ou movimento uniforme).</p>
            </div>
            <p className="text-sm italic text-slate-600">Exemplo: Um carro em movimento continua em movimento mesmo quando você tira o pé do acelerador (até que o atrito o desacelere). Você sente isso quando o carro freia bruscamente e você é "jogado" para frente - seu corpo tende a continuar em movimento enquanto o carro desacelera.</p>
          </div>
        </Card>

        {/* Segunda Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Segunda Lei de Newton (Lei Fundamental da Dinâmica)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A Segunda Lei de Newton é a mais importante da Dinâmica. Ela estabelece que a força resultante aplicada a um corpo é diretamente proporcional à sua aceleração, sendo a massa a constante de proporcionalidade. Em outras palavras, quanto maior a força aplicada, maior será a aceleração do objeto, e quanto maior a massa, menor será a aceleração para uma mesma força.</p>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Fundamental:</p>
              <MathFormula formula={String.raw`$$$$\\vec{F} = m \\cdot \\vec{a}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: F = força resultante (N), m = massa (kg), a = aceleração (m/s²)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Derivações Úteis:</p>
              <MathFormula formula={String.raw`$$$$m = \\frac{F}{a} \\quad \\text{ou} \\quad a = \\frac{F}{m}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>Esta lei permite calcular qualquer uma das três grandezas (força, massa ou aceleração) conhecendo as outras duas. A unidade de força, o Newton (N), é definida como a força necessária para acelerar uma massa de 1 kg a 1 m/s².</p>
            <p className="text-sm italic text-slate-600">Exemplo: Se você empurra um carro de 1000 kg com uma força de 2000 N, a aceleração será a = 2000/1000 = 2 m/s². Se você empurra com 4000 N, a aceleração dobra para 4 m/s².</p>
          </div>
        </Card>

        {/* Terceira Lei de Newton */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Terceira Lei de Newton (Ação e Reação)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A Terceira Lei de Newton afirma que toda ação tem uma reação igual e oposta. Se um corpo A exerce uma força sobre um corpo B, então B exerce uma força igual em magnitude, mesma direção, mas sentido oposto sobre A. É importante notar que estas forças atuam em corpos diferentes.</p>
            <div className="bg-orange-50 p-3 md:p-6 rounded-lg border border-orange-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Relação de Ação e Reação:</p>
              <MathFormula formula={String.raw`$$$$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">As forças têm mesma magnitude, mesma direção, mas sentidos opostos.</p>
            </div>
            <p>É crucial entender que as forças de ação e reação não se cancelam porque atuam em corpos diferentes. Quando você pula, você empurra a Terra para baixo, e a Terra o empurra para cima com força igual.</p>
            <p className="text-sm italic text-slate-600">Exemplo: Quando você caminha, seus pés empurram o chão para trás, e o chão empurra seus pés para frente com força igual. É esta força de reação que o move para frente.</p>
          </div>
        </Card>

        {/* Força e Peso */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força e Peso</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O peso é a força gravitacional que atua sobre um corpo. Diferentemente da massa (que é uma propriedade intrínseca do objeto e não muda), o peso varia dependendo do local onde o objeto se encontra. Na Terra, a aceleração da gravidade é aproximadamente 9,8 m/s², enquanto na Lua é apenas 1,6 m/s².</p>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula do Peso:</p>
              <MathFormula formula={String.raw`$$$$P = m \\cdot g$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: P = peso (N), m = massa (kg), g = aceleração da gravidade (m/s²)</p>
            </div>
            <p>Um objeto de 10 kg na Terra pesa aproximadamente 98 N (10 × 9,8), enquanto na Lua o mesmo objeto pesaria apenas 16 N (10 × 1,6). A massa, porém, permanece 10 kg em ambos os locais. É por isso que os astronautas parecem "flutuar" na Lua - seu peso é muito menor, mas sua massa é a mesma.</p>
          </div>
        </Card>

        {/* Trabalho */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Trabalho de uma Força</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O trabalho é uma medida da energia transferida por uma força. Ele depende não apenas da magnitude da força, mas também do ângulo entre a força e o deslocamento. Quando a força está na mesma direção do deslocamento, o trabalho é máximo e positivo. Quando a força é perpendicular ao deslocamento, o trabalho é zero, pois a força não contribui para o movimento.</p>
            <div className="bg-cyan-50 p-3 md:p-6 rounded-lg border border-cyan-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$W = F \\cdot d \\cdot \\cos(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: W = trabalho (J), F = força (N), d = deslocamento (m), θ = ângulo entre F e d</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Casos Especiais:</p>
              <MathFormula formula={String.raw`$$$$\\theta = 0° \\Rightarrow W = F \\cdot d \\quad (\\text{máximo trabalho})$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <MathFormula formula={String.raw`$$$$\\theta = 90° \\Rightarrow W = 0 \\quad (\\text{nenhum trabalho})$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>Por exemplo, quando você levanta uma caixa verticalmente, a força que você aplica é na mesma direção do deslocamento, então o trabalho é positivo. Quando você carrega a caixa horizontalmente, a força gravitacional é perpendicular ao deslocamento, então o trabalho realizado pela gravidade é zero.</p>
          </div>
        </Card>

        {/* Energia Cinética */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Cinética</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A energia cinética é a energia associada ao movimento de um corpo. Todo objeto em movimento possui energia cinética, que depende tanto da massa quanto da velocidade do objeto. Observe que a energia cinética é proporcional ao quadrado da velocidade, o que significa que aumentar a velocidade tem um efeito muito maior na energia cinética do que aumentar a massa.</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$E_c = \\frac{1}{2} \\cdot m \\cdot v^2$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_c = energia cinética (J), m = massa (kg), v = velocidade (m/s)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Teorema do Trabalho-Energia:</p>
              <MathFormula formula={String.raw`$$$$W = \\Delta E_c = E_{c,f} - E_{c,i}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>O Teorema do Trabalho-Energia estabelece que o trabalho realizado sobre um corpo é igual à variação de sua energia cinética. Se o trabalho é positivo, a energia cinética aumenta e o objeto acelera; se é negativo, a energia cinética diminui e o objeto desacelera.</p>
          </div>
        </Card>

        {/* Energia Potencial Gravitacional */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Energia Potencial Gravitacional</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A energia potencial gravitacional é a energia armazenada em um objeto devido à sua posição em um campo gravitacional. Quanto mais alto o objeto está, maior é sua energia potencial. Esta energia pode ser convertida em energia cinética quando o objeto cai. A escolha do referencial (ponto onde E_p = 0) é arbitrária, mas geralmente escolhemos o solo ou o nível do mar.</p>
            <div className="bg-pink-50 p-3 md:p-6 rounded-lg border border-pink-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$E_p = m \\cdot g \\cdot h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: E_p = energia potencial (J), m = massa (kg), g = gravidade (m/s²), h = altura (m)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Variação de Energia Potencial:</p>
              <MathFormula formula={String.raw`$$$$\\Delta E_p = m \\cdot g \\cdot \\Delta h$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>O que importa fisicamente é a variação da energia potencial, não seu valor absoluto. Quando você sobe uma escada, sua energia potencial aumenta; quando você desce, diminui.</p>
          </div>
        </Card>

        {/* Conservação de Energia Mecânica */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Energia Mecânica</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado (sem forças externas como atrito, resistência do ar, etc.), a energia mecânica total permanece constante. A energia cinética e potencial podem se transformar uma na outra, mas a soma permanece invariável. Este é um dos princípios mais importantes da física.</p>
            <div className="bg-teal-50 p-3 md:p-6 rounded-lg border border-teal-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio Fundamental:</p>
              <MathFormula formula={String.raw`$$$$E_{\\text{mecânica}} = E_c + E_p = \\text{constante}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Em um Sistema Isolado:</p>
              <MathFormula formula={String.raw`$$$$E_{c,i} + E_{p,i} = E_{c,f} + E_{p,f}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>Por exemplo, quando uma bola é lançada para cima, sua energia cinética diminui enquanto sua energia potencial aumenta. No ponto mais alto, toda a energia cinética foi convertida em energia potencial. Ao cair, o processo se inverte: a energia potencial é convertida em energia cinética.</p>
          </div>
        </Card>

        {/* Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Momentum (Quantidade de Movimento)</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O momentum, também chamado de quantidade de movimento, é uma grandeza vetorial que representa a "quantidade de movimento" de um corpo. Um corpo pesado movendo-se lentamente pode ter o mesmo momentum que um corpo leve movendo-se rapidamente. O momentum é particularmente útil para analisar colisões.</p>
            <div className="bg-lime-50 p-3 md:p-6 rounded-lg border border-lime-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula Principal:</p>
              <MathFormula formula={String.raw`$$$$\\vec{p} = m \\cdot \\vec{v}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: p = momentum (kg·m/s), m = massa (kg), v = velocidade (m/s)</p>
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Relação com a Segunda Lei de Newton:</p>
              <MathFormula formula={String.raw`$$$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>A Segunda Lei de Newton pode ser reescrita em termos de momentum: a força resultante é a taxa de variação do momentum em relação ao tempo. Isto é, uma força causa mudança no momentum.</p>
          </div>
        </Card>

        {/* Impulso */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Impulso e Teorema do Impulso</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O impulso é o produto da força pelo tempo de aplicação. Ele representa a mudança no momentum de um corpo. O Teorema do Impulso afirma que o impulso é igual à variação do momentum. Este conceito é muito importante em colisões.</p>
            <div className="bg-violet-50 p-3 md:p-6 rounded-lg border border-violet-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Fórmula de Impulso:</p>
              <MathFormula formula={String.raw`$$$$\\vec{I} = \\vec{F} \\cdot \\Delta t$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Teorema do Impulso:</p>
              <MathFormula formula={String.raw`$$$$\\vec{I} = \\Delta \\vec{p} = \\vec{p}_f - \\vec{p}_i$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: I = impulso (N·s), F = força (N), Δt = intervalo de tempo (s)</p>
            </div>
            <p>Uma força grande aplicada por um tempo curto pode produzir o mesmo impulso que uma força pequena aplicada por um tempo longo. Por exemplo, um airbag em um carro aumenta o tempo de colisão, reduzindo a força máxima e, portanto, o impulso necessário para parar você.</p>
          </div>
        </Card>

        {/* Conservação de Momentum */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Conservação de Momentum</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Em um sistema isolado (sem forças externas), o momentum total permanece constante. Este é um dos princípios mais fundamentais da física e é especialmente útil para analisar colisões e explosões. Diferentemente da energia cinética, o momentum é sempre conservado em colisões, mesmo que a energia cinética não seja.</p>
            <div className="bg-rose-50 p-3 md:p-6 rounded-lg border border-rose-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Princípio de Conservação:</p>
              <MathFormula formula={String.raw`$$$$\\vec{p}_{\\text{inicial}} = \\vec{p}_{\\text{final}}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Para Dois Corpos em Colisão:</p>
              <MathFormula formula={String.raw`$$$$m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i} = m_1 \\vec{v}_{1f} + m_2 \\vec{v}_{2f}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
            </div>
            <p>Quando dois objetos colidem, o momentum total antes da colisão é igual ao momentum total depois. Isto é verdade mesmo que a energia cinética não seja conservada (em colisões inelásticas, parte da energia é convertida em calor, som, deformação, etc.).</p>
          </div>
        </Card>

        {/* Força de Atrito */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Força de Atrito</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>O atrito é uma força que se opõe ao movimento relativo entre duas superfícies em contato. Existem dois tipos principais: atrito estático (quando não há movimento) e atrito cinético (quando há movimento). O atrito estático é geralmente maior que o cinético, o que é por isso que é mais difícil começar a mover um objeto do que mantê-lo em movimento.</p>
            <div className="bg-amber-50 p-3 md:p-6 rounded-lg border border-amber-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Atrito Cinético:</p>
              <MathFormula formula={String.raw`$$$$f_c = \\mu_c \\cdot N$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Atrito Estático (máximo):</p>
              <MathFormula formula={String.raw`$$$$f_s \\leq \\mu_s \\cdot N$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: μ = coeficiente de atrito (adimensional), N = força normal (N)</p>
            </div>
            <p>A força normal é a força perpendicular à superfície de contato. O coeficiente de atrito depende dos materiais em contato e da condição da superfície. Por exemplo, o atrito entre pneus e asfalto molhado é menor que entre pneus e asfalto seco.</p>
          </div>
        </Card>

        {/* Plano Inclinado */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Plano Inclinado</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Um plano inclinado é uma superfície plana que forma um ângulo com a horizontal. É uma das máquinas simples mais importantes e é usada para reduzir a força necessária para levantar um objeto. Quando um objeto está em um plano inclinado, a força gravitacional pode ser decomposta em duas componentes: uma paralela ao plano (que causa o movimento) e outra perpendicular ao plano (que causa a força normal).</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Componentes da Força Gravitacional:</p>
              <MathFormula formula={String.raw`$$$$F_{\\parallel} = m \\cdot g \\cdot \\sin(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <MathFormula formula={String.raw`$$$$F_{\\perp} = m \\cdot g \\cdot \\cos(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: θ = ângulo do plano com a horizontal, g = aceleração da gravidade (9.8 m/s²)</p>
            </div>
            <p>A força normal é igual à componente perpendicular do peso: N = mg cos(θ). A força de atrito que atua no plano é f = μN = μmg cos(θ). A aceleração do objeto no plano inclinado é dada por:</p>
            <div className="bg-indigo-50 p-3 md:p-6 rounded-lg border border-indigo-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Aceleração no Plano Inclinado:</p>
              <MathFormula formula={String.raw`$$$$a = g(\\sin(\\theta) - \\mu \\cos(\\theta))$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Se a = 0, o objeto está em equilíbrio (não se move). Se a &gt; 0, o objeto acelera para baixo. Se a &lt; 0, o objeto não se move (atrito estático é suficiente).</p>
            </div>
            <p>Aplicações práticas do plano inclinado incluem rampas para cadeiras de rodas, escadas, correias transportadoras inclinadas e até mesmo as rodas de um carro em uma estrada inclinada. O plano inclinado é uma máquina simples que nos permite fazer trabalho com menos força, mas precisamos aplicar essa força por uma distância maior.</p>
          </div>
        </Card>

        {/* Potência */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Potência</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A potência mede a taxa de realização de trabalho. Dois motores podem realizar o mesmo trabalho, mas um pode ser mais potente se fizer o trabalho em menos tempo. A potência é medida em watts (W), onde 1 W = 1 J/s. Um cavalo-vapor (hp) é uma unidade antiga de potência, equivalente a aproximadamente 746 W.</p>
            <div className="bg-sky-50 p-3 md:p-6 rounded-lg border border-sky-200 overflow-x-auto">
              <p className="text-center text-sm md:text-lg font-semibold mb-3">Potência Média:</p>
              <MathFormula formula={String.raw`$$$$P = \\frac{W}{\\Delta t}$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              
              <p className="text-center text-sm md:text-lg font-semibold mb-3 mt-6">Potência Instantânea:</p>
              <MathFormula formula={String.raw`$$$$P = \\vec{F} \\cdot \\vec{v} = F \\cdot v \\cdot \\cos(\\theta)$$$$`} className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: P = potência (W), W = trabalho (J), Δt = intervalo de tempo (s)</p>
            </div>
            <p>A potência instantânea depende da força aplicada e da velocidade do objeto. Um carro subindo uma montanha em alta velocidade requer mais potência do que o mesmo carro subindo lentamente. É por isso que carros esportivos têm motores mais potentes - não para ir mais rápido em linha reta, mas para manter velocidade em situações que exigem mais força.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
