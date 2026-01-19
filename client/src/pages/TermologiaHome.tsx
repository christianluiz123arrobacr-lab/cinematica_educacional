import { Card } from "@/components/ui/card";
import { BookOpen, MessageCircle, ArrowLeft, Play, BarChart3, Calculator, HelpCircle, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function TermologiaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/fisica-ii" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-400 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Termologia</h1>
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-orange-600/5 to-transparent" />
        <div className="container py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Entenda o <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Calor</span>
                </h2>
                <p className="text-xl text-slate-600">
                  Explore a termologia: como o calor funciona, as escalas de temperatura, calorimetria, termodinâmica e dilatação térmica com aplicações práticas.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/termologia/topic/temperatura">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600">
                    Começar a Aprender
                  </Button>
                </Link>
                <Link href="/termologia/simulator">
                  <Button size="lg" variant="outline" className="border-red-300 hover:bg-red-50">
                    <Play className="w-4 h-4 mr-2" />
                    Simulador Visual
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/termologia-banner.png" 
                alt="Termologia" 
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
              <Link href="/termologia/topic/temperatura">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <BookOpen className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Guia Completo</h3>
                  <p className="text-xs text-slate-600 mt-1">Explicações detalhadas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/termologia/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <Calculator className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Calculadora</h3>
                  <p className="text-xs text-slate-600 mt-1">Calcule qualquer variável</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/termologia/topic/temperatura">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <BarChart3 className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Fórmulas</h3>
                  <p className="text-xs text-slate-600 mt-1">Derivações completas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/termologia/quiz">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <HelpCircle className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Quiz</h3>
                  <p className="text-xs text-slate-600 mt-1">Teste seu conhecimento</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/termologia/graphs">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Gráficos</h3>
                  <p className="text-xs text-slate-600 mt-1">Visualizações dinâmicas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/termologia/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-red-400">
                  <Play className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/termologia/topic/temperatura">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer hover:border-red-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🌡️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Temperatura e Escalas</h4>
                    <p className="text-slate-600 mb-4">Conceito fundamental de temperatura e as diferentes escalas usadas para medi-la.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Escalas Celsius, Fahrenheit e Kelvin
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Conversão entre Escalas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Energia Térmica e Movimento Molecular
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/termologia/topic/calor">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer hover:border-red-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔥</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Calor e Transferência Térmica</h4>
                    <p className="text-slate-600 mb-4">Como o calor se transfere entre corpos e os mecanismos de transferência térmica.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Diferença entre Calor e Temperatura
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Condução, Convecção e Radiação
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Calor Sensível e Latente
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/termologia/topic/calorimetria">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer hover:border-red-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚗️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Calorimetria</h4>
                    <p className="text-slate-600 mb-4">Estudo das trocas de calor e cálculo das quantidades de calor envolvidas.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Capacidade Térmica e Calor Específico
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Equação Fundamental da Calorimetria
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Mudanças de Estado e Calor Latente
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/termologia/topic/termodinamica">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer hover:border-red-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚙️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Termodinâmica</h4>
                    <p className="text-slate-600 mb-4">Leis fundamentais da termodinâmica e processos termodinâmicos.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Primeira Lei da Termodinâmica
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Segunda Lei e Entropia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Máquinas Térmicas e Eficiência
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/termologia/topic/dilatacao">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer hover:border-red-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📏</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Dilatação Térmica</h4>
                    <p className="text-slate-600 mb-4">Como os materiais se expandem ou contraem com variações de temperatura.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Dilatação Linear
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Dilatação Superficial
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Dilatação Volumétrica e Anomalia da Água
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      {/* Formula Reference Section */}
      <section className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border-y border-slate-200/50 py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Fórmulas Principais</h2>
            <a href="/termologia/topic/temperatura">
              <Button className="bg-red-600 hover:bg-red-700">Ver Explicação Completa</Button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Conversão Celsius-Kelvin", formula: "T_K = T_C + 273,15" },
              { title: "Conversão Celsius-Fahrenheit", formula: "T_F = \\frac{9}{5}T_C + 32" },
              { title: "Calor Sensível", formula: "Q = m \\cdot c \\cdot \\Delta T" },
              { title: "Calor Latente", formula: "Q = m \\cdot L" },
              { title: "Dilatação Linear", formula: "\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T" },
              { title: "Primeira Lei Termodinâmica", formula: "\\Delta U = Q - W" },
            ].map((item, idx) => (
              <a key={idx} href="/termologia/topic/temperatura">
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
              <h3 className="text-white font-bold mb-4">Termologia</h3>
              <p className="text-sm">Guia completo e interativo para entender calor, temperatura e termodinâmica.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tópicos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Temperatura e Escalas</a></li>
                <li><a href="#" className="hover:text-white transition">Calor e Transferência</a></li>
                <li><a href="#" className="hover:text-white transition">Calorimetria</a></li>
                <li><a href="#" className="hover:text-white transition">Termodinâmica</a></li>
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
            <p>&copy; 2024 Termologia Educacional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
