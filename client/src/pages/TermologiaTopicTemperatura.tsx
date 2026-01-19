import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermologiaTopicTemperatura() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Temperatura e Escalas</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🌡️ O que é Temperatura?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Temperatura é uma medida da <strong>intensidade do movimento das moléculas</strong> de um corpo. Quanto mais rápido as moléculas se movem, maior é a temperatura. É como medir o "agito" das partículas: em um corpo quente, as moléculas estão dançando muito rápido; em um corpo frio, elas se movem lentamente.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              <strong>Analogia:</strong> Pense em uma festa. Em uma festa animada (temperatura alta), as pessoas estão pulando e se movimentando muito. Em uma festa tranquila (temperatura baixa), as pessoas estão sentadas e quietas.
            </p>
          </div>
        </div>

        {/* Escalas de Temperatura */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Escalas de Temperatura</h2>
          
          <div className="space-y-6">
            {/* Celsius */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Celsius (°C)</h3>
              <p className="text-slate-700 mb-4">
                A escala Celsius é a mais usada no dia a dia. Ela foi criada usando dois pontos de referência: <strong>0°C é o ponto de congelamento da água</strong> e <strong>100°C é o ponto de ebulição da água</strong>.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <p className="text-slate-700"><strong>Exemplos:</strong></p>
                <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                  <li>Temperatura ambiente: ~20-25°C</li>
                  <li>Temperatura corporal humana: ~37°C</li>
                  <li>Água fervendo: 100°C</li>
                  <li>Nitrogênio líquido: -196°C</li>
                </ul>
              </div>
            </div>

            {/* Fahrenheit */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Fahrenheit (°F)</h3>
              <p className="text-slate-700 mb-4">
                Usada principalmente nos EUA. Nessa escala, <strong>32°F é o ponto de congelamento da água</strong> e <strong>212°F é o ponto de ebulição</strong>.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>Fórmula de conversão:</strong></p>
                <div className="bg-white border border-slate-300 rounded p-3 mt-2 font-mono text-center text-slate-800">
                  T_F = (T_C × 9/5) + 32
                </div>
              </div>
            </div>

            {/* Kelvin */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Escala Kelvin (K)</h3>
              <p className="text-slate-700 mb-4">
                A escala Kelvin é a escala absoluta, usada na Física. <strong>0 K é o zero absoluto</strong>, a menor temperatura possível no universo (onde as moléculas param de se mover).
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>Fórmula de conversão:</strong></p>
                <div className="bg-white border border-slate-300 rounded p-3 mt-2 font-mono text-center text-slate-800">
                  T_K = T_C + 273,15
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversões */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Conversões entre Escalas</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Celsius ↔ Kelvin</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-sm text-slate-600 mb-1">Para Kelvin:</p>
                  <div className="font-mono text-slate-800">T_K = T_C + 273,15</div>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-sm text-slate-600 mb-1">Para Celsius:</p>
                  <div className="font-mono text-slate-800">T_C = T_K - 273,15</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Celsius ↔ Fahrenheit</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-orange-300">
                  <p className="text-sm text-slate-600 mb-1">Para Fahrenheit:</p>
                  <div className="font-mono text-slate-800">T_F = (T_C × 9/5) + 32</div>
                </div>
                <div className="bg-white p-3 rounded border border-orange-300">
                  <p className="text-sm text-slate-600 mb-1">Para Celsius:</p>
                  <div className="font-mono text-slate-800">T_C = (T_F - 32) × 5/9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemplos Práticos */}
          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-bold text-slate-900 mb-4">📝 Exemplos Práticos</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <p className="text-slate-700 mb-2"><strong>Exemplo 1:</strong> Converter 25°C para Kelvin</p>
                <p className="text-slate-600">T_K = 25 + 273,15 = <strong>298,15 K</strong></p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <p className="text-slate-700 mb-2"><strong>Exemplo 2:</strong> Converter 98,6°F para Celsius</p>
                <p className="text-slate-600">T_C = (98,6 - 32) × 5/9 = 66,6 × 5/9 = <strong>37°C</strong></p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-slate-700 mb-2"><strong>Exemplo 3:</strong> Converter 0 K para Celsius</p>
                <p className="text-slate-600">T_C = 0 - 273,15 = <strong>-273,15°C</strong> (Zero Absoluto)</p>
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
              <span><strong>Esquecer de adicionar 273,15:</strong> Muitos alunos usam apenas 273 em vez de 273,15. O valor correto é 273,15!</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir a ordem das operações:</strong> Na conversão Celsius-Fahrenheit, multiplique por 9/5 ANTES de adicionar 32.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer que Kelvin não usa "graus":</strong> Escrevemos "298 K" e não "298°K".</span>
            </li>
          </ul>
        </div>

        {/* Dicas Práticas */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas</h3>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Memorize pontos de referência:</strong> 0°C = 273,15 K = 32°F. Isso ajuda a verificar suas conversões.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Use a proporcionalidade:</strong> Celsius e Fahrenheit têm escalas diferentes (100 vs 180 divisões), então use 9/5 ou 5/9.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Sempre use Kelvin em cálculos científicos:</strong> Muitas fórmulas de Física exigem temperatura em Kelvin.</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende temperatura e escalas, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calor">
              <Button className="bg-blue-600 hover:bg-blue-700">Calor e Energia Térmica</Button>
            </Link>
            <Link href="/termologia/graphs">
              <Button variant="outline">Ver Gráficos</Button>
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
