import { Link } from "wouter";
import {
  BrainCircuit,
  Target,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  BarChart3,
  Trophy,
  XCircle,
  Percent,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { VetPageHeader } from "@/components/vet/VetPageHeader";
import { VetModuleNav } from "@/components/vet/VetModuleNav";
import { VetStatCard } from "@/components/vet/VetStatCard";
import { VetSectionCard } from "@/components/vet/VetSectionCard";

type StoredResult = {
  mode: "ataque" | "consolidacao" | "manutencao" | "misto";
  targetExam: string;
  focusSubject: string;
  totalQuestions: number;
  totalAnswered: number;
  score: number;
  accuracy: number;
  wrongTopics: { topic: string; count: number }[];
  wrongDifficulties: { difficulty: string; count: number }[];
};

function getReading(accuracy: number) {
  if (accuracy < 40) {
    return {
      title: "Desempenho crítico",
      text: "Seu simulado mostrou uma base ainda muito instável. O melhor agora é voltar para ataque imediato, revisar os conteúdos mais errados e evitar avançar sem consolidar o núcleo principal.",
      tone: "red" as const,
    };
  }

  if (accuracy < 60) {
    return {
      title: "Desempenho instável",
      text: "Você já tem alguma base, mas ainda há oscilação forte. O melhor próximo passo é revisar os conteúdos com mais erro e fazer novo treino focado em consolidação.",
      tone: "yellow" as const,
    };
  }

  if (accuracy < 80) {
    return {
      title: "Desempenho competitivo",
      text: "Seu resultado já mostra um bom nível de sustentação. Agora vale lapidar os erros mais frequentes e manter ritmo de treino misto com atenção aos pontos fracos.",
      tone: "green" as const,
    };
  }

  return {
    title: "Desempenho forte",
    text: "Você fechou um simulado muito sólido. O ideal agora é manter constância, revisar os poucos erros e continuar com treinos mistos e blocos de manutenção.",
    tone: "blue" as const,
  };
}

export default function VetMockResultPage() {
  const raw =
    typeof window !== "undefined"
      ? window.sessionStorage.getItem("vet_mock_result")
      : null;

  const result: StoredResult | null = raw ? JSON.parse(raw) : null;

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
        <VetPageHeader
          title="Resultado do Simulado VET"
          subtitle="Leitura estratégica do seu desempenho no simulado."
          eyebrow="Pós-simulado"
          backHref="/vet/simulado"
        />
        <VetModuleNav />

        <main className="container py-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-700 mb-4">
              Nenhum resultado de simulado foi encontrado.
            </p>
            <Link href="/vet/simulado">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                Ir para o Simulado VET
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const reading = getReading(result.accuracy);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <VetPageHeader
        title="Resultado do Simulado VET"
        subtitle={`Leitura estratégica do seu desempenho para ${result.targetExam}.`}
        eyebrow="Pós-simulado"
        backHref="/vet/simulado"
      />

      <VetModuleNav />

      <main className="container py-6 space-y-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <VetStatCard
            label="Acertos"
            value={result.score}
            icon={Trophy}
            tone="green"
          />
          <VetStatCard
            label="Erros"
            value={result.totalQuestions - result.score}
            icon={XCircle}
            tone="red"
          />
          <VetStatCard
            label="Taxa de acerto"
            value={`${result.accuracy.toFixed(0)}%`}
            icon={Percent}
            tone="blue"
          />
          <VetStatCard
            label="Modo"
            value={result.mode}
            icon={FileCheck}
            tone="purple"
          />
        </div>

        <VetSectionCard
          title={reading.title}
          subtitle="Interpretação automática do VET para o seu simulado."
          icon={BrainCircuit}
        >
          <div
            className={`rounded-2xl border p-5 ${
              reading.tone === "red"
                ? "border-red-200 bg-red-50"
                : reading.tone === "yellow"
                  ? "border-yellow-200 bg-yellow-50"
                  : reading.tone === "blue"
                    ? "border-blue-200 bg-blue-50"
                    : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <p className="text-slate-700 leading-relaxed">{reading.text}</p>
          </div>
        </VetSectionCard>

        <div className="grid xl:grid-cols-2 gap-6">
          <VetSectionCard
            title="Conteúdos com mais erro"
            subtitle="Os pontos que mais te derrubaram neste simulado."
            icon={Target}
          >
            {result.wrongTopics.length > 0 ? (
              <div className="space-y-3">
                {result.wrongTopics.slice(0, 5).map((item, index) => (
                  <div
                    key={`${item.topic}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-slate-900">
                      #{index + 1} {item.topic}
                    </p>
                    <p className="text-sm font-bold text-red-600">
                      {item.count} erro(s)
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">Nenhum conteúdo com erro registrado.</p>
            )}
          </VetSectionCard>

          <VetSectionCard
            title="Erros por dificuldade"
            subtitle="Onde a dificuldade mais te pressionou."
            icon={AlertTriangle}
          >
            {result.wrongDifficulties.length > 0 ? (
              <div className="space-y-3">
                {result.wrongDifficulties.map((item, index) => (
                  <div
                    key={`${item.difficulty}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-slate-900">{item.difficulty}</p>
                    <p className="text-sm font-bold text-slate-900">{item.count}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">Nenhum erro por dificuldade registrado.</p>
            )}
          </VetSectionCard>
        </div>

        <VetSectionCard
          title="Próximo passo recomendado"
          subtitle="Transforme o resultado do simulado em ação prática."
          icon={BarChart3}
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/vet/simulado">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                <RotateCcw className="w-4 h-4 mr-2" />
                Refazer simulado
              </Button>
            </Link>

            <Link href="/vet/questoes">
              <Button variant="outline" className="w-full rounded-xl">
                <BookOpen className="w-4 h-4 mr-2" />
                Ir para questões
              </Button>
            </Link>

            <Link href="/vet/treino">
              <Button variant="outline" className="w-full rounded-xl">
                <Target className="w-4 h-4 mr-2" />
                Ir para treino
              </Button>
            </Link>
          </div>
        </VetSectionCard>
      </main>
    </div>
  );
}
