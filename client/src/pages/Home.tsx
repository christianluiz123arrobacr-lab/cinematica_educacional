import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, BookOpen, Zap, Target, Droplet, MessageCircle, ArrowLeft, Play, BarChart3, Calculator, HelpCircle, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { cinematicaContent } from "@/data/cinematica-content";
import { MathFormula } from "@/components/MathFormula";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>("introduction");

  const sections: Section[] = [
    { id: "introduction", title: "Introdução à Cinemática", icon: BookOpen, color: "from-blue-600 to-blue-400" },
    { id: "velocidade", title: "Velocidade e Aceleração", icon: Zap, color: "from-purple-600 to-purple-400" },
    { id: "mru", title: "Movimento Retilíneo Uniforme", icon: Target, color: "from-green-600 to-green-400" },
    { id: "mruv", title: "Movimento Uniformemente Variado", icon: Zap, color: "from-orange-600 to-orange-400" },
    { id: "mcu", title: "Movimento Circular Uniforme", icon: Target, color: "from-cyan-600 to-cyan-400" },
    { id: "quedaLivre", title: "Queda Livre", icon: Droplet, color: "from-red-600 to-red-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-500">Projeto ITA - Do Zero a Aprovação</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/progress">
              <Button variant="outline" size="sm">Progresso</Button>
            </Link>
            <a href="https://youtube.com/@projetoita-z4x?si=dIghaQjMiHZzk4R5" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">Sobre</Button>
            </a>
            <a href="https://chat.whatsapp.com/Grwi9hUFvFbA91gShvZGqI" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />
        <div className="container py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Entenda o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Movimento</span>
                </h2>
                <p className="text-xl text-slate-600">
                  Explore a cinemática: como os objetos se movem, as fórmulas que descrevem o movimento e as aplicações práticas no mundo real.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/cinematica/learn">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Começar a Aprender
                  </Button>
                </Link>
                <Link href="/cinematica/simulator">
                  <Button size="lg" variant="outline" className="border-blue-300 hover:bg-blue-50">
                    <Play className="w-4 h-4 mr-2" />
                    Simulador Visual
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero_cinematica.png" 
                alt="Cinemática" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        {/* Ferramentas de Aprendizado - Navigation Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Ferramentas de Aprendizado</h3>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="group">
              <Link href="/cinematica/learn">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Guia Completo</h3>
                  <p className="text-xs text-slate-600 mt-1">Explicações detalhadas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/cinematica/calculator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Calculadora</h3>
                  <p className="text-xs text-slate-600 mt-1">Calcule qualquer variável</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/cinematica/formulas">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Fórmulas</h3>
                  <p className="text-xs text-slate-600 mt-1">Derivações completas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/cinematica/quiz-new">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <HelpCircle className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Quiz</h3>
                  <p className="text-xs text-slate-600 mt-1">Teste seu conhecimento</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/cinematica/graphs-new">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Gráficos</h3>
                  <p className="text-xs text-slate-600 mt-1">Visualizações dinâmicas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/cinematica/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-400">
                  <Play className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Simulador</h3>
                  <p className="text-xs text-slate-600 mt-1">Animações interativas</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Tópicos Principais */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Tópicos Principais</h3>
          <div className="space-y-6">
            {sections.map((section) => {
              const content = cinematicaContent[section.id as keyof typeof cinematicaContent] as any;
              const isExpanded = expandedSection === section.id;
              const Icon = section.icon;

              return (
                <Card 
                  key={section.id}
                  className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                        {content.description && (
                          <p className="text-sm text-slate-600">{content.description}</p>
                        )}
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-transparent space-y-6">
                      {/* Section Image */}
                      {section.id === "mru" && (
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img src="/images/mru_illustration.png" alt="MRU" className="w-full h-auto" />
                        </div>
                      )}
                      {section.id === "mruv" && (
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img src="/images/mruv_illustration.png" alt="MRUV" className="w-full h-auto" />
                        </div>
                      )}
                      {section.id === "mcu" && (
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img src="/images/mcu_illustration.png" alt="MCU" className="w-full h-auto" />
                        </div>
                      )}
                      {section.id === "quedaLivre" && (
                        <div className="rounded-lg overflow-hidden shadow-md max-w-md mx-auto">
                          <img src="/images/queda_livre_illustration.png" alt="Queda Livre" className="w-full h-auto" />
                        </div>
                      )}

                      {/* Content */}
                      {content.sections?.map((subsection: any, idx: number) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-lg font-semibold text-slate-900">{subsection.subtitle}</h4>
                          <div className="prose prose-sm max-w-none text-slate-700 space-y-3">
                            {subsection.content.split('\n\n').map((paragraph: string, pidx: number) => (
                              <p key={pidx} className="text-sm leading-relaxed whitespace-pre-wrap">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Formula Reference Section */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y border-slate-200/50 py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Fórmulas Principais</h2>
            <a href="/cinematica/formulas">
              <Button className="bg-blue-600 hover:bg-blue-700">Ver Explicação Completa</Button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Velocidade Média", formula: "v_m = \\frac{\\Delta s}{\\Delta t}" },
              { title: "Aceleração", formula: "a = \\frac{\\Delta v}{\\Delta t}" },
              { title: "MRU - Posição", formula: "s = s_0 + v \\cdot t" },
              { title: "MRUV - Velocidade", formula: "V = V_0 + a \\cdot t" },
              { title: "MRUV - Posição", formula: "S = S_0 + V_0 \\cdot t + \\frac{a \\cdot t^2}{2}" },
              { title: "MCU - Velocidade", formula: "v = \\frac{2\\pi r}{T}" },
            ].map((item, idx) => (
              <a key={idx} href="/cinematica/formulas">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                  <p className="text-sm font-semibold text-slate-600 mb-2">{item.title}</p>
                  <div className="text-lg font-bold">
                    <MathFormula formula={item.formula} className="text-center" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Cinemática</h3>
              <p className="text-sm">Guia completo e interativo para entender o movimento dos corpos.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tópicos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Introdução</a></li>
                <li><a href="#" className="hover:text-white transition">MRU</a></li>
                <li><a href="#" className="hover:text-white transition">MRUV</a></li>
                <li><a href="#" className="hover:text-white transition">Queda Livre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Fórmulas</a></li>
                <li><a href="#" className="hover:text-white transition">Exemplos</a></li>
                <li><a href="#" className="hover:text-white transition">Exercícios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Cinemática Educacional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
