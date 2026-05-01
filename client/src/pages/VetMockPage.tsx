import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  BrainCircuit,
  Flame,
  Layers3,
  Shield,
  Shuffle,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  InteractiveQuiz,
  type QuizCompletionData,
} from "@/components/InteractiveQuiz";
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

type RecommendedContent = {
  conteudo: string;
  score: number;
  block: "ataque" | "consolidacao" | "manutencao";
  hasAttempts: boolean;
};

type SimuladoMode = "ataque" | "consolidacao" | "manutencao" | "misto";

function normalizeText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
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

function getTrainingBlock(score: number): "ataque" | "consolidacao" | "manutencao" {
  if (score >= 15) return "ataque";
  if (score >= 9) return "consolidacao";
  return "manutencao";
}

function matchesExamInstitution(question: Question, targetExam: string) {
  return normalizeText(question.institution) === normalizeText(targetExam);
}

function getQuestionDifficultyScore(
  question: Question,
  block: "ataque" | "consolidacao" | "manutencao"
) {
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

function getQuestionTopics(question: Question) {
  if (Array.isArray(question.topics) && question.topics.length > 0) {
    return question.topics.filter(Boolean);
  }

  return question.topic ? [question.topic] : [];
}

function getQuestionPriorityScore(
  question: Question,
  block: "ataque" | "consolidacao" | "manutencao",
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

function uniqueById(items: Question[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.id)) return false;

    seen.add(item.id);
    return true;
  });
}

export default function VetMockPage() {
  const { user, loading: authLoading } = useSupabaseAuth();
  const [, setLocation] = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState<VetProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [mode, setMode] = useState<SimuladoMode>("misto");

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

  function buildQuestionsForBlock(
    block: "ataque" | "consolidacao" | "manutencao",
    limit: number
  ) {
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

    const unseen = sorted.filter(
      (question) => !attemptedQuestionIds.has(question.id)
    );

    const seen = sorted.filter((question) =>
      attemptedQuestionIds.has(question.id)
    );

    return [...unseen, ...seen].slice(0, limit);
  }

  const ataqueQuestions = useMemo(
    () => buildQuestionsForBlock("ataque", 10),
    [questions, profile, attackContents, attemptedQuestionIds]
  );

  const consolidacaoQuestions = useMemo(
    () => buildQuestionsForBlock("consolidacao", 10),
    [questions, profile, consolidationContents, attemptedQuestionIds]
  );

  const manutencaoQuestions = useMemo(
    () => buildQuestionsForBlock("manutencao", 10),
    [questions, profile, maintenanceContents, attemptedQuestionIds]
  );

  const mistoQuestions = useMemo(() => {
    const mixed = uniqueById([
      ...buildQuestionsForBlock("ataque", 5),
      ...buildQuestionsForBlock("consolidacao", 4),
      ...buildQuestionsForBlock("manutencao", 3),
    ]);

    return mixed.slice(0, 12);
  }, [
    questions,
    profile,
    attackContents,
    consolidationContents,
    maintenanceContents,
    attemptedQuestionIds,
  ]);

  const currentQuestions =
    mode === "ataque"
      ? ataqueQuestions
      : mode === "consolidacao"
        ? consolidacaoQuestions
        : mode === "manutencao"
          ? manutencaoQuestions
          : mistoQuestions;

  const modeLabel =
    mode === "ataque"
      ? "Simulado de ataque"
      : mode === "consolidacao"
        ? "Simulado de consolidação"
        : mode === "manutencao"
          ? "Simulado de manutenção"
          : "Simulado misto VET";

  function handleSimuladoComplete(data: QuizCompletionData) {
    if (!profile) return;

    const payload = {
      mode,
      targetExam: profile.target_exam,
      focusSubject: profile.focus_subject,
      totalQuestions: data.totalQuestions,
      totalAnswered: data.totalAnswered,
      score: data.score,
      accuracy: data.accuracy,
      wrongTopics: data.wrongTopics,
      wrongDifficulties: data.wrongDifficulties,
    };

    window.sessionStorage.setItem("vet_mock_result", JSON.stringify(payload));
    setLocation("/vet/simulado/resultado");
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
            <h1 className="text-2xl font-bold text-slate-900">Simulado VET</h1>
            <p className="text-sm text-slate-500">
              Treino estratégico em formato de simulado
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando simulado...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700">{error}</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700">
              Você precisa estar logado para usar o VET.
            </p>
          </Card>
        ) : !profile ? (
          <Card className="p-8">
            <p className="text-slate-700 mb-4">
              Antes de usar o simulado, você precisa configurar seu objetivo do VET.
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
                Execução estratégica
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Simulado para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                O VET monta um treino em formato de simulado com base nas suas prioridades,
                prova-alvo e conteúdos ainda não treinados.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Escolha o modo
                  </h2>
                  <p className="text-sm text-slate-500">
                    Cada modo monta um simulado com foco diferente.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setMode("ataque")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    mode === "ataque"
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Flame className="w-4 h-4 inline mr-2" />
                  Ataque
                </button>

                <button
                  onClick={() => setMode("consolidacao")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    mode === "consolidacao"
                      ? "bg-yellow-500 border-yellow-500 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Layers3 className="w-4 h-4 inline mr-2" />
                  Consolidação
                </button>

                <button
                  onClick={() => setMode("manutencao")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    mode === "manutencao"
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Manutenção
                </button>

                <button
                  onClick={() => setMode("misto")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    mode === "misto"
                      ? "bg-slate-900 border-slate-900 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Shuffle className="w-4 h-4 inline mr-2" />
                  Misto VET
                </button>
              </div>
            </Card>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Ataque</p>
                <p className="text-3xl font-bold text-red-600">
                  {ataqueQuestions.length}
                </p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Consolidação</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {consolidacaoQuestions.length}
                </p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Manutenção</p>
                <p className="text-3xl font-bold text-green-600">
                  {manutencaoQuestions.length}
                </p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Misto</p>
                <p className="text-3xl font-bold text-slate-900">
                  {mistoQuestions.length}
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">{modeLabel}</h2>
              </div>

              {currentQuestions.length > 0 ? (
                <InteractiveQuiz
                  key={`${mode}-${currentQuestions.map((q) => q.id).join("-")}`}
                  questions={currentQuestions}
                  onComplete={handleSimuladoComplete}
                />
              ) : (
                <p className="text-slate-500">
                  Ainda não há questões suficientes para esse modo de simulado com os critérios atuais.
                </p>
              )}
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
