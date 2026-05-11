import { Link } from "wouter";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  BookOpen,
  Beaker,
  ArrowRight,
  BarChart3,
  BookMarked,
  Zap,
  List,
  LogIn,
  Trophy,
  BrainCircuit,
  UserCircle2,
  CreditCard,
} from "lucide-react";

export default function LandingPage() {
  const { isAuthenticated, loading } = useSupabaseAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="w-full px-6 pt-6">
        <div className="max-w-6xl mx-auto flex justify-end gap-3">
          <Link href="/planos">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Ver planos
            </Button>
          </Link>

          {loading ? (
            <Button
              disabled
              className="bg-slate-200 text-slate-500 font-semibold px-6 py-2 rounded-full flex items-center gap-2 cursor-wait"
            >
              Carregando...
            </Button>
          ) : isAuthenticated ? (
            <Link href="/perfil">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                <UserCircle2 className="w-4 h-4" />
                Perfil
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 px-6 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          <span className="font-bold">Domine Exatas</span>
          <span className="text-slate-600 font-normal">
            {" "}
            para vestibulares e{" "}
          </span>
          <span className="font-bold">concursos militares</span>
        </h1>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Teoria, questões, simulados e resolução inteligente em um só lugar.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link href="/planos">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Ver planos <CreditCard className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/fisica">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Explorar disciplinas <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/banco-de-questoes">
            <Button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-full text-lg bg-white">
              Acessar banco de questões <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/progress">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Progresso <Trophy className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/ranking">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg">
              Ranking <Trophy className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/vet">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              VET <BrainCircuit className="w-5 h-5 ml-2" />
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
                  Álgebra, geometria, trigonometria, funções e cálculo
                  estratégico
                </p>
              </div>
            </div>

            <div className="p-6">
              <button
                disabled
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full cursor-not-allowed flex items-center justify-center gap-2 transition-all"
              >
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
                  Mecânica, termologia, ondulatória, óptica, eletricidade e
                  moderna
                </p>
              </div>
            </div>

            <div className="p-6">
              <Link href="/fisica">
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
              <button
                disabled
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full cursor-not-allowed flex items-center justify-center gap-2 transition-all"
              >
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">⭐</div>
                  <h3 className="text-3xl font-bold">
                    Banco de Questões Premium
                  </h3>
                </div>

                <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                  Resolva questões de Matemática, Física e Química com filtros
                  por prova, assunto, ano e dificuldade.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <List className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">
                      Questões comentadas
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">
                      Análise de desempenho
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">
                      Caderno de erros
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">
                      Simulados estratégicos
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/banco-de-questoes">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-full flex items-center gap-2 text-lg">
                      Começar Agora <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>

                  <Link href="/planos">
                    <Button className="bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold py-3 px-8 rounded-full flex items-center gap-2 text-lg">
                      Ver planos <CreditCard className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center relative h-80">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-56 bg-white rounded-3xl shadow-2xl border-8 border-white overflow-hidden z-10">
                    <div className="bg-slate-50 h-full p-6 text-sm text-slate-700 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        </div>

                        <div className="text-xs font-semibold text-slate-400">
                          Questões
                        </div>

                        <div className="w-4 h-4 bg-slate-300 rounded"></div>
                      </div>

                      <div className="mb-4">
                        <div className="font-bold text-slate-900 text-sm mb-3">
                          Um móvel percorre 120 m em 6 s com velocidade
                          constante. Qual é sua velocidade?
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="opt1"
                            className="w-4 h-4 cursor-pointer"
                          />
                          <label
                            htmlFor="opt1"
                            className="text-sm cursor-pointer"
                          >
                            A: 10 m/s
                          </label>
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="opt2"
                            className="w-4 h-4 cursor-pointer"
                            defaultChecked
                          />
                          <label
                            htmlFor="opt2"
                            className="text-sm font-semibold cursor-pointer"
                          >
                            B: 23 m/s
                          </label>
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="opt3"
                            className="w-4 h-4 cursor-pointer"
                          />
                          <label
                            htmlFor="opt3"
                            className="text-sm cursor-pointer"
                          >
                            C: 80 m/s
                          </label>
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="opt4"
                            className="w-4 h-4 cursor-pointer"
                          />
                          <label
                            htmlFor="opt4"
                            className="text-sm cursor-pointer"
                          >
                            D: 40 m/s
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-48 h-80 bg-slate-900 rounded-3xl shadow-2xl border-8 border-slate-900 overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-slate-950 rounded-b-3xl z-50"></div>

                      <div className="bg-gradient-to-b from-blue-600 via-purple-600 to-purple-700 h-full p-4 flex flex-col justify-between text-white">
                        <div className="flex justify-between items-center text-xs mt-3 px-2">
                          <span className="font-bold text-sm">9:41</span>
                          <div className="flex gap-1">
                            <div className="w-1.5 h-2.5 bg-white rounded-sm"></div>
                            <div className="w-1.5 h-2.5 bg-white rounded-sm"></div>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                          <div className="text-3xl mb-3">📋</div>
                          <div className="font-bold text-base mb-2">
                            Questões
                          </div>
                          <div className="text-xs opacity-75 leading-tight">
                            <div>Filtros</div>
                            <div>avançados</div>
                            <div>por prova</div>
                          </div>
                        </div>

                        <div className="h-1 bg-white/30 rounded-full mb-3 mx-auto w-8"></div>
                      </div>
                    </div>
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
