import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Flame,
  Gauge,
  Layers3,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
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
  subject: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  weight: number;
  weaknessScore: number;
  wrongVolumeScore: number;
  urgencyTimeScore: number;
  urgencyScore: number;
  block: "ataque" | "consolidacao" | "manutencao";
  hasData: boolean;
};

function normalizeText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function prettify(value?: string | null) {
  const raw = (value || "").trim();

  if (!raw) return "—";

  const normalized = normalizeText(raw);

  if (normalized === "fisica") return "Física";
  if (normalized === "matematica") return "Matemática";
  if (normalized === "quimica") return "Química";
  if (normalized === "todas") return "Todas";

  return raw
    .split(" ")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

function getWeaknessScore(accuracy: number, hasData: boolean) {
  if (!hasData) return 6;
  if (accuracy < 35) return 10;
  if (accuracy < 50) return 8;
  if (accuracy < 65) return 5;
  if (accuracy < 80) return 3;
  return 1;
}

function getUrgencyTimeScore(monthsUntilExam: number) {
  if (monthsUntilExam <= 1) return 6;
  if (monthsUntilExam <= 2) return 5;
  if (monthsUntilExam <= 4) return 4;
  if (monthsUntilExam <= 6) return 3;
  if (monthsUntilExam <= 9) return 2;
  return 1;
}

function getWrongVolumeScore(wrong: number) {
  if (wrong >= 8) return 5;
  if (wrong >= 5) return 4;
  if (wrong >= 3) return 3;
  if (wrong >= 1) return 2;
  return 0;
}

function getTrainingBlock(score: number, accuracy: number, hasData: boolean) {
  if (!hasData) return "consolidacao";
  if (score >= 18 || accuracy < 45) return "ataque";
  if (score >= 12 || accuracy < 70) return "consolidacao";
  return "manutencao";
}

function getRiskMeta(score: number, hasEnoughData: boolean) {
  if (!hasEnoughData) {
    return {
      label: "dados insuficientes",
      title: "Dados insuficientes",
      description: "Responda mais questões para o VET medir seu risco com mais precisão.",
      className: "border-slate-200 bg-slate-50 text-slate-700",
      iconClassName: "bg-slate-100 text-slate-700",
      icon: Activity,
    };
  }

  if (score >= 19) {
    return {
      label: "alto",
      title: "Risco alto",
      description: "Existe conteúdo importante com baixo aproveitamento ou alto volume de erros.",
      className: "border-red-200 bg-red-50 text-red-700",
      iconClassName: "bg-red-100 text-red-700",
      icon: AlertTriangle,
    };
  }

  if (score >= 13) {
    return {
      label: "moderado",
      title: "Risco moderado",
      description: "Você tem pontos frágeis relevantes, mas ainda dá para estabilizar com treino direcionado.",
      className: "border-amber-200 bg-amber-50 text-amber-700",
      iconClassName: "bg-amber-100 text-amber-700",
      icon: Gauge,
    };
  }

  return {
    label: "controlado",
    title: "Risco controlado",
    description: "O cenário geral está aceitável, mas ainda exige manutenção e revisão constante.",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    iconClassName: "bg-emerald-100 text-emerald-700",
    icon: ShieldCheck,
  };
}

function getBlockMeta(block: ContentDiagnosis["block"]) {
  if (block === "ataque") {
    return {
      label: "Ataque",
      className: "border-red-200 bg-red-50 text-red-700",
      iconClassName: "bg-red-100 text-red-700",
      icon: Flame,
    };
  }

  if (block === "consolidacao") {
    return {
      label: "Consolidação",
      className: "border-amber-200 bg-amber-50 text-amber-700",
      iconClassName: "bg-amber-100 text-amber-700",
      icon: Layers3,
    };
  }

  return {
    label: "Manutenção",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    iconClassName: "bg-emerald-100 text-emerald-700",
    icon: ShieldCheck,
  };
}

function groupBySubject(attempts: AttemptRow[]): SubjectStat[] {
  const map = new Map<string, { total: number; correct: number; wrong: number }>();

  for (const attempt of attempts) {
    const label = normalizeText(attempt.subject) || "não informado";
    const current = map.get(label) ?? { total: 0, correct: 0, wrong: 0 };

    current.total += 1;

    if (attempt.is_correct) {
      current.correct += 1;
    } else {
      current.wrong += 1;
    }

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

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function formatTime(seconds: number) {
  if (!seconds || seconds <= 0) return "—";

  const minutes = Math.floor(seconds / 60);
  const rest = Math.round(seconds % 60);

  if (minutes <= 0) return `${rest}s`;

  return `${minutes}m ${rest}s`;
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

    if (profile.focus_subject === "todas") {
      return attempts;
    }

    return attempts.filter(
      (attempt) =>
        normalizeText(attempt.subject) === normalizeText(profile.focus_subject)
    );
  }, [attempts, profile]);

  const totalAttempts = filteredAttempts.length;

  const totalCorrect = useMemo(() => {
    return filteredAttempts.filter((attempt) => attempt.is_correct).length;
  }, [filteredAttempts]);

  const totalWrong = totalAttempts - totalCorrect;

  const generalAccuracy =
    totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;

  const averageTime = useMemo(() => {
    const timed = filteredAttempts.filter(
      (attempt) => typeof attempt.time_spent_seconds === "number"
    );

    if (timed.length === 0) return 0;

    return (
      timed.reduce(
        (sum, attempt) => sum + (attempt.time_spent_seconds ?? 0),
        0
      ) / timed.length
    );
  }, [filteredAttempts]);

  const hasEnoughData = totalAttempts >= 5;

  const subjectStats = useMemo(
    () => groupBySubject(filteredAttempts),
    [filteredAttempts]
  );

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
      {
        conteudo: string;
        subject: string;
        total: number;
        correct: number;
        wrong: number;
      }
    >();

    for (const attempt of filteredAttempts) {
      const key = normalizeText(attempt.conteudo);

      if (!key) continue;

      const current =
        contentMap.get(key) ??
        {
          conteudo: attempt.conteudo || key,
          subject: attempt.subject || profile.focus_subject,
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

      contentMap.set(key, current);
    }

    for (const weight of weights) {
      const sameSubject =
        profile.focus_subject === "todas" ||
        normalizeText(weight.subject) === normalizeText(profile.focus_subject);

      if (!sameSubject) continue;

      const key = normalizeText(weight.conteudo);

      if (!key || contentMap.has(key)) continue;

      contentMap.set(key, {
        conteudo: weight.conteudo,
        subject: weight.subject,
        total: 0,
        correct: 0,
        wrong: 0,
      });
    }

    const urgencyTimeScore = getUrgencyTimeScore(profile.months_until_exam);

    return Array.from(contentMap.values())
      .map((value) => {
        const hasData = value.total > 0;
        const accuracy = hasData ? (value.correct / value.total) * 100 : 0;

        const matchedWeight = weights.find((row) => {
          const sameSubject =
            profile.focus_subject === "todas" ||
            normalizeText(row.subject) === normalizeText(value.subject);

          return (
            sameSubject &&
            normalizeText(row.conteudo) === normalizeText(value.conteudo)
          );
        });

        const weight = matchedWeight?.weight ?? 3;
        const weaknessScore = getWeaknessScore(accuracy, hasData);
        const wrongVolumeScore = getWrongVolumeScore(value.wrong);
        const urgencyScore =
          weight + weaknessScore + urgencyTimeScore + wrongVolumeScore;

        const block = getTrainingBlock(urgencyScore, accuracy, hasData);

        return {
          conteudo: value.conteudo,
          subject: value.subject,
          total: value.total,
          correct: value.correct,
          wrong: value.wrong,
          accuracy,
          weight,
          weaknessScore,
          wrongVolumeScore,
          urgencyTimeScore,
          urgencyScore,
          block,
          hasData,
        };
      })
      .sort((a, b) => {
        if (b.urgencyScore !== a.urgencyScore) {
          return b.urgencyScore - a.urgencyScore;
        }

        if (a.accuracy !== b.accuracy) {
          return a.accuracy - b.accuracy;
        }

        return b.weight - a.weight;
      });
  }, [filteredAttempts, profile, weights]);

  const urgentContent = contentDiagnosis[0] ?? null;
  const secondContent = contentDiagnosis[1] ?? null;
  const thirdContent = contentDiagnosis[2] ?? null;

  const riskMeta = getRiskMeta(urgentContent?.urgencyScore ?? 0, hasEnoughData);
  const RiskIcon = riskMeta.icon;

  const attackCount = contentDiagnosis.filter(
    (item) => item.block === "ataque"
  ).length;

  const consolidationCount = contentDiagnosis.filter(
    (item) => item.block === "consolidacao"
  ).length;

  const maintenanceCount = contentDiagnosis.filter(
    (item) => item.block === "manutencao"
  ).length;

  const strategicFocus = useMemo(() => {
    if (!profile) {
      return "Configure seu objetivo para liberar a leitura estratégica.";
    }

    if (!urgentContent) {
      return "Ainda não há dados suficientes para gerar uma prioridade. Configure os pesos da prova e responda algumas questões para o VET começar a trabalhar.";
    }

    const subject =
      profile.focus_subject === "todas"
        ? worstSubject?.label
          ? prettify(worstSubject.label)
          : "sua disciplina mais fraca"
        : prettify(profile.focus_subject);

    const second = secondContent
      ? ` Depois disso, avance para ${prettify(secondContent.conteudo)}.`
      : "";

    return `Seu foco imediato deve ser ${prettify(
      urgentContent.conteudo
    )}. Esse conteúdo aparece como prioridade porque combina peso ${urgentContent.weight}, aproveitamento ${formatPercent(
      urgentContent.accuracy
    )}, ${urgentContent.wrong} erro(s) e ${profile.months_until_exam} mês(es) até a prova. Na prática, o VET recomenda concentrar o próximo bloco de estudo em ${subject}.${second}`;
  }, [profile, urgentContent, secondContent, worstSubject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/vet">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Diagnóstico do VET
            </h1>
            <p className="text-sm text-slate-500">
              Leitura estratégica do seu momento atual
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8 bg-white">
            <p className="text-slate-600">Carregando diagnóstico...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700">{error}</p>
          </Card>
        ) : !user ? (
          <Card className="p-8 bg-white">
            <p className="text-slate-700">
              Você precisa estar logado para usar o VET.
            </p>
          </Card>
        ) : !profile ? (
          <Card className="p-8 bg-white border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-700" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Configure seu objetivo primeiro
                </h2>
                <p className="text-slate-600 mb-5">
                  O diagnóstico precisa saber sua prova-alvo, tempo restante e
                  foco de estudo. Sem isso, o VET fica cego, e IA cega só serve
                  para dar palpite ruim com confiança.
                </p>

                <Link href="/vet/objetivo">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl">
                    Configurar objetivo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ) : (
          <>
            <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden relative rounded-3xl shadow-lg">
              <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-2xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/10 blur-2xl -ml-24 -mb-24" />

              <div className="relative grid lg:grid-cols-[1.3fr_0.7fr] gap-6 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold text-emerald-50 mb-4">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    Diagnóstico estratégico
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Seu diagnóstico para {profile.target_exam}
                  </h2>

                  <p className="text-emerald-50 leading-relaxed max-w-3xl">
                    O VET cruza seu objetivo, tempo restante, histórico de
                    questões, peso dos conteúdos e aproveitamento para apontar
                    onde você deve atacar primeiro.
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
                        Ajustar objetivo
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/12 border border-white/20 p-5 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-wide text-emerald-100 font-bold mb-4">
                    Configuração atual
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white/12 border border-white/15 p-4">
                      <p className="text-xs text-emerald-100 mb-1">
                        Prova-alvo
                      </p>
                      <p className="font-bold">{profile.target_exam}</p>
                    </div>

                    <div className="rounded-2xl bg-white/12 border border-white/15 p-4">
                      <p className="text-xs text-emerald-100 mb-1">
                        Tempo restante
                      </p>
                      <p className="font-bold">
                        {profile.months_until_exam} mês(es)
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/12 border border-white/15 p-4">
                      <p className="text-xs text-emerald-100 mb-1">
                        Foco
                      </p>
                      <p className="font-bold">
                        {prettify(profile.focus_subject)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/12 border border-white/15 p-4">
                      <p className="text-xs text-emerald-100 mb-1">
                        Carga diária
                      </p>
                      <p className="font-bold">
                        {profile.hours_per_day}h por dia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card className="p-5 bg-white border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Aproveitamento</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {formatPercent(generalAccuracy)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  {totalCorrect} acertos em {totalAttempts} tentativa(s)
                </p>
              </Card>

              <Card className="p-5 bg-white border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Ponto crítico</p>
                    <p className="text-xl font-bold text-slate-900">
                      {worstSubject?.label
                        ? prettify(worstSubject.label)
                        : "Sem dados"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  {worstSubject
                    ? `${formatPercent(worstSubject.accuracy)} de acerto`
                    : "Responda mais questões"}
                </p>
              </Card>

              <Card className="p-5 bg-white border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Ponto forte</p>
                    <p className="text-xl font-bold text-slate-900">
                      {bestSubject?.label
                        ? prettify(bestSubject.label)
                        : "Sem dados"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  {bestSubject
                    ? `${formatPercent(bestSubject.accuracy)} de acerto`
                    : "Responda mais questões"}
                </p>
              </Card>

              <Card className={`p-5 border ${riskMeta.className}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${riskMeta.iconClassName}`}
                  >
                    <RiskIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Risco atual</p>
                    <p className="text-xl font-bold capitalize">
                      {riskMeta.label}
                    </p>
                  </div>
                </div>
                <p className="text-sm opacity-80">{riskMeta.description}</p>
              </Card>
            </section>

            <section className="grid xl:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
              <Card className="p-6 bg-white border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-emerald-700" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Leitura estratégica
                    </h2>
                    <p className="text-sm text-slate-500">
                      O que o VET faria se fosse um professor chato, mas útil.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-5">
                  {strategicFocus}
                </p>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p className="text-2xl font-bold text-red-700">
                      {attackCount}
                    </p>
                    <p className="text-sm font-semibold text-red-700">
                      em ataque
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-2xl font-bold text-amber-700">
                      {consolidationCount}
                    </p>
                    <p className="text-sm font-semibold text-amber-700">
                      em consolidação
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-2xl font-bold text-emerald-700">
                      {maintenanceCount}
                    </p>
                    <p className="text-sm font-semibold text-emerald-700">
                      em manutenção
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock3 className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Próximo passo
                  </h2>
                </div>

                {urgentContent ? (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500 mb-1">
                        Comece por
                      </p>
                      <p className="text-xl font-bold text-slate-900">
                        {prettify(urgentContent.conteudo)}
                      </p>
                      <p className="text-sm text-slate-600 mt-2">
                        Score {urgentContent.urgencyScore} • Peso{" "}
                        {urgentContent.weight} •{" "}
                        {urgentContent.hasData
                          ? `${formatPercent(urgentContent.accuracy)} de acerto`
                          : "sem dados ainda"}
                      </p>
                    </div>

                    <Link href="/vet/plano">
                      <Button className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white">
                        Transformar em Plano VET
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p className="text-slate-600 mb-4">
                      Ainda não há conteúdo suficiente para definir o próximo
                      passo. Responda algumas questões ou confira os pesos da
                      prova no ADM.
                    </p>

                    <Link href="/banco-de-questoes">
                      <Button className="rounded-2xl">
                        Resolver questões
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            </section>

            <section className="grid xl:grid-cols-[1.2fr_0.8fr] gap-6">
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-5">
                  <Activity className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Conteúdos críticos
                  </h2>
                </div>

                <div className="space-y-4">
                  {[urgentContent, secondContent, thirdContent]
                    .filter(Boolean)
                    .map((item, index) => {
                      const content = item as ContentDiagnosis;
                      const blockMeta = getBlockMeta(content.block);
                      const BlockIcon = blockMeta.icon;

                      return (
                        <div
                          key={content.conteudo}
                          className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">
                                  #{index + 1}
                                </span>

                                <span
                                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${blockMeta.className}`}
                                >
                                  <BlockIcon className="w-3.5 h-3.5" />
                                  {blockMeta.label}
                                </span>
                              </div>

                              <h3 className="text-lg font-bold text-slate-900">
                                {prettify(content.conteudo)}
                              </h3>

                              <p className="text-sm text-slate-500">
                                {prettify(content.subject)}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-2xl font-bold text-slate-900">
                                {content.urgencyScore}
                              </p>
                              <p className="text-xs text-slate-500">
                                score VET
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-4 gap-3">
                            <div className="rounded-2xl bg-white border border-slate-200 p-3">
                              <p className="text-xs text-slate-500 mb-1">
                                Peso
                              </p>
                              <p className="font-bold text-slate-900">
                                {content.weight}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white border border-slate-200 p-3">
                              <p className="text-xs text-slate-500 mb-1">
                                Acerto
                              </p>
                              <p className="font-bold text-slate-900">
                                {content.hasData
                                  ? formatPercent(content.accuracy)
                                  : "sem dados"}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white border border-slate-200 p-3">
                              <p className="text-xs text-slate-500 mb-1">
                                Erros
                              </p>
                              <p className="font-bold text-slate-900">
                                {content.wrong}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white border border-slate-200 p-3">
                              <p className="text-xs text-slate-500 mb-1">
                                Tentativas
                              </p>
                              <p className="font-bold text-slate-900">
                                {content.total}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  {contentDiagnosis.length === 0 ? (
                    <p className="text-slate-500">
                      Ainda não há dados suficientes para gerar prioridades.
                    </p>
                  ) : null}
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-5">
                  <ShieldCheck className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Como ler esse diagnóstico
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">
                      Peso da prova
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Conteúdos mais importantes para sua prova-alvo sobem no
                      ranking de prioridade.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">
                      Aproveitamento
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Quanto menor seu percentual de acerto, maior a urgência de
                      treino naquele conteúdo.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">
                      Volume de erros
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Erros repetidos pesam mais, porque indicam padrão de
                      falha, não acidente.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">
                      Tempo restante
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Quanto menos tempo até a prova, menos o VET tolera estudo
                      aleatório. Brutal, porém justo.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-5">
                  <BarChart3 className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Desempenho por disciplina
                  </h2>
                </div>

                <div className="space-y-4">
                  {subjectStats.length > 0 ? (
                    subjectStats.map((subject) => {
                      return (
                        <div key={subject.label}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-slate-700">
                              {prettify(subject.label)}
                            </span>
                            <span className="text-sm text-slate-500">
                              {formatPercent(subject.accuracy)} •{" "}
                              {subject.total} tentativa(s)
                            </span>
                          </div>

                          <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{ width: `${subject.accuracy}%` }}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-slate-500">
                      Nenhuma tentativa encontrada ainda.
                    </p>
                  )}
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-5">
                  <Clock3 className="w-5 h-5 text-slate-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Resumo operacional
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500 mb-1">
                      Tentativas analisadas
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {totalAttempts}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500 mb-1">
                      Erros analisados
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {totalWrong}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500 mb-1">
                      Tempo médio
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {formatTime(averageTime)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500 mb-1">
                      Conteúdos avaliados
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {contentDiagnosis.length}
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
