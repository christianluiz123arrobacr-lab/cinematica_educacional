import { Card } from "@/components/ui/card";
import { BookOpen, MessageCircle, ArrowLeft, Play, BarChart3, Calculator, HelpCircle, TrendingUp, Waves } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function OndulatóriaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/fisica-ii" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-400 flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Ondulatória</h1>
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-transparent" />
        <div className="container py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Entenda as <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ondas</span>
                </h2>
                <p className="text-xl text-slate-600">
                  Explore a ondulatória: conceitos fundamentais, movimento harmônico simples, fenômenos ondulatórios, som e luz com aplicações práticas em nível ITA/IME.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/ondulatoria/topic/conceitos">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all">
                    Começar a Aprender
                  </Button>
                </Link>
                <Link href="/ondulatoria/simulator">
                  <Button size="lg" variant="outline" className="border-cyan-300 hover:bg-cyan-50 text-cyan-700">
                    <Play className="w-4 h-4 mr-2" />
                    Simulador Visual
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                 <Waves className="w-32 h-32 text-cyan-200" />
                 <p className="absolute mt-40 text-slate-400 font-medium">Visualização Interativa</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
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
              <Link href="/ondulatoria/topic/conceitos">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <BookOpen className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Guia Completo</h3>
                  <p className="text-xs text-slate-600 mt-1">Explicações detalhadas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/ondulatoria/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <Calculator className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Calculadora</h3>
                  <p className="text-xs text-slate-600 mt-1">Calcule qualquer variável</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/ondulatoria/topic/conceitos">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <BarChart3 className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Fórmulas</h3>
                  <p className="text-xs text-slate-600 mt-1">Derivações completas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/ondulatoria/quiz">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <HelpCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Quiz</h3>
                  <p className="text-xs text-slate-600 mt-1">Teste seu conhecimento</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/ondulatoria/graphs">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Gráficos</h3>
                  <p className="text-xs text-slate-600 mt-1">Visualizações dinâmicas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/ondulatoria/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-cyan-400 bg-white">
                  <Play className="w-8 h-8 text-cyan-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
            <Link href="/ondulatoria/topic/conceitos">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-cyan-500 cursor-pointer hover:border-cyan-700 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🌊</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Conceitos Fundamentais</h4>
                    <p className="text-slate-600 mb-4">Definição rigorosa de onda, classificação e grandezas características.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Ondas Mecânicas e Eletromagnéticas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Amplitude, Período e Frequência
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Comprimento de Onda e Velocidade
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/ondulatoria/topic/mhs">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-cyan-500 cursor-pointer hover:border-cyan-700 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔄</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Movimento Harmônico Simples</h4>
                    <p className="text-slate-600 mb-4">Base matemática para ondas: MHS e suas propriedades.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Equação Diferencial do MHS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Velocidade e Aceleração
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Energia no MHS
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/ondulatoria/topic/equacao">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-cyan-500 cursor-pointer hover:border-cyan-700 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📐</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Equação da Onda</h4>
                    <p className="text-slate-600 mb-4">Propagação de ondas e mudança de meio.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Equação de Onda Unidimensional
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Velocidade em Diferentes Meios
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Reflexão e Refração de Ondas
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/ondulatoria/topic/fenomenos">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-cyan-500 cursor-pointer hover:border-cyan-700 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🌈</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Fenômenos Ondulatórios</h4>
                    <p className="text-slate-600 mb-4">Interferência, difração, polarização e ressonância.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Princípio da Superposição
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Ondas Estacionárias
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        Efeito Doppler
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
