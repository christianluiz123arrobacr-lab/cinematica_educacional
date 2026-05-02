import { Link } from "wouter";
import {
  ArrowLeft,
  Target,
  BrainCircuit,
  Gauge,
  FileCheck,
  Sparkles,
  Flame,
  Layers3,
  Shield,
  CheckCircle2,
  Clock3,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const secondaryModules = [
  {
    title: "Objetivo",
    description:
      "Configure sua prova-alvo, tempo até a prova, horas por dia e disciplina foco.",
    href: "/vet/objetivo",
    icon: Target,
    enabled: true,
  },
  {
    title: "Nivelamento",
    description:
      "Veja se você está abaixo, próximo, compatível ou acima da régua da sua prova-alvo.",
    href: "/vet/nivelamento",
    icon: Gauge,
    enabled: true,
  },
  {
    title: "Simulado VET",
    description:
      "Monte um simulado estratégico com questões reais de ataque, consolidação, manutenção ou modo misto.",
    href: "/vet/simulado",
    icon: FileCheck,
    enabled: true,
  },
];

const planSteps = [
  {
    title: "Prioridades",
    description: "O VET aponta os conteúdos que merecem sua atenção primeiro.",
    icon: Flame,
  },
  {
    title: "Treino",
    description: "A prioridade vira uma meta prática de questões e revisão.",
    icon: Clock3,
  },
  {
    title: "Questões",
    description: "Você já começa resolvendo questões reais alinhadas ao plano.",
    icon: CheckCircle2,
  },
];

const strategyPreview = [
  {
    title: "Ataque",
    description:
      "Conteúdos com maior urgência: muito peso, muitos erros ou pouca prática.",
    icon: Flame,
    className: "border-red-200 bg-red-50",
    iconClassName: "bg-red-100 text-red-700",
    titleClassName: "text-red-700",
  },
  {
    title: "Consolidação",
    description:
      "Conteúdos que você já começou, mas ainda precisa firmar com consistência.",
    icon: Layers3,
    className: "border-yellow-200 bg-yellow-50",
    iconClassName: "bg-yellow-100 text-yellow-700",
    titleClassName: "text-yellow-700",
  },
  {
    title: "Manutenção",
    description:
      "Conteúdos que precisam continuar aparecendo para não virarem poeira mental.",
    icon: Shield,
    className: "border-emerald-200 bg-emerald-50",
    iconClassName: "bg-emerald-100 text-emerald-700",
    titleClassName: "text-emerald-700",
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
        <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden relative rounded-3xl shadow-lg">
          <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-2xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/10 blur-2xl -ml-24 -mb-24" />

          <div className="relative grid lg:grid-cols-[1.4fr_0.8fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold text-emerald-50 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Central estratégica
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Seu treino precisa de direção, não de mais abas abertas
              </h2>

              <p className="text-emerald-50 max-w-3xl leading-relaxed">
                O VET organiza seu estudo em uma sequência simples: entender o
                objetivo, definir prioridades, montar o treino e entregar
                questões reais para executar.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <Link href="/vet/plano">
                  <Button className="bg-white text-emerald-700 hover:bg-emerald-50 rounded-2xl px-6 py-5 font-bold">
                    Abrir Plano VET
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/vet/objetivo">
                  <Button
                    variant="outline"
                    className="rounded-2xl px-6 py-5 font-bold border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    Configurar objetivo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white/12 border border-white/20 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wide text-emerald-100 font-bold mb-4">
                Fluxo do VET
              </p>

              <div className="space-y-3">
                {planSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl bg-white/12 border border-white/15 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>

                        <div>
                          <p className="font-bold text-white">
                            {index + 1}. {step.title}
                          </p>
                          <p className="text-sm text-emerald-50/90 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        <section className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
          <Card className="p-6 md:p-8 rounded-3xl border-emerald-300 bg-white shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full -mr-36 -mt-36 opacity-70" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <BrainCircuit className="w-7 h-7 text-emerald-700" />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Principal
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900">
                      Plano VET
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-base mb-7 max-w-3xl">
                Aqui ficam juntas as três partes que realmente importam:
                prioridades, treino recomendado e questões recomendadas. Menos
                clique perdido, mais execução.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3">
                    <Flame className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-slate-900 mb-1">Prioridade</p>
                  <p className="text-sm text-slate-600">
                    O que atacar primeiro com base no peso e desempenho.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-slate-900 mb-1">Treino</p>
                  <p className="text-sm text-slate-600">
                    Uma meta prática para transformar diagnóstico em ação.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-slate-900 mb-1">Questões</p>
                  <p className="text-sm text-slate-600">
                    Questões reais já alinhadas com o bloco recomendado.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/vet/plano">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-7 py-5 font-bold">
                    Começar pelo Plano VET
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/vet/simulado">
                  <Button variant="outline" className="rounded-2xl px-7 py-5 font-bold">
                    Ir para simulado
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Leitura do VET
                </h3>
                <p className="text-sm text-slate-500">
                  O papel da página inicial
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700 leading-relaxed">
                Use esta tela como ponto de partida. Configure seu objetivo,
                abra o Plano VET para executar o treino e use o simulado para
                medir se a estratégia está funcionando.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700 font-semibold mb-1">
                  Caminho principal
                </p>
                <p className="text-xl font-bold text-slate-900">
                  Plano VET
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-blue-700 font-semibold mb-1">
                  Medição
                </p>
                <p className="text-xl font-bold text-slate-900">
                  Simulado
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Prévia da estratégia
            </h2>
            <p className="text-sm text-slate-500">
              O Plano VET organiza seus conteúdos nestes três blocos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {strategyPreview.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className={`p-6 rounded-3xl border shadow-sm ${item.className}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.iconClassName}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${item.titleClassName}`}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section>
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
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                        Abrir módulo
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className="w-full bg-slate-300 text-slate-600 cursor-not-allowed rounded-xl"
                    >
                      Em breve
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
