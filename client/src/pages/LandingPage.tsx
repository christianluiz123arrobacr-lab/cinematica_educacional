import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, BookOpen, Beaker, ArrowRight, CheckCircle2, BarChart3, BookMarked, Zap, Lock, List, Camera } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          <span className="font-bold">Domine Exatas</span>
          <span className="text-slate-600 font-normal"> para vestibulares e </span>
          <span className="font-bold">concursos militares</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Teoria, questões, simulados e resolução inteligente em um só lugar.
        </p>

        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <Link href="/cinematica/learn">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Explorar disciplinas <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/banco-de-questoes">
            <Button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-full text-lg bg-white">
              Acessar banco de questões <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Disciplinas */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Matemática */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 text-white min-h-56 flex flex-col justify-between">
              <div>
                <Calculator className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-3">Matemática</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Álgebra, geometria, trigonometria, funções e cálculo estratégico
                </p>
              </div>
            </div>
            <div className="p-6">
              <button disabled className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full cursor-not-allowed flex items-center justify-center gap-2 transition-all">
                Explorar Matemática <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Física */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-10 text-white min-h-56 flex flex-col justify-between">
              <div>
                <BookOpen className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-3">Física</h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Mecânica, termologia, ondulatória, óptica, eletricidade e moderna
                </p>
              </div>
            </div>
            <div className="p-6">
              <Link href="/cinematica/learn">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2">
                  Explorar Física <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Química */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 text-white min-h-56 flex flex-col justify-between">
              <div>
                <Beaker className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-3">Química</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Geral, físico-química, orgânica e questões de alto nível
                </p>
              </div>
            </div>
            <div className="p-6">
              <button disabled className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full cursor-not-allowed flex items-center justify-center gap-2 transition-all">
                Explorar Química <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banco de Questões */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {/* Left side - Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">⭐</div>
                  <h3 className="text-3xl font-bold">Banco de Questões Premium</h3>
                </div>

                <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                  Resolva questões de Matemática, Física e Química com filtros por prova, assunto, ano e dificuldade.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <List className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">Questões comentadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">Análise de desempenho</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">Caderno de erros</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">Simulados estratégicos</span>
                  </div>
                </div>

                <Link href="/banco-de-questoes">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-full flex items-center gap-2 text-lg">
                    Começar Agora <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Right side - Visual */}
              <div className="hidden md:flex items-center justify-center relative">
                {/* Phone mockup */}
                <div className="relative">
                  {/* Tablet/Desktop screen */}
                  <div className="absolute right-0 top-8 w-64 h-48 bg-white rounded-2xl shadow-2xl border-8 border-white overflow-hidden">
                    <div className="bg-slate-100 h-full p-3 text-xs text-slate-700">
                      <div className="font-bold mb-2 text-slate-900">Um móvel percorre 120 m em 6 s com velocidade constante. Qual é sua velocidade?</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input type="radio" id="opt1" className="w-3 h-3" />
                          <label htmlFor="opt1" className="text-xs">A: 10 m/s</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="radio" id="opt2" className="w-3 h-3" defaultChecked />
                          <label htmlFor="opt2" className="text-xs">B: 23 m/s</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="radio" id="opt3" className="w-3 h-3" />
                          <label htmlFor="opt3" className="text-xs">C: 80 m/s</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="radio" id="opt4" className="w-3 h-3" />
                          <label htmlFor="opt4" className="text-xs">D: 40 m/s</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone mockup */}
                  <div className="w-40 h-56 bg-slate-800 rounded-3xl shadow-2xl border-8 border-slate-900 overflow-hidden relative">
                    <div className="bg-gradient-to-b from-purple-600 to-purple-700 h-full p-3 flex flex-col justify-center items-center text-white text-xs">
                      <div className="font-bold mb-2">Questões</div>
                      <div className="text-center text-xs opacity-75">
                        <div>Filtros avançados</div>
                        <div>por prova</div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
