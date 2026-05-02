import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  BrainCircuit,
  Flame,
  Layers3,
  Shield,
  Target,
  BookOpen,
  Clock3,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { getQuestions } from "@/services/questions.service";
import type { Question } from "@/types/question";

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

type TrainingBlock = "ataque" | "consolidacao" | "manutencao";

type RecommendedContent = {
  conteudo: string;
  score: number;
  block: TrainingBlock;
  hasAttempts: boolean;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  weight: number;
};

function normalizeText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatSubject(subject?: string | null) {
  const normalized = normalizeText(subject);

  if (normalized === "fisica") return "Física";
  if (normalized === "matematica") return "Matemática";
  if (normalized === "quimica") return "Química";
  if (normalized === "todas") return "Todas";

  return subject || "Todas";
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

function getTrainingBlock(score: number): TrainingBlock {
  if (score >= 15) return "ataque";
  if (score >= 9) return "consolidacao";
  return "manutencao";
}

function getBlockLabel(block: TrainingBlock) {
  if (block === "ataque") return "Ataque";
  if (block === "consolidacao") return "Consolidação";
  return "Manutenção";
}

function getBlockDescription(block: TrainingBlock) {
  if (block === "ataque") {
    return "Conteúdos que precisam de ação imediata, seja por erro, peso alto ou falta de treino.";
  }

  if (block === "consolidacao") {
    return "Conteúdos intermediários, que já aparecem no seu histórico, mas ainda precisam firmar.";
  }

  return "Conteúdos que devem continuar aparecendo para revisão e manutenção.";
}

function getBlockIcon(block: TrainingBlock) {
  if (block === "ataque") return Flame;
  if (block === "consolidacao") return Layers3;
  return Shield;
}

function getBlockColor(block: TrainingBlock) {
  if (block === "ataque") {
    return {
      card: "border-red-200 bg-red-50",
      icon: "bg-red-100 text-red-700",
      badge: "bg-red-600 text-white",
      button: "bg-red-600 hover:bg-red-700 text-white",
      text: "text-red-700",
    };
  }

  if (block === "consolidacao") {
    return {
      card: "border-yellow-200 bg-yellow-50",
      icon: "bg-yellow-100 text-yellow-700",
      badge: "bg-yellow-500 text-white",
      button: "bg-yellow-500 hover:bg-yellow-600 text-white",
      text: "text-yellow-700",
    };
  }

  return {
    card: "border-emerald-200 bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-600 text-white",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
    text: "text-emerald-700",
  };
}

function getBlockLimit(block: TrainingBlock) {
  if (block === "ataque") return 12;
  if (block === "consolidacao") return 8;
  return 5;
}

function getDailyQuestionTarget(block: TrainingBlock) {
  if (block === "ataque") return 8;
  if (block === "consolidacao") return 6;
  return 4;
}

function getQuestionTopics(question: Question) {
  if (Array.isArray(question.topics) && question.topics.length > 0) {
    return question.topics.filter(Boolean);
  }

  return question.topic ? [question.topic] : [];
}

function matchesExamInstitution(question: Question, targetExam: string) {
  return normalizeText(question.institution) === normalizeText(targetExam);
}

function getQuestionDifficultyScore(question: Question, block: TrainingBlock) {
  const difficulty = normalizeText(question.difficulty);

  if (block === "ataque") {
    if (difficulty === "medio") return 3;
    if (difficulty === "dificil") return 2;
    if (difficulty === "facil") return 1;
    return 0;
  }

  if (block === "consolidacao") {
    if (difficulty === "medio") return 3;
    if (difficulty === "facil") return 2;
    if (difficulty === "dificil") return 1;
    return 0;
  }

  if (difficulty === "facil") return 3;
  if (difficulty === "medio") return 2;
  if (difficulty === "dificil") return 1;
  return 0;
}

function getQuestionPriorityScore(
  question: Question,
  block: TrainingBlock,
  contents: string[],
  targetExam: string,
  attemptedQuestionIds: Set<string>
) {
  let score = 0;

  const contentIndex = getQuestionTopics(question)
    .map((topic) => normalizeText(topic))
    .map((topic) => contents.indexOf(topic))
    .filter((index) => index !== -1)
    .sort((a, b) => a - b)[0];

  if (contentIndex !== undefined) {
    score += Math.max(20 - contentIndex * 3, 5);
  }

  if (matchesExamInstitution(question, targetExam)) {
    score += 30;
  }

  if (!attemptedQuestionIds.has(question.id)) {
    score += 40;
  } else {
    score -= 10;
  }

  score += getQuestionDifficultyScore(question, block);

  const year = Number(question.year);

  if (!Number.isNaN(year)) {
    score += Math.min(Math.max(year - 2015, 0), 10);
  }

  return score;
}

function buildBankUrl(
  subject: string,
  institution: string,
  block: string,
  topics: string[]
) {
  const params = new URLSearchParams();

  if (subject && subject !== "todas") {
    params.set("subject", subject);
  }

  if (institution) {
    params.set("institution", institution);
  }

  if (block) {
    params.set("block", block);
  }

  if (topics.length > 0) {
    params.set("topics", topics.join(","));
  }

  return `/banco-de-questoes?${params.toString()}`;
}

function estimateMinutes(questionCount: number, block: TrainingBlock) {
  const minutesPerQuestion =
    block === "ataque" ? 7 : block === "consolidacao" ? 6 : 5;

  return questionCount * minutesPerQuestion;
}

function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`;

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (rest === 0) return `${hours}h`;

  return `${hours}h ${rest}min`;
}

export default function VetPlanPage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState<VetProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<TrainingBlock>("ataque");

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

      const loadedQuestions = await getQuestions();

      setAttempts((attemptsData as AttemptRow[]) ?? []);
      setWeights((weightsData as WeightRow[]) ?? []);
      setQuestions(loadedQuestions ?? []);
      setLoading(false);
    }

    if (!authLoading) {
      loadData();
    }
  }, [user?.id, authLoading]);

  const attemptedQuestionIds = useMemo(() => {
    return new Set(attempts.map((attempt) => attempt.question_id));
  }, [attempts]);

  const filteredAttempts = useMemo(() => {
    if (!profile) return [];

    let result = [...attempts];

    if (profile.focus_subject !== "todas") {
      result = result.filter(
        (attempt) =>
          normalizeText(attempt.subject) === normalizeText(profile.focus_subject)
      );
    }

    return result;
  }, [attempts, profile]);

  const recommendedContents = useMemo(() => {
    if (!profile) return [];

    const contentMap = new Map<
      string,
      { total: number; correct: number; wrong: number }
    >();

    for (const attempt of filteredAttempts) {
      const conteudo = normalizeText(attempt.conteudo);

      if (!conteudo) continue;

      const current = contentMap.get(conteudo) ?? {
        total: 0,
        correct: 0,
        wrong: 0,
      };

      current.total += 1;

      if (attempt.is_correct) {
        current.correct += 1;
      } else {
        current.wrong += 1;
      }

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

    return Array.from(allContents)
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

        const score =
          weight +
          weaknessScore +
          urgencyTimeScore +
          wrongVolumeScore +
          noAttemptPenalty;

        return {
          conteudo,
          score,
          block: getTrainingBlock(score),
          hasAttempts: stats.total > 0,
          total: stats.total,
          correct: stats.correct,
          wrong: stats.wrong,
          accuracy,
          weight,
        } as RecommendedContent;
      })
      .sort(
        (a, b) =>
          b.score - a.score || Number(a.hasAttempts) - Number(b.hasAttempts)
      );
  }, [filteredAttempts, profile, weights]);

  const attackContents = useMemo(
    () =>
      recommendedContents
        .filter((item) => item.block === "ataque")
        .map((item) => item.conteudo),
    [recommendedContents]
  );

  const consolidationContents = useMemo(
    () =>
      recommendedContents
        .filter((item) => item.block === "consolidacao")
        .map((item) => item.conteudo),
    [recommendedContents]
  );

  const maintenanceContents = useMemo(
    () =>
      recommendedContents
        .filter((item) => item.block === "manutencao")
        .map((item) => item.conteudo),
    [recommendedContents]
  );

  function buildRecommendedQuestions(block: TrainingBlock) {
    if (!profile) return [];

    const contents =
      block === "ataque"
        ? attackContents
        : block === "consolidacao"
          ? consolidationContents
          : maintenanceContents;

    if (!contents.length) return [];

    let base = [...questions];

    if (profile.focus_subject !== "todas") {
      base = base.filter(
        (question) =>
          normalizeText(question.subject) === normalizeText(profile.focus_subject)
      );
    }

    base = base.filter((question) =>
      getQuestionTopics(question).some((topic) =>
        contents.includes(normalizeText(topic))
      )
    );

    const sorted = [...base].sort((a, b) => {
      const scoreA = getQuestionPriorityScore(
        a,
        block,
        contents,
        profile.target_exam,
        attemptedQuestionIds
      );

      const scoreB = getQuestionPriorityScore(
        b,
        block,
        contents,
        profile.target_exam,
        attemptedQuestionIds
      );

      return scoreB - scoreA;
    });

    const limit = getBlockLimit(block);

    const unseen = sorted.filter(
      (question) => !attemptedQuestionIds.has(question.id)
    );

    const seen = sorted.filter((question) =>
      attemptedQuestionIds.has(question.id)
    );

    return [...unseen, ...seen].slice(0, limit);
  }

  const attackQuestions = useMemo(
    () => buildRecommendedQuestions("ataque"),
    [questions, profile, attackContents, attemptedQuestionIds]
  );

  const consolidationQuestions = useMemo(
    () => buildRecommendedQuestions("consolidacao"),
    [questions, profile, consolidationContents, attemptedQuestionIds]
  );

  const maintenanceQuestions = useMemo(
    () => buildRecommendedQuestions("manutencao"),
    [questions, profile, maintenanceContents, attemptedQuestionIds]
  );

  const questionsByBlock = {
    ataque: attackQuestions,
    consolidacao: consolidationQuestions,
    manutencao: maintenanceQuestions,
  };

  const contentsByBlock = {
    ataque: attackContents,
    consolidacao: consolidationContents,
    manutencao: maintenanceContents,
  };

  const visibleQuestions = questionsByBlock[selectedBlock];
  const visibleContents = contentsByBlock[selectedBlock];

  const visibleBankUrl = buildBankUrl(
    profile?.focus_subject ?? "todas",
    profile?.target_exam ?? "",
    selectedBlock,
    visibleContents
  );

  const mainPriority = recommendedContents[0] ?? null;
  const totalAttempts = filteredAttempts.length;
  const totalCorrect = filteredAttempts.filter((attempt) => attempt.is_correct).length;
  const generalAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;

  const selectedColor = getBlockColor(selectedBlock);
  const SelectedIcon = getBlockIcon(selectedBlock);

  const todayTarget = getDailyQuestionTarget(selectedBlock);
  const estimatedTime = estimateMinutes(todayTarget, selectedBlock);

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
            <h1 className="text-2xl font-bold text-slate-900">Plano VET</h1>
            <p className="text-sm text-slate-500">
              Prioridades, treino recomendado e questões em um só lugar
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando Plano VET...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
              <p className="text-red-700">{error}</p>
            </div>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700">Você precisa estar logado para usar o VET.</p>
          </Card>
        ) : !profile ? (
          <Card className="p-8">
            <p className="text-slate-700 mb-4">
              Antes de montar seu Plano VET, você precisa configurar seu objetivo.
            </p>

            <Link href="/vet/objetivo">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Configurar objetivo
              </Button>
            </Link>
          </Card>
        ) : (
          <>
            <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40"></div>

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
                  Central estratégica
                </p>

                <h2 className="text-3xl font-bold mb-3">Seu Plano VET</h2>

                <p className="text-emerald-50 leading-relaxed max-w-3xl">
                  O VET analisou sua prova-alvo, seus erros, conteúdos sem treino e pesos da prova
                  para montar uma sequência prática: prioridade, treino e questões.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mt-8">
                  <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                    <p className="text-sm text-emerald-100 mb-1">Prova-alvo</p>
                    <p className="text-xl font-bold">{profile.target_exam}</p>
                  </div>

                  <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                    <p className="text-sm text-emerald-100 mb-1">Foco</p>
                    <p className="text-xl font-bold">
                      {formatSubject(profile.focus_subject)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                    <p className="text-sm text-emerald-100 mb-1">Tempo até a prova</p>
                    <p className="text-xl font-bold">
                      {profile.months_until_exam} meses
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                    <p className="text-sm text-emerald-100 mb-1">Taxa geral</p>
                    <p className="text-xl font-bold">
                      {totalAttempts > 0 ? `${generalAccuracy.toFixed(0)}%` : "Sem dados"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid xl:grid-cols-3 gap-4">
              {(["ataque", "consolidacao", "manutencao"] as TrainingBlock[]).map(
                (block) => {
                  const Icon = getBlockIcon(block);
                  const color = getBlockColor(block);
                  const contents = recommendedContents.filter(
                    (item) => item.block === block
                  );
                  const topContents = contents.slice(0, 4);

                  return (
                    <Card
                      key={block}
                      className={`p-5 border ${color.card}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center ${color.icon}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              {getBlockLabel(block)}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {contents.length} conteúdo(s)
                            </p>
                          </div>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${color.badge}`}
                        >
                          {questionsByBlock[block].length} questões
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 mb-4">
                        {getBlockDescription(block)}
                      </p>

                      {topContents.length > 0 ? (
                        <div className="space-y-2 mb-5">
                          {topContents.map((item) => (
                            <div
                              key={item.conteudo}
                              className="rounded-xl bg-white border border-white/80 p-3"
                            >
                              <div className="flex justify-between gap-3 mb-1">
                                <p className="font-bold text-slate-900">
                                  {item.conteudo}
                                </p>
                                <p className={`text-sm font-bold ${color.text}`}>
                                  {item.score} pts
                                </p>
                              </div>

                              <p className="text-xs text-slate-500">
                                {item.total > 0
                                  ? `${item.accuracy.toFixed(0)}% de acerto • ${item.wrong} erro(s)`
                                  : "Ainda sem tentativas"}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-slate-500 mb-5">
                          Nenhum conteúdo classificado neste bloco por enquanto.
                        </p>
                      )}

                      <Button
                        onClick={() => setSelectedBlock(block)}
                        className={`w-full rounded-2xl ${color.button}`}
                      >
                        Ver treino de {getBlockLabel(block).toLowerCase()}
                      </Button>
                    </Card>
                  );
                }
              )}
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              <Card className="p-6 bg-white border-slate-200 lg:col-span-2">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Prioridade principal
                      </h3>
                      <p className="text-sm text-slate-500">
                        O conteúdo mais urgente do seu Plano VET
                      </p>
                    </div>
                  </div>
                </div>

                {mainPriority ? (
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Conteúdo</p>
                        <h4 className="text-3xl font-bold text-slate-900">
                          {mainPriority.conteudo}
                        </h4>
                      </div>

                      <span className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-bold self-start">
                        {getBlockLabel(mainPriority.block)}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-3">
                      <div className="rounded-2xl bg-white border border-slate-200 p-4">
                        <p className="text-sm text-slate-500 mb-1">Score VET</p>
                        <p className="text-2xl font-bold text-slate-900">
                          {mainPriority.score}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-4">
                        <p className="text-sm text-slate-500 mb-1">Peso na prova</p>
                        <p className="text-2xl font-bold text-slate-900">
                          {mainPriority.weight}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-4">
                        <p className="text-sm text-slate-500 mb-1">Taxa</p>
                        <p className="text-2xl font-bold text-slate-900">
                          {mainPriority.total > 0
                            ? `${mainPriority.accuracy.toFixed(0)}%`
                            : "—"}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white border border-slate-200 p-4">
                        <p className="text-sm text-slate-500 mb-1">Tentativas</p>
                        <p className="text-2xl font-bold text-slate-900">
                          {mainPriority.total}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-500">
                    Ainda não há dados suficientes para montar uma prioridade.
                  </p>
                )}
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Clock3 className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Treino de hoje
                    </h3>
                    <p className="text-sm text-slate-500">
                      Recomendação prática
                    </p>
                  </div>
                </div>

                <div className={`rounded-3xl border p-5 ${selectedColor.card}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center ${selectedColor.icon}`}
                    >
                      <SelectedIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Bloco selecionado</p>
                      <p className="font-bold text-slate-900">
                        {getBlockLabel(selectedBlock)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white border border-white/80 p-4">
                      <p className="text-sm text-slate-500 mb-1">Meta</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {todayTarget} questões
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-white/80 p-4">
                      <p className="text-sm text-slate-500 mb-1">Tempo estimado</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {formatMinutes(estimatedTime)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-white/80 p-4">
                      <p className="text-sm text-slate-500 mb-1">Questões disponíveis</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {visibleQuestions.length}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white border-slate-200">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${selectedColor.icon}`}
                  >
                    <SelectedIcon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Questões recomendadas de {getBlockLabel(selectedBlock).toLowerCase()}
                    </h3>
                    <p className="text-sm text-slate-500">
                      O VET escolheu questões reais com base nas prioridades do bloco.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={visibleBankUrl}>
                    <Button variant="outline" className="rounded-2xl">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Abrir no banco
                    </Button>
                  </Link>

                  <Link href="/vet/simulado">
                    <Button className="rounded-2xl bg-slate-900 hover:bg-slate-800 text-white">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Ir para simulado
                    </Button>
                  </Link>
                </div>
              </div>

              {visibleContents.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-6">
                  {visibleContents.slice(0, 10).map((content) => (
                    <span
                      key={content}
                      className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 text-sm font-semibold"
                    >
                      {content}
                    </span>
                  ))}
                </div>
              ) : null}

              {visibleQuestions.length > 0 ? (
                <InteractiveQuiz
                  key={`${selectedBlock}-${visibleQuestions
                    .map((question) => question.id)
                    .join("-")}`}
                  questions={visibleQuestions}
                />
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Sem questões suficientes neste bloco
                  </h4>
                  <p className="text-slate-500">
                    Cadastre mais questões ou ajuste os pesos dos conteúdos no ADM do VET.
                  </p>
                </div>
              )}
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Como usar este plano
                  </h3>
                  <p className="text-sm text-slate-500">
                    A ordem ideal para estudar sem ficar rodando em círculo.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    1. Veja as prioridades
                  </p>
                  <p className="text-sm text-slate-600">
                    Comece olhando os conteúdos em ataque, consolidação e manutenção.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    2. Faça o treino do bloco
                  </p>
                  <p className="text-sm text-slate-600">
                    Escolha o bloco mais importante e resolva as questões recomendadas.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    3. Use o simulado
                  </p>
                  <p className="text-sm text-slate-600">
                    Depois do treino, faça um simulado para medir se a fraqueza diminuiu.
                  </p>
                </div>
              </div>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
