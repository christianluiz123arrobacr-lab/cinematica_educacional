import { Link } from "wouter";
import { ArrowLeft, BookOpen, Calculator, BarChart3, HelpCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dinamicaTopics } from "@/data/dinamica-content";

export default function DinamicaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dinâmica</h1>
            <p className="text-xs text-slate-600">Projeto ITA - Do Zero a Aprovação</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/progress">
              <Button variant="outline" size="sm">Progresso</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Entenda as Causas do Movimento</h2>
          <p className="text-lg text-slate-600 mb-8">
            Dinâmica é o ramo da Mecânica que estuda as causas do movimento dos corpos. Ela analisa como as forças afetam o movimento, a energia e o momentum.
          </p>
          <div className="grid md:grid-cols-6 gap-4 mb-12">
            <div className="group">
              <Link href="/dinamica/learn">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Guia Completo</h3>
                  <p className="text-xs text-slate-600 mt-1">Explicações detalhadas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/dinamica/calculator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <Calculator className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Calculadora</h3>
                  <p className="text-xs text-slate-600 mt-1">Calcule qualquer variável</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/dinamica/formulas">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Fórmulas</h3>
                  <p className="text-xs text-slate-600 mt-1">Derivações completas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/dinamica/quiz">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <HelpCircle className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Quiz</h3>
                  <p className="text-xs text-slate-600 mt-1">Teste seu conhecimento</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/dinamica/graphs">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Gráficos</h3>
                  <p className="text-xs text-slate-600 mt-1">Visualizações dinâmicas</p>
                </Card>
              </Link>
            </div>
            <div className="group">
              <Link href="/dinamica/simulator">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Simulador</h3>
                  <p className="text-xs text-slate-600 mt-1">Animações interativas</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Tópicos Principais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/dinamica/topic/newton">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚙️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">As Três Leis de Newton</h4>
                    <p className="text-slate-600 mb-4">Os princípios fundamentais que governam o movimento de todos os corpos.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Primeira Lei: Lei da Inércia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Segunda Lei: F = ma
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Terceira Lei: Ação e Reação
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/dinamica/topic/force">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💪</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Força e Atrito</h4>
                    <p className="text-slate-600 mb-4">Como as forças causam movimento e como o atrito resiste ao movimento.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Tipos de Força
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Atrito Estático e Cinético
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Diagrama de Corpo Livre
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/dinamica/topic/energy">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚡</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Trabalho e Energia</h4>
                    <p className="text-slate-600 mb-4">Como o trabalho transfere energia e como a energia se conserva.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Trabalho de uma Força
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Energia Cinética e Potencial
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Conservação de Energia
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/dinamica/topic/momentum">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💥</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Momentum e Colisões</h4>
                    <p className="text-slate-600 mb-4">A quantidade de movimento e como os objetos interagem em colisões.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Definição de Momentum
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Colisões Elásticas e Inelásticas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Conservação de Momentum
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/dinamica/topic/power">
              <Card className="p-8 hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔋</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Potência e Eficiência</h4>
                    <p className="text-slate-600 mb-4">Como medir a rapidez de realização de trabalho e a eficiência de sistemas.</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Definição de Potência
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Eficiência Energética
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        Aplicações Práticas
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
