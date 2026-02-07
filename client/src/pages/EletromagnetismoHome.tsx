import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Magnet, Zap, Radio, Waves, Lightbulb, BookOpen } from "lucide-react";

export default function EletromagnetismoHome() {
  const topics = [
    {
      id: "campos-magneticos",
      title: "Campos Magnéticos",
      description: "Propriedades e comportamento de campos magnéticos",
      icon: Magnet,
      color: "from-red-500 to-orange-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: "inducao-eletromagnetica",
      title: "Indução Eletromagnética",
      description: "Lei de Faraday e aplicações práticas",
      icon: Zap,
      color: "from-orange-500 to-yellow-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: "equacoes-maxwell",
      title: "Equações de Maxwell",
      description: "Formulação completa do eletromagnetismo",
      icon: Radio,
      color: "from-yellow-500 to-green-600",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: "ondas-eletromagneticas-avancado",
      title: "Ondas Eletromagnéticas Avançado",
      description: "Propagação e propriedades de ondas EM",
      icon: Waves,
      color: "from-green-500 to-cyan-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "aplicacoes-eletromagnetismo",
      title: "Aplicações do Eletromagnetismo",
      description: "Transformadores, motores e geradores",
      icon: Lightbulb,
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      id: "radiacao-eletromagnetica",
      title: "Radiação Eletromagnética",
      description: "Emissão e absorção de radiação",
      icon: Radio,
      color: "from-blue-500 to-purple-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/fisica-iii">
            <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
              <Magnet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Eletromagnetismo</h1>
              <p className="text-xs text-slate-500">Física III - Campos e Ondas</p>
            </div>
          </div>
          <div className="w-24" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Explore o Eletromagnetismo
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Compreenda os fenômenos eletromagnéticos que governam o universo, desde campos magnéticos até ondas eletromagnéticas e suas aplicações práticas em tecnologia moderna.
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={topic.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${topic.color} p-6 text-white`}>
                    <div className={`w-12 h-12 ${topic.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 ${topic.textColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm mb-6">{topic.description}</p>
                    <Button
                      disabled
                      className="w-full bg-slate-200 text-slate-500 cursor-not-allowed"
                    >
                      Em Desenvolvimento
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Info Box */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex gap-4">
              <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Conteúdo em Desenvolvimento</h4>
                <p className="text-blue-800 text-sm">
                  Os tópicos de Eletromagnetismo estão sendo desenvolvidos com o mesmo rigor ITA/IME aplicado aos tópicos de Eletricidade. Em breve, você terá acesso a explicações profundas, deduções matemáticas completas e diagramas educacionais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
