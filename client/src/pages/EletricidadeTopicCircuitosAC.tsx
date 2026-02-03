import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EletricidadeTopicCircuitosAC() {
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
              <h1 className="text-2xl font-bold text-slate-900">Circuitos AC</h1>
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Circuitos de Corrente Alternada (AC)</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Circuitos de corrente alternada (AC) são fundamentais na engenharia elétrica moderna. Diferentemente dos circuitos de corrente contínua (DC), onde a tensão e corrente são constantes, em circuitos AC essas grandezas variam periodicamente com o tempo. A análise de circuitos AC envolve conceitos como impedância, reatância, fator de potência e ressonância, que são essenciais para entender transformadores, motores elétricos e sistemas de distribuição de energia.
          </p>
        </section>

        {/* 1. Tensão e Corrente Alternada */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Tensão e Corrente Alternada</h3>
          
          <p className="text-slate-700 mb-6">
            Uma tensão AC senoidal pode ser descrita por:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">v(t) = V_max * sin(ωt + φ)</p>
            <p className="text-sm text-slate-600 text-center">
              Onde V_max é a amplitude (em volts), ω = 2πf é a frequência angular (em rad/s), f é a frequência (em Hz) e φ é a fase inicial (em radianos)
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            A tensão RMS (root mean square) é o valor eficaz da tensão AC, definido como:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">V_RMS = V_max / sqrt(2) ≈ 0,707 * V_max</p>
            <p className="text-sm text-slate-600 text-center">
              A tensão RMS é o valor que produz a mesma potência que uma tensão DC equivalente
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Nota Importante:</p>
            <p className="text-slate-700">
              Quando falamos de "110V" ou "220V" em nossas casas, nos referimos aos valores RMS, não aos valores de pico. O valor de pico é aproximadamente 1,414 vezes maior.
            </p>
          </div>
        </section>

        {/* 2. Impedância e Reatância */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Impedância e Reatância</h3>
          
          <p className="text-slate-700 mb-6">
            Em circuitos AC, a resistência é generalizada para o conceito de impedância (Z), que leva em conta tanto a resistência quanto os efeitos reativos dos indutores e capacitores.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Reatância Indutiva (X_L)</p>
              <div className="bg-white p-4 rounded border border-blue-200 mb-3">
                <p className="text-center text-lg font-mono">X_L = ωL = 2πfL</p>
              </div>
              <p className="text-slate-700">
                Aumenta com a frequência. Um indutor se comporta como circuito aberto em alta frequência e como curto em DC.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Reatância Capacitiva (X_C)</p>
              <div className="bg-white p-4 rounded border border-green-200 mb-3">
                <p className="text-center text-lg font-mono">X_C = 1 / (ωC) = 1 / (2πfC)</p>
              </div>
              <p className="text-slate-700">
                Diminui com a frequência. Um capacitor se comporta como circuito aberto em DC e como curto em alta frequência.
              </p>
            </div>
          </div>

          <p className="text-slate-700 mb-6">
            A impedância total de um circuito RLC série é:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">Z = sqrt(R² + (X_L - X_C)²)</p>
            <p className="text-sm text-slate-600 text-center">
              A impedância é o módulo do número complexo Z = R + j(X_L - X_C)
            </p>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
            <img 
              src="/images/circuito-ac-impedancia-pt.jpg" 
              alt="Circuito AC e Impedância"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 3. Lei de Ohm em AC */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Lei de Ohm em Circuitos AC</h3>
          
          <p className="text-slate-700 mb-6">
            A Lei de Ohm é generalizada para circuitos AC usando valores RMS e impedância:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">I_RMS = V_RMS / Z</p>
            <p className="text-sm text-slate-600 text-center">
              Onde I_RMS é a corrente RMS (em amperes), V_RMS é a tensão RMS (em volts) e Z é a impedância (em ohms)
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            O ângulo de fase φ entre tensão e corrente é dado por:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">tan(φ) = (X_L - X_C) / R</p>
            <p className="text-sm text-slate-600 text-center">
              Se φ positivo: circuito indutivo (corrente atrasada). Se φ negativo: circuito capacitivo (corrente adiantada)
            </p>
          </div>
        </section>

        {/* 4. Potência em Circuitos AC */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Potência em Circuitos AC</h3>
          
          <p className="text-slate-700 mb-6">
            Em circuitos AC, há três tipos de potência:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Potência Real (P)</p>
              <div className="bg-white p-4 rounded border border-blue-200 mb-3">
                <p className="text-center text-lg font-mono">P = V_RMS * I_RMS * cos(φ)</p>
              </div>
              <p className="text-slate-700">
                Medida em watts (W). Representa a potência efetivamente consumida (dissipada como calor).
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Potência Reativa (Q)</p>
              <div className="bg-white p-4 rounded border border-green-200 mb-3">
                <p className="text-center text-lg font-mono">Q = V_RMS * I_RMS * sin(φ)</p>
              </div>
              <p className="text-slate-700">
                Medida em volt-amperes reativos (VAR). Representa a potência armazenada e devolvida por indutores e capacitores.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Potência Aparente (S)</p>
              <div className="bg-white p-4 rounded border border-purple-200 mb-3">
                <p className="text-center text-lg font-mono">S = V_RMS * I_RMS = sqrt(P² + Q²)</p>
              </div>
              <p className="text-slate-700">
                Medida em volt-amperes (VA). Representa a potência total fornecida ao circuito.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Fator de Potência:</p>
            <p className="text-slate-700 mb-3">
              O fator de potência é definido como:
            </p>
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="text-center text-lg font-mono">FP = cos(φ) = P / S</p>
            </div>
            <p className="text-slate-700 mt-3">
              Um fator de potência próximo a 1 indica que a maior parte da potência é real (consumida). Um fator baixo indica desperdício de energia.
            </p>
          </div>
        </section>

        {/* 5. Ressonância */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Ressonância em Circuitos RLC</h3>
          
          <p className="text-slate-700 mb-6">
            A ressonância ocorre quando a reatância indutiva iguala a reatância capacitiva (X_L = X_C), fazendo com que a impedância seja mínima e igual à resistência.
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">f_0 = 1 / (2π * sqrt(LC))</p>
            <p className="text-sm text-slate-600 text-center">
              Frequência de ressonância, onde a impedância é mínima e a corrente é máxima
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Na ressonância, o ângulo de fase é zero (φ = 0), o fator de potência é unitário (FP = 1) e toda a potência fornecida é real.
          </p>
        </section>

        {/* 6. Exemplo Resolvido - Nível ITA/IME */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Exemplo Resolvido - Nível ITA/IME</h3>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400">
            <p className="font-bold text-lg text-slate-900 mb-4">
              Problema: Um circuito RLC série tem R = 50 Ω, L = 0,1 H e C = 10 μF. A tensão aplicada é V = 100V RMS a f = 50 Hz.
            </p>
            <ul className="space-y-2 mb-6 text-slate-700">
              <li><strong>a)</strong> Calcule a impedância total</li>
              <li><strong>b)</strong> Calcule a corrente RMS</li>
              <li><strong>c)</strong> Calcule as potências real, reativa e aparente</li>
              <li><strong>d)</strong> Calcule a frequência de ressonância</li>
            </ul>

            <div className="bg-white p-6 rounded border border-yellow-300 space-y-4">
              <p className="font-bold text-slate-900">Solução:</p>
              
              <p className="text-slate-700">
                <strong>Parte a) Impedância total:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>ω = 2πf = 2π*50 = 314,16 rad/s</p>
                <p>X_L = ωL = 314,16 * 0,1 = 31,416 Ω</p>
                <p>X_C = 1/(ωC) = 1/(314,16 * 10*10^-6) = 318,31 Ω</p>
                <p>Z = sqrt(R² + (X_L - X_C)²) = sqrt(50² + (31,416 - 318,31)²)</p>
                <p>Z = sqrt(2500 + 82400) = sqrt(84900) = 291,4 Ω</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte b) Corrente RMS:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>I_RMS = V_RMS / Z = 100 / 291,4 = 0,343 A</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte c) Potências:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>tan(φ) = (X_L - X_C) / R = (31,416 - 318,31) / 50 = -5,737</p>
                <p>φ = -80,1° (circuito capacitivo)</p>
                <p>cos(φ) = 0,1715</p>
                <p>P = V_RMS * I_RMS * cos(φ) = 100 * 0,343 * 0,1715 = 5,88 W</p>
                <p>Q = V_RMS * I_RMS * sin(φ) = 100 * 0,343 * (-0,985) = -33,76 VAR</p>
                <p>S = V_RMS * I_RMS = 100 * 0,343 = 34,3 VA</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte d) Frequência de ressonância:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm">
                <p>f_0 = 1 / (2π * sqrt(LC)) = 1 / (2π * sqrt(0,1 * 10*10^-6))</p>
                <p>f_0 = 1 / (2π * sqrt(10^-6)) = 1 / (2π * 10^-3)</p>
                <p>f_0 = 159,15 Hz</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-8 border-t border-slate-300 flex justify-between">
          <Link href="/eletricidade/topic/dieletricos">
            <Button variant="outline">← Anterior</Button>
          </Link>
          <Link href="/eletricidade/topic/ondas-eletromagneticas">
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600 text-white">
              Próximo: Ondas Eletromagnéticas →
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
