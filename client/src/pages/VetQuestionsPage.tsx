import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Flame,
  Layers3,
  Shield,
  BrainCircuit,
  BookOpen,
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

type RecommendedContent = {
  conteudo: string;
  score: number;
  block: "ataque" | "consolidacao" | "manutencao";
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

function matchesExamInstitution(question: Question, targetExam: string) {
  return normalizeText(question.institution) === normalizeText(targetExam);
}

export default function VetQuestionsPage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState<VetProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<"ataque" | "consolidacao" | "manutencao">("ataque");

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
        (attempt) => normalizeText(attempt.subject) === normalizeText(profile.focus_subject)
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
        const score = weight + weaknessScore + urgencyTimeScore + wrongVolumeScore;

        return {
          conteudo,
          score,
          block: getTrainingBlock(score),
        } as RecommendedContent;
      })
      .sort((a, b) => b.score - a.score);
  }, [filteredAttempts, profile, weights]);

  const attackContents = useMemo(
    () => recommendedContents.filter((item) => item.block === "ataque").map((item) => item.conteudo),
    [recommendedContents]
  );

  const consolidationContents = useMemo(
    () => recommendedContents.filter((item) => item.block === "consolidacao").map((item) => item.conteudo),
    [recommendedContents]
  );

  const maintenanceContents = useMemo(
    () => recommendedContents.filter((item) => item.block === "manutencao").map((item) => item.conteudo),
    [recommendedContents]
  );

  function buildRecommendedQuestions(
    block: "ataque" | "consolidacao" | "manutencao"
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
        (question) => normalizeText(question.subject) === normalizeText(profile.focus_subject)
      );
    }

    base = base.filter((question) =>
      contents.includes(normalizeText(question.topic))
    );

    const examMatches = base.filter((question) =>
      matchesExamInstitution(question, profile.target_exam)
    );

    const fallback = base.filter(
      (question) => !matchesExamInstitution(question, profile.target_exam)
    );

    const ordered = [...examMatches, ...fallback].sort((a, b) => {
      const aAttempted = attemptedQuestionIds.has(a.id) ? 1 : 0;
      const bAttempted = attemptedQuestionIds.has(b.id) ? 1 : 0;

      if (aAttempted !== bAttempted) {
        return aAttempted - bAttempted;
      }

      const aContentIndex = contents.indexOf(normalizeText(a.topic));
      const bContentIndex = contents.indexOf(normalizeText(b.topic));

      if (aContentIndex !== bContentIndex) {
        return aContentIndex - bContentIndex;
      }

      return Number(b.year) - Number(a.year);
    });

    return ordered.slice(0, 12);
  }

  const attackQuestions = useMemo(() => buildRecommendedQuestions("ataque"), [
    questions,
    profile,
    attackContents,
    attemptedQuestionIds,
  ]);

  const consolidationQuestions = useMemo(
    () => buildRecommendedQuestions("consolidacao"),
    [questions, profile, consolidationContents, attemptedQuestionIds]
  );

  const maintenanceQuestions = useMemo(
    () => buildRecommendedQuestions("manutencao"),
    [questions, profile, maintenanceContents, attemptedQuestionIds]
  );

  const visibleQuestions =
    selectedBlock === "ataque"
      ? attackQuestions
      : selectedBlock === "consolidacao"
      ? consolidationQuestions
      : maintenanceQuestions;

  const visibleTitle =
    selectedBlock === "ataque"
      ? "Questões de ataque"
      : selectedBlock === "consolidacao"
      ? "Questões de consolidação"
      : "Questões de manutenção";

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
            <h1 className="text-2xl font-bold text-slate-900">Questões recomendadas</h1>
            <p className="text-sm text-slate-500">
              Questões reais escolhidas pelo VET
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando questões recomendadas...</p>
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
              Antes de usar as questões recomendadas, você precisa configurar seu objetivo do VET.
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
                Questões reais
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Fila recomendada para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                O VET está puxando questões com base nos seus conteúdos prioritários,
                tentando priorizar primeiro a prova-alvo e, depois, questões próximas.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Ataque</p>
                <p className="text-3xl font-bold text-red-600">{attackQuestions.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Consolidação</p>
                <p className="text-3xl font-bold text-yellow-600">{consolidationQuestions.length}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Manutenção</p>
                <p className="text-3xl font-bold text-green-600">{maintenanceQuestions.length}</p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Escolha o bloco</h2>
                  <p className="text-sm text-slate-500">
                    Veja primeiro as questões mais alinhadas com o estágio atual do seu treino.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedBlock("ataque")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    selectedBlock === "ataque"
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Flame className="w-4 h-4 inline mr-2" />
                  Ataque
                </button>

                <button
                  onClick={() => setSelectedBlock("consolidacao")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    selectedBlock === "consolidacao"
                      ? "bg-yellow-500 border-yellow-500 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Layers3 className="w-4 h-4 inline mr-2" />
                  Consolidação
                </button>

                <button
                  onClick={() => setSelectedBlock("manutencao")}
                  className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                    selectedBlock === "manutencao"
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Manutenção
                </button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">{visibleTitle}</h2>
              </div>

              {visibleQuestions.length > 0 ? (
                <InteractiveQuiz
                  key={`${selectedBlock}-${visibleQuestions.map((q) => q.id).join("-")}`}
                  questions={visibleQuestions}
                />
              ) : (
                <p className="text-slate-500">
                  Ainda não há questões suficientes para esse bloco com os critérios atuais.
                </p>
              )}
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
