import { Link } from "wouter";
import {
  ArrowLeft,
  Target,
  BrainCircuit,
  Gauge,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const modules = [
  {
    title: "Objetivo",
    description:
      "Defina sua prova-alvo, tempo até a prova, horas por dia e disciplina foco. O diagnóstico já aparece dentro desse fluxo.",
    href: "/vet/objetivo",
    icon: Target,
    enabled: true,
    featured: false,
  },
  {
    title: "Plano VET",
    description:
      "Veja suas prioridades, receba um treino recomendado e resolva questões reais escolhidas pelo VET em um só lugar.",
    href: "/vet/plano",
    icon: BrainCircuit,
    enabled: true,
    featured: true,
  },
  {
    title: "Nivelamento",
    description:
      "Descubra se você está muito abaixo, baixo, próximo, compatível ou acima da régua da sua prova-alvo.",
    href: "/vet/nivelamento",
    icon: Gauge,
    enabled: true,
    featured: false,
  },
  {
    title: "Simulado VET",
    description:
      "Monte um simulado estratégico com questões reais de ataque, consolidação, manutenção ou modo misto.",
    href: "/vet/simulado",
    icon: FileCheck,
    enabled: true,
    featured: false,
  },
];

export default function VetPage() {
  const featuredModule = modules.find((module) => module.featured);
  const secondaryModules = modules.filter((module) => !module.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">VET</h1>
            <p className="text-sm text-slate-500">
              Visão estratégica de treino
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
              Módulo estratégico
            </p>

            <h2 className="text-3xl font-bold mb-3">
              Monte seu treino com foco na prova certa
            </h2>

            <p className="text-emerald-50 max-w-3xl leading-relaxed">
              O VET cruza seu objetivo, seu tempo disponível, seu desempenho e
              os pesos da prova para mostrar onde você deve focar primeiro.
            </p>
          </div>
        </Card>

        {featuredModule ? (
          <Card className="p-6 md:p-8 rounded-3xl border-emerald-300 bg-white shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full -mr-36 -mt-36 opacity-70" />

            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <BrainCircuit className="w-7 h-7 text-emerald-700" />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Principal
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900">
                      {featuredModule.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-base mb-6 max-w-2xl">
                  {featuredModule.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-3 mb-7">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      1. Prioridades
                    </p>
                    <p className="text-sm text-slate-700">
                      O que atacar primeiro.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      2. Treino
                    </p>
                    <p className="text-sm text-slate-700">
                      O que fazer hoje.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      3. Questões
                    </p>
                    <p className="text-sm text-slate-700">
                      Onde começar.
                    </p>
                  </div>
                </div>

                <Link href={featuredModule.href}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-8 py-6 text-base font-bold">
                    Abrir Plano VET
                  </Button>
                </Link>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                <p className="text-sm uppercase tracking-wide text-emerald-700 font-bold mb-3">
                  Fluxo recomendado
                </p>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                    <p className="font-bold text-slate-900">Diagnóstico</p>
                    <p className="text-sm text-slate-600">
                      Entende sua situação atual.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                    <p className="font-bold text-slate-900">Prioridade</p>
                    <p className="text-sm text-slate-600">
                      Decide o conteúdo mais urgente.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                    <p className="font-bold text-slate-900">Execução</p>
                    <p className="text-sm text-slate-600">
                      Entrega treino e questões reais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ) : null}

        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Outros módulos
            </h2>
            <p className="text-sm text-slate-500">
              Configuração, nivelamento e simulado continuam separados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {secondaryModules.map((module) => {
              const Icon = module.icon;

              return (
                <Card
                  key={module.title}
                  className={`p-6 rounded-2xl shadow-sm border ${
                    module.enabled
                      ? "border-slate-200 bg-white"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>

                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        module.enabled
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {module.enabled ? "Disponível" : "Em breve"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {module.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {module.enabled ? (
                    <Link href={module.href}>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Abrir módulo
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className="w-full bg-slate-300 text-slate-600 cursor-not-allowed"
                    >
                      Em breve
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
