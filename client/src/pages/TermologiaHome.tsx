import { Link } from "wouter";
import { ArrowLeft, BarChart3, BookOpen, HelpCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermologiaHome() {
  const mainTopics = [
    {
      title: "Temperatura e Escalas",
      emoji: "🌡️",
      description: "Conceito de temperatura e conversão entre escalas",
      link: "/termologia/topic/temperatura",
      color: "from-red-500 to-orange-600",
      borderColor: "hover:border-red-400",
      bgColor: "bg-red-600",
    },
    {
      title: "Calor e Energia Térmica",
      emoji: "🔥",
      description: "Transferência de calor e energia térmica",
      link: "/termologia/topic/calor",
      color: "from-orange-500 to-red-600",
      borderColor: "hover:border-orange-400",
      bgColor: "bg-orange-600",
    },
    {
      title: "Calorimetria",
      emoji: "⚗️",
      description: "Cálculos de calor específico e capacidade térmica",
      link: "/termologia/topic/calorimetria",
      color: "from-amber-500 to-orange-600",
      borderColor: "hover:border-amber-400",
      bgColor: "bg-amber-600",
    },
    {
      title: "Termodinâmica",
      emoji: "⚡",
      description: "Leis da termodinâmica e processos termodinâmicos",
      link: "/termologia/topic/termodinamica",
      color: "from-yellow-500 to-amber-600",
      borderColor: "hover:border-yellow-400",
      bgColor: "bg-yellow-600",
    },
    {
      title: "Dilatação Térmica",
      emoji: "📏",
      description: "Expansão de materiais com variação de temperatura",
      link: "/termologia/topic/dilatacao",
      color: "from-lime-500 to-green-600",
      borderColor: "hover:border-lime-400",
      bgColor: "bg-lime-600",
    },
  ];

  const formulas = [
    { title: "Conversão Celsius-Kelvin", formula: "T_K = T_C + 273,15", link: "/termologia/topic/temperatura" },
    { title: "Conversão Fahrenheit-Celsius", formula: "T_C = \\frac{5}{9}(T_F - 32)", link: "/termologia/topic/temperatura" },
    { title: "Calor Sensível", formula: "Q = m \\cdot c \\cdot \\Delta T", link: "/termologia/topic/calor" },
    { title: "Calor Latente", formula: "Q = m \\cdot L", link: "/termologia/topic/calorimetria" },
    { title: "1ª Lei da Termodinâmica", formula: "\\Delta U = Q - W", link: "/termologia/topic/termodinamica" },
    { title: "Dilatação Linear", formula: "\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T", link: "/termologia/topic/dilatacao" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/fisica-ii">
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
                <h1 className="text-xl font-bold text-slate-900">Termologia</h1>
                <p className="text-xs text-slate-600">Calor e Temperatura</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Entenda o Calor e a Temperatura
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Termologia é o estudo dos fenômenos térmicos, incluindo temperatura, calor e suas aplicações. Aprenda como a energia térmica funciona no nosso dia a dia.
            </p>
            <div className="flex gap-4">
              <Link href="/termologia/graphs">
                <Button className="bg-red-600 hover:bg-red-700">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver Gráficos
                </Button>
              </Link>
              <Link href="/termologia/quiz">
                <Button variant="outline">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Fazer Quiz
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-12 flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-8xl mb-4">🌡️</div>
              <p className="text-slate-600 font-semibold">Imagem de Termologia</p>
            </div>
          </div>
        </div>

        {/* Ferramentas de Aprendizado */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-20">
          <Link href="/termologia/graphs">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="font-bold text-slate-900 text-sm">Gráficos</h3>
              <p className="text-xs text-slate-600">Visualize dados</p>
            </div>
          </Link>
          <Link href="/termologia/quiz">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">❓</div>
              <h3 className="font-bold text-slate-900 text-sm">Quiz</h3>
              <p className="text-xs text-slate-600">Teste seu conhecimento</p>
            </div>
          </Link>
          <Link href="/termologia/simulator">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎮</div>
              <h3 className="font-bold text-slate-900 text-sm">Simulador</h3>
              <p className="text-xs text-slate-600">Explore interativamente</p>
            </div>
          </Link>
          <Link href="/termologia/topic/temperatura">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📖</div>
              <h3 className="font-bold text-slate-900 text-sm">Guia</h3>
              <p className="text-xs text-slate-600">Leia os tópicos</p>
            </div>
          </Link>
          <Link href="/termologia/graphs">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📈</div>
              <h3 className="font-bold text-slate-900 text-sm">Análise</h3>
              <p className="text-xs text-slate-600">Dados e gráficos</p>
            </div>
          </Link>
          <Link href="/termologia/simulator">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center cursor-pointer border border-slate-200 hover:border-red-400">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="font-bold text-slate-900 text-sm">Experimento</h3>
              <p className="text-xs text-slate-600">Teste fórmulas</p>
            </div>
          </Link>
        </div>

        {/* Fórmulas Principais */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Fórmulas Principais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {formulas.map((formula, idx) => (
              <Link key={idx} href={formula.link}>
                <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-slate-200 hover:border-red-400 cursor-pointer">
                  <h4 className="font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{formula.title}</h4>
                  <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 overflow-x-auto">
                    {formula.formula}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tópicos Principais */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tópicos Principais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mainTopics.map((topic, idx) => (
              <Link key={idx} href={topic.link}>
                <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-200 ${topic.borderColor} cursor-pointer h-full`}>
                  <div className={`bg-gradient-to-br ${topic.color} p-8 text-white`}>
                    <div className="text-5xl mb-3">{topic.emoji}</div>
                    <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700 mb-6">{topic.description}</p>
                    <Button className={`w-full ${topic.bgColor} hover:opacity-90 text-white`}>
                      Explorar
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
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
