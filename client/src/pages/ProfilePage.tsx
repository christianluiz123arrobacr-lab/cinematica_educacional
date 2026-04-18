import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  UserCircle2,
  Pencil,
  Save,
  Target,
  Trophy,
  Clock3,
  Flame,
  CalendarDays,
  BookOpen,
  TrendingDown,
  TrendingUp,
  BrainCircuit,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

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

type ProfileRow = {
  id: string;
  nome: string | null;
  email: string | null;
  role: string | null;
  ativo: boolean | null;
  created_at: string | null;
  last_seen_at?: string | null;
  avatar_key?: string | null;
  bio?: string | null;
  prova_alvo?: string | null;
  foco_atual?: string | null;
  meta_semanal_questoes?: number | null;
};

type EditableProfile = {
  nome: string;
  avatar_key: string;
  bio: string;
  prova_alvo: string;
  foco_atual: string;
  meta_semanal_questoes: string;
};

type GroupedStat = {
  label: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

const AVATAR_OPTIONS = [
  { key: "avatar_1", emoji: "🧠", bg: "from-blue-500 to-indigo-600" },
  { key: "avatar_2", emoji: "🚀", bg: "from-purple-500 to-fuchsia-600" },
  { key: "avatar_3", emoji: "⚡", bg: "from-amber-400 to-orange-500" },
  { key: "avatar_4", emoji: "📘", bg: "from-cyan-500 to-sky-600" },
  { key: "avatar_5", emoji: "🎯", bg: "from-emerald-500 to-green-600" },
  { key: "avatar_6", emoji: "🔥", bg: "from-rose-500 to-red-600" },
  { key: "avatar_7", emoji: "🛡️", bg: "from-slate-500 to-slate-700" },
  { key: "avatar_8", emoji: "🏆", bg: "from-yellow-400 to-amber-500" },
];

const INITIAL_FORM: EditableProfile = {
  nome: "",
  avatar_key: "avatar_1",
  bio: "",
  prova_alvo: "",
  foco_atual: "",
  meta_semanal_questoes: "",
};

function formatDate(date?: string | null) {
  if (!date) return "—";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "—";

  return parsed.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDateTime(date?: string | null) {
  if (!date) return "—";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "—";

  return parsed.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function groupAttempts(
  attempts: AttemptRow[],
  key: (attempt: AttemptRow) => string | null | undefined
): GroupedStat[] {
  const map = new Map<string, { total: number; correct: number; wrong: number }>();

  for (const attempt of attempts) {
    const label = key(attempt)?.trim() || "Não informado";
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
      accuracy: value.total > 0 ? (value.correct / value.total) * 100 : 0,
    }))
    .sort((a, b) => b.total - a.total || b.accuracy - a.accuracy);
}

function getActiveDateKeys(attempts: AttemptRow[]) {
  return Array.from(
    new Set(
      attempts.map((attempt) => {
        const date = new Date(attempt.answered_at);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
      })
    )
  ).sort();
}

function buildStreakInfo(attempts: AttemptRow[]) {
  const activeKeys = getActiveDateKeys(attempts);

  if (!activeKeys.length) {
    return {
      currentStreak: 0,
      bestStreak: 0,
      activeDays7: 0,
      activeDays30: 0,
    };
  }

  const today = new Date();
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const last7 = new Date(normalizedToday);
  last7.setDate(last7.getDate() - 6);

  const last30 = new Date(normalizedToday);
  last30.setDate(last30.getDate() - 29);

  const activeDays7 = activeKeys.filter((key) => new Date(`${key}T00:00:00`) >= last7).length;
  const activeDays30 = activeKeys.filter((key) => new Date(`${key}T00:00:00`) >= last30).length;

  let bestStreak = 1;
  let currentRun = 1;

  for (let i = 1; i < activeKeys.length; i++) {
    const prev = new Date(`${activeKeys[i - 1]}T00:00:00`);
    const curr = new Date(`${activeKeys[i]}T00:00:00`);
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / 86400000);

    if (diffDays === 1) {
      currentRun += 1;
      bestStreak = Math.max(bestStreak, currentRun);
    } else {
      currentRun = 1;
    }
  }

  let currentStreak = 0;
  const reversed = [...activeKeys].reverse();

  for (let i = 0; i < reversed.length; i++) {
    const curr = new Date(`${reversed[i]}T00:00:00`);

    if (i === 0) {
      const diffToToday = Math.round((normalizedToday.getTime() - curr.getTime()) / 86400000);

      if (diffToToday <= 1) currentStreak = 1;
      else break;
    } else {
      const prev = new Date(`${reversed[i - 1]}T00:00:00`);
      const diffDays = Math.round((prev.getTime() - curr.getTime()) / 86400000);

      if (diffDays === 1) currentStreak += 1;
      else break;
    }
  }

  return {
    currentStreak,
    bestStreak,
    activeDays7,
    activeDays30,
  };
}

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function buildRadarMetrics(attempts: AttemptRow[]) {
  const totalAnswered = attempts.length;
  const totalCorrect = attempts.filter((a) => a.is_correct).length;
  const accuracy = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

  const streakInfo = buildStreakInfo(attempts);

  const avgTimeValid = attempts.filter((a) => typeof a.time_spent_seconds === "number");
  const avgTime =
    avgTimeValid.length > 0
      ? avgTimeValid.reduce((sum, a) => sum + (a.time_spent_seconds ?? 0), 0) /
        avgTimeValid.length
      : 0;

  const uniqueConteudos = new Set(
    attempts.map((a) => a.conteudo?.trim()).filter(Boolean)
  ).size;

  const difficultyWeights = attempts
    .filter((a) => a.difficulty)
    .map((a) => {
      const difficulty = (a.difficulty || "").toLowerCase().trim();
      const weight = difficulty === "dificil" ? 3 : difficulty === "medio" ? 2 : 1;
      return a.is_correct ? weight : 0;
    });

  const maxDifficultyWeights = attempts
    .filter((a) => a.difficulty)
    .map((a) => {
      const difficulty = (a.difficulty || "").toLowerCase().trim();
      return difficulty === "dificil" ? 3 : difficulty === "medio" ? 2 : 1;
    });

  const difficultyScore =
    maxDifficultyWeights.length > 0
      ? (difficultyWeights.reduce((a, b) => a + b, 0) /
          maxDifficultyWeights.reduce((a, b) => a + b, 0)) *
        100
      : 0;

  const consistencyScore = clamp((streakInfo.activeDays30 / 20) * 100);
  const speedScore =
    avgTime > 0 ? clamp(((300 - avgTime) / 240) * 100) : 0;
  const coverageScore = clamp((uniqueConteudos / 20) * 100);

  return [
    { label: "Precisão", value: clamp(accuracy) },
    { label: "Consistência", value: consistencyScore },
    { label: "Velocidade", value: speedScore },
    { label: "Cobertura", value: coverageScore },
    { label: "Dificuldade", value: clamp(difficultyScore) },
  ];
}

function RadarChart({
  metrics,
}: {
  metrics: { label: string; value: number }[];
}) {
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const levels = 5;

  const points = metrics.map((metric, index) => {
    const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
    const r = (metric.value / 100) * radius;
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    return `${x},${y}`;
  });

  return (
    <div className="w-full flex justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {Array.from({ length: levels }).map((_, levelIndex) => {
          const levelRadius = radius * ((levelIndex + 1) / levels);
          const levelPoints = metrics.map((_, index) => {
            const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
            const x = center + Math.cos(angle) * levelRadius;
            const y = center + Math.sin(angle) * levelRadius;
            return `${x},${y}`;
          });

          return (
            <polygon
              key={levelIndex}
              points={levelPoints.join(" ")}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          );
        })}

        {metrics.map((metric, index) => {
          const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
          const x = center + Math.cos(angle) * radius;
          const y = center + Math.sin(angle) * radius;

          return (
            <g key={metric.label}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              <text
                x={center + Math.cos(angle) * (radius + 28)}
                y={center + Math.sin(angle) * (radius + 28)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-700 text-[12px] font-semibold"
              >
                {metric.label}
              </text>
            </g>
          );
        })}

        <polygon
          points={points.join(" ")}
          fill="rgba(59,130,246,0.18)"
          stroke="#2563eb"
          strokeWidth="3"
        />

        {metrics.map((metric, index) => {
          const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
          const r = (metric.value / 100) * radius;
          const x = center + Math.cos(angle) * r;
          const y = center + Math.sin(angle) * r;

          return <circle key={metric.label} cx={x} cy={y} r="5" fill="#2563eb" />;
        })}
      </svg>
    </div>
  );
}

function getAvatarConfig(avatarKey?: string | null) {
  return (
    AVATAR_OPTIONS.find((avatar) => avatar.key === avatarKey) ?? AVATAR_OPTIONS[0]
  );
}

export default function ProfilePage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [form, setForm] = useState<EditableProfile>(INITIAL_FORM);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setSuccessMessage("");

        const [profileResult, attemptsResult] = await Promise.all([
          supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
          supabase
            .from("user_question_attempts")
            .select("*")
            .eq("user_id", user.id)
            .order("answered_at", { ascending: false }),
        ]);

        if (profileResult.error) {
          console.error(profileResult.error);
          setError("Não foi possível carregar seu perfil.");
          return;
        }

        if (attemptsResult.error) {
          console.error(attemptsResult.error);
          setError("Não foi possível carregar suas estatísticas.");
          return;
        }

        const profileData = (profileResult.data as ProfileRow | null) ?? null;
        const attemptsData = (attemptsResult.data as AttemptRow[]) ?? [];

        setProfile(profileData);
        setAttempts(attemptsData);

        setForm({
          nome: profileData?.nome ?? user.user_metadata?.name ?? "",
          avatar_key: profileData?.avatar_key ?? "avatar_1",
          bio: profileData?.bio ?? "",
          prova_alvo: profileData?.prova_alvo ?? "",
          foco_atual: profileData?.foco_atual ?? "",
          meta_semanal_questoes: profileData?.meta_semanal_questoes
            ? String(profileData.meta_semanal_questoes)
            : "",
        });
      } catch (err) {
        console.error(err);
        setError("Ocorreu um erro inesperado ao carregar o perfil.");
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading) {
      loadData();
    }
  }, [user?.id, authLoading, user?.user_metadata]);

  function updateField<K extends keyof EditableProfile>(
    field: K,
    value: EditableProfile[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSaveProfile() {
    if (!user?.id || saving) return;

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      if (!form.nome.trim()) {
        setError("Preencha seu nome.");
        return;
      }

      const metaSemanal = form.meta_semanal_questoes.trim()
        ? Number(form.meta_semanal_questoes)
        : null;

      if (
        form.meta_semanal_questoes.trim() &&
        (Number.isNaN(metaSemanal) || metaSemanal! < 0)
      ) {
        setError("A meta semanal precisa ser um número válido.");
        return;
      }

      const payload = {
        id: user.id,
        nome: form.nome.trim(),
        email: profile?.email ?? user.email ?? null,
        avatar_key: form.avatar_key,
        bio: form.bio.trim() || null,
        prova_alvo: form.prova_alvo.trim() || null,
        foco_atual: form.foco_atual.trim() || null,
        meta_semanal_questoes: metaSemanal,
      };

      const { data, error } = await supabase
        .from("profiles")
        .upsert(payload, { onConflict: "id" })
        .select("*")
        .single();

      if (error) {
        console.error(error);
        setError("Não foi possível salvar seu perfil.");
        return;
      }

      setProfile(data as ProfileRow);
      setEditing(false);
      setSuccessMessage("Perfil salvo com sucesso.");
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro inesperado ao salvar o perfil.");
    } finally {
      setSaving(false);
    }
  }

  const totalAnswered = attempts.length;
  const totalCorrect = useMemo(
    () => attempts.filter((attempt) => attempt.is_correct).length,
    [attempts]
  );
  const totalWrong = totalAnswered - totalCorrect;
  const accuracy = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

  const avgTimeSeconds = useMemo(() => {
    const valid = attempts.filter((a) => typeof a.time_spent_seconds === "number");
    if (!valid.length) return 0;
    return (
      valid.reduce((sum, a) => sum + (a.time_spent_seconds ?? 0), 0) / valid.length
    );
  }, [attempts]);

  const streakInfo = useMemo(() => buildStreakInfo(attempts), [attempts]);

  const bySubject = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.subject),
    [attempts]
  );

  const byConteudo = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.conteudo),
    [attempts]
  );

  const bestSubject = useMemo(() => {
    return bySubject
      .filter((item) => item.total >= 2)
      .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)[0];
  }, [bySubject]);

  const worstSubject = useMemo(() => {
    return bySubject
      .filter((item) => item.total >= 2)
      .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)[0];
  }, [bySubject]);

  const mostTrainedConteudo = useMemo(() => byConteudo[0], [byConteudo]);

  const mostCriticalConteudo = useMemo(() => {
    return byConteudo
      .filter((item) => item.total >= 2)
      .sort((a, b) => b.wrong - a.wrong || a.accuracy - b.accuracy)[0];
  }, [byConteudo]);

  const weeklyAttempts = useMemo(() => {
    const now = new Date();
    const cutoff = new Date(now);
    cutoff.setDate(cutoff.getDate() - 7);

    return attempts.filter((attempt) => new Date(attempt.answered_at) >= cutoff);
  }, [attempts]);

  const weeklyQuestions = weeklyAttempts.length;
  const weeklyGoal = Number(profile?.meta_semanal_questoes ?? 0);
  const weeklyGoalPercent =
    weeklyGoal > 0 ? Math.min(100, (weeklyQuestions / weeklyGoal) * 100) : 0;

  const recentAttempts = useMemo(() => attempts.slice(0, 5), [attempts]);

  const uniqueConteudos = useMemo(
    () => new Set(attempts.map((a) => a.conteudo?.trim()).filter(Boolean)).size,
    [attempts]
  );

  const radarMetrics = useMemo(() => buildRadarMetrics(attempts), [attempts]);

  const recommendations = useMemo(() => {
    const recs: string[] = [];

    if (mostCriticalConteudo) {
      recs.push(`Revisar ${mostCriticalConteudo.label}, que é seu conteúdo mais crítico agora.`);
    }

    if (worstSubject) {
      recs.push(`Retomar ${worstSubject.label}, sua disciplina mais fraca no momento.`);
    }

    if (weeklyGoal > 0 && weeklyQuestions < weeklyGoal) {
      recs.push(
        `Faltam ${weeklyGoal - weeklyQuestions} questões para bater sua meta semanal.`
      );
    }

    if (streakInfo.currentStreak <= 1) {
      recs.push("Tente manter sequência de estudo por mais dias seguidos.");
    }

    if (!recs.length) {
      recs.push("Seu perfil está equilibrado. Continue mantendo ritmo e revisões.");
    }

    return recs.slice(0, 4);
  }, [
    mostCriticalConteudo,
    worstSubject,
    weeklyGoal,
    weeklyQuestions,
    streakInfo.currentStreak,
  ]);

  const avatar = getAvatarConfig(form.avatar_key);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <h1 className="text-2xl font-bold text-slate-900">Perfil do Aluno</h1>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando perfil...</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700">Você precisa estar logado para ver seu perfil.</p>
          </Card>
        ) : (
          <>
            {error ? (
              <Card className="p-5 border-red-200 bg-red-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h2 className="text-lg font-bold text-red-700 mb-1">Erro no perfil</h2>
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
              </Card>
            ) : null}

            {successMessage ? (
              <Card className="p-5 border-emerald-200 bg-emerald-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <p className="text-emerald-700 font-medium">{successMessage}</p>
                </div>
              </Card>
            ) : null}

            <Card className="p-6 md:p-8 border-slate-200 bg-white">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${avatar.bg} text-white flex items-center justify-center text-4xl shadow-lg`}
                  >
                    {avatar.emoji}
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                      Central do aluno
                    </p>
                    <h2 className="text-3xl font-bold text-slate-900">
                      {form.nome || user.email || "Aluno"}
                    </h2>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        {form.prova_alvo || "Prova-alvo não definida"}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                        {form.foco_atual || "Foco atual não definido"}
                      </span>
                    </div>

                    <p className="text-slate-600 mt-4 max-w-2xl">
                      {form.bio || "Adicione uma bio curta para deixar seu perfil mais pessoal."}
                    </p>

                    <p className="text-sm text-slate-500 mt-3">
                      Na plataforma desde {formatDate(profile?.created_at)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {!editing ? (
                    <Button
                      variant="outline"
                      className="rounded-2xl"
                      onClick={() => {
                        setEditing(true);
                        setError("");
                        setSuccessMessage("");
                      }}
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Editar perfil
                    </Button>
                  ) : (
                    <Button
                      className="rounded-2xl"
                      onClick={handleSaveProfile}
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Salvando...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Salvar perfil
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {editing ? (
              <Card className="p-6 border-slate-200 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-5">Editar perfil</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Escolha seu avatar
                    </label>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                      {AVATAR_OPTIONS.map((option) => (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => updateField("avatar_key", option.key)}
                          className={`h-16 rounded-2xl bg-gradient-to-br ${option.bg} text-white text-2xl flex items-center justify-center border-2 transition-all ${
                            form.avatar_key === option.key
                              ? "border-slate-900 scale-105"
                              : "border-transparent"
                          }`}
                        >
                          {option.emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nome
                      </label>
                      <input
                        value={form.nome}
                        onChange={(e) => updateField("nome", e.target.value)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Prova-alvo
                      </label>
                      <input
                        value={form.prova_alvo}
                        onChange={(e) => updateField("prova_alvo", e.target.value)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
                        placeholder="Ex.: ITA, IME, FUVEST"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Foco atual
                      </label>
                      <input
                        value={form.foco_atual}
                        onChange={(e) => updateField("foco_atual", e.target.value)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
                        placeholder="Ex.: Física, Matemática, revisão"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Meta semanal de questões
                      </label>
                      <input
                        value={form.meta_semanal_questoes}
                        onChange={(e) =>
                          updateField("meta_semanal_questoes", e.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
                        placeholder="Ex.: 70"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Bio curta
                    </label>
                    <textarea
                      rows={4}
                      value={form.bio}
                      onChange={(e) => updateField("bio", e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3"
                      placeholder="Fale rapidamente sobre seu momento de estudo."
                    />
                  </div>
                </div>
              </Card>
            ) : null}

            <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-4">
              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Questões resolvidas</p>
                <p className="text-3xl font-bold text-slate-900">{totalAnswered}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Taxa de acerto</p>
                <p className="text-3xl font-bold text-emerald-600">{accuracy.toFixed(0)}%</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Tempo médio</p>
                <p className="text-3xl font-bold text-purple-600">
                  {formatSeconds(Math.round(avgTimeSeconds))}
                </p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Sequência atual</p>
                <p className="text-3xl font-bold text-orange-600">{streakInfo.currentStreak}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Dias ativos 30d</p>
                <p className="text-3xl font-bold text-blue-600">{streakInfo.activeDays30}</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-slate-500 mb-1">Meta da semana</p>
                <p className="text-3xl font-bold text-slate-900">
                  {weeklyGoal > 0 ? `${weeklyQuestions}/${weeklyGoal}` : weeklyQuestions}
                </p>
              </Card>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">Leitura do seu perfil</h3>
                </div>

                <RadarChart metrics={radarMetrics} />

                <div className="grid md:grid-cols-2 gap-3 mt-6">
                  {radarMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                    >
                      <p className="text-sm text-slate-500">{metric.label}</p>
                      <p className="text-lg font-bold text-slate-900">
                        {metric.value.toFixed(0)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-xl font-bold text-slate-900">Sua identidade acadêmica</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-700 mb-1">
                      Melhor disciplina
                    </p>
                    <p className="font-bold text-slate-900">
                      {bestSubject?.label ?? "Sem dados ainda"}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {bestSubject ? `${bestSubject.accuracy.toFixed(0)}% de acerto` : "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="text-sm font-semibold text-red-700 mb-1">
                      Disciplina mais fraca
                    </p>
                    <p className="font-bold text-slate-900">
                      {worstSubject?.label ?? "Sem dados ainda"}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {worstSubject ? `${worstSubject.accuracy.toFixed(0)}% de acerto` : "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-blue-700 mb-1">
                      Conteúdo mais treinado
                    </p>
                    <p className="font-bold text-slate-900">
                      {mostTrainedConteudo?.label ?? "Sem dados ainda"}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {mostTrainedConteudo ? `${mostTrainedConteudo.total} tentativas` : "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                    <p className="text-sm font-semibold text-orange-700 mb-1">
                      Conteúdo mais crítico
                    </p>
                    <p className="font-bold text-slate-900">
                      {mostCriticalConteudo?.label ?? "Sem dados ainda"}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {mostCriticalConteudo ? `${mostCriticalConteudo.wrong} erros` : "—"}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-bold text-slate-900">Objetivo atual</h3>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm text-slate-500 mb-1">Prova-alvo</p>
                    <p className="font-bold text-slate-900">
                      {form.prova_alvo || "Ainda não definida"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm text-slate-500 mb-1">Foco atual</p>
                    <p className="font-bold text-slate-900">
                      {form.foco_atual || "Ainda não definido"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm text-slate-500 mb-2">Meta semanal</p>
                    <p className="font-bold text-slate-900 mb-3">
                      {weeklyGoal > 0
                        ? `${weeklyQuestions} de ${weeklyGoal} questões`
                        : `${weeklyQuestions} questões nesta semana`}
                    </p>

                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                        style={{ width: `${weeklyGoalPercent}%` }}
                      />
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      {weeklyGoal > 0
                        ? `${weeklyGoalPercent.toFixed(0)}% da meta concluída`
                        : "Defina uma meta semanal para acompanhar seu ritmo"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-bold text-slate-900">O que fazer agora</h3>
                </div>

                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-slate-700"
                    >
                      {rec}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  <Link href="/progress">
                    <Button variant="outline" className="rounded-2xl">
                      Ver progresso
                    </Button>
                  </Link>

                  <Link href="/caderno-de-erros">
                    <Button className="rounded-2xl">Abrir caderno de erros</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Últimas atividades</h3>
              </div>

              {recentAttempts.length > 0 ? (
                <div className="space-y-3">
                  {recentAttempts.map((attempt) => (
                    <div
                      key={attempt.id}
                      className="rounded-xl border border-slate-200 p-4 bg-white flex flex-col gap-2"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`text-sm font-bold ${
                            attempt.is_correct ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {attempt.is_correct ? "Acertou" : "Errou"}
                        </span>

                        <span className="text-sm text-slate-500">
                          {formatDateTime(attempt.answered_at)}
                        </span>
                      </div>

                      <p className="font-semibold text-slate-900">
                        {attempt.subject ?? "Sem disciplina"} •{" "}
                        {attempt.conteudo ?? "Sem conteúdo"}
                        {attempt.assunto ? ` • ${attempt.assunto}` : ""}
                      </p>

                      <p className="text-sm text-slate-500">
                        {attempt.banca ?? "Sem banca"}{" "}
                        {attempt.ano ? `• ${attempt.ano}` : ""}
                        {attempt.difficulty ? ` • ${attempt.difficulty}` : ""}
                        {" • "}
                        {formatSeconds(attempt.time_spent_seconds)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">Ainda não há atividade suficiente para mostrar aqui.</p>
              )}
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
