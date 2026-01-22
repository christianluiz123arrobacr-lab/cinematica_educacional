import { Link } from "wouter";
import { ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { HeatCalculator } from "@/components/HeatCalculator";
import { HeatTransferSimulator } from "@/components/HeatTransferSimulator";
import { RealWorldApplications } from "@/components/RealWorldApplications";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";

export default function TermologiaTopicCalor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Calor e Transferência Térmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: O QUE É CALOR? ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔥 O que é Calor?</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição Simples</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                <strong>Calor é a energia que flui de um lugar quente para um lugar frio.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Calor é uma AÇÃO, não uma propriedade. Ele sempre flui do quente para o frio, nunca o contrário.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplo: Xícara de Café Quente</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold">☕ Café a 80°C:</p>
                  <p>O café tem TEMPERATURA alta (moléculas se mexem rápido).</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold">🌡️ Ambiente a 25°C:</p>
                  <p>O ar tem TEMPERATURA baixa (moléculas se mexem lento).</p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-300">
                  <p className="font-bold">🔥 O que acontece?</p>
                  <p>CALOR flui do café (quente) para o ar (frio). O café esfria e o ar ao redor aquece um pouco.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">⚠️ IMPORTANTE: Temperatura vs Calor</h4>
              <div className="space-y-3 text-slate-700">
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="font-bold text-red-900">Temperatura:</p>
                  <p>É uma PROPRIEDADE. É o quanto as moléculas estão se movimentando. Você MEDE.</p>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="font-bold text-red-900">Calor:</p>
                  <p>É uma AÇÃO. É a energia fluindo de quente para frio. Você SENTE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: QUANTIDADE DE CALOR ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Quanto Calor Preciso?</h2>
          
          <p className="text-slate-700 mb-6">
            Nem todo calor é igual. Para aquecer 1 litro de água de 20°C para 30°C, você precisa de MUITO MENOS calor do que para aquecer 100 litros da mesma forma.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fórmula da Quantidade de Calor</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula={String.raw`$$$$Q = m \\cdot c \\cdot \\Delta T$$$$`} display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>Q</strong> = Quantidade de calor (em Joules - J)</p>
                <p>• <strong>m</strong> = Massa do objeto (em kg)</p>
                <p>• <strong>c</strong> = Calor específico (em J/(kg·°C))</p>
                <p>• <strong>ΔT</strong> = Variação de temperatura (T_final - T_inicial)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação Simples:</strong> Quanto mais massa, mais calor precisa. Quanto maior a variação de temperatura, mais calor precisa.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">O que é Calor Específico?</h3>
              
              <p className="text-slate-700 mb-4">
                <strong>Calor específico</strong> é a quantidade de calor necessária para aumentar 1 kg de uma substância em 1°C.
              </p>

              <p className="text-slate-700 mb-4">
                Cada material tem um calor específico diferente. Água precisa de MUITO calor para aquecer, ferro precisa de POUCO.
              </p>

              <div className="bg-white border border-green-300 rounded p-4 mb-4">
                <p className="font-bold text-slate-900 mb-3">Calor Específico de Materiais Comuns:</p>
                <p className="text-slate-700 text-sm">• <strong>Água:</strong> 4.200 J/(kg·°C) - MUITO alto!</p>
                <p className="text-slate-700 text-sm">• <strong>Ferro:</strong> 450 J/(kg·°C)</p>
                <p className="text-slate-700 text-sm">• <strong>Alumínio:</strong> 900 J/(kg·°C)</p>
                <p className="text-slate-700 text-sm">• <strong>Areia:</strong> 800 J/(kg·°C)</p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded">
                <p className="font-bold mb-2">💡 Exemplo Prático:</p>
                <p className="text-slate-700 text-sm">Por que a água da praia aquece lentamente no verão mas esfria lentamente no inverno? Porque água tem calor específico MUITO alto!</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SIMULADOR 1: CALCULADOR DE CALOR ===== */}
        <HeatCalculator />

        {/* ===== SEÇÃO 3: TRANSFERÊNCIA DE CALOR ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 my-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Como o Calor se Transfere? (3 Formas)</h2>
          
          <p className="text-slate-700 mb-6">
            O calor pode se transferir de 3 formas diferentes. Cada uma funciona em situações diferentes.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Condução Térmica</h3>
              <p className="text-slate-700 mb-4">Calor passa através de contato direto entre objetos.</p>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">💡 Exemplos:</p>
                <p className="text-slate-700 text-sm">• Colher quente em uma panela</p>
                <p className="text-slate-700 text-sm">• Mão tocando um radiador</p>
                <p className="text-slate-700 text-sm">• Xícara de café aquecendo as mãos</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Convecção Térmica</h3>
              <p className="text-slate-700 mb-4">Calor passa através do movimento de um fluido (líquido ou gás).</p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">💡 Exemplos:</p>
                <p className="text-slate-700 text-sm">• Água fervendo em uma panela</p>
                <p className="text-slate-700 text-sm">• Ar quente subindo de um radiador</p>
                <p className="text-slate-700 text-sm">• Ventilador circulando ar quente</p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Radiação Térmica</h3>
              <p className="text-slate-700 mb-4">Calor passa através de ondas eletromagnéticas (sem contato).</p>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded mb-4">
                <p className="font-bold mb-2">💡 Exemplos:</p>
                <p className="text-slate-700 text-sm">• Calor do Sol chegando na Terra</p>
                <p className="text-slate-700 text-sm">• Calor de uma fogueira</p>
                <p className="text-slate-700 text-sm">• Forno de micro-ondas</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SIMULADOR 2: TRANSFERÊNCIA DE CALOR ===== */}
        <HeatTransferSimulator />

        {/* ===== SEÇÃO 4: EQUILÍBRIO TÉRMICO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 my-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚖️ Equilíbrio Térmico</h2>
          
          <p className="text-slate-700 mb-6">
            Quando você mistura água quente com água fria, o que acontece? A quente esfria, a fria aquece, e no final ficam com a mesma temperatura. Isso é equilíbrio térmico!
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Lei da Conservação de Energia</h3>
            
            <p className="text-slate-700 mb-4">
              <strong>O calor perdido por um objeto é igual ao calor ganho pelo outro.</strong>
            </p>

            <div className="bg-white border border-blue-300 rounded p-4 mb-4">
              <MathFormula formula={String.raw`$$$$Q_{perdido} = Q_{ganho}$$$$`} display={true} />
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded mb-4">
              <p className="font-bold mb-2">📝 Exemplo Prático:</p>
              <p className="text-slate-700 text-sm mb-2">Você mistura 1 kg de água a 80°C com 1 kg de água a 20°C. Qual é a temperatura final?</p>
              
              <div className="bg-white p-3 rounded mt-2">
                <p className="text-slate-700 text-sm mb-2">Solução:</p>
                <p className="text-slate-700 text-sm ml-4">• Água quente perde calor: Q_perdido = 1 × 4.200 × (80 - T_final)</p>
                <p className="text-slate-700 text-sm ml-4">• Água fria ganha calor: Q_ganho = 1 × 4.200 × (T_final - 20)</p>
                <p className="text-slate-700 text-sm ml-4">• Igualando: 80 - T_final = T_final - 20</p>
                <p className="text-slate-700 text-sm ml-4">• <strong>T_final = 50°C</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SIMULADOR 3: APLICAÇÕES REAIS ===== */}
        <RealWorldApplications />

        {/* ===== SEÇÃO 5: EXERCÍCIOS INTERATIVOS ===== */}
        <div className="my-8">
          <InteractiveQuiz />
        </div>

        {/* ===== RESUMO RÁPIDO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo Rápido</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>O que é Calor?</strong> Energia que flui do quente para o frio.</p>
            
            <p className="mt-4"><strong>Fórmula de Calor:</strong> Q = m·c·ΔT</p>
            
            <p className="mt-4"><strong>3 Formas de Transferência:</strong></p>
            <p className="ml-4">• <strong>Condução:</strong> Contato direto</p>
            <p className="ml-4">• <strong>Convecção:</strong> Movimento de fluido</p>
            <p className="ml-4">• <strong>Radiação:</strong> Ondas eletromagnéticas</p>
            
            <p className="mt-4"><strong>Equilíbrio Térmico:</strong> Calor perdido = Calor ganho</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende calor, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/termodinamica">
              <Button className="bg-blue-600 hover:bg-blue-700">Termodinâmica</Button>
            </Link>
            <Link href="/termologia">
              <Button variant="outline">Voltar para Termologia</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
