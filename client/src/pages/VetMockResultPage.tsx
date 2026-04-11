import { Link } from "wouter";
import {
  ArrowLeft,
  BrainCircuit,
  Target,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      tone: "red",
    };
  }

  if (accuracy < 60) {
    return {
      title: "Desempenho instável",
      text: "Você já tem alguma base, mas ainda há oscilação forte. O melhor próximo passo é revisar os conteúdos com mais erro e fazer novo treino focado em consolidação.",
      tone: "yellow",
    };
  }

  if (accuracy < 80) {
    return {
      title: "Desempenho competitivo",
      text: "Seu resultado já mostra um bom nível de sustentação. Agora vale lapidar os erros mais frequentes e manter ritmo de treino misto com atenção aos pontos fracos.",
      tone: "emerald",
    };
  }

  return {
    title: "Desempenho forte",
    text: "Você fechou um simulado muito sólido. O ideal agora é manter constância, revisar os poucos erros e continuar com treinos mistos e blocos de manutenção.",
    tone: "blue",
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
        <div className="container py-16">
          <Card className="p-8">
            <p className="text-slate-700 mb-4">
              Nenhum resultado de simulado foi encontrado.
            </p>
            <Link href="/vet/simulado">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Ir para o Simulado VET
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const reading = getReading(result.accuracy);

  const toneClasses =
    reading.tone === "red"
      ? "border-red-200 bg-red-50"
      : reading.tone === "yellow"
        ? "border-yellow-200 bg-yellow-50"
        : reading.tone === "blue"
          ? "border-blue-200 bg-blue-50"
          : "border-emerald-200 bg-emerald-50";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/vet/simulado">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Resultado do Simulado VET</h1>
            <p className="text-sm text-slate-500">
              Leitura estratégica do seu desempenho
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
            Pós-simulado
          </p>
          <h2 className="text-3xl font-bold mb-3">Resultado para {result.targetExam}</h2>
          <p className="text-emerald-50 leading-relaxed">
            O VET analisou seu desempenho no simulado e transformou isso em leitura estratégica.
          </p>
        </Card>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-5">
            <p className="text-sm text-slate-500 mb-1">Acertos</p>
            <p className="text-3xl font-bold text-emerald-600">{result.score}</p>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-slate-500 mb-1">Erros</p>
            <p className="text-3xl font-bold text-red-600">
              {result.totalQuestions - result.score}
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-slate-500 mb-1">Taxa de acerto</p>
            <p className="text-3xl font-bold text-slate-900">
              {result.accuracy.toFixed(0)}%
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-slate-500 mb-1">Modo</p>
            <p className="text-2xl font-bold text-slate-900 capitalize">
              {result.mode}
            </p>
          </Card>
        </div>

        <Card className={`p-6 ${toneClasses}`}>
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit className="w-5 h-5 text-slate-900" />
            <h2 className="text-xl font-bold text-slate-900">{reading.title}</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">{reading.text}</p>
        </Card>

        <div className="grid xl:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Conteúdos com mais erro
              </h2>
            </div>

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
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold text-slate-900">Erros por dificuldade</h2>
            </div>

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
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">
              Próximo passo recomendado
            </h2>
          </div>

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
        </Card>
      </main>
    </div>
  );
}
