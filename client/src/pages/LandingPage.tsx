import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, BookOpen, Beaker, ArrowRight, CheckCircle2, BarChart3, BookMarked, Zap, Lock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Domine Exatas</h1>
          </div>
        </div>
      </header>

      <main className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Domine Exatas <span className="text-slate-600">para vestibulares e</span> <span className="text-slate-900">concursos militares</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Teoria, questões, simulados e resolução inteligente em um só lugar.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/disciplinas">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Explorar disciplinas <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/banco-de-questoes">
              <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 rounded-full px-8">
                Acessar banco de questões <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Disciplinas */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Matemática - Em Breve */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <Calculator className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-3xl font-bold mb-2 relative z-10">Matemática</h3>
                <p className="text-blue-100 relative z-10">Álgebra, geometria, trigonometria, funções e cálculo estratégico</p>
              </div>
              <div className="p-6 flex items-center justify-center">
                <button disabled className="w-full bg-slate-300 text-slate-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Em Breve
                </button>
              </div>
            </Card>

            {/* Física - Ativo */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <BookOpen className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-3xl font-bold mb-2 relative z-10">Física</h3>
                <p className="text-purple-100 relative z-10">Mecânica, termologia, ondulatória, óptica, eletricidade e moderna</p>
              </div>
              <div className="p-6">
                <Link href="/cinematica/learn">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                    Explorar Física <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Química - Em Breve */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <Beaker className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-3xl font-bold mb-2 relative z-10">Química</h3>
                <p className="text-orange-100 relative z-10">Geral, físico-química, orgânica e questões de alto nível</p>
              </div>
              <div className="p-6 flex items-center justify-center">
                <button disabled className="w-full bg-slate-300 text-slate-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Em Breve
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Banco de Questões - Preview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold">Banco de Questões Premium</h3>
                </div>

                <p className="text-lg text-purple-100 mb-8">
                  Resolva questões de Matemática, Física e Química com filtros por prova, assunto, ano e dificuldade.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Questões comentadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Análise de desempenho</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Caderno de erros</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Simulados estratégicos</span>
                  </div>
                </div>

                <Link href="/banco-de-questoes">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-full flex items-center gap-2">
                    Começar Agora <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <p className="text-sm text-purple-200 mb-3">Exemplo de Questão</p>
                    <p className="font-semibold mb-4">Um móvel percorre 120 m em 6 s com velocidade constante. Qual é sua velocidade?</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" id="opt1" name="question" className="w-4 h-4" />
                        <label htmlFor="opt1" className="text-sm">A) 10 m/s</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="radio" id="opt2" name="question" className="w-4 h-4" defaultChecked />
                        <label htmlFor="opt2" className="text-sm">B) 20 m/s</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="radio" id="opt3" name="question" className="w-4 h-4" />
                        <label htmlFor="opt3" className="text-sm">C) 30 m/s</label>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200">
                    <span className="inline-block bg-white/10 px-2 py-1 rounded mr-2 mb-2">EsPCEx 2022</span>
                    <span className="inline-block bg-white/10 px-2 py-1 rounded mr-2 mb-2">Fácil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="container text-center">
          <p className="mb-4">© 2026 Domine Exatas. Preparação para vestibulares e concursos militares.</p>
          <p className="text-sm text-slate-500">Desenvolvido com dedicação para sua aprovação.</p>
        </div>
      </footer>
    </div>
  );
}
