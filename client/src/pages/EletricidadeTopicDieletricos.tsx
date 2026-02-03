import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EletricidadeTopicDieletricos() {
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
              <h1 className="text-2xl font-bold text-slate-900">Dielétricos</h1>
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Dielétricos e Polarização</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Dielétricos são materiais isolantes que não possuem elétrons livres para conduzir eletricidade, mas que podem ser polarizados por campos elétricos. Quando um dielétrico é colocado em um campo elétrico externo, suas moléculas se orientam ou deformam, criando um campo elétrico interno que reduz o campo total. Este fenômeno é fundamental para entender o funcionamento de capacitores, isolantes elétricos e muitos dispositivos eletrônicos modernos.
          </p>
        </section>

        {/* 1. Polarização de Dielétricos */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Polarização de Dielétricos</h3>
          
          <p className="text-slate-700 mb-6">
            A polarização ocorre de duas formas principais em dielétricos:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Polarização Eletrônica</p>
              <p className="text-slate-700">
                Ocorre quando o campo elétrico externo desloca a nuvem eletrônica em relação ao núcleo atômico, criando dipolos elétricos induzidos. Este efeito é praticamente instantâneo e ocorre em todos os materiais.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Polarização Orientacional</p>
              <p className="text-slate-700">
                Ocorre em moléculas polares que já possuem dipolos permanentes. O campo elétrico tende a alinhar esses dipolos na sua direção. Este efeito é mais lento que a polarização eletrônica e depende da temperatura.
              </p>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
            <img 
              src="/images/dieletricos-polarizacao-pt.jpg" 
              alt="Dielétricos e Polarização"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 2. Constante Dielétrica */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Constante Dielétrica</h3>
          
          <p className="text-slate-700 mb-6">
            A constante dielétrica (ou permissividade relativa) é uma medida de quanto um material pode ser polarizado. Ela é definida como a razão entre a permissividade do material e a permissividade do vácuo:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">κ = ε / ε₀</p>
            <p className="text-sm text-slate-600 text-center">
              Onde κ é a constante dielétrica (adimensional), ε é a permissividade do material e ε₀ = 8,854 × 10^-12 F/m é a permissividade do vácuo
            </p>
          </div>

            <p className="text-slate-700 mb-6">
              A constante dielétrica é sempre maior que 1 para qualquer material (κ maior que 1). Quanto maior o valor de κ, mais facilmente o material pode ser polarizado. Por exemplo, o vácuo tem κ = 1, o ar tem κ ≈ 1,0006, a água tem κ ≈ 80 (muito alta!), e a cerâmica pode ter κ maior que 1000.
            </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Impacto no Campo Elétrico:</p>
            <p className="text-slate-700 mb-3">
              Quando um dielétrico é inserido em um campo elétrico, o campo total é reduzido por um fator igual à constante dielétrica:
            </p>
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="text-center text-lg font-mono">E_total = E₀ / κ</p>
            </div>
          </div>
        </section>

        {/* 3. Capacitores com Dielétricos */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Capacitores com Dielétricos</h3>
          
          <p className="text-slate-700 mb-6">
            A capacitância de um capacitor de placas paralelas com dielétrico é:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">C = κ·ε₀·A / d</p>
            <p className="text-sm text-slate-600 text-center">
              Onde A é a área das placas e d é a distância entre elas
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Comparando com um capacitor sem dielétrico (C₀ = ε₀·A / d), vemos que a capacitância aumenta por um fator κ quando um dielétrico é inserido. Isso significa que um capacitor com dielétrico pode armazenar mais carga para a mesma diferença de potencial.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Rigidez Dielétrica:</p>
            <p className="text-slate-700">
              Todo dielétrico possui um campo elétrico máximo que pode suportar antes de sofrer ruptura (breakdown). Ultrapassar este limite causa a ionização do material e a formação de um caminho condutor. A rigidez dielétrica é uma propriedade importante ao projetar capacitores de alta tensão.
            </p>
          </div>
        </section>

        {/* 4. Exemplo Resolvido - Nível ITA/IME */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Exemplo Resolvido - Nível ITA/IME</h3>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400">
            <p className="font-bold text-lg text-slate-900 mb-4">
              Problema: Um capacitor de placas paralelas tem área A = 100 cm² e distância d = 2 mm. Inicialmente preenchido com ar (κ = 1), depois é preenchido com um dielétrico de κ = 5. Se a diferença de potencial é mantida constante em V = 1000 V:
            </p>
            <ul className="space-y-2 mb-6 text-slate-700">
              <li><strong>a)</strong> Calcule a razão entre as capacitâncias</li>
              <li><strong>b)</strong> Calcule a razão entre as cargas armazenadas</li>
              <li><strong>c)</strong> Calcule a razão entre as energias armazenadas</li>
            </ul>

            <div className="bg-white p-6 rounded border border-yellow-300 space-y-4">
              <p className="font-bold text-slate-900">Solução:</p>
              
              <p className="text-slate-700">
                <strong>Parte a) Razão entre capacitâncias:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>C_ar = ε₀*A / d</p>
                <p>C_dielétrico = κ*ε₀*A / d = 5*ε₀*A / d</p>
                <p>C_dielétrico / C_ar = 5</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte b) Razão entre cargas (V constante):</strong>
              </p>
              <p className="text-slate-700 mb-3">
                Como Q = C*V e V é constante:
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>Q_dielétrico / Q_ar = C_dielétrico / C_ar = 5</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte c) Razão entre energias (V constante):</strong>
              </p>
              <p className="text-slate-700 mb-3">
                A energia armazenada é U = (1/2)*C*V²:
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm">
                <p>U_dielétrico / U_ar = C_dielétrico / C_ar = 5</p>
              </div>
            </div>
          </Card>
        </section>

        {/* 5. Aplicações Práticas */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Aplicações Práticas</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400">
              <p className="font-bold text-slate-900 mb-3">Capacitores Cerâmicos</p>
              <p className="text-slate-700 text-sm">
                Usam cerâmica com alta constante dielétrica para alcançar capacitâncias grandes em tamanhos compactos. Muito comuns em eletrônica moderna.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400">
              <p className="font-bold text-slate-900 mb-3">Isolantes Elétricos</p>
              <p className="text-slate-700 text-sm">
                Dielétricos com alta rigidez dielétrica são usados para isolar condutores em cabos e equipamentos de alta tensão.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400">
              <p className="font-bold text-slate-900 mb-3">Sensores Capacitivos</p>
              <p className="text-slate-700 text-sm">
                Exploram a mudança de constante dielétrica para detectar presença de materiais ou umidade em aplicações industriais.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400">
              <p className="font-bold text-slate-900 mb-3">Displays LCD</p>
              <p className="text-slate-700 text-sm">
                Usam cristais líquidos como dielétricos cuja polarização pode ser controlada eletricamente para criar imagens.
              </p>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-8 border-t border-slate-300 flex justify-between">
          <Link href="/eletricidade/topic/potencial-eletrico">
            <Button variant="outline">← Anterior</Button>
          </Link>
          <Link href="/eletricidade/topic/circuitos-ac">
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600 text-white">
              Próximo: Circuitos AC →
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
