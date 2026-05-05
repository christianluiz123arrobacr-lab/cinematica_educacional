import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Trophy,
  Medal,
  Crown,
  Shield,
  UserCircle2,
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
  avatar_key?: string | null;
  ativo?: boolean | null;
};

type RankingPeriod = "24h" | "7d" | "30d" | "all";

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
  easyCorrect: number;
  mediumCorrect: number;
  hardCorrect: number;
};

const PERIOD_OPTIONS: Array<{ key: RankingPeriod; label: string }> = [
  { key: "24h", label: "24h" },
  { key: "7d", label: "1 semana" },
  { key: "30d", label: "1 mês" },
  { key: "all", label: "Todo período" },
];

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
  return (
    AVATAR_OPTIONS.find((avatar) => avatar.key === avatarKey) ??
    AVATAR_OPTIONS[0]
  );
}

function getDifficultyPoints(difficulty?: string | null) {
  const value = (difficulty || "").trim().toLowerCase();

  if (value === "facil") return 2;
  if (value === "medio") return 4;
  if (value === "dificil") return 7;

  return 0;
}

function getDifficultyBucket(difficulty?: string | null) {
  const value = (difficulty || "").trim().toLowerCase();

  if (value === "facil") return "easy";
  if (value === "medio") return "medium";
  if (value === "dificil") return "hard";

  return "unknown";
}

function getCutoffDate(period: RankingPeriod) {
  if (period === "all") return null;

  const now = new Date();

  if (period === "24h") {
    return new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }

  if (period === "7d") {
    const date = new Date(now);
    date.setDate(date.getDate() - 7);
    return date;
  }

  if (period === "30d") {
    const date = new Date(now);
    date.setDate(date.getDate() - 30);
    return date;
  }

  return null;
}

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";

  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);

  if (min === 0) return `${sec}s`;

  return `${min}m ${sec}s`;
}

function formatDateTime(date?: string | null) {
  if (!date) return "—";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "—";

  return parsed.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function RankingPage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [period, setPeriod] = useState<RankingPeriod>("7d");

  function getProfileHref(userId: string) {
    return userId === user?.id ? "/perfil" : `/perfil/${userId}`;
  }

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const [attemptsResult, profilesResult] = await Promise.all([
          supabase
            .from("user_question_attempts")
            .select("*")
            .order("answered_at", { ascending: false }),

          supabase
            .from("profiles")
            .select("id, nome, avatar_key, ativo"),
        ]);

        if (attemptsResult.error) {
          console.error(
            "Erro ao carregar tentativas do ranking:",
            attemptsResult.error
          );
          setError("Não foi possível carregar os dados do ranking.");
          return;
        }

        if (profilesResult.error) {
          console.error(
            "Erro ao carregar perfis do ranking:",
            profilesResult.error
          );
          setError("Não foi possível carregar os perfis do ranking.");
          return;
        }

        setAttempts((attemptsResult.data as AttemptRow[]) ?? []);
        setProfiles((profilesResult.data as ProfileRow[]) ?? []);
      } catch (err) {
        console.error("Erro inesperado ao carregar ranking:", err);
        setError("Ocorreu um erro inesperado ao carregar o ranking.");
      } finally {
        setLoading(false);
      }
    }

    if (!authLoading) {
      loadData();
    }
  }, [authLoading]);

  const filteredAttempts = useMemo(() => {
    const cutoff = getCutoffDate(period);

    if (!cutoff) return attempts;

    return attempts.filter(
      (attempt) => new Date(attempt.answered_at) >= cutoff
    );
  }, [attempts, period]);

  const ranking = useMemo(() => {
    const profilesMap = new Map<string, ProfileRow>();

    for (const profile of profiles) {
      if (profile.ativo === false) continue;

      profilesMap.set(profile.id, profile);
    }

    const byUser = new Map<string, AttemptRow[]>();

    for (const attempt of filteredAttempts) {
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

      const uniqueCorrectByQuestion = new Map<string, AttemptRow>();

      for (const attempt of userAttempts) {
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

      let score = 0;
      let easyCorrect = 0;
      let mediumCorrect = 0;
      let hardCorrect = 0;

      for (const attempt of uniqueCorrectByQuestion.values()) {
        const bucket = getDifficultyBucket(attempt.difficulty);
        const points = getDifficultyPoints(attempt.difficulty);

        score += points;

        if (bucket === "easy") easyCorrect += 1;
        if (bucket === "medium") mediumCorrect += 1;
        if (bucket === "hard") hardCorrect += 1;
      }

      const correctCount = uniqueCorrectByQuestion.size;
      const totalAttempts = userAttempts.length;
      const accuracy =
        totalAttempts > 0 ? (correctCount / totalAttempts) * 100 : 0;

      const timedAttempts = userAttempts.filter(
        (attempt) => typeof attempt.time_spent_seconds === "number"
      );

      const avgTimeSeconds =
        timedAttempts.length > 0
          ? timedAttempts.reduce(
              (sum, attempt) => sum + (attempt.time_spent_seconds ?? 0),
              0
            ) / timedAttempts.length
          : 0;

      const lastActivityAt =
        userAttempts.length > 0
          ? userAttempts
              .map((attempt) => attempt.answered_at)
              .sort(
                (a, b) =>
                  new Date(b).getTime() - new Date(a).getTime()
              )[0]
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
        easyCorrect,
        mediumCorrect,
        hardCorrect,
      });
    }

    return rows
      .filter((row) => row.correctCount > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;

        if (b.correctCount !== a.correctCount) {
          return b.correctCount - a.correctCount;
        }

        if (b.accuracy !== a.accuracy) {
          return b.accuracy - a.accuracy;
        }

        const aTime = a.avgTimeSeconds || Number.MAX_SAFE_INTEGER;
        const bTime = b.avgTimeSeconds || Number.MAX_SAFE_INTEGER;

        if (aTime !== bTime) return aTime - bTime;

        const aLast = a.lastActivityAt
          ? new Date(a.lastActivityAt).getTime()
          : 0;

        const bLast = b.lastActivityAt
          ? new Date(b.lastActivityAt).getTime()
          : 0;

        return bLast - aLast;
      });
  }, [filteredAttempts, profiles]);

  const myIndex = useMemo(() => {
    if (!user?.id) return -1;

    return ranking.findIndex((entry) => entry.userId === user.id);
  }, [ranking, user?.id]);

  const myEntry = myIndex >= 0 ? ranking[myIndex] : null;
  const nextEntry = myIndex > 0 ? ranking[myIndex - 1] : null;
  const top3 = ranking.slice(0, 3);

  function renderTopCard(entry: RankingEntry, position: number) {
    const avatar = getAvatarConfig(entry.avatarKey);

    const positionConfig =
      position === 1
        ? {
            icon: Crown,
            badge: "1º lugar",
            border: "border-yellow-200",
            cardBg: "bg-yellow-50",
          }
        : position === 2
          ? {
              icon: Trophy,
              badge: "2º lugar",
              border: "border-slate-200",
              cardBg: "bg-slate-50",
            }
          : {
              icon: Medal,
              badge: "3º lugar",
              border: "border-orange-200",
              cardBg: "bg-orange-50",
            };

    const Icon = positionConfig.icon;

    return (
      <Link key={entry.userId} href={getProfileHref(entry.userId)}>
        <Card
          className={`p-6 ${positionConfig.border} ${positionConfig.cardBg} cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all`}
        >
          <div className="flex items-center justify-between mb-5">
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-white text-slate-700 border border-slate-200">
              {positionConfig.badge}
            </span>

            <Icon className="w-6 h-6 text-slate-700" />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${avatar.bg} text-white flex items-center justify-center text-3xl shadow-lg`}
            >
              {avatar.emoji}
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900">
                {entry.nome}
              </p>

              <p className="text-sm text-slate-500">
                {entry.correctCount} acertos únicos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl bg-white p-3 border border-slate-200">
              <p className="text-sm text-slate-500 mb-1">Score</p>

              <p className="text-2xl font-bold text-slate-900">
                {entry.score}
              </p>
            </div>

            <div className="rounded-xl bg-white p-3 border border-slate-200">
              <p className="text-sm text-slate-500 mb-1">Taxa</p>

              <p className="text-2xl font-bold text-slate-900">
                {entry.accuracy.toFixed(0)}%
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-600 space-y-1">
            <p>
              Fácil:{" "}
              <span className="font-semibold">{entry.easyCorrect}</span> •
              Médio:{" "}
              <span className="font-semibold">{entry.mediumCorrect}</span> •
              Difícil:{" "}
              <span className="font-semibold">{entry.hardCorrect}</span>
            </p>

            <p>
              Tempo médio:{" "}
              <span className="font-semibold">
                {formatSeconds(Math.round(entry.avgTimeSeconds))}
              </span>
            </p>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2">
            <UserCircle2 className="w-4 h-4" />
            Ver perfil
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <h1 className="text-2xl font-bold text-slate-900">Ranking</h1>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando ranking...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700">{error}</p>
          </Card>
        ) : (
          <>
            <Card className="p-6 md:p-8 border-amber-200 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <p className="text-sm uppercase tracking-wide text-amber-100 mb-2">
                Competição estratégica
              </p>

              <h2 className="text-3xl font-bold mb-3">
                Ranking por pontuação
              </h2>

              <p className="text-amber-50 leading-relaxed max-w-3xl">
                O ranking considera apenas questões únicas acertadas no período
                escolhido. A pontuação é: <strong>fácil = 2</strong>,{" "}
                <strong>médio = 4</strong> e{" "}
                <strong>difícil = 7</strong>.
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Período do ranking
                  </h3>

                  <p className="text-sm text-slate-500">
                    Escolha o recorte que quer analisar.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PERIOD_OPTIONS.map((option) => (
                    <Button
                      key={option.key}
                      variant={period === option.key ? "default" : "outline"}
                      className="rounded-2xl"
                      onClick={() => setPeriod(option.key)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {myEntry ? (
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                      Sua posição
                    </p>

                    <h3 className="text-3xl font-bold text-slate-900">
                      #{myIndex + 1}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Score:{" "}
                      <span className="font-semibold">{myEntry.score}</span> •{" "}
                      {myEntry.correctCount} acertos únicos •{" "}
                      {myEntry.accuracy.toFixed(0)}% de taxa
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 lg:min-w-[520px]">
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-sm text-slate-500 mb-1">
                        Tempo médio
                      </p>

                      <p className="text-xl font-bold text-slate-900">
                        {formatSeconds(Math.round(myEntry.avgTimeSeconds))}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-sm text-slate-500 mb-1">
                        Última atividade
                      </p>

                      <p className="text-base font-bold text-slate-900">
                        {formatDateTime(myEntry.lastActivityAt)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-sm text-slate-500 mb-1">
                        Próximo acima
                      </p>

                      <p className="text-base font-bold text-slate-900">
                        {nextEntry
                          ? `${nextEntry.score - myEntry.score} pts`
                          : "Topo"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-6 bg-white border-slate-200">
                <p className="text-slate-600">
                  Você ainda não entrou no ranking neste período. Acerte
                  questões para subir.
                </p>
              </Card>
            )}

            {top3.length > 0 ? (
              <div className="grid xl:grid-cols-3 gap-4">
                {top3.map((entry, index) =>
                  renderTopCard(entry, index + 1)
                )}
              </div>
            ) : (
              <Card className="p-8">
                <p className="text-slate-500">
                  Ainda não há pontuação suficiente para montar o ranking neste
                  período.
                </p>
              </Card>
            )}

            <Card className="p-6 bg-white border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />

                <h3 className="text-xl font-bold text-slate-900">
                  Classificação geral
                </h3>
              </div>

              {ranking.length > 0 ? (
                <div className="space-y-3">
                  {ranking.map((entry, index) => {
                    const avatar = getAvatarConfig(entry.avatarKey);
                    const isCurrentUser = entry.userId === user?.id;

                    return (
                      <Link
                        key={entry.userId}
                        href={getProfileHref(entry.userId)}
                      >
                        <div
                          className={`rounded-2xl border p-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all ${
                            isCurrentUser
                              ? "border-blue-200 bg-blue-50"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                            <div className="flex items-center gap-4 min-w-0">
                              <div className="w-10 text-center">
                                <p className="text-xl font-bold text-slate-900">
                                  #{index + 1}
                                </p>
                              </div>

                              <div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatar.bg} text-white flex items-center justify-center text-2xl shadow-md`}
                              >
                                {avatar.emoji}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className="text-lg font-bold text-slate-900 truncate">
                                    {entry.nome}
                                  </p>

                                  {isCurrentUser ? (
                                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                                      Você
                                    </span>
                                  ) : null}

                                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 inline-flex items-center gap-1">
                                    <UserCircle2 className="w-3 h-3" />
                                    Ver perfil
                                  </span>
                                </div>

                                <p className="text-sm text-slate-500">
                                  {entry.correctCount} acertos únicos •{" "}
                                  {entry.totalAttempts} tentativas •{" "}
                                  {entry.accuracy.toFixed(0)}% de taxa
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 xl:min-w-[620px]">
                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="text-xs text-slate-500 mb-1">
                                  Score
                                </p>

                                <p className="text-lg font-bold text-slate-900">
                                  {entry.score}
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="text-xs text-slate-500 mb-1">
                                  Fácil
                                </p>

                                <p className="text-lg font-bold text-slate-900">
                                  {entry.easyCorrect}
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="text-xs text-slate-500 mb-1">
                                  Médio
                                </p>

                                <p className="text-lg font-bold text-slate-900">
                                  {entry.mediumCorrect}
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="text-xs text-slate-500 mb-1">
                                  Difícil
                                </p>

                                <p className="text-lg font-bold text-slate-900">
                                  {entry.hardCorrect}
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <p className="text-xs text-slate-500 mb-1">
                                  Tempo médio
                                </p>

                                <p className="text-lg font-bold text-slate-900">
                                  {formatSeconds(
                                    Math.round(entry.avgTimeSeconds)
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500">
                  Ninguém pontuou ainda nesse período.
                </p>
              )}
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />

                <h3 className="text-xl font-bold text-slate-900">
                  Como esse ranking funciona
                </h3>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    Conta só acerto
                  </p>

                  <p className="text-sm text-slate-600">
                    Só questões acertadas geram pontuação.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    Questões únicas
                  </p>

                  <p className="text-sm text-slate-600">
                    Repetir a mesma questão não multiplica score.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    Dificuldade pesa
                  </p>

                  <p className="text-sm text-slate-600">
                    Fácil vale 2, médio vale 4 e difícil vale 7.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 mb-1">
                    Desempate justo
                  </p>

                  <p className="text-sm text-slate-600">
                    Score, acertos, taxa, tempo médio e atividade recente.
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
