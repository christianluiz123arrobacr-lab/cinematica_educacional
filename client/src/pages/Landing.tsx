import { Link } from "wouter";
import { BookOpen, Zap, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Física Educacional</h1>
              <p className="text-xs text-slate-600">Projeto ITA - Do Zero a Aprovação</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://youtube.com/@projetoita-z4x?si=dIghaQjMiHZzk4R5" target="_blank" rel="noopener noreferrer">
                Sobre
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://chat.whatsapp.com/Grwi9hUFvFbA91gShvZGqI" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Domine a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Física</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Aprenda cinemática e dinâmica com explicações detalhadas, fórmulas interativas e calculadoras avançadas.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cinemática Card */}
          <div className="group">
            <Link href="/cinematica">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-400 cursor-pointer h-full">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Cinemática</h3>
                  <p className="text-blue-100 mb-6">O estudo do movimento</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Velocidade e Aceleração
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Movimento Retilíneo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Movimento Circular
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Queda Livre
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:gap-2">
                    Explorar Cinemática
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Dinâmica Card */}
          <div className="group">
            <Link href="/dinamica">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-purple-400 cursor-pointer h-full">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Dinâmica</h3>
                  <p className="text-purple-100 mb-6">As causas do movimento</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Leis de Newton
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Força e Atrito
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Trabalho e Energia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Momentum e Impulso
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:gap-2">
                    Explorar Dinâmica
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Estática Card */}
          <div className="group">
            <Link href="/estatica">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-amber-400 cursor-pointer h-full">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Estática</h3>
                  <p className="text-amber-100 mb-6">O equilíbrio dos corpos</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      Equilíbrio de Forças
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      Torque e Momento
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      Máquinas Simples
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      Hidrostática
                    </li>
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white group-hover:gap-2">
                    Explorar Estática
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-t border-slate-200 py-20 mt-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Recursos Inclusos</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Guias Completos</h4>
              <p className="text-slate-600 text-sm">Explicações detalhadas com derivações de fórmulas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Calculadoras</h4>
              <p className="text-slate-600 text-sm">Calcule qualquer variável em todas as fórmulas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Quizzes</h4>
              <p className="text-slate-600 text-sm">Teste seu conhecimento com questões interativas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Gráficos</h4>
              <p className="text-slate-600 text-sm">Visualize conceitos com gráficos dinâmicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
