import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trophy, Target, Timer, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

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

type GroupedStat = {
  label: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

function groupAttempts(
  attempts: AttemptRow[],
  key: (attempt: AttemptRow) => string | null | undefined
): GroupedStat[] {
  const map = new Map<string, { total: number; correct: number; wrong: number }>();

  for (const attempt of attempts) {
    const rawLabel = key(attempt);
    const label = rawLabel?.trim() || "Não informado";

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

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function Progress() {
  const { user, loading: authLoading } = useSupabaseAuth();
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAttempts() {
      if (!user?.id) {
        setAttempts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("user_question_attempts")
        .select("*")
        .eq("user_id", user.id)
        .order("answered_at", { ascending: false });

      if (error) {
        console.error("Erro ao buscar progresso:", error);
        setError("Não foi possível carregar seu progresso.");
        setAttempts([]);
        setLoading(false);
        return;
      }

      setAttempts((data as AttemptRow[]) ?? []);
      setLoading(false);
    }

    if (!authLoading) {
      loadAttempts();
    }
  }, [user?.id, authLoading]);

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
    const total = valid.reduce((sum, a) => sum + (a.time_spent_seconds ?? 0), 0);
    return total / valid.length;
  }, [attempts]);

  const bySubject = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.subject),
    [attempts]
  );

  const byConteudo = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.conteudo),
    [attempts]
  );

  const byAssunto = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.assunto),
    [attempts]
  );

  const byDifficulty = useMemo(
    () => groupAttempts(attempts, (attempt) => attempt.difficulty),
    [attempts]
  );

  const recentAttempts = useMemo(() => attempts.slice(0, 12), [attempts]);

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

  const mostWrongConteudo = useMemo(() => {
    return [...byConteudo].sort((a, b) => b.wrong - a.wrong || b.total - a.total)[0];
  }, [byConteudo]);

  const bestAssunto = useMemo(() => {
    return byAssunto
      .filter((item) => item.total >= 2)
      .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)[0];
  }, [byAssunto]);

  const recommendations = useMemo(() => {
    const recs: string[] = [];

    if (worstSubject) {
      recs.push(
        `Sua disciplina mais fraca no momento é ${worstSubject.label}, com ${worstSubject.accuracy.toFixed(
          0
        )}% de acerto.`
      );
    }

    if (mostWrongConteudo && mostWrongConteudo.wrong > 0) {
      recs.push(
        `O conteúdo com mais erros até agora é ${mostWrongConteudo.label}. Vale revisar esse ponto primeiro.`
      );
    }

    if (bestSubject) {
      recs.push(
        `Seu melhor desempenho está em ${bestSubject.label}. Isso é um ponto forte seu hoje.`
      );
    }

    if (avgTimeSeconds > 0) {
      recs.push(
        `Seu tempo médio por questão está em ${formatSeconds(Math.round(avgTimeSeconds))}.`
      );
    }

    return recs;
  }, [worstSubject, mostWrongConteudo, bestSubject, avgTimeSeconds]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Seu Progresso</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-8">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando progresso...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700 font-medium">{error}</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700 font-medium">
              Você precisa estar logado para ver seu progresso.
            </p>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Respondidas</p>
                <p className="text-3xl font-bold text-slate-900">{totalAnswered}</p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Acertos</p>
                <p className="text-3xl font-bold text-green-600">{totalCorrect}</p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Erros</p>
                <p className="text-3xl font-bold text-red-600">{totalWrong}</p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Taxa de acerto</p>
                <p className="text-3xl font-bold text-blue-600">
                  {accuracy.toFixed(1)}%
                </p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Tempo médio</p>
                <p className="text-3xl font-bold text-purple-600">
                  {formatSeconds(Math.round(avgTimeSeconds))}
                </p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <h2 className="font-bold text-slate-900">Melhor disciplina</h2>
                </div>
                {bestSubject ? (
                  <>
                    <p className="text-lg font-bold text-slate-900">{bestSubject.label}</p>
                    <p className="text-sm text-slate-500">
                      {bestSubject.accuracy.toFixed(0)}% de acerto
                    </p>
                  </>
                ) : (
                  <p className="text-slate-500">Dados insuficientes.</p>
                )}
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <h2 className="font-bold text-slate-900">Disciplina mais fraca</h2>
                </div>
                {worstSubject ? (
                  <>
                    <p className="text-lg font-bold text-slate-900">{worstSubject.label}</p>
                    <p className="text-sm text-slate-500">
                      {worstSubject.accuracy.toFixed(0)}% de acerto
                    </p>
                  </>
                ) : (
                  <p className="text-slate-500">Dados insuficientes.</p>
                )}
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <h2 className="font-bold text-slate-900">Conteúdo mais crítico</h2>
                </div>
                {mostWrongConteudo ? (
                  <>
                    <p className="text-lg font-bold text-slate-900">{mostWrongConteudo.label}</p>
                    <p className="text-sm text-slate-500">
                      {mostWrongConteudo.wrong} erros acumulados
                    </p>
                  </>
                ) : (
                  <p className="text-slate-500">Dados insuficientes.</p>
                )}
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <h2 className="font-bold text-slate-900">Assunto destaque</h2>
                </div>
                {bestAssunto ? (
                  <>
                    <p className="text-lg font-bold text-slate-900">{bestAssunto.label}</p>
                    <p className="text-sm text-slate-500">
                      {bestAssunto.accuracy.toFixed(0)}% de acerto
                    </p>
                  </>
                ) : (
                  <p className="text-slate-500">Dados insuficientes.</p>
                )}
              </Card>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Desempenho por disciplina
                </h2>

                <div className="space-y-4">
                  {bySubject.length > 0 ? (
                    bySubject.map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800">{item.label}</span>
                          <span className="text-sm font-bold text-slate-600">
                            {item.accuracy.toFixed(0)}%
                          </span>
                        </div>
                        <ProgressBar value={item.accuracy} />
                        <div className="text-sm text-slate-500">
                          {item.correct} acertos • {item.wrong} erros • {item.total} tentativas
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">Ainda não há dados por disciplina.</p>
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Desempenho por dificuldade
                </h2>

                <div className="space-y-4">
                  {byDifficulty.length > 0 ? (
                    byDifficulty.map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800 capitalize">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-slate-600">
                            {item.accuracy.toFixed(0)}%
                          </span>
                        </div>
                        <ProgressBar value={item.accuracy} />
                        <div className="text-sm text-slate-500">
                          {item.correct} acertos • {item.wrong} erros • {item.total} tentativas
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">Ainda não há dados por dificuldade.</p>
                  )}
                </div>
              </Card>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Top conteúdos
                </h2>

                <div className="space-y-3">
                  {byConteudo.length > 0 ? (
                    byConteudo.slice(0, 10).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-slate-200 p-4 bg-white"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-800">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-slate-600">
                            {item.accuracy.toFixed(0)}%
                          </span>
                        </div>
                        <ProgressBar value={item.accuracy} />
                        <div className="text-sm text-slate-500 mt-2">
                          {item.correct} acertos • {item.wrong} erros • {item.total} tentativas
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">Ainda não há dados por conteúdo.</p>
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Top assuntos
                </h2>

                <div className="space-y-3">
                  {byAssunto.length > 0 ? (
                    byAssunto.slice(0, 10).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-slate-200 p-4 bg-white"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-800">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-slate-600">
                            {item.accuracy.toFixed(0)}%
                          </span>
                        </div>
                        <ProgressBar value={item.accuracy} />
                        <div className="text-sm text-slate-500 mt-2">
                          {item.correct} acertos • {item.wrong} erros • {item.total} tentativas
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">Ainda não há dados por assunto.</p>
                  )}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Timer className="w-5 h-5 text-indigo-500" />
                <h2 className="text-xl font-bold text-slate-900">Leitura estratégica</h2>
              </div>

              {recommendations.length > 0 ? (
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-indigo-50 border border-indigo-200 p-4 text-slate-700"
                    >
                      {rec}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">
                  Responda mais questões para receber recomendações mais úteis.
                </p>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Últimas tentativas
              </h2>

              {recentAttempts.length > 0 ? (
                <div className="space-y-3">
                  {recentAttempts.map((attempt) => (
                    <div
                      key={attempt.id}
                      className="rounded-xl border border-slate-200 p-4 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">
                          {attempt.subject ?? "Sem disciplina"} •{" "}
                          {attempt.conteudo ?? "Sem conteúdo"}
                          {attempt.assunto ? ` • ${attempt.assunto}` : ""}
                        </p>
                        <p className="text-sm text-slate-500">
                          {attempt.banca ?? "Sem banca"} {attempt.ano ? `• ${attempt.ano}` : ""}
                          {attempt.difficulty ? ` • ${attempt.difficulty}` : ""}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-sm flex-wrap">
                        <span
                          className={`font-bold ${
                            attempt.is_correct ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {attempt.is_correct ? "Acertou" : "Errou"}
                        </span>
                        <span className="text-slate-500">
                          {formatSeconds(attempt.time_spent_seconds)}
                        </span>
                        <span className="text-slate-500">
                          {new Date(attempt.answered_at).toLocaleString("pt-BR")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
         
