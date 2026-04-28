import { Link } from "wouter";
import {
  ArrowLeft,
  Car,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Info,
  BookOpen,
  Sigma,
  BarChart3,
  Route,
  Gauge,
  Clock3,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

function GraphCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h5 className="font-bold text-slate-900 mb-2">{title}</h5>
      {subtitle && <p className="text-sm text-slate-600 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}

function AxisLabel({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
}) {
  return (
    <text x={x} y={y} fontSize="12" fill="#475569" fontFamily="sans-serif">
      {children}
    </text>
  );
}

function STGraphProgressive() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      <rect x="0" y="0" width="320" height="220" fill="white" rx="12" />
      <line x1="45" y1="180" x2="290" y2="180" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="180" x2="45" y2="25" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="180" x2="285" y2="55" stroke="#2563eb" strokeWidth="4" />
      <circle cx="45" cy="180" r="3" fill="#334155" />
      <circle cx="45" cy="140" r="3" fill="#2563eb" />
      <line x1="39" y1="140" x2="51" y2="140" stroke="#2563eb" strokeWidth="2" />
      <AxisLabel x={294} y={186}>t</AxisLabel>
      <AxisLabel x={30} y={20}>s</AxisLabel>
      <AxisLabel x={16} y={145}>s₀</AxisLabel>
      <text x="190" y="85" fontSize="12" fill="#2563eb" fontFamily="sans-serif">
        v &gt; 0
      </text>
    </svg>
  );
}

function STGraphRetrograde() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      <rect x="0" y="0" width="320" height="220" fill="white" rx="12" />
      <line x1="45" y1="180" x2="290" y2="180" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="180" x2="45" y2="25" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="70" x2="285" y2="165" stroke="#ea580c" strokeWidth="4" />
      <circle cx="45" cy="70" r="3" fill="#ea580c" />
      <line x1="39" y1="70" x2="51" y2="70" stroke="#ea580c" strokeWidth="2" />
      <AxisLabel x={294} y={186}>t</AxisLabel>
      <AxisLabel x={30} y={20}>s</AxisLabel>
      <AxisLabel x={16} y={75}>s₀</AxisLabel>
      <text x="185" y="110" fontSize="12" fill="#ea580c" fontFamily="sans-serif">
        v &lt; 0
      </text>
    </svg>
  );
}

function VTGraphPositive() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      <rect x="0" y="0" width="320" height="220" fill="white" rx="12" />
      <line x1="45" y1="180" x2="290" y2="180" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="180" x2="45" y2="25" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="90" x2="285" y2="90" stroke="#16a34a" strokeWidth="4" />
      <rect x="45" y="90" width="160" height="90" fill="#86efac" fillOpacity="0.55" />
      <AxisLabel x={294} y={186}>t</AxisLabel>
      <AxisLabel x={28} y={20}>v</AxisLabel>
      <AxisLabel x={18} y={95}>v</AxisLabel>
      <text x="105" y="138" fontSize="12" fill="#166534" fontFamily="sans-serif">
        área = Δs
      </text>
    </svg>
  );
}

function VTGraphNegative() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      <rect x="0" y="0" width="320" height="220" fill="white" rx="12" />
      <line x1="45" y1="110" x2="290" y2="110" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="195" x2="45" y2="20" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="155" x2="285" y2="155" stroke="#dc2626" strokeWidth="4" />
      <rect x="45" y="110" width="160" height="45" fill="#fca5a5" fillOpacity="0.6" />
      <AxisLabel x={294} y={116}>t</AxisLabel>
      <AxisLabel x={28} y={20}>v</AxisLabel>
      <AxisLabel x={16} y={160}>v</AxisLabel>
      <text x="102" y="142" fontSize="12" fill="#7f1d1d" fontFamily="sans-serif">
        área &lt; 0
      </text>
    </svg>
  );
}

function ATGraphZero() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      <rect x="0" y="0" width="320" height="220" fill="white" rx="12" />
      <line x1="45" y1="110" x2="290" y2="110" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="195" x2="45" y2="20" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="110" x2="285" y2="110" stroke="#7c3aed" strokeWidth="4" />
      <AxisLabel x={294} y={116}>t</AxisLabel>
      <AxisLabel x={28} y={20}>a</AxisLabel>
      <text x="190" y="95" fontSize="12" fill="#7c3aed" fontFamily="sans-serif">
        a = 0
      </text>
    </svg>
  );
}

export default function CinematicaTopicMRU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Movimento Retilíneo Uniforme (MRU)</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* INTRODUÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🚗 Movimento Retilíneo Uniforme
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é o MRU?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>Movimento Retilíneo Uniforme</strong> é o movimento em que um móvel
                percorre uma trajetória retilínea com <strong>velocidade constante</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Isso significa que a posição do móvel varia sempre no mesmo ritmo. Em tempos iguais,
                ele sofre iguais variações de posição.
              </p>
              <p className="text-slate-700 leading-relaxed">
                É exatamente dessa regularidade que nascem a equação horária do espaço e toda a
                interpretação gráfica do MRU.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Ideia central
              </h4>
              <div className="space-y-3 text-slate-700">
                <p>• a trajetória é uma reta;</p>
                <p>• a velocidade permanece constante;</p>
                <p>• a posição varia linearmente com o tempo;</p>
                <p>• a aceleração é nula.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEXTO HISTÓRICO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 Contexto Histórico</h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              O modelo mais simples da Cinemática
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              O MRU aparece logo no início da Cinemática porque representa o caso mais simples
              possível de movimento: um corpo que continua se deslocando sem alterar sua velocidade.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              É com ele que se aprende a relacionar posição, tempo e velocidade de forma matemática.
            </p>
            <p className="text-slate-700 leading-relaxed">
              O que mais tarde vira leitura de gráficos, encontros, ultrapassagens e comparação de
              movimentos começa aqui.
            </p>
          </div>
        </div>

        {/* DEFINIÇÃO PRECISA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Definição Precisa</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição formal</h4>
              <p className="text-slate-700 leading-relaxed">
                Um móvel realiza MRU quando se desloca em uma trajetória retilínea com
                <strong> velocidade escalar constante</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Route className="w-4 h-4" />
                  Trajetória
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O caminho percorrido deve ser uma reta.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Velocidade
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Permanece constante.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-3">
                  <MathFormula formula="v = \text{constante}" display={true} />
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  Aceleração
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Como não há variação da velocidade:
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-3">
                  <MathFormula formula="a = 0" display={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUAÇÃO HORÁRIA DO ESPAÇO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧮 Equação Horária do Espaço</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                O que a equação quer responder?
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A pergunta central é: <strong>em que posição o móvel estará depois de certo tempo?</strong>
              </p>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como o movimento é uniforme, essa posição depende de três coisas:
              </p>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• a posição inicial do móvel;</p>
                <p>• a velocidade com que ele se move;</p>
                <p>• o tempo transcorrido.</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">A estrutura física da equação</h4>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula
                  formula="\text{posição atual} = \text{posição inicial} + \text{variação de posição}"
                  display={true}
                />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                A equação horária nada mais é do que a escrita matemática dessa frase.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                A variação da posição é:
              </p>
              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="\Delta s = s - s_0" display={true} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">Dedução</h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Partimos da definição de velocidade:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="v = \frac{s - s_0}{t}" display={true} />
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="vt = s - s_0" display={true} />
                </div>

                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 flex flex-col items-center">
                  <div className="bg-white rounded-lg border border-slate-200 p-4 w-full flex justify-center overflow-x-auto">
                    <MathFormula formula="s = s_0 + vt" display={true} />
                  </div>
                  <p className="text-sm text-blue-800 mt-4 font-medium">
                    Equação horária do espaço no MRU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERPRETAÇÃO TERMO A TERMO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔍 Interpretação Termo a Termo</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição</h4>
                <p className="text-sm text-slate-600 text-center">
                  Posição no instante considerado.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="s_0" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Posição inicial</h4>
                <p className="text-sm text-slate-600 text-center">
                  Onde o móvel começou.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="v" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Velocidade</h4>
                <p className="text-sm text-slate-600 text-center">
                  Ritmo constante de variação da posição.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl text-blue-600 mb-2 text-center">
                  <MathFormula formula="t" display={false} />
                </div>
                <h4 className="font-bold text-slate-900 text-center mb-2">Tempo</h4>
                <p className="text-sm text-slate-600 text-center">
                  Tempo transcorrido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLASSIFICAÇÕES */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 Classificações do MRU</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-800 mb-3">Movimento Progressivo</h4>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <MathFormula formula="v > 0" display={true} />
              </div>
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                A posição cresce com o tempo.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h4 className="font-bold text-orange-800 mb-3">Movimento Retrógrado</h4>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <MathFormula formula="v < 0" display={true} />
              </div>
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                A posição diminui com o tempo.
              </p>
            </div>
          </div>
        </div>

        {/* INTERPRETAÇÃO GRÁFICA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Interpretação Gráfica</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Antes de olhar o gráfico, entenda a lógica
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                A interpretação gráfica do MRU começa na equação horária:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="s = s_0 + vt" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                Como essa é uma função do primeiro grau em relação ao tempo,
                o gráfico <MathFormula formula="s \times t" display={false} /> precisa ser uma reta.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Então a forma do gráfico não é um detalhe decorativo.
                Ela é consequência direta da equação do movimento.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">1. Gráfico posição × tempo</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                No MRU, o gráfico da posição em função do tempo é uma reta.
                Essa reta pode ser crescente ou decrescente, dependendo do sinal da velocidade.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <GraphCard
                  title="Reta crescente"
                  subtitle="Quando a velocidade é positiva, a posição aumenta com o tempo."
                >
                  <STGraphProgressive />
                </GraphCard>

                <GraphCard
                  title="Reta decrescente"
                  subtitle="Quando a velocidade é negativa, a posição diminui com o tempo."
                >
                  <STGraphRetrograde />
                </GraphCard>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h4 className="font-bold text-indigo-800 mb-3">
                  Coeficiente linear
                </h4>
                <div className="bg-white rounded-lg border border-slate-200 p-3 mb-4">
                  <MathFormula formula="s_0" display={true} />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O coeficiente linear representa a posição inicial do móvel.
                  No gráfico, é o ponto onde a reta corta o eixo das posições quando
                  <MathFormula formula="t = 0" display={false} />.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3">
                  Coeficiente angular
                </h4>
                <div className="bg-white rounded-lg border border-slate-200 p-3 mb-4">
                  <MathFormula formula="v" display={true} />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  O coeficiente angular representa a velocidade. Quanto maior o módulo da velocidade,
                  maior a inclinação da reta.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                2. O que a inclinação da reta significa fisicamente?
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                A inclinação da reta mostra o quanto a posição varia em certo intervalo de tempo.
                Isso é exatamente a ideia de velocidade:
              </p>

              <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                <MathFormula formula="v = \frac{\Delta s}{\Delta t}" display={true} />
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Então a inclinação do gráfico <MathFormula formula="s \times t" display={false} />
                não é um detalhe visual. Ela mede o ritmo de mudança da posição.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-4">
                3. Como o valor de <MathFormula formula="s_0" display={false} /> aparece no gráfico
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h5 className="font-bold text-blue-800 mb-2">
                    <MathFormula formula="s_0 > 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta começa acima da origem do eixo das posições.
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <h5 className="font-bold text-indigo-800 mb-2">
                    <MathFormula formula="s_0 = 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta passa pela origem.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h5 className="font-bold text-purple-800 mb-2">
                    <MathFormula formula="s_0 < 0" display={false} />
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A reta começa abaixo da origem do eixo das posições.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">
                💡 Leitura inteligente do gráfico <MathFormula formula="s \times t" display={false} />
              </h4>

              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>• olhe onde a reta começa: isso mostra <MathFormula formula="s_0" display={false} />;</p>
                <p>• olhe se ela sobe ou desce: isso mostra o sinal da velocidade;</p>
                <p>• olhe o quanto ela é inclinada: isso mostra o módulo da velocidade;</p>
                <p>• lembre: reta em <MathFormula formula="s \times t" display={false} /> significa velocidade constante, não aceleração.</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h4 className="font-bold text-indigo-900 mb-3">
                4. Gráfico velocidade × tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como a velocidade é constante no MRU, o gráfico
                <MathFormula formula="v \times t" display={false} /> é uma reta horizontal.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <GraphCard
                  title="Velocidade constante positiva"
                  subtitle="A reta fica acima do eixo do tempo e a área é positiva."
                >
                  <VTGraphPositive />
                </GraphCard>

                <GraphCard
                  title="Velocidade constante negativa"
                  subtitle="A reta fica abaixo do eixo do tempo e a área algébrica é negativa."
                >
                  <VTGraphNegative />
                </GraphCard>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">
                5. Área sob o gráfico <MathFormula formula="v \times t" display={false} />
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                No MRU, a área sob o gráfico da velocidade em função do tempo representa a variação da posição.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\text{área} = v \cdot \Delta t" display={true} />
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula="\Delta s = v \cdot \Delta t" display={true} />
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                Isso é importante porque conecta o gráfico à Física. Não é só desenho:
                a região no gráfico carrega significado físico.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">
                6. Gráfico aceleração × tempo
              </h4>

              <p className="text-slate-700 leading-relaxed mb-4">
                Como no MRU a velocidade não varia, a aceleração é nula.
              </p>

              <div className="grid md:grid-cols-1 gap-6 mt-6">
                <GraphCard
                  title="Aceleração nula"
                  subtitle="No gráfico a × t, a reta coincide com o eixo do tempo."
                >
                  <ATGraphZero />
                </GraphCard>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-4 mt-4 flex justify-center overflow-x-auto">
                <MathFormula formula="a = 0" display={true} />
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Erro clássico de gráfico
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Uma reta crescente no gráfico <MathFormula formula="s \times t" display={false} />
                não significa que o móvel está acelerando. Significa apenas que a posição aumenta com o tempo.
                A aceleração está ligada à variação da velocidade, não ao simples fato de a posição crescer.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Fechando a interpretação gráfica
              </h4>

              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>• o gráfico <MathFormula formula="s \times t" display={false} /> é uma reta;</p>
                <p>• o coeficiente linear é <MathFormula formula="s_0" display={false} />;</p>
                <p>• o coeficiente angular é <MathFormula formula="v" display={false} />;</p>
                <p>• o gráfico <MathFormula formula="v \times t" display={false} /> é horizontal;</p>
                <p>• a área sob <MathFormula formula="v \times t" display={false} /> fornece <MathFormula formula="\Delta s" display={false} />;</p>
                <p>• o gráfico <MathFormula formula="a \times t" display={false} /> coincide com zero.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACELERAÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚙️ Aceleração no MRU</h2>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-bold text-orange-800 mb-3">Por que a aceleração é zero?</h4>
            <p className="text-slate-700 leading-relaxed mb-4">
              A aceleração mede a variação da velocidade no tempo. No MRU, a velocidade não varia.
            </p>
            <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
              <MathFormula formula="a = 0" display={true} />
            </div>
          </div>
        </div>

        {/* CASOS DE PROVA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧩 Casos Clássicos de Prova</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h5 className="font-bold text-blue-800 mb-2">Encontro</h5>
              <p className="text-sm text-slate-700">
                No instante do encontro, os móveis ocupam a mesma posição.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <h5 className="font-bold text-indigo-800 mb-2">Ultrapassagem</h5>
              <p className="text-sm text-slate-700">
                Também envolve igualdade de posições, às vezes com comprimento dos corpos.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h5 className="font-bold text-purple-800 mb-2">Partida com atraso</h5>
              <p className="text-sm text-slate-700">
                É essencial controlar o instante inicial de cada móvel.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h5 className="font-bold text-orange-800 mb-2">Conversão de unidades</h5>
              <p className="text-sm text-slate-700">
                Misturar km/h com m/s ainda derruba gente demais.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 p-4 rounded-xl">
            <div className="bg-white rounded-lg border border-slate-200 p-4 flex justify-center overflow-x-auto">
              <MathFormula formula="1 \text{ m/s} = 3{,}6 \text{ km/h}" display={true} />
            </div>
          </div>
        </div>

        {/* ARMADILHAS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ Armadilhas e Erros Comuns</h2>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Onde mais se erra
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <li>• Confundir posição com distância percorrida.</li>
              <li>• Achar que velocidade negativa significa desaceleração.</li>
              <li>• Ignorar o sinal da velocidade.</li>
              <li>• Igualar velocidades quando o problema exige igualar posições.</li>
              <li>• Ler gráfico de posição como se fosse gráfico de velocidade.</li>
            </ul>
          </div>
        </div>

        {/* EXEMPLOS RESOLVIDOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Leitura direta da função
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  Um móvel obedece à função
                  <MathFormula formula="s = 12 + 3t" display={false} />.
                  Determine a posição inicial, a velocidade e a posição em
                  <MathFormula formula="t = 5 \text{ s}" display={false} />.
                </p>

                <div className="bg-white rounded p-4 space-y-3 border border-slate-200">
                  <MathFormula formula="s = s_0 + vt" display={true} />
                  <MathFormula formula="s_0 = 12 \text{ m} \qquad ; \qquad v = 3 \text{ m/s}" display={true} />
                  <MathFormula formula="s = 12 + 3 \cdot 5 = 27 \text{ m}" display={true} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 — Encontro
              </h4>

              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  Dois móveis obedecem às funções
                  <MathFormula formula="s_A = 10 + 4t" display={false} /> e
                  <MathFormula formula="s_B = 70 - 2t" display={false} />.
                  Determine o instante e a posição do encontro.
                </p>

                <div className="bg-white rounded p-4 space-y-3 border border-slate-200">
                  <MathFormula formula="s_A = s_B" display={true} />
                  <MathFormula formula="10 + 4t = 70 - 2t" display={true} />
                  <MathFormula formula="6t = 60 \qquad \Rightarrow \qquad t = 10 \text{ s}" display={true} />
                  <MathFormula formula="s = 10 + 4 \cdot 10 = 50 \text{ m}" display={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FECHAMENTO */}
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Fechamento
            </h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              O MRU ensina muito mais do que uma fórmula simples. Ele ensina a interpretar movimento
              por equação, por gráfico e por significado físico.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Quem entende de verdade a interpretação gráfica do MRU já está muito menos vulnerável
              àquelas questões que tentam confundir leitura visual com chute decorado.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
