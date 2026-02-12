import { Card } from "@/components/ui/card";
import { BookOpen, MessageCircle, ArrowLeft, Play, Atom, Sparkles, Zap, Orbit, Cpu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FisicaModernaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/fisica-iii" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Física Moderna</h1>
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-transparent" />
        <div className="container py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Explore a <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Física Moderna</span>
                </h2>
                <p className="text-xl text-slate-600">
                  Descubra as revoluções científicas do século XX: Relatividade, Física Quântica, Átomo, Partículas Elementares e suas aplicações tecnológicas.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/fisica-moderna/topic/relatividade">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                    Começar a Aprender
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center">
              {/* Placeholder for banner image */}
              <Atom className="w-32 h-32 text-purple-500 animate-pulse" />
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
              <Link href="/fisica-moderna/topic/relatividade">
                <Card className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-400">
                  <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900">Guia Completo</h3>
                  <p className="text-xs text-slate-600 mt-1">Explicações detalhadas</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Tópicos Principais */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Tópicos Principais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Relatividade */}
            <Link href="/fisica-moderna/topic/relatividade">
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-400 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Relatividade Restrita</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Teoria de Einstein (1905): dilatação do tempo, contração do espaço, E=mc², paradoxos relativísticos e transformações de Lorentz.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Física Quântica */}
            <Link href="/fisica-moderna/topic/quantica">
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-400 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-pink-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Física Quântica</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Radiação de corpo negro, efeito fotoelétrico, dualidade onda-partícula, princípio da incerteza e interpretações da mecânica quântica.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Átomo e Núcleo */}
            <Link href="/fisica-moderna/topic/atomo">
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-400 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Atom className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Átomo e Núcleo</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Modelos atômicos (Bohr, Schrödinger), espectros atômicos, radioatividade (alfa, beta, gama), fissão e fusão nuclear.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Partículas Elementares */}
            <Link href="/fisica-moderna/topic/particulas">
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-400 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Orbit className="w-6 h-6 text-pink-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Partículas Elementares</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Modelo padrão da física de partículas, quarks, léptons, bósons (Higgs), antimatéria e aceleradores de partículas.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Aplicações Modernas */}
            <Link href="/fisica-moderna/topic/aplicacoes">
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-400 group md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Aplicações Tecnológicas</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Laser e LED, semicondutores e transistores, energia nuclear, computação quântica, GPS e aplicações da relatividade, nanotecnologia.
                    </p>
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
