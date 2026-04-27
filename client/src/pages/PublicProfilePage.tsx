import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Trophy,
  Target,
  Clock3,
  Flame,
  BookOpen,
  BarChart3,
  Shield,
  UserCircle2,
  Pencil,
  CalendarDays,
} from "lucide-react";

type AttemptRow = {
  id: string;
  user_id: string;
  question_id: string;
  is_correct: boolean;
  time_spent_seconds: number | null;
  answered_at: string;
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
  email?: string | null;
  role?: string | null;
  ativo?: boolean | null;
  created_at?: string | null;
  last_seen_at?: string | null;
  avatar_key?: string | null;
  bio?: string | null;
  prova_alvo?: string | null;
  foco_atual?: string | null;
  meta_semanal_questoes?: number | null;
};

type GroupedStat = {
  label: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

type RankingEntry = {
  userId: string;
  nome: string;
  avatarKey: string;
  score: number;
  correctCount: number;
  totalAttempts: number;
  accuracy: number;
  avgTimeSeconds: number;
  lastActivityAt: string | null;
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
  { key: "avatar_9", emoji: "📈", bg: "from-teal-500 to-cyan-600" },
  { key: "avatar_10", emoji: "🧪", bg: "from-violet-500 to-purple-700" },
  { key: "avatar_11", emoji: "🛰️", bg: "from-sky-500 to-blue-700" },
  { key: "avatar_12", emoji: "⚙️", bg: "from-zinc-500 to-slate-700" },
];

function getAvatarConfig(avatarKey?: string | null) {
  return AVATAR_OPTIONS.find((avatar) => avatar.key === avatarKey) ?? AVATAR_OPTIONS[0];
}

function getDifficultyPoints(difficulty?: string | null) {
  const value = (difficulty || "").trim().toLowerCase();

  if (value === "facil") return 2;
  if (value === "medio") return 4;
  if (value === "dificil") return 7;

  return 0;
}

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";

  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);

  if (min === 0) return `${sec}s`;

  return `${min}m ${sec}s`;
}

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

function getAverageTime(attempts: AttemptRow[]) {
  const timedAttempts = attempts.filter(
    (attempt) => typeof attempt.time_spent_seconds === "number"
  );

  if (!timedAttempts.length) return 0;

  return (
    timedAttempts.reduce(
      (sum, attempt) => sum + (attempt.time_spent_seconds ?? 0),
      0
    ) / timedAttempts.length
  );
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
      accuracy: value.total > 0 ? (value.correct / value.total) * 100 : 0,
    }))
    .sort((a, b) => b.total - a.total || b.accuracy - a.accuracy);
}

function getUniqueCorrectAttempts(attempts: AttemptRow[]) {
  const uniqueCorrectByQuestion = new Map<string, AttemptRow>();

  for (const attempt of attempts) {
    if (!attempt.is_correct) continue;
    if (!attempt.question_id) continue;

    const existing = uniqueCorrectByQuestion.get(attempt.question_id);

    if (!existing) {
      uniqueCorrectByQuestion.set(attempt.question_id, attempt);
      continue;
    }

    const existingDate = new Date(existing.answered_at).getTime();
    const currentDate = new Date(attempt.answered_at).getTime();

    if (currentDate < existingDate) {
      uniqueCorrectByQuestion.set(attempt.question_id, attempt);
    }
  }

  return Array.from(uniqueCorrectByQuestion.values());
}

function getScoreFromAttempts(attempts: AttemptRow[]) {
  return attempts.reduce(
    (sum, attempt) => sum + getDifficultyPoints(attempt.difficulty),
    0
  );
}

function getActiveDateKeys(attempts: AttemptRow[]) {
  return Array.from(
    new Set(
      attempts.map((attempt) => {
        const date = new Date(attempt.answered_at);

        if (Number.isNaN(date.getTime())) return "";

        return date.toISOString().slice(0, 10);
      })
    )
  ).filter(Boolean);
}

function buildStreak(attempts: AttemptRow[]) {
  const activeDateKeys = getActiveDateKeys(attempts);

  if (!activeDateKeys.length) {
    return {
      currentStreak: 0,
      bestStreak: 0,
    };
  }

  const sorted = activeDateKeys.sort();
  let bestStreak = 1;
  let currentChain = 1;

  for (let i = 1; i < sorted.length; i++) {
    const previous = new Date(sorted[i - 1]);
    const current = new Date(sorted[i]);

    const diffDays = Math.round(
      (current.getTime() - previous.getTime()) / (24 * 60 * 60 * 1000)
    );

    if (diffDays === 1) {
      currentChain += 1;
    } else {
      currentChain = 1;
    }

    bestStreak = Math.max(bestStreak, currentChain);
  }

  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  const lastActiveKey = sorted[sorted.length - 1];

  if (lastActiveKey !== todayKey && lastActiveKey !== yesterdayKey) {
    return {
      currentStreak: 0,
      bestStreak,
    };
  }

  let currentStreak = 1;

  for (let i = sorted.length - 1; i > 0; i--) {
    const current = new Date(sorted[i]);
    const previous = new Date(sorted[i - 1]);

    const diffDays = Math.round(
      (current.getTime() - previous.getTime()) / (24 * 60 * 60 * 1000)
    );

    if (diffDays === 1) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return {
    currentStreak,
    bestStreak,
  };
}

function buildRanking(profiles: ProfileRow[], attempts: AttemptRow[]) {
  const profilesMap = new Map<string, ProfileRow>();

  for (const profile of profiles) {
    if (profile.ativo === false) continue;
    profilesMap.set(profile.id, profile);
  }

  const byUser = new Map<string, AttemptRow[]>();

  for (const attempt of attempts) {
    if (!attempt.user_id) continue;
    if (!profilesMap.has(attempt.user_id)) continue;

    const current = byUser.get(attempt.user_id) ?? [];
    current.push(attempt);
    byUser.set(attempt.user_id, current);
  }

  const rows: RankingEntry[] = [];

  for (const [userId, userAttempts] of byUser.entries()) {
    const profile = profilesMap.get(userId);

    if (!profile) continue;

    const uniqueCorrectAttempts = getUniqueCorrectAttempts(userAttempts);
    const score = getScoreFromAttempts(uniqueCorrectAttempts);
    const correctCount = uniqueCorrectAttempts.length;
    const totalAttempts = userAttempts.length;
    const accuracy = totalAttempts > 0 ? (correctCount / totalAttempts) * 100 : 0;
    const avgTimeSeconds = getAverageTime(userAttempts);

    const lastActivityAt =
      userAttempts.length > 0
        ? userAttempts
            .map((attempt) => attempt.answered_at)
            .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]
        : null;

    rows.push({
      userId,
      nome: profile.nome?.trim() || "Aluno",
      avatarKey: profile.avatar_key || "avatar_1",
      score,
      correctCount,
      totalAttempts,
      accuracy,
      avgTimeSeconds,
      lastActivityAt,
    });
  }

  return rows
    .filter((row) => row.correctCount > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;

      const aTime = a.avgTimeSeconds || Number.MAX_SAFE_INTEGER;
      const bTime = b.avgTimeSeconds || Number.MAX_SAFE_INTEGER;

      if (aTime !== bTime) return aTime - bTime;

      const aLast = a.lastActivityAt ? new Date(a.lastActivityAt).getTime() : 0;
      const bLast = b.lastActivityAt ? new Date(b.lastActivityAt).getTime() : 0;

      return bLast - aLast;
    });
}

export default function PublicProfilePage() {
  const [, params] = useRoute("/perfil/:userId");
  const { user, loading: authLoading } = useSupabaseAuth();

  const userId = params?.userId ?? "";
  const isOwnProfile = user?.id === userId;

  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [allAttempts, setAllAttempts] = useState<AttemptRow[]>([]);
  const [allProfiles, setAllProfiles] = useState<ProfileRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPublicProfile() {
      if (!userId) {
        setError("Perfil não encontrado.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const [profileResult, userAttemptsResult, allAttemptsResult, profilesResult] =
          await Promise.all([
            supabase
              .from("profiles")
              .select(
                "id, nome, ativo, created_at, last_seen_at, avatar_key, bio, prova_alvo, foco_atual, meta_semanal_questoes"
              )
              .eq("id", userId)
              .maybeSingle(),

            supabase
              .from("user_question_attempts")
              .select("*")
              .eq("user_id", userId)
              .order("answered_at", { ascending: false }),

            supabase
              .from("user_question_attempts")
              .select("*")
              .order("answered_at", { ascending: false }),

            supabase
              .from("profiles")
              .select("id, nome, avatar_key, ativo"),
          ]);

        if (profileResult.error) {
          console.error("Erro ao carregar perfil público:", profileResult.error);
          setError("Não foi possível carregar esse perfil.");
          return;
        }

        if (userAttemptsResult.error) {
          console.error("Erro ao carregar tentativas do perfil:", userAttemptsResult.error);
          setError("Não foi possível carregar as estatísticas desse perfil.");
          return;
        }

        if (allAttemptsResult.error) {
          console.error("Erro ao carregar ranking do perfil:", allAttemptsResult.error);
          setError("Não foi possível carregar a posição no ranking.");
          return;
        }

        if (profilesResult.error) {
          console.error("Erro ao carregar perfis do ranking:", profilesResult.error);
          setError("Não foi possível carregar os dados do ranking.");
          return;
        }

        const profileData = (profileResult.data as ProfileRow | null) ?? null;

        if (!profileData || profileData.ativo === false) {
          setError("Esse perfil não está disponível.");
          return;
        }

        setProfile(profileData);
        setAttempts((userAttemptsResult.data as AttemptRow[]) ?? []);
        setAllAttempts((allAttemptsResult.data as AttemptRow[]) ?? []);
        setAllProfiles((profilesResult.data as ProfileRow[]) ?? []);
      } catch (err) {
        console.error("Erro inesperado ao carregar perfil público:", err);
        setError("Ocorreu um erro inesperado ao carregar esse perfil.");
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading) {
      loadPublicProfile();
    }
  }, [authLoading, userId]);

  const avatar = getAvatarConfig(profile?.avatar_key);
  const displayName = profile?.nome?.trim() || "Aluno";

  const totalAnswered = attempts.length;
  const totalCorrect = useMemo(
    () => attempts.filter((attempt) => attempt.is_correct).length,
    [attempts]
  );
  const totalWrong = totalAnswered - totalCorrect;
  const accuracy = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

  const uniqueCorrectAttempts = useMemo(
    () => getUniqueCorrectAttempts(attempts),
    [attempts]
  );

  const score = useMemo(
    () => getScoreFromAttempts(uniqueCorrectAttempts),
    [uniqueCorrectAttempts]
  );

  const avgTimeSeconds = useMemo(() => getAverageTime(attempts), [attempts]);
  const streak = useMemo(() => buildStreak(attempts), [attempts]);

  const bySubject = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.subject),
    [attempts]
  );

  const byConteudo = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.conteudo),
    [attempts]
  );

  const byBanca = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.banca),
    [attempts]
  );

  const ranking = useMemo(
    () => buildRanking(allProfiles, allAttempts),
    [allProfiles, allAttempts]
  );

  const rankingIndex = useMemo(
    () => ranking.findIndex((entry) => entry.userId === userId),
    [ranking, userId]
  );

  const rankingPosition = rankingIndex >= 0 ? rankingIndex + 1 : null;

  const lastActivityAt =
    attempts.length > 0
      ? attempts
          .map((attempt) => attempt.answered_at)
          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/ranking">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao ranking
              </Button>
            </Link>

            <h1 className="text-2xl font-bold text-slate-900">Perfil público</h1>
          </div>

          {isOwnProfile ? (
            <Link href="/perfil">
              <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white">
                <Pencil className="w-4 h-4 mr-2" />
                Editar meu perfil
              </Button>
            </Link>
          ) : null}
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando perfil...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700">{error}</p>
          </Card>
        ) : profile ? (
          <>
            <Card className="p-6 md:p-8 bg-white border-slate-200 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-70"></div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${avatar.bg} text-white flex items-center justify-center text-6xl shadow-xl`}
                  >
                    {avatar.emoji}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        Perfil público
                      </span>

                      {isOwnProfile ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
                          Você
                        </span>
                      ) : null}
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 mb-2">
                      {displayName}
                    </h2>

                    <p className="text-slate-600 max-w-2xl">
                      {profile.bio?.trim()
                        ? profile.bio
                        : "Esse aluno ainda não escreveu uma bio. O mistério, aparentemente, também é uma estratégia de estudo."}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:min-w-[360px]">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-500 mb-1">Ranking geral</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {rankingPosition ? `#${rankingPosition}` : "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-500 mb-1">Score</p>
                    <p className="text-2xl font-bold text-slate-900">{score}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card className="p-5 bg-white border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Questões resolvidas</p>
                <p className="text-3xl font-bold text-slate-900">{totalAnswered}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {totalCorrect} certas • {totalWrong} erradas
                </p>
              </Card>

              <Card className="p-5 bg-white border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Taxa de acerto</p>
                <p className="text-3xl font-bold text-slate-900">
                  {accuracy.toFixed(0)}%
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  considerando todas as tentativas
                </p>
              </Card>

              <Card className="p-5 bg-white border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Sequência atual</p>
                <p className="text-3xl font-bold text-slate-900">
                  {streak.currentStreak}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  melhor sequência: {streak.bestStreak}
                </p>
              </Card>

              <Card className="p-5 bg-white border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <Clock3 className="w-5 h-5" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Tempo médio</p>
                <p className="text-3xl font-bold text-slate-900">
                  {formatSeconds(Math.round(avgTimeSeconds))}
                </p>
                <p className="text-sm text-slate-500 mt-1">por tentativa</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <UserCircle2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">Informações</h3>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-500 mb-1">Prova alvo</p>
                    <p className="font-bold text-slate-900">
                      {profile.prova_alvo?.trim() || "Não informado"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-500 mb-1">Foco atual</p>
                    <p className="font-bold text-slate-900">
                      {profile.foco_atual?.trim() || "Não informado"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-500 mb-1">Meta semanal</p>
                    <p className="font-bold text-slate-900">
                      {profile.meta_semanal_questoes
                        ? `${profile.meta_semanal_questoes} questões`
                        : "Não informado"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <h3 className="text-xl font-bold text-slate-900">Resumo competitivo</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                    <p className="text-sm text-amber-700 mb-1">Posição</p>
                    <p className="text-3xl font-bold text-slate-900">
                      {rankingPosition ? `#${rankingPosition}` : "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
                    <p className="text-sm text-blue-700 mb-1">Acertos únicos</p>
                    <p className="text-3xl font-bold text-slate-900">
                      {uniqueCorrectAttempts.length}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-sm text-emerald-700 mb-1">Última atividade</p>
                    <p className="text-lg font-bold text-slate-900">
                      {formatDateTime(lastActivityAt)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="w-4 h-4 text-slate-500" />
                    <p className="font-bold text-slate-900">Na plataforma desde</p>
                  </div>
                  <p className="text-slate-600">
                    {formatDate(profile.created_at)}
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h3 className="text-xl font-bold text-slate-900">Disciplinas</h3>
                </div>

                {bySubject.length > 0 ? (
                  <div className="space-y-3">
                    {bySubject.slice(0, 5).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-slate-50 border border-slate-200 p-4"
                      >
                        <div className="flex justify-between gap-3 mb-1">
                          <p className="font-bold text-slate-900">{item.label}</p>
                          <p className="text-sm font-bold text-slate-700">
                            {item.accuracy.toFixed(0)}%
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">
                          {item.total} tentativas • {item.correct} acertos
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">Ainda sem dados por disciplina.</p>
                )}
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">Conteúdos</h3>
                </div>

                {byConteudo.length > 0 ? (
                  <div className="space-y-3">
                    {byConteudo.slice(0, 5).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-slate-50 border border-slate-200 p-4"
                      >
                        <div className="flex justify-between gap-3 mb-1">
                          <p className="font-bold text-slate-900">{item.label}</p>
                          <p className="text-sm font-bold text-slate-700">
                            {item.accuracy.toFixed(0)}%
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">
                          {item.total} tentativas • {item.correct} acertos
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">Ainda sem dados por conteúdo.</p>
                )}
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-slate-700" />
                  <h3 className="text-xl font-bold text-slate-900">Bancas</h3>
                </div>

                {byBanca.length > 0 ? (
                  <div className="space-y-3">
                    {byBanca.slice(0, 5).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-slate-50 border border-slate-200 p-4"
                      >
                        <div className="flex justify-between gap-3 mb-1">
                          <p className="font-bold text-slate-900">{item.label}</p>
                          <p className="text-sm font-bold text-slate-700">
                            {item.accuracy.toFixed(0)}%
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">
                          {item.total} tentativas • {item.correct} acertos
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">Ainda sem dados por banca.</p>
                )}
              </Card>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
