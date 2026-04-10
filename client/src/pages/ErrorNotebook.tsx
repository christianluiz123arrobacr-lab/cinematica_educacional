import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";
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

function formatSeconds(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
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

  const deduplicatedAttempts = useMemo(() => {
    const map = new Map<string, AttemptRow>();

    for (const attempt of attempts) {
      if (!map.has(attempt.question_id)) {
        map.set(attempt.question_id, attempt);
      }
    }

    return Array.from(map.values());
  }, [attempts]);

  const availableSubjects = useMemo(() => {
    return Array.from(
      new Set(
        deduplicatedAttempts
          .map((attempt) => attempt.subject?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [deduplicatedAttempts]);

  const filteredBySubject = useMemo(() => {
    if (subjectFilter === "todas") return deduplicatedAttempts;
    return deduplicatedAttempts.filter(
      (attempt) => (attempt.subject?.trim() || "") === subjectFilter
    );
  }, [deduplicatedAttempts, subjectFilter]);

  const availableConteudos = useMemo(() => {
    return Array.from(
      new Set(
        filteredBySubject
          .map((attempt) => attempt.conteudo?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredBySubject]);

  const filteredByConteudo = useMemo(() => {
    if (conteudoFilter === "todos") return filteredBySubject;
    return filteredBySubject.filter(
      (attempt) => (attempt.conteudo?.trim() || "") === conteudoFilter
    );
  }, [filteredBySubject, conteudoFilter]);

  const availableAssuntos = useMemo(() => {
    return Array.from(
      new Set(
        filteredByConteudo
          .map((attempt) => attempt.assunto?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredByConteudo]);

  const filteredByAssunto = useMemo(() => {
    if (assuntoFilter === "todos") return filteredByConteudo;
    return filteredByConteudo.filter(
      (attempt) => (attempt.assunto?.trim() || "") === assuntoFilter
    );
  }, [filteredByConteudo, assuntoFilter]);

  const availableBancas = useMemo(() => {
    return Array.from(
      new Set(
        filteredByAssunto
          .map((attempt) => attempt.banca?.trim())
          .filter((value): value is string => !!value)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [filteredByAssunto]);

  const finalAttempts = useMemo(() => {
    if (bancaFilter === "todas") return filteredByAssunto;
    return filteredByAssunto.filter(
      (attempt) => (attempt.banca?.trim() || "") === bancaFilter
    );
  }, [filteredByAssunto, bancaFilter]);

  useEffect(() => {
    setConteudoFilter("todos");
    setAssuntoFilter("todos");
    setBancaFilter("todas");
  }, [subjectFilter]);

  useEffect(() => {
    setAssuntoFilter("todos");
    setBancaFilter("todas");
  }, [conteudoFilter]);

  useEffect(() => {
    setBancaFilter("todas");
  }, [assuntoFilter]);

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

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
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
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Questões para revisar
                </h2>
                <span className="text-sm font-semibold text-slate-500">
                  {finalAttempts.length} questão(ões)
                </span>
              </div>

              {finalAttempts.length > 0 ? (
                <div className="space-y-4">
                  {finalAttempts.map((attempt) => (
                    <div
                      key={attempt.question_id}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-2">
                          <p className="font-bold text-slate-900">
                            {attempt.subject ?? "Sem disciplina"} •{" "}
                            {attempt.conteudo ?? "Sem conteúdo"}
                            {attempt.assunto ? ` • ${attempt.assunto}` : ""}
                          </p>

                          <p className="text-sm text-slate-600">
                            {attempt.banca ?? "Sem banca"}
                            {attempt.ano ? ` • ${attempt.ano}` : ""}
                            {attempt.difficulty ? ` • ${attempt.difficulty}` : ""}
                          </p>

                          <p className="text-sm text-red-600 font-semibold">
                            Último erro em: {new Date(attempt.answered_at).toLocaleString("pt-BR")}
                          </p>

                          <p className="text-sm text-slate-500">
                            Tempo gasto: {formatSeconds(attempt.time_spent_seconds)}
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
          </>
        )}
      </section>
    </div>
  );
}
