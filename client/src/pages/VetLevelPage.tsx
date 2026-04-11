import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Gauge,
  Target,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
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

function getExamExpectedAccuracy(targetExam: string) {
  const exam = normalizeText(targetExam);

  if (exam === "eear") return 65;
  if (exam === "espcex") return 72;
  if (exam === "efomm") return 70;

  return 70;
}

function getCurrentLevelLabel(score: number) {
  if (score < 35) return "inicial";
  if (score < 50) return "básico";
  if (score < 65) return "intermediário";
  if (score < 80) return "competitivo";
  return "avançado";
}

function getTargetStatus(adjustedScore: number, expectedScore: number) {
  const diff = adjustedScore - expectedScore;

  if (diff <= -20) return "muito abaixo";
  if (diff <= -8) return "baixo";
  if (diff < 4) return "próximo";
  if (diff < 12) return "compatível";
  return "acima";
}

function getStatusClasses(status: string) {
  if (status === "muito abaixo") {
    return {
      badge: "bg-red-100 text-red-700",
      border: "border-red-200",
      icon: "text-red-500",
    };
  }

  if (status === "baixo") {
    return {
      badge: "bg-orange-100 text-orange-700",
      border: "border-orange-200",
      icon: "text-orange-500",
    };
  }

  if (status === "próximo") {
    return {
      badge: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-200",
      icon: "text-yellow-500",
    };
  }

  if (status === "compatível") {
    return {
      badge: "bg-emerald-100 text-emerald-700",
      border: "border-emerald-200",
      icon: "text-emerald-500",
    };
  }

  return {
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    icon: "text-blue-500",
  };
}

export default function VetLevelPage() {
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

  const totalAnswered = filteredAttempts.length;
  const totalCorrect = filteredAttempts.filter((attempt) => attempt.is_correct).length;
  const accuracy = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

  const relevantWeights = useMemo(() => {
    if (!profile) return [];

    return weights.filter((row) => {
      if (profile.focus_subject === "todas") return true;
      return normalizeText(row.subject) === normalizeText(profile.focus_subject);
    });
  }, [weights, profile]);

  const untrainedContents = useMemo(() => {
    const attemptedContents = new Set(
      filteredAttempts
        .map((attempt) => normalizeText(attempt.conteudo))
        .filter(Boolean)
    );

    return relevantWeights.filter(
      (row) => !attemptedContents.has(normalizeText(row.conteudo))
    );
  }, [filteredAttempts, relevantWeights]);

  const weightedCoverage = useMemo(() => {
    const totalWeight = relevantWeights.reduce((sum, row) => sum + row.weight, 0);
    if (totalWeight === 0) return 0;

    const attemptedContents = new Set(
      filteredAttempts
        .map((attempt) => normalizeText(attempt.conteudo))
        .filter(Boolean)
    );

    const coveredWeight = relevantWeights
      .filter((row) => attemptedContents.has(normalizeText(row.conteudo)))
      .reduce((sum, row) => sum + row.weight, 0);

    return (coveredWeight / totalWeight) * 100;
  }, [filteredAttempts, relevantWeights]);

  const adjustedScore = useMemo(() => {
    const baseAccuracyWeight = 0.7;
    const coverageWeight = 0.3;

    return accuracy * baseAccuracyWeight + weightedCoverage * coverageWeight;
  }, [accuracy, weightedCoverage]);

  const expectedScore = profile ? getExamExpectedAccuracy(profile.target_exam) : 70;
  const currentLevel = getCurrentLevelLabel(adjustedScore);
  const targetStatus = getTargetStatus(adjustedScore, expectedScore);
  const statusClasses = getStatusClasses(targetStatus);

  const topUntrained = useMemo(() => {
    return [...untrainedContents].sort((a, b) => b.weight - a.weight).slice(0, 5);
  }, [untrainedContents]);

  const strategicReading = useMemo(() => {
    if (!profile) {
      return "Configure seu objetivo para gerar o nivelamento.";
    }

    if (targetStatus === "muito abaixo") {
      return `Seu nível atual ainda está muito abaixo da régua esperada para ${profile.target_exam}. O foco agora deve ser fortalecer base, aumentar cobertura dos conteúdos importantes e subir consistência antes de buscar desempenho mais agressivo.`;
    }

    if (targetStatus === "baixo") {
      return `Seu nível atual ainda está abaixo da régua esperada para ${profile.target_exam}, mas já existe base para recuperação. O principal agora é atacar lacunas de cobertura e reduzir erros nos conteúdos de maior peso.`;
    }

    if (targetStatus === "próximo") {
      return `Seu nível atual já está próximo da régua esperada para ${profile.target_exam}. O caminho agora é refinar consistência, reduzir oscilação e impedir que conteúdos não treinados virem ponto cego.`;
    }

    if (targetStatus === "compatível") {
      return `Seu nível atual já está compatível com a régua esperada para ${profile.target_exam}. O foco agora é manter estabilidade, lapidar os blocos mais importantes e evitar queda em conteúdos ainda pouco treinados.`;
    }

    return `Seu nível atual está acima da régua esperada para ${profile.target_exam}. Agora o melhor caminho é manter a cobertura, consolidar o desempenho e transformar isso em constância de prova.`;
  }, [profile, targetStatus]);

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
            <h1 className="text-2xl font-bold text-slate-900">Nivelamento do VET</h1>
            <p className="text-sm text-slate-500">
              Sua posição atual em relação à prova-alvo
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando nivelamento...</p>
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
              Antes de usar o nivelamento, você precisa configurar seu objetivo do VET.
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
                Régua estratégica
              </p>
              <h2 className="text-3xl font-bold mb-3">
                Nivelamento para {profile.target_exam}
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                O VET está comparando sua base atual com a régua esperada da prova-alvo.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card className={`p-6 bg-white ${statusClasses.border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Gauge className={`w-5 h-5 ${statusClasses.icon}`} />
                  <h3 className="font-bold text-slate-900">Status vs prova</h3>
                </div>
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-bold capitalize ${statusClasses.badge}`}>
                  {targetStatus}
                </span>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h3 className="font-bold text-slate-900">Nível atual</h3>
                </div>
                <p className="text-xl font-bold text-slate-900 capitalize">
                  {currentLevel}
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-bold text-slate-900">Score ajustado</h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {adjustedScore.toFixed(1)}%
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-purple-500" />
                  <h3 className="font-bold text-slate-900">Cobertura ponderada</h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {weightedCoverage.toFixed(1)}%
                </p>
              </Card>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-xl font-bold text-slate-900">Leitura estratégica</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">{strategicReading}</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h2 className="text-xl font-bold text-slate-900">Resumo técnico</h2>
                </div>

                <div className="space-y-2 text-slate-700">
                  <p>
                    Taxa de acerto atual:{" "}
                    <span className="font-semibold">{accuracy.toFixed(1)}%</span>
                  </p>
                  <p>
                    Questões respondidas:{" "}
                    <span className="font-semibold">{totalAnswered}</span>
                  </p>
                  <p>
                    Conteúdos ainda não treinados:{" "}
                    <span className="font-semibold">{untrainedContents.length}</span>
                  </p>
                  <p>
                    Régua esperada da prova:{" "}
                    <span className="font-semibold">{expectedScore}%</span>
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Conteúdos importantes ainda não treinados
                </h2>
              </div>

              {topUntrained.length > 0 ? (
                <div className="space-y-3">
                  {topUntrained.map((item, index) => (
                    <div
                      key={`${item.subject}-${item.conteudo}-${index}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4"
                    >
                      <div>
                        <p className="font-bold text-slate-900">
                          #{index + 1} {prettify(item.conteudo)}
                        </p>
                        <p className="text-sm text-slate-500">
                          {prettify(item.subject)}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">
                          Peso {item.weight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">
                  Você já tem pelo menos alguma cobertura nos conteúdos mais relevantes da prova.
                </p>
              )}
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
