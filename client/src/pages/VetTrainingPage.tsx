import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  BrainCircuit,
  Flame,
  Shield,
  Layers3,
  Clock3,
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

type TrainingItem = {
  conteudo: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  weight: number;
  priorityScore: number;
  block: "ataque" | "consolidacao" | "manutencao";
  reason: string;
};

function normalizeText(value?: string | null) {
  return (value || "").trim().toLowerCase();
}

function prettify(value?: string | null) {
  const text = (value || "").trim();
  if (!text) return "Não informado";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getWeaknessScore(accuracy: number) {
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

function getTrainingBlock(score: number): "ataque" | "consolidacao" | "manutencao" {
  if (score >= 15) return "ataque";
  if (score >= 9) return "consolidacao";
  return "manutencao";
}

function buildReason(
  block: "ataque" | "consolidacao" | "manutencao",
  weight: number,
  accuracy: number,
  wrong: number
) {
  if (block === "ataque") {
    return `Entrou em ataque porque tem peso ${
      weight >= 8 ? "alto" : "relevante"
    } na prova, seu aproveitamento está em ${accuracy.toFixed(0)}% e há ${wrong} erro(s) acumulado(s).`;
  }

  if (block === "consolidacao") {
    return `Entrou em consolidação porque ainda precisa subir consistência, mas não é seu gargalo máximo agora.`;
  }

  return `Entrou em manutenção porque, no momento, não precisa roubar foco dos conteúdos mais urgentes.`;
}

export default function VetTrainingPage() {
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

  const trainingItems = useMemo(() => {
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

    const urgencyTimeScore = getUrgencyTimeScore(profile.months_until_exam);

    return Array.from(contentMap.entries())
      .map(([conteudo, value]) => {
        const accuracy = value.total ? (value.correct / value.total) * 100 : 0;

        const matchedWeight = weights.find((row) => {
          const sameSubject =
            profile.focus_subject === "todas" ||
            normalizeText(row.subject) === normalizeText(profile.focus_subject);

          return sameSubject && normalizeText(row.conteudo) === conteudo;
        });

        const weight = matchedWeight?.weight ?? 3;
        const weaknessScore = getWeaknessScore(accuracy);
        const wrongVolumeScore = getWrongVolumeScore(value.wrong);
        const priorityScore = weight + weaknessScore + urgencyTimeScore + wrongVolumeScore;
        const block = getTrainingBlock(priorityScore);

        return {
          conteudo,
          total: value.total,
          correct: value.correct,
          wrong: value.wrong,
          accuracy,
          weight,
          priorityScore,
          block,
          reason: buildReason(block, weight, accuracy, value.wrong),
        } as TrainingItem;
      })
      .sort(
        (a, b) =>
          b.priorityScore - a.priorityScore ||
          a.accuracy - b.accuracy ||
          b.total - a.total
      );
  }, [filteredAttempts, profile, weights]);

  const ataque = trainingItems.filter((item) => item.block === "ataque");
  const consolidacao = trainingItems.filter((item) => item.block === "consolidacao");
  const manutencao = trainingItems.filter((item) => item.block === "manutencao");

  const weeklyStrategy = useMemo(() => {
    if (!profile) {
      return {
        attackPercent: 60,
        consolidationPercent: 30,
        maintenancePercent: 10,
      };
    }

    if (profile.months_until_exam <= 2) {
      return { attackPercent: 70, consolidationPercent: 20, maintenancePercent: 10 };
    }

    if (profile.months_until_exam <= 4) {
      return { attackPercent: 60, consolidationPercent: 30, maintenancePercent: 10 };
    }

    if (profile.months_until_exam <= 6) {
      return { attackPercent: 50, consolidationPercent: 35, maintenancePercent: 15 };
    }

    return { attackPercent: 40, consolidationPercent: 40, maintenancePercent: 20 };
  }, [profile]);

  function BlockCard({
    title,
    icon: Icon,
    items,
    emptyText,
    tone,
  }: {
    title: string;
    icon: any;
    items: TrainingItem[];
    emptyText: string;
    tone: "red" | "yellow" | "green";
  }) {
    const accent =
      tone === "red"
        ? "text-red-500"
        : tone === "yellow"
        ? "text-yellow-500"
        : "text-green-500";

    const bg =
      tone === "red"
        ? "border-red-200 bg-red-50"
        : tone === "yellow"
        ? "border-yellow-200 bg-yellow-50"
        : "border-green-200 bg-green-50";

    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className={`w-5 h-5 ${accent}`} />
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>

        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={`${title}-${item.conteudo}`} className={`rounded-2xl border p-4 ${bg}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="font-bold text-slate-900">
                      #{index + 1} {prettify(item.conteudo)}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {item.correct} acertos • {item.wrong} erros • {item.total} tentativas
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">Score {item.priorityScore}</p>
                    <p className="text-xs text-slate-500">{item.accuracy.toFixed(0)}% de acerto</p>
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
            <h1 className="text-2xl font-bold text-slate-900">Treino recomendado</h1>
            <p className="text-sm text-slate-500">Transformando diagnóstico em ação</p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando treino recomendado...</p>
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
              Antes de usar o treino recomendado, você precisa configurar seu objetivo do VET.
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
                Direção prática
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Treino recomendado para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                O VET está separando seu treino em ataque, consolidação e manutenção para usar melhor
                seu tempo disponível.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Ataque imediato</p>
                <p className="text-3xl font-bold text-red-600">{ataque.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Consolidação</p>
                <p className="text-3xl font-bold text-yellow-600">{consolidacao.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Manutenção</p>
                <p className="text-3xl font-bold text-green-600">{manutencao.length}</p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock3 className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Estratégia semanal sugerida</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm text-red-700 font-semibold mb-2">Ataque</p>
                  <p className="text-3xl font-bold text-red-600">
                    {weeklyStrategy.attackPercent}%
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Maior parte do tempo em conteúdos críticos.
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-700 font-semibold mb-2">Consolidação</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {weeklyStrategy.consolidationPercent}%
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Subir conteúdos relevantes sem perder ritmo.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="text-sm text-green-700 font-semibold mb-2">Manutenção</p>
                  <p className="text-3xl font-bold text-green-600">
                    {weeklyStrategy.maintenancePercent}%
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Não abandonar conteúdos que já estão mais estáveis.
                  </p>
                </div>
              </div>
            </Card>

            <BlockCard
              title="Ataque imediato"
              icon={Flame}
              items={ataque}
              emptyText="Nenhum conteúdo entrou em ataque imediato ainda."
              tone="red"
            />

            <BlockCard
              title="Consolidação"
              icon={Layers3}
              items={consolidacao}
              emptyText="Nenhum conteúdo entrou em consolidação ainda."
              tone="yellow"
            />

            <BlockCard
              title="Manutenção"
              icon={Shield}
              items={manutencao}
              emptyText="Nenhum conteúdo entrou em manutenção ainda."
              tone="green"
            />

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Leitura do treino</h2>
              </div>

              <div className="space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">Ataque imediato:</span> é o bloco que mais deve
                  receber seu tempo agora.
                </p>
                <p>
                  <span className="font-semibold">Consolidação:</span> vem logo depois, para aumentar
                  consistência sem tirar foco do que é urgente.
                </p>
                <p>
                  <span className="font-semibold">Manutenção:</span> serve para não deixar conteúdos
                  menos urgentes sumirem totalmente do seu radar.
                </p>
                <p>
                  <span className="font-semibold">Próximo passo natural:</span> depois disso, o VET
                  pode evoluir para montar listas reais de questões por bloco.
                </p>
              </div>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
