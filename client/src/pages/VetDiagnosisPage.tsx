import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  BrainCircuit,
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

type SubjectStat = {
  label: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

type ContentDiagnosis = {
  conteudo: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  weight: number;
  weaknessScore: number;
  urgencyScore: number;
};

function normalizeText(value?: string | null) {
  return (value || "").trim().toLowerCase();
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

function getRiskLabel(score: number) {
  if (score >= 18) return "alto";
  if (score >= 12) return "medio";
  return "baixo";
}

function groupBySubject(attempts: AttemptRow[]): SubjectStat[] {
  const map = new Map<string, { total: number; correct: number; wrong: number }>();

  for (const attempt of attempts) {
    const label = normalizeText(attempt.subject) || "nao informado";
    const current = map.get(label) ?? { total: 0, correct: 0, wrong: 0 };
    current.total += 1;
    if (attempt.is_correct) current.correct += 1;
    else current.wrong += 1;
    map.set(label, current);
  }

  return Array.from(map.entries())
    .map(([label, value]) => ({
      label,
      total: value.total,
      correct: value.correct,
      wrong: value.wrong,
      accuracy: value.total ? (value.correct / value.total) * 100 : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);
}

export default function VetDiagnosisPage() {
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

  const subjectStats = useMemo(() => groupBySubject(filteredAttempts), [filteredAttempts]);

  const bestSubject = useMemo(() => {
    return [...subjectStats]
      .filter((item) => item.total >= 2)
      .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)[0];
  }, [subjectStats]);

  const worstSubject = useMemo(() => {
    return [...subjectStats]
      .filter((item) => item.total >= 2)
      .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)[0];
  }, [subjectStats]);

  const contentDiagnosis = useMemo(() => {
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
        const urgencyScore = weight + weaknessScore + urgencyTimeScore + wrongVolumeScore;

        return {
          conteudo,
          total: value.total,
          correct: value.correct,
          wrong: value.wrong,
          accuracy,
          weight,
          weaknessScore,
          urgencyScore,
        };
      })
      .sort((a, b) => b.urgencyScore - a.urgencyScore || a.accuracy - b.accuracy);
  }, [filteredAttempts, profile, weights]);

  const urgentContent = contentDiagnosis[0] ?? null;
  const secondContent = contentDiagnosis[1] ?? null;
  const thirdContent = contentDiagnosis[2] ?? null;

  const currentRisk = urgentContent ? getRiskLabel(urgentContent.urgencyScore) : "baixo";

  const strategicFocus = useMemo(() => {
    if (!profile || !urgentContent) return "Configure e responda mais questões para o VET gerar foco estratégico.";

    const exam = profile.target_exam;
    const subject =
      profile.focus_subject === "todas"
        ? worstSubject?.label ?? "sua disciplina mais fraca"
        : profile.focus_subject;

    return `Para ${exam}, seu foco imediato deve estar em ${urgentContent.conteudo}. ${
      secondContent ? `Em seguida, priorize ${secondContent.conteudo}. ` : ""
    }Como o tempo até a prova é de ${profile.months_until_exam} mês(es), a recomendação é concentrar esforço em ${subject} com máxima prioridade nos conteúdos de maior incidência e menor aproveitamento.`;
  }, [profile, urgentContent, secondContent, worstSubject]);

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
            <h1 className="text-2xl font-bold text-slate-900">Diagnóstico do VET</h1>
            <p className="text-sm text-slate-500">
              Leitura estratégica do seu momento atual
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando diagnóstico...</p>
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
              Antes de usar o diagnóstico, você precisa configurar seu objetivo do VET.
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
                Cenário atual
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Diagnóstico estratégico para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                Foco: {profile.focus_subject} • {profile.months_until_exam} mês(es) até a prova •{" "}
                {profile.hours_per_day}h por dia
              </p>
            </Card>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card className="p-6 border-red-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-slate-900">Disciplina crítica</h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {worstSubject?.label ?? "Sem dados"}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  {worstSubject ? `${worstSubject.accuracy.toFixed(0)}% de acerto` : "Responda mais questões"}
                </p>
              </Card>

              <Card className="p-6 border-green-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-slate-900">Disciplina forte</h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {bestSubject?.label ?? "Sem dados"}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  {bestSubject ? `${bestSubject.accuracy.toFixed(0)}% de acerto` : "Responda mais questões"}
                </p>
              </Card>

              <Card className="p-6 border-orange-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Conteúdo urgente</h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {urgentContent?.conteudo ?? "Sem dados"}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  {urgentContent ? `Score ${urgentContent.urgencyScore}` : "Responda mais questões"}
                </p>
              </Card>

              <Card className="p-6 border-yellow-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-slate-900">Risco atual</h3>
                </div>
                <p className="text-xl font-bold text-slate-900 capitalize">
                  {currentRisk}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Baseado no conteúdo mais urgente e no tempo restante
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Foco recomendado</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">{strategicFocus}</p>
            </Card>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">Top prioridades</h2>
                </div>

                <div className="space-y-4">
                  {[urgentContent, secondContent, thirdContent].filter(Boolean).map((item, index) => {
                    const content = item as ContentDiagnosis;
                    return (
                      <div
                        key={content.conteudo}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <p className="font-bold text-slate-900">
                            #{index + 1} {content.conteudo}
                          </p>
                          <span className="text-sm font-bold text-emerald-700">
                            Score {content.urgencyScore}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          Peso na prova: {content.weight} • Aproveitamento: {content.accuracy.toFixed(0)}% • Erros: {content.wrong}
                        </p>
                      </div>
                    );
                  })}

                  {contentDiagnosis.length === 0 && (
                    <p className="text-slate-500">Ainda não há dados suficientes para gerar prioridades.</p>
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">Leitura do diagnóstico</h2>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">O que mais pesa agora</p>
                    <p className="text-sm text-slate-600 mt-1">
                      O VET prioriza conteúdos com maior incidência na prova e menor aproveitamento seu.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">Como o tempo influencia</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Quanto menos meses faltam, mais o sistema aumenta o peso dos conteúdos com retorno mais rápido.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">Próximo módulo</p>
                    <p className="text-sm text-slate-600 mt-1">
                      O próximo passo será transformar esse diagnóstico em uma fila clara de prioridades.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
