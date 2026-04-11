import { Link } from "wouter";
import { ArrowLeft, Target, Activity, ListChecks, BrainCircuit, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const modules = [
  {
    title: "Objetivo",
    description:
      "Defina sua prova-alvo, tempo até a prova, horas por dia e disciplina foco.",
    href: "/vet/objetivo",
    icon: Target,
    enabled: true,
  },
  {
  title: "Diagnóstico",
  description:
    "Veja disciplina crítica, disciplina forte, conteúdo urgente e risco atual.",
  href: "/vet/diagnostico",
  icon: Activity,
  enabled: true,
},
  {
  title: "Prioridades",
  description:
    "Descubra o que atacar primeiro com base no peso da prova e no seu desempenho.",
  href: "/vet/prioridades",
  icon: ListChecks,
  enabled: true,
},
  {
    title: "Treino recomendado",
    description:
      "Receba uma trilha estratégica de treino baseada no seu objetivo e no seu nível.",
    href: "/vet/treino",
    icon: BrainCircuit,
    enabled: true,
  },
  {
  title: "Questões recomendadas",
  description:
    "Resolva questões reais escolhidas com base no seu objetivo, nas prioridades e no treino do VET.",
  href: "/vet/questoes",
  icon: BookOpen,
  enabled: true,
},
];

export default function VetPage() {
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
          <div className="relative">
            <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
              Módulo estratégico
            </p>
            <h2 className="text-3xl font-bold mb-3">
              Monte seu treino com foco na prova certa
            </h2>
            <p className="text-emerald-50 max-w-3xl leading-relaxed">
              O VET vai cruzar seu objetivo, seu tempo disponível e seu desempenho
              real para mostrar onde você deve focar primeiro.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {modules.map((module) => {
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
      </main>
    </div>
  );
}
