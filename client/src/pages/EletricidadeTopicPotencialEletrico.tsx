import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EletricidadeTopicPotencialEletrico() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/eletricidade" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Potencial Elétrico</h1>
              <p className="text-xs text-slate-500">Projeto ITA - Do Zero a Aprovação</p>
            </div>
          </div>
          <Link href="/ia-resolver">
            <Button variant="outline" size="sm">IA Resolutora</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Potencial Elétrico e Trabalho</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            O potencial elétrico é um conceito fundamental em eletrostática que descreve a energia potencial por unidade de carga em um ponto do espaço. Diferentemente do campo elétrico, que é uma grandeza vetorial, o potencial elétrico é uma grandeza escalar, o que simplifica significativamente muitos cálculos. Neste tópico, exploraremos como o potencial elétrico se relaciona com o trabalho realizado por forças elétricas, a diferença de potencial e suas aplicações práticas.
          </p>
        </section>

        {/* 1. Definição de Potencial Elétrico */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Definição de Potencial Elétrico</h3>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="text-slate-700 mb-4">
              O <strong>potencial elétrico</strong> em um ponto P do espaço é definido como a razão entre a energia potencial elétrica de uma carga de teste e o valor dessa carga:
            </p>
            <div className="bg-white p-4 rounded border border-blue-200 mb-4">
              <p className="text-center text-lg font-mono">V = U / q</p>
            </div>
            <p className="text-slate-700">
              Onde <strong>V</strong> é o potencial elétrico (em volts, V), <strong>U</strong> é a energia potencial elétrica (em joules, J) e <strong>q</strong> é a carga de teste (em coulombs, C). A unidade do potencial elétrico é o <strong>volt (V)</strong>, que equivale a 1 joule por coulomb (1 V = 1 J/C).
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Essa definição nos permite entender o potencial como a "capacidade" de um ponto no espaço de realizar trabalho sobre uma carga colocada nele. Um potencial positivo significa que o ponto está em uma região onde uma carga positiva de teste teria energia potencial positiva, enquanto um potencial negativo indica o oposto.
          </p>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
            <img 
              src="/images/potencial-eletrico-pt.jpg" 
              alt="Potencial Elétrico"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 2. Potencial de uma Carga Pontual */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Potencial de uma Carga Pontual</h3>
          
          <p className="text-slate-700 mb-6">
            Para uma carga pontual Q em repouso, o potencial elétrico a uma distância r dela é dado pela fórmula:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">V = k·Q / r</p>
            <p className="text-sm text-slate-600 text-center">
              Onde k = 8,99 × 10⁹ N·m²/C² (constante de Coulomb), Q é a carga (em C) e r é a distância (em m)
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Esta fórmula é derivada da Lei de Coulomb. Note que o potencial depende apenas da carga Q e da distância r, não da carga de teste. Isso significa que o potencial é uma propriedade do espaço ao redor da carga, independentemente de haver uma carga de teste presente.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Observação Importante:</p>
            <p className="text-slate-700">
              O potencial é uma grandeza escalar, o que significa que em um ponto onde existem múltiplas cargas, o potencial total é a soma algébrica dos potenciais individuais. Isso é muito mais simples do que somar vetores de campo elétrico!
            </p>
          </div>
        </section>

        {/* 3. Trabalho e Diferença de Potencial */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Trabalho e Diferença de Potencial</h3>
          
          <p className="text-slate-700 mb-6">
            A relação entre trabalho e potencial é fundamental para entender a eletrostática. Quando uma carga q se move de um ponto A (com potencial V_A) para um ponto B (com potencial V_B), o trabalho realizado pela força elétrica é:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">W = q·(V_A - V_B) = q·ΔV</p>
            <p className="text-sm text-slate-600 text-center">
              Onde ΔV = V_A - V_B é a diferença de potencial (em volts)
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Observe que o trabalho é proporcional à carga e à diferença de potencial. Se a carga se move para um potencial menor (VB menor que VA), o trabalho é positivo, o que significa que a força elétrica realiza trabalho sobre a carga. Se a carga se move para um potencial maior, o trabalho é negativo, indicando que uma força externa deve realizar trabalho contra a força elétrica.
          </p>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
            <img 
              src="/images/trabalho-potencial-energia-pt.jpg" 
              alt="Trabalho e Potencial"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 4. Superfícies Equipotenciais */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Superfícies Equipotenciais</h3>
          
          <p className="text-slate-700 mb-6">
            Uma <strong>superfície equipotencial</strong> é um conjunto de pontos no espaço que possuem o mesmo potencial elétrico. Essas superfícies têm propriedades importantes:
          </p>

          <ul className="space-y-3 mb-6 text-slate-700">
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>O campo elétrico é sempre perpendicular às superfícies equipotenciais</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Não há trabalho realizado ao mover uma carga ao longo de uma superfície equipotencial (pois ΔV = 0)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Para uma carga pontual, as superfícies equipotenciais são esferas concêntricas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>O potencial diminui na direção do campo elétrico</span>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Relação entre Campo e Potencial:</p>
            <p className="text-slate-700 mb-3">
              O campo elétrico pode ser expresso em termos do potencial através do gradiente:
            </p>
            <div className="bg-white p-4 rounded border border-blue-200">
              <p className="text-center text-lg font-mono">E = -dV/dr</p>
            </div>
            <p className="text-slate-700 mt-3">
              Isso significa que o campo elétrico aponta na direção de maior diminuição do potencial.
            </p>
          </div>
        </section>

        {/* 5. Exemplo Resolvido - Nível ITA/IME */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Exemplo Resolvido - Nível ITA/IME</h3>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400">
            <p className="font-bold text-lg text-slate-900 mb-4">
              Problema: Duas cargas pontuais Q₁ = +4 μC e Q₂ = -2 μC estão separadas por uma distância de 6 m. Calcule:
            </p>
            <ul className="space-y-2 mb-6 text-slate-700">
              <li><strong>a)</strong> O potencial no ponto médio entre as cargas</li>
              <li><strong>b)</strong> O trabalho necessário para trazer uma carga q = +1 μC do infinito até o ponto médio</li>
            </ul>

            <div className="bg-white p-6 rounded border border-yellow-300 space-y-4">
              <p className="font-bold text-slate-900">Solução:</p>
              
              <p className="text-slate-700">
                <strong>Parte a) Potencial no ponto médio:</strong>
              </p>
              <p className="text-slate-700 mb-3">
                O ponto médio está a 3 m de cada carga. O potencial total é a soma dos potenciais individuais:
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>V_total = V1 + V2</p>
                <p>V_total = k*Q1/r1 + k*Q2/r2</p>
                <p>V_total = (8,99 × 10^9)*(4 × 10^-6)/3 + (8,99 × 10^9)*(-2 × 10^-6)/3</p>
                <p>V_total = (8,99 × 10^9)*(2 × 10^-6)/3</p>
                <p>V_total = 5,99 × 10^3 V ≈ 6,0 kV</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte b) Trabalho para trazer a carga q do infinito:</strong>
              </p>
              <p className="text-slate-700 mb-3">
                O potencial no infinito é zero. O trabalho realizado por um agente externo para trazer a carga q do infinito até o ponto médio é:
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm">
                <p>W_externo = q·(V_ponto_médio - V_∞)</p>
                <p>W_externo = (1 × 10⁻⁶)·(6,0 × 10³ - 0)</p>
                <p>W_externo = 6,0 × 10⁻³ J = 6,0 mJ</p>
              </div>
            </div>
          </Card>
        </section>

        {/* 6. Aplicações Práticas */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Aplicações Práticas</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400">
              <p className="font-bold text-slate-900 mb-3">Tubos de Raios Catódicos</p>
              <p className="text-slate-700 text-sm">
                Utilizam diferenças de potencial para acelerar elétrons. A energia cinética do elétron é igual ao trabalho realizado pela diferença de potencial: KE = e·ΔV.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400">
              <p className="font-bold text-slate-900 mb-3">Capacitores</p>
              <p className="text-slate-700 text-sm">
                Armazenam energia em forma de potencial elétrico. A energia armazenada é U = ½·C·V², onde C é a capacitância e V é a diferença de potencial.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400">
              <p className="font-bold text-slate-900 mb-3">Espectrômetro de Massa</p>
              <p className="text-slate-700 text-sm">
                Usa potencial elétrico para separar partículas com diferentes razões carga-massa, aplicando diferenças de potencial conhecidas.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400">
              <p className="font-bold text-slate-900 mb-3">Geradores Eletrostáticos</p>
              <p className="text-slate-700 text-sm">
                Como o gerador de Van de Graaff, que acumula cargas para criar potenciais muito altos, utilizados em pesquisa nuclear.
              </p>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-8 border-t border-slate-300 flex justify-between">
          <Link href="/eletricidade">
            <Button variant="outline">← Voltar</Button>
          </Link>
          <Link href="/eletricidade/topic/dieletricos">
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600 text-white">
              Próximo: Dielétricos →
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
