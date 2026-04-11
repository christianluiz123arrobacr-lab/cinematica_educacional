import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ListChecks,
  Flame,
  CircleDashed,
  Shield,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

type VetProfileRow = {
  id: string;
  user_id: string;
  target_exam: string;
  months_until_exam: number;
  hours_per_day: number;
  focus_subject: string;
  study_days_per_week: number | null;
  study_weekdays: string[] | null;
};

type AttemptRow = {
  id: string;
  user_id: string;
  question_id: string;
  selected_option: string | null;
  is_correct: boolean;
  time_spent_seconds: number | null;
  answered_at: string;
  attempt_number: number;
  subject: string | null;
  conteudo: string | null;
  assunto: string | null;
  banca: string | null;
  ano: number | null;
  difficulty: string | null;
};

type WeightRow = {
  id: string;
  exam: string;
  subject: string;
  conteudo: string;
  weight: number;
};

type PriorityItem = {
  conteudo: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  weight: number;
  weaknessScore: number;
  urgencyTimeScore: number;
  wrongVolumeScore: number;
  noAttemptPenalty: number;
  priorityScore: number;
  priorityLevel: "alta" | "media" | "manutencao";
  reason: string;
  hasAttempts: boolean;
};

function normalizeText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function prettify(value?: string | null) {
  const text = (value || "").trim();
  if (!text) return "Não informado";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getWeaknessScore(accuracy: number, total: number) {
  if (total === 0) return 6;
  if (accuracy < 40) return 10;
  if (accuracy < 55) return 7;
  if (accuracy < 70) return 4;
  return 1;
}

function getUrgencyTimeScore(monthsUntilExam: number) {
  if (monthsUntilExam <= 2) return 5;
  if (monthsUntilExam <= 4) return 4;
  if (monthsUntilExam <= 6) return 3;
  if (monthsUntilExam <= 9) return 2;
  return 1;
}

function getWrongVolumeScore(wrong: number) {
  if (wrong >= 6) return 4;
  if (wrong >= 4) return 3;
  if (wrong >= 2) return 2;
  if (wrong >= 1) return 1;
  return 0;
}

function getNoAttemptPenalty(total: number, weight: number) {
  if (total > 0) return 0;
  if (weight >= 8) return 6;
  if (weight >= 6) return 4;
  if (weight >= 4) return 2;
  return 1;
}

function getPriorityLevel(score: number): "alta" | "media" | "manutencao" {
  if (score >= 15) return "alta";
  if (score >= 9) return "media";
  return "manutencao";
}

function buildReason(params: {
  weight: number;
  accuracy: number;
  wrong: number;
  monthsUntilExam: number;
  total: number;
}) {
  const { weight, accuracy, wrong, monthsUntilExam, total } = params;

  if (total === 0) {
    if (weight >= 8) {
      return "Prioridade porque esse conteúdo tem peso alto na prova e ainda não foi treinado.";
    }

    if (weight >= 5) {
      return "Prioridade porque esse conteúdo tem peso relevante na prova e ainda não foi treinado.";
    }

    return "Conteúdo ainda não treinado; vale entrar no radar para não criar lacuna.";
  }

  const parts: string[] = [];

  if (weight >= 8) {
    parts.push("tem peso alto na prova");
  } else if (weight >= 5) {
    parts.push("tem peso relevante na prova");
  }

  if (accuracy < 40) {
    parts.push("seu aproveitamento está muito baixo");
  } else if (accuracy < 55) {
    parts.push("seu aproveitamento está abaixo do ideal");
  }

  if (wrong >= 4) {
    parts.push("há muitos erros acumulados");
  } else if (wrong >= 2) {
    parts.push("há erros que ainda pedem correção");
  }

  if (monthsUntilExam <= 4) {
    parts.push("o tempo até a prova já pede foco estratégico");
  }

  if (!parts.length) {
    return "Conteúdo em faixa de manutenção no momento.";
  }

  return `Prioridade porque ${parts.join(", ")}.`;
}

export default function VetPrioritiesPage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState<VetProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([]);

  useEffect(() => {
    async function loadData() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      const { data: profileData, error: profileError } = await supabase
        .from("user_vet_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profileError) {
        console.error(profileError);
        setError("Não foi possível carregar o objetivo do VET.");
        setLoading(false);
        return;
      }

      const currentProfile = (profileData as VetProfileRow | null) ?? null;
      setProfile(currentProfile);

      if (!currentProfile) {
        setLoading(false);
        return;
      }

      const { data: attemptsData, error: attemptsError } = await supabase
        .from("user_question_attempts")
        .select("*")
        .eq("user_id", user.id)
        .order("answered_at", { ascending: false });

      if (attemptsError) {
        console.error(attemptsError);
        setError("Não foi possível carregar suas tentativas.");
        setLoading(false);
        return;
      }

      const { data: weightsData, error: weightsError } = await supabase
        .from("vet_exam_content_weights")
        .select("*")
        .eq("exam", currentProfile.target_exam);

      if (weightsError) {
        console.error(weightsError);
        setError("Não foi possível carregar os pesos da prova.");
        setLoading(false);
        return;
      }

      setAttempts((attemptsData as AttemptRow[]) ?? []);
      setWeights((weightsData as WeightRow[]) ?? []);
      setLoading(false);
    }

    if (!authLoading) {
      loadData();
    }
  }, [user?.id, authLoading]);

  const filteredAttempts = useMemo(() => {
    if (!profile) return [];

    let result = [...attempts];

    if (profile.focus_subject !== "todas") {
      result = result.filter(
        (attempt) => normalizeText(attempt.subject) === normalizeText(profile.focus_subject)
      );
    }

    return result;
  }, [attempts, profile]);

  const priorities = useMemo(() => {
    if (!profile) return [];

    const contentMap = new Map<
      string,
      { total: number; correct: number; wrong: number }
    >();

    for (const attempt of filteredAttempts) {
      const conteudo = normalizeText(attempt.conteudo);
      if (!conteudo) continue;

      const current = contentMap.get(conteudo) ?? { total: 0, correct: 0, wrong: 0 };
      current.total += 1;
      if (attempt.is_correct) current.correct += 1;
      else current.wrong += 1;
      contentMap.set(conteudo, current);
    }

    const filteredWeights = weights.filter((row) => {
      if (profile.focus_subject === "todas") return true;
      return normalizeText(row.subject) === normalizeText(profile.focus_subject);
    });

    const allContents = new Set<string>();

    filteredWeights.forEach((row) => {
      allContents.add(normalizeText(row.conteudo));
    });

    contentMap.forEach((_, conteudo) => {
      allContents.add(conteudo);
    });

    const urgencyTimeScore = getUrgencyTimeScore(profile.months_until_exam);

    const rows: PriorityItem[] = Array.from(allContents)
      .filter(Boolean)
      .map((conteudo) => {
        const stats = contentMap.get(conteudo) ?? {
          total: 0,
          correct: 0,
          wrong: 0,
        };

        const accuracy = stats.total ? (stats.correct / stats.total) * 100 : 0;

        const matchedWeight = filteredWeights.find(
          (row) => normalizeText(row.conteudo) === conteudo
        );

        const weight = matchedWeight?.weight ?? 3;
        const weaknessScore = getWeaknessScore(accuracy, stats.total);
        const wrongVolumeScore = getWrongVolumeScore(stats.wrong);
        const noAttemptPenalty = getNoAttemptPenalty(stats.total, weight);

        const priorityScore =
          weight +
          weaknessScore +
          urgencyTimeScore +
          wrongVolumeScore +
          noAttemptPenalty;

        const priorityLevel = getPriorityLevel(priorityScore);

        return {
          conteudo,
          total: stats.total,
          correct: stats.correct,
          wrong: stats.wrong,
          accuracy,
          weight,
          weaknessScore,
          urgencyTimeScore,
          wrongVolumeScore,
          noAttemptPenalty,
          priorityScore,
          priorityLevel,
          reason: buildReason({
            weight,
            accuracy,
            wrong: stats.wrong,
            monthsUntilExam: profile.months_until_exam,
            total: stats.total,
          }),
          hasAttempts: stats.total > 0,
        };
      })
      .sort(
        (a, b) =>
          b.priorityScore - a.priorityScore ||
          Number(a.hasAttempts) - Number(b.hasAttempts) ||
          a.accuracy - b.accuracy ||
          b.total - a.total
      );

    return rows;
  }, [filteredAttempts, profile, weights]);

  const highPriority = priorities.filter((item) => item.priorityLevel === "alta");
  const mediumPriority = priorities.filter((item) => item.priorityLevel === "media");
  const maintenancePriority = priorities.filter((item) => item.priorityLevel === "manutencao");

  function PriorityCard({
    title,
    icon: Icon,
    items,
    emptyText,
    tone,
  }: {
    title: string;
    icon: any;
    items: PriorityItem[];
    emptyText: string;
    tone: "red" | "yellow" | "green";
  }) {
    const toneClasses =
      tone === "red"
        ? "border-red-200 bg-red-50 text-red-700"
        : tone === "yellow"
        ? "border-yellow-200 bg-yellow-50 text-yellow-700"
        : "border-green-200 bg-green-50 text-green-700";

    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon
            className={`w-5 h-5 ${
              tone === "red"
                ? "text-red-500"
                : tone === "yellow"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          />
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>

        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={`${title}-${item.conteudo}`}
                className={`rounded-2xl border p-4 ${toneClasses}`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="font-bold text-slate-900">
                      #{index + 1} {prettify(item.conteudo)}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {item.hasAttempts
                        ? `${item.correct} acertos • ${item.wrong} erros • ${item.total} tentativas`
                        : "Ainda não treinado"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">
                      Score {item.priorityScore}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.hasAttempts
                        ? `${item.accuracy.toFixed(0)}% de acerto`
                        : "Sem histórico ainda"}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-2 text-sm text-slate-700 mb-3">
                  <div>
                    Peso: <span className="font-semibold">{item.weight}</span>
                  </div>
                  <div>
                    Fraqueza: <span className="font-semibold">{item.weaknessScore}</span>
                  </div>
                  <div>
                    Urgência: <span className="font-semibold">{item.urgencyTimeScore}</span>
                  </div>
                  <div>
                    Sem treino:{" "}
                    <span className="font-semibold">{item.noAttemptPenalty}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-700">{item.reason}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">{emptyText}</p>
        )}
      </Card>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/vet">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Prioridades do VET</h1>
            <p className="text-sm text-slate-500">
              O que atacar primeiro, depois e o que manter
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando prioridades...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700">{error}</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700">Você precisa estar logado para usar o VET.</p>
          </Card>
        ) : !profile ? (
          <Card className="p-8">
            <p className="text-slate-700 mb-4">
              Antes de usar as prioridades, você precisa configurar seu objetivo do VET.
            </p>
            <Link href="/vet/objetivo">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Configurar objetivo
              </Button>
            </Link>
          </Card>
        ) : (
          <>
            <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
                Fila estratégica
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Prioridades para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                Agora o VET considera também conteúdos importantes da prova que ainda não foram treinados.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Alta prioridade</p>
                <p className="text-3xl font-bold text-red-600">{highPriority.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Média prioridade</p>
                <p className="text-3xl font-bold text-yellow-600">{mediumPriority.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Manutenção</p>
                <p className="text-3xl font-bold text-green-600">{maintenancePriority.length}</p>
              </Card>
            </div>

            <PriorityCard
              title="Alta prioridade"
              icon={Flame}
              items={highPriority}
              emptyText="Nenhum conteúdo entrou em alta prioridade ainda."
              tone="red"
            />

            <PriorityCard
              title="Média prioridade"
              icon={CircleDashed}
              items={mediumPriority}
              emptyText="Nenhum conteúdo entrou em média prioridade ainda."
              tone="yellow"
            />

            <PriorityCard
              title="Manutenção"
              icon={Shield}
              items={maintenancePriority}
              emptyText="Nenhum conteúdo entrou em manutenção ainda."
              tone="green"
            />

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Como ler isso</h2>
              </div>

              <div className="space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">Alta prioridade:</span> conteúdos que mais podem mudar seu resultado agora, incluindo conteúdos importantes ainda não treinados.
                </p>
                <p>
                  <span className="font-semibold">Média prioridade:</span> conteúdos relevantes que precisam subir, mas não são o gargalo máximo no momento.
                </p>
                <p>
                  <span className="font-semibold">Manutenção:</span> conteúdos que devem continuar no radar sem roubar o foco principal.
                </p>
              </div>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
