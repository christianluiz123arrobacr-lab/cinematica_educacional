import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

type ErrorNotebookItem = {
  question_id: string;
  subject: string | null;
  conteudo: string | null;
  assunto: string | null;
  banca: string | null;
  ano: number | null;
  difficulty: string | null;
  last_error_at: string;
  last_time_spent_seconds: number | null;
  total_errors: number;
  max_attempt_number: number;
};

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function buildNotebookItems(attempts: AttemptRow[]): ErrorNotebookItem[] {
  const map = new Map<string, ErrorNotebookItem>();

  for (const attempt of attempts) {
    const existing = map.get(attempt.question_id);

    if (!existing) {
      map.set(attempt.question_id, {
        question_id: attempt.question_id,
        subject: attempt.subject,
        conteudo: attempt.conteudo,
        assunto: attempt.assunto,
        banca: attempt.banca,
        ano: attempt.ano,
        difficulty: attempt.difficulty,
        last_error_at: attempt.answered_at,
        last_time_spent_seconds: attempt.time_spent_seconds,
        total_errors: 1,
        max_attempt_number: attempt.attempt_number ?? 1,
      });
      continue;
    }

    existing.total_errors += 1;

    if ((attempt.attempt_number ?? 1) > existing.max_attempt_number) {
      existing.max_attempt_number = attempt.attempt_number ?? 1;
    }

    if (new Date(attempt.answered_at).getTime() > new Date(existing.last_error_at).getTime()) {
      existing.last_error_at = attempt.answered_at;
      existing.last_time_spent_seconds = attempt.time_spent_seconds;
      existing.subject = attempt.subject;
      existing.conteudo = attempt.conteudo;
      existing.assunto = attempt.assunto;
      existing.banca = attempt.banca;
      existing.ano = attempt.ano;
      existing.difficulty = attempt.difficulty;
    }
  }

  return Array.from(map.values());
}

export default function ErrorNotebook() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [subjectFilter, setSubjectFilter] = useState("todas");
  const [conteudoFilter, setConteudoFilter] = useState("todos");
  const [assuntoFilter, setAssuntoFilter] = useState("todos");
  const [bancaFilter, setBancaFilter] = useState("todas");
  const [difficultyFilter, setDifficultyFilter] = useState("todas");
  const [sortBy, setSortBy] = useState("recentes");

  useEffect(() => {
    async function loadWrongAttempts() {
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
        .eq("is_correct", false)
        .order("answered_at", { ascending: false });

      if (error) {
        console.error("Erro ao buscar caderno de erros:", error);
        setError("Não foi possível carregar o caderno de erros.");
        setAttempts([]);
        setLoading(false);
        return;
      }

      setAttempts((data as AttemptRow[]) ?? []);
      setLoading(false);
    }

    if (!authLoading) {
      loadWrongAttempts();
    }
  }, [user?.id, authLoading]);

  const notebookItems = useMemo(() => buildNotebookItems(attempts), [attempts]);

  const availableSubjects = useMemo(() => {
    return Array.from(
      new Set(
        notebookItems
          .map((item) => item.subject?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [notebookItems]);

  const filteredBySubject = useMemo(() => {
    if (subjectFilter === "todas") return notebookItems;
    return notebookItems.filter(
      (item) => (item.subject?.trim() || "") === subjectFilter
    );
  }, [notebookItems, subjectFilter]);

  const availableConteudos = useMemo(() => {
    return Array.from(
      new Set(
        filteredBySubject
          .map((item) => item.conteudo?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredBySubject]);

  const filteredByConteudo = useMemo(() => {
    if (conteudoFilter === "todos") return filteredBySubject;
    return filteredBySubject.filter(
      (item) => (item.conteudo?.trim() || "") === conteudoFilter
    );
  }, [filteredBySubject, conteudoFilter]);

  const availableAssuntos = useMemo(() => {
    return Array.from(
      new Set(
        filteredByConteudo
          .map((item) => item.assunto?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredByConteudo]);

  const filteredByAssunto = useMemo(() => {
    if (assuntoFilter === "todos") return filteredByConteudo;
    return filteredByConteudo.filter(
      (item) => (item.assunto?.trim() || "") === assuntoFilter
    );
  }, [filteredByConteudo, assuntoFilter]);

  const availableBancas = useMemo(() => {
    return Array.from(
      new Set(
        filteredByAssunto
          .map((item) => item.banca?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredByAssunto]);

  const filteredByBanca = useMemo(() => {
    if (bancaFilter === "todas") return filteredByAssunto;
    return filteredByAssunto.filter(
      (item) => (item.banca?.trim() || "") === bancaFilter
    );
  }, [filteredByAssunto, bancaFilter]);

  const availableDifficulties = useMemo(() => {
    return Array.from(
      new Set(
        filteredByBanca
          .map((item) => item.difficulty?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredByBanca]);

  const filteredItems = useMemo(() => {
    let result = [...filteredByBanca];

    if (difficultyFilter !== "todas") {
      result = result.filter(
        (item) => (item.difficulty?.trim() || "") === difficultyFilter
      );
    }

    if (sortBy === "recentes") {
      result.sort(
        (a, b) =>
          new Date(b.last_error_at).getTime() - new Date(a.last_error_at).getTime()
      );
    } else if (sortBy === "mais_erradas") {
      result.sort(
        (a, b) =>
          b.total_errors - a.total_errors ||
          new Date(b.last_error_at).getTime() - new Date(a.last_error_at).getTime()
      );
    } else if (sortBy === "antigas") {
      result.sort(
        (a, b) =>
          new Date(a.last_error_at).getTime() - new Date(b.last_error_at).getTime()
      );
    }

    return result;
  }, [filteredByBanca, difficultyFilter, sortBy]);

  const recurringErrors = useMemo(() => {
    return filteredItems
      .filter((item) => item.total_errors >= 2)
      .sort(
        (a, b) =>
          b.total_errors - a.total_errors ||
          new Date(b.last_error_at).getTime() - new Date(a.last_error_at).getTime()
      );
  }, [filteredItems]);

  const recentErrors = useMemo(() => {
    return [...filteredItems]
      .sort(
        (a, b) =>
          new Date(b.last_error_at).getTime() - new Date(a.last_error_at).getTime()
      )
      .slice(0, 12);
  }, [filteredItems]);

  useEffect(() => {
    setConteudoFilter("todos");
    setAssuntoFilter("todos");
    setBancaFilter("todas");
    setDifficultyFilter("todas");
  }, [subjectFilter]);

  useEffect(() => {
    setAssuntoFilter("todos");
    setBancaFilter("todas");
    setDifficultyFilter("todas");
  }, [conteudoFilter]);

  useEffect(() => {
    setBancaFilter("todas");
    setDifficultyFilter("todas");
  }, [assuntoFilter]);

  useEffect(() => {
    setDifficultyFilter("todas");
  }, [bancaFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/progress">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Caderno de Erros</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-8">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando caderno de erros...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <p className="text-red-700 font-medium">{error}</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700 font-medium">
              Você precisa estar logado para ver seu caderno de erros.
            </p>
          </Card>
        ) : (
          <>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h2 className="text-xl font-bold text-slate-900">Filtros</h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Disciplina
                  </label>
                  <select
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="todas">Todas</option>
                    {availableSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Conteúdo
                  </label>
                  <select
                    value={conteudoFilter}
                    onChange={(e) => setConteudoFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="todos">Todos</option>
                    {availableConteudos.map((conteudo) => (
                      <option key={conteudo} value={conteudo}>
                        {conteudo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Assunto
                  </label>
                  <select
                    value={assuntoFilter}
                    onChange={(e) => setAssuntoFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="todos">Todos</option>
                    {availableAssuntos.map((assunto) => (
                      <option key={assunto} value={assunto}>
                        {assunto}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Banca
                  </label>
                  <select
                    value={bancaFilter}
                    onChange={(e) => setBancaFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="todas">Todas</option>
                    {availableBancas.map((banca) => (
                      <option key={banca} value={banca}>
                        {banca}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Dificuldade
                  </label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="todas">Todas</option>
                    {availableDifficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Ordenar por
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    <option value="recentes">Mais recentes</option>
                    <option value="mais_erradas">Mais erradas</option>
                    <option value="antigas">Mais antigas</option>
                  </select>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Questões no caderno</p>
                <p className="text-3xl font-bold text-slate-900">{filteredItems.length}</p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Erros recorrentes</p>
                <p className="text-3xl font-bold text-red-600">{recurringErrors.length}</p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500 mb-2">Total de erros no filtro</p>
                <p className="text-3xl font-bold text-orange-600">
                  {filteredItems.reduce((sum, item) => sum + item.total_errors, 0)}
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <RotateCcw className="w-5 h-5 text-red-500" />
                <h2 className="text-xl font-bold text-slate-900">Erros recorrentes</h2>
              </div>

              {recurringErrors.length > 0 ? (
                <div className="space-y-4">
                  {recurringErrors.map((item) => (
                    <div
                      key={item.question_id}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-2">
                          <p className="font-bold text-slate-900">
                            {item.subject ?? "Sem disciplina"} •{" "}
                            {item.conteudo ?? "Sem conteúdo"}
                            {item.assunto ? ` • ${item.assunto}` : ""}
                          </p>

                          <p className="text-sm text-slate-600">
                            {item.banca ?? "Sem banca"}
                            {item.ano ? ` • ${item.ano}` : ""}
                            {item.difficulty ? ` • ${item.difficulty}` : ""}
                          </p>

                          <p className="text-sm font-semibold text-red-700">
                            {item.total_errors} erro(s) nessa questão
                          </p>

                          <p className="text-sm text-red-600 font-semibold">
                            Último erro em: {new Date(item.last_error_at).toLocaleString("pt-BR")}
                          </p>

                          <p className="text-sm text-slate-500">
                            Tempo gasto: {formatSeconds(item.last_time_spent_seconds)}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Link href="/banco-de-questoes">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                              Revisar no banco
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">
                  Nenhum erro recorrente encontrado com os filtros atuais.
                </p>
              )}
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Questões para revisar
                </h2>
                <span className="text-sm font-semibold text-slate-500">
                  {filteredItems.length} questão(ões)
                </span>
              </div>

              {filteredItems.length > 0 ? (
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.question_id}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-2">
                          <p className="font-bold text-slate-900">
                            {item.subject ?? "Sem disciplina"} •{" "}
                            {item.conteudo ?? "Sem conteúdo"}
                            {item.assunto ? ` • ${item.assunto}` : ""}
                          </p>

                          <p className="text-sm text-slate-600">
                            {item.banca ?? "Sem banca"}
                            {item.ano ? ` • ${item.ano}` : ""}
                            {item.difficulty ? ` • ${item.difficulty}` : ""}
                          </p>

                          <p className="text-sm font-semibold text-red-700">
                            {item.total_errors} erro(s) nessa questão
                          </p>

                          <p className="text-sm text-red-600 font-semibold">
                            Último erro em: {new Date(item.last_error_at).toLocaleString("pt-BR")}
                          </p>

                          <p className="text-sm text-slate-500">
                            Tempo gasto: {formatSeconds(item.last_time_spent_seconds)}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Link href="/banco-de-questoes">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                              Revisar no banco
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">
                  Nenhuma questão errada encontrada com os filtros atuais.
                </p>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Erros recentes
              </h2>

              {recentErrors.length > 0 ? (
                <div className="space-y-4">
                  {recentErrors.map((item) => (
                    <div
                      key={item.question_id}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-2">
                          <p className="font-bold text-slate-900">
                            {item.subject ?? "Sem disciplina"} •{" "}
                            {item.conteudo ?? "Sem conteúdo"}
                            {item.assunto ? ` • ${item.assunto}` : ""}
                          </p>

                          <p className="text-sm text-slate-600">
                            {item.banca ?? "Sem banca"}
                            {item.ano ? ` • ${item.ano}` : ""}
                            {item.difficulty ? ` • ${item.difficulty}` : ""}
                          </p>

                          <p className="text-sm text-red-600 font-semibold">
                            Último erro em: {new Date(item.last_error_at).toLocaleString("pt-BR")}
                          </p>
                        </div>

                        <div className="text-sm text-slate-500">
                          {item.total_errors} erro(s)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">
                  Nenhum erro recente encontrado com os filtros atuais.
                </p>
              )}
            </Card>
          </>
        )}
      </section>
    </div>
  );
}
