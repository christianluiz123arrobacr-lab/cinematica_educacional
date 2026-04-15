import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Target,
  Activity,
  ListChecks,
  BrainCircuit,
  BookOpen,
  Gauge,
  FileCheck,
  Save,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
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

const EXAMS = ["EEAR", "EsPCEx", "EFOMM"];
const SUBJECTS = ["todas", "fisica", "matematica", "quimica"];

const WEEKDAYS = [
  { value: "segunda", label: "Segunda" },
  { value: "terca", label: "Terça" },
  { value: "quarta", label: "Quarta" },
  { value: "quinta", label: "Quinta" },
  { value: "sexta", label: "Sexta" },
  { value: "sabado", label: "Sábado" },
  { value: "domingo", label: "Domingo" },
];

const nextModules = [
  {
    title: "Prioridades",
    description:
      "Descubra o que atacar primeiro com base no peso da prova e no seu desempenho.",
    href: "/vet/prioridades",
    icon: ListChecks,
  },
  {
    title: "Treino recomendado",
    description:
      "Receba uma trilha estratégica de treino baseada no seu objetivo e no seu nível.",
    href: "/vet/treino",
    icon: BrainCircuit,
  },
  {
    title: "Questões recomendadas",
    description:
      "Resolva questões reais escolhidas com base no seu objetivo, nas prioridades e no treino do VET.",
    href: "/vet/questoes",
    icon: BookOpen,
  },
  {
    title: "Nivelamento",
    description:
      "Descubra se você está muito abaixo, baixo, próximo, compatível ou acima da régua da sua prova-alvo.",
    href: "/vet/nivelamento",
    icon: Gauge,
  },
  {
    title: "Simulado VET",
    description:
      "Monte um simulado estratégico com questões reais de ataque, consolidação, manutenção ou modo misto.",
    href: "/vet/simulado",
    icon: FileCheck,
  },
];

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

export default function VetPage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [loading, setLoading] = useState(true);
  const [savingObjective, setSavingObjective] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isEditingObjective, setIsEditingObjective] = useState(false);

  const [profile, setProfile] = useState<VetProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([]);

  const [targetExam, setTargetExam] = useState("EEAR");
  const [monthsUntilExam, setMonthsUntilExam] = useState("6");
  const [hoursPerDay, setHoursPerDay] = useState("3");
  const [focusSubject, setFocusSubject] = useState("todas");
  const [studyDaysPerWeek, setStudyDaysPerWeek] = useState("5");
  const [studyWeekdays, setStudyWeekdays] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      setSuccess("");

      const { data: profileData, error: profileError } = await supabase
        .from("user_vet_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profileError) {
        console.error(profileError);
        setError("Não foi possível carregar o VET.");
        setLoading(false);
        return;
      }

      const currentProfile = (profileData as VetProfileRow | null) ?? null;
      setProfile(currentProfile);

      if (currentProfile) {
        setTargetExam(currentProfile.target_exam);
        setMonthsUntilExam(String(currentProfile.months_until_exam));
        setHoursPerDay(String(currentProfile.hours_per_day));
        setFocusSubject(currentProfile.focus_subject);
        setStudyDaysPerWeek(
          currentProfile.study_days_per_week !== null &&
            currentProfile.study_days_per_week !== undefined
            ? String(currentProfile.study_days_per_week)
            : "5"
        );
        setStudyWeekdays(currentProfile.study_weekdays ?? []);
      }

      if (!currentProfile) {
        setAttempts([]);
        setWeights([]);
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

  const selectedDaysCount = useMemo(() => studyWeekdays.length, [studyWeekdays]);

  function handleToggleWeekday(day: string) {
    setStudyWeekdays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((item) => item !== day);
      }
      return [...prev, day];
    });
  }

  async function handleSaveObjective(e: React.FormEvent) {
    e.preventDefault();

    if (!user?.id) return;

    setSavingObjective(true);
    setError("");
    setSuccess("");

    const parsedMonths = Number(monthsUntilExam);
    const parsedHours = Number(hoursPerDay);
    const parsedDaysPerWeek = Number(studyDaysPerWeek);

    if (!targetExam) {
      setSavingObjective(false);
      setError("Escolha a prova-alvo.");
      return;
    }

    if (Number.isNaN(parsedMonths) || parsedMonths < 0) {
      setSavingObjective(false);
      setError("Informe um valor válido para meses até a prova.");
      return;
    }

    if (Number.isNaN(parsedHours) || parsedHours <= 0) {
      setSavingObjective(false);
      setError("Informe um valor válido para horas por dia.");
      return;
    }

    if (
      Number.isNaN(parsedDaysPerWeek) ||
      parsedDaysPerWeek < 0 ||
      parsedDaysPerWeek > 7
    ) {
      setSavingObjective(false);
      setError("Informe um valor válido para dias por semana.");
      return;
    }

    if (studyWeekdays.length > 0 && studyWeekdays.length !== parsedDaysPerWeek) {
      setSavingObjective(false);
      setError(
        "A quantidade de dias selecionados na semana precisa bater com o número de dias por semana."
      );
      return;
    }

    const payload = {
      user_id: user.id,
      target_exam: targetExam,
      months_until_exam: parsedMonths,
      hours_per_day: parsedHours,
      focus_subject: focusSubject,
      study_days_per_week: parsedDaysPerWeek,
      study_weekdays: studyWeekdays,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("user_vet_profiles")
      .upsert(payload, { onConflict: "user_id" });

    setSavingObjective(false);

    if (error) {
      console.error("Erro ao salvar objetivo do VET:", error);
      setError("Não foi possível salvar o objetivo do VET.");
      return;
    }

    setSuccess("Objetivo salvo com sucesso.");
    setIsEditingObjective(false);

    const localProfile: VetProfileRow = {
      id: profile?.id ?? "",
      user_id: user.id,
      target_exam: targetExam,
      months_until_exam: parsedMonths,
      hours_per_day: parsedHours,
      focus_subject: focusSubject,
      study_days_per_week: parsedDaysPerWeek,
      study_weekdays: studyWeekdays,
    };

    setProfile(localProfile);

    const { data: weightsData } = await supabase
      .from("vet_exam_content_weights")
      .select("*")
      .eq("exam", targetExam);

    setWeights((weightsData as WeightRow[]) ?? []);
  }

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
        const urgencyScore =
          weight + weaknessScore + urgencyTimeScore + wrongVolumeScore;

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

  const currentRisk = urgentContent
    ? getRiskLabel(urgentContent.urgencyScore)
    : "baixo";

  const strategicFocus = useMemo(() => {
    if (!profile || !urgentContent) {
      return "Configure o objetivo e responda mais questões para o VET gerar foco estratégico.";
    }

    const exam = profile.target_exam;
    const subject =
      profile.focus_subject === "todas"
        ? worstSubject?.label ?? "sua disciplina mais fraca"
        : profile.focus_subject;

    return `Para ${exam}, seu foco imediato deve estar em ${urgentContent.conteudo}. ${
      secondContent ? `Em seguida, priorize ${secondContent.conteudo}. ` : ""
    }Como o tempo até a prova é de ${profile.months_until_exam} mês(es), a recomendação é concentrar esforço em ${subject} com máxima prioridade nos conteúdos de maior incidência e menor aproveitamento.`;
  }, [profile, urgentContent, secondContent, worstSubject]);

  const showObjectiveForm = !profile || isEditingObjective;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">VET</h1>
            <p className="text-sm text-slate-500">
              Visão estratégica de treino
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando VET...</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700 font-medium">
              Você precisa estar logado para usar o VET.
            </p>
          </Card>
        ) : (
          <>
            <Card className="p-6 md:p-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <p className="text-sm uppercase tracking-wide text-emerald-100 mb-2">
                  Módulo estratégico
                </p>
                <h2 className="text-3xl font-bold mb-3">
                  Monte seu treino com foco na prova certa
                </h2>
                <p className="text-emerald-50 max-w-3xl leading-relaxed">
                  O VET cruza seu objetivo, seu tempo disponível e seu desempenho
                  real para mostrar onde você deve focar primeiro.
                </p>

                {profile && !showObjectiveForm ? (
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="rounded-2xl bg-white/15 px-4 py-2 text-sm">
                      <span className="font-semibold">Objetivo atual:</span>{" "}
                      {profile.target_exam} • {profile.months_until_exam} mês(es) •{" "}
                      {profile.hours_per_day}h/dia • foco em {profile.focus_subject}
                    </div>

                    <Button
                      variant="secondary"
                      className="rounded-2xl"
                      onClick={() => {
                        setIsEditingObjective(true);
                        setSuccess("");
                        setError("");
                      }}
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Novo objetivo
                    </Button>
                  </div>
                ) : null}
              </div>
            </Card>

            {showObjectiveForm ? (
              <Card className="p-6 md:p-8 border-emerald-200 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {profile ? "Definir novo objetivo" : "Configure seu objetivo"}
                    </h2>
                    <p className="text-sm text-slate-500">
                      Essas informações vão guiar o diagnóstico, as prioridades e o treino do VET.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSaveObjective} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Prova-alvo
                      </label>
                      <select
                        value={targetExam}
                        onChange={(e) => setTargetExam(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                      >
                        {EXAMS.map((exam) => (
                          <option key={exam} value={exam}>
                            {exam}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Meses até a prova
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={monthsUntilExam}
                        onChange={(e) => setMonthsUntilExam(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Horas por dia
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={hoursPerDay}
                        onChange={(e) => setHoursPerDay(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Disciplina foco
                      </label>
                      <select
                        value={focusSubject}
                        onChange={(e) => setFocusSubject(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                      >
                        {SUBJECTS.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Dias por semana que consegue estudar
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="7"
                      value={studyDaysPerWeek}
                      onChange={(e) => setStudyDaysPerWeek(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Quais dias da semana você consegue estudar?
                    </label>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {WEEKDAYS.map((day) => {
                        const selected = studyWeekdays.includes(day.value);

                        return (
                          <button
                            key={day.value}
                            type="button"
                            onClick={() => handleToggleWeekday(day.value)}
                            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                              selected
                                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400"
                            }`}
                          >
                            {day.label}
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-xs text-slate-500 mt-3">
                      Selecionados: {selectedDaysCount} dia(s)
                    </p>
                  </div>

                  {error ? (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  ) : null}

                  {success ? (
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
                      {success}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="submit"
                      disabled={savingObjective}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {savingObjective ? "Salvando..." : "Salvar objetivo"}
                    </Button>

                    {profile ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditingObjective(false);
                          setError("");
                          setSuccess("");
                        }}
                      >
                        Cancelar
                      </Button>
                    ) : null}
                  </div>
                </form>
              </Card>
            ) : null}

            {profile && !showObjectiveForm ? (
              <>
                <Card className="p-6 md:p-8 border-emerald-200 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Diagnóstico atual
                      </h2>
                      <p className="text-sm text-slate-500">
                        Agora o VET lê seu momento e mostra o que precisa de ataque primeiro.
                      </p>
                    </div>
                  </div>

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
                        {worstSubject
                          ? `${worstSubject.accuracy.toFixed(0)}% de acerto`
                          : "Responda mais questões"}
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
                        {bestSubject
                          ? `${bestSubject.accuracy.toFixed(0)}% de acerto`
                          : "Responda mais questões"}
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
                        {urgentContent
                          ? `Score ${urgentContent.urgencyScore}`
                          : "Responda mais questões"}
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

                  <Card className="p-6 mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BrainCircuit className="w-5 h-5 text-emerald-600" />
                      <h2 className="text-xl font-bold text-slate-900">
                        Foco recomendado
                      </h2>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{strategicFocus}</p>
                  </Card>

                  <div className="grid xl:grid-cols-2 gap-6 mt-6">
                    <Card className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Activity className="w-5 h-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-900">
                          Top prioridades
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {[urgentContent, secondContent, thirdContent]
                          .filter(Boolean)
                          .map((item, index) => {
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
                                  Peso na prova: {content.weight} • Aproveitamento:{" "}
                                  {content.accuracy.toFixed(0)}% • Erros: {content.wrong}
                                </p>
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

                    <Card className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="w-5 h-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-900">
                          Leitura do diagnóstico
                        </h2>
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
                          <p className="font-semibold text-slate-900">Próximo passo</p>
                          <p className="text-sm text-slate-600 mt-1">
                            Agora o ideal é transformar esse diagnóstico em prioridades, treino e questões recomendadas.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {nextModules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <Card
                        key={module.title}
                        className="p-6 rounded-2xl shadow-sm border border-slate-200 bg-white"
                      >
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-emerald-700" />
                          </div>

                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                            Disponível
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {module.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {module.description}
                        </p>

                        <Link href={module.href}>
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            Abrir módulo
                          </Button>
                        </Link>
                      </Card>
                    );
                  })}
                </div>
              </>
            ) : null}
          </>
        )}
      </main>
    </div>
  );
}
