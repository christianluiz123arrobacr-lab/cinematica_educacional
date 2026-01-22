import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaTopicCalorimetria() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-orange-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Calorimetria</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">⚗️ O que é Calorimetria?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Calorimetria é o <strong>estudo da medição de calor</strong>. Ela nos permite calcular quanto calor é transferido entre corpos, usando fórmulas e princípios de conservação de energia. É como "contar" a energia térmica que flui entre os objetos.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              <strong>Analogia:</strong> Se você mistura água quente com água fria, a água quente esfria e a água fria aquece até chegarem a uma temperatura comum. A calorimetria nos ajuda a calcular essa temperatura final.
            </p>
          </div>
        </div>

        {/* Princípio da Conservação */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Princípio da Conservação de Energia</h2>
          
          <p className="text-slate-700 mb-6">
            Em um sistema isolado (sem troca com o ambiente), a <strong>energia total se conserva</strong>. Isso significa:
          </p>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-lg p-6 mb-6">
            <MathFormula formula={String.raw`$$Q_{\text{cedido}} + Q_{\text{recebido}} = 0$$`} className="text-center text-lg mb-2" />
            <div className="text-center text-sm text-slate-700">
              <p>O calor cedido por um corpo é igual ao calor recebido pelo outro.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-3">Ou equivalentemente:</h4>
            <MathFormula formula={String.raw`$$Q_{\text{cedido}} = -Q_{\text{recebido}}$$`} className="text-center" />
            <p className="text-slate-700 mt-3 text-center">
              (O sinal negativo indica que um corpo perde calor enquanto o outro ganha)
            </p>
          </div>
        </div>

        {/* Calor Latente */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">❄️ Calor Latente</h2>
          
          <p className="text-slate-700 mb-6">
            Calor latente é o calor que <strong>causa mudança de estado</strong> (sólido → líquido → gás) <strong>sem variar a temperatura</strong>. É calculado por:
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-lg p-6 mb-6">
            <MathFormula formula={String.raw`$$Q = m \cdot L$$`} className="text-center text-lg mb-2" />
            <div className="text-center text-sm text-slate-700">
              <p><strong>Q:</strong> Calor latente (em J)</p>
              <p><strong>m:</strong> Massa do corpo (em kg)</p>
              <p><strong>L:</strong> Calor latente específico (em J/kg)</p>
            </div>
          </div>

          {/* Calores Latentes */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-4">Calores Latentes Específicos da Água</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-slate-700"><strong>Fusão (Sólido → Líquido):</strong> 334.000 J/kg (a 0°C)</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <p className="text-slate-700"><strong>Vaporização (Líquido → Gás):</strong> 2.260.000 J/kg (a 100°C)</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                <p className="text-slate-700"><strong>Sublimação (Sólido → Gás):</strong> 2.594.000 J/kg</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-900">
              <strong>Curiosidade:</strong> Por que a água demora tanto para ferver? Porque o calor latente de vaporização é muito alto (2.260.000 J/kg)! Você precisa fornecer muita energia para transformar água líquida em vapor.
            </p>
          </div>
        </div>

        {/* Problemas de Calorimetria */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Problemas de Calorimetria</h2>
          
          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 1: Mistura de Águas</h4>
              <p className="text-slate-700 mb-3">
                <strong>Problema:</strong> Misturamos 1 kg de água a 80°C com 2 kg de água a 20°C. Qual é a temperatura final?
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-slate-700 mb-2"><strong>Solução:</strong></p>
                <p className="text-slate-600 mb-1">Usando conservação de energia: <MathFormula formula={String.raw`$Q_{\text{cedido}} = Q_{\text{recebido}}$`} /></p>
                <p className="text-slate-600 mb-1"><MathFormula formula={String.raw`$m_1 \cdot c \cdot (T_f - T_1) = m_2 \cdot c \cdot (T_2 - T_f)$`} /></p>
                <p className="text-slate-600 mb-1"><MathFormula formula={String.raw`$1 \cdot (T_f - 80) = 2 \cdot (20 - T_f)$`} /></p>
                <p className="text-slate-600 mb-1"><MathFormula formula={String.raw`$T_f - 80 = 40 - 2T_f$`} /></p>
                <p className="text-slate-600"><MathFormula formula={String.raw`$3T_f = 120 \Rightarrow T_f = 40^\circ\text{C}$`} /></p>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h4 className="font-bold text-slate-900 mb-3">Exemplo 2: Mudança de Estado</h4>
              <p className="text-slate-700 mb-3">
                <strong>Problema:</strong> Quanto calor é necessário para transformar 0,5 kg de gelo a 0°C em vapor a 100°C?
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-slate-700 mb-2"><strong>Solução:</strong></p>
                <p className="text-slate-600 mb-1">Etapa 1 (Fusão): <MathFormula formula={String.raw`$Q_1 = m \cdot L_{\text{fusão}} = 0,5 \cdot 334.000 = 167.000 \text{ J}$`} /></p>
                <p className="text-slate-600 mb-1">Etapa 2 (Aquecimento): <MathFormula formula={String.raw`$Q_2 = m \cdot c \cdot \Delta T = 0,5 \cdot 4.186 \cdot 100 = 209.300 \text{ J}$`} /></p>
                <p className="text-slate-600 mb-1">Etapa 3 (Vaporização): <MathFormula formula={String.raw`$Q_3 = m \cdot L_{\text{vap}} = 0,5 \cdot 2.260.000 = 1.130.000 \text{ J}$`} /></p>
                <p className="text-slate-600"><strong>Total: <MathFormula formula={String.raw`$Q = 167.000 + 209.300 + 1.130.000 = 1.506.300 \text{ J}$`} /></strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Erros Comuns */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que calor latente não muda temperatura:</strong> Durante a mudança de estado, a temperatura permanece constante!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir calor sensível com latente:</strong> Sensível muda temperatura; latente muda estado.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de considerar todas as etapas:</strong> Se o gelo precisa derreter E depois aquecer, calcule ambas!</span>
            </li>
          </ul>
        </div>

        {/* Dicas Práticas */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas</h3>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Desenhe diagramas:</strong> Represente as etapas de aquecimento e mudança de estado para não esquecer nenhuma.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Use unidades consistentes:</strong> Sempre em Joules, kg e Kelvin/Celsius.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Verifique seu resultado:</strong> A temperatura final deve estar entre as temperaturas iniciais!</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende calorimetria, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/termodinamica">
              <Button className="bg-blue-600 hover:bg-blue-700">Termodinâmica</Button>
            </Link>
            <Link href="/termologia/topic/dilatacao">
              <Button variant="outline">Dilatação Térmica</Button>
            </Link>
            <Link href="/termologia/simulator">
              <Button variant="outline">Usar Simulador</Button>
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
